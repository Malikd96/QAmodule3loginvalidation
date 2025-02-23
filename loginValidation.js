// Login Validation Function
function validateLogin(username, password) {
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

// Test Cases using simple console.log statements

// 1. Valid credentials should return true
console.log("Test 1 - Valid credentials:", validateLogin("admin", "1234") === true ? "Pass" : "Fail");

// 2. Missing username should return false
console.log("Test 2 - Missing username:", validateLogin("", "1234") === false ? "Pass" : "Fail");

// 3. Missing password should return false
console.log("Test 3 - Missing password:", validateLogin("admin", "") === false ? "Pass" : "Fail");

// 4. Both username and password missing should return false
console.log("Test 4 - Both missing:", validateLogin("", "") === false ? "Pass" : "Fail");

// 5. Invalid username with valid password should return false
console.log("Test 5 - Invalid username:", validateLogin("user", "1234") === false ? "Pass" : "Fail");

// 6. Valid username with invalid password should return false
console.log("Test 6 - Invalid password:", validateLogin("admin", "wrong") === false ? "Pass" : "Fail");

// 7. Both username and password incorrect should return false
console.log("Test 7 - Both incorrect:", validateLogin("user", "pass") === false ? "Pass" : "Fail");

// 8. Test with long strings (edge case)
const longString = "a".repeat(1000);
console.log("Test 8 - Long strings:", validateLogin(longString, longString) === false ? "Pass" : "Fail");

// 9. Test with special characters (edge case)
console.log("Test 9 - Special characters:", validateLogin("adm!n", "12#4") === false ? "Pass" : "Fail");
