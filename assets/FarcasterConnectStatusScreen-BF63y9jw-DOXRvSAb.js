import{r as l,j as t}from"./vendor-react-0C64ImZ_.js";import{dj as X,db as G,dc as Z,dd as ee,dr as u,dY as re,dy as F,dz as H,f6 as te,dl as ae,dh as s}from"./privyHost-BqlTwloN.js";import{n as oe}from"./OpenLink-CUpJ1mOr-C-cnSg9C.js";import{x as ie}from"./QrCode-Ddiv3lt7-C39twfqF.js";import{f as se}from"./ModalFooter-DDm8WjC0-CIXCb_tc.js";import{r as ne}from"./LabelXs-oqZNqbm_-gVBz-jqE.js";import{a as le}from"./shouldProceedtoEmbeddedWalletCreationFlow-u-KXjlTz-D3awWL_m.js";import{n as ce}from"./ScreenLayout-CyLnlt7g-CpyQyvrJ.js";import{l as _}from"./farcaster-DPlSjvF5-THwmXJyM.js";import{a3 as de,a4 as ue}from"./vendor-icons-BG7jN9os.js";import"./index-Cw-O3_Qi.js";import"./vendor-ethers-8GK8ucU1.js";import"./preload-helper-C1FmrZbK.js";import"./dijkstra-D_NXgYpA.js";import"./Screen-BWBDKsup-BPy_fI-g.js";import"./index-CWARkn2w-BC8WUhMY.js";let pe=s.div`
  width: 100%;
`,me=s.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.75rem;
  height: 56px;
  background: ${r=>r.$disabled?"var(--privy-color-background-2)":"var(--privy-color-background)"};
  border: 1px solid var(--privy-color-foreground-4);
  border-radius: var(--privy-border-radius-md);

  &:hover {
    border-color: ${r=>r.$disabled?"var(--privy-color-foreground-4)":"var(--privy-color-foreground-3)"};
  }
`,he=s.div`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
`,Q=s.span`
  display: block;
  font-size: 16px;
  line-height: 24px;
  color: ${r=>r.$disabled?"var(--privy-color-foreground-2)":"var(--privy-color-foreground)"};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  /* Single-line truncation: as a flex item this would otherwise be floored at its
     min-content width, so min-width: 0 lets it shrink and the ellipsis land at the
     container edge. */
  min-width: 0;

  @media (min-width: 441px) {
    font-size: 14px;
    line-height: 20px;
  }
`,fe=s(Q)`
  color: var(--privy-color-foreground-3);
  font-style: italic;
`,ge=s(ne)`
  margin-bottom: 0.5rem;
`,ve=s(se)`
  && {
    gap: 0.375rem;
    font-size: 14px;
    flex-shrink: 0;
  }
