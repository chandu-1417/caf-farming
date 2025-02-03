import React from "react";
import farmVideo from "./Images/caf.mp4"; // Import your video file

const VideoSection = () => {
  return (
    <div className="w-[70%] h-[350px] absolute top-[4330px] left-[220px] rounded-2xl flex justify-center items-center bg-amber-300">
        <video muted autoPlay loop src={farmVideo} className="h-full w-full rounded-2xl object-cover"></video>
    </div>
  );
};

export default VideoSection;
