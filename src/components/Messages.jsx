import { useEffect, useState } from "react";
import Header from "./Dashboard-Components/Header";

const fakeMentorMessages = {
  1: [
    {
      id: 1,
      sender: "mentor",
      text: "Hello! How can I assist you with Python?",
    },
    { id: 2, sender: "user", text: "Can you help me with loops in Python?" },
    {
      id: 3,
      sender: "mentor",
      text: "Of course! Let's start with `for` loops.",
    },
  ],
  2: [
    { id: 1, sender: "mentor", text: "Hi there! Ready to dive into React?" },
    { id: 2, sender: "user", text: "Yes! I need help with components." },
    {
      id: 3,
      sender: "mentor",
      text: "Awesome. Components are the building blocks of React.",
    },
  ],
  3: [
    {
      id: 1,
      sender: "mentor",
      text: "Good day! How can I help you with Data Science?",
    },
    {
      id: 2,
      sender: "user",
      text: "What's the best way to start with data analysis?",
    },
    {
      id: 3,
      sender: "mentor",
      text: "Start by learning pandas and basic data manipulation.",
    },
  ],
  4: [
    { id: 1, sender: "mentor", text: "Hello! Need help with HTML and CSS?" },
    {
      id: 2,
      sender: "user",
      text: "Yes, I want to make my website responsive.",
    },
    {
      id: 3,
      sender: "mentor",
      text: "Start with flexible grids and media queries.",
    },
  ],
  5: [
    { id: 1, sender: "mentor", text: "Hey! Ready to work on JavaScript?" },
    {
      id: 2,
      sender: "user",
      text: "I need help understanding `this` in JavaScript.",
    },
    {
      id: 3,
      sender: "mentor",
      text: "`this` refers to the object in which the function is called.",
    },
  ],
  6: [
    { id: 1, sender: "mentor", text: "Hi! Need help with Machine Learning?" },
    {
      id: 2,
      sender: "user",
      text: "What is the difference between supervised and unsupervised learning?",
    },
    {
      id: 3,
      sender: "mentor",
      text: "Supervised learning uses labeled data, unsupervised doesn't.",
    },
  ],
  7: [
    { id: 1, sender: "mentor", text: "Hello! Let's work on SQL queries." },
    { id: 2, sender: "user", text: "Can you show me how to join tables?" },
    {
      id: 3,
      sender: "mentor",
      text: "Sure! The `JOIN` clause combines rows from two tables.",
    },
  ],
  8: [
    {
      id: 1,
      sender: "mentor",
      text: "Hi! Do you need help with UI/UX design?",
    },
    {
      id: 2,
      sender: "user",
      text: "Yes, I want to improve user flow on my website.",
    },
    {
      id: 3,
      sender: "mentor",
      text: "Great! Let's start by mapping out the user journey.",
    },
  ],
  9: [
    {
      id: 1,
      sender: "mentor",
      text: "Hello! Let's discuss backend development.",
    },
    { id: 2, sender: "user", text: "How do I set up an Express server?" },
    {
      id: 3,
      sender: "mentor",
      text: "You can initialize it with `express()` and define routes.",
    },
  ],
  10: [
    {
      id: 1,
      sender: "mentor",
      text: "Hey! I can help you with Cloud Computing.",
    },
    { id: 2, sender: "user", text: "How do I start with AWS?" },
    {
      id: 3,
      sender: "mentor",
      text: "Begin with EC2 and S3 to get familiar with AWS basics.",
    },
  ],
  11: [
    { id: 1, sender: "mentor", text: "Hi! Ready to improve your Java skills?" },
    { id: 2, sender: "user", text: "Yes, how do I handle exceptions in Java?" },
    {
      id: 3,
      sender: "mentor",
      text: "Use `try-catch` blocks to handle exceptions effectively.",
    },
  ],
  12: [
    { id: 1, sender: "mentor", text: "Hello! Let's work on CSS animations." },
    { id: 2, sender: "user", text: "How do I animate text color?" },
    {
      id: 3,
      sender: "mentor",
      text: "Use `@keyframes` to define the color transition steps.",
    },
  ],
  13: [
    { id: 1, sender: "mentor", text: "Hey! Need help with algorithms?" },
    {
      id: 2,
      sender: "user",
      text: "What's the best way to learn sorting algorithms?",
    },
    {
      id: 3,
      sender: "mentor",
      text: "Start with bubble sort, then move to quicksort.",
    },
  ],
  14: [
    {
      id: 1,
      sender: "mentor",
      text: "Hi! How can I help you with cybersecurity?",
    },
    { id: 2, sender: "user", text: "How do I secure my web application?" },
    {
      id: 3,
      sender: "mentor",
      text: "Use HTTPS, and ensure strong password hashing.",
    },
  ],
  15: [
    {
      id: 1,
      sender: "mentor",
      text: "Hello! Let’s talk about Agile practices.",
    },
    { id: 2, sender: "user", text: "How does Scrum differ from Kanban?" },
    {
      id: 3,
      sender: "mentor",
      text: "Scrum is iterative with sprints, while Kanban is continuous.",
    },
  ],
};

