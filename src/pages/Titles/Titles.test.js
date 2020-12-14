import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import Titles from './Titles';
import configureStore from '../../redux/store';

const store = configureStore();

beforeEach(() => {
  const history = createMemoryHistory();
  history.push('/titles');
  render(
    <Provider store={store}>
      <Router history={history}>
        <Titles />
      </Router>
    </Provider>,
  );
});

test('it renders component', () => {
  expect(screen.getByTestId('titles-in-dom')).toBeInTheDocument();
});
