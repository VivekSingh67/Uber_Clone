import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div className="bg-cover bg-center bg-[url(https://i.pinimg.com/736x/89/33/9e/89339ef52e708ed36e2c71d56ac43bfa.jpg)] h-screen pt-8 flex justify-between flex-col w-full">
      
      <img
        className="w-16 ml-8"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt="Uber Logo"
      />

      <div className="bg-white pb-7 py-4 px-4">
        <h2 className="text-[30px] font-bold">
          Get Started with Uber
        </h2>

        <Link to="/login" className="flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5">
          Continue
        </Link>
      </div>

    </div>
  )
}

export default Start