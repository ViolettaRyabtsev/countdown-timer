import React from "react";
import "./App.css";

class TimeLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      months: this.props.month,
      days: this.props.day,
      hours: this.props.hours,
      minutes: this.props.minutes,
      seconds: 60 - new Date().getSeconds(),
    };
  }

  componentDidMount() {
    if (
      this.state.months === 4 ||
      this.state.months === 6 ||
      this.state.months === 9
    ) {
      this.setState({
        months: this.state.months - (new Date().getMonth() + 1) - 1,
        days: 30 - new Date().getDate() + this.state.days - 1,
        hours: 24 - new Date().getHours() - 1,
        minutes: 60 - new Date().getMinutes() - 1,
        seconds: 60 - new Date().getSeconds(),
      });
    } else {
      this.setState({
        months: this.props.month - (new Date().getMonth() + 1) - 1,
        days: 31 - new Date().getDate() + this.props.day - 1,
        hours: 24 - new Date().getHours() - 1,
        minutes: 60 - new Date().getMinutes() - 1,
        seconds: 60 - new Date().getSeconds(),
      });
    }
  }

  componentDidUpdate(prevProps) {
    console.log("The updated favorite is ", this.state.months);
    if (
      prevProps.month !== this.props.month ||
      prevProps.day !== this.props.day
    ) {
      this.setState({
        months: this.props.month,
        days: this.props.day,
        hours: this.props.hours,
        minutes: this.props.minutes,
      });
    }
  }

  handleClick() {
    setInterval(() => {
      if (this.state.seconds > 0) {
        this.setState({
          seconds: this.state.seconds - 1,
        });
      }

      if (this.state.seconds === 0) {
        this.setState({
          minutes: this.state.minutes - 1,
          seconds: 59,
        });
      }

      if (this.state.minutes === 0) {
        this.setState({
          minutes: 59,
          hours: this.state.hours - 1,
        });
      }
    }, 1000); //interval
  }

  render() {
    return (
      <div className="count-down">
        <div>
          <h3>COUNTDOWN TO MY BIRTHDAY </h3>
          <ul>
            <li>
              <span>{this.state.months} months </span>
            </li>
            <li>
              {" "}
              <span>{this.state.days} days</span>
            </li>
            <li>
              {" "}
              <span>{this.state.hours} hours</span>
            </li>
            <li>
              {" "}
              <span>{this.state.minutes} minutes</span>
            </li>
            <li>
              <span>{this.state.seconds} seconds</span>
            </li>
          </ul>
        </div>
        <button onClick={() => this.handleClick()}>start</button>
      </div>
    );
  }
}

export default TimeLeft;
