

// let myPromise = new Promise((resolve, reject)=>{
//    let success = true;

//    if(success){
//       resolve("✅ Task done successfully!")
//    }else{
//      reject("❌ Something went wrong!");

//    }
// })

// myPromise
//          .then(result => console.log(result)) // run if resolved
//          .catch(error => console.log(error)) // runs if rejected
//          .finally(()=> console.log("done!")) // runs always


function getData(id){

    return new Promise((resolve, reject)=>{
          
        setTimeout(()=>{
            if(id){
             console.log("fetched data", id);
             return resolve("data"+id); // here we write return keyword is not mandatory is optional(we write for clarity i'm done , nothing else should run after this line)
                                        // avoid acccidetial extra code 
            }else{
                console.log("no id you give")
               return reject("not a id")
            }
        }, 2000)
    })
}

getData(1)
         .then(result =>{
             console.log(result)
             return getData(2)
         })
         .then(result =>{
             console.log(result)
             return getData() /// reject case 
         })
         .then(result =>{
             console.log(result)
         })
         .catch(err => console.log(err))
         .finally(()=> console.log("done !"))
         