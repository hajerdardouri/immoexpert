import Link from "next/Link"
function NavBarWeb(){
    return(
        <div>
            <div class=" mb-10 hidden md:block">
                <nav class="navbar bg-base-100">
                    <div class="flex-1">
                        <a class="btn btn-ghost normal-case text-xl">ImmoExpert</a>
                    </div>
                    <div class="flex-col">
                        <ul class="menu menu-horizontal p-0">
                        <li><Link href="/"><a>Home</a></Link></li>
                        <li><Link href="/Search"><a>Search</a></Link></li>
                        <li><Link href="/Property"><a>Property</a></Link></li>
                        <li><Link href="/Projects"><a>Projects</a></Link></li>
                        <li><Link href="/Services"><a>Services</a></Link></li>          
                            <li tabindex="0">
                                <a>Language
                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                                </a>
                                <ul class="p-2">
                                    <li><a>french</a></li>
                                    <li><a>Arabic</a></li>
                                    <li><a>English</a></li>
                                </ul>
                            </li>
                            <div class="navbar-start">
                                <label for="my-modal" class="btn btn-outline modal-button btn-xs sm:btn-sm md:btn-md ">Sign In</label>
                            </div>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}
export default NavBarWeb 