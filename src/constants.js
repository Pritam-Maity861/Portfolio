// Skills Section Logo's
import htmlLogo from './assets/html.png';
import cssLogo from './assets/css.png';
import javascriptLogo from './assets/javascript.png';
import reactjsLogo from './assets/reactjs.png';
import tailwindcssLogo from './assets/tailwindcss.png';
import bootstrapLogo from './assets/bootstrap.png';
import nodejsLogo from './assets/nodejs.png';
import expressjsLogo from './assets/express.png';
import mysqlLogo from './assets/mysql.png';
import mongodbLogo from './assets/mongodb.png';
import cLogo from './assets/c.png';
import javaLogo from './assets/java.png';
import gitLogo from './assets/git.png';
import githubLogo from './assets/github.png';
import vscodeLogo from './assets/vscode.png';
import postmanLogo from './assets/postman.png';
import postgresql_logo from './assets/postgresql_logo.png';
import mcLogo from './assets/mc.png';
import netlifyLogo from './assets/netlify.png';
import render_logo from './assets/render_logo.png';
import redis_logo from './assets/redis.png'
import vercelLogo from './assets/vercel.png';
import sql_logo from './assets/sql_logo.jpg'
import movie_ticket_booking from '../public/movie-ticket-booking.png'
import prisma_logo from './assets/prisma_logo.jpg';
import typescript_logo from './assets/typescript_logo.png';
import mui_logo from './assets/mui_logo.png';
import shadcn_logo from './assets/shadcn_logo.png';


// Experience Section Logo's


// Education Section Logo's
import collegeLogo from "./assets/college_logo.jpeg"
import SchoolLogo from "./assets/hq720.jpg"

// Project Section Logo's
import BlogApp from "./assets/BlogApp.png"
import CURDAPP from "./assets/CURD app.png"
import food_ordering_app from "./assets/food-ordering-app.png"
import chatapp from "./assets/chat-app.png"



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
      { name: 'MUI', logo: mui_logo },
      { name: 'Shadcn', logo: shadcn_logo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Postgresql', logo: postgresql_logo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'redis', logo: redis_logo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescript_logo },
      { name: 'SQL', logo: sql_logo }
    ],
  },
  {
    title: 'Tools & ORM',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Render', logo: render_logo },
      { name: 'Prisma', logo: prisma_logo },
    ],
  },
];

  export const experiences = [
    {
      
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: collegeLogo,
      school: "Swami Vivekananda Institute of Science & Technology",
      date: "Parsuing",
      grade: "8.2 sgpa average",
      desc: "I have parsuing my BTECH degree  in Computer Science and Engineering from SVIST college under MAKAUT University, Baruipur,West Bangal. Now in college time , I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge.",
      degree: "BTECH in Computer Science and Engineering",
    },
    {
      id: 1,
      img: SchoolLogo,
      school: "Kurpai High School(H.S)",
      date: "2014-2022",
      grade: "76.7% in Secondary and 84% in Higher sceondary",
      desc: "I completed my class 10th and class 12th education from Kurpai High School(H.S), Kurpai,Tamluk, under the WBBSE and WBCHSE board, where I studied Physics, Chemistry, Mathematics, Biology.",
      degree: "WBBSE and WBCHSE",
    },
    
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Movie Ticket Booking System",
      description:
       "A high-performance, full-stack web application designed to streamline the cinema-going experience. This platform provides a seamless end-to-end journey for users—from discovering the latest blockbusters and watching trailers to selecting seats and receiving digital tickets. Simultaneously, it features a powerful administrative suite for theater owners to manage movies, screens, showtimes, and payments in real-time.",
      image: movie_ticket_booking,
      tags: [ "TypeScript", "React JS", "Expressjs","Postgresql","Redis","Prisma","Razorpay","nodejs"],
      github: "https://github.com/Pritam-Maity861/Movie-Ticket-Booking-server",
      webapp: "https://chobighor.vercel.app/",
    },
    {
      id: 1,
      title: "Food Oredring Website",
      description:
       "Food Ordering Website is a full-stack web application where users can browse restaurants, explore food menus, add items to their cart, and place orders with ease. Currently, the platform supports Cash on Delivery (COD) for completing purchases, with a smooth ordering flow and order management system for both users and restaurants.",
      image: food_ordering_app,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "Expressjs","Mongodb"],
      github: "https://github.com/Pritam-Maity861/Food-Ordering-Website",
      webapp: "https://khaddoroshik.netlify.app/",
    },
    {
      id: 2,
      title: "Real-Time Chat App",
      description:
       "Real-Time Chat App – A web-based application that allows users to send and receive messages instantly using WebSockets. It supports user authentication, secure messaging, and real-time communication between multiple users, making it fast and interactive like popular chat platforms.",
      image: chatapp,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "Expressjs","Mongodb"],
      github: "https://github.com/Pritam-Maity861/Blog-App",
      webapp: "https://golpogujob.netlify.app/",
    },
    {
      id: 3,
      title: "Blog Website",
      description:
       "A sleek and responsive Blog App built with React.js that allows users to read, create, and manage blog posts effortlessly. Featuring a modern UI and smooth navigation, the app supports dynamic content rendering, markdown formatting, and real-time updates. Perfect for writers, developers, and anyone looking to share their thoughts with the world.",
      image: BlogApp,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "Expressjs","Mongodb"],
      github: "https://github.com/Pritam-Maity861/Blog-App",
      webapp: "https://github.com/Pritam-Maity861/Blog-App",
    },
    
    {
      id: 4,
      title: "CURD App",
      description:
        "A simple yet powerful CURD (Create, Update, Read, Delete) application built with React.js. The app allows users to manage a list of items, such as tasks, notes, or products, with ease. With an intuitive interface, users can add new entries, edit existing ones, view details, and remove items seamlessly. Ideal for anyone looking to practice or implement basic CRUD operations in a web app.",
      image: CURDAPP,
      tags: ["React JS", "HTML", "CSS", "JavaScript","Expressjs","Mongodb"],
      github: "https://github.com/Pritam-Maity861/CURD-APP",
      webapp: "https://github.com/Pritam-Maity861/CURD-APP",
    },
  ];  