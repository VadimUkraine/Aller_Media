import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './global/styles/index.css';
import { routes } from './global/config/index';

const ArticlesTiles = lazy(() => import('./pages/ArticlesTiles'));
const Titles = lazy(() => import('./pages/Titles'));
const NotFound = lazy(() => import('./components/NotFound'));

const App = () => (
    <Router>
      <Suspense fallback={<div data-testid="app-in-dom">Загрузка...</div>}>
        <Switch>
          <Route exact path={routes.main} component={ArticlesTiles} />
          <Route exact path={routes.titles} component={Titles} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
);

export default App;
