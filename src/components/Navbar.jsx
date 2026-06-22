// import { Link } from 'react-router-dom'
// import React from 'react'

// const Navbar = () => {
//     return (
//         <div>
//             <div className="navbar fixed z-10 top-0 font-extrabold bg-orange-600 w-full flex justify-between">
//                 <div className="font-bold text-xl mx-3 my-5">myProtfolio</div>
//                 <div className="m-3 flex items-center">
//                     <span className="font-bold  text- mx-3  cursor-pointer"><Link to="/about">About Me</Link></span>
//                     <span className="font-bold  text- mx-3  cursor-pointer">Contact</span>
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default Navbar

import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-white/98 backdrop-blur-md shadow-lg border-b border-slate-200'
                : 'bg-white/90 backdrop-blur-md shadow-md border-b border-slate-200'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* Logo - Higher contrast */}
                    <Link
                        to="/"
                        className="text-xl font-bold bg-gradient-to-r from-gray-900 via-slate-800 to-teal-700 bg-clip-text text-transparent hover:scale-105 hover:shadow-md transition-all duration-200 px-2 py-1 rounded-lg hover:bg-slate-50/50"
                    >
                        MyProtfolio
                    </Link>

                    {/* Desktop Menu - Higher contrast */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link
                            to="/"
                            className="relative text-slate-800 font-semibold hover:text-teal-600 px-3 py-2 rounded-xl hover:bg-teal-50/80 transition-all duration-200 text-sm group"
                        >
                            <span>Home</span>
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full" />
                        </Link>
                        <Link
                            to="/about"
                            className="relative text-slate-800 font-semibold hover:text-teal-600 px-3 py-2 rounded-xl hover:bg-teal-50/80 transition-all duration-200 text-sm group"
                        >
                            <span>About</span>
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full" />
                        </Link>
                        <Link
                            to="/contact"
                            className="relative text-slate-800 font-semibold hover:text-teal-600 px-3 py-2 rounded-xl hover:bg-teal-50/80 transition-all duration-200 text-sm group"
                        >
                            <span>Contact</span>
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full" />
                        </Link>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 px-6 py-2.5 rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl active:scale-95 transition-all duration-200 border border-teal-200/50"
                        >
                            View Resume
                        </a>

                    </div>

                    {/* Mobile menu button - Higher contrast */}
                    <button className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-xl hover:bg-slate-100/80 transition-all duration-200 shadow-sm hover:shadow-md active:scale-95 p-2 backdrop-blur-sm">
                        <span className={`block w-6 h-0.5 bg-slate-900 transition-all duration-300 rounded origin-center ${scrolled ? 'translate-y-1' : ''
                            }`}></span>
                        <span className={`block w-6 h-0.5 bg-slate-900 transition-all duration-300 my-1.5 rounded origin-center ${scrolled ? 'opacity-90' : ''
                            }`}></span>
                        <span className={`block w-6 h-0.5 bg-slate-900 transition-all duration-300 -translate-y-1 rounded origin-center ${scrolled ? '-translate-y-2' : ''
                            }`}></span>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
