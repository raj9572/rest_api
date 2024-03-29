const mongoose = require('mongoose');

const url = process.env.MONGO_URL
mongoose.set('strictQuery', true);
const connectToMongo=()=>{
    mongoose.connect(url, {
         useNewUrlParser: true,
         useUnifiedTopology: true
        }).then(()=>{console.log('database is connected succesfully......')})
        .catch((err)=>{console.log("error in datase",err)})

}

module.exports = connectToMongo