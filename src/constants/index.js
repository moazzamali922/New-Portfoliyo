import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  carrent,
  jobit,
  tripguide,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React JS Developer",
    icon: mobile,
  },
  {
    title: "Next JS Developer",
    icon: backend,
  },
  {
    title: "Word Press Developer",
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
    name: "TypeScript",
    icon: typescript,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  
  
  {
    name: "figma",
    icon: figma,
  },
  
];

const experiences = [
  {
    title: "React.js Developer",
    icon: mobile,
    iconBg: "#383E56",
    points: [
      "I have gained valuable experience in developing web applications using React.js, a popular JavaScript library.",
      "Leveraging the power of React.js, I have crafted interactive and dynamic user interfaces by utilizing its component-based architecture.",
      "To ensure seamless and responsive applications, I have utilized state management libraries and employed modern front-end development practices.",
      "I prioritize writing clean and reusable code, which has significantly contributed to the overall efficiency and maintainability of the projects.",
    ],
  },
  {
    title: "Next Js Developer",
    icon: backend,
    iconBg: "#E6DEDD",
    points: [
      "In my portfolio, I proudly present projects built with Next.js, a powerful framework known for its server-side rendering and enhanced performance capabilities.",
      "Utilizing Next.js, I have developed scalable and SEO-friendly applications that provide exceptional user experiences. The framework's features enable me to create websites that load quickly and smoothly.",
      "By implementing data fetching techniques and server-side rendering, I have optimized website loading times.",
      "Through the use of Next.js, I prioritize delivering fast and smooth navigation across my projects.",
    ],
  },
  {
    title: " Wordpress Web Developer",
    icon: creator,
    iconBg: "#383E56",
    points: [
      "During my journey as a fresher web developer, I have successfully completed several projects utilizing WordPress as the chosen platform",
      "Using my skills in HTML, CSS, and JavaScript, I have developed responsive layouts that adapt seamlessly across different devices. Additionally, I have integrated plugins and functionalities to enhance website performance and deliver a smooth user experience.",
     "I have delivered visually appealing and user-friendly websites that cater to the specific needs of businesses and individuals. ",
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "Moazzam Ali is a very talented student and he excels at creating excellent projects.",
    name: "Umair Khan",
  },
  {
    testimonial:
      "Moazzam Ali is an exceptional React developer. His skills and expertise in React programming are truly impressive.",
    name: "Jaffar Aman",
  },
  {
    testimonial:
      "Moazzam Ali is an outstanding WordPress developer. His proficiency in WordPress development is truly commendable.!",
    name: "Imran Ali",
  },
];

const projects = [
  {
    name: "Todo App",
    description:
      " I created an exceptional Todo application using React. The app features a user-friendly interface with dedicated buttons for adding new tasks, editing existing tasks, deleting individual tasks, and removing all tasks.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/moazzamali922",
  },
  {
    name: "Weather App",
    description:
      " I've created a weather app using React that fetches real-time weather data based on the user-entered city name  A simple and convenient way to stay updated on the weather of any location! .",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/moazzamali922",
  },
  {
    name: "Dog Shelter",
    description:
      " I created a remarkable dog shelter website for our client using HTML, CSS, and Bootstrap. The website showcases his exceptional design skills and expertise in frontend development.",
    tags: [
      {
        name: "Html Css Bootstrap",
        color: "blue-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/moazzamali922",
  },
];

export { services, technologies, experiences, testimonials, projects };
