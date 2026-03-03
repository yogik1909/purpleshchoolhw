function crypto(password) {
    if (password.length < 3) {
        console.log("Password is too short");
        return password;
    }
    
    const secret__ = password.split('');
    let leftPart = secret__.splice(0, 4);
    const secret = leftPart.reverse();
    secret.push(secret__.pop());
    const middlePart = secret__.splice(1, 2);
    secret.push(...middlePart);
    secret.push(secret__[0]);

    return secret.join('');
}

function check(secret, password) {
    return password === crypto(secret);
}


console.log(crypto("password"));
console.log(check("ssapdorw", "password"));