import React from "react";
import { IoClose } from "react-icons/io5";

function PhotoLibrary({ setImage, setShowPhotoLibrary }) {
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
  return (
    <div className="flex fixed top-0 left-0 max-h-[100vh] h-full w-full justify-center items-center">
      <div className="h-max w-max bg-grey-900 rounded-kg gap-6 p-4">
        <div
          className="pt-2 pe-2 cusrsor-pointer flex items-end justify-end"
          onClick={() => setShowPhotoLibrary(false)}
        >
          <IoClose className="h-10 w-10 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default PhotoLibrary;
