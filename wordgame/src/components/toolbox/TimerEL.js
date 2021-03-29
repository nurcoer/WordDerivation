import React, { Component } from 'react';

import { addMinutesToDate, getNow, getRemainingDate } from '../../helpers/date';
import { FORECAST_TIME } from '../../constans';
import '../../styles/timerEl.css';

export default class TimerEL extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0.10,
      timerText: 'sn',
      gameStatus: 'Start',
      turn: null,
    };
  }

  initializeTimer(deadline) {
    this.timerInterval = setInterval(() => {
      const remainingTime = getRemainingDate(deadline);
      const { total, minutes, seconds } = remainingTime;
      this.setState({
        timer: `${minutes}:${seconds}`,
      });
      if (total <= 0) {
        this.handleGameOver();
        clearInterval(this.timerInterval);
      }
    }, 1000);
  }

  handleGameStart() {
    this.timerStart()
    this.props.handleGameStart();
  }

  handleGameOver() {
    this.resetTimer();
    this.props.handleGameOver();
  }

  componentDidUpdate(){
    this.timerTrigger();
  }

  timerStart(){
    const deadline = addMinutesToDate(getNow(), FORECAST_TIME);
    this.initializeTimer(deadline);
  }

// sıra değiştimi süreyi sıfırla
  timerTrigger(){
    if (this.state.turn !== this.props.turn ) {
      this.resetTimer();
      this.timerStart()
      this.setState({
        turn: this.props.turn,
      });
      if(this.state.turn === ''){
        this.resetTimer();
      }
    }
  }

  resetTimer() {
    clearInterval(this.timerInterval);
    this.setState({
      timer: '0.10',
    });
  }

  render() {
    return (
      <div className="col-sm">
        {this.props.isActiveGame ? (
          <div className="col-md-12 timer spacing ">
            {this.state.timer + ' ' + this.state.timerText}
          </div>
        ) : (
          <div
            className="col-md-12 timer spacing "
            onClick={() => this.handleGameStart()}
          >
            {this.state.gameStatus}
          </div>
        )}
      </div>
    );
  }
}
