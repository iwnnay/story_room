import React from 'react';
import propTypes from 'prop-types';

const Interaction = (props) => {
  const { info } = props;
  return (<div id="interaction">{info}</div>);
};

Interaction.propTypes = {
  info: propTypes.string.isRequired,
};

export default Interaction;
