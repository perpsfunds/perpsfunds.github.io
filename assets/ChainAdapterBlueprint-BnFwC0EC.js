import{r as ae,i as Ue}from"./lit-element-DtC7ycQA.js";import{w as g,x as b,y as lt,c as $,z as zt,o as be,r as jt,n as $t,A as Ht,d as ht}from"./vendor-ethers-CXIjk7po.js";import{g as Vt}from"./vendor-react-DwYkqiWc.js";import{q as Pt}from"./browser-ponyfill-SIZP46kT.js";import{f as Kt}from"./formatUnits-Bw92Dgu5.js";const Gt=Symbol(),_t=Object.getPrototypeOf,Ct=new WeakMap,qt=e=>e&&(Ct.has(e)?Ct.get(e):_t(e)===Object.prototype||_t(e)===Array.prototype),Yt=e=>qt(e)&&e[Gt]||null,vt=(e,t=!0)=>{Ct.set(e,t)},st={},ut=e=>typeof e=="object"&&e!==null,Ee=new WeakMap,We=new WeakSet,Xt=(e=Object.is,t=(u,p)=>new Proxy(u,p),r=u=>ut(u)&&!We.has(u)&&(Array.isArray(u)||!(Symbol.iterator in u))&&!(u instanceof WeakMap)&&!(u instanceof WeakSet)&&!(u instanceof Error)&&!(u instanceof Number)&&!(u instanceof Date)&&!(u instanceof String)&&!(u instanceof RegExp)&&!(u instanceof ArrayBuffer),n=u=>{switch(u.status){case"fulfilled":return u.value;case"rejected":throw u.reason;default:throw u}},s=new WeakMap,a=(u,p,f=n)=>{const W=s.get(u);if((W==null?void 0:W[0])===p)return W[1];const V=Array.isArray(u)?[]:Object.create(Object.getPrototypeOf(u));return vt(V,!0),s.set(u,[p,V]),Reflect.ownKeys(u).forEach(h=>{if(Object.getOwnPropertyDescriptor(V,h))return;const F=Reflect.get(u,h),{enumerable:ie}=Reflect.getOwnPropertyDescriptor(u,h),M={value:F,enumerable:ie,configurable:!0};if(We.has(F))vt(F,!1);else if(F instanceof Promise)delete M.value,M.get=()=>f(F);else if(Ee.has(F)){const[de,ce]=Ee.get(F);M.value=a(de,ce(),f)}Object.defineProperty(V,h,M)}),Object.preventExtensions(V)},o=new WeakMap,l=[1,1],c=u=>{if(!ut(u))throw new Error("object required");const p=o.get(u);if(p)return p;let f=l[0];const W=new Set,V=(k,T=++l[0])=>{f!==T&&(f=T,W.forEach(v=>v(k,T)))};let h=l[1];const F=(k=++l[1])=>(h!==k&&!W.size&&(h=k,M.forEach(([T])=>{const v=T[1](k);v>f&&(f=v)})),f),ie=k=>(T,v)=>{const q=[...T];q[1]=[k,...q[1]],V(q,v)},M=new Map,de=(k,T)=>{if((st?"production":void 0)!=="production"&&M.has(k))throw new Error("prop listener already exists");if(W.size){const v=T[3](ie(k));M.set(k,[T,v])}else M.set(k,[T])},ce=k=>{var T;const v=M.get(k);v&&(M.delete(k),(T=v[1])==null||T.call(v))},z=k=>(W.add(k),W.size===1&&M.forEach(([v,q],Ie)=>{if((st?"production":void 0)!=="production"&&q)throw new Error("remove already exists");const Me=v[3](ie(Ie));M.set(Ie,[v,Me])}),()=>{W.delete(k),W.size===0&&M.forEach(([v,q],Ie)=>{q&&(q(),M.set(Ie,[v]))})}),ct=Array.isArray(u)?[]:Object.create(Object.getPrototypeOf(u)),Xe=t(ct,{deleteProperty(k,T){const v=Reflect.get(k,T);ce(T);const q=Reflect.deleteProperty(k,T);return q&&V(["delete",[T],v]),q},set(k,T,v,q){const Ie=Reflect.has(k,T),Me=Reflect.get(k,T,q);if(Ie&&(e(Me,v)||o.has(v)&&e(Me,o.get(v))))return!0;ce(T),ut(v)&&(v=Yt(v)||v);let Je=v;if(v instanceof Promise)v.then(ge=>{v.status="fulfilled",v.value=ge,V(["resolve",[T],ge])}).catch(ge=>{v.status="rejected",v.reason=ge,V(["reject",[T],ge])});else{!Ee.has(v)&&r(v)&&(Je=c(v));const ge=!We.has(Je)&&Ee.get(Je);ge&&de(T,ge)}return Reflect.set(k,T,Je,q),V(["set",[T],v,Me]),!0}});o.set(u,Xe);const Ft=[ct,F,a,z];return Ee.set(Xe,Ft),Reflect.ownKeys(u).forEach(k=>{const T=Object.getOwnPropertyDescriptor(u,k);"value"in T&&(Xe[k]=u[k],delete T.value,delete T.writable),Object.defineProperty(ct,k,T)}),Xe})=>[c,Ee,We,e,t,r,n,s,a,o,l],[Jt]=Xt();function B(e={}){return Jt(e)}function K(e,t,r){const n=Ee.get(e);(st?"production":void 0)!=="production"&&!n&&console.warn("Please use proxy object");let s;const a=[],o=n[3];let l=!1;const u=o(p=>{a.push(p),s||(s=Promise.resolve().then(()=>{s=void 0,l&&t(a.splice(0))}))});return l=!0,()=>{l=!1,u()}}function $e(e,t){const r=Ee.get(e);(st?"production":void 0)!=="production"&&!r&&console.warn("Please use proxy object");const[n,s,a]=r;return a(n,s(),t)}function Ne(e){return We.add(e),e}function G(e,t,r,n){let s=e[t];return K(e,()=>{const a=e[t];Object.is(s,a)||r(s=a)})}function Qt(e){const t=B({data:Array.from([]),has(r){return this.data.some(n=>n[0]===r)},set(r,n){const s=this.data.find(a=>a[0]===r);return s?s[1]=n:this.data.push([r,n]),this},get(r){var n;return(n=this.data.find(s=>s[0]===r))==null?void 0:n[1]},delete(r){const n=this.data.findIndex(s=>s[0]===r);return n===-1?!1:(this.data.splice(n,1),!0)},clear(){this.data.splice(0)},get size(){return this.data.length},toJSON(){return new Map(this.data)},forEach(r){this.data.forEach(n=>{r(n[1],n[0],this)})},keys(){return this.data.map(r=>r[0]).values()},values(){return this.data.map(r=>r[1]).values()},entries(){return new Map(this.data).entries()},get[Symbol.toStringTag](){return"Map"},[Symbol.iterator](){return this.entries()}});return Object.defineProperties(t,{data:{enumerable:!1},size:{enumerable:!1},toJSON:{enumerable:!1}}),Object.seal(t),t}var St={};const dt=(typeof process<"u"&&typeof St<"u"?St.NEXT_PUBLIC_SECURE_SITE_ORIGIN:void 0)||"https://secure.walletconnect.org",un=[{label:"Coinbase",name:"coinbase",feeRange:"1-2%",url:"",supportedChains:["eip155"]},{label:"Meld.io",name:"meld",feeRange:"1-2%",url:"https://meldcrypto.com",supportedChains:["eip155","solana"]}],dn="WXETMuFUQmqqybHuRkSgxv:25B8LJHSfpG6LVjR2ytU5Cwh7Z4Sch2ocoU",te={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,FIVE_SEC_MS:5e3,THREE_SEC_MS:3e3,ONE_SEC_MS:1e3,SECURE_SITE:dt,SECURE_SITE_DASHBOARD:`${dt}/dashboard`,SECURE_SITE_FAVICON:`${dt}/images/favicon.png`,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],WC_COINBASE_PAY_SDK_CHAINS:["ethereum","arbitrum","polygon","berachain","avalanche-c-chain","optimism","celo","base"],WC_COINBASE_PAY_SDK_FALLBACK_CHAIN:"ethereum",WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP:{Ethereum:"ethereum","Arbitrum One":"arbitrum",Polygon:"polygon",Berachain:"berachain",Avalanche:"avalanche-c-chain","OP Mainnet":"optimism",Celo:"celo",Base:"base"},WC_COINBASE_ONRAMP_APP_ID:"bf18c88d-495a-463b-b249-0b9d3656cf5e",SWAP_SUGGESTED_TOKENS:["ETH","UNI","1INCH","AAVE","SOL","ADA","AVAX","DOT","LINK","NITRO","GAIA","MILK","TRX","NEAR","GNO","WBTC","DAI","WETH","USDC","USDT","ARB","BAL","BICO","CRV","ENS","MATIC","OP"],SWAP_POPULAR_TOKENS:["ETH","UNI","1INCH","AAVE","SOL","ADA","AVAX","DOT","LINK","NITRO","GAIA","MILK","TRX","NEAR","GNO","WBTC","DAI","WETH","USDC","USDT","ARB","BAL","BICO","CRV","ENS","MATIC","OP","METAL","DAI","CHAMP","WOLF","SALE","BAL","BUSD","MUST","BTCpx","ROUTE","HEX","WELT","amDAI","VSQ","VISION","AURUM","pSP","SNX","VC","LINK","CHP","amUSDT","SPHERE","FOX","GIDDY","GFC","OMEN","OX_OLD","DE","WNT"],BALANCE_SUPPORTED_CHAINS:["eip155","solana"],SWAP_SUPPORTED_NETWORKS:["eip155:1","eip155:42161","eip155:10","eip155:324","eip155:8453","eip155:56","eip155:137","eip155:100","eip155:43114","eip155:250","eip155:8217","eip155:1313161554"],NAMES_SUPPORTED_CHAIN_NAMESPACES:["eip155"],ONRAMP_SUPPORTED_CHAIN_NAMESPACES:["eip155","solana"],ACTIVITY_ENABLED_CHAIN_NAMESPACES:["eip155"],NATIVE_TOKEN_ADDRESS:{eip155:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",solana:"So11111111111111111111111111111111111111111",polkadot:"0x",bip122:"0x",cosmos:"0x"},CONVERT_SLIPPAGE_TOLERANCE:1,CONNECT_LABELS:{MOBILE:"Open and continue in the wallet app",WEB:"Open and continue in the wallet app"},SEND_SUPPORTED_NAMESPACES:["eip155","solana"],DEFAULT_REMOTE_FEATURES:{swaps:["1inch"],onramp:["coinbase","meld"],email:!0,socials:["google","x","discord","farcaster","github","apple","facebook"],activity:!0,reownBranding:!0},DEFAULT_REMOTE_FEATURES_DISABLED:{email:!1,socials:!1,swaps:!1,onramp:!1,activity:!1,reownBranding:!1},DEFAULT_FEATURES:{receive:!0,send:!0,emailShowWallets:!0,connectorTypeOrder:["walletConnect","recent","injected","featured","custom","external","recommended"],analytics:!0,allWallets:!0,legalCheckbox:!1,smartSessions:!1,collapseWallets:!1,walletFeaturesOrder:["onramp","swaps","receive","send"],connectMethodsOrder:void 0,pay:!1},DEFAULT_SOCIALS:["google","x","farcaster","discord","apple","github","facebook"],DEFAULT_ACCOUNT_TYPES:{bip122:"payment",eip155:"smartAccount",polkadot:"eoa",solana:"eoa"},ADAPTER_TYPES:{UNIVERSAL:"universal",SOLANA:"solana",WAGMI:"wagmi",ETHERS:"ethers",ETHERS5:"ethers5",BITCOIN:"bitcoin"}},E={cacheExpiry:{portfolio:3e4,nativeBalance:3e4,ens:3e5,identity:3e5},isCacheExpired(e,t){return Date.now()-e>t},getActiveNetworkProps(){const e=E.getActiveNamespace(),t=E.getActiveCaipNetworkId(),r=t?t.split(":")[1]:void 0,n=r?isNaN(Number(r))?r:Number(r):void 0;return{namespace:e,caipNetworkId:t,chainId:n}},setWalletConnectDeepLink({name:e,href:t}){try{g.setItem(b.DEEPLINK_CHOICE,JSON.stringify({href:t,name:e}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{const e=g.getItem(b.DEEPLINK_CHOICE);if(e)return JSON.parse(e)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{g.removeItem(b.DEEPLINK_CHOICE)}catch{console.info("Unable to delete WalletConnect deep link")}},setActiveNamespace(e){try{g.setItem(b.ACTIVE_NAMESPACE,e)}catch{console.info("Unable to set active namespace")}},setActiveCaipNetworkId(e){try{g.setItem(b.ACTIVE_CAIP_NETWORK_ID,e),E.setActiveNamespace(e.split(":")[0])}catch{console.info("Unable to set active caip network id")}},getActiveCaipNetworkId(){try{return g.getItem(b.ACTIVE_CAIP_NETWORK_ID)}catch{console.info("Unable to get active caip network id");return}},deleteActiveCaipNetworkId(){try{g.removeItem(b.ACTIVE_CAIP_NETWORK_ID)}catch{console.info("Unable to delete active caip network id")}},deleteConnectedConnectorId(e){try{const t=lt(e);g.removeItem(t)}catch{console.info("Unable to delete connected connector id")}},setAppKitRecent(e){try{const t=E.getRecentWallets();t.find(n=>n.id===e.id)||(t.unshift(e),t.length>2&&t.pop(),g.setItem(b.RECENT_WALLETS,JSON.stringify(t)))}catch{console.info("Unable to set AppKit recent")}},getRecentWallets(){try{const e=g.getItem(b.RECENT_WALLETS);return e?JSON.parse(e):[]}catch{console.info("Unable to get AppKit recent")}return[]},setConnectedConnectorId(e,t){try{const r=lt(e);g.setItem(r,t)}catch{console.info("Unable to set Connected Connector Id")}},getActiveNamespace(){try{return g.getItem(b.ACTIVE_NAMESPACE)}catch{console.info("Unable to get active namespace")}},getConnectedConnectorId(e){if(e)try{const t=lt(e);return g.getItem(t)}catch{console.info("Unable to get connected connector id in namespace ",e)}},setConnectedSocialProvider(e){try{g.setItem(b.CONNECTED_SOCIAL,e)}catch{console.info("Unable to set connected social provider")}},getConnectedSocialProvider(){try{return g.getItem(b.CONNECTED_SOCIAL)}catch{console.info("Unable to get connected social provider")}},deleteConnectedSocialProvider(){try{g.removeItem(b.CONNECTED_SOCIAL)}catch{console.info("Unable to delete connected social provider")}},getConnectedSocialUsername(){try{return g.getItem(b.CONNECTED_SOCIAL_USERNAME)}catch{console.info("Unable to get connected social username")}},getStoredActiveCaipNetworkId(){var r;const e=g.getItem(b.ACTIVE_CAIP_NETWORK_ID);return(r=e==null?void 0:e.split(":"))==null?void 0:r[1]},setConnectionStatus(e){try{g.setItem(b.CONNECTION_STATUS,e)}catch{console.info("Unable to set connection status")}},getConnectionStatus(){try{return g.getItem(b.CONNECTION_STATUS)}catch{return}},getConnectedNamespaces(){try{const e=g.getItem(b.CONNECTED_NAMESPACES);return e!=null&&e.length?e.split(","):[]}catch{return[]}},setConnectedNamespaces(e){try{const t=Array.from(new Set(e));g.setItem(b.CONNECTED_NAMESPACES,t.join(","))}catch{console.info("Unable to set namespaces in storage")}},addConnectedNamespace(e){try{const t=E.getConnectedNamespaces();t.includes(e)||(t.push(e),E.setConnectedNamespaces(t))}catch{console.info("Unable to add connected namespace")}},removeConnectedNamespace(e){try{const t=E.getConnectedNamespaces(),r=t.indexOf(e);r>-1&&(t.splice(r,1),E.setConnectedNamespaces(t))}catch{console.info("Unable to remove connected namespace")}},getTelegramSocialProvider(){try{return g.getItem(b.TELEGRAM_SOCIAL_PROVIDER)}catch{return console.info("Unable to get telegram social provider"),null}},setTelegramSocialProvider(e){try{g.setItem(b.TELEGRAM_SOCIAL_PROVIDER,e)}catch{console.info("Unable to set telegram social provider")}},removeTelegramSocialProvider(){try{g.removeItem(b.TELEGRAM_SOCIAL_PROVIDER)}catch{console.info("Unable to remove telegram social provider")}},getBalanceCache(){let e={};try{const t=g.getItem(b.PORTFOLIO_CACHE);e=t?JSON.parse(t):{}}catch{console.info("Unable to get balance cache")}return e},removeAddressFromBalanceCache(e){try{const t=E.getBalanceCache();g.setItem(b.PORTFOLIO_CACHE,JSON.stringify({...t,[e]:void 0}))}catch{console.info("Unable to remove address from balance cache",e)}},getBalanceCacheForCaipAddress(e){try{const r=E.getBalanceCache()[e];if(r&&!this.isCacheExpired(r.timestamp,this.cacheExpiry.portfolio))return r.balance;E.removeAddressFromBalanceCache(e)}catch{console.info("Unable to get balance cache for address",e)}},updateBalanceCache(e){try{const t=E.getBalanceCache();t[e.caipAddress]=e,g.setItem(b.PORTFOLIO_CACHE,JSON.stringify(t))}catch{console.info("Unable to update balance cache",e)}},getNativeBalanceCache(){let e={};try{const t=g.getItem(b.NATIVE_BALANCE_CACHE);e=t?JSON.parse(t):{}}catch{console.info("Unable to get balance cache")}return e},removeAddressFromNativeBalanceCache(e){try{const t=E.getBalanceCache();g.setItem(b.NATIVE_BALANCE_CACHE,JSON.stringify({...t,[e]:void 0}))}catch{console.info("Unable to remove address from balance cache",e)}},getNativeBalanceCacheForCaipAddress(e){try{const r=E.getNativeBalanceCache()[e];if(r&&!this.isCacheExpired(r.timestamp,this.cacheExpiry.nativeBalance))return r;console.info("Discarding cache for address",e),E.removeAddressFromBalanceCache(e)}catch{console.info("Unable to get balance cache for address",e)}},updateNativeBalanceCache(e){try{const t=E.getNativeBalanceCache();t[e.caipAddress]=e,g.setItem(b.NATIVE_BALANCE_CACHE,JSON.stringify(t))}catch{console.info("Unable to update balance cache",e)}},getEnsCache(){let e={};try{const t=g.getItem(b.ENS_CACHE);e=t?JSON.parse(t):{}}catch{console.info("Unable to get ens name cache")}return e},getEnsFromCacheForAddress(e){try{const r=E.getEnsCache()[e];if(r&&!this.isCacheExpired(r.timestamp,this.cacheExpiry.ens))return r.ens;E.removeEnsFromCache(e)}catch{console.info("Unable to get ens name from cache",e)}},updateEnsCache(e){try{const t=E.getEnsCache();t[e.address]=e,g.setItem(b.ENS_CACHE,JSON.stringify(t))}catch{console.info("Unable to update ens name cache",e)}},removeEnsFromCache(e){try{const t=E.getEnsCache();g.setItem(b.ENS_CACHE,JSON.stringify({...t,[e]:void 0}))}catch{console.info("Unable to remove ens name from cache",e)}},getIdentityCache(){let e={};try{const t=g.getItem(b.IDENTITY_CACHE);e=t?JSON.parse(t):{}}catch{console.info("Unable to get identity cache")}return e},getIdentityFromCacheForAddress(e){try{const r=E.getIdentityCache()[e];if(r&&!this.isCacheExpired(r.timestamp,this.cacheExpiry.identity))return r.identity;E.removeIdentityFromCache(e)}catch{console.info("Unable to get identity from cache",e)}},updateIdentityCache(e){try{const t=E.getIdentityCache();t[e.address]={identity:e.identity,timestamp:e.timestamp},g.setItem(b.IDENTITY_CACHE,JSON.stringify(t))}catch{console.info("Unable to update identity cache",e)}},removeIdentityFromCache(e){try{const t=E.getIdentityCache();g.setItem(b.IDENTITY_CACHE,JSON.stringify({...t,[e]:void 0}))}catch{console.info("Unable to remove identity from cache",e)}},clearAddressCache(){try{g.removeItem(b.PORTFOLIO_CACHE),g.removeItem(b.NATIVE_BALANCE_CACHE),g.removeItem(b.ENS_CACHE),g.removeItem(b.IDENTITY_CACHE)}catch{console.info("Unable to clear address cache")}},setPreferredAccountTypes(e){try{g.setItem(b.PREFERRED_ACCOUNT_TYPES,JSON.stringify(e))}catch{console.info("Unable to set preferred account types",e)}},getPreferredAccountTypes(){try{const e=g.getItem(b.PREFERRED_ACCOUNT_TYPES);return e?JSON.parse(e):{}}catch{console.info("Unable to get preferred account types")}return{}},setConnections(e,t){try{const r={...E.getConnections(),[t]:e};g.setItem(b.CONNECTIONS,JSON.stringify(r))}catch(r){console.error("Unable to sync connections to storage",r)}},getConnections(){try{const e=g.getItem(b.CONNECTIONS);return e?JSON.parse(e):{}}catch(e){return console.error("Unable to get connections from storage",e),{}}}},I={isMobile(){var e;return this.isClient()?!!(typeof(window==null?void 0:window.matchMedia)=="function"&&((e=window==null?void 0:window.matchMedia("(pointer:coarse)"))!=null&&e.matches)||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},checkCaipNetwork(e,t=""){return e==null?void 0:e.caipNetworkId.toLocaleLowerCase().includes(t.toLowerCase())},isAndroid(){if(!this.isMobile())return!1;const e=window==null?void 0:window.navigator.userAgent.toLowerCase();return I.isMobile()&&e.includes("android")},isIos(){if(!this.isMobile())return!1;const e=window==null?void 0:window.navigator.userAgent.toLowerCase();return e.includes("iphone")||e.includes("ipad")},isSafari(){return this.isClient()?(window==null?void 0:window.navigator.userAgent.toLowerCase()).includes("safari"):!1},isClient(){return typeof window<"u"},isPairingExpired(e){return e?e-Date.now()<=te.TEN_SEC_MS:!0},isAllowedRetry(e,t=te.ONE_SEC_MS){return Date.now()-e>=t},copyToClopboard(e){navigator.clipboard.writeText(e)},isIframe(){try{return(window==null?void 0:window.self)!==(window==null?void 0:window.top)}catch{return!1}},isSafeApp(){var e,t;if(I.isClient()&&window.self!==window.top)try{const r=(t=(e=window==null?void 0:window.location)==null?void 0:e.ancestorOrigins)==null?void 0:t[0],n="https://app.safe.global";if(r){const s=new URL(r),a=new URL(n);return s.hostname===a.hostname}}catch{return!1}return!1},getPairingExpiry(){return Date.now()+te.FOUR_MINUTES_MS},getNetworkId(e){return e==null?void 0:e.split(":")[1]},getPlainAddress(e){return e==null?void 0:e.split(":")[2]},async wait(e){return new Promise(t=>{setTimeout(t,e)})},debounce(e,t=500){let r;return(...n)=>{function s(){e(...n)}r&&clearTimeout(r),r=setTimeout(s,t)}},isHttpUrl(e){return e.startsWith("http://")||e.startsWith("https://")},formatNativeUrl(e,t,r=null){if(I.isHttpUrl(e))return this.formatUniversalUrl(e,t);let n=e,s=r;n.includes("://")||(n=e.replaceAll("/","").replaceAll(":",""),n=`${n}://`),n.endsWith("/")||(n=`${n}/`),s&&!(s!=null&&s.endsWith("/"))&&(s=`${s}/`),this.isTelegram()&&this.isAndroid()&&(t=encodeURIComponent(t));const a=encodeURIComponent(t);return{redirect:`${n}wc?uri=${a}`,redirectUniversalLink:s?`${s}wc?uri=${a}`:void 0,href:n}},formatUniversalUrl(e,t){if(!I.isHttpUrl(e))return this.formatNativeUrl(e,t);let r=e;r.endsWith("/")||(r=`${r}/`);const n=encodeURIComponent(t);return{redirect:`${r}wc?uri=${n}`,href:r}},getOpenTargetForPlatform(e){return e==="popupWindow"?e:this.isTelegram()?E.getTelegramSocialProvider()?"_top":"_blank":e},openHref(e,t,r){window==null||window.open(e,this.getOpenTargetForPlatform(t),r||"noreferrer noopener")},returnOpenHref(e,t,r){return window==null?void 0:window.open(e,this.getOpenTargetForPlatform(t),r||"noreferrer noopener")},isTelegram(){return typeof window<"u"&&(!!window.TelegramWebviewProxy||!!window.Telegram||!!window.TelegramWebviewProxyProto)},isPWA(){var r,n,s;if(typeof window>"u")return!1;const e=(n=(r=window.matchMedia)==null?void 0:r.call(window,"(display-mode: standalone)"))==null?void 0:n.matches,t=(s=window==null?void 0:window.navigator)==null?void 0:s.standalone;return!!(e||t)},async preloadImage(e){const t=new Promise((r,n)=>{const s=new Image;s.onload=r,s.onerror=n,s.crossOrigin="anonymous",s.src=e});return Promise.race([t,I.wait(2e3)])},formatBalance(e,t){let r="0.000";if(typeof e=="string"){const n=Number(e);if(n){const s=Math.floor(n*1e3)/1e3;s&&(r=s.toString())}}return`${r}${t?` ${t}`:""}`},formatBalance2(e,t){var n;let r;if(e==="0")r="0";else if(typeof e=="string"){const s=Number(e);s&&(r=(n=s.toString().match(/^-?\d+(?:\.\d{0,3})?/u))==null?void 0:n[0])}return{value:r??"0",rest:r==="0"?"000":"",symbol:t}},getApiUrl(){return $.W3M_API_URL},getBlockchainApiUrl(){return $.BLOCKCHAIN_API_RPC_URL},getAnalyticsUrl(){return $.PULSE_API_URL},getUUID(){return crypto!=null&&crypto.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,e=>{const t=Math.random()*16|0;return(e==="x"?t:t&3|8).toString(16)})},parseError(e){var t,r;return typeof e=="string"?e:typeof((r=(t=e==null?void 0:e.issues)==null?void 0:t[0])==null?void 0:r.message)=="string"?e.issues[0].message:e instanceof Error?e.message:"Unknown error"},sortRequestedNetworks(e,t=[]){const r={};return t&&e&&(e.forEach((n,s)=>{r[n]=s}),t.sort((n,s)=>{const a=r[n.id],o=r[s.id];return a!==void 0&&o!==void 0?a-o:a!==void 0?-1:o!==void 0?1:0})),t},calculateBalance(e){let t=0;for(const r of e)t+=r.value??0;return t},formatTokenBalance(e){const t=e.toFixed(2),[r,n]=t.split(".");return{dollars:r,pennies:n}},isAddress(e,t="eip155"){switch(t){case"eip155":if(/^(?:0x)?[0-9a-f]{40}$/iu.test(e)){if(/^(?:0x)?[0-9a-f]{40}$/iu.test(e)||/^(?:0x)?[0-9A-F]{40}$/iu.test(e))return!0}else return!1;return!1;case"solana":return/[1-9A-HJ-NP-Za-km-z]{32,44}$/iu.test(e);default:return!1}},uniqueBy(e,t){const r=new Set;return e.filter(n=>{const s=n[t];return r.has(s)?!1:(r.add(s),!0)})},generateSdkVersion(e,t,r){const s=e.length===0?te.ADAPTER_TYPES.UNIVERSAL:e.map(a=>a.adapterType).join(",");return`${t}-${s}-${r}`},createAccount(e,t,r,n,s){return{namespace:e,address:t,type:r,publicKey:n,path:s}},isCaipAddress(e){if(typeof e!="string")return!1;const t=e.split(":"),r=t[0];return t.filter(Boolean).length===3&&r in $.CHAIN_NAME_MAP},isMac(){const e=window==null?void 0:window.navigator.userAgent.toLowerCase();return e.includes("macintosh")&&!e.includes("safari")},formatTelegramSocialLoginUrl(e){const t=`--${encodeURIComponent(window==null?void 0:window.location.href)}`,r="state=";if(new URL(e).host==="auth.magic.link"){const s="provider_authorization_url=",a=e.substring(e.indexOf(s)+s.length),o=this.injectIntoUrl(decodeURIComponent(a),r,t);return e.replace(a,encodeURIComponent(o))}return this.injectIntoUrl(e,r,t)},injectIntoUrl(e,t,r){const n=e.indexOf(t);if(n===-1)throw new Error(`${t} parameter not found in the URL: ${e}`);const s=e.indexOf("&",n),a=t.length,o=s!==-1?s:e.length,l=e.substring(0,n+a),c=e.substring(n+a,o),u=e.substring(s),p=c+r;return l+p+u}};async function Be(...e){const t=await fetch(...e);if(!t.ok)throw new Error(`HTTP status code: ${t.status}`,{cause:t});return t}class qe{constructor({baseUrl:t,clientId:r}){this.baseUrl=t,this.clientId=r}async get({headers:t,signal:r,cache:n,...s}){const a=this.createUrl(s);return(await Be(a,{method:"GET",headers:t,signal:r,cache:n})).json()}async getBlob({headers:t,signal:r,...n}){const s=this.createUrl(n);return(await Be(s,{method:"GET",headers:t,signal:r})).blob()}async post({body:t,headers:r,signal:n,...s}){const a=this.createUrl(s);return(await Be(a,{method:"POST",headers:r,body:t?JSON.stringify(t):void 0,signal:n})).json()}async put({body:t,headers:r,signal:n,...s}){const a=this.createUrl(s);return(await Be(a,{method:"PUT",headers:r,body:t?JSON.stringify(t):void 0,signal:n})).json()}async delete({body:t,headers:r,signal:n,...s}){const a=this.createUrl(s);return(await Be(a,{method:"DELETE",headers:r,body:t?JSON.stringify(t):void 0,signal:n})).json()}createUrl({path:t,params:r}){const n=new URL(t,this.baseUrl);return r&&Object.entries(r).forEach(([s,a])=>{a&&n.searchParams.append(s,a)}),this.clientId&&n.searchParams.append("clientId",this.clientId),n}}const Zt={getFeatureValue(e,t){const r=t==null?void 0:t[e];return r===void 0?te.DEFAULT_FEATURES[e]:r},filterSocialsByPlatform(e){if(!e||!e.length)return e;if(I.isTelegram()){if(I.isIos())return e.filter(t=>t!=="google");if(I.isMac())return e.filter(t=>t!=="x");if(I.isAndroid())return e.filter(t=>!["facebook","x"].includes(t))}return e}},m=B({features:te.DEFAULT_FEATURES,projectId:"",sdkType:"appkit",sdkVersion:"html-wagmi-undefined",defaultAccountTypes:te.DEFAULT_ACCOUNT_TYPES,enableNetworkSwitch:!0,experimental_preferUniversalLinks:!1,remoteFeatures:{}}),y={state:m,subscribeKey(e,t){return G(m,e,t)},setOptions(e){Object.assign(m,e)},setRemoteFeatures(e){var r;if(!e)return;const t={...m.remoteFeatures,...e};m.remoteFeatures=t,(r=m.remoteFeatures)!=null&&r.socials&&(m.remoteFeatures.socials=Zt.filterSocialsByPlatform(m.remoteFeatures.socials))},setFeatures(e){if(!e)return;m.features||(m.features=te.DEFAULT_FEATURES);const t={...m.features,...e};m.features=t},setProjectId(e){m.projectId=e},setCustomRpcUrls(e){m.customRpcUrls=e},setAllWallets(e){m.allWallets=e},setIncludeWalletIds(e){m.includeWalletIds=e},setExcludeWalletIds(e){m.excludeWalletIds=e},setFeaturedWalletIds(e){m.featuredWalletIds=e},setTokens(e){m.tokens=e},setTermsConditionsUrl(e){m.termsConditionsUrl=e},setPrivacyPolicyUrl(e){m.privacyPolicyUrl=e},setCustomWallets(e){m.customWallets=e},setIsSiweEnabled(e){m.isSiweEnabled=e},setIsUniversalProvider(e){m.isUniversalProvider=e},setSdkVersion(e){m.sdkVersion=e},setMetadata(e){m.metadata=e},setDisableAppend(e){m.disableAppend=e},setEIP6963Enabled(e){m.enableEIP6963=e},setDebug(e){m.debug=e},setEnableWalletConnect(e){m.enableWalletConnect=e},setEnableWalletGuide(e){m.enableWalletGuide=e},setEnableAuthLogger(e){m.enableAuthLogger=e},setEnableWallets(e){m.enableWallets=e},setPreferUniversalLinks(e){m.experimental_preferUniversalLinks=e},setHasMultipleAddresses(e){m.hasMultipleAddresses=e},setSIWX(e){m.siwx=e},setConnectMethodsOrder(e){m.features={...m.features,connectMethodsOrder:e}},setWalletFeaturesOrder(e){m.features={...m.features,walletFeaturesOrder:e}},setSocialsOrder(e){m.remoteFeatures={...m.remoteFeatures,socials:e}},setCollapseWallets(e){m.features={...m.features,collapseWallets:e}},setEnableEmbedded(e){m.enableEmbedded=e},setAllowUnsupportedChain(e){m.allowUnsupportedChain=e},setManualWCControl(e){m.manualWCControl=e},setEnableNetworkSwitch(e){m.enableNetworkSwitch=e},setDefaultAccountTypes(e={}){Object.entries(e).forEach(([t,r])=>{r&&(m.defaultAccountTypes[t]=r)})},setUniversalProviderConfigOverride(e){m.universalProviderConfigOverride=e},getUniversalProviderConfigOverride(){return m.universalProviderConfigOverride},getSnapshot(){return $e(m)}},er=Object.freeze({enabled:!0,events:[]}),tr=new qe({baseUrl:I.getAnalyticsUrl(),clientId:null}),rr=5,nr=60*1e3,he=B({...er}),sr={state:he,subscribeKey(e,t){return G(he,e,t)},async sendError(e,t){if(!he.enabled)return;const r=Date.now();if(he.events.filter(a=>{const o=new Date(a.properties.timestamp||"").getTime();return r-o<nr}).length>=rr)return;const s={type:"error",event:t,properties:{errorType:e.name,errorMessage:e.message,stackTrace:e.stack,timestamp:new Date().toISOString()}};he.events.push(s);try{if(typeof window>"u")return;const{projectId:a,sdkType:o,sdkVersion:l}=y.state;await tr.post({path:"/e",params:{projectId:a,st:o,sv:l||"html-wagmi-4.2.2"},body:{eventId:I.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:new Date().toISOString(),props:{type:"error",event:t,errorType:e.name,errorMessage:e.message,stackTrace:e.stack}}})}catch{}},enable(){he.enabled=!0},disable(){he.enabled=!1},clearEvents(){he.events=[]}};class Le extends Error{constructor(t,r,n){super(t),this.name="AppKitError",this.category=r,this.originalError=n,Object.setPrototypeOf(this,Le.prototype);let s=!1;if(n instanceof Error&&typeof n.stack=="string"&&n.stack){const a=n.stack,o=a.indexOf(`
`);if(o>-1){const l=a.substring(o+1);this.stack=`${this.name}: ${this.message}
${l}`,s=!0}}s||(Error.captureStackTrace?Error.captureStackTrace(this,Le):this.stack||(this.stack=`${this.name}: ${this.message}`))}}function Nt(e,t){const r=e instanceof Le?e:new Le(e instanceof Error?e.message:String(e),t,e);throw sr.sendError(r,r.category),r}function se(e,t="INTERNAL_SDK_ERROR"){const r={};return Object.keys(e).forEach(n=>{const s=e[n];if(typeof s=="function"){let a=s;s.constructor.name==="AsyncFunction"?a=async(...o)=>{try{return await s(...o)}catch(l){return Nt(l,t)}}:a=(...o)=>{try{return s(...o)}catch(l){return Nt(l,t)}},r[n]=a}else r[n]=s}),r}const le={PHANTOM:{id:"a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393",url:"https://phantom.app"},SOLFLARE:{id:"1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79",url:"https://solflare.com"},COINBASE:{id:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",url:"https://go.cb-w.com"}},ar={handleMobileDeeplinkRedirect(e,t){const r=window.location.href,n=encodeURIComponent(r);if(e===le.PHANTOM.id&&!("phantom"in window)){const s=r.startsWith("https")?"https":"http",a=r.split("/")[2],o=encodeURIComponent(`${s}://${a}`);window.location.href=`${le.PHANTOM.url}/ul/browse/${n}?ref=${o}`}e===le.SOLFLARE.id&&!("solflare"in window)&&(window.location.href=`${le.SOLFLARE.url}/ul/v1/browse/${n}?ref=${n}`),t===$.CHAIN.SOLANA&&e===le.COINBASE.id&&!("coinbaseSolana"in window)&&(window.location.href=`${le.COINBASE.url}/dapp?cb_url=${n}`)}},Z=B({walletImages:{},networkImages:{},chainImages:{},connectorImages:{},tokenImages:{},currencyImages:{}}),or={state:Z,subscribeNetworkImages(e){return K(Z.networkImages,()=>e(Z.networkImages))},subscribeKey(e,t){return G(Z,e,t)},subscribe(e){return K(Z,()=>e(Z))},setWalletImage(e,t){Z.walletImages[e]=t},setNetworkImage(e,t){Z.networkImages[e]=t},setChainImage(e,t){Z.chainImages[e]=t},setConnectorImage(e,t){Z.connectorImages={...Z.connectorImages,[e]:t}},setTokenImage(e,t){Z.tokenImages[e]=t},setCurrencyImage(e,t){Z.currencyImages[e]=t}},oe=se(or),ir={eip155:"ba0ba0cd-17c6-4806-ad93-f9d174f17900",solana:"a1b58899-f671-4276-6a5e-56ca5bd59700",polkadot:"",bip122:"0b4838db-0161-4ffe-022d-532bf03dba00",cosmos:""},pt=B({networkImagePromises:{}}),cr={async fetchWalletImage(e){if(e)return await C._fetchWalletImage(e),this.getWalletImageById(e)},async fetchNetworkImage(e){if(!e)return;const t=this.getNetworkImageById(e);return t||(pt.networkImagePromises[e]||(pt.networkImagePromises[e]=C._fetchNetworkImage(e)),await pt.networkImagePromises[e],this.getNetworkImageById(e))},getWalletImageById(e){if(e)return oe.state.walletImages[e]},getWalletImage(e){if(e!=null&&e.image_url)return e==null?void 0:e.image_url;if(e!=null&&e.image_id)return oe.state.walletImages[e.image_id]},getNetworkImage(e){var t,r,n;if((t=e==null?void 0:e.assets)!=null&&t.imageUrl)return(r=e==null?void 0:e.assets)==null?void 0:r.imageUrl;if((n=e==null?void 0:e.assets)!=null&&n.imageId)return oe.state.networkImages[e.assets.imageId]},getNetworkImageById(e){if(e)return oe.state.networkImages[e]},getConnectorImage(e){if(e!=null&&e.imageUrl)return e.imageUrl;if(e!=null&&e.imageId)return oe.state.connectorImages[e.imageId]},getChainImage(e){return oe.state.networkImages[ir[e]]}},Ce=B({message:"",variant:"info",open:!1}),lr={state:Ce,subscribeKey(e,t){return G(Ce,e,t)},open(e,t){const{debug:r}=y.state,{shortMessage:n,longMessage:s}=e;r&&(Ce.message=n,Ce.variant=t,Ce.open=!0),s&&console.error(typeof s=="function"?s():s)},close(){Ce.open=!1,Ce.message="",Ce.variant="info"}},ur=se(lr),dr=I.getAnalyticsUrl(),pr=new qe({baseUrl:dr,clientId:null}),fr=["MODAL_CREATED"],pe=B({timestamp:Date.now(),reportedErrors:{},data:{type:"track",event:"MODAL_CREATED"}}),H={state:pe,subscribe(e){return K(pe,()=>e(pe))},getSdkProperties(){const{projectId:e,sdkType:t,sdkVersion:r}=y.state;return{projectId:e,st:t,sv:r||"html-wagmi-4.2.2"}},async _sendAnalyticsEvent(e){try{const t=D.state.address;if(fr.includes(e.data.event)||typeof window>"u")return;await pr.post({path:"/e",params:H.getSdkProperties(),body:{eventId:I.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:e.timestamp,props:{...e.data,address:t}}}),pe.reportedErrors.FORBIDDEN=!1}catch(t){t instanceof Error&&t.cause instanceof Response&&t.cause.status===$.HTTP_STATUS_CODES.FORBIDDEN&&!pe.reportedErrors.FORBIDDEN&&(ur.open({shortMessage:"Invalid App Configuration",longMessage:`Origin ${zt()?window.origin:"uknown"} not found on Allowlist - update configuration on cloud.reown.com`},"error"),pe.reportedErrors.FORBIDDEN=!0)}},sendEvent(e){var t;pe.timestamp=Date.now(),pe.data=e,(t=y.state.features)!=null&&t.analytics&&H._sendAnalyticsEvent(pe)}},mr=I.getApiUrl(),Y=new qe({baseUrl:mr,clientId:null}),wr=40,It=4,gr=20,A=B({promises:{},page:1,count:0,featured:[],allFeatured:[],recommended:[],allRecommended:[],wallets:[],filteredWallets:[],search:[],isAnalyticsEnabled:!1,excludedWallets:[],isFetchingRecommendedWallets:!1}),C={state:A,subscribeKey(e,t){return G(A,e,t)},_getSdkProperties(){const{projectId:e,sdkType:t,sdkVersion:r}=y.state;return{projectId:e,st:t||"appkit",sv:r||"html-wagmi-4.2.2"}},_filterOutExtensions(e){return y.state.isUniversalProvider?e.filter(t=>!!(t.mobile_link||t.desktop_link||t.webapp_link)):e},async _fetchWalletImage(e){const t=`${Y.baseUrl}/getWalletImage/${e}`,r=await Y.getBlob({path:t,params:C._getSdkProperties()});oe.setWalletImage(e,URL.createObjectURL(r))},async _fetchNetworkImage(e){const t=`${Y.baseUrl}/public/getAssetImage/${e}`,r=await Y.getBlob({path:t,params:C._getSdkProperties()});oe.setNetworkImage(e,URL.createObjectURL(r))},async _fetchConnectorImage(e){const t=`${Y.baseUrl}/public/getAssetImage/${e}`,r=await Y.getBlob({path:t,params:C._getSdkProperties()});oe.setConnectorImage(e,URL.createObjectURL(r))},async _fetchCurrencyImage(e){const t=`${Y.baseUrl}/public/getCurrencyImage/${e}`,r=await Y.getBlob({path:t,params:C._getSdkProperties()});oe.setCurrencyImage(e,URL.createObjectURL(r))},async _fetchTokenImage(e){const t=`${Y.baseUrl}/public/getTokenImage/${e}`,r=await Y.getBlob({path:t,params:C._getSdkProperties()});oe.setTokenImage(e,URL.createObjectURL(r))},_filterWalletsByPlatform(e){return I.isMobile()?e==null?void 0:e.filter(r=>r.mobile_link||r.id===le.COINBASE.id?!0:i.state.activeChain==="solana"&&(r.id===le.SOLFLARE.id||r.id===le.PHANTOM.id)):e},async fetchProjectConfig(){return(await Y.get({path:"/appkit/v1/config",params:C._getSdkProperties()})).features},async fetchAllowedOrigins(){try{const{allowedOrigins:e}=await Y.get({path:"/projects/v1/origins",params:C._getSdkProperties()});return e}catch{return[]}},async fetchNetworkImages(){const e=i.getAllRequestedCaipNetworks(),t=e==null?void 0:e.map(({assets:r})=>r==null?void 0:r.imageId).filter(Boolean).filter(r=>!cr.getNetworkImageById(r));t&&await Promise.allSettled(t.map(r=>C._fetchNetworkImage(r)))},async fetchConnectorImages(){const{connectors:e}=_.state,t=e.map(({imageId:r})=>r).filter(Boolean);await Promise.allSettled(t.map(r=>C._fetchConnectorImage(r)))},async fetchCurrencyImages(e=[]){await Promise.allSettled(e.map(t=>C._fetchCurrencyImage(t)))},async fetchTokenImages(e=[]){await Promise.allSettled(e.map(t=>C._fetchTokenImage(t)))},async fetchWallets(e){var a;const t=e.exclude??[];C._getSdkProperties().sv.startsWith("html-core-")&&t.push(...Object.values(le).map(o=>o.id));const n=await Y.get({path:"/getWallets",params:{...C._getSdkProperties(),...e,page:String(e.page),entries:String(e.entries),include:(a=e.include)==null?void 0:a.join(","),exclude:t.join(",")}});return{data:C._filterWalletsByPlatform(n==null?void 0:n.data)||[],count:n==null?void 0:n.count}},async fetchFeaturedWallets(){const{featuredWalletIds:e}=y.state;if(e!=null&&e.length){const t={...C._getSdkProperties(),page:1,entries:(e==null?void 0:e.length)??It,include:e},{data:r}=await C.fetchWallets(t),n=[...r].sort((a,o)=>e.indexOf(a.id)-e.indexOf(o.id)),s=n.map(a=>a.image_id).filter(Boolean);await Promise.allSettled(s.map(a=>C._fetchWalletImage(a))),A.featured=n,A.allFeatured=n}},async fetchRecommendedWallets(){try{A.isFetchingRecommendedWallets=!0;const{includeWalletIds:e,excludeWalletIds:t,featuredWalletIds:r}=y.state,n=[...t??[],...r??[]].filter(Boolean),s=i.getRequestedCaipNetworkIds().join(","),a={page:1,entries:It,include:e,exclude:n,chains:s},{data:o,count:l}=await C.fetchWallets(a),c=E.getRecentWallets(),u=o.map(f=>f.image_id).filter(Boolean),p=c.map(f=>f.image_id).filter(Boolean);await Promise.allSettled([...u,...p].map(f=>C._fetchWalletImage(f))),A.recommended=o,A.allRecommended=o,A.count=l??0}catch{}finally{A.isFetchingRecommendedWallets=!1}},async fetchWalletsByPage({page:e}){const{includeWalletIds:t,excludeWalletIds:r,featuredWalletIds:n}=y.state,s=i.getRequestedCaipNetworkIds().join(","),a=[...A.recommended.map(({id:p})=>p),...r??[],...n??[]].filter(Boolean),o={page:e,entries:wr,include:t,exclude:a,chains:s},{data:l,count:c}=await C.fetchWallets(o),u=l.slice(0,gr).map(p=>p.image_id).filter(Boolean);await Promise.allSettled(u.map(p=>C._fetchWalletImage(p))),A.wallets=I.uniqueBy([...A.wallets,...C._filterOutExtensions(l)],"id").filter(p=>{var f;return(f=p.chains)==null?void 0:f.some(W=>s.includes(W))}),A.count=c>A.count?c:A.count,A.page=e},async initializeExcludedWallets({ids:e}){const t={page:1,entries:e.length,include:e},{data:r}=await C.fetchWallets(t);r&&r.forEach(n=>{A.excludedWallets.push({rdns:n.rdns,name:n.name})})},async searchWallet({search:e,badge:t}){const{includeWalletIds:r,excludeWalletIds:n}=y.state,s=i.getRequestedCaipNetworkIds().join(",");A.search=[];const a={page:1,entries:100,search:e==null?void 0:e.trim(),badge_type:t,include:r,exclude:n,chains:s},{data:o}=await C.fetchWallets(a);H.sendEvent({type:"track",event:"SEARCH_WALLET",properties:{badge:t??"",search:e??""}});const l=o.map(c=>c.image_id).filter(Boolean);await Promise.allSettled([...l.map(c=>C._fetchWalletImage(c)),I.wait(300)]),A.search=C._filterOutExtensions(o)},initPromise(e,t){const r=A.promises[e];return r||(A.promises[e]=t())},prefetch({fetchConnectorImages:e=!0,fetchFeaturedWallets:t=!0,fetchRecommendedWallets:r=!0,fetchNetworkImages:n=!0}={}){const s=[e&&C.initPromise("connectorImages",C.fetchConnectorImages),t&&C.initPromise("featuredWallets",C.fetchFeaturedWallets),r&&C.initPromise("recommendedWallets",C.fetchRecommendedWallets),n&&C.initPromise("networkImages",C.fetchNetworkImages)].filter(Boolean);return Promise.allSettled(s)},prefetchAnalyticsConfig(){var e;(e=y.state.features)!=null&&e.analytics&&C.fetchAnalyticsConfig()},async fetchAnalyticsConfig(){try{const{isAnalyticsEnabled:e}=await Y.get({path:"/getAnalyticsConfig",params:C._getSdkProperties()});y.setFeatures({analytics:e})}catch{y.setFeatures({analytics:!1})}},filterByNamespaces(e){if(!(e!=null&&e.length)){A.featured=A.allFeatured,A.recommended=A.allRecommended;return}const t=i.getRequestedCaipNetworkIds().join(",");A.featured=A.allFeatured.filter(r=>{var n;return(n=r.chains)==null?void 0:n.some(s=>t.includes(s))}),A.recommended=A.allRecommended.filter(r=>{var n;return(n=r.chains)==null?void 0:n.some(s=>t.includes(s))}),A.filteredWallets=A.wallets.filter(r=>{var n;return(n=r.chains)==null?void 0:n.some(s=>t.includes(s))})},clearFilterByNamespaces(){A.filteredWallets=[]},setFilterByNamespace(e){if(!e){A.featured=A.allFeatured,A.recommended=A.allRecommended;return}const t=i.getRequestedCaipNetworkIds().join(",");A.featured=A.allFeatured.filter(r=>{var n;return(n=r.chains)==null?void 0:n.some(s=>t.includes(s))}),A.recommended=A.allRecommended.filter(r=>{var n;return(n=r.chains)==null?void 0:n.some(s=>t.includes(s))}),A.filteredWallets=A.wallets.filter(r=>{var n;return(n=r.chains)==null?void 0:n.some(s=>t.includes(s))})}},P=B({view:"Connect",history:["Connect"],transactionStack:[]}),hr={state:P,subscribeKey(e,t){return G(P,e,t)},pushTransactionStack(e){P.transactionStack.push(e)},popTransactionStack(e){const t=P.transactionStack.pop();if(!t)return;const{onSuccess:r,onError:n,onCancel:s}=t;switch(e){case"success":r==null||r();break;case"error":n==null||n(),N.goBack();break;case"cancel":s==null||s(),N.goBack();break}},push(e,t){e!==P.view&&(P.view=e,P.history.push(e),P.data=t)},reset(e,t){P.view=e,P.history=[e],P.data=t},replace(e,t){P.history.at(-1)===e||(P.view=e,P.history[P.history.length-1]=e,P.data=t)},goBack(){var n;const e=i.state.activeCaipAddress,t=N.state.view==="ConnectingFarcaster",r=!e&&t;if(P.history.length>1){P.history.pop();const[s]=P.history.slice(-1);s&&(e&&s==="Connect"?P.view="Account":P.view=s)}else ee.close();(n=P.data)!=null&&n.wallet&&(P.data.wallet=void 0),setTimeout(()=>{var s,a,o;if(r){D.setFarcasterUrl(void 0,i.state.activeChain);const l=_.getAuthConnector();(s=l==null?void 0:l.provider)==null||s.reload();const c=$e(y.state);(o=(a=l==null?void 0:l.provider)==null?void 0:a.syncDappData)==null||o.call(a,{metadata:c.metadata,sdkVersion:c.sdkVersion,projectId:c.projectId,sdkType:c.sdkType})}},100)},goBackToIndex(e){if(P.history.length>1){P.history=P.history.slice(0,e+1);const[t]=P.history.slice(-1);t&&(P.view=t)}},goBackOrCloseModal(){N.state.history.length>1?N.goBack():ee.close()}},N=se(hr),fe=B({themeMode:"dark",themeVariables:{},w3mThemeVariables:void 0}),Et={state:fe,subscribe(e){return K(fe,()=>e(fe))},setThemeMode(e){fe.themeMode=e;try{const t=_.getAuthConnector();if(t){const r=Et.getSnapshot().themeVariables;t.provider.syncTheme({themeMode:e,themeVariables:r,w3mThemeVariables:be(r,e)})}}catch{console.info("Unable to sync theme to auth connector")}},setThemeVariables(e){fe.themeVariables={...fe.themeVariables,...e};try{const t=_.getAuthConnector();if(t){const r=Et.getSnapshot().themeVariables;t.provider.syncTheme({themeVariables:r,w3mThemeVariables:be(fe.themeVariables,fe.themeMode)})}}catch{console.info("Unable to sync theme to auth connector")}},getSnapshot(){return $e(fe)}},Qe=se(Et),xt={eip155:void 0,solana:void 0,polkadot:void 0,bip122:void 0,cosmos:void 0},R=B({allConnectors:[],connectors:[],activeConnector:void 0,filterByNamespace:void 0,activeConnectorIds:{...xt},filterByNamespaceMap:{eip155:!0,solana:!0,polkadot:!0,bip122:!0,cosmos:!0}}),Cr={state:R,subscribe(e){return K(R,()=>{e(R)})},subscribeKey(e,t){return G(R,e,t)},initialize(e){e.forEach(t=>{const r=E.getConnectedConnectorId(t);r&&_.setConnectorId(r,t)})},setActiveConnector(e){e&&(R.activeConnector=Ne(e))},setConnectors(e){e.filter(s=>!R.allConnectors.some(a=>a.id===s.id&&_.getConnectorName(a.name)===_.getConnectorName(s.name)&&a.chain===s.chain)).forEach(s=>{s.type!=="MULTI_CHAIN"&&R.allConnectors.push(Ne(s))});const r=_.getEnabledNamespaces(),n=_.getEnabledConnectors(r);R.connectors=_.mergeMultiChainConnectors(n)},filterByNamespaces(e){Object.keys(R.filterByNamespaceMap).forEach(t=>{R.filterByNamespaceMap[t]=!1}),e.forEach(t=>{R.filterByNamespaceMap[t]=!0}),_.updateConnectorsForEnabledNamespaces()},filterByNamespace(e,t){R.filterByNamespaceMap[e]=t,_.updateConnectorsForEnabledNamespaces()},updateConnectorsForEnabledNamespaces(){const e=_.getEnabledNamespaces(),t=_.getEnabledConnectors(e),r=_.areAllNamespacesEnabled();R.connectors=_.mergeMultiChainConnectors(t),r?C.clearFilterByNamespaces():C.filterByNamespaces(e)},getEnabledNamespaces(){return Object.entries(R.filterByNamespaceMap).filter(([e,t])=>t).map(([e])=>e)},getEnabledConnectors(e){return R.allConnectors.filter(t=>e.includes(t.chain))},areAllNamespacesEnabled(){return Object.values(R.filterByNamespaceMap).every(e=>e)},mergeMultiChainConnectors(e){const t=_.generateConnectorMapByName(e),r=[];return t.forEach(n=>{const s=n[0],a=(s==null?void 0:s.id)===$.CONNECTOR_ID.AUTH;n.length>1&&s?r.push({name:s.name,imageUrl:s.imageUrl,imageId:s.imageId,connectors:[...n],type:a?"AUTH":"MULTI_CHAIN",chain:"eip155",id:(s==null?void 0:s.id)||""}):s&&r.push(s)}),r},generateConnectorMapByName(e){const t=new Map;return e.forEach(r=>{const{name:n}=r,s=_.getConnectorName(n);if(!s)return;const a=t.get(s)||[];a.find(l=>l.chain===r.chain)||a.push(r),t.set(s,a)}),t},getConnectorName(e){return e&&({"Trust Wallet":"Trust"}[e]||e)},getUniqueConnectorsByName(e){const t=[];return e.forEach(r=>{t.find(n=>n.chain===r.chain)||t.push(r)}),t},addConnector(e){var t,r,n;if(e.id===$.CONNECTOR_ID.AUTH){const s=e,a=$e(y.state),o=Qe.getSnapshot().themeMode,l=Qe.getSnapshot().themeVariables;(r=(t=s==null?void 0:s.provider)==null?void 0:t.syncDappData)==null||r.call(t,{metadata:a.metadata,sdkVersion:a.sdkVersion,projectId:a.projectId,sdkType:a.sdkType}),(n=s==null?void 0:s.provider)==null||n.syncTheme({themeMode:o,themeVariables:l,w3mThemeVariables:be(l,o)}),_.setConnectors([e])}else _.setConnectors([e])},getAuthConnector(e){var n;const t=e||i.state.activeChain,r=R.connectors.find(s=>s.id===$.CONNECTOR_ID.AUTH);if(r)return(n=r==null?void 0:r.connectors)!=null&&n.length?r.connectors.find(a=>a.chain===t):r},getAnnouncedConnectorRdns(){return R.connectors.filter(e=>e.type==="ANNOUNCED").map(e=>{var t;return(t=e.info)==null?void 0:t.rdns})},getConnectorById(e){return R.allConnectors.find(t=>t.id===e)},getConnector(e,t){return R.allConnectors.filter(n=>n.chain===i.state.activeChain).find(n=>{var s;return n.explorerId===e||((s=n.info)==null?void 0:s.rdns)===t})},syncIfAuthConnector(e){var a,o;if(e.id!=="ID_AUTH")return;const t=e,r=$e(y.state),n=Qe.getSnapshot().themeMode,s=Qe.getSnapshot().themeVariables;(o=(a=t==null?void 0:t.provider)==null?void 0:a.syncDappData)==null||o.call(a,{metadata:r.metadata,sdkVersion:r.sdkVersion,sdkType:r.sdkType,projectId:r.projectId}),t.provider.syncTheme({themeMode:n,themeVariables:s,w3mThemeVariables:be(s,n)})},getConnectorsByNamespace(e){const t=R.allConnectors.filter(r=>r.chain===e);return _.mergeMultiChainConnectors(t)},selectWalletConnector(e){const t=_.getConnector(e.id,e.rdns),r=i.state.activeChain;ar.handleMobileDeeplinkRedirect((t==null?void 0:t.explorerId)||e.id,r),t?N.push("ConnectingExternal",{connector:t}):N.push("ConnectingWalletConnect",{wallet:e})},getConnectors(e){return e?_.getConnectorsByNamespace(e):_.mergeMultiChainConnectors(R.allConnectors)},setFilterByNamespace(e){R.filterByNamespace=e,R.connectors=_.getConnectors(e),C.setFilterByNamespace(e)},setConnectorId(e,t){e&&(R.activeConnectorIds={...R.activeConnectorIds,[t]:e},E.setConnectedConnectorId(t,e))},removeConnectorId(e){R.activeConnectorIds={...R.activeConnectorIds,[e]:void 0},E.deleteConnectedConnectorId(e)},getConnectorId(e){if(e)return R.activeConnectorIds[e]},isConnected(e){return e?!!R.activeConnectorIds[e]:Object.values(R.activeConnectorIds).some(t=>!!t)},resetConnectorIds(){R.activeConnectorIds={...xt}}},_=se(Cr);var De={};const Er="https://secure.walletconnect.org/sdk",pn=(typeof process<"u"&&typeof De<"u"?De.NEXT_PUBLIC_SECURE_SITE_SDK_URL:void 0)||Er,fn=(typeof process<"u"&&typeof De<"u"?De.NEXT_PUBLIC_DEFAULT_LOG_LEVEL:void 0)||"error",mn=(typeof process<"u"&&typeof De<"u"?De.NEXT_PUBLIC_SECURE_SITE_SDK_VERSION:void 0)||"4",wn={APP_EVENT_KEY:"@w3m-app/",FRAME_EVENT_KEY:"@w3m-frame/",RPC_METHOD_KEY:"RPC_",STORAGE_KEY:"@appkit-wallet/",SESSION_TOKEN_KEY:"SESSION_TOKEN_KEY",EMAIL_LOGIN_USED_KEY:"EMAIL_LOGIN_USED_KEY",LAST_USED_CHAIN_KEY:"LAST_USED_CHAIN_KEY",LAST_EMAIL_LOGIN_TIME:"LAST_EMAIL_LOGIN_TIME",EMAIL:"EMAIL",PREFERRED_ACCOUNT_TYPE:"PREFERRED_ACCOUNT_TYPE",SMART_ACCOUNT_ENABLED:"SMART_ACCOUNT_ENABLED",SMART_ACCOUNT_ENABLED_NETWORKS:"SMART_ACCOUNT_ENABLED_NETWORKS",SOCIAL_USERNAME:"SOCIAL_USERNAME",APP_SWITCH_NETWORK:"@w3m-app/SWITCH_NETWORK",APP_CONNECT_EMAIL:"@w3m-app/CONNECT_EMAIL",APP_CONNECT_DEVICE:"@w3m-app/CONNECT_DEVICE",APP_CONNECT_OTP:"@w3m-app/CONNECT_OTP",APP_CONNECT_SOCIAL:"@w3m-app/CONNECT_SOCIAL",APP_GET_SOCIAL_REDIRECT_URI:"@w3m-app/GET_SOCIAL_REDIRECT_URI",APP_GET_USER:"@w3m-app/GET_USER",APP_SIGN_OUT:"@w3m-app/SIGN_OUT",APP_IS_CONNECTED:"@w3m-app/IS_CONNECTED",APP_GET_CHAIN_ID:"@w3m-app/GET_CHAIN_ID",APP_RPC_REQUEST:"@w3m-app/RPC_REQUEST",APP_UPDATE_EMAIL:"@w3m-app/UPDATE_EMAIL",APP_UPDATE_EMAIL_PRIMARY_OTP:"@w3m-app/UPDATE_EMAIL_PRIMARY_OTP",APP_UPDATE_EMAIL_SECONDARY_OTP:"@w3m-app/UPDATE_EMAIL_SECONDARY_OTP",APP_AWAIT_UPDATE_EMAIL:"@w3m-app/AWAIT_UPDATE_EMAIL",APP_SYNC_THEME:"@w3m-app/SYNC_THEME",APP_SYNC_DAPP_DATA:"@w3m-app/SYNC_DAPP_DATA",APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS:"@w3m-app/GET_SMART_ACCOUNT_ENABLED_NETWORKS",APP_INIT_SMART_ACCOUNT:"@w3m-app/INIT_SMART_ACCOUNT",APP_SET_PREFERRED_ACCOUNT:"@w3m-app/SET_PREFERRED_ACCOUNT",APP_CONNECT_FARCASTER:"@w3m-app/CONNECT_FARCASTER",APP_GET_FARCASTER_URI:"@w3m-app/GET_FARCASTER_URI",APP_RELOAD:"@w3m-app/RELOAD",FRAME_SWITCH_NETWORK_ERROR:"@w3m-frame/SWITCH_NETWORK_ERROR",FRAME_SWITCH_NETWORK_SUCCESS:"@w3m-frame/SWITCH_NETWORK_SUCCESS",FRAME_CONNECT_EMAIL_ERROR:"@w3m-frame/CONNECT_EMAIL_ERROR",FRAME_CONNECT_EMAIL_SUCCESS:"@w3m-frame/CONNECT_EMAIL_SUCCESS",FRAME_CONNECT_DEVICE_ERROR:"@w3m-frame/CONNECT_DEVICE_ERROR",FRAME_CONNECT_DEVICE_SUCCESS:"@w3m-frame/CONNECT_DEVICE_SUCCESS",FRAME_CONNECT_OTP_SUCCESS:"@w3m-frame/CONNECT_OTP_SUCCESS",FRAME_CONNECT_OTP_ERROR:"@w3m-frame/CONNECT_OTP_ERROR",FRAME_CONNECT_SOCIAL_SUCCESS:"@w3m-frame/CONNECT_SOCIAL_SUCCESS",FRAME_CONNECT_SOCIAL_ERROR:"@w3m-frame/CONNECT_SOCIAL_ERROR",FRAME_CONNECT_FARCASTER_SUCCESS:"@w3m-frame/CONNECT_FARCASTER_SUCCESS",FRAME_CONNECT_FARCASTER_ERROR:"@w3m-frame/CONNECT_FARCASTER_ERROR",FRAME_GET_FARCASTER_URI_SUCCESS:"@w3m-frame/GET_FARCASTER_URI_SUCCESS",FRAME_GET_FARCASTER_URI_ERROR:"@w3m-frame/GET_FARCASTER_URI_ERROR",FRAME_GET_SOCIAL_REDIRECT_URI_SUCCESS:"@w3m-frame/GET_SOCIAL_REDIRECT_URI_SUCCESS",FRAME_GET_SOCIAL_REDIRECT_URI_ERROR:"@w3m-frame/GET_SOCIAL_REDIRECT_URI_ERROR",FRAME_GET_USER_SUCCESS:"@w3m-frame/GET_USER_SUCCESS",FRAME_GET_USER_ERROR:"@w3m-frame/GET_USER_ERROR",FRAME_SIGN_OUT_SUCCESS:"@w3m-frame/SIGN_OUT_SUCCESS",FRAME_SIGN_OUT_ERROR:"@w3m-frame/SIGN_OUT_ERROR",FRAME_IS_CONNECTED_SUCCESS:"@w3m-frame/IS_CONNECTED_SUCCESS",FRAME_IS_CONNECTED_ERROR:"@w3m-frame/IS_CONNECTED_ERROR",FRAME_GET_CHAIN_ID_SUCCESS:"@w3m-frame/GET_CHAIN_ID_SUCCESS",FRAME_GET_CHAIN_ID_ERROR:"@w3m-frame/GET_CHAIN_ID_ERROR",FRAME_RPC_REQUEST_SUCCESS:"@w3m-frame/RPC_REQUEST_SUCCESS",FRAME_RPC_REQUEST_ERROR:"@w3m-frame/RPC_REQUEST_ERROR",FRAME_SESSION_UPDATE:"@w3m-frame/SESSION_UPDATE",FRAME_UPDATE_EMAIL_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SUCCESS",FRAME_UPDATE_EMAIL_ERROR:"@w3m-frame/UPDATE_EMAIL_ERROR",FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS:"@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_SUCCESS",FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR:"@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_ERROR",FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_SUCCESS",FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR:"@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_ERROR",FRAME_SYNC_THEME_SUCCESS:"@w3m-frame/SYNC_THEME_SUCCESS",FRAME_SYNC_THEME_ERROR:"@w3m-frame/SYNC_THEME_ERROR",FRAME_SYNC_DAPP_DATA_SUCCESS:"@w3m-frame/SYNC_DAPP_DATA_SUCCESS",FRAME_SYNC_DAPP_DATA_ERROR:"@w3m-frame/SYNC_DAPP_DATA_ERROR",FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS:"@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS",FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR:"@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR",FRAME_INIT_SMART_ACCOUNT_SUCCESS:"@w3m-frame/INIT_SMART_ACCOUNT_SUCCESS",FRAME_INIT_SMART_ACCOUNT_ERROR:"@w3m-frame/INIT_SMART_ACCOUNT_ERROR",FRAME_SET_PREFERRED_ACCOUNT_SUCCESS:"@w3m-frame/SET_PREFERRED_ACCOUNT_SUCCESS",FRAME_SET_PREFERRED_ACCOUNT_ERROR:"@w3m-frame/SET_PREFERRED_ACCOUNT_ERROR",FRAME_READY:"@w3m-frame/READY",FRAME_RELOAD_SUCCESS:"@w3m-frame/RELOAD_SUCCESS",FRAME_RELOAD_ERROR:"@w3m-frame/RELOAD_ERROR",RPC_RESPONSE_TYPE_ERROR:"RPC_RESPONSE_ERROR",RPC_RESPONSE_TYPE_TX:"RPC_RESPONSE_TRANSACTION_HASH",RPC_RESPONSE_TYPE_OBJECT:"RPC_RESPONSE_OBJECT"},ze={SAFE_RPC_METHODS:["eth_accounts","eth_blockNumber","eth_call","eth_chainId","eth_estimateGas","eth_feeHistory","eth_gasPrice","eth_getAccount","eth_getBalance","eth_getBlockByHash","eth_getBlockByNumber","eth_getBlockReceipts","eth_getBlockTransactionCountByHash","eth_getBlockTransactionCountByNumber","eth_getCode","eth_getFilterChanges","eth_getFilterLogs","eth_getLogs","eth_getProof","eth_getStorageAt","eth_getTransactionByBlockHashAndIndex","eth_getTransactionByBlockNumberAndIndex","eth_getTransactionByHash","eth_getTransactionCount","eth_getTransactionReceipt","eth_getUncleCountByBlockHash","eth_getUncleCountByBlockNumber","eth_maxPriorityFeePerGas","eth_newBlockFilter","eth_newFilter","eth_newPendingTransactionFilter","eth_sendRawTransaction","eth_syncing","eth_uninstallFilter","wallet_getCapabilities","wallet_getCallsStatus","eth_getUserOperationReceipt","eth_estimateUserOperationGas","eth_getUserOperationByHash","eth_supportedEntryPoints","wallet_getAssets"],NOT_SAFE_RPC_METHODS:["personal_sign","eth_signTypedData_v4","eth_sendTransaction","solana_signMessage","solana_signTransaction","solana_signAllTransactions","solana_signAndSendTransaction","wallet_sendCalls","wallet_grantPermissions","wallet_revokePermissions","eth_sendUserOperation"],GET_CHAIN_ID:"eth_chainId",RPC_METHOD_NOT_ALLOWED_MESSAGE:"Requested RPC call is not allowed",RPC_METHOD_NOT_ALLOWED_UI_MESSAGE:"Action not allowed",ACCOUNT_TYPES:{EOA:"eoa",SMART_ACCOUNT:"smartAccount"}},Se=Object.freeze({message:"",variant:"success",svg:void 0,open:!1,autoClose:!0}),j=B({...Se}),br={state:j,subscribeKey(e,t){return G(j,e,t)},showLoading(e,t={}){this._showMessage({message:e,variant:"loading",...t})},showSuccess(e){this._showMessage({message:e,variant:"success"})},showSvg(e,t){this._showMessage({message:e,svg:t})},showError(e){const t=I.parseError(e);this._showMessage({message:t,variant:"error"})},hide(){j.message=Se.message,j.variant=Se.variant,j.svg=Se.svg,j.open=Se.open,j.autoClose=Se.autoClose},_showMessage({message:e,svg:t,variant:r="success",autoClose:n=Se.autoClose}){j.open?(j.open=!1,setTimeout(()=>{j.message=e,j.variant=r,j.svg=t,j.open=!0,j.autoClose=n},150)):(j.message=e,j.variant=r,j.svg=t,j.open=!0,j.autoClose=n)}},me=br,L=B({transactions:[],coinbaseTransactions:{},transactionsByYear:{},lastNetworkInView:void 0,loading:!1,empty:!1,next:void 0}),Ar={state:L,subscribe(e){return K(L,()=>e(L))},setLastNetworkInView(e){L.lastNetworkInView=e},async fetchTransactions(e,t){var r,n;if(!e)throw new Error("Transactions can't be fetched without an accountAddress");L.loading=!0;try{const s=await w.fetchTransactions({account:e,cursor:L.next,onramp:t,cache:t==="coinbase"?"no-cache":void 0,chainId:(r=i.state.activeCaipNetwork)==null?void 0:r.caipNetworkId}),a=Fe.filterSpamTransactions(s.data),o=Fe.filterByConnectedChain(a),l=[...L.transactions,...o];L.loading=!1,t==="coinbase"?L.coinbaseTransactions=Fe.groupTransactionsByYearAndMonth(L.coinbaseTransactions,s.data):(L.transactions=l,L.transactionsByYear=Fe.groupTransactionsByYearAndMonth(L.transactionsByYear,o)),L.empty=l.length===0,L.next=s.next?s.next:void 0}catch{const a=i.state.activeChain;H.sendEvent({type:"track",event:"ERROR_FETCH_TRANSACTIONS",properties:{address:e,projectId:y.state.projectId,cursor:L.next,isSmartAccount:((n=D.state.preferredAccountTypes)==null?void 0:n[a])===ze.ACCOUNT_TYPES.SMART_ACCOUNT}}),me.showError("Failed to fetch transactions"),L.loading=!1,L.empty=!0,L.next=void 0}},groupTransactionsByYearAndMonth(e={},t=[]){const r=e;return t.forEach(n=>{const s=new Date(n.metadata.minedAt).getFullYear(),a=new Date(n.metadata.minedAt).getMonth(),o=r[s]??{},c=(o[a]??[]).filter(u=>u.id!==n.id);r[s]={...o,[a]:[...c,n].sort((u,p)=>new Date(p.metadata.minedAt).getTime()-new Date(u.metadata.minedAt).getTime())}}),r},filterSpamTransactions(e){return e.filter(t=>!t.transfers.every(n=>{var s;return((s=n.nft_info)==null?void 0:s.flags.is_spam)===!0}))},filterByConnectedChain(e){var n;const t=(n=i.state.activeCaipNetwork)==null?void 0:n.caipNetworkId;return e.filter(s=>s.metadata.chain===t)},clearCursor(){L.next=void 0},resetTransactions(){L.transactions=[],L.transactionsByYear={},L.lastNetworkInView=void 0,L.loading=!1,L.empty=!1,L.next=void 0}},Fe=se(Ar,"API_ERROR"),x=B({connections:new Map,wcError:!1,buffering:!1,status:"disconnected"});let ve;const _r={state:x,subscribeKey(e,t){return G(x,e,t)},_getClient(){return x._client},setClient(e){x._client=Ne(e)},async connectWalletConnect(){var e,t,r,n;if(I.isTelegram()||I.isSafari()&&I.isIos()){if(ve){await ve,ve=void 0;return}if(!I.isPairingExpired(x==null?void 0:x.wcPairingExpiry)){const s=x.wcUri;x.wcUri=s;return}ve=(t=(e=S._getClient())==null?void 0:e.connectWalletConnect)==null?void 0:t.call(e).catch(()=>{}),S.state.status="connecting",await ve,ve=void 0,x.wcPairingExpiry=void 0,S.state.status="connected"}else await((n=(r=S._getClient())==null?void 0:r.connectWalletConnect)==null?void 0:n.call(r))},async connectExternal(e,t,r=!0){var n,s;await((s=(n=S._getClient())==null?void 0:n.connectExternal)==null?void 0:s.call(n,e)),r&&i.setActiveNamespace(t)},async reconnectExternal(e){var r,n;await((n=(r=S._getClient())==null?void 0:r.reconnectExternal)==null?void 0:n.call(r,e));const t=e.chain||i.state.activeChain;t&&_.setConnectorId(e.id,t)},async setPreferredAccountType(e,t){var n;ee.setLoading(!0,i.state.activeChain);const r=_.getAuthConnector();r&&(D.setPreferredAccountType(e,t),await r.provider.setPreferredAccount(e),E.setPreferredAccountTypes(D.state.preferredAccountTypes??{[t]:e}),await S.reconnectExternal(r),ee.setLoading(!1,i.state.activeChain),H.sendEvent({type:"track",event:"SET_PREFERRED_ACCOUNT_TYPE",properties:{accountType:e,network:((n=i.state.activeCaipNetwork)==null?void 0:n.caipNetworkId)||""}}))},async signMessage(e){var t;return(t=S._getClient())==null?void 0:t.signMessage(e)},parseUnits(e,t){var r;return(r=S._getClient())==null?void 0:r.parseUnits(e,t)},formatUnits(e,t){var r;return(r=S._getClient())==null?void 0:r.formatUnits(e,t)},async sendTransaction(e){var t;return(t=S._getClient())==null?void 0:t.sendTransaction(e)},async getCapabilities(e){var t;return(t=S._getClient())==null?void 0:t.getCapabilities(e)},async grantPermissions(e){var t;return(t=S._getClient())==null?void 0:t.grantPermissions(e)},async walletGetAssets(e){var t;return((t=S._getClient())==null?void 0:t.walletGetAssets(e))??{}},async estimateGas(e){var t;return(t=S._getClient())==null?void 0:t.estimateGas(e)},async writeContract(e){var t;return(t=S._getClient())==null?void 0:t.writeContract(e)},async getEnsAddress(e){var t;return(t=S._getClient())==null?void 0:t.getEnsAddress(e)},async getEnsAvatar(e){var t;return(t=S._getClient())==null?void 0:t.getEnsAvatar(e)},checkInstalled(e){var t,r;return((r=(t=S._getClient())==null?void 0:t.checkInstalled)==null?void 0:r.call(t,e))||!1},resetWcConnection(){x.wcUri=void 0,x.wcPairingExpiry=void 0,x.wcLinking=void 0,x.recentWallet=void 0,x.status="disconnected",Fe.resetTransactions(),E.deleteWalletConnectDeepLink()},resetUri(){x.wcUri=void 0,x.wcPairingExpiry=void 0,ve=void 0},finalizeWcConnection(){var r,n;const{wcLinking:e,recentWallet:t}=S.state;e&&E.setWalletConnectDeepLink(e),t&&E.setAppKitRecent(t),H.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:e?"mobile":"qrcode",name:((n=(r=N.state.data)==null?void 0:r.wallet)==null?void 0:n.name)||"Unknown"}})},setWcBasic(e){x.wcBasic=e},setUri(e){x.wcUri=e,x.wcPairingExpiry=I.getPairingExpiry()},setWcLinking(e){x.wcLinking=e},setWcError(e){x.wcError=e,x.buffering=!1},setRecentWallet(e){x.recentWallet=e},setBuffering(e){x.buffering=e},setStatus(e){x.status=e},async disconnect(e){var t;try{await((t=S._getClient())==null?void 0:t.disconnect(e))}catch(r){throw new Le("Failed to disconnect","INTERNAL_SDK_ERROR",r)}},setConnections(e,t){x.connections.set(t,e)},switchAccount({connection:e,address:t,namespace:r}){if(_.state.activeConnectorIds[r]===e.connectorId){const a=i.state.activeCaipNetwork;if(a){const o=`${r}:${a.id}:${t}`;D.setCaipAddress(o,r)}else console.warn(`No current network found for namespace "${r}"`)}else{const a=_.getConnector(e.connectorId);a?S.connectExternal(a,r):console.warn(`No connector found for namespace "${r}"`)}}},S=se(_r),Te=B({loading:!1,open:!1,selectedNetworkId:void 0,activeChain:void 0,initialized:!1}),Pe={state:Te,subscribe(e){return K(Te,()=>e(Te))},subscribeOpen(e){return G(Te,"open",e)},set(e){Object.assign(Te,{...Te,...e})}},ft={createBalance(e,t){const r={name:e.metadata.name||"",symbol:e.metadata.symbol||"",decimals:e.metadata.decimals||0,value:e.metadata.value||0,price:e.metadata.price||0,iconUrl:e.metadata.iconUrl||""};return{name:r.name,symbol:r.symbol,chainId:t,address:e.address==="native"?void 0:this.convertAddressToCAIP10Address(e.address,t),value:r.value,price:r.price,quantity:{decimals:r.decimals.toString(),numeric:this.convertHexToBalance({hex:e.balance,decimals:r.decimals})},iconUrl:r.iconUrl}},convertHexToBalance({hex:e,decimals:t}){return Kt(BigInt(e),t)},convertAddressToCAIP10Address(e,t){return`${t}:${e}`},createCAIP2ChainId(e,t){return`${t}:${parseInt(e,16)}`},getChainIdHexFromCAIP2ChainId(e){const t=e.split(":");if(t.length<2||!t[1])return"0x0";const r=t[1],n=parseInt(r,10);return isNaN(n)?"0x0":`0x${n.toString(16)}`},isWalletGetAssetsResponse(e){return typeof e!="object"||e===null?!1:Object.values(e).every(t=>Array.isArray(t)&&t.every(r=>this.isValidAsset(r)))},isValidAsset(e){return typeof e=="object"&&e!==null&&typeof e.address=="string"&&typeof e.balance=="string"&&(e.type==="ERC20"||e.type==="NATIVE")&&typeof e.metadata=="object"&&e.metadata!==null&&typeof e.metadata.name=="string"&&typeof e.metadata.symbol=="string"&&typeof e.metadata.decimals=="number"&&typeof e.metadata.price=="number"&&typeof e.metadata.iconUrl=="string"}},Tt={async getMyTokensWithBalance(e){const t=D.state.address,r=i.state.activeCaipNetwork;if(!t||!r)return[];if(r.chainNamespace==="eip155"){const s=await this.getEIP155Balances(t,r);if(s)return this.filterLowQualityTokens(s)}const n=await w.getBalance(t,r.caipNetworkId,e);return this.filterLowQualityTokens(n.balances)},async getEIP155Balances(e,t){var r,n;try{const s=ft.getChainIdHexFromCAIP2ChainId(t.caipNetworkId),a=await S.getCapabilities(e);if(!((n=(r=a==null?void 0:a[s])==null?void 0:r.assetDiscovery)!=null&&n.supported))return null;const o=await S.walletGetAssets({account:e,chainFilter:[s]});return ft.isWalletGetAssetsResponse(o)?(o[s]||[]).map(c=>ft.createBalance(c,t.caipNetworkId)):null}catch{return null}},filterLowQualityTokens(e){return e.filter(t=>t.quantity.decimals!=="0")},mapBalancesToSwapTokens(e){return(e==null?void 0:e.map(t=>({...t,address:t!=null&&t.address?t.address:i.getActiveNetworkTokenAddress(),decimals:parseInt(t.quantity.decimals,10),logoUri:t.iconUrl,eip2612:!1})))||[]}},U=B({tokenBalances:[],loading:!1}),vr={state:U,subscribe(e){return K(U,()=>e(U))},subscribeKey(e,t){return G(U,e,t)},setToken(e){e&&(U.token=Ne(e))},setTokenAmount(e){U.sendTokenAmount=e},setReceiverAddress(e){U.receiverAddress=e},setReceiverProfileImageUrl(e){U.receiverProfileImageUrl=e},setReceiverProfileName(e){U.receiverProfileName=e},setNetworkBalanceInUsd(e){U.networkBalanceInUSD=e},setLoading(e){U.loading=e},async sendToken(){var e;try{switch(O.setLoading(!0),(e=i.state.activeCaipNetwork)==null?void 0:e.chainNamespace){case"eip155":await O.sendEvmToken();return;case"solana":await O.sendSolanaToken();return;default:throw new Error("Unsupported chain")}}finally{O.setLoading(!1)}},async sendEvmToken(){var r,n,s,a;const e=i.state.activeChain,t=(r=D.state.preferredAccountTypes)==null?void 0:r[e];if(!O.state.sendTokenAmount||!O.state.receiverAddress)throw new Error("An amount and receiver address are required");if(!O.state.token)throw new Error("A token is required");(n=O.state.token)!=null&&n.address?(H.sendEvent({type:"track",event:"SEND_INITIATED",properties:{isSmartAccount:t===ze.ACCOUNT_TYPES.SMART_ACCOUNT,token:O.state.token.address,amount:O.state.sendTokenAmount,network:((s=i.state.activeCaipNetwork)==null?void 0:s.caipNetworkId)||""}}),await O.sendERC20Token({receiverAddress:O.state.receiverAddress,tokenAddress:O.state.token.address,sendTokenAmount:O.state.sendTokenAmount,decimals:O.state.token.quantity.decimals})):(H.sendEvent({type:"track",event:"SEND_INITIATED",properties:{isSmartAccount:t===ze.ACCOUNT_TYPES.SMART_ACCOUNT,token:O.state.token.symbol||"",amount:O.state.sendTokenAmount,network:((a=i.state.activeCaipNetwork)==null?void 0:a.caipNetworkId)||""}}),await O.sendNativeToken({receiverAddress:O.state.receiverAddress,sendTokenAmount:O.state.sendTokenAmount,decimals:O.state.token.quantity.decimals}))},async fetchTokenBalance(e){var a,o;U.loading=!0;const t=(a=i.state.activeCaipNetwork)==null?void 0:a.caipNetworkId,r=(o=i.state.activeCaipNetwork)==null?void 0:o.chainNamespace,n=i.state.activeCaipAddress,s=n?I.getPlainAddress(n):void 0;if(U.lastRetry&&!I.isAllowedRetry(U.lastRetry,30*te.ONE_SEC_MS))return U.loading=!1,[];try{if(s&&t&&r){const l=await Tt.getMyTokensWithBalance();return U.tokenBalances=l,U.lastRetry=void 0,l}}catch(l){U.lastRetry=Date.now(),e==null||e(l),me.showError("Token Balance Unavailable")}finally{U.loading=!1}return[]},fetchNetworkBalance(){if(U.tokenBalances.length===0)return;const e=Tt.mapBalancesToSwapTokens(U.tokenBalances);if(!e)return;const t=e.find(r=>r.address===i.getActiveNetworkTokenAddress());t&&(U.networkBalanceInUSD=t?$t.multiply(t.quantity.numeric,t.price).toString():"0")},async sendNativeToken(e){var a,o,l,c;N.pushTransactionStack({});const t=e.receiverAddress,r=D.state.address,n=S.parseUnits(e.sendTokenAmount.toString(),Number(e.decimals));await S.sendTransaction({chainNamespace:"eip155",to:t,address:r,data:"0x",value:n??BigInt(0)}),H.sendEvent({type:"track",event:"SEND_SUCCESS",properties:{isSmartAccount:((a=D.state.preferredAccountTypes)==null?void 0:a.eip155)===ze.ACCOUNT_TYPES.SMART_ACCOUNT,token:((o=O.state.token)==null?void 0:o.symbol)||"",amount:e.sendTokenAmount,network:((l=i.state.activeCaipNetwork)==null?void 0:l.caipNetworkId)||""}}),(c=S._getClient())==null||c.updateBalance("eip155"),O.resetSend()},async sendERC20Token(e){N.pushTransactionStack({onSuccess(){N.replace("Account")}});const t=S.parseUnits(e.sendTokenAmount.toString(),Number(e.decimals));if(D.state.address&&e.sendTokenAmount&&e.receiverAddress&&e.tokenAddress){const r=I.getPlainAddress(e.tokenAddress);await S.writeContract({fromAddress:D.state.address,tokenAddress:r,args:[e.receiverAddress,t??BigInt(0)],method:"transfer",abi:jt.getERC20Abi(r),chainNamespace:"eip155"}),O.resetSend()}},async sendSolanaToken(){var e;if(!O.state.sendTokenAmount||!O.state.receiverAddress)throw new Error("An amount and receiver address are required");N.pushTransactionStack({onSuccess(){N.replace("Account")}}),await S.sendTransaction({chainNamespace:"solana",to:O.state.receiverAddress,value:O.state.sendTokenAmount}),(e=S._getClient())==null||e.updateBalance("solana"),O.resetSend()},resetSend(){U.token=void 0,U.sendTokenAmount=void 0,U.receiverAddress=void 0,U.receiverProfileImageUrl=void 0,U.receiverProfileName=void 0,U.loading=!1,U.tokenBalances=[]}},O=se(vr),mt={currentTab:0,tokenBalance:[],smartAccountDeployed:!1,addressLabels:new Map,allAccounts:[],user:void 0},Ze={caipNetwork:void 0,supportsAllNetworks:!0,smartAccountEnabledNetworks:[]},d=B({chains:Qt(),activeCaipAddress:void 0,activeChain:void 0,activeCaipNetwork:void 0,noAdapters:!1,universalAdapter:{networkControllerClient:void 0,connectionControllerClient:void 0},isSwitchingNamespace:!1}),Sr={state:d,subscribe(e){return K(d,()=>{e(d)})},subscribeKey(e,t){return G(d,e,t)},subscribeChainProp(e,t,r){let n;return K(d.chains,()=>{var a;const s=r||d.activeChain;if(s){const o=(a=d.chains.get(s))==null?void 0:a[e];n!==o&&(n=o,t(o))}})},initialize(e,t,r){const{chainId:n,namespace:s}=E.getActiveNetworkProps(),a=t==null?void 0:t.find(p=>p.id.toString()===(n==null?void 0:n.toString())),l=e.find(p=>(p==null?void 0:p.namespace)===s)||(e==null?void 0:e[0]),c=e.map(p=>p.namespace).filter(p=>p!==void 0),u=y.state.enableEmbedded?new Set([...c]):new Set([...(t==null?void 0:t.map(p=>p.chainNamespace))??[]]);((e==null?void 0:e.length)===0||!l)&&(d.noAdapters=!0),d.noAdapters||(d.activeChain=l==null?void 0:l.namespace,d.activeCaipNetwork=a,i.setChainNetworkData(l==null?void 0:l.namespace,{caipNetwork:a}),d.activeChain&&Pe.set({activeChain:l==null?void 0:l.namespace})),u.forEach(p=>{const f=t==null?void 0:t.filter(W=>W.chainNamespace===p);i.state.chains.set(p,{namespace:p,networkState:B({...Ze,caipNetwork:f==null?void 0:f[0]}),accountState:B(mt),caipNetworks:f??[],...r}),i.setRequestedCaipNetworks(f??[],p)})},removeAdapter(e){var t,r;if(d.activeChain===e){const n=Array.from(d.chains.entries()).find(([s])=>s!==e);if(n){const s=(r=(t=n[1])==null?void 0:t.caipNetworks)==null?void 0:r[0];s&&i.setActiveCaipNetwork(s)}}d.chains.delete(e)},addAdapter(e,{networkControllerClient:t,connectionControllerClient:r},n){d.chains.set(e.namespace,{namespace:e.namespace,networkState:{...Ze,caipNetwork:n[0]},accountState:mt,caipNetworks:n,connectionControllerClient:r,networkControllerClient:t}),i.setRequestedCaipNetworks((n==null?void 0:n.filter(s=>s.chainNamespace===e.namespace))??[],e.namespace)},addNetwork(e){var r;const t=d.chains.get(e.chainNamespace);if(t){const n=[...t.caipNetworks||[]];(r=t.caipNetworks)!=null&&r.find(s=>s.id===e.id)||n.push(e),d.chains.set(e.chainNamespace,{...t,caipNetworks:n}),i.setRequestedCaipNetworks(n,e.chainNamespace),_.filterByNamespace(e.chainNamespace,!0)}},removeNetwork(e,t){var n,s,a;const r=d.chains.get(e);if(r){const o=((n=d.activeCaipNetwork)==null?void 0:n.id)===t,l=[...((s=r.caipNetworks)==null?void 0:s.filter(c=>c.id!==t))||[]];o&&((a=r==null?void 0:r.caipNetworks)!=null&&a[0])&&i.setActiveCaipNetwork(r.caipNetworks[0]),d.chains.set(e,{...r,caipNetworks:l}),i.setRequestedCaipNetworks(l||[],e),l.length===0&&_.filterByNamespace(e,!1)}},setAdapterNetworkState(e,t){const r=d.chains.get(e);r&&(r.networkState={...r.networkState||Ze,...t},d.chains.set(e,r))},setChainAccountData(e,t,r=!0){if(!e)throw new Error("Chain is required to update chain account data");const n=d.chains.get(e);if(n){const s={...n.accountState||mt,...t};d.chains.set(e,{...n,accountState:s}),(d.chains.size===1||d.activeChain===e)&&(t.caipAddress&&(d.activeCaipAddress=t.caipAddress),D.replaceState(s))}},setChainNetworkData(e,t){if(!e)return;const r=d.chains.get(e);if(r){const n={...r.networkState||Ze,...t};d.chains.set(e,{...r,networkState:n})}},setAccountProp(e,t,r,n=!0){i.setChainAccountData(r,{[e]:t},n),e==="status"&&t==="disconnected"&&r&&_.removeConnectorId(r)},setActiveNamespace(e){var n,s;d.activeChain=e;const t=e?d.chains.get(e):void 0,r=(n=t==null?void 0:t.networkState)==null?void 0:n.caipNetwork;r!=null&&r.id&&e&&(d.activeCaipAddress=(s=t==null?void 0:t.accountState)==null?void 0:s.caipAddress,d.activeCaipNetwork=r,i.setChainNetworkData(e,{caipNetwork:r}),E.setActiveCaipNetworkId(r==null?void 0:r.caipNetworkId),Pe.set({activeChain:e,selectedNetworkId:r==null?void 0:r.caipNetworkId}))},setActiveCaipNetwork(e){var n,s,a;if(!e)return;d.activeChain!==e.chainNamespace&&i.setIsSwitchingNamespace(!0);const t=d.chains.get(e.chainNamespace);d.activeChain=e.chainNamespace,d.activeCaipNetwork=e,i.setChainNetworkData(e.chainNamespace,{caipNetwork:e}),(n=t==null?void 0:t.accountState)!=null&&n.address?d.activeCaipAddress=`${e.chainNamespace}:${e.id}:${(s=t==null?void 0:t.accountState)==null?void 0:s.address}`:d.activeCaipAddress=void 0,i.setAccountProp("caipAddress",d.activeCaipAddress,e.chainNamespace),t&&D.replaceState(t.accountState),O.resetSend(),Pe.set({activeChain:d.activeChain,selectedNetworkId:(a=d.activeCaipNetwork)==null?void 0:a.caipNetworkId}),E.setActiveCaipNetworkId(e.caipNetworkId),!i.checkIfSupportedNetwork(e.chainNamespace)&&y.state.enableNetworkSwitch&&!y.state.allowUnsupportedChain&&!S.state.wcBasic&&i.showUnsupportedChainUI()},addCaipNetwork(e){var r;if(!e)return;const t=d.chains.get(e.chainNamespace);t&&((r=t==null?void 0:t.caipNetworks)==null||r.push(e))},async switchActiveNamespace(e){var s;if(!e)return;const t=e!==i.state.activeChain,r=(s=i.getNetworkData(e))==null?void 0:s.caipNetwork,n=i.getCaipNetworkByNamespace(e,r==null?void 0:r.id);t&&n&&await i.switchActiveNetwork(n)},async switchActiveNetwork(e){var s;const t=i.state.chains.get(i.state.activeChain),r=!((s=t==null?void 0:t.caipNetworks)!=null&&s.some(a=>{var o;return a.id===((o=d.activeCaipNetwork)==null?void 0:o.id)})),n=i.getNetworkControllerClient(e.chainNamespace);if(n){try{await n.switchCaipNetwork(e),r&&ee.close()}catch{N.goBack()}H.sendEvent({type:"track",event:"SWITCH_NETWORK",properties:{network:e.caipNetworkId}})}},getNetworkControllerClient(e){const t=e||d.activeChain,r=d.chains.get(t);if(!r)throw new Error("Chain adapter not found");if(!r.networkControllerClient)throw new Error("NetworkController client not set");return r.networkControllerClient},getConnectionControllerClient(e){const t=e||d.activeChain;if(!t)throw new Error("Chain is required to get connection controller client");const r=d.chains.get(t);if(!(r!=null&&r.connectionControllerClient))throw new Error("ConnectionController client not set");return r.connectionControllerClient},getAccountProp(e,t){var s;let r=d.activeChain;if(t&&(r=t),!r)return;const n=(s=d.chains.get(r))==null?void 0:s.accountState;if(n)return n[e]},getNetworkProp(e,t){var n;const r=(n=d.chains.get(t))==null?void 0:n.networkState;if(r)return r[e]},getRequestedCaipNetworks(e){const t=d.chains.get(e),{approvedCaipNetworkIds:r=[],requestedCaipNetworks:n=[]}=(t==null?void 0:t.networkState)||{};return I.sortRequestedNetworks(r,n)},getAllRequestedCaipNetworks(){const e=[];return d.chains.forEach(t=>{const r=i.getRequestedCaipNetworks(t.namespace);e.push(...r)}),e},setRequestedCaipNetworks(e,t){i.setAdapterNetworkState(t,{requestedCaipNetworks:e});const n=i.getAllRequestedCaipNetworks().map(a=>a.chainNamespace),s=Array.from(new Set(n));_.filterByNamespaces(s)},getAllApprovedCaipNetworkIds(){const e=[];return d.chains.forEach(t=>{const r=i.getApprovedCaipNetworkIds(t.namespace);e.push(...r)}),e},getActiveCaipNetwork(){return d.activeCaipNetwork},getActiveCaipAddress(){return d.activeCaipAddress},getApprovedCaipNetworkIds(e){var n;const t=d.chains.get(e);return((n=t==null?void 0:t.networkState)==null?void 0:n.approvedCaipNetworkIds)||[]},async setApprovedCaipNetworksData(e){const t=i.getNetworkControllerClient(),r=await(t==null?void 0:t.getApprovedCaipNetworksData());i.setAdapterNetworkState(e,{approvedCaipNetworkIds:r==null?void 0:r.approvedCaipNetworkIds,supportsAllNetworks:r==null?void 0:r.supportsAllNetworks})},checkIfSupportedNetwork(e,t){const r=t||d.activeCaipNetwork,n=i.getRequestedCaipNetworks(e);return n.length?n==null?void 0:n.some(s=>s.id===(r==null?void 0:r.id)):!0},checkIfSupportedChainId(e){if(!d.activeChain)return!0;const t=i.getRequestedCaipNetworks(d.activeChain);return t==null?void 0:t.some(r=>r.id===e)},setSmartAccountEnabledNetworks(e,t){i.setAdapterNetworkState(t,{smartAccountEnabledNetworks:e})},checkIfSmartAccountEnabled(){var n;const e=Ht.caipNetworkIdToNumber((n=d.activeCaipNetwork)==null?void 0:n.caipNetworkId),t=d.activeChain;if(!t||!e)return!1;const r=i.getNetworkProp("smartAccountEnabledNetworks",t);return!!(r!=null&&r.includes(Number(e)))},getActiveNetworkTokenAddress(){var n,s;const e=((n=d.activeCaipNetwork)==null?void 0:n.chainNamespace)||"eip155",t=((s=d.activeCaipNetwork)==null?void 0:s.id)||1,r=te.NATIVE_TOKEN_ADDRESS[e];return`${e}:${t}:${r}`},showUnsupportedChainUI(){ee.open({view:"UnsupportedChain"})},checkIfNamesSupported(){const e=d.activeCaipNetwork;return!!(e!=null&&e.chainNamespace&&te.NAMES_SUPPORTED_CHAIN_NAMESPACES.includes(e.chainNamespace))},resetNetwork(e){i.setAdapterNetworkState(e,{approvedCaipNetworkIds:void 0,supportsAllNetworks:!0,smartAccountEnabledNetworks:[]})},resetAccount(e){const t=e;if(!t)throw new Error("Chain is required to set account prop");d.activeCaipAddress=void 0,i.setChainAccountData(t,{smartAccountDeployed:!1,currentTab:0,caipAddress:void 0,address:void 0,balance:void 0,balanceSymbol:void 0,profileName:void 0,profileImage:void 0,addressExplorerUrl:void 0,tokenBalance:[],connectedWalletInfo:void 0,preferredAccountTypes:void 0,socialProvider:void 0,socialWindow:void 0,farcasterUrl:void 0,allAccounts:[],user:void 0,status:"disconnected"}),_.removeConnectorId(t)},setIsSwitchingNamespace(e){d.isSwitchingNamespace=e},getFirstCaipNetworkSupportsAuthConnector(){var r,n;const e=[];let t;if(d.chains.forEach(s=>{$.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(a=>a===s.namespace)&&s.namespace&&e.push(s.namespace)}),e.length>0){const s=e[0];return t=s?(n=(r=d.chains.get(s))==null?void 0:r.caipNetworks)==null?void 0:n[0]:void 0,t}},getAccountData(e){var t;return e?(t=i.state.chains.get(e))==null?void 0:t.accountState:D.state},getNetworkData(e){var r;const t=e||d.activeChain;if(t)return(r=i.state.chains.get(t))==null?void 0:r.networkState},getCaipNetworkByNamespace(e,t){var s,a,o;if(!e)return;const r=i.state.chains.get(e),n=(s=r==null?void 0:r.caipNetworks)==null?void 0:s.find(l=>l.id===t);return n||((a=r==null?void 0:r.networkState)==null?void 0:a.caipNetwork)||((o=r==null?void 0:r.caipNetworks)==null?void 0:o[0])},getRequestedCaipNetworkIds(){const e=_.state.filterByNamespace;return(e?[d.chains.get(e)]:Array.from(d.chains.values())).flatMap(r=>(r==null?void 0:r.caipNetworks)||[]).map(r=>r.caipNetworkId)},getCaipNetworks(e){return e?i.getRequestedCaipNetworks(e):i.getAllRequestedCaipNetworks()}},i=se(Sr),Nr={purchaseCurrencies:[{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"Ether",symbol:"ETH",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]}],paymentCurrencies:[{id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},{id:"EUR",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]}]},Lt=I.getBlockchainApiUrl(),X=B({clientId:null,api:new qe({baseUrl:Lt,clientId:null}),supportedChains:{http:[],ws:[]}}),w={state:X,async get(e){const{st:t,sv:r}=w.getSdkProperties(),n=y.state.projectId,s={...e.params||{},st:t,sv:r,projectId:n};return X.api.get({...e,params:s})},getSdkProperties(){const{sdkType:e,sdkVersion:t}=y.state;return{st:e||"unknown",sv:t||"unknown"}},async isNetworkSupported(e){if(!e)return!1;try{X.supportedChains.http.length||await w.getSupportedNetworks()}catch{return!1}return X.supportedChains.http.includes(e)},async getSupportedNetworks(){try{const e=await w.get({path:"v1/supported-chains"});return X.supportedChains=e,e}catch{return X.supportedChains}},async fetchIdentity({address:e,caipNetworkId:t}){if(!await w.isNetworkSupported(t))return{avatar:"",name:""};const n=E.getIdentityFromCacheForAddress(e);if(n)return n;const s=await w.get({path:`/v1/identity/${e}`,params:{sender:i.state.activeCaipAddress?I.getPlainAddress(i.state.activeCaipAddress):void 0}});return E.updateIdentityCache({address:e,identity:s,timestamp:Date.now()}),s},async fetchTransactions({account:e,cursor:t,onramp:r,signal:n,cache:s,chainId:a}){var l;return await w.isNetworkSupported((l=i.state.activeCaipNetwork)==null?void 0:l.caipNetworkId)?w.get({path:`/v1/account/${e}/history`,params:{cursor:t,onramp:r,chainId:a},signal:n,cache:s}):{data:[],next:void 0}},async fetchSwapQuote({amount:e,userAddress:t,from:r,to:n,gasPrice:s}){var o;return await w.isNetworkSupported((o=i.state.activeCaipNetwork)==null?void 0:o.caipNetworkId)?w.get({path:"/v1/convert/quotes",headers:{"Content-Type":"application/json"},params:{amount:e,userAddress:t,from:r,to:n,gasPrice:s}}):{quotes:[]}},async fetchSwapTokens({chainId:e}){var r;return await w.isNetworkSupported((r=i.state.activeCaipNetwork)==null?void 0:r.caipNetworkId)?w.get({path:"/v1/convert/tokens",params:{chainId:e}}):{tokens:[]}},async fetchTokenPrice({addresses:e}){var r;return await w.isNetworkSupported((r=i.state.activeCaipNetwork)==null?void 0:r.caipNetworkId)?X.api.post({path:"/v1/fungible/price",body:{currency:"usd",addresses:e,projectId:y.state.projectId},headers:{"Content-Type":"application/json"}}):{fungibles:[]}},async fetchSwapAllowance({tokenAddress:e,userAddress:t}){var n;return await w.isNetworkSupported((n=i.state.activeCaipNetwork)==null?void 0:n.caipNetworkId)?w.get({path:"/v1/convert/allowance",params:{tokenAddress:e,userAddress:t},headers:{"Content-Type":"application/json"}}):{allowance:"0"}},async fetchGasPrice({chainId:e}){var s;const{st:t,sv:r}=w.getSdkProperties();if(!await w.isNetworkSupported((s=i.state.activeCaipNetwork)==null?void 0:s.caipNetworkId))throw new Error("Network not supported for Gas Price");return w.get({path:"/v1/convert/gas-price",headers:{"Content-Type":"application/json"},params:{chainId:e,st:t,sv:r}})},async generateSwapCalldata({amount:e,from:t,to:r,userAddress:n,disableEstimate:s}){var o;if(!await w.isNetworkSupported((o=i.state.activeCaipNetwork)==null?void 0:o.caipNetworkId))throw new Error("Network not supported for Swaps");return X.api.post({path:"/v1/convert/build-transaction",headers:{"Content-Type":"application/json"},body:{amount:e,eip155:{slippage:te.CONVERT_SLIPPAGE_TOLERANCE},projectId:y.state.projectId,from:t,to:r,userAddress:n,disableEstimate:s}})},async generateApproveCalldata({from:e,to:t,userAddress:r}){var o;const{st:n,sv:s}=w.getSdkProperties();if(!await w.isNetworkSupported((o=i.state.activeCaipNetwork)==null?void 0:o.caipNetworkId))throw new Error("Network not supported for Swaps");return w.get({path:"/v1/convert/build-approve",headers:{"Content-Type":"application/json"},params:{userAddress:r,from:e,to:t,st:n,sv:s}})},async getBalance(e,t,r){var u;const{st:n,sv:s}=w.getSdkProperties();if(!await w.isNetworkSupported((u=i.state.activeCaipNetwork)==null?void 0:u.caipNetworkId))return me.showError("Token Balance Unavailable"),{balances:[]};const o=`${t}:${e}`,l=E.getBalanceCacheForCaipAddress(o);if(l)return l;const c=await w.get({path:`/v1/account/${e}/balance`,params:{currency:"usd",chainId:t,forceUpdate:r,st:n,sv:s}});return E.updateBalanceCache({caipAddress:o,balance:c,timestamp:Date.now()}),c},async lookupEnsName(e){var r;return await w.isNetworkSupported((r=i.state.activeCaipNetwork)==null?void 0:r.caipNetworkId)?w.get({path:`/v1/profile/account/${e}`,params:{apiVersion:"2"}}):{addresses:{},attributes:[]}},async reverseLookupEnsName({address:e}){var r;return await w.isNetworkSupported((r=i.state.activeCaipNetwork)==null?void 0:r.caipNetworkId)?w.get({path:`/v1/profile/reverse/${e}`,params:{sender:D.state.address,apiVersion:"2"}}):[]},async getEnsNameSuggestions(e){var r;return await w.isNetworkSupported((r=i.state.activeCaipNetwork)==null?void 0:r.caipNetworkId)?w.get({path:`/v1/profile/suggestions/${e}`,params:{zone:"reown.id"}}):{suggestions:[]}},async registerEnsName({coinType:e,address:t,message:r,signature:n}){var a;return await w.isNetworkSupported((a=i.state.activeCaipNetwork)==null?void 0:a.caipNetworkId)?X.api.post({path:"/v1/profile/account",body:{coin_type:e,address:t,message:r,signature:n},headers:{"Content-Type":"application/json"}}):{success:!1}},async generateOnRampURL({destinationWallets:e,partnerUserId:t,defaultNetwork:r,purchaseAmount:n,paymentAmount:s}){var l;return await w.isNetworkSupported((l=i.state.activeCaipNetwork)==null?void 0:l.caipNetworkId)?(await X.api.post({path:"/v1/generators/onrampurl",params:{projectId:y.state.projectId},body:{destinationWallets:e,defaultNetwork:r,partnerUserId:t,defaultExperience:"buy",presetCryptoAmount:n,presetFiatAmount:s}})).url:""},async getOnrampOptions(){var t;if(!await w.isNetworkSupported((t=i.state.activeCaipNetwork)==null?void 0:t.caipNetworkId))return{paymentCurrencies:[],purchaseCurrencies:[]};try{return await w.get({path:"/v1/onramp/options"})}catch{return Nr}},async getOnrampQuote({purchaseCurrency:e,paymentCurrency:t,amount:r,network:n}){var s;try{return await w.isNetworkSupported((s=i.state.activeCaipNetwork)==null?void 0:s.caipNetworkId)?await X.api.post({path:"/v1/onramp/quote",params:{projectId:y.state.projectId},body:{purchaseCurrency:e,paymentCurrency:t,amount:r,network:n}}):null}catch{return{coinbaseFee:{amount:r,currency:t.id},networkFee:{amount:r,currency:t.id},paymentSubtotal:{amount:r,currency:t.id},paymentTotal:{amount:r,currency:t.id},purchaseAmount:{amount:r,currency:t.id},quoteId:"mocked-quote-id"}}},async getSmartSessions(e){var r;return await w.isNetworkSupported((r=i.state.activeCaipNetwork)==null?void 0:r.caipNetworkId)?w.get({path:`/v1/sessions/${e}`}):[]},async revokeSmartSession(e,t,r){var s;return await w.isNetworkSupported((s=i.state.activeCaipNetwork)==null?void 0:s.caipNetworkId)?X.api.post({path:`/v1/sessions/${e}/revoke`,params:{projectId:y.state.projectId},body:{pci:t,signature:r}}):{success:!1}},setClientId(e){X.clientId=e,X.api=new qe({baseUrl:Lt,clientId:e})}},re=B({currentTab:0,tokenBalance:[],smartAccountDeployed:!1,addressLabels:new Map,allAccounts:[]}),Ir={state:re,replaceState(e){e&&Object.assign(re,Ne(e))},subscribe(e){return i.subscribeChainProp("accountState",t=>{if(t)return e(t)})},subscribeKey(e,t,r){let n;return i.subscribeChainProp("accountState",s=>{if(s){const a=s[e];n!==a&&(n=a,t(a))}},r)},setStatus(e,t){i.setAccountProp("status",e,t)},getCaipAddress(e){return i.getAccountProp("caipAddress",e)},setCaipAddress(e,t){const r=e?I.getPlainAddress(e):void 0;t===i.state.activeChain&&(i.state.activeCaipAddress=e),i.setAccountProp("caipAddress",e,t),i.setAccountProp("address",r,t)},setBalance(e,t,r){i.setAccountProp("balance",e,r),i.setAccountProp("balanceSymbol",t,r)},setProfileName(e,t){i.setAccountProp("profileName",e,t)},setProfileImage(e,t){i.setAccountProp("profileImage",e,t)},setUser(e,t){i.setAccountProp("user",e,t)},setAddressExplorerUrl(e,t){i.setAccountProp("addressExplorerUrl",e,t)},setSmartAccountDeployed(e,t){i.setAccountProp("smartAccountDeployed",e,t)},setCurrentTab(e){i.setAccountProp("currentTab",e,i.state.activeChain)},setTokenBalance(e,t){e&&i.setAccountProp("tokenBalance",e,t)},setShouldUpdateToAddress(e,t){i.setAccountProp("shouldUpdateToAddress",e,t)},setAllAccounts(e,t){i.setAccountProp("allAccounts",e,t)},addAddressLabel(e,t,r){const n=i.getAccountProp("addressLabels",r)||new Map;n.set(e,t),i.setAccountProp("addressLabels",n,r)},removeAddressLabel(e,t){const r=i.getAccountProp("addressLabels",t)||new Map;r.delete(e),i.setAccountProp("addressLabels",r,t)},setConnectedWalletInfo(e,t){i.setAccountProp("connectedWalletInfo",e,t,!1)},setPreferredAccountType(e,t){i.setAccountProp("preferredAccountTypes",{...re.preferredAccountTypes,[t]:e},t)},setPreferredAccountTypes(e){re.preferredAccountTypes=e},setSocialProvider(e,t){e&&i.setAccountProp("socialProvider",e,t)},setSocialWindow(e,t){i.setAccountProp("socialWindow",e?Ne(e):void 0,t)},setFarcasterUrl(e,t){i.setAccountProp("farcasterUrl",e,t)},async fetchTokenBalance(e){var a,o;re.balanceLoading=!0;const t=(a=i.state.activeCaipNetwork)==null?void 0:a.caipNetworkId,r=(o=i.state.activeCaipNetwork)==null?void 0:o.chainNamespace,n=i.state.activeCaipAddress,s=n?I.getPlainAddress(n):void 0;if(re.lastRetry&&!I.isAllowedRetry(re.lastRetry,30*te.ONE_SEC_MS))return re.balanceLoading=!1,[];try{if(s&&t&&r){const c=(await w.getBalance(s,t)).balances.filter(u=>u.quantity.decimals!=="0");return D.setTokenBalance(c,r),re.lastRetry=void 0,re.balanceLoading=!1,c}}catch(l){re.lastRetry=Date.now(),e==null||e(l),me.showError("Token Balance Unavailable")}finally{re.balanceLoading=!1}return[]},resetAccount(e){i.resetAccount(e)}},D=se(Ir),Tr={onSwitchNetwork({network:e,ignoreSwitchConfirmation:t=!1}){const r=i.state.activeCaipNetwork,n=N.state.data;if(e.id===(r==null?void 0:r.id))return;const a=D.getCaipAddress(i.state.activeChain),o=e.chainNamespace!==i.state.activeChain,l=D.getCaipAddress(e.chainNamespace),u=_.getConnectorId(i.state.activeChain)===$.CONNECTOR_ID.AUTH,p=$.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(f=>f===e.chainNamespace);t||u&&p?N.push("SwitchNetwork",{...n,network:e}):a&&o&&!l?N.push("SwitchActiveChain",{switchToChain:e.chainNamespace,navigateTo:"Connect",navigateWithReplace:!0,network:e}):N.push("SwitchNetwork",{...n,network:e})}},J=B({loading:!1,loadingNamespaceMap:new Map,open:!1,shake:!1,namespace:void 0}),yr={state:J,subscribe(e){return K(J,()=>e(J))},subscribeKey(e,t){return G(J,e,t)},async open(e){var o,l;const t=D.state.status==="connected",r=e==null?void 0:e.namespace,n=i.state.activeChain,s=r&&r!==n,a=(o=i.getAccountData(e==null?void 0:e.namespace))==null?void 0:o.caipAddress;if(S.state.wcBasic?C.prefetch({fetchNetworkImages:!1,fetchConnectorImages:!1}):await C.prefetch({fetchConnectorImages:!t,fetchFeaturedWallets:!t,fetchRecommendedWallets:!t}),_.setFilterByNamespace(e==null?void 0:e.namespace),ee.setLoading(!0,r),r&&s){const c=((l=i.getNetworkData(r))==null?void 0:l.caipNetwork)||i.getRequestedCaipNetworks(r)[0];c&&Tr.onSwitchNetwork({network:c,ignoreSwitchConfirmation:!0})}else{const c=i.state.noAdapters;y.state.manualWCControl||c&&!a?I.isMobile()?N.reset("AllWallets"):N.reset("ConnectingWalletConnectBasic"):e!=null&&e.view?N.reset(e.view,e.data):a?N.reset("Account"):N.reset("Connect")}J.open=!0,Pe.set({open:!0}),H.sendEvent({type:"track",event:"MODAL_OPEN",properties:{connected:!!a}})},close(){const e=y.state.enableEmbedded,t=!!i.state.activeCaipAddress;J.open&&H.sendEvent({type:"track",event:"MODAL_CLOSE",properties:{connected:t}}),J.open=!1,N.reset("Connect"),ee.clearLoading(),e?t?N.replace("Account"):N.push("Connect"):Pe.set({open:!1}),S.resetUri()},setLoading(e,t){t&&J.loadingNamespaceMap.set(t,e),J.loading=e,Pe.set({loading:e})},clearLoading(){J.loadingNamespaceMap.clear(),J.loading=!1},shake(){J.shake||(J.shake=!0,setTimeout(()=>{J.shake=!1},500))}},ee=se(yr),yt=2147483648,Rr={convertEVMChainIdToCoinType(e){if(e>=yt)throw new Error("Invalid chainId");return(yt|e)>>>0}},ne=B({suggestions:[],loading:!1}),kr={state:ne,subscribe(e){return K(ne,()=>e(ne))},subscribeKey(e,t){return G(ne,e,t)},async resolveName(e){var t,r;try{return await w.lookupEnsName(e)}catch(n){const s=n;throw new Error(((r=(t=s==null?void 0:s.reasons)==null?void 0:t[0])==null?void 0:r.description)||"Error resolving name")}},async isNameRegistered(e){try{return await w.lookupEnsName(e),!0}catch{return!1}},async getSuggestions(e){try{ne.loading=!0,ne.suggestions=[];const t=await w.getEnsNameSuggestions(e);return ne.suggestions=t.suggestions.map(r=>({...r,name:r.name}))||[],ne.suggestions}catch(t){const r=rt.parseEnsApiError(t,"Error fetching name suggestions");throw new Error(r)}finally{ne.loading=!1}},async getNamesForAddress(e){try{if(!i.state.activeCaipNetwork)return[];const r=E.getEnsFromCacheForAddress(e);if(r)return r;const n=await w.reverseLookupEnsName({address:e});return E.updateEnsCache({address:e,ens:n,timestamp:Date.now()}),n}catch(t){const r=rt.parseEnsApiError(t,"Error fetching names for address");throw new Error(r)}},async registerName(e){const t=i.state.activeCaipNetwork;if(!t)throw new Error("Network not found");const r=D.state.address,n=_.getAuthConnector();if(!r||!n)throw new Error("Address or auth connector not found");ne.loading=!0;try{const s=JSON.stringify({name:e,attributes:{},timestamp:Math.floor(Date.now()/1e3)});N.pushTransactionStack({onCancel(){N.replace("RegisterAccountName")}});const a=await S.signMessage(s);ne.loading=!1;const o=t.id;if(!o)throw new Error("Network not found");const l=Rr.convertEVMChainIdToCoinType(Number(o));await w.registerEnsName({coinType:l,address:r,signature:a,message:s}),D.setProfileName(e,t.chainNamespace),N.replace("RegisterAccountNameSuccess")}catch(s){const a=rt.parseEnsApiError(s,`Error registering name ${e}`);throw N.replace("RegisterAccountName"),new Error(a)}finally{ne.loading=!1}},validateName(e){return/^[a-zA-Z0-9-]{4,}$/u.test(e)},parseEnsApiError(e,t){var n,s;const r=e;return((s=(n=r==null?void 0:r.reasons)==null?void 0:n[0])==null?void 0:s.description)||t}},rt=se(kr),Rt=Pt,He=Fr().console||{},Or={mapHttpRequest:et,mapHttpResponse:et,wrapRequestSerializer:wt,wrapResponseSerializer:wt,wrapErrorSerializer:wt,req:et,res:et,err:Dr};function Ur(e,t){return Array.isArray(e)?e.filter(function(n){return n!=="!stdSerializers.err"}):e===!0?Object.keys(t):!1}function we(e){e=e||{},e.browser=e.browser||{};const t=e.browser.transmit;if(t&&typeof t.send!="function")throw Error("pino: transmit option must have a send function");const r=e.browser.write||He;e.browser.write&&(e.browser.asObject=!0);const n=e.serializers||{},s=Ur(e.browser.serialize,n);let a=e.browser.serialize;Array.isArray(e.browser.serialize)&&e.browser.serialize.indexOf("!stdSerializers.err")>-1&&(a=!1);const o=["error","fatal","warn","info","debug","trace"];typeof r=="function"&&(r.error=r.fatal=r.warn=r.info=r.debug=r.trace=r),e.enabled===!1&&(e.level="silent");const l=e.level||"info",c=Object.create(r);c.log||(c.log=Ve),Object.defineProperty(c,"levelVal",{get:p}),Object.defineProperty(c,"level",{get:f,set:W});const u={transmit:t,serialize:s,asObject:e.browser.asObject,levels:o,timestamp:Mr(e)};c.levels=we.levels,c.level=l,c.setMaxListeners=c.getMaxListeners=c.emit=c.addListener=c.on=c.prependListener=c.once=c.prependOnceListener=c.removeListener=c.removeAllListeners=c.listeners=c.listenerCount=c.eventNames=c.write=c.flush=Ve,c.serializers=n,c._serialize=s,c._stdErrSerialize=a,c.child=V,t&&(c._logEvent=bt());function p(){return this.level==="silent"?1/0:this.levels.values[this.level]}function f(){return this._level}function W(h){if(h!=="silent"&&!this.levels.values[h])throw Error("unknown level "+h);this._level=h,ye(u,c,"error","log"),ye(u,c,"fatal","error"),ye(u,c,"warn","error"),ye(u,c,"info","log"),ye(u,c,"debug","log"),ye(u,c,"trace","log")}function V(h,F){if(!h)throw new Error("missing bindings for child Pino");F=F||{},s&&h.serializers&&(F.serializers=h.serializers);const ie=F.serializers;if(s&&ie){var M=Object.assign({},n,ie),de=e.browser.serialize===!0?Object.keys(M):s;delete h.serializers,ot([h],de,M,this._stdErrSerialize)}function ce(z){this._childLevel=(z._childLevel|0)+1,this.error=Re(z,h,"error"),this.fatal=Re(z,h,"fatal"),this.warn=Re(z,h,"warn"),this.info=Re(z,h,"info"),this.debug=Re(z,h,"debug"),this.trace=Re(z,h,"trace"),M&&(this.serializers=M,this._serialize=de),t&&(this._logEvent=bt([].concat(z._logEvent.bindings,h)))}return ce.prototype=this,new ce(this)}return c}we.levels={values:{fatal:60,error:50,warn:40,info:30,debug:20,trace:10},labels:{10:"trace",20:"debug",30:"info",40:"warn",50:"error",60:"fatal"}};we.stdSerializers=Or;we.stdTimeFunctions=Object.assign({},{nullTime:Dt,epochTime:Mt,unixTime:Br,isoTime:Wr});function ye(e,t,r,n){const s=Object.getPrototypeOf(t);t[r]=t.levelVal>t.levels.values[r]?Ve:s[r]?s[r]:He[r]||He[n]||Ve,Pr(e,t,r)}function Pr(e,t,r){!e.transmit&&t[r]===Ve||(t[r]=function(n){return function(){const a=e.timestamp(),o=new Array(arguments.length),l=Object.getPrototypeOf&&Object.getPrototypeOf(this)===He?He:this;for(var c=0;c<o.length;c++)o[c]=arguments[c];if(e.serialize&&!e.asObject&&ot(o,this._serialize,this.serializers,this._stdErrSerialize),e.asObject?n.call(l,xr(this,r,o,a)):n.apply(l,o),e.transmit){const u=e.transmit.level||t.level,p=we.levels.values[u],f=we.levels.values[r];if(f<p)return;Lr(this,{ts:a,methodLevel:r,methodValue:f,transmitValue:we.levels.values[e.transmit.level||t.level],send:e.transmit.send,val:t.levelVal},o)}}}(t[r]))}function xr(e,t,r,n){e._serialize&&ot(r,e._serialize,e.serializers,e._stdErrSerialize);const s=r.slice();let a=s[0];const o={};n&&(o.time=n),o.level=we.levels.values[t];let l=(e._childLevel|0)+1;if(l<1&&(l=1),a!==null&&typeof a=="object"){for(;l--&&typeof s[0]=="object";)Object.assign(o,s.shift());a=s.length?Rt(s.shift(),s):void 0}else typeof a=="string"&&(a=Rt(s.shift(),s));return a!==void 0&&(o.msg=a),o}function ot(e,t,r,n){for(const s in e)if(n&&e[s]instanceof Error)e[s]=we.stdSerializers.err(e[s]);else if(typeof e[s]=="object"&&!Array.isArray(e[s]))for(const a in e[s])t&&t.indexOf(a)>-1&&a in r&&(e[s][a]=r[a](e[s][a]))}function Re(e,t,r){return function(){const n=new Array(1+arguments.length);n[0]=t;for(var s=1;s<n.length;s++)n[s]=arguments[s-1];return e[r].apply(this,n)}}function Lr(e,t,r){const n=t.send,s=t.ts,a=t.methodLevel,o=t.methodValue,l=t.val,c=e._logEvent.bindings;ot(r,e._serialize||Object.keys(e.serializers),e.serializers,e._stdErrSerialize===void 0?!0:e._stdErrSerialize),e._logEvent.ts=s,e._logEvent.messages=r.filter(function(u){return c.indexOf(u)===-1}),e._logEvent.level.label=a,e._logEvent.level.value=o,n(a,e._logEvent,l),e._logEvent=bt(c)}function bt(e){return{ts:0,messages:[],bindings:e||[],level:{label:"",value:0}}}function Dr(e){const t={type:e.constructor.name,msg:e.message,stack:e.stack};for(const r in e)t[r]===void 0&&(t[r]=e[r]);return t}function Mr(e){return typeof e.timestamp=="function"?e.timestamp:e.timestamp===!1?Dt:Mt}function et(){return{}}function wt(e){return e}function Ve(){}function Dt(){return!1}function Mt(){return Date.now()}function Br(){return Math.round(Date.now()/1e3)}function Wr(){return new Date(Date.now()).toISOString()}function Fr(){function e(t){return typeof t<"u"&&t}try{return typeof globalThis<"u"||Object.defineProperty(Object.prototype,"globalThis",{get:function(){return delete Object.prototype.globalThis,this.globalThis=this},configurable:!0}),globalThis}catch{return e(self)||e(window)||e(this)||{}}}const nt={getSIWX(){return y.state.siwx},async initializeIfEnabled(){var a;const e=y.state.siwx,t=i.getActiveCaipAddress();if(!(e&&t))return;const[r,n,s]=t.split(":");if(i.checkIfSupportedNetwork(r))try{if((await e.getSessions(`${r}:${n}`,s)).length)return;await ee.open({view:"SIWXSignMessage"})}catch(o){console.error("SIWXUtil:initializeIfEnabled",o),H.sendEvent({type:"track",event:"SIWX_AUTH_ERROR",properties:this.getSIWXEventProperties()}),await((a=S._getClient())==null?void 0:a.disconnect().catch(console.error)),N.reset("Connect"),me.showError("A problem occurred while trying initialize authentication")}},async requestSignMessage(){const e=y.state.siwx,t=I.getPlainAddress(i.getActiveCaipAddress()),r=i.getActiveCaipNetwork(),n=S._getClient();if(!e)throw new Error("SIWX is not enabled");if(!t)throw new Error("No ActiveCaipAddress found");if(!r)throw new Error("No ActiveCaipNetwork or client found");if(!n)throw new Error("No ConnectionController client found");try{const s=await e.createMessage({chainId:r.caipNetworkId,accountAddress:t}),a=s.toString();_.getConnectorId(r.chainNamespace)===$.CONNECTOR_ID.AUTH&&N.pushTransactionStack({});const l=await n.signMessage(a);await e.addSession({data:s,message:a,signature:l}),ee.close(),H.sendEvent({type:"track",event:"SIWX_AUTH_SUCCESS",properties:this.getSIWXEventProperties()})}catch(s){const a=this.getSIWXEventProperties();(!ee.state.open||N.state.view==="ApproveTransaction")&&await ee.open({view:"SIWXSignMessage"}),a.isSmartAccount?me.showError("This application might not support Smart Accounts"):me.showError("Signature declined"),H.sendEvent({type:"track",event:"SIWX_AUTH_ERROR",properties:a}),console.error("SWIXUtil:requestSignMessage",s)}},async cancelSignMessage(){var e;try{const t=this.getSIWX();((e=t==null?void 0:t.getRequired)==null?void 0:e.call(t))?await S.disconnect():ee.close(),N.reset("Connect"),H.sendEvent({event:"CLICK_CANCEL_SIWX",type:"track",properties:this.getSIWXEventProperties()})}catch(t){console.error("SIWXUtil:cancelSignMessage",t)}},async getSessions(){const e=y.state.siwx,t=I.getPlainAddress(i.getActiveCaipAddress()),r=i.getActiveCaipNetwork();return e&&t&&r?e.getSessions(r.caipNetworkId,t):[]},async isSIWXCloseDisabled(){var t;const e=this.getSIWX();if(e){const r=N.state.view==="ApproveTransaction",n=N.state.view==="SIWXSignMessage";if(r||n)return((t=e.getRequired)==null?void 0:t.call(e))&&(await this.getSessions()).length===0}return!1},async universalProviderAuthenticate({universalProvider:e,chains:t,methods:r}){var l,c,u;const n=nt.getSIWX(),s=new Set(t.map(p=>p.split(":")[0]));if(!n||s.size!==1||!s.has("eip155"))return!1;const a=await n.createMessage({chainId:((l=i.getActiveCaipNetwork())==null?void 0:l.caipNetworkId)||"",accountAddress:""}),o=await e.authenticate({nonce:a.nonce,domain:a.domain,uri:a.uri,exp:a.expirationTime,iat:a.issuedAt,nbf:a.notBefore,requestId:a.requestId,version:a.version,resources:a.resources,statement:a.statement,chainId:a.chainId,methods:r,chains:[a.chainId,...t.filter(p=>p!==a.chainId)]});if(me.showLoading("Authenticating...",{autoClose:!1}),D.setConnectedWalletInfo({...o.session.peer.metadata,name:o.session.peer.metadata.name,icon:(c=o.session.peer.metadata.icons)==null?void 0:c[0],type:"WALLET_CONNECT"},Array.from(s)[0]),(u=o==null?void 0:o.auths)!=null&&u.length){const p=o.auths.map(f=>{const W=e.client.formatAuthMessage({request:f.p,iss:f.p.iss});return{data:{...f.p,accountAddress:f.p.iss.split(":").slice(-1).join(""),chainId:f.p.iss.split(":").slice(2,4).join(":"),uri:f.p.aud,version:f.p.version||a.version,expirationTime:f.p.exp,issuedAt:f.p.iat,notBefore:f.p.nbf},message:W,signature:f.s.s,cacao:f}});try{await n.setSessions(p),H.sendEvent({type:"track",event:"SIWX_AUTH_SUCCESS",properties:nt.getSIWXEventProperties()})}catch(f){throw console.error("SIWX:universalProviderAuth - failed to set sessions",f),H.sendEvent({type:"track",event:"SIWX_AUTH_ERROR",properties:nt.getSIWXEventProperties()}),await e.disconnect().catch(console.error),f}finally{me.hide()}}return!0},getSIWXEventProperties(){var t,r;const e=i.state.activeChain;return{network:((t=i.state.activeCaipNetwork)==null?void 0:t.caipNetworkId)||"",isSmartAccount:((r=D.state.preferredAccountTypes)==null?void 0:r[e])===ze.ACCOUNT_TYPES.SMART_ACCOUNT}},async clearSessions(){const e=this.getSIWX();e&&await e.setSessions([])}},at={eip155:void 0,solana:void 0,polkadot:void 0,bip122:void 0,cosmos:void 0},Q=B({providers:{...at},providerIds:{...at}}),gn={state:Q,subscribeKey(e,t){return G(Q,e,t)},subscribe(e){return K(Q,()=>{e(Q)})},subscribeProviders(e){return K(Q.providers,()=>e(Q.providers))},setProvider(e,t){t&&(Q.providers[e]=Ne(t))},getProvider(e){return Q.providers[e]},setProviderId(e,t){t&&(Q.providerIds[e]=t)},getProviderId(e){if(e)return Q.providerIds[e]},reset(){Q.providers={...at},Q.providerIds={...at}},resetChain(e){Q.providers[e]=void 0,Q.providerIds[e]=void 0}},kt=Pt;var zr=ue;const Ke=Jr().console||{},jr={mapHttpRequest:tt,mapHttpResponse:tt,wrapRequestSerializer:gt,wrapResponseSerializer:gt,wrapErrorSerializer:gt,req:tt,res:tt,err:Gr};function $r(e,t){return Array.isArray(e)?e.filter(function(n){return n!=="!stdSerializers.err"}):e===!0?Object.keys(t):!1}function ue(e){e=e||{},e.browser=e.browser||{};const t=e.browser.transmit;if(t&&typeof t.send!="function")throw Error("pino: transmit option must have a send function");const r=e.browser.write||Ke;e.browser.write&&(e.browser.asObject=!0);const n=e.serializers||{},s=$r(e.browser.serialize,n);let a=e.browser.serialize;Array.isArray(e.browser.serialize)&&e.browser.serialize.indexOf("!stdSerializers.err")>-1&&(a=!1);const o=["error","fatal","warn","info","debug","trace"];typeof r=="function"&&(r.error=r.fatal=r.warn=r.info=r.debug=r.trace=r),e.enabled===!1&&(e.level="silent");const l=e.level||"info",c=Object.create(r);c.log||(c.log=Ge),Object.defineProperty(c,"levelVal",{get:p}),Object.defineProperty(c,"level",{get:f,set:W});const u={transmit:t,serialize:s,asObject:e.browser.asObject,levels:o,timestamp:qr(e)};c.levels=ue.levels,c.level=l,c.setMaxListeners=c.getMaxListeners=c.emit=c.addListener=c.on=c.prependListener=c.once=c.prependOnceListener=c.removeListener=c.removeAllListeners=c.listeners=c.listenerCount=c.eventNames=c.write=c.flush=Ge,c.serializers=n,c._serialize=s,c._stdErrSerialize=a,c.child=V,t&&(c._logEvent=At());function p(){return this.level==="silent"?1/0:this.levels.values[this.level]}function f(){return this._level}function W(h){if(h!=="silent"&&!this.levels.values[h])throw Error("unknown level "+h);this._level=h,ke(u,c,"error","log"),ke(u,c,"fatal","error"),ke(u,c,"warn","error"),ke(u,c,"info","log"),ke(u,c,"debug","log"),ke(u,c,"trace","log")}function V(h,F){if(!h)throw new Error("missing bindings for child Pino");F=F||{},s&&h.serializers&&(F.serializers=h.serializers);const ie=F.serializers;if(s&&ie){var M=Object.assign({},n,ie),de=e.browser.serialize===!0?Object.keys(M):s;delete h.serializers,it([h],de,M,this._stdErrSerialize)}function ce(z){this._childLevel=(z._childLevel|0)+1,this.error=Oe(z,h,"error"),this.fatal=Oe(z,h,"fatal"),this.warn=Oe(z,h,"warn"),this.info=Oe(z,h,"info"),this.debug=Oe(z,h,"debug"),this.trace=Oe(z,h,"trace"),M&&(this.serializers=M,this._serialize=de),t&&(this._logEvent=At([].concat(z._logEvent.bindings,h)))}return ce.prototype=this,new ce(this)}return c}ue.levels={values:{fatal:60,error:50,warn:40,info:30,debug:20,trace:10},labels:{10:"trace",20:"debug",30:"info",40:"warn",50:"error",60:"fatal"}};ue.stdSerializers=jr;ue.stdTimeFunctions=Object.assign({},{nullTime:Bt,epochTime:Wt,unixTime:Yr,isoTime:Xr});function ke(e,t,r,n){const s=Object.getPrototypeOf(t);t[r]=t.levelVal>t.levels.values[r]?Ge:s[r]?s[r]:Ke[r]||Ke[n]||Ge,Hr(e,t,r)}function Hr(e,t,r){!e.transmit&&t[r]===Ge||(t[r]=function(n){return function(){const a=e.timestamp(),o=new Array(arguments.length),l=Object.getPrototypeOf&&Object.getPrototypeOf(this)===Ke?Ke:this;for(var c=0;c<o.length;c++)o[c]=arguments[c];if(e.serialize&&!e.asObject&&it(o,this._serialize,this.serializers,this._stdErrSerialize),e.asObject?n.call(l,Vr(this,r,o,a)):n.apply(l,o),e.transmit){const u=e.transmit.level||t.level,p=ue.levels.values[u],f=ue.levels.values[r];if(f<p)return;Kr(this,{ts:a,methodLevel:r,methodValue:f,transmitValue:ue.levels.values[e.transmit.level||t.level],send:e.transmit.send,val:t.levelVal},o)}}}(t[r]))}function Vr(e,t,r,n){e._serialize&&it(r,e._serialize,e.serializers,e._stdErrSerialize);const s=r.slice();let a=s[0];const o={};n&&(o.time=n),o.level=ue.levels.values[t];let l=(e._childLevel|0)+1;if(l<1&&(l=1),a!==null&&typeof a=="object"){for(;l--&&typeof s[0]=="object";)Object.assign(o,s.shift());a=s.length?kt(s.shift(),s):void 0}else typeof a=="string"&&(a=kt(s.shift(),s));return a!==void 0&&(o.msg=a),o}function it(e,t,r,n){for(const s in e)if(n&&e[s]instanceof Error)e[s]=ue.stdSerializers.err(e[s]);else if(typeof e[s]=="object"&&!Array.isArray(e[s]))for(const a in e[s])t&&t.indexOf(a)>-1&&a in r&&(e[s][a]=r[a](e[s][a]))}function Oe(e,t,r){return function(){const n=new Array(1+arguments.length);n[0]=t;for(var s=1;s<n.length;s++)n[s]=arguments[s-1];return e[r].apply(this,n)}}function Kr(e,t,r){const n=t.send,s=t.ts,a=t.methodLevel,o=t.methodValue,l=t.val,c=e._logEvent.bindings;it(r,e._serialize||Object.keys(e.serializers),e.serializers,e._stdErrSerialize===void 0?!0:e._stdErrSerialize),e._logEvent.ts=s,e._logEvent.messages=r.filter(function(u){return c.indexOf(u)===-1}),e._logEvent.level.label=a,e._logEvent.level.value=o,n(a,e._logEvent,l),e._logEvent=At(c)}function At(e){return{ts:0,messages:[],bindings:e||[],level:{label:"",value:0}}}function Gr(e){const t={type:e.constructor.name,msg:e.message,stack:e.stack};for(const r in e)t[r]===void 0&&(t[r]=e[r]);return t}function qr(e){return typeof e.timestamp=="function"?e.timestamp:e.timestamp===!1?Bt:Wt}function tt(){return{}}function gt(e){return e}function Ge(){}function Bt(){return!1}function Wt(){return Date.now()}function Yr(){return Math.round(Date.now()/1e3)}function Xr(){return new Date(Date.now()).toISOString()}function Jr(){function e(t){return typeof t<"u"&&t}try{return typeof globalThis<"u"||Object.defineProperty(Object.prototype,"globalThis",{get:function(){return delete Object.prototype.globalThis,this.globalThis=this},configurable:!0}),globalThis}catch{return e(self)||e(window)||e(this)||{}}}const hn=Vt(zr);let je,Ae,_e;function Cn(e,t){je=document.createElement("style"),Ae=document.createElement("style"),_e=document.createElement("style"),je.textContent=xe(e).core.cssText,Ae.textContent=xe(e).dark.cssText,_e.textContent=xe(e).light.cssText,document.head.appendChild(je),document.head.appendChild(Ae),document.head.appendChild(_e),Qr(t)}function Qr(e){Ae&&_e&&(e==="light"?(Ae.removeAttribute("media"),_e.media="enabled"):(_e.removeAttribute("media"),Ae.media="enabled"))}function En(e){je&&Ae&&_e&&(je.textContent=xe(e).core.cssText,Ae.textContent=xe(e).dark.cssText,_e.textContent=xe(e).light.cssText)}function xe(e){return{core:Ue`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      @keyframes w3m-shake {
        0% {
          transform: scale(1) rotate(0deg);
        }
        20% {
          transform: scale(1) rotate(-1deg);
        }
        40% {
          transform: scale(1) rotate(1.5deg);
        }
        60% {
          transform: scale(1) rotate(-1.5deg);
        }
        80% {
          transform: scale(1) rotate(1deg);
        }
        100% {
          transform: scale(1) rotate(0deg);
        }
      }
      @keyframes w3m-iframe-fade-out {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      @keyframes w3m-iframe-zoom-in {
        0% {
          transform: translateY(50px);
          opacity: 0;
        }
        100% {
          transform: translateY(0px);
          opacity: 1;
        }
      }
      @keyframes w3m-iframe-zoom-in-mobile {
        0% {
          transform: scale(0.95);
          opacity: 0;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
      :root {
        --w3m-modal-width: 360px;
        --w3m-color-mix-strength: ${ae(e!=null&&e["--w3m-color-mix-strength"]?`${e["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${ae((e==null?void 0:e["--w3m-font-family"])||"Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;")};
        --w3m-font-size-master: ${ae((e==null?void 0:e["--w3m-font-size-master"])||"10px")};
        --w3m-border-radius-master: ${ae((e==null?void 0:e["--w3m-border-radius-master"])||"4px")};
        --w3m-z-index: ${ae((e==null?void 0:e["--w3m-z-index"])||999)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-mini: calc(var(--w3m-font-size-master) * 0.8);
        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-medium: calc(var(--w3m-font-size-master) * 1.8);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);
        --wui-font-size-title-6: calc(var(--w3m-font-size-master) * 2.2);
        --wui-font-size-medium-title: calc(var(--w3m-font-size-master) * 2.4);
        --wui-font-size-2xl: calc(var(--w3m-font-size-master) * 4);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-2xl: -1.6px;
        --wui-letter-spacing-medium-title: -0.96px;
        --wui-letter-spacing-title-6: -0.88px;
        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-medium: -0.72px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;
        --wui-letter-spacing-mini: -0.16px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;
        --wui-spacing-5xl: 95px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-mdl: 36px;
        --wui-icon-box-size-lg: 40px;
        --wui-icon-box-size-2lg: 48px;
        --wui-icon-box-size-xl: 64px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;
        --wui-icon-size-xxl: 28px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-visual-size-size-inherit: inherit;
        --wui-visual-size-sm: 40px;
        --wui-visual-size-md: 55px;
        --wui-visual-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network-sm: path(
          'M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z'
        );

        --wui-path-network-md: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-width-network-sm: 36px;
        --wui-width-network-md: 48px;
        --wui-width-network-lg: 86px;

        --wui-height-network-sm: 40px;
        --wui-height-network-md: 54px;
        --wui-height-network-lg: 96px;

        --wui-icon-size-network-xs: 12px;
        --wui-icon-size-network-sm: 16px;
        --wui-icon-size-network-md: 24px;
        --wui-icon-size-network-lg: 42px;

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(20, 20, 20, 0.8);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-success-125: var(--wui-color-success-base-125);

        --wui-color-warning-100: var(--wui-color-warning-base-100);

        --wui-color-error-100: var(--wui-color-error-base-100);
        --wui-color-error-125: var(--wui-color-error-base-125);

        --wui-color-blue-100: var(--wui-color-blue-base-100);
        --wui-color-blue-90: var(--wui-color-blue-base-90);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-wallet-button-bg: var(--wui-wallet-button-bg-base);

        --wui-box-shadow-blue: var(--wui-color-accent-glass-020);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 20%, transparent);

          --wui-color-accent-100: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 100%,
            transparent
          );
          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-color-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-color-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-color-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-300)
          );
          --wui-color-fg-325: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-325)
          );
          --wui-color-fg-350: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-350)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-300)
          );
          --wui-color-bg-325: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-325)
          );
          --wui-color-bg-350: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-350)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-success-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-125)
          );

          --wui-color-warning-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-warning-base-100)
          );

          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );
          --wui-color-blue-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-blue-base-100)
          );
          --wui-color-blue-90: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-blue-base-90)
          );
          --wui-color-error-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-125)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );

          --wui-wallet-button-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-wallet-button-bg-base)
          );
        }
      }
    `,light:Ue`
      :root {
        --w3m-color-mix: ${ae((e==null?void 0:e["--w3m-color-mix"])||"#fff")};
        --w3m-accent: ${ae(be(e,"dark")["--w3m-accent"])};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: ${ae(be(e,"dark")["--w3m-background"])};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(230, 100%, 67%, 1);
        --wui-color-blueberry-090: hsla(231, 76%, 61%, 1);
        --wui-color-blueberry-080: hsla(230, 59%, 55%, 1);
        --wui-color-blueberry-050: hsla(231, 100%, 70%, 0.1);

        --wui-color-fg-100: #e4e7e7;
        --wui-color-fg-125: #d0d5d5;
        --wui-color-fg-150: #a8b1b1;
        --wui-color-fg-175: #a8b0b0;
        --wui-color-fg-200: #949e9e;
        --wui-color-fg-225: #868f8f;
        --wui-color-fg-250: #788080;
        --wui-color-fg-275: #788181;
        --wui-color-fg-300: #6e7777;
        --wui-color-fg-325: #9a9a9a;
        --wui-color-fg-350: #363636;

        --wui-color-bg-100: #141414;
        --wui-color-bg-125: #191a1a;
        --wui-color-bg-150: #1e1f1f;
        --wui-color-bg-175: #222525;
        --wui-color-bg-200: #272a2a;
        --wui-color-bg-225: #2c3030;
        --wui-color-bg-250: #313535;
        --wui-color-bg-275: #363b3b;
        --wui-color-bg-300: #3b4040;
        --wui-color-bg-325: #252525;
        --wui-color-bg-350: #ffffff;

        --wui-color-success-base-100: #26d962;
        --wui-color-success-base-125: #30a46b;

        --wui-color-warning-base-100: #f3a13f;

        --wui-color-error-base-100: #f25a67;
        --wui-color-error-base-125: #df4a34;

        --wui-color-blue-base-100: rgba(102, 125, 255, 1);
        --wui-color-blue-base-90: rgba(102, 125, 255, 0.9);

        --wui-color-success-glass-001: rgba(38, 217, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 217, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 217, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 217, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 217, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 217, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 217, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 217, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 217, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 217, 98, 0.8);

        --wui-color-success-glass-reown-020: rgba(48, 164, 107, 0.2);

        --wui-color-warning-glass-reown-020: rgba(243, 161, 63, 0.2);

        --wui-color-error-glass-001: rgba(242, 90, 103, 0.01);
        --wui-color-error-glass-002: rgba(242, 90, 103, 0.02);
        --wui-color-error-glass-005: rgba(242, 90, 103, 0.05);
        --wui-color-error-glass-010: rgba(242, 90, 103, 0.1);
        --wui-color-error-glass-015: rgba(242, 90, 103, 0.15);
        --wui-color-error-glass-020: rgba(242, 90, 103, 0.2);
        --wui-color-error-glass-025: rgba(242, 90, 103, 0.25);
        --wui-color-error-glass-030: rgba(242, 90, 103, 0.3);
        --wui-color-error-glass-060: rgba(242, 90, 103, 0.6);
        --wui-color-error-glass-080: rgba(242, 90, 103, 0.8);

        --wui-color-error-glass-reown-020: rgba(223, 74, 52, 0.2);

        --wui-color-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-color-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-color-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-color-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-color-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-color-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-color-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-color-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-color-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-color-gray-glass-080: rgba(255, 255, 255, 0.8);
        --wui-color-gray-glass-090: rgba(255, 255, 255, 0.9);

        --wui-color-dark-glass-100: rgba(42, 42, 42, 1);

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;

        --wui-wallet-button-bg-base: var(--wui-color-bg-125);

        --w3m-card-embedded-shadow-color: rgb(17 17 18 / 25%);
      }
    `,dark:Ue`
      :root {
        --w3m-color-mix: ${ae((e==null?void 0:e["--w3m-color-mix"])||"#000")};
        --w3m-accent: ${ae(be(e,"light")["--w3m-accent"])};
        --w3m-default: #000;

        --wui-color-modal-bg-base: ${ae(be(e,"light")["--w3m-background"])};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(231, 100%, 70%, 1);
        --wui-color-blueberry-090: hsla(231, 97%, 72%, 1);
        --wui-color-blueberry-080: hsla(231, 92%, 74%, 1);

        --wui-color-fg-100: #141414;
        --wui-color-fg-125: #2d3131;
        --wui-color-fg-150: #474d4d;
        --wui-color-fg-175: #636d6d;
        --wui-color-fg-200: #798686;
        --wui-color-fg-225: #828f8f;
        --wui-color-fg-250: #8b9797;
        --wui-color-fg-275: #95a0a0;
        --wui-color-fg-300: #9ea9a9;
        --wui-color-fg-325: #9a9a9a;
        --wui-color-fg-350: #d0d0d0;

        --wui-color-bg-100: #ffffff;
        --wui-color-bg-125: #f5fafa;
        --wui-color-bg-150: #f3f8f8;
        --wui-color-bg-175: #eef4f4;
        --wui-color-bg-200: #eaf1f1;
        --wui-color-bg-225: #e5eded;
        --wui-color-bg-250: #e1e9e9;
        --wui-color-bg-275: #dce7e7;
        --wui-color-bg-300: #d8e3e3;
        --wui-color-bg-325: #f3f3f3;
        --wui-color-bg-350: #202020;

        --wui-color-success-base-100: #26b562;
        --wui-color-success-base-125: #30a46b;

        --wui-color-warning-base-100: #f3a13f;

        --wui-color-error-base-100: #f05142;
        --wui-color-error-base-125: #df4a34;

        --wui-color-blue-base-100: rgba(102, 125, 255, 1);
        --wui-color-blue-base-90: rgba(102, 125, 255, 0.9);

        --wui-color-success-glass-001: rgba(38, 181, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 181, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 181, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 181, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 181, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 181, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 181, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 181, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 181, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 181, 98, 0.8);

        --wui-color-success-glass-reown-020: rgba(48, 164, 107, 0.2);

        --wui-color-warning-glass-reown-020: rgba(243, 161, 63, 0.2);

        --wui-color-error-glass-001: rgba(240, 81, 66, 0.01);
        --wui-color-error-glass-002: rgba(240, 81, 66, 0.02);
        --wui-color-error-glass-005: rgba(240, 81, 66, 0.05);
        --wui-color-error-glass-010: rgba(240, 81, 66, 0.1);
        --wui-color-error-glass-015: rgba(240, 81, 66, 0.15);
        --wui-color-error-glass-020: rgba(240, 81, 66, 0.2);
        --wui-color-error-glass-025: rgba(240, 81, 66, 0.25);
        --wui-color-error-glass-030: rgba(240, 81, 66, 0.3);
        --wui-color-error-glass-060: rgba(240, 81, 66, 0.6);
        --wui-color-error-glass-080: rgba(240, 81, 66, 0.8);

        --wui-color-error-glass-reown-020: rgba(223, 74, 52, 0.2);

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-wallet-button-bg-base: var(--wui-color-bg-125);

        --wui-color-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-color-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-color-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-color-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-color-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-color-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-color-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-color-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-color-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-color-gray-glass-080: rgba(0, 0, 0, 0.8);
        --wui-color-gray-glass-090: rgba(0, 0, 0, 0.9);

        --wui-color-dark-glass-100: rgba(233, 233, 233, 1);

        --w3m-card-embedded-shadow-color: rgb(224 225 233 / 25%);
      }
    `}}const bn=Ue`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,An=Ue`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      box-shadow var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border, box-shadow, border-radius;
    outline: none;
    border: none;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  wui-flex {
    transition: border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius;
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-005);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }
  }

  button:disabled > wui-icon-box {
    opacity: 0.5;
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,_n=Ue`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-blue-100 {
    color: var(--wui-color-blue-100);
  }

  .wui-color-blue-90 {
    color: var(--wui-color-blue-90);
  }

  .wui-color-error-125 {
    color: var(--wui-color-error-125);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-success-125 {
    color: var(--wui-color-success-125);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-color-fg-325 {
    color: var(--wui-color-fg-325);
  }

  .wui-color-fg-350 {
    color: var(--wui-color-fg-350);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-error-125 {
    background-color: var(--wui-color-error-125);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-success-125 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }

  .wui-color-fg-325 {
    background-color: var(--wui-color-fg-325);
  }

  .wui-color-fg-350 {
    background-color: var(--wui-color-fg-350);
  }
`,vn={ERROR_CODE_UNRECOGNIZED_CHAIN_ID:4902,ERROR_CODE_DEFAULT:5e3,ERROR_INVALID_CHAIN_ID:32603,DEFAULT_ALLOWED_ANCESTORS:["http://localhost:*","https://*.pages.dev","https://*.vercel.app","https://*.ngrok-free.app","https://secure-mobile.walletconnect.com","https://secure-mobile.walletconnect.org"]};function Ye(e){return{formatters:void 0,fees:void 0,serializers:void 0,...e}}const Ot=Ye({id:"5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",name:"Solana",network:"solana-mainnet",nativeCurrency:{name:"Solana",symbol:"SOL",decimals:9},rpcUrls:{default:{http:["https://rpc.walletconnect.org/v1"]}},blockExplorers:{default:{name:"Solscan",url:"https://solscan.io"}},testnet:!1,chainNamespace:"solana",caipNetworkId:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",deprecatedCaipNetworkId:"solana:4sGjMW1sUnHzSxGspuhpqLDx6wiyjNtZ"}),Ut=Ye({id:"EtWTRABZaYq6iMfeYKouRu166VU2xqa1",name:"Solana Devnet",network:"solana-devnet",nativeCurrency:{name:"Solana",symbol:"SOL",decimals:9},rpcUrls:{default:{http:["https://rpc.walletconnect.org/v1"]}},blockExplorers:{default:{name:"Solscan",url:"https://solscan.io"}},testnet:!0,chainNamespace:"solana",caipNetworkId:"solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1",deprecatedCaipNetworkId:"solana:8E9rvCKLFQia2Y35HXjjpWzj8weVo44K"});Ye({id:"4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z",name:"Solana Testnet",network:"solana-testnet",nativeCurrency:{name:"Solana",symbol:"SOL",decimals:9},rpcUrls:{default:{http:["https://rpc.walletconnect.org/v1"]}},blockExplorers:{default:{name:"Solscan",url:"https://solscan.io"}},testnet:!0,chainNamespace:"solana",caipNetworkId:"solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z"});Ye({id:"000000000019d6689c085ae165831e93",caipNetworkId:"bip122:000000000019d6689c085ae165831e93",chainNamespace:"bip122",name:"Bitcoin",nativeCurrency:{name:"Bitcoin",symbol:"BTC",decimals:8},rpcUrls:{default:{http:["https://rpc.walletconnect.org/v1"]}}});Ye({id:"000000000933ea01ad0ee984209779ba",caipNetworkId:"bip122:000000000933ea01ad0ee984209779ba",chainNamespace:"bip122",name:"Bitcoin Testnet",nativeCurrency:{name:"Bitcoin",symbol:"BTC",decimals:8},rpcUrls:{default:{http:["https://rpc.walletconnect.org/v1"]}},testnet:!0});const Zr={solana:["solana_signMessage","solana_signTransaction","solana_requestAccounts","solana_getAccounts","solana_signAllTransactions","solana_signAndSendTransaction"],eip155:["eth_accounts","eth_requestAccounts","eth_sendRawTransaction","eth_sign","eth_signTransaction","eth_signTypedData","eth_signTypedData_v3","eth_signTypedData_v4","eth_sendTransaction","personal_sign","wallet_switchEthereumChain","wallet_addEthereumChain","wallet_getPermissions","wallet_requestPermissions","wallet_registerOnboarding","wallet_watchAsset","wallet_scanQRCode","wallet_getCallsStatus","wallet_showCallsStatus","wallet_sendCalls","wallet_getCapabilities","wallet_grantPermissions","wallet_revokePermissions","wallet_getAssets"],bip122:["sendTransfer","signMessage","signPsbt","getAccountAddresses"]},en={getMethodsByChainNamespace(e){return Zr[e]||[]},createDefaultNamespace(e){return{methods:this.getMethodsByChainNamespace(e),events:["accountsChanged","chainChanged"],chains:[],rpcMap:{}}},applyNamespaceOverrides(e,t){if(!t)return{...e};const r={...e},n=new Set;if(t.methods&&Object.keys(t.methods).forEach(s=>n.add(s)),t.chains&&Object.keys(t.chains).forEach(s=>n.add(s)),t.events&&Object.keys(t.events).forEach(s=>n.add(s)),t.rpcMap&&Object.keys(t.rpcMap).forEach(s=>{const[a]=s.split(":");a&&n.add(a)}),n.forEach(s=>{r[s]||(r[s]=this.createDefaultNamespace(s))}),t.methods&&Object.entries(t.methods).forEach(([s,a])=>{r[s]&&(r[s].methods=a)}),t.chains&&Object.entries(t.chains).forEach(([s,a])=>{r[s]&&(r[s].chains=a)}),t.events&&Object.entries(t.events).forEach(([s,a])=>{r[s]&&(r[s].events=a)}),t.rpcMap){const s=new Set;Object.entries(t.rpcMap).forEach(([a,o])=>{const[l,c]=a.split(":");!l||!c||!r[l]||(r[l].rpcMap||(r[l].rpcMap={}),s.has(l)||(r[l].rpcMap={},s.add(l)),r[l].rpcMap[c]=o)})}return r},createNamespaces(e,t){const r=e.reduce((n,s)=>{const{id:a,chainNamespace:o,rpcUrls:l}=s,c=l.default.http[0];n[o]||(n[o]=this.createDefaultNamespace(o));const u=`${o}:${a}`,p=n[o];switch(p.chains.push(u),u){case Ot.caipNetworkId:p.chains.push(Ot.deprecatedCaipNetworkId);break;case Ut.caipNetworkId:p.chains.push(Ut.deprecatedCaipNetworkId);break}return p!=null&&p.rpcMap&&c&&(p.rpcMap[a]=c),n},{});return this.applyNamespaceOverrides(r,t)},resolveReownName:async e=>{var n;const t=await rt.resolveName(e);return((n=(Object.values(t==null?void 0:t.addresses)||[])[0])==null?void 0:n.address)||!1},getChainsFromNamespaces(e={}){return Object.values(e).flatMap(t=>{const r=t.chains||[],n=t.accounts.map(s=>{const[a,o]=s.split(":");return`${a}:${o}`});return Array.from(new Set([...r,...n]))})},isSessionEventData(e){return typeof e=="object"&&e!==null&&"id"in e&&"topic"in e&&"params"in e&&typeof e.params=="object"&&e.params!==null&&"chainId"in e.params&&"event"in e.params&&typeof e.params.event=="object"&&e.params.event!==null},isOriginAllowed(e,t,r){for(const n of[...t,...r])if(n.includes("*")){const a=`^${n.replace(/[.*+?^${}()|[\]\\]/gu,"\\$&").replace(/\\\*/gu,".*")}$`;if(new RegExp(a,"u").test(e))return!0}else try{if(new URL(n).origin===e)return!0}catch{if(n===e)return!0}return!1}};class tn{constructor({provider:t,namespace:r}){this.id=$.CONNECTOR_ID.WALLET_CONNECT,this.name=ht.ConnectorNamesMap[$.CONNECTOR_ID.WALLET_CONNECT],this.type="WALLET_CONNECT",this.imageId=ht.ConnectorImageIds[$.CONNECTOR_ID.WALLET_CONNECT],this.getCaipNetworks=i.getCaipNetworks.bind(i),this.caipNetworks=this.getCaipNetworks(),this.provider=t,this.chain=r}get chains(){return this.getCaipNetworks()}async connectWalletConnect(){if(!await this.authenticate()){const r=this.getCaipNetworks(),n=y.state.universalProviderConfigOverride,s=en.createNamespaces(r,n);await this.provider.connect({optionalNamespaces:s})}return{clientId:await this.provider.client.core.crypto.getClientId(),session:this.provider.session}}async disconnect(){await this.provider.disconnect()}async authenticate(){const t=this.chains.map(r=>r.caipNetworkId);return nt.universalProviderAuthenticate({universalProvider:this.provider,chains:t,methods:rn})}}const rn=["eth_accounts","eth_requestAccounts","eth_sendRawTransaction","eth_sign","eth_signTransaction","eth_signTypedData","eth_signTypedData_v3","eth_signTypedData_v4","eth_sendTransaction","personal_sign","wallet_switchEthereumChain","wallet_addEthereumChain","wallet_getPermissions","wallet_requestPermissions","wallet_registerOnboarding","wallet_watchAsset","wallet_scanQRCode","wallet_getCallsStatus","wallet_sendCalls","wallet_getCapabilities","wallet_grantPermissions","wallet_revokePermissions","wallet_getAssets"];class Sn{constructor(t){this.availableConnectors=[],this.eventListeners=new Map,this.getCaipNetworks=r=>i.getCaipNetworks(r),t&&this.construct(t)}construct(t){this.projectId=t.projectId,this.namespace=t.namespace,this.adapterType=t.adapterType}get connectors(){return this.availableConnectors}get networks(){return this.getCaipNetworks(this.namespace)}setAuthProvider(t){this.addConnector({id:$.CONNECTOR_ID.AUTH,type:"AUTH",name:$.CONNECTOR_NAMES.AUTH,provider:t,imageId:ht.ConnectorImageIds[$.CONNECTOR_ID.AUTH],chain:this.namespace,chains:[]})}addConnector(...t){const r=new Set;this.availableConnectors=[...t,...this.availableConnectors].filter(n=>r.has(n.id)?!1:(r.add(n.id),!0)),this.emit("connectors",this.availableConnectors)}setStatus(t,r){D.setStatus(t,r)}on(t,r){var n;this.eventListeners.has(t)||this.eventListeners.set(t,new Set),(n=this.eventListeners.get(t))==null||n.add(r)}off(t,r){const n=this.eventListeners.get(t);n&&n.delete(r)}removeAllEventListeners(){this.eventListeners.forEach(t=>{t.clear()})}emit(t,r){const n=this.eventListeners.get(t);n&&n.forEach(s=>s(r))}async connectWalletConnect(t){return{clientId:(await this.getWalletConnectConnector().connectWalletConnect()).clientId}}async switchNetwork(t){var a;const{caipNetwork:r,providerType:n}=t;if(!t.provider)return;const s="provider"in t.provider?t.provider.provider:t.provider;if(n==="WALLET_CONNECT"){s.setDefaultChain(r.caipNetworkId);return}if(s&&n==="AUTH"){const o=s,l=(a=D.state.preferredAccountTypes)==null?void 0:a[r.chainNamespace];await o.switchNetwork(r.caipNetworkId);const c=await o.getUser({chainId:r.caipNetworkId,preferredAccountType:l});this.emit("switchNetwork",c)}}getWalletConnectConnector(){const t=this.connectors.find(r=>r instanceof tn);if(!t)throw new Error("WalletConnectConnector not found");return t}}export{Sn as A,w as B,I as C,dn as D,H as E,wn as F,pn as G,mn as H,fn as I,hn as J,zr as K,en as L,ee as M,Qr as N,y as O,gn as P,En as Q,N as R,E as S,Qe as T,Pe as U,Zr as V,tn as W,Tr as X,D as a,vn as b,_n as c,K as d,An as e,i as f,me as g,cr as h,ze as i,_ as j,S as k,ur as l,Tt as m,te as n,Fe as o,B as p,rt as q,bn as r,G as s,nt as t,oe as u,C as v,se as w,Cn as x,O as y,un as z};
