import colors from 'colors';
const mongoose = require('mongoose');

const connectDB = async () =>{
    const conn = await mongoose.connect(process.env.DB_DEVELOPMENT_URI,{ useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex:true } );
    console.log(`MongoDB Connected ${conn.connection.host}`.yellow);
};


module.exports = connectDB;