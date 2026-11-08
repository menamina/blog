import { Outlet } from "react-router-dom";
import Cloud1 from "./blocks/cloud1";
import StickyClouds from "./blocks/stickyClouds";
import Nav from "./blocks/nav";

function Index() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Nav />
      <Outlet></Outlet>
      <StickyClouds />
    </div>
  );
}

export default Index;
