import { useRef } from "react";
import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "E-Commerce Website",
    img: "https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "A full-stack shopping platform with product filtering, cart management, admin panel, and payment integration using MongoDB, Express, React, and Node.js. It demonstrates my practical MERN skills and understanding of complete app flow.",
    githubUrl: "https://github.com/keerthi723/pickzy.git",
  },
  {
    id: 2,
    title: "E-Services for Gram Panchayat",
    img: "https://images.unsplash.com/photo-1672561924208-7762120e7077?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "A Python-MySQL web platform aimed at simplifying rural governance with features like complaint handling, scheme applications, and digital payments. This project highlights my ability to build meaningful solutions for real-world problems.",
    githubUrl: "https://github.com/keerthi723/Gram-panchayat-system.git",
  },
  {
    id: 3,
    title: "Animated Portfolio Website",
    img: "https://images.pexels.com/photos/20579596/pexels-photo-20579596/free-photo-of-black-and-white-blurred-photography-of-a-woman.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "A fully responsive portfolio built using React.js and Framer Motion, showcasing my personal style with smooth animations and clean UI. It reflects not just my projects, but the creativity and thought I put into every detail.",
    githubUrl: "https://github.com/keerthi723/Animated-Portfolio.git",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset:["start start","end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  const handleDemoClick = () => {
    window.open(item.githubUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt={item.title}></img>
          </div>

          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button onClick={handleDemoClick}>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>FEATURED WORKS</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>

      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
