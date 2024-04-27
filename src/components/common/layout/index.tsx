import React, { ReactNode, useState } from "react";
import Head from "next/head";
import Header from "@/components/header/header";
import MobileNav from "../mobileNav";
import Footer from "../footer";

type TLayoutProps = {
  children: ReactNode;
  pageTitle: string;
}

const Layout: React.FC<TLayoutProps> = ({ children, pageTitle }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <Head>
        <meta
          name="description"
          content="Expert digital solutions for your business"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
      </Head>

      <Header setOpen={setOpen} />
      <main>
        {children}
        {open && <MobileNav setOpen={setOpen} />}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
