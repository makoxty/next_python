import type { AppProps } from "next/app";
import "twin.macro";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div tw="flex justify-center">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
