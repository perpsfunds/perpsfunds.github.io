const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./add-Bt5GX7cF.js","./lit-element-DtC7ycQA.js","./all-wallets-WiX8Md8I.js","./arrow-bottom-circle-DLli6j3Q.js","./app-store-u37yzCW1.js","./apple-DcEP8ugP.js","./arrow-bottom-DwhIPSUy.js","./arrow-left-BSO70sxq.js","./arrow-right-D6GjHJMU.js","./arrow-top-L85tlXrM.js","./bank-BcCMCWsa.js","./browser-Cq3gJjw6.js","./card-CsHe92ot.js","./checkmark-CItOVwsy.js","./checkmark-bold-TpmGGmBl.js","./chevron-bottom-DMvV_bSi.js","./chevron-left-jxIYjEKf.js","./chevron-right-DomIMfgR.js","./chevron-top-91vi_Wv7.js","./chrome-store-BZSllhOX.js","./clock-Bnq6l2yg.js","./close-C1KFZOqi.js","./compass-C2TIYcKa.js","./coinPlaceholder-h_PdmUHe.js","./copy-3F0VQ7C8.js","./cursor-D5mYskOq.js","./cursor-transparent-BQEk8vQp.js","./desktop-CeNh-A4Z.js","./disconnect-CU1jJ2ff.js","./discord-CSazvVcu.js","./etherscan-C_JD9wr0.js","./extension-CNekjwhR.js","./external-link-DxypJqgm.js","./facebook-nOUOz8d3.js","./farcaster-Bxh7FXNV.js","./filters-UH5FFMex.js","./github-CkGRU4cO.js","./google-D9ZqCYLL.js","./help-circle-DkP_SFdF.js","./image-DEdT0iQa.js","./id-XBplzKe_.js","./info-circle-Ywpr8Hqf.js","./lightbulb-BgJhU3Ik.js","./mail-C-WNkMwl.js","./mobile-CyZKKBiq.js","./more-gv6j1Kqp.js","./network-placeholder-BTW-bC0t.js","./nftPlaceholder-hGVhx-Be.js","./off-Dx8ZYvuD.js","./play-store-CTbt4so6.js","./plus-DIViaEeM.js","./qr-code-CHYrbS1A.js","./recycle-horizontal-oVIC-Lx6.js","./refresh-DQo2VZyh.js","./search-C-sgFeEG.js","./send-xO7Nkisg.js","./swapHorizontal-DtbYtxc-.js","./swapHorizontalMedium-DvFonsJ1.js","./swapHorizontalBold-DbA2vNSA.js","./swapHorizontalRoundedBold-vZmSypnW.js","./swapVertical-Cr7p4LML.js","./telegram-wsOXopsx.js","./three-dots-DM-tHDIU.js","./twitch-mj9U-m0t.js","./x-BN139Yxc.js","./twitterIcon-Dj10I7Wl.js","./verify-5o7gw6p4.js","./verify-filled-Dqlis8Wt.js","./wallet-n9IVh8O_.js","./walletconnect-BNCoEVou.js","./wallet-placeholder-DtJShmfC.js","./warning-circle-DURyqmzF.js","./info-7Tvgu79q.js","./exclamation-triangle-Bd9XKwLi.js","./reown-logo-ShDjQTKL.js"])))=>i.map(i=>d[i]);
import{_ as i}from"./preload-helper-C1FmrZbK.js";import{E as D,i as R,a as P,b as y}from"./lit-element-DtC7ycQA.js";import{e as A,n as l,a as b}from"./if-defined-C4fzy_I7.js";import{f as $,n as x}from"./async-directive-bXsoyszS.js";import{r as T,c as C}from"./ChainAdapterBlueprint-BnFwC0EC.js";const w={getSpacingStyles(t,r){if(Array.isArray(t))return t[r]?`var(--wui-spacing-${t[r]})`:void 0;if(typeof t=="string")return`var(--wui-spacing-${t})`},getFormattedDate(t){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(t)},getHostName(t){try{return new URL(t).hostname}catch{return""}},getTruncateString({string:t,charsStart:r,charsEnd:e,truncate:o}){return t.length<=r+e?t:o==="end"?`${t.substring(0,r)}...`:o==="start"?`...${t.substring(t.length-e)}`:`${t.substring(0,Math.floor(r))}...${t.substring(t.length-Math.floor(e))}`},generateAvatarColors(t){const e=t.toLowerCase().replace(/^0x/iu,"").replace(/[^a-f0-9]/gu,"").substring(0,6).padEnd(6,"0"),o=this.hexToRgb(e),n=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),c=100-3*Number(n==null?void 0:n.replace("px","")),s=`${c}% ${c}% at 65% 40%`,_=[];for(let d=0;d<5;d+=1){const p=this.tintColor(o,.15*d);_.push(`rgb(${p[0]}, ${p[1]}, ${p[2]})`)}return`
    --local-color-1: ${_[0]};
    --local-color-2: ${_[1]};
    --local-color-3: ${_[2]};
    --local-color-4: ${_[3]};
    --local-color-5: ${_[4]};
    --local-radial-circle: ${s}
   `},hexToRgb(t){const r=parseInt(t,16),e=r>>16&255,o=r>>8&255,n=r&255;return[e,o,n]},tintColor(t,r){const[e,o,n]=t,a=Math.round(e+(255-e)*r),c=Math.round(o+(255-o)*r),s=Math.round(n+(255-n)*r);return[a,c,s]},isNumber(t){return{number:/^[0-9]+$/u}.number.test(t)},getColorTheme(t){var r;return t||(typeof window<"u"&&window.matchMedia?(r=window.matchMedia("(prefers-color-scheme: dark)"))!=null&&r.matches?"dark":"light":"dark")},splitBalance(t){const r=t.split(".");return r.length===2?[r[0],r[1]]:["0","00"]},roundNumber(t,r,e){return t.toString().length>=r?Number(t).toFixed(e):t},formatNumberToLocalString(t,r=2){return t===void 0?"0.00":typeof t=="number"?t.toLocaleString("en-US",{maximumFractionDigits:r,minimumFractionDigits:r}):parseFloat(t).toLocaleString("en-US",{maximumFractionDigits:r,minimumFractionDigits:r})}};function z(t,r){const{kind:e,elements:o}=r;return{kind:e,elements:o,finisher(n){customElements.get(t)||customElements.define(t,n)}}}function k(t,r){return customElements.get(t)||customElements.define(t,r),r}function L(t){return function(e){return typeof e=="function"?k(t,e):z(t,e)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class B{constructor(r){this.G=r}disconnect(){this.G=void 0}reconnect(r){this.G=r}deref(){return this.G}}class H{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??(this.Y=new Promise(r=>this.Z=r))}resume(){var r;(r=this.Z)==null||r.call(this),this.Y=this.Z=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const I=t=>!x(t)&&typeof t.then=="function",O=1073741823;class F extends ${constructor(){super(...arguments),this._$Cwt=O,this._$Cbt=[],this._$CK=new B(this),this._$CX=new H}render(...r){return r.find(e=>!I(e))??D}update(r,e){const o=this._$Cbt;let n=o.length;this._$Cbt=e;const a=this._$CK,c=this._$CX;this.isConnected||this.disconnected();for(let s=0;s<e.length&&!(s>this._$Cwt);s++){const _=e[s];if(!I(_))return this._$Cwt=s,_;s<n&&_===o[s]||(this._$Cwt=O,n=0,Promise.resolve(_).then(async d=>{for(;c.get();)await c.get();const p=a.deref();if(p!==void 0){const S=p._$Cbt.indexOf(_);S>-1&&S<p._$Cwt&&(p._$Cwt=S,p.setValue(d))}}))}return D}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const j=A(F);class G{constructor(){this.cache=new Map}set(r,e){this.cache.set(r,e)}get(r){return this.cache.get(r)}has(r){return this.cache.has(r)}delete(r){this.cache.delete(r)}clear(){this.cache.clear()}}const E=new G,M=R`
  :host {
    display: flex;
    aspect-ratio: var(--local-aspect-ratio);
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }

  .fallback {
    width: var(--local-width);
    height: var(--local-height);
  }
`;var h=function(t,r,e,o){var n=arguments.length,a=n<3?r:o===null?o=Object.getOwnPropertyDescriptor(r,e):o,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(t,r,e,o);else for(var s=t.length-1;s>=0;s--)(c=t[s])&&(a=(n<3?c(a):n>3?c(r,e,a):c(r,e))||a);return n>3&&a&&Object.defineProperty(r,e,a),a};const V={add:async()=>(await i(async()=>{const{addSvg:t}=await import("./add-Bt5GX7cF.js");return{addSvg:t}},__vite__mapDeps([0,1]),import.meta.url)).addSvg,allWallets:async()=>(await i(async()=>{const{allWalletsSvg:t}=await import("./all-wallets-WiX8Md8I.js");return{allWalletsSvg:t}},__vite__mapDeps([2,1]),import.meta.url)).allWalletsSvg,arrowBottomCircle:async()=>(await i(async()=>{const{arrowBottomCircleSvg:t}=await import("./arrow-bottom-circle-DLli6j3Q.js");return{arrowBottomCircleSvg:t}},__vite__mapDeps([3,1]),import.meta.url)).arrowBottomCircleSvg,appStore:async()=>(await i(async()=>{const{appStoreSvg:t}=await import("./app-store-u37yzCW1.js");return{appStoreSvg:t}},__vite__mapDeps([4,1]),import.meta.url)).appStoreSvg,apple:async()=>(await i(async()=>{const{appleSvg:t}=await import("./apple-DcEP8ugP.js");return{appleSvg:t}},__vite__mapDeps([5,1]),import.meta.url)).appleSvg,arrowBottom:async()=>(await i(async()=>{const{arrowBottomSvg:t}=await import("./arrow-bottom-DwhIPSUy.js");return{arrowBottomSvg:t}},__vite__mapDeps([6,1]),import.meta.url)).arrowBottomSvg,arrowLeft:async()=>(await i(async()=>{const{arrowLeftSvg:t}=await import("./arrow-left-BSO70sxq.js");return{arrowLeftSvg:t}},__vite__mapDeps([7,1]),import.meta.url)).arrowLeftSvg,arrowRight:async()=>(await i(async()=>{const{arrowRightSvg:t}=await import("./arrow-right-D6GjHJMU.js");return{arrowRightSvg:t}},__vite__mapDeps([8,1]),import.meta.url)).arrowRightSvg,arrowTop:async()=>(await i(async()=>{const{arrowTopSvg:t}=await import("./arrow-top-L85tlXrM.js");return{arrowTopSvg:t}},__vite__mapDeps([9,1]),import.meta.url)).arrowTopSvg,bank:async()=>(await i(async()=>{const{bankSvg:t}=await import("./bank-BcCMCWsa.js");return{bankSvg:t}},__vite__mapDeps([10,1]),import.meta.url)).bankSvg,browser:async()=>(await i(async()=>{const{browserSvg:t}=await import("./browser-Cq3gJjw6.js");return{browserSvg:t}},__vite__mapDeps([11,1]),import.meta.url)).browserSvg,card:async()=>(await i(async()=>{const{cardSvg:t}=await import("./card-CsHe92ot.js");return{cardSvg:t}},__vite__mapDeps([12,1]),import.meta.url)).cardSvg,checkmark:async()=>(await i(async()=>{const{checkmarkSvg:t}=await import("./checkmark-CItOVwsy.js");return{checkmarkSvg:t}},__vite__mapDeps([13,1]),import.meta.url)).checkmarkSvg,checkmarkBold:async()=>(await i(async()=>{const{checkmarkBoldSvg:t}=await import("./checkmark-bold-TpmGGmBl.js");return{checkmarkBoldSvg:t}},__vite__mapDeps([14,1]),import.meta.url)).checkmarkBoldSvg,chevronBottom:async()=>(await i(async()=>{const{chevronBottomSvg:t}=await import("./chevron-bottom-DMvV_bSi.js");return{chevronBottomSvg:t}},__vite__mapDeps([15,1]),import.meta.url)).chevronBottomSvg,chevronLeft:async()=>(await i(async()=>{const{chevronLeftSvg:t}=await import("./chevron-left-jxIYjEKf.js");return{chevronLeftSvg:t}},__vite__mapDeps([16,1]),import.meta.url)).chevronLeftSvg,chevronRight:async()=>(await i(async()=>{const{chevronRightSvg:t}=await import("./chevron-right-DomIMfgR.js");return{chevronRightSvg:t}},__vite__mapDeps([17,1]),import.meta.url)).chevronRightSvg,chevronTop:async()=>(await i(async()=>{const{chevronTopSvg:t}=await import("./chevron-top-91vi_Wv7.js");return{chevronTopSvg:t}},__vite__mapDeps([18,1]),import.meta.url)).chevronTopSvg,chromeStore:async()=>(await i(async()=>{const{chromeStoreSvg:t}=await import("./chrome-store-BZSllhOX.js");return{chromeStoreSvg:t}},__vite__mapDeps([19,1]),import.meta.url)).chromeStoreSvg,clock:async()=>(await i(async()=>{const{clockSvg:t}=await import("./clock-Bnq6l2yg.js");return{clockSvg:t}},__vite__mapDeps([20,1]),import.meta.url)).clockSvg,close:async()=>(await i(async()=>{const{closeSvg:t}=await import("./close-C1KFZOqi.js");return{closeSvg:t}},__vite__mapDeps([21,1]),import.meta.url)).closeSvg,compass:async()=>(await i(async()=>{const{compassSvg:t}=await import("./compass-C2TIYcKa.js");return{compassSvg:t}},__vite__mapDeps([22,1]),import.meta.url)).compassSvg,coinPlaceholder:async()=>(await i(async()=>{const{coinPlaceholderSvg:t}=await import("./coinPlaceholder-h_PdmUHe.js");return{coinPlaceholderSvg:t}},__vite__mapDeps([23,1]),import.meta.url)).coinPlaceholderSvg,copy:async()=>(await i(async()=>{const{copySvg:t}=await import("./copy-3F0VQ7C8.js");return{copySvg:t}},__vite__mapDeps([24,1]),import.meta.url)).copySvg,cursor:async()=>(await i(async()=>{const{cursorSvg:t}=await import("./cursor-D5mYskOq.js");return{cursorSvg:t}},__vite__mapDeps([25,1]),import.meta.url)).cursorSvg,cursorTransparent:async()=>(await i(async()=>{const{cursorTransparentSvg:t}=await import("./cursor-transparent-BQEk8vQp.js");return{cursorTransparentSvg:t}},__vite__mapDeps([26,1]),import.meta.url)).cursorTransparentSvg,desktop:async()=>(await i(async()=>{const{desktopSvg:t}=await import("./desktop-CeNh-A4Z.js");return{desktopSvg:t}},__vite__mapDeps([27,1]),import.meta.url)).desktopSvg,disconnect:async()=>(await i(async()=>{const{disconnectSvg:t}=await import("./disconnect-CU1jJ2ff.js");return{disconnectSvg:t}},__vite__mapDeps([28,1]),import.meta.url)).disconnectSvg,discord:async()=>(await i(async()=>{const{discordSvg:t}=await import("./discord-CSazvVcu.js");return{discordSvg:t}},__vite__mapDeps([29,1]),import.meta.url)).discordSvg,etherscan:async()=>(await i(async()=>{const{etherscanSvg:t}=await import("./etherscan-C_JD9wr0.js");return{etherscanSvg:t}},__vite__mapDeps([30,1]),import.meta.url)).etherscanSvg,extension:async()=>(await i(async()=>{const{extensionSvg:t}=await import("./extension-CNekjwhR.js");return{extensionSvg:t}},__vite__mapDeps([31,1]),import.meta.url)).extensionSvg,externalLink:async()=>(await i(async()=>{const{externalLinkSvg:t}=await import("./external-link-DxypJqgm.js");return{externalLinkSvg:t}},__vite__mapDeps([32,1]),import.meta.url)).externalLinkSvg,facebook:async()=>(await i(async()=>{const{facebookSvg:t}=await import("./facebook-nOUOz8d3.js");return{facebookSvg:t}},__vite__mapDeps([33,1]),import.meta.url)).facebookSvg,farcaster:async()=>(await i(async()=>{const{farcasterSvg:t}=await import("./farcaster-Bxh7FXNV.js");return{farcasterSvg:t}},__vite__mapDeps([34,1]),import.meta.url)).farcasterSvg,filters:async()=>(await i(async()=>{const{filtersSvg:t}=await import("./filters-UH5FFMex.js");return{filtersSvg:t}},__vite__mapDeps([35,1]),import.meta.url)).filtersSvg,github:async()=>(await i(async()=>{const{githubSvg:t}=await import("./github-CkGRU4cO.js");return{githubSvg:t}},__vite__mapDeps([36,1]),import.meta.url)).githubSvg,google:async()=>(await i(async()=>{const{googleSvg:t}=await import("./google-D9ZqCYLL.js");return{googleSvg:t}},__vite__mapDeps([37,1]),import.meta.url)).googleSvg,helpCircle:async()=>(await i(async()=>{const{helpCircleSvg:t}=await import("./help-circle-DkP_SFdF.js");return{helpCircleSvg:t}},__vite__mapDeps([38,1]),import.meta.url)).helpCircleSvg,image:async()=>(await i(async()=>{const{imageSvg:t}=await import("./image-DEdT0iQa.js");return{imageSvg:t}},__vite__mapDeps([39,1]),import.meta.url)).imageSvg,id:async()=>(await i(async()=>{const{idSvg:t}=await import("./id-XBplzKe_.js");return{idSvg:t}},__vite__mapDeps([40,1]),import.meta.url)).idSvg,infoCircle:async()=>(await i(async()=>{const{infoCircleSvg:t}=await import("./info-circle-Ywpr8Hqf.js");return{infoCircleSvg:t}},__vite__mapDeps([41,1]),import.meta.url)).infoCircleSvg,lightbulb:async()=>(await i(async()=>{const{lightbulbSvg:t}=await import("./lightbulb-BgJhU3Ik.js");return{lightbulbSvg:t}},__vite__mapDeps([42,1]),import.meta.url)).lightbulbSvg,mail:async()=>(await i(async()=>{const{mailSvg:t}=await import("./mail-C-WNkMwl.js");return{mailSvg:t}},__vite__mapDeps([43,1]),import.meta.url)).mailSvg,mobile:async()=>(await i(async()=>{const{mobileSvg:t}=await import("./mobile-CyZKKBiq.js");return{mobileSvg:t}},__vite__mapDeps([44,1]),import.meta.url)).mobileSvg,more:async()=>(await i(async()=>{const{moreSvg:t}=await import("./more-gv6j1Kqp.js");return{moreSvg:t}},__vite__mapDeps([45,1]),import.meta.url)).moreSvg,networkPlaceholder:async()=>(await i(async()=>{const{networkPlaceholderSvg:t}=await import("./network-placeholder-BTW-bC0t.js");return{networkPlaceholderSvg:t}},__vite__mapDeps([46,1]),import.meta.url)).networkPlaceholderSvg,nftPlaceholder:async()=>(await i(async()=>{const{nftPlaceholderSvg:t}=await import("./nftPlaceholder-hGVhx-Be.js");return{nftPlaceholderSvg:t}},__vite__mapDeps([47,1]),import.meta.url)).nftPlaceholderSvg,off:async()=>(await i(async()=>{const{offSvg:t}=await import("./off-Dx8ZYvuD.js");return{offSvg:t}},__vite__mapDeps([48,1]),import.meta.url)).offSvg,playStore:async()=>(await i(async()=>{const{playStoreSvg:t}=await import("./play-store-CTbt4so6.js");return{playStoreSvg:t}},__vite__mapDeps([49,1]),import.meta.url)).playStoreSvg,plus:async()=>(await i(async()=>{const{plusSvg:t}=await import("./plus-DIViaEeM.js");return{plusSvg:t}},__vite__mapDeps([50,1]),import.meta.url)).plusSvg,qrCode:async()=>(await i(async()=>{const{qrCodeIcon:t}=await import("./qr-code-CHYrbS1A.js");return{qrCodeIcon:t}},__vite__mapDeps([51,1]),import.meta.url)).qrCodeIcon,recycleHorizontal:async()=>(await i(async()=>{const{recycleHorizontalSvg:t}=await import("./recycle-horizontal-oVIC-Lx6.js");return{recycleHorizontalSvg:t}},__vite__mapDeps([52,1]),import.meta.url)).recycleHorizontalSvg,refresh:async()=>(await i(async()=>{const{refreshSvg:t}=await import("./refresh-DQo2VZyh.js");return{refreshSvg:t}},__vite__mapDeps([53,1]),import.meta.url)).refreshSvg,search:async()=>(await i(async()=>{const{searchSvg:t}=await import("./search-C-sgFeEG.js");return{searchSvg:t}},__vite__mapDeps([54,1]),import.meta.url)).searchSvg,send:async()=>(await i(async()=>{const{sendSvg:t}=await import("./send-xO7Nkisg.js");return{sendSvg:t}},__vite__mapDeps([55,1]),import.meta.url)).sendSvg,swapHorizontal:async()=>(await i(async()=>{const{swapHorizontalSvg:t}=await import("./swapHorizontal-DtbYtxc-.js");return{swapHorizontalSvg:t}},__vite__mapDeps([56,1]),import.meta.url)).swapHorizontalSvg,swapHorizontalMedium:async()=>(await i(async()=>{const{swapHorizontalMediumSvg:t}=await import("./swapHorizontalMedium-DvFonsJ1.js");return{swapHorizontalMediumSvg:t}},__vite__mapDeps([57,1]),import.meta.url)).swapHorizontalMediumSvg,swapHorizontalBold:async()=>(await i(async()=>{const{swapHorizontalBoldSvg:t}=await import("./swapHorizontalBold-DbA2vNSA.js");return{swapHorizontalBoldSvg:t}},__vite__mapDeps([58,1]),import.meta.url)).swapHorizontalBoldSvg,swapHorizontalRoundedBold:async()=>(await i(async()=>{const{swapHorizontalRoundedBoldSvg:t}=await import("./swapHorizontalRoundedBold-vZmSypnW.js");return{swapHorizontalRoundedBoldSvg:t}},__vite__mapDeps([59,1]),import.meta.url)).swapHorizontalRoundedBoldSvg,swapVertical:async()=>(await i(async()=>{const{swapVerticalSvg:t}=await import("./swapVertical-Cr7p4LML.js");return{swapVerticalSvg:t}},__vite__mapDeps([60,1]),import.meta.url)).swapVerticalSvg,telegram:async()=>(await i(async()=>{const{telegramSvg:t}=await import("./telegram-wsOXopsx.js");return{telegramSvg:t}},__vite__mapDeps([61,1]),import.meta.url)).telegramSvg,threeDots:async()=>(await i(async()=>{const{threeDotsSvg:t}=await import("./three-dots-DM-tHDIU.js");return{threeDotsSvg:t}},__vite__mapDeps([62,1]),import.meta.url)).threeDotsSvg,twitch:async()=>(await i(async()=>{const{twitchSvg:t}=await import("./twitch-mj9U-m0t.js");return{twitchSvg:t}},__vite__mapDeps([63,1]),import.meta.url)).twitchSvg,twitter:async()=>(await i(async()=>{const{xSvg:t}=await import("./x-BN139Yxc.js");return{xSvg:t}},__vite__mapDeps([64,1]),import.meta.url)).xSvg,twitterIcon:async()=>(await i(async()=>{const{twitterIconSvg:t}=await import("./twitterIcon-Dj10I7Wl.js");return{twitterIconSvg:t}},__vite__mapDeps([65,1]),import.meta.url)).twitterIconSvg,verify:async()=>(await i(async()=>{const{verifySvg:t}=await import("./verify-5o7gw6p4.js");return{verifySvg:t}},__vite__mapDeps([66,1]),import.meta.url)).verifySvg,verifyFilled:async()=>(await i(async()=>{const{verifyFilledSvg:t}=await import("./verify-filled-Dqlis8Wt.js");return{verifyFilledSvg:t}},__vite__mapDeps([67,1]),import.meta.url)).verifyFilledSvg,wallet:async()=>(await i(async()=>{const{walletSvg:t}=await import("./wallet-n9IVh8O_.js");return{walletSvg:t}},__vite__mapDeps([68,1]),import.meta.url)).walletSvg,walletConnect:async()=>(await i(async()=>{const{walletConnectSvg:t}=await import("./walletconnect-BNCoEVou.js");return{walletConnectSvg:t}},__vite__mapDeps([69,1]),import.meta.url)).walletConnectSvg,walletConnectLightBrown:async()=>(await i(async()=>{const{walletConnectLightBrownSvg:t}=await import("./walletconnect-BNCoEVou.js");return{walletConnectLightBrownSvg:t}},__vite__mapDeps([69,1]),import.meta.url)).walletConnectLightBrownSvg,walletConnectBrown:async()=>(await i(async()=>{const{walletConnectBrownSvg:t}=await import("./walletconnect-BNCoEVou.js");return{walletConnectBrownSvg:t}},__vite__mapDeps([69,1]),import.meta.url)).walletConnectBrownSvg,walletPlaceholder:async()=>(await i(async()=>{const{walletPlaceholderSvg:t}=await import("./wallet-placeholder-DtJShmfC.js");return{walletPlaceholderSvg:t}},__vite__mapDeps([70,1]),import.meta.url)).walletPlaceholderSvg,warningCircle:async()=>(await i(async()=>{const{warningCircleSvg:t}=await import("./warning-circle-DURyqmzF.js");return{warningCircleSvg:t}},__vite__mapDeps([71,1]),import.meta.url)).warningCircleSvg,x:async()=>(await i(async()=>{const{xSvg:t}=await import("./x-BN139Yxc.js");return{xSvg:t}},__vite__mapDeps([64,1]),import.meta.url)).xSvg,info:async()=>(await i(async()=>{const{infoSvg:t}=await import("./info-7Tvgu79q.js");return{infoSvg:t}},__vite__mapDeps([72,1]),import.meta.url)).infoSvg,exclamationTriangle:async()=>(await i(async()=>{const{exclamationTriangleSvg:t}=await import("./exclamation-triangle-Bd9XKwLi.js");return{exclamationTriangleSvg:t}},__vite__mapDeps([73,1]),import.meta.url)).exclamationTriangleSvg,reown:async()=>(await i(async()=>{const{reownSvg:t}=await import("./reown-logo-ShDjQTKL.js");return{reownSvg:t}},__vite__mapDeps([74,1]),import.meta.url)).reownSvg};async function W(t){if(E.has(t))return E.get(t);const e=(V[t]??V.copy)();return E.set(t,e),e}let g=class extends P{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300",this.aspectRatio="1 / 1"}render(){return this.style.cssText=`
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
      --local-aspect-ratio: ${this.aspectRatio}
    `,y`${j(W(this.name),y`<div class="fallback"></div>`)}`}};g.styles=[T,C,M];h([l()],g.prototype,"size",void 0);h([l()],g.prototype,"name",void 0);h([l()],g.prototype,"color",void 0);h([l()],g.prototype,"aspectRatio",void 0);g=h([L("wui-icon")],g);const U=R`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-title-600 {
    font-size: var(--wui-font-size-title);
    letter-spacing: var(--wui-letter-spacing-title);
  }

  .wui-font-title-6-600 {
    font-size: var(--wui-font-size-title-6);
    letter-spacing: var(--wui-letter-spacing-title-6);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-medium-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-title-6-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }

  :host([disabled]) {
    opacity: 0.4;
  }
`;var f=function(t,r,e,o){var n=arguments.length,a=n<3?r:o===null?o=Object.getOwnPropertyDescriptor(r,e):o,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(t,r,e,o);else for(var s=t.length-1;s>=0;s--)(c=t[s])&&(a=(n<3?c(a):n>3?c(r,e,a):c(r,e))||a);return n>3&&a&&Object.defineProperty(r,e,a),a};let v=class extends P{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){const r={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,y`<slot class=${b(r)}></slot>`}};v.styles=[T,U];f([l()],v.prototype,"variant",void 0);f([l()],v.prototype,"color",void 0);f([l()],v.prototype,"align",void 0);f([l()],v.prototype,"lineClamp",void 0);v=f([L("wui-text")],v);const N=R`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var m=function(t,r,e,o){var n=arguments.length,a=n<3?r:o===null?o=Object.getOwnPropertyDescriptor(r,e):o,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(t,r,e,o);else for(var s=t.length-1;s>=0;s--)(c=t[s])&&(a=(n<3?c(a):n>3?c(r,e,a):c(r,e))||a);return n>3&&a&&Object.defineProperty(r,e,a),a};let u=class extends P{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&w.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&w.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&w.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&w.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&w.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&w.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&w.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&w.getSpacingStyles(this.margin,3)};
    `,y`<slot></slot>`}};u.styles=[T,N];m([l()],u.prototype,"flexDirection",void 0);m([l()],u.prototype,"flexWrap",void 0);m([l()],u.prototype,"flexBasis",void 0);m([l()],u.prototype,"flexGrow",void 0);m([l()],u.prototype,"flexShrink",void 0);m([l()],u.prototype,"alignItems",void 0);m([l()],u.prototype,"justifyContent",void 0);m([l()],u.prototype,"columnGap",void 0);m([l()],u.prototype,"rowGap",void 0);m([l()],u.prototype,"gap",void 0);m([l()],u.prototype,"padding",void 0);m([l()],u.prototype,"margin",void 0);u=m([L("wui-flex")],u);export{w as U,L as c};
