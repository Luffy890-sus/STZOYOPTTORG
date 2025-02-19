import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/index";

const MainLayout = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      
      <div className="max-w-[1620px] m-auto">
      <main className="">

        <Outlet />
      </main>
      <footer></footer>
      </div>
    </>
  );
};
export default MainLayout;