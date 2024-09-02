/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello.",
  title2: "Danish",
  logo_name: "m.danish()",
  nickname: "DK Pasha",
  full_name: "Moh Danish",
  subTitle:
"Full Stack Developer, adept at designing efficient algorithms, always learning.",
  resumeLink:
    "https://drive.google.com/file/d/1MBOSAEBUCGKDxdlUzVLC-lpYgCqukZLY/view?usp=sharing",
  mail: "mailto:mohmdanish0123@gmail.com",
};


const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/Danish1507",
  linkedin: "https://www.linkedin.com/in/moh-danish-988330243/",
  gmail: "mohmdanish0123@gmail.com",
  gitlab: " ",
  facebook: " ",
  twitter: "https://x.com/DANISH_DK_1",
  instagram: "https://www.instagram.com/dk_pasha_123?igsh=MTR6ZTZqZnpoeXZ4Ng==",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using ReactJS and Angular",
        "⚡ Developing mobile applications using Flutter and native Android",
        "⚡ Backend development using NodeJS, ExpressJS and Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:nodedotjs",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },

        {
          skillName: "Wordpress",
          fontAwesomeClassname: "simple-icons:wordpress",
          style: {
            color: "#207297",
          },
        },

        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Indian Institute of Information Technology, Surat",
      subtitle: "B.Tech in Electronics and Communication Engineering",
      logo_path: "dal.png",
      alt_name: "DAL",
      duration: "2021 - 2025",
      descriptions: [
        "⚡ Mastered DSA and web development, with a solid foundation in other core subjects.",
        "⚡ Developed full-stack web applications, with expertise in both frontend and backend systems.",
        "⚡ Actively participated in extracurricular activities, contributing to college life and leadership roles.",
      ],
      website_link: "https://www.iiitsurat.ac.in/",
    },
    
  ],
};

const certifications = {
  certifications: [
  ],
};



// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create MERN and real time applicable project. Below are some of my projects.",
  avatar_image_path: "projects_image.svg",
};

//*********************************** contact ******************************************/
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "danish2.png",
    description:
      "You can contact me at the on plateforms mentioned below. I am available on these plateforms. ",
  },
};

//*********************************** projects ******************************************/
const projects = {
  data: [
    {
      name: "Parcel Delivery",
      url: "https://github.com/Danish1507",
      description: "A Porter Like Application",
      languages: [
        {
          name: "React.js",
          iconifyClass: "logos-react",
        },
        {
          name: "TypeScript",
          iconifyClass: "devicon-typescript",
        },
        {
          name: "Node.js",
          iconifyClass: "devicon-nodejs",
        },
        {
          name: "Express.js",
          iconifyClass: "devicon-express",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
      ],
    },
    {
      name: "HarmonyAdvisor",
      url: "https://github.com/Danish1507",
      description: "A personal music recommendation module.",
      languages: [
        {   
          name: "Python",
          iconifyClass: "logos-python",
        },   
        {    
          name: "Scikit-learn",    
          iconifyClass: "logos-scikit-learn",  
        },  
        {   
           name: "React.js",    
           iconifyClass: "logos-react",  
        },  
        {    
          name: "CSS",    
          iconifyClass: "logos-css-3",  
        },  
        {    
          name: "Tailwind CSS",    
          iconifyClass: "logos-tailwindcss",  
        },
      ],
    },
    {
      name: "StayEase",
      url:"https://github.com/Danish1507",
      description: "An accomadation web Application like Airbnb",
      languages: [
        {
          name: "React.js",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "devicon-javascript",
        },
        {
          name: "Node.js",
          iconifyClass: "devicon-nodejs",
        },
        {
          name: "Express.js",
          iconifyClass: "devicon-express",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
      ],
    },

  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  projectsHeader,
  contactPageData,
  projects,
};
