import{r as y,j as t}from"./vendor-react-0C64ImZ_.js";import{dj as P,db as z,fh as V,eQ as E,fv as R,dz as Y,dh as x}from"./privyHost-BqlTwloN.js";import{h as M}from"./CopyableText-CQapvaMr-CgCFA0PM.js";import{n as C}from"./ScreenLayout-CyLnlt7g-CpyQyvrJ.js";import{t as K}from"./InfoBanner-Cb3p1z12-BqoxW5_z.js";import{w as O,c as X,p as q}from"./SelectSourceAsset-_voBED1H-CknyhEmQ.js";import{ax as H,aj as N,a3 as Q,a9 as U}from"./vendor-icons-BG7jN9os.js";import"./index-Cw-O3_Qi.js";import"./vendor-ethers-8GK8ucU1.js";import"./preload-helper-C1FmrZbK.js";import"./ModalFooter-DDm8WjC0-CIXCb_tc.js";import"./Screen-BWBDKsup-BPy_fI-g.js";import"./index-CWARkn2w-BC8WUhMY.js";const G=e=>{try{return e.location.origin}catch{return}},J=({data:e,onClose:o})=>t.jsx(C,{showClose:!0,onClose:o,title:"Initiate bank transfer",subtitle:"Use the details below to complete a bank transfer from your bank.",primaryCta:{label:"Done",onClick:o},watermark:!1,footerText:"Exchange rates and fees are set when you authorize and determine the amount you receive. You'll see the applicable rates and fees for your transaction separately",children:t.jsx(Z,{children:(R[e.deposit_instructions.asset]||[]).map(([l,h],g)=>{let m=e.deposit_instructions[l];if(!m||Array.isArray(m))return null;let d=l==="asset"?m.toUpperCase():m,i=d.length>100?`${d.slice(0,9)}...${d.slice(-9)}`:d;return t.jsxs(ee,{children:[t.jsx(te,{children:h}),t.jsx(M,{value:d,includeChildren:Y,children:t.jsx(se,{children:i})})]},g)})})});let Z=x.ol`
  border-color: var(--privy-color-border-default);
  border-width: 1px;
  border-radius: var(--privy-border-radius-mdlg);
  border-style: solid;
  display: flex;
  flex-direction: column;

  && {
    padding: 0 1rem;
  }
`,ee=x.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;

  &:not(:first-of-type) {
    border-top: 1px solid var(--privy-color-border-default);
  }

  & > {
    :nth-child(1) {
      flex-basis: 30%;
    }

    :nth-child(2) {
      flex-basis: 60%;
    }
  }
`,te=x.span`
  color: var(--privy-color-foreground);
  font-kerning: none;
  font-variant-numeric: lining-nums proportional-nums;
  font-feature-settings: 'calt' off;

  /* text-xs/font-regular */
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem; /* 150% */

  text-align: left;
  flex-shrink: 0;
`,se=x.span`
  color: var(--privy-color-foreground);
  font-kerning: none;
  font-feature-settings: 'calt' off;

  /* text-sm/font-medium */
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem; /* 157.143% */

  text-align: right;
  word-break: break-all;
