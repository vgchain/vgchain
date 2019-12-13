# verify.js
This is the contract random number validation script for vgchain.

It runs in nodejs environment.

# Installation
## Node
```
npm install web3
```

# Usage
Type on linux shell or windows commonline:
```
node
var verify = require("./verify")
verify.verify_10('coinbase', 'player1', 'player2', 'difficulty')
```

you will see something like this: "verify_50 bet index: 5 1 7 3 9"
