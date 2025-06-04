import { useRef } from "react";
import "./Contact.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let's Work Together</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Name</h2>
          <span>keerthiga</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>LinkedIn</h2>
          <span>www.linkedin.com/in/keerthiga-p-29067b225</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>keerthiga342@gmail.com</span>
        </motion.div>
      </motion.div>

      <motion.div className="formContainer">
        <motion.div
          className="phoneSvg"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
        >
          <svg width="450px" height="450px" viewBox="0 0 64 64" fill="none">
            <motion.path
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 3 }}
              d="M14.87 32a17.67 17.67 0 0 1 0-25 M20 26.87a10.41 10.41 0 0 1 0-14.71 m28 30-5.43 5.43a8.77 8.77 0 0 0-2.57 6.2V52 M40 56h9a3 3 0 0 0 3-3V19a3 3 0 0 0-3-3H31a3 3 0 0 0-3 3v19.33a2 2 0 0 0 3.42 1.42l4.46-4.45a3.23 3.23 0 0 1 4.41-.24 3.12 3.12 0 0 1 .12 4.53l-3.29 3.29a9.83 9.83 0 0 0-2.88 7 6.25 6.25 0 0 1-6.24 6.2"
            />
          </svg>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
