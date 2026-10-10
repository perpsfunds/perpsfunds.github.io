import{r as Q,j as e,ag as xe,h as he,ah as qe,_ as Be,ai as Ue,aj as Ve}from"./vendor-react-0C64ImZ_.js";import{dh as h,dd as Je,dc as je,fO as ne,en as me,gq as He,cn as Qe}from"./privyHost-BqlTwloN.js";import{L as X,i as Xe,b as _,h as ue,w as _e}from"./ModalFooter-DDm8WjC0-CIXCb_tc.js";import{e as n,t as M,s as r,n as i,a as Ke}from"./Value-DTgR824E-CfaerycU.js";import{e as z}from"./ErrorMessage-D8VaAP5m-BJJ0sc_8.js";import{r as O}from"./LabelXs-oqZNqbm_-gVBz-jqE.js";import{r as pe}from"./Subtitle-CV-2yKE4-Kr6oWFTe.js";import{e as ge}from"./Title-BnzYV3Is-BVf4njxD.js";import{d as c}from"./Address-CgVXNQ2s-yjXd56Z5.js";import{j as Ye}from"./WalletInfoCard-DDtrzp4v-RgF3Y_MJ.js";import{i as fe}from"./LoadingSkeleton-BMsgO5PV-BhTJXinZ.js";import{d as Ge}from"./shared-FM0rljBt-D15T4qh8.js";import{o as Ze}from"./Checkbox-D1EDeo41-sha_6t2q.js";import{i as We}from"./ErrorBanner-BcpGRt0h-Dkn42Sq9.js";import{t as $e}from"./WarningBanner-ZZqCEtZK-C2Xmbhd6.js";const ye=h(n)`
  cursor: pointer;
  display: inline-flex;
  gap: 8px;
  align-items: center;
  color: var(--privy-color-accent);
  svg {
    fill: var(--privy-color-accent);
  }
`;var ie=({iconUrl:a,value:l,symbol:o,usdValue:u,nftName:F,nftCount:p,decimals:t,$isLoading:f})=>{if(f)return e.jsx(te,{$isLoading:f});let y=l&&u&&t?function(v,T,I){let b=parseFloat(v),x=parseFloat(I);if(b===0||x===0||Number.isNaN(b)||Number.isNaN(x))return v;let g=Math.ceil(-Math.log10(.01/(x/b))),d=Math.pow(10,g=Math.max(g=Math.min(g,T),1)),w=+(Math.floor(b*d)/d).toFixed(g).replace(/\.?0+$/,"");return Intl.NumberFormat(void 0,{maximumFractionDigits:T}).format(w)}(l,t,u):l;return e.jsxs("div",{children:[e.jsxs(te,{$isLoading:f,children:[a&&e.jsx(ss,{src:a,alt:"Token icon"}),p&&p>1?p+"x":void 0," ",F,y," ",o]}),u&&e.jsxs(es,{$isLoading:f,children:["$",u]})]})};let te=h.span`
  color: var(--privy-color-foreground);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.375rem;
  word-break: break-all;
  text-align: right;
  display: flex;
  justify-content: flex-end;

  /**
   * @NOTE This is a code smell anti-pattern for styling components.
   * We are mixing JSX definitions with styled-components CSS definitions.
   * This is not ideal and should be refactored in the future to separate concerns.
   * This is also hard to read, as it makes it difficult to understand the structure
   * of the component and its styles by viewing the JSX.
   */

  ${fe}
`;const es=h.span`
  color: var(--privy-color-foreground-2);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  word-break: break-all;
  text-align: right;
  display: flex;
  justify-content: flex-end;

  ${fe}
`;let ss=h.img`
  height: 14px;
  width: 14px;
  margin-right: 4px;
  object-fit: contain;
`;const rs=a=>{var f,y,v,T,I,b,x,g;let{chain:l,transactionDetails:o,isTokenContractInfoLoading:u,symbol:F}=a,{action:p,functionName:t}=o;return e.jsx(Ge,{children:e.jsxs(M,{children:[p!=="transaction"&&e.jsxs(r,{children:[e.jsx(n,{children:"Action"}),e.jsx(i,{children:t})]}),t==="mint"&&"args"in o&&o.args.filter(d=>d).map((d,w)=>{var m,S;return e.jsxs(r,{children:[e.jsx(n,{children:`Param ${w}`}),e.jsx(i,{children:typeof d=="string"&&Qe(d)?e.jsx(c,{address:d,url:(S=(m=l==null?void 0:l.blockExplorers)==null?void 0:m.default)==null?void 0:S.url,showCopyIcon:!1}):d==null?void 0:d.toString()})]},w)}),t==="setApprovalForAll"&&o.operator&&e.jsxs(r,{children:[e.jsx(n,{children:"Operator"}),e.jsx(i,{children:e.jsx(c,{address:o.operator,url:(y=(f=l==null?void 0:l.blockExplorers)==null?void 0:f.default)==null?void 0:y.url,showCopyIcon:!1})})]}),t==="setApprovalForAll"&&o.approved!==void 0&&e.jsxs(r,{children:[e.jsx(n,{children:"Set approval to"}),e.jsx(i,{children:o.approved?"true":"false"})]}),t==="transfer"||t==="transferWithMemo"||t==="transferFrom"||t==="safeTransferFrom"||t==="approve"?e.jsxs(e.Fragment,{children:["formattedAmount"in o&&o.formattedAmount&&e.jsxs(r,{children:[e.jsx(n,{children:"Amount"}),e.jsxs(i,{$isLoading:u,children:[o.formattedAmount," ",F]})]}),"tokenId"in o&&o.tokenId&&e.jsxs(r,{children:[e.jsx(n,{children:"Token ID"}),e.jsx(i,{children:o.tokenId.toString()})]})]}):null,t==="safeBatchTransferFrom"&&e.jsxs(e.Fragment,{children:["amounts"in o&&o.amounts&&e.jsxs(r,{children:[e.jsx(n,{children:"Amounts"}),e.jsx(i,{children:o.amounts.join(", ")})]}),"tokenIds"in o&&o.tokenIds&&e.jsxs(r,{children:[e.jsx(n,{children:"Token IDs"}),e.jsx(i,{children:o.tokenIds.join(", ")})]})]}),t==="approve"&&o.spender&&e.jsxs(r,{children:[e.jsx(n,{children:"Spender"}),e.jsx(i,{children:e.jsx(c,{address:o.spender,url:(T=(v=l==null?void 0:l.blockExplorers)==null?void 0:v.default)==null?void 0:T.url,showCopyIcon:!1})})]}),(t==="transferFrom"||t==="safeTransferFrom"||t==="safeBatchTransferFrom")&&o.transferFrom&&e.jsxs(r,{children:[e.jsx(n,{children:"Transferring from"}),e.jsx(i,{children:e.jsx(c,{address:o.transferFrom,url:(b=(I=l==null?void 0:l.blockExplorers)==null?void 0:I.default)==null?void 0:b.url,showCopyIcon:!1})})]}),(t==="transferFrom"||t==="safeTransferFrom"||t==="safeBatchTransferFrom")&&o.transferTo&&e.jsxs(r,{children:[e.jsx(n,{children:"Transferring to"}),e.jsx(i,{children:e.jsx(c,{address:o.transferTo,url:(g=(x=l==null?void 0:l.blockExplorers)==null?void 0:x.default)==null?void 0:g.url,showCopyIcon:!1})})]})]})})},ns=({variant:a,setPreventMaliciousTransaction:l,colorScheme:o="light",preventMaliciousTransaction:u})=>a==="warn"?e.jsx(oe,{children:e.jsxs($e,{theme:o,children:[e.jsx("span",{style:{fontWeight:"500"},children:"Warning: Suspicious transaction"}),e.jsx("br",{}),"This has been flagged as a potentially deceptive request. Approving could put your assets or funds at risk."]})}):a==="error"?e.jsx(e.Fragment,{children:e.jsxs(oe,{children:[e.jsx(We,{theme:o,children:e.jsxs("div",{children:[e.jsx("strong",{children:"This is a malicious transaction"}),e.jsx("br",{}),"This transaction transfers tokens to a known malicious address. Proceeding may result in the loss of valuable assets."]})}),e.jsxs(is,{children:[e.jsx(Ze,{color:"var(--privy-color-error)",checked:!u,readOnly:!0,onClick:()=>l(!u)}),e.jsx("span",{children:"I understand and want to proceed anyways."})]})]})}):null;let oe=h.div`
  margin-top: 1.5rem;
`,is=h.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.75rem;
`;const ts=({transactionIndex:a,maxIndex:l})=>typeof a!="number"||l===0?"":` (${a+1} / ${l+1})`,Ds=({img:a,submitError:l,prepareError:o,onClose:u,action:F,title:p,subtitle:t,to:f,tokenAddress:y,network:v,missingFunds:T,fee:I,from:b,cta:x,disabled:g,chain:d,isSubmitting:w,isPreparing:m,isTokenPriceLoading:S,isTokenContractInfoLoading:N,isSponsored:D,symbol:q,balance:P,onClick:E,transactionDetails:A,transactionIndex:R,maxIndex:B,onBack:s,chainName:k,validation:U,hasScanDetails:K,setIsScanDetailsOpen:Ie,preventMaliciousTransaction:Se,setPreventMaliciousTransaction:Ae,tokensSent:Y,tokensReceived:V,isScanning:Ce,isCancellable:Fe,functionName:Oe})=>{var G,Z,W,$,ee,se;let{showTransactionDetails:J,setShowTransactionDetails:Ne,hasMoreDetails:Ee,isErc20Ish:De}=(j=>{let[L,Re]=Q.useState(!1),H=!0,re=!1;return(!j||j.isErc20Ish||j.action==="transaction")&&(H=!1),H&&(re=Object.entries(j||{}).some(([ze,Me])=>Me&&!["action","isErc20Ish","isNFTIsh"].includes(ze))),{showTransactionDetails:L,setShowTransactionDetails:Re,hasMoreDetails:H&&re,isErc20Ish:j==null?void 0:j.isErc20Ish}})(A),Le=je(),Pe=De&&N||m||S||Ce;return e.jsxs(e.Fragment,{children:[e.jsx(X,{onClose:u,backFn:s}),a&&e.jsx(be,{children:a}),e.jsxs(ge,{style:{marginTop:a?"1.5rem":0},children:[p,e.jsx(ts,{maxIndex:B,transactionIndex:R})]}),e.jsx(pe,{children:t}),e.jsxs(M,{style:{marginTop:"2rem"},children:[(!!Y[0]||Pe)&&e.jsxs(r,{children:[V.length>0?e.jsx(n,{children:"Send"}):e.jsx(n,{children:F==="approve"?"Approval amount":"Amount"}),e.jsx("div",{className:"flex flex-col",children:Y.map((j,L)=>e.jsx(ie,{iconUrl:j.iconUrl,value:Oe==="setApprovalForAll"?"All":j.value,usdValue:j.usdValue,symbol:j.symbol,nftName:j.nftName,nftCount:j.nftCount,decimals:j.decimals},L))})]}),V.length>0&&e.jsxs(r,{children:[e.jsx(n,{children:"Receive"}),e.jsx("div",{className:"flex flex-col",children:V.map((j,L)=>e.jsx(ie,{iconUrl:j.iconUrl,value:j.value,usdValue:j.usdValue,symbol:j.symbol,nftName:j.nftName,nftCount:j.nftCount,decimals:j.decimals},L))})]}),A&&"spender"in A&&(A!=null&&A.spender)?e.jsxs(r,{children:[e.jsx(n,{children:"Spender"}),e.jsx(i,{children:e.jsx(c,{address:A.spender,url:(Z=(G=d==null?void 0:d.blockExplorers)==null?void 0:G.default)==null?void 0:Z.url})})]}):null,f&&e.jsxs(r,{children:[e.jsx(n,{children:"To"}),e.jsx(i,{children:e.jsx(c,{address:f,url:($=(W=d==null?void 0:d.blockExplorers)==null?void 0:W.default)==null?void 0:$.url,showCopyIcon:!0})})]}),y&&e.jsxs(r,{children:[e.jsx(n,{children:"Token address"}),e.jsx(i,{children:e.jsx(c,{address:y,url:(se=(ee=d==null?void 0:d.blockExplorers)==null?void 0:ee.default)==null?void 0:se.url})})]}),e.jsxs(r,{children:[e.jsx(n,{children:"Network"}),e.jsx(i,{children:v})]}),e.jsxs(r,{children:[e.jsx(n,{children:"Estimated fee"}),e.jsx(i,{$isLoading:m||S||D===void 0,children:D?e.jsxs(we,{children:[e.jsxs(Te,{children:["Sponsored by ",Le.name]}),e.jsx(xe,{height:16,width:16})]}):I})]}),Ee&&!K&&e.jsxs(e.Fragment,{children:[e.jsx(r,{className:"cursor-pointer",onClick:()=>Ne(!J),children:e.jsxs(Ke,{className:"flex items-center gap-x-1",children:["Details"," ",e.jsx(he,{style:{width:"0.75rem",marginLeft:"0.25rem",transform:J?"rotate(180deg)":void 0}})]})}),J&&A&&e.jsx(rs,{action:F,chain:d,transactionDetails:A,isTokenContractInfoLoading:N,symbol:q})]}),K&&e.jsx(r,{children:e.jsxs(ye,{onClick:()=>Ie(!0),children:[e.jsx("span",{className:"text-color-primary",children:"Details"}),e.jsx(qe,{height:"14px",width:"14px",strokeWidth:"2"})]})})]}),e.jsx(me,{}),l?e.jsx(z,{style:{marginTop:"2rem"},children:l.message}):o&&R===0?e.jsx(z,{style:{marginTop:"2rem"},children:o.shortMessage??ve}):null,e.jsx(ns,{variant:U,preventMaliciousTransaction:Se,setPreventMaliciousTransaction:Ae}),e.jsx(ke,{$useSmallMargins:!(!o&&!l&&U!=="warn"&&U!=="error"),address:b,balance:P,errMsg:m||o||l||!T?void 0:`Add funds on ${(d==null?void 0:d.name)??k} to complete transaction.`}),e.jsx(_,{style:{marginTop:"1rem"},loading:w,disabled:g||m,onClick:E,children:x}),Fe&&e.jsx(_e,{style:{marginTop:"1rem"},onClick:u,isSubmitting:!1,children:"Not now"}),e.jsx(ue,{})]})},Ls=({img:a,title:l,subtitle:o,cta:u,instructions:F,network:p,blockExplorerUrl:t,isMissingFunds:f,submitError:y,parseError:v,total:T,swap:I,transactingWalletAddress:b,fee:x,balance:g,disabled:d,isSubmitting:w,isPreparing:m,isTokenPriceLoading:S,onClick:N,onClose:D,onBack:q,isSponsored:P})=>{let E=m||S,[A,R]=Q.useState(!1),B=je();return e.jsxs(e.Fragment,{children:[e.jsx(X,{onClose:D,backFn:q}),a&&e.jsx(be,{children:a}),e.jsx(ge,{style:{marginTop:a?"1.5rem":0},children:l}),e.jsx(pe,{children:o}),e.jsxs(M,{style:{marginTop:"2rem",marginBottom:".5rem"},children:[(T||E)&&e.jsxs(r,{children:[e.jsx(n,{children:"Amount"}),e.jsx(i,{$isLoading:E,children:T})]}),I&&e.jsxs(r,{children:[e.jsx(n,{children:"Swap"}),e.jsx(i,{children:I})]}),p&&e.jsxs(r,{children:[e.jsx(n,{children:"Network"}),e.jsx(i,{children:p})]}),(x||E||P!==void 0)&&e.jsxs(r,{children:[e.jsx(n,{children:"Estimated fee"}),e.jsx(i,{$isLoading:E,children:P&&!E?e.jsxs(we,{children:[e.jsxs(Te,{children:["Sponsored by ",B.name]}),e.jsx(xe,{height:16,width:16})]}):x})]})]}),e.jsx(r,{children:e.jsxs(ye,{onClick:()=>R(s=>!s),children:[e.jsx("span",{children:"Advanced"}),e.jsx(he,{height:"16px",width:"16px",strokeWidth:"2",style:{transition:"all 300ms",transform:A?"rotate(180deg)":void 0}})]})}),A&&e.jsx(e.Fragment,{children:F.map((s,k)=>s.type==="sol-transfer"?e.jsxs(C,{children:[e.jsx(r,{children:e.jsxs(O,{children:["Transfer ",s.withSeed?"with seed":""]})}),e.jsxs(r,{children:[e.jsx(n,{children:"Amount"}),e.jsxs(i,{children:[ne({amount:s.value,decimals:s.token.decimals})," ",s.token.symbol]})]}),!!s.toAccount&&e.jsxs(r,{children:[e.jsx(n,{children:"Destination"}),e.jsx(i,{children:e.jsx(c,{address:s.toAccount,url:t})})]})]},k):s.type==="spl-transfer"?e.jsxs(C,{children:[e.jsx(r,{children:e.jsxs(O,{children:["Transfer ",s.token.symbol]})}),e.jsxs(r,{children:[e.jsx(n,{children:"Amount"}),e.jsx(i,{children:s.value.toString()})]}),!!s.fromAta&&e.jsxs(r,{children:[e.jsx(n,{children:"Source"}),e.jsx(i,{children:e.jsx(c,{address:s.fromAta,url:t})})]}),!!s.toAta&&e.jsxs(r,{children:[e.jsx(n,{children:"Destination"}),e.jsx(i,{children:e.jsx(c,{address:s.toAta,url:t})})]}),!!s.token.address&&e.jsxs(r,{children:[e.jsx(n,{children:"Token"}),e.jsx(i,{children:e.jsx(c,{address:s.token.address,url:t})})]})]},k):s.type==="ata-creation"?e.jsxs(C,{children:[e.jsx(r,{children:e.jsx(O,{children:"Create token account"})}),e.jsxs(r,{children:[e.jsx(n,{children:"Program ID"}),e.jsx(i,{children:e.jsx(c,{address:s.program,url:t})})]}),!!s.owner&&e.jsxs(r,{children:[e.jsx(n,{children:"Owner"}),e.jsx(i,{children:e.jsx(c,{address:s.owner,url:t})})]})]},k):s.type==="create-account"?e.jsxs(C,{children:[e.jsx(r,{children:e.jsxs(O,{children:["Create account ",s.withSeed?"with seed":""]})}),!!s.account&&e.jsxs(r,{children:[e.jsx(n,{children:"Account"}),e.jsx(i,{children:e.jsx(c,{address:s.account,url:t})})]}),e.jsxs(r,{children:[e.jsx(n,{children:"Amount"}),e.jsxs(i,{children:[ne({amount:s.value,decimals:9})," SOL"]})]})]},k):s.type==="spl-init-account"?e.jsxs(C,{children:[e.jsx(r,{children:e.jsx(O,{children:"Initialize token account"})}),!!s.account&&e.jsxs(r,{children:[e.jsx(n,{children:"Account"}),e.jsx(i,{children:e.jsx(c,{address:s.account,url:t})})]}),!!s.mint&&e.jsxs(r,{children:[e.jsx(n,{children:"Mint"}),e.jsx(i,{children:e.jsx(c,{address:s.mint,url:t})})]}),!!s.owner&&e.jsxs(r,{children:[e.jsx(n,{children:"Owner"}),e.jsx(i,{children:e.jsx(c,{address:s.owner,url:t})})]})]},k):s.type==="spl-close-account"?e.jsxs(C,{children:[e.jsx(r,{children:e.jsx(O,{children:"Close token account"})}),!!s.source&&e.jsxs(r,{children:[e.jsx(n,{children:"Source"}),e.jsx(i,{children:e.jsx(c,{address:s.source,url:t})})]}),!!s.destination&&e.jsxs(r,{children:[e.jsx(n,{children:"Destination"}),e.jsx(i,{children:e.jsx(c,{address:s.destination,url:t})})]}),!!s.owner&&e.jsxs(r,{children:[e.jsx(n,{children:"Owner"}),e.jsx(i,{children:e.jsx(c,{address:s.owner,url:t})})]})]},k):s.type==="spl-sync-native"?e.jsxs(C,{children:[e.jsx(r,{children:e.jsx(O,{children:"Sync native"})}),e.jsxs(r,{children:[e.jsx(n,{children:"Program ID"}),e.jsx(i,{children:e.jsx(c,{address:s.program,url:t})})]})]},k):s.type==="raydium-swap-base-input"?e.jsxs(C,{children:[e.jsx(r,{children:e.jsxs(O,{children:["Raydium swap"," ",s.tokenIn&&s.tokenOut?`${s.tokenIn.symbol} → ${s.tokenOut.symbol}`:""]})}),e.jsxs(r,{children:[e.jsx(n,{children:"Amount in"}),e.jsx(i,{children:s.amountIn.toString()})]}),e.jsxs(r,{children:[e.jsx(n,{children:"Minimum amount out"}),e.jsx(i,{children:s.minimumAmountOut.toString()})]}),s.mintIn&&e.jsxs(r,{children:[e.jsx(n,{children:"Token in"}),e.jsx(i,{children:e.jsx(c,{address:s.mintIn,url:t})})]}),s.mintOut&&e.jsxs(r,{children:[e.jsx(n,{children:"Token out"}),e.jsx(i,{children:e.jsx(c,{address:s.mintOut,url:t})})]})]},k):s.type==="raydium-swap-base-output"?e.jsxs(C,{children:[e.jsx(r,{children:e.jsxs(O,{children:["Raydium swap"," ",s.tokenIn&&s.tokenOut?`${s.tokenIn.symbol} → ${s.tokenOut.symbol}`:""]})}),e.jsxs(r,{children:[e.jsx(n,{children:"Max amount in"}),e.jsx(i,{children:s.maxAmountIn.toString()})]}),e.jsxs(r,{children:[e.jsx(n,{children:"Amount out"}),e.jsx(i,{children:s.amountOut.toString()})]}),s.mintIn&&e.jsxs(r,{children:[e.jsx(n,{children:"Token in"}),e.jsx(i,{children:e.jsx(c,{address:s.mintIn,url:t})})]}),s.mintOut&&e.jsxs(r,{children:[e.jsx(n,{children:"Token out"}),e.jsx(i,{children:e.jsx(c,{address:s.mintOut,url:t})})]})]},k):s.type==="jupiter-swap-shared-accounts-route"?e.jsxs(C,{children:[e.jsx(r,{children:e.jsxs(O,{children:["Jupiter swap"," ",s.tokenIn&&s.tokenOut?`${s.tokenIn.symbol} → ${s.tokenOut.symbol}`:""]})}),e.jsxs(r,{children:[e.jsx(n,{children:"In amount"}),e.jsx(i,{children:s.inAmount.toString()})]}),e.jsxs(r,{children:[e.jsx(n,{children:"Quoted out amount"}),e.jsx(i,{children:s.quotedOutAmount.toString()})]}),s.mintIn&&e.jsxs(r,{children:[e.jsx(n,{children:"Token in"}),e.jsx(i,{children:e.jsx(c,{address:s.mintIn,url:t})})]}),s.mintOut&&e.jsxs(r,{children:[e.jsx(n,{children:"Token out"}),e.jsx(i,{children:e.jsx(c,{address:s.mintOut,url:t})})]})]},k):s.type==="jupiter-swap-exact-out-route"?e.jsxs(C,{children:[e.jsx(r,{children:e.jsxs(O,{children:["Jupiter swap"," ",s.tokenIn&&s.tokenOut?`${s.tokenIn.symbol} → ${s.tokenOut.symbol}`:""]})}),e.jsxs(r,{children:[e.jsx(n,{children:"Quoted in amount"}),e.jsx(i,{children:s.quotedInAmount.toString()})]}),e.jsxs(r,{children:[e.jsx(n,{children:"Amount out"}),e.jsx(i,{children:s.outAmount.toString()})]}),s.mintIn&&e.jsxs(r,{children:[e.jsx(n,{children:"Token in"}),e.jsx(i,{children:e.jsx(c,{address:s.mintIn,url:t})})]}),s.mintOut&&e.jsxs(r,{children:[e.jsx(n,{children:"Token out"}),e.jsx(i,{children:e.jsx(c,{address:s.mintOut,url:t})})]})]},k):e.jsxs(C,{children:[e.jsxs(r,{children:[e.jsx(n,{children:"Program ID"}),e.jsx(i,{children:e.jsx(c,{address:s.program,url:t})})]}),e.jsxs(r,{children:[e.jsx(n,{children:"Data"}),e.jsx(i,{children:s.discriminator})]})]},k))}),e.jsx(me,{}),y?e.jsx(z,{style:{marginTop:"2rem"},children:y.message}):v?e.jsx(z,{style:{marginTop:"2rem"},children:ve}):null,e.jsx(ke,{$useSmallMargins:!(!v&&!y),title:"",address:b,balance:g,errMsg:m||v||y||!f?void 0:"Add funds on Solana to complete transaction."}),e.jsx(_,{style:{marginTop:"1rem"},loading:w,disabled:d||m,onClick:N,children:u}),e.jsx(ue,{})]})};let ke=h(Ye)`
  ${a=>a.$useSmallMargins?"margin-top: 0.5rem;":"margin-top: 2rem;"}
