import React, { useRef, useEffect } from "react";
import {
  select,
  hierarchy,
  forceSimulation,
  forceManyBody,
  pointer,
  forceX,
  forceY,
  forceCollide,
  scaleSqrt
} from "d3";
import useResizeObserver from "../helpers/useResizeObserver";
import useWindowDimensions from '../helpers/userWindowDimensions'

/**
 * Component, that renders a force layout for hierarchical data.
 */

function ForceTreeChart(props) {
  const { height, width } = useWindowDimensions();

  // Artist which all other artists are related to
  const parent = { ...props.parent }

  // Set all artists to create the defs which will be used
  // to correctly set the artist image urls
  // Add parent to the list
  const allArtists = [...props.graphData.relatedArtists]
  allArtists.unshift({ ...parent })

  // This is used for the actual node and link dependencies
  // spread the related artists in childArr for .dependencies to use
  const childArr = [...props.graphData.relatedArtists]
  const parentArtist = {
    ...parent,
    children: [...childArr]
  }

  // Require a function call to navigate to a new tab
  const spotifyClick = (url) => {
    window.open(url, '_blank');
  }

  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);

  // Will be called initially and when data comes through
  useEffect(() => {

    if (!dimensions) return;
    const svg = select(svgRef.current);

    // centering workaround
    svg.attr("viewBox", [
      -dimensions.width / 2,
      -dimensions.height / 2,
      width,
      height
    ]);

    const div = select("#artist-info")
      .append("div")
      .attr("class", "circle-info")
      .style("opacity", 0)

    // Defs for setting up the images that will load on the circles
    const defs = svg.append("defs")
    defs.selectAll(".artist-pattern")
      .data(allArtists)
      .enter().append("pattern")
      .attr("class", "artist-pattern")
      .attr("id", function (d) {
        return d.name.toLowerCase().replace(/ /g, "-").replace(/'/g, "-").replace(/"/g, "-")
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
        return (d.images[0] ? d.images[0].url : `https://nilepost.co.ug/wp-content/uploads/2021/02/Spotify-logo.jpg`)
      })

    // d3 util to work with hierarchical data
    const root = hierarchy(parentArtist);
    const nodeData = root.descendants();
    const linkData = root.links();

    // Radius scale to change size of circles with screen height/width
    const radiusScale = scaleSqrt().domain([0, width * 2 - 100]).range([0, width * 1.5]);

    const simulation = forceSimulation(nodeData)
      .force("charge", forceManyBody().strength(-15))
      .force("collide", forceCollide(function (d) {
        return radiusScale(d.data.name === parent.name ? 3.5 : 1) + 15
      }))
      .on("tick", () => {

        svg
          .selectAll(".alpha")
          .data([parentArtist])
          .attr("class", "alpha")
          .text(simulation.alpha().toFixed(2))
          .attr("x", -dimensions.width / 2 + 10)
          .attr("y", -dimensions.height / 2 + 25);

        // Links between circles
        svg
          .selectAll(".link")
          .data(linkData)
          .join("line")
          .attr("class", "link")
          .attr("stroke", "#a7a7a7")
          .attr("fill", "none")
          .attr("x1", link => link.source.x)
          .attr("y1", link => link.source.y)
          .attr("x2", link => link.target.x)
          .attr("y2", link => link.target.y);

        // Each circle
        svg
          .selectAll(".node")
          .data(nodeData)
          .join("circle")
          .attr("class", "node")
          .attr("r", function (d) {
            return radiusScale(d.data.name === parent.name ? 4 : 1)
          })
          .attr("cx", node => node.x)
          .attr("cy", node => node.y)
          .attr("fill", function (d) {
            return `url(#${d.data.name.toLowerCase().replace(/ /g, "-").replace(/'/g, "-").replace(/"/g, "-")})`;
          })
          .attr("stroke", "black")
          .attr("stroke-width", "1px")
          .on('mouseover', function (event, d) {
            // Show div with artist name and allow user to click link

            select(this)
              .transition()
              .duration('1')
              .attr('opacity', '.95')
              .style("cursor", "pointer");

            div.transition()
            .duration(50)
            .style("opacity", 1)

            div.on('mouseover', function() {
              console.log("this?", select(this))
              select(this)
                  .transition()
                  .duration(50)
                  .style("opacity", 1)
              })
              .on('mouseout', function() {
                select(this)
                  .transition()
                  .duration('50')
                  .style("opacity", 0);
              });

            let dataDiv = `${d.data.name}`
            div.html(dataDiv)
              .style("position", "absolute")
              .style("left", `${pointer(event)[0] - width / -2}px`)
              .style("top", `${pointer(event)[1] - height / -2}px`)
              // !--! Add styling to css eventually
              .style("background-color", "#f1f1f1")
              .style("padding", "5px")
              .style("font-size", "19px")
              .style("font-weight", "500")
              .style("border-radius", "10px")

          })
          .on('mouseout', function (d, i) {
            select(this).transition()
              .duration('1')
              .attr('opacity', '1')
              .style("cursor", "default");
            div.transition()
              .duration('50')
              .style("opacity", 0);
          })
          .on("click", function (event, d) {
            spotifyClick(d.data.external_urls.spotify)
          })
      });

    // Bring the circles back together slowly
    svg.on("mousemove", () => {
      const [x, y] = pointer(svgRef.current);
      simulation
        .force(
          "x",
          forceX(x).strength(0.08)
        )
        .force(
          "y",
          forceY(y).strength(0.08)
        );
    });

  }, [parent, allArtists, dimensions, height, width]);

  return (
    <div ref={wrapperRef} style={{}}>
      <div id="artist-info"></div>
      <svg ref={svgRef}></svg>
    </div>
  );
}

export default ForceTreeChart;
