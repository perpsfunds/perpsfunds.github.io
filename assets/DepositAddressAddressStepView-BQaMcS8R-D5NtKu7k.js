import{r as u,j as e,v as T,w as S,x as D,z as I,A as F,B as O,C as R,D as A,E as P,G as z,H as L,I as $,J as B,K as M}from"./vendor-react-0C64ImZ_.js";import{dh as t,dK as E}from"./privyHost-BqlTwloN.js";import{m as W,g as v,p as b,f as j,v as w,a as H,u as g,h as x,b as y,t as K}from"./styles-CIiQisHF-C5yFRZhH.js";import{n as U}from"./ScreenLayout-CyLnlt7g-CpyQyvrJ.js";import{b as q}from"./ModalFooter-DDm8WjC0-CIXCb_tc.js";import{x as V}from"./QrCode-Ddiv3lt7-C39twfqF.js";import{p as Y}from"./CopyableText-CQapvaMr-CgCFA0PM.js";import{aj as Q,a3 as _,ak as X,al as G,ag as J,ai as Z,am as ee}from"./vendor-icons-BG7jN9os.js";class ze extends u.Component{static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(i,n){this.props.onError(i)}componentDidUpdate(i){i.resetKey!==this.props.resetKey&&this.state.hasError&&this.setState({hasError:!1})}render(){return this.state.hasError?null:this.props.children}constructor(...i){super(...i),this.state={hasError:!1}}}function re(r,i,n){let o=Number(r);return!Number.isFinite(o)||o===0?`1 ${i} ≈ ${r} ${n}`:o>=.01?`1 ${i} ≈ ${k(o)} ${n}`:`${k(1/o)} ${i} ≈ 1 ${n}`}function k(r){return r>=1e3?new Intl.NumberFormat("en-US",{maximumFractionDigits:0}).format(Math.round(r)):r>=100?new Intl.NumberFormat("en-US",{maximumFractionDigits:1}).format(r):r>=1?new Intl.NumberFormat("en-US",{maximumFractionDigits:2}).format(r):new Intl.NumberFormat("en-US",{maximumFractionDigits:4}).format(r)}function Le(r,i){let n=Number(r);if(!Number.isFinite(n)||n===0)return r;let o=i!=null?n/10**i:n;return o>=1e3?new Intl.NumberFormat("en-US",{maximumFractionDigits:2}).format(o):o>=1?new Intl.NumberFormat("en-US",{maximumFractionDigits:4}).format(o):o>=1e-4?new Intl.NumberFormat("en-US",{maximumFractionDigits:6}).format(o):new Intl.NumberFormat("en-US",{maximumSignificantDigits:4}).format(o)}function $e({address:r,caip2:i,config:n}){for(let o of n.currencies){let a=o.chains.find(s=>s.caip2===i&&s.address.toLowerCase()===r.toLowerCase());if(a)return{symbol:o.symbol.toUpperCase(),decimals:a.decimals}}return{symbol:r,decimals:void 0}}function Be(r,i){let n=i[r];return(n==null?void 0:n.displayName)??(n==null?void 0:n.display_name)??r}function Me(r,i){return r.chains.filter(n=>n.can_be_relay_deposit_source===!0).map(n=>{let o=i.chains[n.caip2];return o?{caip2:n.caip2,displayName:o.displayName,iconUrl:o.iconUrl,vmType:o.vmType,currencyAddress:n.address,currencyDecimals:n.decimals}:null}).filter(n=>n!==null)}function We(r,i){if(!r.chains[i.destinationChain])return`Unsupported destination chain: "${i.destinationChain}". Check that the chain is in CAIP-2 format (e.g. "eip155:8453") and is supported for deposit addresses.`;let n=i.destinationCurrency.toLowerCase();return r.currencies.some(o=>o.chains.some(a=>a.caip2===i.destinationChain&&a.address.toLowerCase()===n))?null:`Unsupported destination currency "${i.destinationCurrency}" on chain "${i.destinationChain}". Check that this token address is supported on the specified chain.`}let ne=new Set(["ROUTE_UNAVAILABLE","UNEXPECTED_STATE","TIMEOUT_WAITING_FOR_NEXT_ORDER","TIMEOUT_ORDER_COMPLETION","DEPOSIT_FAILED","DEPOSIT_REFUNDED","USER_EXITED","AMOUNT_TOO_LOW","INSUFFICIENT_LIQUIDITY","UNSUPPORTED_CHAIN","UNSUPPORTED_CURRENCY","UNSUPPORTED_ROUTE","NO_SWAP_ROUTES_FOUND","NO_INTERNAL_SWAP_ROUTES_FOUND","NO_QUOTES","SANCTIONED_WALLET_ADDRESS","REFUND_WALLET_CREATION_FAILED","DEPOSIT_ADDRESSES_NOT_ENABLED","NOT_AUTHENTICATED"]);function ie(r){return ne.has(r)}function He(r){return ie(r)?r:"UNKNOWN_ERROR"}const Ke=({trackingUrl:r,onViewBlockExplorer:i,onClose:n})=>{let o=r&&i?()=>{i(),window.open(r,"_blank","noopener,noreferrer")}:void 0;return e.jsx(U,{icon:Q,iconVariant:"subtle",title:"Transfer in progress",subtitle:"Your deposit was received and the transfer is now processing.",showClose:!0,onClose:n,secondaryCta:o?{label:"View on block explorer ↗",onClick:o}:void 0,watermark:!1,children:e.jsxs(W,{children:[e.jsxs(v,{children:[e.jsx(b,{$status:"done",children:e.jsx(_,{size:14,color:"var(--privy-color-icon-success)",strokeWidth:2})}),e.jsx(j,{children:"Deposit received"})]}),e.jsx(w,{}),e.jsxs(v,{children:[e.jsx(b,{$status:"active",children:e.jsx(oe,{})}),e.jsx(j,{children:"Bridging"})]}),e.jsx(w,{}),e.jsxs(v,{children:[e.jsx(b,{$status:"pending"}),e.jsx(j,{children:"Funds arrived"})]})]})})};let oe=t.span`
  width: 0.75rem;
  height: 0.75rem;
  border: 2px solid var(--privy-color-foreground-3);
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;function te({address:r,onClick:i}){let[n,o]=u.useState(!1);return e.jsx(e.Fragment,{children:n?e.jsx(se,{onClick:()=>o(!1),style:{marginTop:"1.5rem"},children:e.jsx(V,{url:r,size:312,hideLogo:!0})}):e.jsxs(ae,{title:"Click to copy address",onClick:i,style:{marginTop:"1.5rem"},children:[e.jsxs(le,{children:[e.jsx(de,{children:"Deposit address"}),e.jsx(ce,{children:r})]}),e.jsx(me,{children:e.jsx(ue,{type:"button",onClick:a=>{a.stopPropagation(),o(!0)},children:e.jsx(Z,{size:16,color:"var(--privy-color-icon-muted)"})})})]})})}let se=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
`,ae=t.div`
  display: flex;
  border-radius: var(--privy-border-radius-md);
  background: var(--privy-color-background-clicked);
  padding: 1rem;
  cursor: pointer;
  gap: 0.5rem;
`,le=t.div`
  flex: 1;
  min-width: 0;
  text-align: left;
`,de=t.div`
  font-size: 0.75rem;
  color: var(--privy-color-icon-muted);
  line-height: 1rem;
  margin-bottom: 0.25rem;
`,ce=t.div`
  word-break: break-all;
  font-size: 0.875rem;
  font-family: ui-monospace, monospace;
  font-weight: 500;
  line-height: 1.375rem;
  color: var(--privy-color-foreground);
`,me=t.div`
  width: 1.5rem;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  padding-top: 0.25rem;
`,ue=t.button`
  && {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5rem;
    height: 1.5rem;
    border: none;
    background: transparent;
    cursor: pointer;
    outline: none;
    box-shadow: none;
    border-radius: var(--privy-border-radius-xs);

    &:hover {
      background: var(--privy-color-background);
    }

    &:focus,
    &:focus-visible {
      outline: none;
      box-shadow: none;
    }
  }
`,N=r=>/^0x/i.test(r)||r.length>16;function pe({quote:r,selectedCurrency:i,selectedChain:n,destinationSymbol:o,destinationChainName:a,destinationAsset:s}){let[p,h]=u.useState(!1),l=i.symbol.toUpperCase(),d=n.displayName,c=u.useRef(null);return e.jsxs(he,{children:[e.jsxs(fe,{onClick:u.useCallback(()=>{let m=document.getElementById("privy-modal-content");m&&(c.current&&clearTimeout(c.current),m.style.transition="none",c.current=setTimeout(()=>{m.style.transition="",c.current=null},160)),h(f=>!f)},[]),children:[e.jsxs(ge,{children:[i.logoURI&&e.jsx(H,{src:i.logoURI,alt:l,style:{width:"2rem",height:"2rem"}}),n.iconUrl&&e.jsx(xe,{src:n.iconUrl,alt:d})]}),e.jsxs(ye,{children:[e.jsx(ve,{children:"You send"}),e.jsxs(be,{children:[l," on ",d]})]}),e.jsx(je,{children:e.jsx(p?X:G,{size:16})})]}),e.jsx(ke,{$expanded:p,children:e.jsx(Ne,{children:e.jsxs(Ce,{children:[r.indicative_rate&&e.jsxs(g,{children:[e.jsx(x,{children:"Conversion rate"}),e.jsxs(y,{style:{display:"flex",alignItems:"center",gap:"0.25rem"},children:[re(r.indicative_rate,l,o.toUpperCase()),e.jsx(Ue,{content:"Estimated rate based on current market conditions. Final execution price may vary depending on transfer size and routing."})]})]}),e.jsxs(g,{children:[e.jsx(x,{children:"Receive"}),e.jsxs(y,{children:[o&&!N(o)?o.toUpperCase():N(s)?E(s):s.toUpperCase(),a?` on ${a}`:""]})]}),r.slippage_bps!=null&&e.jsxs(g,{children:[e.jsx(x,{children:"Max slippage"}),e.jsxs(y,{children:[(r.slippage_bps/100).toFixed(1),"%"]})]}),r.refund_address&&e.jsxs(g,{children:[e.jsx(x,{children:"Refund address"}),e.jsx(y,{children:e.jsx(Y,{value:r.refund_address,iconOnly:!0,iconSize:11,children:E(r.refund_address,4,4)})})]})]})})}),e.jsxs(Ee,{children:[e.jsx(J,{size:16,color:"var(--privy-color-icon-muted)",style:{flexShrink:0}}),e.jsxs(we,{children:["Only send ",e.jsx("strong",{children:l})," on ",e.jsx("strong",{children:d}),". Other assets may be lost."]})]})]})}let he=t.div`
  border-radius: var(--privy-border-radius-md);
  border: 1px solid var(--privy-color-foreground-4);
  overflow: hidden;
`,fe=t.button`
  && {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
    background: transparent;
    border: none;
    cursor: pointer;
    color: var(--privy-color-foreground);
    outline: none;
    box-shadow: none;

    &:focus,
    &:focus-visible {
      outline: none;
      box-shadow: none;
    }
  }
`,ge=t.span`
  position: relative;
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
`,xe=t(K)`
  && {
    position: absolute;
    top: -0.125rem;
    right: -0.25rem;
    width: 0.75rem;
    height: 0.75rem;
    box-sizing: content-box;
    border: 1.5px solid var(--privy-color-background);
    background-color: var(--privy-color-background);
  }
`,ye=t.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,ve=t.span`
  font-size: 0.75rem;
  color: var(--privy-color-foreground-3);
  line-height: 1rem;
`,be=t.span`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
`,je=t.span`
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: var(--privy-border-radius-full);
  background-color: var(--privy-color-background-clicked);
  color: var(--privy-color-foreground-3);
`,Ce=t.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem 0.75rem;

  & > * {
    padding: 0.5rem 0;
    border-bottom: 1px solid var(--privy-color-foreground-4);
  }

  & > *:last-child {
    border-bottom: none;
  }
