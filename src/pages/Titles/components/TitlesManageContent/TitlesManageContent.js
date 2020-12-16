import React from 'react';
import PropTypes from 'prop-types';
import './TitlesManageContent.css';
import Title from '../Title';
import ErrorMessage from '../../../../components/ErrorMessage';

const TitlesManageContent = ({ titles, error }) => (
    <div className="titles-wrap">
      {titles.map((el) => (<Title key={el.id} item={el}/>))}
      {error && <ErrorMessage/>}
    </div>
);

TitlesManageContent.propTypes = {
  titles: PropTypes.array.isRequired,
  error: PropTypes.bool.isRequired,
};

export default TitlesManageContent;
