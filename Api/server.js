// Importing necessary modules and models with ES module syntax
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import Authroute from './Routes/AuthRoute.js';
import MentorRoute from './Routes/mentorRoute.js'; // Import mentor route


const app = express();

// Database Connection
// Replace <username>, <password>, <cluster>, and <dbname> with your MongoDB Atlas credentials.
mongoose.connect("")
    .then(() => console.log("Database connected successfully"))
    .catch((err) => console.log("Database connection failed", err));

// Starting the Application
const port = 8000;
app.listen(port, () => {
    console.log(`App is running at ${port}`);
});

// Middleware Configuration
// Body-parser to parse incoming request bodies as JSON
app.use(bodyParser.json());
// Cookie-parser for handling cookies
app.use(cookieParser());
// CORS for enabling Cross-Origin Resource Sharing
app.use(cors());

// Routing  
// Mounting authentication-related routes under the '/api' endpoint
app.use("/api", Authroute);
app.use("/api", MentorRoute); // Mounting mentor-related routes under the '/api' endpoint
