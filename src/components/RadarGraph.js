import React from "react";
import Radar from "react-d3-radar";
import useWindowDimensions from "../helpers/userWindowDimensions";

const transformData = function (values) {
  let result = [];
  let set = {};

  values &&
    values.forEach((value) => {
      set["key"] = value.id;
      set["values"] = {
        danceability: value.danceability,
        energy: value.energy,
        speechiness: value.speechiness,
        acousticness: value.acousticness,
        instrumentalness: value.instrumentalness,
        liveness: value.liveness,
        valence: value.valence,
      };
      result.push(set);
      set = {};
    });
  return result;
};

const audio_features = [
  { key: "danceability", label: "danceability" },
  { key: "energy", label: "energy" },
  { key: "speechiness", label: "speechiness" },
  { key: "acousticness", label: "acousticness" },
  { key: "instrumentalness", label: "instrumentalness" },
  { key: "liveness", label: "liveness" },
  { key: "valence", label: "valence" },
];

export default function RadarGraph(data) {
  const { height, width } = useWindowDimensions();
  const sets = transformData(data.data.tracksAnalysis);
  return (
    <Radar
      width={width / 2}
      height={height / 2}
      padding={70}
      domainMax={1}
      highlighted={null}
      data={{
        variables: audio_features,
        sets: sets,
      }}
      onHover={(point) => {
        if (point) {
          console.log("hovered over a data point");
        } else {
          console.log("not over anything");
        }
      }}
    />
  );
}
