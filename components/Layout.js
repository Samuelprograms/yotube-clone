import useTheme from "hooks/useTheme";
import React from "react";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  const { isDarkTheme } = useTheme();
  return (
    <div
      className={`h-full  ${isDarkTheme ? "dark bg-neutral-900" : "bg-white"}`}
    >
      <div className="mx-auto max-w-screen-2xl">
        <NavBar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
