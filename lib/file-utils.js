var fs = require('fs');
var _path = require('path');

var fileUtils = module.exports;

fileUtils.moveFile = function(srcFilePath, dstFilePath, cb) {
  if (!srcFilePath || !dstFilePath) {
    throw new Error('params error');
  }
  fs.rename(srcFilePath, dstFilePath, function(err) {

  })
};

/**
 * Creates the directory by pathname, including any
 * necessary but nonexistent parent directories.
 *
 * @param {string} path path
 * @param {number=} mode the mode
 * @param {function} cb callback function
 */
function mkdirs(path, mode, cb) {
  if (typeof mode === 'function') {
    cb = mode;
    mode = undefined;
  }
  if (!mode) {
    mode = 0777 & (~process.umask());
  }
  cb = cb || function() {};
  path = _path.resolve(path);

  fs.mkdir(path, mode, function(err) {
    if (!err) {
      return cb(null);
    }
    if (err.code ==='ENOENT') {
      mkdirs(_path.dirname(path), mode, function (err) {
        if (err) {
          cb(err);
        } else {
          mkdirs(path, mode, cb);
        }
      });
    } else {
      fs.stat(path, function(err, stat) {
        if(err || !stat.isDirectory()) {
          cb(err);
        } else {
          cb(null);
        }
      });
    }
  });
}

function mkdirsSync(path, mode) {
  if (!mode) {
    mode = 0777 & (~process.umask());
  }

  path = _path.resolve(path);
  try {
    fs.mkdirSync(path, mode);
  } catch (ex) {
    if(ex.code === 'ENOENT') {
      mkdirsSync(_path.dirname(path), mode);
      mkdirsSync(path, mode);
    } else {
      var stat;
      try {
        stat = fs.statSync(path);
      } catch (ex) {
        throw ex;
      }
      if (!stat.isDirectory()) {
        throw ex;
      }
    }
  }

}
fileUtils.mkdirsSync = mkdirsSync;
fileUtils.mkdirs = mkdirs;
