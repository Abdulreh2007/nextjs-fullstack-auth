"use client"
import React from "react";
import Countdown from "react-countdown";
import Head from "next/head";
import { useEffect, useState } from "react";

const Home = () => {
  // Calculate the target date (7 days from now)
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 7);

  return (
    <>
      <Head>
        <title>Coming Soon</title>
        <meta name="description" content="Our website is launching soon!" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Roboto:wght@400&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div
        className="relative bg-cover bg-center h-screen bg-black"
        style={{
          backgroundImage: 'url("/your-background-image.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div> {/* Gradient Overlay */}
        
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6 space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 animate__animated animate__fadeIn animate__delay-1s">
            Our Website is Coming Soon!
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-light animate__animated animate__fadeIn animate__delay-2s">
            Website launching in
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-8 animate__animated animate__fadeIn animate__delay-3s">
            <Countdown
              date={targetDate}
              renderer={({ days, hours, minutes, seconds }) => (
                <div className="flex flex-wrap justify-center gap-6">
                  {/* Days */}
                  <div className="bg-blue-700 py-6 px-8 rounded-xl shadow-xl transform transition duration-300 hover:scale-105 animate__animated animate__fadeIn">
                    <span className="text-4xl sm:text-5xl font-bold">{days}</span>
                    <div className="text-sm text-gray-300">Days</div>
                  </div>
                  {/* Hours */}
                  <div className="bg-green-700 py-6 px-8 rounded-xl shadow-xl transform transition duration-300 hover:scale-105 animate__animated animate__fadeIn">
                    <span className="text-4xl sm:text-5xl font-bold">{hours}</span>
                    <div className="text-sm text-gray-300">Hours</div>
                  </div>
                  {/* Minutes */}
                  <div className="bg-purple-700 py-6 px-8 rounded-xl shadow-xl transform transition duration-300 hover:scale-105 animate__animated animate__fadeIn">
                    <span className="text-4xl sm:text-5xl font-bold">{minutes}</span>
                    <div className="text-sm text-gray-300">Minutes</div>
                  </div>
                  {/* Seconds */}
                  <div className="bg-red-700 py-6 px-8 rounded-xl shadow-xl transform transition duration-300 hover:scale-105 animate__animated animate__fadeIn">
                    <span className="text-4xl sm:text-5xl font-bold">{seconds}</span>
                    <div className="text-sm text-gray-300">Seconds</div>
                  </div>
                </div>
              )}
            />
          </div>

          <p className="text-lg sm:text-xl md:text-2xl font-light animate__animated animate__fadeIn animate__delay-4s">
            Stay tuned for something exciting!
          </p>

          {/* Optional: Add a CTA button */}
          <button className="bg-yellow-500 text-black py-3 px-8 rounded-full text-lg font-semibold hover:bg-yellow-600 transform transition duration-300 mt-6">
            Notify Me!
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
