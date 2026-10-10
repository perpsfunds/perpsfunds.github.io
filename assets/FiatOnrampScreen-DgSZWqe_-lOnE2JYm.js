import{_ as Dt}from"./preload-helper-C1FmrZbK.js";import{j as o,r as S,Q as qt,R as Bt,S as Ut,T as Vt,U as Ot,V as zt,W as Kt}from"./vendor-react-0C64ImZ_.js";import{db as Wt,f7 as T,f8 as Yt,f9 as $,fa as ut,fb as De,fc as f,fd as he,fe as Ht,ff as pt,fg as ue,fh as Qt,eQ as qe,dc as ke,dr as q,dJ as Be,fi as Zt,fj as Xt,fk as Gt,dh as C,dK as Jt,fl as mt,fm as Xe,fn as er,fo as tr,fp as rr,fq as or,fr as nr,fs as ir}from"./privyHost-BqlTwloN.js";import{w as sr,c as ar,p as lr}from"./SelectSourceAsset-_voBED1H-CknyhEmQ.js";import{n as cr}from"./index-CWARkn2w-BC8WUhMY.js";import{i as re}from"./styles-CIiQisHF-C5yFRZhH.js";import{t as ht}from"./WarningBanner-ZZqCEtZK-C2Xmbhd6.js";import{a as dr}from"./ModalFooter-DDm8WjC0-CIXCb_tc.js";import{y as ur}from"./ConnectPhoneForm-B_sYrNkc-CsTGU5pT.js";import{p as pr}from"./CopyableText-CQapvaMr-CgCFA0PM.js";import{t as mr}from"./InfoBanner-Cb3p1z12-BqoxW5_z.js";import{t as hr,h as yr}from"./GooglePay-B53WnudL-D6HoH0cp.js";import{n as yt}from"./ScreenLayout-CyLnlt7g-CpyQyvrJ.js";import{ao as fr,a9 as ft,a3 as gt,U as ye,ap as gr,aq as vt,ar as xt,as as vr,a8 as xr,a0 as br,at as Cr,au as _r,Y as wr,av as Ie,ab as Ge,V as xe,aw as kr}from"./vendor-icons-BG7jN9os.js";import"./index-Cw-O3_Qi.js";import"./vendor-ethers-8GK8ucU1.js";import"./Chip-CZKIKt9K-Znt3H2CJ.js";import"./LoadingSkeleton-BMsgO5PV-BhTJXinZ.js";import"./Screen-BWBDKsup-BPy_fI-g.js";const Sr=e=>{let{opts:t,quotesRequest:r}=$();r==null||r.abort(),f({amount:e,quotesRequest:null,localSelectedQuote:he(),localQuotes:[],quotesWarning:null,quotesErrors:null,isLoading:!0}),pt(e,t)},Er=()=>{var e,t;(t=(e=$()).onBack)==null||t.call(e)},Je=async()=>{let{error:e,state:t,isLoading:r,onFailure:n,onSuccess:i}=$();ut(),De();let s=(({state:a,error:l,isLoading:d})=>l?{type:"failure",error:l}:a.status==="provider-success"?{type:"success",value:{status:"confirmed"}}:a.status==="provider-confirming"||((c,u)=>c.status==="stripe-flow"&&c.step==="confirm-checkout"&&u)(a,d)?{type:"success",value:{status:"submitted"}}:{type:"failure",error:Error("User exited flow")})({state:t,error:e,isLoading:r});s.type==="success"?await i(s.value):n(s.error)},Z=async(e,{environment:t})=>(await e.fetchPrivyRoute(Xt,{query:{environment:t}})).data,Se=(e,t,r="us",n)=>{if(r==="eu")return bt(t,n);let i=c=>t.includes(c),s=i("first_name")&&i("last_name"),a=i("address_line_1")&&i("address_city")&&i("address_state")&&i("address_postal_code"),l=i("dob"),d=i("id_number");return e==="l0"?s?a?null:"collect-address":"collect-name":s?l?d?a?null:"collect-address":"collect-ssn":"collect-dob":"collect-name"},bt=(e,t)=>{let r=n=>e.includes(n);if(t!=="pending"&&t!=="verified"&&t!=="rejected"){if(!r("first_name")||!r("last_name"))return"collect-name";if(!r("dob"))return"collect-dob";if(!r("nationalities"))return"collect-nationality";if(!r("birth_city")||!r("birth_country"))return"collect-birth-location";if(!r("address_line_1"))return"collect-address"}return r("identifiers")?r("attestation")?t!=="verified"?"verify-documents":null:"eu-attestation":"collect-identifiers"},ie=e=>{let t=["collect-name","collect-dob","collect-nationality","collect-birth-location","collect-address","collect-identifiers","eu-attestation","verify-documents","select-payment"],r=t.indexOf(e);return r===-1?"select-payment":t[r+1]??"select-payment"},Ct=e=>{var t;return(t=e==null?void 0:e.find(r=>r.tier==="l2"))==null?void 0:t.verification_status},_t=e=>{var t,r;return((r=(t=e==null?void 0:e.find(n=>n.tier==="l2"&&n.verification_status==="rejected"))==null?void 0:t.verification_errors)==null?void 0:r.includes("user_has_reached_max_verification_attempts"))??!1};let A=e=>e.replace(/[\s/-]/g,"").toUpperCase(),te=e=>A(e).split("").map(Number),P=(e,t,r)=>Number(e.slice(t,r)),L=(e,t,r)=>e>=t&&e<=r,O=e=>L(e,1,12),D=e=>L(e,1,31),wt=e=>Math.floor(e/10)+e%10,K=(e,t,r)=>{let n=te(e);return r(t.reduce((i,s,a)=>i+n[a]*s,0))===n[t.length]},et=e=>{let t=te(e),r=[1,2,3,4,5,6,7,8,9,1].reduce((i,s,a)=>i+t[a]*s,0),n=r%11;return n===10&&(n=(r=[3,4,5,6,7,8,9,1,2,3].reduce((i,s,a)=>i+t[a]*s,0))%11)==10&&(n=0),n===t[10]},tt=(e,t)=>{let r=te(e);return(10-t.reduce((n,i,s)=>n+wt(r[s]*i),0)%10)%10===r[t.length]},jr={at_stn:e=>{let t=A(e);return/^\d{9}$/.test(t)&&tt(t,[1,2,1,2,1,2,1,2])},be_nrn:e=>{let t=A(e);if(!/^\d{11}$/.test(t)||!O(P(t,2,4))||!D(P(t,4,6)))return!1;let r=Number(t.slice(0,9)),n=P(t,9,11);return 97-r%97===n||97-+`2${t.slice(0,9)}`%97===n},bg_ucn:e=>{let t=A(e),r=P(t,2,4);return/^\d{10}$/.test(t)&&(L(r,1,12)||L(r,21,32)||L(r,41,52))&&D(P(t,4,6))&&K(t,[2,4,8,5,10,9,7,3,6],n=>n%11==10?0:n%11)},hr_oib:e=>/^\d{11}$/.test(A(e))&&(t=>{let r=te(t),n=10;for(let s=0;s<10;s++){let a=(r[s]+n)%10;a===0&&(a=10),n=2*a%11}let i=11-n;return i===10&&(i=0),i===r[10]})(A(e)),cy_tic:e=>{let t=A(e);if(!/^[069]\d{7}[A-Z]$/.test(t))return!1;let r={0:1,1:0,2:5,3:7,4:9,5:13,6:15,7:17,8:19,9:21};return String.fromCharCode(65+([0,2,4,6].reduce((n,i)=>n+r[t[i]],0)+[1,3,5,7].reduce((n,i)=>n+Number(t[i]),0))%26)===t[8]},cz_rc:e=>{let t=A(e),r=P(t,2,4);return/^\d{9,10}$/.test(t)&&(L(r,1,12)||L(r,51,62)||t.length===10&&(L(r,21,32)||L(r,71,82)))&&D(P(t,4,6))},dk_cpr:e=>{let t=A(e);return/^\d{10}$/.test(t)&&D(P(t,0,2))&&O(P(t,2,4))&&K(t,[4,3,2,7,6,5,4,3,2],r=>{let n=r%11;return n===1?-1:n===0?0:11-n})},ee_ik:e=>{let t=A(e);return/^\d{11}$/.test(t)&&L(P(t,0,1),1,6)&&O(P(t,3,5))&&D(P(t,5,7))&&L(P(t,7,10),1,710)&&et(t)},es_nif:e=>{let t=A(e);return!!/^([KLMXYZ]?\d{7}[A-Z]|\d{8}[A-Z])$/.test(t)&&"TRWAGMYFPDXBNJZSQVHLCKE"[Number(/^\d/.test(t)?t.slice(0,8):`${{X:"0",Y:"1",Z:"2",K:"0",L:"0",M:"0"}[t[0]]}${t.slice(1,8)}`)%23]===t[8]},fi_hetu:e=>{let t=e.replace(/\s/g,"").toUpperCase();return!!/^(0[1-9]|[12]\d|3[01])(0[1-9]|1[0-2])\d{2}[+\-A-FU-Y]\d{3}[A-Z0-9]$/.test(t)&&"0123456789ABCDEFHJKLMNPRSTUVWXY"[+`${t.slice(0,6)}${t.slice(7,10)}`%31]===t[10]},fr_nir:e=>{let t=A(e);return/^[0-3]\d{12}$/.test(t)&&String(Number(t.slice(0,10))%511).padStart(3,"0")===t.slice(10)},fr_spi:e=>{let t=A(e);return/^[0-3]\d{12}$/.test(t)&&String(Number(t.slice(0,10))%511).padStart(3,"0")===t.slice(10)},de_stn:e=>{let t=A(e);if(/^\d{13}$/.test(t))return t[4]==="0";if(!/^\d{11}$/.test(t)||t[0]==="0"||/(\d)\1\1/.test(t)||![...new Set(t.slice(0,10))].map(i=>t.slice(0,10).split(i).length-1).some(i=>i===2||i===3))return!1;let r=te(t),n=10;for(let i=0;i<10;i++){let s=(r[i]+n)%10;s===0&&(s=10),n=2*s%11}return(11-n==10?0:11-n)===r[10]},gr_afm:e=>/^\d{9}$/.test(A(e)),hu_ad:e=>/^8\d{9}$/.test(A(e))&&K(A(e),[1,2,3,4,5,6,7,8,9],t=>t%11),ie_ppsn:e=>{let t=A(e);if(!/^\d{7}[A-W][A-IW]?$/.test(t))return!1;let r=(9*(t.length===9?t[8]==="W"?0:t.charCodeAt(8)-64:0)+[8,7,6,5,4,3,2].reduce((n,i,s)=>n+Number(t[s])*i,0))%23;return(r===0?"W":String.fromCharCode(64+r))===t[7]},is_kt:e=>{let t=A(e);return/^\d{10}$/.test(t)&&D(P(t,0,2))&&O(P(t,2,4))&&(t[9]==="9"||t[9]==="0")},it_cf:e=>{let t=A(e);if(!/^[A-Z]{6}\d{2}[A-Z]\d{2}[A-Z]\d{3}[A-Z]$/.test(t)||!"ABCDEHLMPRST".includes(t[8])||![...Array(31).keys()].some(i=>P(t,9,11)===i+1||P(t,9,11)===i+41))return!1;let r={0:1,1:0,2:5,3:7,4:9,5:13,6:15,7:17,8:19,9:21,A:1,B:0,C:5,D:7,E:9,F:13,G:15,H:17,I:19,J:21,K:2,L:4,M:18,N:20,O:11,P:3,Q:6,R:8,S:12,T:14,U:16,V:10,W:22,X:25,Y:24,Z:23},n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").reduce((i,s,a)=>({...i,[s]:a<10?a:a-10}),{});return String.fromCharCode(65+t.slice(0,15).split("").reduce((i,s,a)=>i+((a+1)%2?r[s]:n[s]),0)%26)===t[15]},lv_pk:e=>{let t=A(e);return/^(0[1-9]|[12]\d|3[01])(0[0-9]|1[0-2])\d{7}$|^32\d{9}$/.test(t)&&(t.startsWith("32")||["0","1","2"].includes(t[6]))},lt_ak:e=>{let t=A(e);return/^\d{11}$/.test(t)&&L(P(t,0,1),1,6)&&O(P(t,3,5))&&D(P(t,5,7))&&et(t)},lu_nif:e=>{let t=A(e);return!!(/^\d{13}$/.test(t)&&L(P(t,0,4),1800,2100)&&O(P(t,4,6))&&D(P(t,6,8)))&&[2,1,2,1,2,1,2,1,2,1,2,1].reduce((r,n,i)=>r+wt(Number(t[i])*n),0)%10==0&&(r=>{let n=[[0,1,2,3,4,5,6,7,8,9],[1,2,3,4,0,6,7,8,9,5],[2,3,4,0,1,7,8,9,5,6],[3,4,0,1,2,8,9,5,6,7],[4,0,1,2,3,9,5,6,7,8],[5,9,8,7,6,0,4,3,2,1],[6,5,9,8,7,1,0,4,3,2],[7,6,5,9,8,2,1,0,4,3],[8,7,6,5,9,3,2,1,0,4],[9,8,7,6,5,4,3,2,1,0]],i=[[0,1,2,3,4,5,6,7,8,9],[1,5,7,6,2,8,3,0,9,4],[5,8,0,3,7,9,6,1,4,2],[8,9,1,6,0,4,3,5,2,7],[9,4,5,3,1,2,6,8,7,0],[4,2,8,6,5,7,3,9,0,1],[2,7,9,3,8,0,6,4,1,5],[7,0,4,6,9,1,3,2,5,8]],s=0,a=te(r).reverse();for(let l=0;l<a.length;l++)s=n[s][i[l%8][a[l]]];return s===0})(`${t.slice(0,11)}${t[12]}`)},mt_nic:e=>{let t=A(e);return/^\d{7}[MGAPLHBZ]$/.test(t)||/^\d{9}$/.test(t)&&["11","22","33","44","55","66","77","88"].includes(t.slice(0,2))},mt_pp:e=>/^\d{7}$/.test(A(e)),nl_bsn:e=>/^\d{9}$/.test(A(e))&&K(A(e),[9,8,7,6,5,4,3,2],t=>t%11==10?-1:t%11),pl_nip:e=>/^\d{10}$/.test(A(e))&&K(A(e),[6,5,7,2,3,4,5,6,7],t=>t%11==10?-1:t%11),pl_pesel:e=>{let t=A(e),r=P(t,2,4);return/^\d{11}$/.test(t)&&(O(r)||L(r,21,32)||L(r,41,52)||L(r,61,72)||L(r,81,92))&&D(P(t,4,6))&&K(t,[1,3,7,9,1,3,7,9,1,3],n=>(10-n%10)%10)},pt_nif:e=>/^\d{9}$/.test(A(e))&&K(A(e),[9,8,7,6,5,4,3,2],t=>{let r=11-t%11;return r>=10?0:r}),ro_cnp:e=>{let t=A(e),r=P(t,7,9),n=t[0]==="9"&&t.slice(1,4)==="000";return/^\d{13}$/.test(t)&&L(P(t,0,1),1,9)&&(n||O(P(t,3,5))&&D(P(t,5,7)))&&(L(r,1,47)||r===51||r===52)&&K(t,[2,7,9,1,4,6,3,5,8,2,7,9],i=>i%11==10?1:i%11)},sk_rc:e=>{let t=A(e),r=P(t,2,4);return/^\d{9,10}$/.test(t)&&(O(r)||L(r,51,62))&&D(P(t,4,6))},si_pin:e=>{let t=A(e);return/^\d{8}$/.test(t)&&L(P(t,0,7),1e6,9999999)&&K(t,[8,7,6,5,4,3,2],r=>{let n=11-r%11;return n===10?0:n===11?-1:n})},se_pin:e=>{let t=A(e);if(!/^\d{10}$|^\d{12}$/.test(t))return!1;if(t.length===12){if(!["18","19","20"].includes(t.slice(0,2)))return!1;t=t.slice(2)}let r=P(t,4,6);return O(P(t,2,4))&&(D(r)||L(r,61,91))&&tt(t,[2,1,2,1,2,1,2,1,2])}};const Le={ee_ik:"39901011231",es_nif:"00000000T",is_kt:"0101000000",it_cf:"AAAAAA00A01A000H",mt_nic:"0000000M",mt_pp:"0000000",pl_pesel:"44051401458",pl_nip:"8567346215"},ee={at_stn:"Steuernummer (Austria)",be_nrn:"National Registration Number (Belgium)",bg_ucn:"Unified Civil Number (Bulgaria)",hr_oib:"OIB (Croatia)",cy_tic:"Tax Identification Code (Cyprus)",cz_rc:"Rodné číslo (Czech Republic)",dk_cpr:"CPR (Denmark)",ee_ik:"Isikukood (Estonia)",es_nif:"NIF (Spain)",fi_hetu:"HETU (Finland)",fr_spi:"Numéro fiscal (France)",fr_nir:"NIR (France)",de_stn:"Steuer-ID (Germany)",gr_afm:"AFM (Greece)",hu_ad:"Adóazonosító (Hungary)",ie_ppsn:"PPSN (Ireland)",is_kt:"Kennitala (Iceland)",it_cf:"Codice fiscale (Italy)",lv_pk:"Personas kods (Latvia)",lt_ak:"Asmens kodas (Lithuania)",lu_nif:"NIF (Luxembourg)",mt_nic:"National Identity Card (Malta)",mt_pp:"Passport (Malta)",nl_bsn:"BSN (Netherlands)",pl_pesel:"PESEL (Poland)",pl_nip:"NIP (Poland)",pt_nif:"NIF (Portugal)",ro_cnp:"CNP (Romania)",sk_rc:"Rodné číslo (Slovakia)",si_pin:"EMŠO (Slovenia)",se_pin:"Personnummer (Sweden)"},j=()=>{let e=$().stripeSession;if(!e)throw Error("No active Stripe onramp session");return e},k=()=>{var r;let{stripeSession:e,controller:t}=$();return e!==null&&!(((r=t.current)==null?void 0:r.signal.aborted)??1)},se=()=>{let{controller:e}=$();if(!e.current)throw Error("No active abort controller");return e.current.signal},kt=async()=>{let e=j().onramp;if(!e.getMissingIdentifiers)throw Error("Stripe onramp getMissingIdentifiers is unavailable");let t=await e.getMissingIdentifiers();if(!k())return!1;let r=j();return f({stripeSession:{...r,context:{...r.context,kycMissingIdentifiers:t.identifiers,kycMissingAlternatives:t.alternatives}}}),(({identifiers:n})=>n.length>0)(t)},St=({stripeKycRegion:e,sourceCurrency:t})=>{if(e==="eu"||e==="us")return e;let r=t.toUpperCase();if(r==="EUR")return"eu";if(r==="USD")return"us";throw Error(`Unsupported source currency for Stripe onramp: ${r}`)},_e=e=>({providedFields:e.status==="active"?e.provided_fields:[],kycTiers:e.status==="active"?e.kyc_tiers:void 0}),pe=({customer:e,region:t})=>e.status==="active"&&(t==="eu"?((r,n)=>n==="verified"&&r.includes("identifiers")&&r.includes("attestation"))(e.provided_fields,Ct(e.kyc_tiers)):e.verifications.some(r=>r.status==="verified")),oe=async({customer:e,region:t,tier:r="l0"})=>{let{providedFields:n,kycTiers:i}=_e(e);if(t!=="eu")return Se(r,n,t);if(_t(i))throw Error("Document verification was rejected. Contact Stripe support for help.");let s=(({kycTiers:a,providedFields:l})=>{let d=Ct(a);return bt(l,d)})({kycTiers:i,providedFields:n});return s!=="collect-identifiers"||await kt()||(s=ie("collect-identifiers")),s},Ue=e=>e?"privyErrorCode"in e&&typeof e.privyErrorCode=="string"?e.privyErrorCode:"code"in e&&typeof e.code=="string"?e.code:null:null,Y=({eventType:e,error:t,errorCode:r,attempt:n,context:i,stripeSessionId:s})=>{let a=T.getState();if(!a)return;let l=a.stripeSession,d=i??(l==null?void 0:l.context.config);d&&a.privy.track({name:"stripe_onramp_client_operation",properties:{event_type:e,error_code:r??Ue(t instanceof Error?t:null),privy_session_id:d.sessionId,stripe_session_id:s??(l==null?void 0:l.context.stripeSessionId),source_currency:a.opts.source.selectedAsset.toLowerCase(),destination_currency:a.opts.destination.asset.toLowerCase(),destination_network:d.network,environment:d.environment,...n===void 0?{}:{attempt:n}}})},Et=e=>(e instanceof Error?e.message:String(e)).toLowerCase().includes("user is not authenticated"),R=(e,t="flow_failed")=>{let r=e instanceof Error?e:Error(String(e));if(console.error("[FiatOnramp:Stripe]",r),Et(r))return Y({eventType:"link_auth_error",error:r}),void f({state:{status:"stripe-flow",step:"choose-email"},error:null,stripeElement:null,isLoading:!1});Y({eventType:t,error:r}),f({state:{status:"provider-error"},error:r,isLoading:!1})},me=async()=>{let e=j(),{opts:t,amount:r}=$(),n=Ar(r);try{let i=await(async(a,l)=>await a.fetchPrivyRoute(Gt,{query:{environment:l.environment,destination_chain:l.destinationChain,wallet_address:l.walletAddress}}))(e.privy,{environment:e.context.config.environment,destinationChain:t.destination.chain,walletAddress:t.destination.address}),s=Pr({limits:i,sourceCurrency:t.source.selectedAsset});return s===null||n<=s}catch{return!0}};let Ar=e=>{let t=e.trim();if(!/^\d+(?:\.\d*)?$/.test(t))throw Error("Enter a valid amount and try again.");let r=Number.parseFloat(t);if(!Number.isFinite(r))throw Error("Enter a valid amount and try again.");return r},Pr=({limits:e,sourceCurrency:t})=>{let r=Object.values(e.limits[`${t.toLowerCase()}.fiat`]??{}).flat();return r.length?Math.max(...r.map(n=>n.limit)):null};const ne=async({customer:e,loader:t,tier:r})=>{if(!k())return;let{providedFields:n}=_e(e),i=j(),s=i.context.kycRegion??"us",a=r??(({customer:c,region:u})=>{if(c.status!=="active")return null;if(u==="eu")return pe({customer:c,region:u})?null:"l2";let h=y=>{var x;return(x=c.kyc_tiers)==null?void 0:x.some(b=>b.tier===y&&b.verification_status==="verified")};return h("l2")?null:h("l1")?"l2":h("l0")?"l1":"l0"})({customer:e,region:s});if(!a)throw new Be("Checkout failed: transaction_limit_reached",void 0,q.ONRAMP_TRANSACTION_LIMIT_REACHED);if(s==="eu"){let c=await oe({customer:e,region:s});if(!k())return;if(!c)throw Error("Stripe could not continue identity verification. Try again.");return void f({stripeSession:{...i=j(),context:{...i.context,...t?{documentVerificationAction:{type:"retry-payment",loader:t}}:{},kycTier:a,kycProvidedFields:n}},state:{status:"stripe-flow",step:c},isLoading:!1})}let l=await oe({customer:e,region:s,tier:a});if(!k())return;let d={...(i=j()).context,...a==="l2"&&t?{documentVerificationAction:{type:"retry-payment",loader:t}}:{},kycTier:a,kycProvidedFields:n};if(l)f({stripeSession:{...i,context:d},state:{status:"stripe-flow",step:l},isLoading:!1});else{if(a!=="l2")throw Error("Stripe could not continue identity verification. Try again.");f({stripeSession:{...i,context:d},state:{status:"stripe-flow",step:"verify-documents"},isLoading:!1})}},jt=async(e,{environment:t})=>(await e.fetchPrivyRoute(er,{query:{environment:t}})).data,Ir=["aptos","avalanche","arbitrum","base","bitcoin","ethereum","optimism","polygon","solana","stellar","sui","tempo","worldchain","xrpl"],At=2e3,we=e=>{if((t=>Ir.some(r=>r===t))(e))return e;throw Error(`Unsupported Stripe onramp network: ${e}`)},Pt=async(e,t)=>await e.fetchPrivyRoute(or,{body:{session_id:t.sessionId,environment:t.environment,session:t.session}}),Lr=e=>{var r,n;let t=Tr((r=e==null?void 0:e.source_currency)==null?void 0:r.toLowerCase());return{currencySymbol:t,paymentMethodLabel:null,fee:e!=null&&e.fee&&t?`${t}${e.fee}`:null,destinationAmount:Rr(e==null?void 0:e.destination_amount),destinationToken:((n=e==null?void 0:e.destination_currency)==null?void 0:n.toUpperCase())??null,destinationNetwork:$r(e==null?void 0:e.destination_network),sourceAmount:(e==null?void 0:e.source_total_amount)??null,quoteExpiresAt:(e==null?void 0:e.quote_expiration)??null}};let Tr=e=>e==="usd"?"$":e==="eur"?"€":e==="gbp"?"£":null,Rr=e=>e?e.replace(/\.0+$/,"").replace(/(\.\d*?)0+$/,"$1"):null,$r=e=>e?e.split(/[-_]/).map(t=>`${t.slice(0,1).toUpperCase()}${t.slice(1)}`).join(" "):null;const Nr=e=>{let t=Ve(e);if(t===q.ONRAMP_MINIMUM_IDENTITY_VERIFICATION_REQUIRED)return"l0";if(t===q.ONRAMP_IDENTITY_VERIFICATION_REQUIRED)return"l1";if(t===q.ONRAMP_DOCUMENT_VERIFICATION_REQUIRED)return"l2";if(t==="crypto_onramp_missing_minimum_identity_verification")return"l0";if(t==="crypto_onramp_missing_identity_verification")return"l1";if(t==="crypto_onramp_missing_document_verification")return"l2";let r=Dr(e);return r.includes("crypto_onramp_missing_minimum_identity_verification")?"l0":r.includes("crypto_onramp_missing_identity_verification")?"l1":r.includes("crypto_onramp_missing_document_verification")?"l2":r.toLowerCase().includes("minimum identity verification")?"l0":r.toLowerCase().includes("identity verification")?"l1":r.toLowerCase().includes("document verification")?"l2":null},Mr=e=>{let t=Ve(e);return t===q.ONRAMP_TRANSACTION_LIMIT_REACHED||t==="transaction_limit_reached"||t==="crypto_onramp_transaction_limit_reached"},Fr=e=>{let t=Ve(e);return t===q.ONRAMP_WALLET_OWNERSHIP_REQUIRED||t==="crypto_onramp_wallet_ownership_verification_required"||t==="wallet_ownership_verification_required"};let Ve=e=>{if(!e||typeof e!="object")return null;if("code"in e&&typeof e.code=="string")return e.code;if("error"in e){let t=e.error;if(t&&typeof t=="object"&&"code"in t&&typeof t.code=="string")return t.code}return null},Dr=e=>{if(!e)return"";let t=[];if(e instanceof Error?t.push(e.name,e.message):t.push(String(e)),typeof e=="object"&&("code"in e&&t.push(String(e.code)),"type"in e&&t.push(String(e.type)),"error"in e)){let r=e.error;typeof r=="object"&&r&&"message"in r&&t.push(String(r.message)),typeof r=="object"&&r&&"code"in r&&t.push(String(r.code))}return t.join(" ")};const It=(e,t)=>{let r=e.find(i=>i.id===t);if(!(r!=null&&r.card))return null;let n=r.card.brand?`${r.card.brand.charAt(0).toUpperCase()}${r.card.brand.slice(1)}`:"Card";return r.card.last4?`${n} •••• ${r.card.last4}`:n},Oe=async({paymentToken:e,loader:t})=>{let r=j();try{let n,i,{opts:s,amount:a}=$(),{config:l,cryptoCustomerId:d}=r.context;if(!d)throw Error("Missing cryptoCustomerId");t==="inline"?f({stripeSession:{...r,context:{...r.context,paymentToken:e}},isLoading:!0}):t==="screen"&&f({stripeSession:{...r,context:{...r.context,paymentToken:e}},state:{status:"stripe-flow",step:"checkout"},isLoading:!1});let c={crypto_customer_id:d,payment_token:e,source_amount:a||"0",source_currency:s.source.selectedAsset.toUpperCase(),destination_currency:s.destination.asset,destination_network:l.network,wallet_address:s.destination.address},u=async()=>await Pt(r.privy,{sessionId:l.sessionId,environment:l.environment,session:c});try{let b;try{b=await u()}catch(g){if(!Fr(g))throw g;let{opts:v,signWalletOwnershipMessage:_}=$();if(await mt({onramp:r.onramp,walletAddress:v.destination.address,network:we(l.network),signMessage:_}),!k())return;b=await u()}n=b.id,i=b.transaction_details}catch(b){let g=Nr(b);if(!g&&!Mr(b))throw b;if(!k())return;let v=await Z(r.privy,{environment:l.environment});return await ne({customer:v,loader:t,tier:g})}if(!k())return;let h=j().context.paymentMethodLabel??null;if(!h)try{let b=await jt(r.privy,{environment:l.environment});h=It(b,e)}catch{}let y={...Lr(i),paymentMethodLabel:h},x=j();f({stripeSession:{...x,context:{...x.context,stripeSessionId:n,checkoutDetails:y}},stripeConfirmCheckoutDetails:y,state:{status:"stripe-flow",step:"confirm-checkout"},isLoading:!1})}catch(n){R(n)}},X=async e=>{let t=j();try{let{opts:r}=$(),n=t.context.config.network,i=await(async(l,{environment:d})=>(await l.fetchPrivyRoute(Zt,{query:{environment:d}})).data)(t.privy,{environment:t.context.config.environment});if(!k())return;if(!i.some(l=>l.wallet_address===r.destination.address&&l.network===n)){try{await t.onramp.registerWalletAddress(r.destination.address,we(n))}catch(l){if(console.warn("[FiatOnramp:Stripe] registerWalletAddress failed:",l),Et(l))return void R(l);Y({eventType:"wallet_registration_error",error:l})}if(!k())return}if(!(e!=null&&e.skipTokenCheck)){let l=[];try{l=await jt(t.privy,{environment:t.context.config.environment})}catch{}if(!k())return;if(l.length>0){let d=new Set,c=l.filter(h=>{var x,b;let y=`${h.type}:${((x=h.card)==null?void 0:x.brand)??""}:${((b=h.card)==null?void 0:b.last4)??""}`;return!d.has(y)&&(d.add(y),!0)}),u=j();return void f({stripeSession:{...u,context:{...u.context,savedPaymentTokens:c}},state:{status:"stripe-flow",step:"select-payment"},isLoading:!1})}}f({stripeElement:null,state:{status:"stripe-flow",step:"payment"},isLoading:!1});let s=t.context.kycRegion??"us",a=await ue(t.onramp.collectPaymentMethod({payment_method_types:s==="eu"?["card"]:["card","us_bank_account"],wallets:{applePay:"auto",googlePay:"auto"}},l=>{if(k()){if(!l.cryptoPaymentToken)return void R(Error("Payment method selection was cancelled"),"flow_cancelled");Oe({paymentToken:l.cryptoPaymentToken,loader:"screen"})}}).catch(l=>(R(l),null)),3e4,se());k()&&a&&f({stripeElement:a})}catch(r){R(r)}},Lt=async()=>{var x,b;let e,t=he();if(!t)return;let r=t.provider;if(r==="stripe"||r==="stripe-sandbox"){f({isLoading:!0});let{opts:g,amount:v,getProviderUrl:_,email:m,phone:I,privy:p}=$();try{let E=await _({source:{asset:g.source.selectedAsset.toUpperCase(),amount:v||"0"},destination:{asset:g.destination.asset,chain:g.destination.chain,address:g.destination.address},provider:t.provider,sub_provider:t.sub_provider??void 0,payment_method:t.payment_method}),w=qr(E),F=r==="stripe"?"production":"sandbox",fe={publishableKey:w.publishable_key,network:w.network,sessionId:w.session_id,userEmail:m??"",userPhone:I,environment:F};try{await(async(G,Q)=>{let B;De();try{({loadCryptoOnrampAndInitialize:B}=await Dt(()=>import("./stripe.esm-g-zUbXrr.js"),[],import.meta.url))}catch{throw Error("@stripe/crypto is required for Stripe onramp but could not be loaded. Ensure the package is installed.")}let{controller:ge}=$();ge.current=new AbortController;let ve=await ue(Promise.resolve(B(Q.publishableKey,{theme:"stripe"})),15e3,ge.current.signal);if(!ve)throw Error("Stripe crypto SDK unavailable");let ae=crypto.randomUUID();f({stripeSession:{id:ae,onramp:ve,privy:G,context:{sessionId:ae,config:Q}}})})(p,fe)}catch(G){throw Y({eventType:"sdk_init_error",error:G,context:fe}),G}let Ze=j();if(!Ze)return;let V=await Z(Ze.privy,{environment:F});if(!k())return;if(V.status==="active"){let G=j(),Q=St({stripeKycRegion:V.kyc_region,sourceCurrency:g.source.selectedAsset});f({stripeSession:{...G,context:{...G.context,cryptoCustomerId:V.crypto_customer_id,kycRegion:Q,kycProvidedFields:V.provided_fields}},isLoading:!0}),await(async({authIntentId:B,onReady:ge})=>{let ve=j(),ae=!1,Ae=async()=>{if(!ae){ae=!0;try{await ge()}catch(J){if(!k())return;R(J)}}};if(!B)return void await Ae();let Pe=null;try{Pe=await ue(ve.onramp.authenticate(B,J=>{k()&&(J.result==="success"?Ae():R(Error(`Link authentication ${J.result}`)))}),3e4,se())}catch(J){return k()?(Y({eventType:"link_auth_error",error:J}),void f({state:{status:"stripe-flow",step:"choose-email"},isLoading:!1})):void 0}k()&&(Pe?f({state:{status:"stripe-flow",step:"authenticating"},stripeElement:Pe,isLoading:!1}):await Ae())})({authIntentId:V.link_auth_intent_id,onReady:async()=>{if(k())if(Q==="eu")if(pe({customer:V,region:Q})){let B=await me();if(k()){if(!B)return await ne({customer:V});await X()}}else{let B=await oe({customer:V,region:Q})??"collect-name";if(!k())return;f({state:{status:"stripe-flow",step:B},isLoading:!1})}else if(pe({customer:V,region:Q})){let B=await me();if(!k())return;if(!B)return await ne({customer:V});await X()}else f({state:{status:"stripe-flow",step:"collect-name"},isLoading:!1})}})}else f({state:{status:"stripe-flow",step:"choose-email"},isLoading:!1})}catch(E){console.error("[FiatOnramp:Stripe] Init failed:",E),f({state:{status:"provider-error"},isLoading:!1,error:Error("Something went wrong setting up checkout. Please try again.")})}return}let n=Qt();if(!n)return void f({state:{status:"provider-error"},error:Error("Unable to open payment window")});f({isLoading:!0});let{opts:i,amount:s,getProviderUrl:a,getStatus:l,controller:d}=$(),c=()=>{try{n.closed||n.close()}catch{}};d.current=new AbortController;try{let g=await a({source:{asset:i.source.selectedAsset.toUpperCase(),amount:s||"0"},destination:{asset:i.destination.asset,chain:i.destination.chain,address:i.destination.address},provider:t.provider,sub_provider:t.sub_provider??void 0,payment_method:t.payment_method,redirect_url:window.location.origin});if(g.type!=="url")throw Error("Expected URL response for popup-based provider");n.location.href=g.url,e=g.session_id}catch{return c(),void f({state:{status:"provider-error"},isLoading:!1,error:Error("Unable to start payment session")})}f({isLoading:!1}),f({state:{status:"provider-confirming",checkoutClosed:!1}});let{signal:u}=d.current,h=setInterval(()=>{!u.aborted&&n.closed&&document.hasFocus()&&(clearInterval(h),f({state:{status:"provider-confirming",checkoutClosed:!0}}))},1e3),y=await qe({operation:async()=>{let g=await l({session_id:e,provider:t.provider});return g.status!=="processing"||u.aborted||(clearInterval(h),f({state:{status:"provider-confirming",checkoutClosed:!1}})),g},until:g=>g.status==="completed"||g.status==="failed"||g.status==="cancelled",delay:0,interval:2e3,attempts:300,signal:u}).finally(()=>clearInterval(h));if(!u.aborted&&y.status!=="aborted"){if(y.status==="max_attempts")return c(),y.error?(console.error(y.error),void f({state:{status:"select-amount"},isLoading:!1,error:Error("Unable to check payment status. Please try again.")})):void f({state:{status:"provider-error"},error:Error("Could not confirm payment status yet.")});((x=y.result)==null?void 0:x.status)==="completed"?(c(),f({state:{status:"provider-success"}})):(c(),f({state:{status:"provider-error"},error:Error(`Transaction ${((b=y.result)==null?void 0:b.status)??"failed"}`)}))}};let qr=e=>{if(e&&typeof e=="object"&&"publishable_key"in e&&"network"in e&&"session_id"in e)return e;throw Error("Unexpected response shape from provider_session_url for Stripe")};const Br=()=>{let e=Ht();e&&e.length>0&&f({state:{status:"select-payment-method",quotes:e}})},Ur=()=>{var e;ut(),(e=$().quotesRequest)==null||e.abort(),f({state:{status:"select-source-asset"},quotesRequest:null,isLoading:!1,localSelectedQuote:he(),localQuotes:[],quotesWarning:null,quotesErrors:null})},Vr=e=>{if(!e||typeof e!="object")return null;let t=e.transaction_details;return(t==null?void 0:t.last_error)??null},de="The card was declined. Try another Visa or Mastercard.";let Or={card_declined:de,generic_card_decline:de,generic_decline:de,insufficient_funds:"The card has insufficient funds. Try another Visa or Mastercard.",card_does_not_support_crypto_purchase:"The card does not support crypto purchases. Try another Visa or Mastercard.",card_not_supported:"This card is not supported. Try a Visa or Mastercard.",card_velocity_exceeded:"The card issuer declined repeated attempts. Wait a few minutes before trying again, or use another card.",expired_card:"The card has expired. Try another Visa or Mastercard.",incorrect_cvc:"The security code is incorrect. Check the card details or try another card.",incorrect_number:"The card number is incorrect. Check the card details or try another card.",processing_error:"The payment could not be processed. Try again or use another card.",transaction_failed:"The payment failed. Try another Visa or Mastercard."};class Ee extends Be{constructor(t){super(Or[t]??de,void 0,q.ONRAMP_PAYMENT_METHOD_DECLINED),this.declineReason=t,this.name="StripePaymentMethodError"}}let zr=new Set(["card_declined","generic_card_decline","generic_decline","insufficient_funds","card_does_not_support_crypto_purchase","card_not_supported","transaction_failed"]),Kr=new Set(["decline","declined","insufficient"]);const Wr=e=>zr.has(e)||e.toLowerCase().split("_").some(t=>Kr.has(t));let Yr=[{pattern:/insufficient funds/i,reason:"insufficient_funds"},{pattern:/repeated attempts too frequently|exceeding its amount limit/i,reason:"card_velocity_exceeded"},{pattern:/card was declined/i,reason:"card_declined"},{pattern:/does not support this type of purchase/i,reason:"card_does_not_support_crypto_purchase"},{pattern:/card has expired|expired card/i,reason:"expired_card"},{pattern:/security code is incorrect/i,reason:"incorrect_cvc"},{pattern:/card number is incorrect/i,reason:"incorrect_number"},{pattern:/error occurred while processing your card/i,reason:"processing_error"}];const Hr=e=>{if(!(e instanceof Error&&e.message))return null;let t=Yr.find(({pattern:r})=>r.test(e.message));return t?new Ee(t.reason):null},Qr=e=>e instanceof Error&&/unable to secure your crypto/i.test(e.message)?Error("We could not complete your purchase. Any charge will be refunded — contact support if it does not appear within a few days."):null,Re=()=>{var e;if(((e=T.getState())==null?void 0:e.error)instanceof Ee)return f({error:null,stripeElement:null,state:{status:"stripe-flow",step:"payment"},isLoading:!0}),void X();f({error:null,isLoading:!1,state:{status:"select-amount"}})},Zr=()=>{let{error:e,isLoading:t}=T.getState()??{};e instanceof Ee||!he()?Re():t||(f({isLoading:!0}),Lt())},Xr=e=>{f({localSelectedQuote:e,pickedQuote:e,state:{status:"select-amount"}})},Gr=e=>{let{opts:t,amount:r,quotesRequest:n}=$();n==null||n.abort();let i={...t,source:{...t.source,selectedAsset:e}};f({opts:i,state:{status:"select-amount"},quotesRequest:null,localSelectedQuote:he(),localQuotes:[],quotesWarning:null,quotesErrors:null,isLoading:!0}),pt(r,i)},ze=({element:e,minHeight:t,bleed:r=!1})=>{let n=S.useRef(null);return S.useEffect(()=>(n.current&&e&&n.current.replaceChildren(e),()=>{n.current&&n.current.replaceChildren()}),[e]),o.jsxs("div",{style:{minHeight:t,margin:r?"0 -1rem":void 0},children:[e?null:o.jsx("div",{style:{alignItems:"center",display:"flex",justifyContent:"center",minHeight:t},children:o.jsx(cr,{size:"32px"})}),o.jsx("div",{ref:n})]})},Ke=(e,t)=>{var r;return e!=="collect-address"||t.kycRegion!=="eu"||(r=t.kycAddress)!=null&&r.country?e:"collect-country"},U=e=>{k()&&f({state:{status:"stripe-flow",step:Ke(e,j().context)}})},Jr=({city:e,country:t})=>{let r=j(),n=r.context,i=[...n.kycProvidedFields??[],"birth_city","birth_country"];f({stripeSession:{...r,context:{...n,kycBirthCity:e,kycBirthCountry:t,kycProvidedFields:i}}}),U(ie("collect-birth-location"))},eo=async(e,t)=>(await e.fetchPrivyRoute(rr,{params:{session_id:t}})).client_secret,$e=async(e,t)=>{let r=await e.fetchPrivyRoute(tr,{params:{session_id:t}});return{quoteExpiresAt:r.quote_expiration,sourceTotalAmount:r.source_total_amount,fee:r.fee,destinationAmount:r.destination_amount}};let to=new Set(["transaction_limit_reached","location_not_supported"]),ro=e=>e==="transaction_limit_reached"?new Be("Checkout failed: transaction_limit_reached",void 0,q.ONRAMP_TRANSACTION_LIMIT_REACHED):Error(`Checkout failed: ${e??"unknown error"}`),oo=e=>!!(e&&typeof e=="object"&&"message"in e&&typeof e.message=="string"&&e.message.toLowerCase().includes("quote expired"));const rt=async()=>{let e=j();try{let{stripeSessionId:t}=e.context;if(!t)throw Error("Missing stripeSessionId");f({isLoading:!0});for(let r=0;r<3;r++){let n;if(!k())return;try{n=await e.onramp.performCheckout(t,async s=>await eo(e.privy,s))}catch(s){let a=Hr(s);if(a)throw Y({eventType:"checkout_error",error:s,errorCode:a.declineReason,attempt:r+1,stripeSessionId:t}),a;let l=Qr(s);if(l)throw Y({eventType:"checkout_error",error:s,errorCode:"crypto_delivery_failed",attempt:r+1,stripeSessionId:t}),l;if(!oo(s))throw s;Y({eventType:"checkout_error",error:s,errorCode:"quote_expired",attempt:r+1,stripeSessionId:t}),await $e(e.privy,t);continue}if(n.successful)return k()?void f({state:{status:"provider-success"},isLoading:!1}):void 0;let i=Vr(n);if(Y({eventType:"checkout_error",errorCode:i,attempt:r+1,stripeSessionId:t}),!i||to.has(i))throw ro(i);if(Wr(i))throw new Ee(i);if(!k())return;if(i==="charged_with_expired_quote")await $e(e.privy,t);else if(i==="quote_rate_drifted"){let{opts:s,amount:a}=$(),{config:l,cryptoCustomerId:d,paymentToken:c}=e.context;if(!d||!c)throw Error("Cannot recreate session: missing customer or payment token");t=(await Pt(e.privy,{sessionId:l.sessionId,environment:l.environment,session:{crypto_customer_id:d,payment_token:c,source_amount:a||"0",source_currency:s.source.selectedAsset.toUpperCase(),destination_currency:s.destination.asset,destination_network:l.network,wallet_address:s.destination.address}})).id;let u=j();f({stripeSession:{...u,context:{...u.context,stripeSessionId:t}}})}else{if(i==="missing_kyc"){let s=await Z(e.privy,{environment:e.context.config.environment});if(!k())return;let{providedFields:a}=_e(s),l=j(),d=l.context.kycRegion??"us",c=await oe({customer:s,region:d,tier:"l0"});if(!k())return;if(l=j(),!c)throw Error("Checkout failed: missing_kyc but all fields already provided");return void f({stripeSession:{...l,context:{...l.context,documentVerificationAction:{type:"retry-checkout"},kycTier:"l0",kycProvidedFields:a}},state:{status:"stripe-flow",step:c}})}if(i==="missing_document_verification"){let s=await Z(e.privy,{environment:e.context.config.environment});if(!k())return;let{providedFields:a}=_e(s),l=j(),d=l.context.kycRegion??"us",c=await oe({customer:s,region:d,tier:"l2"});if(!k())return;let u={...(l=j()).context,documentVerificationAction:{type:"retry-checkout"},kycTier:"l2",kycProvidedFields:a};return c?void f({stripeSession:{...l,context:u},state:{status:"stripe-flow",step:c},isLoading:!1}):void f({stripeSession:{...l,context:u},state:{status:"stripe-flow",step:"verify-documents"},isLoading:!1})}if(i==="missing_consumer_wallet"){let{opts:s}=$();await e.onramp.registerWalletAddress(s.destination.address,we(e.context.config.network))}else{if(i!=="wallet_ownership_verification_required")throw Error(`Checkout failed: ${i}`);{let{opts:s,signWalletOwnershipMessage:a}=$();await mt({onramp:e.onramp,walletAddress:s.destination.address,network:we(e.context.config.network),signMessage:a})}}}}throw Error("Checkout failed after maximum retry attempts")}catch(t){R(t)}},W=[{code:"AT",name:"Austria"},{code:"BE",name:"Belgium"},{code:"BG",name:"Bulgaria"},{code:"HR",name:"Croatia"},{code:"CY",name:"Cyprus"},{code:"CZ",name:"Czech Republic"},{code:"DK",name:"Denmark"},{code:"EE",name:"Estonia"},{code:"FI",name:"Finland"},{code:"FR",name:"France"},{code:"DE",name:"Germany"},{code:"GR",name:"Greece"},{code:"HU",name:"Hungary"},{code:"IE",name:"Ireland"},{code:"IT",name:"Italy"},{code:"LV",name:"Latvia"},{code:"LT",name:"Lithuania"},{code:"LU",name:"Luxembourg"},{code:"MT",name:"Malta"},{code:"NL",name:"Netherlands"},{code:"NO",name:"Norway"},{code:"PL",name:"Poland"},{code:"PT",name:"Portugal"},{code:"RO",name:"Romania"},{code:"SK",name:"Slovakia"},{code:"SI",name:"Slovenia"},{code:"ES",name:"Spain"},{code:"SE",name:"Sweden"}],Tt=new Set(W.map(e=>e.code)),no=e=>{if(!Tt.has(e))return void R(Error("Stripe EU onramp is not available in this country"));let t=j(),r=t.context,n=r.cryptoCustomerId?"collect-address":"create-link-account";f({stripeSession:{...t,context:{...r,kycRegion:"eu",kycAddress:{...r.kycAddress??{addressLine1:"",city:"",state:"",postalCode:""},country:e}}},state:{status:"stripe-flow",step:n}})},Rt=async(e,{email:t,environment:r})=>(await e.fetchPrivyRoute(nr,{body:{email:t,environment:r}})).data,ot=e=>{let t=j();f({stripeSession:{...t,context:{...t.context,...e}}})},$t=async(e,t)=>{let r=j();try{if(await(async(a,{authIntentId:l,cryptoCustomerId:d,environment:c})=>{await a.fetchPrivyRoute(ir,{body:{auth_intent_id:l,crypto_customer_id:d,environment:c}})})(r.privy,{authIntentId:t,cryptoCustomerId:e,environment:r.context.config.environment}),!k())return;ot({cryptoCustomerId:e});let n=await Z(r.privy,{environment:r.context.config.environment});if(!k())return;if(n.status!=="active")throw Error("Session unexpectedly inactive after authentication");let{opts:i}=$(),s=St({stripeKycRegion:n.kyc_region,sourceCurrency:i.source.selectedAsset});if(ot({kycRegion:s,kycProvidedFields:n.provided_fields}),s==="eu")if(pe({customer:n,region:s})){let a=await me();if(!k())return;if(!a)return await ne({customer:n});await X()}else{let a=await oe({customer:n,region:s})??"collect-name";if(!k())return;U(a)}else if(pe({customer:n,region:s})){let a=await me();if(!k())return;if(!a)return await ne({customer:n});await X()}else U("collect-name")}catch(n){R(n)}},io=async e=>{let t=j();try{f({isLoading:!0});let r=await Rt(t.privy,{email:e,environment:t.context.config.environment});if(!k())return;if(f({isLoading:!1}),r.status==="no_account"){let{opts:n}=$(),i=n.source.selectedAsset.toUpperCase()==="EUR";f({stripeSession:{...t,context:{...t.context,pendingEmail:e}},state:{status:"stripe-flow",step:i?"collect-country":"create-link-account"},email:e})}else{f({stripeSession:{...t,context:{...t.context,authIntentId:r.id,pendingEmail:e}},state:{status:"stripe-flow",step:"authenticating"},email:e});let n=await ue(t.onramp.authenticate(r.id,i=>{k()&&(i.result==="success"&&i.crypto_customer_id?$t(i.crypto_customer_id,r.id):R(Error(`Link authentication ${i.result}`)))}),3e4,se());k()&&n&&f({stripeElement:n})}}catch(r){R(r)}},so=async e=>{let t=j(),r=t.context,n=t.onramp,i=await n.updateKycInfo(e).catch(a=>(R(a),null));if(!i)return;let s=[...r.kycProvidedFields??[]];i.completed&&s.push("identifiers"),f({stripeSession:{...t,context:{...r,kycProvidedFields:s,kycMissingIdentifiers:i.identifiers??[],kycMissingAlternatives:i.alternatives??[],kycInvalidIdentifiers:i.invalid_identifiers??[]}}}),i.completed&&U(ie("collect-identifiers"))},je=async()=>{let e=j();try{let{kycSsn:t,kycTier:r,kycRegion:n,config:i}=e.context,s={...ao(e.context),...lo(e.context),...co(e.context),...uo(e.context),...po(e.context)};if(U("kyc"),await e.onramp.submitKycInfo(s),t){let c=j();f({stripeSession:{...c,context:{...c.context,kycSsn:void 0}}})}if(!k())return;let a=n==="eu"?"l2":r==="l2"?"l1":r??"l0",l=await qe({operation:()=>Z(e.privy,{environment:i.environment}),until:c=>{var u,h;if(c.status!=="active")return!1;if(n==="eu"){let y=(u=c.kyc_tiers)==null?void 0:u.find(x=>x.tier==="l2");return(y==null?void 0:y.verification_status)==="pending"||(y==null?void 0:y.verification_status)==="verified"}if((h=c.kyc_tiers)!=null&&h.length){let y=c.kyc_tiers.find(x=>x.tier===a);if(y)return y.verification_status==="verified"}return c.verifications.some(y=>y.status==="verified")},delay:0,interval:At,attempts:Math.ceil(30),signal:se()});if(!k()||l.status==="aborted")return;if(l.status==="max_attempts")throw Error("KYC verification timed out");let d=await me();if(!k())return;if(!d)return await ne({customer:l.result});if(r==="l2"){let c=j(),u=c.context.documentVerificationAction??{type:"retry-payment",loader:"screen"};return void f({stripeSession:{...c,context:{...c.context,documentVerificationAction:u}},state:{status:"stripe-flow",step:"verify-documents"},isLoading:!1})}await X()}catch(t){R(t)}};let ao=({kycName:e})=>e?{given_name:e.firstName,surname:e.lastName}:{},lo=({kycDob:e})=>e?{date_of_birth:{day:e.day,month:e.month,year:e.year}}:{},co=({kycRegion:e,kycSsn:t})=>e!=="eu"&&t?{id_number:{type:"us_ssn",value:t}}:{},uo=({kycAddress:e})=>e?{address:{line1:e.addressLine1,city:e.city,...e.state?{state:e.state}:{},postal_code:e.postalCode,country:e.country}}:{},po=({kycRegion:e,kycNationalities:t,kycBirthCity:r,kycBirthCountry:n})=>e==="eu"?{...t!=null&&t.length?{nationalities:t}:{},...r?{birth_city:r}:{},...n?{birth_country:n}:{}}:{};const mo=async e=>{var s;let t=j(),r=t.context,n=(s=r.kycAddress)==null?void 0:s.country;if(!(r.kycRegion!=="eu"||n&&Tt.has(n)))return void R(Error("Stripe EU onramp is not available in this country"));let i=r.kycRegion==="eu"&&n?{...e,country:n}:e;f({stripeSession:{...t,context:{...r,kycAddress:i,kycProvidedFields:[...r.kycProvidedFields??[],"address_line_1","address_city",...i.state?["address_state"]:[],"address_postal_code"]}}}),r.kycRegion!=="eu"?await je():await(async()=>{let a=j();try{let{kycName:l,kycDob:d,kycAddress:c,kycNationalities:u,kycBirthCity:h,kycBirthCountry:y}=a.context,x={...l?{given_name:l.firstName,surname:l.lastName}:{},...d?{date_of_birth:{day:d.day,month:d.month,year:d.year}}:{},...c?{address:{line1:c.addressLine1,city:c.city,...c.state?{state:c.state}:{},postal_code:c.postalCode,country:c.country}}:{},...u!=null&&u.length?{nationalities:u}:{},...h?{birth_city:h}:{},...y?{birth_country:y}:{}};if(U("kyc"),await a.onramp.submitKycInfo(x),!k())return;let b=await kt();if(!k())return;U(b?"collect-identifiers":ie("collect-identifiers"))}catch(l){R(l)}})()},ho=({day:e,month:t,year:r})=>{let n=j(),i=n.context,s=i.kycTier??"l1",a=i.kycRegion??"us",l=[...i.kycProvidedFields??[],"dob"],d=Se(s,l,a),c={...i,kycDob:{day:e,month:t,year:r},kycProvidedFields:l},u=d?{status:"stripe-flow",step:Ke(d,c)}:void 0;f({stripeSession:{...n,context:c},...u?{state:u}:{}}),d||je()},yo=({firstName:e,lastName:t})=>{let r=j(),n=r.context,i=n.kycTier??"l0",s=n.kycRegion??"us",a=[...n.kycProvidedFields??[],"first_name","last_name"],l=Se(i,a,s),d={...n,kycName:{firstName:e,lastName:t},kycProvidedFields:a},c=l?{status:"stripe-flow",step:Ke(l,d)}:void 0;f({stripeSession:{...r,context:d},...c?{state:c}:{}}),l||je()},fo=e=>{let t=j(),r=t.context,n=r.kycTier??"l1",i=[...r.kycProvidedFields??[],"id_number"],s=Se(n,i);f({stripeSession:{...t,context:{...r,kycSsn:e,kycProvidedFields:i}},...s?{state:{status:"stripe-flow",step:s}}:{}}),s||je()},Nt=e=>{var t;return(t=e.kycAddress)!=null&&t.country?e.kycAddress.country:"US"},Ne=async e=>{let t=j();try{let r=t.context.pendingEmail;if(!r)throw Error("No email in session context");if(e==="create"){let s=t.context.config.userPhone;if(!s)return void U("collect-contact");let a=Nt(t.context),l=await t.onramp.registerLinkUser(r,s,a);if(!k())return;if(!l.created)throw Error("Failed to register Stripe Link account")}let n=await Rt(t.privy,{email:r,environment:t.context.config.environment});if(!k())return;if(n.status!=="created")throw Error("Failed to create Link auth intent after registration");f({stripeSession:{...t,context:{...t.context,authIntentId:n.id}},state:{status:"stripe-flow",step:"authenticating"}});let i=await ue(t.onramp.authenticate(n.id,s=>{k()&&(s.result==="success"&&s.crypto_customer_id?$t(s.crypto_customer_id,n.id):R(Error(`Link authentication ${s.result}`)))}),3e4,se());k()&&i&&f({stripeElement:i})}catch(r){R(r)}},go=e=>{let t=j(),r=t.context,n=[...r.kycProvidedFields??[],"nationalities"];f({stripeSession:{...t,context:{...r,kycNationalities:e,kycProvidedFields:n}}}),U(ie("collect-nationality"))},vo=e=>{let t=j(),r=It([e],e.id);f({stripeSession:{...t,context:{...t.context,paymentToken:e.id,paymentMethodLabel:r}}}),Oe({paymentToken:e.id,loader:"inline"})},xo=async e=>{let t=j();try{let r=t.context.pendingEmail;if(!r)throw Error("No email in session context");let n=Nt(t.context),i=await t.onramp.registerLinkUser(r,e,n);if(!k())return;if(!i.created)throw Error("Failed to register Stripe Link account");await Ne("connect")}catch(r){R(r)}},bo=async()=>{try{if(!k())return;let e=j(),t=e.context.stripeSessionId;if(!t)return;let r=await $e(e.privy,t);if(!k())return;let n=e.context.checkoutDetails;if(n){let i=n.currencySymbol,s={...n,quoteExpiresAt:r.quoteExpiresAt,sourceAmount:r.sourceTotalAmount??n.sourceAmount,destinationAmount:r.destinationAmount??n.destinationAmount,fee:r.fee&&i?`${i}${r.fee}`:n.fee};f({stripeConfirmCheckoutDetails:s})}}catch(e){R(e)}},We=({height:e=24,...t})=>o.jsxs("svg",{height:e,viewBox:"120 0 72 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:[o.jsx("path",{d:"M132.258 24C138.856 24 144.205 18.6274 144.205 12C144.205 5.37257 138.856 0 132.258 0C125.66 0 120.312 5.37257 120.312 12C120.312 18.6274 125.66 24 132.258 24Z",fill:"#00D66F"}),o.jsx("path",{d:"M156.317 3.81824C156.317 2.69024 157.263 1.77344 158.377 1.77344C159.49 1.77344 160.436 2.69504 160.436 3.81824C160.436 4.94144 159.524 5.88704 158.377 5.88704C157.23 5.88704 156.317 4.97024 156.317 3.81824Z",fill:"#011E0F"}),o.jsx("path",{d:"M150.205 2.06143H153.789V22.2214H150.205V2.06143Z",fill:"#011E0F"}),o.jsx("path",{d:"M160.188 7.82143H156.575V22.2214H160.188V7.82143Z",fill:"#011E0F"}),o.jsx("path",{d:"M186.16 14.5319C188.879 12.8519 190.728 10.3511 191.459 7.81665H187.847C186.905 10.2359 184.745 12.0551 182.37 12.8279V2.05665H178.758V22.2167H182.37V16.2214C185.128 16.9126 187.307 19.3079 188.052 22.2167H191.689C191.134 19.1639 189.056 16.3079 186.16 14.5319Z",fill:"#011E0F"}),o.jsx("path",{d:"M166.591 9.43425C167.537 8.17185 169.382 7.43744 170.878 7.43744C173.668 7.43744 175.976 9.48705 175.981 12.5831V22.2167H172.369V13.3846C172.369 12.1126 171.805 10.6438 169.974 10.6438C167.824 10.6438 166.586 12.5591 166.586 14.8007V22.2262H162.974V7.83104H166.591V9.43425Z",fill:"#011E0F"}),o.jsx("path",{d:"M131.61 4.7998H127.958C128.668 7.80941 130.743 10.3822 133.339 11.9998C130.738 13.6174 128.668 16.1902 127.958 19.1998H131.61C132.515 16.4158 135.021 13.9966 138.1 13.5022V10.4926C135.016 10.003 132.51 7.58381 131.61 4.7998Z",fill:"#011E0F"})]});function Ye({children:e}){var t;return o.jsx(Co,{theme:((t=ke())==null?void 0:t.appearance.palette.colorScheme)??"light",children:e??"You're in a sandbox environment"})}let Co=C(ht)`
  margin: 1rem 0;
`;const N=({isSandbox:e,children:t,...r})=>{let n=T(i=>{var s;return((s=i==null?void 0:i.opts)==null?void 0:s.environment)==="sandbox"});return e??n?o.jsxs(re,{...r,children:[o.jsx(Ye,{}),t]}):o.jsx(re,{...r,children:t})},H=C.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`,M=C.input`
  && {
    width: 100%;
    padding: 0.625rem 0.75rem;
    font-family: inherit;
    font-size: 1rem;
    line-height: 1.5rem;
    color: ${e=>e.$hasError?"var(--privy-color-error-dark)":"var(--privy-color-foreground)"};
    background: var(--privy-color-background);
    border: 1px solid
      ${e=>e.$hasError?"var(--privy-color-border-error)":"var(--privy-color-foreground-4)"};
    border-radius: var(--privy-border-radius-sm, 0.5rem);
    outline: none;
    box-sizing: border-box;
    transition: border-color 0.15s ease;

    &:focus {
      border-color: ${e=>e.$hasError?"var(--privy-color-border-error)":"var(--privy-color-accent)"};
      box-shadow: ${e=>e.$hasError?"none":"0 0 0 1px var(--privy-color-accent-light)"};
    }

    &::placeholder {
      color: ${e=>e.$hasError?"var(--privy-color-error-dark)":"var(--privy-color-foreground-3)"};
    }

    @media (min-width: 441px) {
      font-size: 0.875rem;
    }
  }
