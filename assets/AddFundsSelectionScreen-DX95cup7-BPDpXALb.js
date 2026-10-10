import{r as s,j as e}from"./vendor-react-0C64ImZ_.js";import{de as E,db as A,dc as k,df as L,dg as F,dh as p,di as G}from"./privyHost-BqlTwloN.js";import{n as O}from"./index-CWARkn2w-BC8WUhMY.js";import{h as _,t as R}from"./GooglePay-B53WnudL-D6HoH0cp.js";import{e as Y}from"./useAsyncValue-sCQ_EAT9-BbBOvACS.js";import{n as D}from"./styles-DVyDvTdj-DN72CB7U.js";import{i as w,l,s as a}from"./styles-CIiQisHF-C5yFRZhH.js";import{U as T,V as S,Y as B}from"./vendor-icons-BG7jN9os.js";import"./index-Cw-O3_Qi.js";import"./vendor-ethers-8GK8ucU1.js";import"./preload-helper-C1FmrZbK.js";import"./ScreenLayout-CyLnlt7g-CpyQyvrJ.js";import"./ModalFooter-DDm8WjC0-CIXCb_tc.js";import"./Screen-BWBDKsup-BPy_fI-g.js";const ee={component:()=>{let r=E(),{onUserCloseViaDialogOrKeybindRef:h}=A(),P=k(),i=s.useRef(!1),u=L(),y=Y(G),[v,b]=s.useState(!1),m=u?"APPLE_PAY":u===!1&&y?"GOOGLE_PAY":null,f=u===!0||u===!1&&y!==void 0,j=!(r!=null&&r.startFiat)||f||v;s.useEffect(()=>{let t=window.setTimeout(()=>b(!0),2e3);return()=>window.clearTimeout(t)},[]),s.useEffect(()=>{r&&(i.current=!1)},[r]);let C=s.useRef(null);s.useEffect(()=>{var t;r&&!r.error&&j&&C.current!==r&&(C.current=r,(t=r.recordRowsViewed)==null||t.call(r,{walletPay:r.startFiat?m:void 0,walletPayTimedOut:r.startFiat?!f:void 0}))},[j,r,m,f]);let n=s.useCallback(async()=>{!i.current&&r&&(i.current=!0,F(),await r.onCancel())},[r]);if(s.useEffect(()=>(h.current=n,()=>{h.current===n&&(h.current=null)}),[n,h]),!r)return null;if(r.error)return e.jsx(w,{title:"Unable to add funds",subtitle:r.error,showClose:!0,onClose:n,primaryCta:{label:"Close",onClick:n}});let x=async t=>{var g;i.current||(i.current=!0,await((g=r.startFiat)==null?void 0:g.call(r,t)))};return e.jsx(w,{title:"Pay with",subtitle:"Debit cards typically have higher success rates than credit cards, even with Apple Pay or Google Pay.",showClose:!0,onClose:n,children:j?e.jsxs(D,{style:{marginTop:"1rem"},$colorScheme:P.appearance.palette.colorScheme,children:[r.startFiat&&e.jsxs(l,{onClick:()=>x("CREDIT_DEBIT_CARD"),children:[e.jsx(o,{children:e.jsx(T,{})}),e.jsxs(c,{children:[e.jsx(a,{children:"Debit or credit card"}),e.jsx(d,{children:"Less than 10 minutes"})]})]}),r.startFiat&&m==="APPLE_PAY"&&e.jsxs(l,{onClick:()=>x("APPLE_PAY"),children:[e.jsx(o,{children:e.jsx(_,{width:18,height:18})}),e.jsxs(c,{children:[e.jsx(a,{children:"Apple Pay"}),e.jsx(d,{children:"Less than 10 minutes"})]})]}),r.startFiat&&m==="GOOGLE_PAY"&&e.jsxs(l,{onClick:()=>x("GOOGLE_PAY"),children:[e.jsx(o,{children:e.jsx(R,{width:18,height:18})}),e.jsxs(c,{children:[e.jsx(a,{children:"Google Pay"}),e.jsx(d,{children:"Less than 10 minutes"})]})]}),r.startFiat&&e.jsxs(l,{onClick:()=>x("BANK"),children:[e.jsx(o,{children:e.jsx(S,{})}),e.jsxs(c,{children:[e.jsx(a,{children:"Bank account"}),e.jsx(d,{children:"1–2 days"})]})]}),r.startCrypto&&e.jsxs(l,{onClick:async()=>{var t;i.current||(i.current=!0,await((t=r.startCrypto)==null?void 0:t.call(r)))},children:[e.jsx(o,{children:e.jsx(B,{})}),e.jsxs(c,{children:[e.jsx(a,{children:"Crypto wallet or exchange"}),e.jsx(d,{children:"Instant"})]})]})]}):e.jsx(I,{children:e.jsx(O,{size:"50px"})})})}};let I=p.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  min-height: 8rem;
`,o=p.span`
  width: 2rem;
  height: 2rem;
  border-radius: var(--privy-border-radius-full);
  background-color: var(--privy-color-background-2);
  color: var(--privy-color-icon-muted);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;

  svg {
    width: 1.125rem;
    height: 1.125rem;
  }
`,c=p.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,d=p.span`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: var(--privy-color-foreground-3);
`;export{ee as AddFundsSelectionScreen,ee as default};
