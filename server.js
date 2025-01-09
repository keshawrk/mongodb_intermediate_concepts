require("dotenv").config();

const express = require('express');
const app = express();
const mongoose = require("mongoose")
const productRoutes = require('./routes/product_routes');
const bookRoutes = require('./routes/book-route')

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected Successfully"))
.catch((e) => console.log(e));

//use middlewares
app.use(express.json());
app.use("/products", productRoutes);
app.use("/reference", bookRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is now running on port ${process.env.PORT}`);
});