 
 //----  for of  loop-------------//

//  const arr =[1,2,3,4]

//  for(const num of arr){
//     console.log(num);
//  }

//  const greeting = "hello world "
//  for(const greet of greeting){
//     console.log(`each haracter is ${greet}`)
//  }


 //-------------map -------------

 const map = new Map()
 map.set('in', "india")
 map.set('usa', "united state of america")
 map.set('fr', "france")
map.set('in', "india")

// console.log(map);

// for(const [key, value] of map){
//     console.log(key,':-', value)
// }


//--------------------------------

const obj ={
    'game1':" nfs",
    'game2':" spiderman",
}

// for(const [key, value] of obj){
//     console.log(key, ':-', value);
// }
// this way object is not iterable 



// ----------------- for in loop -------------------------//

const obj1 = {
    js: "javascript",
    cpp: "c++",
    py: "python",
    swift : "swift by apple",
    rb: "ruby"
}

// for(const key in obj1){
//     console.log(`${key} shoetcut is for ${obj1[key]}`)
// }

//-------array-------


const prog = ["js", "cpp", "rb", "py", "swift"]

// for(const key in prog){
//     console.log(prog[key])
// }


//---------map-------------
 for(const key in map){
     console.log(key)
} // not posiible





//--------------------------for each ----------------------//

const coding = ["js", "cpp", "rb", "python", "swift"]

// coding.forEach( function (item){
//         console.log(item);
// })


// coding.forEach((item)=>{
//       console.log(item)
// })



// function printme (item){
//     console.log(item)
// }
// coding.forEach(printme);



// coding.forEach((item, index, arr)=>{
//       console.log(item, index, arr)
// })  // foreach conatin more parameters 



const mycoding = [
     {
        languageName: "javascript",
        languageFileName : "js"
     },
     {
        languageName: "python",
        languageFileName : "py"
     },
     {
        languageName: "c++",
        languageFileName : "cpp"
     },
]


// mycoding.forEach((item)=>{
//    console.log(item.languageName);
// })

