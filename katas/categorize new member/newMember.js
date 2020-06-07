let members = [[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]];

function getCategory (data){
      
      return data.map(destructure) //array map calls function for each array item

            function destructure([age,handicap]){
                  return ((age >= 55 && handicap >7) ? "senior": "open")
            
            }
      
}

console.log( getCategory(members))

/* ARRAY MAP FUNCTION

The map() method calls the provided function once for each element in an array, in order.

https://www.w3schools.com/jsref/jsref_map.asp
*/

/* ? OPERATOR
the question mark operator ? takes three operands: 
some condition, 
a value if that condition is true, 
and a value if that condition is false.

It is used in JavaScript to shorten an if else statement to one line of code.

https://medium.com/javascript-in-plain-english/what-does-the-question-mark-mean-in-javascript-code-353cfadcf760#:~:text=A%20question%20mark%20by%20another%20name&text=The%20question%20mark%20operator%20%3F,to%20one%20line%20of%20code.
*/

let x = 70;
x>50 ? console.log("x größer 50") : console.log("x kleiner 50");


/* DESTRUCTURING
The destructuring assignment syntax is a JavaScript expression that makes it possible 
to unpack values from arrays, or properties from objects, into distinct variables.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
*/
[a,b,...rest] = members 
/*
a ist der erste Eintrag, also [18,20]; 
b ist der zweite Eintrag, also [45,2]
... rest ist der Rest
*/
console.log("destructured: "+a,b,rest)
