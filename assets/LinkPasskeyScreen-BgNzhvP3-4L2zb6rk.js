import{r as u,j as e}from"./vendor-react-0C64ImZ_.js";import{dh as n,dj as A,dT as I,dd as L,db as N,dq as b,dr as g,dR as P,dU as S}from"./privyHost-BqlTwloN.js";import{a as B,c as v}from"./TodoList-DnyULl18-DiuReGS_.js";import{n as j}from"./ScreenLayout-CyLnlt7g-CpyQyvrJ.js";import{a5 as U,a6 as C,a7 as z}from"./vendor-icons-BG7jN9os.js";import"./index-Cw-O3_Qi.js";import"./vendor-ethers-8GK8ucU1.js";import"./preload-helper-C1FmrZbK.js";import"./ModalFooter-DDm8WjC0-CIXCb_tc.js";import"./Screen-BWBDKsup-BPy_fI-g.js";import"./index-CWARkn2w-BC8WUhMY.js";const T=({passkeys:i,name:d,isLoading:m,errorReason:f,success:o,expanded:a,onLinkPasskey:y,onUnlinkPasskey:t,onExpand:r,onBack:s,onClose:l})=>o?e.jsx(j,{title:"Passkeys updated",icon:U,iconVariant:"success",primaryCta:{label:"Done",onClick:l},onClose:l,watermark:!0}):a?e.jsx(j,{icon:C,title:"Your passkeys",onBack:s,onClose:l,watermark:!0,children:e.jsx(E,{passkeys:i,expanded:a,onUnlink:t,onExpand:r})}):e.jsxs(j,{icon:C,title:"Set up passkey verification",subtitle:"Verify with passkey",primaryCta:{label:"Add new passkey",onClick:y,loading:m},onClose:l,watermark:!0,helpText:f||void 0,children:[i.length===0?e.jsx(M,{}):e.jsx(W,{children:e.jsx(E,{passkeys:i,expanded:a,onUnlink:t,onExpand:r})}),d?e.jsxs($,{children:[e.jsx(D,{children:"New Passkey Name"}),e.jsx(_,{children:d})]}):null]});let W=n.div`
  margin-bottom: 0.75rem;
`,$=n.div`
  margin-top: 0.25rem;
`,D=n.div`
  color: var(--privy-color-foreground-2);
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1rem;
  margin-bottom: 0.25rem;
`,_=n.div`
  color: var(--privy-color-foreground);
  font-size: 0.875rem;
  line-height: 1.25rem;
`,E=({passkeys:i,expanded:d,onUnlink:m,onExpand:f})=>{let[o,a]=u.useState([]),y=d?i.length:2;return e.jsxs("div",{children:[e.jsx(F,{children:"Your passkeys"}),e.jsxs(R,{children:[i.slice(0,y).map(t=>{var s;return e.jsxs(K,{children:[e.jsxs("div",{children:[e.jsx(Y,{children:(r=t,r.authenticatorName?r.createdWithBrowser?`${r.authenticatorName} on ${r.createdWithBrowser}`:r.authenticatorName:r.createdWithBrowser?r.createdWithOs?`${r.createdWithBrowser} on ${r.createdWithOs}`:`${r.createdWithBrowser}`:"Unknown device")}),e.jsxs(q,{children:["Last used:"," ",((s=t.latestVerifiedAt??t.firstVerifiedAt)==null?void 0:s.toLocaleString())??"N/A"]})]}),e.jsx(H,{disabled:o.includes(t.credentialId),onClick:()=>(async l=>{a(c=>c.concat([l])),await m(l),a(c=>c.filter(x=>x!==l))})(t.credentialId),children:o.includes(t.credentialId)?e.jsx(S,{}):e.jsx(z,{size:16})})]},t.credentialId);var r}),i.length>2&&!d&&e.jsx(V,{onClick:f,children:"View all"})]})]})},M=()=>e.jsxs(B,{style:{color:"var(--privy-color-foreground)"},children:[e.jsx(v,{children:"Verify with Touch ID, Face ID, PIN, or hardware key"}),e.jsx(v,{children:"Takes seconds to set up and use"}),e.jsx(v,{children:"Use your passkey to verify transactions and login to your account"})]});const se={component:()=>{var w;let{user:i}=A(),{unlink:d}=I(),{linkWithPasskey:m,closePrivyModal:f}=L(),{data:o}=N(),a=i==null?void 0:i.linkedAccounts.filter(p=>p.type==="passkey"),[y,t]=u.useState(!1),[r,s]=u.useState(""),[l,c]=u.useState(!1),[x,k]=u.useState(!1);return u.useEffect(()=>{a.length===0&&k(!1)},[a.length]),e.jsx(T,{passkeys:a,name:(w=o==null?void 0:o.passkeyAuthModalData)==null?void 0:w.name,isLoading:y,errorReason:r,success:l,expanded:x,onLinkPasskey:()=>{var p;t(!0),m({name:(p=o==null?void 0:o.passkeyAuthModalData)==null?void 0:p.name}).then(()=>c(!0)).catch(h=>{if(h instanceof b){if(h.privyErrorCode===g.CANNOT_LINK_MORE_OF_TYPE)return void s("Cannot link more passkeys to account.");if(h.privyErrorCode===g.PASSKEY_NOT_ALLOWED)return void s("Passkey request timed out or rejected by user.")}s("Unknown error occurred.")}).finally(()=>{t(!1)})},onUnlinkPasskey:async p=>(t(!0),await d({credentialId:p}).then(()=>c(!0)).catch(h=>{h instanceof b&&h.privyErrorCode===g.MISSING_MFA_CREDENTIALS?s("Cannot unlink a passkey enrolled in MFA"):s("Unknown error occurred.")}).finally(()=>{t(!1)})),onExpand:()=>k(!0),onBack:()=>k(!1),onClose:()=>f()})}},le=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 90px;
  border-radius: 50%;
  svg + svg {
    margin-left: 12px;
  }
  > svg {
    z-index: 2;
    color: var(--privy-color-accent) !important;
    stroke: var(--privy-color-accent) !important;
    fill: var(--privy-color-accent) !important;
  }
