var spawn = require('child_process').spawn;

module.exports = function(userhost,options,cb){

  //optional options
  if(!options) options = {};
  if(!cb && options.call){
    cb = options;
    options = {};
  }

  options.reset = options.reset !== undefined ? options.reset : false;

  var paused = process.stdin.paused;
  if(!paused) {
    //if stdin is not paused it will create mega issues of sadness in your tty
    //node will read data and the other process with the fd will not get it.
    process.stdin.pause();
  }

  var args = [userhost];
  if(options.exec) {
    args.push(options.exec);
  }

  var ssh = spawn('ssh',[userhost],{customFds:[process.stdin.fd,process.stdout.fd,process.stderr.fd]});

  ssh.on('exit',function(){
    if(options.reset){
      resetTTY(cb);
    } else if(cb){
      cb(undefined,true);
    }

    if(!paused) {
      process.stdin.resume();
    }

  });

  return ssh;
}


module.exports.resetTTY = resetTTY;

function resetTTY(cb){
    var reset = spawn('reset',[],{customFds:[process.stdin.fd,process.stdout.fd,process.stderr.fd]});
    reset.on('exit',function(code){
      cb(code,true);
    });
};

