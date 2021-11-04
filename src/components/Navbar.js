import React, { useState } from "react"
import { Link } from 'react-router-dom'
 
function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false)
    return (
        <div className="flex items-center h-20 px-6 justify-between shadow-sm bg-white relative z-50">
            <a className="flex-1 no-underline block h-8">
                {/* <img
                    src="https://gustui.s3.amazonaws.com/gustlogo.png"
                    className="h-full"
                /> */}
            </a>
            <div className="flex-none hidden md:flex md:justify-center md:h-full">
                <Link
                    to="/"
                    className="block h-full flex items-center mx-4 px-2 border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:text-blue-400"
                >
                    Home
                </Link>
                <Link
                    to="/blog"
                    className="block h-full flex items-center mx-4 px-2 border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:text-blue-400"
                >
                    Blog
                </Link>
                <Link
                    to="/work"
                    className="block h-full flex items-center mx-4 px-2 border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:text-blue-400"
                >
                    Work
                </Link>
               
            </div>
            {/* <div className="flex-1 items-center justify-end hidden md:flex">
                <Avatar
                    image="https://gustui.s3.amazonaws.com/avatar.png"
                    className="cursor-pointer my-2"
                />
            </div> */}
            <button
                icon={mobileOpen ? 'faTimes' : 'faBars'}
                onClick={() => setMobileOpen(!mobileOpen)}
                className="text-black text-3xl cursor-pointer md:hidden"
            ></button>
            {mobileOpen && (
                <div className="bg-white absolute top-full left-0 flex flex-col w-full py-8 shadow-sm lg:hidden">
                    <div className="flex-1 flex flex-col items-center text-xl">
                        <Link
                            href="/"
                            className="no-underline px-2 my-2 font-medium hover:text-blue-400"
                        >
                           Home
                        </Link>
                        <Link
                            to="/blog"
                            className="no-underline px-2 py-1 my-2 font-medium border-b-2 border-black hover:text-blue-400"
                        >
                            Blog
                        </Link>
                        <Link
                            to="/blog"
                            className="no-underline px-2 my-2 font-medium hover:text-blue-400"
                        >
                            Work
                        </Link>
                        
                        {/* <Avatar
                            image="https://gustui.s3.amazonaws.com/avatar.png"
                            status="online"
                            className="cursor-pointer my-2"
                        /> */}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar
