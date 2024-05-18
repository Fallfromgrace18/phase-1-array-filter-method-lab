// Code your solution here

//You'll be writing three functions:

//* `findMatching`- This function takes an array of drivers' names and a `string`
  //as arguments, and returns the matching list of drivers. The function should be
  //case insensitive.

//* `fuzzyMatch` - This function takes an array of drivers' names and a `string`
  //as arguments for querying the array, and returns all drivers whose names begin
  //with the provided letters.

//* `matchName` - This function takes an array of `driver` objects and a `string`
  //as arguments. Each `driver` object has two properties: `name` and `hometown`.
  //The function should return each element whose `name` property matches the
 // provided `string` argument.

//Remember the workflow:

//1. Install the dependencies using `npm install`.
//2. Run the tests using `npm test`.
//3. Read the errors; vocalize what they're asking you to do.
//4. Write code; repeat steps 2 and 3 often until a test passes.
//5. Repeat as needed for the remaining tests.

//After you have all the tests passing, remember to commit and push your changes
//up to GitHub, then submit your work to Canvas using CodeGrade.

//## Resources

//* [MDN: Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)


function findMatching(drivers, name) {
    const result=drivers.filter((driver) => driver.toLowerCase() === name.toLowerCase());
    return(result)
}

function fuzzyMatch(drivers, string){
    const result= drivers.filter((driverNames)=>driverNames.startsWith(string))
        return(result)
     }

     function matchName(drivers,string){
        const result =drivers.filter((driver)=>driver.name===string)
        console.log("This is the name", result)
        return (result)
     
        }
     

