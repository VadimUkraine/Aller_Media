import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import App from './App';
import configureStore from './redux/store';

const store = configureStore();

beforeEach(() => render(
  <Provider store={store}>
     <App />
  </Provider>,
));

test('it renders component', () => {
  expect(screen.getByTestId('app-in-dom')).toBeInTheDocument();
});
