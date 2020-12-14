import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const Button = ({
  callback, customClass, type, customText,
}) => (
    <button
      type={type}
      className={cn(customClass)}
      onClick={callback}
    >
      {customText}
    </button>
);

Button.propTypes = {
  type: PropTypes.string.isRequired,
  customClass: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
  customText: PropTypes.string.isRequired,
};

export default Button;
