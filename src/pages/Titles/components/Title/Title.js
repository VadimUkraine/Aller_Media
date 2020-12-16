import React from 'react';
import PropTypes from 'prop-types';
import './Title.css';

const Title = ({ item }) => (
  <a target="_blank" rel="noreferrer" href={item.url} className="title">{item.title}</a>
);

Title.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Title;
