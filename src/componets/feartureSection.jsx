import React from 'react'
import { features } from '../constants'

const FeartureSection = () => {
  return (
    <div className='relative mt-20 border-b border-neutral-800 min-h-[800px]'>
        <div className="text-center">
            <span className="bg-neutral-900 text-orange-500 rounded-full h-6
            text-sm font-medium px-2 py-1 uppercase">
                 FEARTURE
            </span>
            <h2 className='text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 
            tracking-wide'>Easily bluid <span className='bg-gradient-to-r from-orange-500 to-orange-800 text-transparent
             bg-clip-text'> your code</span>
             </h2>
        </div>
        <div className="flex mx-auto gap-5 w-full flex-wrap h-auto list-none lg:grid-cols-3 lg:mt-20">
            {features.map((features, index) => (
                <div key={index} className='w-64 min-h-64 sm:1/2 lg:min-w-[30%]'>
                     <div className='flex gap-3'>
                        <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900
                        text-orange-700 justify-center items-center rounded-full">
                            {features.icon}
                        </div>
                        <div className='w-full mt-2 h-auto'>
                            <h5 className=' mb-6 text-xl'>{features.text}</h5>
                             <p className='text-md p-2 mb-29 text-neutral-500 '>
                                {features.description}
                            </p>
                        </div>
                     </div>
                </div>
            ))}
            </div>    
    </div>
  )
}

export default FeartureSection