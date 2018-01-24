import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Signup from '../../../client/app/components/authentication/signup';

test('it renders the signup page correctly', () => {
  const handleUsernameChange = jest.fn();
  const handleEmailChange = jest.fn();
  const handlePasswordChange = jest.fn();
  const handleConfirmPasswordChange = jest.fn();
  const handleSignUpAction = jest.fn();

  const rendered = renderer.create(
    <MemoryRouter initialEntries={['/signup']}>
      <Signup
        handleUsernameChange={handleUsernameChange}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        handleConfirmPasswordChange={handleConfirmPasswordChange}
        handleSignUpAction={handleSignUpAction}
      />
  </MemoryRouter>);
  expect(rendered.toJSON()).toMatchSnapshot();
});
