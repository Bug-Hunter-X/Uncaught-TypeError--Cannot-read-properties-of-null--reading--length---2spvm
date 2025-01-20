function foo(x) {
  if (x === null || x === undefined) {
    return 0; // Handle null or undefined cases
  } else if (typeof x === 'string' || Array.isArray(x)) {
    return x.length; // Access length only if x is a string or array
  } else {
    return -1; // Or throw an error, depending on the desired behavior
  }
}