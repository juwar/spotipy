import React, { useEffect } from "react";
import "./Music.css";
import NavBar from "./NavBar";
import Player from "./Player";
import SongList from "./SongList";
import songs from "../../data/songs.json";
import SongDetail from "./SongDetail";
import SongListHeader from "./SongListHeader";
import axios from "axios";

for (let index = 0; index < songs.length; index++) {
  const song = songs[index];
  song.id = index;
}

const App = () => {
    // const [songs, setSongs] = React.useState([]);
    // useEffect(() => {
    //   // GET request using axios inside useEffect React hook
    //   axios.get("http://localhost:8898/songs").then((response) => {
    //     setSongs(response.data.data);
    //     console.log("🚀 ~ file: App.js ~ line 23 ~ .then ~ response", response.data);
    //   });

    //   // for (let index = 0; index < songs.length; index++) {
    //   //   const song = songs[index];
    //   //   song.id = index;
    //   // }
    //   // empty dependency array means this effect will only run once (like componentDidMount in classes)
    // }, []);

  console.log("🚀 ~ file: App.js ~ line 38 ~ App ~ songs", songs);
  return (
    <React.Fragment>
      <NavBar />
      <SongListHeader />
      <SongDetail />
      <SongList songs={songs} />
      <Player />
      <a href="javascript:void 0" id="focus-link" hidden>
        Go to playing element
      </a>
    </React.Fragment>
  );
};
export default App;
