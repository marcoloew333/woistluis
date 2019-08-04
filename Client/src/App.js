import React, { Component } from "react";
import './App.css';
import "./Header"
import Header from "./Header";
import Form from "./Form";
import Bets from "./Bets";

class App extends Component {

  // state = {
  //   bets: [],
  //   bet: {
  //     person_name: "Peter Pan",
  //     time_bet: "10:17 Uhr"
  //   }
  // };

  // componentDidMount() {
  //   this.getBets();
  // }
  //
  // getBets = _ => {
  //   fetch("http://ec2-54-157-54-3.compute-1.amazonaws.com/bets")
  //       .then(response => response.json())
  //       .then(response => this.setState({bets: response.data}))
  //       .catch(err => console.error(err))
  // };
  //
  // addBet = _ => {
  //   const { bet } = this.state;
  //
  //   fetch(`http://ec2-54-157-54-3.compute-1.amazonaws.com/bets/add?name=${bet.person_name}&bet=${bet.time_bet}`)
  //       .then(response => response.json())
  //       .then(this.getProducts)
  //       .catch(err => console.error(err) + "penis")
  // };

  // renderBets = ({ bet_id, name, bet}) =>
  //     <div key={bet_id}>
  //       <p>{name}</p>
  //       <p>{bet}</p>
  //     </div>;

    render() {
    // const { bets, bet } = this.state;

        return (
            <div>
                <Header />
                <Form />
                <Bets />
            </div>
        )
    }
}

export default App;
