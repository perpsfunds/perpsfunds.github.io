import{r as u,j as t}from"./vendor-react-DwYkqiWc.js";import{b0 as T,b1 as I,b2 as B,bm as w,bn as y,cV as C,b9 as O,b6 as n}from"./privyHost-CH6knk-3.js";import{h as _}from"./CopyToClipboard-i_OQSBJr-C0us_9tm.js";import{n as q}from"./OpenLink-CUpJ1mOr-BuLF9gC6.js";import{x as E}from"./QrCode-Ddiv3lt7-Cq8_qFLs.js";import{n as A}from"./ScreenLayout-CyLnlt7g-CMyKcbip.js";import{l as h}from"./farcaster-DPlSjvF5-CAvT6Oql.js";import"./index-CB7aWwWj.js";import"./vendor-ethers-CXIjk7po.js";import"./preload-helper-C1FmrZbK.js";import"./vendor-icons-CtVdYIJS.js";import"./stringify-CWCc6FId.js";import"./formatUnits-Bw92Dgu5.js";import"./index-BTMnaXL8.js";import"./hashTypedData-0xOt8d5G.js";import"./dijkstra-D_NXgYpA.js";import"./ModalFooter-DDm8WjC0-C8sfrXrU.js";import"./Screen-BWBDKsup-BAbhf7CY.js";import"./index-CWARkn2w-qsxC9WJ_.js";let b="#8a63d2";const M=({appName:d,loading:p,success:i,errorMessage:e,connectUri:r,onBack:s,onClose:c,onOpenFarcaster:o})=>t.jsx(A,y||p?C?{title:e?e.message:"Add a signer to Farcaster",subtitle:e?e.detail:`This will allow ${d} to add casts, likes, follows, and more on your behalf.`,icon:h,iconVariant:"loading",iconLoadingStatus:{success:i,fail:!!e},primaryCta:r&&o?{label:"Open Farcaster app",onClick:o}:void 0,onBack:s,onClose:c,watermark:!0}:{title:e?e.message:"Requesting signer from Farcaster",subtitle:e?e.detail:"This should only take a moment",icon:h,iconVariant:"loading",iconLoadingStatus:{success:i,fail:!!e},onBack:s,onClose:c,watermark:!0,children:r&&y&&t.jsx(R,{children:t.jsx(q,{text:"Take me to Farcaster",url:r,color:b})})}:{title:"Add a signer to Farcaster",subtitle:`This will allow ${d} to add casts, likes, follows, and more on your behalf.`,onBack:s,onClose:c,watermark:!0,children:t.jsxs(V,{children:[t.jsx(L,{children:r?t.jsx(E,{url:r,size:275,squareLogoElement:h}):t.jsx(z,{children:t.jsx(O,{})})}),t.jsxs(N,{children:[t.jsx(P,{children:"Or copy this link and paste it into a phone browser to open the Farcaster app."}),r&&t.jsx(_,{text:r,itemName:"link",color:b})]})]})});let R=n.div`
  margin-top: 24px;
`,V=n.div`
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
`,z=n.div`
  position: relative;
  width: 82px;
  height: 82px;
`;const le={component:()=>{let{lastScreen:d,navigateBack:p,data:i}=T(),e=I(),{requestFarcasterSignerStatus:r,closePrivyModal:s}=B(),[c,o]=u.useState(void 0),[S,x]=u.useState(!1),[k,v]=u.useState(!1),g=u.useRef([]),a=i==null?void 0:i.farcasterSigner;u.useEffect(()=>{let j=Date.now(),l=setInterval(async()=>{if(!(a!=null&&a.public_key))return clearInterval(l),void o({retryable:!0,message:"Connect failed",detail:"Something went wrong. Please try again."});a.status==="approved"&&(clearInterval(l),x(!1),v(!0),g.current.push(setTimeout(()=>s({shouldCallAuthOnSuccess:!1,isSuccess:!0}),w)));let m=await r(a==null?void 0:a.public_key),F=Date.now()-j;m.status==="approved"?(clearInterval(l),x(!1),v(!0),g.current.push(setTimeout(()=>s({shouldCallAuthOnSuccess:!1,isSuccess:!0}),w))):F>3e5?(clearInterval(l),o({retryable:!0,message:"Connect failed",detail:"The request timed out. Try again."})):m.status==="revoked"&&(clearInterval(l),o({retryable:!0,message:"Request rejected",detail:"The request was rejected. Please try again."}))},2e3);return()=>{clearInterval(l),g.current.forEach(m=>clearTimeout(m))}},[]);let f=(a==null?void 0:a.status)==="pending_approval"?a.signer_approval_url:void 0;return t.jsx(M,{appName:e.name,loading:S,success:k,errorMessage:c,connectUri:f,onBack:d?p:void 0,onClose:s,onOpenFarcaster:()=>{f&&(window.location.href=f)}})}};export{le as FarcasterSignerStatusScreen,M as FarcasterSignerStatusView,le as default};
