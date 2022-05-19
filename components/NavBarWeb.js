import { AiFillHeart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

import { IoLanguageOutline } from "react-icons/io5";
import Link from "next/link";

function NavBarWeb() {
  return (
    <div>
      <div className=" mb-10 hidden md:block">
        <nav className="navbar bg-base-100">
          <div className="flex-1">
            <Link href="/">
              <a className="btn btn-ghost normal-case text-xl">ImmoExpert</a>
            </Link>
          </div>
          <div className="flex-col">
            <ul className="menu menu-horizontal p-0 space-x-5">
              <div>
                <button className="btn  modal-button btn-square bg-base-100">
                  <Link href="/profile" passHref>
                    <a>
                      <label>
                        <CgProfile size={30} />
                      </label>
                    </a>
                  </Link>
                </button>
              </div>
              <div>
                <button className="btn  modal-button btn-square bg-base-100">
                  <Link href="/wishlist" passHref>
                    <a>
                      <label>
                        <AiFillHeart size={30} />
                      </label>
                    </a>
                  </Link>
                </button>
              </div>

              <li tabIndex="0">
                <a>
                  <IoLanguageOutline size={20} />
                </a>
                <ul className="p-2">
                  <li>
                    <a>french</a>
                  </li>
                  <li>
                    <a>Arabic</a>
                  </li>
                  <li>
                    <a>English</a>
                  </li>
                </ul>
              </li>
              <div className="navbar-start">
                <label
                  htmlFor="my-modal"
                  className="btn btn-outline modal-button "
                >
                  Sign In
                </label>
              </div>
              <div className="navbar-start">
                <label
                  htmlFor="my-modal-5"
                  className="btn btn-outline modal-button "
                >
                  Sign Up
                </label>
              </div>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
export default NavBarWeb;
