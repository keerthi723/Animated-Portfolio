import "./Hero.scss"
import {motion} from "framer-motion"
const textVariant={
    initial:{
        x:-500,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            straggerChildren:0.1,
        }
    },
    scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity,
        }
    }

}
const sliderVariant={
    initial:{
        x:0,
        
    },
    animate:{
        x:"-220%",
        transition:{
            repeat:Infinity,
            repeatType:"mirror",
            duration:20,
            straggerChildren:0.1,
        }
    },
    
}
const Hero = () => {
  return (
    <div className="hero">
        <div className="wrapper">
            <motion.div className="textContainer" variants={textVariant} initial="initial" whileInView="animate"> 
            <motion.h2 variants={textVariant}>HARVEY TYLER</motion.h2>
            <motion.h1 variants={textVariant}>WEB DEVELOPER And UI Designer </motion.h1>
            <motion.div variants={textVariant} className="buttons">
            <motion.button variants={textVariant}>See the latest works </motion.button>
            <motion.button variants={textVariant}>Contact Me</motion.button>
</motion.div>
            <motion.img variants={textVariant} animate="scrollButton" src="/scroll.png"></motion.img></motion.div>
       
        </div>
        <motion.div className="slidingTextContainer" variants={sliderVariant} initial="initial" animate="animate">
            Feel Free To Ask !
        </motion.div>

        <div className="imageContainer">

            <img src="/hero.png" alt=""></img>
        </div>
    </div>
  )
}

export default Hero