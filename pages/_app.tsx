import "nextra-theme-blog/style.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/main.css";
import 'tailwindcss/tailwind.css';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
