// Importing necessary modules and models with ES module syntax
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv'; // Import dotenv to handle environment variables

// Configure dotenv
dotenv.config(); // This should be at the top of your file

// Importing routes
import Authroute from './Routes/AuthRoute.js';
import MentorRoute from './Routes/mentorRoute.js';

const app = express();

// Database Connection
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("Database connected successfully"))
    .catch((err) => console.log("Database connection failed", err));

// Starting the Application
const port = 8000;
app.listen(port, () => {
    console.log(`App is running at ${port}`);
});

// Middleware Configuration
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// Routing  
app.use("/api", Authroute);
app.use("/api", MentorRoute);
