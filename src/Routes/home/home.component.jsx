import React from "react";

import { Outlet } from "react-router-dom";
import Categories from "../../Components/categories/categories.component";

function Home() {
  return (
    <div>
      <Outlet />
      <Categories />
    </div>
  );
}

export default Home;
