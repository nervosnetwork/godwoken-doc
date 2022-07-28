"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[3980],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8005:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));n(4996);const a={id:"releaseNote",title:"Godwoken Release notes"},i=void 0,l={unversionedId:"releaseNote",id:"releaseNote",title:"Godwoken Release notes",description:"",source:"@site/docs/releaseNote.md",sourceDirName:".",slug:"/releaseNote",permalink:"/next/releaseNote",draft:!1,tags:[],version:"current",frontMatter:{id:"releaseNote",title:"Godwoken Release notes"},sidebar:"sidebar2",previous:{title:"Accounts",permalink:"/next/keyConcepts"},next:{title:"FAQ",permalink:"/next/faq"}},s={},p=[{value:"Ethereum Compatiblility Improvements",id:"ethereum-compatiblility-improvements",level:2},{value:"Other improvements",id:"other-improvements",level:2},{value:"Godwoken internal changes",id:"godwoken-internal-changes",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This release note includes the new features and major updates in Godwoken v1."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note that Godwoken v1 is not an upgrade on the existing chain! Instead, v1 will be deployed as a new chain with tools to help users and developers migrate to the new chain.")),(0,o.kt)("h2",{id:"ethereum-compatiblility-improvements"},"Ethereum Compatiblility Improvements"),(0,o.kt)("p",null,"In the new version, compatibility improvements for Godwoken include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Provide API level compatiblility. Remove the web3-provider plugin."),(0,o.kt)("li",{parentName:"ul"},"Support native ETH address in API and EVM, remove the Godwoken address concept."),(0,o.kt)("li",{parentName:"ul"},"Support Ethereum signature format and EIP-712. User can view the transaction before signing, rather than signing a random 32-byte message.",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken/pull/561"},"#561")),(0,o.kt)("li",{parentName:"ul"},"Fix total provisioning interface for sUDT ERC-20 proxy contracts\xa0",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken/pull/560"},"#560")),(0,o.kt)("li",{parentName:"ul"},"Support interactive with Ethereum addresses that are not yet registered to Godwoken."),(0,o.kt)("li",{parentName:"ul"},"Unify layer 2 fungible token represatation as unit256."),(0,o.kt)("li",{parentName:"ul"},"Change layer 2 ckb decimal from 8 to 18, improve compatibility between metamask and native ckb. ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken/pull/675"},"#675"))),(0,o.kt)("p",null,"Briefly, developers can use Godwoken v1 the same way they use other ethereum-compatible chains, requiring only switching the network to Godwoken. With v1, the polyjuice-provider web3 plugin was removed."),(0,o.kt)("h2",{id:"other-improvements"},"Other improvements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Support p2p mem-pool syncing\xa0",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken/pull/642"},"#642"),", further PRs to enable fully decentralized syncing, but this PR is a good starting."),(0,o.kt)("li",{parentName:"ul"},"perf: optimize molecule usage\xa0",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken/pull/640"},"#640")),(0,o.kt)("li",{parentName:"ul"},"perf: use BTreeSet in FeeQueue\xa0",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken/pull/641"},"#641")),(0,o.kt)("li",{parentName:"ul"},"Change rollup cell's lock to omni-lock\xa0",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken/pull/608"},"#608"),". This PR enables optimistic rollup to submit larger size blocks to fix the inability of putting too much data in the witness field of a CKB transaction due to a secp256k1-lock limit.")),(0,o.kt)("h2",{id:"godwoken-internal-changes"},"Godwoken internal changes"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Dapp developers are free to skip this part.")),(0,o.kt)("p",null,"v1 adds a new concept in having the Ethereum address registry stores Ethereum addresses in Godwoken. Once user deposits a new account, Godwoken will create a mapping between the Ethereum address and the account. In addition, some RPCs have been adapted to support Ethereum addresses as parameters, and some Godwoken data structures have been adapted to support the new address format."),(0,o.kt)("p",null,"More details about Godwoken internal changes refer to:\xa0",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/blob/72b6728e4315ab581282685cffe75cdbfe38670c/docs/release-notes/v1-internal-CHANGES.md"},"docs/release-notes/v1-internal-CHANGES.md"),"."))}c.isMDXComponent=!0}}]);