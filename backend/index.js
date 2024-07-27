require("dotenv").config();
const express = require("express");

const mongoose = require("mongoose");
const bodyParser=require('body-parser');
const cors=require("cors");



const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());



app.get("/allHoldings",async(req,res)=>{
    let allHoldings = await HoldingsModel.find({});
        res.json(allHoldings);

});
app.get("/allPositions",async(req,res)=>{
    let allPositions = await PositionsModel.find({});
        res.json(allPositions);

});
app.listen(PORT, () => {
  console.log("App started!"); // to start application
  mongoose.connect(url);
  console.log("DbConnected");
});
