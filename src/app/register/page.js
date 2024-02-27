import React from "react";
import Image from "next/image";
const Ragister = () => {
  return (
    <section className="mt-8">
      <h1 className="text-center mb-4 text-primary text-4xl">Ragister</h1>
      <form className="block max-w-xs mx-auto">
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <button type="submit">Register</button>
        <div className="my-4 text-center text-gray-500">Or Login With.....</div>
        <button className="flex gap-4 justify-center">
          <Image src={"/google.png"} alt={""} width={24} height={24}/>
          Login With Google</button>

      </form>
    </section>
  );
};

export default Ragister;
