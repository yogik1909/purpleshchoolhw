function crypto(password) {
    if (password.length < 3) {
        console.log("Password is too short");
        return password;
    }
    const secret = password.split('').reverse();
    secret.unshift(secret.pop());
    secret.push(secret[1]);
    secret.splice(1, 1)

    return secret.join('');

}

function check(secret, password) {

    const phrase = secret.split('').reverse();
    phrase.unshift(phrase.pop());
    phrase.push(phrase[1]);
    phrase.splice(1, 1)

    return password === phrase.join('');
}


console.log(crypto("password"));
console.log(check("dfds", "password"));