import{r as d,j as t}from"./vendor-react-0C64ImZ_.js";import{db as T,dc as I,dd as B,dy as y,dz as w,f6 as C,dl as O,dh as n}from"./privyHost-BqlTwloN.js";import{h as _}from"./CopyToClipboard-i_OQSBJr-qCRpn4Dt.js";import{n as q}from"./OpenLink-CUpJ1mOr-C-cnSg9C.js";import{x as E}from"./QrCode-Ddiv3lt7-C39twfqF.js";import{n as A}from"./ScreenLayout-CyLnlt7g-CpyQyvrJ.js";import{l as h}from"./farcaster-DPlSjvF5-THwmXJyM.js";import"./index-Cw-O3_Qi.js";import"./vendor-ethers-8GK8ucU1.js";import"./preload-helper-C1FmrZbK.js";import"./vendor-icons-BG7jN9os.js";import"./dijkstra-D_NXgYpA.js";import"./ModalFooter-DDm8WjC0-CIXCb_tc.js";import"./Screen-BWBDKsup-BPy_fI-g.js";import"./index-CWARkn2w-BC8WUhMY.js";let S="#8a63d2";const M=({appName:u,loading:p,success:i,errorMessage:e,connectUri:r,onBack:s,onClose:c,onOpenFarcaster:o})=>t.jsx(A,w||p?C?{title:e?e.message:"Add a signer to Farcaster",subtitle:e?e.detail:`This will allow ${u} to add casts, likes, follows, and more on your behalf.`,icon:h,iconVariant:"loading",iconLoadingStatus:{success:i,fail:!!e},primaryCta:r&&o?{label:"Open Farcaster app",onClick:o}:void 0,onBack:s,onClose:c,watermark:!0}:{title:e?e.message:"Requesting signer from Farcaster",subtitle:e?e.detail:"This should only take a moment",icon:h,iconVariant:"loading",iconLoadingStatus:{success:i,fail:!!e},onBack:s,onClose:c,watermark:!0,children:r&&w&&t.jsx(R,{children:t.jsx(q,{text:"Take me to Farcaster",url:r,color:S})})}:{title:"Add a signer to Farcaster",subtitle:`This will allow ${u} to add casts, likes, follows, and more on your behalf.`,onBack:s,onClose:c,watermark:!0,children:t.jsxs(z,{children:[t.jsx(L,{children:r?t.jsx(E,{url:r,size:275,squareLogoElement:h}):t.jsx(V,{children:t.jsx(O,{})})}),t.jsxs(N,{children:[t.jsx(P,{children:"Or copy this link and paste it into a phone browser to open the Farcaster app."}),r&&t.jsx(_,{text:r,itemName:"link",color:S})]})]})});let R=n.div`
  margin-top: 24px;
`,z=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`,L=n.div`
  padding: 24px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 275px;
`,N=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`,P=n.div`
  font-size: 0.875rem;
  text-align: center;
  color: var(--privy-color-foreground-2);
`,V=n.div`
  position: relative;
  width: 82px;
  height: 82px;
`;const re={component:()=>{let{lastScreen:u,navigateBack:p,data:i}=T(),e=I(),{requestFarcasterSignerStatus:r,closePrivyModal:s}=B(),[c,o]=d.useState(void 0),[k,x]=d.useState(!1),[j,v]=d.useState(!1),g=d.useRef([]),a=i==null?void 0:i.farcasterSigner;d.useEffect(()=>{let b=Date.now(),l=setInterval(async()=>{if(!(a!=null&&a.public_key))return clearInterval(l),void o({retryable:!0,message:"Connect failed",detail:"Something went wrong. Please try again."});a.status==="approved"&&(clearInterval(l),x(!1),v(!0),g.current.push(setTimeout(()=>s({shouldCallAuthOnSuccess:!1,isSuccess:!0}),y)));let m=await r(a==null?void 0:a.public_key),F=Date.now()-b;m.status==="approved"?(clearInterval(l),x(!1),v(!0),g.current.push(setTimeout(()=>s({shouldCallAuthOnSuccess:!1,isSuccess:!0}),y))):F>3e5?(clearInterval(l),o({retryable:!0,message:"Connect failed",detail:"The request timed out. Try again."})):m.status==="revoked"&&(clearInterval(l),o({retryable:!0,message:"Request rejected",detail:"The request was rejected. Please try again."}))},2e3);return()=>{clearInterval(l),g.current.forEach(m=>clearTimeout(m))}},[]);let f=(a==null?void 0:a.status)==="pending_approval"?a.signer_approval_url:void 0;return t.jsx(M,{appName:e.name,loading:k,success:j,errorMessage:c,connectUri:f,onBack:u?p:void 0,onClose:s,onOpenFarcaster:()=>{f&&(window.location.href=f)}})}};export{re as FarcasterSignerStatusScreen,M as FarcasterSignerStatusView,re as default};
