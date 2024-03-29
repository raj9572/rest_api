require('dotenv').config()
const mongoose = require('mongoose');
const Product = require('./models/product')

const ProductJson = require('./products.json')

const url = process.env.MONGO_URL
mongoose.set('strictQuery', true);
const start = async()=>{
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
             useUnifiedTopology: true
            });
            await Product.deleteMany();
        await Product.create(ProductJson)
        console.log("data saved successfully");

        
    } catch (error) {
        console.log(error);
    }
}

start()
