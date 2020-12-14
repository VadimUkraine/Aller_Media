import React from 'react';
import { Helmet } from 'react-helmet';
import './ArtilesTiles.css';
import ArticlesManageContent from './components/ArticlesManageContent';

export const ArticlesTiles = () => (
    <div>
      <Helmet>
        <link rel="canonical" href="https://storage.googleapis.com/aller-structure-task/test_data.json" />
        <title>Article Tiles</title>
      </Helmet>
      <ArticlesManageContent />
    </div>
);

export default ArticlesTiles;
