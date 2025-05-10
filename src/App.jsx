import { useState } from 'react'
import Navbar from './common/Navbar/Navbar'
import Hero from './common/Hero/Hero'
import Programe from './common/Programe/Programe'

import './App.css'
import Title from './common/Title/Title'
import About from './common/About/About'
import Campus from './common/Campus/Campus'
import Testimonials from './Testimonials/Testimonials'
import Slider from './common/Slider/Slider'
import Contact from './common/Contact/Contact'


function App() {
  

  return (
    <div>
      <Navbar/>
     <Hero/>
     
     <div className='container'>
     <Title subTitle=" Our Program " Title ="what we Offer "/>
      <Programe/>
      <About/>
      <Title subTitle=" Gallery " Title ="Campus photos "/>
      <Campus/>
      <Title subTitle=" TESTIMONIALS " Title =" WHAT STUDENTS SAYS  "/>
      <Testimonials/>
      <Slider  />
      <Title subTitle=" CONTACT US " Title =" Get in Touch "/>

      <Contact                    />
     
   
     
     </div>
     
     
    





    </div>


  )



}

export default App
