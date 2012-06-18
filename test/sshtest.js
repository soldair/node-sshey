var ssh = require(__dirname+'/../ssh.js');

ssh('ryan@localhost',function(){
  console.log('ssh all done!');
  process.exit(); 
})