`;let O=P`
  && {
    width: 100%;
    font-size: 0.875rem;
    line-height: 1rem;

    /* Tablet and Up */
    @media (min-width: 440px) {
      font-size: 14px;
    }

    display: flex;
    gap: 12px;
    justify-content: center;

    padding: 6px 8px;
    background-color: var(--privy-color-background);
    transition: background-color 200ms ease;
    color: var(--privy-color-accent) !important;

    :focus {
      outline: none;
      box-shadow: none;
    }
  }
`;const V=n.button`
  ${O}
`;let R=n.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0.8rem;
  padding: 0.5rem 0 0;
  flex-grow: 1;
  width: 100%;
`,F=n.div`
  line-height: 20px;
  height: 20px;
  font-size: 1em;
  font-weight: 450;
  display: flex;
  justify-content: flex-start;
  width: 100%;
`,Y=n.div`
  font-size: 1em;
  line-height: 1.3em;
  font-weight: 500;
  color: var(--privy-color-foreground-2);
  padding: 0.2em 0;
`,q=n.div`
  font-size: 0.875rem;
  line-height: 1rem;
  color: var(--privy-color-foreground-2);
  padding: 0.2em 0;
`,K=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em;
  gap: 10px;
  font-size: 0.875rem;
  line-height: 1rem;
  text-align: left;
  border-radius: 8px;
  border: 1px solid var(--privy-color-border-default) !important;
  width: 100%;
  height: 5em;
`,G=P`
  :focus,
  :hover,
  :active {
    outline: none;
  }
  display: flex;
  width: 2em;
  height: 2em;
  justify-content: center;
  align-items: center;
  svg {
    color: var(--privy-color-error);
  }
  svg:hover {
    color: var(--privy-color-foreground-3);
  }
`,H=n.button`
  ${G}
`;export{le as DoubleIconWrapper,V as LinkButton,se as LinkPasskeyScreen,T as LinkPasskeyView,se as default};
