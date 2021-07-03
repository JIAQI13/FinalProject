import React from 'react';
import * as d3 from 'd3';

export default function BubblesGraph (props) {

  // !--! This could be changed using state, so we don't need
  //      to click a button to show the bubbles
  //      when the page first renders, props.graphData isn't available
  const onClick = () => {

    // !--! We should probably generalize the data that's coming in
    //      so we can use this bubble graph easily for other data
    const data = props.graphData;
    console.log("data", data);

    // Arbitrary size, aiming to be about the size of the window
    // !--! This should be updated later to properly show window size
    let width = 720;
    let height = 1080;


    const svg = d3.select("#chart")
      .append("svg")
      .attr("height", height)
      .attr("width", width)
      .append("g")
      .attr("transform", "translate(0,0)");

    const radiusScale = d3.scaleSqrt().domain([1, 100]).range([10, 80]);

    // Create the simlation for gravity and our circles
    // collection of forces that is put on our circles
    const simulation = d3.forceSimulation()
      .force("x", d3.forceX(width / 2).strength(0.05))
      .force("y", d3.forceY(height / 2).strength(0.03))
      .force("collide", d3.forceCollide(function(d) {
        return radiusScale(d.followers.total / 100000 + 1);
      }));


    // Target the SVG to create the circles
    // Bind the data for the callback using .data
    // Use .enter to append each additional circle
    // For multiple circles in the chart we use .append
    // Specify the attributes of the circles with .attr
    const circles = svg.selectAll(".artist")
      .data(data.query)
      .enter().append("circle")
      .attr("class", "artist")
      .attr("r", function(d) {
        console.log("artist followers.total: ", d.followers.total)
        return radiusScale(d.followers.total / 100000);
      })
      // !--! This should be changed later to show the album art
      .attr("fill", function(d) {
        // console.log("howdy", d.images[0].url)
        return d.images[0].url;
      })
      .on("click", function(d) {
        console.log("howdy", d);
      })
      .attr("cx", 100)
      .attr("cy", 300);


    const ticked = () => {
      circles
        .attr("cx", function(d) {
          return d.x;
        })
        .attr("cy", function(d) {
          return d.y;
        });
    };

    // Each tick, the system will check what forces are being
    // applied to our nodes
    simulation.nodes(data.query)
      .on('tick', ticked);
  };


  return (
    <>
      <button onClick={onClick}>Show Me Bubbles</button>
      <div id="chart"></div>
    </>
  );
};
