"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[7313],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),k=a,m=u["".concat(s,".").concat(k)]||u[k]||p[k]||r;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9004:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(7462),a=(n(7294),n(3905)),r=n(4996);const i={id:"sendPCKB",title:"Transfer pCKB on Godwoken v1"},l=void 0,s={unversionedId:"sendPCKB",id:"version-1.3-rc1(WIP)/sendPCKB",title:"Transfer pCKB on Godwoken v1",description:"",source:"@site/versioned_docs/version-1.3-rc1(WIP)/sendPCKB.md",sourceDirName:".",slug:"/sendPCKB",permalink:"/sendPCKB",draft:!1,tags:[],version:"1.3-rc1(WIP)",frontMatter:{id:"sendPCKB",title:"Transfer pCKB on Godwoken v1"},sidebar:"sidebar2",previous:{title:"Deposit & Fast Withdrawal to Godwoken v1",permalink:"/fastWithdrawal"},next:{title:"Extract a Privkey from MetaMask Wallet",permalink:"/extractPrivkey"}},d={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configure MetaMask for Godwoken pCKB",id:"configure-metamask-for-godwoken-pckb",level:2},{value:"Send Funds on Godwoken",id:"send-funds-on-godwoken",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This guide will show you how to configure, import and send pCKBs on Godwoken using ",(0,a.kt)("a",{parentName:"p",href:"https://metamask.io/"},"MetaMask")," wallet. Godwoken is a layer 2 optimistic rollup solution and an EVM-compatible layer that builds on top of Nervos Layer 1. When Godwoken executes a transaction, the transaction fee is deducted by using a layer 2 sUDT token, which is defined as the ",(0,a.kt)("strong",{parentName:"p"},"pCKB"),". That is to say, Godwoken uses pCKB\uff0cin place of CKB, to collect transaction fees by default, and users use ",(0,a.kt)("a",{parentName:"p",href:"/pCKB"},(0,a.kt)("inlineCode",{parentName:"a"},"pCKB (ERC20)"))," when ",(0,a.kt)("a",{parentName:"p",href:"/faq#q-ckb-transfer-on-godwoken-testnet-via-metamask-has-failed-what-is-the-solution"},"making native token transfer")," on Godwoken. "),(0,a.kt)("p",null,"In order to follow this tutorial, make sure that you have already installed a web3 wallet, and that you have successfully created an account and have enough CKBs or supported sUDT tokens in your wallet. In the current version of ",(0,a.kt)("a",{parentName:"p",href:"https://bridge.godwoken.io/#/v1"},"GodwokenBridge"),", a ",(0,a.kt)("a",{parentName:"p",href:"https://metamask.io/"},"MetaMask")," wallet is recommended for users."),(0,a.kt)("p",null,"All operations in this tutorial are performed on the Godwoken v1 Testnet. For more information on the concept of CKBs, refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.nervos.org/docs/basics/introduction"},"Nervos CKB"),". You can also check out the tutorial video by clicking ",(0,a.kt)("a",{parentName:"p",href:"https://youtu.be/58YHw4YJL8s"},"here"),". To fund an account on with CKB on Nervos Layer 1 testnet, you can refer to ",(0,a.kt)("a",{parentName:"p",href:"/quickStart#transfer-tokens-from-Nervos-L1-to-L2"},"Transfer tokens from Nervos L1 to L2"),"."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://metamask.io/"},"MetaMask")," account"),(0,a.kt)("li",{parentName:"ul"},"Connect\xa0",(0,a.kt)("a",{parentName:"li",href:"https://testnet.bridge.godwoken.io/#/v1/"},"Godwoken Bridge"),"\xa0with the MetaMask wallet and switch the network to\xa0",(0,a.kt)("strong",{parentName:"li"},"Godwoken Testnet v1"),"."),(0,a.kt)("li",{parentName:"ul"},"Acquire CKB for your layer 1 wallet from\xa0",(0,a.kt)("a",{parentName:"li",href:"https://faucet.nervos.org/"},"CKB Testnet Faucet"),". The\xa0",(0,a.kt)("strong",{parentName:"li"},"L1 Wallet address"),"\xa0can be found on the Deposit page of Godwoken Bridge.\n")),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"A deposit or a withdrawal requires at least 400 CKB."))),(0,a.kt)("h2",{id:"configure-metamask-for-godwoken-pckb"},"Configure MetaMask for Godwoken pCKB"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Connect to the ",(0,a.kt)("a",{parentName:"li",href:"https://testnet.bridge.godwoken.io/#/v1"},"Godwoken Bridge")," with your Metamask wallet, which will automatically add Godwoken Testnet to your wallet.")),(0,a.kt)("img",{src:(0,r.Z)("img/depositPCKB/configure1.png"),width:"40%"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Go to Metamask wallet, click ",(0,a.kt)("inlineCode",{parentName:"li"},"import tokens"),".")),(0,a.kt)("img",{src:(0,r.Z)("img/depositPCKB/configure2.png"),width:"40%"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fill the Token Contract Address with the info that you could copy from the ",(0,a.kt)("a",{parentName:"li",href:"/connectionInfo#dgodwoken-testnet-v1"},"Godwoken Public Networks")," page, then click ",(0,a.kt)("inlineCode",{parentName:"li"},"Add Custom Token"),". Normally, token symbol and token decimal will be filled automatically. ")),(0,a.kt)("img",{src:(0,r.Z)("img/depositPCKB/configure3.png"),width:"40%"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click ",(0,a.kt)("inlineCode",{parentName:"li"},"Import Tokens")," to confirm the import of custom token.")),(0,a.kt)("img",{src:(0,r.Z)("img/depositPCKB/configure4.png"),width:"40%"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You will see that pCKB has been added into your wallets.")),(0,a.kt)("img",{src:(0,r.Z)("img/depositPCKB/configure5.png"),width:"40%"}),(0,a.kt)("h2",{id:"send-funds-on-godwoken"},"Send Funds on Godwoken"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Go to your MetaMask wallet, select pCKB in your Assets.")),(0,a.kt)("img",{src:(0,r.Z)("img/depositPCKB/send1.png"),width:"40%"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click ",(0,a.kt)("inlineCode",{parentName:"li"},"Send")," to make a transfer transaction.")),(0,a.kt)("img",{src:(0,r.Z)("img/depositPCKB/send2.png"),width:"40%"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Enter the address of the receiver.")),(0,a.kt)("img",{src:(0,r.Z)("img/depositPCKB/send3.png"),width:"40%"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fill in the transfer amount, and click ",(0,a.kt)("inlineCode",{parentName:"li"},"Next"),".")),(0,a.kt)("img",{src:(0,r.Z)("img/depositPCKB/send4.png"),width:"40%"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click ",(0,a.kt)("inlineCode",{parentName:"li"},"Confirm")," to complete the transaction. The Gas fee will be calculated automatically. ")),(0,a.kt)("img",{src:(0,r.Z)("img/depositPCKB/send5.png"),width:"40%"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"After completing, you can see the status of the transaction at ",(0,a.kt)("inlineCode",{parentName:"li"},"Activity"),".")),(0,a.kt)("img",{src:(0,r.Z)("img/depositPCKB/send6.png"),width:"40%"}))}u.isMDXComponent=!0}}]);