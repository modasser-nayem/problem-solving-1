// 1.Task: Array Filtering And Mapping

// Create An Array Of Objects, Each Representing A Person With Properties Like Name, Age, And Gender. Write A Function To Filter Out All Females And Then Map The Remaining People To An Array Of Names. Print The Final Result.

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

function remainingPeopleNames(persons) {
   if (!Array.isArray(persons)) {
      console.error("Only array accepted");
      return;
   } else {
      const peopleNames = persons
         .filter((person) => person.gender.toLowerCase() !== "female")
         .map((people) => people.name);
      return peopleNames;
   }
}

const result = remainingPeopleNames(persons);
console.log("Result", result);
