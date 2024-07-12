// 5.Task: Find And Modify

// Write A Function That Searches An Array Of Objects For A Specific Person By Name. If Found, Modify Their Age Property. Print The Updated Array.

const persons = [
   {
      name: "Nayem",
      age: 21,
      gender: "male",
   },
   {
      name: "Sayem",
      age: 22,
      gender: "male",
   },
   {
      name: "Ruma",
      age: 17,
      gender: "female",
   },
   {
      name: "Rahib",
      age: 18,
      gender: "male",
   },
   {
      name: "Sopna",
      age: 21,
      gender: "female",
   },
];

function updatePersonAge(persons, personName, newAge) {
   if (!Array.isArray(persons)) {
      console.log("Error: first a must be arrays only");
      return;
   } else {
      const result = persons.map((person) => {
         if (person.name.toLowerCase() === personName.toLowerCase()) {
            return { ...person, age: newAge };
         }
         return person;
      });
      return result;
   }
}

const result = updatePersonAge(persons, "sayem", 53);
console.log("Result", result);
