// src/login.js
export function validateLogin(username, password) {
    // If either username or password is missing, return false
    if (!username || !password) {
        return false;
    }
    // Only valid credentials are "admin" and "1234"
    if (username === "admin" && password === "1234") {
        return true;
    }
    return false;
}
