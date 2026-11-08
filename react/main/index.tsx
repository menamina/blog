import { Outlet } from "react-router-dom";
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "30px",
          height: "100%",
        }}
      >
        <Nav />
        <Outlet></Outlet>
      </div>
      <StickyClouds />
    </div>
  );
}

export default Index;
