require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const { user } = require("./models/user");
const bcrypt = require("bcrypt"); 
app.use(express.json());
app.use(cors());

const mongoUrl="mongodb+srv://khalidbinwaleed585:Khalid%40007@testcluster.cifsagr.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoUrl, {}).then(()=>{console.log("Connected to the database");}).catch((e)=>console.log(e));

app.post("/login", async(req, res) => {
});

app.post("/signup", async(req, res) => {
    try{
        const body = req.body;
        const hashedPassword = await bcrypt.hash(body.password, 10)

        if(await bcrypt.compare(body.password, hashedPassword)){
            console.log("Success");
        }
        else{
            console.log("Failure");
        }
        await user.create({...body, password: hashedPassword});
        return res.send("ok");
    }catch(e){
        return res.send("error")
    }

});

app.listen(5000, () => {
    console.log("All Systems!");
});
