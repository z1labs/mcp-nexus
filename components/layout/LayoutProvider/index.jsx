"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

import Providers from "@/components/layout/Providers";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import "@/styles/styles.scss";

export const LayoutProvider = ({ children }) => {
  const pathname = usePathname();
  const pagesSignin = ["/signin"];

  useEffect(() => {
    document.documentElement.dataset.pathname = pathname;
  }, [pathname]);

  return (
    <Providers>
      {pagesSignin.some((v) => pathname === v) ? (
        <>{children}</>
      ) : (
        <>
          <Header />
          <main>{children}</main>
          <Footer />
        </>
      )}
    </Providers>
  );
};
