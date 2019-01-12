import React from 'react';
import PropTypes from 'prop-types';

export default class CommandLine extends React.Component {
  static propTypes = {
    input: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.handleBlur = this.handleBlur.bind(this);
    this.hitEnter = this.hitEnter.bind(this);
  }

  componentDidMount() {
    this.input.focus();
  }

  handleBlur() {
    this.input.focus();
  }

  hitEnter(event) {
    const { input } = this.props;

    if (event.keyCode === 13) {
      input(this.input.value);
      this.input.value = '';
    }
  }

  render() {
    return (
      <input
        id="command_line"
        ref={(input) => { this.input = input; }}
        name="command_line"
        onBlur={this.handleBlur}
        onKeyUp={this.hitEnter}
      />
    );
  }
}
