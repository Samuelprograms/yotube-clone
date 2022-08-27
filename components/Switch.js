// import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import useTheme from "hooks/useTheme";
import React from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const Switch = () => {
  const { toggleTheme, isDarkTheme } = useTheme();
  const Icon = isDarkTheme ? BsFillSunFill : BsFillMoonFill;
  return (
    <button onClick={() => toggleTheme()}>
      <Icon className=" cursor-pointer w-5 h-5 text-neutral-300" />
    </button>
  );
};

export default Switch;
