import React from 'react';
import propTypes from 'prop-types';

const Overview = (props) => {
  const { info } = props;
  return (<div id="overview">{info}</div>);
};

Overview.propTypes = {
  info: propTypes.string.isRequired,
};

export default Overview;
