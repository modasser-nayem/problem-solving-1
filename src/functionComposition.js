// 3.Task: Function Composition

// Write Three Functions: One To Square A Number, One To Double A Number, And One To Add 5 To A Number. Compose These Functions To Create A New Function That Squares A Number, Doubles The Result, And Then Adds 5.

function square(number) {
   return number * number;
}

function double(number) {
   return number * 2;
}

function addFive(number) {
   return number + 5;
}

function composedFunction(number) {
   const result = addFive(double(square(number)));
   return result;
}

const result = composedFunction(3);
console.log("Result: ", result);
