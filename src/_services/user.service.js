import { authHeader } from '../_helpers'

const apiUrl = 'https://chib-api.herokuapp.com/api/'

export const userService = {
    login,
    logout,
    register,
    update
}

function login(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    }

    return fetch(`${apiUrl}authentication/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            return user
        })
}

function logout() {
    localStorage.removeItem('user')
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({...user, type:'employee'})
    }

    return fetch(`${apiUrl}users`, requestOptions).then(handleResponse)
}

function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    }

    return fetch(`${apiUrl}/users/${user.id}`, requestOptions).then(handleResponse)
}

function handleResponse(response) {
    return response.json()
}