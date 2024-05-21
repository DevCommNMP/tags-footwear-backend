var email = process.env.courierEmail;
var password = process.env.courierPassword;

// Concatenate email and password with a colon
var credentials = email + ':' + password;

// Encode the concatenated string using Base64
var encodedCredentials = btoa(credentials);

console.log(encodedCredentials);
