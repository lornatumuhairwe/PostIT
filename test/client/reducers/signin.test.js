import  { loading } from '../../../client/app/reducers/authentication';

test('changes loading state', () => {
  const finState = loading(false, { type: 'SIGNUP_PENDING' });
  expect(finState.loading).toBe(true);
});