`;const xe=({value:r,title:p,placeholder:c,className:a,showCopyButton:d=!0,truncate:i,maxLength:m=40,disabled:h=!1})=>{let[n,x]=l.useState(!1),S=i&&r?((o,E,f)=>{if((o=o.startsWith("https://")?o.slice(8):o).length<=f)return o;if(E==="middle"){let y=Math.ceil(f/2)-2,C=Math.floor(f/2)-1;return`${o.slice(0,y)}...${o.slice(-C)}`}return`${o.slice(0,f-3)}...`})(r,i,m):r;return l.useEffect(()=>{if(n){let o=setTimeout(()=>x(!1),3e3);return()=>clearTimeout(o)}},[n]),t.jsxs(pe,{className:a,children:[p&&t.jsx(ge,{children:p}),t.jsxs(me,{$disabled:h,children:[t.jsx(he,{children:r?t.jsx(Q,{$disabled:h,title:r,children:S}):t.jsx(fe,{$disabled:h,children:c||"No value"})}),d&&r&&t.jsx(ve,{onClick:function(o){o.stopPropagation(),navigator.clipboard.writeText(r).then(()=>x(!0)).catch(console.error)},size:"sm",children:t.jsxs(t.Fragment,n?{children:["Copied",t.jsx(de,{size:14})]}:{children:["Copy",t.jsx(ue,{size:14})]})})]})]})},ye=({connectUri:r,loading:p,success:c,errorMessage:a,onBack:d,onClose:i,onOpenFarcaster:m})=>t.jsx(ce,H||p?te?{title:a?a.message:"Sign in with Farcaster",subtitle:a?a.detail:"To sign in with Farcaster, please open the Farcaster app.",icon:_,iconVariant:"loading",iconLoadingStatus:{success:c,fail:!!a},primaryCta:r&&m?{label:"Open Farcaster app",onClick:m}:void 0,onBack:d,onClose:i,watermark:!0}:{title:a?a.message:"Signing in with Farcaster",subtitle:a?a.detail:"This should only take a moment",icon:_,iconVariant:"loading",iconLoadingStatus:{success:c,fail:!!a},onBack:d,onClose:i,watermark:!0,children:r&&H&&t.jsx(be,{children:t.jsx(oe,{text:"Take me to Farcaster",url:r,color:"#8a63d2"})})}:{title:"Sign in with Farcaster",subtitle:"Scan with your phone's camera to continue.",onBack:d,onClose:i,watermark:!0,children:t.jsxs(we,{children:[t.jsx(Se,{children:r?t.jsx(ie,{url:r,size:275,squareLogoElement:_}):t.jsx(Te,{children:t.jsx(ae,{})})}),t.jsxs(Ee,{children:[t.jsx(Ce,{children:"Or copy this link and paste it into a phone browser to open the Farcaster app."}),r&&t.jsx(xe,{value:r,truncate:"end",maxLength:30,showCopyButton:!0,disabled:!0})]})]})}),We={component:()=>{let{authenticated:r,logout:p,ready:c,user:a}=X(),{lastScreen:d,navigate:i,navigateBack:m,setModalData:h}=G(),n=Z(),{getAuthFlow:x,loginWithFarcaster:S,closePrivyModal:o,createAnalyticsEvent:E}=ee(),[f,y]=l.useState(void 0),[C,Y]=l.useState(!1),[b,J]=l.useState(!1),T=l.useRef([]),w=x(),j=w==null?void 0:w.meta.connectUri;return l.useEffect(()=>{let g=Date.now(),A=setInterval(async()=>{var O,R,$,L,N,I,U,D,M,z,B,W,q,V,P;let k=await w.pollForReady.execute(),K=Date.now()-g;if(k){clearInterval(A),Y(!0);try{await S(),J(!0)}catch(e){let v={retryable:!1,message:"Authentication failed"};if((e==null?void 0:e.privyErrorCode)===u.ALLOWLIST_REJECTED)return void i("AllowlistRejectionScreen");if((e==null?void 0:e.privyErrorCode)===u.USER_LIMIT_REACHED)return console.error(new re(e).toString()),void i("UserLimitReachedScreen");if((e==null?void 0:e.privyErrorCode)===u.USER_DOES_NOT_EXIST)return void i("AccountNotFoundScreen");if((e==null?void 0:e.privyErrorCode)===u.LINKED_TO_ANOTHER_USER)v.detail=e.message??"This account has already been linked to another user.";else{if((e==null?void 0:e.privyErrorCode)===u.ACCOUNT_TRANSFER_REQUIRED&&((R=(O=e.data)==null?void 0:O.data)!=null&&R.nonce))return h({accountTransfer:{nonce:(L=($=e.data)==null?void 0:$.data)==null?void 0:L.nonce,account:(I=(N=e.data)==null?void 0:N.data)==null?void 0:I.subject,displayName:(M=(D=(U=e.data)==null?void 0:U.data)==null?void 0:D.account)==null?void 0:M.displayName,linkMethod:"farcaster",embeddedWalletAddress:(W=(B=(z=e.data)==null?void 0:z.data)==null?void 0:B.otherUser)==null?void 0:W.embeddedWalletAddress,farcasterEmbeddedAddress:(P=(V=(q=e.data)==null?void 0:q.data)==null?void 0:V.otherUser)==null?void 0:P.farcasterEmbeddedAddress}}),void i("LinkConflictScreen");(e==null?void 0:e.privyErrorCode)===u.INVALID_CREDENTIALS?(v.retryable=!0,v.detail="Something went wrong. Try again."):(e==null?void 0:e.privyErrorCode)===u.TOO_MANY_REQUESTS&&(v.detail="Too many requests. Please wait before trying again.")}y(v)}}else K>12e4&&(clearInterval(A),y({retryable:!0,message:"Authentication failed",detail:"The request timed out. Try again."}))},2e3);return()=>{clearInterval(A),T.current.forEach(k=>clearTimeout(k))}},[]),l.useEffect(()=>{if(c&&r&&b&&a){if(n!=null&&n.legal.requireUsersAcceptTerms&&!a.hasAcceptedTerms){let g=setTimeout(()=>{i("AffirmativeConsentScreen")},F);return()=>clearTimeout(g)}b&&(le(a,n.embeddedWallets)?T.current.push(setTimeout(()=>{h({createWallet:{onSuccess:()=>{},onFailure:g=>{console.error(g),E({eventName:"embedded_wallet_creation_failure_logout",payload:{error:g,screen:"FarcasterConnectStatusScreen"}}),p()},callAuthOnSuccessOnClose:!0}}),i("EmbeddedWalletOnAccountCreateScreen")},F)):T.current.push(setTimeout(()=>o({shouldCallAuthOnSuccess:!0,isSuccess:!0}),F)))}},[b,c,r,a]),t.jsx(ye,{connectUri:j,loading:C,success:b,errorMessage:f,onBack:d?m:void 0,onClose:o,onOpenFarcaster:()=>{j&&(window.location.href=j)}})}};let be=s.div`
  margin-top: 24px;
`,we=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`,Se=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 275px;
`,Ee=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`,Ce=s.div`
  font-size: 0.875rem;
  text-align: center;
  color: var(--privy-color-foreground-2);
`,Te=s.div`
  position: relative;
  width: 82px;
  height: 82px;
`;export{We as FarcasterConnectStatusScreen,ye as FarcasterConnectStatusView,We as default};
