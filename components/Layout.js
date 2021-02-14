import React from "react";
import NavBar from "./NavBar";
const Layout = ({ children }) => {
  return (
    <div style={{}}>
      <NavBar />
      <div className="layout-container">{children}</div>
    </div>
  );
};

export default Layout;
