//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
let car: string = 'subaru';
let age: number= 25;
let numbers: number[]= [1,2,3,4];


// **String test**


//test 1: Equality (True)
console.log("is car == 'subaru' ? I predict True.");
console.log(car == 'subaru'); // True

//test 2: Strict Equality Comparison(False)
console.log("is car === 'subaru' ? I predict False.");
console.log(car === 'subaru'); // False

//test 3: Inequality (True)
console.log("is car != 'subaru' ? I predict True.");
console.log(car != 'subaru'); // True

//test 4: Inequality (False)
console.log("is car !== 'subaru' ? I predict False.");
console.log(car !== 'subaru'); // False


// **Lowercase Function Test**

//test 5: Lowercase Conversion(True)
console.log("is car.toLowerCase() == 'subaru' ? I predict True.");
console.log(car.toLowerCase() == 'subaru'); // True (converted to lowercase)

//test 6: Lowercase Conversion(False)
console.log("is car === car.toLowerCase()? I predict False.");
console.log(car === car.toLowerCase()); // False (original value remains uppercase)

// **Numeric test**

//test 7: Equality(True)
console.log("is age == 25?I predict True.");
console.log(age == 25); //True

//test 8: Inequality(False)
console.log("is age != 30?I predict False.");
console.log(age != 30); //False

//test 9: Greater than(False)
console.log("is age > 30?I predict False.");
console.log(age > 30); //False

//test 10: Less than or equal(True)
console.log("is age <= 25?I predict True.");
console.log(age <= 25); //True

// **Logical Operators**

//test 11: AND(True)
console.log("is age > 20 && age < 30 ? I predict True.");
console.log(age > 20 && age < 30); //True(both condition met)

//test 12: OR(False)
console.log("is age > 30 || age < 18 ? I predict False.");
console.log(age > 30 || age < 18); //false (neither condition met)

// **Array test**

//test 13:In Array(True)
console.log("is 3 in numbers? I predict True.");
console.log(3 in numbers); //True(checks for index existence)

//test 14: OR(True)
//console.log("is 5 not in numbers? I predict False.");
//console.log(5 not in numbers); //false (negation of "in" operator)





