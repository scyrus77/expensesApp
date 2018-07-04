import authReducer from "../../reducers/auth";

test('should set uid for Login', () => {
  const uid = 'abdxyz';
  const state = authReducer(undefined, { type: 'LOGIN', uid });
  expect(state).toEqual({ uid });
});

test('should clear uid for Logout', () => {
  const state = authReducer({ uid: 'something' }, { type: 'LOGOUT' });
  expect(state).toEqual({});
});
