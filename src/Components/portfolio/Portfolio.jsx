import { useRef } from "react";
import "./Portfolio.scss";
import {motion, useScroll,useSpring, useTransform} from "framer-motion";
const items=[
    {id:1,
    title:"React.js",
    img:"https://images.pexels.com/photos/23383398/pexels-photo-23383398/free-photo-of-tuscany-in-spring.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum accusamus odio voluptatem consequatur, vitae saepe?",
},
   { id:2,
    title:"vanilla.js",
    img:"https://images.pexels.com/photos/14932743/pexels-photo-14932743.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum accusamus odio voluptatem consequatur, vitae saepe?",
    },
    {id:3,
    title:"Music app",
    img:"https://images.pexels.com/photos/20579596/pexels-photo-20579596/free-photo-of-black-and-white-blurred-photography-of-a-woman.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum accusamus odio voluptatem consequatur, vitae saepe?",
    },
   { id:4,
    title:"Who cares",
    img:"https://images.pexels.com/photos/24589418/pexels-photo-24589418/free-photo-of-a-waterfall-is-surrounded-by-trees-in-the-forest.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum accusamus odio voluptatem consequatur, vitae saepe?"
},
];
const Single=({item})=>{

const ref=useRef();
const {scrollYProgress}=useScroll({target:ref, 
    // offset:["start start","end start"]

});
   const y=useTransform(scrollYProgress,[0,1],[-300,300])
    
    return <section >
        <div className="container">
            <div className="wrapper">
                <div className="imageContainer" ref={ref}>
                <img src={item.img} alt=""></img>
                </div>
           
            <motion.div  className="textContainer"style={{y}}>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <button>See Demo</button>
            </motion.div>
            </div>
           
        </div>
            
        </section>;
    
};

const Portfolio = () => {

   const ref=useRef();
   const {scrollYProgress}=useScroll({target:ref, offset:["end end","start start"]});
    const scaleX=useSpring(scrollYProgress,{
        stiffness:100,
        damping:30,
    })
  return (
    <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>FEATURED WORKS</h1>
            <motion.div style={{scaleX}} className="progressBar"></motion.div>
        </div>
        
        {items.map((item)=>(
        <Single item={item} key={item.id}/>
    ))}</div>
  )
}

export default Portfolio