import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  andr,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  github,
  kotlin,
  firebase
} from "../assets";


const services = [
  {
    title: "User-Friendly UI",

    desc:"Easy to navigate and use for people of all technical abilities.",
    icon: web,
  },
  {
    title: "Genuine Reviews",
    desc:"A platform for users to share their honest opinion about books.",
    icon: mobile,
  },
  {
    title: "Community aspect",
    desc:"Aims to connect readers despite their loaction.",
    icon: backend,
  },
  {
    title: "User Engagement",
    desc:"Create a virtual bookshelf to keep track of the books. You can also sell or exchange books with other users.",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },{
    name:"android",
    icon:andr,
  }
  ,{
    name:"kotlin",
    icon:kotlin,
  }
  ,{
    name:"firebase",
    icon:firebase,
  }
];

const experiences = [
  {
    title: "Came up with a idea",
    company_name: "Leaflet",
    icon: github,
    iconBg: "#383E56",
    date: "5TH APRIL",
    points: [
      "Came up with a idea of creating a web applications using React.js and other related technologies.",
      "Goal is to create a fully-functional digital book library to connect different readers.",
      "Implementing and ensuring user benefits.",
      "Finding possiblities of creating website as well as a app which helps user to connect with similar interest people.",
    ],
  },
  {
    title: "Creating our website.",
    company_name: "Leaflet",
    icon: reactjs,
    iconBg: "#E6DEDD",
    date: "6TH APRIL 1:00 PM",
    points: [
      "Creating a website for our digital book library using React was a challenging yet rewarding experience.",
    "Designing a scalable and reusable component architecture was crucial, Integrating with backend services to fetch and manage book data can be complex, using state management libraries like Redux",
  "Ensuring the frontend is responsive and works well on different devices and screen sizes requires careful planning and implementation."],
  },
  {
    title: "Creating our Android App",
    company_name: "Leaflet",
    icon: andr,
    iconBg: "#383E56",
    date: "6TH APRIL 5:00 PM",
    points: [
      "Creating an Android app for a digital book library using Kotlin and Android Studio in a limited time frame was a challenging task.",
      "Challenging to decide which features are essential for the initial release and which can be postponed to future updates."
    ,"Ensuring that the app performs well, even with a large number of books and users, can be a significant challenge.",
    ,"Ensuring the security of user data and preventing unauthorized access to books and user information is crucial. This involves implementing secure authentication and data encryption mechanisms."
  ],
  },
  {
    title: "Adding Some Spicy Stuff and Giving final touch.",
    company_name: "Leaflet",
    icon: javascript,
    iconBg: "#E6DEDD",
    date: "6TH APRIL 6:00 PM",
    points: [
      "Developing and creating about page and using 3d models was a very challenging task.",
      "Rendering 3d models using React js and three js into the website from scratch was very hard.",
      "Implementing responsive design and ensuring browser compatibility, and also used Gemini for complex issues faced while creating the page.",
      "After some final touches in website and app, Our Website was created.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

export { services, technologies, experiences, testimonials, };
