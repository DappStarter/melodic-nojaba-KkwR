require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope clock bridge silver normal note rifle unhappy gesture basic equal gaze'; 
let testAccounts = [
"0x0dbf610820c84a8547033a6d35f99ab6b873ad62ace21190da5f093ffddb623a",
"0xc4d5328d9a32cba490e61e02b6d4bf6ba32403371e8c57970e5b1766673279cd",
"0x530f9c325fd0ee6e79ee3d217e6130fbdbb7dec97844b2bb6adde18a81009340",
"0x969683b168344812c71b654cdfe53d1d775a2b25f854dc702d9128a1c7f55449",
"0x27801fa080cad99ef4e4dbbd9f25c78b3bc5df4f5d97b4eee78250dd4ba95731",
"0x0f1015c601a859617b8054bce19b44cc76df0c0ba117054856402e3099318deb",
"0xf0a3bacc9b9569df26b331856f1d451cd92c9fd57063499c66f90bb7129b915a",
"0x3ddcc5c2a6334b31cceec4258dbea145005411e5e239996aa7848cf92193fe14",
"0xf64933e9eb519fdced3d5304e1e5d19eea1ce6d280cdcb770bc3e36fd7ff1f77",
"0x131558a0f456158ed19974978e39599ce3d103e26abfd3420c06feb75552592b"
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


