import React from 'react'

import "./programe.css"
import program_1 from "../../assets/program-1.png"
import program_2 from "../../assets/program-2.png"
import program_3 from "../../assets/program-3.png"
import x from "../../assets/program-icon-1.png"
import y from "../../assets/program-icon-2.png"
import z from "../../assets/program-icon-3.png"



const Programe = () => {
    return (
        <div className='program'>
            <div className='program'>

                <img src={program_1} alt="" />
                <div className='caption'>

                    <img src={x} alt=''></img>
                    <p> Graduation degree</p>


                </div>

            </div>

            <div className='program'>

                <img src={program_2} alt="" />
                <div className='caption'>

                    <img src={y} alt=''></img>
                    <p> master degree</p>


                </div>

            </div>
            <div className='program'>

                <img src={program_3} alt="" />
                <div className='caption'>

                    <img src={z} alt=''></img>
                    <p> post greduation </p>


                </div>

            </div>



        </div>
    )
}

export default Programe