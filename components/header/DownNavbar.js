"use client"
import React from "react";
import Link from "next/link";
import Layout1 from "../Layout";

export default function DownNavbar() {
  return (
      <nav>
        <Link href="/">Home</Link>
        <Link href="/Shop">Shop</Link>
        <Link href="/collections">Collections</Link>
        <Link href="/enquiry">Send Enquiry</Link>
        <Link href="/about">About Us</Link>
      </nav>
  );
}
