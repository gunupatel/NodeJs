var fs=require('fs')// fs module is used to read the file

// to create readable stream used createReadStream method

var myReadStream=fs.createReadStream(__dirname +'/read.txt','utf8');
var myWriteStream=fs.createWriteStream(__dirname +'/write.txt','utf8');

// myReadStream.on('data',function(chunk){
//     console.log('new chunk reaceived:');
//     //console.log(chunk);
//     myWriteStream.write(chunk);

//});
myReadStream.pipe(myWriteStream)