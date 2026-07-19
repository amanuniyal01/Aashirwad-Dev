import aiImage from "../assets/ai-course.png";
import dsaImage from "../assets/dsa-course.webp";
import nodeImage from "../assets/node-course.webp";
import fSystemImage from "../assets/frontend-system.webp";
import reactImage from "../assets/react-course.webp";
import jsImage from "../assets/js-course.webp";
import crackfInterviewImage from "../assets/frontend-interview.png";

import type {
  BundleData,
  CourseData,
  PartnerCourseDetail,
} from "../Interfaces/CourseDataModal";

export const coursesMockData: CourseData[] = [
  {
    id: 1,
    imageName: aiImage,
    title: "Namaste AI",
    badge: "PREMIUM",
    status: "COMING SOON",
    language: "English",
    rating: null,
    reviews: null,
    description: "Curriculum Launching Soon!",
    countdown: { days: 12, hours: 20, mins: 55, secs: 45 },
    buttonText: "View Details",
    enrolled: false,
    progress: null,
  },
  {
    id: 2,
    imageName: dsaImage,
    title: "Namaste DSA",
    badge: "PREMIUM",
    status: null,
    language: "English",
    rating: 4.9,
    reviews: "10K+ Reviews",
    description:
      "Master Data Structures and Algorithms with Namaste DSA hands-on coding, clear explanations, and real-world problem-solving.",
    countdown: null,
    buttonText: "Enroll Now",
    enrolled: false,
    progress: null,
  },
  {
    id: 3,
    imageName: nodeImage,
    title: "Namaste Node.js",
    badge: "PREMIUM",
    status: null,
    language: "English",
    rating: 4.8,
    reviews: "10K+ Reviews",
    description:
      "From basics to advanced concepts, gain experience in building applications.",
    countdown: null,
    buttonText: "Enroll Now",
    enrolled: false,
    progress: null,
  },
  {
    id: 4,
    imageName: fSystemImage,
    title: "Namaste Frontend System Design",
    badge: "PREMIUM",
    status: null,
    language: "English",
    rating: 4.8,
    reviews: "5K+ Reviews",
    description: "Go from Zero to Hero in Frontend System Design",
    countdown: null,
    buttonText: "Enroll Now",
    enrolled: false,
    progress: null,
  },
  {
    id: 5,
    imageName: reactImage,
    title: "Namaste React",
    badge: "PREMIUM",
    status: null,
    language: "English",
    rating: 4.7,
    reviews: "40K+ Reviews",
    description:
      "Join our Namaste React Webseries to master React.js. Learn from the ground up and build real-world apps with ease.",
    countdown: null,
    buttonText: "Enroll Now",
    enrolled: false,
    progress: null,
  },
  {
    id: 6,
    imageName: jsImage,
    title: "Namaste JavaScript",
    badge: "FREE",
    status: "ENROLLED",
    language: "English",
    rating: 4.8,
    reviews: "50K+ Reviews",
    description:
      "Namaste JavaScript is a pure in-depth JavaScript Course released for Free.",
    countdown: null,
    buttonText: null,
    enrolled: true,
    progress: "80% completed",
  },
  {
    id: 7,
    imageName: crackfInterviewImage,
    title: "Crack Frontend Interview",
    badge: "FREE",
    status: "ENROLLED",
    language: "English",
    rating: 4.8,
    reviews: "50K+ Reviews",
    description:
      "Your comprehensive guide to mastering JavaScript frontend interviews.",
    countdown: null,
    buttonText: null,
    enrolled: true,
    progress: "0% completed",
  },
];

export const bundlesMockData: BundleData[] = [
  {
    id: 1,
    imageName: "bundle_create_own.jpg",
    title: "Create Your Own Bundle",
    badge: null,
    language: null,
    includes: [
      "Namaste Frontend System Design",
      "Namaste React",
      "Namaste DSA",
      "Namaste Node.js",
    ],
    description:
      "Create your own custom course bundle by choosing exactly what you need. Enjoy full flexibility and get exciting discounts as you add more to your bundle. Learn your way, at your pace, for less.",
    buttonText: "Build Your Custom Bundle",
  },
  {
    id: 2,
    imageName: "bundle_mern_stack.jpg",
    title: "MERN Stack Bundle",
    badge: "PREMIUM",
    language: "English",
    includes: ["Namaste Node.JS", "Namaste React"],
    description:
      "Master the most demanded job ready stack in the industry. Learn from basics to advanced concepts of MongoDB, Express, React and Node. Gain hands-on experience and build scalable, high-performance applications.",
    buttonText: "Enroll Now",
  },
  {
    id: 3,
    imageName: "bundle_frontend_master.jpg",
    title: "Frontend Master Bundle",
    badge: "PREMIUM",
    language: "English",
    includes: ["Namaste FSD", "Namaste React"],
    description:
      "Become a PRO frontend developer by mastering React.js and frontend system design. Learn the advanced frontend skills and techniques asked in the interviews for frontend engineers. Build scalable, high-performance applications.",
    buttonText: "Enroll Now",
  },
  {
    id: 4,
    imageName: "bundle_advanced_fullstack.jpg",
    title: "Advanced FullStack Bundle",
    badge: "PREMIUM",
    language: "English",
    includes: [
      "Namaste Node.JS",
      "Namaste React",
      "Namaste Frontend System Design",
    ],
    description:
      "Become a highly skilled full stack developer by mastering the most demanded skills which are React, node and frontend system design. Build scalable, high-performance server-side apps, by mastering the essential skills.",
    buttonText: "Enroll Now",
  },
];

export const partnerCourseDetail: PartnerCourseDetail = {
  instructor: "Gaurav Sen",
  title: "Backend System Design",
  imageName: "backend_system_design.jpg",
  thumbnailText: "System Design Simplified",
  thumbnailSubtext: "Interview Ready",
  badge: "PREMIUM",
  description:
    "An A-Z video course on system design patterns and best practices. This course ranges from basic concepts like routing, load balancing and caching to advanced concepts like concurrency, separation of concerns, and design tradeoffs.",
  features: [
    "310+ Video Lessons",
    "44+ Quizzes",
    "64+ Downloadable Resources",
    "Live Classes",
    "Interview Questions",
    "Continuous Updates",
  ],
  buttonText: "Enroll Now",
};
