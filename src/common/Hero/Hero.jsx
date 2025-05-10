import React from 'react'
import "./Hero.css"
import  dark_arrow from "../../assets/dark-arrow.png"

const Hero = () => {
  return (
    <div className='hero container'>

        <div className='hero-text '>

            <h1>  We Ensure better education for better world  </h1>
           
            <p1>  Our cutting edge curriculum is designed to empower a student with the knowledge, skill and experience needed to excel in dynamic field of education </p1>
            <button className='btn'>   explore more <img src={dark_arrow} alt=''></img>  </button>
 

        </div>


    </div>
  )
}

export default Hero