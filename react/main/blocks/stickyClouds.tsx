import "../styles/clouds.css";
import cloud1 from "../imgs/clouds.png";
import cloud2 from "../imgs/cloudbanner.png";
import cloud2_1 from "../imgs/clouds2_1.png";
import cloud2_2 from "../imgs/clouds2_2.png";

function StickyClouds() {
  return (
    <div className="parent-cloud">
      <div className="leftCloudParent">
        <img className="cloudbanner left" src={cloud2_2} alt="" />
      </div>
      <div className="rightCloudParent relative">
        <img className="cloudbanner" src={cloud2_1} alt="" />
      </div>
    </div>
  );
}

export default StickyClouds;
