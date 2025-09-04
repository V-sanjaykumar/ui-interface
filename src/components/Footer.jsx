import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white text-center py-6'>
        <p>&copy;2025 MyWebsite .All Rights Reserved.</p>
        <div className='flex justify-center space-x-3 mt-4'>
            <a href="#"  className='text-blue-400 hover:text-blue-600'>Facebook</a>
            <a href="#"  className='text-blue-400 hover:text-blue-600'>Twitter</a>
            <a href="#"  className='text-blue-400 hover:text-blue-600'>Instagram</a>
        </div>
    </footer>
  )
}

export default Footer