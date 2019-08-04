import React, { Component } from "react";
import "./Form.css";

class Form extends Component {

    state = {
        bet: {
            person_name: "Peter Pan",
            time_bet: "10:17 Uhr"
        }
    };

    addBet = _ => {
        const { bet } = this.state;

        fetch(`http://ec2-54-157-54-3.compute-1.amazonaws.com/bets/add?name=${bet.person_name}&bet=${bet.time_bet}`) //http://www.woistluis.moodlions.de/bets
            .then(response => response.json())
            .then(this.getProducts)
            .catch(err => console.error(err))
    };

    render() {
        const { bet } = this.state;
        return (
            <div className="form">
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    className="name-input"
                    value={bet.person_name}
                    onChange={e => this.setState({bet: { ...bet, person_name: e.target.value}})}
                />
                <label htmlFor="bet">Geschätzte Ankunftszeit</label>
                <input
                    id="bet"
                    className="bet-input"
                    value={bet.time_bet}
                    onChange={e => this.setState({bet: { ...bet, time_bet: e.target.value}})}
                />
                <button onClick={this.addBet}>Wette abgeben</button>
            </div>
        )
    }
}

export default Form