import React from 'react';
import { MdPeopleAlt } from "react-icons/md";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import "@/styles/Feacture.css"

export const metadata = {
  title: "Freture : NeytRAM"
}

const Feacture = () => {
  return (

    <div className='main1 relative'>
      <div className="container mx-auto p-8 bg-gradient-to-r from-blueviolet to-lightgreen">
        <h4>Discover Nine Compelling Reasons Why</h4>
        <h1 className=" text-black text-3xl font-bold mb-8">Neyram CRM Software is Your Best Choice.</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {/* Feacture Card Start */}

          <div className="box hover: transform transition duration-300 hover:scale-105 bg-white hover:shadow-lg hover:shadow-violet-300 rounded-lg p-8 text-center">
            <MdPeopleAlt className="h-20 mx-auto text-orange-500 mb-4 scale-[3.1]" />
            <h3 className="text-xl text-black font-semibold mb-2">Limitless Coustomers</h3>
            <p className="text-gray-600 text-center mb-4">Seamlessly create and oversee your customers in our optical solution, with zero additional fees for customer creation</p>

          </div>
          <div className="box hover: transform transition duration-300 hover:scale-105 bg-white hover:shadow-lg hover:shadow-violet-300 rounded-lg p-8 text-center">
            <SiHomeassistantcommunitystore className="h-20 mx-auto text-orange-500 mb-4 scale-[3.1]" />
            <h3 className="text-xl text-black font-semibold mb-2">Optical, Exclusively Yours</h3>
            <p className="text-gray-600 text-center mb-4">Experience the refined sophistication of Optical Elegance, exclusively crafted to elevate your visual experience with style and function.</p>

          </div>
          <div className="box hover: transform transition duration-300 hover:scale-105 bg-white hover:shadow-lg hover:shadow-violet-300 rounded-lg p-8 text-center">
            <MdPeopleAlt className="h-20 mx-auto text-orange-500 mb-4 scale-[3.1]" />
            <h3 className="text-xl text-black font-semibold mb-2"> All-In-One Optics Solution</h3>
            <p className="text-gray-600 text-center mb-4">Revolutionary optics integrate multiple technologies for peak performance in one user-friendly platform, maximizing efficiency and ease of use</p>

          </div>
          <div className="box hover: transform transition duration-300 hover:scale-105 bg-white hover:shadow-lg hover:shadow-violet-300 rounded-lg p-8 text-center">
            <MdPeopleAlt className="h-20 mx-auto text-orange-500 mb-4 scale-[3.1]" />
            <h3 className="text-xl text-black font-semibold mb-2">Cost Effective</h3>
            <p className="text-gray-600 text-center mb-4">Budget-friendly solution maximizes efficiency, minimizes expenses while maintaining quality, perfect for cost-conscious consumers seeking high value for money.</p>

          </div>
          <div className="box hover: transform transition duration-300 hover:scale-105 bg-white hover:shadow-lg hover:shadow-violet-300 rounded-lg p-8 text-center">
            <MdPeopleAlt className="h-20 mx-auto text-orange-500 mb-4 scale-[3.1]" />
            <h3 className="text-xl text-black font-semibold mb-2"> Mobile Assistance Available</h3>
            <p className="text-gray-600 text-center mb-4">Free phone support provided as a complimentary service, offering assistance and guidance to customers at no extra cost, ensuring a seamless experience.</p>

          </div>
          <div className="box hover: transform transition duration-300 hover:scale-105 bg-white hover:shadow-lg hover:shadow-violet-300 rounded-lg p-8 text-center">
            <MdPeopleAlt className="h-20 mx-auto text-orange-500 mb-4 scale-[3.1]" />
            <h3 className="text-xl text-black font-semibold mb-2">Frequent Upgrades Included</h3>
            <p className="text-gray-600 text-center mb-4">Regular updates and improvements are part of the package, ensuring ongoing enhancements to the product or service, keeping it up-to-date and efficient</p>

          </div>
          <div className="box hover: transform transition duration-300 hover:scale-105 bg-white hover:shadow-lg hover:shadow-violet-300 rounded-lg p-8 text-center">
            <MdPeopleAlt className="h-20 mx-auto text-orange-500 mb-4 scale-[3.1]" />
            <h3 className="text-xl text-black font-semibold mb-2">Unlimited Cloud Storage</h3>
            <p className="text-gray-600 text-center mb-4">Access to limitless online storage space, allowing users to store and manage files, data, and media without worrying about capacity restrictions.</p>

          </div>
          <div className="box hover: transform transition duration-300 hover:scale-105 bg-white hover:shadow-lg hover:shadow-violet-300 rounded-lg p-8 text-center">
            <MdPeopleAlt className="h-20 mx-auto text-orange-500 mb-4 scale-[3.1]" />
            <h3 className="text-xl text-black font-semibold mb-2">Advanced Prescription Solution</h3>
            <p className="text-gray-600 text-center mb-4">Cutting-edge software streamlines prescription management, enhancing accuracy and efficiency for optimal patient care and workflow.</p>

          </div>




        </div>
        <div className='h-[20px]'></div>
        <div className='flex items-center justify-center' >
          <button className="w-52 h-14  bg-white cursor-pointer rounded-md border-2 border-[#F97316] shadow-[inset_0px_-2px_0px_1px_#f59e0b] group hover:bg-[#F97316] transition duration-300 ease-in-out">
            <span className="font-medium text-[#333] text-[18px] group-hover:text-white">Explore More</span>
          </button>
        </div>

      </div>
    </div>

  )
}

export default Feacture