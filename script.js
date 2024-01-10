function encrypt() {
    const key = parseInt(document.querySelector("#key").value);
    const message = document.querySelector("#message").value;
    let encryptedMessage = "";

    for (let i = 0; i < message.length; i++) {
        const messageChar = message.charCodeAt(i);

        // Encrypt Uppercase letters
        if (/[A-Z]/.test(message[i]))
            encryptedMessage += String.fromCharCode((messageChar + key - 65) % 26 + 65);

        // Encrypt Lowercase letters
        else if (/[a-z]/.test(message[i]))
            encryptedMessage += String.fromCharCode((messageChar + key - 97) % 26 + 97);

        // Non-alphabetic characters remain unchanged
        else
            encryptedMessage += message[i];
    }

    document.querySelector("#result").value = encryptedMessage;
}

function decrypt() {
    const key = parseInt(document.querySelector("#key").value);
    const encryptedMessage = document.querySelector("#message").value;
    let message = "";

    for (let i = 0; i < encryptedMessage.length; i++) {
        const encryptedChar = encryptedMessage.charCodeAt(i);

        // Decrypt Uppercase letters
        if (/[A-Z]/.test(encryptedMessage[i]))
            message += String.fromCharCode((encryptedChar - key - 65 + 26) % 26 + 65);

        // Decrypt Lowercase letters
        else if (/[a-z]/.test(encryptedMessage[i]))
            message += String.fromCharCode((encryptedChar - key - 97 + 26) % 26 + 97);

        // Non-alphabetic characters remain unchanged
        else
            message += encryptedMessage[i];
    }

    document.querySelector("#result").value = message;
}
