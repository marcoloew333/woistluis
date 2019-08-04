import React, { Component } from "react";
import "./React.css";

class Bets extends Component {

    renderBets = ({ bet_id, name, bet}) =>
        <div key={bet_id}>
            <p>{name}</p>
            <p>{bet}</p>
        </div>;

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default Bets
