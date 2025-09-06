import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env file
import userRoute from './routes/user.route.js';
import companyRoute from './routes/company.route.js';
import jobRoute from './routes/job.route.js';
import applicationRoute from './routes/application.route.js';


const app = express();

import mongoose from "mongoose";

// MongoDB connection using environment variable
const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/jobPortal";

mongoose
  .connect(mongoURI) // connect to MongoDB
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// app.get("/home", (req, res) => {
//     return res.status(200).json({
//         message: "Welcome to the Job Portal API",
//         success:true
//     });
// });

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = {
    origin: 'http://localhost:5173', // Adjust this to your frontend URL
    credentials: true, // Allow cookies to be sent
};

app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;

//apis
app.use('/api/v1/user', userRoute);
app.use('/api/v1/company', companyRoute);
app.use('/api/v1/job', jobRoute);
app.use('/api/v1/application', applicationRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});