import React, { useEffect, useRef } from 'react';
import * as d3d from 'd3';
import * as HexbinPlot from 'd3-hexbin';
const d3 = {
  ...d3d,
  hexbin: HexbinPlot.hexbin
}
let url;
export default function HexagonGraph(props) {

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function random() {
    return Math.random() * 255
  }
  // Added top artists to grab the images from the data
  const data = props.graphData.topArtists
  url = useRef(data[getRandomInt(data.length)].images[2].url);

  useEffect(() => {


    const MapColumns = 20,
      MapRows = 20;
    const hexRadius = 100;

    const hexbin = d3.hexbin();
    hexbin.radius = hexRadius;

    //Calculate the center positions of each hexagon
    const points = [];
    for (let i = 0; i < MapRows; i++) {
      for (let j = 0; j < MapColumns; j++) {
        let x = hexRadius * j * Math.sqrt(3)
        if (i % 2 === 1) x += (hexRadius * Math.sqrt(3)) / 2
        let y = hexRadius * i * 1.5
        points.push([x, y])
      }
    }

    //Create SVG element
    const svg = d3
      .select("#plot-area")
      .append("svg")
      .attr("preserveAspectRatio", "xMinYMin meet")
      .attr("viewBox", "50 50 1500 1000")
      .classed("svg-content-responsive", true)
      .append("g")

    var defs = svg.append('svg:defs')

    defs.append("svg:pattern")
      .style("fill-opacity", 1)
      .attr("id", "grump_avatar")
      .attr("width", 200)
      .attr("height", 200)
      .attr("x", -60)
      .attr("y", -50)
      .append("svg:image")
      .attr("xlink:href", () => {
        url.current = data[getRandomInt(data.length)].images[2].url
        console.log(url.current);
        return url.current
      })
      //.attr("xlink:href", 'https://i.scdn.co/image/ab6761610000e5eb0db3b11972a84207f256769b')
      .attr("width", 200)
      .attr("height", 200)


    //Start drawing the hexagons
    svg.selectAll(".hexagons")
      .data(hexbin(points))
      .enter()
      .append("path")
      .attr("class", "hexagon")
      .attr("d", function (d) {
        return "m" + d.x + "," + d.y + hexbin.hexagon();
      })
      .attr("stroke", function (d) {
        return '#fff'
      })
      .attr("stroke-width", "172px")
      .on("click", function (event, d) {
        window.location.href = "http://localhost:4000/login"
      })
      .on('mouseover', function (d) {
        url.current = data[getRandomInt(data.length)].images[2].url;
        console.log('mouse', url.current);
        d3.select(this)
          .transition()
          .duration(700)
          .style('stroke-opacity', 1)
          .style("stroke", "url(#grump_avatar)")
      })
      .on("mouseout", function (d) {
        d3.select(this)
          .transition()
          .duration(3000)
          .style("stroke-opacity", 0)
          .style('stroke', `rgb(${(random())},${(random())},${(random())},${(random())})`)
      })
  }, [data])

  return (
    <div id="plot-area"></div>
  );
}
