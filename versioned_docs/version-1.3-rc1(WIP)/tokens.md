---
id: tokens
title: Tokens
---
import useBaseUrl from "@docusaurus/useBaseUrl";

On this page you can find test tokens deployed on Godwoken Testnet that you can use to experiment.


# Tokens

These are ERC20 token addresses on Godwoken **testnet**:

* CKB: 0xE05d380839f32bC12Fb690aa6FE26B00Bd982613
* ETH (from Rinkeby Force Bridge): 0x0902574C86aEc810B727fD08Aa186DBC20579c08
* USDC (from Rinkeby Force Bridge): 0x630AcC0A29E325ce022563Df69ba7E25Eeb1e184
* USDT (from Rinkeby Force Bridge): 0x10A86c9C8CbE7cf2849bfCb0EaBE39b3bFEc91D4
* DAI (from Rinkeby Force Bridge): 0xA2370D7aFFf03e1E2FB77b28Fb65532636e0cB61
* USDC (from [https://testnet.bridge.godwoken.io](https://testnet.bridge.godwoken.io)): 0x30D4B957139785B979aF5312d71505809dc563ed
* dCKB (from [https://aggron.nexisdao.com/dckb](https://aggron.nexisdao.com/dckb)): 0x7e54f7324902B72334827F40f613116F06a88845
* pCKB: 0xe05d380839f32bc12fb690aa6fe26b00bd982613

Below are the ERC20 token addresses on Godwoken **mainnet**:

* ETH (via Forcebridge from ETH): 0x9E858A7aAEDf9FDB1026Ab1f77f627be2791e98A
* USDC (via Forcebridge from ETH): 0x186181e225dc1Ad85a4A94164232bD261e351C33
* USDC (via Forcebridge from BSC): 0xfA307CfdEA89DC197A346c338a98aC85d517af6e
* USDT (via Forcebridge from ETH): 0x8E019acb11C7d17c26D334901fA2ac41C1f44d50
* DAI (via Forcebridge from ETH): 0x2c9Fc6087875646112f66a3C92fEF2d158FAa76e
* dCKB (via [GodwokenBridge](https://bridge.godwoken.io/#/v1) from CKB): 0x893474456C475E738b13DdA824979bF7a355DE39
* pCKB: 0x7538C85caE4E4673253fFd2568c1F1b48A71558a


### Claimable Test ERC20 Token

Test ERC20 token: 0xd68d7a4d5fac6E2F93449afe40865a0a91278593

Code:

```
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract BlockjamToken is ERC20 {
    constructor() ERC20("Blockjam Token", "BJT") {}

    mapping (address => bool) private tokenClaimers;

    function claimTokens() public {
        require(!tokenClaimers[msg.sender], "you can only claimTokens once per account");

        tokenClaimers[msg.sender] = true;
        _mint(msg.sender, 100000 * 10**18);
    }

    function hasClaimed(address account) public view returns (bool) {
        return tokenClaimers[account];
    }
}
```

ABI:

```
[
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name_",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "symbol_",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
```