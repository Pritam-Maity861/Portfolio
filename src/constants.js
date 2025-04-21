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
import pythonLogo from './assets/python.png';
import gitLogo from './assets/git.png';
import githubLogo from './assets/github.png';
import vscodeLogo from './assets/vscode.png';
import postmanLogo from './assets/postman.png';
import mcLogo from './assets/mc.png';
import netlifyLogo from './assets/netlify.png';
import vercelLogo from './assets/vercel.png';

// Experience Section Logo's


// Education Section Logo's
import collegeLogo from "./assets/college_logo.jpeg"
import SchoolLogo from "./assets/hq720.jpg"

// Project Section Logo's
import BlogApp from "./assets/BlogApp.png"
import CURDAPP from "./assets/CURD app.png"


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
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo }
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo }
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
      title: "Blog Website",
      description:
       "A sleek and responsive Blog App built with React.js that allows users to read, create, and manage blog posts effortlessly. Featuring a modern UI and smooth navigation, the app supports dynamic content rendering, markdown formatting, and real-time updates. Perfect for writers, developers, and anyone looking to share their thoughts with the world.",
      image: BlogApp,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "Expressjs","Mongodb"],
      github: "https://github.com/Pritam-Maity861/Blog-App",
      webapp: "",
    },
    
    {
      id: 1,
      title: "CURD App",
      description:
        "A simple yet powerful CURD (Create, Update, Read, Delete) application built with React.js. The app allows users to manage a list of items, such as tasks, notes, or products, with ease. With an intuitive interface, users can add new entries, edit existing ones, view details, and remove items seamlessly. Ideal for anyone looking to practice or implement basic CRUD operations in a web app.",
      image: CURDAPP,
      tags: ["React JS", "HTML", "CSS", "JavaScript","Expressjs","Mongodb"],
      github: "https://github.com/Pritam-Maity861/CURD-APP",
      webapp: "",
    },
  ];  