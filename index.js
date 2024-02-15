const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  // Filter the list of inventors to only those born in the 1500s.

  const bornIn1500s = inventors.filter((inventor) => inventor.year>=1500 && inventor.year<=1599)
  console.log(bornIn1500s)

  // Create a new array of the inventor’s first and last names.

  const namesSurnames = inventors.map((inventorNames) =>  `${inventorNames.first} ${inventorNames.last}`)
  console.log(namesSurnames)

  //Sort the inventors by birth year, from oldest to youngest.

  const sortedInventors = inventors.sort((inventorSorted1, inventorSorted2) => inventorSorted1.year - inventorSorted2.year)
  console.log(sortedInventors)

  // Calculate the total number of years lived by all inventors. The reduce() method might help you here.

  const howLongAlivePer = inventors.map((inventorsHowLongAlivePer) =>  inventorsHowLongAlivePer.passed - inventorsHowLongAlivePer.year )
  const howLongAliveTotal = howLongAlivePer.reduce((howLongAlive, x) =>   + howLongAlive + x, 0)
  console.log(howLongAliveTotal)
 
  // Sort the inventors by the number of years they lived.

 const sortedYearsInventors =  howLongAlivePer.sort()
 console.log(sortedYearsInventors)
 
 //Sort the inventors alphabetically by last name.

 const sortedByLastName = inventors.sort((lastName1, lastName2) => {
    if (lastName1.last < lastName2.last) {
    return -1;
  }
  if (lastName1.last> lastName2.last) {
    return 1;
  }
  return 0;
});

console.log(sortedByLastName)


// In this exercise, your task is to create a custom function that simulates the behavior of Object.keys() using functions.

const obj = {
    'keyCode': 'JS',
    2: 'Program Paradigm',
    Target: 'Browser',
  };
  
  objectKeys = obj => {
      let objectKeysArray = [];
      for (let keys in obj) {
          
        
        objectKeysArray.push(keys);
      }
      
      return objectKeysArray;
  };
  
 
  
  console.log(objectKeys(obj))
  
  
  objectValues = obj => {
    let objectValuesArray = [];
    for (let keys in obj) {
        
      
      objectValuesArray.push(obj[keys]);
    }
    
    return objectValuesArray;
};

console.log(objectValues(obj))  