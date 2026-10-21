import{r as a,j as e,a2 as T}from"./vendor-react-DwYkqiWc.js";import{ba as _,b2 as E,b0 as I,dQ as F,dR as U,cP as W,b6 as h,bF as N}from"./privyHost-CH6knk-3.js";import{b as O}from"./ModalFooter-DDm8WjC0-C8sfrXrU.js";import{l as V}from"./Layouts-BMRfo5hw-pKQ_Kvj1.js";import{g as B,h as H,y as z,w as D,k as K}from"./shared-Dc_KFM2--9NiroCw4.js";import{w as s}from"./Screen-BWBDKsup-BAbhf7CY.js";import"./index-CB7aWwWj.js";import"./vendor-ethers-CXIjk7po.js";import"./preload-helper-C1FmrZbK.js";import"./vendor-icons-CtVdYIJS.js";import"./stringify-CWCc6FId.js";import"./formatUnits-Bw92Dgu5.js";import"./index-BTMnaXL8.js";import"./hashTypedData-0xOt8d5G.js";import"./index-CWARkn2w-qsxC9WJ_.js";const de={component:()=>{let[o,m]=a.useState(!0),{authenticated:y,user:j}=_(),{walletProxy:i,closePrivyModal:v,createAnalyticsEvent:x,client:g}=E(),{navigate:k,data:C,onUserCloseViaDialogOrKeybindRef:A}=I(),[n,P]=a.useState(void 0),[f,d]=a.useState(""),[c,w]=a.useState(!1),{entropyId:p,entropyIdVerifier:R,onCompleteNavigateTo:b,onSuccess:u,onFailure:S}=C.recoverWallet,l=(r="User exited before their wallet could be recovered")=>{v({shouldCallAuthOnSuccess:!1}),S(typeof r=="string"?new W(r):r)};return A.current=l,a.useEffect(()=>{if(!y)return l("User must be authenticated and have a Privy wallet before it can be recovered")},[y]),e.jsxs(s,{children:[e.jsx(s.Header,{icon:T,title:"Enter your password",subtitle:"Please provision your account on this new device. To continue, enter your recovery password.",showClose:!0,onClose:l}),e.jsx(s.Body,{children:e.jsx(Q,{children:e.jsxs("div",{children:[e.jsxs(B,{children:[e.jsx(H,{type:o?"password":"text",onChange:r=>(t=>{t&&P(t)})(r.target.value),disabled:c,style:{paddingRight:"2.3rem"}}),e.jsx(z,{style:{right:"0.75rem"},children:o?e.jsx(D,{onClick:()=>m(!1)}):e.jsx(K,{onClick:()=>m(!0)})})]}),!!f&&e.jsx(Y,{children:f})]})})}),e.jsxs(s.Footer,{children:[e.jsx(s.HelpText,{children:e.jsxs(V,{children:[e.jsx("h4",{children:"Why is this necessary?"}),e.jsx("p",{children:"You previously set a password for this wallet. This helps ensure only you can access it"})]})}),e.jsx(s.Actions,{children:e.jsx(q,{loading:c||!i,disabled:!n,onClick:async()=>{w(!0);let r=await g.getAccessToken(),t=F(j,p);if(!r||!t||n===null)return l("User must be authenticated and have a Privy wallet before it can be recovered");try{x({eventName:"embedded_wallet_recovery_started",payload:{walletAddress:t.address}}),await(i==null?void 0:i.recover({accessToken:r,entropyId:p,entropyIdVerifier:R,recoveryPassword:n})),d(""),b?k(b):v({shouldCallAuthOnSuccess:!1}),u==null||u(t),x({eventName:"embedded_wallet_recovery_completed",payload:{walletAddress:t.address}})}catch($){U($)?d("Invalid recovery password, please try again."):d("An error has occurred, please try again.")}finally{w(!1)}},$hideAnimations:!p&&c,children:"Recover your account"})}),e.jsx(s.Watermark,{})]})]})}};let Q=h.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Y=h.div`
  line-height: 20px;
  height: 20px;
  font-size: 13px;
  color: var(--privy-color-error);
  text-align: left;
  margin-top: 0.5rem;
`,q=h(O)`
  ${({$hideAnimations:o})=>o&&N`
      && {
        /* Remove animations because the recoverWallet task on the iframe partially
           blocks the renderer, so the animation stutters and doesn't look good */
        transition: none;
      }
    `}
`;export{de as PasswordRecoveryScreen,de as default};
