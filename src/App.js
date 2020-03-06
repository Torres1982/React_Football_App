import React, { Component } from 'react';
import ball from './ball.png';
import './App.css';
import Footballer from './Footballer/Footballer';

class App extends Component {
  state = {
    players: [
        { name: 'Lionel', surname: 'Messi', age: 32, nationality: 'Argentina', club: 'Fc Barcelona' },
        { name: 'Cristiano', surname: 'Ronaldo', age: 35, nationality: 'Portugal', club: 'Juventus Turin' }
    ],
    showPlayers: true
  }

  togglePlayers = () => {
    const isShown = this.state.showPlayers;
    this.setState({ showPlayers: !isShown });
    console.log('Show/Hide Players!');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={ball} className="App-logo" alt="logo" />
          <h1 className="App-title">Football World</h1>
        </header>
        <div>
            <button onClick={this.togglePlayers}> Toggle Players </button>
        </div>
        {
            this.state.showPlayers ?
                <div>
                    <Footballer name={this.state.players[0].name} surname={this.state.players[0].surname} age={this.state.players[0].age} nationality={this.state.players[0].nationality} club={this.state.players[0].club}>
                        The best Footballer of the World!
                    </Footballer>
                    <Footballer name={this.state.players[1].name} surname={this.state.players[1].surname} age={this.state.players[1].age} nationality={this.state.players[1].nationality} club={this.state.players[1].club}>
                        The winner of the Golden Boot award!
                    </Footballer>
                </div> : null
	    }
      </div>
    );
  }
}

export default App;
