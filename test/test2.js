var fs = require('fs');
var path = require('path');
//fs.rename('/home/arthur/Desktop/test.sh', '/home/arthur/Desktop/test2.sh', function(err) {
//  console.log(err);
//  fs.rename('/home/arthur/Desktop/test2.sh', '/home/arthur/Desktop/test.sh', function(err) {
//    console.log(err);
//  });
//});
//var mv = require('mv');
//var src = '/home/arthur/Desktop/test.sh';
//var target =  '/media/sdb1/test/';
//mv(src, target ,{mkdirp: true}, function(err) {
//  console.log(err);
//});

//var src = "xxx.tar.gz";
//var path = require('path');
//console.log(path.extname(src));

var commonsIO = require('./../lib/commons-io');
var fileUtils = commonsIO.fileUtils;
//var filenameUtils = commonsIO.fileNameUtils;
//fileUtils.moveFile("nimie/nsss.txt", 'xx/ss.apk', function() {
//  console.log("hehh");
//});
//
//console.log(filenameUtils.getExtension('.../zip'));
//console.log(path.resolve('a/b/c/'));

//fs.mkdir('a/b/c', function(err, a, b) {
//  console.log(err, a);
//});
//fs.mkdir('a/', function(err, a, b) {
//  console.log(err);
//});
//
//fs.stat('a', function(err, stat) {
//  console.log(err, stat);
//});
console.log(path.resolve('a/b/c'));
//fileUtils.mkdirp('a/b', function(err, path) {
//  console.log(err, path);
//});
fileUtils.mkdirs('a/b/c/d', 0700, function(err) {
  console.log(err);
});

