
//normal function statement
// function sayhi(){
//     console.log('hi');
// }
//sayhi();


function callFunction(fun){
fun();
}


//function expression
var saybye=function(){
    console.log('bye');
};

callFunction(saybye);