import React from "react";
import { IoClose } from "react-icons/io5";
import Image from "next/image";

function PhotoLibrary({ setImage, hidePhotoLibrary }) {
  const images = [
    "/avatars/1.png",
    "/avatars/2.png",
    "/avatars/3.png",
    "/avatars/4.png",
    "/avatars/5.png",
    "/avatars/6.png",
    "/avatars/7.png",
    "/avatars/8.png",
    "/avatars/9.png",
  ];

  const handleImage = (index) => {
    setImage(images[index]);
    hidePhotoLibrary(false);
  };

  return (
    <div className="fixed top-0 left-0 h-full w-full justify-center items-center">
      <div className="h-max w-max rounded-lg gap-6 p-4 bg-gray-dark">
        <div
          className="pt-2 pe-2 cusrsor-pointer flex items-end justify-end"
          onClick={() => hidePhotoLibrary(false)}
        >
          <IoClose className="h-10 w-10 cursor-pointer" />
        </div>
        <div className="grid grid-rows-4 grid-flow-col gap-16 justify-center items-center p-20">
          {images.map((image, index) => (
            <div
              className="h-24 w-24 cursor-pointer realtive"
              key={index}
              onClick={() => handleImage(index)}
            >
              <Image src={image} alt="Avatar" width={100} height={100} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PhotoLibrary;
