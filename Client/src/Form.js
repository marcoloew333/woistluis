import React, { Component } from "react";
import "./Form.css";

class Form extends Component {

    state = {
        bet: {
            person_name: "Peter Pan",
            time_bet: "10:17 Uhr"
        },
        isHidden: true
    };

    toggleHidden () {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    addBet = _ => {

        const { bet } = this.state;

        fetch(`http://ec2-54-157-54-3.compute-1.amazonaws.com/bets/add?name=${bet.person_name}&bet=${bet.time_bet}`)//http://ec2-54-157-54-3.compute-1.amazonaws.com //localhost:4000 //?name=${bet.person_name}&bet=${bet.time_bet}
            .then(response => response.json())
            .then(this.getBets)
            .catch(err => console.error(err))
    };

    render() {
        const { bet } = this.state;
        return (
            <div className="form-container">
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
                <button onClick={()=>{ this.addBet(); this.toggleHidden() }}>Wette abgeben</button>
                {!this.state.isHidden && <Child />}
            </div>
        )
    }
}

const Child = () => (
    <div className='modal'>
        <p>Wette erfolgreich eingetragen.</p>
        <p>Seite bitte neu laden.</p>
    </div>
);

export default Form