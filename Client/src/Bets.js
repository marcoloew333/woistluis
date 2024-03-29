import React, { Component } from "react";
import "./Bets.css";

class Bets extends Component {

    state = {
        bets: []
    };

    componentDidMount() {
        this.getBets();
    }

    getBets = _ => {
        fetch("http://ec2-54-157-54-3.compute-1.amazonaws.com/bets") //http://ec2-54-157-54-3.compute-1.amazonaws.com //localhost:4000
            .then(response => response.json())
            .then(response => this.setState({bets: response.data}))
            .catch(err => console.error(err))
    };

    renderBets = ({ bet_id, name, bet }) =>
        <div className="bet-entry" key={bet_id}>
            <p className="name">{name}</p>
            <p>{bet}</p>
        </div>;

    render() {
        const { bets } = this.state;
        return (
            <div className="bet-container">
                {bets.map(this.renderBets)}
            </div>
        )
    }
}

export default Bets
