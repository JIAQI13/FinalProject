import React, { useEffect } from 'react';
import ChordDiagram from 'react-chord-diagram'
import * as d3 from 'd3';
import useWindowDimensions from '../helpers/userWindowDimensions'
import { chord } from 'd3';

export default function Chords(props) {
  const { height, width } = useWindowDimensions();

  const data = [...props.graphData.topArtists]
  console.log("data", props.graphData.topArtists)

  const nameOrGenres = [];

  //tmp
  const slicedArray = data.slice(0, 5);

  // tmp
  for (let i = 0; i < 5; i++) {
    nameOrGenres.push(data[i].name, ...data[i].genres)
  }

  // Combine artists and genres into one mega array
  // data.forEach(element => {
  //   nameOrGenres.push(element.name, ...element.genres)
  // });

  // Remove any duplicates from the mega array
  // console.log("nameOrGenres", nameOrGenres)
  const all = [...new Set(nameOrGenres)]
  console.log("all", all)

  const finalArr = [];

  // WORKING? EXAMPLE

  // for (const item of all) {
  //   const rowArr = []
  //   for (const artistOrGenre of slicedArray) {

  //     // If artists title matches, you can add for all genres by default
  //     if (item === artistOrGenre.name) {
  //       rowArr.push(0)
  //       artistOrGenre.genres.forEach(() => rowArr.push(1))
  //     } else {
  //       const genres = artistOrGenre.genres.map(element => element === item);
  //       if (genres.find(element => element === true)) {
  //         rowArr.push(1)
  //       }
  //       genres.forEach((element) => element === true ? rowArr.push(0) : rowArr.push(0))
  //     }
  //     rowArr.push(0)
  //   }
  //   finalArr.push(rowArr)
  // }


  const artists = [
    {
      artist: "Bowie",
      genres: ["art rock", "classic rock", "glam rock", "permanent wave", "rock"]
    },
    {
      artist: "Chill Jazz",
      genres: ["dinner jazz"]
    },
    {
      artist: "League of Legends",
      genres: ["speedrun", "video game music"]
    }
  ]

  console.log("aritsts", artists)

  const genres = ["art rock", "classic rock", "glam rock", "permanent wave", "rock", "dinner jazz", "speedrun", "video game music"]


  const bowie = ["Bowie", "art rock", "classic rock", "glam rock", "permanent wave", "rock"]
  const jazz = ["Chill Jazz", "dinner jazz"]
  const league = ["League of Legends", "speedrun", "video game music"]

  const allOfThem = [...bowie, ...jazz, ...league]

  const them = [bowie, jazz, league]

  const final = [];

  for (const item of them) {
    const prepareBooleans = (genres, item) => {
      const booleans = genres.map(el => {
          return item.includes(el);
      });
      return booleans;
    };
    const test = (prepareBooleans(genres, item));
    final.push(test)
  }

  // // const artistNames = [3,9,11,2,20];
  // // const genres = [1,2,3];
  // const prepareBooleans = (artistNames, genres) => {
  //   const booleans = artistNames.map(el => {
  //       return genres.includes(el);
  //   });
  //   return booleans;
  // };
  // const test = (prepareBooleans(artistNames, genres));


  // for (const artist of artists) {
  //   const row = []
  //   const artistGenres = [...artist.genres]

  //   const prepareBooleans = (genres, artistGenres) => {
  //     const booleans = genres.map(el => {
  //         return artistGenres.includes(el);
  //     });
  //     return booleans;
  //   };
  //   const yes = (prepareBooleans(genres, artistGenres));

  //   yes.forEach((e) => e === true ? row.push(1) : row.push(0))

  //   final.push(row)
  // }

  console.log("final", final)

  // Making random colors
  const random = () => {
    const randomHex = "1234567890ABCDEF"

    let returnVal = ""
    while (returnVal.length < 7) {
      returnVal += randomHex[Math.floor(Math.random() * 16)]
    }
    return returnVal
  }

  // const matrix = [
  //   [1, 1, 1],
  //   [1, 1, 1],
  //   [1, 1, 1],
  //   [1, 1, 1],
  //   [1, 1, 1],
  //   [1, 1, 1],
  //   [1, 1, 1],
  //   [1, 1, 1],
  //   [1, 1, 1],
  //   [1, 1, 1],
  //   [1, 1, 1],
  // ]


  const matrix = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ]


  console.log("allofthem", allOfThem)

  const testColors = ["#E3EF9F", "#77CB0E", "#F02508", "#F93C80", "#7F95E2", "#021F62", "#D2DB88", "#8A722B", "#620BA2", "#E021B6", "#7900CB", "#EFB0F0", "#0A4644", "#82A16C", "#BC5989", "#B07EFA", "#A5B0DF", "#E650C1", "#CFAF6E", "#A85A6F", "#9F5A2F", "#EF46EB", "#3E095F", "#73F5CD", "#C83F37", "#6DB760", "#D8EBEF", "#677FAD", "#01F638", "#9A49F5", "#CF6A59", "#70E4EA", "#1CF554", "#DC6846", "#5F089D", "#A1E950", "#B6A430", "#176F0B", "#69D79A", "#0A23A5", "#4FF57E", "#46AD8C", "#4FE067", "#B59F57", "#D632BB", "#783154", "#F1E1A8", "#0E392F", "#E66118", "#133187", "#05F66E", "#2250CC"]

  return (
    <div css="margin-left: 10px">
      <ChordDiagram
      matrix={matrix}
      componentId={1}
      groupLabels={allOfThem}
      groupColors={testColors}
    />
    </div>
  );
}
