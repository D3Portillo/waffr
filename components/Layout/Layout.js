import Head from "next/head";
import { Fragment } from "react";

const ICON_URL = "/favicon.png";
function Layout({ children }) {
  return (
    <Fragment>
      <Head>
        <title>Waffr | Send, Mint, Enjoy</title>
        <link rel="shortcut icon" href={ICON_URL} />
        <link rel="apple-touch-icon" href={ICON_URL} />
        <link rel="icon" type="image/png" href={ICON_URL} />
      </Head>
      <div className="bg-black px-8 text-white min-h-screen">{children}</div>
    </Fragment>
  );
}

export default Layout;
