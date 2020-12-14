const widthClasses = {
  widthGrid3: 'article-grid_3',
  widthGrid4: 'article-grid_4',
  widthGrid5: 'article-grid_5',
  widthGrid6: 'article-grid_6',
  widthGrid7: 'article-grid_7',
  widthGrid8: 'article-grid_8',
  widthGrid9: 'article-grid_9',
  widthGrid12: 'article-grid_12',
};

export function getArticlesWidthClass(width) {

  switch (width) {
    case 3:
      return widthClasses.widthGrid3;
    case 4:
      return widthClasses.widthGrid4;
    case 5:
      return widthClasses.widthGrid5;
    case 6:
      return widthClasses.widthGrid6;
    case 7:
      return widthClasses.widthGrid7;
    case 8:
      return widthClasses.widthGrid8;
    case 9:
      return widthClasses.widthGrid9;
    default:
      return widthClasses.widthGrid12;
  }

}

export default getArticlesWidthClass;
