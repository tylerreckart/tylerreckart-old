import React, { PropTypes } from 'react';

const Meta = (props) => {
  const {
    datePublished,
  } = props;

  return (
    <span>{datePublished}</span>
  );
};

Meta.propTypes = {
  datePublished: PropTypes.string.isRequired,
};

export default Meta;
