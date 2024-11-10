import express from 'express';
import Mentor from '../Models/Mentor.js';

const router = express.Router();

// POST route to create new mentors
router.post('/mentors', async (req, res) => {
  try {
    const mentorsData = req.body; // Expecting array of mentors
    const savedMentors = await Mentor.insertMany(mentorsData); // Insert all mentor data into the database
    res.status(200).json(savedMentors); // Respond with the saved mentors data
  } catch (err) {
    console.error('Error saving mentors:', err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// GET route to fetch all mentors
router.get('/mentors', async (req, res) => {
  try {
    const mentors = await Mentor.find(); // Fetch all mentors from the database
    res.status(200).json(mentors); // Send the mentors data as the response
  } catch (err) {
    console.error('Error fetching mentors:', err);
    res.status(500).json({ message: 'Server Error' });
  }
});

export default router;
