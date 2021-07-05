import { useD3 } from '../hooks/useD3';
import React from 'react';
import * as d3d from 'd3';
import * as HexbinPlot from 'd3-hexbin';
const d3 = {
  ...d3d,
  hexbin: HexbinPlot.hexbin
}


function HexagonGraph(props) {
  const ref = useD3(
    (svg) => {
      //svg sizes and margins
      var margin = {
        top: 50,
        right: 0,
        bottom: 0,
        left: 0
      };

      var width = 1900;
      var height = 500;

      //The number of columns and rows of the heatmap
      var MapColumns = 11,
        MapRows = 4;

      //The maximum radius the hexagons can have to still fit the screen
      // var hexRadius = d3.min([width / (MapColumns) * 1.5,
      // height / (MapRows)]);
      var hexRadius = 100;

      //Set the new height and width of the SVG based on the max possible
      // width = MapColumns * hexRadius;
      // heigth = MapRows * hexRadius;

      //Set the hexagon radius
      var hexbin = d3.hexbin();
      hexbin.radius = hexRadius;

      //Calculate the center positions of each hexagon
      var points = [];
      for (var i = 0; i < MapRows; i++) {
        for (var j = 0; j < MapColumns; j++) {
          var x = hexRadius * j * Math.sqrt(3)
          //Offset each uneven row by half of a "hex-width" to the right
          if (i % 2 === 1) x += (hexRadius * Math.sqrt(3)) / 2
          var y = hexRadius * i * 1.5
          points.push([x, y])
        }//for j
      }//for i

      //Create SVG element
      svg = d3.select("#plot-area").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      //Start drawing the hexagons
      svg.append("g")
        .data(hexbin(points))
        .enter().append("path")

        .attr("d", function (d) {
          return "M" + d.x + "," + d.y + hexbin.hexagon();
        })
        .attr("stroke", function (d, i) {
          return "#fff";
        })
        .attr("stroke-width", "1px")
    }
  );

  return (
    <svg ref={ref}>
      <g id="plot-area" />
    </svg>
  );
}

export default HexagonGraph;
