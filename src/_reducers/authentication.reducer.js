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
      return { loggingIn: false };
    case userConstants.LOGOUT:
      return { loggingIn: false };
    default:
      return state
  }
}