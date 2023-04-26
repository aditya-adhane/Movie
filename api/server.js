const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/UserRoutes")
const path = require("path");
const { dirname } = require("path");

const DB='mongodb+srv://aditya:Aditya%402002@cluster0.f4rrk7n.mongodb.net/netflix?retryWrites=true&w=majority'


const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(DB,{
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: false
}).then(()=>{
    console.log("db connected");
}).catch((err) => console.log(err));

app.use("/api/user",userRoutes);

//static files
const PORT=process.env.PORT || 5000 


app.listen(5000,console.log("server started"))