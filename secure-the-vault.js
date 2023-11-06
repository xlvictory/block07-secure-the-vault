/*
1. Create a html file to go with the javascript file 
2. Link aforementioned .js file in the HTML head tag
3. Declare variables (combo1, combo2, combo3)
4. Use arithmetic operators when declaring the value of each variable
5. Run each variable, just to ensure that they amount to the value they're supposed to (personal choice)
6. Create a variable for the string
7. Create alert() using variables
*/

// declaring variables
let combo1 = (5 * 4) / 2;
let combo2 = 15 + 25;
let combo3 = (6 * 5) + (3*3);

/* checking that my arithmetic works!!
console.log(combo1)
console.log(combo2)
console.log(combo3) */

//creating string variable
const alertStr = "You have received this message because you have been chosen to open an important vault. Here is the secret combination: ";

//Using alert()
alert(`${alertStr}${combo1}-${combo2}-${combo3}.`)

/* other way of coding the alert()
alert(alertStr + combo1 + "-" + combo2 + "-" + combo3)*/