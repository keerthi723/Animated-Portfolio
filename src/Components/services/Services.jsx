import { useRef } from "react"
import "./Services.scss"
import{color, motion,useInView} from "framer-motion"

const variants={
    initial:{
        x:-500,
       
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        y:0,
        transition:{
            duration:1,
            staggerChildren:0.1,
        }

    }
}

const Services = () => {
    const ref=useRef()

    const isInView=useInView(ref,{margin:"-100px"})
  return (
    <motion.div className="services"variants={variants} initial="initial" ref={ref}
    //  whileInView="animate"
     animate={ "animate"}
     
     >
        <motion.div className="textContainer"variants={variants} >
            <p> I focus on helping your brand grow<br/> and move forward.</p>
            <hr/>
        </motion.div>
        <motion.div className="titleContainer"variants={variants} >
            <div className="title">
                <img src="/people.webp" alt=""></img>
                <h1><motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas</h1>
            </div>
            <div className="title">
               
                <h1><motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.</h1>
                <button>WHAT WE DO?</button>
            </div>
        </motion.div>
        <motion.div className="listContainer"variants={variants} >
            <motion.div className="box" whileHover={{background:"lightgray",color:"black" }}>
                <h2>Branding</h2>

                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi enim, impedit, voluptatem, laborum dolorum voluptas voluptate aspernatur quam molestiae culpa dolores dolore? Totam, rerum corporis!</p>
                <button>GO</button>
            </motion.div>
            
            <motion.div className="box" whileHover={{background:"lightgray",color:"black" }}>
                <h2>Branding</h2>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni nulla harum similique nesciunt incidunt adipisci sunt vero. Voluptate autem veritatis consequuntur nihil facere blanditiis dolorem.</p>
                <button>GO</button>
            </motion.div>
           
            <motion.div className="box" whileHover={{background:"lightgray",color:"black" }}>
                <h2> Branding</h2>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias alias sunt odit labore repudiandae ullam doloribus possimus, excepturi reiciendis officiis unde placeat, delectus impedit quam.</p>
                <button>GO</button>
            </motion.div>
            
            <motion.div className="box" whileHover={{background:"lightgrey",color:"black" }}>
                <h2> Branding</h2>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ratione, hic aliquam, dolor porro ad repudiandae consequuntur provident vero doloremque ipsum perspiciatis dignissimos velit sit.</p>
                <button>GO</button>
            </motion.div>
           
        </motion.div>
    </motion.div>
  )
}

export default Services