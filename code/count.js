// var counter = function(arr){
//     return 'there are ' +arr.length + 'elements in this array';
// };

// module.exports = counter
//console.log(counter(['x','y','z']));

var adder=function(a,b){
    return `The sum of 2 number is $(a+b)`;
};

var pi = 3.142;

module.exports.counter=counter;
module.exports.adder=adder;
module.exports.pi=pi;