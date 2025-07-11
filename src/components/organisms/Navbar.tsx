// components/Navbar.tsx
import { useState } from "react";
import { HiMenu, HiMoon, HiOutlineX } from "react-icons/hi";

const nav_items = [
  {
    name: "Projects",
    url: "#",
  },
  {
    name: "Resume",
    url: "#",
  },
  {
    name: "Contacts",
    url: "#",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white fixed top-0 left-0 w-full z-50">
      <div className="container px-4 h-[60px] xl:h-[100px] 2xl:h-[120px] 2xl:px-0 lg:pt-0 mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="font-extralight text-lg xl:text-[24px]">fathanmaul.</h1>

        {/* Desktop nav */}
        <nav className="flex gap-6">
          <div className="hidden md:flex gap-6">
            {nav_items.map((nav, i) => (
              <a key={i} href={`${nav.url}`} className="text-gray-700 text-lg hover:text-blue-600 font-light">
                {nav.name}
              </a>
            ))}
          </div>
          <button>
            <HiMoon className="text-2xl text-gray-800"/>
          </button>
          {/* Hamburger Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <HiOutlineX className="w-6 h-6 text-gray-800"/>
            ): (
              <HiMenu className="w-6 h-6 text-gray-800" />
            )}
          </button>
        </nav>


      </div>

      {/* Mobile Nav - Offcanvas */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-dark lg:hidden shadow-md transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col gap-4">
          {nav_items.map((nav, i) => (
            <a
              key={i}
              href={`${nav.url}`}
              className="text-white hover:opacity-60 transition-all ease-in-out duration-300"
              onClick={() => setIsOpen(false)}
            >
              {nav.name}
            </a>
          ))}
        </div>
      </div>

      {/* Overlay (optional) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 lg:hidden"
          onClick={toggleMenu}
        />
      )}
    </header>
  );
}
