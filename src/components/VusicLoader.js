import React from 'react';
import Loader from "react-loader-spinner";

export default function VusicLoader() {
  const tmpStyle = {
    display: 'flex',
    alignItems: "center",
    flexDirection: "column",
    paddingTop: "25%"
  };

  return (
    <div style={tmpStyle}>
      <img src="/vusic_loading.png" alt="vusic-icon" width="162" height="60"></img>
      <Loader
        type="Bars"
        color="#57F289"
        height={100}
        width={100}
      />
    </div>
 );
}
