import React, { Component } from "react";
import "./Game.css";
import Nav from "../Nav";
import Card from "../Card";
import instruments from "../../instruments.json";
import Grid from "../Grid";

class Game extends Component {
  state = {
    instruments,
    score: 0,
    topScore: 0
  };

  handleImageClick = id => {
    let doubleClicked = false;

    let update = {
      instruments: [...this.state.instruments],
      score: this.state.score,
      topScore: this.state.topScore
    };
    update.instruments.forEach(instrument => {
      if (instrument.id === id) {
        if (instrument.clicked) {
          doubleClicked = true;
        } else {
          instrument.clicked = true;
          update.score++;
          if (update.score > update.topScore) {
            update.topScore = update.score;
          }
        }
      }
    });
    if (doubleClicked) {
      update.instruments.forEach(instrument => (instrument.clicked = false));
      update.score = 0;
    }

    update.instruments = update.instruments.sort(() => 0.5 - Math.random());

    this.setState({
      instruments: update.instruments,
      score: update.score,
      topScore: update.topScore
    });
  };

  render() {
    return (
      <div class="container-fluid">
        <Nav score={this.state.score} topScore={this.state.topScore} />
        <Grid>
          {this.state.instruments.map(instrument => (
            <Card
              key={instrument.id}
              won={
                this.state.score &&
                !(this.state.score % this.state.instruments.length)
              }
              id={instrument.id}
              image={instrument.image}
              handleImageClick={() => this.handleImageClick(instrument.id)}
            />
          ))}
        </Grid>
      </div>
    );
  }
}

export default Game;
