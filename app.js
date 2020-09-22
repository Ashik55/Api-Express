const mysql = require("mysql");
const express = require("express");
const app = express();
var bodyParser = require("body-parser");
var nodemailer = require("nodemailer");


const fileUpload = require("express-fileupload");
const cors = require("cors");
const morgan = require("morgan");
const _ = require("lodash");

var multer, storage, path, crypto;
multer = require("multer");
path = require("path");
crypto = require("crypto");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: "application/*+json" }));

// //Connect Database property here
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'ff',
//     password: 'ff',
//     database: 'ff'
// });
// connection.connect((err) => {
//   if (err) throw err;
//   console.log("Connected!");
// });

// // enable files upload
// app.use(
//   fileUpload({
//     createParentPath: true,
//   })
// );



//add other middleware
app.use(cors());
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(express.static("uploads"));
app.listen(3001);


// To run Locallly type : npm run start      --- in terminal

//Connect Router File
const userRoute = require("./routes/user");
app.use("/", userRoute);

app.get('/test', function(req ,res){
    res.send('ashik');
});



// //File Upload
// app.post('/uploadx', async(req, res) => {
//     try {
//         if (!req.files) {
//             res.send({
//                 status: false,
//                 message: 'No file uploaded'
//             });
//         } else {
//             //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
//             let avatar = req.files.avatar;

//             //Use the mv() method to place the file in upload directory (i.e. "uploads")
//             avatar.mv('./uploads/' + avatar.name);

//             //send response
//             res.send({
//                 url: "https://api.dd.xyz/" + avatar.name

//             });
//         }
//     } catch (err) {
//         res.status(500).send(err);
//     }
// });
