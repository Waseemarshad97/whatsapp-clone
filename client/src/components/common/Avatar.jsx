import React, { useState } from "react";
import Image from "next/image";
import { FaCamera } from "react-icons/fa";
import ContextMenu from "./ContextMenu";

function Avatar({ type, image }) {
  const [hover, setHover] = useState();
  const [isContextMenuVisible, setIscontextMenuVisible] = useState();
  const [contextMenuCoordinates, setContextMenuCoordinates] = useState({
    x: 0,
    y: 0,
  });
  const showContextMenu = (e) => {
    e.preventDefault();
    setIscontextMenuVisible(true);
    setContextMenuCoordinates({ x: e.pageX, y: e.pageY });
  };

  const contextMenuoptions = [
    { name: "Take Photo", callback: () => {} },
    { name: "Choose from library", callback: () => {} },
    { name: "Upload Photo", callback: () => {} },
    { name: "Remove Photo", callback: () => {} },
  ];

  return (
    <>
      <div className="flex items-center justify-center">
        {type === "sm" && (
          <div className="relative h-10 w-10">
            <Image src={image} alt="avatar" className="rounded-full" fill />
          </div>
        )}
        {type === "lg" && (
          <div className="relative h-14 w-14">
            <Image src={image} alt="avatar" className="rounded-full" fill />
          </div>
        )}
        {type === "xl" && (
          <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="relative cursor-pointer z-0"
          >
            <div
              className={`z-10 bg-photopicker-overlay-background h-60 w-60 absolute top-0 left-0 flex items-center rounded-full justify-center flex-col text-center gap-2
            ${hover ? "visible" : "hidden"}`}
              onClick={(e) => showContextMenu(e)}
              id="context-opener"
            >
              <FaCamera className="text-2xl" id="context-opener" />
              <span>
                {" "}
                change <br />
                profile <br /> photo
              </span>
            </div>
            <div className="flex items-center justify-center h-60 w-60">
              <Image src={image} alt="avatar" className="rounded-full" fill />
            </div>
          </div>
        )}
      </div>
      {isContextMenuVisible && (
        <ContextMenu
          options={contextMenuoptions}
          coordinates={contextMenuCoordinates}
          contextMenu={isContextMenuVisible}
          setContextMenu={setIscontextMenuVisible}
        />
      )}
    </>
  );
}

export default Avatar;
