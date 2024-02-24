"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { CgProfile } from "react-icons/cg";
import { FiFileText } from "react-icons/fi";
import { MdBusinessCenter } from "react-icons/md";
import { CiCreditCard1 } from "react-icons/ci";
import { FiBookOpen } from "react-icons/fi";
import { BiDownArrowAlt } from "react-icons/bi";
import { IoPrintOutline } from "react-icons/io5";

const Detail = () => {
    const [showProperty, setshowProperty] = useState({
        profile: true,
        transection: false,
        legender: false
    })
    return (
        <div className='main w-full h-screen px-3 py-3'>
            <div className="box w-full h-full">
                {/* navbar start */}

                <div className='heading  w-full '>
                    <div className='button1 gap-10 scale-[1] flex py-2 px-2 '>
                        <div className='flex'>

                            <div className={`${showProperty.transection ? "text-[#4c3cce]" : ""}`}>
                                <CiCreditCard1 />
                            </div>
                            <div className='ml-1 text-[13px]'>
                                <button onClick={() => {
                                    setshowProperty({
                                        ...showProperty,
                                        profile: false,
                                        legender: false,
                                        transection: true
                                    })
                                }} className={`${showProperty.transection ? " text-[#4c3cce] border-b-2  border-[#4c3cce]" : ""}`}>Transection</button>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className={`${showProperty.profile ? "text-[#4c3cce]" : ""}`}>
                                <CgProfile />
                            </div>
                            <div className='ml-1 text-[13px]'>
                                <button onClick={() => {
                                    setshowProperty({
                                        ...showProperty,
                                        profile: true,
                                        legender: false,
                                        transection: false
                                    })
                                }} className={`${showProperty.profile ? " text-[#4c3cce] border-b-2  border-[#4c3cce]" : ""}`}>Profile</button>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className={`${showProperty.legender ? "text-[#4c3cce]" : ""}`}>
                                <FiBookOpen />
                            </div>
                            <div className='ml-1 text-[13px]'>
                                <button onClick={() => {
                                    setshowProperty({
                                        ...showProperty,
                                        profile: false,
                                        transection: false,
                                        legender: true,

                                    })
                                }} className={`${showProperty.legender ? " text-[#4c3cce] border-b-2  border-[#4c3cce]" : ""}`} >Ledger(Statement)</button>
                            </div>
                        </div>

                    </div>
                </div>
                <hr />

                {/* navbar End */}


                {/* Profile start */}
                {showProperty.profile && <>
                    <div className='main flex flex-wrap mt-3'>
                        <div className="card w-full sm:w-[45%] lg:w-[30vw] h-auto sm:h-96 border border-zinc-300 rounded-xl hover:shadow-lg mb-3 sm:mr-3">
                            <div className="heading w-full h-[5vh] px-2 py-2 flex rounded-t-xl bg-zinc-300">
                                <div>
                                    <FiFileText className='mt-1' />
                                </div>
                                <div>
                                    <h4 className='text-[15px] ml-1'>General Details</h4>
                                </div>
                            </div>
                            <div className='main1 flex flex-col sm:flex-row '>
                                <div className='px-3 py-1   '>
                                    <h6 className='text-zinc-500'>Party Name</h6>
                                    <h4 className='uppercase'>Ambaji Motor Driving School</h4>
                                </div>
                                <div className='px-3 py-1  '>
                                    <h6 className='text-zinc-500'>Party Type</h6>
                                    <h4>Customer</h4>
                                </div>
                            </div>
                            <div className='main1 mt-3 justify-between flex flex-col sm:flex-row'>
                                <div className='px-3 py-1'>
                                    <h6 className='text-zinc-500'>Mobile Number</h6>
                                    <h4 className='uppercase'>9313337362</h4>
                                </div>
                                <div className='px-3 py-1 mr-[80px]'>
                                    <h6 className='text-zinc-500'>Party Category</h6>
                                    <h4>-</h4>
                                </div>
                            </div>
                            <div className='px-3 py-1 mt-3'>
                                <h6 className='text-zinc-500'>Email</h6>
                                <h4 className='uppercase'>-</h4>
                            </div>
                            <div className='px-3 py-1 mt-5'>
                                <h6 className='text-zinc-500'>Opening Balance</h6>
                                <h4 className='uppercase'>₹0</h4>
                            </div>
                        </div>
                        <div className="card w-full sm:w-[45%] lg:w-[30vw] h-auto sm:h-96 ml-0 sm:ml-3 border border-zinc-300 rounded-xl hover:shadow-lg mb-3">
                            <div className="heading w-full h-[5vh] px-2 py-2 flex rounded-t-xl bg-zinc-300">
                                <div>
                                    <MdBusinessCenter className='mt-1' />
                                </div>
                                <div>
                                    <h4 className='text-[15px] ml-1'>Business Details</h4>
                                </div>
                            </div>
                            <div className='main1 flex justify-between mr-[80px]'>
                                <div className='px-3 py-1'>
                                    <h6 className='text-zinc-500'>GSTN</h6>
                                    <h4 className='uppercase'>-</h4>
                                </div>
                                <div className='px-3 py-1'>
                                    <h6 className='text-zinc-500'>PAN Number</h6>
                                    <h4>-</h4>
                                </div>
                            </div>
                            <div className='px-3 py-1 mt-3'>
                                <h6 className='text-zinc-500'>Billing Address</h6>
                                <h4 className='uppercase'>-</h4>
                            </div>
                            <div className='px-3 py-1 mt-5'>
                                <h6 className='text-zinc-500'>Shipping Address</h6>
                                <h4 className='uppercase'>-</h4>
                            </div>
                            <Link href={"/detail"}>
                                <div className='px-3 py-1 mt-12'>
                                    <h3 className='text-[#0c8ce9] hover:text-[#0862a3]'>Manage Shipping Address</h3>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='main flex flex-col mt-3'>
                        <div className="card w-full sm:w-[45%] lg:w-[30vw] h-auto sm:h-32 mt-3 border border-zinc-300 rounded-xl hover:shadow-lg">
                            <div className="heading w-full h-[5vh] px-2 py-2 flex rounded-t-xl bg-zinc-300">
                                <div>
                                    <FiFileText className='mt-1' />
                                </div>
                                <div>
                                    <h4 className='text-[15px] ml-1'>Card Details</h4>
                                </div>
                            </div>
                            <div className='main1 flex justify-between'>
                                <div className='px-3 py-1'>
                                    <h6 className='text-zinc-500'>Credit Period</h6>
                                    <h4 className='uppercase'>30 DAY</h4>
                                </div>
                                <div className='px-3 py-1 mr-[80px]'>
                                    <h6 className='text-zinc-500'>Credit Limit</h6>
                                    <h4>-</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
                }
                {/* Profile End  */}


                {/* Transection start */}

                {showProperty.transection && <>
                    <div className="card w-full sm:w-[45%] lg:w-[30vw] mt-2 h-auto sm:h-96 border border-zinc-300 rounded-xl hover:shadow-lg mb-3 sm:mr-3">
                        <div className="heading w-full h-[5vh] px-2 py-2 flex rounded-t-xl bg-zinc-300">
                            <div>
                                <FiFileText className='mt-1' />
                            </div>
                            <div>
                                <h4 className='text-[15px] ml-1'>General Details</h4>
                            </div>
                        </div>
                        <div className='main1 flex flex-col sm:flex-row '>
                            <div className='px-3 py-1   '>
                                <h6 className='text-zinc-500'>Party Name</h6>
                                <h4 className='uppercase'>Ambaji Motor Driving School</h4>
                            </div>
                            <div className='px-3 py-1  '>
                                <h6 className='text-zinc-500'>Party Type</h6>
                                <h4>Customer</h4>
                            </div>
                        </div>
                        <div className='main1 mt-3 justify-between flex flex-col sm:flex-row'>
                            <div className='px-3 py-1'>
                                <h6 className='text-zinc-500'>Mobile Number</h6>
                                <h4 className='uppercase'>9313337362</h4>
                            </div>
                            <div className='px-3 py-1 mr-[80px]'>
                                <h6 className='text-zinc-500'>Party Category</h6>
                                <h4>-</h4>
                            </div>
                        </div>
                        <div className='px-3 py-1 mt-3'>
                            <h6 className='text-zinc-500'>Email</h6>
                            <h4 className='uppercase'>-</h4>
                        </div>
                        <div className='px-3 py-1 mt-5'>
                            <h6 className='text-zinc-500'>Opening Balance</h6>
                            <h4 className='uppercase'>₹0</h4>
                        </div>
                    </div>
                </>
                }

                {/* Transection End  */}



                {/* legender start */}

                {
                    showProperty.legender &&
                    <>

                        <div className='relative px-3'>

                            <div className='main w-full h-screen flex'>
                                <div className="box mt-2 sm:mt-6 md:mt-10 lg:mt-16 h-[50vh] sm:h-[60vh] md:h-[70vh] w-[90vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] rounded-xl border border-zinc-300">
                                    <div className="main px-4 py-4">
                                        <div className="main1">
                                            <div className='flex flex-col sm:flex-row justify-between'>
                                                <div className='mb-3 sm:mb-0'>
                                                    <h1 className='text-xl sm:text-2xl font-semibold'>DOLPHIN SOFTWARE TECHNOLOGIES</h1>
                                                    <p className='text-[12px] sm:text-base text-zinc-400'>Phone No: 9313337362</p>
                                                </div>
                                                <div>
                                                    <h2 className='text-[18px] sm:text-xl text-zinc-600 font-semibold'>Party Ledger</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='border-t-2 border-zinc-300 mt-3'></div>
                                        <div className="main2 flex flex-col sm:flex-row w-full justify-between">
                                            <div className="left mt-3 sm:mt-0 text-[15px] sm:text-base sm:w-[50%]">
                                                <div>To,</div>
                                                <div className='font-bold'>
                                                    AMBAJI MOTOR DRIVING SCHOOL
                                                </div>
                                                <div className='mt-1'>
                                                    9313337362
                                                </div>
                                            </div>
                                            <div className="Right mt-2 sm:ml-3 sm:w-[50%]">
                                                <div className='w-full h-24 sm:w-64 border border-zinc-400'>
                                                    <div className='text-end mt-3 mr-1 text-[12px]'>
                                                        2023-2-4 2023-5-6
                                                    </div>
                                                    <div className='h-[10px]'></div>
                                                    <div className='text-end border-t-2 mr-1 text-[12px] border-zinc-300'>
                                                        <p className='mt-2'>Total Receivable</p>
                                                        <h2 className='font-bold'>10000</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                }

                {/* legender End  */}

            </div>
        </div>
    )
}

export default Detail