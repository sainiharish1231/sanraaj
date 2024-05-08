"use client";
import React from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <ul className="navigation">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/overview">Overview</Link>
      </li>
      <li>
        <Link href="/services">Services</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
      <li>
        <Link href="/career">Career</Link>
      </li>
    </ul>
  );
};

export default Sidebar;
