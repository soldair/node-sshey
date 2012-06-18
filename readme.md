SSH
===

a node wrapper for interactive ssh sessions.

EXAMPLE!
========

```js
var ssh = require('ssh');

ssh('someone@localhost',function(){
  console.log('ssh all done!');
  process.exit();
})
```

API
===

ssh(userhost,options,cb)
  - userhost REQUIRED
    - the string user@hostname to pass to ssh
  - options [optional]
    - reset (default false)
      - executes reset in your terminal after the ssh session has been closed.
  - cb REQUIRED
    - the callback when all is done

ssh.resetTTY()
  - [no arguments]
  

INSTALL
=======

npm install sshey

NOTES
=====

* right now this uses customFds but the new stdio stuff in >=0.7.x will make this easier and better.
* the process hangs open because something im doing to process stdio. ill sort it out.
