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
      return { loggedIn: false, error: action.error };
    case userConstants.LOGOUT:
      return { loggedIn: false };
    case userConstants.REGISTER_SUCCESS:
        return { isRegistered: true}
    case userConstants.REGISTER_UPDATE:
        return { isUpdated: true, loggedIn: true, user: action.user}
    default:
      return state
  }
}