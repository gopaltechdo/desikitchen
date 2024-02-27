import React from "react";
import Image from "next/image";
import Right from "../icons/Right";
const Hero = () => {
  return (
    <section className="hero">
      <div className="py-14">
        <h1 className=" text-4xl my-2 font-semibold">
          {/* Everything <br></br> is better <br/>with <br/> */}
          Life's flavors bloom
          <br /> when seasoned <br />
          with
          <br />
          <span className="text-primary">Chicken Handi</span>
        </h1>
        <p className="my-4 text-gray-500 text-sm"  >
          "Chicken is the missing piece that makes every day complete a simple
          yet delicious joy in life."
          <span className="text-primary">
            it's the zest that makes every moment richer.
          </span>
        </p>
        <div className="flex gap-4 text-sm">
          <button className="bg-primary  uppercase items-center flex gap-2 text-white px-6 py-2  rounded-full">
            Order Now
            <Right />
          </button>
          <button className="flex gap-2 py-2 items-center text-gray-600 font-semibold">
            Learn More
            <Right />
          </button>
        </div>
      </div>
      <div className="relative -top-2">
        <Image
          src="/chickenhandi.jpg"
          alt="Chicken handi"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </section>
  );
};

export default Hero;
