import React, { Component } from 'react';
import GameService from '../engine/game';
import LocalIO from '../engine/data_providers/local';
import CommandLine from './command_line';
import Interaction from './interaction';

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.game = new GameService(new LocalIO(), 'demo');
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
      <Interaction key="IA" info={this.game.situation.describe()} />,
    ];
  }
}
