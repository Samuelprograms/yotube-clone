import React, { useState } from "react";
import Input from "./Input";
import Switch from "./Switch";
import { AiFillYoutube } from "react-icons/ai";
import { CgMenu } from "react-icons/cg";
import Link from "next/link";
import { useRouter } from "next/router";
import useVideos from "hooks/useVideos";

const NavBar = () => {
  const [showSubNavbar, setShowSubNavbar] = useState(false);
  const { categories } = useVideos();
  const router = useRouter();
  return (
    <div className="relative shadow-lg">
      <div className="flex justify-between bg-neutral-800 p-4 items-center space-x-4 w-full">
        <div className="flex sm:flex-1 items-center space-x-4">
          <button onClick={() => setShowSubNavbar(!showSubNavbar)}>
            <CgMenu
              className={`text-neutral-300 w-5 h-5 ${
                showSubNavbar ? "rotate-90" : ""
              }`}
            />
          </button>
          <button
            className="flex-1 hidden sm:inline-flex"
            onClick={() => router.reload()}
          >
            <AiFillYoutube className="w-12 h-12 text-red-500" />
          </button>
        </div>
        <div className="flex-1 max-w-sm">
          <Input />
        </div>
        <div className="sm:flex-1 flex justify-end">
          <Switch />
        </div>
      </div>
      {showSubNavbar && (
        <div className="absolute bg-neutral-900 z-20 w-full p-10 grid place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {categories?.map(({ snippet: { title } }) => (
            <p className="font-bold cursor-pointer text-neutral-400 hover:text-white">
              {title}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavBar;
