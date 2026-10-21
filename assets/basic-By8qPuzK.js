import{a as k,b as d,w as Ae,i as Vt}from"./lit-element-DtC7ycQA.js";import{n as u,r as C,o as W}from"./if-defined-C4fzy_I7.js";import{z as D,A as T,T as N,q as R,o as S,E as O,R as E,J as B,P as At,X as me,O as he,Y as bn,K as j,L as ae,U as wt,S as Ne,M as Kt,Z as qt,x as Ht,C as de,_ as yn,$ as $n,a0 as bt}from"./core-tDQwOX29.js";import{c as I,U as oe}from"./index-DZdkA5MV.js";import{a as qe,F as Yt}from"./vendor-ethers-CXIjk7po.js";import{e as vn}from"./index-Cn5aGd7v.js";import{d as Cn}from"./dijkstra-D_NXgYpA.js";import{e as Et,n as Rt}from"./ref-VJC0xYJe.js";import"./preload-helper-C1FmrZbK.js";import"./browser-ponyfill-SIZP46kT.js";import"./vendor-react-DwYkqiWc.js";import"./index.es-CVRcA5pC.js";import"./index-BTMnaXL8.js";import"./formatUnits-Bw92Dgu5.js";import"./stringify-CWCc6FId.js";import"./index-nibyPLVP.js";import"./walletconnect-v2-BZICqWvH-DXE0qNcw.js";import"./privyHost-CH6knk-3.js";import"./index-CB7aWwWj.js";import"./vendor-icons-CtVdYIJS.js";import"./hashTypedData-0xOt8d5G.js";import"./wallet-connect-DMKXF1k2-f5zNsn8K.js";import"./fallback-hih_eYdj.js";import"./async-directive-bXsoyszS.js";var We=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let we=class extends k{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=D.state.connectors,this.count=T.state.count,this.filteredCount=T.state.filteredWallets.length,this.isFetchingRecommendedWallets=T.state.isFetchingRecommendedWallets,this.unsubscribe.push(D.subscribeKey("connectors",t=>this.connectors=t),T.subscribeKey("count",t=>this.count=t),T.subscribeKey("filteredWallets",t=>this.filteredCount=t.length),T.subscribeKey("isFetchingRecommendedWallets",t=>this.isFetchingRecommendedWallets=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.connectors.find(c=>c.id==="walletConnect"),{allWallets:i}=N.state;if(!t||i==="HIDE"||i==="ONLY_MOBILE"&&!R.isMobile())return null;const o=T.state.featured.length,r=this.count+o,n=r<10?r:Math.floor(r/10)*10,s=this.filteredCount>0?this.filteredCount:n;let a=`${s}`;this.filteredCount>0?a=`${this.filteredCount}`:s<r&&(a=`${s}+`);const l=S.hasAnyConnection(qe.CONNECTOR_ID.WALLET_CONNECT);return d`
      <wui-list-wallet
        name="Search Wallet"
        walletIcon="search"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${a}
        tagVariant="info"
        data-testid="all-wallets"
        tabIdx=${W(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        ?disabled=${l}
        size="sm"
      ></wui-list-wallet>
    `}onAllWallets(){var t;O.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),E.push("AllWallets",{redirectView:(t=E.state.data)==null?void 0:t.redirectView})}};We([u()],we.prototype,"tabIdx",void 0);We([C()],we.prototype,"connectors",void 0);We([C()],we.prototype,"count",void 0);We([C()],we.prototype,"filteredCount",void 0);We([C()],we.prototype,"isFetchingRecommendedWallets",void 0);we=We([I("w3m-all-wallets-widget")],we);const xn=B`
  :host {
    margin-top: ${({spacing:e})=>e[1]};
  }
  wui-separator {
    margin: ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1)
      ${({spacing:e})=>e[2]} calc(${({spacing:e})=>e[3]} * -1);
    width: calc(100% + ${({spacing:e})=>e[3]} * 2);
  }
`;var le=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Y=class extends k{constructor(){super(),this.unsubscribe=[],this.connectors=D.state.connectors,this.recommended=T.state.recommended,this.featured=T.state.featured,this.explorerWallets=T.state.explorerWallets,this.connections=S.state.connections,this.connectorImages=At.state.connectorImages,this.loadingTelegram=!1,this.unsubscribe.push(D.subscribeKey("connectors",t=>this.connectors=t),S.subscribeKey("connections",t=>this.connections=t),At.subscribeKey("connectorImages",t=>this.connectorImages=t),T.subscribeKey("recommended",t=>this.recommended=t),T.subscribeKey("featured",t=>this.featured=t),T.subscribeKey("explorerFilteredWallets",t=>{this.explorerWallets=t!=null&&t.length?t:T.state.explorerWallets}),T.subscribeKey("explorerWallets",t=>{var i;(i=this.explorerWallets)!=null&&i.length||(this.explorerWallets=t)})),R.isTelegram()&&R.isIos()&&(this.loadingTelegram=!S.state.wcUri,this.unsubscribe.push(S.subscribeKey("wcUri",t=>this.loadingTelegram=!t)))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return d`
      <wui-flex flexDirection="column" gap="2"> ${this.connectorListTemplate()} </wui-flex>
    `}mapConnectorsToExplorerWallets(t,i){return t.map(o=>{if(o.type==="MULTI_CHAIN"&&o.connectors){const n=o.connectors.map(c=>c.id),s=o.connectors.map(c=>c.name),a=o.connectors.map(c=>{var g;return(g=c.info)==null?void 0:g.rdns}),l=i==null?void 0:i.find(c=>n.includes(c.id)||s.includes(c.name)||c.rdns&&(a.includes(c.rdns)||n.includes(c.rdns)));return o.explorerWallet=l??o.explorerWallet,o}const r=i==null?void 0:i.find(n=>{var s;return n.id===o.id||n.rdns===((s=o.info)==null?void 0:s.rdns)||n.name===o.name});return o.explorerWallet=r??o.explorerWallet,o})}processConnectorsByType(t,i=!0){const o=me.sortConnectorsByExplorerWallet([...t]);return i?o.filter(me.showConnector):o}connectorListTemplate(){const t=this.mapConnectorsToExplorerWallets(this.connectors,this.explorerWallets??[]),i=me.getConnectorsByType(t,this.recommended,this.featured),o=this.processConnectorsByType(i.announced.filter(h=>h.id!=="walletConnect")),r=this.processConnectorsByType(i.injected),n=this.processConnectorsByType(i.multiChain.filter(h=>h.name!=="WalletConnect"),!1),s=i.custom,a=i.recent,l=this.processConnectorsByType(i.external.filter(h=>h.id!==qe.CONNECTOR_ID.COINBASE_SDK)),c=i.recommended,g=i.featured,_=me.getConnectorTypeOrder({custom:s,recent:a,announced:o,injected:r,multiChain:n,recommended:c,featured:g,external:l}),v=this.connectors.find(h=>h.id==="walletConnect"),y=R.isMobile(),$=[];for(const h of _)switch(h){case"walletConnect":{!y&&v&&$.push({kind:"connector",subtype:"walletConnect",connector:v});break}case"recent":{me.getFilteredRecentWallets().forEach(p=>$.push({kind:"wallet",subtype:"recent",wallet:p}));break}case"injected":{n.forEach(b=>$.push({kind:"connector",subtype:"multiChain",connector:b})),o.forEach(b=>$.push({kind:"connector",subtype:"announced",connector:b})),r.forEach(b=>$.push({kind:"connector",subtype:"injected",connector:b}));break}case"featured":{g.forEach(b=>$.push({kind:"wallet",subtype:"featured",wallet:b}));break}case"custom":{me.getFilteredCustomWallets(s??[]).forEach(p=>$.push({kind:"wallet",subtype:"custom",wallet:p}));break}case"external":{l.forEach(b=>$.push({kind:"connector",subtype:"external",connector:b}));break}case"recommended":{me.getCappedRecommendedWallets(c).forEach(p=>$.push({kind:"wallet",subtype:"recommended",wallet:p}));break}default:console.warn(`Unknown connector type: ${h}`)}return $.map((h,b)=>h.kind==="connector"?this.renderConnector(h,b):this.renderWallet(h,b))}renderConnector(t,i){var _,v;const o=t.connector,r=he.getConnectorImage(o)||this.connectorImages[(o==null?void 0:o.imageId)??""],s=(this.connections.get(o.chain)??[]).some(y=>bn.isLowerCaseMatch(y.connectorId,o.id));let a,l;t.subtype==="multiChain"?(a="multichain",l="info"):t.subtype==="walletConnect"?(a="qr code",l="accent"):t.subtype==="injected"||t.subtype==="announced"?(a=s?"connected":"installed",l=s?"info":"success"):(a=void 0,l=void 0);const c=S.hasAnyConnection(qe.CONNECTOR_ID.WALLET_CONNECT),g=t.subtype==="walletConnect"||t.subtype==="external"?c:!1;return d`
      <w3m-list-wallet
        displayIndex=${i}
        imageSrc=${W(r)}
        .installed=${!0}
        name=${o.name??"Unknown"}
        .tagVariant=${l}
        tagLabel=${W(a)}
        data-testid=${`wallet-selector-${o.id.toLowerCase()}`}
        size="sm"
        @click=${()=>this.onClickConnector(t)}
        tabIdx=${W(this.tabIdx)}
        ?disabled=${g}
        rdnsId=${W(((_=o.explorerWallet)==null?void 0:_.rdns)||void 0)}
        walletRank=${W((v=o.explorerWallet)==null?void 0:v.order)}
      >
      </w3m-list-wallet>
    `}onClickConnector(t){var o;const i=(o=E.state.data)==null?void 0:o.redirectView;if(t.subtype==="walletConnect"){D.setActiveConnector(t.connector),R.isMobile()?E.push("AllWallets"):E.push("ConnectingWalletConnect",{redirectView:i});return}if(t.subtype==="multiChain"){D.setActiveConnector(t.connector),E.push("ConnectingMultiChain",{redirectView:i});return}if(t.subtype==="injected"){D.setActiveConnector(t.connector),E.push("ConnectingExternal",{connector:t.connector,redirectView:i,wallet:t.connector.explorerWallet});return}if(t.subtype==="announced"){if(t.connector.id==="walletConnect"){R.isMobile()?E.push("AllWallets"):E.push("ConnectingWalletConnect",{redirectView:i});return}E.push("ConnectingExternal",{connector:t.connector,redirectView:i,wallet:t.connector.explorerWallet});return}E.push("ConnectingExternal",{connector:t.connector,redirectView:i})}renderWallet(t,i){const o=t.wallet,r=he.getWalletImage(o),s=S.hasAnyConnection(qe.CONNECTOR_ID.WALLET_CONNECT),a=this.loadingTelegram,l=t.subtype==="recent"?"recent":void 0,c=t.subtype==="recent"?"info":void 0;return d`
      <w3m-list-wallet
        displayIndex=${i}
        imageSrc=${W(r)}
        name=${o.name??"Unknown"}
        @click=${()=>this.onClickWallet(t)}
        size="sm"
        data-testid=${`wallet-selector-${o.id}`}
        tabIdx=${W(this.tabIdx)}
        ?loading=${a}
        ?disabled=${s}
        rdnsId=${W(o.rdns||void 0)}
        walletRank=${W(o.order)}
        tagLabel=${W(l)}
        .tagVariant=${c}
      >
      </w3m-list-wallet>
    `}onClickWallet(t){var r;const i=(r=E.state.data)==null?void 0:r.redirectView;if(t.subtype==="featured"){D.selectWalletConnector(t.wallet);return}if(t.subtype==="recent"){if(this.loadingTelegram)return;D.selectWalletConnector(t.wallet);return}if(t.subtype==="custom"){if(this.loadingTelegram)return;E.push("ConnectingWalletConnect",{wallet:t.wallet,redirectView:i});return}if(this.loadingTelegram)return;const o=D.getConnector({id:t.wallet.id,rdns:t.wallet.rdns});o?E.push("ConnectingExternal",{connector:o,redirectView:i}):E.push("ConnectingWalletConnect",{wallet:t.wallet,redirectView:i})}};Y.styles=xn;le([u({type:Number})],Y.prototype,"tabIdx",void 0);le([C()],Y.prototype,"connectors",void 0);le([C()],Y.prototype,"recommended",void 0);le([C()],Y.prototype,"featured",void 0);le([C()],Y.prototype,"explorerWallets",void 0);le([C()],Y.prototype,"connections",void 0);le([C()],Y.prototype,"connectorImages",void 0);le([C()],Y.prototype,"loadingTelegram",void 0);Y=le([I("w3m-connector-list")],Y);const En=B`
  :host {
    flex: 1;
    height: 100%;
  }

  button {
    width: 100%;
    height: 100%;
    display: inline-flex;
    align-items: center;
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]};
    column-gap: ${({spacing:e})=>e[1]};
    color: ${({tokens:e})=>e.theme.textSecondary};
    border-radius: ${({borderRadius:e})=>e[20]};
    background-color: transparent;
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button[data-active='true'] {
    color: ${({tokens:e})=>e.theme.textPrimary};
    background-color: ${({tokens:e})=>e.theme.foregroundTertiary};
  }

  button:hover:enabled:not([data-active='true']),
  button:active:enabled:not([data-active='true']) {
    wui-text,
    wui-icon {
      color: ${({tokens:e})=>e.theme.textPrimary};
    }
  }
`;var ze=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const Rn={lg:"lg-regular",md:"md-regular",sm:"sm-regular"},Sn={lg:"md",md:"sm",sm:"sm"};let be=class extends k{constructor(){super(...arguments),this.icon="mobile",this.size="md",this.label="",this.active=!1}render(){return d`
      <button data-active=${this.active}>
        ${this.icon?d`<wui-icon size=${Sn[this.size]} name=${this.icon}></wui-icon>`:""}
        <wui-text variant=${Rn[this.size]}> ${this.label} </wui-text>
      </button>
    `}};be.styles=[j,ae,En];ze([u()],be.prototype,"icon",void 0);ze([u()],be.prototype,"size",void 0);ze([u()],be.prototype,"label",void 0);ze([u({type:Boolean})],be.prototype,"active",void 0);be=ze([I("wui-tab-item")],be);const Tn=B`
  :host {
    display: inline-flex;
    align-items: center;
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[32]};
    padding: ${({spacing:e})=>e["01"]};
    box-sizing: border-box;
  }

  :host([data-size='sm']) {
    height: 26px;
  }

  :host([data-size='md']) {
    height: 36px;
  }
`;var Me=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ye=class extends k{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.size="md",this.activeTab=0}render(){return this.dataset.size=this.size,this.tabs.map((t,i)=>{var r;const o=i===this.activeTab;return d`
        <wui-tab-item
          @click=${()=>this.onTabClick(i)}
          icon=${t.icon}
          size=${this.size}
          label=${t.label}
          ?active=${o}
          data-active=${o}
          data-testid="tab-${(r=t.label)==null?void 0:r.toLowerCase()}"
        ></wui-tab-item>
      `})}onTabClick(t){this.activeTab=t,this.onTabChange(t)}};ye.styles=[j,ae,Tn];Me([u({type:Array})],ye.prototype,"tabs",void 0);Me([u()],ye.prototype,"onTabChange",void 0);Me([u()],ye.prototype,"size",void 0);Me([C()],ye.prototype,"activeTab",void 0);ye=Me([I("wui-tabs")],ye);var St=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let He=class extends k{constructor(){super(...arguments),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0}disconnectCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.generateTabs();return d`
      <wui-flex justifyContent="center" .padding=${["0","0","4","0"]}>
        <wui-tabs .tabs=${t} .onTabChange=${this.onTabChange.bind(this)}></wui-tabs>
      </wui-flex>
    `}generateTabs(){const t=this.platforms.map(i=>i==="browser"?{label:"Browser",icon:"extension",platform:"browser"}:i==="mobile"?{label:"Mobile",icon:"mobile",platform:"mobile"}:i==="qrcode"?{label:"Mobile",icon:"mobile",platform:"qrcode"}:i==="web"?{label:"Webapp",icon:"browser",platform:"web"}:i==="desktop"?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=t.map(({platform:i})=>i),t}onTabChange(t){var o;const i=this.platformTabs[t];i&&((o=this.onSelectPlatfrom)==null||o.call(this,i))}};St([u({type:Array})],He.prototype,"platforms",void 0);St([u()],He.prototype,"onSelectPlatfrom",void 0);He=St([I("w3m-connecting-header")],He);const In=B`
  :host {
    width: var(--local-width);
  }

  button {
    width: var(--local-width);
    white-space: nowrap;
    column-gap: ${({spacing:e})=>e[2]};
    transition:
      scale ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-1"]},
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      border-radius ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]};
    will-change: scale, background-color, border-radius;
    cursor: pointer;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='sm'] {
    border-radius: ${({borderRadius:e})=>e[2]};
    padding: 0 ${({spacing:e})=>e[2]};
    height: 28px;
  }

  button[data-size='md'] {
    border-radius: ${({borderRadius:e})=>e[3]};
    padding: 0 ${({spacing:e})=>e[4]};
    height: 38px;
  }

  button[data-size='lg'] {
    border-radius: ${({borderRadius:e})=>e[4]};
    padding: 0 ${({spacing:e})=>e[5]};
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='accent-primary'] {
    background-color: ${({tokens:e})=>e.core.backgroundAccentPrimary};
    color: ${({tokens:e})=>e.theme.textInvert};
  }

  button[data-variant='accent-secondary'] {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
    color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  button[data-variant='neutral-primary'] {
    background-color: ${({tokens:e})=>e.theme.backgroundInvert};
    color: ${({tokens:e})=>e.theme.textInvert};
  }

  button[data-variant='neutral-secondary'] {
    background-color: transparent;
    border: 1px solid ${({tokens:e})=>e.theme.borderSecondary};
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  button[data-variant='neutral-tertiary'] {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  button[data-variant='error-primary'] {
    background-color: ${({tokens:e})=>e.core.textError};
    color: ${({tokens:e})=>e.theme.textInvert};
  }

  button[data-variant='error-secondary'] {
    background-color: ${({tokens:e})=>e.core.backgroundError};
    color: ${({tokens:e})=>e.core.textError};
  }

  button[data-variant='shade'] {
    background: var(--wui-color-gray-glass-002);
    color: var(--wui-color-fg-200);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  /* -- Focus states --------------------------------------------------- */
  button[data-size='sm']:focus-visible:enabled {
    border-radius: 28px;
  }

  button[data-size='md']:focus-visible:enabled {
    border-radius: 38px;
  }

  button[data-size='lg']:focus-visible:enabled {
    border-radius: 48px;
  }
  button[data-variant='shade']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) {
    button[data-size='sm']:hover:enabled {
      border-radius: 28px;
    }

    button[data-size='md']:hover:enabled {
      border-radius: 38px;
    }

    button[data-size='lg']:hover:enabled {
      border-radius: 48px;
    }

    button[data-variant='shade']:hover:enabled {
      background: var(--wui-color-gray-glass-002);
    }

    button[data-variant='shade']:active:enabled {
      background: var(--wui-color-gray-glass-005);
    }
  }

  button[data-size='sm']:active:enabled {
    border-radius: 28px;
  }

  button[data-size='md']:active:enabled {
    border-radius: 38px;
  }

  button[data-size='lg']:active:enabled {
    border-radius: 48px;
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled {
    opacity: 0.3;
  }
`;var xe=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const _n={lg:"lg-regular-mono",md:"md-regular-mono",sm:"sm-regular-mono"},kn={lg:"md",md:"md",sm:"sm"};let re=class extends k{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="accent-primary"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
     `;const t=this.textVariant??_n[this.size];return d`
      <button data-variant=${this.variant} data-size=${this.size} ?disabled=${this.disabled}>
        ${this.loadingTemplate()}
        <slot name="iconLeft"></slot>
        <wui-text variant=${t} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}loadingTemplate(){if(this.loading){const t=kn[this.size],i=this.variant==="neutral-primary"||this.variant==="accent-primary"?"invert":"primary";return d`<wui-loading-spinner color=${i} size=${t}></wui-loading-spinner>`}return null}};re.styles=[j,ae,In];xe([u()],re.prototype,"size",void 0);xe([u({type:Boolean})],re.prototype,"disabled",void 0);xe([u({type:Boolean})],re.prototype,"fullWidth",void 0);xe([u({type:Boolean})],re.prototype,"loading",void 0);xe([u()],re.prototype,"variant",void 0);xe([u()],re.prototype,"textVariant",void 0);re=xe([I("wui-button")],re);const Wn=B`
  :host {
    display: block;
    width: 100px;
    height: 100px;
  }

  svg {
    width: 100px;
    height: 100px;
  }

  rect {
    fill: none;
    stroke: ${e=>e.colors.accent100};
    stroke-width: 3px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var Gt=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Ye=class extends k{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const t=this.radius>50?50:this.radius,o=36-t,r=116+o,n=245+o,s=360+o*1.75;return d`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${t}
          stroke-dasharray="${r} ${n}"
          stroke-dashoffset=${s}
        />
      </svg>
    `}};Ye.styles=[j,Wn];Gt([u({type:Number})],Ye.prototype,"radius",void 0);Ye=Gt([I("wui-loading-thumbnail")],Ye);const Pn=B`
  wui-flex {
    width: 100%;
    height: 52px;
    box-sizing: border-box;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[5]};
    padding-left: ${({spacing:e})=>e[3]};
    padding-right: ${({spacing:e})=>e[3]};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({spacing:e})=>e[6]};
  }

  wui-text {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  wui-icon {
    width: 12px;
    height: 12px;
  }
`;var ot=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Re=class extends k{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return d`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="lg-regular" color="inherit">${this.label}</wui-text>
        <wui-button variant="accent-secondary" size="sm">
          ${this.buttonLabel}
          <wui-icon name="chevronRight" color="inherit" size="inherit" slot="iconRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};Re.styles=[j,ae,Pn];ot([u({type:Boolean})],Re.prototype,"disabled",void 0);ot([u()],Re.prototype,"label",void 0);ot([u()],Re.prototype,"buttonLabel",void 0);Re=ot([I("wui-cta-button")],Re);const Bn=B`
  :host {
    display: block;
    padding: 0 ${({spacing:e})=>e[5]} ${({spacing:e})=>e[5]};
  }
`;var Jt=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Ge=class extends k{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:t,app_store:i,play_store:o,chrome_store:r,homepage:n}=this.wallet,s=R.isMobile(),a=R.isIos(),l=R.isAndroid(),c=[i,o,n,r].filter(Boolean).length>1,g=oe.getTruncateString({string:t,charsStart:12,charsEnd:0,truncate:"end"});return c&&!s?d`
        <wui-cta-button
          label=${`Don't have ${g}?`}
          buttonLabel="Get"
          @click=${()=>E.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!c&&n?d`
        <wui-cta-button
          label=${`Don't have ${g}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:i&&a?d`
        <wui-cta-button
          label=${`Don't have ${g}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:o&&l?d`
        <wui-cta-button
          label=${`Don't have ${g}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){var t;(t=this.wallet)!=null&&t.app_store&&R.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var t;(t=this.wallet)!=null&&t.play_store&&R.openHref(this.wallet.play_store,"_blank")}onHomePage(){var t;(t=this.wallet)!=null&&t.homepage&&R.openHref(this.wallet.homepage,"_blank")}};Ge.styles=[Bn];Jt([u({type:Object})],Ge.prototype,"wallet",void 0);Ge=Jt([I("w3m-mobile-download-links")],Ge);const An=B`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-wallet-image {
    width: 56px;
    height: 56px;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:e})=>e[1]} * -1);
    bottom: calc(${({spacing:e})=>e[1]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: ${({durations:e})=>e.lg};
    transition-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({spacing:e})=>e[4]};
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({easings:e})=>e["ease-out-power-2"]} both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  w3m-mobile-download-links {
    padding: 0px;
    width: 100%;
  }
`;var G=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};class L extends k{constructor(){var t,i,o,r,n;super(),this.wallet=(t=E.state.data)==null?void 0:t.wallet,this.connector=(i=E.state.data)==null?void 0:i.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=he.getConnectorImage(this.connector)??he.getWalletImage(this.wallet),this.name=((o=this.wallet)==null?void 0:o.name)??((r=this.connector)==null?void 0:r.name)??"Wallet",this.isRetrying=!1,this.uri=S.state.wcUri,this.error=S.state.wcError,this.ready=!1,this.showRetry=!1,this.label=void 0,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.isLoading=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(S.subscribeKey("wcUri",s=>{var a;this.uri=s,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,(a=this.onConnect)==null||a.call(this))}),S.subscribeKey("wcError",s=>this.error=s)),(R.isTelegram()||R.isSafari())&&R.isIos()&&S.state.wcUri&&((n=this.onConnect)==null||n.call(this))}firstUpdated(){var t;(t=this.onAutoConnect)==null||t.call(this),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),S.setWcError(!1),clearTimeout(this.timeout)}render(){var o;(o=this.onRender)==null||o.call(this),this.onShowRetry();const t=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let i="";return this.label?i=this.label:(i=`Continue in ${this.name}`,this.error&&(i="Connection declined")),d`
      <wui-flex
        data-error=${W(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="6"
      >
        <wui-flex gap="2" justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${W(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            color="error"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="6"> <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["2","0","0","0"]}
        >
          <wui-text align="center" variant="lg-medium" color=${this.error?"error":"primary"}>
            ${i}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary">${t}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?d`
                <wui-button
                  variant="neutral-secondary"
                  size="md"
                  ?disabled=${this.isRetrying||this.isLoading}
                  @click=${this.onTryAgain.bind(this)}
                  data-testid="w3m-connecting-widget-secondary-button"
                >
                  <wui-icon
                    color="inherit"
                    slot="iconLeft"
                    name=${this.secondaryBtnIcon}
                  ></wui-icon>
                  ${this.secondaryBtnLabel}
                </wui-button>
              `:null}
      </wui-flex>

      ${this.isWalletConnect?d`
              <wui-flex .padding=${["0","5","5","5"]} justifyContent="center">
                <wui-link
                  @click=${this.onCopyUri}
                  variant="secondary"
                  icon="copy"
                  data-testid="wui-link-copy"
                >
                  Copy link
                </wui-link>
              </wui-flex>
            `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links></wui-flex>
      </wui-flex>
    `}onShowRetry(){var t;if(this.error&&!this.showRetry){this.showRetry=!0;const i=(t=this.shadowRoot)==null?void 0:t.querySelector("wui-button");i==null||i.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){var t,i;S.setWcError(!1),this.onRetry?(this.isRetrying=!0,(t=this.onRetry)==null||t.call(this)):(i=this.onConnect)==null||i.call(this)}loaderTemplate(){const t=wt.state.themeVariables["--w3m-border-radius-master"],i=t?parseInt(t.replace("px",""),10):4;return d`<wui-loading-thumbnail radius=${i*9}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(R.copyToClopboard(this.uri),Ne.showSuccess("Link copied"))}catch{Ne.showError("Failed to copy")}}}L.styles=An;G([C()],L.prototype,"isRetrying",void 0);G([C()],L.prototype,"uri",void 0);G([C()],L.prototype,"error",void 0);G([C()],L.prototype,"ready",void 0);G([C()],L.prototype,"showRetry",void 0);G([C()],L.prototype,"label",void 0);G([C()],L.prototype,"secondaryBtnLabel",void 0);G([C()],L.prototype,"secondaryLabel",void 0);G([C()],L.prototype,"isLoading",void 0);G([u({type:Boolean})],L.prototype,"isMobile",void 0);G([u()],L.prototype,"onRetry",void 0);var Ln=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Lt=class extends L{constructor(){var t;if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),O.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:(t=this.wallet)==null?void 0:t.display_index,walletRank:this.wallet.order,view:E.state.view}})}async onConnectProxy(){var t,i;try{this.error=!1;const{connectors:o}=D.state,r=o.find(n=>{var s,a,l;return n.type==="ANNOUNCED"&&((s=n.info)==null?void 0:s.rdns)===((a=this.wallet)==null?void 0:a.rdns)||n.type==="INJECTED"||n.name===((l=this.wallet)==null?void 0:l.name)});if(r)await S.connectExternal(r,r.chain);else throw new Error("w3m-connecting-wc-browser: No connector found");Kt.close(),O.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:((t=this.wallet)==null?void 0:t.name)||"Unknown",view:E.state.view,walletRank:(i=this.wallet)==null?void 0:i.order}})}catch(o){o instanceof qt&&o.originalName===Yt.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?O.sendEvent({type:"track",event:"USER_REJECTED",properties:{message:o.message}}):O.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(o==null?void 0:o.message)??"Unknown"}}),this.error=!0}}};Lt=Ln([I("w3m-connecting-wc-browser")],Lt);var Nn=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Nt=class extends L{constructor(){var t;if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),O.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop",displayIndex:(t=this.wallet)==null?void 0:t.display_index,walletRank:this.wallet.order,view:E.state.view}})}onRenderProxy(){var t;!this.ready&&this.uri&&(this.ready=!0,(t=this.onConnect)==null||t.call(this))}onConnectProxy(){var t;if((t=this.wallet)!=null&&t.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:i,name:o}=this.wallet,{redirect:r,href:n}=R.formatNativeUrl(i,this.uri);S.setWcLinking({name:o,href:n}),S.setRecentWallet(this.wallet),R.openHref(r,"_blank")}catch{this.error=!0}}};Nt=Nn([I("w3m-connecting-wc-desktop")],Nt);var Pe=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let $e=class extends L{constructor(){var t;if(super(),this.btnLabelTimeout=void 0,this.redirectDeeplink=void 0,this.redirectUniversalLink=void 0,this.target=void 0,this.preferUniversalLinks=N.state.experimental_preferUniversalLinks,this.isLoading=!0,this.onConnect=()=>{var i;if((i=this.wallet)!=null&&i.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:o,link_mode:r,name:n}=this.wallet,{redirect:s,redirectUniversalLink:a,href:l}=R.formatNativeUrl(o,this.uri,r);this.redirectDeeplink=s,this.redirectUniversalLink=a,this.target=R.isIframe()?"_top":"_self",S.setWcLinking({name:n,href:l}),S.setRecentWallet(this.wallet),this.preferUniversalLinks&&this.redirectUniversalLink?R.openHref(this.redirectUniversalLink,this.target):R.openHref(this.redirectDeeplink,this.target)}catch(o){O.sendEvent({type:"track",event:"CONNECT_PROXY_ERROR",properties:{message:o instanceof Error?o.message:"Error parsing the deeplink",uri:this.uri,mobile_link:this.wallet.mobile_link,name:this.wallet.name}}),this.error=!0}},!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.secondaryBtnLabel="Open",this.secondaryLabel=Ht.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.onHandleURI(),this.unsubscribe.push(S.subscribeKey("wcUri",()=>{this.onHandleURI()})),O.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile",displayIndex:(t=this.wallet)==null?void 0:t.display_index,walletRank:this.wallet.order,view:E.state.view}})}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.btnLabelTimeout)}onHandleURI(){var t;this.isLoading=!this.uri,!this.ready&&this.uri&&(this.ready=!0,(t=this.onConnect)==null||t.call(this))}onTryAgain(){var t;S.setWcError(!1),(t=this.onConnect)==null||t.call(this)}};Pe([C()],$e.prototype,"redirectDeeplink",void 0);Pe([C()],$e.prototype,"redirectUniversalLink",void 0);Pe([C()],$e.prototype,"target",void 0);Pe([C()],$e.prototype,"preferUniversalLinks",void 0);Pe([C()],$e.prototype,"isLoading",void 0);$e=Pe([I("w3m-connecting-wc-mobile")],$e);var De={},On=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},Qt={},U={};let Tt;const zn=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];U.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17};U.getSymbolTotalCodewords=function(t){return zn[t]};U.getBCHDigit=function(e){let t=0;for(;e!==0;)t++,e>>>=1;return t};U.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');Tt=t};U.isKanjiModeEnabled=function(){return typeof Tt<"u"};U.toSJIS=function(t){return Tt(t)};var rt={};(function(e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+i)}}e.isValid=function(o){return o&&typeof o.bit<"u"&&o.bit>=0&&o.bit<4},e.from=function(o,r){if(e.isValid(o))return o;try{return t(o)}catch{return r}}})(rt);function Xt(){this.buffer=[],this.length=0}Xt.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let i=0;i<t;i++)this.putBit((e>>>t-i-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var Mn=Xt;function je(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}je.prototype.set=function(e,t,i,o){const r=e*this.size+t;this.data[r]=i,o&&(this.reservedBit[r]=!0)};je.prototype.get=function(e,t){return this.data[e*this.size+t]};je.prototype.xor=function(e,t,i){this.data[e*this.size+t]^=i};je.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]};var Dn=je,Zt={};(function(e){const t=U.getSymbolSize;e.getRowColCoords=function(o){if(o===1)return[];const r=Math.floor(o/7)+2,n=t(o),s=n===145?26:Math.ceil((n-13)/(2*r-2))*2,a=[n-7];for(let l=1;l<r-1;l++)a[l]=a[l-1]-s;return a.push(6),a.reverse()},e.getPositions=function(o){const r=[],n=e.getRowColCoords(o),s=n.length;for(let a=0;a<s;a++)for(let l=0;l<s;l++)a===0&&l===0||a===0&&l===s-1||a===s-1&&l===0||r.push([n[a],n[l]]);return r}})(Zt);var en={};const jn=U.getSymbolSize,Ot=7;en.getPositions=function(t){const i=jn(t);return[[0,0],[i-Ot,0],[0,i-Ot]]};var tn={};(function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(r){return r!=null&&r!==""&&!isNaN(r)&&r>=0&&r<=7},e.from=function(r){return e.isValid(r)?parseInt(r,10):void 0},e.getPenaltyN1=function(r){const n=r.size;let s=0,a=0,l=0,c=null,g=null;for(let _=0;_<n;_++){a=l=0,c=g=null;for(let v=0;v<n;v++){let y=r.get(_,v);y===c?a++:(a>=5&&(s+=t.N1+(a-5)),c=y,a=1),y=r.get(v,_),y===g?l++:(l>=5&&(s+=t.N1+(l-5)),g=y,l=1)}a>=5&&(s+=t.N1+(a-5)),l>=5&&(s+=t.N1+(l-5))}return s},e.getPenaltyN2=function(r){const n=r.size;let s=0;for(let a=0;a<n-1;a++)for(let l=0;l<n-1;l++){const c=r.get(a,l)+r.get(a,l+1)+r.get(a+1,l)+r.get(a+1,l+1);(c===4||c===0)&&s++}return s*t.N2},e.getPenaltyN3=function(r){const n=r.size;let s=0,a=0,l=0;for(let c=0;c<n;c++){a=l=0;for(let g=0;g<n;g++)a=a<<1&2047|r.get(c,g),g>=10&&(a===1488||a===93)&&s++,l=l<<1&2047|r.get(g,c),g>=10&&(l===1488||l===93)&&s++}return s*t.N3},e.getPenaltyN4=function(r){let n=0;const s=r.data.length;for(let l=0;l<s;l++)n+=r.data[l];return Math.abs(Math.ceil(n*100/s/5)-10)*t.N4};function i(o,r,n){switch(o){case e.Patterns.PATTERN000:return(r+n)%2===0;case e.Patterns.PATTERN001:return r%2===0;case e.Patterns.PATTERN010:return n%3===0;case e.Patterns.PATTERN011:return(r+n)%3===0;case e.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(n/3))%2===0;case e.Patterns.PATTERN101:return r*n%2+r*n%3===0;case e.Patterns.PATTERN110:return(r*n%2+r*n%3)%2===0;case e.Patterns.PATTERN111:return(r*n%3+(r+n)%2)%2===0;default:throw new Error("bad maskPattern:"+o)}}e.applyMask=function(r,n){const s=n.size;for(let a=0;a<s;a++)for(let l=0;l<s;l++)n.isReserved(l,a)||n.xor(l,a,i(r,l,a))},e.getBestMask=function(r,n){const s=Object.keys(e.Patterns).length;let a=0,l=1/0;for(let c=0;c<s;c++){n(c),e.applyMask(c,r);const g=e.getPenaltyN1(r)+e.getPenaltyN2(r)+e.getPenaltyN3(r)+e.getPenaltyN4(r);e.applyMask(c,r),g<l&&(l=g,a=c)}return a}})(tn);var st={};const ue=rt,Ve=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],Ke=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];st.getBlocksCount=function(t,i){switch(i){case ue.L:return Ve[(t-1)*4+0];case ue.M:return Ve[(t-1)*4+1];case ue.Q:return Ve[(t-1)*4+2];case ue.H:return Ve[(t-1)*4+3];default:return}};st.getTotalCodewordsCount=function(t,i){switch(i){case ue.L:return Ke[(t-1)*4+0];case ue.M:return Ke[(t-1)*4+1];case ue.Q:return Ke[(t-1)*4+2];case ue.H:return Ke[(t-1)*4+3];default:return}};var nn={},at={};const Le=new Uint8Array(512),Je=new Uint8Array(256);(function(){let t=1;for(let i=0;i<255;i++)Le[i]=t,Je[t]=i,t<<=1,t&256&&(t^=285);for(let i=255;i<512;i++)Le[i]=Le[i-255]})();at.log=function(t){if(t<1)throw new Error("log("+t+")");return Je[t]};at.exp=function(t){return Le[t]};at.mul=function(t,i){return t===0||i===0?0:Le[Je[t]+Je[i]]};(function(e){const t=at;e.mul=function(o,r){const n=new Uint8Array(o.length+r.length-1);for(let s=0;s<o.length;s++)for(let a=0;a<r.length;a++)n[s+a]^=t.mul(o[s],r[a]);return n},e.mod=function(o,r){let n=new Uint8Array(o);for(;n.length-r.length>=0;){const s=n[0];for(let l=0;l<r.length;l++)n[l]^=t.mul(r[l],s);let a=0;for(;a<n.length&&n[a]===0;)a++;n=n.slice(a)}return n},e.generateECPolynomial=function(o){let r=new Uint8Array([1]);for(let n=0;n<o;n++)r=e.mul(r,new Uint8Array([1,t.exp(n)]));return r}})(nn);const on=nn;function It(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}It.prototype.initialize=function(t){this.degree=t,this.genPoly=on.generateECPolynomial(this.degree)};It.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const i=new Uint8Array(t.length+this.degree);i.set(t);const o=on.mod(i,this.genPoly),r=this.degree-o.length;if(r>0){const n=new Uint8Array(this.degree);return n.set(o,r),n}return o};var Un=It,rn={},pe={},_t={};_t.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40};var Z={};const sn="[0-9]+",Fn="[A-Z $%*+\\-./:]+";let Oe="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";Oe=Oe.replace(/u/g,"\\u");const Vn="(?:(?![A-Z0-9 $%*+\\-./:]|"+Oe+`)(?:.|[\r
]))+`;Z.KANJI=new RegExp(Oe,"g");Z.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");Z.BYTE=new RegExp(Vn,"g");Z.NUMERIC=new RegExp(sn,"g");Z.ALPHANUMERIC=new RegExp(Fn,"g");const Kn=new RegExp("^"+Oe+"$"),qn=new RegExp("^"+sn+"$"),Hn=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");Z.testKanji=function(t){return Kn.test(t)};Z.testNumeric=function(t){return qn.test(t)};Z.testAlphanumeric=function(t){return Hn.test(t)};(function(e){const t=_t,i=Z;e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(n,s){if(!n.ccBits)throw new Error("Invalid mode: "+n);if(!t.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?n.ccBits[0]:s<27?n.ccBits[1]:n.ccBits[2]},e.getBestModeForData=function(n){return i.testNumeric(n)?e.NUMERIC:i.testAlphanumeric(n)?e.ALPHANUMERIC:i.testKanji(n)?e.KANJI:e.BYTE},e.toString=function(n){if(n&&n.id)return n.id;throw new Error("Invalid mode")},e.isValid=function(n){return n&&n.bit&&n.ccBits};function o(r){if(typeof r!="string")throw new Error("Param is not a string");switch(r.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+r)}}e.from=function(n,s){if(e.isValid(n))return n;try{return o(n)}catch{return s}}})(pe);(function(e){const t=U,i=st,o=rt,r=pe,n=_t,s=7973,a=t.getBCHDigit(s);function l(v,y,$){for(let h=1;h<=40;h++)if(y<=e.getCapacity(h,$,v))return h}function c(v,y){return r.getCharCountIndicator(v,y)+4}function g(v,y){let $=0;return v.forEach(function(h){const b=c(h.mode,y);$+=b+h.getBitsLength()}),$}function _(v,y){for(let $=1;$<=40;$++)if(g(v,$)<=e.getCapacity($,y,r.MIXED))return $}e.from=function(y,$){return n.isValid(y)?parseInt(y,10):$},e.getCapacity=function(y,$,h){if(!n.isValid(y))throw new Error("Invalid QR Code version");typeof h>"u"&&(h=r.BYTE);const b=t.getSymbolTotalCodewords(y),p=i.getTotalCodewordsCount(y,$),m=(b-p)*8;if(h===r.MIXED)return m;const w=m-c(h,y);switch(h){case r.NUMERIC:return Math.floor(w/10*3);case r.ALPHANUMERIC:return Math.floor(w/11*2);case r.KANJI:return Math.floor(w/13);case r.BYTE:default:return Math.floor(w/8)}},e.getBestVersionForData=function(y,$){let h;const b=o.from($,o.M);if(Array.isArray(y)){if(y.length>1)return _(y,b);if(y.length===0)return 1;h=y[0]}else h=y;return l(h.mode,h.getLength(),b)},e.getEncodedBits=function(y){if(!n.isValid(y)||y<7)throw new Error("Invalid QR Code version");let $=y<<12;for(;t.getBCHDigit($)-a>=0;)$^=s<<t.getBCHDigit($)-a;return y<<12|$}})(rn);var an={};const yt=U,ln=1335,Yn=21522,zt=yt.getBCHDigit(ln);an.getEncodedBits=function(t,i){const o=t.bit<<3|i;let r=o<<10;for(;yt.getBCHDigit(r)-zt>=0;)r^=ln<<yt.getBCHDigit(r)-zt;return(o<<10|r)^Yn};var cn={};const Gn=pe;function Se(e){this.mode=Gn.NUMERIC,this.data=e.toString()}Se.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)};Se.prototype.getLength=function(){return this.data.length};Se.prototype.getBitsLength=function(){return Se.getBitsLength(this.data.length)};Se.prototype.write=function(t){let i,o,r;for(i=0;i+3<=this.data.length;i+=3)o=this.data.substr(i,3),r=parseInt(o,10),t.put(r,10);const n=this.data.length-i;n>0&&(o=this.data.substr(i),r=parseInt(o,10),t.put(r,n*3+1))};var Jn=Se;const Qn=pe,ut=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function Te(e){this.mode=Qn.ALPHANUMERIC,this.data=e}Te.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)};Te.prototype.getLength=function(){return this.data.length};Te.prototype.getBitsLength=function(){return Te.getBitsLength(this.data.length)};Te.prototype.write=function(t){let i;for(i=0;i+2<=this.data.length;i+=2){let o=ut.indexOf(this.data[i])*45;o+=ut.indexOf(this.data[i+1]),t.put(o,11)}this.data.length%2&&t.put(ut.indexOf(this.data[i]),6)};var Xn=Te;const Zn=vn,ei=pe;function Ie(e){this.mode=ei.BYTE,typeof e=="string"&&(e=Zn(e)),this.data=new Uint8Array(e)}Ie.getBitsLength=function(t){return t*8};Ie.prototype.getLength=function(){return this.data.length};Ie.prototype.getBitsLength=function(){return Ie.getBitsLength(this.data.length)};Ie.prototype.write=function(e){for(let t=0,i=this.data.length;t<i;t++)e.put(this.data[t],8)};var ti=Ie;const ni=pe,ii=U;function _e(e){this.mode=ni.KANJI,this.data=e}_e.getBitsLength=function(t){return t*13};_e.prototype.getLength=function(){return this.data.length};_e.prototype.getBitsLength=function(){return _e.getBitsLength(this.data.length)};_e.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let i=ii.toSJIS(this.data[t]);if(i>=33088&&i<=40956)i-=33088;else if(i>=57408&&i<=60351)i-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);i=(i>>>8&255)*192+(i&255),e.put(i,13)}};var oi=_e;(function(e){const t=pe,i=Jn,o=Xn,r=ti,n=oi,s=Z,a=U,l=Cn;function c(p){return unescape(encodeURIComponent(p)).length}function g(p,m,w){const f=[];let x;for(;(x=p.exec(w))!==null;)f.push({data:x[0],index:x.index,mode:m,length:x[0].length});return f}function _(p){const m=g(s.NUMERIC,t.NUMERIC,p),w=g(s.ALPHANUMERIC,t.ALPHANUMERIC,p);let f,x;return a.isKanjiModeEnabled()?(f=g(s.BYTE,t.BYTE,p),x=g(s.KANJI,t.KANJI,p)):(f=g(s.BYTE_KANJI,t.BYTE,p),x=[]),m.concat(w,f,x).sort(function(A,H){return A.index-H.index}).map(function(A){return{data:A.data,mode:A.mode,length:A.length}})}function v(p,m){switch(m){case t.NUMERIC:return i.getBitsLength(p);case t.ALPHANUMERIC:return o.getBitsLength(p);case t.KANJI:return n.getBitsLength(p);case t.BYTE:return r.getBitsLength(p)}}function y(p){return p.reduce(function(m,w){const f=m.length-1>=0?m[m.length-1]:null;return f&&f.mode===w.mode?(m[m.length-1].data+=w.data,m):(m.push(w),m)},[])}function $(p){const m=[];for(let w=0;w<p.length;w++){const f=p[w];switch(f.mode){case t.NUMERIC:m.push([f,{data:f.data,mode:t.ALPHANUMERIC,length:f.length},{data:f.data,mode:t.BYTE,length:f.length}]);break;case t.ALPHANUMERIC:m.push([f,{data:f.data,mode:t.BYTE,length:f.length}]);break;case t.KANJI:m.push([f,{data:f.data,mode:t.BYTE,length:c(f.data)}]);break;case t.BYTE:m.push([{data:f.data,mode:t.BYTE,length:c(f.data)}])}}return m}function h(p,m){const w={},f={start:{}};let x=["start"];for(let P=0;P<p.length;P++){const A=p[P],H=[];for(let ce=0;ce<A.length;ce++){const J=A[ce],Be=""+P+ce;H.push(Be),w[Be]={node:J,lastCount:0},f[Be]={};for(let dt=0;dt<x.length;dt++){const ne=x[dt];w[ne]&&w[ne].node.mode===J.mode?(f[ne][Be]=v(w[ne].lastCount+J.length,J.mode)-v(w[ne].lastCount,J.mode),w[ne].lastCount+=J.length):(w[ne]&&(w[ne].lastCount=J.length),f[ne][Be]=v(J.length,J.mode)+4+t.getCharCountIndicator(J.mode,m))}}x=H}for(let P=0;P<x.length;P++)f[x[P]].end=0;return{map:f,table:w}}function b(p,m){let w;const f=t.getBestModeForData(p);if(w=t.from(m,f),w!==t.BYTE&&w.bit<f.bit)throw new Error('"'+p+'" cannot be encoded with mode '+t.toString(w)+`.
 Suggested mode is: `+t.toString(f));switch(w===t.KANJI&&!a.isKanjiModeEnabled()&&(w=t.BYTE),w){case t.NUMERIC:return new i(p);case t.ALPHANUMERIC:return new o(p);case t.KANJI:return new n(p);case t.BYTE:return new r(p)}}e.fromArray=function(m){return m.reduce(function(w,f){return typeof f=="string"?w.push(b(f,null)):f.data&&w.push(b(f.data,f.mode)),w},[])},e.fromString=function(m,w){const f=_(m,a.isKanjiModeEnabled()),x=$(f),P=h(x,w),A=l.find_path(P.map,"start","end"),H=[];for(let ce=1;ce<A.length-1;ce++)H.push(P.table[A[ce]].node);return e.fromArray(y(H))},e.rawSplit=function(m){return e.fromArray(_(m,a.isKanjiModeEnabled()))}})(cn);const lt=U,ht=rt,ri=Mn,si=Dn,ai=Zt,li=en,$t=tn,vt=st,ci=Un,Qe=rn,di=an,ui=pe,pt=cn;function hi(e,t){const i=e.size,o=li.getPositions(t);for(let r=0;r<o.length;r++){const n=o[r][0],s=o[r][1];for(let a=-1;a<=7;a++)if(!(n+a<=-1||i<=n+a))for(let l=-1;l<=7;l++)s+l<=-1||i<=s+l||(a>=0&&a<=6&&(l===0||l===6)||l>=0&&l<=6&&(a===0||a===6)||a>=2&&a<=4&&l>=2&&l<=4?e.set(n+a,s+l,!0,!0):e.set(n+a,s+l,!1,!0))}}function pi(e){const t=e.size;for(let i=8;i<t-8;i++){const o=i%2===0;e.set(i,6,o,!0),e.set(6,i,o,!0)}}function fi(e,t){const i=ai.getPositions(t);for(let o=0;o<i.length;o++){const r=i[o][0],n=i[o][1];for(let s=-2;s<=2;s++)for(let a=-2;a<=2;a++)s===-2||s===2||a===-2||a===2||s===0&&a===0?e.set(r+s,n+a,!0,!0):e.set(r+s,n+a,!1,!0)}}function gi(e,t){const i=e.size,o=Qe.getEncodedBits(t);let r,n,s;for(let a=0;a<18;a++)r=Math.floor(a/3),n=a%3+i-8-3,s=(o>>a&1)===1,e.set(r,n,s,!0),e.set(n,r,s,!0)}function ft(e,t,i){const o=e.size,r=di.getEncodedBits(t,i);let n,s;for(n=0;n<15;n++)s=(r>>n&1)===1,n<6?e.set(n,8,s,!0):n<8?e.set(n+1,8,s,!0):e.set(o-15+n,8,s,!0),n<8?e.set(8,o-n-1,s,!0):n<9?e.set(8,15-n-1+1,s,!0):e.set(8,15-n-1,s,!0);e.set(o-8,8,1,!0)}function mi(e,t){const i=e.size;let o=-1,r=i-1,n=7,s=0;for(let a=i-1;a>0;a-=2)for(a===6&&a--;;){for(let l=0;l<2;l++)if(!e.isReserved(r,a-l)){let c=!1;s<t.length&&(c=(t[s]>>>n&1)===1),e.set(r,a-l,c),n--,n===-1&&(s++,n=7)}if(r+=o,r<0||i<=r){r-=o,o=-o;break}}}function wi(e,t,i){const o=new ri;i.forEach(function(l){o.put(l.mode.bit,4),o.put(l.getLength(),ui.getCharCountIndicator(l.mode,e)),l.write(o)});const r=lt.getSymbolTotalCodewords(e),n=vt.getTotalCodewordsCount(e,t),s=(r-n)*8;for(o.getLengthInBits()+4<=s&&o.put(0,4);o.getLengthInBits()%8!==0;)o.putBit(0);const a=(s-o.getLengthInBits())/8;for(let l=0;l<a;l++)o.put(l%2?17:236,8);return bi(o,e,t)}function bi(e,t,i){const o=lt.getSymbolTotalCodewords(t),r=vt.getTotalCodewordsCount(t,i),n=o-r,s=vt.getBlocksCount(t,i),a=o%s,l=s-a,c=Math.floor(o/s),g=Math.floor(n/s),_=g+1,v=c-g,y=new ci(v);let $=0;const h=new Array(s),b=new Array(s);let p=0;const m=new Uint8Array(e.buffer);for(let A=0;A<s;A++){const H=A<l?g:_;h[A]=m.slice($,$+H),b[A]=y.encode(h[A]),$+=H,p=Math.max(p,H)}const w=new Uint8Array(o);let f=0,x,P;for(x=0;x<p;x++)for(P=0;P<s;P++)x<h[P].length&&(w[f++]=h[P][x]);for(x=0;x<v;x++)for(P=0;P<s;P++)w[f++]=b[P][x];return w}function yi(e,t,i,o){let r;if(Array.isArray(e))r=pt.fromArray(e);else if(typeof e=="string"){let c=t;if(!c){const g=pt.rawSplit(e);c=Qe.getBestVersionForData(g,i)}r=pt.fromString(e,c||40)}else throw new Error("Invalid data");const n=Qe.getBestVersionForData(r,i);if(!n)throw new Error("The amount of data is too big to be stored in a QR Code");if(!t)t=n;else if(t<n)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+n+`.
`);const s=wi(t,i,r),a=lt.getSymbolSize(t),l=new si(a);return hi(l,t),pi(l),fi(l,t),ft(l,i,0),t>=7&&gi(l,t),mi(l,s),isNaN(o)&&(o=$t.getBestMask(l,ft.bind(null,l,i))),$t.applyMask(o,l),ft(l,i,o),{modules:l,version:t,errorCorrectionLevel:i,maskPattern:o,segments:r}}Qt.create=function(t,i){if(typeof t>"u"||t==="")throw new Error("No input text");let o=ht.M,r,n;return typeof i<"u"&&(o=ht.from(i.errorCorrectionLevel,ht.M),r=Qe.from(i.version),n=$t.from(i.maskPattern),i.toSJISFunc&&lt.setToSJISFunction(i.toSJISFunc)),yi(t,r,o,n)};var dn={},kt={};(function(e){function t(i){if(typeof i=="number"&&(i=i.toString()),typeof i!="string")throw new Error("Color should be defined as hex string");let o=i.slice().replace("#","").split("");if(o.length<3||o.length===5||o.length>8)throw new Error("Invalid hex color: "+i);(o.length===3||o.length===4)&&(o=Array.prototype.concat.apply([],o.map(function(n){return[n,n]}))),o.length===6&&o.push("F","F");const r=parseInt(o.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:r&255,hex:"#"+o.slice(0,6).join("")}}e.getOptions=function(o){o||(o={}),o.color||(o.color={});const r=typeof o.margin>"u"||o.margin===null||o.margin<0?4:o.margin,n=o.width&&o.width>=21?o.width:void 0,s=o.scale||4;return{width:n,scale:n?4:s,margin:r,color:{dark:t(o.color.dark||"#000000ff"),light:t(o.color.light||"#ffffffff")},type:o.type,rendererOpts:o.rendererOpts||{}}},e.getScale=function(o,r){return r.width&&r.width>=o+r.margin*2?r.width/(o+r.margin*2):r.scale},e.getImageWidth=function(o,r){const n=e.getScale(o,r);return Math.floor((o+r.margin*2)*n)},e.qrToImageData=function(o,r,n){const s=r.modules.size,a=r.modules.data,l=e.getScale(s,n),c=Math.floor((s+n.margin*2)*l),g=n.margin*l,_=[n.color.light,n.color.dark];for(let v=0;v<c;v++)for(let y=0;y<c;y++){let $=(v*c+y)*4,h=n.color.light;if(v>=g&&y>=g&&v<c-g&&y<c-g){const b=Math.floor((v-g)/l),p=Math.floor((y-g)/l);h=_[a[b*s+p]?1:0]}o[$++]=h.r,o[$++]=h.g,o[$++]=h.b,o[$]=h.a}}})(kt);(function(e){const t=kt;function i(r,n,s){r.clearRect(0,0,n.width,n.height),n.style||(n.style={}),n.height=s,n.width=s,n.style.height=s+"px",n.style.width=s+"px"}function o(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}e.render=function(n,s,a){let l=a,c=s;typeof l>"u"&&(!s||!s.getContext)&&(l=s,s=void 0),s||(c=o()),l=t.getOptions(l);const g=t.getImageWidth(n.modules.size,l),_=c.getContext("2d"),v=_.createImageData(g,g);return t.qrToImageData(v.data,n,l),i(_,c,g),_.putImageData(v,0,0),c},e.renderToDataURL=function(n,s,a){let l=a;typeof l>"u"&&(!s||!s.getContext)&&(l=s,s=void 0),l||(l={});const c=e.render(n,s,l),g=l.type||"image/png",_=l.rendererOpts||{};return c.toDataURL(g,_.quality)}})(dn);var un={};const $i=kt;function Mt(e,t){const i=e.a/255,o=t+'="'+e.hex+'"';return i<1?o+" "+t+'-opacity="'+i.toFixed(2).slice(1)+'"':o}function gt(e,t,i){let o=e+t;return typeof i<"u"&&(o+=" "+i),o}function vi(e,t,i){let o="",r=0,n=!1,s=0;for(let a=0;a<e.length;a++){const l=Math.floor(a%t),c=Math.floor(a/t);!l&&!n&&(n=!0),e[a]?(s++,a>0&&l>0&&e[a-1]||(o+=n?gt("M",l+i,.5+c+i):gt("m",r,0),r=0,n=!1),l+1<t&&e[a+1]||(o+=gt("h",s),s=0)):r++}return o}un.render=function(t,i,o){const r=$i.getOptions(i),n=t.modules.size,s=t.modules.data,a=n+r.margin*2,l=r.color.light.a?"<path "+Mt(r.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",c="<path "+Mt(r.color.dark,"stroke")+' d="'+vi(s,n,r.margin)+'"/>',g='viewBox="0 0 '+a+" "+a+'"',v='<svg xmlns="http://www.w3.org/2000/svg" '+(r.width?'width="'+r.width+'" height="'+r.width+'" ':"")+g+' shape-rendering="crispEdges">'+l+c+`</svg>
`;return typeof o=="function"&&o(null,v),v};const Ci=On,Ct=Qt,hn=dn,xi=un;function Wt(e,t,i,o,r){const n=[].slice.call(arguments,1),s=n.length,a=typeof n[s-1]=="function";if(!a&&!Ci())throw new Error("Callback required as last argument");if(a){if(s<2)throw new Error("Too few arguments provided");s===2?(r=i,i=t,t=o=void 0):s===3&&(t.getContext&&typeof r>"u"?(r=o,o=void 0):(r=o,o=i,i=t,t=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(i=t,t=o=void 0):s===2&&!t.getContext&&(o=i,i=t,t=void 0),new Promise(function(l,c){try{const g=Ct.create(i,o);l(e(g,t,o))}catch(g){c(g)}})}try{const l=Ct.create(i,o);r(null,e(l,t,o))}catch(l){r(l)}}De.create=Ct.create;De.toCanvas=Wt.bind(null,hn.render);De.toDataURL=Wt.bind(null,hn.renderToDataURL);De.toString=Wt.bind(null,function(e,t,i){return xi.render(e,i)});const Ei=.1,Dt=2.5,ie=7;function mt(e,t,i){return e===t?!1:(e-t<0?t-e:e-t)<=i+Ei}function Ri(e,t){const i=Array.prototype.slice.call(De.create(e,{errorCorrectionLevel:t}).modules.data,0),o=Math.sqrt(i.length);return i.reduce((r,n,s)=>(s%o===0?r.push([n]):r[r.length-1].push(n))&&r,[])}const Si={generate({uri:e,size:t,logoSize:i,padding:o=8,dotColor:r="var(--apkt-colors-black)"}){const s=[],a=Ri(e,"Q"),l=(t-2*o)/a.length,c=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];c.forEach(({x:h,y:b})=>{const p=(a.length-ie)*l*h+o,m=(a.length-ie)*l*b+o,w=.45;for(let f=0;f<c.length;f+=1){const x=l*(ie-f*2);s.push(Ae`
            <rect
              fill=${f===2?"var(--apkt-colors-black)":"var(--apkt-colors-white)"}
              width=${f===0?x-10:x}
              rx= ${f===0?(x-10)*w:x*w}
              ry= ${f===0?(x-10)*w:x*w}
              stroke=${r}
              stroke-width=${f===0?10:0}
              height=${f===0?x-10:x}
              x= ${f===0?m+l*f+10/2:m+l*f}
              y= ${f===0?p+l*f+10/2:p+l*f}
            />
          `)}});const g=Math.floor((i+25)/l),_=a.length/2-g/2,v=a.length/2+g/2-1,y=[];a.forEach((h,b)=>{h.forEach((p,m)=>{if(a[b][m]&&!(b<ie&&m<ie||b>a.length-(ie+1)&&m<ie||b<ie&&m>a.length-(ie+1))&&!(b>_&&b<v&&m>_&&m<v)){const w=b*l+l/2+o,f=m*l+l/2+o;y.push([w,f])}})});const $={};return y.forEach(([h,b])=>{var p;$[h]?(p=$[h])==null||p.push(b):$[h]=[b]}),Object.entries($).map(([h,b])=>{const p=b.filter(m=>b.every(w=>!mt(m,w,l)));return[Number(h),p]}).forEach(([h,b])=>{b.forEach(p=>{s.push(Ae`<circle cx=${h} cy=${p} fill=${r} r=${l/Dt} />`)})}),Object.entries($).filter(([h,b])=>b.length>1).map(([h,b])=>{const p=b.filter(m=>b.some(w=>mt(m,w,l)));return[Number(h),p]}).map(([h,b])=>{b.sort((m,w)=>m<w?-1:1);const p=[];for(const m of b){const w=p.find(f=>f.some(x=>mt(m,x,l)));w?w.push(m):p.push([m])}return[h,p.map(m=>[m[0],m[m.length-1]])]}).forEach(([h,b])=>{b.forEach(([p,m])=>{s.push(Ae`
              <line
                x1=${h}
                x2=${h}
                y1=${p}
                y2=${m}
                stroke=${r}
                stroke-width=${l/(Dt/2)}
                stroke-linecap="round"
              />
            `)})}),s}},Ti=B`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: 100%;
    height: 100%;
    background-color: ${({colors:e})=>e.white};
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
  }

  :host {
    border-radius: ${({borderRadius:e})=>e[4]};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    box-shadow: inset 0 0 0 4px ${({tokens:e})=>e.theme.backgroundPrimary};
    border-radius: ${({borderRadius:e})=>e[6]};
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }

  wui-icon > svg {
    width: inherit;
    height: inherit;
  }
`;var fe=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Q=class extends k{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`--local-size: ${this.size}px`,d`<wui-flex
      alignItems="center"
      justifyContent="center"
      class="wui-qr-code"
      direction="column"
      gap="4"
      width="100%"
      style="height: 100%"
    >
      ${this.templateVisual()} ${this.templateSvg()}
    </wui-flex>`}templateSvg(){return Ae`
      <svg height=${this.size} width=${this.size}>
        ${Si.generate({uri:this.uri,size:this.size,logoSize:this.arenaClear?0:this.size/4})}
      </svg>
    `}templateVisual(){return this.imageSrc?d`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?d`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:d`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};Q.styles=[j,Ti];fe([u()],Q.prototype,"uri",void 0);fe([u({type:Number})],Q.prototype,"size",void 0);fe([u()],Q.prototype,"theme",void 0);fe([u()],Q.prototype,"imageSrc",void 0);fe([u()],Q.prototype,"alt",void 0);fe([u({type:Boolean})],Q.prototype,"arenaClear",void 0);fe([u({type:Boolean})],Q.prototype,"farcaster",void 0);Q=fe([I("wui-qr-code")],Q);const Ii=B`
  :host {
    display: block;
    background: linear-gradient(
      90deg,
      ${({tokens:e})=>e.theme.foregroundSecondary} 0%,
      ${({tokens:e})=>e.theme.foregroundTertiary} 50%,
      ${({tokens:e})=>e.theme.foregroundSecondary} 100%
    );
    background-size: 200% 100%;
    animation: shimmer 1s ease-in-out infinite;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-rounded='true']) {
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;var Ue=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ve=class extends k{constructor(){super(...arguments),this.width="",this.height="",this.variant="default",this.rounded=!1}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
    `,this.dataset.rounded=this.rounded?"true":"false",d`<slot></slot>`}};ve.styles=[Ii];Ue([u()],ve.prototype,"width",void 0);Ue([u()],ve.prototype,"height",void 0);Ue([u()],ve.prototype,"variant",void 0);Ue([u({type:Boolean})],ve.prototype,"rounded",void 0);ve=Ue([I("wui-shimmer")],ve);const _i=B`
  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;var pn=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Xe=class extends L{constructor(){super(),this.basic=!1,this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate)}firstUpdated(){var t,i,o;this.basic||O.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:((t=this.wallet)==null?void 0:t.name)??"WalletConnect",platform:"qrcode",displayIndex:(i=this.wallet)==null?void 0:i.display_index,walletRank:(o=this.wallet)==null?void 0:o.order,view:E.state.view}})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.unsubscribe)==null||t.forEach(i=>i()),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),d`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","5","5","5"]}
        gap="5"
      >
        <wui-shimmer width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>
        <wui-text variant="lg-medium" color="primary"> Scan this QR Code with your phone </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){var r,n;if(!this.uri||!this.ready)return null;const t=this.getBoundingClientRect().width-40,i=this.wallet?this.wallet.name:void 0;S.setWcLinking(void 0),S.setRecentWallet(this.wallet);let o=this.uri;if((r=this.wallet)!=null&&r.mobile_link){const{redirect:s}=R.formatNativeUrl((n=this.wallet)==null?void 0:n.mobile_link,this.uri,null);o=s}return d` <wui-qr-code
      size=${t}
      theme=${wt.state.themeMode}
      uri=${o}
      imageSrc=${W(he.getWalletImage(this.wallet))}
      color=${W(wt.state.themeVariables["--w3m-qr-color"])}
      alt=${W(i)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){const t=!this.uri||!this.ready;return d`<wui-button
      .disabled=${t}
      @click=${this.onCopyUri}
      variant="neutral-secondary"
      size="sm"
      data-testid="copy-wc2-uri"
    >
      Copy link
      <wui-icon size="sm" color="inherit" name="copy" slot="iconRight"></wui-icon>
    </wui-button>`}};Xe.styles=_i;pn([u({type:Boolean})],Xe.prototype,"basic",void 0);Xe=pn([I("w3m-connecting-wc-qrcode")],Xe);var ki=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let jt=class extends k{constructor(){var t,i,o;if(super(),this.wallet=(t=E.state.data)==null?void 0:t.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");O.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:(i=this.wallet)==null?void 0:i.display_index,walletRank:(o=this.wallet)==null?void 0:o.order,view:E.state.view}})}render(){return d`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="5"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${W(he.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="md-regular" color="primary">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};jt=ki([I("w3m-connecting-wc-unsupported")],jt);var fn=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let xt=class extends L{constructor(){var t,i;if(super(),this.isLoading=!0,!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel=Ht.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.updateLoadingState(),this.unsubscribe.push(S.subscribeKey("wcUri",()=>{this.updateLoadingState()})),O.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web",displayIndex:(t=this.wallet)==null?void 0:t.display_index,walletRank:(i=this.wallet)==null?void 0:i.order,view:E.state.view}})}updateLoadingState(){this.isLoading=!this.uri}onConnectProxy(){var t;if((t=this.wallet)!=null&&t.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:i,name:o}=this.wallet,{redirect:r,href:n}=R.formatUniversalUrl(i,this.uri);S.setWcLinking({name:o,href:n}),S.setRecentWallet(this.wallet),R.openHref(r,"_blank")}catch{this.error=!0}}};fn([C()],xt.prototype,"isLoading",void 0);xt=fn([I("w3m-connecting-wc-web")],xt);const Wi=B`
  :host([data-mobile-fullscreen='true']) {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  :host([data-mobile-fullscreen='true']) wui-ux-by-reown {
    margin-top: auto;
  }
`;var Ee=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let se=class extends k{constructor(){var t;super(),this.wallet=(t=E.state.data)==null?void 0:t.wallet,this.unsubscribe=[],this.platform=void 0,this.platforms=[],this.isSiwxEnabled=!!N.state.siwx,this.remoteFeatures=N.state.remoteFeatures,this.displayBranding=!0,this.basic=!1,this.determinePlatforms(),this.initializeConnection(),this.unsubscribe.push(N.subscribeKey("remoteFeatures",i=>this.remoteFeatures=i))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return N.state.enableMobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),d`
      ${this.headerTemplate()}
      <div class="platform-container">${this.platformTemplate()}</div>
      ${this.reownBrandingTemplate()}
    `}reownBrandingTemplate(){var t;return!((t=this.remoteFeatures)!=null&&t.reownBranding)||!this.displayBranding?null:d`<wui-ux-by-reown></wui-ux-by-reown>`}async initializeConnection(t=!1){var i,o;if(!(this.platform==="browser"||N.state.manualWCControl&&!t))try{const{wcPairingExpiry:r,status:n}=S.state,{redirectView:s}=E.state.data??{};if(t||N.state.enableEmbedded||R.isPairingExpired(r)||n==="connecting"){const a=S.getConnections(de.state.activeChain),l=(i=this.remoteFeatures)==null?void 0:i.multiWallet,c=a.length>0;await S.connectWalletConnect({cache:"never"}),this.isSiwxEnabled||(c&&l?(E.replace("ProfileWallets"),Ne.showSuccess("New Wallet Added")):s?E.replace(s):Kt.close())}}catch(r){if(r instanceof Error&&r.message.includes("An error occurred when attempting to switch chain")&&!N.state.enableNetworkSwitch&&de.state.activeChain){de.setActiveCaipNetwork(yn.getUnsupportedNetwork(`${de.state.activeChain}:${(o=de.state.activeCaipNetwork)==null?void 0:o.id}`)),de.showUnsupportedChainUI();return}r instanceof qt&&r.originalName===Yt.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?O.sendEvent({type:"track",event:"USER_REJECTED",properties:{message:r.message}}):O.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(r==null?void 0:r.message)??"Unknown"}}),S.setWcError(!0),Ne.showError(r.message??"Connection error"),S.resetWcConnection(),E.goBack()}}determinePlatforms(){if(!this.wallet){this.platforms.push("qrcode"),this.platform="qrcode";return}if(this.platform)return;const{mobile_link:t,desktop_link:i,webapp_link:o,injected:r,rdns:n}=this.wallet,s=r==null?void 0:r.map(({injected_id:$})=>$).filter(Boolean),a=[...n?[n]:s??[]],l=N.state.isUniversalProvider?!1:a.length,c=t,g=o,_=S.checkInstalled(a),v=l&&_,y=i&&!R.isMobile();v&&!de.state.noAdapters&&this.platforms.push("browser"),c&&this.platforms.push(R.isMobile()?"mobile":"qrcode"),g&&this.platforms.push("web"),y&&this.platforms.push("desktop"),!v&&l&&!de.state.noAdapters&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return d`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return d`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return d`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return d`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return d`<w3m-connecting-wc-qrcode ?basic=${this.basic}></w3m-connecting-wc-qrcode>`;default:return d`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?d`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(t){var o;const i=(o=this.shadowRoot)==null?void 0:o.querySelector("div");i&&(await i.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=t,i.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};se.styles=Wi;Ee([C()],se.prototype,"platform",void 0);Ee([C()],se.prototype,"platforms",void 0);Ee([C()],se.prototype,"isSiwxEnabled",void 0);Ee([C()],se.prototype,"remoteFeatures",void 0);Ee([u({type:Boolean})],se.prototype,"displayBranding",void 0);Ee([u({type:Boolean})],se.prototype,"basic",void 0);se=Ee([I("w3m-connecting-wc-view")],se);var Pt=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Ze=class extends k{constructor(){super(),this.unsubscribe=[],this.isMobile=R.isMobile(),this.remoteFeatures=N.state.remoteFeatures,this.unsubscribe.push(N.subscribeKey("remoteFeatures",t=>this.remoteFeatures=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){if(this.isMobile){const{featured:t,recommended:i}=T.state,{customWallets:o}=N.state,r=$n.getRecentWallets(),n=t.length||i.length||(o==null?void 0:o.length)||r.length;return d`<wui-flex flexDirection="column" gap="2" .margin=${["1","3","3","3"]}>
        ${n?d`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return d`<wui-flex flexDirection="column" .padding=${["0","0","4","0"]}>
        <w3m-connecting-wc-view ?basic=${!0} .displayBranding=${!1}></w3m-connecting-wc-view>
        <wui-flex flexDirection="column" .padding=${["0","3","0","3"]}>
          <w3m-all-wallets-widget></w3m-all-wallets-widget>
        </wui-flex>
      </wui-flex>
      ${this.reownBrandingTemplate()} `}reownBrandingTemplate(){var t;return(t=this.remoteFeatures)!=null&&t.reownBranding?d` <wui-flex flexDirection="column" .padding=${["1","0","1","0"]}>
      <wui-ux-by-reown></wui-ux-by-reown>
    </wui-flex>`:null}};Pt([C()],Ze.prototype,"isMobile",void 0);Pt([C()],Ze.prototype,"remoteFeatures",void 0);Ze=Pt([I("w3m-connecting-wc-basic-view")],Ze);const Pi=B`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    user-select: none;
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      color ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      border ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      width ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      height ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({colors:e})=>e.neutrals300};
    border-radius: ${({borderRadius:e})=>e.round};
    border: 1px solid transparent;
    will-change: border;
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      color ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      border ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      width ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      height ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  span:before {
    content: '';
    position: absolute;
    background-color: ${({colors:e})=>e.white};
    border-radius: 50%;
  }

  /* -- Sizes --------------------------------------------------------- */
  label[data-size='lg'] {
    width: 48px;
    height: 32px;
  }

  label[data-size='md'] {
    width: 40px;
    height: 28px;
  }

  label[data-size='sm'] {
    width: 32px;
    height: 22px;
  }

  label[data-size='lg'] > span:before {
    height: 24px;
    width: 24px;
    left: 4px;
    top: 3px;
  }

  label[data-size='md'] > span:before {
    height: 20px;
    width: 20px;
    left: 4px;
    top: 3px;
  }

  label[data-size='sm'] > span:before {
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
  }

  /* -- Focus states --------------------------------------------------- */
  input:focus-visible:not(:checked) + span,
  input:focus:not(:checked) + span {
    border: 1px solid ${({tokens:e})=>e.core.iconAccentPrimary};
    background-color: ${({tokens:e})=>e.theme.textTertiary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  input:focus-visible:checked + span,
  input:focus:checked + span {
    border: 1px solid ${({tokens:e})=>e.core.iconAccentPrimary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  /* -- Checked states --------------------------------------------------- */
  input:checked + span {
    background-color: ${({tokens:e})=>e.core.iconAccentPrimary};
  }

  label[data-size='lg'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='md'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='sm'] > input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }

  /* -- Hover states ------------------------------------------------------- */
  label:hover > input:not(:checked):not(:disabled) + span {
    background-color: ${({colors:e})=>e.neutrals400};
  }

  label:hover > input:checked:not(:disabled) + span {
    background-color: ${({colors:e})=>e.accent080};
  }

  /* -- Disabled state --------------------------------------------------- */
  label:has(input:disabled) {
    pointer-events: none;
    user-select: none;
  }

  input:not(:checked):disabled + span {
    background-color: ${({colors:e})=>e.neutrals700};
  }

  input:checked:disabled + span {
    background-color: ${({colors:e})=>e.neutrals700};
  }

  input:not(:checked):disabled + span::before {
    background-color: ${({colors:e})=>e.neutrals400};
  }

  input:checked:disabled + span::before {
    background-color: ${({tokens:e})=>e.theme.textTertiary};
  }
`;var ct=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ke=class extends k{constructor(){super(...arguments),this.inputElementRef=Et(),this.checked=!1,this.disabled=!1,this.size="md"}render(){return d`
      <label data-size=${this.size}>
        <input
          ${Rt(this.inputElementRef)}
          type="checkbox"
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){var t;this.dispatchEvent(new CustomEvent("switchChange",{detail:(t=this.inputElementRef.value)==null?void 0:t.checked,bubbles:!0,composed:!0}))}};ke.styles=[j,ae,Pi];ct([u({type:Boolean})],ke.prototype,"checked",void 0);ct([u({type:Boolean})],ke.prototype,"disabled",void 0);ct([u()],ke.prototype,"size",void 0);ke=ct([I("wui-toggle")],ke);const Bi=B`
  :host {
    height: auto;
  }

  :host > wui-flex {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.theme.foregroundPrimary};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`;var gn=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let et=class extends k{constructor(){super(...arguments),this.checked=!1}render(){return d`
      <wui-flex>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-toggle
          ?checked=${this.checked}
          size="sm"
          @switchChange=${this.handleToggleChange.bind(this)}
        ></wui-toggle>
      </wui-flex>
    `}handleToggleChange(t){t.stopPropagation(),this.checked=t.detail,this.dispatchSwitchEvent()}dispatchSwitchEvent(){this.dispatchEvent(new CustomEvent("certifiedSwitchChange",{detail:this.checked,bubbles:!0,composed:!0}))}};et.styles=[j,ae,Bi];gn([u({type:Boolean})],et.prototype,"checked",void 0);et=gn([I("wui-certified-switch")],et);const Ai=B`
  :host {
    position: relative;
    width: 100%;
    display: inline-flex;
    flex-direction: column;
    gap: ${({spacing:e})=>e[3]};
    color: ${({tokens:e})=>e.theme.textPrimary};
    caret-color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  .wui-input-text-container {
    position: relative;
    display: flex;
  }

  input {
    width: 100%;
    border-radius: ${({borderRadius:e})=>e[4]};
    color: inherit;
    background: transparent;
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
    caret-color: ${({tokens:e})=>e.core.textAccentPrimary};
    padding: ${({spacing:e})=>e[3]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[3]} ${({spacing:e})=>e[10]};
    font-size: ${({textSize:e})=>e.large};
    line-height: ${({typography:e})=>e["lg-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["lg-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
  }

  input[data-size='lg'] {
    padding: ${({spacing:e})=>e[4]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[4]} ${({spacing:e})=>e[10]};
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      border: 1px solid ${({tokens:e})=>e.theme.borderSecondary};
    }
  }

  input:disabled {
    cursor: unset;
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
  }

  input::placeholder {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  input:focus:enabled {
    border: 1px solid ${({tokens:e})=>e.theme.borderSecondary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    -webkit-box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent040};
    -moz-box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent040};
    box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent040};
  }

  div.wui-input-text-container:has(input:disabled) {
    opacity: 0.5;
  }

  wui-icon.wui-input-text-left-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    left: ${({spacing:e})=>e[4]};
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  button.wui-input-text-submit-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({spacing:e})=>e[3]};
    width: 24px;
    height: 24px;
    border: none;
    background: transparent;
    border-radius: ${({borderRadius:e})=>e[2]};
    color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  button.wui-input-text-submit-button:disabled {
    opacity: 1;
  }

  button.wui-input-text-submit-button.loading wui-icon {
    animation: spin 1s linear infinite;
  }

  button.wui-input-text-submit-button:hover {
    background: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  input:has(+ .wui-input-text-submit-button) {
    padding-right: ${({spacing:e})=>e[12]};
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  /* -- Keyframes --------------------------------------------------- */
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;var K=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let z=class extends k{constructor(){super(...arguments),this.inputElementRef=Et(),this.disabled=!1,this.loading=!1,this.placeholder="",this.type="text",this.value="",this.size="md"}render(){return d` <div class="wui-input-text-container">
        ${this.templateLeftIcon()}
        <input
          data-size=${this.size}
          ${Rt(this.inputElementRef)}
          data-testid="wui-input-text"
          type=${this.type}
          enterkeyhint=${W(this.enterKeyHint)}
          ?disabled=${this.disabled}
          placeholder=${this.placeholder}
          @input=${this.dispatchInputChangeEvent.bind(this)}
          @keydown=${this.onKeyDown}
          .value=${this.value||""}
        />
        ${this.templateSubmitButton()}
        <slot class="wui-input-text-slot"></slot>
      </div>
      ${this.templateError()} ${this.templateWarning()}`}templateLeftIcon(){return this.icon?d`<wui-icon
        class="wui-input-text-left-icon"
        size="md"
        data-size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}templateSubmitButton(){var t;return this.onSubmit?d`<button
        class="wui-input-text-submit-button ${this.loading?"loading":""}"
        @click=${(t=this.onSubmit)==null?void 0:t.bind(this)}
        ?disabled=${this.disabled||this.loading}
      >
        ${this.loading?d`<wui-icon name="spinner" size="md"></wui-icon>`:d`<wui-icon name="chevronRight" size="md"></wui-icon>`}
      </button>`:null}templateError(){return this.errorText?d`<wui-text variant="sm-regular" color="error">${this.errorText}</wui-text>`:null}templateWarning(){return this.warningText?d`<wui-text variant="sm-regular" color="warning">${this.warningText}</wui-text>`:null}dispatchInputChangeEvent(){var t;this.dispatchEvent(new CustomEvent("inputChange",{detail:(t=this.inputElementRef.value)==null?void 0:t.value,bubbles:!0,composed:!0}))}};z.styles=[j,ae,Ai];K([u()],z.prototype,"icon",void 0);K([u({type:Boolean})],z.prototype,"disabled",void 0);K([u({type:Boolean})],z.prototype,"loading",void 0);K([u()],z.prototype,"placeholder",void 0);K([u()],z.prototype,"type",void 0);K([u()],z.prototype,"value",void 0);K([u()],z.prototype,"errorText",void 0);K([u()],z.prototype,"warningText",void 0);K([u()],z.prototype,"onSubmit",void 0);K([u()],z.prototype,"size",void 0);K([u({attribute:!1})],z.prototype,"onKeyDown",void 0);z=K([I("wui-input-text")],z);const Li=B`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({spacing:e})=>e[3]};
    color: ${({tokens:e})=>e.theme.iconDefault};
    cursor: pointer;
    padding: ${({spacing:e})=>e[2]};
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
  }

  @media (hover: hover) {
    wui-icon:hover {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }
`;var mn=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let tt=class extends k{constructor(){super(...arguments),this.inputComponentRef=Et(),this.inputValue=""}render(){return d`
      <wui-input-text
        ${Rt(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
        @inputChange=${this.onInputChange}
      >
        ${this.inputValue?d`<wui-icon
              @click=${this.clearValue}
              color="inherit"
              size="sm"
              name="close"
            ></wui-icon>`:null}
      </wui-input-text>
    `}onInputChange(t){this.inputValue=t.detail||""}clearValue(){const t=this.inputComponentRef.value,i=t==null?void 0:t.inputElementRef.value;i&&(i.value="",this.inputValue="",i.focus(),i.dispatchEvent(new Event("input")))}};tt.styles=[j,Li];mn([u()],tt.prototype,"inputValue",void 0);tt=mn([I("wui-search-bar")],tt);const Ni=Ae`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,Oi=B`
  :host {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 104px;
    width: 104px;
    row-gap: ${({spacing:e})=>e[2]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[5]};
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--apkt-path-network);
    clip-path: var(--apkt-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: ${({tokens:e})=>e.theme.foregroundSecondary};
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`;var wn=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let nt=class extends k{constructor(){super(...arguments),this.type="wallet"}render(){return d`
      ${this.shimmerTemplate()}
      <wui-shimmer width="80px" height="20px"></wui-shimmer>
    `}shimmerTemplate(){return this.type==="network"?d` <wui-shimmer data-type=${this.type} width="48px" height="54px"></wui-shimmer>
        ${Ni}`:d`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}};nt.styles=[j,ae,Oi];wn([u()],nt.prototype,"type",void 0);nt=wn([I("wui-card-select-loader")],nt);const zi=Vt`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var q=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let M=class extends k{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--apkt-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--apkt-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--apkt-spacing-${this.gap})`};
      padding-top: ${this.padding&&oe.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&oe.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&oe.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&oe.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&oe.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&oe.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&oe.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&oe.getSpacingStyles(this.margin,3)};
    `,d`<slot></slot>`}};M.styles=[j,zi];q([u()],M.prototype,"gridTemplateRows",void 0);q([u()],M.prototype,"gridTemplateColumns",void 0);q([u()],M.prototype,"justifyItems",void 0);q([u()],M.prototype,"alignItems",void 0);q([u()],M.prototype,"justifyContent",void 0);q([u()],M.prototype,"alignContent",void 0);q([u()],M.prototype,"columnGap",void 0);q([u()],M.prototype,"rowGap",void 0);q([u()],M.prototype,"gap",void 0);q([u()],M.prototype,"padding",void 0);q([u()],M.prototype,"margin",void 0);M=q([I("wui-grid")],M);const Mi=B`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[3]} ${({spacing:e})=>e[0]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: clamp(0px, ${({borderRadius:e})=>e[4]}, 20px);
    transition:
      color ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-1"]},
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]},
      border-radius ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]};
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: ${({tokens:e})=>e.theme.textPrimary};
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  button:disabled > wui-flex > wui-text {
    color: ${({tokens:e})=>e.core.glass010};
  }

  [data-selected='true'] {
    background-color: ${({colors:e})=>e.accent020};
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: ${({colors:e})=>e.accent010};
    }
  }

  [data-selected='true']:active:enabled {
    background-color: ${({colors:e})=>e.accent010};
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`;var ee=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let F=class extends k{constructor(){super(),this.observer=new IntersectionObserver(()=>{}),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.isImpressed=!1,this.explorerId="",this.walletQuery="",this.certified=!1,this.displayIndex=0,this.wallet=void 0,this.observer=new IntersectionObserver(t=>{t.forEach(i=>{i.isIntersecting?(this.visible=!0,this.fetchImageSrc(),this.sendImpressionEvent()):this.visible=!1})},{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){var i,o;const t=((i=this.wallet)==null?void 0:i.badge_type)==="certified";return d`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="1">
          <wui-text
            variant="md-regular"
            color="inherit"
            class=${W(t?"certified":void 0)}
            >${(o=this.wallet)==null?void 0:o.name}</wui-text
          >
          ${t?d`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){var t,i;return!this.visible&&!this.imageSrc||this.imageLoading?this.shimmerTemplate():d`
      <wui-wallet-image
        size="lg"
        imageSrc=${W(this.imageSrc)}
        name=${W((t=this.wallet)==null?void 0:t.name)}
        .installed=${((i=this.wallet)==null?void 0:i.installed)??!1}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}shimmerTemplate(){return d`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}async fetchImageSrc(){this.wallet&&(this.imageSrc=he.getWalletImage(this.wallet),!this.imageSrc&&(this.imageLoading=!0,this.imageSrc=await he.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}sendImpressionEvent(){!this.wallet||this.isImpressed||(this.isImpressed=!0,O.sendWalletImpressionEvent({name:this.wallet.name,walletRank:this.wallet.order,explorerId:this.explorerId,view:E.state.view,query:this.walletQuery,certified:this.certified,displayIndex:this.displayIndex}))}};F.styles=Mi;ee([C()],F.prototype,"visible",void 0);ee([C()],F.prototype,"imageSrc",void 0);ee([C()],F.prototype,"imageLoading",void 0);ee([C()],F.prototype,"isImpressed",void 0);ee([u()],F.prototype,"explorerId",void 0);ee([u()],F.prototype,"walletQuery",void 0);ee([u()],F.prototype,"certified",void 0);ee([u()],F.prototype,"displayIndex",void 0);ee([u({type:Object})],F.prototype,"wallet",void 0);F=ee([I("w3m-all-wallets-list-item")],F);const Di=B`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  :host([data-mobile-fullscreen='true']) wui-grid {
    max-height: none;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  w3m-all-wallets-list-item {
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e["ease-inout-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-loading-spinner {
    padding-top: ${({spacing:e})=>e[4]};
    padding-bottom: ${({spacing:e})=>e[4]};
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;var ge=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const Ut="local-paginator";let X=class extends k{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.loading=!T.state.wallets.length,this.wallets=T.state.wallets,this.recommended=T.state.recommended,this.featured=T.state.featured,this.filteredWallets=T.state.filteredWallets,this.mobileFullScreen=N.state.enableMobileFullScreen,this.unsubscribe.push(T.subscribeKey("wallets",t=>this.wallets=t),T.subscribeKey("recommended",t=>this.recommended=t),T.subscribeKey("featured",t=>this.featured=t),T.subscribeKey("filteredWallets",t=>this.filteredWallets=t))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){var t;this.unsubscribe.forEach(i=>i()),(t=this.paginationObserver)==null||t.disconnect()}render(){return this.mobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),d`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0","3","3","3"]}
        gap="2"
        justifyContent="space-between"
      >
        ${this.loading?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){var i;this.loading=!0;const t=(i=this.shadowRoot)==null?void 0:i.querySelector("wui-grid");t&&(await T.fetchWalletsByPage({page:1}),await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.loading=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(t,i){return[...Array(t)].map(()=>d`
        <wui-card-select-loader type="wallet" id=${W(i)}></wui-card-select-loader>
      `)}getWallets(){var r;const t=[...this.featured,...this.recommended];((r=this.filteredWallets)==null?void 0:r.length)>0?t.push(...this.filteredWallets):t.push(...this.wallets);const i=R.uniqueBy(t,"id"),o=bt.markWalletsAsInstalled(i);return bt.markWalletsWithDisplayIndex(o)}walletsTemplate(){return this.getWallets().map((i,o)=>d`
        <w3m-all-wallets-list-item
          data-testid="wallet-search-item-${i.id}"
          @click=${()=>this.onConnectWallet(i)}
          .wallet=${i}
          explorerId=${i.id}
          certified=${this.badge==="certified"}
          displayIndex=${o}
        ></w3m-all-wallets-list-item>
      `)}paginationLoaderTemplate(){const{wallets:t,recommended:i,featured:o,count:r,mobileFilteredOutWalletsLength:n}=T.state,s=window.innerWidth<352?3:4,a=t.length+i.length;let c=Math.ceil(a/s)*s-a+s;return c-=t.length?o.length%s:0,r===0&&o.length>0?null:r===0||[...o,...t,...i].length<r-(n??0)?this.shimmerTemplate(c,Ut):null}createPaginationObserver(){var i;const t=(i=this.shadowRoot)==null?void 0:i.querySelector(`#${Ut}`);t&&(this.paginationObserver=new IntersectionObserver(([o])=>{if(o!=null&&o.isIntersecting&&!this.loading){const{page:r,count:n,wallets:s}=T.state;s.length<n&&T.fetchWalletsByPage({page:r+1})}}),this.paginationObserver.observe(t))}onConnectWallet(t){D.selectWalletConnector(t)}};X.styles=Di;ge([C()],X.prototype,"loading",void 0);ge([C()],X.prototype,"wallets",void 0);ge([C()],X.prototype,"recommended",void 0);ge([C()],X.prototype,"featured",void 0);ge([C()],X.prototype,"filteredWallets",void 0);ge([C()],X.prototype,"badge",void 0);ge([C()],X.prototype,"mobileFullScreen",void 0);X=ge([I("w3m-all-wallets-list")],X);const ji=Vt`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  :host([data-mobile-fullscreen='true']) wui-grid {
    max-height: none;
    height: auto;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;var Fe=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Ce=class extends k{constructor(){super(...arguments),this.prevQuery="",this.prevBadge=void 0,this.loading=!0,this.mobileFullScreen=N.state.enableMobileFullScreen,this.query=""}render(){return this.mobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),this.onSearch(),this.loading?d`<wui-loading-spinner color="accent-primary"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){(this.query.trim()!==this.prevQuery.trim()||this.badge!==this.prevBadge)&&(this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,await T.searchWallet({search:this.query,badge:this.badge}),this.loading=!1)}walletsTemplate(){const{search:t}=T.state,i=bt.markWalletsAsInstalled(t);return t.length?d`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0","3","3","3"]}
        rowGap="4"
        columngap="2"
        justifyContent="space-between"
      >
        ${i.map((o,r)=>d`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(o)}
              .wallet=${o}
              data-testid="wallet-search-item-${o.id}"
              explorerId=${o.id}
              certified=${this.badge==="certified"}
              walletQuery=${this.query}
              displayIndex=${r}
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `:d`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="3"
          flexDirection="column"
        >
          <wui-icon-box size="lg" color="default" icon="wallet"></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="secondary" variant="md-medium">
            No Wallet found
          </wui-text>
        </wui-flex>
      `}onConnectWallet(t){D.selectWalletConnector(t)}};Ce.styles=ji;Fe([C()],Ce.prototype,"loading",void 0);Fe([C()],Ce.prototype,"mobileFullScreen",void 0);Fe([u()],Ce.prototype,"query",void 0);Fe([u()],Ce.prototype,"badge",void 0);Ce=Fe([I("w3m-all-wallets-search")],Ce);var Bt=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let it=class extends k{constructor(){super(...arguments),this.search="",this.badge=void 0,this.onDebouncedSearch=R.debounce(t=>{this.search=t})}render(){const t=this.search.length>=2;return d`
      <wui-flex .padding=${["1","3","3","3"]} gap="2" alignItems="center">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge==="certified"}
          @certifiedSwitchChange=${this.onCertifiedSwitchChange.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${t||this.badge?d`<w3m-all-wallets-search
            query=${this.search}
            .badge=${this.badge}
          ></w3m-all-wallets-search>`:d`<w3m-all-wallets-list .badge=${this.badge}></w3m-all-wallets-list>`}
    `}onInputChange(t){this.onDebouncedSearch(t.detail)}onCertifiedSwitchChange(t){t.detail?(this.badge="certified",Ne.showSvg("Only WalletConnect certified",{icon:"walletConnectBrown",iconColor:"accent-100"})):this.badge=void 0}qrButtonTemplate(){return R.isMobile()?d`
        <wui-icon-box
          size="xl"
          iconSize="xl"
          color="accent-primary"
          icon="qrCode"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){E.push("ConnectingWalletConnect")}};Bt([C()],it.prototype,"search",void 0);Bt([C()],it.prototype,"badge",void 0);it=Bt([I("w3m-all-wallets-view")],it);const Ui=B`
  :host {
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      scale ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, scale;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-image {
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var te=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let V=class extends k{constructor(){super(...arguments),this.imageSrc="google",this.loading=!1,this.disabled=!1,this.rightIcon=!0,this.rounded=!1,this.fullSize=!1}render(){return this.dataset.rounded=this.rounded?"true":"false",d`
      <button
        ?disabled=${this.loading?!0:!!this.disabled}
        data-loading=${this.loading}
        tabindex=${W(this.tabIdx)}
      >
        <wui-flex gap="2" alignItems="center">
          ${this.templateLeftIcon()}
          <wui-flex gap="1">
            <slot></slot>
          </wui-flex>
        </wui-flex>
        ${this.templateRightIcon()}
      </button>
    `}templateLeftIcon(){return this.icon?d`<wui-image
        icon=${this.icon}
        iconColor=${W(this.iconColor)}
        ?boxed=${!0}
        ?rounded=${this.rounded}
      ></wui-image>`:d`<wui-image
      ?boxed=${!0}
      ?rounded=${this.rounded}
      ?fullSize=${this.fullSize}
      src=${this.imageSrc}
    ></wui-image>`}templateRightIcon(){return this.rightIcon?this.loading?d`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:d`<wui-icon name="chevronRight" size="lg" color="default"></wui-icon>`:null}};V.styles=[j,ae,Ui];te([u()],V.prototype,"imageSrc",void 0);te([u()],V.prototype,"icon",void 0);te([u()],V.prototype,"iconColor",void 0);te([u({type:Boolean})],V.prototype,"loading",void 0);te([u()],V.prototype,"tabIdx",void 0);te([u({type:Boolean})],V.prototype,"disabled",void 0);te([u({type:Boolean})],V.prototype,"rightIcon",void 0);te([u({type:Boolean})],V.prototype,"rounded",void 0);te([u({type:Boolean})],V.prototype,"fullSize",void 0);V=te([I("wui-list-item")],V);var Fi=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Ft=class extends k{constructor(){var t;super(...arguments),this.wallet=(t=E.state.data)==null?void 0:t.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return d`
      <wui-flex gap="2" flexDirection="column" .padding=${["3","3","4","3"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){var t;return(t=this.wallet)!=null&&t.chrome_store?d`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){var t;return(t=this.wallet)!=null&&t.app_store?d`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){var t;return(t=this.wallet)!=null&&t.play_store?d`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){var t;return(t=this.wallet)!=null&&t.homepage?d`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="md-medium" color="primary">Website</wui-text>
      </wui-list-item>
    `:null}openStore(t){t.href&&this.wallet&&(O.sendEvent({type:"track",event:"GET_WALLET",properties:{name:this.wallet.name,walletRank:this.wallet.order,explorerId:this.wallet.id,type:t.type}}),R.openHref(t.href,"_blank"))}onChromeStore(){var t;(t=this.wallet)!=null&&t.chrome_store&&this.openStore({href:this.wallet.chrome_store,type:"chrome_store"})}onAppStore(){var t;(t=this.wallet)!=null&&t.app_store&&this.openStore({href:this.wallet.app_store,type:"app_store"})}onPlayStore(){var t;(t=this.wallet)!=null&&t.play_store&&this.openStore({href:this.wallet.play_store,type:"play_store"})}onHomePage(){var t;(t=this.wallet)!=null&&t.homepage&&this.openStore({href:this.wallet.homepage,type:"homepage"})}};Ft=Fi([I("w3m-downloads-view")],Ft);export{it as W3mAllWalletsView,Ze as W3mConnectingWcBasicView,Ft as W3mDownloadsView};
