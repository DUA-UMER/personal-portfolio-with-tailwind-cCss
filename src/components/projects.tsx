import Link from 'next/link'
import React from 'react'

const Projects = () => {
  return (
    <div id='Projects'>
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
       Some Projects
      </h1>
    </div>
    <div className="flex flex-wrap -m-4 -mt-[5rem]">
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/todo.jpeg"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              My Projects
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Todo List
            </h1>
            <p className="leading-relaxed">
              My Todo List project simplifies task management, Helping
            users stay focused and organized.
            </p>
            <Link href={"https://github.com/DUA-UMER/Todo-List-Application.git"}>
            <p className="leading-relaxed text-blue-600 hover:underline">
              view project.
            </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/currency.jpeg"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              my projects
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              currency converter
            </h1>
            <p className="leading-relaxed">
              A simple currency converter, helping you convert currencies.
             Real Tima Exchange Rates 
            
            </p>
            <Link href={"https://github.com/DUA-UMER/currency-converterr.git"}>
            <p className="leading-relaxed  text-blue-600 hover:underline">
              view project.
            </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/resume.jpeg"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                My Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Resume Builder
            </h1>
            <p className="leading-relaxed">
              Easily create,customize,& download professional resume.
              It help stand out in the job market.
            </p>
            <Link href={"https://github.com/DUA-UMER/hackathon-milestone-5.git"}>
            <p className="leading-relaxed  text-blue-600 hover:underline">
              view project.
              </p>
              </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/cli.png "
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              My Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              CLI Calculator
            </h1>
            <p className="leading-relaxed">
              A Simple, Fast, and accurate calculator for devalopers 
              and user alike.
            </p>
            <Link href={"https://github.com/DUA-UMER/CALCULATOR.git"}>
            <p className="leading-relaxed  text-blue-600 hover:underline">
              view project.
              </p>
              </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/atm.jpeg"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              My Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              ATM Machine
            </h1>
            <p className="leading-relaxed">
              Manage your finances with ease using My ATM Machine Projec!
              Personal Banking Terminal.
            </p>
            <Link href={"https://github.com/DUA-UMER/ATM-Machine.git"}>
            <p className="leading-relaxed  text-blue-600 hover:underline">
              view project.
              </p>
              </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/word.png"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              My Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Word Counter
            </h1>
            <p className="leading-relaxed">
              Count the number of words in your text. Save your text
              and get the count instantly.
            </p>
            <Link href={"https://github.com/DUA-UMER/word-counter.git"}>
            <p className="leading-relaxed  text-blue-600 hover:underline">
              view project.
              </p>
              </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Projects