const MessagePage = () => {
  const [mentors, setMentors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMentorId, setSelectedMentorId] = useState(null);
  const [messages, setMessages] = useState([]);

  // Fetch mentors data
  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/mentors");
        if (!response.ok) {
          throw new Error("Failed to fetch mentors");
        }
        const data = await response.json();
        setMentors(data);
      } catch (error) {
        console.error("Error fetching mentors", error);
      }
    };

    fetchMentors();
  }, []);

  // Handle selecting a mentor and updating messages
  const handleMentorClick = (mentorId) => {
    setSelectedMentorId(mentorId);
    setMessages(fakeMentorMessages[mentorId] || []); // Get messages for the selected mentor
  };

  // Filtered mentors based on search term
  const filteredMentors = mentors.filter((mentor) =>
    mentor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col w-full space-y-4 rounded-lg shadow-lg p-4">
      {/* Header */}
      <div className="bg-[#EBEDF7] h-auto p-4 rounded-lg shadow-md w-full flex items-center justify-center text-white font-bold">
        <Header />
      </div>

      {/* Main Content */}
      <div className="flex flex-1 gap-4 rounded-lg shadow-lg p-4 bg-[#EBEDF7]">
        {/* Sidebar for Contacts */}
        <div
          className="w-1/4 bg-white p-4 rounded-lg border-gray-300 overflow-y-auto"
          style={{ maxHeight: "500px" }}
        >
          <input
            type="text"
            placeholder="Search Name"
            className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <ul>
            {filteredMentors.map((mentor) => (
              <li
                key={mentor.mentorId}
                onClick={() => handleMentorClick(mentor.mentorId)}
                className="flex items-center py-3 px-2 mb-2 hover:bg-gray-200 rounded-lg cursor-pointer"
              >
                <img
                  src={mentor.profilePic}
                  alt={mentor.name}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <p className="font-semibold">{mentor.name}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Chat Window */}
        <div className="flex-1 flex flex-col rounded-lg bg-white">
          {/* Chat Header */}
          <div className="p-4 border-b border-gray-300 flex items-center justify-between">
            {selectedMentorId && (
              <div className="flex items-center space-x-3">
                <img
                  src={
                    mentors.find(
                      (mentor) => mentor.mentorId === selectedMentorId
                    )?.profilePic || "https://via.placeholder.com/40"
                  }
                  alt="Profile"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-semibold">
                    {mentors.find(
                      (mentor) => mentor.mentorId === selectedMentorId
                    )?.name || "Select a mentor"}
                  </p>
                  <p className="text-sm text-green-500">Online</p>
                </div>
              </div>
            )}
            <div className="space-x-4">
              <button className="text-gray-600">📞</button>
              <button className="text-gray-600">📹</button>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.length > 0 ? (
              messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : ""
                  }`}
                >
                  <p
                    className={`${
                      message.sender === "user"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200"
                    } p-3 rounded-lg max-w-xs mb-2`}
                  >
                    {message.text}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">
                Select a mentor to view messages
              </p>
            )}
          </div>

          {/* Input Field */}
          <div className="p-4 border-t border-gray-300 flex items-center space-x-3">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none"
            />
            <button className="p-2 bg-blue-500 text-white rounded-full">
              ➤
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagePage;
