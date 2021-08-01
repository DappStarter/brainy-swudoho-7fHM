require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow fog table name rifle tape prosper hunt drop slot giggle'; 
let testAccounts = [
"0xdaccfab99d61da594445d65af50b535415a513fcd3cd89eabe8740ea3e26ad76",
"0x85c0cd8793bd447717d8ed7dfd017a4d1858fc6fc967c9bcca958c3f26e38b8f",
"0x90797d359e6444968212e4c4dd4a7dcb94281d78b6ef513a35db81c14f370b97",
"0x7ce86f038ffd1337329fe2c9a5e02fbb1595448281f0f508ae6f93ccd534a9ba",
"0x8138e4a5199e6efc1a2299719ac81eaaa93bf5b2ac9cb0fd844ee66fb71640f5",
"0xb20dd58e303a4fde6b45a967638edc6f553c50540391c9083ffcd58331c176d0",
"0x5312adddf767bbcc6b4042e990588b6261ef04e4919efbba64241588c2d12c22",
"0xda89bd00d9106ca7d2281bc5cf4c9d4544636d58cdf17d82f132d74ec3724c08",
"0x8cc8c696f3ec94651957a42f8dd4bdc8e09989b417be277970386cfc0fb32a3d",
"0x5fe968a0286c30312e140899b98a53d95e07607b5c2e9f9dda9fd4ab6082cd87"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


