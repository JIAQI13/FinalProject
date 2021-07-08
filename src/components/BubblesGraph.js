import React, { useEffect } from 'react';
import * as d3 from 'd3';

export default function BubblesGraph(props) {
  useEffect(() => {
    //initilization
    const radius = 60;
    const data = props.graphData.topArtists;
    const svg = d3
      .select("#chart")
      .append("svg")
      .attr("preserveAspectRatio", "xMinYMin meet")
      .attr("viewBox", "0 0 1500 600")
      .classed("svg-content-responsive", true)
      .append("g")
      .attr("transform", "translate(0,0)");

    //animation
    const simulation = d3.forceSimulation()
      .force("x", d3.forceX(750).strength(0.1))
      .force("y", d3.forceY(305).strength(0.1))
      .force("collide", d3.forceCollide(radius - 5))
      .nodes(data)

    //start drawing
    svg.append("defs")
      .selectAll(".artist-pattern")
      .data(data)
      .enter()
      .append("pattern")
      .attr("class", "artist-pattern")
      .attr("id", function (data) {
        return data.id
      })
      .attr("height", '100%')
      .attr("width", '100%')
      .attr("patternContentUnits", "objectBoundingBox")
      .append("image")
      .attr("height", 1)
      .attr("width", 1)
      .attr("preserveAspectRatio", "none")
      .attr("xlink:href", function (data) { return data.images[2].url })

    //bubble graph circles
    const circles = svg.selectAll(".artist")
      .data(data)
      .enter()
      .append("circle")
      .attr("class", "artist")
      .style("stroke", "white")
      .attr("stroke-width", "5px")
      .style("cursor", "pointer")
      .attr("id", (data) => {
        return data.id
      })
      .on("click", function () {
        console.log(this);
        //window.location.href = `http://localhost:3000/graphs/top-artists/${this.id}/related-artists`;
      })
      .attr("r", (data) => {
        return radius * (data.popularity / 100)
      })
      .attr("fill", function (data) {
        return `url(#${data.id})`;
      })

    //move circle into position
    const ticked = () => {
      circles
        .attr("cx", function (d) { return d.x; })
        .attr("cy", function (d) { return d.y; });
    };

    //animation start
    simulation
      .nodes(data)
      .on('tick', ticked);
  })

  return (
    <div>
      <div id="chart"></div>
    </div>
  );
};
