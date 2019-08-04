import React, { Component } from "react";
import './App.css';
import "./Header"
import Header from "./Header";
import Form from "./Form";

class App extends Component {

  state = {
    bets: [],
    bet: {
      person_name: "Peter Pan",
      time_bet: "10:17 Uhr"
    }
  };

  componentDidMount() {
    this.getBets();
  }

  getBets = _ => {
    fetch("http://ec2-54-157-54-3.compute-1.amazonaws.com/bets") //http://www.woistluis.moodlions.de/bets //http://192.168.178.198:4000
        .then(response => response.json())
        .then(response => this.setState({bets: response.data}))
        .catch(err => console.error(err))
  };

  addBet = _ => {
    const { bet } = this.state;

    fetch(`http://ec2-54-157-54-3.compute-1.amazonaws.com/bets/add?name=${bet.person_name}&bet=${bet.time_bet}`) //http://www.woistluis.moodlions.de/bets
        .then(response => response.json())
        .then(this.getProducts)
        .catch(err => console.error(err))
  };

  renderBets = ({ bet_id, name, bet}) =>
      <div key={bet_id}>
        <p>{name}</p>
        <p>{bet}</p>
      </div>;

    render() {
    const { bets, bet } = this.state;

        return (
            <div>
                <Header />
                <Form />
                <div>
                    <input
                        value={bet.person_name}
                        onChange={e => this.setState({bet: { ...bet, person_name: e.target.value}})}
                    />
                    <input
                        value={bet.time_bet}
                        onChange={e => this.setState({bet: { ...bet, time_bet: e.target.value}})}
                    />
                    <button onClick={this.addBet}>Wette abgeben</button>
                </div>
                {bets.map(this.renderBets)}
            </div>
        )
    }
}

export default App;
