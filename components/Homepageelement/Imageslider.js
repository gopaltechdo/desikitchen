import React, { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";

const Imageslider = () => {
  const [imageNum, setImageNum] = useState(1);
  const sliderImages = [
    {
      url: "https://img.freepik.com/free-photo/wide-angle-shot-singletree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
    },
    {
      url: "https://images.pexels.com/photos/4043324/pexels-photo-4043324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {
      url: "https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcSprPgYofGmXXPfuEDcZ_XI294n0bME5dTX9TGvINmPiA&s",
    },
    {
      url: "https://images.pexels.com/photos/239577/pexels-photo-239577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {
      url: "https://images.pexels.com/photos/2449543/pexels-photo-2449543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
  ];

  const sliderStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <div style={sliderStyle}>
        <SimpleImageSlider
          width={"100%"}
          height={"60%"}
          images={sliderImages}
          showBullets={true}
          autoPlay={true}
          onStartSlide={(index, length) => {
            setImageNum(index);
          }}
          autoPlayDelay={2}
        />
      </div>
    </div>
  );
};

export default Imageslider;



