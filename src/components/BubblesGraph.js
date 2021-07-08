import React, { useEffect } from 'react';
import * as d3 from 'd3';
import Alert from 'react-bootstrap/Alert'

export default function BubblesGraph(props) {
  useEffect(() => {
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

    const simulation = d3.forceSimulation()
      .force("x", d3.forceX(750).strength(0.1))
      .force("y", d3.forceY(305).strength(0.1))
      .force("collide", d3.forceCollide(radius - 5))
      .nodes(data)

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

    const circles = svg.selectAll(".artist")
      .data(data)
      .enter()
      .append("circle")
      .attr("class", "artist")
      .style("stroke", "white")
      .attr("stroke-width", "5px")
      .attr("r", (data) => {
        return radius * (data.popularity / 100)
      })
      .attr("fill", function (data) {
        return `url(#${data.id})`;
      })

    const ticked = () => {
      circles
        .attr("cx", function (d) { return d.x; })
        .attr("cy", function (d) { return d.y; });
    };

    simulation
      .nodes(data)
      .on('tick', ticked);

  })

  return (
    <div>
      <div id="chart"></div>
      <div>
        <Alert key='light' variant='light'>“Works of art make rules; rules do not make works of art.” – Claude Debussy.</Alert>
      </div>
    </div>
  );
};
