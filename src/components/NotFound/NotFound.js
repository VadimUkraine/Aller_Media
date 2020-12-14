import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';
import { routes } from '../../global/config/index';

const NotFound = () => (
    <div className="not-found-wrapper">
      Ups, not Found!
      <Link className="main-page-link" to={routes.main}>Back to main page</Link>
    </div>
);

export default NotFound;
