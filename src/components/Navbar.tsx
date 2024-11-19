import React from "react";
import Link from "next/link";
import logo from "../../public/pokemon-23.svg";
import Image from "next/image";

const Navbar = () => {
  return (
    <header>
      <nav className="flex items-center justify-center bg-yellow-300  gap-4 px-6 py-4 w-screen h-full">
        <Link href="/">
          <Image src={logo} alt="logo" width={100} height={100} />
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
