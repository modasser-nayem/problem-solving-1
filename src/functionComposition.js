// 3.Task: Function Composition

// Write Three Functions: One To Square A Number, One To Double A Number, And One To Add 5 To A Number. Compose These Functions To Create A New Function That Squares A Number, Doubles The Result, And Then Adds 5.

function oneToSquare(number) {
   return number * number;
}

function oneToDouble(number) {
   return number * 2;
}

function oneToAdd5(number) {
   return number + 5;
}

function numberTransform(square, double, add5) {
   const squareResult = oneToSquare(square);
   const doubleResult = oneToDouble(double);
   const add5Result = oneToAdd5(add5);

   return {
      square: squareResult,
      double: doubleResult,
      add5: add5Result,
   };
}

const result = numberTransform(4, 5, 10);
console.log("Result: ", result);
