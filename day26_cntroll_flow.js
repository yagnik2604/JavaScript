


//falsy values
// false, 0, -0, 0n, null, undefined, NaN, ""

//truthy values
//"0", 'false, [], {}, function(){}, " "


// if(" "){
//     console.log("true")
// }else{
//     console.log("false")
// }


// if(""){
//     console.log("true")
// }else{
//     console.log("false")
// }


//=----------- nullish coalescing operator )(??) : null undefined ---------------//

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
console.log(val1);



//=----------------ternary operator---------------------//

// condition ? true : false

const iceteaprice = 100

iceteaprice >= 80 ? console.log("less than 80"): console.log("more then 80")