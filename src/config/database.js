const mongoose = require('mongoose')

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(
            'mongodb+srv://koushikbajpayee06_db_user:GzmpcrNWU9M2hF6A@socialmedia.qz6yqop.mongodb.net/socialMedia'
        );
        // console.log(`${conn.connection.host}`);
    }catch(err){
        console.error("Database connection failed...")
        console.error(err.message);
    }
};

module.exports= connectDB;
