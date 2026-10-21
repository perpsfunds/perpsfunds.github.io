import{r as u,j as r,m as re,n as oe,o as ae}from"./vendor-react-DwYkqiWc.js";import{b0 as te,b1 as Q,b2 as ie,ba as ne,bm as G,bK as y,bf as g,bL as se,bn as le,b6 as C}from"./privyHost-CH6knk-3.js";import{o as ce}from"./Layouts-BMRfo5hw-pKQ_Kvj1.js";import{i as de}from"./Link-BdDilT2T-DeLluvva.js";import{a as ue}from"./shouldProceedtoEmbeddedWalletCreationFlow-u-KXjlTz-BnrDSiih.js";import{n as pe}from"./ScreenLayout-CyLnlt7g-CMyKcbip.js";import"./index-CB7aWwWj.js";import"./vendor-ethers-CXIjk7po.js";import"./preload-helper-C1FmrZbK.js";import"./vendor-icons-CtVdYIJS.js";import"./stringify-CWCc6FId.js";import"./formatUnits-Bw92Dgu5.js";import"./index-BTMnaXL8.js";import"./hashTypedData-0xOt8d5G.js";import"./ModalFooter-DDm8WjC0-C8sfrXrU.js";import"./Screen-BWBDKsup-BAbhf7CY.js";import"./index-CWARkn2w-qsxC9WJ_.js";const me=({contactMethod:t,authFlow:A,emailDomain:j,appName:b="Privy",whatsAppEnabled:I=!1,onBack:s,onCodeSubmit:T,onResend:D,errorMessage:p,success:h=!1,resendCountdown:L=0,onInvalidInput:_,onClearError:m})=>{let[c,N]=u.useState(Z);u.useEffect(()=>{p||N(Z)},[p]);let E=async x=>{var v;x.preventDefault();let i=x.currentTarget.value.replace(" ","");if(i==="")return;if(isNaN(Number(i)))return void(_==null?void 0:_("Code should be numeric"));m==null||m();let f=Number((v=x.currentTarget.name)==null?void 0:v.charAt(5)),l=[...i||[""]].slice(0,J-f),a=[...c.slice(0,f),...l,...c.slice(f+l.length)];N(a);let S=Math.min(Math.max(f+l.length,0),J-1);if(!isNaN(Number(x.currentTarget.value))){let o=document.querySelector(`input[name=code-${S}]`);o==null||o.focus()}if(a.every(o=>o&&!isNaN(+o))){let o=document.querySelector(`input[name=code-${S}]`);o==null||o.blur(),await(T==null?void 0:T(a.join("")))}};return r.jsx(pe,{title:"Enter confirmation code",subtitle:r.jsxs("span",A==="email"?{children:["Please check ",r.jsx(ee,{children:t})," for an email from"," ",j??"privy.io"," and enter your code below."]}:{children:["Please check ",r.jsx(ee,{children:t})," for a",I?" WhatsApp":""," message from ",b," and enter your code below."]}),icon:A==="email"?re:oe,onBack:s,showBack:!0,helpText:r.jsxs(ge,{children:[r.jsxs("span",{children:["Didn't get ",A==="email"?"an email":"a message","?"]}),L?r.jsxs(be,{children:[r.jsx(ae,{color:"var(--privy-color-foreground)",strokeWidth:1.33,height:"12px",width:"12px"}),r.jsx("span",{children:"Code sent"})]}):r.jsx(de,{as:"button",size:"sm",onClick:D,children:"Resend code"})]}),children:r.jsx(he,{children:r.jsx(ce,{children:r.jsxs(xe,{children:[r.jsx("div",{children:c.map((x,i)=>r.jsx("input",{name:`code-${i}`,type:"text",value:c[i],onChange:E,onKeyUp:f=>{f.key==="Backspace"&&(l=>{if(m==null||m(),N([...c.slice(0,l),"",...c.slice(l+1)]),l>0){let a=document.querySelector(`input[name=code-${l-1}]`);a==null||a.focus()}})(i)},inputMode:"numeric",autoFocus:i===0,pattern:"[0-9]",className:`${h?"success":""} ${p?"fail":""}`,autoComplete:le?"one-time-code":"off"},i))}),r.jsx(ye,{$fail:!!p,$success:h,children:r.jsx("span",{children:p==="Invalid or expired verification code"?"Incorrect code":p||(h?"Success!":"")})})]})})})})};let J=6,Z=Array(6).fill("");var w,k,fe=((w=fe||{})[w.RESET_AFTER_DELAY=0]="RESET_AFTER_DELAY",w[w.CLEAR_ON_NEXT_VALID_INPUT=1]="CLEAR_ON_NEXT_VALID_INPUT",w),ve=((k=ve||{})[k.EMAIL=0]="EMAIL",k[k.SMS=1]="SMS",k);const Ue={component:()=>{var U,P,F;let{navigate:t,lastScreen:A,navigateBack:j,setModalData:b,onUserCloseViaDialogOrKeybindRef:I}=te(),s=Q(),{closePrivyModal:T,resendEmailCode:D,resendSmsCode:p,getAuthMeta:h,loginWithCode:L,updateWallets:_,createAnalyticsEvent:m}=ie(),{authenticated:c,logout:N,user:E}=ne(),{whatsAppEnabled:x}=Q(),[i,f]=u.useState(!1),[l,a]=u.useState(null),[S,v]=u.useState(null),[o,M]=u.useState(0);I.current=()=>null;let R=(U=h())!=null&&U.email?0:1,$=R===0?((P=h())==null?void 0:P.email)||"":((F=h())==null?void 0:F.phoneNumber)||"",O=G-500;return u.useEffect(()=>{if(o){let n=setTimeout(()=>{M(o-1)},1e3);return()=>clearTimeout(n)}},[o]),u.useEffect(()=>{if(c&&i&&E){if(s!=null&&s.legal.requireUsersAcceptTerms&&!E.hasAcceptedTerms){let n=setTimeout(()=>{t("AffirmativeConsentScreen")},O);return()=>clearTimeout(n)}if(ue(E,s.embeddedWallets)){let n=setTimeout(()=>{b({createWallet:{onSuccess:()=>{},onFailure:d=>{console.error(d),m({eventName:"embedded_wallet_creation_failure_logout",payload:{error:d,screen:"AwaitingPasswordlessCodeScreen"}}),N()},callAuthOnSuccessOnClose:!0}}),t("EmbeddedWalletOnAccountCreateScreen")},O);return()=>clearTimeout(n)}{_();let n=setTimeout(()=>T({shouldCallAuthOnSuccess:!0,isSuccess:!0}),G);return()=>clearTimeout(n)}}},[c,i,E]),u.useEffect(()=>{if(l&&S===0){let n=setTimeout(()=>{a(null),v(null);let d=document.querySelector("input[name=code-0]");d==null||d.focus()},1400);return()=>clearTimeout(n)}},[l,S]),r.jsx(me,{contactMethod:$,authFlow:R===0?"email":"sms",emailDomain:s==null?void 0:s.appearance.emailDomain,appName:s==null?void 0:s.name,whatsAppEnabled:x,onBack:()=>j(),onCodeSubmit:async n=>{var d,W,B,q,K,V,z,X,Y,H;try{await L(n),f(!0)}catch(e){if(e instanceof y&&e.privyErrorCode===g.INVALID_CREDENTIALS)a("Invalid or expired verification code"),v(0);else if(e instanceof y&&e.privyErrorCode===g.CANNOT_LINK_MORE_OF_TYPE)a(e.message);else{if(e instanceof y&&e.privyErrorCode===g.USER_LIMIT_REACHED)return console.error(new se(e).toString()),void t("UserLimitReachedScreen");if(e instanceof y&&e.privyErrorCode===g.USER_DOES_NOT_EXIST)return void t("AccountNotFoundScreen");if(e instanceof y&&e.privyErrorCode===g.LINKED_TO_ANOTHER_USER)return b({errorModalData:{error:e,previousScreen:A??"AwaitingPasswordlessCodeScreen"}}),void t("ErrorScreen",!1);if(e instanceof y&&e.privyErrorCode===g.DISALLOWED_PLUS_EMAIL)return b({inlineError:{error:e}}),void t("ConnectOrCreateScreen",!1);if(e instanceof y&&e.privyErrorCode===g.ACCOUNT_TRANSFER_REQUIRED&&((W=(d=e.data)==null?void 0:d.data)!=null&&W.nonce))return b({accountTransfer:{nonce:(q=(B=e.data)==null?void 0:B.data)==null?void 0:q.nonce,account:$,displayName:(z=(V=(K=e.data)==null?void 0:K.data)==null?void 0:V.account)==null?void 0:z.displayName,linkMethod:R===0?"email":"sms",embeddedWalletAddress:(H=(Y=(X=e.data)==null?void 0:X.data)==null?void 0:Y.otherUser)==null?void 0:H.embeddedWalletAddress}}),void t("LinkConflictScreen");a("Issue verifying code"),v(0)}}},onResend:async()=>{M(30),R===0?await D():await p()},errorMessage:l||void 0,success:i,resendCountdown:o,onInvalidInput:n=>{a(n),v(1)},onClearError:()=>{S===1&&(a(null),v(null))}})}};let he=C.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  gap: 16px;
  flex-grow: 1;
  width: 100%;
