import Cloud1 from "./cloud1";
import SparkleCloud from "../imgs/sparklecloud.jpeg";
import SparkleCloud2 from "../imgs/sparklecloud2.jpeg";

import "../styles/minihero.css";

function MiniHero() {
  return (
    <div className="miniHero">
      <div className="leftMiniHero">
        <h1>welcome to my digital grotto,</h1>
        <h1>a hideaway in the clouds</h1>
      </div>
      <div className="cloudHolder rightMiniHero">
        <Cloud1 src={SparkleCloud} alt="sparkle" />
      </div>
    </div>
  );
}

export default MiniHero;
