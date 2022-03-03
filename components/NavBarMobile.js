import { Link } from "react-scroll"
import Product from "./Product"
import React, { useEffect, useState } from "react";

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
                                        <li><Link href="/"><a>Home</a></Link></li>
                                        <li><Link href="/Search"><a>Search</a></Link></li>
                                        <li><Link href="/Property"><a>Property</a></Link></li>
                                        <li><Link href="/Projects"><a>Projects</a></Link></li>
                                        <li><Link href="/Services"><a>Services</a></Link></li>
                                    
                                        <li><Link href="/AboutUs"><a>About Us</a></Link></li>
                                        <li><Link href="/News"><a>News</a></Link></li>
                                        <li><Link href="/Favorites"><a>Favorites</a></Link></li>
                                        <li><Link href="/TermsofUse"><a>Terms of Use</a></Link></li>
                                        <li><Link href="/PrivacyPolicy"><a>Privacy Policy</a></Link></li>
                                        <li><Link href="/ContactUs"><a>Contact Us</a></Link></li>
                                    </ul>
                                </div>
                            </div>
                    </>
                </div>
                
                <div class="navbar-end">
                    <a class="btn btn-ghost normal-case  text-xl">ImmoExpert</a>
                </div>
                <div class="navbar-end">
                    <label for="my-modal" class="btn btn-outline  btn-sm modal-button">SIGN IN</label>
                </div>
            </div>

            // {/* <div class="flex-1 absolute right-9 py-5 md:hidden items-center justify-center ">
            //     <a class="btn btn-ghost normal-case text-xl block ">ImmoExpert</a>
            //     <div class="form-control px-3 w-70 ">
            //         <input type="text" placeholder="Search" class="input input-bordered"/>
            //     </div>
            // </div> */}
           
            // {/* <div class=" h-screen flex-shrink-0 drawer drawer-mobile w-screen py-3  md:hidden ">
            //     <input id="my-drawer-2" type="checkbox"  class="drawer-toggle"/>
            //     <div class="items-center justify-center drawer-content max-w-sm md:hidden">
            //         <label for="my-drawer-2" class="btn btn-square btn-ghost md:hidden">
            //             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current "><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            //         </label>
            //     </div> 

            //     <div class="drawer-side overflow-y-auto md:hidden ">
            //         <label for="my-drawer-2" class="drawer-overlay "></label>
            //         <ul class="flex flex-center menu py-6 px-3 overflow-y-auto w-2/4 bg-base-100 text-base-content md:hidden">
            //             <div class=" items-center justify-center drawer-content">
            //                 <label for="my-drawer-2" class="btn btn-square btn-ghost md:hidden">
            //                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class=" inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            //                 </label>
            //             </div>
            //             <div class='flex-col-1'>
            //                 <Link href="/"><li><a>Home</a></li></Link>
            //                 <Link href="/Search"><li><a>Search</a></li></Link>
            //                 <Link href="/Property"><li><a>Property</a></li></Link>
            //                 <Link href="/Projects"><li><a>Projects</a></li></Link>
            //                 <Link href="/Services"><li><a>Services</a></li></Link>
            //             </div>
            //             <div class='flex-col-1'>
            //                 <Link href="/AboutUs"><li><a>About Us</a></li></Link>
            //                 <Link href="News"><li><a>News</a></li></Link>
            //                 <Link href="Favorites"><li><a>Favorites</a></li></Link>
            //                 <Link href="TermsofUse"><li><a>Terms of Use</a></li></Link>
            //                 <Link href="PrivacyPolicy"><li><a>Privacy Policy</a></li></Link>
            //                 <Link href="ContactUs"><li><a>Contact Us</a></li></Link>
            //             </div>
            //         </ul>
            //     </div>
            // </div> */}
           

    )
}
export default NavBarMobile