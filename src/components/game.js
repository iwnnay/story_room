import React, { Component } from 'react';
import GameService from '../engine/game';
import CommandLine from './command_line';
import Overview from './overview';
import Interaction from './interaction';

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.game = new GameService();
    this.commands = [];

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(input) {
    this.commands.push(input);
    this.game.processCommand(input);
  }

  render() {
    return [
      <CommandLine key="CL" input={this.handleInput} />,
      <Overview key="OV" info={this.game.getRoomDescription()} />,
      <Interaction key="IA" info={this.game.getSituationDescription()} />,
    ];
  }
}
