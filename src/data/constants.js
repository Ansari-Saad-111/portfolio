import CompanyImg from "../images/Experience/CompanyImg.png";
import MillatLogo from "../images/Education/MillatLogo.png";
import CollegeLogo from "../images/Education/CollegeLogo.jpeg";
import EngClgLogo from "../images/Education/EngClgLogo.png";
import Contact from "../images/Projects/Contact.png";
import Doctor from "../images/Projects/Doctor.png";
import Spyware from "../images/Projects/Spyware.png";
import SimplePortfolio from "../images/Projects/SimplePortfolio.png";
import portfolio from "../images/Projects/portfolio.png";
import Sign from "../images/Projects/Sign.png";

export const Bio = {
  name: "Saad Ansari",
  roles: [
    "Frontend developer",
    "Programmer",
    "IT Engineer",
  ],
  description:
    "I am a dynamic, adaptable professional constantly seeking new challenges. Driven by a passion for learning and dedication to excellence, I tackle each project with enthusiasm and a forward-thinking mindset. Let's connect and make great ideas happen together.",
  github: "https://github.com/Ansari-Saad-111",
  resume: "https://drive.google.com/file/d/19yX8Qko9oKjxrr6HglXAzc8CyFlKSt4-/view?usp=drive_link",
  resume: "https://drive.google.com/file/d/1U3wpjsYXXI-r1KR0642gw6QO3xxyZBc-/view",
  linkedin: "https://www.linkedin.com/in/saad-ansari-0b9277230/",
  insta: "https://www.instagram.com/_saad_111_/",
  twitter: "https://x.com/AnsariSaad111",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "Bootstrap",
        image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },
      {
        name: "React JS",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Java",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      },
      {
        name: "Python",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "C",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "Eclipse",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/eclipse/eclipse-original.svg",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      }, 
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: CompanyImg,
    role: " Intern at Human Resource (Learning and Development)",
    company: "ESDS, Nashik",
    date: "January 19, 2024– February 20, 2024",
    desc: " Led a team to create comprehensive Change Management documentation, authoring a 200-page Word document and developing a MkDocs website published on GitHub. Designed and delivered an engaging presentation to employees. Achievements: Published MkDocs site and delivered a well-received presentation. Check out the project: https://omkarg419.github.io/change-management-documentation",
    skills: [
      "MkDocs",
      "GitHub",
      "Change Management principles",
      "Leadership",
    ],
    doc: "https://media.licdn.com/dms/image/D4D22AQGzSpgFaR4hsQ/feedshare-shrink_800/0/1684079632872?e=1687996800&v=beta&t=i0xWn_k32Oj9SxKfc6rARSbOghXD9Ge6WyEb2p2vvrc",
  },
];

export const education = [
  {
    id: 0,
    img: EngClgLogo,
    name: "Matoshri College of Engineering and Research Centre, Nashik",
    date: "Dec 2021 - June 2025",
    grade: "7.53 CGPA",
    desc: "I am currently pursuing a Bachelor's degree in Information Technology at Matoshri College of Engineering and Research Centre, Nashik. I have completed 6 semesters and have a CGPA of 7.50. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others.",
    degree: "Bachelor in Engineering - BE, Information Technology",
  },
  {
    id: 1,
    img: CollegeLogo,
    name: "Elia Sarwat Junior College, Mumbai",
    date: "June 2020 - Aug 2021",
    grade: "93.17%",
    desc: "I completed my class 12 high school education at Elia Sarwat Junior College, Mumbai.",
    degree: "HSC(XII), Science",
  },
  {
    id: 2,
    img: MillatLogo,
    name: "Millat High School, Mumbai",
    date: "June 2018 - Mar 2019",
    grade: "76.00%",
    desc: "I completed my class 10 education at Millat High School, Mumbai.",
    degree: "SSC(X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "Sign Language Recognition, Translation and Video Generation System",
    description:
      "Worked in a team of four to develop a real-time sign language recognition web application using OpenCV, YOLO and CNN to accurately detect and classify hand gestures. Enabled users to upload and train custom hand sign gestures via webcam, storing them in a database for dynamic model updates. Integrated voice and subtitle to translate recognized signs into spoken and written English. Built a user-friendly frontend with HTML and CSS for gesture capture, training, and live prediction interfaces. Built a data management project to store contact and other information for a long period of time, with easy access. An error-free, reliable, and fast management system.",
    image: Sign,
    tags: [
      "Python",
      "Django",
      "OpenCV",
      "YOLO",
      "SQLite",
      "JavaScript",
      "HTML",
      "CSS"
    ],
    category: "web app",
    github: "https://github.com/Ansari-Saad-111/Sign-Language-Recognition-Translation-and-Video-Generation",
    webapp: "https://github.com/Ansari-Saad-111/Sign-Language-Recognition-Translation-and-Video-Generation",
  },
  {
    id: 1,
    title: "Contact Management System",
    description:
      "Built a data management project to store contact and other information for a long period of time, with easy access. An error-free, reliable, and fast management system.",
    image: Contact,
    tags: [
      "Python",
    ],
    category: "web app",
    github: "https://github.com/Ansari-Saad-111/Contact-management-system",
    webapp: "https://github.com/Ansari-Saad-111/Contact-management-system",
  },
  {
    id: 2,
    title: "Doctors Appointment System",
    description:
      "Designed a website portal for organizing patient information and appointments with doctors, allowing users to easily check or cancel appointments.",
    image: Doctor,
    tags: [
      "HTML",
      "CSS",
      "Python",
      "Flask",
    ],
    category: "web site",
    github: "https://github.com/Ansari-Saad-111/Doctors-Appointment-System",
    webapp: "https://github.com/Ansari-Saad-111/Doctors-Appointment-System",
  }, 
  {
    id: 3,
    title: "Javascript Portfolio",
    description:
      "Portfolio website include a preloader animation, navbar behavior handling, text cycling animations, skill bar progress animations, scroll reveal animations, and a light/dark mode toggle. The codebase consists of an HTML file for structure, a CSS file for styling and animations, a JavaScript file for interactivity, and an additional CSS file for the preloader animation styles. The website is designed with responsive layouts and incorporates various sections showcasing the developer's skills, projects, and contact information.",
    image: portfolio,
    tags: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Javascript",
    ],
    category: "web site",
    github: "https://github.com/Ansari-Saad-111/Javascript-Portfolio",
    webapp: "https://ansari-saad-111.github.io/Javascript-Portfolio/",
  },
  {
    id: 4,
    title: " Spyware Advanced",
    description:
      "Developed a responsive website for Spyware Advanced Computer Centre. It features a carousel showcasing courses, an about section, detailed course offerings with images and descriptions, and contact information. The site uses HTML5, CSS3, and Bootstrap 5 for layout and styling, with some custom animations and interactivity.",
    image: Spyware,
    tags: [
      "HTML5",
      "CSS3",
      "Bootstrap",
    ],
    category: "web site",
    github: "https://github.com/Ansari-Saad-111/Spyware-Advance",
    webapp: "https://ansari-saad-111.github.io/Spyware-Advance/",
  },
  {
    id: 5,
    title: "Simple Portfolio",
    description:
      "Personal simple portfolio website built with HTML, CSS, and Bootstrap, showcasing educational background, skills, services, and contact details with a responsive design.",
    image: SimplePortfolio,
    tags: [
      "HTML",
      "CSS",
      "Bootstrap",
    ],
    category: "web site",
    github: "https://github.com/Ansari-Saad-111/Simple-Portfolio",
    webapp: " https://ansari-saad-111.github.io/Simple-Portfolio/",
  },
];
