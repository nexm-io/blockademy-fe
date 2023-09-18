"use client";
import React, { useEffect, useRef, useState } from "react";

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
    </div>

    // <iframe width="753" height="437" src=""></iframe>
  );
};

export default VideoPlayer;
