import{r as n,j as a}from"./vendor-react-DwYkqiWc.js";import{ba as A,b2 as M,b0 as O,e1 as $,b$ as b,d$ as E,e0 as C,bm as z,b6 as u,e2 as P}from"./privyHost-CH6knk-3.js";import{h as k}from"./CopyToClipboard-i_OQSBJr-C0us_9tm.js";import{d as q}from"./Layouts-BMRfo5hw-pKQ_Kvj1.js";import{a as F,i as I}from"./JsonTree-BHzNC-ic-k2RWU0Sk.js";import{n as V}from"./ScreenLayout-CyLnlt7g-CMyKcbip.js";import{aC as B}from"./vendor-icons-CtVdYIJS.js";import{p as J,o as H}from"./stringify-CWCc6FId.js";import"./index-CB7aWwWj.js";import"./vendor-ethers-CXIjk7po.js";import"./preload-helper-C1FmrZbK.js";import"./formatUnits-Bw92Dgu5.js";import"./index-BTMnaXL8.js";import"./hashTypedData-0xOt8d5G.js";import"./ModalFooter-DDm8WjC0-C8sfrXrU.js";import"./Screen-BWBDKsup-BAbhf7CY.js";import"./index-CWARkn2w-qsxC9WJ_.js";const K=u.img`
  && {
    height: ${e=>e.size==="sm"?"65px":"140px"};
    width: ${e=>e.size==="sm"?"65px":"140px"};
    border-radius: 16px;
    margin-bottom: 12px;
  }
`;let Q=e=>{if(!J(e))return e;try{let i=H(e);return i.includes("�")?e:i}catch{return e}},W=e=>{try{let i=P.decode(e),s=new TextDecoder().decode(i);return s.includes("�")?e:s}catch{return e}},G=e=>{let{types:i,primaryType:s,...l}=e.typedData;return a.jsxs(a.Fragment,{children:[a.jsx(N,{data:l}),a.jsx(k,{text:(o=e.typedData,JSON.stringify(o,null,2)),itemName:"full payload to clipboard"})," "]});var o};const X=({method:e,messageData:i,copy:s,iconUrl:l,isLoading:o,success:m,walletProxyIsLoading:g,errorMessage:x,isCancellable:d,onSign:c,onCancel:y,onClose:p})=>a.jsx(V,{title:s.title,subtitle:s.description,showClose:!0,onClose:p,icon:B,iconVariant:"subtle",helpText:x?a.jsx(Z,{children:x}):void 0,primaryCta:{label:s.buttonText,onClick:c,disabled:o||m||g,loading:o},secondaryCta:d?{label:"Not now",onClick:y,disabled:o||m||g}:void 0,watermark:!0,children:a.jsxs(q,{children:[l?a.jsx(K,{style:{alignSelf:"center"},size:"sm",src:l,alt:"app image"}):null,a.jsxs(Y,{children:[e==="personal_sign"&&a.jsx(j,{children:Q(i)}),e==="eth_signTypedData_v4"&&a.jsx(G,{typedData:i}),e==="solana_signMessage"&&a.jsx(j,{children:W(i)})]})]})}),ye={component:()=>{let{authenticated:e}=A(),{initializeWalletProxy:i,closePrivyModal:s}=M(),{navigate:l,data:o,onUserCloseViaDialogOrKeybindRef:m}=O(),[g,x]=n.useState(!0),[d,c]=n.useState(""),[y,p]=n.useState(),[f,w]=n.useState(null),[R,S]=n.useState(!1);n.useEffect(()=>{e||l("LandingScreen")},[e]),n.useEffect(()=>{i($).then(r=>{x(!1),r||(c("An error has occurred, please try again."),p(new b(new E(d,C.E32603_DEFAULT_INTERNAL_ERROR.eipCode))))})},[]);let{method:T,data:_,confirmAndSign:v,onSuccess:D,onFailure:U,uiOptions:t}=o.signMessage,L={title:(t==null?void 0:t.title)||"Sign message",description:(t==null?void 0:t.description)||"Signing this message will not cost you any fees.",buttonText:(t==null?void 0:t.buttonText)||"Sign and continue"},h=r=>{r?D(r):U(y||new b(new E("The user rejected the request.",C.E4001_USER_REJECTED_REQUEST.eipCode))),s({shouldCallAuthOnSuccess:!1}),setTimeout(()=>{w(null),c(""),p(void 0)},200)};return m.current=()=>{h(f)},a.jsx(X,{method:T,messageData:_,copy:L,iconUrl:t!=null&&t.iconUrl&&typeof t.iconUrl=="string"?t.iconUrl:void 0,isLoading:R,success:f!==null,walletProxyIsLoading:g,errorMessage:d,isCancellable:t==null?void 0:t.isCancellable,onSign:async()=>{S(!0),c("");try{let r=await v();w(r),S(!1),setTimeout(()=>{h(r)},z)}catch(r){console.error(r),c("An error has occurred, please try again."),p(new b(new E(d,C.E32603_DEFAULT_INTERNAL_ERROR.eipCode))),S(!1)}},onCancel:()=>h(null),onClose:()=>h(f)})}};let Y=u.div`
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
`,N=u(F)`
  margin-top: 0;
`,j=u(I)`
  margin-top: 0;
`;export{ye as SignRequestScreen,X as SignRequestView,ye as default};
