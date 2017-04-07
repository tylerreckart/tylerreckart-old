import React, { PropTypes } from 'react';

const Button = (props) => {
  const {
    children,
    title,
  } = props;

  return (
    <button
      type="button"
      title={title}
    >
      {children !== undefined ? children : title}
    </button>
  );
};

Button.defaultProps = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.obj,
    PropTypes.string,
  ]),
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.obj,
    PropTypes.string,
  ]),
  title: PropTypes.string.isRequired,
};

export default Button;