`,xe=C.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;

  > div:first-child {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
    border-radius: var(--privy-border-radius-sm);

    > input {
      border: 1px solid var(--privy-color-foreground-4);
      background: var(--privy-color-background);
      border-radius: var(--privy-border-radius-sm);
      padding: 8px 10px;
      height: 48px;
      width: 40px;
      text-align: center;
      font-size: 18px;
      font-weight: 600;
      color: var(--privy-color-foreground);
      transition: all 0.2s ease;
    }

    > input:focus {
      border: 1px solid var(--privy-color-foreground);
      box-shadow: 0 0 0 1px var(--privy-color-foreground);
    }

    > input:invalid {
      border: 1px solid var(--privy-color-error);
    }

    > input.success {
      border: 1px solid var(--privy-color-border-success);
      background: var(--privy-color-success-bg);
    }

    > input.fail {
      border: 1px solid var(--privy-color-border-error);
      background: var(--privy-color-error-bg);
      animation: shake 180ms;
      animation-iteration-count: 2;
    }
  }

  @keyframes shake {
    0% {
      transform: translate(1px, 0);
    }
    33% {
      transform: translate(-1px, 0);
    }
    67% {
      transform: translate(-1px, 0);
    }
    100% {
      transform: translate(1px, 0);
    }
  }
`,ye=C.div`
  line-height: 20px;
  min-height: 20px;
  font-size: 14px;
  font-weight: 400;
  color: ${t=>t.$success?"var(--privy-color-success-dark)":t.$fail?"var(--privy-color-error-dark)":"transparent"};
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
`,ge=C.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: var(--privy-color-foreground-2);
`,be=C.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--privy-border-radius-sm);
  padding: 2px 8px;
  gap: 4px;
  background: var(--privy-color-background-2);
  color: var(--privy-color-foreground-2);
`,ee=C.span`
  font-weight: 500;
  word-break: break-all;
  color: var(--privy-color-foreground);
`;export{Ue as AwaitingPasswordlessCodeScreen,me as AwaitingPasswordlessCodeScreenView,Ue as default};
