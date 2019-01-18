import React, { Component } from 'react';
import GameEngine from 'text-story-game-engine';
import CommandLine from './command_line';
import Interaction from './interaction';
import locations from '../data/locations';

const LocalIO = GameEngine.dataProviders.Local;

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.game = new GameEngine(new LocalIO({ locations }), 'demo');
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
