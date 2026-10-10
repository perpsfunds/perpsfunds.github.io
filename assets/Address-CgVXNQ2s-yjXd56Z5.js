import{r as p,j as e}from"./vendor-react-0C64ImZ_.js";import{dK as d,dh as t}from"./privyHost-BqlTwloN.js";import{f as m}from"./ModalFooter-DDm8WjC0-CIXCb_tc.js";import{a3 as x,a4 as f}from"./vendor-icons-BG7jN9os.js";const v=({address:r,showCopyIcon:i,url:n,className:a})=>{let[s,l]=p.useState(!1);function c(o){o.stopPropagation(),navigator.clipboard.writeText(r).then(()=>l(!0)).catch(console.error)}return p.useEffect(()=>{if(s){let o=setTimeout(()=>l(!1),3e3);return()=>clearTimeout(o)}},[s]),e.jsxs(h,n?{children:[e.jsx(j,{title:r,className:a,href:`${n}/address/${r}`,target:"_blank",children:d(r)}),i&&e.jsx(m,{onClick:c,size:"sm",style:{gap:"0.375rem"},children:e.jsxs(e.Fragment,s?{children:["Copied",e.jsx(x,{size:16})]}:{children:["Copy",e.jsx(f,{size:16})]})})]}:{children:[e.jsx(u,{title:r,className:a,children:d(r)}),i&&e.jsx(m,{onClick:c,size:"sm",style:{gap:"0.375rem",fontSize:"14px"},children:e.jsxs(e.Fragment,s?{children:["Copied",e.jsx(x,{size:14})]}:{children:["Copy",e.jsx(f,{size:14})]})})]})};let h=t.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`,u=t.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--privy-color-foreground);
`,j=t.a`
  font-size: 14px;
  color: var(--privy-color-foreground);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;export{v as d};
