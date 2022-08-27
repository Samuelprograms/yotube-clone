import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const initialValue = {
  videos: [],
  categories: [],
  searchVideo: () => {},
};

export const VideosContext = createContext(initialValue);

const VideosProvider = ({ children }) => {
  const [videos, setVideos] = useState(initialValue.videos);
  const [categories, setCategories] = useState(initialValue.categories);
  const [isSearching, setIsSearching] = useState(false);

  const searchVideo = async (query) => {
    setIsSearching(true);
    const { data } = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${query}&key=AIzaSyAjF3B0jo_rLLbcNaTInxR2DX3a0woquuU`
    );
    setVideos(data.items);
    setIsSearching(false);
  };

  useEffect(() => {
    (async () => {
      setIsSearching(true);
      const { data: dataVideos } = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&key=AIzaSyAjF3B0jo_rLLbcNaTInxR2DX3a0woquuU`
      );
      const { data: dataCategories } = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=CO&key=AIzaSyAjF3B0jo_rLLbcNaTInxR2DX3a0woquuU`
      );
      setVideos(dataVideos.items);
      setCategories(dataCategories.items);
      setIsSearching(false);
    })();
  }, []);

  return (
    <VideosContext.Provider
      value={{ videos, searchVideo, isSearching, categories }}
    >
      {children}
    </VideosContext.Provider>
  );
};

export default VideosProvider;
