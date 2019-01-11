import React, { Component } from 'react';
import GameService from '../engine/game';
import CommandLine from './command_line';
import Overview from './overview';
import Interaction from './interaction';

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.game = new GameService();
    this.overview = null;
    this.interaction = null;

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(input) {
    this.input = input;
    // process command line information
  }

  render() {
    return [
      <CommandLine key="CL" input={this.handleInput} />,
      <Overview key="OV" />, // ref={(overview) => { this.overview = overview; }} />,
      <Interaction key="IA" />, // ref={(interaction) => { this.interaction = interaction; }} />,
    ];
  }
}
