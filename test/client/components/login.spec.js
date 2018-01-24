import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Login from '../../../client/app/components/authentication/login';

describe('it renders the login page correctly', () => {
  it('renders well', () => {
    const rendered = renderer.create(
      <MemoryRouter initialEntries={['/login']}>
        <Login />
      </MemoryRouter>
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
