// let a = [1, 2, 3];
// let b = [...a]; // Shallow copy
//  b[0] = 99;

// console.log(a); // [1, 2, 3] (unchanged)
// console.log(b); // [99, 2, 3]



// let arr = [1,2,3,4,5,6];
// console.log(arr.slice(0,3));

//-------------------------------------------------------

let colors1 = ["Red", "Green", "Blue"];
let colors2 = ["pink", "yellow", "Black"];

// colors.splice(1, 1);

// console.log(colors); // ["Red", "Blue"]

// colors.splice(1, 0, "Green");
// console.log(colors);

//---------------------------------------------------------------

// const colors = colors1.concat(colors2);
// console.log(colors);
//whenever we use concat() it return newarray 

// const another_color_array = [...colors1, ...colors2]
// console.log(another_color_array);

// why spread operator are batter than conacat() method 
// because using spred(...) operator we join multiple array at the time 


console.log(Array.isArray("yagnik"));
console.log(Array.from("yagnik"));

console.log(Array.from({name:"yagnik"})) // interesting for interview
// it return [] it not process