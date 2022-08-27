import ThemeProvider from "providers/ThemeProvider";
import VideosProvider from "providers/VideosProvider";
import "styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <VideosProvider>
        <Component {...pageProps} />
      </VideosProvider>
    </ThemeProvider>
  );
}

export default MyApp;
