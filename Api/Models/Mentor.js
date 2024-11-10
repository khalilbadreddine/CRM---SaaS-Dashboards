import mongoose from 'mongoose';

const lessonSchema = new mongoose.Schema({
  lessonId: { type: String, required: true },
  title: { type: String, required: true },
  briefDescription: { type: String, required: true },
  lessonVideo: { type: String, required: true },
  studentsInvolved: { type: Number, required: true },
});

const courseSchema = new mongoose.Schema({
  courseId: { type: String, required: true },
  title: { type: String, required: true },
  category: { type: String, required: true },
  duration: { type: String, required: true },
  enrollmentNumber: { type: Number, required: true },
  picture: { type: String, required: true },
  description: { type: String, required: true },
  lessons: [lessonSchema],
});


const mentorSchema = new mongoose.Schema({
  mentorId: { type: String, required: true },
  profilePic: { type: String, required: true },
  name: { type: String, required: true },
  expertise: { type: String, required: true },
  reviewsNumber: { type: Number, required: true },
  rating: { type: Number, required: true },
  tasks: [String],
  bio: { type: String, required: true },
  followers: { type: Number, required: true },
  courses: [courseSchema],
});

const Mentor = mongoose.model('Mentor', mentorSchema);

export default Mentor;
