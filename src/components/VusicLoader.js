import React from "react";
import Loader from "react-loader-spinner";

export default function VusicLoader() {
  const tmpStyle = {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: "15%",
    paddingBottom: "15%",
  };

  return (
    <div style={tmpStyle}>
      <img src="/vusic_icon.png" alt="vusic-icon" width="162" height="60"></img>
      <Loader type="Bars" color="#57F289" height={100} width={100} />
    </div>
  );
}
