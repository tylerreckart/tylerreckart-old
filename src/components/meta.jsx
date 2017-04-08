import React, { PropTypes } from 'react';

const Meta = (props) => {
  const {
    datePublished,
  } = props;

  return (
    <span>{datePublished}</span>
  );
};

export default Meta;
