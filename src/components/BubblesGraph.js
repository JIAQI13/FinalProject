import React, { useEffect } from 'react';
import * as d3 from 'd3';
import useWindowDimensions from '../helpers/userWindowDimensions'

export default function BubblesGraph(props) {
  const { height, width } = useWindowDimensions();

  console.log("height", height)
  console.log("width", width)

  useEffect(() => {
    // On window size change, remove all elements and rerender
    d3.select("#chart").selectAll("*").remove();

    const data = props.graphData;

    console.log("data", data)
    let dataKey = ""
    let domainMin = 0;
    let rangeMin = 0;
    let domainMax = 0;
    let rangeMax = 0;
    let dataBind = data.topArtists;

    // Set the data that's being rendered based on what's being passed in
    if (props.dataSet === "topArtistsFollowers") {
      dataKey = "followers";

      // For followers, the number can vary quite a but
      // So we get the largest number of followers and
      // use that to determine the domainMax
      const largest = [];
      data.topArtists.forEach(num => {
        largest.push(num.followers.total)
      });

      // !--! Probably a work in progress to get it just right
      const max = Math.max(...largest)
      domainMax = (max > 40000000 ? 9e8 : 2e8) * (width < 850 ? 1.3 : 1);
      rangeMax = 500;
    }

    if (props.dataSet === "topArtistsPopularity") {
      dataKey = "popularity";
      domainMax = 150 * (width < 850 ? 2 : 1);
      rangeMax = 100
    }

    if (props.dataSet === "topTracksPopularity") {
      dataKey = "topTracks";
      domainMax = 150 * (width < 850 ? 2 : 1);
      rangeMax = 100
      dataBind = data.topTracks
    }

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

    // Used to determine the size of circles on the page
    const radiusScale = d3.scaleSqrt().domain([domainMin, domainMax]).range([rangeMin, rangeMax]);

    // Create the simlation for gravity and the
    // collection of forces that is placed on the circles
    const simulation = d3.forceSimulation()
      .force("x", d3.forceX(width / 2).strength(0.07))
      .force("y", d3.forceY(height / 2).strength(0.05))
      .force("collide", d3.forceCollide(function (d) {
        if (dataKey === "followers") {
          return radiusScale(d[dataKey].total + 100000);
        }
        if (dataKey === "popularity") {
          return radiusScale(d[dataKey]) + 1;
        }
        if (dataKey === "topTracks") {
          return radiusScale(d.popularity) + 1;
        }
      }));

    // In order to get circles to fill, we need to set defs.
    // <defs> allow us to import the images as hidden elements
    // that we can reference for the circles fill attribute
    defs.selectAll(".artist-pattern")
      .data(dataBind)
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
        if (dataKey === "followers" || dataKey === "popularity") {
          return d.images[0].url
        }
        if (dataKey === "topTracks") {
          return d.album.images[0].url
        }
      })

    // Target the SVG to create the circles
    // Bind the data for the callback using .data
    // Use .enter to append each additional circle
    // For multiple circles in the chart we use .append
    // Specify the attributes of the circles with .attr
    const circles = svg.selectAll(".artist")
      .data(dataBind)
      .enter().append("circle")
      .attr("class", "artist")
      .attr("r", function (d) {
        if (dataKey === "followers") {
          return radiusScale(d[dataKey].total);
        }
        if (dataKey === "popularity") {
          return radiusScale(d[dataKey]) + 1;
        }
        if (dataKey === "topTracks") {
          return radiusScale(d.popularity) + 1;
        }
      })
      .attr("fill", function (d) {
        return `url(#${d.name.toLowerCase().replace(/ /g, "-")})`;
      })
      .style("stroke", "black")
      .on("click", function (event, d) {
        if (dataKey !== "top-tracks") {
          props.onClick(d.id);
        }
      })

      // Render the div with data information on mouseover events
      .on('mouseover', function (event, d) {
        d3.select(this).transition()
          .duration('1')
          .attr('opacity', '.85');
        div.transition()
          .duration(50)
          .style("opacity", 1);

        let dataNum = 0;
        if (dataKey === "followers") {
          dataNum = d[dataKey].total;
        }
        if (dataKey === "popularity") {
          dataNum = d[dataKey];
        }

        // Show large numbers with commas
        let numWithCommas = dataNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        let dataDiv = `${d.name} | ${dataKey[0].toUpperCase() + dataKey.slice(1)}: ${numWithCommas}`
        div.html(dataDiv)
          .style("position", "absolute")
          .style("left", `${d3.pointer(event)[0]}px`)
          .style("top", `${d3.pointer(event)[1]}px`)
          // !--! Add styling to css eventually
          .style("background-color", "#f1f1f1")
          .style("padding", "5px")
          .style("font-size", "19px")
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
        .attr("cx", function (d) {
          return d.x;
        })
        .attr("cy", function (d) {
          return d.y;
        });
    };

    // Each tick, the system will check what forces are being
    // applied to our nodes using the ticked function above
    simulation.nodes(dataBind)
      .on('tick', ticked);

  }, [props, height, width])

  return (
    <div id="chart"></div>
  );
};
