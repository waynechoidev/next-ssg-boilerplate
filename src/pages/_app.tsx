import GlobalStyle from "@/styles/global";
import { ThemeProvider, DefaultTheme } from "styled-components";
import type { AppProps } from "next/app";
import { assetPrefix } from "next.config";
import { Container } from "@/styles/home";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <GlobalStyle />
      <Component {...pageProps} prefix={assetPrefix} />
    </Container>
  );
}
