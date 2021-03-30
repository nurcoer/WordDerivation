import React, { Component } from 'react';
import '../../styles/WordDerivationStyle.css';

import NameListEl from '../toolbox/NameListEl';
import NameTextEl from '../toolbox/NameTextEl';
import TimerEl from '../toolbox/TimerEL';
import GameModal from '../toolbox/modals/GameModal';

import { firstRound, computerTurn, userTurn } from '../../gameStatus/gameStart';

import UserTurn from '../toolbox/TurnComponent/UserTurn';
import ComputerTurn from '../toolbox/TurnComponent/ComputerTurn';
import { textToSpeaker } from '../../helpers/speak';

export default class wordDerivation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActiveGame: false, // oyun başladımı başlamadımı
      turn: null, //'' oyun başlamadı ,1 PC sırası ,0 kullanıcı sırası
      name: '', //şuan aktif olan isim
      gameStatus: 'start', // ready oyuna hazır,start oyun başladı,win kullanıcı kazandı, gameOver kullanıcı kaybetti
      usedNames: [],
    };
    this.handleGameStart = this.handleGameStart.bind(this);
    this.handleGameOver = this.handleGameOver.bind(this);
  }

  handleGameStart() {
    let name = firstRound();
    this.stateChange(name, 0, 'start', true);
    this.state.usedNames.push(name);
    this.switchTurn(name);
  }

  handleGameOver() {
    let gameStatus = this.state.turn === 1 ? 'win' : 'gameOver';
    this.stateChange('', '', gameStatus, false);
  }

  //sırayı değiştir ve yapılacak işlemleri tetikle
  switchTurn(name) {
    if (this.state.turn === 1) {
      (async () => {
        let response = await computerTurn(name, this.state.usedNames);
        textToSpeaker(
          response === false ? 'kabul ediyorum kazandın' : response
        ).then(() => {
          this.handleResponse(response, 0);
        });
      })();
    } else {
      (async () => {
        let response = await userTurn(name, this.state.usedNames);
        this.handleResponse(response, 1);
      })();
    }
  }

  handleResponse(response, turn) {
    if (response === false) {
      this.handleGameOver();
    } else {
      this.setState({
        usedNames: this.state.usedNames.concat(response.toLowerCase()),
      });
      this.stateChange(response.toLowerCase(), turn, 'start', true).then(() => {
        this.switchTurn(response.toLowerCase());
      });
    }
  }

  async stateChange(name, turn, gameStatus, isActive) {
    this.setState({
      name: name,
      turn: turn,
      gameStatus: gameStatus,
      isActiveGame: isActive,
    });
  }

  render() {
    return (
      <div className="container">
        {this.state.gameStatus === 'gameOver' ? (
          <GameModal
            title="Game Over"
            body="Lütfen Başka bir zaman tekrar deneyiniz"
            usedNames={this.state.usedNames}
          />
        ) : this.state.gameStatus === 'win' ? (
          <GameModal
            title="Winnnnn"
            body="Kaznadın Bro"
            usedNames={this.state.usedNames}
          />
        ) : (
          ''
        )}
        <div className="row">
          {this.state.turn === 1 ? (
            <ComputerTurn />
          ) : this.state.turn === 0 ? (
            <UserTurn />
          ) : (
            ''
          )}
          <TimerEl
            turn={this.state.turn}
            isActiveGame={this.state.isActiveGame}
            handleGameStart={this.handleGameStart}
            handleGameOver={this.handleGameOver}
          />
        </div>
        <br />
        <NameTextEl
          name={this.state.name}
          handleGameOver={this.handleGameOver}
        />
        <br />
        <NameListEl usedNames={this.state.usedNames} />
      </div>
    );
  }
}
