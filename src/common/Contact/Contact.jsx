import React from 'react'
import "./Contact.css"
import { useState } from 'react';


const Contact = () => {

    const [isHovered, setIsHovered] = useState(false);
    


    return (
        <div className='contact'>

            <div className='contact-col'>

            <div style={{ position: 'relative', padding: '20px' }}>
      <p 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ cursor: 'pointer' }}
       
      >
       <h4 className='contact-col h4'> Contact Us</h4>
      </p>
      
      {isHovered && (
        <div className='contact-col5'>

         Kya haal hai sir ? Kindly dm us on 9773910846 
        </div>
      )}
    </div>


               
                <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque ut veniam rem iure pariatur animi iste consectetur sunt saepe, quaerat fuga doloribus non corporis! Fuga numquam quos architecto ex. Quod.</p>

                <ul>
                    <li> giri5sonu@gmail.com</li>
                    <li> 9773910846</li>
                    <li>New ashok nagar new delhi
                    </li>


                </ul>

            </div>

            <div className='contact-col'></div>


        </div>
    )
}

export default Contact