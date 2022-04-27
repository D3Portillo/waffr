import { Fragment } from "react";
import Head from "next/head";

import { Toaster } from "react-hot-toast";

import Footer from "@/components/Footer";
import Modal from "@/components/Modal";

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
      <Toaster
        containerStyle={{ top: "9rem" }}
        position="top-right"
        containerClassName="font-bold"
      />
      <Modal />

      <div className="bg-black flex flex-col px-4 lg:px-8 text-white min-h-screen">
        {children}
        <div className="flex-grow" />
        <Footer />
      </div>
    </Fragment>
  );
}

export default Layout;
