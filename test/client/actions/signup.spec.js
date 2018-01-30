import axios from 'axios';
import moxios from 'moxios';

describe('sign up actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('returns response for sign in', (done) => {
    const signUpSuccess = jest.fn();
    moxios.withMock(() => {
      axios.post('api/user/signup', {
        username: 'test',
        email: 'test@test.test',
        password: 'password',
        confirmPassword: 'password'
      }).then(signUpSuccess);
    });

    moxios.wait(() => {
      let request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
        response: { message: 'Signup success' }
      }).then(() => {
        expect(signUpSuccess).toBeCalled();
        // expect(signUpSuccess.mock.calls.length).toBe(1); you can use this too!
        done();
      });
    });
  });
});
