"use client";
import { CourseDetail } from "@/redux/features/courses/type";
import React, { useEffect, useRef, useState } from "react";

interface VideoPlayerProps {
  onChangeForm?: (status: boolean) => void | undefined;
  courseDetail?: CourseDetail | null;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  onChangeForm,
  courseDetail,
}) => {
  const handleEnd = () => {
    if (onChangeForm) {
      onChangeForm(true);
    }
  };

  return (
    <video width="753" height="437" controls onEnded={handleEnd}>
      <source
        src={
          "https://cdn-beta.blockademy.ai/courses/videos/2023/09/1694624966.video-test-reward-course.6.mp4"
        }
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
    // <iframe width="753" height="437" src=""></iframe>
  );
};

export default VideoPlayer;
