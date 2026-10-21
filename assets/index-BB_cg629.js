import{U as w,c as y}from"./index-C6ISFxGW.js";import{D as b}from"./vendor-ethers-CXIjk7po.js";import{i as _,a as v,b as F}from"./lit-element-DtC7ycQA.js";import"./index-BWZSui3k.js";import{r as f}from"./ChainAdapterBlueprint-BnFwC0EC.js";const D=3,I=["receive","deposit","borrow","claim"],R=["withdraw","repay","burn"],r={getTransactionGroupTitle(e,i){const o=b.getYear(),u=b.getMonthNameByIndex(i);return e===o?u:`${u} ${e}`},getTransactionImages(e){const[i,o]=e,u=!!i&&(e==null?void 0:e.every(l=>!!l.nft_info)),n=(e==null?void 0:e.length)>1;return(e==null?void 0:e.length)===2&&!u?[this.getTransactionImage(i),this.getTransactionImage(o)]:n?e.map(l=>this.getTransactionImage(l)):[this.getTransactionImage(i)]},getTransactionImage(e){return{type:r.getTransactionTransferTokenType(e),url:r.getTransactionImageURL(e)}},getTransactionImageURL(e){var n,t,l,c,p;let i;const o=!!(e!=null&&e.nft_info),u=!!(e!=null&&e.fungible_info);return e&&o?i=(l=(t=(n=e==null?void 0:e.nft_info)==null?void 0:n.content)==null?void 0:t.preview)==null?void 0:l.url:e&&u&&(i=(p=(c=e==null?void 0:e.fungible_info)==null?void 0:c.icon)==null?void 0:p.url),i},getTransactionTransferTokenType(e){if(e!=null&&e.fungible_info)return"FUNGIBLE";if(e!=null&&e.nft_info)return"NFT"},getTransactionDescriptions(e){var h,s,x;const i=(h=e==null?void 0:e.metadata)==null?void 0:h.operationType,o=e==null?void 0:e.transfers,u=((s=e==null?void 0:e.transfers)==null?void 0:s.length)>0,n=((x=e==null?void 0:e.transfers)==null?void 0:x.length)>1,t=u&&(o==null?void 0:o.every(g=>!!(g!=null&&g.fungible_info))),[l,c]=o;let p=this.getTransferDescription(l),T=this.getTransferDescription(c);if(!u)return(i==="send"||i==="receive")&&t?(p=w.getTruncateString({string:e==null?void 0:e.metadata.sentFrom,charsStart:4,charsEnd:6,truncate:"middle"}),T=w.getTruncateString({string:e==null?void 0:e.metadata.sentTo,charsStart:4,charsEnd:6,truncate:"middle"}),[p,T]):[e.metadata.status];if(n)return o.map(g=>this.getTransferDescription(g));let m="";return I.includes(i)?m="+":R.includes(i)&&(m="-"),p=m.concat(p),[p]},getTransferDescription(e){var o;let i="";return e&&(e!=null&&e.nft_info?i=((o=e==null?void 0:e.nft_info)==null?void 0:o.name)||"-":e!=null&&e.fungible_info&&(i=this.getFungibleTransferDescription(e)||"-")),i},getFungibleTransferDescription(e){var u;return e?[this.getQuantityFixedValue(e==null?void 0:e.quantity.numeric),(u=e==null?void 0:e.fungible_info)==null?void 0:u.symbol].join(" ").trim():null},getQuantityFixedValue(e){return e?parseFloat(e).toFixed(D):null}},L=_`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;var U=function(e,i,o,u){var n=arguments.length,t=n<3?i:u===null?u=Object.getOwnPropertyDescriptor(i,o):u,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(e,i,o,u);else for(var c=e.length-1;c>=0;c--)(l=e[c])&&(t=(n<3?l(t):n>3?l(i,o,t):l(i,o))||t);return n>3&&t&&Object.defineProperty(i,o,t),t};let d=class extends v{render(){return F`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `}};d.styles=[f,L];d=U([y("wui-transaction-list-item-loader")],d);export{r as T};
