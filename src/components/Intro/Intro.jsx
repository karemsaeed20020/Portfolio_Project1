import React from 'react';
import './Intro.css';
import GitHub from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instgram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';    
import thumbup from '../../img/thumbup.png';
import glassesimoji from '../../img/glassesimoji.png';
import crown from '../../img/crown.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { useContext } from "react";



const Intro = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = { duration: 2, type: "spring" };
  return (
    <div className='intro'>
        <div className='i-left'>
            <div className='i-name'>
                <span>Hy! I Am</span>
                <span>Kareem Saeed</span>
                <span> Frontend Developer with high level of experience in web designing
                    and development, producting the Quality work</span>
            </div>
            <button className='button i-button'>Hire me</button>
            <div className='i-icons'>
                <img src={GitHub} alt="" />
                <img src={LinkedIn} alt="" />
                <img src={Instgram} alt="" />

            </div>
        </div>
        <div className='i-right'>
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={boy} alt="" />
            <motion.img src={glassesimoji} alt="" 
            initial={{ left: "-36%" }}
            whileInView={{ left: "-24%" }}
            transition={transition}
            />
            <motion.div style={{top: "-4%", left: "68%"}}
             initial={{ top: "-4%", left: "74%" }}
             whileInView={{ left: "68%" }}
             transition={transition}
            >
                <FloatingDiv image={crown} txt1='Web' txt2='Developer' />
            </motion.div>
            <motion.div style={{top: "18rem", left: "0rem"}}
             initial={{ left: "9rem", top: "18rem" }}
             whileInView={{ left: "0rem" }}
             transition={transition}
            >
                <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award' />
            </motion.div>
            <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
            <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
        </div>
      
    </div>
  )
}

export default Intro
