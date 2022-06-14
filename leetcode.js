// Get the product of all other elements
const product = (arr) => {
    const length = arr.length;
    var prefix = [arr[0]];
    var postfix = new Array(length).fill(0); // need to initialize this array
    var output = [];

    // calculate prefix
    for (var i = 1; i < length; i++) {
        prefix.push(prefix[i-1]*arr[i]);
    }

    // calculate postfix
    for (var j = length-1; j >= 0; j--) {
        if (j === length-1) {
            postfix[j] = arr[j];
        } else {
            postfix[j] = postfix[j+1]*arr[j];
        }
    }

    // calculate output
    for (var k = 0; k < length; k++) {
        if (k === 0) {
            output.push(prefix[k] * postfix[k]);
        } else if (k === length-1) {
            output.push(prefix[k-1]);
        } else {
            output.push(prefix[k-1]*postfix[k+1]);
        }
    }

    return output;
}

console.log(product([1,2,3,4]));