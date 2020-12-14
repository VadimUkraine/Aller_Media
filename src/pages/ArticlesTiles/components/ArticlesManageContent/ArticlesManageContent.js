import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import {
  getArticlesRequest,
  changeArticleTitleRequest,
  deleteArticleRequest,
} from '../../../../redux/articlesTiles';
import './ArticlesManageContent.css';
import Article from '../Article';
import { routes } from '../../../../global/config/index';
import ErrorMessage from '../../../../components/ErrorMessage';

const ArticlesManageContent = () => {

  const [editTitleId, setEditTitleId] = useState('');
  const [restoreArticleId, setRestoreArticleId] = useState('');

  const articles = useSelector((state) => state.articles);
  const { error, items } = articles;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticlesRequest());
  }, [dispatch]);

  useEffect(() => {
    let timeout = null;
    if (restoreArticleId) {
      timeout = setTimeout(() => {
        dispatch(deleteArticleRequest(restoreArticleId));
        setRestoreArticleId('');
      }, 3000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [dispatch, restoreArticleId]);

  const handleSetEditTitleId = useCallback((id) => {
    setEditTitleId(id);
  },
  [setEditTitleId]);

  const handleChangeTitle = useCallback((id, title) => {
    dispatch(changeArticleTitleRequest({ id, title }));
  },
  [dispatch]);

  const handleSetRestoreArticleId = useCallback((id) => {
    setRestoreArticleId(id);
  },
  [setRestoreArticleId]);

  return (
    <div className="articles-wrapper">
      <Link className="link-next-page" to={routes.titles}>Next Table</Link>
      <div className="articles">
        {items && items.map((row) => (
          <div className="articles__row" key={uuidv4()}>
            {row.map((el) => (
              <Article
                key={el.id}
                item={el}
                editTitleId={editTitleId}
                setEditTitleId={handleSetEditTitleId}
                changeTitle={handleChangeTitle}
                setRestoreArticle={handleSetRestoreArticleId}
                restoreArticleId={restoreArticleId}
              />
            ))}
          </div>
        ))
        }
      </div>
      {error && <ErrorMessage />}
    </div>
  );
};

export default ArticlesManageContent;
