import Head from "next/head";
import Layout from "components/Layout";
import axios from "axios";
import Video from "components/Video";
import useVideos from "hooks/useVideos";
import Loader from "components/Loader";

const Index = () => {
  const { videos, isSearching } = useVideos();
  return (
    <Layout>
      <Head>
        <title>YouDojo</title>
        <meta name="description" content="KickOff Globant" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`m-4 grid ${
          isSearching
            ? "h-[85vh]  place-items-center"
            : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        } `}
      >
        {isSearching ? (
          <Loader />
        ) : (
          videos?.map((video,index) => <Video key={index} video={video} />)
        )}
      </main>
    </Layout>
  );
};

export default Index;
