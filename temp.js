let first = 5;
let second = 7;
console.log(first, second);

// Use temporary variable
const temp = first;
first = second;
second = temp;
console.log(first, second);

// Destructuring
[first, second] = [second, first];
console.log(first, second);
