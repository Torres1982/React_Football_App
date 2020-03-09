import React, { Component } from 'react';
import ball from './ball.png';
import './App.css';
import Footballer from './Footballer/Footballer';
import Club from './Club/Club';

class App extends Component {
  state = {
    clubs: [
        {club: 'Fc Barcelona', country: 'Spain'},
        {club: 'Bayern Munich', country: 'Germany'},
        {club: 'Juventus', country: 'Italy'},
        {club: 'PSG', country: 'France'},
        {club: 'Liverpool', country: 'England'}
    ],
    players: [
        { name: 'Lionel', surname: 'Messi', age: 32, nationality: 'Argentina', club: 'Fc Barcelona' },
        { name: 'Cristiano', surname: 'Ronaldo', age: 35, nationality: 'Portugal', club: 'Juventus Turin' },
        { name: 'Marcelo', surname: 'Salah', age:27, nationality: 'Egypt', club: 'Liverpool' },
        { name: 'Virgil', surname: 'van Dijk', age: 28, nationality: 'Netherlands', club: 'Liverpool' },
        { name: 'Alisson', surname: 'Becker', age: 27, nationality: 'Brazil', club: 'Liverpool' },
        { name: 'Robert', surname: 'Lewandowski', age: 31, nationality: 'Poland', club: 'Bayern Munich' }
    ],
    showPlayers: false
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

        <h2> Top European Clubs: </h2>

        <div>
            {this.state.clubs.map(club => {
                return <Club
                    club={club.club}
                    country={club.country}
                />
            })}

            <Footballer name={this.state.players[0].name} surname={this.state.players[0].surname} age={this.state.players[0].age} nationality={this.state.players[0].nationality} club={this.state.players[0].club}>
                The best Footballer of the World!
            </Footballer>
            <Footballer name={this.state.players[1].name} surname={this.state.players[1].surname} age={this.state.players[1].age} nationality={this.state.players[1].nationality} club={this.state.players[1].club}>
                The winner of the Golden Boot award!
            </Footballer>
            <Footballer name={this.state.players[2].name} surname={this.state.players[2].surname} age={this.state.players[2].age} nationality={this.state.players[2].nationality} club={this.state.players[2].club}>
                The best current Midfielder of the World.
            </Footballer>
        </div>

        {
            this.state.showPlayers ?
                <div>
                    <div>
                        <button onClick={this.togglePlayers}> Hide Players </button>
                    </div>

                    <Footballer name={this.state.players[3].name} surname={this.state.players[3].surname} age={this.state.players[3].age} nationality={this.state.players[3].nationality} club={this.state.players[3].club}>
                        The best current Goalkeeper of the World.
                    </Footballer>
                    <Footballer name={this.state.players[4].name} surname={this.state.players[4].surname} age={this.state.players[4].age} nationality={this.state.players[4].nationality} club={this.state.players[4].club}>
                        The best current Defender of the World.
                    </Footballer>
                    <Footballer name={this.state.players[5].name} surname={this.state.players[5].surname} age={this.state.players[5].age} nationality={this.state.players[5].nationality} club={this.state.players[5].club}>
                        Regarded as the Top Class Striker!.
                    </Footballer>
                </div>
            :
                <div>
                    <button onClick={this.togglePlayers}> Show More Players </button>
                </div>
	    }
      </div>
    );
  }
}

export default App;
