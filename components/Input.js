import useVideos from "hooks/useVideos";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Input = (props) => {
  const { searchVideo } = useVideos();
  const handleSearchVideo = async (e) => {
    e.preventDefault();
    searchVideo(e.target.keyword.value);
  };
  return (
    <form
      className="flex justify-between items-center w-full"
      onSubmit={handleSearchVideo}
    >
      <input
        name="keyword"
        className="bg-black text-neutral-400 h-10 p-2 outline-none  w-full"
        placeholder="Search"
      />
      <button type="submit">
        <AiOutlineSearch
          className="text-neutral-300 bg-neutral-600 w-14 h-10 p-2"
          type="submit"
        />
      </button>
    </form>
  );
};

export default Input;
