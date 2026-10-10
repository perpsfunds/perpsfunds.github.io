import{c as B,h as P,dL as U,dO as E,dP as w,dh as o}from"./privyHost-BqlTwloN.js";import{n as R}from"./getErc20Balance-jXNpFf0N-DJTeUaib.js";import{r as I,j as e,l as O,f as Q,y as z,g as D,e as L,h as M}from"./vendor-react-0C64ImZ_.js";import{u as W,h as Y}from"./ModalFooter-DDm8WjC0-CIXCb_tc.js";import{c as q,s as G}from"./Layouts-BMRfo5hw-B18nZ3dc.js";import{t as J}from"./FundWalletMethodHeader-9HWQpiIL-C-7WbY9T.js";import{s as $,e as g,n as K}from"./Value-DTgR824E-CfaerycU.js";import{e as V}from"./ErrorMessage-D8VaAP5m-BJJ0sc_8.js";import{r as X}from"./Subtitle-CV-2yKE4-Kr6oWFTe.js";import{e as Z}from"./Title-BnzYV3Is-BVf4njxD.js";import{e as N}from"./getChainName-DjpPdUSc-c2urPd0g.js";import{n as H}from"./Chip-CZKIKt9K-Znt3H2CJ.js";import{w as _}from"./TransferOrBridgeLoadingScreen-D1oxf2nl-CqB9-kyF.js";import{d as ee,e as re}from"./shared-FM0rljBt-D15T4qh8.js";import{t as C}from"./formatErc20TokenAmount-BuPk9xcy-CkAr4Oc0.js";import{c as k}from"./ethers-zTjbodk5-C3EInggW.js";import{a as ae,p as ne,s as se,c as ie,l as oe}from"./styles-CDbMB3Hb-Pt_oWE4H.js";const Ue=({chains:s,appId:r,address:a,rpcConfig:c})=>Promise.all(s.map(async n=>{let l=B({chain:n,transport:P(U(n,c,r))}),m=await l.getBalance({address:a}).catch(()=>0n),h=null,i=E[n.id];if(i){let{balance:p}=await R({address:a,chain:n,rpcConfig:c,appId:r,erc20Address:i});h=p}return{balance:m,erc20Balance:h,erc20Address:i,chain:n}})),te=({balance:s,className:r,chain:a})=>e.jsx(ee,{className:r,$state:void 0,children:e.jsx(x,{balance:s,chain:a})}),x=({balance:s,chain:r})=>e.jsxs(e.Fragment,{children:[e.jsxs(ce,{children:[e.jsx(de,{chainId:typeof r=="object"?r.id:"solana"}),e.jsx(K,{children:typeof r=="object"?r.name:N(r)})]}),e.jsxs(H,{isLoading:!1,isPulsing:!1,color:"gray",children:[e.jsx(le,{children:e.jsx(L,{})}),s]})]});let ce=o.div`
  display: flex;
  align-items: center;
`,le=o.div`
  height: 0.75rem;
  width: 0.75rem;
  margin-right: 0.2rem;
`,de=o(_)`
  height: 1.25rem;
  width: 1.25rem;
  display: inline-block;
  margin-right: 0.5rem;
  border-radius: 4px;
`;const me=({options:s,onSelect:r,selected:a,className:c})=>e.jsxs(O,{as:he,children:[e.jsxs(Q,{as:ge,children:[e.jsx(x,{balance:a.balance,chain:a.chain}),e.jsx(j,{height:16})]}),e.jsx(z,{as:pe,className:c,children:s.map((n,l)=>e.jsx(D,{as:ue,onClick:()=>r(l),children:e.jsx(x,{balance:n.balance,chain:n.chain})},l))})]});let he=o.div`
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
`,j=o(M)`
  height: 1rem;
  margin-left: 0.5rem;
`,ge=o.button`
  ${re}

  /* Push the chip all the way to the right */
  span {
    margin-left: auto;
  }

  ${j} {
    transition: rotate 100ms ease-in;
  }

  &[aria-expanded='true'] {
    ${j} {
      rotate: -180deg;
    }
  }
`;const Ee=({displayName:s,errorMessage:r,configuredFundingChain:a,formattedBalance:c,fundingAmount:n,fundingCurrency:l,fundingAmountInUsd:m,options:h,selectedOption:i,isPreparing:p,isSubmitting:b,addressToFund:S,fundingWalletAddress:F,onSubmit:T,onSelect:A,onAmountChange:y})=>{let v=I.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(J,{}),e.jsx(q,{}),e.jsx(Z,{children:"Transfer from another network"}),e.jsxs(X,{children:["You need more funds on the"," ",typeof a=="object"?a.name:N(a)," ","network. Bridge from another blockchain network."]}),e.jsxs(ae,{style:{marginTop:"2rem"},children:[e.jsxs(ne,{onClick:()=>{var t;return(t=v.current)==null?void 0:t.focus()},children:[e.jsx(se,{ref:v,value:n,onChange:t=>{let d=t.target.value;if(/^[0-9.]*$/.test(d)&&d.split(".").length-1<=1){let f=/\.$/.test(d)?".":"",u=Number(d.replace(/\.$/,"")||"0");if(Number.isNaN(u))return void y("0");y(u.toString()+f)}}}),e.jsx(ie,{children:l})]}),m&&e.jsx(oe,{children:m})]}),e.jsxs($,{style:{marginTop:"1.5rem"},children:[e.jsx(g,{children:"From"}),e.jsx(g,{children:w(F)})]}),e.jsx(me,{selected:{chain:i.chain,balance:i.isErc20Quote?C({amount:i.erc20Balance??0n,decimals:6})+" USDC":k(i.balance,i.chain.nativeCurrency.symbol,3,!0)},options:h.map(({chain:t,balance:d,isErc20Quote:f,erc20Balance:u})=>({chain:t,balance:f?C({amount:u??0n,decimals:6})+" USDC":k(d,t.nativeCurrency.symbol,3,!0)})),onSelect:A}),e.jsxs($,{style:{marginTop:"1.5rem"},children:[e.jsx(g,{children:"To"}),e.jsx(g,{children:w(S)})]}),e.jsx(te,{chain:a,balance:c}),e.jsx(V,{style:{marginTop:"1rem"},children:r}),e.jsxs(W,{style:{marginTop:"1rem"},loading:b||p,disabled:p||b,onClick:T,children:["Confirm with ",s]}),e.jsx(G,{}),e.jsx(Y,{})]})};export{Ee as K,Ue as U};
