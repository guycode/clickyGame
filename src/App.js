import React, { Component } from "react";
import players from "./players.json";
import navScore from "./components/navScore";
import Players from "./components/Player";

// shuffle 
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends Component {
  state = {
    players,
    score: 0,
    topScore: 0,
    showAlert: 0,
    showSuccess: 0,
    clickedPlayers: []
  };

  clickedImage = id => {
    let clickedPlayers = this.state.clickedPlayers;
    let score = this.state.score;
    let topScore = this.state.topScore;
    this.setState({
      showAlert: 0
    });

    // if the clicked image has an id of the indexed players
    if (clickedPlayers.indexOf(id) === -1) {
      // push that id into that id into the array to be stored
      clickedPlayers.push(id);
      console.log(clickedPlayers);
      // run the score function
      this.handleIncrement();
      // run the reshuffle function after each click
      this.makeShuffle();
    } else if (this.state.score === 12) {
      // alert player wins
      this.setState({
        showSuccess: 1,
        score: 0,
        clickedPlayers: []
      });
    } else {
       // alert player loss
      this.setState({
        score: 0,
        clickedPlayers: []
      });
      console.log("duplicate");
      this.setState({
        showAlert: 1
      });
    }

    if (score > topScore) {
      this.setState({
        topScore: score
      });
    }
  };

  // handleIncrement increases this.state.score by 1
  handleIncrement = () => {
    // setState updates a components states
    this.setState({ score: this.state.score + 1 });
  };

  // shuffle up images
  makeShuffle = () => {
    this.setState({ players: shuffle(players) });
  };

  render() {
    return (
      <div className="container">
        <div
          className="alert alert-danger"
          style={{ opacity: this.state.showAlert }}
        >
          You clicked on this already, try again...
          </div>
        <div
          className="alert alert-success"
          style={{ opacity: this.state.showSuccess }}
        >
          Brilliant, you haven't clicked on duplicates!
          </div>
        <navScore
          title="Guess That NHL Player"
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <div className="row">
          {this.state.players.map(player => (
            <Players
              key={player.id}
              id={player.id}
              name={player.name}
              image={player.image}
              clickedImage={this.clickedImage}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default App;