"use client";

import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { RiMenuFill } from "react-icons/ri";

import { IoClose } from "react-icons/io5";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef(null);
  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      const header = headerRef.current;
      if (!header) return;
      
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        (header as HTMLElement).classList.add("sticky__header");
      } else {
        (header as HTMLElement).classList.remove("sticky__header");
      }
    });
  };
  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener("scroll", handleStickyHeader);
  }, []);
  return (
    <div className="h-full w-full" ref={headerRef}>
      <nav className="w-full flex justify-between items-center p-5 max-w-[1160px] rounded-[42px] md:bg-[hsla(210,100%,99%,1)] mx-auto md:border md:border-[hsla(220,7%,92%,1)] my-6">
        <div className="flex items-center">
          <Link href="/">
            <Image src="/assets/logo.svg" alt="logo" width={48} height={48} />
          </Link>
          <ul className="hidden md:flex gap-6 ml-7">
            {[
              {
                label: "Achievements",
                href: "#achievements",
              },
              { label: "Portfolio", href: "#portfolio" },
              { label: "Articles", href: "#articles" },
            ].map((item, key) => {
              return (
                <motion.li
                  key={key}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    delay: 0.7 + key * 0.2,
                  }}
                  className="text-[hsla(222,47%,11%,1)] text-[20px] leading-[160%] font-medium"
                >
                  <a href={item.href}>{item.label}</a>
                </motion.li>
              );
            })}
          </ul>
        </div>
        <div className="hidden lg:flex">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.6,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
          >
            <p className="text-[hsla(222,47%,11%,1)] text-[20px] leading-[160%] font-medium">
              <Link
                href="/contact"
                className="hover:bg-[hsla(107,66%,92%,1)] list-none bg-[hsla(207,66%,92%,1)] p-2.5 rounded-full w-[175px] h-[55px] text-[hsla(206,31%,42%,1)] text-lg leading-[160%] font-medium flex justify-center items-center"
              >
                Contact Me
              </Link>
            </p>
          </motion.div>
        </div>
        <div className="flex md:hidden items-center">
          <motion.button
            whileTap={{ scale: 0.7 }}
            onClick={() => setIsOpen((prev) => !prev)}
            className="text-gray-300"
          >
            {isOpen ? <IoClose size={40} /> : <RiMenuFill size={40} />}
          </motion.button>
        </div>
        {isOpen && (
          <div className="md:hidden overflow-hidden absolute mt-[250px] bg-white w-full h-[328px]">
            <IoClose
              size={40}
              className="absolute right-0"
              onClick={() => setIsOpen(false)}
            />
            <div className="flex flex-col space-y-3 py-7">
              {["AchieveMENTS", "Portfolio", "Articles"].map((item, key) => (
                <a
                  onClick={() => setIsOpen(false)}
                  key={key}
                  href="#"
                  className="font-medium py-2"
                >
                  {item}
                </a>
              ))}
            </div>
            <a
              href="#"
              className="hover:bg-[hsla(107,66%,92%,1)] list-none bg-[hsla(207,66%,92%,1)] p-2.5 rounded-full w-[175px] h-[55px] text-[hsla(206,31%,42%,1)] text-lg leading-[160%] font-medium flex justify-center items-center"
            >
              Contact Me
            </a>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
