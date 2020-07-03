export function authHeader(user) {
    if (user && user.token) {
        return { 'Authorization': `Bearer ${user.token}` }
    } else {
        return {}
    }
}