`,Ee=t.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 0.75rem 0.75rem;
  padding: 0.625rem 0.75rem;
  border-radius: var(--privy-border-radius-sm);
  background: var(--privy-color-background-2);
`,we=t.span`
  font-size: 0.8125rem;
  line-height: 1.25rem;
  color: var(--privy-color-icon-muted);
  text-align: left;
`,ke=t.div`
  display: grid;
  grid-template-rows: ${({$expanded:r})=>r?"1fr":"0fr"};
  transition: grid-template-rows 150ms ease-out;
`,Ne=t.div`
  overflow: hidden;
`;function Ue({content:r}){let[i,n]=u.useState(!1),{refs:o,floatingStyles:a,context:s}=T({open:i,onOpenChange:n,placement:"top",whileElementsMounted:L,middleware:[$(6),B(),M({padding:8})]}),p=S(s,{move:!1,handleClose:D()}),h=I(s),{getReferenceProps:l,getFloatingProps:d}=F([p,h,O(s),R(s),A(s,{role:"tooltip"})]),{isMounted:c,styles:m}=P(s,{duration:150});return e.jsxs(e.Fragment,{children:[e.jsx("button",{ref:o.setReference,type:"button","aria-label":"More information about conversion rate",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",padding:0,border:"none",background:"none",color:"var(--privy-color-icon-muted)",cursor:"pointer"},...l(),children:e.jsx(ee,{size:14})}),c&&e.jsx(z,{root:document.getElementById("privy-modal-content")??void 0,children:e.jsx(_e,{ref:o.setFloating,style:{...a,...m},...d(),children:r})})]})}let _e=t.div`
  max-width: 13rem;
  padding: 0.5rem 0.625rem;
  border-radius: var(--privy-border-radius-sm, 0.375rem);
  background: var(--privy-color-foreground);
  color: var(--privy-color-background);
  font-size: 0.6875rem;
  line-height: 1rem;
  font-weight: 400;
  text-align: left;
  z-index: 10;
`;const qe=({quote:r,selectedCurrency:i,selectedChain:n,destinationSymbol:o,destinationChainName:a,destinationAsset:s,onBack:p,onClose:h})=>{var C;let[l,d]=u.useState(!1),c=((C=i==null?void 0:i.symbol)==null?void 0:C.toUpperCase())??"funds",m=(n==null?void 0:n.displayName)??"",f=async()=>{l||(await navigator.clipboard.writeText(r.deposit_address),d(!0),setTimeout(()=>d(!1),2e3))};return e.jsxs(U,{title:`Send ${c}${m?` on ${m}`:""}`,subtitle:"Send funds to the address below. Conversion and routing handled by Relay.",showBack:!0,onBack:p,showClose:!0,onClose:h,watermark:!1,children:[e.jsx(pe,{quote:r,selectedCurrency:i,selectedChain:n,destinationSymbol:o,destinationChainName:a,destinationAsset:s}),e.jsx(te,{address:r.deposit_address,onClick:f}),e.jsx(q,{style:{marginTop:"1rem",marginBottom:"0.5rem",...l?{backgroundColor:"var(--privy-color-icon-success)",borderColor:"var(--privy-color-icon-success)"}:{}},onClick:f,children:l?e.jsxs(e.Fragment,{children:["Copied ",e.jsx(_,{size:16,style:{marginLeft:"0.25rem"}})]}):"Copy address"}),e.jsx(Te,{children:"Routing and bridging are handled by Relay. Privy does not control execution timing, liquidity, or transaction outcomes."})]})};let Te=t.p`
  && {
    margin: 0.5rem 0 0;
    font-size: 0.6875rem;
    line-height: 1.125rem;
    color: var(--privy-color-icon-muted);
    text-align: center;
  }
`;export{We as G,Be as H,Me as K,ze as Q,qe as T,Le as X,$e as Y,He as e,Ke as r};
