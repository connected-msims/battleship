function generateHexString(length = 6) {
    const hexArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

    let hexResult = [];
    for (let i = 0; i < length; i++) {
        hexResult.push(Math.floor(Math.random() * hexArray.length));
    }

    return hexResult.join('');
}

module.exports.generateHexString = generateHexString;