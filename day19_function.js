


function addtwonum (num1 , num2){

    let result = (num1+ num2);
     return result
}

let result = addtwonum(2, 4);
//console.log(result);


// function loginuser(username){
      
//     return `${username} just loggedin`
// }

function loginuser(username = "sam"){   // give default value
      
    return `${username} just loggedin`
}

let res = loginuser("hitesh");
console.log(res)