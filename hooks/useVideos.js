import { useContext } from "react";
import { VideosContext } from "providers/VideosProvider";

const useVideos = () => useContext(VideosContext);

export default useVideos;
