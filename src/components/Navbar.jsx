import SearchBar from "./SearchBar";
import { useState } from "react";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);


  const toggleMenu = () => {
      setShowMenu(!showMenu);
  }

  return (
    <>
      <div className="sticky top-0 z-40 flex items-center h-16 px-4 bg-white border-b border-gray-200 shadow-sm shrink-0 gap-x-4 sm:gap-x-6 sm:px-6 lg:px-8">
        <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden">
          <span className="sr-only">Open sidebar</span>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
        {/* Separator */}
        <div className="w-px h-6 bg-gray-200 lg:hidden" aria-hidden="true" />
        <div className="flex self-stretch flex-1 gap-x-4 lg:gap-x-6">
          <div className="relative flex flex-1" >
            <SearchBar />
          </div>

          <div className="flex items-center gap-x-4 lg:gap-x-6">
          <div className="date">
    <input type="date"/>
</div>
            <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
              <span className="sr-only">View notifications</span>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
              </svg>
            </button>
            {/* Separator */}
            <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200" aria-hidden="true" />
{/* profile */}

<div className="avatar online" onClick={toggleMenu}>
  <div className="w-10 h-10 rounded-full overflow-hidden">
    <img src="https://randomuser.me/api/portraits/men/34.jpg" className="object-cover w-full h-full" alt="Avatar" />
  </div>
</div>
{showMenu && (
        <div className="absolute right-0 mt-36 w-40 bg-white border rounded shadow-md">
          <div className="py-1">
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
              Profile
            </a>
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
              Logout
            </a>
          </div>
        </div>
      )}

          </div>
        </div>
      </div>


    </>
  );
}