`,z=C.p`
  && {
    color: var(--privy-color-error-dark);
    font-size: 0.8125rem;
  }
`,He=C.select`
  && {
    width: 100%;
    padding: 0.75rem 1rem;
    font-size: 1rem;
    line-height: 1.5rem;
    color: var(--privy-color-foreground);
    background: var(--privy-color-background);
    border: 1px solid
      ${e=>e.$hasError?"var(--privy-color-error)":"var(--privy-color-foreground-4)"};
    border-radius: var(--privy-border-radius-md, 0.5rem);
    outline: none;
    box-sizing: border-box;
    transition: border-color 0.15s ease;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 0.75rem center;
    padding-right: 2rem;

    &:focus {
      border-color: var(--privy-color-accent);
      box-shadow: 0 0 0 1px var(--privy-color-accent-light);
    }

    @media (min-width: 441px) {
      font-size: 0.875rem;
    }
  }
`,Ce=C.div`
  display: flex;
  gap: 0.5rem;
`,_o=C(Bt)`
  width: 100%;
`,wo=C.div`
  position: relative;
  width: 100%;
`,Me=C(Ut)`
  && {
    width: 100%;
    padding: 0.75rem 2.5rem 0.75rem 1rem;
    font-family: inherit;
    font-size: 1rem;
    line-height: 1.5rem;
    color: var(--privy-color-foreground);
    background: var(--privy-color-background);
    border: 1px solid
      ${e=>e.$hasError?"var(--privy-color-error)":"var(--privy-color-foreground-4)"};
    border-radius: 0.5rem;
    outline: none;
    box-sizing: border-box;
    transition:
      border-color 0.15s ease,
      box-shadow 0.15s ease,
      background-color 0.15s ease;

    &:hover:not(:disabled) {
      border-color: var(--privy-color-foreground-3);
    }

    &:focus {
      border-color: var(--privy-color-accent);
      box-shadow: 0 0 0 2px var(--privy-color-accent-light);
    }

    &::placeholder {
      color: var(--privy-color-foreground-3);
    }

    &:disabled {
      color: var(--privy-color-foreground-3);
      background: var(--privy-color-background-2);
      cursor: not-allowed;
    }

    @media (min-width: 441px) {
      font-size: 0.875rem;
    }
  }
