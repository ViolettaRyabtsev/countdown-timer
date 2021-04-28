import "./App.css";
import TimeLeft from "./timeLeft";
import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      day: 2,
      month: 11,
      minutes: 30,
      hours: 8,
      dates: [],
      data: "",
    };
  }

  componentDidUpdate() {
    console.log("The updated favorite month  is ", this.state.month);
  }

  onSubmit(e) {
    e.preventDefault();
    const arr = [];
    arr.push(this.state.data);
    this.setState({
      day: new Date(this.state.data).getDate() + 1,
      month: new Date(this.state.data).getMonth() + 1,
      hours: 8,
      minutes: 30,
      dates: arr,
    });
    console.log("updated state", this.state);
  }

  render() {
    return (
      <div className="app">
        <TimeLeft {...this.state} />
        <h3>when is your birhday ?</h3>
        <input
          type="date"
          value={this.state.day}
          onChange={(event) => this.setState({ data: event.target.value })}
        ></input>
        <button onClick={(e) => this.onSubmit(e)}>submit</button>
        <div>
          {this.state.dates.map((item) => (
            <div>{item}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
