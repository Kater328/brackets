module.exports = function check(str, bracketsConfig) {
    let brackets = [];
    for (let i = 0; i < bracketsConfig.length; i++)
        brackets.push(bracketsConfig[i][0] + bracketsConfig[i][1]);

    for (let k = 0; k < brackets.length; k++) {
        if (str.includes(brackets[k])) {
            str = str.replace(brackets[k], '');
            k = -1;
        } 
    };
    return str === '';
}
