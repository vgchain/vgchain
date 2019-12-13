
var Web3 = require("web3")
let web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/786ade30f36244469480aa5c2bf0743b"));

function rand(coinbase, player1, player2, difficulty) {  
    let p =web3.eth.abi.encodeParameter(
        {
            "ParentStruct": {
                "property1": 'address',
                "property2": 'address',
                "property3": 'address',
                "property4": 'uint256'
            }
        },
        {
            "property1": coinbase,
            "property2": player1,
            "property3": player2,
            "property4": difficulty,
        
        }
    );

    let hash = web3.utils.keccak256(p)
    let rand_str = web3.eth.abi.decodeParameter('uint256',hash)

    console.log(rand_str);
    return rand_str.substring(rand_str.length-10, rand_str.length);
}

function verify_10(coinbase, player1, player2, difficulty) {
    let rand_num = rand(coinbase, player1, player2, difficulty);
    
    let a = rand_num % 10;

    console.log("verify_10 got index:", a);
}

function verify_30(coinbase, player1, player2, difficulty) {
    let rand_num = rand(coinbase, player1, player2, difficulty);
    
    let a = rand_num % 10 % 3;
    let b = parseInt(rand_num / 100) % 10 % 3 + 3;
    let c = parseInt(rand_num / 1000) % 10 % 4 + 6;

    console.log("verify_30 got index::", a, b, c);
}

function verify_50(coinbase, player1, player2, difficulty) {
    let rand_num = rand(coinbase, player1, player2, difficulty);
    
    let a = rand_num % 10 % 2 * 5;
    let b = parseInt(rand_num / 100) % 10 % 2 * 5 + 1;
    let c = parseInt(rand_num / 1000) % 10 % 2 * 5 + 2;
    let d = parseInt(rand_num / 10000) % 10 % 2 * 5 + 3;
    let e = parseInt(rand_num / 100000) % 10 % 2 * 5 + 4;

    console.log("verify_50 got index::", a, b, c, d, e);
}

// example
// verify_10("0xd7a15baeb7ea05c9660cbe03fb7999c2c2e57625", "0x1c92b965e3df9e85fc8a2548b7444b57e4fe37aa", "0x1c92b965e3df9e85fc8a2548b7444b57e4fe37aa", 12127718753);
// verify_30("0xd7a15baeb7ea05c9660cbe03fb7999c2c2e57625", "0x1c92b965e3df9e85fc8a2548b7444b57e4fe37aa", "0x1c92b965e3df9e85fc8a2548b7444b57e4fe37aa", 12127718753);
// verify_50("0xd7a15baeb7ea05c9660cbe03fb7999c2c2e57625", "0x1c92b965e3df9e85fc8a2548b7444b57e4fe37aa", "0x1c92b965e3df9e85fc8a2548b7444b57e4fe37aa", 12127718753);

module.exports = {
    verify_10,
    verify_30,
    verify_50
}
