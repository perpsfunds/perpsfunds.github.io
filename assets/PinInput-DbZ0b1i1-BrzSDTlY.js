import{dh as e,dz as H}from"./privyHost-BqlTwloN.js";import{r as b,j as n}from"./vendor-react-0C64ImZ_.js";const D=e.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 30px;

  @media (max-width: 440px) {
    padding: 10px 10px 20px;
  }
`,F=e.div`
  font-size: 18px;
  line-height: 30px;
  text-align: center;
  font-weight: 600;
  margin-bottom: 10px;
`,I=e.div`
  font-size: 0.875rem;

  text-align: center;
`,P=e.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  flex-grow: 1;
  padding: 20px 0;

  @media (max-width: 440px) {
    padding: 10px 10px 20px;
  }
`,U=e.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0.75rem;
  padding: 1rem 0 0;
  flex-grow: 1;
  width: 100%;
`,q=e.div`
  width: 25px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  > svg {
    z-index: 2;
    height: 25px !important;
    width: 25px !important;
    color: var(--privy-color-accent);
  }
`,O=e.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.875rem;
  line-height: 1rem;
  text-align: left;
`,B=e.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 20px;
`,X=e.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1rem;
  padding: 1rem 0 0;
  flex-grow: 1;
  width: 100%;
`,Y=e.div`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 100%;
`,K=e.button`
  && {
    background-color: transparent;
    color: var(--privy-color-foreground-3);
    margin-left: auto;
    padding: 0 0.5rem;
    display: flex;
    align-items: center;
    height: 100%;

    > svg {
      z-index: 2;
      height: 20px !important;
      width: 20px !important;
    }
  }

  &&:hover {
    color: var(--privy-color-error);
  }
`,G=e.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > svg {
    z-index: 2;
    height: 20px !important;
    width: 20px !important;
  }
`,J=e.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 400 !important;
  color: ${t=>t.$isAccent?"var(--privy-color-accent)":"var(--privy-color-foreground-3)"};

  > svg {
    z-index: 2;
    height: 18px !important;
    width: 18px !important;
    display: flex !important;
    align-items: flex-end;
  }
`,Q=e.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`,W=e.p`
  text-align: left;
  width: 100%;
  color: var(--privy-color-foreground-3) !important;
`,ee=e.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  user-select: none;

  & {
    width: 100%;
    cursor: pointer;
    border-radius: var(--privy-border-radius-md);

    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 22px; /* 137.5% */
    letter-spacing: -0.016px;
  }

  && {
    color: ${t=>t.theme==="dark"?"var(--privy-color-foreground-2)":"var(--privy-color-accent)"};
    background-color: transparent;

    padding: 0.5rem 0;
  }

  &:hover {
    text-decoration: underline;
  }
`,te=e.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--privy-color-accent);
  width: 100%;

  > svg {
    z-index: 2;
    width: 3rem;
    height: 3rem;
  }
`,re=e.div`
  color: var(--privy-color-error);
