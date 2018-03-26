import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { mount, shallow, render } from 'enzyme';
import Login from '../../../client/app/components/authentication/login';
import { MemoryRouter } from 'react-router-dom';
// import handleSignIn from '../../../client/app/containers/authentication/login'

const handleSignIn = jest.fn();
test('Login method is called on button click', () => {
  const wrapper = render(
    <MemoryRouter initialEntries={['/login']}>
      <Login handleSignIn={handleSignIn} />
    </MemoryRouter>
  );
  const p = wrapper.find('.sign-in-b');
  console.log('&&&&&&&', p);

  // expect(p).toBe(2);
});
