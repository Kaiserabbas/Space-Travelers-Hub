import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import Rockets from './Rockets';

describe('Rockets Component', () => {
  test('Renders rockets and Reserve Rocket button', async () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    const rocketNameElement = screen.getByText('Falcon 1');
    const reserveButtonElement = screen.getByText('Reserve Rocket');

    expect(rocketNameElement).toBeInTheDocument();
    expect(reserveButtonElement).toBeInTheDocument();
  });
});
