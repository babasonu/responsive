import React, { useEffect, useState } from 'react'
import"./Navbar.css"
import logo from "../../assets/logo.png"



const Navbar = () => {

    const[sticky,setSticky]=useState(false);

    useEffect(()=>{

        window.addEventListener("scroll",()=>{

            window.scrollY > 50?setSticky(true):setSticky(false)
        })
    },[])
  return (
    <nav className={`container ${sticky?"dark-nav":""}`}>
        <img src={logo} className='logo'>
        </img>

        <ul>
            <li>
                Home
            </li>
            <li>
                programe

            </li>
            <li>
                About us
            </li>
            <li>
                campus

            </li>
            <li>testimonials

            </li>
            <li><button className='btn'>  contact us </button>

            </li>


        </ul>

    </nav>

   

    
  )
}

export default Navbar