import logo from './logo.svg';
import './App.css';

import FavouriteComponent from "./Components/FavouriteComponent/FavouriteComponent"
import StatusComponent from "./Components/StatusComponent/StatusComponent"
import PlayerControllerComponent from "./Components/PlayerControllerComponent/PlayerControllerComponent"
import PlayListComponent from "./Components/PlayListComponent/PlayListComponent"



function App() {
  return (
    <div className="App">
        <div id="MainContainer">
            <FavouriteComponent id="FavouriteComponent"></FavouriteComponent>
            <StatusComponent id="StatusComponent"></StatusComponent>
            <PlayerControllerComponent id="PlayerControllerComponent"></PlayerControllerComponent>
            <PlayListComponent id="PlayListComponent"></PlayListComponent>
        </div>
    </div>
  );
}

export default App;
