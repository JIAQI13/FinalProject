import React, { useRef, useEffect } from "react";
import * as d3 from 'd3';
import HeatMapDate from 'react-d3-heatmap'
import useWindowDimensions from '../helpers/userWindowDimensions'

export default function HeatMap(props) {
  const { height, width } = useWindowDimensions();

  console.log("data", props.graphData);

  return (
    <h1>Howdy</h1>
  );
}
