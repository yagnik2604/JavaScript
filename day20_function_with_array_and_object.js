

function calculatecartprice (...num1){  // rest operator  when we use '...' in function is called rest operator 
     return num1
    }

//console.log(calculatecartprice(100, 200, 500))

//.........................................................4


function calculatecartprice (val1, val2, ...num1){  // here 100 snd 200 go into val1 and val2 , rest of go into num1
     return num1
    }

console.log(calculatecartprice(100, 200, 500, 8000, 400))