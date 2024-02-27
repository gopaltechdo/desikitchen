import React from "react";
import Image from "next/image";
import MenuItem from "./menu/MenuItem";
import SectionHeaders from "./SectionHeaders/SectionHeaders";
import { Outfit } from "next/font/google";
import RecipeReviewCard from "./menu/centerSection";
const HomeMenu = () => {
  return (
    <section className="">
      {/* <div
        className=" absolute h-full left-0 right-0 w-full justify-start"
        style={{ overflowX: -"hidden" }}
      >
        <div className="h-48  w-48 relative left-44 -top-12">
          <Image
            src={"/mutton.jpg"}
            layout={"fill"}
            objectFit={"contain "}
            alt="fish"
          ></Image>
        </div>
        <div className="h-48  w-48 absolute -top-12  right-44 ">
          <Image
            src={"/mutton.jpg"}
            layout={"fill"}
            objectFit={"contain "}
            alt="mutton"
          ></Image>
        </div>
      </div> */}
      <div className="text-center m-6">
        <SectionHeaders subHeader={"CHeck Out"} mainHeader={"Menu"} />
      </div>
      <div className=" grid grid-cols-3 gap-4">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
      <RecipeReviewCard />
    </section>
  );
};

export default HomeMenu;
