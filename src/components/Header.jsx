import React from 'react'

export const Header = () => {
  return (
    <header className=' h-[400px]  bg-center bg-cover flex items-center justify-center ' style={{
      backgroundImage:"url('/Navbarimage.jpg')"
    }}>
      
        <h1 className='text text-4xl font-bold bg-black/50 rounded-lg backdrop-blur-sm p-4 text-white'>🚀 Welcome to My Website</h1>
    </header>
  )
}

export default Header