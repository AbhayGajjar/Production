import React from 'react'

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 flex justify-evenly absolute  bg-transparent">
            <div className="navbar-start  ">
                {/* <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <a>Item 1</a>
                        </li>
                        <li>
                            <a>Item 1</a>
                        </li>
                        <li>
                            <a>Item 1</a>
                        </li>
                        <li>
                            <a>Item 1</a>
                        </li>
                    </ul>
                </div> */}
                <a className="btn btn-ghost text-xl" href="#">
                    {' '}
                    <h3 className={` font-bold text-2xl mr-2 `}>
                        Neyt<span className="text-secondary">RAM</span>
                    </h3>
                </a>
            </div>
            <div className="navbar-center  hidden lg:flex">
                <ul className="menu menu-horizontal px-1 ">


                    <li>
                        <a>Home</a>
                    </li>
                    <li>
                        <a>Features</a>
                    </li>
                    <li>
                        <a>Prescription</a>
                    </li>
                    <li>
                        <a>Blog</a>
                    </li>
                    <li>
                        <a>Pricing</a>
                    </li>
                    <li>
                        <a>Contact</a>
                    </li>
                    <li>
                        <a>Login</a>
                    </li>

                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn hidden sm:flex">Login</a>
                <div className="drawer drawer-end w-[60px] block sm:hidden">
                    <input
                        id="my-drawer-4"
                        type="checkbox"
                        className="drawer-toggle"
                    />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label
                            htmlFor="my-drawer-4"
                            className="drawer-button btn-primary bg-base-200 hover:bg-primary btn  border-white"
                        >
                            {/* <GoChevronLeft
                                className={
                                    'h-8 w-8 delay-400 duration-500 transition-all text-primary hover:text-white '
                                }
                            /> */}

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 delay-400 duration-500 transition-all text-primary hover:text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>

                        </label>
                    </div>
                    <div className="drawer-side  z-50">
                        <label
                            htmlFor="my-drawer-4"
                            aria-label="close sidebar"
                            className="drawer-overlay"
                        ></label>


                        <ul className="menu p-4 w-80 min-h-full items-center  uppercase    bg-white text-base-content ">
                            <div className='w-full text-2xl font-semibold'>
                                <h2>Neyt<span className='text-[#F97316]'>Ram</span></h2>
                            </div>

                            {/* Sidebar content here */}
                            <div className=' gap-2  font-semibold text-2xl flex my-16  items-center justify-center flex-col w-52 h-80'>



                                <li >
                                    <a>Home</a>
                                </li>
                                <li>
                                    <a>Features</a>
                                </li>
                                <li>
                                    <a>Prescription</a>
                                </li>
                                <li>
                                    <a>Blog</a>
                                </li>
                                <li>
                                    <a>Pricing</a>
                                </li>
                                <li>
                                    <a>Contact</a>
                                </li>

                            </div>


                            {/* button start */}



                            <div className='bottom-3 absolute w-full'>
                            <div className="divider"></div>
                                <div className="text-center">
                                    <button className=' btn  w-52 mb-6 '>LogIn</button>
                                </div>

                                <div>
                                    <h4 className='text-center font-medium text-[#000435] tracking-[.05em]'>Contact</h4>
                                </div>
                                <div className='text-center'>
                                    <h5>+919712472604</h5>
                                    <h5 className='tracking-[.05em] leading-none lowercase'>neytram.in@gmail.com</h5>
                                </div>
                            </div>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar