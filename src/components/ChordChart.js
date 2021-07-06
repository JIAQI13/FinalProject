import React, { useEffect } from 'react';
import * as d3 from 'd3';
import useWindowDimensions from '../helpers/userWindowDimensions'

export default function Chords(props) {

  const data = [...props.graphData.topArtists]
  console.log("data", props.graphData.topArtists)

  const allGenres = [];
  data.forEach(element => {
    allGenres.push(...element.genres)
  });

  console.log("all", allGenres)

  return (
    <h1>Howdy</h1>
  );
}
