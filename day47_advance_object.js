
// --- this way  kwon the properties of object and we set it

const chai = {
    name: "ginger chai",
    price: 250,
    isAvailable : true,

    orderchai : function(){
        console.log("chai nahi bani")
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"))

Object.defineProperty(chai, "name", {
   // writable : false,
    enumerable: false
    // here we set enumerable false, so this name not iterable in any loop , here is the demo
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"))



for(let[key, value] of Object.entries(chai)){

    if(typeof value !== 'function'){

        console.log(`${key} : ${value}`)
    } 
}