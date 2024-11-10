import React from 'react'
import { CiSquareCheck } from "react-icons/ci";

const Skill = () => {
  return (
    <div id='Skills'>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
        SKILLS
      </h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
        MY SKILLS
      </h1>
    </div>
    <div className="flex flex-wrap -m-4 -mt-[5rem]">
      {/* skills */}
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full  p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <CiSquareCheck />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              TYPESCRIPT
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
              <div className='absolute bg-blue-600 h-1 rounded-xl w-[98.5%]'></div>
            <p className='font-bold text-blue-600 text-right'>98.5%</p>
            </div>
          </div>
        </div>
      </div>

     

      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full  p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <CiSquareCheck />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              HTML
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
              <div className='absolute bg-blue-600 h-1 rounded-xl w-[100%]'></div>
            <p className='font-bold text-blue-600 text-right'>100%</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full  p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <CiSquareCheck />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              CSS
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
              <div className='absolute bg-blue-600 h-1 rounded-xl w-[100%]'></div>
            <p className='font-bold text-blue-600 text-right'>100%</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full  p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <CiSquareCheck />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              NEXT.JS
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
              <div className='absolute bg-blue-600 h-1 rounded-xl w-[87%]'></div>
            <p className='font-bold text-blue-600 text-right'>87%</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</section>

    </div>
  )
}

export default Skill