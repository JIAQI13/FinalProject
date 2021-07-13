import React from "react";
import ChordDiagram from "react-chord-diagram";
import useWindowDimensions from "../helpers/userWindowDimensions";
import "./ChordChart.scss";

export default function Chords(props) {
  const { height, width } = useWindowDimensions();

  const data = [...props.graphData.topArtists];

  // Currently, about 15 songs looks the best for the graph
  const nameOrGenres = [];
  const slicedArray = data.slice(0, 15);
  for (let i = 0; i < 15; i++) {
    nameOrGenres.push(data[i].name, ...data[i].genres);
  }

  // Remove any duplicates from the mega array
  const all = [...new Set(nameOrGenres)];

  const realData = [];
  all.forEach((allElement) => {
    const realObj = {
      // source: ""
      // target: []
    };
    // Bowie
    realObj.source = allElement;

    const targetArr = [];
    slicedArray.forEach((sliceElement) => {
      if (sliceElement.name === allElement) {
        // Push all genres into target
        targetArr.push([...sliceElement.genres]);
      } else {
        // Name doesn't match, look through all genres for match
        sliceElement.genres.forEach((genreElement) => {
          // One of the artist's genres matches, push it to target
          if (genreElement === allElement) {
            targetArr.push(sliceElement.name);
          }
        });
      }
      realObj.target = targetArr;
    });
    realData.push(realObj);
  });

  // Create an array of arrays where the axes correspond to their target
  // finalArray length will be the same length of each inner array's length
  const finalArray = [];
  for (const axis of realData) {
    const eachMatch = [];

    all.forEach((element) => {
      if (axis.target.find((relation) => relation === element)) {
        eachMatch.push(1);
      } else {
        eachMatch.push(0);
      }
    });
    finalArray.push(eachMatch);
  }

  // Making random colors
  const random = () => {
    return (
      "rgb(" +
      (Math.floor(Math.random() * 100) + 75) +
      "," +
      (Math.floor(Math.random() * 100) + 155) +
      "," +
      (Math.floor(Math.random() * 100) + 75) +
      ")"
    );
  };

  const colors = [];
  all.forEach(() => colors.push(random()));

  // Narrow screens require additional height for the chart's viewport
  // This works in tandem with scss styling
  const heightExt = height < 600 ? 2 : 1.1;
  const widthExt = width < 600 ? 1.1 : 1;

  return (
    <>
      <h1 class="d-flex">
        Artists and Genres from your Top Tracks
      </h1>
      <div id="prompt">
        <div id="prompt-message">
          Trust me, you're going to want to Rotate Device
        </div>
        <i class="fas fa-mobile-alt"></i>
      </div>
      <div id="chord">
        <ChordDiagram
          matrix={finalArray}
          componentId={1}
          groupLabels={all}
          labelColors={colors}
          groupColors={colors}
          padAngle={0.06}
          height={height * heightExt}
          width={width * widthExt}
          outerRadius={225}
          innerRadius={200}
          strokeWidth={1.5}
          persistHoverOnClick={true}
          disableHover={false}
          style={{
            // Some of the styling for the chord chart is here
            // And is more specific, so possibly easier to manage
            textTransform: "capitalize",
            fontWeight: "bolder",
            wordWrap: "break-word",
            letterSpacing: "2px",
          }}
        />
      </div>
    </>
  );
}
