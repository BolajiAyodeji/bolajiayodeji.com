export default function Custom404() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "0 0.5rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          margin: "0",
          fontSize: "5.5rem",
          color: "#3a7ebf",
          textAlign: "center",
        }}
      >
        PAGE NOT FOUND
      </h1>
      <a style={{ fontSize: "1.5rem" }} href="/">
        &#8592; Return home
      </a>
    </div>
  );
}
