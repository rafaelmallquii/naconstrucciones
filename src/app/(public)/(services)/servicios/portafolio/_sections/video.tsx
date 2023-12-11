"use client";
import { arialBlackFont, calibriFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const Video = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="flex items-center justify-center flex-col my-10">
      <h3
        className={cn(
          "text-[32px] font-bold mb-[6px]",
          arialBlackFont.className
        )}
      >
        VIDEO
      </h3>
      <div className="relative inline-flex cursor-pointer">
        <video
          ref={videoRef}
          src="/video/portfolio.mp4"
          width={670}
          height={370}
          controls={isPlaying}
          onPlay={() => setIsPlaying(true)}
        ></video>
        {
          !isPlaying && (
            <div
              onClick={() => {
                videoRef.current?.play();
                setIsPlaying(true);
              }}
              className={
                cn(
                  "absolute bg-[rgba(0,0,0,0.4)] w-full h-full flex justify-center items-center z-10",
                  isPlaying && "hidden"
                )
              }>
              <Image src="/img/icons/play.png" alt="play icon" width={120} height={120} />
            </div>
          )
        }
      </div>
      <p className={cn("mt-3 text-[19px]", calibriFont.className)}>
        El encanto de lo simple y funcional
      </p>
    </div>
  );
};
