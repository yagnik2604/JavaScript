
// (function(){
//     console.log("hello");
// })();


// (function(name){
//     console.log(`hello, ${name}!`);
// })("yagnik");

//--------------------------------------------------

var ans = (function(){
    var private = 12;

    return {
        getter: function(){
            console.log(private);
        },
        setter: function(val){
            private = val;
        }
    }
})()

ans.getter();
ans.setter(25);
ans.getter()