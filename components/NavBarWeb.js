import Link from "next/Link"
import { BsFillPersonFill } from "react-icons/bs";
import { BsPlusSquareFill } from "react-icons/bs";
import {AiFillHeart} from 'react-icons/ai'
import {IoLanguageOutline} from 'react-icons/io5'
function NavBarWeb(){
    return(
        <div>
            <div class=" mb-10 hidden md:block">
                <nav class="navbar bg-base-100">
                    <div class="flex-1">
                        <Link href="/"><a class="btn btn-ghost normal-case text-xl">ImmoExpert</a></Link>
                    </div>
                    <div class="flex-col">
                        <ul class="menu menu-horizontal p-0 space-x-5">
                            <div>
                                <button class="btn  modal-button btn-square bg-base-100">
                                    <Link href="/profile"><label ><BsFillPersonFill size={30}/></label></Link>  
                                </button>
                            </div>
                            <div>
                                <button class="btn  modal-button btn-square bg-base-100">
                                    <Link href="/wishlist"><label ><AiFillHeart size={30}/></label></Link>
                                </button>
                            </div>
                    
                            <li tabindex="0">
                                <a><IoLanguageOutline size={20}/>
                                </a>
                                <ul class="p-2">
                                    <li><a>french</a></li>
                                    <li><a>Arabic</a></li>
                                    <li><a>English</a></li>
                                </ul>
                            </li>
                            <div class="navbar-start">
                                <label for="my-modal" class="btn btn-outline modal-button ">Sign In</label>
                            </div>
                        
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}
export default NavBarWeb 