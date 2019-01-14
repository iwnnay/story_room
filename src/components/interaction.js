import React from 'react';
import propTypes from 'prop-types';

const Interaction = (props) => {
  const { info } = props;
  const { focus } = info;
  const { overview } = focus;
  return (<div id="interaction">{overview}</div>);
};

Interaction.propTypes = {
  info: propTypes.shape({
    overview: propTypes.string.isRequired,
  }).isRequired,
};

export default Interaction;
