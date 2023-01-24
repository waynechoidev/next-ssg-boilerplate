import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { assetPrefix } from "next.config";
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} prefix={assetPrefix} />;
}
