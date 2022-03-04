import { Link } from "react-scroll"
import React, { useEffect, useState } from "react";
import {BsPlus} from 'react-icons/bs'
function NavBarMobile(){
    const [showSidebar, setShowSidebar] = useState(false);
    return(
            <div class="navbar  bg-base-100 mb-10 shadow-xl w-full rounded-box navbar-start drawer-side md:hidden">            
                <div>
                    <>
                        {showSidebar ? (
                            <button
                            className="flex text-4xl text-white items-center cursor-pointer fixed left-2 z-50"
                            onClick={() => setShowSidebar(!showSidebar)}
                            >
                            <label class="btn btn-base bg-base-200 drawer-button">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class=" inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                            </button>
                        ) : (
                            <button
                            className="flex text-4xl text-white items-center cursor-pointer fixed left-2 z-50"
                            onClick={() => setShowSidebar(!showSidebar)}
                            >
                            <label for="my-drawer" class="btn btn-base bg-base-100 drawer-button">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class=" inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                            
                            <rect width="100" height="10"></rect>
                            <rect y="30" width="100" height="10"></rect> 
                            <rect y="60" width="100" height="10"></rect>
                            </button>
                        )}
                            <div
                                className={`top-0 left-0 w-[35vw] bg-base-200 fixed h-full z-40 ease-in-out duration-300 ${
                                showSidebar ? "-translate-x-0 " : "-translate-x-full"
                                }`}>
                                <div class='flex-col-1 '>
                                    <ul class="flex flex-center h-screen flex-shrink-0 drawer drawer-mobile menu py-20 px-3 overflow-y-auto bg-base-200  md:hidden">
                                        <Link href="/"><li><a>Home</a></li></Link>
                                        <Link href="/profile"><li><a>Profile</a></li></Link>
                                        <Link href="/wishlist"><li><a>Wishlist</a></li></Link>
                                        
                                    </ul>
                                </div>
                            </div>
                    </>
                </div>
    
                <div class="navbar-center pl-14">
                    <Link href="/"><a class="btn btn-ghost normal-case  text-xl">ImmoExpert</a></Link>
                </div>
                <div class="flex navbar-end pr-4">
                    <label for="my-modal" class="btn btn-outline  btn-sm modal-button">SIGN IN</label>
                </div>
                <div >
                <button class="btn btn-sm btn-outline btn-square bg-base-100">
                      <Link href="/addpost"><label><BsPlus size={30}/></label></Link>
                    </button>
                </div>
            </div>
    )
}
export default NavBarMobile