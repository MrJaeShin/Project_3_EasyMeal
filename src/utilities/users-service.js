// Import all named exports attached to a usersAPI object
// This syntax can be helpful documenting where the methods come from
import * as usersAPI from './users-api';

export async function signUp(userData) {
	try {
		// Delegate the network request code to the users-api.js API module
		// which will ultimately return a JSON Web Token (JWT)
		const token = await usersAPI.signUp(userData);
		// Baby step by returning whaterver is sent back to the server
		return token;
	} catch {
		throw new Error('Invalid Sign Up');
	}
}

export function getToken() {
    const token = localStorage.getItem('token')
    if (!token) return null;
    const payload = JSON.parse(atob(token.split('.')[1]))
    if (payload.exp<Date.now() /1000) {
        localStorage.removeItem('token');
        return null;
    }
    return getUser();
}

export function getUser() {
    const token = getToken();
    return token ? JSON.parse(atob(token.split('.')[1])).user: null;
}

export function logOut() {
    localStorage.removeItem('token')
}

export async function login(credentials) {
	try {
		// Delegate the network request code to the users-api.js API module
		// which will ultimately return a JSON Web Token (JWT)
		const token = await usersAPI.login(credentials);
		// Persist the "token"
		localStorage.setItem('token', token);
		return getUser();
	} catch {
		throw new Error('Invalid Login');
	}
}

export function checkToken() {
<<<<<<< HEAD
	alert('clicked');
}
=======
	return usersAPI.checkToken().then(dateStr => new Date(dateStr));
	// return a Date object for more flexibility
}
>>>>>>> ba4b33282e5f5fdfabb8b59644a5c99bf28ed650
