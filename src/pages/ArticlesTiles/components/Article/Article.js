import React, {
  useState, useRef, useEffect, useCallback,
} from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './Article.css';
import Button from '../../../../components/Button';
import { getArticlesWidthClass } from '../../../../global/utils/getArticlesWidthClass';
import { getImageDimensions } from '../../../../global/utils/getImageDimensions';

const Article = ({
  item, editTitleId, setEditTitleId, changeTitle, setRestoreArticle, restoreArticleId,
}) => {

  const [inputValue, setInputValue] = useState('');
  const [isShowAttention, setShowAttention] = useState(false);
  const refInput = useRef(null);

  useEffect(() => {
    if (editTitleId === item.id && refInput.current) {
      refInput.current.focus();
      setInputValue(item.title);
    }
  }, [editTitleId, item.id, item.title]);

  useEffect(() => {
    let timeout = null;
    if (isShowAttention) {
      timeout = setTimeout(() => {
        setShowAttention(false);
      }, 700);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [isShowAttention]);

  const handleEditTitle = useCallback(() => {
    setEditTitleId(item.id);
  },
  [setEditTitleId, item.id]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleBlur = () => {
    setEditTitleId('');
  };

  const handleKeyPress = (e) => {
    if (e.key !== 'Enter') return;
    if (inputValue !== item.title) {
      changeTitle(item.id, inputValue);
    }
    handleBlur();
  };

  const hadnleCloseRestorePrompt = useCallback(() => {
    setRestoreArticle('');
  },
  [setRestoreArticle]);

  const handleOpenRestoreArticle = useCallback(() => {
    if (restoreArticleId && restoreArticleId !== item.id) {
      setShowAttention(true);
    } else {
      setRestoreArticle(item.id);
    }
  },
  [setShowAttention, setRestoreArticle, restoreArticleId, item.id]);

  return (
    <div className={cn('articles__row-cell', getArticlesWidthClass(item.width))}>
      { editTitleId !== item.id && (<p className="articles__row-cell-title">{item.title}</p>)}
      { editTitleId === item.id && (<input
        type="text"
        className="articles__row-cell-input-title"
        value={inputValue}
        ref={refInput}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyPress={handleKeyPress}
      />)}
      <img src={getImageDimensions(item.imageUrl)}alt="Article image"/>
      <div className="articles__row-cell-btn-wrap">
        <Button
          callback={handleEditTitle}
          customClass="articles__row-cell-btn-edit"
          type="button"
          customText="Edit"
          />
        <Button
          callback={handleOpenRestoreArticle}
          customClass="articles__row-cell-btn-delete"
          type="button"
          customText="Delete"
        />
      </div>
      {restoreArticleId === item.id && (<div className="article-prompt">
        <Button
          callback={hadnleCloseRestorePrompt}
          customClass="btn-reject-delete"
          type="button"
          customText="Restore it?"
        />
      </div>)}
      {isShowAttention && (
        <div className="article-prompt">
          Please wait while we delete previous article
        </div>
      )}
    </div>
  );
};

Article.propTypes = {
  item: PropTypes.object.isRequired,
  editTitleId: PropTypes.string.isRequired,
  setEditTitleId: PropTypes.func.isRequired,
  changeTitle: PropTypes.func.isRequired,
  setRestoreArticle: PropTypes.func.isRequired,
  restoreArticleId: PropTypes.string.isRequired,
};

export default Article;
