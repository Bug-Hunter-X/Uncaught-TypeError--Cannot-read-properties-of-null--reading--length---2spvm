# Uncaught TypeError: Cannot read properties of null (reading 'length')
This repository demonstrates a common JavaScript error: 'Uncaught TypeError: Cannot read properties of null (reading 'length')' and its solution.

## Description
The error occurs when you try to access the 'length' property of a variable that holds a null value.  JavaScript throws a TypeError because the 'length' property is undefined for null.

## Bug.js
The original buggy code is in `bug.js`

## BugSolution.js
The corrected code is in `bugSolution.js`. This version explicitly checks for null before accessing the 'length' property.