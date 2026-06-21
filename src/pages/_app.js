import { Inter, Poppins } from "next/font/google";
import Head from "next/head";
import { DarkModeProvider } from "../hooks/useDarkMode";
import { siteConfig } from "../data/site.config";
import "../styles/globals.css";
import "../styles/theme.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

export default function App({ Component, pageProps }) {
  return (
    <DarkModeProvider>
      <Head>
        <title>{siteConfig.title}</title>
        <meta name="description" content={siteConfig.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={siteConfig.title} />
        <meta property="og:description" content={siteConfig.description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteConfig.title} />
        <meta name="twitter:description" content={siteConfig.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${inter.variable} ${poppins.variable} font-body`}>
        <Component {...pageProps} />
      </div>
    </DarkModeProvider>
  );
}
