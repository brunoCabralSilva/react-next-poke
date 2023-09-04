'use client'

import React, { useState } from 'react';
import Link from 'next/link';

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);

  const barra1 = () => {
    if(!showMenu) {
      return 'rotate-0 transition duration-500 z-0';
    } return 'rotate-45 transition duration-500 translate-y-2 z-40';
  }

  const barra2 = () => {
    if(!showMenu) {
      return 'rotate-0 transition duration-500 z-0';
    } return '-rotate-45 transition duration-500 z-40';
  }

  const barra3 = () => {
    if(!showMenu) {
      return 'opacity-1 transition duration-500 z-0';
    } return 'opacity-0 transition duration-500 z-40';
  }

  return (
    <nav className="w-full text-base absolute 2xl:text-xl leading-6 z-40">
      <div
        onClick={ () => setShowMenu(!showMenu) }
        className="bg-black px-2 pt-2 pb-1 rounded cursor-pointer fixed right-0 top-0 sm:mt-3 sm:mr-2 flex flex-col z-50"
      >
        <div className={`h-1 w-9 bg-white mb-1 ${barra1()}`} />
        <div className={`h-1 w-9 bg-white mb-1 ${barra2()}`} />
        <div className={`h-1 w-9 bg-white mb-1 ${barra3()}`} />
      </div>
      { showMenu &&
        <ul
          className="fixed top-0 right-0 opacity-1 z-30 w-full sm:w-1/2 md:w-1/4 h-screen items-center pt-12 transition duration-500 flex flex-col text-white justify-center bg-black/90 font-extrabold"
        >
          <li>
            <Link
              href="/"
              onClick={ () => setShowMenu(!showMenu) }
              className="text-white transition duration-1000 px-2 hover:underline hover:underline-offset-4"
            >
              Home
            </Link>
          </li>
          <li className="pt-6">
            <Link href="/team"
              onClick={ () => setShowMenu(!showMenu) }
              className="text-white transition duration-1000 px-2 hover:underline hover:underline-offset-4"
            >
              Team
            </Link>
          </li>
          <li className="pt-6">
            <Link href="/about"
              onClick={ () => setShowMenu(!showMenu) }
              className="text-white transition duration-1000 px-2 hover:underline hover:underline-offset-4"
            >
              About
            </Link>
          </li>
        </ul>
      }
    </nav>
  );
}