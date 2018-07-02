import React, { Component } from 'react';
import './App.css';
import Thewirecover from './tvshowimages/TheWire.jpg';
import Breakingbadcover from './tvshowimages/BreakingBad.jpg';
import Deathnotecover from './tvshowimages/DeathNote.jpg';
import Fearthewalkingdeadcover from './tvshowimages/FearTheWalkingDead.jpg';
import Gameofthronescover from './tvshowimages/GameOfThrones.jpg';
import Blackmirrorcover from './tvshowimages/BlackMirror.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='image-cover-row'>
            <div className='image-cover-row-item'>
            <img src={Blackmirrorcover} alt="Black Mirror">
            </img>
              <h1>Black Mirror</h1>
            </div>
            <div className='image-cover-row-item'>
            <img src={Breakingbadcover} alt="Breaking Bad">
              </img>      
              <h1>Breaking Bad</h1>
            </div>
            <div className='image-cover-row-item'>
            <img src={Deathnotecover} alt="Death Note">
              </img>      
              <h1>Death Note</h1>
            </div>
          </div>
            <div className='image-cover-row'>
            <div className='image-cover-row-item'>
            <img src={Gameofthronescover} alt="Game of Thrones">
            </img>
              <h1>Game of Thrones</h1>
            </div>
            <div className='image-cover-row-item'>
            <img src={Fearthewalkingdeadcover} alt="Fear The Walking Dead">
            </img>
              <h1>Fear The Walking Dead</h1>
            </div>
             <div className='image-cover-row-item'>
             <div className="Tvshow-cover">
            <img src={Thewirecover} alt="The Wire">
              </img>      
              <h1>The Wire</h1>
              </div>
            </div>
          </div>
        </div>

      
    );
}
}

export default App;
