import { useD3 } from '../hooks/useD3';
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

  // We should use some type of state until the data loads,
  // but for now, useEffect works for loading the data when ready
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

    //The number of columns and rows of the heatmap
    const MapColumns = 11,
      MapRows = 4;

    //The maximum radius the hexagons can have to still fit the screen
    // const hexRadius = d3.min([width / (MapColumns) * 1.5,
    // height / (MapRows)]);
    const hexRadius = 100;

    //Set the new height and width of the SVG based on the max possible
    // width = MapColumns * hexRadius;
    // heigth = MapRows * hexRadius;

    //Set the hexagon radius
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

    // const defs = svg.append("defs")

    // Same as bubbles, we can use defs to grab any images
    // to be used by our svg
    // defs.selectAll(".artist-pattern")
    //   .data(data)
    //   .enter().append("pattern")
    //   .attr("class", "artist-pattern")
    //   .attr("id", function (d) {
    //     return d.name.toLowerCase().replace(/ /g, "-")
    //   })
    //   .attr("height", "100%")
    //   .attr("width", "100%")
    //   .attr("patternContentUnits", "objectBoundingBox")
    //   .append("image")
    //   .attr("height", 1)
    //   .attr("width", 1)
    //   .attr("preserveAspectRatio", "none")
    //   .attr("xmlns:xlink", "http://www.w3.org/1999/xlink")
    //   .attr("xlink:href", function (d) {
    //     return d.images[0].url
    //   })

    //Start drawing the hexagons
    svg.selectAll(".hexagons")
      .data(hexbin(points))
      .enter()
      .append("path")
      .attr("class", "hexagon")
      .style("r", "400")
      .attr("d", function (d) {
        // Somewhere in here lies the issue
        // Currently, the hexagons are about 1px by 1px
        // And the stroke (padding) around them is what
        // can give them their color - but stroke doesn't work
        // quite the same as fill, and if we try to use stroke for
        // images it just repeats and doesn't quite work
        return "m" + d.x + "," + d.y + hexbin.hexagon();
      })
      .attr("stroke", function (d) {
        function random(){
          return Math.random() * 255
        }
        return `rgb(${(random())},${(random())},${(random())})`
      })
      .attr("stroke-width", "172px")
      .data(data)
      // .style("stroke", function (d, i) {
      //   // Like in the bubble graph, you can target the defs id
      //   // to retrieve the url image that you want
      //   return `url(#${d.name.toLowerCase().replace(/ /g, "-")})`;
      // })

    }, [data])

    return (
      <div id="plot-area"></div>
    );
}
