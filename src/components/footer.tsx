import React from 'react'
import Image from  'next/image'
import Link from 'next/link'

import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-slate-50'>
      <footer className="text-gray-600 body-font">
  <div className="container px-1 py-1 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      
    <Image src="/pics.jpg" alt="Dua-Umer" width={50} height={50} className='w-[50px] rounded-full h-[50px]' />
      <span className="ml-3 text-xl">Dua-Umer</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2024 Dua-Umer —
      
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link className="text-gray-500 " href={"https://www.facebook.com/angle.malik.395891"} target='blank'>
        
      <FaFacebookF className='text 3xl hover:text-[#0033ff]'/>
      </Link>

      <Link className="ml-3 text-gray-500" href={"https://github.com/account"} target='blank'>
      <FaGithub className='text 3xl hover:text-[#2f2d2d]' />
      </Link>
      
      <Link className="ml-3 text-gray-500" href={"https://www.linkedin.com/in/dua-umer-040769330/?lipi=urn%3Ali%3Apage%3Ad_flagship3_detail_base%3Bu4lpOvi9Rt2SoUFua%2Fdm9w%3D%3D"} target='blank'>
      <FaLinkedin className='text 3xl hover:text-[#0033ff]' />
      </Link>
    </span>
  </div>
</footer>

    </div>
  )
}

export default Footer