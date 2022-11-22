const express = require("express");
const app = express();
const PORT = 5000;
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const Hod = require("../Backend/Models/Hod");
const Phd = require("../Backend/Models/Phd");
const hbs = require("nodemailer-express-handlebars");
const path = require("path");

app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));

app.post("/submit",async (req,res)=>{

    let transporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:"",
            pass:""
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
    
    // let hod = await Hod.findOne({department:req.body.branch});
    // let hodEmail = hod.email;

    let mailOptions = {
        from:"",
        to:"",
        subject:"PhD leave portal",
        context:{
            title:"Request for leave",
            id:req.body.id,
            text:`Respected Sir,
            I am ${req.body.name} from ${req.body.batch} batch. Please grant me a leave as ${req.body.reason}. My id number is ${req.body.id} and my branch is ${req.body.branch}`,
        },
        template:'index',
    }

    transporter.sendMail(mailOptions,(err,success)=>{
        if(err){
            console.log(err);
        }
        console.log("Email sent successfully!!");
    })
    res.redirect("http://localhost:3000");
});

app.post("/reply:idPhd",async (req,res)=>{
    let phd = await Phd.findOne({id:idPhd});
    if(req.body.accept){
        phd.leave = true
    }
    else{
        phd.leave = false
    }
    res.send("response submitted");
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
