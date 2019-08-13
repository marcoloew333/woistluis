import React, { Component } from "react";
import './App.css';

class App extends Component {

    state = {
        bets: [],
        bet: {
          person_name: "Peter Pan",
          time_bet: "10:17 Uhr"
        },
        real_time: "",
        isHidden: true
    };

    componentDidMount() {
    this.getBets();
    }

    toggleHidden () {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    getBets = _ => {
    fetch("http://ec2-54-157-54-3.compute-1.amazonaws.com/bets")
        .then(response => response.json())
        .then(response => this.setState({bets: response.data}))
        .catch(err => console.error(err))
    };



    addBet = _ => {
    const { bet } = this.state;

    fetch(`http://ec2-54-157-54-3.compute-1.amazonaws.com/bets/add?name=${bet.person_name}&bet=${bet.time_bet}`)
        .then(response => response.json())
        .then(this.getBets)
        .catch(err => console.error(err))
    };

    renderBets = ({ bet_id, name, bet, timestamp}) =>
            <div className="bet-entries" key={bet_id}>
                <p>{name}</p>
                <p>{bet}</p>
                <p>{timestamp}</p>
            </div>;

    setArrivalTime = () => {

    };

    render() {
    const { bets, bet } = this.state;

        return (
            <div className="app-container">
                <div className="header">
                    <h1>Wo Ist Luis?</h1>
                </div>
                <div className="content">
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
                        <button onClick={()=>{ this.addBet(); this.toggleHidden(); this.getBets() }}>Wette abgeben</button>
                        {!this.state.isHidden && <BetSuccess />}
                        <p>Um deine Wette zu aktualisieren, einfach mit deinem Namen neu wetten.</p>
                        <div className="luis">
                            <p>Tatsächliche Ankunftszeit</p>
                            <label>Ankunftszeit</label>
                            <input
                                id="real-time"
                                className="real-time"
                                value="25:13 Uhr"
                                onChange={e => this.setState({real_time: e.target.value})}
                            />
                            <label>Passwort</label>
                            <input
                                id="pw"
                                className="luis-pw"
                                value="passwort"
                            />
                            <button onClick={() => {}}>Ankunftszeit eintragen</button>
                        </div>
                        <ArrivalTime/>
                    </div>
                    <div className="bet-container">
                        <div className="column-titles">
                            <p>Name</p>
                            <p>Zeit</p>
                            <p>Timestamp</p>
                        </div>
                        {bets.map(this.renderBets)}
                    </div>
                </div>
            </div>
        )
    }
}

const BetSuccess = () => (
    <div className='modal'>
        <p>Wette erfolgreich eingetragen.</p>
    </div>
);

const ArrivalTime = () => (
    <div>
        <p>Ankunftszeit: {this.state.real_time}</p>
    </div>
)

export default App;
