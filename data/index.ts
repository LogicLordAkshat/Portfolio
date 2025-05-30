// data.ts

import { StaticImageData } from "next/image"; // You might need this if you use Next.js Image component with local images directly in data.

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" }, // Ensure this link matches the ID of your RecentProjects section
  { name: "Testimonials", link: "#testimonials" },
  { name: "Experience", link: "#experience" }, // Added for clarity if you have an experience section
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client satisfaction, fostering open communication",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgCdn: "/b1.svg",
    img: "/b1.svg",
    spareImg: "",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "I adapt to your schedule",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    img: "",
    spareImg: "",
    imgClassName: "",
    titleClassName: "justify-start",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    img: "/b4.svg",
    spareImg: "/grid.svg",
    imgClassName: "",
    titleClassName: "justify-center",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    img: "/b5.svg",
    spareImg: "/grid.svg",
    imgClassName: "",
    titleClassName: "justify-start",
  },
  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    img: "/b5.svg",
    spareImg: "/grid.svg",
    imgClassName: "absolute right-0 bottom-0 lg:w-[80%] md:w-[80%] w-full",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    img: "/b6.svg",
    spareImg: "",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://www.ui.earth.com", // MODIFIED: Added https://www. prefix
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom, a seamless and secure platform for virtual collaboration.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://www.ui.yoom.com", // MODIFIED: Added https://www. prefix
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://www.ui.aiimg.com", // MODIFIED: Added https://www. prefix
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://www.ui.apple.com", // MODIFIED: Added https://www. prefix
  },
];

export const testimonials = [
  {
    quote:
      "Akshat's contributions as a Software Engineer were invaluable. Their ability to quickly grasp complex challenges and implement scalable, efficient web solutions was truly impressive. They consistently delivered high-quality code and had a knack for optimizing performance.",
    name: "Dr. Anya Sharma",
    title: "Lead Software Architect, Tech Innovations Inc.",
  },
  {
    quote:
      "As an Executive Director, Akshat demonstrated exceptional leadership. Their vision transformed our platform, directly leading to exponential growth, reaching over 20 million views. Their strategic thinking and execution capabilities are top-tier.",
    name: "Mr. David Chen",
    title: "Board Member, Global Impact Network",
  },
  {
    quote:
      "During their time as Executive Director, Akshat spearheaded initiatives that dramatically boosted VITrendz's digital presence, resulting in a phenomenal growth to over 20 million views across our platforms. Their strategic acumen and dedication were truly exceptional.",
    name: "Ms. Aman",
    title: "Founder, VITrendz",
  },
  {
    quote:
      "Akshat brings a deep understanding of machine learning principles to the table. Their work on integrating AI features significantly enhanced our product's capabilities, showcasing not just technical prowess but also a keen eye for practical application.",
    name: "Dr. Lena Petrova",
    title: "Senior AI Scientist, NeuralTech Solutions",
  },
  {
    quote:
      "As a Marketing Intern at Muskurahat Foundation, Akshat was incredibly proactive. Their creative ideas for outreach campaigns and keen analytical skills helped us connect with a wider audience and enhance our fundraising efforts. A truly impactful intern!",
    name: "Mr. Rohan Gupta",
    title: "Head of Outreach, Muskurahat Foundation",
  },
  {
    quote:
      "Working with Akshat on various web development projects was a seamless experience. They are not only proficient in modern frameworks but also an excellent collaborator, always open to feedback and focused on delivering the best user experience.",
    name: "Mr. Omar Hassan",
    title: "Product Manager, Creative Dev Studio",
  },
  {
    quote:
      "Akshat's dedication to continuous learning in AI/ML is evident in their work. They tackled complex algorithms with enthusiasm and delivered robust solutions that pushed the boundaries of our internal projects. A strong asset for any data-driven team.",
    name: "Professor Emily White",
    title: "Head of AI Research, University Innovations Lab",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "hostinger",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const techStack = [
  { name: "Angular", img: "/angular.svg" },
  { name: "AWS", img: "/aws.svg" },
  { name: "Azure", img: "/azure.svg" },
  { name: "C++", img: "/c++.svg" },
  { name: "CSS3", img: "/css3.svg" },
  { name: "Firebase", img: "/firebase.svg" },
  
  { name: "GitHub", img: "/github.svg" },
  { name: "HTML5", img: "/html5.svg" },
  { name: "Java", img: "/java.svg" },
  { name: "JavaScript", img: "/javascript.svg" },
  { name: "MongoDB", img: "/MongoDB.svg" },
  { name: "Next.js", img: "/next.js(2).svg" },
  { name: "Node.js", img: "/node.js.svg" },
  { name: "NumPy", img: "/numpy.svg" },
  { name: "Python", img: "/python.svg" },
  { name: "React", img: "/react.svg" },
  { name: "Tailwind ", img: "/tailwind.svg" },

  { name: "TypeScript", img: "/typescript.svg" },
  { name: "VS", img: "/vs.svg" },
];

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Developer - VITrendz ",
    desc: "Assisted in the development of a web-based platform using Next.Js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Machine Learning Intern",
    desc: "Aspiring Machine Learning Intern passionate about developing intelligent systems and applying data-driven solutions to real-world problems.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Executive Director",
    desc: "Executive Director leveraging a platform with 20M+ views to drive significant impact and engagement.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Marketing Intern",
    desc: "Results-driven Marketing Intern seeking to gain hands-on experience in dynamic marketing environments.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/LogicLordAkshat",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://twitter.com/your-twitter-profile",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/akshat-srivastava-83a684209/",
  },
  {
    id: 4,
    img: "/insta.svg",
    link: "https://www.instagram.com/_akshat_7._/#", // MODIFIED: Corrected Instagram direct profile link
  },
];
