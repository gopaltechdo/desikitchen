import React from "react";

const MenuItem = () => {
  return (
    <div className="p-4 rounded-lg text-center group hover:bg-orange-500 hover:shadow-2xl hover:shadow-black/100 transition-all">
     
     <div className="text-center">
     <img src="/mutton.jpg" className="max-h-auto max-h-29 block max-auto" alt="mutton" />

     </div>
     
      <h4 className="font-semibold my-2 text-lg">Mutton Handi</h4>
      <p className="text-gray-900 text-sm">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum nihil
        nobis aliquid voluptatibus fuga omnis exercitationem
      </p>
      <button className="bg-primary my-4 text-white rounded-full px-8 py-2">
        Add To Cart
      </button>
    </div>
  );
};

export default MenuItem;
