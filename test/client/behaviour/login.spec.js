// import React from 'react';
// import { configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// configure({ adapter: new Adapter() });
// import { mount } from 'enzyme';
// import Login from '../../../client/app/components/authentication/login';
// import { MemoryRouter } from 'react-router-dom';
// // import handleSignIn from '../../../client/app/containers/authentication/login'
//
// const handleSignIn = jest.fn();
// test('Login method is called on button click', () => {
//   const wrapper = mount(
//     <MemoryRouter initialEntries={['/login']}>
//       <Login handleSignIn={handleSignIn} />
//     </MemoryRouter>
//   );
//   const p = wrapper.find('.sign-in-b');
//   console.log(Object.keys(p));
//
//   expect(p).toBe(2);
// });