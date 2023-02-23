import "../styles/globals.css";
import type { AppProps } from "next/app";
import ContextData from "./context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContextData>
      <Component {...pageProps} />
    </ContextData>
  );
}
