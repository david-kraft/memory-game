import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cards from "./cards.json";
import "./App.css";

class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    cards,
    message: "Hello World!",
    score: 0,
    hiScore: 0
  };

  checkHiScore() {
    if (this.state.score === 12) {
      return this.state.score
    } else if (this.state.hiScore === this.state.score){
      return this.state.score + 1
    } else {
      return this.state.hiScore
    }
  }

  handleClicked = (item) => {
    let stateArray= this.state.cards.slice()
  if (!item.clicked) {
    for (let i=0; i<stateArray.length; i++) {
      if (stateArray[i].id === item.id) {
        stateArray[i].clicked = true
      }
    }
    this.setState({
      score: this.state.score + 1,
      hiScore: this.checkHiScore(),
      message: "You've got a point!",
      cards: stateArray.sort(() => Math.random() - 0.5)
    })


  } else {
    this.setState({
      score: 0,
      hiScore: this.checkHiScore(),
      message: "That's already been clicked!",
      cards: cards
    });
  }
  
  
  
  
  
  
  
  
  }

  // Map over this.state.cards and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>{this.state.message}</Title>
        <Title>Score: {this.state.score}</Title>
        <Title>High-Score: {this.state.hiScore}</Title>
        {this.state.cards.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            image={friend.image}
            clicked={friend.clicked}
            handleClicked={this.handleClicked}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
