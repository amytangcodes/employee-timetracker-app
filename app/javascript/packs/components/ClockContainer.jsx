import React, { Component } from "react";
import { Button, Statistic } from "semantic-ui-react";

const inlineStyle = {
  clockContainer: {
    marginTop: "30px",
    marginBottom: "30px",
  },
};

class ClockContainer extends Component {
  state = {
    clockIsOn: false,
    startTime: 0,
    totalTime: 0,
  };

  startClock = () => {
    this.setState({
      clockIsOn: true,
      totalTime: this.state.totalTime,
      startTime: Date.now() - this.state.totalTime,
    });
    this.timer = setInterval(() => {
      this.setState({
        totalTime: Date.now() - this.state.startTime,
      });
    }, 10);
  };

  stopClock = () => {
    this.setState({ clockIsOn: false });
    clearInterval(this.timer);
  };

  resetClock = () => {
    this.setState({
      startClock: 0,
      totalTime: 0,
    });
  };

  render() {
    const { clockIsOn, totalTime } = this.state;
    let seconds = ("0" + (Math.floor(totalTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(totalTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(totalTime / 3600000)).slice(-2);
    let clock = `${hours} : ${minutes} : ${seconds}`;

    return (
      <div>
        {clockIsOn === false && totalTime === 0 && (
          <Button size="massive" color="green" onClick={this.startClock}>
            Clock In
          </Button>
        )}
        {clockIsOn === true && (
          <Button size="massive" color="red" onClick={this.stopClock}>
            Clock Out
          </Button>
        )}
        {clockIsOn === false && totalTime > 0 && (
          <Button size="massive" color="green" onClick={this.startClock}>
            Resume
          </Button>
        )}
        {clockIsOn === false && totalTime > 0 && (
          <Button size="massive" color="orange" onClick={this.resetClock}>
            Reset
          </Button>
        )}

        <div style={inlineStyle.clockContainer}>
          <Statistic className="clock">
            <Statistic.Label>Time</Statistic.Label>
            <Statistic.Value>{clock}</Statistic.Value>
          </Statistic>
        </div>
      </div>
    );
  }
}

export default ClockContainer;
