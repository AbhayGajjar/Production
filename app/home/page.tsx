
import React from 'react'

const Home = () => {
    return (


        <div className="h-screen">
            <div id="main" className="flex h-full">
                <div id="left" className="w-full md:w-1/2 flex items-center justify-end bg-cover bg-center bg-clip-text text-transparent md:h-screen" style={{ backgroundImage: "url('/neytram left.png')" }}>
                    <h1 className="text-[14vw] w-11/12 md:text-[11vh] text-end  lg:text-[25vh] font-extrabold ">NEYT</h1>
                </div>
                <div id="right" className="w-full  md:w-1/2 flex items-center justify-start bg-cover bg-center object-cover md:h-screen" style={{ backgroundImage: "url('/neytram right.png')" }}>
                    <h1 className="text-[14vw] w-11/12 md:text-[11vh]   lg:text-[25vh] font-extrabold text-[#ffaa00]">RAM</h1>
                </div>
            </div>
        </div>

    )
}

export default Home