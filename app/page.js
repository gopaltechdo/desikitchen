"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import TopNavbar from "@/components/header/topnavbar";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import DownNavbar from "@/components/header/DownNavbar";
import { Footer } from "@/components/Footer/Footer";
import Homepage from "@/components/Homepageelement";
import Layout1 from "@/components/Layout";
import "../public/css/app.scss";
export default function Home({}) {
  return (
    <>
      <Layout1>
        <TopNavbar />
        <DownNavbar />
        <Footer />
      </Layout1>
    </>
  );
}
