import React from 'react';
import './Services.css';
import Heartemoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Resume from '../Services/resume.pdf';
import Card from '../Card/Card';
import { useContext } from "react";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";


const Services = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const transition = {
        duration: 1,
        type: "spring",
    };
  return (
    <div className='services'>
        <div className='awesome'>
            <span>My Awesome</span>
            <span>services</span>
            <span>Lorem ispum is simpley dummy text of printing of printing Lorem
                <br />
                ispum is simpley dummy text of printing
            </span>
            <a href={Resume} download>
                <button className='button s-button'>Download CV</button>

            </a>
            <div className='blur s-blur1' style={{background: "#ABF1FF94"}}></div>
        </div>
        <motion.div className='cards'
        initial={{ left: "25rem" }}
        whileInView={{ left: "14rem" }}
        transition={transition}
        >
            <div style={{left: "14rem"}}>
                <Card
                emoji={Heartemoji}
                heading={'Design'}
                detail={"Figma, Sketch, Photoshop, Adobe, Adobe Xd"}
                />
            </div>
            <div style={{top: "12rem", left: "-4rem"}}>
                <Card
                emoji={Glasses}
                heading={'Developer'}
                detail={"Html, Css, JavaScript, React"}
                />
            </div>
            <div style={{top: "12rem", left: "-4rem"}}>
                <Card
                emoji={Glasses}
                heading={'Developer'}
                detail={"Html, Css, JavaScript, React"}
                />
            </div>
            <div style={{top: "19rem", left: "12rem"}}>
                <Card
                emoji={Humble}
                heading={'UI/UX'}
                detail={"Lorem ispum dummy text are usually use in section where we need some random text"}
                />
            </div>
            <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
        </motion.div>
    </div>
  )
}

export default Services
