"use client";
import React, { useEffect, useRef, useState } from "react";
import YouTube, { YouTubeProps } from "react-youtube";
const VideoPlayer = ({
  onChangeForm,
  url,
  onChangeStatus,
}: {
  onChangeForm: Function;
  url: string;
  onChangeStatus: Function;
}) => {
  const handleEnd = () => {
    onChangeForm(true);
    onChangeStatus(false);
  };

  const handleStart = () => {
    onChangeStatus(true);
  };

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    event.target.playVideo();
  };

  const opts: YouTubeProps["opts"] = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="w-full" onClick={handleStart}>
      <video
        className="w-full"
        height="437"
        controls
        onEnded={handleEnd}
        controlsList="nodownload"
        autoPlay
      >
        <source
          src={
            url ||
            "https://cdn-beta.blockademy.ai/videos/2023/09/1694422478meet-vzr-pxqc-vsq-and-3-more-pages-personal-microsoft-edge-2023-09-08-15-37-01mp425mp4"
          }
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      {/* <YouTube
        videoId="GTw4fNvorZs"
        opts={opts}
        onReady={onPlayerReady}
        onEnd={handleEnd}
      /> */}
    </div>
  );
};

export default VideoPlayer;
