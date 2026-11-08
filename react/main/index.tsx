import { Outlet } from "react-router-dom";
import Cloud1 from "./blocks/cloud1";

function Index() {
  return (
    <div>
      <Cloud1 />
      <Outlet></Outlet>
    </div>
  );
}

export default Index;