`,ko=C.span`
  position: absolute;
  top: 50%;
  right: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.25rem;
  height: 1.25rem;
  color: var(--privy-color-foreground-2);
  pointer-events: none;
  transform: translateY(-50%);

  ${Me}:focus + & {
    color: var(--privy-color-accent);
  }

  ${Me}:disabled + & {
    color: var(--privy-color-foreground-3);
  }
`,So=qt,Eo=C(Vt)`
  z-index: 2147483647;
`,jo=C(Ot)`
  width: var(--anchor-width);
  max-height: min(16rem, var(--available-height));
  overflow: auto;
  padding: 0.25rem 0;
  font-family: inherit;
  background: var(--privy-color-background);
  border: 1px solid var(--privy-color-foreground-4);
  border-radius: 0.5rem;
  box-shadow: var(--privy-shadow-popover);
  box-sizing: border-box;
`,Ao=C(zt)`
  display: flex;
  flex-direction: column;
  gap: 0;
`,Po=C.span`
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  min-width: 1.25rem;
  color: var(--privy-color-foreground-2);
  font-size: 0.75rem;
  line-height: 1rem;
`,Io=C(Kt)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
  min-height: 2.125rem;
  padding: 0 0.75rem;
  font-family: inherit;
  color: var(--privy-color-foreground);
  background: transparent;
  border: 0;
  border-radius: 0;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.25rem;
  text-align: left;
  cursor: pointer;
  outline: none;
  transition:
    background-color 0.15s ease,
    color 0.15s ease;

  span {
    font-family: inherit;
  }

  &:hover,
  &[data-highlighted] {
    background: var(--privy-color-background-2);
  }

  &[data-focus-visible] {
    background: var(--privy-color-background-2);
    box-shadow: inset 0 0 0 1px var(--privy-color-accent-light);
  }

  &[data-selected] {
    background: transparent;
    color: var(--privy-color-foreground);
  }

  &[data-disabled] {
    color: var(--privy-color-foreground-3);
    cursor: not-allowed;
  }
`,Lo=C.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
  padding: 0;
  margin: 0.25rem 0 0;
  list-style: none;
