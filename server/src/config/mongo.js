import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const DB_HOST = process.env.DB_HOST || "localhost";
const DB_PORT = "27017";
const DB_NAME = process.env.DB_NAME || "qtrello";
const DB_USER = process.env.DB_USER || "user";
const DB_PASSWORD = process.env.DB_PASSWORD || "1234";

const DB_URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`;

const connectDB = async ()=>{
    try {
        await mongoose.connect(DB_URI);
        console.log("Connected to database");
    } catch (error) {
        console.error(error);
    }
}

export default connectDB;
