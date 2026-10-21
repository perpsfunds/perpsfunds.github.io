import{i as u,a as p,b}from"./lit-element-DtC7ycQA.js";import{n as c}from"./if-defined-C4fzy_I7.js";import{c as f}from"./index-C6ISFxGW.js";import{r as m,e as h,c as v}from"./ChainAdapterBlueprint-BnFwC0EC.js";const w=u`
  button {
    border-radius: var(--local-border-radius);
    color: var(--wui-color-fg-100);
    padding: var(--local-padding);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;var r=function(n,o,e,s){var a=arguments.length,i=a<3?o:s===null?s=Object.getOwnPropertyDescriptor(o,e):s,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,o,e,s);else for(var l=n.length-1;l>=0;l--)(d=n[l])&&(i=(a<3?d(i):a>3?d(o,e,i):d(o,e))||i);return a>3&&i&&Object.defineProperty(o,e,i),i};let t=class extends p{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){const o=this.size==="lg"?"--wui-border-radius-xs":"--wui-border-radius-xxs",e=this.size==="lg"?"--wui-spacing-1xs":"--wui-spacing-2xs";return this.style.cssText=`
    --local-border-radius: var(${o});
    --local-padding: var(${e});
`,b`
      <button ?disabled=${this.disabled}>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};t.styles=[m,h,v,w];r([c()],t.prototype,"size",void 0);r([c({type:Boolean})],t.prototype,"disabled",void 0);r([c()],t.prototype,"icon",void 0);r([c()],t.prototype,"iconColor",void 0);t=r([f("wui-icon-link")],t);
