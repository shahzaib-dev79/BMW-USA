"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CgProfile, CgMenu, CgClose } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";

const links = [
  "Models",
  "Build Your Own",
  "Shopping",
  "Electric",
  "Owner",
  "About Us",
];

function Navbar() {
  const [open, setOpen] = useState(false);

  // lock scroll + close on Esc
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  // auto-close when resized to laptop
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = (e) => e.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <>
      <nav className="w-[90%] mx-auto flex items-center justify-between py-5 lg:border-b-2 border-white">
        {/* left */}
        <div className="flex items-center gap-10">
          <img
            src="/navicon.svg"
            alt="icon"
            className="w-9 h-9 lg:w-12 lg:h-12"
          />
          <div className="hidden lg:flex items-center gap-10 text-white">
            {links.map((link) => (
              <a key={link} href="#">
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* right */}
        <div className="flex items-center gap-5 text-white">
          <a href="#" className="hidden xl:block">
            Choose your location BMW Center
          </a>
          <a href="#" aria-label="Profile">
            <CgProfile size={25} />
          </a>
          <a href="#" aria-label="Search" className="hidden lg:block">
            <CiSearch size={25} />
          </a>
          <button
            className="lg:hidden border-none"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
          >
            <CgMenu size={28} />
          </button>
        </div>
      </nav>
      {/* overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      {/* off-canvas drawer */}
      <aside
        aria-hidden={!open}
        className={`fixed top-0 right-0 z-50 h-full w-full bg-white text-gray-700 p-6 shadow-xl transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className=" h-12 flex items-center justify-around ">
          <img src="/mobile-nav.svg" alt="icon" className="w-10" />
          <a href="#" className="text-sm">
            Choose your location BMW Center
          </a>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="border-none"
          >
            <CgClose size={28} />
          </button>
        </div>

        <div className="mt-10 w-[80%] mx-auto font-light flex flex-col">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              onClick={() => setOpen(false)}
              className="py-6 text-lg border-b-[0.5px] border-gray-200"
            >
              {link}
            </a>
          ))}
          <button className="flex items-center justify-center rounded-sm">
            <CiSearch size={25} fontSize={900} /> Search
          </button>
        </div>
      </aside>
    </>
  );
}

export default Navbar;
