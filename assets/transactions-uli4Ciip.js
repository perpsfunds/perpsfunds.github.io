import{i as c,a as s,b as f}from"./lit-element-DtC7ycQA.js";import"./ChainAdapterBlueprint-BnFwC0EC.js";import{c as a}from"./index-C6ISFxGW.js";import"./index-DgpMhKCW.js";import"./vendor-ethers-CXIjk7po.js";import"./vendor-react-DwYkqiWc.js";import"./browser-ponyfill-SIZP46kT.js";import"./formatUnits-Bw92Dgu5.js";import"./preload-helper-C1FmrZbK.js";import"./if-defined-C4fzy_I7.js";import"./async-directive-bXsoyszS.js";import"./index-BB_cg629.js";import"./index-BWZSui3k.js";import"./index-BPmlmgx-.js";import"./index-BmIFJ6Fe.js";import"./index-CswJV0RZ.js";const d=c`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;var u=function(o,i,e,r){var n=arguments.length,t=n<3?i:r===null?r=Object.getOwnPropertyDescriptor(i,e):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(o,i,e,r);else for(var m=o.length-1;m>=0;m--)(l=o[m])&&(t=(n<3?l(t):n>3?l(i,e,t):l(i,e))||t);return n>3&&t&&Object.defineProperty(i,e,t),t};let p=class extends s{render(){return f`
      <wui-flex flexDirection="column" .padding=${["0","m","m","m"]} gap="s">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};p.styles=d;p=u([a("w3m-transactions-view")],p);export{p as W3mTransactionsView};
