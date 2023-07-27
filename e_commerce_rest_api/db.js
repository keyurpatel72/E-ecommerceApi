const mongoose = require('mongoose');

//db connection

const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGOURL);
      console.log(
        `Connected To Mongodb Database ${mongoose.connection.host}`
      );
    } catch (error) {
      console.log(`Mognodb Database Error ${error}`);
    }
  };
module.exports =connectDB;