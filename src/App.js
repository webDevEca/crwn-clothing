import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "./Routes/home/home.component";
import NavigationBar from "./Routes/navigation/navigation.component";
import SignIn from "./Routes/sign-in/sign.in.component";

function Shop() {
  return <h1>This is the shop Page</h1>;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
