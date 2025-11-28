function isValidPassword(password) {
    // 1. Length check
    if (password.length < 8) {
        return false;
    }

    let hasUpper = false;
    let hasLower = false;
    let hasDigit = false;

    // 2. Loop through each character
    for (let i = 0; i < password.length; i++) {
        const code = password.charCodeAt(i);

        // 'A'–'Z' → 65–90
        if (code >= 65 && code <= 90) {
            hasUpper = true;
        }
        // 'a'–'z' → 97–122
        else if (code >= 97 && code <= 122) {
            hasLower = true;
        }
        // '0'–'9' → 48–57
        else if (code >= 48 && code <= 57) {
            hasDigit = true;
        }

        // Optional: early exit if all conditions are met
        if (hasUpper && hasLower && hasDigit) {
            break;
        }
    }

    return hasUpper && hasLower && hasDigit;
}

// Examples
console.log(isValidPassword("Mujeeb0{"));   // true