`,C=h(M)`
  margin-top: 0.5rem;
  border: 1px solid var(--privy-color-foreground-4);
  border-radius: var(--privy-border-radius-sm);
  padding: 0.5rem;
`,ve="There was an error preparing your transaction. Your transaction request will likely fail.",be=h.div`
  display: flex;
  width: 100%;
  justify-content: center;
  max-height: 40px;

  > img {
    object-fit: contain;
    border-radius: var(--privy-border-radius-sm);
  }
`,we=h.span`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
`,Te=h.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--privy-color-foreground);
`,le=a=>(a==null?void 0:a.code)===He.COMPLIANCE_BLOCKED,os=()=>e.jsxs(cs,{children:[e.jsx(hs,{}),e.jsx(xs,{})]});const Ps=({transactionError:a,chainId:l,onClose:o,onRetry:u,chainType:F,transactionHash:p})=>{let{chains:t}=Je(),[f,y]=Q.useState(!1),{errorCode:v,errorMessage:T}=((x,g)=>{if(g==="ethereum")return le(x)?{errorCode:"Transaction blocked",errorMessage:x.message}:{errorCode:x.details??x.message,errorMessage:x.shortMessage};let d=x.txSignature,w=(x==null?void 0:x.transactionMessage)||"Something went wrong.";if(Array.isArray(x.logs)){let m=x.logs.find(S=>/insufficient (lamports|funds)/gi.test(S));m&&(w=m)}return{transactionHash:d,errorMessage:w}})(a,F),I=le(a),b=(({chains:x,chainId:g,chainType:d,transactionHash:w})=>{var m,S;return d==="ethereum"?((S=(m=x.find(N=>N.id===g))==null?void 0:m.blockExplorers)==null?void 0:S.default.url)??"https://etherscan.io":function(N,D){return`https://explorer.solana.com/tx/${N}?chain=${D}`}(w||"",g)})({chains:t,chainId:l,chainType:F,transactionHash:p});return e.jsxs(e.Fragment,{children:[e.jsx(X,{onClose:o}),e.jsxs(ls,{children:[e.jsx(os,{}),e.jsx(as,{children:v}),e.jsx(ds,{children:I?"This transaction cannot be completed.":"Please try again."}),e.jsxs(de,{children:[e.jsx(ae,{children:"Error message"}),e.jsx(ce,{$clickable:!1,children:T})]}),p&&e.jsxs(de,{children:[e.jsx(ae,{children:"Transaction hash"}),e.jsxs(ms,{children:["Copy this hash to view details about the transaction on a"," ",e.jsx("u",{children:e.jsx("a",{href:b,children:"block explorer"})}),"."]}),e.jsxs(ce,{$clickable:!0,onClick:async()=>{await navigator.clipboard.writeText(p),y(!0)},children:[p,e.jsx(gs,{clicked:f})]})]}),!I&&e.jsx(js,{onClick:()=>u({resetNonce:!!p}),children:"Retry transaction"})]}),e.jsx(Xe,{})]})};let ls=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,as=h.span`
  color: var(--privy-color-foreground);
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.25rem; /* 111.111% */
  text-align: center;
  margin: 10px;
`,ds=h.span`
  margin-top: 4px;
  margin-bottom: 10px;
  color: var(--privy-color-foreground-3);
  text-align: center;

  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.008px;
`,cs=h.div`
  position: relative;
  width: 60px;
  height: 60px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`,xs=h(Be)`
  position: absolute;
  width: 35px;
  height: 35px;
  color: var(--privy-color-error);
`,hs=h.div`
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--privy-color-error);
  opacity: 0.1;
`,js=h(_)`
  && {
    margin-top: 24px;
  }
  transition:
    color 350ms ease,
    background-color 350ms ease;
`,ae=h.span`
  width: 100%;
  text-align: left;
  font-size: 0.825rem;
  color: var(--privy-color-foreground);
  padding: 4px;
`,de=h.div`
  width: 100%;
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,ms=h.text`
  position: relative;
  width: 100%;
  padding: 5px;
  font-size: 0.8rem;
  color: var(--privy-color-foreground-3);
  text-align: left;
  overflow-wrap: break-word;
`,ce=h.span`
  position: relative;
  width: 100%;
  background-color: var(--privy-color-background-2);
  padding: 8px 12px;
  border-radius: 10px;
  margin-top: 5px;
  font-size: 14px;
  color: var(--privy-color-foreground-3);
  text-align: left;
  overflow-wrap: break-word;
  ${a=>a.$clickable&&`cursor: pointer;
  transition: background-color 0.3s;
  padding-right: 45px;

  &:hover {
    background-color: var(--privy-color-foreground-4);
  }`}
`,us=h(Ue)`
  position: absolute;
  top: 13px;
  right: 13px;
  width: 24px;
  height: 24px;
`,ps=h(Ve)`
  position: absolute;
  top: 13px;
  right: 13px;
  width: 24px;
  height: 24px;
`,gs=({clicked:a})=>e.jsx(a?ps:us,{});export{Ds as Q,Ls as _,Ps as o};
