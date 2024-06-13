import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import NavBar from "./NavBar";
import Footer from "./Footer";

export const Layout = () => {
  return (
    <>
      <NavBar />
      <main style={{ minHeight: "calc(100vh - 146px)" }}>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};
