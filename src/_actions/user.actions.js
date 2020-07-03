import { userConstants } from './../_constants'
import { userService } from './../_services'
import { alertActions } from '.'
import { history } from './../_helpers'

export const userActions = {
    login,
    logout,
    register,
    completeRegister
}

function login(email, password) {
    return dispatch => {
        dispatch(request({ email }))

        userService.login(email, password)
            .then(
                user => { 
                    if(user.message)
                        dispatch(failure(user.message))
                    else{
                        dispatch(success(user))
                        history.push('/')
                    }
                },
                error => {
                    dispatch(failure(error.toString()))
                    dispatch(alertActions.error(error.toString()))
                }
            )
    }

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout()
    return { type: userConstants.LOGOUT }
}

function register(user) {
    return dispatch => {
        dispatch(request(user))

        userService.register(user)
            .then(
                user => { 
                    dispatch(success())
                    dispatch(alertActions.success('Registration successful'))
                    history.push('/login')
                },
                error => {
                    dispatch(failure(error.toString()))
                    dispatch(alertActions.error(error.toString()))
                }
            )
    }

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function completeRegister(user, data) {
    return dispatch => {
        dispatch(request(data))

        userService.completeRegister(user, data)
            .then(
                response => {
                    dispatch(success({...user, ...data}))
                    dispatch(alertActions.success('Registration updated successfully'))
                    history.push('/')
                },
                error => {
                    dispatch(failure(error.toString()))
                    dispatch(alertActions.error(error.toString()))
                }
            )
    }

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_UPDATE, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}