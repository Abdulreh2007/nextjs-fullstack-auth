// HeroSection.jsx

import Image from 'next/image';
import loog from '../../../public/log.webp'
import { FaRegClock, FaTaxi, FaDollarSign } from 'react-icons/fa';
import { FlipWords } from '../ui/flib-words';
import truck1 from '../../../public/truck1.jpeg'
import truck2 from '../../../public/truck2.jpeg'

export default function HeroSection() {

    const words = ["Anywere", "Anytime", "Anyplace", "Whenever"];
  return (
    <div className=''>

    
    <div className=" relative flex flex-col lg:flex-row  items-center justify-between min-h-screen px-6 lg:px-20 bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500 text-white overflow-hidden">

    {/* Left Side: Text Content */}
    <div className="lg:w-1/2 flex flex-col items-start space-y-6 lg:space-y-8 z-10 mt-6">
    
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-shadow-xl animate__animated animate__fadeIn animate__delay-1s">
        Reliable Tow Truck Service <FlipWords words={words} />
      </h1>

      <p className="text-lg sm:text-xl lg:text-2xl font-light text-gray-200">
        Our expert drivers are available 24/7 to get you back on the road quickly. Book your tow truck in minutes!
      </p>

      {/* Features List with React Icons */}
      <div className="flex flex-col space-y-4 text-lg sm:text-xl">
        <p className="flex items-center space-x-8 gap-[0.5rem]">
          <span className="bg-yellow-500 rounded-full p-3 ">
            <FaRegClock className="w-6 h-6 text-blue-900" />
          </span>
          24/7 Availability
        </p>
        <p className="flex items-center space-x-4 gap-[0.5rem]">
          <span className="bg-yellow-500 rounded-full p-3">
            <FaTaxi className="w-6 h-6 text-blue-900" />
          </span>
          Trusted Professional Drivers
        </p>
        <p className="flex items-center space-x-4 gap-[0.5rem]">
          <span className="bg-yellow-500 rounded-full p-3">
            <FaDollarSign className="w-6 h-6 text-blue-900" />
          </span>
          Affordable, Transparent Rates
        </p>
      </div>

      {/* CTA Buttons with Interactive Hover Effects */}
      <div className="flex space-x-8 mt-8">
        <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full text-blue-900 font-semibold text-lg transition-all transform hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-yellow-300">
          Book a Tow Now
        </button>
        <button className="px-8 py-4 bg-white text-blue-900 rounded-full font-semibold text-lg transition-all transform hover:scale-105 hover:bg-gray-100 hover:shadow-2xl hover:ring-2 hover:ring-yellow-300">
          Get a Quote
        </button>
      </div>
    </div>

   <div className="lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0 z-10">
        <div className="relative w-full h-72 lg:h-full lg:max-w-md grid grid-cols-3 gap-4">
          {/* Image 1 */}
          {/* <div className="relative col-span-2 h-48 lg:h-full transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <Image
              src={truck1} // Replace with actual image path
              width={1000}
              height={200}
              alt="Tow Truck Service"
              className="rounded-lg shadow-xl"
            />
          </div> */}
          {/* Image 2 */}
          {/* <div className="relative col-span-1 h-48 lg:h-full transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <Image
              src={truck1} // Replace with actual image path
              width={800}
              height={700}
              alt="Tow Truck Ready"
              className="rounded-lg shadow-xl"
            />
          </div> */}
          {/* Image 3 */}
          {/* <div className="relative col-span-2 h-48 lg:h-full transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <Image
              src={truck2} // Replace with actual image path
              width={500}
              height={200}
              alt="Tow Truck in Action"
              className="rounded-lg shadow-xl"
            />
          </div> */}
          {/* 4 */}
          
        </div>
      </div>

      {/* Subtle Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
    </div>
    </div>
  );
}
