export const saveArticlesToLocalStorage = (articles) => {
  localStorage.setItem('artToken', JSON.stringify(articles));
};

export const getArticlesFromLocalStorage = () => (JSON.parse(localStorage.getItem('artToken')));
