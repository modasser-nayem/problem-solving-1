// 4.Task: Sorting Objects

// Create An Array Of Objects Representing Cars With Properties Like Make, Model, And Year. Write A Function To Sort The Array Of Cars By The Year Of Manufacture In Ascending Order. Print The Sorted Array.

const cars = [
   {
      make: "Baba Ji",
      model: "TotoMK",
      year: 1997,
   },
   {
      make: "Rulabin",
      model: "Z509",
      year: 2001,
   },
   {
      make: "Damil Kesu",
      model: "DK-420",
      year: 2020,
   },
   {
      make: "Kiku",
      model: "KK-447",
      year: 1988,
   },
];

function sortCarsByYearASCOrder(cars) {
   if (!Array.isArray(cars)) {
      console.error("Only array accepted");
      return;
   } else {
      return cars.sort((a, b) => a.year - b.year);
   }
}

const result = sortCarsByYearASCOrder(cars);
console.log("Result", result);
