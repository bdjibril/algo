/*

You're working with an intern that keeps coming to you with JavaScript code that won't run because the braces, brackets, and parentheses are off. To save you both some time, you decide to write a braces/brackets/parentheses validator.

Let's say:

'(', '{', '[' are called "openers."
')', '}', ']' are called "closers."
Write an efficient function that tells us whether or not an input string's openers and closers are properly nested.

Examples:

"{ [ ] ( ) }" should return true
"{ [ ( ] ) }" should return false
"{ [ }" should return false

*/

const validateBracket = str => {
    const openers = new Set(['(', '{', '[']);
    const closers = new Set([')', '}', ']']);
    const mapping = {
        '(': ')',
        '{': '}',
        '[': ']',
    }

    let stack = [];

    for (let i = 0; i < str.length; i++) {

        const char = str[i];

        // console.log(stack)
        // console.log(char)

        if (openers.has(char)) {
            stack.push(char);
        }

        if (closers.has(char)) {
            if (mapping[stack[stack.length - 1]] === char) {
                stack.pop()
            } else {
                return false;
            }
        }
    }


    return (stack.length === 0);
}

console.log(validateBracket("{ [ ] ( ) }"))
console.log(validateBracket("{ [ ( ] ) }"))
console.log(validateBracket("{ [ }"))
console.log(validateBracket("{ [ ( ] ) }"))