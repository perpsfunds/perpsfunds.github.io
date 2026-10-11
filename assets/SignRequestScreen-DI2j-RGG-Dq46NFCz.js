import{r as o,j as a}from"./vendor-react-0C64ImZ_.js";import{dj as A,dd as M,db as O,gd as q,ec as E,gb as C,gc as b,dy as z,dh as u,cq as P,cm as k,ge as F}from"./privyHost-CthbffUC.js";import{h as I}from"./CopyToClipboard-i_OQSBJr-D3TqTdIh.js";import{d as $}from"./Layouts-BMRfo5hw-B2hSeu9E.js";import{a as V,i as B}from"./JsonTree-BHzNC-ic-B3B7kHys.js";import{n as J}from"./ScreenLayout-CyLnlt7g-xp61H_hW.js";import{aC as H}from"./vendor-icons-2PeE_QmM.js";import"./index-CgWwq8m7.js";import"./vendor-ethers-8GK8ucU1.js";import"./preload-helper-C1FmrZbK.js";import"./ModalFooter-DDm8WjC0-CTDvWizH.js";import"./Screen-BWBDKsup-tQYM0Edf.js";import"./index-CWARkn2w-Xj0eYF6k.js";const K=u.img`
  && {
    height: ${e=>e.size==="sm"?"65px":"140px"};
    width: ${e=>e.size==="sm"?"65px":"140px"};
    border-radius: 16px;
    margin-bottom: 12px;
  }
`;let Q=e=>{if(!P(e))return e;try{let s=k(e);return s.includes("�")?e:s}catch{return e}},W=e=>{try{let s=F.decode(e),i=new TextDecoder().decode(s);return i.includes("�")?e:i}catch{return e}},G=e=>{let{types:s,primaryType:i,...l}=e.typedData;return a.jsxs(a.Fragment,{children:[a.jsx(N,{data:l}),a.jsx(I,{text:(n=e.typedData,JSON.stringify(n,null,2)),itemName:"full payload to clipboard"})," "]});var n};const X=({method:e,messageData:s,copy:i,iconUrl:l,isLoading:n,success:g,walletProxyIsLoading:m,errorMessage:x,isCancellable:d,onSign:c,onCancel:y,onClose:p})=>a.jsx(J,{title:i.title,subtitle:i.description,showClose:!0,onClose:p,icon:H,iconVariant:"subtle",helpText:x?a.jsx(Z,{children:x}):void 0,primaryCta:{label:i.buttonText,onClick:c,disabled:n||g||m,loading:n},secondaryCta:d?{label:"Not now",onClick:y,disabled:n||g||m}:void 0,watermark:!0,children:a.jsxs($,{children:[l?a.jsx(K,{style:{alignSelf:"center"},size:"sm",src:l,alt:"app image"}):null,a.jsxs(Y,{children:[e==="personal_sign"&&a.jsx(j,{children:Q(s)}),e==="eth_signTypedData_v4"&&a.jsx(G,{typedData:s}),e==="solana_signMessage"&&a.jsx(j,{children:W(s)})]})]})}),ge={component:()=>{let{authenticated:e}=A(),{initializeWalletProxy:s,closePrivyModal:i}=M(),{navigate:l,data:n,onUserCloseViaDialogOrKeybindRef:g}=O(),[m,x]=o.useState(!0),[d,c]=o.useState(""),[y,p]=o.useState(),[f,w]=o.useState(null),[R,S]=o.useState(!1);o.useEffect(()=>{e||l("LandingScreen")},[e]),o.useEffect(()=>{s(q).then(r=>{x(!1),r||(c("An error has occurred, please try again."),p(new E(new C(d,b.E32603_DEFAULT_INTERNAL_ERROR.eipCode))))})},[]);let{method:T,data:_,confirmAndSign:v,onSuccess:D,onFailure:U,uiOptions:t}=n.signMessage,L={title:(t==null?void 0:t.title)||"Sign message",description:(t==null?void 0:t.description)||"Signing this message will not cost you any fees.",buttonText:(t==null?void 0:t.buttonText)||"Sign and continue"},h=r=>{r?D(r):U(y||new E(new C("The user rejected the request.",b.E4001_USER_REJECTED_REQUEST.eipCode))),i({shouldCallAuthOnSuccess:!1}),setTimeout(()=>{w(null),c(""),p(void 0)},200)};return g.current=()=>{h(f)},a.jsx(X,{method:T,messageData:_,copy:L,iconUrl:t!=null&&t.iconUrl&&typeof t.iconUrl=="string"?t.iconUrl:void 0,isLoading:R,success:f!==null,walletProxyIsLoading:m,errorMessage:d,isCancellable:t==null?void 0:t.isCancellable,onSign:async()=>{S(!0),c("");try{let r=await v();w(r),S(!1),setTimeout(()=>{h(r)},z)}catch(r){console.error(r),c("An error has occurred, please try again."),p(new E(new C(d,b.E32603_DEFAULT_INTERNAL_ERROR.eipCode))),S(!1)}},onCancel:()=>h(null),onClose:()=>h(f)})}};let Y=u.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Z=u.p`
  && {
    margin: 0;
    width: 100%;
    text-align: center;
    color: var(--privy-color-error-dark);
    font-size: 14px;
    line-height: 22px;
  }
`,N=u(V)`
  margin-top: 0;
`,j=u(B)`
  margin-top: 0;
`;export{ge as SignRequestScreen,X as SignRequestView,ge as default};
