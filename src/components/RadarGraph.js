import React, { useState, useEffect } from 'react';
import Radar from 'react-d3-radar';
import * as d3 from 'd3'
import { voronoi } from 'd3-voronoi';
import useWindowDimensions from '../helpers/userWindowDimensions';
import './RadarGraph.scss'


export default function RadarGraph(props) {
  const [tracksNames, setTracksNames] = useState();
  const [tracksAnalysis, setTracksAnalysis] = useState();
  const [audioFeatures, setAudioFeatures] = useState();
  const [sets, setSets] = useState();

  useEffect(() => {

    const transformData = function (values) {
      let result = [];
      let set = {};

      values &&
        values.forEach((value) => {
          set['key'] = value.id;
          set['values'] = {
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
      setSets(result);
    };

    setAudioFeatures([
      { key: 'danceability', label: 'Danceability' },
      { key: 'energy', label: 'Energy' },
      { key: 'speechiness', label: 'Speechiness' },
      { key: 'acousticness', label: 'Acousticness' },
      { key: 'instrumentalness', label: 'Instrumentalness' },
      { key: 'liveness', label: 'Liveness' },
      { key: 'valence', label: 'Valence' },
    ]);

    setTracksNames(props.dataGraphFirst.top10Tracks);
    setTracksAnalysis(props.dataGraphSecond.tracksAnalysis);
  }, [props.dataGraphFirst.top10Tracks, props.dataGraphSecond.tracksAnalysis])



  console.log("trackNames", tracksNames)

  const { height, width } = useWindowDimensions();

  const topTracks = d3.select('#top-tracks')

  topTracks.selectAll('li')
      .data(tracksNames)
      .enter()
      .append('li')
      .text((d) => {
        return d.name
      })

  return (
    <>
      <div className="d-flex flex-column p-2 m-2">
        <span className="d-flex bg-primary text-white">
          Top 10 Tracks
        </span>
        <ul id="top-tracks">
        </ul>
      </div>
      <Radar
        width={width / 2}
        height={height / 2}
        padding={70}
        domainMax={1}
        highlighted={null}
        data={{
          variables: audioFeatures,
          sets: sets,
        }}
        onHover={(point) => {
          if (point) {

            console.log("point.x", point.x)
            console.log("point.y", point.y)
            voronoi(point.x, point.y)

            console.log('hovered over a data point');
          } else {
            console.log('not over anything');
          }
        }}
      />
    </>
  );
}
