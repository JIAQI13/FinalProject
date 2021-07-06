import React, { useEffect } from 'react';
import * as d3d from 'd3';
import * as HexbinPlot from 'd3-hexbin';
const d3 = {
  ...d3d,
  hexbin: HexbinPlot.hexbin
}

export default function HexagonGraph(props) {

  // Added top artists to grab the images from the data
  const data = props.graphData.topArtists

  useEffect(() => {
    //svg sizes and margins
    const margin = {
      top: 50,
      right: 0,
      bottom: 0,
      left: 0
    };

    const width = 1900;
    const height = 500;

    const MapColumns = 11,
      MapRows = 4;
    const hexRadius = 100;

    const hexbin = d3.hexbin();
    hexbin.radius = hexRadius;

    //Calculate the center positions of each hexagon
    const points = [];
    for (let i = 0; i < MapRows; i++) {
      for (let j = 0; j < MapColumns; j++) {
        let x = hexRadius * j * Math.sqrt(3)
        //Offset each uneven row by half of a "hex-width" to the right
        if (i % 2 === 1) x += (hexRadius * Math.sqrt(3)) / 2
        let y = hexRadius * i * 1.5
        points.push([x, y])
      }//for j
    }//for i

    //Create SVG element
    const svg = d3
      .select("#plot-area")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var defs = svg
      .append('svg:defs')
      .attr("d", "M 20,20, 57.7,-100, 115.5,0z")
      .attr("transform", "translate(135.5, 100)")
      .attr("fill", "url(#grump_avatar)");

    defs.append("svg:pattern")
      .attr("id", "grump_avatar")
      .attr("width", 100)
      .attr("height", 100)
      .attr("patternUnits", "userSpaceOnUse")
      .append("svg:image")
      .attr("xlink:href", 'https://i.scdn.co/image/ab6761610000e5eb0db3b11972a84207f256769b')
      .attr("width", 100)
      .attr("height", 100)
      .attr("x", 0)
      .attr("y", 0);
    function random() {
      return Math.random() * 255
    }
    //Start drawing the hexagons
    svg.selectAll(".hexagons")
      .data(hexbin(points))
      .enter()
      .append("path")
      .attr("class", "hexagon")
      .style("r", "400")
      .attr("d", function (d) {
        return "m" + d.x + "," + d.y + hexbin.hexagon();
      })
      .attr("stroke", function (d) {
        return `rgb(${(random())},${(random())},${(random())})`
      })
      .attr("stroke-width", "172px")
      .on('mouseover', function (d) {
        this.parentNode.parentNode.appendChild(this.parentNode);
        this.parentNode.parentNode.parentNode.appendChild(this.parentNode.parentNode);
        d3.select(this).style('stroke', 'black')
          .style("stroke", "url(#grump_avatar)");
      })
    // .on("mouseout", function (d) {
    //   this.parentNode.parentNode.appendChild(this.parentNode);//the path group is on the top with in its parent group
    //   this.parentNode.parentNode.parentNode.appendChild(this.parentNode.parentNode);//the parent group is on the top with in its parent group
    //   d3.select(this)
    //     .style('stroke', `rgb(${(random())},${(random())},${(random())})`);
    // })
  }, [data])

  return (
    <div id="plot-area"></div>
  );
}
