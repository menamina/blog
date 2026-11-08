import "../styles/clouds.css";

function Cloud1(cloudProps: any) {
  const { src, alt } = cloudProps;

  return (
    <div className="cloud1">
      <img src={src} alt={alt} className="imageInCloud" />
    </div>
  );
}

export default Cloud1;
