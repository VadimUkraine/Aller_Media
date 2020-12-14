import React, { useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector, useDispatch } from 'react-redux';
import { getArticlesRequest } from '../../redux/articlesTiles';
import TitlesManageContent from './components/TitlesManageContent';

const Titles = () => {

  const articles = useSelector((state) => state.articles);
  const { items, error } = articles;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!articles.length) {
      dispatch(getArticlesRequest());
    }
  }, [dispatch, articles]);

  const titles = useMemo(() => (
    items.map((row) => (row.map((el) => (
      { title: el.title, id: el.id }))))).flat(), [items]);

  return (
    <div data-testid="titles-in-dom">
      <Helmet>
        <link rel="canonical" href="https://storage.googleapis.com/aller-structure-task/test_data.json" />
        <title>Titles</title>
      </Helmet>
      <TitlesManageContent titles={titles} error={error}/>
    </div>);
};

export default Titles;
