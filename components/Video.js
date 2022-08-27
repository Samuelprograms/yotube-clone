import Image from "next/image";
import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

const Video = ({ video }) => {
  const { snippet: info } = video;
  return (
    <div className="space-y-3 max-w-md hover:scale-105 transition-all cursor-pointer min-w-full">
      <Image
        src={info.thumbnails.default.url}
        width={150}
        height={90}
        layout="responsive"
      />
      <div className="flex items-center space-x-2">
        <Image
          src={info.thumbnails.default.url}
          width={50}
          height={50}
          className="rounded-full"
        />
        <h2 className="text-black dark:text-white">{info.title}</h2>
      </div>
      <div className="flex items-center space-x-2">
        <h2 className="text-neutral-400">{info.channelTitle}</h2>
        <AiFillCheckCircle className="text-neutral-500" />
      </div>
      <span className="text-neutral-500">
        {Math.floor(Math.random() * 10 + 1)}k
      </span>
    </div>
  );
};

export default Video;
