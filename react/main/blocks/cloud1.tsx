import "../styles/clouds.css";

function Cloud1(cloudProps) {
  const { src, alt, cloudHeight, cloudWidth } = cloudProps;

  return (
    <div className="cloud1" style={{ height: cloudHeight, width: cloudWidth }}>
      <img src={src} alt={alt} className="imageInCloud" />
    </div>
  );
}

export default Cloud1;
