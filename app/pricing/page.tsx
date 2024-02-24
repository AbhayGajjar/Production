"use client"
import React, { useState } from 'react';
import { FcInfo } from 'react-icons/fc';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="py-10 md:px-14 p-4 max-w-screen-2xl mx-auto" id="pricing">
      <div className="text-center">
        <h2 className="md:text-5xl text-2xl font-extrabold text-gray-900 mb-2">Here are all our plans</h2>
        <p className="text-tertiary md:w-1/3 mx-auto">A simple paragraph is comprised of three major components. The which is often a declarative sentence.</p>
        <div className="mt-16">
          <label htmlFor="toggle" className="inline-flex items-center cursor-pointer">
            <span className="mr-8 text-2xl font-semibold text-[#232867]">Monthly</span>
            <div className="w-14 h-6  transition duration-200 bg-gray-300 ease-in-out rounded-full">
              <div className={`w-6 h-6 transition duration-200 ease-in-out rounded-full ${isYearly ? 'bg-purple-500 ml-8' : 'bg-purple-500'}`}></div>
            </div>
            <span className="ml-8 text-2xl font-semibold text-[#232867]">Yearly</span>
          </label>
          <input
            type="checkbox"
            id="toggle"
            className="hidden  "
            checked={isYearly}
            onChange={() => setIsYearly(!isYearly)}
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10 mt-20 md:w-11/12 mx-auto">
        <div className="border py-10 md:px-6 px-4 rounded-lg shadow-3xl hover:cursor-pointer transform transition duration-300 hover:scale-110  hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.30)]">
          <h3 className="text-3xl font-bold text-center text-[#232867]">Start</h3>
          <p className="text-tertiary text-center my-6">A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className="mt-5 text-center text-[#232867] text-4xl font-bold">
            {isYearly ? '$199' : '$19'}<span className="text-base text-tertiary font-medium">/{isYearly ? 'year' : 'month'}</span>
          </p>
          <ul className="mt-4 space-y-2 px-4">
            <li className="flex items-center">
              <FcInfo className="mr-2 text-xl" />
               free
            </li>
            <li className="flex items-center">
              <FcInfo className="mr-2 text-xl" />
              Homework check
            </li>
            <li className="flex items-center">
              <FcInfo className="mr-2 text-xl" />
              Additional practical task
            </li>
            <li className="flex items-center">
              <FcInfo className="mr-2 text-xl" />
              Monthly conferences
            </li>
            <li className="flex items-center">
              <FcInfo className="mr-2 text-xl" />
              Personal advice from teachers
            </li>
          </ul>
          {/* button */}
          <div className="w-full mx-auto flex items-center justify-center mt-5">
            <button className="mt-6 px-10 text-[#000435] hover:text-white   py-2 border border-[#000435] hover:bg-gradient-to-r from-[#232c97] to-90%   hover:border-white   hover:transform transition duration-300 hover:scale-110 font-semibold rounded-lg">
              Get Started
            </button>
          </div>
        </div>
        <div  className="border py-10 md:px-6 px-4 rounded-lg shadow-3xl hover:cursor-pointer transform transition duration-300 hover:scale-110  hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.30)]">
          <h3 className="text-3xl font-bold text-center text-black">Advanced</h3>
          <p className="text-tertiary text-black text-center my-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis, orci nec condimentum luctus, odio magna bibendum sapien, non luctus purus purus nec odio.</p>
          <p className="mt-5 text-center text-[#232867] text-4xl font-bold">
            {isYearly ? '$399' : '$39'}<span className="text-base text-tertiary font-medium">/{isYearly ? 'year' : 'month'}</span>
          </p>
          <ul className="mt-4 space-y-2 px-4">
            <li className="flex items-center">
              <FcInfo className="mr-2 text-xl" />
              {isYearly ? '$399' : 'hduiaw'}
            </li>
            <li className="flex items-center">
              <FcInfo className="mr-2 text-xl" />
              Homework check
            </li>
            <li className="flex items-center">
              <FcInfo className="mr-2 text-xl" />
              Additional practical task
            </li>
            <li className="flex items-center">
              <FcInfo className="mr-2 text-xl" />
              Monthly conferences
            </li>
            <li className="flex items-center">
              <FcInfo className="mr-2 text-xl" />
              Personal advice from teachers
            </li>
          </ul>
          {/* button */}
          <div className="w-full mx-auto flex items-center justify-center mt-5">
            <button className="mt-6 px-10 text-[#232867] py-2 border border-[#232867]  hover:text-black transform transition duration-300 hover:scale-110 font-semibold rounded-lg">
              Get Started
            </button>
          </div>
        </div>

        <div className="border py-10 md:px-6 px-4 rounded-lg shadow-3xl hover:cursor-pointer transform transition duration-300 hover:scale-110 hover:bg-violet-100 hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.30)]">
          <h3 className="text-3xl font-bold text-center text-[#232867]">Premium</h3>
          <p className="text-tertiary text-center my-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis, orci nec condimentum luctus, odio magna bibendum sapien, non luctus purus purus nec odio.</p>
          <p className="mt-5 text-center text-[#232867] text-4xl font-bold">
            {isYearly ? '$699' : '$59'}<span className="text-base text-tertiary font-medium">/{isYearly ? 'year' : 'month'}</span>
          </p>
          <ul className="mt-4 space-y-2 px-4">
            <li className="flex items-center">
              <FcInfo className="mr-2 text-xl" />
              {isYearly ? '$699' : 'jaIUSIdb'}
            </li>
            <li className="flex items-center">
              <FcInfo className="mr-2 text-xl" />
              Homework check
            </li>
            <li className="flex items-center">
              <FcInfo className="mr-2 text-xl" />
              Additional practical task
            </li>
            <li className="flex items-center">
              <FcInfo className="mr-2 text-xl" />
              Monthly conferences
            </li>
            <li className="flex items-center">
              <FcInfo className="mr-2 text-xl" />
              Personal advice from teachers
            </li>
          </ul>
          {/* button */}
          <div className="w-full mx-auto flex items-center justify-center mt-5">
            <button className="mt-6 px-10 text-[#232867] py-2 border border-[#232867]  hover:text-black transform transition duration-300 hover:scale-110 font-semibold rounded-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
