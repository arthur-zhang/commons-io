var fs = require('fs');
var path = require('path');
var assert = require("assert")

var commonsIO = require('./../lib/commons-io');
var fileUtils = commonsIO.fileUtils;

describe('mkdirsSync', function() {
  it('should pass', function() {
    var x = Math.floor(Math.random() * Math.pow(16,4)).toString(16);
    var y = Math.floor(Math.random() * Math.pow(16,4)).toString(16);
    var z = Math.floor(Math.random() * Math.pow(16,4)).toString(16);

    var file = path.join(__dirname, [x,y,z].join('/'));
    try {
      fileUtils.mkdirsSync(file, 0755);
      var exists = fs.existsSync(file);
      assert(exists, 'target dir is no made');
    } catch (ex) {
      throw ex;
    }
  });
  it('should fail', function() {
    var file = path.join(__dirname, 'test.js');
    try {
      fileUtils.mkdirsSync(file, 0755);
    } catch (ex) {
      assert.equal(ex.code, 'EEXIST', 'Want to make a dir but it is a file');
    }
  });
});

describe('mkdirs async', function() {
  it('should pass', function(done) {
    var x = Math.floor(Math.random() * Math.pow(16,4)).toString(16);
    var y = Math.floor(Math.random() * Math.pow(16,4)).toString(16);
    var z = Math.floor(Math.random() * Math.pow(16,4)).toString(16);

    var file = path.join(__dirname, [x,y,z].join('/'));
    fileUtils.mkdirs(file, 0755, done);
  });
  it('should fail', function(done) {

    var file = path.join(__dirname, 'test.js');
    fileUtils.mkdirs(file, 0755, function(err) {
      assert.equal(!!err, true);
      done();
    });
  });
});
