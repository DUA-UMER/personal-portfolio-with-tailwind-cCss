import React from 'react'

const About = () => {
  return (
    <div id='About'>
        <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ">
      <img
        className="object-cover object-center rounded mx-auto w-[250px] h-[400px]"
        alt="hero"
        src="/main.jpg"
        width={200}
        height={200}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        About Me
        
      </h1>
      <p className="mb-8 leading-relaxed">
      Hi, I'm Dua-Umar, a recent graduate and passionate software developer with a 
      strong focus on creating innovative, user-friendly applications. My journey in 
      software engineering has equipped me with a solid foundation in web development, 
      particularly with technologies like Next.js, HTML, CSS,typescript, and Tailwind CSS. I enjoy 
      problem-solving, building efficient solutions, and continuously expanding my 
      technical skills. I'm eager to contribute to exciting projects, collaborate with 
      others, and make an impact through technology.

      </p>
      
    </div>
  </div>
</section>

    </div>
  )
}

export default About