var email = "amreen.intra@gmail.com";
var password = "123456";

// Concatenate email and password with a colon
var credentials = email + ':' + password;

// Encode the concatenated string using Base64
var encodedCredentials = btoa(credentials);

console.log(encodedCredentials);
