import React, { useEffect } from 'react';
import ChordDiagram from 'react-chord-diagram'
import * as d3 from 'd3';
import useWindowDimensions from '../helpers/userWindowDimensions'

export default function Chords(props) {
  const { height, width } = useWindowDimensions();

  const data = [...props.graphData.topArtists]
  console.log("data", props.graphData.topArtists)

  const bigArr = [];

  //tmp
  const slicedArray = data.slice(0, 10);

  // tmp
  for (let i = 0; i < 10; i++) {
    bigArr.push(data[i].name, ...data[i].genres)
  }

  // Combine artists and genres into one mega array
  // data.forEach(element => {
  //   bigArr.push(element.name, ...element.genres)
  // });

  // ????
  // || item === artistGenre.find(element => element === item)

  // Remove any duplicates from the mega array
  // console.log("bigArr", bigArr)
  const all = [...new Set(bigArr)]
  console.log("all", all)

  const finalArr = [];

  for (const item of all) {
    const rowArr = []
    for (const artistOrGenre of slicedArray) {

      // If artists title matches, you can add for all genres by default
      if (item === artistOrGenre.name) {
        rowArr.push(0)
        artistOrGenre.genres.forEach(() => rowArr.push(1))
      } else {
        const genres = artistOrGenre.genres.map(element => element === item);
        if (genres.find(element => element === true)) {
          rowArr.push(1)
        }
        genres.forEach((element) => element === true ? rowArr.push(0) : rowArr.push(0))
      }
      rowArr.push(0)

      // const genres = artistOrGenre.genres.map(element => element === item);
      // console.log("genres", genres)
      // genres.forEach((element) => element === true ? rowArr.push(1) : rowArr.push(0))


      // If the name doesn't match, check the genres and push if they match (should be just once)
      // if (item !== artistOrGenre.name && item === artistOrGenre.genres.find(element => element === item)) {
      //   rowArr.push(1)
      // }
      // else if (item !== artistOrGenre.name && item !== artistOrGenre.genres.find(element => element === item)) {
      //   artistOrGenre.genres.forEach(() => rowArr.push(0))
      // }

    }
    finalArr.push(rowArr)
  }

  console.log("maybe?", finalArr)

  // for (let i = 0; i < 1; i++) {
  //   constRow = []
  //   let count = 0;


  //   // if (all[i] === data[i].name || all[i] === data[i].genres.find(element => element === all[i]) {
  //   //   count++
  //   // }

  // }

  // const countOccurrences = arr => arr.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {});
  // const test = countOccurrences(allGenres)


  // console.log("all", allGenres)

  const genreNames = []
  const genreNumbers = []
  const genreColors = []

  // Making random colors
  const random = () => {
    const randomHex = "1234567890ABCDEF"

    let returnVal = ""
    while (returnVal.length < 7) {
      returnVal += randomHex[Math.floor(Math.random() * 16)]
    }
    return returnVal
  }


  // for (const key in test) {
  //   // console.log("key?", key)
  //   genreNames.push(key)
  //   genreNumbers.push(test[key])
  //   genreColors.push(`#${random()}`)
  // }

  console.log("names:", genreNames)
  console.log("numbers:", genreNumbers)
  console.log("colors:", genreColors)

  const matrix = [
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
  ];



  const testNames = ["album rock", "art rock", "classic rock", "glam rock", "permanent wave", "rock", "dinner jazz", "speedrun", "video game music", "indie rock", "modern rock", "alternative hip hop", "conscious hip hop", "east coast hip hop", "hardcore hip hop", "hip hop", "indie r&b", "neo soul", "philly rap", "political hip hop", "southern hip hop", "pittsburgh rap", "rap", "classic soul", "funk", "motown", "northern soul", "quiet storm", "soul", "jazz trio", "alternative rock", "folk rock", "melancholia", "protopunk", "psychedelic rock", "atl hip hop", "psychedelic hip hop", "underground hip hop", "lo-fi beats", "blues rock", "country rock", "folk", "mellow gold", "roots rock", "soft rock", "supergroup", "acid rock", "british folk", "british invasion", "psychedelic folk", "scottish singer-songwriter", "singer-songwriter"]
  const testNums = [3, 4, 5, 2, 2, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 4, 1, 1, 1, 5, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1]
  const testColors = ["#E3EF9F", "#77CB0E", "#F02508", "#F93C80", "#7F95E2", "#021F62", "#D2DB88", "#8A722B", "#620BA2", "#E021B6", "#7900CB", "#EFB0F0", "#0A4644", "#82A16C", "#BC5989", "#B07EFA", "#A5B0DF", "#E650C1", "#CFAF6E", "#A85A6F", "#9F5A2F", "#EF46EB", "#3E095F", "#73F5CD", "#C83F37", "#6DB760", "#D8EBEF", "#677FAD", "#01F638", "#9A49F5", "#CF6A59", "#70E4EA", "#1CF554", "#DC6846", "#5F089D", "#A1E950", "#B6A430", "#176F0B", "#69D79A", "#0A23A5", "#4FF57E", "#46AD8C", "#4FE067", "#B59F57", "#D632BB", "#783154", "#F1E1A8", "#0E392F", "#E66118", "#133187", "#05F66E", "#2250CC"]

  return (
    <div css="margin-left: 10px">
      <ChordDiagram
      matrix={finalArr}
      componentId={1}
      groupLabels={all}
      groupColors={testColors}
    />
    </div>
  );
}