`;const re=({onClose:e})=>t.jsx(C,{showClose:!0,onClose:e,icon:U,iconVariant:"error",title:"Something went wrong",subtitle:"We couldn't complete account setup. This isn't caused by anything you did.",primaryCta:{label:"Close",onClick:e},watermark:!0}),oe=({onClose:e,reason:o})=>{let l=o?o.charAt(0).toLowerCase()+o.slice(1):void 0;return t.jsx(C,{showClose:!0,onClose:e,icon:U,iconVariant:"error",title:"Identity verification failed",subtitle:l?`We can't complete identity verification because ${l}. Please try again or contact support for assistance.`:"We couldn't verify your identity. Please try again or contact support for assistance.",primaryCta:{label:"Close",onClick:e},watermark:!0})},ae=({onClose:e,email:o})=>t.jsx(C,{showClose:!0,onClose:e,icon:N,title:"Identity verification in progress",subtitle:"We're waiting for Persona to approve your identity verification. This usually takes a few minutes, but may take up to 24 hours.",primaryCta:{label:"Done",onClick:e},watermark:!0,children:t.jsxs(K,{theme:"light",children:["You'll receive an email at ",o," once approved with instructions for completing your deposit."]})}),ne=({onClose:e,onAcceptTerms:o,isLoading:l})=>t.jsx(C,{showClose:!0,onClose:e,icon:H,title:"Verify your identity to continue",subtitle:"Finish verification with Persona — it takes just a few minutes and requires a government ID.",helpText:t.jsxs(t.Fragment,{children:[`This app uses Bridge to securely connect accounts and move funds. By clicking "Accept," you agree to Bridge's`," ",t.jsx("a",{href:"https://www.bridge.xyz/legal",target:"_blank",rel:"noopener noreferrer",children:"Terms of Service"})," ","and"," ",t.jsx("a",{href:"https://www.bridge.xyz/legal/row-privacy-policy/bridge-building-limited",target:"_blank",rel:"noopener noreferrer",children:"Privacy Policy"}),"."]}),primaryCta:{label:"Accept and continue",onClick:o,loading:l},watermark:!0}),ie=({onClose:e})=>t.jsx(C,{showClose:!0,onClose:e,icon:Q,iconVariant:"success",title:"Identity verified successfully",subtitle:"We've successfully verified your identity. Now initiate a bank transfer to view instructions.",primaryCta:{label:"Initiate bank transfer",onClick:()=>{},loading:!0},watermark:!0}),le=({opts:e,onClose:o,onBack:l,onEditSourceAsset:h,onSelectAmount:g,isLoading:m})=>t.jsxs(C,{showClose:!0,onClose:o,showBack:!!l,onBack:l,headerTitle:`Buy ${e.destination.asset.toLocaleUpperCase()}`,primaryCta:{label:"Continue",onClick:g,loading:m},watermark:!0,children:[t.jsx(X,{currency:e.source.selectedAsset,inputMode:"decimal",autoFocus:!0}),t.jsx(q,{selectedAsset:e.source.selectedAsset,onEditSourceAsset:h})]}),ce=({onClose:e,onBack:o,onAcceptTerms:l,onSelectAmount:h,onSelectSource:g,onEditSourceAsset:m,opts:d,state:i,email:v,isLoading:n})=>i.status==="select-amount"?t.jsx(le,{onClose:e,onBack:o,onSelectAmount:h,onEditSourceAsset:m,opts:d,isLoading:n}):i.status==="select-source-asset"?t.jsx(O,{onSelectSource:g,opts:d,isLoading:n}):i.status==="kyc-prompt"?t.jsx(ne,{onClose:e,onAcceptTerms:l,opts:d,isLoading:n}):i.status==="kyc-incomplete"?t.jsx(ae,{onClose:e,email:v}):i.status==="kyc-success"?t.jsx(ie,{onClose:e}):i.status==="kyc-error"?t.jsx(oe,{onClose:e,reason:i.reason}):i.status==="account-details"?t.jsx(J,{onClose:e,data:i.data}):i.status==="create-customer-error"||i.status==="get-customer-error"?t.jsx(re,{onClose:e}):null,xe={component:()=>{let{user:e}=P(),o=z().data;if(!(o!=null&&o.FundWithBankDepositScreen))throw Error("Missing data");let{onSuccess:l,onFailure:h,onBack:g,opts:m,createOrUpdateCustomer:d,getCustomer:i,getOrCreateVirtualAccount:v}=o.FundWithBankDepositScreen,[n,S]=y.useState(m),[k,r]=y.useState({status:"select-amount"}),[j,c]=y.useState(null),[T,a]=y.useState(!1),w=y.useRef(null),_=y.useCallback(async()=>{var b,f;let s;a(!0),c(null);try{s=await i({kycRedirectUrl:window.location.origin})}catch(u){if(!u||typeof u!="object"||!("status"in u)||u.status!==404)return r({status:"get-customer-error"}),c(u),void a(!1)}if(!s)try{s=await d({hasAcceptedTerms:!1,kycRedirectUrl:window.location.origin})}catch(u){return r({status:"create-customer-error"}),c(u),void a(!1)}if(!s)return r({status:"create-customer-error"}),c(Error("Unable to create customer")),void a(!1);if(s.status==="not_started"&&s.kyc_url)return r({status:"kyc-prompt",kycUrl:s.kyc_url}),void a(!1);if(s.status==="not_started")return r({status:"get-customer-error"}),c(Error("Unexpected user state")),void a(!1);if(s.status==="rejected")return r({status:"kyc-error",reason:(f=(b=s.rejection_reasons)==null?void 0:b[0])==null?void 0:f.reason}),c(Error("User KYC rejected.")),void a(!1);if(s.status==="incomplete")return r({status:"kyc-incomplete"}),void a(!1);if(s.status!=="active")return r({status:"get-customer-error"}),c(Error("Unexpected user state")),void a(!1);s.status;try{let u=await v({destination:n.destination,provider:n.provider,source:{asset:n.source.selectedAsset}});r({status:"account-details",data:u})}catch(u){return r({status:"create-customer-error"}),c(u),void a(!1)}},[n]),L=y.useCallback(async()=>{var u,B;if(c(null),a(!0),k.status!=="kyc-prompt")return c(Error("Unexpected state")),void a(!1);let s=V({location:k.kycUrl});if(await d({hasAcceptedTerms:!0}),!s)return c(Error("Unable to begin kyc flow.")),a(!1),void r({status:"create-customer-error"});w.current=new AbortController;let b=await(async(p,D)=>{let A=await E({operation:async()=>({done:G(p)===window.location.origin,closed:p.closed}),until:({done:F,closed:I})=>F||I,delay:0,interval:500,attempts:360,signal:D});return A.status==="aborted"?(p.close(),{status:"aborted"}):A.status==="max_attempts"?{status:"timeout"}:A.result.done?(p.close(),{status:"redirected"}):{status:"closed"}})(s,w.current.signal);if(b.status==="aborted")return;if(b.status==="closed")return void a(!1);b.status;let f=await E({operation:()=>i({}),until:p=>p.status==="active"||p.status==="rejected",delay:0,interval:2e3,attempts:60,signal:w.current.signal});if(f.status!=="aborted"){if(f.status==="max_attempts")return r({status:"kyc-incomplete"}),void a(!1);if(f.status,f.result.status==="rejected")return r({status:"kyc-error",reason:(B=(u=f.result.rejection_reasons)==null?void 0:u[0])==null?void 0:B.reason}),c(Error("User KYC rejected.")),void a(!1);if(f.result.status!=="active")return r({status:"kyc-incomplete"}),void a(!1);s.closed||s.close(),f.result.status;try{r({status:"kyc-success"});let p=await v({destination:n.destination,provider:n.provider,source:{asset:n.source.selectedAsset}});r({status:"account-details",data:p})}catch(p){r({status:"create-customer-error"}),c(p)}finally{a(!1)}}},[r,c,a,d,v,k,n,w]),W=y.useCallback(s=>{r({status:"select-amount"}),S({...n,source:{...n.source,selectedAsset:s}})},[r,S]),$=y.useCallback(()=>{r({status:"select-source-asset"})},[r]);return t.jsx(ce,{onClose:y.useCallback(async()=>{var s;(s=w.current)==null||s.abort(),!n.showBackButton||k.status!=="select-amount"&&k.status!=="select-source-asset"?j?h(j):await l():h(Error("User cancelled funding"))},[j,w,h,l,n.showBackButton,k.status]),onBack:g,opts:n,state:k,isLoading:T,email:e.email.address,onAcceptTerms:L,onSelectAmount:_,onSelectSource:W,onEditSourceAsset:$})}};export{xe as FundWithBankDepositScreen,xe as default};
