"use client";
import React, { useRef } from "react";

const VideoPlayer = () => {
  const videoRef = useRef(null);

  const handlePlay = () => {
    console.log("Video bắt đầu chơi");
  };

  const handleEnded = () => {
    console.log("Video kết thúc");
  };

  return (
    <div>
      <video
        ref={videoRef}
        controls
        src={
          "https://cdn-beta.blockademy.ai/videos/2023/09/1694422478meet-vzr-pxqc-vsq-and-3-more-pages-personal-microsoft-edge-2023-09-08-15-37-01.mp4"
        }
        onPlay={handlePlay}
        onEnded={handleEnded}
      ></video>
    </div>
  );
};

export default VideoPlayer;
