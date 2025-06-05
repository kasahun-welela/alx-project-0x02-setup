import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-blue-500  ">
      <nav className="flex justify-center items-center gap-4 text-white">
        <Link href="/home">Home</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}
