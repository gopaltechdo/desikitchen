"use client";

import React, { useState } from "react";
import Image from "next/image";
import Imageslider from "./imageSlider";
import Firstcard from "./FirstCard";
const Homepage = () => {
  return ( 
    <div>

<Imageslider/>
<div className="Fcard">
<Firstcard  />

</div>
    </div>
  );
};

export default Homepage;
