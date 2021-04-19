import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import css from './Card.module.css';

export const Card = ({ className, children }) => {
  const classNames = classnames(css.root, className);

  return <div className={classNames}>{children}</div>;
};

export default Card;

Card.defaultProps = {
  onClick: () => {},
};

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  to: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.oneOf(['gray']),
};