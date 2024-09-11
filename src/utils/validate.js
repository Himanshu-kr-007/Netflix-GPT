export const checkValidData = (name, email, password) => {
    // Validates the email format using a regular expression.
    // The regex checks for a valid email structure: one or more alphanumeric characters, followed by an '@',
    // then a domain name, and a valid domain extension (e.g., .com, .net, etc.).
    // If the email matches the regex, 'isEmailValid' will be true; otherwise, it will be false.
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

    // Validates the password format using a regular expression.
    // The password must:
    // - Have at least one digit,
    // - Have at least one lowercase letter,
    // - Have at least one uppercase letter,
    // - Be at least 8 characters long.
    // If the password matches the regex, 'isPasswordValid' will be true; otherwise, it will be false.
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    // Validates the name format using a regular expression.
    // The name must:
    // - Contain only alphabetic characters (including accented characters like À-Ÿ),
    // - Allow spaces, commas, hyphens, periods, and apostrophes.
    // If the name matches the regex, 'isNameValid' will be true; otherwise, it will be false.
    const isNameValid = /^[a-zA-ZÀ-Ÿ\s,-.']+$/.test(name);

    // If the email is not valid, return an error message indicating that the email is invalid.
    if (!isEmailValid) return "Email ID is not Valid";

    // If the password is not valid, return an error message indicating that the password is invalid.
    if (!isPasswordValid) return "Password is not Valid";

    // If the name is not valid, return an error message indicating that the name is invalid.
    if (!isNameValid) return "Name is not Valid";

    // If both email and password are valid, return 'null', indicating no errors.
    return null;
}
