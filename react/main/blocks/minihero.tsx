import Cloud1 from "./cloud1";

function MiniHero() {
  return (
    <div className="miniHero">
      <div>
        <div></div>
        <div></div>
      </div>
      <div
        className="cloudHolder"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Cloud1 />
      </div>
    </div>
  );
}

export default MiniHero;
