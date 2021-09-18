import React from "react";
import "./PlayListComponent.css";
import TrackCardComponent from "../TrackCardComponent/TrackCardComponent";
import { useState, useEffect } from "react";
var axios = require("axios").default;

function PlayListComponent() {
  const [Tracks, setTracks] = useState([]);
  const [PlayList, setPlayList] = useState([]);

  async function FetchApi() {
    var options = {
      method: "GET",
      url: "https://deezerdevs-deezer.p.rapidapi.com/playlist/1677006641",
      headers: {
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "a63d46bbadmsh10fe39557280db1p1ac635jsnb9b2f57ff773",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setPlayList(response.data);
        setTracks(response.data.tracks["data"]);
        console.log("xxx", Tracks);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  useEffect(() => {
    FetchApi();
  }, []);

  return (
    <div id="PlayListComponentDiv">
      <div id="PlayListTittle">
        <h3 id="PlayListHeader">PlayList</h3>
        <div id="ButtonsContainer">
          <button className="SelectionButton">My PlayList</button>
          <button className="SelectionButton">Recomended</button>
          <button className="SelectionButton">Last Listening</button>
        </div>
      </div>
      <div id="TracksContainer">
        {Tracks.map((track, index) => {
          console.log(track);
          return (
            <TrackCardComponent
              TrackInfo={track}
              Index={index}
            ></TrackCardComponent>
          );
        })}
      </div>
    </div>
  );
}

export default PlayListComponent;