`,To=C.li`
  display: block;
`,Ro=C(dr)`
  && {
    gap: 0.375rem;
    width: auto;
    height: 2rem;
    padding: 0 0.625rem;
    color: var(--privy-color-foreground);
    font-size: 0.75rem;
    line-height: 1rem;
  }
`;C.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  padding: 1rem;
  background: var(--privy-color-background-2);
  border-radius: var(--privy-border-radius-md, 0.5rem);
`,C.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,C.span`
  font-size: 0.875rem;
  color: var(--privy-color-foreground-3);
`,C.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--privy-color-foreground);
`;const $o=C.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  padding: 1rem 1rem 0.75rem;
  border: 1px solid var(--privy-color-foreground-4);
  border-radius: 0.75rem;
`,No=C.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,Mo=C.span`
  position: relative;
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
`,Fo=C.img`
  width: 2rem;
  height: 2rem;
  border-radius: 100px;
`,Do=C.img`
  position: absolute;
  top: -2px;
  right: -2px;
  width: 0.875rem;
  height: 0.875rem;
  border-radius: 100px;
  border: 1.5px solid var(--privy-color-background);
  background-color: var(--privy-color-background);
`,nt=C.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`,it=C.span`
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.125rem;
  color: var(--privy-color-foreground-3);
`,st=C.span`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.375rem;
  color: var(--privy-color-foreground);