`,ie=({style:t,...m})=>n.jsx("svg",{x:0,y:0,width:"65",height:"64",viewBox:"0 0 65 64",style:{height:"64px",width:"65px",...t},fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",...m,children:n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.71369 17.5625V10.375C3.71369 6.44625 6.85845 3.25 10.7238 3.25H17.7953C18.6783 3.25 19.3941 2.52244 19.3941 1.625C19.3941 0.727562 18.6783 0 17.7953 0H10.7238C5.09529 0 0.516113 4.65419 0.516113 10.375V17.5625C0.516113 18.4599 1.23194 19.1875 2.1149 19.1875C2.99787 19.1875 3.71369 18.4599 3.71369 17.5625ZM17.7953 60.7501C18.6783 60.7501 19.3941 61.4777 19.3941 62.3751C19.3941 63.2726 18.6783 64.0001 17.7953 64.0001H10.7238C5.09529 64.0001 0.516113 59.3459 0.516113 53.6251V46.4376C0.516113 45.5402 1.23194 44.8126 2.1149 44.8126C2.99787 44.8126 3.71369 45.5402 3.71369 46.4376V53.6251C3.71369 57.5538 6.85845 60.7501 10.7238 60.7501H17.7953ZM63.4839 46.4376V53.6251C63.4839 59.3459 58.9048 64.0001 53.2763 64.0001H46.2047C45.3217 64.0001 44.6059 63.2726 44.6059 62.3751C44.6059 61.4777 45.3217 60.7501 46.2047 60.7501H53.2763C57.1416 60.7501 60.2864 57.5538 60.2864 53.6251V46.4376C60.2864 45.5402 61.0022 44.8126 61.8851 44.8126C62.7681 44.8126 63.4839 45.5402 63.4839 46.4376ZM63.4839 10.375V17.5625C63.4839 18.4599 62.7681 19.1875 61.8851 19.1875C61.0022 19.1875 60.2864 18.4599 60.2864 17.5625V10.375C60.2864 6.44625 57.1416 3.25 53.2763 3.25H46.2047C45.3217 3.25 44.6059 2.52244 44.6059 1.625C44.6059 0.727562 45.3217 0 46.2047 0H53.2763C58.9048 0 63.4839 4.65419 63.4839 10.375ZM43.0331 47.3022C43.7067 46.6698 43.7483 45.6022 43.1262 44.9176C42.5039 44.233 41.4536 44.1906 40.78 44.823C38.3832 47.0732 35.265 48.3125 31.9997 48.3125C28.7344 48.3125 25.6162 47.0732 23.2194 44.823C22.5457 44.1906 21.4955 44.233 20.8732 44.9176C20.251 45.6022 20.2927 46.6698 20.9663 47.3022C23.9784 50.1301 27.8968 51.6875 31.9997 51.6875C36.1026 51.6875 40.021 50.1301 43.0331 47.3022ZM35.3207 24.1249V36.1249C35.3207 38.5029 33.4173 40.4374 31.0777 40.4374H29.7249C28.8079 40.4374 28.0646 39.6819 28.0646 38.7499C28.0646 37.8179 28.8079 37.0624 29.7249 37.0624H31.0777C31.5863 37.0624 32.0001 36.6419 32.0001 36.1249V24.1249C32.0001 23.1929 32.7434 22.4374 33.6604 22.4374C34.5774 22.4374 35.3207 23.1929 35.3207 24.1249ZM46.7581 28.8437V24.0312C46.7581 23.151 46.056 22.4374 45.19 22.4374C44.324 22.4374 43.622 23.151 43.622 24.0312V28.8437C43.622 29.7239 44.324 30.4374 45.19 30.4374C46.056 30.4374 46.7581 29.7239 46.7581 28.8437ZM17.6109 28.8437C17.6109 29.7239 18.313 30.4374 19.1789 30.4374C20.0449 30.4374 20.747 29.7239 20.747 28.8437V24.0312C20.747 23.151 20.0449 22.4374 19.1789 22.4374C18.313 22.4374 17.6109 23.151 17.6109 24.0312V28.8437Z"})});let T=Array(6).fill("");var c,R=((c=R||{})[c.RESET_AFTER_DELAY=0]="RESET_AFTER_DELAY",c[c.CLEAR_ON_NEXT_VALID_INPUT=1]="CLEAR_ON_NEXT_VALID_INPUT",c);function w(t){return/^[0-9]{1}$/.test(t)}function _(t){return t.length===6&&t.every(w)}const ne=({onChange:t,disabled:m,errorReasonOverride:g,success:k})=>{let[o,j]=b.useState(T),[v,l]=b.useState(null),[z,d]=b.useState(null),M=async x=>{var E;x.preventDefault();let r=x.currentTarget.value.replace(/\s+/g,"");if(r==="")return;let f=o.reduce((i,$)=>i+Number(w($)),0),a=r.split(""),p=!a.every(w),s=a.length+f>6;if(p)return l("Passcode can only be numbers"),void d(1);if(s)return l("Passcode must be exactly 6 numbers"),void d(1);l(null),d(null);let u=Number((E=x.currentTarget.name)==null?void 0:E.charAt(4)),h=[...r||[""]].slice(0,6-u),y=[...o.slice(0,u),...h,...o.slice(u+h.length)];j(y);let V=Math.min(Math.max(u+h.length,0),5),C=document.querySelector(`input[name=pin-${V}]`);if(C==null||C.focus({preventScroll:!0}),_(y))try{await t(y.join(""));let i=document.querySelector(`input[name=pin-${V}]`);i==null||i.blur()}catch(i){d(1),l(i.message)}else try{await t(null)}catch(i){d(1),l(i.message)}},A=k?"success":!g&&!v?"":"fail";return n.jsx(n.Fragment,{children:n.jsxs(S,{children:[n.jsx("div",{children:o.map((x,r)=>n.jsx("input",{name:`pin-${r}`,type:"text",value:o[r],onChange:M,onKeyUp:f=>{f.key==="Backspace"&&(a=>{z===1&&(l(null),d(null));let p=[...o.slice(0,a),"",...o.slice(a+1)];if(j(p),a>0){let s=document.querySelector(`input[name=pin-${a-1}]`);s==null||s.focus({preventScroll:!0})}_(p)?t(p.join("")):t(null)})(r)},inputMode:"numeric",autoFocus:r===0,pattern:"[0-9]",className:A,autoComplete:H?"one-time-code":"off",disabled:m},r))}),n.jsx("div",{children:n.jsx(N,{$fail:!!g||!!v,children:g||v})})]})})};let S=e.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;

  @media (max-width: 440px) {
    margin-top: 8px;
    margin-bottom: 8px;
  }

  > div:nth-child(1) {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
    border-radius: var(--privy-border-radius-md);

    > input {
      border: 1px solid var(--privy-color-foreground-4);
      background: var(--privy-color-background);
      border-radius: var(--privy-border-radius-md);
      padding: 8px 10px;
      height: 58px;
      width: 46px;
      text-align: center;
      font-size: 18px;
    }

    > input:disabled {
      /* Use light-theme-bg-2 instead of disabled-bg for consistency with
      the callout bubble */
      background: var(--privy-color-background-2);
    }

    > input:focus {
      border: 1px solid var(--privy-color-accent);
    }

    > input:invalid {
      border: 1px solid var(--privy-color-error);
    }

    > input.success {
      border: 1px solid var(--privy-color-success);
    }

    > input.fail {
      border: 1px solid var(--privy-color-error);
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
`,N=e.div`
  line-height: 20px;
  font-size: 13px;
  display: flex;
  justify-content: flex-start;
  width: 100%;

  color: ${t=>t.$fail?"var(--privy-color-error)":"var(--privy-color-foreground-3)"};
`;export{W as C,ie as E,ne as T,re as V,ee as b,q as c,I as d,G as f,Y as g,J as h,F as l,B as m,D as o,P as p,U as s,X as u,K as v,te as w,O as x,Q as y};
