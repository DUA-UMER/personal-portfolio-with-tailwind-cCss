'use client';
import React from 'react';
import Image from 'next/image'; 
import Link from 'next/link';




const Hero = () => {
  return (
  
        <section className="text-gray-600 body-font bg-fixed bg-gray-100 ">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
       <div> I am
        <br className="hidden lg:inline-block" />
       <h1>web Developer</h1>
       <h1>ui/ux Designer</h1>
       <h1>Data Anthusiast</h1>
       <h1>Grapic Designer</h1>
       </div>

      </h1>
      <div className='w-[100px] h-[2px] bg-indigo-950'></div>
      <p className="mb-8 leading-relaxed">
      Hi, I'm Dua Umer, a software developer student specializing in AI.
       I am passionate about creating innovative, functional applications and continuously 
       improving my coding and problem-solving skills. My portfolio showcases a range of 
       projects that highlight my expertise in development, design, and user-focused 
       solutions. I’m committed to building efficient, scalable software and am always
        eager to learn and apply new technologies. Explore my work to see how I bring 
        ideas to life through code!


      </p>
      <div className="flex justify-center">
        <Link href={"#Contact"}>
        <button className="inline-flex text-white bg-indigo-950 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Contact
        </button>
        </Link>
        
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center rounded mx-auto w-[15rem]"
        alt="hero"
        width={600}
       height={500}
        src="/main.jpg"
      />
    </div>
  </div>
</section>
  )
}

export default Hero