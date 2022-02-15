import React from 'react';
import { Transition } from '@headlessui/react';
import { Link } from "react-scroll";

function NavBar(){
    return(
        <div>
            <nav classname='shadow-sm fixed w-full z-10'>
                <div className='w-full'>
                    <div className='flex items-center h-20 w-full'>
                        <div className='flex items-center mx-20 justify-between w-full'>
                            <div className='flex justify-center ites-center flex-shrink-0'>
                                <h1 className='font-bold text-xl curse-pointer'>
                                    Immo<span className='text-blue-500'>Expert</span>
                                </h1>
                            </div>
                            <div className='hidden md:block'>
                                <div className='ml-10 flex items-baseline space-x-4'>
                                    <Link 
                                        activeClass="Home"
                                        to="Home"
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                        className='cursor-pointer text-blue-600 font-semibold px-3 py-2 text-md hover:front-black'>
                                        Home
                                    </Link>
                                    <Link 
                                        activeClass="Search"
                                        to="Search"
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                        className='cursor-pointer text-blue-600 font-semibold px-3 py-2 text-md hover:front-black'>
                                        Search
                                    </Link>
                                    <Link 
                                        activeClass="Property"
                                        to="Property"
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                        className='cursor-pointer text-blue-600 font-semibold px-3 py-2 text-md hover:front-black'>
                                        Home
                                    </Link>
                                    <Link 
                                        activeClass="Projects"
                                        to="Projects"
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                        className='cursor-pointer text-blue-600 font-semibold px-3 py-2 text-md hover:front-black'>
                                        Home
                                    </Link>
                                    <Link 
                                        activeClass="Services"
                                        to="Services"
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                        className='cursor-pointer text-blue-600 font-semibold px-3 py-2 text-md hover:front-black'>
                                        Home
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default NavBar 