import{c as B,bz as P,bC as U,bD as w,b6 as o}from"./privyHost-CH6knk-3.js";import{n as E}from"./getErc20Balance-jXNpFf0N-BeGuqJ-v.js";import{r as R,j as e,l as z,f as D,y as I,h as Q,i as M,k as O}from"./vendor-react-DwYkqiWc.js";import{u as W,h as Y}from"./ModalFooter-DDm8WjC0-C8sfrXrU.js";import{c as q,s as G}from"./Layouts-BMRfo5hw-pKQ_Kvj1.js";import{t as J}from"./FundWalletMethodHeader-9HWQpiIL-Ca8Kz1Kg.js";import{s as $,e as f,n as K}from"./Value-DTgR824E-BPCi6UH7.js";import{e as L}from"./ErrorMessage-D8VaAP5m-B-l5Lysd.js";import{r as V}from"./Subtitle-CV-2yKE4-JGerYA86.js";import{e as X}from"./Title-BnzYV3Is-Bkm7Jncd.js";import{e as N}from"./getChainName-DjpPdUSc-c2urPd0g.js";import{n as Z}from"./Chip-CZKIKt9K-DyHzgnxS.js";import{w as H}from"./TransferOrBridgeLoadingScreen-D1oxf2nl-BCJpM62H.js";import{d as _,e as ee}from"./shared-FM0rljBt-CXsWNmJp.js";import{t as C}from"./formatErc20TokenAmount-BuPk9xcy-CkAr4Oc0.js";import{c as k}from"./ethers-zTjbodk5-Cre7REGd.js";import{a as re,p as ae,s as ne,c as ie,l as se}from"./styles-CDbMB3Hb-BFaoGpvB.js";import{h as oe}from"./index-BTMnaXL8.js";const Ee=({chains:i,appId:r,address:a,rpcConfig:c})=>Promise.all(i.map(async n=>{let l=B({chain:n,transport:oe(P(n,c,r))}),m=await l.getBalance({address:a}).catch(()=>0n),h=null,s=U[n.id];if(s){let{balance:p}=await E({address:a,chain:n,rpcConfig:c,appId:r,erc20Address:s});h=p}return{balance:m,erc20Balance:h,erc20Address:s,chain:n}})),te=({balance:i,className:r,chain:a})=>e.jsx(_,{className:r,$state:void 0,children:e.jsx(x,{balance:i,chain:a})}),x=({balance:i,chain:r})=>e.jsxs(e.Fragment,{children:[e.jsxs(ce,{children:[e.jsx(de,{chainId:typeof r=="object"?r.id:"solana"}),e.jsx(K,{children:typeof r=="object"?r.name:N(r)})]}),e.jsxs(Z,{isLoading:!1,isPulsing:!1,color:"gray",children:[e.jsx(le,{children:e.jsx(M,{})}),i]})]});let ce=o.div`
  display: flex;
  align-items: center;
`,le=o.div`
  height: 0.75rem;
  width: 0.75rem;
  margin-right: 0.2rem;
`,de=o(H)`
  height: 1.25rem;
  width: 1.25rem;
  display: inline-block;
  margin-right: 0.5rem;
  border-radius: 4px;
`;const me=({options:i,onSelect:r,selected:a,className:c})=>e.jsxs(z,{as:he,children:[e.jsxs(D,{as:fe,children:[e.jsx(x,{balance:a.balance,chain:a.chain}),e.jsx(b,{height:16})]}),e.jsx(I,{as:pe,className:c,children:i.map((n,l)=>e.jsx(Q,{as:ue,onClick:()=>r(l),children:e.jsx(x,{balance:n.balance,chain:n.chain})},l))})]});let he=o.div`
  width: 100%;
  position: relative;
`,pe=o.div`
  width: 100%;
  margin-top: 0.5rem;
  position: absolute;
  background-color: var(--privy-color-background);
  border-radius: var(--privy-border-radius-md);
  overflow: hidden auto;
  box-shadow: var(--privy-shadow-popover);
  max-height: 11.75rem;

  && {
    border: solid 1px var(--privy-color-foreground-4);
  }

  z-index: 1;
`,ue=o.button`
  width: 100%;
  display: flex;
  justify-content: space-between;

  && {
    padding: 1rem;
  }

  :not(:last-child) {
    border-bottom: solid 1px var(--privy-color-foreground-4);
  }

  :hover {
    background: var(--privy-color-background-2);
  }
`,b=o(O)`
  height: 1rem;
  margin-left: 0.5rem;
`,fe=o.button`
  ${ee}

  /* Push the chip all the way to the right */
  span {
    margin-left: auto;
  }

  ${b} {
    transition: rotate 100ms ease-in;
  }

  &[aria-expanded='true'] {
    ${b} {
      rotate: -180deg;
    }
  }
`;const Re=({displayName:i,errorMessage:r,configuredFundingChain:a,formattedBalance:c,fundingAmount:n,fundingCurrency:l,fundingAmountInUsd:m,options:h,selectedOption:s,isPreparing:p,isSubmitting:j,addressToFund:S,fundingWalletAddress:F,onSubmit:T,onSelect:A,onAmountChange:y})=>{let v=R.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(J,{}),e.jsx(q,{}),e.jsx(X,{children:"Transfer from another network"}),e.jsxs(V,{children:["You need more funds on the"," ",typeof a=="object"?a.name:N(a)," ","network. Bridge from another blockchain network."]}),e.jsxs(re,{style:{marginTop:"2rem"},children:[e.jsxs(ae,{onClick:()=>{var t;return(t=v.current)==null?void 0:t.focus()},children:[e.jsx(ne,{ref:v,value:n,onChange:t=>{let d=t.target.value;if(/^[0-9.]*$/.test(d)&&d.split(".").length-1<=1){let g=/\.$/.test(d)?".":"",u=Number(d.replace(/\.$/,"")||"0");if(Number.isNaN(u))return void y("0");y(u.toString()+g)}}}),e.jsx(ie,{children:l})]}),m&&e.jsx(se,{children:m})]}),e.jsxs($,{style:{marginTop:"1.5rem"},children:[e.jsx(f,{children:"From"}),e.jsx(f,{children:w(F)})]}),e.jsx(me,{selected:{chain:s.chain,balance:s.isErc20Quote?C({amount:s.erc20Balance??0n,decimals:6})+" USDC":k(s.balance,s.chain.nativeCurrency.symbol,3,!0)},options:h.map(({chain:t,balance:d,isErc20Quote:g,erc20Balance:u})=>({chain:t,balance:g?C({amount:u??0n,decimals:6})+" USDC":k(d,t.nativeCurrency.symbol,3,!0)})),onSelect:A}),e.jsxs($,{style:{marginTop:"1.5rem"},children:[e.jsx(f,{children:"To"}),e.jsx(f,{children:w(S)})]}),e.jsx(te,{chain:a,balance:c}),e.jsx(L,{style:{marginTop:"1rem"},children:r}),e.jsxs(W,{style:{marginTop:"1rem"},loading:j||p,disabled:p||j,onClick:T,children:["Confirm with ",i]}),e.jsx(G,{}),e.jsx(Y,{})]})};export{Re as K,Ee as U};
