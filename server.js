require("dotenv").config();

const express = require('express');
const app = express();
const mongoose = require("mongoose")


mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected Successfully"))
.catch((e) => console.log(e));

//use middlewares
app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log(`Server is now running on port ${process.env.PORT}`);
});