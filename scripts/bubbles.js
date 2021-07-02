d3.json("../data/top-tracks.json").then(data => {
  console.log("data", data);

  // We need to immediately invoke the function to update data
  (function() {

    // Arbitrary size, aiming to be about the size of the window
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
        console.log("datatata", d.popularity)
        return radiusScale(d.popularity);
      }));

    // All of the popularity numbers, 0 - 100
    const popArr = [];

    // Push all the popularity numbers
    data.items.forEach(element => {
      const popularity = Number(element.popularity);

      console.log("hello", popularity);
      popArr.push(popularity);
    });

    console.log("what are you", data.items.length)

    // Target the SVG to create the circles
    // Bind the data for the callback using .data
    // Use .enter to append each additional circle
    // For multiple circles in the chart we use .append
    // Specify the attributes of the circles with .attr
    const circles = svg.selectAll(".track")
      .data(data.items)
      .enter().append("circle")
      .attr("class", "track")
      .attr("r", function(d) {
        return radiusScale(d.popularity);
      })
      .attr("fill", "lightblue")
      .on("click", function(d) {
        console.log(d.popularity);
        console.log(data.items);
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
    simulation.nodes(data.items)
      .on('tick', ticked);


  })();

});
