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
            <div className='image-cover-row-item-overlay'>
              <h1>Black Mirror</h1>

            </div>
          </div>


          <div className='image-cover-row-item'>

            <img src={Breakingbadcover} alt="Breaking Bad">
            </img>
            <div className='image-cover-row-item-overlay'>
              <h1>Breaking Bad</h1>

            </div>
          </div>


          <div className='image-cover-row-item'>

            <img src={Deathnotecover} alt="Death Note">
            </img>
            <div className='image-cover-row-item-overlay'>
              <h1>Death Note</h1>

            </div>
          </div>
        </div>
        <div className='image-cover-row'>
          <div className='image-cover-row-item'>
            <img src={Gameofthronescover} alt="Game of Thrones">
            </img>
            <div className='image-cover-row-item-overlay'>
              <h1>Game of Thrones</h1>
            </div>
          </div>
          <div className='image-cover-row-item'>
            <img src={Fearthewalkingdeadcover} alt="Fear The Walking Dead">
            </img>
            <div className='image-cover-row-item-overlay'>
              <h1>Fear The Walking Dead</h1>
            </div>
          </div>

          <div className='image-cover-row-item'>
            <img src={Thewirecover} alt="The Wire">
            </img>
            <div className='image-cover-row-item-overlay'>
              <h1>The Wire</h1>
            </div>
          </div>
        </div>
      </div>







    );
  }
}

export default App;
