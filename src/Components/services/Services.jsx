import { useRef } from "react";
import "./Services.scss";
import { color, motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,

    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      //  whileInView="animate"
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          {" "}
          I'm a passionate full-stack developer building modern, <br />{" "}
          responsive websites to solve real-world problems.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt=""></img>
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Smart</motion.b>{" "}
            Solutions
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Digital Growth.
          </h1>
          <button>Explore My Journey</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Creative Problem Solver</h2>
          <p>
            Love turning complex problems into clean, functional solutions.
            Whether it's debugging or building systems from scratch, I enjoy
            making things work smarter.
          </p>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>User-Centric Thinker</h2>
          <p>
            Design isn't just about colors—it's about experience. I focus on
            intuitive, interactive UI with modern tools like Tailwind, Framer
            Motion, and responsive layouts.
          </p>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Passionate Project Builder</h2>
          <p>
            I bring ideas to life—from governance platforms to animated
            portfolios. Every project is a new opportunity to learn and make an
            impact.
          </p>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgrey", color: "black" }}
        >
          <h2>Growth-Driven Learner</h2>
          <p>
            I stay curious and committed to self-improvement—whether it’s
            mastering backend logic, learning new stacks, or prepping for
            real-world tech interviews.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
