import Head from "next/head";
import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = ({ children, title }: any) => {
  return (
    <div className={`md:h-screen w-screen md:fixed flex flex-col`}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex-initial w-screen pb-4">
        <Header />
      </div>

      <div className="flex-grow w-screen">{children}</div>

      <div className="flex-initial w-screen">
        <Footer />
      </div>
    </div>
  );
};