`,qo=C.div`
  display: flex;
  flex-direction: column;
`,le=C.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.625rem 0;
  border-bottom: 1px solid var(--privy-color-foreground-4);
  font-size: 0.75rem;
  line-height: 1.125rem;

  &:last-child {
    border-bottom: none;
  }
`,ce=C.span`
  color: var(--privy-color-foreground);
  font-weight: 400;
`,be=C.span`
  color: var(--privy-color-foreground);
  font-weight: 500;
  text-align: right;
  white-space: nowrap;
`,Bo=C.div`
  display: inline-flex;
  align-items: center;
  align-self: center;
  padding: 0.75rem 1rem;
  border: 1px solid var(--privy-color-foreground-4);
  border-radius: 999px;
  color: var(--privy-color-foreground);
  background: var(--privy-color-background);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
`,Uo=({onClose:e,onEmailChosen:t,onEmailBack:r,userEmail:n})=>{let[i,s]=S.useState(n??""),[a,l]=S.useState(null),[d,c]=S.useState(!1),u=async()=>{let h=i.trim();if(h)if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(h)){c(!0);try{await(t==null?void 0:t(h))}catch{c(!1)}}else l("Enter a valid email address");else l("Email is required")};return o.jsx(N,{showClose:!0,onClose:e,showBack:!!r,onBack:r??void 0,icon:o.jsx(We,{height:24}),iconVariant:"logo",title:"Add email",subtitle:"Enter your email address to continue with Link.",primaryCta:{label:"Submit",onClick:u,loading:d},watermark:!0,children:o.jsxs(H,{children:[o.jsx(M,{type:"email",placeholder:"email@example.com",value:i,onChange:h=>{s(h.target.value),l(null)},onKeyDown:h=>h.key==="Enter"&&u(),$hasError:!!a,autoFocus:!0}),a&&o.jsx(z,{children:a})]})})};let Mt={addressPlaceholder:"Street and house number",addressAriaLabel:"Street and house number",cityPlaceholder:"City",cityAriaLabel:"City",postalPlaceholder:"Postal code",postalAriaLabel:"Postal code",postalInputMode:"text",postalMaxWidth:"7rem",postalFirst:!0,missingAddressError:"Street and house number, city, and postal code are required"},Ft={addressPlaceholder:"Street address",addressAriaLabel:"Street address",cityPlaceholder:"City",cityAriaLabel:"City",postalPlaceholder:"ZIP",postalAriaLabel:"ZIP code",postalInputMode:"numeric",postalMaxWidth:"6.25rem",postalFirst:!1,missingAddressError:"Street address, city, and ZIP are required",adminPlaceholder:"State",adminAriaLabel:"State",adminRequiredError:"State is required",adminMaxWidth:"5.5rem",adminOptions:["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY","DC"]},Vo={US:Ft,IE:{...Mt,addressPlaceholder:"Street address",addressAriaLabel:"Street address",cityPlaceholder:"Town or city",cityAriaLabel:"Town or city",postalPlaceholder:"Eircode",postalAriaLabel:"Eircode",missingAddressError:"Street address, town or city, and Eircode are required",adminPlaceholder:"County",adminAriaLabel:"County",adminRequiredError:"County is required"}},Oo=e=>{var t;return e==="US"?"United States":((t=W.find(r=>r.code===e))==null?void 0:t.name)??e};const zo=({onClose:e,onAddressSubmitted:t,onBack:r})=>{let n=T(s=>{var a;return((a=s==null?void 0:s.stripeSession)==null?void 0:a.context.kycRegion)??"us"}),i=T(s=>{var a,l;return((l=(a=s==null?void 0:s.stripeSession)==null?void 0:a.context.kycAddress)==null?void 0:l.country)??""});return o.jsx(Ko,{onClose:e,onAddressSubmitted:t,onBack:r,region:n,country:n==="eu"?i:"US"})},Ko=({onClose:e,onAddressSubmitted:t,onBack:r,region:n,country:i})=>{var E;let s=n==="eu",[a,l]=S.useState(""),[d,c]=S.useState(""),[u,h]=S.useState(""),[y,x]=S.useState(""),[b,g]=S.useState(null),[v,_]=S.useState(!1),m=((w,F)=>w!=="eu"?Ft:(F?Vo[F]:null)??Mt)(n,i),I=!!m.adminPlaceholder,p=()=>{a.trim()&&d.trim()&&y.trim()?i?!I||u.trim()?(_(!0),t==null||t({addressLine1:a.trim(),city:d.trim(),state:u.trim(),postalCode:y.trim(),country:i})):g(m.adminRequiredError??"State is required"):g("Country is required"):g(m.missingAddressError)};return o.jsx(N,{showClose:!0,onClose:e,showBack:!!r,onBack:r??void 0,icon:vt,title:"Add address",subtitle:"Enter your residential address as it appears on your government-issued ID.",primaryCta:{label:"Continue",onClick:p,loading:v},watermark:!0,children:o.jsxs(H,{children:[o.jsx(M,{placeholder:m.addressPlaceholder,value:a,onChange:w=>{l(w.target.value),g(null)},onKeyDown:w=>w.key==="Enter"&&p(),$hasError:!!b&&!a.trim(),autoFocus:!0,"aria-label":m.addressAriaLabel,autoComplete:"address-line1"}),s?o.jsxs(o.Fragment,{children:[o.jsxs(Ce,{children:[m.postalFirst&&o.jsx(M,{placeholder:m.postalPlaceholder,value:y,onChange:w=>{x(w.target.value),g(null)},onKeyDown:w=>w.key==="Enter"&&p(),$hasError:!!b&&!y.trim(),style:{maxWidth:m.postalMaxWidth},"aria-label":m.postalAriaLabel,autoComplete:"postal-code",inputMode:m.postalInputMode}),o.jsx(M,{placeholder:m.cityPlaceholder,value:d,onChange:w=>{c(w.target.value),g(null)},$hasError:!!b&&!d.trim(),"aria-label":m.cityAriaLabel,autoComplete:"address-level2"}),!m.postalFirst&&o.jsx(M,{placeholder:m.postalPlaceholder,value:y,onChange:w=>{x(w.target.value),g(null)},onKeyDown:w=>w.key==="Enter"&&p(),$hasError:!!b&&!y.trim(),style:{maxWidth:m.postalMaxWidth},"aria-label":m.postalAriaLabel,autoComplete:"postal-code",inputMode:m.postalInputMode})]}),o.jsxs(Ce,{children:[m.adminPlaceholder&&o.jsx(M,{placeholder:m.adminPlaceholder,value:u,onChange:w=>{h(w.target.value),g(null)},$hasError:!!b&&!u.trim(),"aria-label":m.adminAriaLabel??m.adminPlaceholder,autoComplete:"address-level1"}),o.jsx(M,{value:Oo(i),readOnly:!0,$hasError:!1,style:{opacity:.7},"aria-label":"Country",autoComplete:"country-name",tabIndex:-1})]})]}):o.jsxs(Ce,{children:[o.jsx(M,{placeholder:m.cityPlaceholder,value:d,onChange:w=>{c(w.target.value),g(null)},$hasError:!!b&&!d.trim(),"aria-label":m.cityAriaLabel,autoComplete:"address-level2"}),o.jsxs(He,{value:u,onChange:w=>{h(w.target.value),g(null)},$hasError:!!b&&!u,style:{maxWidth:m.adminMaxWidth},"aria-label":m.adminAriaLabel,autoComplete:"address-level1",children:[o.jsx("option",{value:"",disabled:!0,children:m.adminPlaceholder}),(E=m.adminOptions)==null?void 0:E.map(w=>o.jsx("option",{value:w,children:w},w))]}),o.jsx(M,{placeholder:m.postalPlaceholder,value:y,onChange:w=>{x(w.target.value),g(null)},onKeyDown:w=>w.key==="Enter"&&p(),$hasError:!!b&&!y.trim(),style:{maxWidth:m.postalMaxWidth},"aria-label":m.postalAriaLabel,autoComplete:"postal-code",inputMode:m.postalInputMode})]}),b&&o.jsx(z,{children:b})]})})},Wo=({onClose:e,onSubmit:t})=>{let[r,n]=S.useState(""),[i,s]=S.useState(""),[a,l]=S.useState(null),d=()=>{r.trim()?i?t({city:r.trim(),country:i}):l("Birth country is required"):l("Birth city is required")};return o.jsx(N,{showClose:!0,onClose:e,icon:vt,title:"Place of birth",subtitle:"Enter your city and country of birth.",primaryCta:{label:"Continue",onClick:d},watermark:!0,children:o.jsxs(H,{children:[o.jsx(M,{placeholder:"City of birth",value:r,onChange:c=>{n(c.target.value),l(null)},onKeyDown:c=>c.key==="Enter"&&d(),$hasError:!!a&&!r.trim(),autoFocus:!0,"aria-label":"City of birth",autoComplete:"off"}),o.jsxs(He,{value:i,onChange:c=>{s(c.target.value),l(null)},$hasError:!!a&&!i,"aria-label":"Country of birth",autoComplete:"country",children:[o.jsx("option",{value:"",disabled:!0,children:"Select birth country"}),W.map(c=>o.jsx("option",{value:c.code,children:c.name},c.code))]}),a&&o.jsx(z,{children:a})]})})},Yo=({onClose:e,onSubmit:t})=>{let[r,n]=S.useState(""),[i,s]=S.useState(null);return o.jsx(N,{showClose:!0,onClose:e,icon:xt,title:"Country of residence",subtitle:"Select your country of residence. This determines your verification requirements.",primaryCta:{label:"Continue",onClick:()=>{r?t(r):s("Please select your country of residence")}},watermark:!0,children:o.jsxs(H,{children:[o.jsxs(He,{value:r,onChange:a=>{n(a.target.value),s(null)},$hasError:!!i,"aria-label":"Country of residence",autoComplete:"country",children:[o.jsx("option",{value:"",disabled:!0,children:"Select country"}),W.map(a=>o.jsx("option",{value:a.code,children:a.name},a.code))]}),i&&o.jsx(z,{children:i})]})})},Ho=({onClose:e,onDobSubmitted:t,region:r="us"})=>{let[n,i]=S.useState(""),[s,a]=S.useState(null),l=r==="eu",d=()=>{let c=n.replace(/\D/g,""),u=Number.parseInt(c.slice(0,2),10),h=Number.parseInt(c.slice(2,4),10),y=Number.parseInt(c.slice(4,8),10),x=l?u:h,b=l?h:u,g=new Date(y,b-1,x),v=new Date,_=new Date(v.getFullYear()-18,v.getMonth(),v.getDate());c.length!==8||g.getFullYear()!==y||g.getMonth()!==b-1||g.getDate()!==x||y<1900||g>_?a("Enter a valid date of birth"):t==null||t({day:x,month:b,year:y})};return o.jsx(N,{showClose:!0,onClose:e,icon:Cr,title:"Add date of birth",subtitle:"You must be at least 18 years old.",primaryCta:{label:"Continue",onClick:d},watermark:!0,children:o.jsxs(H,{children:[o.jsx(M,{placeholder:l?"DD/MM/YYYY":"MM/DD/YYYY",value:n,onChange:c=>{i((u=>{let h=u.replace(/\D/g,"").slice(0,8);return[h.slice(0,2),h.slice(2,4),h.slice(4,8)].filter(Boolean).join("/")})(c.target.value)),a(null)},onKeyDown:c=>c.key==="Enter"&&d(),$hasError:!!s,inputMode:"numeric",maxLength:10,autoFocus:!0}),s&&o.jsx(z,{children:s})]})})},Qo=({onClose:e,onSubmit:t,isSandbox:r})=>{let n=T(a=>{var l;return(l=a==null?void 0:a.stripeSession)==null?void 0:l.context.kycMissingIdentifiers}),i=T(a=>{var l;return(l=a==null?void 0:a.stripeSession)==null?void 0:l.context.kycMissingAlternatives}),s=T(a=>{var l;return(l=a==null?void 0:a.stripeSession)==null?void 0:l.context.kycInvalidIdentifiers});return o.jsx(Zo,{onClose:e,onSubmit:t,isSandbox:r,missingMica:n,alternatives:i,invalidIdentifiers:s})},Zo=({onClose:e,onSubmit:t,isSandbox:r,missingMica:n,alternatives:i,invalidIdentifiers:s})=>{let[a,l]=S.useState({}),[d,c]=S.useState({}),[u,h]=S.useState(null),[y,x]=S.useState(null),[b,g]=S.useState(null),v=m=>(r?Le[m]:void 0)??a[m]??"",_=m=>{let I=v(m);return r||b===m?I:I.replace(/[^\s/-]/g,"•")};return o.jsx(N,{showClose:!0,onClose:e,icon:kr,title:"Identity verification",subtitle:"Provide your national identity numbers.",primaryCta:{label:"Continue",onClick:()=>{let m=[];for(let p of n??[]){let E=(i??[]).find(F=>F.original_missing_identifiers.includes(p.type))&&d[p.type]||p.type,w=v(E).trim();if(!w)return x(E),void h(`Please provide your ${ee[E]??E}`);m.push({type:E,value:w})}let I=m.find(p=>!(({type:E,value:w})=>{let F=jr[E];return!F||F(w)})(p));if(I)return x(I.type),void h(`Enter a valid ${ee[I.type]??I.type}`);t(m)}},watermark:!0,isSandbox:r,children:o.jsxs(H,{children:[(n??[]).map(m=>{let I=(i??[]).find(p=>p.original_missing_identifiers.includes(m.type));if(I){let p=d[m.type]||m.type;return o.jsxs(Ce,{children:[o.jsx("select",{value:p,onChange:E=>{c(w=>({...w,[m.type]:E.target.value})),g(null),h(null),x(null)},style:{flex:"0 0 auto",padding:"6px"},children:[m.type,...I.alternative_missing_identifiers].map(E=>o.jsx("option",{value:E,children:ee[E]??E},E))}),o.jsx(M,{placeholder:ee[p]??p,value:_(p),onChange:E=>{l(w=>({...w,[p]:E.target.value})),h(null),x(null)},onFocus:()=>g(p),onBlur:()=>g(null),readOnly:r&&!!Le[p],$hasError:y===p||((s==null?void 0:s.includes(p))??!1)})]},m.type)}return o.jsx(M,{placeholder:ee[m.type]??m.type,value:_(m.type),onChange:p=>{l(E=>({...E,[m.type]:p.target.value})),h(null),x(null)},onFocus:()=>g(m.type),onBlur:()=>g(null),readOnly:r&&!!Le[m.type],$hasError:y===m.type||((s==null?void 0:s.includes(m.type))??!1)},m.type)}),u&&o.jsx(z,{children:u}),s&&s.length>0&&o.jsxs(z,{children:["Invalid format for:"," ",s.map(m=>ee[m]??m).join(", ")]})]})})},Xo=({onClose:e,onNameSubmitted:t,isSandbox:r})=>{let[n,i]=S.useState(""),[s,a]=S.useState(r?"Verified":""),[l,d]=S.useState(null),c=()=>{n.trim()&&s.trim()?t==null||t({firstName:n.trim(),lastName:s.trim()}):d("First and last name are required")};return o.jsx(N,{showClose:!0,onClose:e,icon:_r,title:"Add name",subtitle:"Please enter your full legal name as it appears on your government-issued ID.",primaryCta:{label:"Continue",onClick:c},watermark:!0,isSandbox:r,children:o.jsxs(H,{children:[o.jsx(M,{placeholder:"First name",value:n,onChange:u=>{i(u.target.value),d(null)},onKeyDown:u=>u.key==="Enter"&&c(),$hasError:!!l&&!n.trim(),autoFocus:!0}),o.jsx(M,{placeholder:"Last name",value:s,onChange:u=>{a(u.target.value),d(null)},onKeyDown:u=>u.key==="Enter"&&c(),$hasError:!!l&&!s.trim(),readOnly:r}),l&&o.jsx(z,{children:l})]})})},Go=({onClose:e,onSubmit:t})=>{let[r,n]=S.useState([]),[i,s]=S.useState(""),[a,l]=S.useState(null),d=S.useRef(!1),c=W.filter(v=>!r.includes(v.code)),u=r.map(v=>W.find(_=>_.code===v)).filter(v=>!!v),h=v=>{let _=v.trim().toLowerCase();return W.find(m=>m.code.toLowerCase()===_||m.name.toLowerCase()===_)},y=v=>{let _=v.trim().toLowerCase();return _?W.filter(m=>m.code.toLowerCase().includes(_)||m.name.toLowerCase().includes(_)):W},x=y(i),b=x.map(v=>v.name),g=v=>{let _=y(v),m=h(v)??(_.length===1?_[0]:void 0);m&&(n(I=>I.includes(m.code)?I:[...I,m.code]),s(""),l(null))};return o.jsx(N,{showClose:!0,onClose:e,icon:xt,title:"Nationality",subtitle:"Select your nationality or nationalities.",primaryCta:{label:"Continue",onClick:()=>{let v=h(i),_=v&&!r.includes(v.code)?[...r,v.code]:r;_.length?t(_):l("Please select at least one nationality")}},watermark:!0,children:o.jsxs(H,{children:[o.jsxs(_o,{items:b,value:null,inputValue:i,onInputValueChange:v=>{d.current&&(d.current=!1,h(v))||s(v)},onValueChange:v=>(_=>{_&&(d.current=!0,g(_))})(typeof v=="string"?v:null),children:[o.jsxs(wo,{children:[o.jsx(Me,{$hasError:!!a,"aria-label":"Nationality",autoComplete:"country",disabled:!c.length,placeholder:r.length?"Add another nationality":"Search nationality",onKeyDown:v=>{v.key==="Enter"&&(v.preventDefault(),g(v.currentTarget.value))}}),o.jsx(ko,{"aria-hidden":"true",children:o.jsx(vr,{size:18})})]}),o.jsx(So,{children:o.jsx(Eo,{side:"bottom",sideOffset:4,collisionAvoidance:{side:"none",align:"shift",fallbackAxisSide:"none"},children:o.jsx(jo,{children:o.jsx(Ao,{children:v=>{let _=x.find(m=>m.name===v);return _?o.jsxs(Io,{value:_.name,children:[o.jsx("span",{children:_.name}),o.jsx(Po,{children:r.includes(_.code)?o.jsx(gt,{size:16}):_.code})]},_.code):null}})})})})]}),!!u.length&&o.jsx(Lo,{"aria-label":"Selected nationalities",children:u.map(v=>o.jsx(To,{children:o.jsxs(Ro,{type:"button",onClick:()=>(_=>{n(m=>m.filter(I=>I!==_)),l(null)})(v.code),"aria-label":`Remove ${v.name}`,size:"sm",children:[o.jsx("span",{children:v.name}),o.jsx(xr,{size:14})]})},v.code))}),a&&o.jsx(z,{children:a})]})})},Jo=({onClose:e,onPhoneSubmitted:t,onPhoneBack:r,defaultCountry:n})=>{let i=S.useRef(null),[s,a]=S.useState(!1),[l,d]=S.useState(!1);return o.jsx(N,{showClose:!0,onClose:e,showBack:!!r,onBack:r??void 0,icon:o.jsx(We,{height:24}),iconVariant:"logo",title:"Add phone number",subtitle:"Enter your phone number to continue with Link.",primaryCta:{label:"Submit",onClick:()=>{var c;(c=i.current)!=null&&c.isValid&&(d(!0),t==null||t(Xe(i.current.qualifiedPhoneNumber)))},disabled:!s,loading:l},watermark:!0,children:o.jsx(ur,{stacked:!0,noIncludeSubmitButton:!0,hideRecent:!0,defaultCountry:n,onChange:c=>{i.current=c,a(c.isValid)},onSubmit:async c=>{d(!0),t==null||t(Xe(c.qualifiedPhoneNumber))}})})},en=({onClose:e,onSsnSubmitted:t,appName:r,isSandbox:n})=>{let[i,s]=S.useState(n?"000-00-0000":""),[a,l]=S.useState(null),[d,c]=S.useState(!0),u=()=>{let h=i.replace(/\D/g,"");h.length===9?t==null||t(h):l("Enter your full 9-digit SSN")};return o.jsx(N,{showClose:!0,onClose:e,icon:br,title:"Add social security number",subtitle:`Required to verify your identity. ${r} will not store your SSN.`,primaryCta:{label:"Continue",onClick:u},watermark:!0,isSandbox:n,children:o.jsxs(H,{children:[o.jsx(M,{placeholder:"XXX-XX-XXXX",value:n||d?i:i.replace(/\d/g,"•"),onChange:h=>{s((y=>{let x=y.replace(/\D/g,"").slice(0,9);return[x.slice(0,3),x.slice(3,5),x.slice(5,9)].filter(Boolean).join("-")})(h.target.value)),l(null)},onFocus:()=>c(!0),onBlur:()=>c(!1),onKeyDown:h=>h.key==="Enter"&&u(),$hasError:!!a,type:"text",inputMode:"numeric",autoComplete:"off",maxLength:11,readOnly:n,autoFocus:!0}),a&&o.jsx(z,{children:a})]})})},tn=({onClose:e,amount:t,appName:r,currencySymbol:n,paymentMethodLabel:i,fee:s,destinationAmount:a,destinationToken:l,destinationNetwork:d,tokenIconUrl:c,networkIconUrl:u,opts:h,onConfirmCheckout:y,quoteExpiresAt:x,onRefreshQuote:b,initialLoading:g=!1})=>{let[v,_]=S.useState(g),[m,I]=S.useState(!1),p=S.useRef(null);S.useEffect(()=>{if(!x||!b)return;let F=Math.max(x-Date.now()-1e4,0);return p.current=setTimeout(()=>{I(!0),b().finally(()=>I(!1))},F),()=>{p.current&&clearTimeout(p.current)}},[x,b]);let E=(h==null?void 0:h.destination.address)??"",w=Jt(E,4,4);return o.jsx(N,{showClose:!0,onClose:e,title:"Approve transaction",subtitle:`${r} wants your permission for this transaction.`,primaryCta:{label:"Approve",onClick:()=>{p.current&&clearTimeout(p.current),_(!0),y==null||y()},loading:v,disabled:m},watermark:!0,isSandbox:(h==null?void 0:h.environment)==="sandbox",children:o.jsxs($o,{children:[c||u?o.jsxs(No,{children:[o.jsxs(Mo,{children:[c&&o.jsx(Fo,{src:c,alt:l}),u&&o.jsx(Do,{src:u,alt:d})]}),o.jsxs(nt,{children:[o.jsx(it,{children:"You receive"}),o.jsxs(st,{children:[a," ",l," on ",d]})]})]}):o.jsxs(nt,{children:[o.jsx(it,{children:"You receive"}),o.jsxs(st,{children:[a," ",l," on ",d]})]}),o.jsxs(qo,{children:[o.jsxs(le,{children:[o.jsx(ce,{children:"Total amount"}),o.jsxs(be,{children:[n,t]})]}),i&&o.jsxs(le,{children:[o.jsx(ce,{children:"From"}),o.jsx(be,{children:i})]}),o.jsxs(le,{children:[o.jsx(ce,{children:"To"}),o.jsx(pr,{iconOnly:!0,value:E,iconSize:16,children:w})]}),o.jsxs(le,{children:[o.jsx(ce,{children:"Estimated fee"}),o.jsx(be,{children:s})]}),o.jsxs(le,{children:[o.jsx(ce,{children:"Processing time"}),o.jsx(be,{children:"Instant"})]})]})]})})},rn=({onClose:e})=>{let t=S.useRef(!1),[r,n]=S.useState(null),i=T(s=>{var a;return((a=s==null?void 0:s.opts)==null?void 0:a.environment)==="sandbox"});return S.useEffect(()=>{t.current||(t.current=!0,(async()=>{let s=j().onramp;try{if(!s.promptUserAttestation)throw Error("Stripe onramp promptUserAttestation is unavailable");return await s.promptUserAttestation("eu_carf",({result:a})=>{if(k()&&a==="confirmed"){let l=j(),d=[...l.context.kycProvidedFields??[],"attestation"];f({stripeSession:{...l,context:{...l.context,kycProvidedFields:d}}}),U(ie("eu-attestation"))}})}catch(a){return R(a),null}})().then(s=>{s&&n(s)}))},[]),r?o.jsxs(o.Fragment,{children:[i?o.jsx(Ye,{}):null,o.jsx(ze,{element:r,minHeight:480})]}):o.jsx(N,{showClose:!0,onClose:e,iconVariant:"loading",title:"Loading attestation...",watermark:!0})},Qe=({size:e=64,...t})=>o.jsxs("svg",{width:e,height:e,viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:[o.jsx("path",{d:"M32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64Z",fill:"#00D66F"}),o.jsx("path",{d:"M30.5274 12.8003H20.6587C22.5787 20.8259 28.1851 27.6867 35.1995 32.0003C28.1723 36.3139 22.5787 43.1747 20.6587 51.2003H30.5274C32.9722 43.7763 39.7435 37.3251 48.0634 36.0067V27.9811C39.7307 26.6755 32.9594 20.2243 30.5274 12.8003Z",fill:"#011E0F"})]}),at=({mode:e,onClose:t,onLinkAccountConfirmed:r,onLinkAccountBack:n,userEmail:i})=>{let s=ke(),a=(s==null?void 0:s.name)??"This app",l=e==="connect"?{title:"Connect to Link",subtitle:`${a} uses Link for quicker and easier checkout.`,description:`${a} will be able to view your Link account details, identity information, and saved payments.`,cta:"Continue"}:{title:"Create a Link account",subtitle:"With Link, you can securely save your information for faster checkout.",description:null,cta:"Continue"};return o.jsx(N,{showClose:!0,onClose:t,showBack:!!n,onBack:n??void 0,icon:o.jsx(Qe,{size:64}),iconVariant:"logo",title:l.title,subtitle:l.subtitle,primaryCta:{label:l.cta,onClick:()=>r==null?void 0:r()},helpText:l.description??void 0,watermark:!0,children:e==="create"&&i&&o.jsx(Bo,{children:i})})},on=({onClose:e,tokens:t,onSelectToken:r,onAddNew:n,isLoading:i})=>{var l;let[s,a]=S.useState(((l=t[0])==null?void 0:l.id)??null);return o.jsx(N,{showClose:!0,onClose:e,icon:o.jsx(We,{height:24}),iconVariant:"logo",title:"Select payment method",subtitle:"Choose from your saved cards. Debit cards typically have higher success rates than credit cards.",primaryCta:{label:"Continue",onClick:()=>{let d=t.find(c=>c.id===s);d&&r(d)},loading:i,disabled:!s},watermark:!0,children:o.jsx(sn,{children:o.jsxs(an,{children:[t.map(d=>{var c,u,h;return o.jsxs(ln,{$selected:s===d.id,onClick:()=>a(d.id),disabled:i,children:[o.jsx(cn,{children:o.jsx(ye,{size:16})}),o.jsxs(dn,{children:[o.jsx(un,{children:nn((c=d.card)==null?void 0:c.brand,(u=d.card)==null?void 0:u.funding)}),o.jsxs(pn,{children:[o.jsx(mn,{children:"••••"})," ",((h=d.card)==null?void 0:h.last4)??""]})]})]},d.id)}),o.jsxs(hn,{onClick:n,disabled:i,children:[o.jsx(gr,{size:14}),o.jsx("span",{children:"Add new card"})]})]})})})};let nn=(e,t)=>{if(!e)return"Card";let r=e.charAt(0).toUpperCase()+e.slice(1);return t?`${r} ${t.charAt(0).toUpperCase()}${t.slice(1)}`:r},sn=C.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`,an=C.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`,ln=C.button`
  && {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    width: 100%;
    padding: 0.75rem;
    background: ${e=>e.$selected?"var(--privy-color-background-2)":"transparent"};
    border: ${e=>e.$selected?"1.5px solid var(--privy-color-accent)":"1px solid var(--privy-color-foreground-4)"};
    border-radius: var(--privy-border-radius-md, 0.5rem);
    cursor: pointer;
    transition: border-color 0.15s ease;
    /* stylelint-disable-next-line declaration-property-value-disallowed-list -- Stripe Elements'
       own card shadow, rgb(50 50 93) being their brand navy; this row is meant to match Stripe's
       hosted UI rather than Privy's elevation scale */
    box-shadow: ${e=>e.$selected?"0px 2px 6px rgba(50, 50, 93, 0.06), 0px 1px 1.5px rgba(0, 0, 0, 0.06)":"none"};
    outline: none;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,cn=C.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1rem;
  flex-shrink: 0;
  color: var(--privy-color-foreground-3);
`,dn=C.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  min-width: 0;
`,un=C.span`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.125rem;
  color: var(--privy-color-foreground);
  letter-spacing: -0.15px;
