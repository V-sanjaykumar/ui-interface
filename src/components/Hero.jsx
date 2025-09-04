import React from 'react'
import heroimage  from "../assets/cartoonnetwork.jpg"

const Hero = () => {
    return (
        <section className="bg-gray-100 text-center  py-16">
            <img className='h-40 mx-auto rounded-lg shadow-xl' src={heroimage} alt="" />
            <h2 className='text-3xl font-bold mt-2'> Build Amazing UI with React & Vite </h2>
            <p className='text-gray-600 mt-2'>Fast , Lightweight And Modern Frontend Development </p>
            <button className='bg-blue-500 px-6 py-2 rounded-lg hover:bg-blue-600 transition text-white mt-4'> 🚀 Get Started</button>
        </section>
    )
}

export default Hero