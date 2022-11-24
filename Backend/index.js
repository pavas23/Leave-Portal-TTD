const express = require("express");
const app = express();
const PORT = 5000;
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const Hod = require("../Backend/Models/Hod");
const Phd = require("../Backend/Models/Phd");
const hbs = require("nodemailer-express-handlebars");
const path = require("path");
const cors = require("cors");
const connectToMongo = require("../Backend/db");
connectToMongo();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));

// submit endpoint when user fills the form for leave
app.post("/submit",async (req,res)=>{
    try{

        var id = req.body.id;
        var name = req.body.name;
        var email = req.body.email;
        var branch = req.body.branch;

        let transporter = nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:"pavasgarg2003@gmail.com",
                pass:"fiqtvhqswyhjwhtn"
            },
            tls:{
                rejectUnauthorized:false,
            }
        });

        const handlebarOptions = {
            viewEngine:{
                extName:".handlebars",
                partialsDir:path.resolve("./view"),
                defaultLayout:false,
            },
            viewPath:path.resolve("./view"),
            extName:".handlebars",
        }

        transporter.use('compile',hbs(handlebarOptions));

        let hod = await Hod.findOne({department:branch});
        console.log(hod);
        let hodEmail = hod.email;


        let mailOptions = {
            from:"pavasgarg2003@gmail.com",
            to:hodEmail,
            subject:"PhD leave portal",
            context:{
                title:"Request for leave",
                email:email,
                text:`Respected Sir,
                I am ${name} . Please grant me a leave as ${req.body.reason}. My id number is ${id} and my branch is ${branch}. I want leaves for ${req.body.multipleDate}`,
            },
            template:'index',
        }

        transporter.sendMail(mailOptions,(err,success)=>{
            if(err){
                console.log(err);
            }
            console.log("Email sent successfully!!");
        });

        let phD = await Phd.create({
            name:name,
            department:branch,
            id:id,
            campusId:"42131234",
            phoneNo:1234567890,
            emailId:email,
            leave:false,
            reason:req.body.reason,
            date:req.body.multipleDate,
        });
        res.redirect("http://localhost:3000");

    }catch(error){
        console.log(error);
        res.send("Internal Server Error Occured")
    }
});

// reply endpoint when the hod clicks the button
app.post("/reply",async (req,res)=>{
    var email = req.query.email;
    if(req.body.accept){
        Phd.findOneAndUpdate({emailId:email},{$set:{leave:true}},(err,data)=>{
            if(err){
                console.log(err);
                return;
            }
        });
        res.send("Accepted!!");
    }
    else{
        Phd.findOneAndUpdate({emailId:email},{$set:{leave:false}},(err,data)=>{
            if(err){
                console.log(err);
                return;
            }
        });
        res.send("Rejected");
    }
});

app.get("/",(req,res)=>{
    res.send("Hello world");
});

app.listen(PORT,(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(`Express App started successfully at port number:${PORT}`);
});
