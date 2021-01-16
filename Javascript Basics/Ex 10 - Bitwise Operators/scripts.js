// --------------------------------
// --------Bitwise Operators-------
// --------------------------------

/*
A bitwise operator treats their operands as a set of 32 bits (zeros and ones), rather than as decimal, hexadecimal, or octal numbers. For example, the decimal number nine has a binary representation of 1001. Bitwise operators perform their operations on such binary representations, but they return standard JavaScript numerical values.
*/

// 5 - 00000101
// 1 - 00000001

// And
console.log(5 & 1);

// Or
console.log(5 | 1)

// Not
// 5  - 0000000000000000000000000000 0101
// ~5 - 1111111111111111111111111111 1010
// (2 ^ 32)- 1 - 5
console.log(~5);

// Xor
console.log(5 ^ 1);

// Zero fill left shift
console.log(5 << 1);

// Signed right shift
console.log(5 >> 1);

// Zero fill right shift
console.log(5 >>> 1);

// --Convert decimal to binary--
console.log((10).toString(2));

// --Convert binary to decimal--
console.log((0b1100).toString(10));
console.log(parseInt("1100", 2));
