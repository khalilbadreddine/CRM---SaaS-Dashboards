/* const DataInputPage = () => {

  const predefinedMentors = [
    {
      mentorId: "1",
      profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "John Doe",
      expertise: "Web Development",
      reviewsNumber: 120,
      rating: 4.5,
      tasks: ["Build Web Pages", "Learn React"],
      bio: "Experienced Full Stack Developer with a focus on JavaScript.",
      followers: 1500,
      courses: [
        {
          courseId: "101",
          title: "React for Beginners",
          category: "Web Development",
          duration: "6 weeks",
          enrollmentNumber: 300,
          picture: "https://via.placeholder.com/150",
          description: "Learn the basics of React and build interactive UIs.",
          lessons: [
            {
              lessonId: "101-1",
              title: "Introduction to React",
              briefDescription: "Learn the fundamentals of React.",
              lessonVideo: "https://www.youtube.com/watch?v=0fKg7e37bQE",
              studentsInvolved: 150,
            },
            {
              lessonId: "101-2",
              title: "State and Props",
              briefDescription: "Learn about state management and props.",
              lessonVideo: "https://www.youtube.com/watch?v=6s2rOa6N9hY",
              studentsInvolved: 180,
            },
          ],
        },
      ],
    },
    {
      mentorId: "2",
      profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
      name: "Alice Smith",
      expertise: "Data Science",
      reviewsNumber: 85,
      rating: 4.8,
      tasks: ["Analyze Data", "Teach Machine Learning"],
      bio: "Passionate Data Scientist with experience in Python and R.",
      followers: 1100,
      courses: [
        {
          courseId: "102",
          title: "Data Science with Python",
          category: "Data Science",
          duration: "8 weeks",
          enrollmentNumber: 200,
          picture: "https://via.placeholder.com/150",
          description: "A comprehensive guide to Data Science using Python.",
          lessons: [
            {
              lessonId: "102-1",
              title: "Introduction to Python",
              briefDescription: "Learn the basics of Python for data science.",
              lessonVideo: "https://www.youtube.com/watch?v=rfscVS0vtbw",
              studentsInvolved: 120,
            },
            {
              lessonId: "102-2",
              title: "Data Manipulation with Pandas",
              briefDescription:
                "Learn to manipulate data using Pandas library.",
              lessonVideo: "https://www.youtube.com/watch?v=vmEHCJofslg",
              studentsInvolved: 160,
            },
          ],
        },
      ],
    },
    {
      mentorId: "3",
      profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
      name: "Chris Johnson",
      expertise: "AI and Machine Learning",
      reviewsNumber: 210,
      rating: 4.7,
      tasks: ["Teach AI Concepts", "Build ML Models"],
      bio: "Machine Learning Engineer passionate about AI research.",
      followers: 1800,
      courses: [
        {
          courseId: "103",
          title: "Machine Learning Essentials",
          category: "AI and ML",
          duration: "10 weeks",
          enrollmentNumber: 350,
          picture: "https://via.placeholder.com/150",
          description:
            "Learn core Machine Learning algorithms and their applications.",
          lessons: [
            {
              lessonId: "103-1",
              title: "Supervised Learning",
              briefDescription:
                "Learn the basics of supervised learning techniques.",
              lessonVideo: "https://www.youtube.com/watch?v=9yl6tZ5u7zw",
              studentsInvolved: 180,
            },
            {
              lessonId: "103-2",
              title: "Unsupervised Learning",
              briefDescription: "Understand unsupervised learning models.",
              lessonVideo: "https://www.youtube.com/watch?v=eyko_moZYwI",
              studentsInvolved: 220,
            },
          ],
        },
      ],
    },
    {
      mentorId: "4",
      profilePic: "https://randomuser.me/api/portraits/men/4.jpg",
      name: "David Lee",
      expertise: "Mobile Development",
      reviewsNumber: 95,
      rating: 4.6,
      tasks: ["Develop Mobile Apps", "Learn Flutter"],
      bio: "Mobile developer with a passion for building apps using Flutter.",
      followers: 1300,
      courses: [
        {
          courseId: "104",
          title: "Flutter for Beginners",
          category: "Mobile Development",
          duration: "7 weeks",
          enrollmentNumber: 250,
          picture: "https://via.placeholder.com/150",
          description: "Learn mobile app development using Flutter framework.",
          lessons: [
            {
              lessonId: "104-1",
              title: "Getting Started with Flutter",
              briefDescription:
                "Setup your environment and start building with Flutter.",
              lessonVideo: "https://www.youtube.com/watch?v=1gDhl4leEzA",
              studentsInvolved: 140,
            },
            {
              lessonId: "104-2",
              title: "Building Layouts in Flutter",
              briefDescription: "Learn to design and build layouts in Flutter.",
              lessonVideo: "https://www.youtube.com/watch?v=fq4N0hg8w5Y",
              studentsInvolved: 200,
            },
          ],
        },
      ],
    },
    {
      mentorId: "5",
      profilePic: "https://randomuser.me/api/portraits/women/5.jpg",
      name: "Emma Davis",
      expertise: "Cybersecurity",
      reviewsNumber: 150,
      rating: 4.9,
      tasks: ["Teach Security Protocols", "Monitor Security Threats"],
      bio: "Cybersecurity expert with extensive knowledge in penetration testing.",
      followers: 2000,
      courses: [
        {
          courseId: "105",
          title: "Introduction to Cybersecurity",
          category: "Security",
          duration: "6 weeks",
          enrollmentNumber: 180,
          picture: "https://via.placeholder.com/150",
          description:
            "Learn the basics of cybersecurity and how to protect systems.",
          lessons: [
            {
              lessonId: "105-1",
              title: "Cybersecurity Fundamentals",
              briefDescription: "Learn the key concepts of cybersecurity.",
              lessonVideo: "https://www.youtube.com/watch?v=sVhC9uYOq78",
              studentsInvolved: 120,
            },
            {
              lessonId: "105-2",
              title: "Penetration Testing",
              briefDescription:
                "Introduction to penetration testing tools and techniques.",
              lessonVideo: "https://www.youtube.com/watch?v=0cQ4J4ss9eM",
              studentsInvolved: 160,
            },
          ],
        },
      ],
    },
  ];

  // Function to submit all predefined mentors data to the backend
  const submitAllData = () => {
    fetch("http://localhost:8000/api/mentors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(predefinedMentors),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Submitted Data:", data);
      })
      .catch((error) => {
        console.error("Error submitting data:", error);
      });
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-xl font-semibold mb-4">
        Submit Predefined Mentors Data
      </h2>
      <button
        onClick={submitAllData}
        className="bg-blue-500 text-white px-6 py-2 rounded"
      >
        Submit All Data
      </button>
    </div>
  );
};

export default DataInputPage;
 */
