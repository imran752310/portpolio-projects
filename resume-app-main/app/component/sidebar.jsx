import "../global.css";
import Image from "next/image";
import React from "react";

import { Envelope, Twitter, Linkedin, Medium } from "./icons/";

const Sidebar = ({ data }) => {
	const { name, role, education, contactLinks } = data;

  return (
    <div className="bg-black flex flex-col h-screen content-between w-full sm:justify-around sm:w-1/3 sm:fixed">
        <div className="text-white flex flex-col p-10 items-center">
            <Image 
            className="rounded-full h-full mb-6 m-auto"
             width={216} 
             height={216}  
             src='/images/imran.PNG'
            />
            <h1 className="text-yellow  text-4xl sm:text-3xl">{name}</h1>
            <h2 className="mb-8 text-3xl">{role}</h2>
            <p className="mb-2 text-base text-center">{education[0]}</p>
            <p className="mb-2">{education[1]}</p>
           
            <div className="text-white text-center mb-4 mt-4 sm:mt-8">
                <h3 className="uppercase">Contact Me</h3>
                <div className='flex flex-row justify-center gap-2'>
                <a className="text-2xl m-2" href={contactLinks?.[0]}>{""} <Envelope /> {""}</a>
                <a  className="text-2xl m-2" href={contactLinks?.[1]}>{""} <Twitter /> {""}</a>
                <a  className="text-2xl m-2" href={contactLinks?.[2]}>{""} <Linkedin /> {""}</a>
                <a  className="text-2xl m-2" href={contactLinks?.[3]}>{""} <Medium /> {""}</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar