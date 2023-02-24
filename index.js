// import express
// import express from "express";
// import cors
// import cors from "cors";
 
// const bodyParser = require('body-parser');

// import routes
// import Router from "./routes/routes.js";
  
// init express
// const app = express();
  
// use express json
// app.use(express.json());
  
// use cors
// app.use(cors());
 
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
  
// use router
// app.use(Router);
  
// app.listen(5000, () => console.log('Server running at http://localhost:5000'));

const express = require("express");

const cors = require("cors");

const bodyParser = require("body-parser");

const router = require("./routes/routes.js");

const app = express();


// app.set("port", process.env.PORT || 5000);

app.use(express.json());

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);
app.listen(5000, () => console.log('Server running at http://localhost:5000'));
// app.get('/', (req, res) => {
//     res.json({msg: 'Sup Cheese'});
// });

// app.listen(app.get("port"), () => {
//     console.log(`Listening on this port: ${app.get("port")}`);
//     console.log(`Press Ctrl+C to stop server.`);
// });

// const router = express.Router();

// router.get('/', (req, res) => {
//     res.sendFile('Welcome');
// });

// router.get('/products', (req, res) => {
//     res.send('Products Displayed');
// });
