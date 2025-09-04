import React from 'react'
import newsimage from "../assets/news.jpg"

const Article = () => {
  return (
  <article className='container mx-auto p-6'>
    <h2 className='text-2xl font-bold'>Latest News</h2>
    <div className='flex shadow-xl p-4 bg-white rounded-lg'>
         <img className='rounded-lg max-h-40' src={newsimage} alt="" />

          <div className='ml-4'>
        <h3 className='text-xl font-semibold'>Vite is Revolutonizing Frontend</h3>
        <p className='text-gray-600 mt-2'>Vite is a next-gen Frontend tool that delivers fast Development</p>
    </div>
        
    </div>
   

  </article>

  
  )
}

export default Article