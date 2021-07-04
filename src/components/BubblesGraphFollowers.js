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

    const defs = svg.append("defs")

    const div = d3.select("#chart").append("div")
                  .attr("class", "circle-info")
                  .style("opacity", 0);

    const radiusScale = d3.scaleSqrt().domain([1, 100]).range([10, 80]);

    // Create the simlation for gravity and our circles
    // collection of forces that is put on our circles
    const simulation = d3.forceSimulation()
      .force("x", d3.forceX(width / 2).strength(0.05))
      .force("y", d3.forceY(height / 2).strength(0.03))
      .force("collide", d3.forceCollide(function(d) {
        return radiusScale(d.followers.total / 50000 + 1);
      }));

    // In order to get circles to fill, we need to set defs
    // defs allow us to import the images into hidden elements
    // that we can reference in our circles in the svg element
    defs.selectAll(".artist-pattern")
        .data(data.query)
        .enter().append("pattern")
        .attr("class", "artist-pattern")
        .attr("id", function (d) {
          return d.name.toLowerCase().replace(/ /g, "-")
        })
        .attr("height", "100%")
        .attr("width", "100%")
        .attr("patternContentUnits", "objectBoundingBox")
        .append("image")
        .attr("height", 1)
        .attr("width", 1)
        .attr("preserveAspectRatio", "none")
        .attr("xmlns:xlink", "http://www.w3.org/1999/xlink")
        .attr("xlink:href", function (d) {
          return d.images[0].url
        })

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
                         console.log("artist name: ", d.name)
                         return radiusScale(d.followers.total / 50000);
                       })
                       .attr("fill", function(d) {
                         return `url(#${d.name.toLowerCase().replace(/ /g, "-")})`;
                       })
                       .on("click", function(d) {
                         console.log(d.popularity);
                       })
                       .attr("cx", 100)
                       .attr("cy", 300)
                       .on('mouseover', function (event, d, i) {
                        d3.select(this).transition()
                          .duration('1')
                          .attr('opacity', '.85');
                        div.transition()
                           .duration(50)
                           .style("opacity", 1);

                       // Render the div with data information on mouseover events
                       let dataDiv = d.name + " | Followers: " + d.followers.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                       div.html(dataDiv)
                          .style("position", "absolute")
                          .style("left", `${d3.pointer(event)[0]}px`)
                          .style("top", `${d3.pointer(event)[1]}px`)
                          // !--! Add styling to css eventually
                          .style("background-color", "#f1f1f1")
                          .style("padding", "5px")
                          .style("border-radius", "19px")
                          .style("font-weight", "500")
                          .style("border-radius", "10px")
                      })
                     .on('mouseout', function (d, i) {
                       d3.select(this).transition()
                         .duration('1')
                         .attr('opacity', '1');
                       div.transition()
                          .duration('50')
                          .style("opacity", 0);
                     })


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
