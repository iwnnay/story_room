import React from 'react';

export default class CommandLine extends React.Component {
  constructor(props) {
    super(props);
    this.handleBlur = this.handleBlur.bind(this);
  }

  componentDidMount() {
    this.input.focus();
  }

  handleBlur() {
    this.input.focus();
  }

  render() {
    return (
      <input
        id="command_line"
        ref={(input) => { this.input = input; }}
        name="command_line"
        onBlur={this.handleBlur}
      />
    );
  }
}
