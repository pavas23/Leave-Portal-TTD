const express = require("express");
const app = express();
const PORT = 5000;
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));

app.post("/submit",(req,res)=>{

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

    let mailOptions = {
        from:"",
        to:"",
        subject:"PhD leave portal",
        text:`Respected Sir,
            I am ${req.body.name} from ${req.body.batch} batch. Please grant me a leave as ${req.body.reason}. My id number is ${req.body.id} and my branch is ${req.body.branch}`,
    }

    transporter.sendMail(mailOptions,(err,success)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log("Email sent successfully!!");
    })
    res.redirect("http://localhost:3000");
    return;
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
