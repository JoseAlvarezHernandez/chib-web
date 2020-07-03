import { userConstants } from '../_constants';

export function authentication(state = {loggedIn: false}, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: false,
        user: action.user
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case userConstants.LOGIN_FAILURE:
      return { loggedIn: false };
    case userConstants.LOGOUT:
      return { loggedIn: false };
    case userConstants.REGISTER_SUCCESS:
        return { isRegistered: true}
    default:
      return state
  }
}