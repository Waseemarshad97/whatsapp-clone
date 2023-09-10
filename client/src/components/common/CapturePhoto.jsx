import React, { useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";

function CapturePhoto({ setImage, hide }) {
  const videoRef = useRef("#video");
  const [isCam, setIsCam] = useState(false);

  useEffect(() => {
    let stream;
    setIsCam(false);
    const videoElement = document.getElementById("video");
    const startCamera = async () => {
      stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });
      videoElement.srcObject = stream;
    };
    startCamera();
    return () => {
      stream?.getTracks().forEach((track) => track.stop());
    };
  }, []);

  const capturePhoto = () => {
    const canvas = document.createElement("canvas");
    const videoElement = videoRef?.current;
    if (videoElement) {
      setIsCam(false);
      canvas.getContext("2d").drawImage(videoElement, 0, 0, 300, 150);
      setImage(canvas.toDataURL("image/jpeg"));
      hide(false);
    }
  };

  return (
    <div className="absolute h-4/6 w-2/6 top-1/4 left-1/3 bg-gray-dark gap-3 rounded-lg pt-2 flex items-center justify-center">
      <div className="flex flex-col gap-4 w-full items-center justify-center">
        <div
          className="pt-2 pr-2 cusrsor-pointer flex items-end justify-end"
          onClick={() => hide(false)}
        >
          <IoClose className="h-10 w-10 cursor-pointer" />
        </div>
        <div className="flex justify-center">
          <video
            id="video"
            height={400}
            // weight={400}
            // playsInline
            autoPlay
            ref={videoRef}
          ></video>
          {isCam && <canvas id="canvas"></canvas>}
        </div>
        <button
          onClick={capturePhoto}
          className="h-16 w-16 bg-primary-strong rounded-full cursor-pointer border-8 border-teal-light p-2 mb-10"
        ></button>
      </div>
    </div>
  );
}

export default CapturePhoto;
