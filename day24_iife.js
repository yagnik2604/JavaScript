// immeditely invoked function expressions (IIFE)


(function chai(){
    // named iiife
    console.log("connect DB");
})();

// semicolon is must required 

((name)=>{

    console.log(` ${name}, is connect to DB`);
})()