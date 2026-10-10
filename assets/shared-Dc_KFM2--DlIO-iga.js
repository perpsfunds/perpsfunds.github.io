import{N as a,O as l,P as p}from"./vendor-react-0C64ImZ_.js";import{dh as r,dR as o}from"./privyHost-BqlTwloN.js";import{b as s,v as c}from"./ModalFooter-DDm8WjC0-CIXCb_tc.js";let d=o`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.008px;
  text-align: left;
  transition: color 0.1s ease-in;
`;const h=r.span`
  ${d}
  transition: color 0.1s ease-in;
  color: ${({error:e})=>e?"var(--privy-color-error)":"var(--privy-color-foreground-3)"};
  text-transform: ${({error:e})=>e?"":"capitalize"};

  &[aria-hidden='true'] {
    visibility: hidden;
  }
`,x=r.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
`,m=r(s)`
  ${({$hideAnimations:e})=>e&&o`
      && {
        transition: none;
      }
    `}
`;let n=o`
  && {
    width: 100%;
    border-width: 1px;
    border-radius: var(--privy-border-radius-md);
    border-color: var(--privy-color-foreground-3);
    background: var(--privy-color-background);
    color: var(--privy-color-foreground);

    padding: 12px;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 22px; /* 137.5% */
  }
`;const u=r.input`
  ${n}

  &::placeholder {
    color: var(--privy-color-foreground-3);
    font-style: italic;
    font-size: 14px;
  }

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,y=r.div`
  ${n}
`,w=r.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${({centered:e})=>e?"center":"space-between"};
`,b=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 32px 0;
  gap: 4px;

  & h3 {
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
  }

  & p {
    max-width: 300px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }
`,$=r.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 1rem;
`,k=r.div`
  display: flex;
  text-align: left;
  align-items: center;

  gap: 8px;
  max-width: 300px;

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.008px;

  margin: 0 8px;
  color: var(--privy-color-foreground-2);

  > :first-child {
    min-width: 24px;
  }
`;r.div`
  height: var(--privy-height-modal-full);

  @media (max-width: 440px) {
    height: var(--privy-height-modal-compact);
  }
`;const z=r(c)`
  display: flex;
  flex: 1;
  gap: 4px;
  justify-content: center;

  && {
    background: var(--privy-color-background);
    border-radius: var(--privy-border-radius-md);
    border-color: var(--privy-color-foreground-3);
    border-width: 1px;
  }
`,j=r.div`
  position: absolute;
  right: 0.5rem;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`,F=r(a)`
  height: 1.25rem;
  width: 1.25rem;
  stroke: var(--privy-color-accent);
  cursor: pointer;

  :active {
    stroke: var(--privy-color-accent-light);
  }
`,R=r(l)`
  height: 1.25rem;
  width: 1.25rem;
  stroke: var(--privy-color-accent);
  cursor: pointer;

  :active {
    stroke: var(--privy-color-accent-light);
  }
`,N=r(p)`
  height: 1.25rem;
  width: 1.25rem;
  stroke: var(--privy-color-accent);
  cursor: pointer;

  :active {
    stroke: var(--privy-color-accent-light);
  }
`;let i=o`
  border-radius: 8px;
  background: var(--privy-color-foreground-4);
`,t=o`
  border-radius: 8px;
  transition: all 0.1s ease-out;
  background: ${({$label:e})=>(e==="Strong"?"var(--privy-color-icon-success)":e==="Medium"&&"var(--privy-color-icon-warning)")||"var(--privy-color-icon-error)"};
`;const A=r.progress`
  height: 4px;
  width: 100%;
  margin: 8px 0;

  /* Neither engine exposes its pseudo-elements until the native widget is opted out of. */
  appearance: none;

  /* Firefox's track, and a fallback under the WebKit bar. */
  ${i}

  &::-webkit-progress-bar {
    ${i}
  }

  &::-webkit-progress-value {
    ${t}
  }

  &::-moz-progress-bar {
    ${t}
  }
`;export{F as b,x as c,b as f,w as g,u as h,A as j,N as k,h as l,k as m,m as p,z as u,y as v,R as w,$ as x,j as y};