`,pn=C.span`
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1rem;
  color: var(--privy-color-foreground-3);
`,mn=C.span`
  font-weight: 500;
`,hn=C.button`
  && {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
    padding: 1rem;
    background: none;
    border: none;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.25rem;
    color: var(--privy-color-accent);
    cursor: pointer;
  }

  &:focus,
  &:focus-visible {
    outline: none;
  }

  &:hover:not(:disabled) {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;const yn=({element:e,isSandbox:t})=>o.jsxs(o.Fragment,{children:[t&&o.jsx(Ye,{children:"You're in a sandbox environment. Use 000-000 as the Link verification code."}),o.jsx(ze,{element:e,minHeight:300,bleed:!0})]}),fn=({onClose:e,onVerified:t})=>{let r=S.useRef(!1),[n,i]=S.useState(!1),s=S.useCallback(async()=>{i(!1);let a=await(async(l={})=>{var c;let d=j();try{let u=await d.onramp.verifyDocuments();if(!k())return"inactive";if((u==null?void 0:u.result)==="abandoned")return"abandoned";U("kyc");let h=await qe({operation:()=>Z(d.privy,{environment:d.context.config.environment}),until:y=>{var b;if(y.status!=="active")return!1;let x=(b=y.kyc_tiers)==null?void 0:b.find(g=>g.tier==="l2");return(x==null?void 0:x.verification_status)==="verified"},delay:0,interval:At,attempts:Math.ceil(30),signal:se()});if(!k()||h.status==="aborted")return"inactive";if(h.status==="max_attempts"){let y=await Z(d.privy,{environment:d.context.config.environment});if(y.status==="active"){let x=(c=y.kyc_tiers)==null?void 0:c.find(b=>b.tier==="l2");if((x==null?void 0:x.verification_status)==="rejected")throw _t(y.kyc_tiers)?Error("Document verification was rejected. Contact Stripe support for help."):Error("Document verification was rejected. Try again.")}}return(l.proceedToPayment??!0)&&await X(),"done"}catch(u){return R(u),"error"}})({proceedToPayment:!t});a==="abandoned"&&i(!0),a==="done"&&(t==null||t())},[t]);return S.useEffect(()=>{r.current||(r.current=!0,s())},[s]),o.jsx(N,n?{showClose:!0,onClose:e,icon:ft,iconVariant:"error",title:"Verification canceled",subtitle:"Try again to finish identity verification.",primaryCta:{label:"Try again",onClick:s},watermark:!0}:{showClose:!0,onClose:e,iconVariant:"loading",title:"Verifying identity",subtitle:"Please complete document and selfie verification...",watermark:!0})};let gn=[];const vn=({step:e,element:t,onClose:r,isLoading:n})=>{var I;let i=ke(),s=(i==null?void 0:i.name)??"This app",a=T(p=>(p==null?void 0:p.email)??null),l=T(p=>(p==null?void 0:p.amount)??""),d=T(p=>(p==null?void 0:p.opts)??null),c=T(p=>(p==null?void 0:p.stripeConfirmCheckoutDetails)??null),u=T(p=>(p==null?void 0:p.destinationCurrencyIconUrl)??null),h=T(p=>(p==null?void 0:p.destinationNetworkIconUrl)??null),y=T(p=>(p==null?void 0:p.destinationCurrencySymbol)??null),x=T(p=>{var E,w;return(w=(E=p==null?void 0:p.stripeSession)==null?void 0:E.context.kycAddress)==null?void 0:w.country}),b=T(p=>{var E;return(E=p==null?void 0:p.stripeSession)==null?void 0:E.context.savedPaymentTokens})??gn,g=T(p=>{var E;return(E=p==null?void 0:p.stripeSession)==null?void 0:E.context.documentVerificationAction}),v=T(p=>{var E;return((E=p==null?void 0:p.stripeSession)==null?void 0:E.context.kycRegion)??"us"}),_=()=>{De(),f({state:{status:"select-amount"},isLoading:!1})},m=g?()=>{let p=j();if((()=>{let w=j(),{documentVerificationAction:F,...fe}=w.context;f({stripeSession:{...w,context:fe}})})(),g.type==="retry-checkout")return void rt();let E=p.context.paymentToken;E&&Oe({paymentToken:E,loader:g.loader})}:void 0;switch(e){case"choose-email":return o.jsx(Uo,{onClose:r,onEmailChosen:io,onEmailBack:_,userEmail:a});case"connect-link":return o.jsx(at,{mode:"connect",onClose:r,onLinkAccountConfirmed:()=>{Ne("connect")},onLinkAccountBack:_,userEmail:a});case"create-link-account":return o.jsx(at,{mode:"create",onClose:r,onLinkAccountConfirmed:()=>{Ne("create")},onLinkAccountBack:_,userEmail:a});case"collect-country":return o.jsx(Yo,{onClose:r,onSubmit:no});case"collect-contact":return o.jsx(Jo,{onClose:r,onPhoneSubmitted:xo,onPhoneBack:_,defaultCountry:x});case"collect-name":return o.jsx(Xo,{onClose:r,onNameSubmitted:yo,isSandbox:(d==null?void 0:d.environment)==="sandbox"});case"collect-dob":return o.jsx(Ho,{onClose:r,onDobSubmitted:ho,region:v});case"collect-ssn":return o.jsx(en,{onClose:r,onSsnSubmitted:fo,appName:s,isSandbox:(d==null?void 0:d.environment)==="sandbox"});case"collect-address":return o.jsx(zo,{onClose:r,onAddressSubmitted:mo,onBack:_});case"collect-nationality":return o.jsx(Go,{onClose:r,onSubmit:go});case"collect-birth-location":return o.jsx(Wo,{onClose:r,onSubmit:Jr});case"collect-identifiers":return o.jsx(Qo,{onClose:r,onSubmit:so,isSandbox:(d==null?void 0:d.environment)==="sandbox"});case"eu-attestation":return o.jsx(rn,{onClose:r});case"verify-documents":return o.jsx(fn,{onClose:r,onVerified:m});case"authenticating":return o.jsx(yn,{element:t,isSandbox:(d==null?void 0:d.environment)==="sandbox"});case"kyc":return o.jsx(N,{showClose:!0,onClose:r,iconVariant:"loading",title:"Verifying identity",subtitle:"This may take a moment...",watermark:!0,isSandbox:(d==null?void 0:d.environment)==="sandbox"});case"select-payment":return o.jsx(on,{onClose:r,tokens:b,onSelectToken:vo,onAddNew:()=>{X({skipTokenCheck:!0})},isLoading:n});case"payment":return o.jsx(N,{showClose:!0,onClose:r,showBack:!0,onBack:_,headerTitle:"Add payment method",subtitle:"Use a Visa or Mastercard. American Express and Discover are not supported.",watermark:!0,isSandbox:(d==null?void 0:d.environment)==="sandbox",children:o.jsx(ze,{element:t,minHeight:300})});case"confirm-checkout":return o.jsx(tn,{onClose:r,amount:(c==null?void 0:c.sourceAmount)??l,appName:s,currencySymbol:(c==null?void 0:c.currencySymbol)??"$",paymentMethodLabel:(c==null?void 0:c.paymentMethodLabel)??null,fee:(c==null?void 0:c.fee)??"Included",destinationAmount:(c==null?void 0:c.destinationAmount)??l,destinationToken:(c==null?void 0:c.destinationToken)??y??((I=d==null?void 0:d.destination.asset)==null?void 0:I.toUpperCase())??"",destinationNetwork:(c==null?void 0:c.destinationNetwork)??"",tokenIconUrl:u,networkIconUrl:h,opts:d,onConfirmCheckout:rt,quoteExpiresAt:(c==null?void 0:c.quoteExpiresAt)??null,onRefreshQuote:bo});case"checkout":return o.jsx(N,{showClose:!0,onClose:r,iconVariant:"loading",watermark:!0,isSandbox:(d==null?void 0:d.environment)==="sandbox"});default:return null}},xn=({onClose:e,onChooseAnotherMethod:t})=>o.jsx(re,{showClose:!0,onClose:e,iconVariant:"loading",title:"Processing transaction",subtitle:t?"If you didn’t finish your purchase, you can choose another method.":"Your purchase is in progress. You can leave this screen — we’ll notify you when it’s complete.",primaryCta:{label:"Done",onClick:e},secondaryCta:t?{label:"Choose another method",onClick:t}:void 0,watermark:!0});let Fe={title:"Something went wrong",subtitle:"We couldn't complete your transaction. Please try again.",primaryCtaLabel:"Try again"},lt={[q.ONRAMP_UNSUPPORTED_INFORMATION]:{...Fe,subtitle:"This payment method is not available in your region. Try another payment method."},[q.ONRAMP_TRANSACTION_LIMIT_REACHED]:{title:"Purchase limit reached",subtitle:"This purchase is above the current limit. Try a smaller amount.",primaryCtaLabel:"Edit amount"}};const bn=e=>{let t=Ue(e);return t===q.ONRAMP_PAYMENT_METHOD_DECLINED?{title:"Payment method declined",subtitle:(e==null?void 0:e.message)||de,primaryCtaLabel:"Try another card"}:t&&lt[t]?lt[t]:e!=null&&e.message?{...Fe,subtitle:e.message}:Fe},Cn=({onClose:e,onRetry:t,onEditAmount:r,onChooseAnotherMethod:n,error:i})=>{let s=bn(i),a=Ue(i)===q.ONRAMP_TRANSACTION_LIMIT_REACHED;return o.jsx(re,{showClose:!0,onClose:e,icon:ft,iconVariant:"error",title:s.title,subtitle:s.subtitle,primaryCta:{label:s.primaryCtaLabel,onClick:a?r:t},secondaryCta:n?{label:"Choose another method",onClick:n}:{label:"Close",onClick:e},watermark:!0})},_n=({onClose:e})=>o.jsx(re,{showClose:!0,onClose:e,icon:gt,iconVariant:"success",title:"Transaction confirmed",subtitle:"Your purchase is processing. Funds should arrive in your wallet within a few minutes.",primaryCta:{label:"Done",onClick:e},watermark:!0});let wn={CREDIT_DEBIT_CARD:"card",APPLE_PAY:"Apple Pay",GOOGLE_PAY:"Google Pay",BANK:"bank deposit",BANK_TRANSFER:"bank deposit",SEPA:"bank deposit",PIX:"PIX",STRIPE_LINK:"Link"},kn=e=>wn[e]??e.replace(/_/g," ").toLowerCase().replace(/^\w/,t=>t.toUpperCase()),Sn={CREDIT_DEBIT_CARD:o.jsx(ye,{size:14}),APPLE_PAY:o.jsx(Ge,{size:14}),GOOGLE_PAY:o.jsx(Ge,{size:14}),BANK:o.jsx(Ie,{size:14}),BANK_TRANSFER:o.jsx(Ie,{size:14}),SEPA:o.jsx(Ie,{size:14}),PIX:o.jsx(wr,{size:14}),STRIPE_LINK:o.jsx(Qe,{size:14})},En=e=>Sn[e]??o.jsx(ye,{size:14});const jn=({opts:e,onClose:t,onBack:r,onEditSourceAsset:n,onEditPaymentMethod:i,onContinue:s,onAmountChange:a,amount:l,selectedQuote:d,quotesWarning:c,quotesErrors:u,quotesCount:h,isLoading:y,destinationCurrencySymbol:x})=>{var v;let b=ke().appearance.palette.colorScheme,g=(({destinationCurrencySymbol:_})=>_??"crypto")({destinationCurrencySymbol:x});return o.jsxs(re,{showClose:!0,onClose:t,showBack:!!r,onBack:r,headerTitle:`Buy ${g}`,primaryCta:{label:"Continue",onClick:s,loading:y,disabled:!(d&&parseFloat(l)>0)},helpText:c?o.jsx(ht,{theme:b,children:o.jsx(ct,{children:o.jsxs(o.Fragment,c==="amount_too_low"?{children:[o.jsx(dt,{children:"Amount too low"}),o.jsx(Te,{children:"Please choose a higher amount to continue."})]}:{children:[o.jsx(dt,{children:"Unable to get quotes"}),o.jsx(Te,{children:((v=u==null?void 0:u[0])==null?void 0:v.error)??"Something went wrong. Please try again."})]})})}):d&&h>1?o.jsxs(Pn,{onClick:i,children:[En(d.payment_method_category??d.payment_method),o.jsxs("span",{children:["Pay with"," ",kn(d.payment_method_category??d.payment_method)]}),o.jsx(fr,{size:14})]}):null,watermark:!0,children:[(d==null?void 0:d.warning)&&o.jsx(An,{theme:b,children:o.jsx(ct,{children:o.jsx(Te,{children:d.warning})})}),o.jsx(ar,{currency:e.source.selectedAsset,value:l,onChange:a,inputMode:"decimal",autoFocus:!0}),o.jsx(lr,{selectedAsset:e.source.selectedAsset,onEditSourceAsset:n})]})};let An=C(mr)`
  margin-bottom: 0.75rem;
`,ct=C.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  flex: 1;
  min-width: 0;
  font-size: 0.75rem;
  line-height: 1.125rem;
  color: var(--privy-color-foreground);
  font-feature-settings:
    'calt' 0,
    'kern' 0;
  text-align: left;
`,dt=C.span`
  font-weight: 600;
`,Te=C.span`
  font-weight: 400;
`,Pn=C.button`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  background: none;
  border: none;
  cursor: pointer;

  && {
    padding: 0;
    color: var(--privy-color-accent);
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.375rem;
  }
`,In={CREDIT_DEBIT_CARD:"Credit / debit card",APPLE_PAY:"Apple Pay",GOOGLE_PAY:"Google Pay",BANK:"Bank transfer",BANK_TRANSFER:"Bank transfer",SEPA:"SEPA",PIX:"PIX",STRIPE_LINK:"Link"},Ln=e=>In[e]??e.replace(/_/g," ").toLowerCase().replace(/^\w/,t=>t.toUpperCase()),Tn={CREDIT_DEBIT_CARD:o.jsx(ye,{size:20}),APPLE_PAY:o.jsx(yr,{width:20,height:20}),GOOGLE_PAY:o.jsx(hr,{width:20,height:20}),BANK:o.jsx(xe,{size:20}),BANK_TRANSFER:o.jsx(xe,{size:20}),SEPA:o.jsx(xe,{size:20}),PIX:o.jsx(xe,{size:20}),STRIPE_LINK:o.jsx(Qe,{size:20})},Rn=e=>Tn[e]??o.jsx(ye,{size:20});const $n=({onClose:e,onSelectPaymentMethod:t,quotes:r,isLoading:n})=>o.jsx(yt,{showClose:!0,onClose:e,title:"Select payment method",subtitle:"Choose how you'd like to pay",watermark:!0,children:o.jsx(Nn,{children:r.map((i,s)=>{let a=i.payment_method_category??i.payment_method;return o.jsx(Mn,{onClick:()=>t(i),disabled:n,children:o.jsxs(Fn,{children:[o.jsx(Dn,{children:Rn(a)}),o.jsx(qn,{children:o.jsx(Bn,{children:Ln(a)})})]})},`${i.provider}-${i.payment_method}-${s}`)})})});let Nn=C.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
`,Mn=C.button`
  border-color: var(--privy-color-border-default);
  border-width: 1px;
  border-radius: var(--privy-border-radius-md);
  border-style: solid;
  display: flex;

  && {
    padding: 1rem;
  }
`,Fn=C.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
`,Dn=C.div`
  color: var(--privy-color-foreground-3);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,qn=C.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.125rem;
  flex: 1;
`,Bn=C.span`
  color: var(--privy-color-foreground);
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.25rem;
`;const Un=({onClose:e,onBack:t,onContinue:r,onAmountChange:n,onSelectSource:i,onEditSourceAsset:s,onEditPaymentMethod:a,onSelectPaymentMethod:l,onRetry:d,onEditAmount:c,onChooseAnotherMethod:u,opts:h,state:y,amount:x,error:b,selectedQuote:g,quotesWarning:v,quotesErrors:_,destinationCurrencySymbol:m,quotesCount:I,isLoading:p,isInitialQuoteLoading:E,stripeElement:w})=>y.status==="select-amount"?E?o.jsx(yt,{showClose:!0,onClose:e,iconVariant:"loading"}):o.jsx(jn,{onClose:e,onBack:t,onContinue:r,onAmountChange:n,onEditSourceAsset:s,onEditPaymentMethod:a,opts:h,amount:x,selectedQuote:g,quotesWarning:v,quotesErrors:_,quotesCount:I,destinationCurrencySymbol:m,isLoading:p}):y.status==="select-source-asset"?o.jsx(sr,{onSelectSource:i,opts:h,isLoading:p}):y.status==="select-payment-method"?o.jsx($n,{onClose:e,onSelectPaymentMethod:l,quotes:y.quotes,isLoading:p}):y.status==="stripe-flow"?o.jsx(vn,{step:y.step,element:w,onClose:e,isLoading:p}):y.status==="provider-confirming"?o.jsx(xn,{onClose:e,onChooseAnotherMethod:y.checkoutClosed?u:void 0}):y.status==="provider-error"?o.jsx(Cn,{onClose:e,onRetry:d,onEditAmount:c,onChooseAnotherMethod:u,error:b}):y.status==="provider-success"?o.jsx(_n,{onClose:e}):null,ai={component:()=>{var _;let{onUserCloseViaDialogOrKeybindRef:e}=Wt(),t=T();if(!t)return null;let{opts:r,state:n,error:i,isLoading:s,amount:a,quotesWarning:l,quotesErrors:d,localQuotes:c,localSelectedQuote:u,initialQuotes:h,initialSelectedQuote:y,destinationCurrencySymbol:x,stripeElement:b,onBack:g}=t;e.current=Je;let v=!!g;return o.jsx(Un,{onClose:Je,onBack:g,opts:r,state:n,error:i,isLoading:s,isInitialQuoteLoading:h==null,amount:a,selectedQuote:Yt({localQuotes:c,localSelectedQuote:u,initialSelectedQuote:y}),quotesWarning:l,quotesErrors:d,quotesCount:((_=c??h)==null?void 0:_.length)??0,destinationCurrencySymbol:x,onAmountChange:Sr,onContinue:Lt,onSelectSource:Gr,onEditSourceAsset:Ur,onEditPaymentMethod:Br,onSelectPaymentMethod:Xr,onRetry:v?Zr:Re,onEditAmount:Re,onChooseAnotherMethod:v?Er:void 0,stripeElement:b})}};export{ai as FiatOnrampScreen,ai as default};
