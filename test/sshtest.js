var ssh = require(__dirname+'/../ssh.js');

ssh('user@localhost',function(){
  console.log('ssh all done!');
  process.exit(); 
})