const DataInputPage = () => {
  const predefinedMentors = [
    {
      mentorId: "10",
      profilePic: "https://randomuser.me/api/portraits/men/10.jpg",
      name: "James Wilson",
      expertise: "Cloud Computing",
      reviewsNumber: 80,
      rating: 4.4,
      tasks: ["Teach Cloud Infrastructure", "AWS Basics"],
      bio: "Cloud Computing Expert with experience in AWS and Azure.",
      followers: 1750,
      courses: [
        {
          courseId: "205",
          title: "AWS Fundamentals",
          category: "Cloud Computing",
          duration: "5 weeks",
          enrollmentNumber: 280,
          picture: "https://via.placeholder.com/200/8A2BE2",
          description: "Learn the basics of AWS services and infrastructure.",
          lessons: [
            {
              lessonId: "205-1",
              title: "AWS Introduction",
              briefDescription: "An introduction to AWS and its services.",
              lessonVideo: "https://www.youtube.com/watch?v=ulprqHHWlng",
              studentsInvolved: 150,
            },
            {
              lessonId: "205-2",
              title: "AWS EC2 Basics",
              briefDescription: "Getting started with EC2 instances.",
              lessonVideo: "https://www.youtube.com/watch?v=Ia-UEYYR44s",
              studentsInvolved: 200,
            },
          ],
        },
      ],
    },
    {
      mentorId: "11",
      profilePic: "https://randomuser.me/api/portraits/women/11.jpg",
      name: "Rachel Evans",
      expertise: "Content Writing",
      reviewsNumber: 70,
      rating: 4.5,
      tasks: ["Teach Writing Techniques", "Blogging Basics"],
      bio: "Content Writer with a flair for storytelling and SEO.",
      followers: 1450,
      courses: [
        {
          courseId: "206",
          title: "Content Writing 101",
          category: "Writing",
          duration: "4 weeks",
          enrollmentNumber: 230,
          picture: "https://via.placeholder.com/200/DC143C",
          description: "Learn the essentials of writing engaging content.",
          lessons: [
            {
              lessonId: "206-1",
              title: "Introduction to Content Writing",
              briefDescription: "Basics of content writing and its importance.",
              lessonVideo: "https://www.youtube.com/watch?v=JfT8y-LkpIU",
              studentsInvolved: 120,
            },
            {
              lessonId: "206-2",
              title: "SEO Writing Basics",
              briefDescription: "Learn the basics of SEO for content.",
              lessonVideo: "https://www.youtube.com/watch?v=hF515-0Tduk",
              studentsInvolved: 170,
            },
          ],
        },
      ],
    },
    {
      mentorId: "12",
      profilePic: "https://randomuser.me/api/portraits/men/12.jpg",
      name: "Mark Richards",
      expertise: "Networking",
      reviewsNumber: 120,
      rating: 4.7,
      tasks: ["Teach Networking", "Network Security"],
      bio: "Network Engineer with expertise in network security.",
      followers: 1600,
      courses: [
        {
          courseId: "207",
          title: "Networking Basics",
          category: "Networking",
          duration: "6 weeks",
          enrollmentNumber: 260,
          picture: "https://via.placeholder.com/200/00CED1",
          description: "A course on the fundamentals of networking.",
          lessons: [
            {
              lessonId: "207-1",
              title: "Introduction to Networking",
              briefDescription: "Learn the basics of computer networking.",
              lessonVideo: "https://www.youtube.com/watch?v=3QhU9jd03a0",
              studentsInvolved: 150,
            },
            {
              lessonId: "207-2",
              title: "Network Security Fundamentals",
              briefDescription: "Basics of network security principles.",
              lessonVideo: "https://www.youtube.com/watch?v=EkNoxB3YfS4",
              studentsInvolved: 190,
            },
          ],
        },
      ],
    },
    {
      mentorId: "13",
      profilePic: "https://randomuser.me/api/portraits/women/13.jpg",
      name: "Sophia Turner",
      expertise: "UI/UX Design",
      reviewsNumber: 115,
      rating: 4.8,
      tasks: ["Design User Interfaces", "User Research"],
      bio: "UI/UX Designer with a focus on creating intuitive designs.",
      followers: 2100,
      courses: [
        {
          courseId: "208",
          title: "UI/UX Basics",
          category: "Design",
          duration: "5 weeks",
          enrollmentNumber: 240,
          picture: "https://via.placeholder.com/200/4682B4",
          description:
            "Learn the principles of user interface and experience design.",
          lessons: [
            {
              lessonId: "208-1",
              title: "UI Principles",
              briefDescription: "Introduction to user interface design.",
              lessonVideo: "https://www.youtube.com/watch?v=Vp9L4YlJJ4E",
              studentsInvolved: 130,
            },
            {
              lessonId: "208-2",
              title: "User Experience Research",
              briefDescription: "Understanding user needs and behavior.",
              lessonVideo: "https://www.youtube.com/watch?v=9zEHoPfoQxs",
              studentsInvolved: 180,
            },
          ],
        },
      ],
    },
    {
      mentorId: "14",
      profilePic: "https://randomuser.me/api/portraits/men/14.jpg",
      name: "David Wilson",
      expertise: "Project Management",
      reviewsNumber: 140,
      rating: 4.6,
      tasks: ["Teach Project Management", "Agile Principles"],
      bio: "Project Manager with experience in Agile methodologies.",
      followers: 1950,
      courses: [
        {
          courseId: "209",
          title: "Project Management Essentials",
          category: "Management",
          duration: "6 weeks",
          enrollmentNumber: 300,
          picture: "https://via.placeholder.com/200/32CD32",
          description: "Learn the basics of managing projects effectively.",
          lessons: [
            {
              lessonId: "209-1",
              title: "Project Planning",
              briefDescription: "Introduction to project planning techniques.",
              lessonVideo: "https://www.youtube.com/watch?v=EjkoY7f3tyg",
              studentsInvolved: 140,
            },
            {
              lessonId: "209-2",
              title: "Agile Project Management",
              briefDescription:
                "Learn Agile principles for project management.",
              lessonVideo: "https://www.youtube.com/watch?v=XU0llRltyFM",
              studentsInvolved: 200,
            },
          ],
        },
      ],
    },
    {
      mentorId: "15",
      profilePic: "https://randomuser.me/api/portraits/women/15.jpg",
      name: "Grace Lee",
      expertise: "DevOps",
      reviewsNumber: 85,
      rating: 4.5,
      tasks: ["Teach DevOps Practices", "CI/CD Pipelines"],
      bio: "DevOps Engineer focused on automating deployment processes.",
      followers: 1500,
      courses: [
        {
          courseId: "210",
          title: "DevOps Fundamentals",
          category: "DevOps",
          duration: "5 weeks",
          enrollmentNumber: 280,
          picture: "https://via.placeholder.com/200/FF4500",
          description: "An introductory course on DevOps principles.",
          lessons: [
            {
              lessonId: "210-1",
              title: "Understanding DevOps",
              briefDescription: "Learn the basics of DevOps culture.",
              lessonVideo: "https://www.youtube.com/watch?v=jdmqfTVk6w4",
              studentsInvolved: 130,
            },
            {
              lessonId: "210-2",
              title: "CI/CD Basics",
              briefDescription:
                "Introduction to continuous integration and deployment.",
              lessonVideo: "https://www.youtube.com/watch?v=Ujj6tmcG4DA",
              studentsInvolved: 170,
            },
          ],
        },
      ],
    },
  ];

  const submitAllData = () => {
    fetch("http://localhost:8000/api/mentors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(predefinedMentors),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Submitted Data:", data);
      })
      .catch((error) => {
        console.error("Error submitting data:", error);
      });
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-xl font-semibold mb-4">
        Submit Predefined Mentors Data
      </h2>
      <button
        onClick={submitAllData}
        className="bg-blue-500 text-white px-6 py-2 rounded"
      >
        Submit All Data
      </button>
    </div>
  );
};

export default DataInputPage;
