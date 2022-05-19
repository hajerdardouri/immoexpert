import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
function NavBarMobile() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="navbar  bg-base-100 mb-10 shadow-xl w-full rounded-box navbar-start drawer-side md:hidden">
      <div>
        <>
          {showSidebar ? (
            <button
              className="flex text-4xl text-white items-center cursor-pointer fixed left-2 z-50"
              onClick={() => setShowSidebar(!showSidebar)}
            >
              <label className="btn btn-base bg-base-200 drawer-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className=" inline-block w-5 h-5 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </button>
          ) : (
            <button
              className="flex text-4xl text-white items-center cursor-pointer fixed left-2 z-50"
              onClick={() => setShowSidebar(!showSidebar)}
            >
              <label
                htmlFor="my-drawer"
                className="btn btn-base bg-base-100 drawer-button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className=" inline-block w-5 h-5 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>

              <rect width="100" height="10"></rect>
              <rect y="30" width="100" height="10"></rect>
              <rect y="60" width="100" height="10"></rect>
            </button>
          )}
          <div
            className={`top-0 left-0 w-[35vw] bg-base-200 fixed h-full z-40 ease-in-out duration-300 ${
              showSidebar ? "-translate-x-0 " : "-translate-x-full"
            }`}
          >
            <div className="flex-col-1 ">
              <ul className="flex flex-center h-screen flex-shrink-0 drawer drawer-mobile menu py-20 px-3 overflow-y-auto bg-base-200  md:hidden">
                <li>
                  <Link href="/" passHref>
                    <a>Home</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </>
      </div>

      <div className="navbar-center pl-14">
        <Link href="/">
          <a className="btn btn-ghost normal-case  text-xl">ImmoExpert</a>
        </Link>
      </div>
      <div className="flex navbar-end pr-4">
        <label
          htmlFor="my-modal"
          className="btn btn-outline  btn-sm modal-button"
        >
          SIGN IN
        </label>
      </div>
      <div className="navbar-start">
                <label
                  htmlFor="my-modal-5"
                  className="btn btn-outline btn-sm modal-button "
                >
                  Sign Up
                </label>
              </div>
      <div>
        <button className="btn  modal-button btn-square bg-base-100">
          <Link href="/wishlist">
            <a>
              <label>
                <AiFillHeart size={30} />
              </label>
            </a>
          </Link>
        </button>
      </div>
    </div>
  );
}
export default NavBarMobile;
