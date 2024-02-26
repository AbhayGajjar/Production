import React from 'react'

export const metadata = {
    title: "Footer: NeytRAM"
}

const Footer = () => {
    return (
        <div>
        <footer className="bg-[#000435] ">
            <div className="">
                <div className="flex justify-center p-8">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white">
                        Neyt<span className="text-orange-500">RAM</span>
                    </h1>
                </div>
                <div className="divider m-0"></div>
                <div className="flex flex-col justify-center items-center  sm:flex-row sm:justify-between p-2 pt-1">
                    <div className="text-center sm:text-left">
                        <p className="text-xs sm:text-sm text-white">
                            Copyright © 2024 - All right reserved
                        </p>
                    </div>
                    <div className="text-center sm:text-right flex  ">
                        <a href=""><p className="text-xs sm:text-sm p-2 hover:text-white">Terms of Services</p></a>
                        <a href=""><p className="text-xs sm:text-sm p-2 hover:text-white">Privacy Policy</p></a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
    )
}

export default Footer