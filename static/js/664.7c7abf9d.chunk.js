"use strict";(self.webpackChunkpoc=self.webpackChunkpoc||[]).push([[664],{47651:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(31095),r=(n(47313),n(54097)),i=n(46417);const s=(0,r.ZP)(a.Z)`
  &&& {
    position: relative;
    background-color: ${e=>{let{theme:t}=e;return t.text3}};
    font-weight: 600;
    padding: 5px 15px;
    &:active {
      background-color: ${e=>{let{theme:t}=e;return t.text3}};
    }
    &:disabled {
      background-color: #414141 !important;
      cursor: not-allowed !important;
      border: none !important;
      color: grey !important;
    }

    ${e=>{let{theme:t,$isauto:n}=e;return t.mediaWidth.upToSmall`
      margin : ${n?"auto":"unset"};
    `}}
  }
`;const o=function(e){let{children:t,color:n="#F3BF2B",textColor:a="black",variant:r="contained",size:o="medium",label:l,disable:d=!1,icon:p,IconComponent:u,style:c,className:m,loading:h=!1,type:y="button",iconPosition:x,textTranform:g="capitalize",isauto:f=!1,...b}=e;const w="outlined"===r||"text"===r?"transparent":n,v="outlined"===r?"#F3BF2B":"none";return(0,i.jsx)(s,{$isauto:f,className:m,type:y,disabled:d||h,variant:r,size:o,startIcon:"left"===x&&(0,i.jsx)(u,{}),endIcon:"right"===x&&(0,i.jsx)(u,{}),style:{backgroundColor:w,color:`${a}`,textTransform:`${g}`,borderColor:v,...c},...b,children:l||(0,i.jsx)(i.Fragment,{children:t})})}},25248:(e,t,n)=>{n.d(t,{Z:()=>i});n(47313);var a=n(8512),r=(n(46220),n(46417));const i=()=>(0,r.jsx)(a.Ix,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"dark"})},93055:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ol});var a=n(45282),r=n(19828),i=(n(11751),n(51497)),s=n(37867),o=n(46082),l=n(37341),d=n(4787),p=n(31881),u=n.n(p),c=n(90182),m=n(64249),h=n(52009),y=n(28552),x=n(16031),g=n.n(x),f=n(47313),b=n(21911),w=n(18368),v=n(8512),T=n(54097);n.p;const C=n.p+"static/media/swapButtonIcon.4f4e306b3f62907963fc8ab3acebc3cf.svg";var S=n(83907),k=n(3873),I=n(56881),P=n(21114),j=n(60080),A=n(46417);const E=T.ZP.div`
  // position: relative;
`,R=T.ZP.button`
  &&& {
    font-family: "Inter", sans-serif;
    width: 100%;
    padding: 1rem;
    margin-top:0.5rem;
    border:none;
    border-radius: 1.25rem;
    backdrop-filter: brightness(0);
    background-color: ${e=>{let{theme:t,ctaColor:n,disabled:a,locked:r}=e;return n?a||r?n+"a8":n:a||r?"#c19720c2":t.text3}};
    cursor: ${e=>{let{disabled:t,locked:n}=e;return t||n?"not-allowed":"pointer"}};
    font-weight: 500;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    place-items: center;
    gap: 10px;
    color: ${e=>{let{theme:t,active:n,locked:a,textColor:r}=e;return a?r?`${(0,P.Os)(r)}90`:`${t.text5}99`:n?r||t.text5:r?`${(0,P.Os)(r)}90`:t.text5}};
    transition: all 0.2s ease-in-out;
    :active {
      outline: none;
      border: none;
    }
    :focus {
      outline: none;
      border: none;
    }

    ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
		width: 100%;
		height: 40px;
		border-radius: 12px;
		// border: 1px solid ${e=>{let{theme:t}=e;return t.gray2}}80;
		filter: none;
		font-family: 'Inter', sans-serif;
		font-size: 16px;
		font-weight: 400;
		text-align: center;
  	`}};
  }
`,M=(T.ZP.div`
  display: ${e=>{let{active:t}=e;return t?"inline-block":"none"}};
  position: absolute;
  top: -1.5px;
  left: -2px;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
		display: none;
  	`}};
`,(0,T.ZP)(k.Z)`
  &&& {
    width: 103px !important;
    height: 103px !important;
    color: ${e=>{let{theme:t,ctaColor:n}=e;return n||t.yellow2}};

    .MuiCircularProgress-colorPrimary {
      color: ${e=>{let{theme:t,ctaColor:n}=e;return n||t.yellow2}};
    }
  }
`,e=>{let{clicked:t,isDisabled:n,icon:r,title:i,locked:s}=e;(0,a.Z)(`(max-width: ${I.e.upToSmall}px)`);const o=(0,b.TH)(),l=(0,f.useMemo)((()=>new URLSearchParams(o.search).get("isWidget")),[o]),d=(0,f.useMemo)((()=>{var e;return decodeURIComponent(null!==(e=new URLSearchParams(o.search).get("ctaColor"))&&void 0!==e?e:"")}),[o]),p=(0,f.useMemo)((()=>{var e;return decodeURIComponent(null!==(e=new URLSearchParams(o.search).get("textColor"))&&void 0!==e?e:"")}),[o]);return(0,A.jsx)(E,{children:(0,A.jsxs)(R,{disabled:n,onClick:t,className:"abc",active:!n,locked:s,textColor:"true"===(null===l||void 0===l?void 0:l.toString())?p:"",ctaColor:"true"===(null===l||void 0===l?void 0:l.toString())?d:"",children:[s&&(0,A.jsx)(j.Z,{loading:!0,ctaColor:(null===l||void 0===l||l.toString(),"#ffffff")}),i]})})});var Z=n(39040),_=n(92275),L=n(61664),F=n(47982),$=n(57019),N=n(22886),U=n(80210),D=n(24039),O=n(91183),B=n(11239),W=n(1805),z=n(71144);const H=T.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 580px;
  height: 100%;
  gap: 10px;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 2%;
  color: ${e=>{let{theme:t,textColor:n}=e;return n||t.text7}};
  background: ${e=>{let{theme:t,backgroundColor:n}=e;return n||t.modalBG}};
  backdrop-filter: blur(32px);
  font-family: "Inter", sans-serif;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
		width: 90vw;
		max-width: 457px;
	    height: 100%;
  	`}};
`,G=(0,T.ZP)(L.Z)`
  color: ${e=>{let{theme:t,textColor:n}=e;return n||t.text7}};
  margin-right: 14px;
  margin-top: 10px;
  margin-left: auto;
  width: 40px !important;
  cursor: pointer;
  height: 40px !important;
  padding: 8px;
  position: absolute;
  right: 15px;
  top: 6px;
  :hover {
    opacity: 0.6;
    transition: all 0.1s ease-in-out;
  }
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
    right: 10px;
    top: 0px;
  	`}};
`,Y=T.ZP.p`
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 16px;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
      font-size: 18px;
  margin-top: 10px;
  margin-bottom: 16px;
  	`}};
`,V=T.ZP.div`
  display: flex;
  width: 50%;
  padding: 3%;
  gap: 6px;
  font-weight: 400;
  font-size: 16px;
`,q=T.ZP.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,K=T.ZP.div`
  position: relative;
  display: grid;
  place-items: center;
  border-radius: 50%;
  border: 1px solid #ffffff40;
  width: 40px;
  height: 40px;
`,Q=T.ZP.img`
  width: 30px;
`,J=T.ZP.div`
  position: absolute;
  bottom: 0px;
  right: 0px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: ${e=>{let{theme:t}=e;return t.text6}};
  border: 1px solid #ffffff40;
  width: 15px;
  height: 15px;
`,X=T.ZP.img`
  width: 10px;
`,ee=T.ZP.div`
  font-size: 12px;
`,te=(0,T.ZP)(s.Z)`
  margin-right: 10px;
  color: ${e=>{let{theme:t,textColor:n}=e;return n||t.text1}} !important;
  width: 20px;
  height: 20px;
  cursor: pointer;
  background-color: ${e=>{let{theme:t}=e;return"#7C6010"}};
  padding: 4px;
  border-radius: 50%;
  transform: rotate(-90deg);
  // transform: translateY(42px);
  transition: all 0.2s ease-in-out;
`,ne=(0,T.ZP)($.Z)`
  &&& {
    width: 18px;
    fill: ${e=>{let{theme:t}=e;return t.text7}};
  }
`,ae=(0,T.ZP)(N.Z)`
  &&& {
    width: 18px;
    fill: #ffcc00;
  }
`,re=(0,T.ZP)(F.Z)`
  &&& {
    width: 18px;
    fill: black;
  }
`,ie=T.ZP.div`
  display: flex;
  width: 100%;
  gap: 10px;
  border-radius: 16px;
  padding: 3% 2%;
  align-items: center;
  justify-content: space-between;
  background: ${e=>{let{theme:t}=e;return t.bg2}};
  border: ${e=>{let{theme:t}=e;return`1px solid ${t.text3}40`}};
  cursor: pointer;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
		flex-direction:column;
  	`}};
`,se=T.ZP.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  background-color: ${e=>{let{theme:t}=e;return t.bg7}};
  border-radius: 16px;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25),
    0px 0px 4px 0px rgba(0, 0, 0, 0.1);
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
		width: 100%;
  	`}};
`,oe=T.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: fit-content;
  font-size: 12px;
  font-weight: 400;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
		width: 100%;
    flex-direction: row;
    justify-content:space-between;
  	`}};
`,le=T.ZP.div`
  width: 100%;
  padding: 2% 1% 1% 1%;
`,de=T.ZP.a`
  text-decoration: none;
  font-family: "Inter", sans-serif;
  width: 100%;
  height: 46px;
  border-radius: 10px;
  background: ${e=>{let{theme:t}=e;return t.text3}};
  font-weight: 500;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  place-items: center;
  gap: 10px;
  color: ${e=>{let{theme:t}=e;return t.text5}};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  outline: none;
  border: none;

  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
		width: 100%;
		height: 40px;
		border-radius: 12px;
		border: 1px solid ${e=>{let{theme:t}=e;return t.gray2}};
		filter: none;
		font-family: 'Inter', sans-serif;
		font-size: 16px;
		font-weight: 400;
		text-align: center;
  	`}};
`,pe=e=>{let{close:t}=e;const n=(0,b.TH)(),a=(0,f.useContext)(T.Ni),[r]=(0,D._X)(),[i,s]=(0,f.useState)([]),[o,l]=(0,f.useState)(!0),[d,p]=(0,B.te)(),u=(0,f.useMemo)((()=>{var e;return decodeURIComponent(null!==(e=new URLSearchParams(n.search).get("textColor"))&&void 0!==e?e:"")}),[n]),c=(0,f.useMemo)((()=>{var e;return decodeURIComponent(null!==(e=new URLSearchParams(n.search).get("backgroundColor"))&&void 0!==e?e:"")}),[n]),m=(0,f.useMemo)((()=>new URLSearchParams(n.search).get("isWidget")),[n]);return(0,f.useEffect)((()=>{""!==r&&(async()=>{try{var e;let t;t=await(0,Z.l)(W.VOYAGER_EXPLORER_API_HOST+"/graphql",_.jV,{limit:3,senderAddress:r.startsWith("T")?(0,z.$B)(r):r});const n=await(null===(e=t.response)||void 0===e?void 0:e.getUsersTransactions);l(!1),console.log("Transaction List",n,t),s(n.data),p(n.data)}catch(t){console.log("getTransactionList e -",t)}})()}),[r]),(0,A.jsx)(A.Fragment,{children:(0,A.jsxs)(H,{textColor:"true"===(null===m||void 0===m?void 0:m.toString())?u:"",backgroundColor:"true"===(null===m||void 0===m?void 0:m.toString())?c:"",onClick:t,children:[(0,A.jsx)(G,{textColor:"true"===(null===m||void 0===m?void 0:m.toString())?u:"",onClick:t}),(0,A.jsx)(Y,{children:"Recent Transactions"}),o?(0,A.jsx)("div",{style:{minHeight:"200px",display:"flex",alignItems:"center"},children:(0,A.jsx)(O.Z,{ctaColor:a.yellow2,loading:!0})}):0===i.length?(0,A.jsx)(A.Fragment,{children:(0,A.jsx)("p",{children:"No Transactions"})}):i.map(((e,t)=>{const n=(0,P.E7)(e.src_symbol,parseFloat(e.src_amount),e.src_stable_symbol,parseFloat(e.src_stable_amount),e.fee_symbol,parseFloat(e.usdc_value),parseFloat(e.fee_amount),e.dest_symbol,parseFloat(e.dest_amount),parseFloat(e.dest_stable_amount));return(0,A.jsx)(A.Fragment,{children:(0,A.jsxs)(ie,{onClick:t=>{window.open(`${W.ROUTER_EXPLORER_HOST}/tx/${e.src_tx_hash}`,"_blank"),t.stopPropagation()},children:[(0,A.jsxs)(oe,{children:[(0,A.jsxs)("p",{style:{display:"flex",alignItems:"center",backgroundColor:""+("completed"===e.status?"#44BB8233":"pending"===e.status?"#ffcc0030":"#FFCC0029"),padding:"4px 6px",margin:"0px",borderRadius:"16px",textAlign:"center",color:""+("completed"===e.status?"#44BB82":"pending"===e.status?"#F3BF2B":"#FFFFFF")},children:["completed"!==e.status&&"pending"!==e.status&&(0,A.jsx)(ae,{}),"completed"===e.status?"Completed":"failed"===e.status&&"withdraw"===e.deposit_info_type?"Withdrawn":"Pending"]}),(0,A.jsx)("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:"pending"===e.status?(0,A.jsx)(A.Fragment,{}):(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(ne,{}),(0,A.jsx)("p",{style:{margin:"0px"},children:(0,P.ht)(Number(e.dest_timestamp)-Number(e.src_timestamp))})]})})]}),(0,A.jsxs)(se,{children:[(0,A.jsx)(V,{children:(0,A.jsxs)(q,{children:[(0,A.jsxs)(K,{children:[(0,A.jsx)(Q,{src:U.oO[e.src_symbol]?U.oO[e.src_symbol]:U.oO.default}),(0,A.jsx)(J,{children:(0,A.jsx)(X,{src:U.fc[e.src_chain_id]?U.fc[e.src_chain_id]:U.fc.default})})]}),(0,A.jsxs)(ee,{children:[(0,A.jsx)("h6",{style:{fontSize:"14px",margin:"2px"},children:(0,P.YG)(e.src_amount,2)}),(0,A.jsxs)("p",{style:{margin:"2px"},children:["US$",(0,P.YG)(Number(e.usdc_value),2)]})]})]})}),(0,A.jsx)(te,{textColor:"true"===(null===m||void 0===m?void 0:m.toString())?"#ffffff":""}),(0,A.jsx)(V,{children:(0,A.jsxs)(q,{children:[(0,A.jsxs)(K,{children:[(0,A.jsx)(Q,{src:U.oO[e.dest_symbol]?U.oO[e.dest_symbol]:U.oO.default}),(0,A.jsx)(J,{children:(0,A.jsx)(X,{src:U.fc[e.dest_chain_id]?U.fc[e.dest_chain_id]:U.fc.default})})]}),(0,A.jsxs)(ee,{children:[(0,A.jsx)("h6",{style:{fontSize:"14px",margin:"2px"},children:"pending"===e.status?"-":e.dest_amount?(0,P.YG)(e.dest_amount,2):"-"}),(0,A.jsxs)("p",{style:{margin:"2px"},children:["US$","pending"===e.status?"-":(0,P.YG)(n,2)]})]})]})})]})]},t)})})),(0,A.jsx)(le,{children:(0,A.jsxs)(de,{href:`${W.ROUTER_EXPLORER_HOST}/address/${r}`,target:"_blank",rel:"noreferrer",children:["See all Transactions",(0,A.jsx)(re,{})]})})]})})};var ue=n(88225),ce=n(77305);function me(){const e=(0,ue.CG)(ce.Xo),t=(0,ue.TL)();return[e,(0,f.useCallback)((e=>t((0,ce.CI)(e))),[e,t])]}var he=n(42007),ye=n(24335);const xe=T.ZP.div`
  display: flex;
  flex-direction: column;
  background: ${e=>{let{theme:t,backgroundColor:n}=e;return n?n+"90":t.bgGrayDefault}};
  justify-content: space-around;
  filter: ${e=>{let{theme:t,backgroundColor:n}=e;return n?"contrast(.8)   brightness(1.1) opacity(0.8)":"contrast(1)"}};
  border-radius: 16px;
  width: 50%;
  padding: 3%;
  gap: 6px;
  font-weight: 400;
  font-size: 16px;
`,ge=T.ZP.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,fe=T.ZP.div`
  position: relative;
  display: grid;
  place-items: center;
  border-radius: 50%;
  border: 1px solid#FFFFFF40;
  width: 40px;
  height: 40px;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToMedium`
		width: 34px;
    height: 34px;
  	`}};
`,be=T.ZP.img`
  width: 30px;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToMedium`
		width: 25px;
  	`}};
`,we=T.ZP.div`
  display:flex;
  flex-direction:column;
  font-size: 12px;
`,ve=T.ZP.div`
  position: absolute;
  bottom: 0px;
  right: 0px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: #000000;
  border: 1px solid #ffffff40;
  width: 15px;
  height: 15px;
`,Te=T.ZP.img`
  width: 10px;
`,Ce=T.ZP.h1`
  font-size: 14px;
  margin: 2px;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToMedium`
		font-size:10px;
  	`}};
`,Se=T.ZP.div`
display: flex; 
align-items: center; 
justify-content: flex-start; 
gap:12px; 
height:24px;
`,ke=T.ZP.img`
  width: 12px;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`	
        width: 12px;
  	`}};
`,Ie=T.ZP.div`
  position: relative;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: linear-gradient(
    to left,
    rgba(255, 255, 255),
    rgba(255, 255, 255, 0.8)
  );
`,Pe=T.ZP.div`
  display: flex;
  align-items: center; 
  padding: 2px 4px;
  height: 24px; 
  border-radius: 16px; 
  justify-content: center; 
  gap: 4px; 
  background: rgba(255, 255, 255, 0.15);
`,je=e=>{var t,n,r,i;let{title:s,showRefuelMenu:o,refuelValue:l}=e;const[d]=(0,B.JD)(),[p]=(0,B.Gm)(),[u]=(0,B.H)(),[c]=(0,B.EZ)(),[m]=(0,B.fC)(),[h]=(0,B.Tt)(),[y]=me(),[x]=(0,B.h0)(),g=(0,b.TH)(),w=(0,f.useMemo)((()=>new URLSearchParams(g.search).get("isWidget")),[g]),v=(0,f.useMemo)((()=>{var e;return decodeURIComponent(null!==(e=new URLSearchParams(g.search).get("backgroundColor"))&&void 0!==e?e:"")}),[g]),T=(0,f.useMemo)((()=>{var e;return decodeURIComponent(null!==(e=new URLSearchParams(g.search).get("ctaColor"))&&void 0!==e?e:"")}),[g]),C=(0,a.Z)(`(max-width: ${I.e.upToMedium}px)`);return(0,A.jsx)(A.Fragment,{children:""!==d&&""!==p&&(0,A.jsxs)(xe,{backgroundColor:"true"===(null===w||void 0===w?void 0:w.toString())?v:"",children:[(0,A.jsx)(Ce,{children:s}),(0,A.jsxs)(ge,{children:[(0,A.jsxs)(fe,{children:[(0,A.jsx)(be,{src:"From"===s?""!==d.logoURI?"ipfs"===(null===(t=d.logoURI)||void 0===t?void 0:t.slice(0,4))?`https://ipfs.io/ipfs/${null===(n=d.logoURI)||void 0===n?void 0:n.split("//")[1]}`:d.logoURI:U.oO[d.symbol]?U.oO[d.symbol]:`https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/${(0,P.fN)(null===u||void 0===u?void 0:u.networkId)}/assets/${d.address}/logo.png`:""!==p.logoURI?"ipfs"===(null===(r=p.logoURI)||void 0===r?void 0:r.slice(0,4))?`https://ipfs.io/ipfs/${null===(i=p.logoURI)||void 0===i?void 0:i.split("//")[1]}`:p.logoURI:U.oO[p.symbol]?U.oO[p.symbol]:`https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/${(0,P.fN)(null===c||void 0===c?void 0:c.networkId)}/assets/${p.address}/logo.png`,onError:e=>{let{currentTarget:t}=e;t.onerror=null,t.src="https://cdn.shopify.com/s/files/1/1061/1924/products/Thinking_Face_Emoji_small.png?v=1571606036"}}),(0,A.jsx)(ve,{children:(0,A.jsx)(Te,{src:U.fc[("From"===s?u:c).networkId]?U.fc[("From"===s?u:c).networkId]:U.fc.default})})]}),(0,A.jsxs)(we,{children:[(0,A.jsxs)(Ce,{children:["From"===s?(0,P.Pf)(m,4):x?(0,A.jsx)(j.Z,{loading:!0,ctaColor:"true"===(null===w||void 0===w?void 0:w.toString())?T:"",size:"10px"}):(0,P.Pf)(h,4)," ","From"===s?d.symbol:p.symbol]}),(0,A.jsxs)(Se,{children:["on ",("From"===s?u:c).name.split(" ")[0]," ",o&&"To"===s&&(0,A.jsxs)(Pe,{children:[(0,A.jsxs)("p",{style:{fontSize:"11px",whiteSpace:"nowrap"},children:["+ ",(0,ye.og)(l,he.TP[null===c||void 0===c?void 0:c.networkId]?he.TP[null===c||void 0===c?void 0:c.networkId].decimals.toString():"18").toString(),he.TP[c.networkId].symbol]}),!C&&(0,A.jsx)(Ie,{children:(0,A.jsx)(ke,{src:U.fc[null===c||void 0===c?void 0:c.networkId]})})]})]}),(0,A.jsxs)("div",{children:["$"," ","From"===s?parseFloat(y[d.symbol])?(0,P.Pf)(parseFloat(m.toString())*parseFloat(y[d.symbol]),2):"-":parseFloat(y[p.symbol])?x?(0,A.jsx)(j.Z,{loading:!0,ctaColor:"true"===(null===w||void 0===w?void 0:w.toString())?T:""}):(0,P.Pf)(parseFloat(h.toString())*parseFloat(y[p.symbol]),2):"-"]})]})]})]})})},Ae=T.ZP.div`
  border-radius: 22px;
  display: flex;
  border-radius: 16px;
  margin-bottom: ${e=>{let{showSendTo:t}=e;return t?"4px":"0px"}};
  font-family: "Inter", sans-serif;
  width: 100%;
  transition: all 0.2s ease-in-out;
  gap: 12px;
  padding: 2% 0%;
`,Ee=e=>{let{label:t,showRefuelMenu:n,refuelValue:a}=e;return(0,A.jsx)(A.Fragment,{children:(0,A.jsxs)(Ae,{darkMode:!0,showSendTo:"To Send"===t,children:[(0,A.jsx)(je,{title:"From",showRefuelMenu:n,refuelValue:a}),(0,A.jsx)(je,{title:"To",showRefuelMenu:n,refuelValue:a})]})})},Re=e=>{let{fill:t="#F3BF2B"}=e;return(0,A.jsx)(A.Fragment,{children:(0,A.jsxs)("svg",{width:"32",height:"32",viewBox:"0 0 40 41",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,A.jsx)("circle",{cx:"20",cy:"20.0015",r:"18.5",stroke:t,"stroke-width":"3","stroke-linejoin":"round"}),(0,A.jsx)("path",{d:"M11.6279 19.3038L17.6744 25.1177L28.721 14.6526",stroke:t,"stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"})]})})},Me=e=>{let{fill:t="#F3BF2B"}=e;return(0,A.jsx)(A.Fragment,{children:(0,A.jsxs)("svg",{width:"24",height:"30",viewBox:"0 0 20 26",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,A.jsx)("path",{d:"M16.6667 13.0014C16.4457 13.0014 16.2337 13.0892 16.0774 13.2455C15.9211 13.4017 15.8333 13.6137 15.8333 13.8347V18.8347C15.8333 19.0557 15.7455 19.2677 15.5893 19.424C15.433 19.5803 15.221 19.668 15 19.668H5C4.77899 19.668 4.56702 19.5803 4.41074 19.424C4.25446 19.2677 4.16667 19.0557 4.16667 18.8347V8.83472C4.16667 8.6137 4.25446 8.40174 4.41074 8.24546C4.56702 8.08918 4.77899 8.00138 5 8.00138H10C10.221 8.00138 10.433 7.91359 10.5893 7.75731C10.7455 7.60103 10.8333 7.38906 10.8333 7.16805C10.8333 6.94704 10.7455 6.73507 10.5893 6.57879C10.433 6.42251 10.221 6.33472 10 6.33472H5C4.33696 6.33472 3.70107 6.59811 3.23223 7.06695C2.76339 7.53579 2.5 8.17168 2.5 8.83472V18.8347C2.5 19.4978 2.76339 20.1336 3.23223 20.6025C3.70107 21.0713 4.33696 21.3347 5 21.3347H15C15.663 21.3347 16.2989 21.0713 16.7678 20.6025C17.2366 20.1336 17.5 19.4978 17.5 18.8347V13.8347C17.5 13.6137 17.4122 13.4017 17.2559 13.2455C17.0996 13.0892 16.8877 13.0014 16.6667 13.0014Z",fill:t}),(0,A.jsx)("path",{d:"M13.3331 8.00138H14.6498L9.40812 13.2347C9.33001 13.3122 9.26802 13.4044 9.22571 13.5059C9.1834 13.6075 9.16162 13.7164 9.16162 13.8264C9.16162 13.9364 9.1834 14.0453 9.22571 14.1469C9.26802 14.2484 9.33001 14.3406 9.40812 14.4181C9.48559 14.4962 9.57776 14.5582 9.67931 14.6005C9.78086 14.6428 9.88978 14.6645 9.99979 14.6645C10.1098 14.6645 10.2187 14.6428 10.3203 14.6005C10.4218 14.5582 10.514 14.4962 10.5915 14.4181L15.8331 9.18472V10.5014C15.8331 10.7224 15.9209 10.9344 16.0772 11.0906C16.2335 11.2469 16.4454 11.3347 16.6665 11.3347C16.8875 11.3347 17.0994 11.2469 17.2557 11.0906C17.412 10.9344 17.4998 10.7224 17.4998 10.5014V7.16805C17.4998 6.94704 17.412 6.73507 17.2557 6.57879C17.0994 6.42251 16.8875 6.33472 16.6665 6.33472H13.3331C13.1121 6.33472 12.9001 6.42251 12.7439 6.57879C12.5876 6.73507 12.4998 6.94704 12.4998 7.16805C12.4998 7.38906 12.5876 7.60103 12.7439 7.75731C12.9001 7.91359 13.1121 8.00138 13.3331 8.00138Z",fill:t})]})})};var Ze=n(85625),_e=n(98522),Le=n(23679);const Fe=T.ZP.div`
  display: flex;
  width: 100%;
  padding: 0% 0% 2% 0%;
`,$e=T.ZP.div`
  display: flex;
  background-color: ${e=>{let{theme:t,backgroundColor:n,bgcolor:a}=e;return n||(a?"rgba(243, 191, 43, 0.20)":t.yellow2)}};
  color: ${e=>{let{theme:t}=e;return t.text7}};
  filter: ${e=>{let{theme:t,backgroundColor:n}=e;return n?"contrast(.8)   brightness(1.1) opacity(1)":"contrast(1)"}};
  justify-content: space-between;
  padding: 1% 3%;
  width: 100%;
  border-radius: 14px;
  // margin-bottom:10px;
`,Ne=(T.ZP.img`
  width: 36px;
  margin: 0 5px;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`	
        display:none;
  	`}};
`,T.ZP.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  wodth: 100%;
`),Ue=(T.ZP.img`
  width: 20px;
  cursor: pointer;
`,T.ZP.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 10px;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToMedium`
		margin-top: 6px;
  	`}};
`),De=(T.ZP.div`
  display: grid;
  place-items: center;
  border-radius: 50%;
  border: 1px solid #ffffff40;
  width: 40px;
  height: 40px;
`,T.ZP.img`
  width: 30px;
`,T.ZP.div`
  font-size: 12px;
`),Oe=T.ZP.h1`
  font-size: 14px;
  margin: 0px;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToMedium`
		font-size:10px;
  	`}};
`,Be=T.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4% 0%;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToMedium`
		padding: 1% 0%;
  	`}};
`,We=T.ZP.div`
  display:flex;
  align-items:center;
  gap:10px;
  cursor:pointer;
  margin: 2px;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToMedium`
		font-size:10px;
  	`}};
`,ze=(T.ZP.img`
  width: 12px;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`	
        width: 12px;
  	`}};
`,T.ZP.div`
  display: flex;
  align-items: center; 
  padding: 2px 4px;
  margin-top: 4px; 
  height: 24px; 
  border-radius: 16px; 
  justify-content: center; 
  gap: 4px; 
  background: rgba(255, 255, 255, 0.15)
`,T.ZP.div`
  position: relative;
  display: grid;
  place-items: center;
  border-radius: 50%;
  border: 1px solid #ffffff40;
  background: linear-gradient(
    to left,
    rgba(255, 255, 255),
    rgba(255, 255, 255, 0.8)
  );
  padding-inline:2px;
  height: 20px;
`,e=>{let{hash:t,dstToken:n,dstSymbol:a,dstAmount:r,refuel_Amount:i,refuel_Symbol:s,showRefuelMenu:o,txnFlowType:l}=e;const[d]=(0,B.EZ)(),[p]=me(),[u,c]=(0,f.useState)(!1),m=(0,f.useCallback)((()=>{navigator.clipboard.writeText(null!==t&&void 0!==t?t:""),c(!0),setTimeout((()=>c(!1)),4e3)}),[c]),h=(0,b.TH)(),y=(0,f.useMemo)((()=>new URLSearchParams(h.search).get("isWidget")),[h]),x=(0,f.useMemo)((()=>{var e;return decodeURIComponent(null!==(e=new URLSearchParams(h.search).get("backgroundColor"))&&void 0!==e?e:"")}),[h]),g=(0,f.useMemo)((()=>{var e;return decodeURIComponent(null!==(e=new URLSearchParams(h.search).get("ctaColor"))&&void 0!==e?e:"")}),[h]),[w,v]=(0,Ze.m)();return(0,A.jsx)(A.Fragment,{children:(0,A.jsx)(Fe,{children:(0,A.jsxs)($e,{backgroundColor:"true"===(null===y||void 0===y?void 0:y.toString())?x:"",bgcolor:w,children:[(0,A.jsxs)(Ne,{children:[(0,A.jsx)("div",{style:{display:"grid",placeItems:"center"},children:(0,A.jsx)(Re,{fill:"true"===(null===y||void 0===y?void 0:y.toString())&&g||(w?void 0:"black")})}),(0,A.jsxs)(Be,{children:[(0,A.jsx)(Oe,{children:"Your Transaction is completed"}),(0,A.jsx)(Ue,{children:(0,A.jsx)(De,{children:(0,A.jsxs)(We,{children:[(0,A.jsxs)("div",{onClick:()=>window.open(W.ROUTER_EXPLORER_HOST+"/tx/"+t),children:[(0,A.jsx)("b",{children:"Transaction Hash: "}),(0,A.jsx)("span",{style:{color:"#F3BF2B"},children:t&&(0,P.Hw)(t,4)})]}),(0,A.jsx)("div",{onClick:m,children:u?(0,A.jsx)(_e.Z,{style:{width:"14px"}}):(0,A.jsx)(Le.Z,{style:{width:"14px"}})})]})})})]})]}),(0,A.jsx)("div",{style:{display:"grid",cursor:"pointer",placeItems:"center"},onClick:()=>window.open(W.ROUTER_EXPLORER_HOST+"/tx/"+t),children:(0,A.jsx)(Me,{fill:"true"===(null===y||void 0===y?void 0:y.toString())&&g||(w?void 0:"black")})})]})})})});var He=n(56038),Ge=n(16108),Ye=n(49709),Ve=n(78041),qe=n(4334);const Ke=T.ZP.div`
  background: ${e=>{let{theme:t,ctaColor:n}=e;return n?n.concat("20"):t.yellow2.concat("20")}};
  border-radius: 6px;
  color: ${e=>{let{theme:t,ctaColor:n}=e;return n||t.yellow2}};
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  display: grid;
  place-items: center;
  padding: 2px 4px;
  cursor: pointer;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
		    width: 35px;
        height: 28px;
        font-size: 10px;
        border-radius: 5px;
        padding: 1px 2px;
  	`}};
`,Qe=()=>{const e=(0,b.TH)(),t=(0,f.useMemo)((()=>new URLSearchParams(e.search).get("isWidget")),[e]),n=(0,f.useMemo)((()=>{var t;return decodeURIComponent(null!==(t=new URLSearchParams(e.search).get("ctaColor"))&&void 0!==t?t:"")}),[e]);return(0,A.jsx)(Ke,{ctaColor:"true"===(null===t||void 0===t?void 0:t.toString())?n:"",children:"MAX"})};var Je=n(27467);const Xe=T.ZP.div`
  position: relative;
  display: grid;
  height: 40px;
  color: white;
  color: ${e=>{let{theme:t}=e;return t.text7}};
  border: ${e=>{let{isInputDisabled:t,disabled:n}=e;return n?"1px solid #e2e2e240":t?"1px solid #c40c0c80":"1px solid #e2e2e240"}};
  margin-top: 10px;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25), 0px 0px 4px 0px rgba(0, 0, 0, 0.10);
  padding-left: 10px;
  border-radius: 12px;
  width: 100%;
  opacity: ${e=>{let{disabled:t}=e;return t?"0.6":"1"}};
`,et=T.ZP.input`
  font-family: "Inter", sans-serif;
  padding-right: 15%;
  width: 100%;
  color: ${e=>{let{theme:t}=e;return t.text7}};
  font-size: 14px;
  text-align: left;
  background: none;
  border: none;
  &:focus {
    outline: none;
  }
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
        font-size: 14px;
        height: 35px;
  	`}};
`,tt=T.ZP.p`
  position: absolute;
  right: 16px;
  margin: 0px;
  top: 10px;
  color: ${e=>{let{theme:t,ctaColor:n}=e;return n||t.text3}};
  font-size: 12px;
  cursor: pointer;
  cursor: ${e=>{let{disabled:t}=e;return t?"auto":"pointer"}};
`,nt=e=>{let{disabled:t,isInputDisabled:n}=e;const[a,r]=(0,B.TZ)(),[i]=(0,B.nm)(),[s]=(0,D._X)(),o=(0,f.useRef)(null),l=(0,b.TH)(),d=((0,f.useMemo)((()=>{var e;return decodeURIComponent(null!==(e=new URLSearchParams(l.search).get("backgroundColor"))&&void 0!==e?e:"")}),[l]),(0,f.useMemo)((()=>{var e;return decodeURIComponent(null!==(e=new URLSearchParams(l.search).get("ctaColor"))&&void 0!==e?e:"")}),[l])),p=(0,f.useMemo)((()=>new URLSearchParams(l.search).get("isWidget")),[l]);return(0,A.jsx)(A.Fragment,{children:(0,A.jsxs)(Xe,{isWidget:"true"===(null===p||void 0===p?void 0:p.toString()),isInputDisabled:n,disabled:t,children:[(0,A.jsx)(et,{placeholder:"Enter Destination Address",value:a,onChange:e=>r(e.target.value),disabled:!1}),(0,A.jsx)(tt,{ctaColor:"true"===(null===p||void 0===p?void 0:p.toString())?d:"",onClick:()=>{t||navigator.clipboard.readText().then((e=>{r(e),o.current&&o.current.focus()}))},children:"Paste"})]})})};var at=n(98724),rt=n(86436),it=n(29741),st=n(74060);async function ot(e,t){const n=new at.nh(e),a=new at.nh(t);console.log("asset - ",t);const r="EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"===t?rt.H_:rt.nA,i=await(0,it.Am)(a,n,!0,r),s=await st.t.getAccountInfo(i);return console.log("ata address from fn - ",i,i.toBase58(),s),{ataAddress:i,account:s}}var lt=n(37496),dt=n(94331);n(94847);const pt=T.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 450px;
  height: 100%;
  gap: 10px;
  border-radius: 24px;
  padding: 2%;
  color: ${e=>{let{theme:t,textColor:n}=e;return n||t.text7}};
  background: ${e=>{let{theme:t,backgroundColor:n}=e;return n||t.modalBG}};
  border : 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(32px);
  font-family: "Inter", sans-serif;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
		width: 90vw;
		max-width: 457px;
	    height: 100%;
  	`}};
`,ut=(0,T.ZP)(L.Z)`
  color: ${e=>{let{theme:t,textColor:n}=e;return n||t.text7}};
  margin-right: 14px;
  margin-top: 10px;
  margin-left: auto;
  width: 40px !important;
  cursor: pointer;
  height: 40px !important;
  padding: 8px;
  position: absolute;
  right: 15px;
  top: 6px;
  :hover {
    opacity: 0.6;
    transition: all 0.1s ease-in-out;
  }
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
    right: 10px;
    top: 0px;
  	`}};
`,ct=T.ZP.p`
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 16px;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
      font-size: 18px;
  margin-top: 10px;
  margin-bottom: 16px;
  	`}};
`,mt=T.ZP.div`
  display: grid;
  justify-content: normal;
  align-self: center;
  width: 100%;
  transition: all 0.2s ease-in-out;
`,ht=T.ZP.button`
  text-decoration: none;
  font-family: "Inter", sans-serif;
  width: 100%;
  height: 44px;
  border-radius: 10px;
  background: ${e=>{let{theme:t,ctaColor:n}=e;return n||t.text3}};
  font-weight: 500;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  place-items: center;
  gap: 10px;
  color: #000000;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  outline: none;
  border: none;
  opacity: ${e=>{let{isInputDisabled:t}=e;return t?"0.6":"1"}};
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
		width: 100%;
		height: 40px;
		border-radius: 12px;
		border: 1px solid ${e=>{let{theme:t}=e;return t.gray2}};
		filter: none;
		font-family: 'Inter', sans-serif;
		font-size: 16px;
		font-weight: 400;
		text-align: center;
  	`}};
`,yt=T.ZP.input`
  background-color: red;
`,xt=T.ZP.label`
  display: flex;
  align-items: flex-start;
  font-size: 14px;
  gap: 4px;
  padding: 10px 4px 20px 4px;
  background: ${e=>{let{theme:t,backgroundColor:n}=e;return n?n+"90":t.bg2}};
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25), 0px 0px 4px 0px rgba(0, 0, 0, 0.10);
  filter: ${e=>{let{theme:t,backgroundColor:n}=e;return n?"contrast(.8)   brightness(1.1) opacity(0.8)":"contrast(1)"}};
  border-radius: 12px;
  color : ${e=>{let{theme:t}=e;return t.text7.concat("90")}};
  margin-bottom: 10px;
`,gt=e=>{let{close:t,isInputDisabled:n}=e;const a=(0,b.TH)(),[r,i]=(0,B.TZ)(),[s,o]=(0,B.Gm)(),[l,d]=(0,B.Z_)(),[p]=(0,B.EZ)(),[u,c]=(0,f.useState)(!1),[m,h]=(0,B.nm)(),y=(0,f.useMemo)((()=>{var e;return decodeURIComponent(null!==(e=new URLSearchParams(a.search).get("textColor"))&&void 0!==e?e:"")}),[a]),x=(0,f.useMemo)((()=>{var e;return decodeURIComponent(null!==(e=new URLSearchParams(a.search).get("backgroundColor"))&&void 0!==e?e:"")}),[a]),g=(0,f.useMemo)((()=>{var e;return decodeURIComponent(null!==(e=new URLSearchParams(a.search).get("ctaColor"))&&void 0!==e?e:"")}),[a]),w=(0,f.useMemo)((()=>new URLSearchParams(a.search).get("isWidget")),[a]);(0,f.useEffect)((()=>{"CHAIN_TYPE_SOLANA"===p.type&&u&&(0,z.O5)(p.type,r)&&(async()=>{const{ataAddress:e,account:t}=await ot(r,s?s.address:"");if(null===t||void 0===t||null===e)return console.log("no ATA found"),void d("");d(e.toBase58())})(),d("")}),[u,m,r]);const v=(0,qe.O)(),{select:T,wallets:C,publicKey:S,disconnect:k}=(0,qe.O)();return console.log("ww - ",C),(0,A.jsx)(A.Fragment,{children:(0,A.jsxs)(pt,{textColor:"true"===(null===w||void 0===w?void 0:w.toString())?y:"",backgroundColor:"true"===(null===w||void 0===w?void 0:w.toString())?x:"",children:[(0,A.jsx)(ut,{textColor:"true"===(null===w||void 0===w?void 0:w.toString())?y:"",onClick:t}),(0,A.jsx)(ct,{children:"Recipient Address"}),(0,A.jsx)(mt,{children:(0,A.jsx)(nt,{disabled:""!==r,isInputDisabled:n})}),0===m&&(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(xt,{backgroundColor:"true"===(null===w||void 0===w?void 0:w.toString())?x:"",children:[(0,A.jsx)(yt,{style:{width:"15px",height:"15px",display:"inline",borderRadius:"24px"},type:"checkbox",checked:u,onChange:()=>c((e=>!e))}),"Please ensure that the address is correct and not an exchange wallet. Any tokens sent to the wrong address will be impossible to retrieve."]}),(0,A.jsx)(A.Fragment,{children:"CHAIN_TYPE_SOLANA"===p.type&&(0,z.O5)(p.type,r)&&u?""===l||null===l?v.publicKey?(0,A.jsx)(ht,{onClick:()=>async function(e,t,n,a){if(!t.publicKey)throw new dt.oS;const r=new at.nh(a),{ataAddress:i,account:s}=await ot(new at.nh(n),a);if(s)return i;const o=(0,lt.Ek)(t.publicKey,i,new at.nh(n),r),l=(new at.YW).add(o),d=await t.sendTransaction(l,e),p=await e.getLatestBlockhash();return await e.confirmTransaction({signature:d,...p}),console.log(i.toBase58(),i),i}(st.t,v,r,s?s.address:""),ctaColor:g,isInputDisabled:!1,style:{width:"100%"},children:"Create ATA Address"}):(0,A.jsx)(xt,{backgroundColor:"true"===(null===w||void 0===w?void 0:w.toString())?x:"",style:{display:"flex",flexDirection:"column",gap:"10px"},children:C.filter((e=>"Installed"===e.readyState)).length>0?(0,A.jsxs)(A.Fragment,{children:["In Solana, Wallets have a different token address for each asset Please connect wallet and create ATA address",C.filter((e=>"Installed"===e.readyState)).map((e=>(0,A.jsxs)(ht,{onClick:()=>T(e.adapter.name),isInputDisabled:!1,ctaColor:g,children:["Connect ",e.adapter.name]},e.adapter.name)))]}):(0,A.jsx)(A.Fragment,{children:"No wallet found. Please download a supported Solana wallet"})}):(0,A.jsxs)(xt,{backgroundColor:"true"===(null===w||void 0===w?void 0:w.toString())?x:"",style:{display:"flex",flexDirection:"column",textAlign:"center"},children:["In Solana, Wallets have a different token address for each asset",(0,A.jsxs)("p",{children:["Associated token address ",(0,A.jsx)("span",{style:{color:g},children:(0,P.Xn)(l)})]})]}):(0,A.jsx)(A.Fragment,{})})]}),1===m?(0,A.jsx)(ht,{ctaColor:"true"===(null===w||void 0===w?void 0:w.toString())?g:"",onClick:()=>{h(0),i(""),d(""),t()},isInputDisabled:!1,children:"Remove Recipient Address"}):(0,A.jsx)(ht,{ctaColor:"true"===(null===w||void 0===w?void 0:w.toString())?g:"",onClick:async()=>{(0,z.O5)(p.type,r)&&(h(1),t())},isInputDisabled:!u||!(0,z.O5)(p.type,r)||"CHAIN_TYPE_SOLANA"===p.type&&(null===l||""===l),disabled:!u||!(0,z.O5)(p.type,r)||"CHAIN_TYPE_SOLANA"===p.type&&(null===l||""===l),children:(0,z.O5)(p.type,r)?!u||"CHAIN_TYPE_SOLANA"!==p.type||null!==l&&""!==l?"Confirm Recipient Address":"Create Solana ATA address first":"Enter Valid Address"})]})})};n(94847);const ft=T.ZP.div`
  border-radius: 22px;

  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  border-radius: 16px;
  margin-bottom: 0px;
  font-family: "Inter", sans-serif;
  position: relative;
  z-index: 2;
  transition: all 0.2s ease-in-out;
`,bt=T.ZP.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
  font-size: 14px;
  color: ${e=>{let{theme:t,textColor:n}=e;return n||t.text1}};

  ${e=>{let{theme:t}=e;return t.mediaWidth.upToMedium`
		justify-self: start;
        grid-column: span 2;
  	`}};
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
        height: 35px;
        font-size: 12px;
  	`}};
  transition: all 0.2s ease-in-out;
`,wt=T.ZP.div`
  margin-bottom: ${e=>{let{labelSendTo:t,isWidget:n}=e;return t?"00px":"0px"}};
  margin-top: ${e=>{let{labelSendTo:t}=e;return t?"-30px":"0px"}};
  width: 100%;
  align-self: center;
  display: grid;
  height: fit-content;
  // row-gap: 6px;
  background-color: ${e=>{let{theme:t,backgroundColor:n}=e;return n?n+"90":t.bgGrayDefault}};
  filter: ${e=>{let{theme:t,backgroundColor:n}=e;return n?"contrast(.8)   brightness(1.1) opacity(0.8)":"contrast(1)"}};
  border-radius: 1.25rem;
  padding: 1rem;
  padding-top: 1.2rem;
  box-shadow: 0px 1px 2px 0px #00000040;
`,vt=T.ZP.div`
  font-size: 14px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 25px;
  margin-top: 8px;
  margin-bottom: 0.5rem;
`,Tt=T.ZP.div`
  width: fit-content;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;
  height: 40px;
  border: 1px solid ${e=>{let{theme:t}=e;return`${t.text3}40`}};
  background-color: ${e=>{let{theme:t,ctaColor:n}=e;return n||"rgba(124, 96, 16, 0.50)"}};
  opacity: ${e=>{let{label:t,isToSelLocked:n,isFromSelLocked:a}=e;return"From Send"===t?a?"0.8":"1":"To Send"===t&&n?"0.8":"1"}};
  backdrop-filter: blur(21px);
  cursor: ${e=>{let{label:t,isToSelLocked:n,isFromSelLocked:a}=e;return"From Send"===t?a?"auto":"pointer":"To Send"===t&&n?"auto":"pointer"}};
  padding: 0px 8px;
  margin: 0px;
  // height: 35px;
  border-radius: 12px;
`,Ct=T.ZP.input`
  width: inherit;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 1.5rem;
  text-align: left;

  color: ${e=>{let{theme:t,textColor:n}=e;return n||t.text1}};
  ::-webkit-input-placeholder {
    color: ${e=>{let{theme:t,textColor:n}=e;return n||t.text2}};
  }
  background: none;
  border: none;
  &:focus {
    outline: none;
  }
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
        // width: 150px;
        border-radius: 10px;
        padding-bottom: 0px;
    `}};
`,St=T.ZP.div`
  width: fit-content;
  height: ${e=>{let{isWidget:t}=e;return t?"":"50px"}};
  border-radius: 10px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${e=>{let{theme:t,textColor:n}=e;return n||t.text1}};

  transition: all 0.2s ease-in-out;
`,kt=T.ZP.div`
  font-size: 12px;
  color: ${e=>{let{theme:t,textColor:n}=e;return n||t.text2}};
  padding-right: 5px;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToMedium`	
        font-size: 14px;
  	`}};
  transition: all 0.2s ease-in-out;
`,It=((0,T.ZP)(kt)`
  font-size: 16px;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToMedium`	
        font-size: 1rem;
    `}};
`,T.ZP.img`
  width: 14px;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`	
        width: 14px;
  	`}};
`),Pt=T.ZP.img`
  width: 16px;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`	
        width: 16px;
        height: 16px;
  	`}};
`,jt=(0,T.ZP)(Ge.Z)`
  &&& {
    color: #ffffff;
    font-size: 20px;
  }
`,At=((0,T.ZP)(Ge.Z)`
  &&& {
    width: 20px;
    height: 20px;
    color: ${e=>{let{theme:t,textColor:n}=e;return n||t.gray2}};
  }
`,T.ZP.div`
  visibility: hidden;
  display: grid;
  height: 50px;
  align-items: center;
  font-family: "Inter", sans-serif;
  font-size: 20px;
  font-weight: 400;
  display: flex;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToMedium`
		display:none;
  	`}};
  transition: all 0.2s ease-in-out;
`,T.ZP.div`
  color: ${e=>{let{theme:t,textColor:n}=e;return n?t.transparent2:t.gray2}};
`,T.ZP.div`
  color: ${e=>{let{theme:t,textColor:n}=e;return n||t.text1}};
`,T.ZP.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s ease-in-out;
`),Et=(T.ZP.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-top: 5px;
  color: rgba(255, 255, 255, 0.5);
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
		font-size: 12px;
  	`}};
`,T.ZP.div`
  height: 18.33px;
  width: 18.33px;
  border-radius: 3px;
  border: 2px solid #fff;
  background-color: ${e=>{let{theme:t}=e;return t.gray3}};
  margin-right: 4.7px;
  margin-left: 1px;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
		width: 16.5px;
        height: 16px;
  	`}};
`,T.ZP.img`
  margin-right: 4px;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
		width: 18px;
        height: 18px;
  	`}};
`,T.ZP.div`
  margin-right: 5px;
  display: ${e=>{let{active:t}=e;return t?"block":"none"}};
`),Rt=((0,T.ZP)(k.Z)`
  &&& {
    width: 12px !important;
    height: 12px !important;
    color: ${e=>{let{theme:t,ctaColor:n}=e;return n||t.yellow2}};
    .MuiCircularProgress-colorPrimary {
      color: ${e=>{let{theme:t,ctaColor:n}=e;return n||t.yellow2}};
    }
  }
`,(0,T.ZP)(k.Z)`
  &&& {
    width: 18px !important;
    height: 18px !important;
    color: ${e=>{let{theme:t,ctaColor:n}=e;return n||t.yellow2}};
    .MuiCircularProgress-colorPrimary {
      color: ${e=>{let{theme:t,ctaColor:n}=e;return n||t.yellow2}};
    }
  }
`),Mt=((0,T.ZP)(At)`
  display: none;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToMedium`
		display: grid;
        grid-column: span 2;
  	`}};

  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
		grid-template-rows: 40px 25px;
        margin-top: 10px;
  	`}};
`,T.ZP.div`
  display: inline-block;
  padding-left: 5px;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
  	`}};
`),Zt=T.ZP.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`,_t=(T.ZP.button`
  width: 73px;
  height: 26px;
  display: grid;
  place-items: center;
  border-radius: 8px;
  background: ${e=>{let{theme:t,backgroundColor:n}=e;return n?t.transparent2:t.gray1}};
  border: 1px solid
    ${e=>{let{theme:t,backgroundColor:n}=e;return n?t.transparent3:t.gray2}};
  color: ${e=>{let{theme:t,textColor:n}=e;return n||t.text1}};
  font-size: 12px;
  cursor: pointer;
`,T.ZP.div`
  display: flex;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToMedium`	
        margin: 15px 0;
  	`}};
`,T.ZP.img`
  width: 14px;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`	
        width: 14px;
        height: 14px;
  	`}};
  margin-right: 3px;
`,T.ZP.button`
  width: fit-content;
  height: 38px;
  display: grid;
  place-items: center;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: ${e=>{let{theme:t,textColor:n}=e;return n||t.text1}};
  font-size: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  box-shadow: ${e=>{let{backgroundColor:t}=e;return""===t?"3px 3px 10px 4px rgba(0, 0, 0, 0.1)":"3px 3px 10px 4px rgba(0, 0, 0, 0.3)"}};
  :hover {
    border: 1px solid rgba(0, 110, 130, 0.5);
  }
`,T.ZP.div`
  position: absolute;
  right: -45px;
  top: 90px;
  display: none;
`),Lt=(T.ZP.img`
  margin-right: 7px;
  cursor: pointer;
  &:hover ~ ${_t} {
    opacity: 1;
    display: inline-block;
  }
`,T.ZP.p`
  display: flex;
  align-items: center;
  gap: 4px;
  margin: 0px;
`),Ft=(0,T.ZP)(He.Z)`
  &&& {
    width: 20px;
    fill: ${e=>{let{theme:t,ctaColor:n}=e;return n||t.text8}};
    margin-right: 6px;
  }
`,$t=T.ZP.div`
  position: relative;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: linear-gradient(
    to left,
    rgba(255, 255, 255),
    rgba(255, 255, 255, 0.8)
  );
  // width: 26px;
  padding: 4px;
  margin-right: 5px;
`,Nt=T.ZP.div`
  display: flex;
  align-items: center;
  margin: 0px;
  font-weight: 600;
  color: ${e=>{let{theme:t,ctaColor:n}=e;return n||t.text8}};
`,Ut=T.ZP.p`
  margin: 0px;
  font-size: 14px;
  font-weight: 600;
  color: ${e=>{let{theme:t,textColor:n}=e;return n||t.text7}};
`,Dt=T.ZP.div`
  display: flex;
  align-items: center;
  padding: 3px 8px;
  margin-top: 4px;
  height: 30px;
  border-radius: 16px;
  justify-content: center;
  gap: 4px;
  background: rgba(255, 255, 255, 0.15);
`,Ot=T.ZP.div`
  position: relative;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: linear-gradient(
    to left,
    rgba(255, 255, 255),
    rgba(255, 255, 255, 0.8)
  );
  padding: 2px;
  // heigh 20px;
`,Bt=((0,T.ZP)((e=>{let{className:t,...n}=e;return(0,A.jsx)(Ye.Z,{...n,classes:{popper:t}})}))((e=>{let{theme:t}=e;return{[`& .${Ve.Z.tooltip}`]:{backgroundColor:`${t.text7}`,color:`${t.text6}`,fontSize:11,zIndex:100},[`& .${Ve.Z.arrow}`]:{"&::before":{backgroundColor:`${t.text7}`}}}})),e=>{var t,n,r,i;let{currentChain:s,currentAsset:o,tokenBalance:l,usdBalance:d,showChainMenu:p,showAssetMenu:u,inputValue:c,inputHandler:m,label:h,id:y,fetching:x,maxButton:g,locked:w,isInputDisabled:v,showRxAddressMenu:T,setShowRxAddressMenu:C,showRefuelMenu:S,refuelValue:k}=e;const[E,R]=(0,B.TZ)(),[M,Z]=(0,B.Z_)(),[_]=(0,D._X)(),[L,F]=(0,B.nm)(),[$]=(0,B.H)(),[N]=(0,B.EZ)(),[O]=(0,D._b)(),[W]=(0,B.eJ)(),[z]=(0,B.Ho)(),H=(0,a.Z)(`(max-width: ${I.e.upToMedium}px)`),G=(0,b.TH)(),Y=(0,f.useMemo)((()=>new URLSearchParams(G.search).get("isWidget")),[G]),V=(0,f.useMemo)((()=>new URLSearchParams(G.search).get("isToSelLocked")),[G]),q=(0,f.useMemo)((()=>new URLSearchParams(G.search).get("isFromSelLocked")),[G]),K=(0,f.useMemo)((()=>{var e;return decodeURIComponent(null!==(e=new URLSearchParams(G.search).get("backgroundColor"))&&void 0!==e?e:"")}),[G]),Q=(0,f.useMemo)((()=>{var e;return decodeURIComponent(null!==(e=new URLSearchParams(G.search).get("textColor"))&&void 0!==e?e:"")}),[G]),J=(0,f.useMemo)((()=>{var e;return decodeURIComponent(null!==(e=new URLSearchParams(G.search).get("ctaColor"))&&void 0!==e?e:"")}),[G]),X=(0,f.useCallback)((()=>C(!1)),[]),{publicKey:ee,sendTransaction:te}=(0,qe.O)();return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(Je.Z,{open:T,onClose:X,children:(0,A.jsx)(gt,{close:X,isInputDisabled:v})}),(0,A.jsxs)(ft,{darkMode:!0,labelSendTo:"To Send"===h,expertMode:z,children:[(0,A.jsxs)(wt,{isWidget:"true"===(null===Y||void 0===Y?void 0:Y.toString()),backgroundColor:"true"===(null===Y||void 0===Y?void 0:Y.toString())?K:"",labelSendTo:"To Send"===h,children:[(0,A.jsxs)(vt,{style:{marginBottom:"5px"},children:[(0,A.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"inherit"},children:[x?(0,A.jsx)(Et,{active:x,children:(0,A.jsx)(Rt,{ctaColor:"true"===(null===Y||void 0===Y?void 0:Y.toString())?J:""})}):(0,A.jsx)(Ct,{placeholder:"0.00",value:c,onChange:m,disabled:"To Send"===h||w,className:"token-input",fetching:x,textColor:"true"===(null===Y||void 0===Y?void 0:Y.toString())?Q:""}),!H&&"To Send"===h&&S&&(0,A.jsx)("div",{style:{display:"flex",justifyContent:"flex-end",alignItems:"center",marginRight:"6px"},children:(0,A.jsxs)(Dt,{children:[(0,A.jsxs)("p",{style:{fontSize:"13px",whiteSpace:"nowrap"},children:["+"," ",(0,ye.og)(k,he.TP[null===s||void 0===s?void 0:s.networkId]?he.TP[null===s||void 0===s?void 0:s.networkId].decimals.toString():"18").toString()," ",he.TP[N.networkId].symbol[0]+he.TP[N.networkId].symbol.slice(1).toLowerCase()]}),(0,A.jsx)(Ot,{children:(0,A.jsx)(It,{src:U.fc[null===s||void 0===s?void 0:s.networkId]})})]})})]}),(0,A.jsxs)(Tt,{label:h,isFromSelLocked:"1"===q,isToSelLocked:"1"===V,ctaColor:"true"===(null===Y||void 0===Y?void 0:Y.toString())?J:"",onClick:"From Send"===h?"1"===q?()=>{}:u:"To Send"===h&&"1"===V?()=>{}:u,children:[(0,A.jsxs)(St,{textColor:"true"===(null===Y||void 0===Y?void 0:Y.toString())?Q:"",isWidget:"true"===(null===Y||void 0===Y?void 0:Y.toString()),children:[""!==o&&(0,A.jsx)($t,{children:(0,A.jsx)(Pt,{src:""!==o.logoURI?o.logoURI:U.oO[null===o||void 0===o?void 0:o.symbol]?U.oO[null===o||void 0===o?void 0:o.symbol]:`https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/${(0,P.fN)("From Send"===h?null===$||void 0===$?void 0:$.networkId:null===N||void 0===N?void 0:N.networkId)}/assets/${null===o||void 0===o?void 0:o.address}/logo.png`,onError:e=>{let{currentTarget:t}=e;t.onerror=null,t.src="https://cdn.shopify.com/s/files/1/1061/1924/products/Thinking_Face_Emoji_small.png?v=1571606036"}})}),(0,A.jsx)("p",{style:{whiteSpace:"nowrap"},children:o?o.symbol:"Select Token"})]}),""!==o?(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)("p",{style:{fontSize:"14px"},children:" on"}),"From Send"===h?(0,A.jsx)(Zt,{children:(0,A.jsxs)(bt,{backgroundColor:"true"===(null===Y||void 0===Y?void 0:Y.toString())?K:"",textColor:"true"===(null===Y||void 0===Y?void 0:Y.toString())?Q:"",children:[(0,A.jsx)($t,{children:(0,A.jsx)(It,{src:U.fc[null===s||void 0===s?void 0:s.networkId]})}),(0,A.jsxs)("span",{children:[null===s||void 0===s||null===(t=s.name)||void 0===t?void 0:t.split(" ")[0]," ",null===s||void 0===s||null===(n=s.name)||void 0===n?void 0:n.split(" ")[1]]}),"true"===(null===Y||void 0===Y?void 0:Y.toString())?"0"===q&&(0,A.jsx)(jt,{textColor:"true"===(null===Y||void 0===Y?void 0:Y.toString())?Q:""}):(0,A.jsx)(jt,{textColor:"true"===(null===Y||void 0===Y?void 0:Y.toString())?Q:""})]})}):"To Send"===h?(0,A.jsx)(Zt,{children:(0,A.jsxs)(bt,{backgroundColor:"true"===(null===Y||void 0===Y?void 0:Y.toString())?K:"",textColor:"true"===(null===Y||void 0===Y?void 0:Y.toString())?Q:"",children:[(0,A.jsx)($t,{children:(0,A.jsx)(It,{src:U.fc[null===s||void 0===s?void 0:s.networkId]})}),(0,A.jsxs)("span",{children:[null===s||void 0===s||null===(r=s.name)||void 0===r?void 0:r.split(" ")[0]," ",null===s||void 0===s||null===(i=s.name)||void 0===i?void 0:i.split(" ")[1]]}),Y?"0"===V&&(0,A.jsx)(jt,{textColor:"true"===(null===Y||void 0===Y?void 0:Y.toString())?Q:""}):(0,A.jsx)(jt,{textColor:"true"===(null===Y||void 0===Y?void 0:Y.toString())?Q:""})]})}):null]}):(0,A.jsx)(jt,{textColor:"true"===(null===Y||void 0===Y?void 0:Y.toString())?Q:""})]})]}),H&&"To Send"===h&&S&&(0,A.jsx)(vt,{style:{marginTop:"0px"},children:(0,A.jsx)(A.Fragment,{children:(0,A.jsx)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",whiteSpace:"nowrap"},children:(0,A.jsx)("div",{style:{display:"flex",justifyContent:"flex-end",alignItems:"center"},children:(0,A.jsxs)(Dt,{children:[(0,A.jsxs)("p",{style:{fontSize:"12px",whiteSpace:"nowrap"},children:["+"," ",(0,ye.og)(k,he.TP[null===s||void 0===s?void 0:s.networkId]?he.TP[null===s||void 0===s?void 0:s.networkId].decimals.toString():"18").toString()," ",he.TP[N.networkId].symbol[0]+he.TP[N.networkId].symbol.slice(1).toLowerCase()]}),(0,A.jsx)(Ot,{children:(0,A.jsx)(It,{src:U.fc[null===s||void 0===s?void 0:s.networkId]})})]})})})})}),(0,A.jsxs)(vt,{children:[(0,A.jsxs)(kt,{textColor:"true"===(null===Y||void 0===Y?void 0:Y.toString())?Q:"",children:[O?"Balance: ":"",""!==o?"-"===l?O?(0,A.jsx)(j.Z,{loading:!0,ctaColor:"true"===(null===Y||void 0===Y?void 0:Y.toString())?J:""}):"-":l&&"CHAIN_TYPE_BITCOIN"===s.type?(0,P.YG)(l,8):l&&(0,P.YG)(l,4):"-","From Send"===h&&O&&(0,A.jsx)(Mt,{onClick:g,children:(0,A.jsx)(Qe,{})})]}),(0,A.jsx)(kt,{textColor:"true"===(null===Y||void 0===Y?void 0:Y.toString())?Q:"",children:d&&""!==d&&"~$"+(0,P.YG)(d,4)})]})]}),"To Send"===h&&(0,A.jsx)(vt,{children:(0,A.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",width:"100%",whiteSpace:"nowrap",marginTop:"4px",margin:"auto 1rem"},children:[(0,A.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",whiteSpace:"nowrap",marginTop:"4px",margin:"auto 1rem"},children:[(0,A.jsx)(Ut,{textColor:"true"===(null===Y||void 0===Y?void 0:Y.toString())?Q:"",children:"Recipient Address"}),(0,A.jsx)(At,{children:0===L?(0,A.jsxs)(Nt,{ctaColor:"true"===(null===Y||void 0===Y?void 0:Y.toString())?J:"",onClick:()=>C((e=>!e)),children:[(0,A.jsx)(Ft,{ctaColor:"true"===(null===Y||void 0===Y?void 0:Y.toString())?J:""}),"Add Address"]}):(0,A.jsxs)(Lt,{children:[(0,P.Xn)(1===L?E:_,4),(0,A.jsx)("span",{style:{color:"#F3BF2B"},onClick:()=>{F(0),R(""),Z("")},children:"Remove"})]})})]}),"solana"===s.networkId&&""!==M&&null!==M&&(0,A.jsxs)("div",{style:{display:"flex",justifyContent:"flex-end",alignItems:"center",width:"100%",whiteSpace:"nowrap",marginTop:"4px",margin:"auto 1rem"},children:[(0,P.Xn)(M)," ",(0,A.jsx)("span",{style:{color:"#F3BF2B"},children:"ATA"})]})]})})]})]})});var Wt=n(14539),zt=n(32530);const Ht=T.ZP.div`
  display: flex;
  // width: 120px;
  gap: 4px;
  min-width: 120px;
  flex-wrap: no-wrap;
  padding: 2px;
  align-items: center;
`,Gt=T.ZP.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding : 4px 8px 4px 4px;
  border-radius: 8px;
  border : ${e=>{let{chainName:t}=e;return t?"1px solid #F2BF3B":"1px solid #ffffff1a"}};
  background-color: #ffffff1a;
`,Yt=T.ZP.div`
  display: grid;
  place-items: center;
  border-radius: 50%;
  border: 1px solid #ffffff40;
  width: 28px;
  height: 28px;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`	
    width: 20px;
     height: 20px;
  	`}};
`,Vt=T.ZP.img`
  width: 20px;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`	
    width: 14px;
  	`}};
`,qt=T.ZP.div`
  font-size: 10px;
`,Kt=(0,T.ZP)(Wt.Z)`
  &&& {
    width: 15px;
    height: 25px;
    fill: white;
  }
`,Qt=(T.ZP.img`
  position: relative;
  width: 25px;
  margin-left: -22px;
  margin-right: 10px;
  z-index: 0;
  `,T.ZP.h6`
  font-size: 12px;
  margin: 2px 0px;
  font-weight: ${e=>{let{chainName:t}=e;return t?"400":"600"}};
`),Jt=(0,T.ZP)((e=>{let{className:t,...n}=e;return(0,A.jsx)(Ye.Z,{...n,classes:{popper:t}})}))((e=>{let{theme:t}=e;return{[`& .${Ve.Z.tooltip}`]:{backgroundColor:`${t.text7}`,color:`${t.text6}`,border:`2px solid ${t.text5}`,fontSize:11,zIndex:100},[`& .${Ve.Z.arrow}`]:{"&::before":{backgroundColor:`${t.text7}`}}}})),Xt=e=>{var t,n;let{path:{asset:a,amount:r,chainName:i},index:s,totalPath:o}=e;return(0,A.jsx)(A.Fragment,{children:(0,A.jsxs)(Ht,{children:[(0,A.jsx)(Jt,{title:"Your transaction will be processed through Circle's Cross-Chain Transfer Protocol (CCTP).",placement:"top",disableHoverListener:"Circle\u2019s CCTP"!==i,disableFocusListener:!0,TransitionComponent:zt.Z,TransitionProps:{timeout:600},arrow:!0,children:(0,A.jsxs)(Gt,{chainName:"Circle\u2019s CCTP"===i,children:[(0,A.jsx)(Yt,{children:(0,A.jsx)(Vt,{src:""!==a.logoURI?"ipfs"===(null===(t=a.logoURI)||void 0===t?void 0:t.slice(0,4))?`https://ipfs.io/ipfs/${null===(n=a.logoURI)||void 0===n?void 0:n.split("//")[1]}`:a.logoURI:U.oO[a.symbol]?U.oO[a.symbol]:`https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/${(0,P.fN)(a.chainId)}/assets/${a.address}/logo.png`,onError:e=>{let{currentTarget:t}=e;t.onerror=null,t.src="https://cdn.shopify.com/s/files/1/1061/1924/products/Thinking_Face_Emoji_small.png?v=1571606036"}})}),(0,A.jsxs)(qt,{children:[(0,A.jsx)(Qt,{chainName:"Circle\u2019s CCTP"===i,children:""===r?a.symbol:(0,P.Pf)(r,4)}),(0,A.jsx)("p",{style:{margin:"2px 0px"},children:i})]})]})}),s!==o-1?(0,A.jsx)(Kt,{}):(0,A.jsx)(A.Fragment,{})]})})},en=T.ZP.div`
  display: flex;
  width: 100%;
  padding: 0% 0% 2% 0%;
  flex-direction: column;
  font-family: "Inter", sans-serif;
`,tn=T.ZP.div`
  display: flex;
  background: ${e=>{let{theme:t,backgroundColor:n}=e;return n?n+"90":t.bgGrayDefault}};
  filter: ${e=>{let{theme:t,backgroundColor:n}=e;return n?"contrast(.8)   brightness(1.1) opacity(0.8)":"contrast(1)"}};
  flex-wrap: wrap;
  padding: 2% 3%;
  width: 100%;
  border-radius: 14px;
`,nn=T.ZP.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 20px;
  font-size: 12px;
  color: #6C86AD;
  padding-top: 12px;
`,an=e=>{let{path:t,isSwap:n}=e;const[a]=(0,B.o8)(),[r]=(0,B.Tt)(),[i]=(0,B.Gm)(),s=(0,b.TH)(),o=(0,f.useMemo)((()=>new URLSearchParams(s.search).get("isWidget")),[s]),l=(0,f.useMemo)((()=>{var e;return decodeURIComponent(null!==(e=new URLSearchParams(s.search).get("backgroundColor"))&&void 0!==e?e:"")}),[s]);return(0,A.jsx)(A.Fragment,{children:(0,A.jsx)(en,{children:(0,A.jsxs)(tn,{backgroundColor:"true"===(null===o||void 0===o?void 0:o.toString())?l:"",children:[t.map(((e,n)=>(0,A.jsx)(Xt,{path:e,index:n,totalPath:t.length}))),n&&(0,A.jsx)(nn,{children:(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)("div",{style:{width:"50%",textAlign:"right"},children:[" ","Min Received"," ",(0,A.jsxs)("span",{style:{color:"#FFFFFF"},children:[" ",(0,P.Pf)(parseFloat(r)*((100-parseFloat(a))/100),4)," ",i&&i.symbol]})]}),(0,A.jsxs)("div",{style:{width:"50%",textAlign:"left"},children:["Slippage",(0,A.jsxs)("span",{style:{color:"#FFFFFF"},children:[" ",a,"%"]})]})]})})]})})})};const rn=n.p+"static/media/usdc-circle.9541f2d568d36e986ae71783445c81f6.svg",sn=T.ZP.div`
  display: flex;
  width: 100%;
  padding: 0% 0% 2% 0%;
`,on=T.ZP.div`
  display: flex;
  background: ${e=>{let{theme:t,backgroundColor:n}=e;return n?n+"90":t.bgGrayDefault}};
  filter: ${e=>{let{theme:t,backgroundColor:n}=e;return n?"contrast(.8)   brightness(1.1) opacity(0.8)":"contrast(1)"}};
  justify-content: space-between;
  padding: 1% 3%;
  min-height: 60px;
  width: 100%;
  border-radius: 14px;
`,ln=T.ZP.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  width: 100%;
`,dn=(T.ZP.img`
  width: 20px;
  cursor: pointer;
`,T.ZP.p`
  font-size: 14px;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToMedium`
		font-size:10px;
  	`}};
`),pn=T.ZP.img`
  position: relative;
  width: 14px;
  z-index: 0;
`,un=T.ZP.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`,cn=T.ZP.div`
  display: flex; 
  gap: 6px; 
  align-items: center; 
  margin-left:6px;
`,mn=T.ZP.button`
  &&& {
    font-family: "Inter", sans-serif;
    width: 50%;
    padding: 0.5rem;
    border:none;
    border-radius: 0.5rem;
    background-color: ${e=>{let{theme:t,ctaColor:n,disabled:a,locked:r}=e;return n?a||r?n+"a8":n:a||r?"#c19720c2":t.text3}};
    cursor: ${e=>{let{disabled:t,locked:n}=e;return t||n?"not-allowed":"pointer"}};
    font-weight: 500;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    place-items: center;
    gap: 10px;
    color: ${e=>{let{theme:t,active:n,locked:a,textColor:r}=e;return a?r?`${(0,P.Os)(r)}90`:`${t.text5}99`:n?r||t.text5:r?`${(0,P.Os)(r)}90`:t.text5}};
    transition: all 0.2s ease-in-out;
    :active {
      outline: none;
      border: none;
    }
    :focus {
      outline: none;
      border: none;
    }
  }
`,hn=e=>{let{title:t,pending:n,link:a,txnFlowType:r,reclaimSOLHandler:i}=e;const s=(0,b.TH)(),o=(0,f.useMemo)((()=>new URLSearchParams(s.search).get("isWidget")),[s]),l=(0,f.useMemo)((()=>{var e;return decodeURIComponent(null!==(e=new URLSearchParams(s.search).get("backgroundColor"))&&void 0!==e?e:"")}),[s]),d=(0,f.useMemo)((()=>{var e;return decodeURIComponent(null!==(e=new URLSearchParams(s.search).get("ctaColor"))&&void 0!==e?e:"")}),[s]),[p,u]=(0,B.H)(),[c,m]=(0,f.useState)("Reclaim SOL");T.ZP.div`
  display:flex;
  align-items:center;
  cursor:pointer;
  margin: 2px;
  margin-left: 45px;
	font-size: 12px;
`;return(0,A.jsx)(A.Fragment,{children:n||""!==a?(0,A.jsx)(sn,{children:(0,A.jsx)(on,{backgroundColor:"true"===(null===o||void 0===o?void 0:o.toString())?l:"",children:(0,A.jsxs)(ln,{children:[n?(0,A.jsx)(O.Z,{loading:!0,ctaColor:"true"===(null===o||void 0===o?void 0:o.toString())?d:""}):(0,A.jsx)(Re,{fill:"true"===(null===o||void 0===o?void 0:o.toString())&&d||void 0}),(0,A.jsxs)(un,{children:[(0,A.jsx)(dn,{children:t}),"Source Transaction Completed"===t&&"circle"===r&&(0,A.jsxs)(cn,{children:[(0,A.jsx)(pn,{src:rn}),(0,A.jsx)(dn,{style:{margin:"0px"},children:"via Circle\u2019s CCTP"})]})]}),"Source Transaction Completed"===t&&p.networkId==he.a_.SOLANA&&(0,A.jsxs)(mn,{onClick:async()=>{if("Reclaim SOL"===c){m("Claiming");const e=await i();m(e?"SOL Claimed":"Unable to Claim")}},locked:!(!c&&"Claiming"!=c),textColor:"#ffffff",ctaColor:"true"===(null===o||void 0===o?void 0:o.toString())?"ctaColor":"",disabled:!1,active:!0,children:["Claiming"==c&&(0,A.jsx)(j.Z,{loading:!0,ctaColor:(null===o||void 0===o||o.toString(),"#ffffff")}),c]}),(0,A.jsx)("div",{style:{display:"grid",cursor:"pointer",placeItems:"center"},onClick:()=>window.open(a),children:!n&&(0,A.jsx)(Me,{fill:"true"===(null===o||void 0===o?void 0:o.toString())&&d||void 0})})]})})}):(0,A.jsx)(A.Fragment,{})})},yn=e=>{let{fill:t="#E8425A"}=e;return(0,A.jsx)("div",{children:(0,A.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,A.jsx)("path",{d:"M12 9V14",stroke:t,strokeWidth:"2",strokeLinecap:"round"}),(0,A.jsx)("path",{d:"M12 17.5V18",stroke:t,strokeWidth:"2",strokeLinecap:"round"}),(0,A.jsx)("path",{d:"M2.23203 19.016L10.35 3.05201C11.063 1.64901 12.94 1.64901 13.652 3.05201L21.769 19.016C22.45 20.36 21.544 22 20.116 22H3.88303C2.45603 22 1.54903 20.36 2.23303 19.016H2.23203Z",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})})},xn=T.ZP.div`
  min-height: 40px;
  background: ${e=>{let{theme:t,warning:n}=e;return"#a6080fb5"}};
  border-radius: 8px;
  color: ${e=>{let{theme:t,warning:n}=e;return n?t.yellow2:t.white1}};
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  width: 100% !important;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 6px 10px;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
        height: 100%;
        padding: 5px 5px;
        // margin-top: 10px;
        font-size: 10px;
  	`}};
`,gn=T.ZP.div`
  transform: scale(0.6) translateX(4px);
  margin-top: 1.75px;
  margin-right: 16px;
`,fn=e=>{var t;let{message:n}=e;const a=(0,b.TH)(),r=((0,f.useMemo)((()=>new URLSearchParams(a.search).get("isWidget")),[a]),(0,f.useMemo)((()=>new URLSearchParams(a.search).get("display")),[a]));n="string"===typeof n?n:JSON.stringify(n);const i="Warning"===(null===(t=n)||void 0===t?void 0:t.split(" : ")[0]);return(0,A.jsxs)(xn,{warning:i,children:["horizontal"!==r&&(0,A.jsx)(gn,{children:(0,A.jsx)(yn,{fill:"#F3841E"})}),n]})};var bn=n(45181);T.ZP.div`
	font-family: 'Inter', sans-serif;
	font-size: 12px;
    font-weight: 400px;
    max-width: 400px;
	width: 100%;
	background: ${e=>{let{theme:t}=e;return t.bg11}};
	border-radius: 16px;
	display: ${e=>{let{show:t}=e;return t?"flex":"none"}};
	justify-content: center;
	align-items: center;
	padding: 10px 12.5px;
	position: relative;
	z-index: 3;
//visibility: ${e=>{let{show:t}=e;return t?"visible":"hidden"}};
`,T.ZP.div`
	position: absolute;
	top: 0;
	right:0;
	transform: translate(-45px,-14px);
`;var wn=n(20337);const vn=T.ZP.div`
  font-family: "Inter", sans-serif;
  color: ${e=>{let{theme:t,textColor:n}=e;return n||t.text7}};
  width: 360px;
  height: 255px;
  border-radius: 24px;
  background-color: ${e=>{let{theme:t,backgroundColor:n}=e;return n||t.modalBG}};
  border : 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(32px);
  display: grid;
  place-items: center;
  padding: 15px 20px;
  position: relative;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToMedium`
		width: 340px;
  	`}};
`,Tn=T.ZP.p`
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  margin-top: 0px;
  margin-bottom: 16px;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
      font-size: 18px;
  margin-top: 0px;
  margin-bottom: 16px;
  	`}};
`,Cn=T.ZP.div`
  text-align: center;
  line-height: 25px;
  font-size: 16px;
`,Sn=(0,T.ZP)(wn.Z)`
  &&& {
    background: ${e=>{let{theme:t,ctaColor:n}=e;return n||t.yellow2}};
    color: ${e=>{let{theme:t,textColor:n}=e;return n||t.text5}};
    font-family: "Inter", sans-serif;
    font-size: 18px;
    width: fit-content;
    width: 100%;
    height: 50px;
    text-transform: none;
    border-radius: 7px;
    box-shadow: none;
    font-weight: 400;
    ${e=>{let{theme:t}=e;return t.mediaWidth.upToMedium`
        font-size: 16px;
  	`}};
  }
`,kn=(0,T.ZP)(L.Z)`
  color: ${e=>{let{theme:t,textColor:n}=e;return n||t.text7}};
  margin-right: 14px;
  margin-top: 10px;
  margin-left: auto;
  width: 40px !important;
  cursor: pointer;
  height: 40px !important;
  padding: 8px;
  position: absolute;
  right: 15px;
  top: 6px;
  :hover {
    opacity: 0.6;
    transition: all 0.1s ease-in-out;
  }
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
    right: 10px;
    top: 0px;
  	`}};
`,In=e=>{let{action:t,close:n,priceImpact:a}=e;const r=(0,b.TH)(),i=(0,f.useMemo)((()=>new URLSearchParams(r.search).get("isWidget")),[r]),s=(0,f.useMemo)((()=>{var e;return decodeURIComponent(null!==(e=new URLSearchParams(r.search).get("backgroundColor"))&&void 0!==e?e:"")}),[r]),o=(0,f.useMemo)((()=>{var e;return decodeURIComponent(null!==(e=new URLSearchParams(r.search).get("textColor"))&&void 0!==e?e:"")}),[r]),l=(0,f.useMemo)((()=>{var e;return decodeURIComponent(null!==(e=new URLSearchParams(r.search).get("ctaColor"))&&void 0!==e?e:"")}),[r]);return(0,A.jsxs)(vn,{textColor:"true"===(null===i||void 0===i?void 0:i.toString())?o:"",backgroundColor:"true"===(null===i||void 0===i?void 0:i.toString())?s:"",children:[(0,A.jsx)(kn,{onClick:n,textColor:"true"===(null===i||void 0===i?void 0:i.toString())?o:""}),(0,A.jsx)(Tn,{children:"Warning"}),(0,A.jsxs)(Cn,{children:["This swap has a price impact of at least ",a,"%. Please confirm that you would like to continue with this swap."]}),(0,A.jsx)(Sn,{onClick:t,textColor:"true"===(null===i||void 0===i?void 0:i.toString())?o:"",ctaColor:"true"===(null===i||void 0===i?void 0:i.toString())?l:"",children:"Confirm"})]})};var Pn=n(68178),jn=n(18550),An=n(42201),En=n(22612),Rn=n(7279),Mn=n(82668);const Zn=T.ZP.div`
    width: 360px;
    color: ${e=>{let{theme:t}=e;return t.text1}};
    font-family: 'Inter', sans-serif;
    background: ${e=>{let{theme:t}=e;return t.modalBG}};
    border : 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 15px;
    display: grid;
    place-items: center;
    padding: 10px;
    ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
        width: 320px;
  	`}};
`,_n=(0,T.ZP)(L.Z)`
	position: absolute;
	color:white;
	right: 15px;
	top: 15px;
	width: 1.7rem !important;
	cursor:pointer;
	height: 1.7rem !important;
`,Ln=T.ZP.p`
	font-size: 1.2rem;
	text-align: center;
`,Fn=T.ZP.div`
    width: 93%;
    background: ${e=>{let{theme:t}=e;return t.bg3}};
    border-radius: 4px;
    padding: 12px 4px;
    margin: 5px auto;
`,$n=T.ZP.div`
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 5px;
`,Nn=T.ZP.div`
    font-size: 12px;
    cursor: pointer;
    color: ${e=>{let{theme:t}=e;return t.blue1}};
`,Un=T.ZP.div`
    width: 93%;
    background: ${e=>{let{theme:t}=e;return t.yellow2}}21;
    border-radius: 4px;
    padding: 15px 10px;
    margin: 25px auto;
    display: grid;
    color: ${e=>{let{theme:t}=e;return t.yellow2}};
    place-items: center;
`,Dn=(0,T.ZP)(wn.Z)`
	&&&{
    background: ${e=>{let{theme:t,disabled:n}=e;return n?t.yellow2.concat("88"):t.yellow2}};
    color: ${e=>{let{theme:t}=e;return t.text5}};
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    width: 93%;
    height: 45px; 
    text-transform: none;
    padding: 0 20px;
    border-radius: 7px;
    box-shadow: none;
    font-weight: 400;
    margin-bottom: 20px;
  }
`,On=(0,T.ZP)(Mn.Z)`
    &&&{
        width: 15px;
        fill: ${e=>{let{theme:t}=e;return t.yellow2}};
    }
`,Bn=T.ZP.div`
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: left;
`,Wn=T.ZP.div`
    font-size: 12px;
    margin-bottom: 10px;
`,zn=T.ZP.div`
    font-size: 12px;
    font-weight: 600;
    margin: 5px 0;
`,Hn=T.ZP.input`
	color: ${e=>{let{theme:t}=e;return t.text1}};
	background: none;
	border: none;
	&:focus{
		outline: none;
	}
`,Gn=T.ZP.div`
    display: flex;
    align-items: center;
    justify-content: left;
    width: 100%;
    margin-top: 10px;
`,Yn=e=>{let{name:t,address:n,explorerLink:a,close:r,handleImport:i}=e;const[s,o]=(0,f.useState)(!1);return(0,A.jsxs)(Zn,{children:[(0,A.jsx)(_n,{onClick:r}),(0,A.jsx)(Ln,{children:"Import Token"}),(0,A.jsxs)(Fn,{children:[(0,A.jsx)($n,{children:t}),(0,A.jsx)(Nn,{onClick:()=>window.open(a,"_blank","noopener,noreferrer"),children:n})]}),(0,A.jsxs)(Un,{children:[(0,A.jsxs)(Bn,{children:[(0,A.jsx)(On,{}),"Trade at your own risk!"]}),(0,A.jsx)(Wn,{children:"Anyone can create a token, including creating fake versions of existing tokens that claim to represent projects."}),(0,A.jsx)(zn,{children:"If you purchase this token, you may not be able to sell it back."}),(0,A.jsx)(zn,{style:{fontWeight:400},children:"Note: Token with restricted transfer functionality can cause loss of funds"}),(0,A.jsxs)(Gn,{children:[(0,A.jsx)(Hn,{type:"checkbox",checked:s,onChange:()=>o((e=>!e))}),(0,A.jsx)(zn,{children:"I understand"})]})]}),(0,A.jsx)(Dn,{onClick:i,disabled:!s,children:"Import"})]})};var Vn=n(10343),qn=n(82162),Kn=n(20162),Qn=n(96249),Jn=n(54933),Xn=n(5e3),ea=n(68592);const ta=JSON.parse('[{"inputs":[{"internalType":"address","name":"_wrappedNativeTokenAddress","type":"address"},{"internalType":"address","name":"_gatewayContract","type":"address"},{"internalType":"address","name":"_usdcAddress","type":"address"},{"internalType":"address","name":"_tokenMessenger","type":"address"},{"internalType":"bytes","name":"_routerMiddlewareBase","type":"bytes"},{"internalType":"uint256","name":"_minGasThreshhold","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"AmountTooLarge","type":"error"},{"inputs":[],"name":"InvalidAmount","type":"error"},{"inputs":[],"name":"InvalidFee","type":"error"},{"inputs":[],"name":"InvalidGateway","type":"error"},{"inputs":[],"name":"InvalidRefundData","type":"error"},{"inputs":[],"name":"InvalidRequestSender","type":"error"},{"inputs":[],"name":"MessageAlreadyExecuted","type":"error"},{"inputs":[],"name":"MessageExcecutionFailedWithLowGas","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"pauser","type":"address"},{"indexed":false,"internalType":"uint256","name":"stakedAmount","type":"uint256"}],"name":"CommunityPaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"srcToken","type":"address"},{"indexed":false,"internalType":"uint256","name":"feeAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"depositId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"eventNonce","type":"uint256"},{"indexed":false,"internalType":"bool","name":"initiatewithdrawal","type":"bool"},{"indexed":false,"internalType":"address","name":"depositor","type":"address"}],"name":"DepositInfoUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"partnerId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"destChainIdBytes","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"destAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"depositId","type":"uint256"},{"indexed":false,"internalType":"address","name":"srcToken","type":"address"},{"indexed":false,"internalType":"address","name":"depositor","type":"address"},{"indexed":false,"internalType":"bytes","name":"recipient","type":"bytes"},{"indexed":false,"internalType":"bytes","name":"destToken","type":"bytes"}],"name":"FundsDeposited","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"partnerId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"destChainIdBytes","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"destAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"depositId","type":"uint256"},{"indexed":false,"internalType":"address","name":"srcToken","type":"address"},{"indexed":false,"internalType":"bytes","name":"recipient","type":"bytes"},{"indexed":false,"internalType":"address","name":"depositor","type":"address"},{"indexed":false,"internalType":"bytes","name":"destToken","type":"bytes"},{"indexed":false,"internalType":"bytes","name":"message","type":"bytes"}],"name":"FundsDepositedWithMessage","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"messageHash","type":"bytes32"},{"indexed":false,"internalType":"address","name":"forwarder","type":"address"},{"indexed":false,"internalType":"uint256","name":"nonce","type":"uint256"}],"name":"FundsPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"messageHash","type":"bytes32"},{"indexed":false,"internalType":"address","name":"forwarder","type":"address"},{"indexed":false,"internalType":"uint256","name":"nonce","type":"uint256"},{"indexed":false,"internalType":"bool","name":"execFlag","type":"bool"},{"indexed":false,"internalType":"bytes","name":"execData","type":"bytes"}],"name":"FundsPaidWithMessage","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"partnerId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"destChainIdBytes","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"usdcNonce","type":"uint256"},{"indexed":false,"internalType":"address","name":"srcToken","type":"address"},{"indexed":false,"internalType":"bytes32","name":"recipient","type":"bytes32"},{"indexed":false,"internalType":"address","name":"depositor","type":"address"}],"name":"iUSDCDeposited","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_TRANSFER_SIZE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MIN_GAS_THRESHHOLD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PAUSER","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"RESOURCE_SETTER","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"communityPause","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"depositNonce","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"destDetails","outputs":[{"internalType":"uint32","name":"domainId","type":"uint32"},{"internalType":"uint256","name":"fee","type":"uint256"},{"internalType":"bool","name":"isSet","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"executeRecord","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"gatewayContract","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"partnerId","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"destAmount","type":"uint256"},{"internalType":"address","name":"srcToken","type":"address"},{"internalType":"address","name":"refundRecipient","type":"address"},{"internalType":"bytes32","name":"destChainIdBytes","type":"bytes32"}],"internalType":"struct IAssetForwarder.DepositData","name":"depositData","type":"tuple"},{"internalType":"bytes","name":"destToken","type":"bytes"},{"internalType":"bytes","name":"recipient","type":"bytes"}],"name":"iDeposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"srcToken","type":"address"},{"internalType":"uint256","name":"feeAmount","type":"uint256"},{"internalType":"uint256","name":"depositId","type":"uint256"},{"internalType":"bool","name":"initiatewithdrawal","type":"bool"}],"name":"iDepositInfoUpdate","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"partnerId","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"destAmount","type":"uint256"},{"internalType":"address","name":"srcToken","type":"address"},{"internalType":"address","name":"refundRecipient","type":"address"},{"internalType":"bytes32","name":"destChainIdBytes","type":"bytes32"}],"internalType":"struct IAssetForwarder.DepositData","name":"depositData","type":"tuple"},{"internalType":"bytes","name":"destToken","type":"bytes"},{"internalType":"bytes","name":"recipient","type":"bytes"},{"internalType":"bytes","name":"message","type":"bytes"}],"name":"iDepositMessage","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"partnerId","type":"uint256"},{"internalType":"bytes32","name":"destChainIdBytes","type":"bytes32"},{"internalType":"bytes32","name":"recipient","type":"bytes32"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"iDepositUSDC","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"requestSender","type":"string"},{"internalType":"bytes","name":"packet","type":"bytes"},{"internalType":"string","name":"","type":"string"}],"name":"iReceive","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes32","name":"srcChainId","type":"bytes32"},{"internalType":"uint256","name":"depositId","type":"uint256"},{"internalType":"address","name":"destToken","type":"address"},{"internalType":"address","name":"recipient","type":"address"}],"internalType":"struct IAssetForwarder.RelayData","name":"relayData","type":"tuple"}],"name":"iRelay","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes32","name":"srcChainId","type":"bytes32"},{"internalType":"uint256","name":"depositId","type":"uint256"},{"internalType":"address","name":"destToken","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"bytes","name":"message","type":"bytes"}],"internalType":"struct IAssetForwarder.RelayDataMessage","name":"relayData","type":"tuple"}],"name":"iRelayMessage","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"isCommunityPauseEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes[]","name":"data","type":"bytes[]"}],"name":"multicall","outputs":[{"internalType":"bytes[]","name":"results","type":"bytes[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"pauseStakeAmountMax","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pauseStakeAmountMin","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"rescue","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"routerMiddlewareBase","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32[]","name":"_destChainIdBytes","type":"bytes32[]"},{"components":[{"internalType":"uint32","name":"domainId","type":"uint32"},{"internalType":"uint256","name":"fee","type":"uint256"},{"internalType":"bool","name":"isSet","type":"bool"}],"internalType":"struct IAssetForwarder.DestDetails[]","name":"_destDetails","type":"tuple[]"}],"name":"setDestDetails","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"toggleCommunityPause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"tokenMessenger","outputs":[{"internalType":"contract ITokenMessenger","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStakedAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"address","name":"_gatewayContract","type":"address"},{"internalType":"bytes","name":"_routerMiddlewareBase","type":"bytes"},{"internalType":"uint256","name":"minPauseStakeAmount","type":"uint256"},{"internalType":"uint256","name":"maxPauseStakeAmount","type":"uint256"}],"name":"update","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenMessenger","type":"address"}],"name":"updateTokenMessenger","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"usdc","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawStakeAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"wrappedNativeToken","outputs":[{"internalType":"contract IWETH","name":"","type":"address"}],"stateMutability":"view","type":"function"}]');var na=n(39707);const aa=T.ZP.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${e=>{let{theme:t,active:n}=e;return n?t.text7:t.text7.concat("80")}}; //ChangeColor
  filter: ${e=>{let{theme:t,isEnabled:n}=e;return n?"grayscale(0)":"grayscale(1)"}};
  font-size: 10px;
  margin: 7px 0px 0px 0px;
  gap:3px;
  cursor: pointer;
  outline: none;
  border: none;
  background-color: transparent;
  padding: 0px;
`,ra=T.ZP.div`
  width: 45px;
  height: 45px;
  background: rgba(138, 138, 155, 0.24);
  border-radius: 8px;
  display: grid;
  place-items: center;
  border: 1px solid
    ${e=>{let{theme:t,active:n}=e;return n?t.yellow2:"transparent"}};
`,ia=T.ZP.img`
  width: 26px;
`,sa=(0,T.ZP)((e=>{let{className:t,...n}=e;return(0,A.jsx)(Ye.Z,{...n,classes:{popper:t}})}))((e=>{let{theme:t}=e;return{[`& .${Ve.Z.tooltip}`]:{wordSpacing:"nowrap",backgroundColor:`${t.text7}`,color:`${t.text6}`,border:`2px solid ${t.text5}`,fontSize:11,zIndex:100},[`& .${Ve.Z.arrow}`]:{"&::before":{backgroundColor:`${t.text7}`}}}})),oa=e=>{let{thisChain:t,chain:n,setFilteredList:a,chainSelectHandler:r,setChainExpander:i}=e;const[s,o]=(0,f.useState)(!0);return(0,f.useEffect)((()=>{(async e=>{try{if(n.chainId!==he.a_.SOLANA){const n=await(0,ea.G$)(e.endpoint),a=await u().get(W.LCD_URL);if(200===a.status){var t;const r=(await(null===(t=a.data)||void 0===t?void 0:t.contractConfig)||[]).find((t=>t.chainId===e.networkId&&"VOYAGER"===t.contractType&&!0===t.contract_enabled));if(r){const e=r.contractAddress,t=new na.CH(e,ta,n);await t.paused()&&o(!1)}}}}catch(a){console.log("error",a)}})(t)}),[t]),(0,A.jsx)(A.Fragment,{children:(0,A.jsx)(sa,{title:`${t.name} has been paused due to some unforeseen issue.`,placement:"top",disableFocusListener:!0,TransitionComponent:zt.Z,TransitionProps:{timeout:600},arrow:!0,disableHoverListener:s,children:(0,A.jsxs)(aa,{active:t.networkId===n.networkId,isEnabled:s,onClick:()=>{a([]),r(t),i(!1)},disabled:t.networkId===n.networkId||!s,children:[(0,A.jsx)(ra,{active:t.networkId===n.networkId,children:(0,A.jsx)(ia,{src:U.fc[t.networkId]})}),(0,A.jsxs)("p",{style:{marginTop:"1px",marginBottom:"1px"},children:[t.name.split(" ")[0],(0,A.jsx)("br",{}),t.name.split(" ")[1]]})]})})})},la=T.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 580px;
  height: 100%;
  border-radius: 24px;
  padding: 2%;
  color: ${e=>{let{theme:t,textColor:n}=e;return n||t.text7}};
  background: ${e=>{let{theme:t,backgroundColor:n}=e;return n||t.modalBG}};
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(32px);
  font-family: "Inter", sans-serif;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
		width: 90vw;
		max-width: 457px;
	    height: 100%;
  	`}};
`,da=T.ZP.div`
  display: flex;
  flex-direction: column;
  width: 98%;
  border-radius: 16px;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25), 0px 0px 4px 0px rgba(0, 0, 0, 0.10);
  color: ${e=>{let{theme:t,textColor:n}=e;return n||t.text1}};
  background: ${e=>{let{theme:t,backgroundColor:n}=e;return n?n+"90":t.bg2}};
  filter: ${e=>{let{theme:t,backgroundColor:n}=e;return n?"contrast(.8)   brightness(1.1) opacity(0.8)":"contrast(1)"}};

  backdrop-filter: blur(32px);
  overflow-x: hidden;
  overflow-y: auto;
  font-family: "Inter", sans-serif;
  ::-webkit-scrollbar {
    width: 4px;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    background: ${e=>{let{theme:t,backgroundColor:n}=e;return n?t.transparent2:t.gray2.concat("70")}};
    border-radius: 4px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${e=>{let{theme:t,backgroundColor:n}=e;return n?t.transparent2:t.gray2}};
    border-radius: 4px;
  }
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
        max-width: 25rem;
  	`}};
`,pa=T.ZP.div`
  padding: 0 4%;
  display: flex;
  flex-direction: column;
  width: 60px;
  border-radius: 16px;
  color: ${e=>{let{theme:t,textColor:n}=e;return n||t.text1}};
  background: ${e=>{let{theme:t,backgroundColor:n}=e;return n?n+"90":t.bg2}};
  filter: ${e=>{let{theme:t,backgroundColor:n}=e;return n?"contrast(.8)   brightness(1.1) opacity(0.8)":"contrast(1)"}};

  backdrop-filter: blur(32px);
  overflow-x: hidden;
  overflow-y: auto;
  font-family: "Inter", sans-serif;
`,ua=T.ZP.div`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToMedium`
      padding: .6rem 10px;
  	`}};
  border-width: 0px 0px 1px 0px;
  border-style: solid;
  border-color: #5858633d;
  borerBottom: 1px solid #5858633d;
  &:hover{
    border-color: #FFFFFF20;
    background : ${e=>{let{theme:t,darkmode:n}=e;return n?"#151515":"#c1c1c1"}};
}
`,ca=T.ZP.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  border-width: 0.0625rem;
  border-style: solid;
  background-color: ${e=>{let{theme:t,backgroundColor:n}=e;return n||t.bg8}};
  border-bottom: 2px solid red;
  border-color: transparent transparent rgb(225, 225, 225, 0.2);
`,ma=T.ZP.div`
  display: flex;
  align-items: center;
`,ha=T.ZP.div`
  color: ${e=>{let{theme:t}=e;return t.text7}};
  font-size: 14px;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
      font-size:14px;
      font-weight:500;
  	`}};
`,ya=T.ZP.div`
  font-size: 14px;
  justify-self: flex-end;
  margin-left: auto;
  margin-right: 0.3rem;
  font-weight: 400;
  color: #585863;
`,xa=T.ZP.img`
  position:sticky;
  width: 25px;
  margin-right: 10px;
  z-index: 111;
`,ga=T.ZP.img`
  width: 26px;
  height: 26px;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
      width:20px;
      height:20px;
  	`}};
`,fa=T.ZP.img`
  position: relative;
  width: 25px;
  margin-left: -22px;
  margin-right: 10px;
  z-index: 0;
  `,ba=T.ZP.p`
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 16px;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
      font-size: 18px;
  margin-top: 10px;
  margin-bottom: 16px;
  	`}};
`,wa=(0,T.ZP)(L.Z)`
  color: ${e=>{let{theme:t,textColor:n}=e;return n||t.text7}};
  margin-right: 14px;
  margin-top: 10px;
  margin-left: auto;
  width: 40px !important;
  cursor: pointer;
  height: 40px !important;
  padding: 8px;
  position: absolute;
  right: 15px;
  top: 6px;
  :hover {
    opacity: 0.6;
    transition: all 0.1s ease-in-out;
  }
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
    right: 10px;
    top: 0px;
  	`}};
`,va=(0,T.ZP)(i.Z)`
  position: absolute;
  color:  ${e=>{let{theme:t}=e;return t.text7}};
  left: 15px;
  top: 15px;
  width: 1.7rem !important;
  cursor: pointer;
  height: 1.7rem !important;
`,Ta=T.ZP.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 10px;
  margin-bottom: 25px;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
      margin-bottom: 35px;
  	`}};
`,Ca=T.ZP.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25), 0px 0px 4px 0px rgba(0, 0, 0, 0.10);
  padding: 0 16px;
  cursor: pointer;
  border-radius: 16px;
  width: 20%;
  color: ${e=>{let{theme:t,ctaColor:n}=e;return n?"#FFFFFF90":t.text3}};
  background: ${e=>{let{theme:t,backgroundColor:n}=e;return n?n+"90":t.bg1}};
  filter: ${e=>{let{theme:t,backgroundColor:n}=e;return n?"contrast(.8)   brightness(1.1) opacity(0.8)":"contrast(1)"}};
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
      width: 30%;
      font-size:14px;
      font-weight:500;
  	`}};
`,Sa=T.ZP.div`
  width: -webkit-fill-available;
  height: 40px;
  background: ${e=>{let{theme:t,backgroundColor:n}=e;return n?n+"90":t.bg2}};
  filter: ${e=>{let{theme:t,backgroundColor:n}=e;return n?"contrast(.8)   brightness(1.1) opacity(0.8)":"contrast(1)"}};
  border-radius: 16px;
  display: flex;
  align-items: center;
  padding: 0 4px;
  padding-left: 10px;
  // border: 1px solid;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25), 0px 0px 4px 0px rgba(0, 0, 0, 0.10);
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
        width: 65%;
  	`}};
`,ka=T.ZP.input`
  width: 100%;
  color: ${e=>{let{theme:t,textColor:n}=e;return n||t.text7}};
  background: none;
  border: none;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 400;
  &:focus {
    outline: none;
  }
`,Ia=(0,T.ZP)(wn.Z)`
  &&& {
    background: ${e=>{let{theme:t,ctaColor:n}=e;return n||t.blue1}};
    color: ${e=>{let{theme:t}=e;return t.white}};
    font-family: "Inter", sans-serif;
    font-size: 1rem;
    width: fit-content;
    height: 35px;
    text-transform: none;
    padding: 0;
    padding-left: 2px;
    padding-right: 2px;
    border-radius: 10px;
    box-shadow: none;
    font-weight: 400;
  }
`,Pa=T.ZP.div`
  width: 90%;
  border-radius: 15px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  margin: 10px 0;
  background: ${e=>{let{theme:t,backgroundColor:n}=e;return n||t.bg6}};
  padding: 30px 20px;
`,ja=T.ZP.img`
  width: 40px;
  height: 40px;
`,Aa=T.ZP.div`
  display: grid;
  padding: 2px 0;
  margin: 0 15px;
  width: 255px;
`,Ea=T.ZP.p`
font-size: 12px; 
color: red;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`	
        font-size: 12px; 
  	`}};
`,Ra=T.ZP.div``,Ma=T.ZP.div`
  width: ${e=>{let{chainExpander:t}=e;return t?"100%":"154px"}};
  background: ${e=>{let{theme:t,backgroundColor:n}=e;return n?n+"90":t.bg2}};
  filter: ${e=>{let{theme:t,backgroundColor:n}=e;return n?"contrast(.8)   brightness(1.1) opacity(0.8)":"contrast(1)"}};
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25), 0px 0px 4px 0px rgba(0, 0, 0, 0.10);
  display: grid;
  grid-template-columns:${e=>{let{chainExpander:t}=e;return t?"repeat(7,1fr)":" 1fr 1fr"}};
  gap: 10px;
  flex-wrap: wrap;
  align-content: flex-start;
  border-radius: 16px;
  padding: 0% 8px;
  justify-content: flex-start;
  align-items: start;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 3px;
    border-radius: 5px;
  }
  ::-webkit-scrollbar-track {
    background: ${e=>{let{theme:t,backgroundColor:n}=e;return n?t.transparent2:t.gray2.concat("40")}};
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${e=>{let{theme:t,backgroundColor:n}=e;return n?t.transparent2:t.gray2}};
  }
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToMedium`
    grid-template-columns:${e=>{let{chainExpander:t}=e;return t?"repeat(5,1fr)":" 1fr"}};
    width: ${e=>{let{chainExpander:t}=e;return t?"100%":"80px"}};
    gap: ${e=>{let{chainExpander:t}=e;return t?"10px":"0"}};
		justify-content:flex-start;
    padding : 1% 8px;
  	`}};
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToExtraSmall`
    grid-template-columns:${e=>{let{chainExpander:t}=e;return t?"repeat(4,1fr)":" 1fr"}};
    gap: ${e=>{let{chainExpander:t}=e;return t?"10px":"0"}};
  	`}};
`,Za=T.ZP.div`
  display: grid; 
  place-items: center;
  overflow: hidden; 
  padding: 8px; 
  border-radius: 12px; 
  background: #8a8a9b3d;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`	
        padding:4px;
  	`}};
`,_a=T.ZP.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${e=>{let{theme:t,active:n}=e;return n?t.text7:t.text7.concat("80")}}; //ChangeColor
  font-size: 10px;
  margin: 7px 0px 0px 0px;
  gap:3px;
  cursor: pointer;
  outline: none;
  border: none;
  background-color: transparent;
  padding: 0px;
`,La=T.ZP.div`
  width: 45px;
  height: 45px;
  background: rgba(138, 138, 155, 0.24);
  border-radius: 8px;
  display: grid;
  place-items: center;
  border: 1px solid
    ${e=>{let{theme:t,active:n}=e;return n?t.yellow2:"transparent"}};
`,Fa=T.ZP.div`
  display: flex; 
  align-items: center; 
  height: min-content; 
  justify-content: flex-start; 
  white-space: nowrap; 
  gap: 10px; 
  padding: 6px 4px 8px 4px; 
  width: 100%; 
  border-radius: 12px; 
  margin: 6px 0px;
  border-width: 0px 0px 1px 0px;
  border-style: solid;
  border-color: #5858633d;
`,$a=T.ZP.div`
  display: grid; 
  place-items: center; 
  width: 18%; 
  cursor: pointer;
`,Na=T.ZP.p`
  margin: 4px 0px; 
	font-size: 12px;
  overflow: hidden;
  max-width: 100px; 
  color: ${e=>{let{theme:t}=e;return t.text7}};
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
      font-size: 10px; 
  `}};
`,Ua=T.ZP.div`
  position: absolute;
  top: 6.2rem;
  display: flex; 
  align-items: center; 
  justify-content: flex-start; 
  width: 100%; 
  padding-left:3%;
  gap:6px;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
		top: 5.4rem;
  `}};
`,Da=T.ZP.div`
  display: flex;
  height: ${e=>{let{widget:t}=e;return t?"16rem":"21rem"}};
  gap: 20px;
  width: 100%;
  border-radius: 0px 0px 1.5rem 1.5rem;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
		gap:20px;
    padding-bottom:10px;
  	`}};
`,Oa=(0,T.ZP)(Qn.Z)`
  &&& {
    color: ${e=>{let{theme:t,ctaColor:n}=e;return n||t.yellow2}}; //ChangeColor
    width: 16px;
    margin: 0 7px;
  }
`,Ba=T.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 20px;
  max-height: 391px;
  overflow-y: scroll;
`,Wa=T.ZP.div`
  padding-top: 20px;
  margin: 0 auto;
  display: grid;
  place-items: center;
`,za=(0,T.ZP)(An.Z)`
  &&& {
    margin-left: 4px;
    width: 18px;
    fill: ${e=>{let{theme:t,ctaColor:n}=e;return n||t.text3}};
  }
`,Ha=(0,T.ZP)(En.Z)`
  &&& {
    margin-left: 4px;

    width: 18px;
    fill: ${e=>{let{theme:t,ctaColor:n}=e;return n||t.text3}};
  }
`,Ga=e=>{var t;let{list:n,title:r,currentValue:s,optionSelectHandler:o,iconList:l,peerValue:d,close:p,chain:u,balanceList:c,chainSelectHandler:m,isSource:h}=e;const[x]=(0,D._X)(),[w]=(0,B.pZ)(),[v,T]=(0,B.v0)(),[C,S]=(0,f.useState)(!1),[k]=(0,Jn.G)(),E=(0,a.Z)(`(max-width: ${I.e.upToSmall}px)`),[R,M]=(0,f.useState)(!1),Z=(0,b.TH)(),_=(0,f.useMemo)((()=>new URLSearchParams(Z.search).get("isWidget")),[Z]),L=(0,f.useMemo)((()=>{var e;return decodeURIComponent(null!==(e=new URLSearchParams(Z.search).get("backgroundColor"))&&void 0!==e?e:"")}),[Z]),F=(0,f.useMemo)((()=>{var e;return decodeURIComponent(null!==(e=new URLSearchParams(Z.search).get("textColor"))&&void 0!==e?e:"")}),[Z]),$=(0,f.useMemo)((()=>{var e;return decodeURIComponent(null!==(e=new URLSearchParams(Z.search).get("ctaColor"))&&void 0!==e?e:"")}),[Z]),N=(0,f.useMemo)((()=>{const e=new URLSearchParams(Z.search).get("srcChains");return null===e||void 0===e?void 0:e.split(",")}),[Z]),O=(0,f.useMemo)((()=>{const e=new URLSearchParams(Z.search).get("dstChains");return null===e||void 0===e?void 0:e.split(",")}),[Z]),W=(0,f.useMemo)((()=>{var e;const t=new URLSearchParams(Z.search).get("srcTokens");return null===t||void 0===t||null===(e=t.split(","))||void 0===e?void 0:e.map((e=>e.toLowerCase()))}),[Z]),H=(0,f.useMemo)((()=>{var e;const t=new URLSearchParams(Z.search).get("dstTokens");return null===t||void 0===t||null===(e=t.split(","))||void 0===e?void 0:e.map((e=>e.toLowerCase()))}),[Z]);let G=localStorage.getItem("anyToken")?JSON.parse(localStorage.getItem("anyToken")||"{}"):null,Y=G&&G[x]?G[x][u.networkId]:[],V=[];w&&v.map((e=>{var t,a;null===(t=w[e])||void 0===t||null===(a=t.tokens)||void 0===a||a.map((t=>{let a={...t};t.chainId.toString()===u.networkId&&void 0===n.find((e=>e.address.toLowerCase()===t.address.toLowerCase()))&&void 0===V.find((e=>e.address.toLowerCase()===t.address.toLowerCase()))&&(U.HE!==e&&(a.native=!1),V.push(a))}))}));let q=Y?[...n,...V,...Y]:[...n,...V];q="true"!==(null===_||void 0===_?void 0:_.toLowerCase())?q:h?q.filter((e=>!W||W.includes(e.address.toLowerCase()))):q.filter((e=>!H||H.includes(e.address.toLowerCase()))),console.log("alltokens",q),q=q.filter((e=>"0x933d31561e470478079FEB9A6Dd2691fAD8234DF"!==e.address));const K=(0,f.useCallback)((e=>e.sort(((e,t)=>parseFloat(c[t.address.toLowerCase()])-parseFloat(c[e.address.toLowerCase()])||e.name.localeCompare(t.name)))),[c]);q=K(q);let[Q,J]=(0,f.useState)(q),[X,ee]=(0,f.useState)("undefined"!==typeof window&&"object"!==typeof localStorage.getItem("tokenlist")?JSON.parse(localStorage.getItem("tokenlist")):[]);const[te,ne]=(0,f.useState)(!1),ae=(e,t)=>{if(e.stopPropagation(),0==X.length)ee((e=>[...e,t]));else if(X.find((e=>e.address===t.address))){const e=X.filter((e=>e.address!==t.address));ee(e)}else ee((e=>[...e,t]))};(0,f.useEffect)((()=>{localStorage.setItem("tokenlist",JSON.stringify(X))}),[X,ee]);const[re,ie]=(0,f.useState)(""),[se,oe]=(0,f.useState)(null),[le,de]=(0,f.useState)(!1),[pe]=(0,D._b)(),[ue,ce]=(0,f.useState)(!1),[me,ye]=(0,Ze.m)();(0,f.useEffect)((()=>{null!==re&&oe(null),(async()=>{var e;if(ce(!1),""===re)return void J(q);const t=null===(e=q)||void 0===e?void 0:e.filter((e=>e.symbol.toLowerCase().includes(re.toLowerCase())||e.name.toLowerCase().includes(re.toLowerCase())));if(J(t),!re.startsWith("41")&&(0,z.iL)().isAddress(re)&&he.mG.includes(u.networkId))ce(!0);else if(!he.Yi.includes(re)&&y.isAddress(re)){var n;const e=null===(n=q)||void 0===n?void 0:n.filter((e=>e.address.toLowerCase()===re.toLowerCase()));if(J(e),0===e.length){const e=await(0,Pn.OZ)({tokenAddress:re,provider:await(0,ea.G$)(u.endpoint),networkId:u.networkId});oe(e?{name:e[0],symbol:e[1],decimals:e[2],address:re,logoURI:"",chainId:u.networkId,native:!1}:void 0)}}})()}),[re]),(0,f.useEffect)((()=>{var e;G=localStorage.getItem("anyToken")?JSON.parse(localStorage.getItem("anyToken")||"{}"):null,Y=G&&G[x]?G[x][u.networkId]:[],q=Y?[...n,...V,...Y]:[...n,...V];let t=null===(e=q)||void 0===e?void 0:e.filter((e=>e.symbol.toLowerCase().includes(re.toLowerCase())));"true"===(null===_||void 0===_?void 0:_.toLowerCase())&&(t=h?t.filter((e=>!W||W.includes(e.address.toLowerCase()))):t.filter((e=>!H||H.includes(e.address.toLowerCase())))),J(K(t))}),[x]),(0,f.useEffect)((()=>{var e;V=[],w&&v.map((e=>{var t,a;null===(t=w[e])||void 0===t||null===(a=t.tokens)||void 0===a||a.map((t=>{let a={...t};t.chainId.toString()===u.networkId&&void 0===n.find((e=>e.address.toLowerCase()===t.address.toLowerCase()))&&void 0===V.find((e=>e.address.toLowerCase()===t.address.toLowerCase()))&&(U.HE!==e&&(a.native=!1),V.push(a))}))})),q=Y?[...n,...V,...Y]:[...n,...V];let t=null===(e=q)||void 0===e?void 0:e.filter((e=>e.symbol.toLowerCase().includes(re.toLowerCase())));"true"===(null===_||void 0===_?void 0:_.toLowerCase())&&(t=h?t.filter((e=>!W||W.includes(e.address.toLowerCase()))):t.filter((e=>!H||H.includes(e.address.toLowerCase())))),J(K(t)),ce(!1)}),[u,v]),(0,f.useEffect)((()=>{let e=[...Q];"true"===(null===_||void 0===_?void 0:_.toLowerCase())&&(e=h?e.filter((e=>!W||W.includes(e.address.toLowerCase()))):e.filter((e=>!H||H.includes(e.address.toLowerCase())))),J(K(e))}),[c]);const xe=function(e){const t=["Ethereum","Scroll","ZkSync","Arbitrum","Linea","Base","Blast"];return e.sort(((e,n)=>{const a=t.indexOf(e.name),r=t.indexOf(n.name);return-1!==a&&-1!==r?a-r:-1!==a?-1:-1!==r?1:0}))}(Rn.p);return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(Je.Z,{open:le,onClose:()=>de(!1),children:(0,A.jsx)(Yn,{name:se?se.name:"",address:se?se.address:"",explorerLink:null!==(t=he.Tu[u.networkId.toString()].concat(se?null===se||void 0===se?void 0:se.address:""))&&void 0!==t?t:"",close:()=>de(!1),handleImport:()=>{var e;(se&&o(se),G)?G[x]?G[x][u.networkId]&&(null===(e=G[x][u.networkId])||void 0===e?void 0:e.length)>0?G[x][u.networkId].push(se):G[x][u.networkId]=[se]:G[x]={[u.networkId]:[se]}:G={[x]:{[u.networkId]:[se]}};localStorage.setItem("anyToken",JSON.stringify(G)),ie(""),oe(null)}})}),C?(0,A.jsxs)(la,{backgroundColor:"true"===(null===_||void 0===_?void 0:_.toString())?L:"",textColor:"true"===(null===_||void 0===_?void 0:_.toString())?F:"",children:[(0,A.jsx)(va,{onClick:()=>S(!1)}),(0,A.jsx)(wa,{onClick:p,textColor:"true"===(null===_||void 0===_?void 0:_.toString())?F:""}),(0,A.jsx)(ba,{children:"Manage"}),(0,A.jsx)(Ba,{children:w&&U.Dx.map(((e,t)=>{var n,a,r,i,s,o,l,d,p;return(0,A.jsxs)(Pa,{backgroundColor:"true"===(null===_||void 0===_?void 0:_.toString())?L:"",children:[(0,A.jsx)(ja,{src:"ipfs"===(null===(n=w[e])||void 0===n||null===(a=n.logoURI)||void 0===a?void 0:a.slice(0,4))?`https://ipfs.io/ipfs/${null===(r=w[e])||void 0===r||null===(i=r.logoURI)||void 0===i?void 0:i.split("//")[1]}`:null===(s=w[e])||void 0===s?void 0:s.logoURI,onError:e=>{let{currentTarget:t}=e;t.onerror=null,t.src="https://cdn.shopify.com/s/files/1/1061/1924/products/Thinking_Face_Emoji_small.png?v=1571606036"}}),(0,A.jsxs)(Aa,{children:[(0,A.jsx)("span",{children:null===(o=w[e])||void 0===o?void 0:o.name}),(0,A.jsxs)("span",{style:{fontSize:"12px"},children:[null===(l=w[e])||void 0===l||null===(d=l.tokens)||void 0===d?void 0:d.filter((e=>(null===e||void 0===e?void 0:e.chainId.toString())===(null===u||void 0===u?void 0:u.networkId))).length," ","tokens"]})]}),(0,A.jsx)(Ra,{children:(0,A.jsx)(Kn.Z,{checked:v.includes(e),onChange:()=>(e=>{if(v.includes(e)){let t=v.findIndex((t=>t===e)),n=[...v];n.splice(t,1),T(n)}else{let t=[...v,e];T(t)}})(e),name:"checkedB",color:"primary",disabled:0===(null===(p=w[e])||void 0===p?void 0:p.tokens.filter((e=>(null===e||void 0===e?void 0:e.chainId.toString())===(null===u||void 0===u?void 0:u.networkId))).length)})})]},t)}))})]}):(0,A.jsxs)(la,{backgroundColor:"true"===(null===_||void 0===_?void 0:_.toString())?L:"",textColor:"true"===(null===_||void 0===_?void 0:_.toString())?F:"",children:[(0,A.jsx)(wa,{onClick:p,textColor:"true"===(null===_||void 0===_?void 0:_.toString())?F:""}),(0,A.jsx)(ba,{children:r}),(0,A.jsxs)(Ta,{children:[(0,A.jsxs)(Sa,{backgroundColor:"true"===(null===_||void 0===_?void 0:_.toString())?L:"",children:[(0,A.jsx)(jn.Z,{style:{width:"20px",height:"20px",color:"#585863"}}),(0,A.jsx)(ka,{type:"text",placeholder:"Search token name or paste address",value:re,onChange:e=>{ie(e.target.value)},autoComplete:"off",textColor:"true"===(null===_||void 0===_?void 0:_.toString())?F:""})]}),(0,A.jsxs)(Ca,{ctaColor:"true"===(null===_||void 0===_?void 0:_.toString())?$:"",backgroundColor:"true"===(null===_||void 0===_?void 0:_.toString())?L:"",onClick:()=>{ne((e=>!e))},children:["Saved",te?(0,A.jsx)(za,{ctaColor:"true"===(null===_||void 0===_?void 0:_.toString())?$:""}):(0,A.jsx)(Ha,{ctaColor:"true"===(null===_||void 0===_?void 0:_.toString())?$:""})]})]}),ue&&(0,A.jsxs)(Ua,{children:[(0,A.jsx)(Vn.Z,{style:{color:"red",fontSize:"12px"}}),(0,A.jsxs)(Ea,{children:["Swaps are currently not supported on ",u.name,", select a token from the list below"]})]}),(0,A.jsxs)(Da,{widget:"true"===(null===_||void 0===_?void 0:_.toString()),children:[(0,A.jsxs)(Ma,{chainExpander:R,backgroundColor:"true"===(null===_||void 0===_?void 0:_.toString())?L:"",children:[R?"true"===(null===_||void 0===_?void 0:_.toLowerCase())?xe.filter((e=>h?!N||N.includes(e.networkId):!O||O.includes(e.networkId))).map((e=>(0,A.jsx)(oa,{thisChain:e,chain:u,setFilteredList:J,chainSelectHandler:m,setChainExpander:M}))):xe.map(((e,t)=>(0,A.jsx)(oa,{thisChain:e,chain:u,setFilteredList:J,chainSelectHandler:m,setChainExpander:M}))):"true"===(null===_||void 0===_?void 0:_.toLowerCase())?xe.filter((e=>h?!N||N.includes(e.networkId):!O||O.includes(e.networkId))).slice(0,7).map((e=>(0,A.jsx)(oa,{thisChain:e,chain:u,setFilteredList:J,chainSelectHandler:m,setChainExpander:M}))):xe.slice(0,7).map(((e,t)=>(0,A.jsx)(oa,{thisChain:e,chain:u,setFilteredList:J,chainSelectHandler:m,setChainExpander:M}))),xe.length>7&&!R&&(0,A.jsxs)(_a,{active:R,disabled:!1,onClick:()=>M((e=>!e)),children:[(0,A.jsx)(La,{active:R,children:(0,A.jsx)(qn.Z,{})}),(0,A.jsxs)("p",{style:{marginTop:"2px",marginBottom:"1px",width:"45px",fontSize:"8px"},children:["+",xe.length-7," Chains"]})]})]}),R&&(0,A.jsx)(pa,{widget:"true"===(null===_||void 0===_?void 0:_.toString()),backgroundColor:"true"===(null===_||void 0===_?void 0:_.toString())?L:"",textColor:"true"===(null===_||void 0===_?void 0:_.toString())?F:"",children:(0,A.jsxs)(_a,{active:R,disabled:!1,onClick:()=>M((e=>!e)),children:[(0,A.jsx)(La,{active:R,children:(0,A.jsx)(i.Z,{})}),(0,A.jsx)("p",{style:{marginTop:"2px",marginBottom:"1px",width:"45px"},children:"Back"})]})}),!R&&(0,A.jsxs)(da,{widget:"true"===(null===_||void 0===_?void 0:_.toString()),backgroundColor:"true"===(null===_||void 0===_?void 0:_.toString())?L:"",textColor:"true"===(null===_||void 0===_?void 0:_.toString())?F:"",children:[(0,A.jsx)(Fa,{children:n.filter((e=>["USDC","USDT","ETH","ROUTE","DFYN"].includes(e.symbol))).map((e=>{var t,n;return(0,A.jsx)(A.Fragment,{children:(0,A.jsxs)($a,{children:[(0,A.jsx)(Za,{onClick:()=>o(e),children:(0,A.jsx)(ga,{src:""!==e.logoURI?"ipfs"===(null===(t=e.logoURI)||void 0===t?void 0:t.slice(0,4))?`https://ipfs.io/ipfs/${null===(n=e.logoURI)||void 0===n?void 0:n.split("//")[1]}`:e.logoURI:l[e.symbol]?l[e.symbol]:`https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/${(0,P.fN)(u.networkId)}/assets/${e.address}/logo.png`,onError:e=>{let{currentTarget:t}=e;t.onerror=null,t.src="https://cdn.shopify.com/s/files/1/1061/1924/products/Thinking_Face_Emoji_small.png?v=1571606036"}})}),(0,A.jsx)(Na,{children:e.name})]})})}))}),0!==Q.length||y.isAddress(re)||""===re?0===Q.length&&y.isAddress(re)&&void 0===se?(0,A.jsx)(Wa,{children:(0,A.jsx)("span",{style:{marginTop:"5px",color:"#FFFFFF55",fontSize:"16px"},children:"Not Found!"})}):0===Q.length&&null===se?(0,A.jsx)(Wa,{children:(0,A.jsx)("span",{style:{marginTop:"5px",color:"#FFFFFF55",fontSize:"16px"},children:"Loading..."})}):0===Q.length&&null!==se&&void 0!==se?(0,A.jsxs)(ca,{backgroundColor:"true"===(null===_||void 0===_?void 0:_.toString())?L:"",children:[(0,A.jsxs)(ma,{children:[(0,A.jsx)(xa,{src:`https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/${(0,P.fN)(u.networkId)}/assets/${se.address}/logo.png`,onError:e=>{let{currentTarget:t}=e;t.onerror=null,t.src="https://cdn.shopify.com/s/files/1/1061/1924/products/Thinking_Face_Emoji_small.png?v=1571606036"}}),(0,A.jsxs)(ha,{children:[" ",se.name]})]}),(0,A.jsx)(Ia,{onClick:()=>de(!0),ctaColor:"true"===(null===_||void 0===_?void 0:_.toString())?$:"",children:"Add"})]}):te?X.map(((e,t)=>{var n,a;return(0,A.jsxs)(ua,{onClick:()=>o(e),active:g().isEqual(e,s),darkmode:me,children:[(0,A.jsxs)("div",{children:[(0,A.jsx)(xa,{src:""!==e.logoURI?"ipfs"===(null===(n=e.logoURI)||void 0===n?void 0:n.slice(0,4))?`https://ipfs.io/ipfs/${null===(a=e.logoURI)||void 0===a?void 0:a.split("//")[1]}`:e.logoURI:l[e.symbol]?l[e.symbol]:`https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/${(0,P.fN)(u.networkId)}/assets/${e.address}/logo.png`,onError:e=>{let{currentTarget:t}=e;t.onerror=null,t.src="https://cdn.shopify.com/s/files/1/1061/1924/products/Thinking_Face_Emoji_small.png?v=1571606036"}}),"USDC Circle"===e.name&&(0,A.jsx)(fa,{src:rn})]}),(0,A.jsx)(ha,{children:"USDC Circle"===e.name?(0,A.jsxs)(A.Fragment,{children:["USDC ",(0,A.jsx)("span",{style:{color:"#585863"},children:"by Circle"})]}):e.name}),k&&k.networkId===u.networkId&&!e.native&&(0,A.jsx)(Oa,{ctaColor:"true"===(null===_||void 0===_?void 0:_.toString())?$:"",onClick:t=>{(0,Xn.OB)(e.address,e.symbol,e.decimals,""),t.stopPropagation()}}),(0,A.jsxs)(ya,{children:[E?"":"Balance :",c[e.address.toLowerCase()]?c[e.address.toLowerCase()]:pe?(0,A.jsx)(j.Z,{loading:!0,ctaColor:"true"===(null===_||void 0===_?void 0:_.toString())?$:""}):"-"]}),X.find((t=>t.address===e.address))?(0,A.jsx)(za,{ctaColor:"true"===(null===_||void 0===_?void 0:_.toString())?$:"",onClick:t=>ae(t,e)}):(0,A.jsx)(Ha,{ctaColor:"true"===(null===_||void 0===_?void 0:_.toString())?$:"",onClick:t=>ae(t,e)})]},t)})):Q.map(((e,t)=>{var n,a;return(0,A.jsxs)(ua,{onClick:()=>o(e),active:g().isEqual(e,s),darkmode:me,children:[(0,A.jsxs)("div",{children:[(0,A.jsx)(xa,{src:""!==e.logoURI?"ipfs"===(null===(n=e.logoURI)||void 0===n?void 0:n.slice(0,4))?`https://ipfs.io/ipfs/${null===(a=e.logoURI)||void 0===a?void 0:a.split("//")[1]}`:e.logoURI:l[e.symbol]?l[e.symbol]:`https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/${(0,P.fN)(u.networkId)}/assets/${e.address}/logo.png`,onError:e=>{let{currentTarget:t}=e;t.onerror=null,t.src="https://cdn.shopify.com/s/files/1/1061/1924/products/Thinking_Face_Emoji_small.png?v=1571606036"}}),"USDC Circle"===e.name&&(0,A.jsx)(fa,{src:rn})]}),(0,A.jsx)(ha,{children:"USDC Circle"===e.name?(0,A.jsxs)(A.Fragment,{children:["USDC ",(0,A.jsx)("span",{style:{color:"#585863"},children:"by Circle"})]}):e.name}),k&&k.networkId===u.networkId&&!e.native&&(0,A.jsx)(Oa,{ctaColor:"true"===(null===_||void 0===_?void 0:_.toString())?$:"",onClick:t=>{(0,Xn.OB)(e.address,e.symbol,e.decimals,""),t.stopPropagation()}}),(0,A.jsxs)(ya,{children:[E?"":"Balance :",c[e.address.toLowerCase()]?c[e.address.toLowerCase()]:pe?(0,A.jsx)(j.Z,{loading:!0,ctaColor:"true"===(null===_||void 0===_?void 0:_.toString())?$:""}):"-"]}),X.find((t=>t.address===e.address))?(0,A.jsx)(za,{ctaColor:"true"===(null===_||void 0===_?void 0:_.toString())?$:"",onClick:t=>ae(t,e)}):(0,A.jsx)(Ha,{ctaColor:"true"===(null===_||void 0===_?void 0:_.toString())?$:"",onClick:t=>ae(t,e)})]},t)})):(0,A.jsx)(Wa,{children:(0,A.jsx)("span",{style:{marginTop:"5px",color:"#FFFFFF55",fontSize:"16px"},children:"Not Found!"})})]})]})]})]})},Ya=T.ZP.div`
  width: 100%;
  margin-bottom: 7px;
  padding: 0%;
  font-family: "Inter", sans-serif;
  color: ${e=>{let{isRunning:t}=e;return t?"white":"red"}};
`,Va=T.ZP.div`
  width: 100%;
  padding: 2% 3%;
  min-height: 60px;
  border-radius: 14px;
  display: flex;
  background: ${e=>{let{theme:t,backgroundColor:n}=e;return n?n+"90":t.bgGrayDefault}};
  filter: ${e=>{let{theme:t,backgroundColor:n}=e;return n?"contrast(.8)   brightness(1.1) opacity(0.8)":"contrast(1)"}};
  justify-content: space-between;
  align-items: center;
`,qa=T.ZP.div`
  width: 100%;
  padding: 0% 3%;
  min-height: 25px;
  border-radius: 14px;
  margin-top: 12px;
  display: flex;
  background: ${e=>{let{theme:t,backgroundColor:n}=e;return n?n+"90":"rgba(255, 204, 0, 0.45)"}};
  filter: ${e=>{let{theme:t,backgroundColor:n}=e;return n?"contrast(.8)   brightness(1.1) opacity(0.8)":"contrast(1) "}};
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 12px;
`,Ka=T.ZP.span`
  font-size: 28px;
`,Qa=T.ZP.span`
  // margin-left: 10px;
  font-size: 14px;
  font-weight: 200;
`,Ja=T.ZP.div`
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: white;
`,Xa=T.ZP.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,er=T.ZP.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  padding-right: 1rem;
`,tr=e=>{let{action:t,showFinal:n,timerSeconds:a,timerMinutes:r,timerTotalSeconds:i,isTimerRunning:s,stopwatchTotalSeconds:o,isStopwatchRunning:l,stopwatchMinutes:d,stopwatchSeconds:p,stopwatchHours:u,quoteResponse:c,hash:m}=e;const h=(0,b.TH)(),y=(0,f.useMemo)((()=>new URLSearchParams(h.search).get("isWidget")),[h]),x=(0,f.useMemo)((()=>{var e;return decodeURIComponent(null!==(e=new URLSearchParams(h.search).get("backgroundColor"))&&void 0!==e?e:"")}),[h]),g=(0,f.useMemo)((()=>{var e;return decodeURIComponent(null!==(e=new URLSearchParams(h.search).get("ctaColor"))&&void 0!==e?e:"")}),[h]);return(0,A.jsx)(A.Fragment,{children:(0,A.jsxs)(Ya,{isRunning:s,children:[(0,A.jsxs)(Va,{backgroundColor:"true"===(null===y||void 0===y?void 0:y.toString())?x:"",children:[s&&(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)("div",{style:{paddingLeft:"1rem",fontSize:"14px",fontWeight:"600"},children:[" ","Time Remaining"]}),(0,A.jsxs)(er,{children:[(0,A.jsx)(Ka,{children:r}),(0,A.jsx)(Qa,{children:"min"}),(0,A.jsx)(Ka,{children:a}),(0,A.jsx)(Qa,{children:"sec"})]})]}),l&&(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)("div",{style:{paddingLeft:"1rem",fontSize:"14px",fontWeight:"600"},children:[" ","Delayed Time"," "]}),(0,A.jsxs)(er,{children:[u>0&&(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(Ka,{children:u}),(0,A.jsx)(Qa,{children:"Hour"})]}),(0,A.jsx)(Ka,{children:d}),(0,A.jsx)(Qa,{children:"min"}),(0,A.jsx)(Ka,{children:p}),(0,A.jsx)(Qa,{children:"sec"})]})]}),n&&(0,A.jsx)(A.Fragment,{children:(0,A.jsxs)(Ja,{children:[(0,A.jsxs)(Xa,{children:[(0,A.jsx)(Re,{fill:"true"===(null===y||void 0===y?void 0:y.toString())&&g||void 0}),(0,A.jsxs)("div",{children:[t," completed in"," ",c.estimatedTime-i+o," ","secs"]})]}),(0,A.jsx)("div",{style:{display:"grid",cursor:"pointer",placeItems:"center"},onClick:()=>window.open(W.ROUTER_EXPLORER_HOST+"/tx/"+m),children:(0,A.jsx)(Me,{fill:"true"===(null===y||void 0===y?void 0:y.toString())&&g||void 0})})]})})]}),"circle"!==(null===c||void 0===c?void 0:c.flowType)&&l&&(0,A.jsxs)(qa,{backgroundColor:"true"===(null===y||void 0===y?void 0:y.toString())?x:"",children:[(0,A.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[(0,A.jsx)(yn,{fill:"#F3841E"}),(0,A.jsxs)("p",{children:["In case your transaction is delayed by more than"," ",(0,P.ht)(parseInt(W.EXP_TIME_DIFF.toString())),", you can withdraw your funds on source chain"]})]}),(0,A.jsx)("div",{style:{display:"grid",cursor:"pointer",placeItems:"center"},onClick:()=>window.open(W.ROUTER_EXPLORER_HOST+"/tx/"+m),children:(0,A.jsx)(Me,{fill:"true"===(null===y||void 0===y?void 0:y.toString())&&g||void 0})})]})]})})};n(46220);const nr=T.ZP.div`
    display: grid;
    align-items: center;
    grid-template-rows: 28px 20px 20px;
    font-family: 'Inter', sans-serif;
`,ar=T.ZP.div`
    font-size: 14px;
    color: ${e=>{let{theme:t}=e;return t.text1}};
`,rr=T.ZP.div`
    font-size: 12px;
    color: ${e=>{let{theme:t}=e;return t.blue1}};
    cursor: pointer;
`,ir=e=>{let{summary:t,srcTxExplorerLink:n,dstTxExplorerLink:a}=e;return(0,A.jsxs)(nr,{children:[(0,A.jsx)(ar,{children:t}),(0,A.jsx)(rr,{onClick:()=>window.open(n,"noopener,noreferrer"),children:"View Source Transaction"}),a&&(0,A.jsx)(rr,{onClick:()=>window.open(a,"noopener,noreferrer"),children:"View Destination Transaction"})]})};var sr=n(25248),or=n(23295),lr=n(62404),dr=n(8969),pr=n(90715),ur=n(76418),cr=n(11409),mr=n(66969);var hr=n(4248),yr=n(31490),xr=n(16622),gr=n(64667);(0,gr.eI)({url:(W.VOYAGER_EXPLORER_API_HOST+"/graphql").replace("https","wss"),webSocketImpl:WebSocket,retryAttempts:1/0,shouldRetry:e=>(console.error(`Connection error on url ${(W.VOYAGER_EXPLORER_API_HOST+"/graphql").replace("https","wss")}: ${JSON.stringify(e)}`),console.log("Retrying..."),!0)});const fr=async e=>await(async(e,t,n)=>{try{return(await u().post(e,{query:t,variables:n},{headers:{"Content-Type":"application/json"}})).data.data}catch(a){console.error(`Error while fetching the data - ${a}`)}})(W.VOYAGER_EXPLORER_API_HOST+"/graphql","query FindNitroTransactionByFilter($hash: String!) {\n    findNitroTransactionByFilter(hash: $hash) {\n      dest_timestamp\n      dest_tx_hash\n      status\n      dest_address\n      dest_amount\n      dest_symbol\n      fee_amount\n      fee_address\n      fee_symbol\n      recipient_address\n      deposit_id\n      src_amount\n      dest_amount\n      dest_partial_info\n      native_token_amount\n      native_token_symbol\n    }\n  }",{hash:e});var br=n(92638),wr=n.n(br),vr=n(446),Tr=n(20354),Cr=n(89477),Sr=n(85754),kr=n(84488),Ir=n(83171),Pr=n(41872),jr=n(98492);const Ar=(0,T.ZP)(Ir.Z)`
  &&& {
    width: 100%;
    max-width: 55ch;
    background-color: ${e=>{let{theme:t}=e;return t.bgGrayDefault}};
    color: white;
    border-radius: 16px;
  }
`,Er=(0,T.ZP)(jr.Z)`
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
    padding: 0 10px 0 10px;
  `}};
`,Rr=T.ZP.div`
  display: flex;
  width: 100%;
  padding: 0% 0% 2% 0%;
`,Mr=T.ZP.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-height: 68px;
  padding: 8px 0 8px 14px;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToMedium`
    padding: 10px 0 10px 10px;
  `}};
`,Zr=(0,T.ZP)(Cr.Z)`
  &&& {
    width: 18px;
    fill: white;
    margin-right: 2px;
  }
`,_r=(0,T.ZP)(Sr.Z)`
  &&& {
    width: 18px;
    fill: white;
    margin-right: 2px;
  }
`,Lr=T.ZP.h3`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 600;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToMedium`
    font-size: 10px;
  `}};
  margin: 4px 0;
  white-space: nowrap;
`,Fr=T.ZP.h3`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 300;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToMedium`
    font-size: 10px;
  `}};
  margin: 4px 0;
  white-space: nowrap;
`,$r=T.ZP.h3`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 300;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToMedium`
    font-size: 10px;
  `}};
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToExtraSmall`
    display: none;
  `}};
  margin: 4px 0;
  white-space: nowrap;
`,Nr=T.ZP.div`
  display: flex;
  flex-direction: column;
`,Ur=T.ZP.div`
  display: flex;
  flex-direction: row;
`,Dr=T.ZP.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`,Or=T.ZP.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`,Br=T.ZP.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`,Wr=e=>{const t=Math.floor(e/3600);e%=3600;return[`${t}h `,`${Math.floor(e/60)}m `,`${e%=60}s`]},zr=e=>{var t,n;let{quoteResponse:a,sourceChain:r,destinationChain:i,sourceInput:s,currentSourceAsset:o,currentDestinationAsset:l,transactionInfo:d}=e;const[p,u]=(0,f.useState)(!1),[c,m]=(0,f.useState)([]),[h,y]=(0,f.useState)(),[x]=me(),[g,b]=(0,f.useState)(),[w,v]=(0,f.useState)(),[T,C]=(0,f.useState)(),[S,k]=(0,f.useState)(),I=(e,t,n)=>"USDC"===n||"USDT"===n?(parseInt(e)/10**t).toFixed(2):(parseInt(e)/10**t*x[n]).toFixed(2);function j(e,t){switch(t){case"fee":return e.sort(((e,t)=>e.fee+e.gasCostUSD-t.fee+t.gasCostUSD));case"time":return e.sort(((e,t)=>e.duration-t.duration))}}const E=x[null!==(t=null===(n=he.TP[r.networkId])||void 0===n?void 0:n.symbol)&&void 0!==t?t:"ETH"];(0,f.useEffect)((()=>{if(d&&he.TP[r.networkId]){let t=0;try{t=d.gasLimit*parseFloat(r.type===yr.$n?d.gasPrice:(0,ye.og)(d.gasPrice,he.TP[r.networkId].decimals))*Number(E)}catch(e){console.error("Calculate Gas Cost error - ",e)}b(t)}}),[d]),(0,f.useEffect)((()=>{if("mainnet"===W.NETWORK_ENVIRONMENT.toLowerCase()){(async()=>{const e={fromChainId:r.networkId,fromAmount:Number(a.source.tokenAmount),fromTokenAddress:o.native?"0x0000000000000000000000000000000000000000":o.address,toChainId:i.networkId,toTokenAddress:l.address,options:{order:"CHEAPEST",slippage:.005,maxPriceImpact:.4}};m([]),v(void 0);try{u(!0);const n=await fetch("https://li.quest/v1/advanced/routes",{method:"POST",headers:{"Content-Type":"application/json"},body:(t=e,JSON.stringify(t,((e,t)=>"bigint"===typeof t?t.toString():t)))});if(!n.ok)throw new Error("Network response was not ok");const a=await n.json();u(!1),v(a.routes),console.log("RATES COMPARISON DATA => ",a)}catch(n){u(!1),console.error("Error fetching lifi data:",n)}var t})()}}),[]),(0,f.useEffect)((()=>{if(w)for(let e=0;e<w.length;e++){const t=w[e];for(let e=0;e<t.steps[0].includedSteps.length;e++){let n={name:"",duration:0,fee:0,gasCostUSD:0};if("cross"==t.steps[0].includedSteps[e].type){n.name=t.steps[0].toolDetails.name;let r=t.steps[0].includedSteps[e],i=r.estimate.feeCosts;const s=r.estimate.executionDuration;n.duration=s;let o=0;for(let e=0;e<i.length;e++)o+=parseFloat(i[e].amountUSD);if(n.fee=o,n.gasCostUSD=Number(t.gasCostUSD),s<15)return;o+Number(t.gasCostUSD)>=Number(I(a.bridgeFee.amount,a.bridgeFee.decimals,a.bridgeFee.symbol))+Number(g)&&m((e=>[...e,n]))}}}}),[w]),function(e,t){let n,a,r,i;for(n=0;n<t-1;n++){for(i=!1,a=0;a<t-n-1;a++)s=e[a],o=e[a+1],s.fee+s.gasCostUSD>o.fee+o.gasCostUSD&&(r=e[a],e[a]=e[a+1],e[a+1]=r,i=!0);if(0==i)break}var s,o}(c,c.length);const R=c.slice(0,5);return(0,f.useEffect)((()=>{if(R.length>0){let e=0,t=0;R.map((n=>{e+=n.fee+n.gasCostUSD,t+=n.duration}));const n=j(R,"fee");C(n[0]);const a=j(R,"time");k(a[0])}}),[R]),(0,f.useEffect)((()=>{if(a){const e=a.bridgeFee.amount/10**a.bridgeFee.decimals;y(e)}}),[a]),(0,A.jsx)(Rr,{children:(0,A.jsxs)(Ar,{children:[(0,A.jsxs)(Mr,{children:[(0,A.jsxs)(Nr,{style:{width:"80%"},children:[(0,A.jsxs)(Ur,{style:{gap:"10px"},children:[(0,A.jsxs)(Ur,{style:{alignItems:"center",gap:"2px"},children:[(0,A.jsx)(Zr,{style:{color:"#FFFFFF",opacity:"0.3",width:"17px",height:"17px"}}),(0,A.jsxs)(Fr,{children:["Bridge Fees:",x[a.bridgeFee.symbol]?(0,A.jsxs)(Lr,{style:{marginLeft:"4px",color:"#F3BF2B"},children:["$",I(a.bridgeFee.amount,a.bridgeFee.decimals,a.bridgeFee.symbol)]}):(0,A.jsxs)(Lr,{style:{marginLeft:"4px",color:"#F3BF2B"},children:[null===h||void 0===h?void 0:h.toFixed(2)," ","ROUTEN"===a.bridgeFee.symbol?"ROUTE":a.bridgeFee.symbol]})]})]}),(0,A.jsxs)(Ur,{style:{alignItems:"center",gap:"2px"},children:[(0,A.jsx)(_r,{style:{color:"#FFFFFF",opacity:"0.3",width:"17px",height:"17px"}}),(0,A.jsxs)(Fr,{children:["Time:",(0,A.jsxs)(Lr,{style:{marginLeft:"4px",color:"#F3BF2B"},children:["~",Wr(a.estimatedTime).map((e=>{if(Number(e.charAt(0))>0)return e}))]})]})]}),d&&g&&E&&"-"!==E?(0,A.jsxs)(Ur,{style:{alignItems:"center",gap:"2px"},children:[(0,A.jsx)(Tr.Z,{style:{color:"#FFFFFF",opacity:"0.3",width:"17px",height:"17px"}}),(0,A.jsxs)(Fr,{children:["Gas Cost:",(0,A.jsxs)(Lr,{style:{marginLeft:"4px",color:"#F3BF2B"},children:["$",g.toFixed(5)]})]})]}):(0,A.jsx)(A.Fragment,{})]}),(0,A.jsxs)("div",{children:[p?(0,A.jsx)("div",{style:{margin:"6px 0"},children:(0,A.jsx)(kr.Z,{variant:"text",sx:{fontSize:"18px"}})}):R.length>0&&g&&T&&S&&T.fee+T.gasCostUSD-g>0&&S.duration-a.estimatedTime>0&&(0,A.jsx)("div",{style:{margin:"8px 0"},children:(0,A.jsxs)(Fr,{style:{color:"#44BB82",whiteSpace:"normal"},children:["We are ~$",(T.fee+T.gasCostUSD-Number(g)).toFixed(2)," ","cheaper and ~",(0,P.nB)(S.duration-a.estimatedTime)," ","faster than the best options available"]})}),w&&0===w.length&&(0,A.jsx)("div",{style:{margin:"8px 0"},children:(0,A.jsx)(Fr,{style:{color:"#FFF",opacity:.5},children:"No routes provided by other protocols"})})]})]}),R.length>0&&T&&S&&g&&T.fee+T.gasCostUSD-g>0&&S.duration-a.estimatedTime>0&&d&&d.gasLimit&&d.gasPrice&&E&&"-"!==E&&(0,A.jsx)(Er,{expandIcon:(0,A.jsx)(vr.Z,{style:{width:"20px",height:"20px",color:"#6C86AD"}}),children:(0,A.jsx)($r,{children:"See all"})})]}),R.length>0&&T&&S&&g&&T.fee+T.gasCostUSD-g>0&&S.duration-a.estimatedTime>0&&(0,A.jsx)(Pr.Z,{sx:{padding:"0 16px 16px"},children:(0,A.jsxs)(Dr,{children:[(0,A.jsxs)(Or,{children:[(0,A.jsx)(Lr,{style:{width:"66.666667%",opacity:"0.4"},children:"Protocols"}),(0,A.jsxs)(Br,{style:{width:"33.333333%"},children:[(0,A.jsx)(Lr,{style:{opacity:"0.4"},children:"Time"}),(0,A.jsx)(Lr,{style:{opacity:"0.4"},children:"Cost"})]})]}),p?(0,A.jsx)(A.Fragment,{children:Array.from({length:3},((e,t)=>t+1)).map(((e,t)=>(0,A.jsx)(kr.Z,{variant:"text",sx:{fontSize:"18px"}},t)))}):R.map(((e,t)=>(0,A.jsxs)(Or,{children:[(0,A.jsx)(Fr,{style:{width:"66.666667%"},children:e.name}),(0,A.jsxs)(Br,{style:{width:"33.333333%"},children:[(0,A.jsxs)(Fr,{children:["~",(0,P.nB)(e.duration)]}),(0,A.jsx)(Ye.Z,{title:(0,A.jsxs)(Ur,{style:{alignItems:"center",gap:"4px"},children:[(0,A.jsxs)(Ur,{style:{alignItems:"center"},children:[(0,A.jsx)(Zr,{style:{width:"12px",height:"12px"}}),(0,A.jsxs)("span",{children:["$",e.fee.toFixed(2)]})]}),(0,A.jsx)("span",{children:"+"}),(0,A.jsxs)(Ur,{style:{alignItems:"center"},children:[(0,A.jsx)(Tr.Z,{style:{width:"12px",height:"12px"}}),(0,A.jsxs)("span",{children:["$",e.gasCostUSD]})]})]}),placement:"right",arrow:!0,children:(0,A.jsxs)(Fr,{style:{cursor:"pointer"},children:["$",(e.fee+e.gasCostUSD).toFixed(2)]})})]})]},t)))]})})]})})};var Hr=n(37595);const Gr=n.p+"static/media/carousel_no_text.9ba7f26077fc42305380.gif";var Yr=n(83912),Vr=(n(6940),n(98871),n(25517)),qr=n(42832),Kr=n(57829),Qr=n(61113),Jr=n(23788);const Xr=n.p+"static/media/RewardWheel.5839b3f35d9be6164de00a2775c420d8.svg";var ei=n(7850),ti=n(54231);const ni=n.p+"static/media/Congratulations.90273e0078ada0581b759c3cebf6c43b.svg";const ai=n.p+"static/media/Bunny_Reward.ea826c01f53b727fee13f028f9a4d8c0.svg";const ri=n.p+"static/media/Carrot_Image.292717640a74442525fca8318d41646a.svg";var ii=n(47651),si=n(72940);const oi=(0,T.ZP)(qr.Z)`
  &&& {
    position: relative;
    width: 250px;
    height: 250px;
    // background-color: red;
    overflow: hidden;
    ${e=>{let{theme:t}=e;return t.mediaWidth.upToMedium`
    width: 250px;
    height: 250px;
    `}}
    ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
      width: 250px;
      height: 250px;
    `}}
  }
`,li=(0,T.ZP)(Kr.Z)`
  &&& {
    width: 100%;
    height: 100%;
    background: linear-gradient(
      225deg,
      #fedc31 16%,
      #fdc347 22.46%,
      #ff544e 35.39%,
      #ffd400 87.83%
    );
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`,di=(0,T.ZP)(Kr.Z)`
  &&& {
    width: 98%;
    height: 98%;
    background: linear-gradient(
      225deg,
      #000604 16%,
      #303030 44.73%,
      #000604 87.83%
    );
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`,pi=(0,T.ZP)(Kr.Z)`
  &&& {
    width: 5%;
    height: 15%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    z-index: 3;
  }
`,ui=T.ZP.img`
  &&& {
    width: 100%;
    height: 100%;
  }
`,ci=T.ZP.img`
  &&& {
    width: 80%;
    height: 80%;
    object-cover: contain;
  }
`,mi=(0,T.ZP)(ii.Z)`
  &&& {
    padding: 12px;
    margin: auto;
    border-radius: 48px;
    margin-top: 20px;
    width: 70%;
    height: 40px;
    font-size: 24px;
    font-weight: bold;
    background-image: linear-gradient(
      165deg,
      rgba(243, 191, 43, 1),
      rgba(255, 229, 51, 1),
      rgba(141, 111, 25, 1)
    );
    ${e=>{let{theme:t}=e;return t.mediaWidth.upToMedium`
    width: 80%;
    `}}
    ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
    width: 90%;
    margin: 0px;
    margin-top: 20px;
    `}}
  }
`,hi=(0,T.ZP)(qr.Z)`
  &&& {
    ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
      width: 100%;
    `}}
  }
`,yi=((0,T.ZP)(Qr.Z)`
  &&& {
    color: #f3bf2b;
    font-weight: 600;
    font-size: 48px;
    text-align: center;
    width: 365px;
    line-height: 54px;
    margin-top: 44px;
    ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
      width: 100%;
      font-size: 35px;
      line-height: 40px;
    `}}
  }
`,T.ZP.div`
  position: fixed;
  width: 81%;
  height: 50%;
  background: no-repeat center;
`),xi=((0,T.ZP)(yi)`
  top: 75px;
  background-size: contain;
  background-image: url(${ei.Z});
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToMedium`
top: 50px;
`}};
`,(0,T.ZP)(yi)`
  top: 318px;
  background-size: contain;
  background-image: url(${ti.Z});
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToMedium`
top: 270px;
`}};
`,(0,T.ZP)(Jr.Z)`
  && {
    .MuiPaper-root {
      background-color: #414141;
      box-shadow: none;
      color: #ffffff;
      border-radius: 16px;
      padding: 16px;
      max-height: 95vh;
      min-width: 80vw;
      max-width: 95vw;
      ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
      min-width: 95vw;
    `}}
    }
  }
`,T.ZP.img`
  width: 400px;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
  width: 380px;
  `}};
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToExtraSmall`
  width: 280px;
  `}};
`),gi=T.ZP.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
      flex-wrap: wrap;
  `}};
`,fi=T.ZP.div`
  font-size: 14px;
  font-weight: 600;
  margin: 0px;
`,bi=T.ZP.p`
  font-size: 34px;
  font-weight: bold;
  margin: 0px;
  padding-top: 15px;
  color: #ffe533;
`,wi=T.ZP.div`
  width: 100%;
  padding: 12px 14px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: rgba(243, 191, 43, 0.5);
  border-radius: 12px;
  gap: 13px;
  z-index: 10;
  font-size: 14px;
  margin-top: 10px;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
  padding: 12px 12px;
  gap: 10px;
  flex-wrap: wrap;
`}};
`,vi=T.ZP.p`
  margin: 3px;
`,Ti=T.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f3bf2b;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
`;function Ci(e){const[t,n]=(0,f.useState)(!1),[a,r]=(0,f.useState)(0),[i,s]=(0,f.useState)(""),[o,l]=(0,f.useState)(0),[d,p]=(0,f.useState)(!1),[u,c]=(0,f.useState)(!1),m=(0,b.k6)(),[h,y]=(0,f.useState)(!1),[x,g]=(0,f.useState)(!1),w=(0,f.useCallback)((async()=>{try{var t;p(!0);let a=await(0,Vr.O9)();l(null===a||void 0===a||null===(t=a.data)||void 0===t?void 0:t.degree),setTimeout((()=>{n(!0),e.handleIsAlreadySpinned()}),3e3)}catch(i){var a,r;p(!1),v.Am.error(null===i||void 0===i||null===(a=i.response)||void 0===a||null===(r=a.data)||void 0===r?void 0:r.message)}}),[]);return(0,f.useEffect)((()=>{t&&(e=>{switch(!0){case e>0&&e<=29:s("25 Carrots");break;case e>30&&e<=69:s("75 Carrots");break;case e>70&&e<=109:s("250 Carrots");break;case e>110&&e<=149:s("25 Carrots");break;case e>150&&e<=189:s("75 Carrots");break;case e>190&&e<=229:s("250 Carrots");break;case e>230&&e<=269:s("25 Carrots");break;case e>270&&e<=309:s("75 Carrots");break;case e>310&&e<=349:s("250 Carrots");break;case e>350&&e<=360:s("25 Carrots")}})(o)}),[t]),(0,f.useEffect)((()=>{let e;return x&&(e=setTimeout((()=>{g(!1)}),3e3)),()=>clearTimeout(e)}),[x]),(0,A.jsx)("div",{children:(0,A.jsxs)(Kr.Z,{style:{columnGap:"62px"},className:" __spinner_page",children:[!t&&(0,A.jsxs)(qr.Z,{justifyContent:"center",alignItems:"center",children:[(0,A.jsxs)(oi,{children:[(0,A.jsx)(pi,{children:(0,A.jsx)(ui,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAACLCAYAAAA9M/q/AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABjZSURBVHgB5V1Pj2RHUo/I11222ZV2/AkYI5CARdqZ01pw8Pi44gA+IYEQGHFiL3ivIGGQEAek1XLYEwh54YAQh/We9oCQq5FA9mmqgSPSVn+BnfHJ9nS/F2TG/3xV011dXTXYuznu7qr3J19GRsQvfhGZVQb4KWtoL+j+o3uffemT3y+AX7NjRf9O+nq6tqv+CntXSn01xfGp67W7EuTS3EepZya/Kj9r6kYTfcyfwEcKnC3++8P3XOBPfvH1++UUPkCC+xAzQYCINBHJAdTJIbuEIE2Y3dNuqr/rn/YW5TICea9//TpIXVO7aX7Plr7kKXqMD5F2CHZMbrMxab8I6/ES3uQLnn319R9hwfssnA9Ib06ve/kInt9sUDFJPAjtvxM8DbQTim+bC5sEhBA4zVo/htlk1yvO8Nkv/+oDKNNjP7Htwf46HrrtWp9NcFH4sCmq73fWZxqo9zOzjO7Z3Rh6xfhrnYyYIIRyOtBX/Dl5xqzZwNNhjHmgfD4sgfwaN9Y0sOhrrhHs+8HOpFy721oWkGauRiCT3kZSPr2kC+3ZJsHc125VjSUrIh0g6r9Z690AukmMqdg2aiKzS/cGH5NpCjH8G6iz424sKJ2oNYjNaK/PfuXrT+qtX5kP3gbuf5MfbgLU5vXbTXYuZG+a288HDPV40rtSYAJiB3w6hnpyVaSTsnRNds+SA2YuLFuRmSVwo8D59TxAlIG0i+ynm8ruWbhVUO4DTeq5MrIrYYzTjFXH4ZGAx4AicH1zIX0S+OBom2oSyIe7zoSRaTYTar/lBzGDoA3YhzoTtj2jWVP2zXw+T4ALv23M5tfU4jKes8BVaR+YprKWrDu7M89WzKIIBOmqHFbcJ/mRlCbFRcfucdpn9l37O22MLY9v02IQoeuDUE36cpjO52aFBlV+oGyYbm+q2i+l96phE3c7wBC45cwHS70boJ9PZopblGSdkT+Vx/nyycsrF4KBC/AebATyeICOz89H3E3ntjGpfcBsS8MUX3Ns3TrOfJdY52rxPx89LHG4AleGcrs5B1GLgyprDyRqguZf5MHLr6MUnDb6hmQBdP1spJmj508cQm8NZd3+BifHab3pp8mPDEjMnHHeOYXQ6T4PXXJZ9CWdYPbBME3vgDI4unvYBHaAFl2Kqxlm6CNHWHYCX1UEyyJkk+wE8fN58L1JoXm4vc4gsxF3qf+bBPDI28AvT3BH3fqp5wgBqphkKeNA553AMNQZoN5ZNTjRpglmLFHmk2dTB8qW11utxHF5lY/22rTzGDTYBbCkJANUHjfNgFEH0ACrE/iV1YfrOi8fbwwGnZCFSQZeUse0HLupH2S2DPNsMPqakw7agt4Qz3IqmwAKt+CId2EZG61wtXzaCaw3rDqNdoOE0LjOWqR2MdkxaBvQnDsni9XrA23BNWSAZHMy5+Ap84zsCcgnEBKtrCnDhd3XC4xVYEy2v2X2AqWzL14LqrPz6JOCkISLzLLz94xa6HGfYAMIrR/vHcLeQABrQ+ARxLEF0RECDI0xocUNcoRFNFtOarUJCuXnnBK79y6+DxHNqIpxcns2ExmIcdhgNx7uY2qEfKgMyw6f5GsacOGoAIfgA2PUc0xKYNGGIylFDXOoTBJSacZmwt+Dv4dk3Nns/aFCVSz7iYwIVcUYjiwsMJ5BNtHy92R4aTWbnmjPHvxaZVxwT7rETRdhbQeI0dyaQ5HQcSvSG8nNTM56+QWRLDIkXVMqqZH7KOSE0B4Y8IZsCuYOq8X5fzyErRqWjlf1iY+MFItMiFFoC7OSP6ZQk1IFQkvXkcdGRd+zJbivSCdFMiM+ieQoLA6uypPR6C9MCkare0Xe7lGgpe+wzvJtCEylND9+lHzJdUaIyY5MXhTVF/Y2nlcSdYC6RnJWVMWLcB05LTbhJU00yHQhBl67a4Garml6Hh/UbYjOrhW4SryqvgwwL0RRX/nQzlQgV4oICzE0zMxS/Dzst6RqQn1N+tqep6zUrEsOF8MN02tMHFqshrA4wrK6VuBxAcuTqWmzhFHrY8ERQ4+jozaYo6JDuIVqKVu4tWC4QsyKzSf6cUj4ZqYtWV6b1IIQqk7gqAfUNNqBl59BJ/AGaLX27OtvPql93IPepJOyDS01xKRnd8VodT6KpAFwluiytjDY93OOUw/LPmcOhMnIohGuFh/928N8aNOkgc1rVR/2CJOwgoxiJB4u+ARGyHKgNG0EjKu5qdwpDJUSIQgAIhxRJ6yJAABdoq2QrGCqqjBwxVaR7dtWgSsAVTOoSG0DNXcsSkHA0KQgQUIW822+vugkK3hYSELRnoUPK325UGgIW8D4oYwj4nqK8GoJxZkIa72Ie+BUS1e7CHxV8HxIVpjADx0cbHzQawzVCGhO+Tg0iYdmorGJ+7kXHcOcS2O6Ay3+NdmRn2GmPuJ0DrsIDMOw5GCTYisE3KK9xmBVfglAYmURQtjcMCf+xsRc2wmJ24GCXlVxDoDBwLC7H8CiL49YqdrLw9UKNqdye7t89I0f1/G9iu6cqFG/C1C5j63AMn8YxesNQNRxa8YZorFdTQnEMCsDN56hZ1aL5Q8fzvvfrmFp5xVQHrlKdEbDkdDRVwVxhrNtAGl4NlR0YAcxW7QioPgvYr5uMPNRZFYIMAwjfXaK4xfbhHq+wOVkhTi9AYZ+JZVpI2oSmQqMEWlKIWMLbQEEkYAkOL8wBhckw40lM5cgIMruPAnJfqM30fTBrQSmYTzHOq0iU8HOFKNUkWxUQbg38/DrOKiW4r4Js2tdbL8vI5s/p9hsYh+cTfPl/FYCj8NieaITSynsOY2yh5QwRZ+sWV8YVMxN1SMqxj1irhv8zWEzEwybIK5tFDsUVnjy2ccbgGUyPLddfuM3n9QO70UUoBSmPLODGVp6MO5AyQZKlkj3E0LQp5pm4zCrrjg5AcyBCiI/54Gdn/7w/YfbZLoOtJiA1A4egQ8cE3EklE0jSLrJwkzcQQigV6BJks3V5GOqkoyTXH31ZJmb7ZbaEkpoU4y4gOe0awVuM1XD4RuktkiQqHCReuukhJ59St3baaWOiaCLkmiIigmEIWdeEnPdQCWbsumjeSCKGG+FUsQP9hJ4nKqGB11CRiaLgspRgzHD8iTc2KCZLxeik7mTUHHOo7ukQil1e8ak9YZJqwhYMmtDd5eCNk9iEcUeP8H5XgLDYrGsYhvfhcnCkQYJHaulTpAM20kJc11LEMA0pXRU2YNDMno8FltFmSRM5XwdisO280pD0trBycnl6nkiXQtarV2+9Vtc4zKwwEw1Mq9JpV0/k7PFXNSLhydgizQpBzwreUFifEHCAMC2QoUoq9Pv//PD58lzvYZb48ypApfbkIyUTdJHhDFITIExRxdnKhqmWjJDYAmYuQMIh7apM9Ew7d0AsQmTr5iGdYKB1teJc6PAtbPzKugjNPKKwZh0PH4skojiOQFE8QN1pviSMMdQWQiBFn/AstHOFks8K9EXm44V3EVg1rBCPrivkpaAoDdXDL8WnaHNUz0/ICR+Mg+hahkC8xOn2l6+3TYsz6FTWOfLp75od3uB24xpnRscmWScpj1Unp0tOJza/ViISsRnTzZNpWRGMBSMypBmiV2U0+VQxUU7VqplDc8W12r4RtBq7fK3f/dJ7fJeAIeBRPCEDpAoHXcgFbC1EJJM0u/JICbRj2yWE4wlmkX+CJuL9eKf/vE1uKbtouE2d+va5wMlVJG85/AICZMC3HxdRIXziMZqSTt1PfhghOaQHbLhyGmnAOguVX+f3yTKbgIXXNZHfM1jY8G8lOFUuiu642wqusZwXP9TfKaYKBu+e5BZbMytz4j1L4sV9Xaix3AIgSuCnJeSFlzRQzKLScoYImb5jZDMHlTlFs3Jc+yZOQMGPphFZPNVxiz17ki4qS4gnN0ky24aHqa63jQYMDlUUJZumybRfDGbPGKUxHReNLR04clMGHvPBjvloc+LoTTAuLpJFIQd2+Uf/KHs48q2BBYXIHJVAl9Im6naXna5M/fRFdRT0pWXLr2yYIQgUy6+c33y93/3c3BD203DwG67roI88FqW1mMosR4tVWeVu6w6B4lrxz2+XqQsKxWBsIsHpFTO65IWx2pJFui/YIe2s8AjwFkd1gNJSVLhCn0sSNtIQpi1scvOq6NQjxjX97w8+bZ1KlNStNg/Ta0cfaM530pgKMNK3Qbbg7L/pOEnn03YZp5pqSN5uQ6A3FQoKpcYWzZ9NZ+SN2G39lTr6AgjLXcRY3eBT+t609RCBxjVsaDpaQ7okofGazAAoj6UiAmDYy6G32vHLJBOXAHIvg2aKqZFVAGsL7+0k4Z3Bq3Wrv7omz+u/b9qJFaG13cXYceGQmCFAIJcYA+Ut9lQmFMX8ViUegcDyG7PZ/29Hr773RsBq7XdNQzNqsu6uss9LmLARm6rwwZbxhNmhc4ttMqBCc1S4SfExsA1BW419zSFtrpsC2lr2LHdSuAR8d9r/w8AYlSdDigShEggE+qm6D2rBsjmBWNWvap1f4heSAFgVtOtL89gx3YrgWupZgWxchB+BQCUS1wUrIwiU8YoxZhN+3Sl+8DpJGK/5obppjQ3OI7jjRx6L4FrW1ko8EmwEXdrvJmAyBEuzpleIK1ShDNbid6MXRh2sTVoPecExOcNJtwtJOl9t2tX3/rWBBEoerrjJGN2E21Qrd7/t/RR9GVeZJtVtKy7pyff/varsGO7rYZbsD+vg3gAc4IHvNcEO7InQUvN2mp7UQpzMmYRTf9q6MGoVVEYQIrfatQ7a3cvgcdSi/OAD6RuVyyUigz8W5WvUF20LhsEBZNyDMok2GazRUjIn9grxDGZC9wdsForcOtWuOTDg2wabRpp7wtHDUFm/qnTUoYGdBKaWoSS64RqoLy2+7mugNZX67v4OcYHe5bcqwXyuigK5bgahhNaUk3EzEKdHzPAOCdMrNKKI6Y+ovlmNgU5dwXKtBQgzNiDUqzY1dWJ4wp8uvjSerz8DHoHRMwoAohOOz3JkFOcTRHkPEBvShVPq3+rWTvR0DW1BHj49JW//Ks13KLd2qTx3XefYtvOZyZXK4xqeiJ0UZPmY9Wcs8kPfA1hOsbH83WD3c+27KYcZq3mjnzfzvHX2u1NGhpTr8hI5QFC2ufh2/LA42Tk+phyDfB6GKUojDMTd2Zhx/KSqdpONegl3LLtJfBUTlaFCDzpg47y6eql+6lG4TBlwiBPolYiJ9OaR1kq2gf4GINkjS9Iw0BXZ1BOLCsM5JKToWM9SWhc06UEL8Lxu0lDj5WLUD9LawmCWoaLLvH+koZbAdbeAp/CYj2WOeUReskiUxBOsv3kci3Jsjnl6anHBz1fgmeqbQdS+1xxK6U8eeVP/2wNt2x7xGEFLtnHRQpOJLEUJOYOteDcfhhc9J++1vMKUHo/n4+YbMDk5wWkEOJ9BTC4tTnvLXBrNRSfeyG99aKI2/hGq1SzEEMLQ/qURsrkL9fNGa5QzglpAa5w27W877tND6O49oG23MRXnsEebW+BqxU+lu1QkwjTPg6DU7XZqQ2Qt7y093KNYTJfWyelXSP3MjiVSVhqQ8L2w2WedG+9njfn+fs2IXRr/21tP9CqrZKPs3J6osnMqKnelNPX1gK7JbyS5rxWR8eUEVstDG1nvR1nUSU0efv0Uj4ee9u2t8CnP7NYT2Mt3lZyx2ikSZCHk2JZUUgtFc9YYcAc0nwnOUZYU4jyGUSvFz798p/8xV4a3t+k33n3aRXqvBWE1bQrUE3EptjMHAXCyEyZzTmfl598vV4r77trRrBr2B1wP3NubW8NtzbC2PZxPVDOnyqYnljkwEVWpeJSSNF1hI5ABf8Atxuv5NgzGk7shdCt7a3h1oZheoxllD15MvMBYsVAq50fSdBZ/rXz8XeUUM2abFbBmoRmLbyPszjoCbDV84i3p5TW7qThgtNqEmoIurnI2ELKDFG3EY8N2YmL+QASlsCWHEajlH6/1K6mSBNRsKIdmMbrd+ocTeAK1ed0ugCtyaRMVfcO2rYXL80CxifQ5CJBbJSZQCdcRPFpEuTyn/VQU8LFO3+9tw/fyaTxne/UVLHOdjVd5NjYzNoByszaX0v8jePoQMcmL0vrDGxqvkUAi68z065r1XCHdieBpYdxWQdjfuwCOrkwnxRSkV8rI+P3CZHNj/0+2Rqhk1X7vZPAdzPp2kaazktRSAZbCidZOSa0D8/lJACSgfvWBp406hKqMHGIHIxu2Id1U7uzwHVQK6Z6+rETgknDUTAmJRZyPcBGGLKwJrX8bhGGYprkxmrca7hDu7PAJy/DarqyYgDjsYApyefKpEAXsdZrfAABaBAgJvHbKarWaD2ffrr45t/8//owvv2dpzXWrp0ZiT9WciAgw57qoGXEfySP0+2cMjSJvRN0sXrIYHY3/z2IwNyGuvqewEqCzQiK3IlaBhqDojQDFThlBD9uE9QQXCcSB7qzwHc2aW5lXIlKNCuSVSEhh+08ZuCRepWtMHoZByB7q/6mWDTky67uBFitHUTgupxSGdeETouKlSgn41xKkmaCGVPWTfF57Rctz0orpuMdGJa1w2h4/OS8VugjA469sEogeY0AAHyVTSqY8nEK+9RH0rZnjs4sa/t48fbffj58GN9+rwHXhTAu9kVjSmSgxMIZqEnFgidBqyRa1ajXD2Q+TJT8/RCA1dphNAwtekxnVcr7IOGJ02TK9Y5G/vvaM+lv27OkZCMySk1I7PKDCHwYlAZmSo+bpkjpo4QU5cCOxJbqTX5NQ3FDadEsqMajqCD3T3cGrNYOpuE6rPMyTAo8kc7J13woVBlw2YJih1/BK+XaSbmKEI9pvBvDsnYwgZlxjVaVk7zWl5swlTEgwoxVusiPUS6P+JIoNMD6ne99zkz6rQpcQBcgmRNrloGpGICRZlIUZdsNBmZVE7CMSonKYQCrtYMJ3BoN45KReuDac2JYwaBY6FbWERopiM75sPiv5cAyGaP4MdLBBD6YSbfGX4VaNOEpZqrNsicM0jWRFaD5fSHfwcZVD10MJwyTrlZyEMBq7aACY9uRbksvXm3UXU6Yi5SRJcumj1GzQznqnySVon2dopqcHKgdVOAT+HQ1lZcAIgU0TiwoXGJfKFhtoFFSvmKC2GOrdEy+++DjxW/8y+fTh/Gt92txflqTFua9ntX8t32DkzEsjDIt+tqRlYm0FCSLZwcFrNYOqmFujXEh/Gw4oGREBJPXbTD2hEttgHKOZIFJNypO+xfdt7WDari1sa3qcYEullcUaQOtBxJioSuFplXM/NuqmLjbTvdd28E1jFRNcLCPRURh3Xceou4A8C9ksP0dlkhj7B8GZnBrOGA7uMBS4xr9qzgQ/aNU9pFD5V0USxOFP5WHlk7a+dYWv/6Dg/rwwU0a33z/aRXgQszZdgPo6iAXCSZnVWbC7Tii1rQTWbnLGtLz2sEFbm2qxXlIxfXGvJxS8n7U0bMpy52FnSkFLcLG6jUHBazWDo/SwBZ5zsCj+U5aUwpHVtQm2+QTyROgF4jooObc2lEEria61i88Q+jXgD3JT74cXASNW4nHT3T1xRB4gE+WE75kmxK1ngVekCMLxgbFxZEawwgmWLzxrwcX+Cg+jG8ua42rrSqSAZAmyrZ4ZpUQXVhDrZJoeihsLL4x+JDtKAK3xpTQBAJfSdCygJBLKWUT2g4A0DKQLKUe3n9bO5rAVYqlbVVglE57rvpkn7oNaWT1Lro6OEK3dhQfbq367YV/HYdnt7ZCpl9wh1N8moubZUvN66ejaPhoAg+vjMvpmdbXdZVBRYmUUUq6Sj69+M4XL15ffsFM+uFStkNEwR1iVR/AgEqIiBXbNanYcx/lLu1oArdWBVvl1QZIdekGZubb7uNom8+OA1itHVXgCccz+x8QoX5MQQvwuoQiYUqQWkJVO3ebzxLeth3Nh1srBX5EVq0D/eipvPQKnVa7WpM6dmk59Xg0DR9V4ApdZ4RXvuLJh5qwA6SPhERebCuoi4f/+cU0aQGuaR3blbSaoYzLzBvVxLnCMRyHYVk7qsDc2i4fWT0MKqllHycgJc4R3H3R+7p2dIGJxjNbPtEt/EIr0bQsRRHh1i2NpKMBVmtH9mHOd9elTN2+4NiGJWvJsUZco/WER/Pf1o4u8NC+DoMm/XAGH6K8ngiye15qXTWHPv3qR0s4Yju6SeMvfdhA66kyKoj/MSAnD77/UjOpo5pza8cHLWDCsbTNprwZjWtZDGQZzISZHbkd3aS5IV2Qf0DA6xwQa1C8ylBX+eEnQ8P1KcvYZUexCuEhql1UdT9MR9fwixF4YKqoa0yxwQG1ioUKaKe/sFrCkduL8eHXVuuq4Sf6zr+blwS27NvWj67d1l6MhlujPsdN2X47SceoQW9rL0zgGmQv8vvYXygLaOUnTsMDfd93g0PWMMq6W4EfwAtoL07Drz0+q4TrH+y9+S63Cf6c/fxFjANecKP/ffB7NW344xqF7tW366ro9/DnV9+DF9T+D/6XEe5AIrEgAAAAAElFTkSuQmCC",alt:"img"})}),(0,A.jsx)(li,{children:(0,A.jsx)(di,{children:(0,A.jsx)(ci,{src:Xr,className:t?"logo ":u&&d?"Slow-Spinner-logo":"",alt:"logo",style:{transform:`rotate(${t?o:85}deg)`}})})})]}),!t&&(0,A.jsx)(A.Fragment,{children:(0,A.jsx)(mi,{variant:"contained",color:"#F3BF2B",textColor:"black",disable:d,onClick:async()=>{w(),c(!0)},children:"Spin Now!"})})]}),t&&(0,A.jsxs)(hi,{className:"",children:[(0,A.jsx)("div",{className:"center",style:{marginBottom:"10px"},children:(0,A.jsx)(xi,{src:ni,alt:"congratulation image"})}),(0,A.jsxs)(gi,{children:[(0,A.jsx)("img",{src:ai,alt:"Bunny",width:"200px"}),(0,A.jsxs)("div",{children:[(0,A.jsx)(fi,{children:"YOU'VE WON A DAZZLING"}),(0,A.jsxs)(bi,{children:[i,"!"]})]})]}),(0,A.jsxs)(wi,{children:[(0,A.jsx)("img",{src:ri,alt:"carrot",height:"48px"}),(0,A.jsxs)("div",{children:[(0,A.jsxs)(vi,{children:["Want to boost your chances by 2.5x?"," "]}),(0,A.jsx)(vi,{children:"Upgrade your NFT now!"})]}),(0,A.jsxs)(Ti,{children:[(0,A.jsx)("div",{onClick:()=>{m.push({pathname:"/rewards"})},children:"Upgrade now"}),(0,A.jsx)(si.Z,{style:{width:"16px",height:"16px",fontWeight:"bold"}})]})]})]})]})})}const Si=T.ZP.img`
  height: 100%;
  width: 100%;
  border-radius: 12px;
`,ki=(T.ZP.img`
  height: 100%;
  //  width: 40%;
  //  border-radius:12px;
`,T.ZP.h3`
  position: absolute;
  color: #f6b200;
  font-size: 14px;
  // font-style: italic;
  font-family: Arial, Helvetica, sans-serif;
  top: 8%;
  left: 5%;
`),Ii=(T.ZP.h3`
  // position : absolute;
  // width: 60%;
  color: #1e1e1e;
  font-size: 17px;
  font-weight: 800;
  font-family: "Inter", sans-serif;
  // font-style: italic;
  // top:8%;
  // left: 5%;
`,T.ZP.p`
  position: absolute;
  top: 26%;
  left: 5%;
  font-size: 11px;
  font-family: "Inter", sans-serif;
  line-height: 0.8rem;
  color: #ffffff;
`),Pi=(T.ZP.p`
  // position:absolute;
  // top:26%;
  // left:5%;
  // line-height: 0.8rem;
  font-size: 12px;
  font-weight: 500;
  font-family: "Inter", sans-serif;
  color: #313131;
`,T.ZP.div`
  width: 100%;
  max-width: 55ch;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
        max-width: 40ch;
  	`}};
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
      max-width: 420px;
    `}};
`),ji=(T.ZP.div``,T.ZP.div`
  color: #1e1e1e;
  font-size: 18px;
  font-weight: 800;
  font-family: "Inter", sans-serif;
`,T.ZP.p`
  font-size: 12px;
  font-weight: 500;
  font-family: "Inter", sans-serif;
  color: #313131;
`,T.ZP.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  gap: 6px;
  padding: 0rem;
  background-color: ${e=>{let{theme:t}=e;return t.bgGrayDefault}};
  animation: ${e=>{let{isBlinking:t}=e;return t?" blink 3s infinite":""}};
  border-radius: 1rem;
  z-index: 5;
  cursor: pointer;
`),Ai=e=>{let{isSameChainSwap:t,stableTokenAmountCarrot:n,showRewardBanner:a,coinPriceList:r,dstTxnHash:i,dstToken:s,dstSymbol:o,dstAmount:l,sourceUsdBalance:d}=e;const[p,u]=(0,f.useState)(!1),[c,m]=(0,f.useState)(!1),[h,y]=(0,f.useState)(!1),[x]=((0,b.k6)(),(0,D._b)()),[g,w]=(0,f.useState)(!1),[v,T]=(0,f.useState)(8);return(0,f.useEffect)((()=>{!async function(){let e=await(0,Vr.fr)({}),{filters:t}=await e.data;for(let n=0;n<t.length;n++){const e=t[n].nft_type.toLowerCase();e.includes("superbunny")?T((e=>Math.min(e,0))):e.includes("bunny")?T((e=>Math.min(e,1.33))):e.includes("richu")?T((e=>Math.min(e,2))):e.includes("rabby")&&T((e=>Math.min(e,4)))}}()}),[g]),(0,A.jsxs)(Pi,{children:[(0,A.jsx)(ji,{isBlinking:!h,children:(0,A.jsx)(Yr.tq,{modules:[Hr.W_,Hr.pt],autoplay:{delay:4e3,disableOnInteraction:!1},spaceBetween:2,slidesPerView:1,onSlideChange:()=>console.log("slide change"),className:"mySwiper",style:{borderRadius:"14px",height:"155px",width:"100%"},children:(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(Yr.o5,{children:[(0,A.jsx)(Si,{src:Gr}),(0,A.jsx)(ki,{children:"Did you know ?"}),(0,A.jsxs)(Ii,{children:["Nitro is not just an asset-transfer bridge. You can use Nitro to send ",(0,A.jsx)("br",{}),"arbitrary messages along with your funds."]})]}),(0,A.jsxs)(Yr.o5,{children:[(0,A.jsx)(Si,{src:Gr}),(0,A.jsx)(ki,{children:"Did you know ?"}),(0,A.jsxs)(Ii,{children:["Nitro supports over x chains including non-EVM chains"," ",(0,A.jsx)("br",{})," like Tron, Near and Router."]})]}),(0,A.jsxs)(Yr.o5,{children:[(0,A.jsx)(Si,{src:Gr}),(0,A.jsx)(ki,{children:"Did you know ?"}),(0,A.jsxs)(Ii,{children:["Nitro supports any token to any token cross-chain swaps. That means, ",(0,A.jsx)("br",{}),"you can transfer your MATIC on Polygon to AVAX"," ",(0,A.jsx)("br",{})," on Avalanche in one step."]})]}),(0,A.jsxs)(Yr.o5,{children:[(0,A.jsx)(Si,{src:Gr}),(0,A.jsx)(ki,{children:"Did you know ?"}),(0,A.jsxs)(Ii,{children:["Nitro is one of the fastest bridges out there. It can facilitate cross-chain ",(0,A.jsx)("br",{}),"transactions in less than a minute while ensuring utmost security. ",(0,A.jsx)("br",{}),"To do so, it uses a combination of smart contracts ",(0,A.jsx)("br",{}),"and permissionless entities called forwarders. ",(0,A.jsx)("br",{}),"Infact, by the time you are done reading this, ",(0,A.jsx)("br",{}),"your cross-chain transaction would have ",(0,A.jsx)("br",{})," already been executed."]})]})]})})}),g&&(0,A.jsx)(Ci,{open:g,handleClose:()=>{w(!g)},isAlreadySpinned:h,handleIsAlreadySpinned:()=>{y(!0)},winMultiplier:v})]})};var Ei=n(74946),Ri=n(81463),Mi=n(50494);const Zi=T.ZP.img`
width: 18px;
height: 18px;
`,_i=T.ZP.div`
  position: absolute; 
  top: 50px;
  width: 100%;
  z-index: 10;
  display: flex;
  align-items: center; 
  flex-direction: column; 
  max-height: 202px; 
  overflow: scroll; 
  border: 1px solid #ffffff40;
  justify-content: space-between; 
  background: #333; 
  border-radius: 14px;
`,Li=T.ZP.div`
  font-family: "Inter", sans-serif;
  cursor:pointer;
  width: 100%;
  display:flex;
  align-items:center;
  justify-content:space-between;
  position:relative;
  font-size: 14px;
  text-align: left;
  background: ${e=>{let{theme:t}=e;return t.modalBG}};
  color: ${e=>{let{theme:t}=e;return t.text7}};
  border: 1px solid #ffffff40;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25), 0px 0px 4px 0px rgba(0, 0, 0, 0.10);
  padding: 10px;
  border-radius: 12px;
  &:focus {
    outline: none;
  }
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
        font-size: 14px;
  	`}};
`,Fi=T.ZP.div`
  display:flex; 
  align-items: center;
  justify-content: center;
  width: 98%;
  position: relative;
`,$i=T.ZP.div`
  display: flex;
  align-items: center; 
  justify-content: flex-start;
  width: 100%;
  padding: 10px 14px; 
  gap: 10px;
  cursor: pointer;
  &:hover {
    border-color: #FFFFFF20;
    background : ${e=>{let{theme:t}=e;return t.bg2}};
  }
`,Ni=e=>{let{selectedChain:t,setSelectedChain:n,AmountSetter:a}=e;const[r,i]=(0,f.useState)(!1);return(0,A.jsx)(A.Fragment,{children:(0,A.jsxs)(Fi,{children:[(0,A.jsxs)(Li,{onClick:()=>{i((e=>!e))},children:[(0,A.jsxs)("div",{style:{display:"inline-flex",gap:"10px"},children:[(0,A.jsx)(Zi,{src:U.fc[t.networkId]?U.fc[t.networkId]:U.fc.default}),(0,A.jsx)("div",{children:t.name})]}),(0,A.jsx)(Mi.Z,{height:18})]}),r&&(0,A.jsx)(_i,{children:Rn.p.map(((e,t)=>(0,A.jsxs)($i,{onClick:()=>{(async e=>{n(e),a(e)})(e),i(!1)},children:[(0,A.jsx)(Zi,{src:U.fc[e.networkId]?U.fc[e.networkId]:U.fc.default}),(0,A.jsx)("div",{children:e.name},t)]})))})]})})};n(88282);const Ui=T.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 580px;
  gap: 10px;
  border-radius: 24px;
  padding: 2%;
  color: ${e=>{let{theme:t,textColor:n}=e;return n||t.text7}};
  background: ${e=>{let{theme:t,backgroundColor:n}=e;return n||t.modalBG}};
  border : 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(32px);
  font-family: "Inter", sans-serif;
  height: 510px;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
		width: 90vw;
		max-width: 457px;
        height: 36rem;
  	`}};
`,Di=(0,T.ZP)(L.Z)`
  color: ${e=>{let{theme:t,textColor:n}=e;return n||t.text7}};
  margin-right: 14px;
  margin-top: 10px;
  margin-left: auto;
  width: 40px !important;
  cursor: pointer;
  height: 40px !important;
  padding: 8px;
  position: absolute;
  right: 15px;
  top: 6px;
  :hover {
    opacity: 0.6;
    transition: all 0.1s ease-in-out;
  }
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
    right: 10px;
    top: 0px;
  	`}};
`,Oi=T.ZP.p`
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 16px;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
      font-size: 18px;
  margin-top: 10px;
  margin-bottom: 16px;
  	`}};
`,Bi=T.ZP.div`
  position : absolute;
  bottom : 18px;
  width: 96%;
  padding: 2% 1% 1% 1%;
`,Wi=T.ZP.button`
  text-decoration: none;
  font-family: "Inter", sans-serif;
  width: 100%;
  height: 46px;
  border-radius: 12px;
  background-color: ${e=>{let{theme:t,disable:n}=e;return n?t.text3+"80":t.text3}};
  font-weight: 500;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  place-items: center;
  gap: 10px;
  color: #000000;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  outline: none;
  border:none;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
		width: 100%;
		height: 40px;
		border: 1px solid ${e=>{let{theme:t}=e;return t.gray2}};
		filter: none;
		font-size: 16px;
		font-weight: 400;
  	`}};
`,zi=T.ZP.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 12px;
  line-height: 1.25rem;
  font-weight: 400;
  color: ${e=>{let{theme:t}=e;return t.text7}};
  width: 100%;
  whitespace: nowrap;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToLarge`
		font-size:10px;
  `}};
`,Hi=T.ZP.textarea`
  font-family: "Inter", sans-serif;
  width: 100%;
  font-size: 14px;
  text-align: left;
  background: none;
  color: ${e=>{let{theme:t}=e;return t.text7}};
  border: 1px solid #e2e2e240;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25), 0px 0px 4px 0px rgba(0, 0, 0, 0.10);
  padding: 10px;
  height:80px;
  border-radius: 12px;
  resize: none;
  &:focus {
    outline: none;
  }
`,Gi=T.ZP.input`
  font-family: "Inter", sans-serif;
  width: 100%;
  font-size: 14px;
  text-align: left;
  background: none;
  color: ${e=>{let{theme:t}=e;return t.text7}};
  border: 1px solid #e2e2e240;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25), 0px 0px 4px 0px rgba(0, 0, 0, 0.10);
  padding: 10px;
  border-radius: 12px;
  opacity: ${e=>{let{disabled:t}=e;return t?"0.6":"1"}};
  &:focus {
    outline: none;
  }
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Remove spin buttons in Firefox */
  &[type='number'] {
    -moz-appearance: textfield;
  }  
`,Yi=T.ZP.div`
  position: relative;
  display: flex;
  align-items: center;
  gap:10px;
  border-radius: 12px;
  padding: 4px 10px;
  border: 1px solid ${e=>{let{theme:t}=e;return`${t.text3}40`}};
  background-color: ${e=>{let{theme:t}=e;return"rgba(124, 96, 16, 0.50)"}};

`,Vi=T.ZP.img`
  width: 22px;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToMedium`
		width: 18px;
  	`}};
`,qi=T.ZP.div`
display: flex; 
align-items: center;
justify-content: space-between;
width: 100%;
padding-inline: 10px;
`,Ki=T.ZP.div`
 display: flex; 
 align-items: center; 
 flex-direction: column; 
 border: 1px solid #e2e2e240;
 width: 98%;
 border-radius: 12px;
 padding:10px; 
 gap: 10px;
`,Qi=T.ZP.div`
  padding: 0px 10px; 
  width: 100%; 
  text-align: left;
`,Ji=T.ZP.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`,Xi=T.ZP.p`
    color: red; 
    font-size: 12px; 
    margin:0px;
    padding-left:10px;
    width: 100%;
`,es=T.ZP.div`
  position: absolute;
  bottom:0px;
  right: -6px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: #FFFFFF;
  padding: 0.8px;
`,ts=T.ZP.img`
  width: 10px;
  height:10px;
`,ns=T.ZP.p`
  position: absolute; 
  bottom: 78px; 
  padding-left: 10px; 
  width: 96%; 
  text-align: left; 
  margin: 0px; 
  font-size: 12px; 
  color: red;
`,as=T.ZP.span`
  color: ${e=>{let{theme:t}=e;return t.text3}};
  padding-right : 8px;
`,rs=e=>{let{currentSourceChain:t,currentSourceAsset:n,close:a,setShowWalletList:r}=e;const[i]=(0,D._b)(),[s]=(0,D.Gt)(),[o]=(0,Jn.G)(),l=(0,b.TH)(),[d,p]=(0,f.useState)(0),[c,m]=(0,f.useState)(""),[h,y]=(0,f.useState)("-"),[x,g]=(0,f.useState)("-"),[w,T]=(0,f.useState)(t),[C]=(0,D._X)(),[S]=me(),[k,I]=(0,f.useState)(""),[j,E]=(0,f.useState)(""),[R,M]=(0,f.useState)(""),[Z,_]=(0,f.useState)({telegramUsername:"",description:"",amount:""}),L=(0,f.useMemo)((()=>{var e;return decodeURIComponent(null!==(e=new URLSearchParams(l.search).get("textColor"))&&void 0!==e?e:"")}),[l]),F=(0,f.useMemo)((()=>{var e;return decodeURIComponent(null!==(e=new URLSearchParams(l.search).get("backgroundColor"))&&void 0!==e?e:"")}),[l]),$=(0,f.useMemo)((()=>new URLSearchParams(l.search).get("isWidget")),[l]),N=e=>{_({...Z,[e.target.name]:e.target.value})},[O,B]=(0,f.useState)(""),[z,H]=(0,f.useState)(!1),G=async e=>{try{const n=await(0,ea.G$)(e.endpoint),a=await u().get(W.LCD_URL);if(200===a.status){var t;const r=(await(null===(t=a.data)||void 0===t?void 0:t.contractConfig)||[]).find((t=>t.chainId===e.networkId&&"VOYAGER"===t.contractType&&!0===t.contract_enabled));if(r){const e=r.contractAddress;M(e);const t=await(0,Pn.SN)({contractAddress:e,assetForwarderAbi:ta,provider:n}).catch((e=>{console.log("token balance fetch error - ",e)}));console.log("balance",t),I((0,ye.og)(null===t||void 0===t?void 0:t.minStakeValue)),E((0,ye.og)(null===t||void 0===t?void 0:t.maxStakeValue)),_({...Z,amount:(0,ye.og)(null===t||void 0===t?void 0:t.minStakeValue)})}}}catch(O){console.error("Error:",O)}};(0,f.useEffect)((()=>{i&&G(t)}),[]),(0,f.useEffect)((()=>{s!==pr.UI.walletconnect&&i&&(o&&o.networkId!==w.networkId||""===o)?w.type===yr.q8&&(s===pr.UI.injected||s===pr.UI.coinbase)||w.type===yr.$n&&s===pr.UI.keplr?m("Switch Network"):w.type===yr.XQ&&s===pr.UI.tron?m("Switch Network Manually"):m("Switch Wallet"):m(i?"Initiate Pause":"Connect Wallet")}),[i,o,s,w]);const Y=(0,f.useCallback)((async()=>{const e=U.P_[w.networkId].find((e=>!0===e.native))||U.P_[t.networkId][0];if(""!==C){const t=await(0,ea.NT)(w,e,C);y(t)}else y("-")}),[w,C,ea.NT]);(0,f.useEffect)((()=>{Y()}),[w,C]);const V=(0,f.useCallback)((()=>{if(g("-"),"0"===Z.amount||!he.TP[w.networkId]||"-"===S[S[he.TP[w.networkId].symbol]])return;const e=parseFloat(S[he.TP[w.networkId].symbol])?parseFloat(Z.amount)*parseFloat(S[he.TP[w.networkId].symbol]):"";g(String(e))}),[S,w,Z.amount]);return(0,f.useEffect)((()=>V()),[Z.amount,w,S]),(0,A.jsxs)(Ui,{textColor:"true"===(null===$||void 0===$?void 0:$.toString())?L:"",backgroundColor:"true"===(null===$||void 0===$?void 0:$.toString())?F:"",children:[(0,A.jsx)(Di,{textColor:"true"===(null===$||void 0===$?void 0:$.toString())?L:"",onClick:a}),1===d&&(0,A.jsx)(Ri.Z,{onClick:()=>{p(0)},style:{cursor:"pointer",position:"absolute",top:"20px",left:"30px",fontSize:"18px",marginTop:"10px"}}),(0,A.jsx)(Oi,{children:"Community Pause"}),0===d?(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(Qi,{children:[(0,A.jsx)("h5",{style:{fontSize:"14px",marginTop:"0px",color:"#d8d8d8",marginBottom:"8px",lineHeight:"1.5"},children:"Please read the following text carefully before proceeding:"}),(0,A.jsx)("p",{style:{fontSize:"13px",marginTop:"0px",color:"#a3a4a4",marginBottom:"5px",lineHeight:"1.5"},children:"The Community Pause feature allows you to halt activity for a specific chain on Router Nitro by putting up a stake. This should only be used if you have a strong suspicion of an exploit of the Nitro bridge or of that chain\u2019s native bridge. "}),(0,A.jsx)("p",{style:{fontSize:"13px",marginTop:"0px",color:"#a3a4a4",marginBottom:"10px",lineHeight:"1.5"},children:"If your pause is deemed valid (meaning a critical issue is confirmed), you will receive double your stake back. If not, your entire stake will be forfeited to the protocol."})]}),(0,A.jsxs)("div",{style:{width:"98%"},children:[(0,A.jsx)(zi,{children:"Telegram *"}),(0,A.jsx)(Gi,{type:"string",name:"telegramUsername",onChange:N,value:Z.telegramUsername,placeholder:"telegram username"})]}),(0,A.jsxs)("div",{style:{width:"98%"},children:[(0,A.jsx)(zi,{children:"Description *"}),(0,A.jsx)(Hi,{required:!0,name:"description",value:Z.description,onChange:N,placeholder:"description"})]}),(0,A.jsx)(ns,{children:O}),(0,A.jsx)(Bi,{children:(0,A.jsx)(Wi,{disable:!1,onClick:()=>{B(""),""!==Z.telegramUsername?""!==Z.description?p(1):B("Error: Description field is required"):B("Error: Telegram field is required")},children:"Next"})})]}):(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)("div",{style:{width:"100%",display:"flex",alignItems:"center",flexDirection:"column",marginTop:"20px"},children:[(0,A.jsx)(zi,{style:{fontSize:"14px",paddingLeft:"10px"},children:"Select chain to pause"}),(0,A.jsx)(Ni,{selectedChain:w,setSelectedChain:T,AmountSetter:G})]}),(0,A.jsxs)(Ki,{children:[(0,A.jsxs)(Ji,{children:[(0,A.jsx)("div",{children:(0,A.jsx)(Gi,{type:"number",name:"amount",value:parseFloat(Z.amount),onChange:N,placeholder:"Enter Amount",min:k,max:j,style:{fontSize:"20px",minWidth:"200px",border:"none",boxShadow:"none"}})}),(0,A.jsxs)(Yi,{children:[(0,A.jsxs)("div",{style:{position:"relative"},children:[(0,A.jsx)(Vi,{src:U.oO[he.TP[w.networkId]?he.TP[w.networkId].symbol:""]||U.oO.default}),(0,A.jsx)(es,{children:(0,A.jsx)(ts,{src:U.fc[w.networkId]?U.fc[w.networkId]:U.fc.default})})]}),(0,A.jsx)("p",{style:{margin:"0px",fontSize:"12px"},children:he.TP[w.networkId]?he.TP[w.networkId].symbol:"-"})]})]}),(0,A.jsxs)(qi,{children:[(0,A.jsxs)("p",{style:{margin:"0px",fontSize:"12px"},children:["$",(0,P.YG)(x,2)]}),(0,A.jsxs)("p",{style:{margin:"0px",fontSize:"12px"},children:["Balance : ",(0,P.YG)(h,2)]})]})]}),(parseFloat(Z.amount)>parseFloat(j)||parseFloat(Z.amount)<parseFloat(k))&&(0,A.jsx)(Xi,{children:"Error: Entered amount out of range"}),z&&!(parseFloat(Z.amount)>parseFloat(j)||parseFloat(Z.amount)<parseFloat(k))&&(0,A.jsx)(Xi,{children:"Error: Insufficient balance"}),(0,A.jsxs)(Bi,{children:[(0,A.jsx)(Qi,{style:{marginBottom:"30px"},children:(0,A.jsxs)("p",{style:{margin:"20px 0px",fontSize:"13px",textAlign:"center"},children:["Min Amount : "," ",(0,A.jsxs)(as,{children:[k||"-"," ",he.TP[w.networkId]?he.TP[w.networkId].symbol:"-"]}),"   "," Max Amount :"," ",(0,A.jsxs)(as,{children:[j||"-"," ",he.TP[w.networkId]?he.TP[w.networkId].symbol:"-"]})]})}),(0,A.jsx)(Qi,{style:{marginBottom:"30px"},children:(0,A.jsxs)("p",{style:{margin:"10px 0px",fontSize:"13px",lineHeight:"1.5",color:"#a3a4a4"},children:[(0,A.jsx)("b",{children:"Note"}),": ",(0,A.jsx)("i",{children:(0,A.jsx)("b",{children:"This feature is intended for critical situations only. Misusing it will result in a loss of your staked funds."})})]})}),(0,A.jsx)(Wi,{disable:parseFloat(Z.amount)>parseFloat(j)||parseFloat(Z.amount)<parseFloat(k)||""===Z.amount,onClick:()=>(async e=>{if(!i||!(0,P.i7)(e.type,s))return r(!0),void a();if(s!==pr.UI.walletconnect&&(o&&o.networkId!==e.networkId||""===o))return void(s!==pr.UI.injected&&s!==pr.UI.coinbase||o&&o.networkId===e.networkId?(r(!0),a()):await(0,Xn.sT)(e.id));if("-"===x||parseFloat(h)<parseFloat(x))return void H(!0);const t=(0,Ei.T)(),n=await u().post("https://api.poap-nft.routerprotocol.com/community-pause",{telegramUsername:Z.telegramUsername,description:Z.description,chainId:e.networkId},{headers:{"Content-Type":"application/json"}});if(console.log("button Click",Z.amount,(0,ye.Jl)(Z.amount),n),R){const e=await(0,Pn.Z4)({contractAddress:R,assetForwarderAbi:ta,signer:t,amount:(0,ye.Jl)(Z.amount)}).catch((e=>{console.log("err - ",e)}));console.log("contractValue",e),e?(v.Am.success(`TxHash : ${e.hash}`,{position:"top-right",autoClose:5e3,closeOnClick:!0,theme:"dark"}),a()):v.Am.error("Server error")}})(w),disabled:parseFloat(Z.amount)>parseFloat(j)||parseFloat(Z.amount)<parseFloat(k)||""===Z.amount,children:c})]})]})]})},is=e=>{let{fill:t="#F3BF2B"}=e;return(0,A.jsx)("svg",{width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,A.jsx)("path",{d:"M19.1152 5.5638L19.1273 5.55167L14.6182 1.04258L13.3333 2.32743L15.8909 4.88501C14.7515 5.32137 13.9394 6.41228 13.9394 7.70925C13.9394 9.38198 15.297 10.7396 16.9697 10.7396C17.4061 10.7396 17.8061 10.6426 18.1818 10.485V19.2244C18.1818 19.8911 17.6364 20.4365 16.9697 20.4365C16.303 20.4365 15.7576 19.8911 15.7576 19.2244V13.7699C15.7576 12.4365 14.6667 11.3456 13.3333 11.3456H12.1212V2.86077C12.1212 1.52743 11.0303 0.436523 9.69697 0.436523H2.42424C1.09091 0.436523 0 1.52743 0 2.86077V22.2547H12.1212V13.1638H13.9394V19.2244C13.9394 20.8971 15.297 22.2547 16.9697 22.2547C18.6424 22.2547 20 20.8971 20 19.2244V7.70925C20 6.87289 19.6606 6.10925 19.1152 5.5638ZM16.9697 8.92137C16.303 8.92137 15.7576 8.37592 15.7576 7.70925C15.7576 7.04258 16.303 6.49713 16.9697 6.49713C17.6364 6.49713 18.1818 7.04258 18.1818 7.70925C18.1818 8.37592 17.6364 8.92137 16.9697 8.92137ZM4.84848 18.6183V13.1638H2.42424L7.27273 4.07289V10.1335H9.69697L4.84848 18.6183Z",fill:t})})};var ss=n(24537);const os=T.ZP.p`
    font-size:14px;
`,ls=e=>{let{min:t,max:n,rangeValue:a,setRangeValue:r,destinationInput:i,refuelValue:s}=e;const[o,l]=(0,f.useState)(a);return(0,A.jsxs)("div",{className:"range-slider",children:[(0,A.jsx)(ss.ZP,{"aria-label":"Always visible",size:"medium",value:o,onChange:e=>{0===e.target.value?(r(1),l(0)):(r(e.target.value),l(e.target.value))},defaultValue:3,marks:!0,step:3,min:t,max:n,color:"warning",sx:{color:"#F2BF3B"}}),(0,A.jsxs)(os,{children:[(0,A.jsx)("span",{style:{color:"#A3A4A4"},children:"Enough for:"})," ",1===a?"1 transfer":3===a?`${a} transfer or 1 swap`:`${a} transfer or 2 swaps`," "]})]})};var ds=n(56342);const ps=T.ZP.div`
  display: flex;
  width: 100%;
  padding: 0% 0% 2% 0%;
  flex-direction: column;
  font-family: "Inter", sans-serif;
`,us=T.ZP.div`
  display: flex;
  background: ${e=>{let{theme:t,backgroundColor:n}=e;return n?n+"90":t.bgGrayDefault}};
  filter: ${e=>{let{theme:t,backgroundColor:n}=e;return n?"contrast(.8)   brightness(1.1) opacity(0.8)":"contrast(1)"}};
  justify-content: space-between;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 2% 4%;
  width: 100%;
  border-radius: 14px;
`,cs=T.ZP.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 4px;
`,ms=(T.ZP.img`
  width: 20px;
  cursor: pointer;
`,T.ZP.p`
  display:flex;
  gap:4px;
  margin: 0px;
  font-size: 14px;
  color: ${e=>{let{theme:t}=e;return t.text1}};
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToMedium`
		font-size:10px;
  	`}};
`),hs=T.ZP.p`
  color: ${e=>{let{theme:t}=e;return t.text2}};
  margin: 0px;
  padding: 6px 0px;
  font-size: 12px;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToMedium`
		font-size:8px;
  	`}};
`,ys=T.ZP.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 24px;
`,xs=T.ZP.input.attrs({type:"checkbox"})`
  opacity: 0;
  width: 0;
  height: 0;
`,gs=T.ZP.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${e=>{let{theme:t}=e;return"#585863"}};
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 4px;
    bottom: 4px;
    background-color: #9B9B9B;
    transition: 0.4s;
    border-radius: 50%;
  }

  ${xs}:checked + & {
    background-color: ${e=>{let{theme:t}=e;return t.yellow1}};
  }

  ${xs}:checked + &:before {
    transform: translateX(14px);
    background-color: ${e=>{let{theme:t}=e;return t.yellow2}};
  }
`,fs=(0,T.ZP)(l.Z)`
  &&& {
    color: white;
    font-size: 14px;
  }
`,bs=(0,T.ZP)(Ge.Z)`
  &&& {
    color: white;
    transform : ${e=>{let{advanceSettings:t}=e;return t?"rotate(180deg)":"rotate(0deg)"}};
    font-size: 20px;
  }
`,ws=T.ZP.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin-top:8px;
    margin-bottom:0px;
`,vs=T.ZP.div`
   display: flex;
   justify-content: flex-start; 
   align-items: center;
   gap:20px;
`,Ts=T.ZP.div`
  display:flex; 
  align-items:center;
  justify-content:center;
  gap:4px; 
  margin: 8px 0px;
  cursor:pointer;
`,Cs=W.REFUEL_ALLOWED_CHAINS&&(null===W.REFUEL_ALLOWED_CHAINS||void 0===W.REFUEL_ALLOWED_CHAINS?void 0:W.REFUEL_ALLOWED_CHAINS.split(",")),Ss=(0,T.ZP)((e=>{let{className:t,...n}=e;return(0,A.jsx)(Ye.Z,{...n,classes:{popper:t}})}))((e=>{let{theme:t}=e;return{[`& .${Ve.Z.tooltip}`]:{wordSpacing:"nowrap",backgroundColor:`${t.text7}`,color:`${t.text6}`,border:`2px solid ${t.text5}`,fontSize:11,zIndex:100},[`& .${Ve.Z.arrow}`]:{"&::before":{backgroundColor:`${t.text7}`}}}})),ks=(e,t,n,a)=>t.type!==yr.q8||!Cs.includes(e.networkId)||e.networkId===t.networkId||""===n||""===a||n.symbol===he.TP[e.networkId].symbol,Is=e=>{let{showRefuelMenu:t,setShowRefuelMenu:n,destinationInput:a,inputValue:r,refuelValue:i,setRefuelValue:s}=e;const[o,l]=(0,f.useState)(!1),[d,p]=(0,f.useState)(3),[u]=me(),[c,m]=(0,B.H)(),[h,y]=(0,B.JD)(),[x,g]=(0,B.Gm)(),[w,v]=(0,B.EZ)(),[T,C]=(0,f.useState)("-"),S=(0,f.useCallback)((()=>{if(C("-"),"0"===i||"-"===u[he.TP[w.networkId].symbol])return;const e=parseFloat(u[he.TP[w.networkId].symbol])?i.mul((0,ye.Jl)(u[he.TP[w.networkId].symbol],he.TP[w.networkId]?he.TP[w.networkId].decimals.toString():"18")).div((0,ye.Jl)(1,he.TP[w.networkId]?he.TP[w.networkId].decimals.toString():"18")):"";e&&C((0,ye.og)(e,he.TP[w.networkId]?he.TP[w.networkId].decimals.toString():"18").toString())}),[i,u,x,a]);(0,f.useEffect)((()=>S()),[i,x,u]);const k=(0,b.TH)(),I=(0,f.useMemo)((()=>new URLSearchParams(k.search).get("isWidget")),[k]),j=(0,f.useMemo)((()=>{var e;return decodeURIComponent(null!==(e=new URLSearchParams(k.search).get("backgroundColor"))&&void 0!==e?e:"")}),[k]),E=(0,f.useMemo)((()=>{var e;return decodeURIComponent(null!==(e=new URLSearchParams(k.search).get("ctaColor"))&&void 0!==e?e:"")}),[k]);function R(e){const t=JSON.parse(JSON.stringify(Rn.L)).chains.find((t=>t.networkId===e));return t?t.name.split(" ")[0]:null}return(0,f.useEffect)((()=>{var e;t?s((0,ye.Jl)(null!==(e=he.hm[w.networkId].value)&&void 0!==e?e:0,he.TP[w.networkId]?he.TP[w.networkId].decimals.toString():"18").mul(3)):s("0");p(3)}),[t]),(0,f.useEffect)((()=>{if(ks(w,c,x,h))n(!1),p(3);else if(t){var e;s((0,ye.Jl)(null!==(e=he.hm[w.networkId].value)&&void 0!==e?e:0,he.TP[w.networkId]?he.TP[w.networkId].decimals.toString():"18").mul(d))}else s("0")}),[d,w,h,x,c]),(0,A.jsx)(ps,{children:(0,A.jsxs)(us,{backgroundColor:"true"===(null===I||void 0===I?void 0:I.toString())?j:"",children:[(0,A.jsxs)(cs,{children:[(0,A.jsxs)(vs,{children:[(0,A.jsx)(is,{fill:"true"===(null===I||void 0===I?void 0:I.toString())&&E||void 0}),(0,A.jsxs)(ws,{children:[(0,A.jsxs)("div",{style:{display:"flex"},children:[(0,A.jsx)(ms,{children:"Enable Gas TopUp"}),(0,A.jsx)(Ss,{title:`Gas Topup is available between ${Cs&&Cs.slice(0,-1).map((e=>R(e)))} & ${R(Cs.slice(-1)[0])}. Try Now.`,placement:"top",disableFocusListener:!0,TransitionComponent:zt.Z,TransitionProps:{timeout:600},arrow:!0,children:(0,A.jsx)(ds.Z,{style:{color:"#A3A4A4",height:"16px"}})})]}),(0,A.jsx)(hs,{children:"Get Native Tokens for transactions"})]})]}),(0,A.jsx)(Ss,{title:""+(w.networkId===c.networkId?"Gas TopUp is not available for same Networks.":""===h||""===x?"Please select tokens to enable Gas TopUp.":"Gas TopUp is not available for this pair."),placement:"top",disableFocusListener:!0,TransitionComponent:zt.Z,TransitionProps:{timeout:600},arrow:!0,disableHoverListener:!ks(w,c,x,h),children:(0,A.jsxs)(ys,{children:[(0,A.jsx)(xs,{checked:t,onChange:()=>{n((e=>!e))},disabled:ks(w,c,x,h)}),(0,A.jsx)(gs,{})]})})]}),t&&(0,A.jsxs)(cs,{children:[(0,A.jsx)(ws,{children:(0,A.jsxs)(ms,{style:{fontSize:"12px"},children:["You Receive :"," ",(0,A.jsxs)("span",{style:{color:"#F2BF3B",fontWeight:"500"},children:[(0,ye.og)(i,he.TP[w.networkId]?he.TP[w.networkId].decimals.toString():"18").toString(),he.TP[w.networkId].symbol," "]}),(0,A.jsxs)("span",{style:{color:"#A3A4A4"},children:["~$",(0,P.YG)(T,4)]}),(0,A.jsx)(Ss,{title:"The actual quantity of gas you receive may vary due to fluctuations in prices.",placement:"top",disableFocusListener:!0,TransitionComponent:zt.Z,TransitionProps:{timeout:600},arrow:!0,children:(0,A.jsx)(ds.Z,{style:{color:"#A3A4A4",height:"16px"}})})]})}),(0,A.jsxs)(Ts,{onClick:()=>{l((e=>!e))},children:[(0,A.jsx)(fs,{}),(0,A.jsx)(ms,{style:{fontSize:"11px",color:"F2BF3B"},children:o?"Hide Settings":"Advance Settings"}),(0,A.jsx)(bs,{advanceSettings:o,textColor:(null===I||void 0===I||I.toString(),"")})]})]}),t&&o&&(0,A.jsx)(ls,{min:0,max:6,rangeValue:d,setRangeValue:p,destinationInput:a,refuelValue:i})]})})};var Ps=n(93109);const js=JSON.parse('[{"inputs":[{"internalType":"address","name":"_dexSpan","type":"address"},{"internalType":"address","name":"_wrappedNative","type":"address"},{"internalType":"address","name":"_gatewayAddress","type":"address"},{"internalType":"string","name":"chainId","type":"string"},{"internalType":"string","name":"routerBridgeAddress","type":"string"},{"internalType":"uint256","name":"startNonce","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint8","name":"codeId","type":"uint8"}],"name":"AssetBridgeError","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"destChainIdBytes","type":"bytes32"},{"indexed":true,"internalType":"uint256","name":"depositNonce","type":"uint256"},{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"address","name":"srcSettlementToken","type":"address"},{"indexed":false,"internalType":"uint256","name":"srcSettlementAmount","type":"uint256"}],"name":"DepositReverted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"executeType","type":"uint8"},{"indexed":true,"internalType":"bytes32","name":"sourceChainIdBytes","type":"bytes32"},{"indexed":true,"internalType":"uint256","name":"depositNonce","type":"uint256"},{"indexed":false,"internalType":"address","name":"settlementToken","type":"address"},{"indexed":false,"internalType":"uint256","name":"settlementAmount","type":"uint256"},{"indexed":false,"internalType":"address","name":"recipient","type":"address"}],"name":"Execute","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"executeType","type":"uint8"},{"indexed":true,"internalType":"bytes32","name":"sourceChainIdBytes","type":"bytes32"},{"indexed":true,"internalType":"uint256","name":"depositNonce","type":"uint256"},{"indexed":false,"internalType":"address","name":"settlementToken","type":"address"},{"indexed":false,"internalType":"uint256","name":"settlementAmount","type":"uint256"},{"indexed":false,"internalType":"address","name":"recipient","type":"address"},{"indexed":false,"internalType":"bool","name":"flag","type":"bool"},{"indexed":false,"internalType":"bytes","name":"data","type":"bytes"}],"name":"ExecuteWithMessage","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"destChainIdBytes","type":"bytes32"},{"indexed":true,"internalType":"address","name":"srcTokenAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"srcTokenAmount","type":"uint256"},{"indexed":false,"internalType":"bytes","name":"recipient","type":"bytes"},{"indexed":false,"internalType":"uint256","name":"partnerId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"depositId","type":"uint256"}],"name":"TokenTransfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"destChainIdBytes","type":"bytes32"},{"indexed":true,"internalType":"address","name":"srcTokenAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"srcTokenAmount","type":"uint256"},{"indexed":false,"internalType":"bytes","name":"recipient","type":"bytes"},{"indexed":false,"internalType":"uint256","name":"partnerId","type":"uint256"},{"indexed":false,"internalType":"uint64","name":"destGasLimit","type":"uint64"},{"indexed":false,"internalType":"bytes","name":"instruction","type":"bytes"},{"indexed":false,"internalType":"uint256","name":"depositId","type":"uint256"}],"name":"TokenTransferWithInstruction","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"AssetBridge_REQUEST_METADATA","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PAUSER","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"RESOURCE_SETTER","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ROUTER_BRIDGE_ADDRESS","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ROUTER_BRIDGE_ADDRESS_BYTES","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ROUTER_CHAIN_ID","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ROUTER_CHAIN_ID_BYTES","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_contractToLP","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"_executionRevertCompleted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_lpToContract","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_tokenWhitelist","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"depositNonce","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dexSpan","outputs":[{"internalType":"contract IDexSpan","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"executeRecord","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"gateway","outputs":[{"internalType":"contract IGateway","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"requestSender","type":"string"},{"internalType":"bytes","name":"packet","type":"bytes"},{"internalType":"string","name":"srcChainId","type":"string"}],"name":"iReceive","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"feePayer","type":"string"}],"name":"setDappMetadata","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_dexSpan","type":"address"}],"name":"setDexSpanAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_tokens","type":"address[]"},{"internalType":"address[]","name":"_lptokens","type":"address[]"}],"name":"setLiquidityPoolMulti","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_tokens","type":"address[]"},{"internalType":"uint256[]","name":"types","type":"uint256[]"}],"name":"setWhiteListTokenMulti","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"bool","name":"isSourceNative","type":"bool"},{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"bytes32","name":"destChainIdBytes","type":"bytes32"},{"internalType":"address[]","name":"tokens","type":"address[]"},{"internalType":"uint256[]","name":"flags","type":"uint256[]"},{"internalType":"bytes[]","name":"dataTx","type":"bytes[]"},{"internalType":"uint256","name":"srcTokenAmount","type":"uint256"},{"internalType":"uint256","name":"minToAmount","type":"uint256"},{"internalType":"bytes","name":"recipient","type":"bytes"},{"internalType":"uint256","name":"partnerId","type":"uint256"}],"internalType":"struct IAssetBridge.SwapTransferPayload","name":"transferPayload","type":"tuple"}],"name":"swapAndTransferToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"bytes32","name":"destChainIdBytes","type":"bytes32"},{"internalType":"address[]","name":"tokens","type":"address[]"},{"internalType":"uint256[]","name":"flags","type":"uint256[]"},{"internalType":"bytes[]","name":"dataTx","type":"bytes[]"},{"internalType":"uint256","name":"srcTokenAmount","type":"uint256"},{"internalType":"uint256","name":"minToAmount","type":"uint256"},{"internalType":"bytes","name":"recipient","type":"bytes"},{"internalType":"uint256","name":"partnerId","type":"uint256"}],"internalType":"struct IAssetBridge.SwapTransferPayload","name":"transferPayload","type":"tuple"},{"internalType":"uint64","name":"destGasLimit","type":"uint64"},{"internalType":"bytes","name":"instruction","type":"bytes"}],"name":"swapAndTransferTokenWithInstruction","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"bytes32","name":"destChainIdBytes","type":"bytes32"},{"internalType":"address","name":"srcTokenAddress","type":"address"},{"internalType":"uint256","name":"srcTokenAmount","type":"uint256"},{"internalType":"bytes","name":"recipient","type":"bytes"},{"internalType":"uint256","name":"partnerId","type":"uint256"}],"internalType":"struct IAssetBridge.TransferPayload","name":"transferPayload","type":"tuple"}],"name":"transferToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"bytes32","name":"destChainIdBytes","type":"bytes32"},{"internalType":"address","name":"srcTokenAddress","type":"address"},{"internalType":"uint256","name":"srcTokenAmount","type":"uint256"},{"internalType":"bytes","name":"recipient","type":"bytes"},{"internalType":"uint256","name":"partnerId","type":"uint256"}],"internalType":"struct IAssetBridge.TransferPayload","name":"transferPayload","type":"tuple"},{"internalType":"uint64","name":"destGasLimit","type":"uint64"},{"internalType":"bytes","name":"instruction","type":"bytes"}],"name":"transferTokenWithInstruction","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"bool","name":"isSourceNative","type":"bool"},{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"unstake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address payable","name":"recipient","type":"address"}],"name":"withdrawFunds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"wrappedNative","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]'),As=(e,t)=>e.toLowerCase()==="0x27902308573d4f21b4a98fa7121d04fa7e7bb20e".toLowerCase()&&t.toLowerCase()==="0x9695e0114e12C0d3A3636fAb5A18e6b737529023".toLowerCase()||e.toLowerCase()==="0x9e935866357F52739eCAaA222EB63016E75a4393".toLowerCase()&&t.toLowerCase()==="0x16ECCfDbb4eE1A85A33f3A9B21175Cd7Ae753dB4".toLowerCase()||e.toLowerCase()==="0x6A0fD5577c540e16A3A49C40b51E0880a2a528ce".toLowerCase()&&t.toLowerCase()==="0xC168E40227E4ebD8C1caE80F7a55a4F0e6D66C97".toLowerCase()||e.toLowerCase()==="0x8535C81EEAf82a6e4Bd8D11828Ab8Dc7D07F0313".toLowerCase()&&t.toLowerCase()==="0x16ECCfDbb4eE1A85A33f3A9B21175Cd7Ae753dB4".toLowerCase()||e.toLowerCase()==="0x0967dc6F203aBc2d1FD75c15033d5f6446C14354".toLowerCase()&&t.toLowerCase()==="0x55d398326f99059ff775485246999027b3197955".toLowerCase()||e.toLowerCase()==="0x4A82b73e0f958Cf5DF7Cb374F72cb7871FC35362".toLowerCase()&&t.toLowerCase()==="0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d".toLowerCase()||e.toLowerCase()==="0x3e0E17699deac9661F633E05B815D96A83fbd621".toLowerCase()&&t.toLowerCase()==="0xaf88d065e77c8cC2239327C5EDb3A432268e5831".toLowerCase();var Es=n(6375);var Rs=n(15372),Ms=n.n(Rs),Zs=n(49288),_s=n(57840);const Ls="0x0f3ca0b27903ec13ef88a7ea8be837cc19b0d7f71a735f2083215739a8004464".toLowerCase(),Fs="0x6f223106c8e3df857d691613d18d1478cc7c629a1fdf16c7b461d36729fcc7ad".toLowerCase(),$s="0x21937deaa62558dad619c8d730a7d1d7ef41731fc194c32973511e1455cb37ad".toLowerCase(),Ns="0x3dbc28a2fa93575c89d951d683c45ddb951a2ecf6bc9b9704a61589fa0fcb70f".toLowerCase(),Us=("0x86896302632bf6dc8a3ac0ae7ddf17d5a5d5c1ca1aad37b4b920a587c51135b1".toLowerCase(),"0xb937c701be72296797de30f67fec8bc6c096aa6b4c1850a5e659a0dc17165d8f".toLowerCase()),Ds="0x0a9a968c7c6cc6182a9339c64cb833f1fa34f5a5275c3e3cad13f5db1c6b82a8".toLowerCase(),Os="0x2c661efd5bbbd239384997a4afc5e16ba28d1cfdf0c6fe2318ffee919ac79abf".toLowerCase(),Bs="0x220aec4438bd2c268e817da97e3b821192adc2c11dfea86d51d6ffd8bf38de6e".toLowerCase(),Ws="0x297a8bc8b87367a63661d6429dbab51be5cefd71ce6a3050fa900a8f276d66d9".toLowerCase(),zs="0x58200b4c34ae05ee816d710053fff3fb75af4395915d3d2a771b24aa10e3cc5d".toLowerCase(),Hs="0xc40fae9d5f584875c393ac222c6f88b6c9dced1e9cc6251483648ac2e902c8b0".toLowerCase(),Gs="0xb533c49a97624f1eac09c983a52eb3d79e537b2bbf90d5ad83bcb0a721a9afae".toLowerCase(),Ys=(Fs.toLowerCase(),Ns.toLowerCase(),$s.toLowerCase(),Ls.toLowerCase(),Us.toLowerCase(),Ds.toLowerCase(),Os.toLowerCase(),Bs.toLowerCase(),Ws.toLowerCase(),zs.toLowerCase(),async(e,t)=>{try{const n=(0,ea.UJ)(e);return(await(await n).eth.getTransactionReceipt(t)).logs}catch(n){return console.log("getTxnLogsEvm error ",n),[]}}),Vs=async(e,t)=>{let n=0;if(e===he.n.TRUSTLESS){let e=null,r=null;t.forEach((t=>{t.topics[0]===Fs&&(e=t),t.topics[0]===Ns&&(r=t)})),e?n=parseInt((a=e,{decodedLogs:new(Ms())("").eth.abi.decodeParameters([{name:"partnerId",type:"uint256"},{name:"amount",type:"uint256"},{name:"destChainIdBytes",type:"bytes32"},{name:"destAmount",type:"uint256"},{name:"depositId",type:"uint256"},{name:"srcToken",type:"address"},{name:"depositor",type:"address"},{name:"recipient",type:"bytes"},{name:"destToken",type:"bytes"}],a.data),transactionHash:a.transactionHash,blockNumber:a.blockNumber}).decodedLogs.depositId.toString()):r&&(n=parseInt((e=>({decodedLogs:new(Ms())("").eth.abi.decodeParameters([{name:"partnerId",type:"uint256"},{name:"amount",type:"uint256"},{name:"destChainIdBytes",type:"bytes32"},{name:"destAmount",type:"uint256"},{name:"depositId",type:"uint256"},{name:"srcToken",type:"address"},{name:"recipient",type:"bytes"},{name:"depositor",type:"address"},{name:"destToken",type:"bytes"},{name:"message",type:"bytes"}],e.data),transactionHash:e.transactionHash,blockNumber:e.blockNumber}))(r).decodedLogs.depositId.toString()))}else he.n.MINT_BURN;var a;return n},qs=async(e,t,n,a,r)=>{const i={[he.a_.MAINNET]:"0x0a992d191deec32afe36203ad87d7d289a738f81",[he.a_.AVALANCHE]:"0x8186359af5f57fbb40c6b14a588d2a59c0c29880",[he.a_.OPTIMISM]:"0x4d41f22c5a0e5c74090899e5a8fb597a8842b3e8",[he.a_.ARBITRUM]:"0xC30362313FBBA5cf9163F0bb16a0e01f01A896ca",[he.a_.BASE]:"0xAD09780d193884d503182aD4588450C416D6F9D4",[he.a_.POLYGON]:"0xF3be9355363857F3e001be68856A2f96b4C39Ba9"},s={[he.a_.SEPOLIA]:"0x7865fAfC2db2093669d92c0F33AeEF291086BEFD",[he.a_.FUJI]:"0xa9fb1b3009dcb79e2fe346c16a604b8fa8ae0a79",[he.a_.OPTIMISM]:"0x7865fAfC2db2093669d92c0F33AeEF291086BEFD",[he.a_.ARBITRUM_SEPOLIA]:"0xaCF1ceeF35caAc005e15888dDb8A3515C41B4872",[he.a_.BASE_SEPOLIA]:"0x7865fAfC2db2093669d92c0F33AeEF291086BEFD",[he.a_.MUMBAI]:"0xe09A679F56207EF33F5b9d8fb4499Ec00792eA73"},o=W.NETWORK_ENVIRONMENT===Es.Network.Mainnet?i:(W.NETWORK_ENVIRONMENT.toLowerCase(),Es.Network.Testnet,s),l=(0,ea.UJ)(e.endpoint),d=(await l).utils.toChecksumAddress("0x00051d55999c7cd91B17Af7276cbecD647dBC000"),p=(await l).utils.toChecksumAddress("0x69696280f79F118451F04BFd432bFA588fc25462"),u=(await l).utils.toChecksumAddress("0xcbA625Dc657CB92D85BcD2c6573605e3ea6E61a9"),c=W.NETWORK_ENVIRONMENT===Es.Network.Mainnet?d:W.NETWORK_ENVIRONMENT.toLowerCase()===Es.Network.Testnet?p:u,m=await(await l).eth.getBlockNumber(),y={address:[(await l).utils.toChecksumAddress(e.assetForwarder.toLowerCase())],topics:[Ls],fromBlock:a,toBlock:m},x={address:[(await l).utils.toChecksumAddress(e.assetForwarder.toLowerCase())],topics:[$s],fromBlock:a,toBlock:m},g={address:[(await l).utils.toChecksumAddress(o[e.networkId])],topics:[zs,h.hexZeroPad(c,32).toLowerCase()],fromBlock:a,toBlock:m},f={address:[(await l).utils.toChecksumAddress(e.assetBridge.toLowerCase())],topics:[Os],fromBlock:a,toBlock:m},b={address:[(await l).utils.toChecksumAddress(e.assetBridge.toLowerCase())],topics:[Us],fromBlock:a,toBlock:m};let w=null;if(n===he.n.TRUSTLESS){const n=async()=>{const n=await(await l).eth.getBlockNumber();y.fromBlock=a,y.toBlock=n,x.fromBlock=a,x.toBlock=n,g.fromBlock=a,g.toBlock=n,a=n;const[i,s]=await Promise.all([(await l).eth.getPastLogs(y),(await l).eth.getPastLogs(x),o[e.networkId]?(await l).eth.getPastLogs(g):Promise.resolve([])]),d=async n=>{const a=await Promise.all(n.map((async e=>(await l).eth.getTransaction(e.transactionHash)))),i=[];a.forEach((e=>{i.push(((e,t)=>{const n=e.input,a=n.slice(0,10),r=t.find((e=>"function"===e.type&&new(Ms())("").eth.abi.encodeFunctionSignature(e)===a));if(r)return new(Ms())("").eth.abi.decodeParameters(r.inputs,"0x"+n.slice(10));return console.info("No matching function ABI found."),null})(e,ta))}));let s=null,o=-1,d=null,p=null;if(await Promise.all(i.map((async(e,a)=>{t===(0,P.d3)(e.relayData.srcChainId.toString())&&r===parseInt(e.relayData.depositId.toString())&&(console.log("Dest FOUND",e),s=n[a].transactionHash,o=a)}))),console.log("destTx",s),s){const t=await(async(e,t)=>{const n=(0,ea.UJ)(e.endpoint);let a=!1,r=(new Date).getTime();return new Promise(((e,i)=>{const s=async()=>{if((new Date).getTime()-r>6e4)return clearInterval(o),i(a);try{const r=await(await n).eth.getTransactionReceipt(t);r&&(a=r.status,clearInterval(o),e(r))}catch(s){console.log("getTxRxFinalised error - ",s),clearInterval(o),i(a)}};s();const o=setInterval(s,1e3)}))})(e,s);t.logs.forEach((e=>{e.topics[0].toString().toLowerCase()===Hs.toLowerCase()?d=(e=>({decodedLogs:new(Ms())("").eth.abi.decodeParameters([{name:"tokenPath",type:"address[]"},{name:"amount",type:"uint256"},{name:"finalAmt",type:"uint256"},{name:"flags",type:"uint256[]"},{name:"widgetID",type:"uint256"}],e.data),receiver:"0x"+e.topics[3].substring(26),transactionHash:e.transactionHash,blockNumber:e.blockNumber}))(e):e.topics[0].toString().toLowerCase()===Gs.toLowerCase()&&(p=(e=>({decodedLogs:new(Ms())("").eth.abi.decodeParameters([{name:"ttoken",type:"address"},{name:"ttokenAmount",type:"uint256"},{name:"nativeAmount",type:"uint256"},{name:"recipient",type:"address"}],e.data),transactionHash:e.transactionHash,blockNumber:e.blockNumber}))(e))})),console.log("destTxIndex",o),console.log("decodedTxnData[destTxIndex]",i[o],d,p,d?d.decodedLogs.tokenPath[d.decodedLogs.tokenPath.length-1]:i[o].relayData.destToken.toString());const n=d?d.decodedLogs.tokenPath[d.decodedLogs.tokenPath.length-1]:i[o].relayData.destToken.toString(),a=await async function(e,t){switch(console.log("getTokenInfo",e,t),e.type){case yr.q8:case yr.XQ:return await Ks(e,t);default:return null}}(e,n);console.log("destTokenInfo",a);const r=p&&a?(0,ye.og)(p.decodedLogs.ttokenAmount,a.decimals):t&&a?(0,ye.og)(d?d.decodedLogs.finalAmt:i[o].relayData.amount,a.decimals):(0,ye.og)(i[o].relayData.amount,null===a||void 0===a?void 0:a.decimals),l=p?(0,ye.og)(p.decodedLogs.nativeAmount,he.TP[e.networkId].decimals):"";console.log("dest token amount",r),console.log("native_token_amount",l);const u=p?he.TP[e.networkId].decimals:"";return console.log("native_token_symbol",u),{dest_tx_hash:s,dest_address:n,dest_symbol:null===a||void 0===a?void 0:a.symbol,dest_amount:r,native_token_amount:l,native_token_symbol:u,status:"completed"}}return null};return i.length>0?w=await d(i):s.length>0&&(w=await d(s)),w};let i=0;for(;i<38;){if(w=await n(),w)return w;await(0,P.gw)(1e3),i+=1}return w}if(n===he.n.MINT_BURN){const[e,t]=await Promise.all([(await l).eth.getPastLogs(f),(await l).eth.getPastLogs(b)])}else{""!==o[e.networkId]?await(await l).eth.getPastLogs(g):Promise.resolve([])}return null};async function Ks(e,t){var n;if((null===t||void 0===t?void 0:t.toLowerCase())===(null===(n=he.gk[e.networkId])||void 0===n?void 0:n.toLowerCase()))return he.TP[e.networkId];try{const n=await(0,ea.G$)(e.endpoint),a=new Zs.zt(n,Number(e.networkId)),r=new Zs.CH(t,_s.em),i=await a.all([r.name(),r.symbol(),r.decimals()]);return{name:i[0],symbol:i[1],decimals:i[2]}}catch(a){return console.log("getEvmTokenInfo error ",a),{name:"Unknown",symbol:"Unknown",decimals:"18"}}}var Qs=n(64812),Js=n(76715),Xs=n(22615),eo=n(94245),to=n(27898),no=n(73045);const ao=(0,f.createContext)({});const ro=e=>{let{children:t}=e;const[n,a]=(0,no._)("autoConnect",!0);return(0,A.jsx)(ao.Provider,{value:{autoConnect:n,setAutoConnect:a},children:t})},io=e=>{let{children:t}=e;const{autoConnect:n}=(0,f.useContext)(ao),a=st.t.rpcEndpoint,r=[new to.O];return(0,A.jsx)(Xs.U,{endpoint:a,children:(0,A.jsx)(eo.n,{wallets:r,autoConnect:!0,children:t})})},so=e=>{let{children:t}=e;return(0,A.jsx)(A.Fragment,{children:(0,A.jsx)(ro,{children:(0,A.jsx)(io,{children:t})})})};const oo=n.p+"static/media/WheelOfFortune.98026b7fe397c7e9b47cde18b5e873ac.svg",lo=T.ZP.div`
  font-size: 0.85rem;
  padding: 20px 20px 20px 20px;
  width: 100%;
  border: 1px solid #f2c94c;
  border-radius: 16px;
  // background: black;
  background-image: linear-gradient(
    165deg,
    rgba(255, 192, 0, 0.4),
    rgba(255, 192, 0, 0.2),
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.4)
  );
  //   margin-top: ${e=>{let{isBlinking:t}=e;return t?"0px":"60px"}};
  //   animation: ${e=>{let{isBlinking:t}=e;return t?" blink 3s infinite":""}};
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToMedium`
        // margin-bottom: 100px;
        padding: 20px 9px 20px 9px;
  `}};
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToExtraSmall`
        // margin-bottom: 100px;
        padding: 20px 3px 20px 3px;
        width: 100%;
  `}};
`,po=T.ZP.div`
  display: flex;
  align-items: center;
  justify-content: center;
  // backgroundColor: rgb(243, 191, 43);
  gap: 5px;
  flexwrap: wrap;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToExtraSmall`
       flex-direction: column;
       align-items: center;
  `}};
`,uo=T.ZP.div`
  //   font-size: 0.85rem;
`,co=e=>{let{isSameChainSwap:t,stableTokenAmountCarrot:n,showRewardBanner:a}=e;const[r,i]=(0,f.useState)(!1),[s]=((0,b.k6)(),(0,D._b)()),[o,l]=(0,f.useState)(!1),[d,p]=(0,f.useState)(8);return(0,f.useEffect)((()=>{!async function(){let e=await(0,Vr.fr)({}),{filters:t}=await e.data;for(let n=0;n<t.length;n++){const e=t[n].nft_type.toLowerCase();e.includes("superbunny")?p((e=>Math.min(e,0))):e.includes("bunny")?p((e=>Math.min(e,1.33))):e.includes("richu")?p((e=>Math.min(e,2))):e.includes("rabby")&&p((e=>Math.min(e,4)))}}()}),[o]),(0,A.jsxs)(lo,{isBlinking:!r,className:"slide-in",children:[!r&&(0,A.jsxs)(uo,{children:[(0,A.jsxs)(po,{children:[(0,A.jsx)("img",{src:Js,alt:"pig image",width:"140px"}),(0,A.jsx)("img",{src:oo,alt:"wheel of fortune",width:"300px"})]}),(0,A.jsx)("p",{style:{textAlign:"center",margin:"0px",paddingTop:"15px",paddingBottom:"20px"},children:"Spin now for cashback on transactions or incredible rewards!"})]}),(0,A.jsx)(Ci,{open:o,handleClose:()=>{l(!o)},isAlreadySpinned:r,handleIsAlreadySpinned:()=>{i(!0)},winMultiplier:d})]})};const mo=n.p+"static/media/ZyfiCheckbox.b27e3df78c6d44ccbb70b849665dd93e.svg",ho=e=>{let{fill:t="#F3BF2B"}=e;return(0,A.jsx)("svg",{width:"26",height:"27",viewBox:"0 0 26 27",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,A.jsx)("path",{d:"M18.2306 1.63887C18.5706 0.0856807 20.7821 0.0760123 21.1357 1.62617L21.1524 1.69945C21.1637 1.74941 21.1741 1.79556 21.1855 1.84366C21.5927 3.5784 22.9965 4.90392 24.754 5.20966C26.3739 5.4915 26.3739 7.81707 24.754 8.09891C22.9873 8.40629 21.5777 9.74432 21.179 11.4927L21.1357 11.6824C20.7821 13.2326 18.5706 13.2229 18.2306 11.6697L18.195 11.5069C17.8108 9.75212 16.4032 8.40411 14.6334 8.09622C13.0164 7.81492 13.0164 5.49365 14.6334 5.21235C16.397 4.90552 17.801 3.56581 18.1909 1.81995L18.2172 1.7002L18.2306 1.63887ZM14.2873 10.0854C12.9838 9.85866 12.1219 9.07478 11.7016 8.11124H8.88229C8.2839 8.08574 7.69296 8.2538 7.19729 8.59085C6.69426 8.93292 6.31704 9.4302 6.12321 10.0068L6.12207 10.0102L4.90319 13.6827H2.78767C2.04884 13.6827 1.34029 13.9762 0.81787 14.4986C0.295447 15.021 0.00195312 15.7296 0.00195312 16.4684V20.1828C0.00195312 20.9215 0.295447 21.63 0.81787 22.1524C1.12366 22.4583 1.49323 22.6856 1.89531 22.8216C2.19563 20.5464 4.14273 18.7905 6.49995 18.7905C8.90764 18.7905 10.8874 20.6223 11.1216 22.9685H14.8783C15.1125 20.6223 17.0923 18.7905 19.4999 18.7905C21.8576 18.7905 23.805 20.5471 24.1047 22.8229C24.5083 22.6871 24.8793 22.4592 25.1861 22.1524C25.7085 21.63 26.002 20.9215 26.002 20.1828V16.4684C26.002 15.7296 25.7085 15.021 25.1861 14.4986C24.6637 13.9762 23.955 13.6827 23.2162 13.6827H22.3371C20.6181 15.6704 16.9224 15.1359 16.2582 12.1015L16.2225 11.9387C16.0138 10.9852 15.249 10.2527 14.2873 10.0854ZM6.49998 26.2229C4.96039 26.2229 3.7123 24.9749 3.7123 23.4354C3.7123 21.8956 4.96039 20.6476 6.49998 20.6476C8.03957 20.6476 9.28767 21.8956 9.28767 23.4354C9.28767 24.9749 8.03957 26.2229 6.49998 26.2229ZM19.4999 26.2229C17.9604 26.2229 16.7123 24.9749 16.7123 23.4354C16.7123 21.8956 17.9604 20.6476 19.4999 20.6476C21.0397 20.6476 22.2877 21.8956 22.2877 23.4354C22.2877 24.9749 21.0397 26.2229 19.4999 26.2229Z",fill:t})})},yo=T.ZP.div`
  display: flex;
  width: 100%;
  padding: 0% 0% 2% 0%;
  flex-direction: column;
  font-family: 'Inter', sans-serif;
`,xo=T.ZP.div`
  display: flex;
  background: ${e=>{let{theme:t,backgroundColor:n,disabled:a}=e;return a?"rgba(49, 49, 49, 0.3)":n?n+"90":t.bgGrayDefault}};
  filter: ${e=>{let{theme:t,backgroundColor:n}=e;return n?"contrast(.8)   brightness(1.1) opacity(0.8)":"contrast(1)"}};
  justify-content: space-between;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 2% 4%;
  width: 100%;
  border-radius: 14px;
`,go=T.ZP.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 4px;
`,fo=T.ZP.p`
  display: flex;
  gap: 4px;
  margin: 0px;
  font-size: 14px;
  color: ${e=>{let{theme:t}=e;return t.text1}};
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToMedium`
    font-size:10px;
  `}};
`,bo=T.ZP.p`
  color: ${e=>{let{theme:t}=e;return t.text2}};
  margin: 0px;
  padding: 6px 0px;
  font-size: 12px;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToMedium`
    font-size:8px;
  `}};
`,wo=T.ZP.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 24px;
`,vo=T.ZP.input.attrs({type:"checkbox"})`
  opacity: 0;
  width: 0;
  height: 0;
`,To=T.ZP.span`
  position: absolute;
  cursor: ${e=>{let{disabled:t}=e;return t?"not-allowed":"pointer"}};
  top: 0;
  margin: auto;
  width: 20px;
  height: 20px;
  background-color: ${e=>{let{checked:t,disabled:n}=e;return t?"":n?"rgba(49, 49, 49, 0.3)":"#585863"}};
  border-radius: 3px;
  transition: background-color 0.4s;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    display: ${e=>{let{checked:t}=e;return t?"block":"none"}};
    width: 20px;
    height: 20px;
  }
`,Co=T.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 8px;
  margin-bottom: 0px;
`,So=T.ZP.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`,ko=(0,T.ZP)((e=>{let{className:t,...n}=e;return(0,A.jsx)(Ye.Z,{...n,classes:{popper:t}})}))((e=>{let{theme:t}=e;return{[`& .${Ve.Z.tooltip}`]:{wordSpacing:"nowrap",backgroundColor:`${t.text7}`,color:`${t.text6}`,border:`2px solid ${t.text5}`,fontSize:11,zIndex:100},[`& .${Ve.Z.arrow}`]:{"&::before":{backgroundColor:`${t.text7}`}}}})),Io=e=>{let{setEnableZyfiToggle:t,enableZyfiToggle:n,disableZyfi:a}=e;const[r]=(0,B.JD)(),i=(0,b.TH)();console.log("disableZyfi",a);const s=(0,f.useMemo)((()=>new URLSearchParams(i.search).get("isWidget")),[i]),o=(0,f.useMemo)((()=>{var e;return decodeURIComponent(null!==(e=new URLSearchParams(i.search).get("backgroundColor"))&&void 0!==e?e:"")}),[i]),l=(0,f.useMemo)((()=>{var e;return decodeURIComponent(null!==(e=new URLSearchParams(i.search).get("ctaColor"))&&void 0!==e?e:"")}),[i]);return(0,A.jsx)(yo,{children:(0,A.jsx)(ko,{title:a?"You don't have enough balance to pay fee in source asset":"",placement:"top",disableFocusListener:!0,TransitionComponent:zt.Z,TransitionProps:{timeout:600},arrow:!0,children:(0,A.jsx)(xo,{backgroundColor:"true"===(null===s||void 0===s?void 0:s.toString())?o:"",disabled:a,children:(0,A.jsxs)(go,{children:[(0,A.jsxs)(So,{children:[(0,A.jsx)(ho,{fill:"true"===(null===s||void 0===s?void 0:s.toString())&&l||void 0}),(0,A.jsxs)(Co,{children:[(0,A.jsxs)("div",{style:{display:"flex"},children:[(0,A.jsxs)(fo,{children:["Pay Gas using Source Asset"," ",""!==r?`(${r.symbol})`:""]}),(0,A.jsx)(ko,{title:"Powered by ZyFi",placement:"top",disableFocusListener:!0,TransitionComponent:zt.Z,TransitionProps:{timeout:600},arrow:!0,children:(0,A.jsx)(ds.Z,{style:{color:"#A3A4A4",height:"16px"}})})]}),(0,A.jsx)(bo,{children:"Available only for transactions from ZkSync"})]})]}),(0,A.jsx)(ko,{title:a?"":"Pay gas fee using Source Asset",placement:"top",disableFocusListener:!0,TransitionComponent:zt.Z,TransitionProps:{timeout:600},arrow:!0,children:(0,A.jsxs)(wo,{children:[(0,A.jsx)(vo,{checked:n,onChange:e=>{t(e.target.checked)},disabled:a}),(0,A.jsx)(To,{checked:n,disabled:a,children:(0,A.jsx)("img",{src:mo,alt:"checkmark"})})]})})]})})})})},Po=JSON.parse('{"version":"0.1.0","name":"message_transmitter","instructions":[{"name":"initialize","accounts":[{"name":"payer","isMut":true,"isSigner":true},{"name":"upgradeAuthority","isMut":false,"isSigner":true},{"name":"messageTransmitter","isMut":true,"isSigner":false},{"name":"messageTransmitterProgramData","isMut":false,"isSigner":false},{"name":"messageTransmitterProgram","isMut":false,"isSigner":false},{"name":"systemProgram","isMut":false,"isSigner":false},{"name":"eventAuthority","isMut":false,"isSigner":false},{"name":"program","isMut":false,"isSigner":false}],"args":[{"name":"params","type":{"defined":"InitializeParams"}}]},{"name":"transferOwnership","accounts":[{"name":"owner","isMut":false,"isSigner":true},{"name":"messageTransmitter","isMut":true,"isSigner":false},{"name":"eventAuthority","isMut":false,"isSigner":false},{"name":"program","isMut":false,"isSigner":false}],"args":[{"name":"params","type":{"defined":"TransferOwnershipParams"}}]},{"name":"acceptOwnership","accounts":[{"name":"pendingOwner","isMut":false,"isSigner":true},{"name":"messageTransmitter","isMut":true,"isSigner":false},{"name":"eventAuthority","isMut":false,"isSigner":false},{"name":"program","isMut":false,"isSigner":false}],"args":[{"name":"params","type":{"defined":"AcceptOwnershipParams"}}]},{"name":"updatePauser","accounts":[{"name":"owner","isMut":false,"isSigner":true},{"name":"messageTransmitter","isMut":true,"isSigner":false},{"name":"eventAuthority","isMut":false,"isSigner":false},{"name":"program","isMut":false,"isSigner":false}],"args":[{"name":"params","type":{"defined":"UpdatePauserParams"}}]},{"name":"updateAttesterManager","accounts":[{"name":"owner","isMut":false,"isSigner":true},{"name":"messageTransmitter","isMut":true,"isSigner":false},{"name":"eventAuthority","isMut":false,"isSigner":false},{"name":"program","isMut":false,"isSigner":false}],"args":[{"name":"params","type":{"defined":"UpdateAttesterManagerParams"}}]},{"name":"pause","accounts":[{"name":"pauser","isMut":false,"isSigner":true},{"name":"messageTransmitter","isMut":true,"isSigner":false},{"name":"eventAuthority","isMut":false,"isSigner":false},{"name":"program","isMut":false,"isSigner":false}],"args":[{"name":"params","type":{"defined":"PauseParams"}}]},{"name":"unpause","accounts":[{"name":"pauser","isMut":false,"isSigner":true},{"name":"messageTransmitter","isMut":true,"isSigner":false},{"name":"eventAuthority","isMut":false,"isSigner":false},{"name":"program","isMut":false,"isSigner":false}],"args":[{"name":"params","type":{"defined":"UnpauseParams"}}]},{"name":"setMaxMessageBodySize","accounts":[{"name":"owner","isMut":false,"isSigner":true},{"name":"messageTransmitter","isMut":true,"isSigner":false},{"name":"eventAuthority","isMut":false,"isSigner":false},{"name":"program","isMut":false,"isSigner":false}],"args":[{"name":"params","type":{"defined":"SetMaxMessageBodySizeParams"}}]},{"name":"enableAttester","accounts":[{"name":"payer","isMut":true,"isSigner":true},{"name":"attesterManager","isMut":false,"isSigner":true},{"name":"messageTransmitter","isMut":true,"isSigner":false},{"name":"systemProgram","isMut":false,"isSigner":false},{"name":"eventAuthority","isMut":false,"isSigner":false},{"name":"program","isMut":false,"isSigner":false}],"args":[{"name":"params","type":{"defined":"EnableAttesterParams"}}]},{"name":"disableAttester","accounts":[{"name":"payer","isMut":true,"isSigner":true},{"name":"attesterManager","isMut":false,"isSigner":true},{"name":"messageTransmitter","isMut":true,"isSigner":false},{"name":"systemProgram","isMut":false,"isSigner":false},{"name":"eventAuthority","isMut":false,"isSigner":false},{"name":"program","isMut":false,"isSigner":false}],"args":[{"name":"params","type":{"defined":"DisableAttesterParams"}}]},{"name":"setSignatureThreshold","accounts":[{"name":"attesterManager","isMut":false,"isSigner":true},{"name":"messageTransmitter","isMut":true,"isSigner":false},{"name":"eventAuthority","isMut":false,"isSigner":false},{"name":"program","isMut":false,"isSigner":false}],"args":[{"name":"params","type":{"defined":"SetSignatureThresholdParams"}}]},{"name":"sendMessage","accounts":[{"name":"eventRentPayer","isMut":true,"isSigner":true},{"name":"senderAuthorityPda","isMut":false,"isSigner":true},{"name":"messageTransmitter","isMut":true,"isSigner":false},{"name":"messageSentEventData","isMut":true,"isSigner":true},{"name":"senderProgram","isMut":false,"isSigner":false},{"name":"systemProgram","isMut":false,"isSigner":false}],"args":[{"name":"params","type":{"defined":"SendMessageParams"}}],"returns":"u64"},{"name":"sendMessageWithCaller","accounts":[{"name":"eventRentPayer","isMut":true,"isSigner":true},{"name":"senderAuthorityPda","isMut":false,"isSigner":true},{"name":"messageTransmitter","isMut":true,"isSigner":false},{"name":"messageSentEventData","isMut":true,"isSigner":true},{"name":"senderProgram","isMut":false,"isSigner":false},{"name":"systemProgram","isMut":false,"isSigner":false}],"args":[{"name":"params","type":{"defined":"SendMessageWithCallerParams"}}],"returns":"u64"},{"name":"replaceMessage","accounts":[{"name":"eventRentPayer","isMut":true,"isSigner":true},{"name":"senderAuthorityPda","isMut":false,"isSigner":true},{"name":"messageTransmitter","isMut":true,"isSigner":false},{"name":"messageSentEventData","isMut":true,"isSigner":true},{"name":"senderProgram","isMut":false,"isSigner":false},{"name":"systemProgram","isMut":false,"isSigner":false}],"args":[{"name":"params","type":{"defined":"ReplaceMessageParams"}}],"returns":"u64"},{"name":"receiveMessage","accounts":[{"name":"payer","isMut":true,"isSigner":true},{"name":"caller","isMut":false,"isSigner":true},{"name":"authorityPda","isMut":false,"isSigner":false},{"name":"messageTransmitter","isMut":false,"isSigner":false},{"name":"usedNonces","isMut":true,"isSigner":false},{"name":"receiver","isMut":false,"isSigner":false},{"name":"systemProgram","isMut":false,"isSigner":false},{"name":"eventAuthority","isMut":false,"isSigner":false},{"name":"program","isMut":false,"isSigner":false}],"args":[{"name":"params","type":{"defined":"ReceiveMessageParams"}}]},{"name":"reclaimEventAccount","accounts":[{"name":"payee","isMut":true,"isSigner":true,"docs":["rent SOL receiver, should match original rent payer"]},{"name":"messageTransmitter","isMut":true,"isSigner":false},{"name":"messageSentEventData","isMut":true,"isSigner":false}],"args":[{"name":"params","type":{"defined":"ReclaimEventAccountParams"}}]},{"name":"getNoncePda","accounts":[{"name":"messageTransmitter","isMut":false,"isSigner":false}],"args":[{"name":"params","type":{"defined":"GetNoncePDAParams"}}],"returns":"publicKey"},{"name":"isNonceUsed","accounts":[{"name":"usedNonces","isMut":false,"isSigner":false,"docs":["Account will be explicitly loaded to avoid error when it\'s not initialized"]}],"args":[{"name":"params","type":{"defined":"IsNonceUsedParams"}}],"returns":"bool"}],"accounts":[{"name":"MessageSent","type":{"kind":"struct","fields":[{"name":"rentPayer","type":"publicKey"},{"name":"message","type":"bytes"}]}},{"name":"MessageTransmitter","docs":["Main state of the MessageTransmitter program"],"type":{"kind":"struct","fields":[{"name":"owner","type":"publicKey"},{"name":"pendingOwner","type":"publicKey"},{"name":"attesterManager","type":"publicKey"},{"name":"pauser","type":"publicKey"},{"name":"paused","type":"bool"},{"name":"localDomain","type":"u32"},{"name":"version","type":"u32"},{"name":"signatureThreshold","type":"u32"},{"name":"enabledAttesters","type":{"vec":"publicKey"}},{"name":"maxMessageBodySize","type":"u64"},{"name":"nextAvailableNonce","type":"u64"}]}},{"name":"UsedNonces","docs":["UsedNonces account holds an array of bits that indicate which nonces were already used","so they can\'t be resused to receive new messages. Array starts with the first_nonce and","holds flags for UsedNonces::MAX_NONCES. Nonces are recorded separately for each remote_domain."],"type":{"kind":"struct","fields":[{"name":"remoteDomain","type":"u32"},{"name":"firstNonce","type":"u64"},{"name":"usedNonces","type":{"array":["u64",100]}}]}}],"types":[{"name":"AcceptOwnershipParams","type":{"kind":"struct","fields":[]}},{"name":"DisableAttesterParams","type":{"kind":"struct","fields":[{"name":"attester","type":"publicKey"}]}},{"name":"EnableAttesterParams","type":{"kind":"struct","fields":[{"name":"newAttester","type":"publicKey"}]}},{"name":"GetNoncePDAParams","type":{"kind":"struct","fields":[{"name":"nonce","type":"u64"},{"name":"sourceDomain","type":"u32"}]}},{"name":"InitializeParams","type":{"kind":"struct","fields":[{"name":"localDomain","type":"u32"},{"name":"attester","type":"publicKey"},{"name":"maxMessageBodySize","type":"u64"},{"name":"version","type":"u32"}]}},{"name":"IsNonceUsedParams","type":{"kind":"struct","fields":[{"name":"nonce","type":"u64"}]}},{"name":"PauseParams","type":{"kind":"struct","fields":[]}},{"name":"ReceiveMessageParams","type":{"kind":"struct","fields":[{"name":"message","type":"bytes"},{"name":"attestation","type":"bytes"}]}},{"name":"HandleReceiveMessageParams","type":{"kind":"struct","fields":[{"name":"remoteDomain","type":"u32"},{"name":"sender","type":"publicKey"},{"name":"messageBody","type":"bytes"},{"name":"authorityBump","type":"u8"}]}},{"name":"ReclaimEventAccountParams","type":{"kind":"struct","fields":[{"name":"attestation","type":"bytes"}]}},{"name":"ReplaceMessageParams","type":{"kind":"struct","fields":[{"name":"originalMessage","type":"bytes"},{"name":"originalAttestation","type":"bytes"},{"name":"newMessageBody","type":"bytes"},{"name":"newDestinationCaller","type":"publicKey"}]}},{"name":"SendMessageWithCallerParams","type":{"kind":"struct","fields":[{"name":"destinationDomain","type":"u32"},{"name":"recipient","type":"publicKey"},{"name":"messageBody","type":"bytes"},{"name":"destinationCaller","type":"publicKey"}]}},{"name":"SendMessageParams","type":{"kind":"struct","fields":[{"name":"destinationDomain","type":"u32"},{"name":"recipient","type":"publicKey"},{"name":"messageBody","type":"bytes"}]}},{"name":"SetMaxMessageBodySizeParams","type":{"kind":"struct","fields":[{"name":"newMaxMessageBodySize","type":"u64"}]}},{"name":"SetSignatureThresholdParams","type":{"kind":"struct","fields":[{"name":"newSignatureThreshold","type":"u32"}]}},{"name":"TransferOwnershipParams","type":{"kind":"struct","fields":[{"name":"newOwner","type":"publicKey"}]}},{"name":"UnpauseParams","type":{"kind":"struct","fields":[]}},{"name":"UpdateAttesterManagerParams","type":{"kind":"struct","fields":[{"name":"newAttesterManager","type":"publicKey"}]}},{"name":"UpdatePauserParams","type":{"kind":"struct","fields":[{"name":"newPauser","type":"publicKey"}]}},{"name":"MathError","type":{"kind":"enum","variants":[{"name":"MathOverflow"},{"name":"MathUnderflow"},{"name":"ErrorInDivision"}]}}],"events":[{"name":"OwnershipTransferStarted","fields":[{"name":"previousOwner","type":"publicKey","index":false},{"name":"newOwner","type":"publicKey","index":false}]},{"name":"OwnershipTransferred","fields":[{"name":"previousOwner","type":"publicKey","index":false},{"name":"newOwner","type":"publicKey","index":false}]},{"name":"PauserChanged","fields":[{"name":"newAddress","type":"publicKey","index":false}]},{"name":"AttesterManagerUpdated","fields":[{"name":"previousAttesterManager","type":"publicKey","index":false},{"name":"newAttesterManager","type":"publicKey","index":false}]},{"name":"MessageReceived","fields":[{"name":"caller","type":"publicKey","index":false},{"name":"sourceDomain","type":"u32","index":false},{"name":"nonce","type":"u64","index":false},{"name":"sender","type":"publicKey","index":false},{"name":"messageBody","type":"bytes","index":false}]},{"name":"SignatureThresholdUpdated","fields":[{"name":"oldSignatureThreshold","type":"u32","index":false},{"name":"newSignatureThreshold","type":"u32","index":false}]},{"name":"AttesterEnabled","fields":[{"name":"attester","type":"publicKey","index":false}]},{"name":"AttesterDisabled","fields":[{"name":"attester","type":"publicKey","index":false}]},{"name":"MaxMessageBodySizeUpdated","fields":[{"name":"newMaxMessageBodySize","type":"u64","index":false}]},{"name":"Pause","fields":[]},{"name":"Unpause","fields":[]}],"errors":[{"code":6000,"name":"InvalidAuthority","msg":"Invalid authority"},{"code":6001,"name":"ProgramPaused","msg":"Instruction is not allowed at this time"},{"code":6002,"name":"InvalidMessageTransmitterState","msg":"Invalid message transmitter state"},{"code":6003,"name":"InvalidSignatureThreshold","msg":"Invalid signature threshold"},{"code":6004,"name":"SignatureThresholdAlreadySet","msg":"Signature threshold already set"},{"code":6005,"name":"InvalidOwner","msg":"Invalid owner"},{"code":6006,"name":"InvalidPauser","msg":"Invalid pauser"},{"code":6007,"name":"InvalidAttesterManager","msg":"Invalid attester manager"},{"code":6008,"name":"InvalidAttester","msg":"Invalid attester"},{"code":6009,"name":"AttesterAlreadyEnabled","msg":"Attester already enabled"},{"code":6010,"name":"TooFewEnabledAttesters","msg":"Too few enabled attesters"},{"code":6011,"name":"SignatureThresholdTooLow","msg":"Signature threshold is too low"},{"code":6012,"name":"AttesterAlreadyDisabled","msg":"Attester already disabled"},{"code":6013,"name":"MessageBodyLimitExceeded","msg":"Message body exceeds max size"},{"code":6014,"name":"InvalidDestinationCaller","msg":"Invalid destination caller"},{"code":6015,"name":"InvalidRecipient","msg":"Invalid message recipient"},{"code":6016,"name":"SenderNotPermitted","msg":"Sender is not permitted"},{"code":6017,"name":"InvalidSourceDomain","msg":"Invalid source domain"},{"code":6018,"name":"InvalidDestinationDomain","msg":"Invalid destination domain"},{"code":6019,"name":"InvalidMessageVersion","msg":"Invalid message version"},{"code":6020,"name":"InvalidUsedNoncesAccount","msg":"Invalid used nonces account"},{"code":6021,"name":"InvalidRecipientProgram","msg":"Invalid recipient program"},{"code":6022,"name":"InvalidNonce","msg":"Invalid nonce"},{"code":6023,"name":"NonceAlreadyUsed","msg":"Nonce already used"},{"code":6024,"name":"MessageTooShort","msg":"Message is too short"},{"code":6025,"name":"MalformedMessage","msg":"Malformed message"},{"code":6026,"name":"InvalidSignatureOrderOrDupe","msg":"Invalid signature order or dupe"},{"code":6027,"name":"InvalidAttesterSignature","msg":"Invalid attester signature"},{"code":6028,"name":"InvalidAttestationLength","msg":"Invalid attestation length"},{"code":6029,"name":"InvalidSignatureRecoveryId","msg":"Invalid signature recovery ID"},{"code":6030,"name":"InvalidSignatureSValue","msg":"Invalid signature S value"},{"code":6031,"name":"InvalidMessageHash","msg":"Invalid message hash"}]}');var jo=n(48398),Ao=n(40918).Buffer;var Eo=n(32931),Ro=n(58707);const Mo="false",Zo=(T.ZP.img`
  position: absolute;
  bottom: 0;
  left: 0;
  max-width: 20rem;
  max-height: 80vh;
  width: clamp(10vw, 20vw, max-content);
`,T.ZP.div`
  display: grid;
  height: 100%;
  justify-items: center;
  background: ${e=>{let{backgroundColor:t}=e;return t||"none"}};
`),_o=T.ZP.div`
  font-family: "Inter", sans-serif;
  color: ${e=>{let{theme:t}=e;return t.text1}};
  display: grid;
  place-items: center;
  width: 100%;
`,Lo=T.ZP.div`
  display: flex;
  align-items: center;
  width: clamp(${358}px, 100%, ${951}px);
  justify-content: flex-start;
  position: relative;
  gap: 10px;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToMedium`
			width: clamp(200px,100%,500px)
  	`}};
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
			width: clamp(200px,100%,350px)
  	`}};
`,Fo=T.ZP.div`
  font-weight: 500;
  font-size: 24px;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
			font-size: 14px;
			// margin-bottom: 5px;
  	`}};
`,$o=T.ZP.div`
  display: flex;
  pointer-events: ${e=>{let{isUnderMaintenance:t}=e;return"true"===t&&"none !important"}};
  opacity: ${e=>{let{isUnderMaintenance:t}=e;return"true"===t?"0.4":"1.0"}};

  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  margin-top: 20px;
  margin-bottom: ${e=>{let{widget:t}=e;return t?"50px":"10px"}};
  font-family: "Inter", sans-serif;
  border-radius: 24px;
  position: relative;

  width: ${e=>{let{display:t}=e;return"horizontal"===t?"98%":"55ch"}};
  flex-direction: ${e=>{let{display:t}=e;return"horizontal"===t?"row":"column"}};
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToMedium`
    
     width: ${e=>{let{display:t,widget:n}=e;return n?"horizontal"===t?"98%":"480px":"450px"}};                             
		margin-top: 25px;
		padding: 10px 0;
  `}};
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
  margin-top: 25px;
    width: ${e=>{let{display:t,widget:n}=e;return n&&"horizontal"===t?"98%":"94%"}}; 
  	`}};
  transition: all 0.2s ease-in-out;
`,No=T.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToMedium`
		justify-content: center;
  	`}};
`,Uo=T.ZP.div`
  display: flex;
  gap: 0.375rem;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,Do=(0,T.ZP)(s.Z)`
  &&& {
    color: ${e=>{let{theme:t,textColor:n}=e;return n||t.text1}} !important;

    height: 3rem;
    width: 3rem;
    padding: 0.5rem;
    margin-top: -0.25rem;
    margin-bottom: -0.875rem;

    border: 0.5rem solid
      ${e=>{let{theme:t,bgColor:n}=e;return n||t.appBgBase}};
    border-radius: 1.25rem;

    font-size: 1.25rem;
    cursor: pointer;
    background-color: ${e=>{let{theme:t,ctaColor:n}=e;return n||t.bgGrayDefault}};

    transform: ${e=>{let{display:t}=e;return"horizontal"===t?"rotate(-90deg)":"rotate(0deg) translateY(-53%)"}};
    z-index: 4;
    transition: all 0.2s ease-in-out;
  }
`,Oo=T.ZP.div`
  margin-bottom: 20px;
  margin-right: 20px;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToMedium`
		transform: translateY(0px);
		margin-top: 40px;
		margin-bottom: 20px;
		margin-right: 0px;
  	`}};
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
		display: none;
  	`}};
`,Bo=((0,T.ZP)(Oo)`
  display: none;
  width: 326px;
  height: 133px;
  margin: 20px 0;
  border-radius: 10px;
  background: #00000040;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
		display: inline-block;
  	`}};
`,T.ZP.div`
  width: 100%;
  color: ${e=>{let{theme:t}=e;return t.gray4}};
  border-radius: 15px;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 200;
  display: flex;
  align-items: center;
  padding: 15px 0;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
		display:grid;
		place-items: center;
		font-size: 14px;
		font-style: normal;
		font-weight: 400;
		line-height: 21px;
		letter-spacing: 0em;
		color: #585863;
		text-align: center;
  	`}};
`,T.ZP.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 20px;
`),Wo=T.ZP.div`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: ${e=>{let{isWidget:t}=e;return t?"0px":"100px"}};
  // margin-bottom: 100px;
  margin-top: 40px;
  max-width: ${e=>{let{display:t,isWidget:n}=e;return n?"horizontal"===t?"100%":"55ch":"100%"}};

  // place-items: center;
  gap: 20px;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToMedium`
		align-items: start;
    width: 100%;
  	`}};
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToMedium`

    margin-top: 0px;
  	`}};
`,zo=T.ZP.div`
  background: black;
  max-width: 600px;
  z-index: 1;
  margin-top: 20px;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToMedium`
    margin-top: 30px;
  `}};
  // margin-top: 80px;
  // width: 500px;
  // height: 100px;
`,Ho=T.ZP.div`
  position: absolute;
  right: 0;
  transform: translate(0, 65px);
  opacity: ${e=>{let{active:t}=e;return t?1:0}};
  transition: all 0.4s ease-in-out;
  z-index: 10;
`,Go=T.ZP.div`
  opacity: ${e=>{let{active:t}=e;return t?1:0}};
  width: 100%;
  margin: 10px 0%;
  border-radius: 8px;
  background: #0c0c0f;
  transition: all 0.2s ease-in-out;
  // transform: translateY(-1px);
  /* &:hover ~ ${Ho} {
    	opacity: 1;
  	} */
  // ${e=>{let{theme:t}=e;return t.mediaWidth.upToMedium`
	// 	transform: translateY(20px);
  // 	`}};
  // ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
	// 	transform: translateY(-20px);
	// 	margin-top: 45px;
  // 	`}};
`,Yo=T.ZP.div`
  display: flex;
  flex-direction: column;

  width: ${e=>{let{display:t}=e;return t&&"horizontal"===t?"55ch":"100%"}};

  transition: all 0.2s ease-in-out;
`,Vo=((0,T.ZP)(Yo)`
  display: none;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
		display: inline-flex;
		margin-bottom: 5px;
    padding:0 10px;
		margin-top: 10px;

  	`}};
`,T.ZP.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2px 0;
`,T.ZP.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: ${e=>{let{isWidget:t}=e;return t?"3% 4% 0% 4%":""}};
  color: ${e=>{let{theme:t}=e;return t.text7}};
`),qo=(T.ZP.a`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  width: 85%;
  background: #f2bf3b30;
  border-radius: 12px;
  padding: 10px;
  text-decoration: none;
  color: #f2bf3b;
`,T.ZP.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  color: ${e=>{let{theme:t}=e;return t.text2}};
`),Ko=T.ZP.div`
  position: absolute;
  left: 37%;
  top: 170%;
  opacity: 0;
  transition: all 0.4s ease-in-out;
`,Qo=(T.ZP.div`
  display: grid;
  place-items: center;
  width: 120px;
  font-family: "Inter", sans-serif;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
  color: ${e=>{let{theme:t}=e;return t.text1}};
`,T.ZP.img`
  margin-left: 7px;
  &:hover ~ ${Ko} {
    opacity: 1;
  }
`,(0,T.ZP)(Bo)`
  margin: 0;
  color: ${e=>{let{theme:t,severity:n}=e;return 3===n||4===n||2===n?t.yellow2:1===n?t.gray4:t.green2}};
`,T.ZP.div`
  position: absolute;
  z-index: 5;
  right: 20px;
  top: 50px;
`),Jo=T.ZP.div`
  display: grid;
  place-items: center;
  padding: 0.5rem;
  background-color: ${e=>{let{theme:t}=e;return t.bgGrayDefault}};
  font-size: 0.75rem;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 1rem;
  // z-index: 5;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`,Xo=(T.ZP.div`
  display: none;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background-color: ${e=>{let{theme:t}=e;return t.bgGrayDefault}};
  font-size: 0.75rem;
  // width: 2.75rem;
  height: 2.75rem;
  border-radius: 1rem;
  gap: 6px;
  // z-index: 5;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
        display: flex;
  `}};
`,T.ZP.img`
  height: 25px;
`,T.ZP.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  gap: 6px;
  padding: 0.75rem;
  background-color: ${e=>{let{theme:t}=e;return t.bgGrayDefault}};
  animation: ${e=>{let{isBlinking:t}=e;return t?" blink 3s infinite":""}};
  border-radius: 1rem;
  z-index: 5;
  cursor: pointer;
`),el=(0,T.ZP)(l.Z)`
  &&& {
    height: 1.25rem;
    color: ${e=>{let{theme:t}=e;return t.text2}};
  }
`,tl=(0,T.ZP)(o.Z)`
  &&& {
    height: 1.25rem;
    color: ${e=>{let{theme:t}=e;return t.text2}};
  }
`,nl=(0,T.ZP)(d.Z)`
  &&& {
    height: 1.25rem;
    fill: ${e=>{let{theme:t,isBlinking:n}=e;return n?t.yellow2:t.text2}};
  }
`,al=(T.ZP.a`
  display: flex;
  align-items: center;
  margin-top: 5rem;
  text-decoration: none;

  color: white;
`,T.ZP.div``,T.ZP.div`
  font-family: Inter, sans-serif;
  position: absolute;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
      margin-top: 0px;
      // right: 0px;
      margin-left: -80px;
    `}};
  top: 47px;
  margin-left: -60px;
  z-index: 10;
  width: 220px;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  background-color: ${e=>{let{theme:t}=e;return t.bgGrayDefault}};
  padding: 12px 16px;
  // border: 1px solid ${e=>{let{theme:t}=e;return t.text3}};
  // border: 2px
  //   ${e=>{let{theme:t,showProTipContent:n}=e;return n&&t.text7}};
  border-radius: 12px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`,T.ZP.h3`
  font-size: 13px;
  color: ${e=>{let{theme:t}=e;return t.text1}};
  white-space: no-wrap;
  margin: 0;
  font-family: Inter, sans-serif;
`,T.ZP.p`
  font-family: Inter, sans-serif;
  font-size: 12px;
  color: ${e=>{let{theme:t}=e;return t.text1}};
  margin: 0;
`,T.ZP.div``),rl=T.ZP.div`
  color: #1e1e1e;
  font-size: 18px;
  font-weight: 800;
  font-family: "Inter", sans-serif;
`,il=T.ZP.p`
  font-size: 12px;
  font-weight: 500;
  font-family: "Inter", sans-serif;
  color: #313131;
`,sl=T.ZP.button`
  &&& {
    font-family: "Inter", sans-serif;
    width: 100%;
    padding: 0.8rem;
    border:none;
    border-radius: 14px;
    backdrop-filter: brightness(0);
    background-color: ${e=>{let{theme:t}=e;return t.text3}};
    cursor: pointer;
  };
    font-weight: 500;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    place-items: center;
    gap: 10px;
    color: ${e=>{let{theme:t}=e;return t.text5}};
    transition: all 0.2s ease-in-out;
    :active {
      outline: none;
      border: none;
    }
    :focus {
      outline: none;
      border: none;
    }

    ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
		width: 100%;
		height: 40px;
		border-radius: 12px;
		// border: 1px solid ${e=>{let{theme:t}=e;return t.gray2}}80;
		filter: none;
		font-family: 'Inter', sans-serif;
		font-size: 16px;
		font-weight: 400;
		text-align: center;
  	`}};
  }
`,ol=()=>{const[e,t]=(0,B.nm)(),{isSlotShow:n,isCarrot:s}=(0,ue.CG)((e=>e.showComponent)),[o,l]=(0,f.useState)(!1),[d,p]=(0,f.useState)(!1),[x,T]=(0,f.useState)(!1),[k,j]=(0,f.useState)(!1),[E,R]=(0,f.useState)(!1),[Z,_]=(0,f.useState)(!1),[L,F]=(0,B.Rl)(),[$,N]=(0,D._X)(),[O]=(0,D._b)(),[H]=(0,Jn.G)(),[G]=(0,D.tX)(),[Y,V]=(0,B.JD)(),[q,K]=(0,B.H)(),[Q,J]=(0,B.FZ)(),[X,ee]=(0,B.Gm)(),[te,ne]=(0,B.EZ)(),[ae,re]=(0,B.kL)(),[ie,se]=(0,B.fC)(),[oe,le]=(0,B.TZ)(),[de,xe]=(0,B.Z_)(),[ge,fe]=(0,f.useState)(null),[be,we]=(0,f.useState)(null),[ve,Te]=(0,B.lg)(),[Ce,Se]=(0,B.Tt)(),[ke,Ie]=(0,f.useState)("-"),[Pe,je]=(0,f.useState)("-"),[Ae,Re]=(0,f.useState)(!1),[Me,Ze]=(0,f.useState)(!0),[_e,Le]=(0,f.useState)(!1),[Fe,$e]=(0,f.useState)(!1),[Ne,Ue]=(0,f.useState)("Connect Your Wallet"),[,De]=(0,D.YP)(),[Oe,Be]=function(){const e=(0,ue.CG)(ce.A_),t=(0,ue.TL)();return[e,(0,f.useCallback)((e=>t((0,ce.VL)(e))),[e,t])]}(),[We,He]=(0,f.useState)(),[Ge,Ye]=(0,f.useState)(),[Ve,qe]=(0,f.useState)([]),[Ke,Qe]=(0,f.useState)([]),[Xe,et]=(0,f.useState)(""),[tt,nt]=(0,B.ST)(),[rt,it]=(0,f.useState)(""),[lt,dt]=(0,f.useState)(!1),[pt,ut]=(0,B.h0)(),[ct,mt]=(0,f.useState)("-"),[ht,yt]=(0,f.useState)("-"),[xt,gt]=(0,f.useState)("-"),[ft,bt]=(0,f.useState)("-"),[wt,vt]=(0,f.useState)("-"),[Tt,Ct]=(0,f.useState)("-"),[St,kt]=(0,f.useState)("-"),[It,Pt]=(0,f.useState)("-"),[jt,At]=(0,f.useState)(!1),[Et,Rt]=(0,f.useState)(!1),[Mt,Zt]=(0,f.useState)(""),[_t,Lt]=(0,f.useState)(""),[Ft,$t]=me(),[Nt,Ut]=(0,f.useState)({}),[Dt,Ot]=(0,f.useState)({}),[Wt,zt]=(0,B.o8)(),Ht=(0,a.Z)(`(max-width: ${I.e.upToSmall}px)`),[Gt,Yt]=(0,f.useState)(!1),[Vt,qt]=(0,f.useState)(X),[Kt,Qt]=(0,f.useState)(!1),[Jt,Xt]=(0,f.useState)(!1),[en,tn]=(0,B.pZ)(),[nn]=(0,B.v0)(),[sn,on]=(0,f.useState)(!1),[ln,dn]=(0,f.useState)(!1),[pn,un]=(0,f.useState)("0"),[cn,mn]=(0,f.useState)(!1),[yn,xn]=(0,f.useState)(!1),[gn,wn]=(0,f.useState)(!1),[vn,Tn]=(0,f.useState)(!1),[Cn,Sn]=(0,f.useState)(""),[kn,jn]=(0,f.useState)([]),[An,En]=(0,f.useState)(null),[Mn,Zn]=(0,f.useState)(""),[_n,Ln]=(0,f.useState)("Continue"),[Fn,$n]=(0,f.useState)(!0),[Nn,Un]=(0,f.useState)(he.n.TRUSTLESS.toString()),[Dn,On]=(0,f.useState)(null),[Bn,Wn]=(0,f.useState)({source:[],destination:[]}),[zn,Hn]=(0,f.useState)([]),[Gn,Yn]=(0,f.useState)(""),[Vn,qn]=(0,f.useState)(""),[Kn,Qn]=(0,f.useState)({address:"",symbol:"",amount:"",refuel_Amount:"",refuel_Symbol:""}),[ta,aa]=(0,f.useState)(!1),[ra,ia]=(0,f.useState)(!1),[sa,oa]=(0,f.useState)("0"),[la,da]=(0,f.useState)(!1),[pa,ua]=(0,f.useState)(),[ca,ma]=(0,f.useState)(),[ha,ya]=(0,f.useState)(!1),[xa,ga]=(0,f.useState)(!1),[fa,ba]=(0,f.useState)(""),wa=new Date;wa.setSeconds(wa.getSeconds()+120);const{totalSeconds:va,seconds:Ta,minutes:Ca,isRunning:Sa,start:ka,pause:Ia,resume:Pa,restart:ja}=(0,w.useTimer)({expiryTimestamp:wa,autoStart:!1,onExpire:()=>$a()}),{totalSeconds:Aa,seconds:Ea,minutes:Ra,hours:Ma,days:Za,isRunning:_a,start:La,pause:Fa,reset:$a}=(0,w.useStopwatch)(),[Na,Ua]=(0,f.useState)(!1),[Da,Oa]=(0,f.useState)(!0),[Ba,Wa]=(0,f.useState)(""),[za,Ha]=(0,f.useState)(!1),[Ya,Va]=(0,f.useState)(!1),{handleDisconnect:qa}=(0,dr.r)(),Ka=(0,b.TH)(),[Qa,Ja]=(0,f.useState)(Ka.search),[,Xa]=(0,Ps.f)(),[er,nr]=(0,f.useState)(!1);(0,f.useEffect)((()=>{localStorage.getItem("hasSeenProtipContent")||nr(!0)}),[]);const ar=(0,f.useMemo)((()=>new URLSearchParams(Ka.search).get("isWidget")),[Ka]),rr=(0,f.useMemo)((()=>new URLSearchParams(Ka.search).get("widgetId")),[Ka]),gr=((0,f.useMemo)((()=>{const e=new URLSearchParams(Ka.search).get("srcChainType");return null===e||void 0===e?void 0:e.split(",")}),[Ka]),(0,f.useMemo)((()=>{const e=new URLSearchParams(Ka.search).get("dstChainType");return null===e||void 0===e?void 0:e.split(",")}),[Ka]),(0,f.useMemo)((()=>{const e=new URLSearchParams(Ka.search).get("srcChains");return null===e||void 0===e?void 0:e.split(",")}),[Ka]),(0,f.useMemo)((()=>{const e=new URLSearchParams(Ka.search).get("dstChains");return null===e||void 0===e?void 0:e.split(",")}),[Ka]),(0,f.useMemo)((()=>{var e;const t=new URLSearchParams(Ka.search).get("srcTokens");return null===t||void 0===t||null===(e=t.split(","))||void 0===e?void 0:e.map((e=>e.toLowerCase()))}),[Ka])),br=(0,f.useMemo)((()=>{var e;const t=new URLSearchParams(Ka.search).get("dstTokens");return null===t||void 0===t||null===(e=t.split(","))||void 0===e?void 0:e.map((e=>e.toLowerCase()))}),[Ka]),vr=(0,f.useMemo)((()=>{var e;return decodeURIComponent(null!==(e=new URLSearchParams(Ka.search).get("backgroundColor"))&&void 0!==e?e:"")}),[Ka]),Tr=(0,f.useMemo)((()=>{var e;return decodeURIComponent(null!==(e=new URLSearchParams(Ka.search).get("textColor"))&&void 0!==e?e:"")}),[Ka]),Cr=(0,f.useMemo)((()=>{var e;return decodeURIComponent(null!==(e=new URLSearchParams(Ka.search).get("ctaColor"))&&void 0!==e?e:"")}),[Ka]),Sr=(0,f.useMemo)((()=>{var e;return decodeURIComponent(null!==(e=new URLSearchParams(Ka.search).get("display"))&&void 0!==e?e:"")}),[Ka]),[kr,Ir]=(0,f.useState)(null),[Pr]=(0,D.Gt)(),jr=(0,f.useRef)(null),Ar=(0,f.useMemo)((async()=>await(0,ea.G$)(q.endpoint)),[q]),Er=((0,f.useMemo)((async()=>await(0,ea.G$)(q.endpoint)),[te]),(0,f.useMemo)((()=>(0,ea.UJ)(q.endpoint)),[q]),(0,f.useMemo)((()=>(0,ea.UJ)(te.endpoint)),[te])),Rr=function(){const[e,t]=(0,f.useState)(!0);let n;const a=()=>{clearTimeout(n),t(!0)},r=()=>{n=setTimeout((()=>{t(!1)}),6e5)};return(0,f.useEffect)((()=>(window.addEventListener("focus",a),window.addEventListener("blur",r),()=>{window.removeEventListener("focus",a),window.removeEventListener("blur",r)})),[]),e}(),Mr=(()=>{const e=(0,f.useRef)(!0);return(0,f.useEffect)((()=>{e.current=!1}),[]),e.current})(),Zr=1===e?"Send":"Swap",_r=(0,f.useCallback)((()=>{l(!0)}),[]),Lr=(0,f.useCallback)((()=>{p(!0)}),[]),Fr=(0,f.useCallback)((()=>{T(!0)}),[]),$r=(0,f.useCallback)((()=>{j(!0)}),[]),Nr=(0,f.useCallback)((()=>{_(!1),Hn([]),Ua(!1),Ha(!1),$a(),Fa(),Ia(),Yn(""),clearInterval(pa)}),[_,Hn,Ua,Ha,$a,Fa,Ia,Yn,pa]),Ur=((0,f.useCallback)((()=>{F(!1),Tn(!1),setTimeout((()=>{Sn("")}),3e3)}),[F]),(0,f.useCallback)((()=>l(!1)),[]),(0,f.useCallback)((()=>T(!1)),[]),(0,f.useCallback)((()=>p(!1)),[])),Dr=(0,f.useCallback)((()=>j(!1)),[]),Or=(0,f.useCallback)((()=>R(!1)),[]),Br=(0,f.useCallback)((()=>Rt(!1)),[]),Wr=(0,f.useCallback)((e=>{let t=new URLSearchParams(Qa);V(e),t.delete("fromToken"),t.append("fromToken",e.address),Ja(t.toString()),bn.Z.replace({pathname:Ka.pathname,search:t.toString()}),p(!1),localStorage.getItem("srcAsset")||K(Rn.p.filter((t=>t.networkId===e.chainId))[0])}),[Ka,bn.Z,Qa]);(0,f.useEffect)((()=>{"42161"===q.networkId||"137"===q.networkId?zt("2"):zt("1")}),[q]);const Hr=(0,f.useCallback)((async e=>{let t=new URLSearchParams(Qa);if(te.networkId===e.networkId&&(""===X||""===Y||X.symbol===Y.symbol&&(U.P_[te.networkId][0].symbol===Y.symbol?(ee(U.P_[te.networkId][1]),t.delete("toToken"),t.append("toToken",U.P_[te.networkId][1].address),bn.Z.replace({pathname:Ka.pathname,search:t.toString()})):(ee(U.P_[te.networkId][0]),t.delete("toToken"),t.append("toToken",U.P_[te.networkId][0].address),bn.Z.replace({pathname:Ka.pathname,search:t.toString()})))),""!==Y){var n,a,r;let i=U.P_[e.networkId].find((e=>e.symbol===Y.symbol));"true"===(null===ar||void 0===ar?void 0:ar.toLowerCase())&&gr&&en&&nn.forEach((t=>{var n,a;null===(n=en[t])||void 0===n||null===(a=n.tokens)||void 0===a||a.forEach((t=>{let n={...t};t.chainId.toString()===e.networkId&&null!==gr&&void 0!==gr&&gr.includes(t.address.toString().toLowerCase())&&(n.native=!1,i=n)}))})),V(null!==(n=i)&&void 0!==n?n:U.P_[e.networkId][0]),t.delete("fromToken"),t.append("fromToken",null!==(a=null===(r=i)||void 0===r?void 0:r.address)&&void 0!==a?a:U.P_[e.networkId][0].address),bn.Z.replace({pathname:Ka.pathname,search:t.toString()})}K(e);try{H&&(e.networkId,H.networkId)}catch(i){console.log("Error in Switching",i),wr().log("Error in Switching",{error:JSON.stringify(i)})}t.delete("fromChain"),t.append("fromChain",e.networkId),Ja(t.toString()),bn.Z.replace({pathname:Ka.pathname,search:t.toString()}),l(!1)}),[te,Y,X,ee,V,K,Ka,bn.Z,Qa,H]),Gr=(0,f.useCallback)((e=>{ee(e),j(!1);let t=new URLSearchParams(Qa);t.delete("toToken"),t.append("toToken",e.address),Ja(t.toString()),bn.Z.replace({pathname:Ka.pathname,search:t.toString()}),localStorage.getItem("dstAsset")||ne(Rn.p.filter((t=>t.networkId===e.chainId))[0])}),[Ka,bn.Z,Qa]),qr=(0,f.useCallback)((e=>{let t=new URLSearchParams(Qa);if(q.networkId===e.networkId&&(""===X||""===Y||X.symbol===Y.symbol&&(U.P_[q.networkId][0].symbol===X.symbol?(V(U.P_[q.networkId][1]),t.delete("fromToken"),t.append("fromToken",U.P_[q.networkId][1].address),bn.Z.replace({pathname:Ka.pathname,search:t.toString()})):(V(U.P_[q.networkId][0]),t.delete("fromToken"),t.append("fromToken",U.P_[q.networkId][0].address),bn.Z.replace({pathname:Ka.pathname,search:t.toString()})))),"65"===e.networkId&&(V(U.P_[q.networkId][0]),t.append("fromToken",U.P_[q.networkId][0].address),bn.Z.replace({pathname:Ka.pathname,search:t.toString()})),""!==X){var n,a,r;let i=U.P_[e.networkId].filter((e=>e.symbol===X.symbol))[0];"true"===(null===ar||void 0===ar?void 0:ar.toLowerCase())&&br&&en&&nn.forEach((t=>{var n,a;null===(n=en[t])||void 0===n||null===(a=n.tokens)||void 0===a||a.forEach((t=>{let n={...t};t.chainId.toString()===e.networkId&&null!==br&&void 0!==br&&br.includes(t.address.toString().toLowerCase())&&(n.native=!1,i=n)}))})),ee(null!==(n=i)&&void 0!==n?n:U.P_[e.networkId][0]),t.delete("toToken"),t.append("toToken",null!==(a=null===(r=i)||void 0===r?void 0:r.address)&&void 0!==a?a:U.P_[e.networkId][0].address),bn.Z.replace({pathname:Ka.pathname,search:t.toString()})}ne(e),t.delete("toChain"),t.append("toChain",e.networkId),Ja(t.toString()),bn.Z.replace({pathname:Ka.pathname,search:t.toString()}),T(!1)}),[q,Y,X,ee,ne,V,bn.Z,Ka,Qa]),Kr=((0,f.useCallback)((()=>{ee(Vt),Yt(!1)}),[ee,Vt]),(0,f.useCallback)((()=>{Yt(!1),Te(""),Se("")}),[Te,Se]),(0,f.useCallback)((()=>{Qt(!1),Te(""),Se(""),mt("-"),yt("-")}),[Te,Se])),Qr=(0,f.useMemo)((()=>/^\d*\.?\d*$/),[]),Jr=function(e,t){const[n,a]=(0,f.useState)(e);return(0,f.useEffect)((()=>{const n=setTimeout((()=>{a(e)}),t);return()=>{clearTimeout(n)}}),[e,t]),n}(ve,600),Xr=(0,f.useCallback)((e=>{if(Qr.test(e.target.value)){if("."===e.target.value&&""===ve)return;ga(!1),Te(e.target.value)}}),[ve,Qr,Te,xa]),ei=(0,f.useCallback)((()=>{ga(!1);let e=Q,t=Nn===he.n.TRUSTLESS?W.MAX_THRESHOLD_FOR_SWAP:Q;const n=(0,P.b6)(Y&&q.networkId,parseFloat(Q)*parseFloat(Ft[Y&&Y.symbol]));!W.IS_INTERNAL_MAINNET&&parseFloat(Q)*parseFloat(Ft[Y&&Y.symbol])>Number(t)?e=Number(t)/parseFloat(Ft[Y&&Y.symbol]):n.isDenied&&(e=n.limit/parseFloat(Ft[Y&&Y.symbol])),ha&&q.networkId==he.a_.ZkSync&&(e=(e*parseFloat(Ft[Y&&Y.symbol])-.5)/parseFloat(Ft[Y&&Y.symbol])),Te((0,P._k)(Number(e)>0?Number(e):0,"CHAIN_TYPE_BITCOIN"===q.type?8:4))}),[Q,Nn,Ft,Y,xt,Te,ha,xa]),ti=(0,f.useCallback)((e=>{}),[]),ni=(0,f.useCallback)((()=>{let e,t,n={...q},a={...te};""!==Y&&(e={...Y}),""!==X&&(t={...X});let r=Q,i=ke,s=ae,o=Pe;K(a),ne(n),t&&V(t),t&&e&&ee(e),J(s),Ie(o),re(r),je(i),Te(""),Se(""),gt("-")}),[q,Y,te,X,Q,ke,ae,Pe,ee,ne,V,J,K,Se,Te]),ai=(0,f.useCallback)((()=>Y),[q,te,Y]),ri=(0,f.useCallback)((()=>X),[te,q,X]),ii=(0,f.useCallback)((async t=>{console.log("Quote =>",t),window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:"Transaction Swap",Transaction_BridgeFees:`${(0,P.YG)((0,ye.og)(t.bridgeFee.amount,t.bridgeFee.decimals),4)}`,Transaction_SourceChainName:`${q.name}`,Transaction_SourceChainAsset:`${t.source.asset.name}`,Transaction_DestinationChainName:`${te.name}`,Transaction_DestinationChainAsset:`${t.destination.asset.name}`,Transaction_Amount:`${ie}`});try{var n,a;const r=await u().post(`${W.PATH_FINDER_ENDPOINT}/v2/transaction`,{...t,senderAddress:$.startsWith("T")?(0,z.$B)($):"CHAIN_TYPE_POLKADOT"===te.type?(0,Ro.c)((0,Eo.m)($)):$,receiverAddress:""===oe?$.startsWith("T")?(0,z.$B)($):$:1===e?oe.startsWith("T")?(0,z.$B)(oe):"CHAIN_TYPE_SOLANA"===te.type?de:"CHAIN_TYPE_POLKADOT"===te.type?(0,Ro.c)((0,Eo.m)(oe)):oe:$.startsWith("T")?(0,z.$B)($):$,metaData:{ataAddress:"CHAIN_TYPE_SOLANA"===q.type?(await ot(new at.nh($),t.fromTokenAddress)).ataAddress:null}});console.log("Transaction Data =>",r.data);const i=Ft[null!==(n=null===(a=he.TP[q.networkId])||void 0===a?void 0:a.symbol)&&void 0!==n?n:"ETH"];let s=0;try{s=r.data.txn.gasLimit*parseFloat(q.type===yr.$n?r.data.txn.gasPrice:(0,ye.og)(r.data.txn.gasPrice,he.TP[q.networkId].decimals))*Number(i)}catch(d){console.error("Calculate Gas Cost error - ",d)}let o=s;return console.log("gascosttt =>",s),window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:"Transaction Status",Transaction_response:"1",Transaction_BridgeFees:`${(0,P.YG)((0,ye.og)(t.bridgeFee.amount,t.bridgeFee.decimals),4)}`,Transaction_GasFees:`${o.toFixed(5)}`,Transaction_SourceChainName:`${q.name}`,Transaction_SourceChainAsset:`${t.source.asset.name}`,Transaction_DestinationChainName:`${te.name}`,Transaction_DestinationChainAsset:`${t.destination.asset.name}`,Transaction_Amount:`${ie}`}),r.data}catch(d){var r,i,s,o,l;console.error(`fetchTransactionData : ${d}`),window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:"Transaction Status",Transaction_response:"0",Transaction_BridgeFees:`${(0,P.YG)((0,ye.og)(t.bridgeFee.amount,t.bridgeFee.decimals),4)}`,Transaction_SourceChainName:`${q.name}`,Transaction_SourceChainAsset:`${t.source.asset.name}`,Transaction_DestinationChainName:`${te.name}`,Transaction_DestinationChainAsset:`${t.destination.asset.name}`,Transaction_Amount:`${ie}`}),wr().log("Transaction API error - ",{error:JSON.stringify(d)});let e=(0,mr.l8)(13,"");return console.log("e?.response?.data",null===d||void 0===d||null===(r=d.response)||void 0===r?void 0:r.data),e=null!==d&&void 0!==d&&null!==(i=d.response)&&void 0!==i&&null!==(s=i.data)&&void 0!==s&&s.errorCode&&null!==d&&void 0!==d&&null!==(o=d.response)&&void 0!==o&&null!==(l=o.data)&&void 0!==l&&l.error?d.response.data.error:(0,mr.l8)(23,""),dt(!0),$e(!0),Ue(e),Se(""),ut(!1),null}}),[ai,ri,Wt,$,oe,de,e,ie]),si=(0,f.useCallback)((async e=>{if(""===Y||""===X)return()=>{};let t=(0,ye.Jl)(ie,Y.decimals);window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:"Quote Swap",Quote_SourceChainName:`${q.name}`,Quote_SourceChainAsset:`${Y.name}`,Quote_DestinationChainName:`${te.name}`,Quote_DestinationChainAsset:`${X.name}`,Quote_Amount:`${ie}`});try{var n,a,r,i,s,o,l,d,p,c;let m,h="true"===(null===ar||void 0===ar?void 0:ar.toLowerCase())&&rr?`${W.PATH_FINDER_ENDPOINT}/v2/quote?fromTokenAddress=${ai().address}&toTokenAddress=${ri().address}&amount=${t}&fromTokenChainId=${q.networkId}&toTokenChainId=${te.networkId}&partnerId=${rr}\n          &slippageTolerance=${Wt}${W.REFUEL?`&destFuel=${sa}`:""}`:`${W.PATH_FINDER_ENDPOINT}/v2/quote?fromTokenAddress=${ai().address}&toTokenAddress=${ri().address}&amount=${t}&fromTokenChainId=${q.networkId}&toTokenChainId=${te.networkId}&partnerId=${W.IS_INTERNAL_MAINNET?"999":"alpha"==W.NETWORK_ENVIRONMENT?"0":"1"}&slippageTolerance=${Wt}${W.REFUEL?`&destFuel=${sa}`:""}`,y=0;if(ha&&q.networkId==he.a_.ZkSync){m=await u().get(h,{cancelToken:e.token});const n=await(0,hr.aq)(q,$,Y,m.data.allowanceTo);const a=(await ii(m.data)).txn;let r=await(0,Pn.jy)({erc20Address:Y.address,amount:ie,decimal:Y.decimals,gasLimit:a.gasLimit});if(Number(n)<Number(ie)){r+=await(0,Pn._G)({erc20Address:Y.address,amount:ie,decimal:Y.decimals,gasLimit:a.gasLimit})}if(y=r?1.2*r:0,console.log(y),ie-y<0)return ga(!0),ya(!1),void Ze(!0);console.log(ie-y),ba((ie-y).toFixed(2)),t=(0,ye.Jl)((ie-y).toFixed(2),Y.decimals)}if(h="true"===(null===ar||void 0===ar?void 0:ar.toLowerCase())&&rr?`${W.PATH_FINDER_ENDPOINT}/v2/quote?fromTokenAddress=${ai().address}&toTokenAddress=${ri().address}&amount=${t}&fromTokenChainId=${q.networkId}&toTokenChainId=${te.networkId}&partnerId=${rr}&slippageTolerance=${Wt}${W.REFUEL?`&destFuel=${sa}`:""}`:`${W.PATH_FINDER_ENDPOINT}/v2/quote?fromTokenAddress=${ai().address}&toTokenAddress=${ri().address}&amount=${t}&fromTokenChainId=${q.networkId}&toTokenChainId=${te.networkId}&partnerId=${W.IS_INTERNAL_MAINNET?"999":"alpha"==W.NETWORK_ENVIRONMENT?"0":"1"}&slippageTolerance=${Wt}${W.REFUEL?`&destFuel=${sa}`:""}`,m=await u().get(h,{cancelToken:e.token}),$n(m.data.isTransfer),Un(m.data.flowType),On(`${(0,P.YG)((0,ye.og)(m.data.bridgeFee.amount,m.data.bridgeFee.decimals),4)} ${m.data.bridgeFee.symbol}`),Wn({source:null!==(n=m.data)&&void 0!==n&&null!==(a=n.source)&&void 0!==a&&a.tokenPath?null===(r=m.data)||void 0===r||null===(i=r.source)||void 0===i||null===(s=i.tokenPath)||void 0===s?void 0:s.split("->").slice(1):[],destination:null!==(o=m.data)&&void 0!==o&&null!==(l=o.destination)&&void 0!==l&&l.tokenPath?null===(d=m.data)||void 0===d||null===(p=d.destination)||void 0===p||null===(c=p.tokenPath)||void 0===c?void 0:c.split("->").slice(0,-1):[]}),Zn(m.data.allowanceTo),En(m.data),window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:"Quote Status",Quote_response:"1",Quote_BridgeFees:`${(0,P.YG)((0,ye.og)(m.data.bridgeFee.amount,m.data.bridgeFee.decimals),4)}`,Quote_SourceChainName:`${q.name}`,Quote_SourceChainAsset:`${Y.name}`,Quote_DestinationChainName:`${te.name}`,Quote_DestinationChainAsset:`${X.name}`,Quote_Amount:`${ie}`}),m.data.source.chainId===m.data.destination.chainId)Oa(!0),console.log("same swap");else if(Oa(!1),"USDT"===m.data.source.stableReserveAsset.symbol||"USDC"===m.data.source.stableReserveAsset.symbol){console.log("yesssssssss",(0,P._k)(Number((0,ye.og)(m.data.source.stableReserveAmount,m.data.source.stableReserveAsset.decimals)),6));const e=(0,P._k)(Number((0,ye.og)(m.data.source.stableReserveAmount,m.data.source.stableReserveAsset.decimals)),6);Wa(e),console.log("yesssssssss usdt",e)}else{const e=(0,P._k)(Number((0,ye.og)(m.data.source.stableReserveAmount,m.data.source.stableReserveAsset.decimals)),6),t=parseFloat(Ft[m.data.source.stableReserveAsset.symbol])?parseFloat(e)*parseFloat(Ft[m.data.source.stableReserveAsset.symbol]):"";Wa(String(t)),""===t&&("WETH"===m.data.source.stableReserveAsset.symbol?Wa("3000"):"ROUTE"===m.data.source.stableReserveAsset.symbol?Wa("3.5"):"DFYN"===m.data.source.stableReserveAsset.symbol&&Wa("0.02")),console.log("yesssssssss eth",t)}return m.data}catch(S){if(console.error(`Fetching data from finder: ${S}`),wr().log("Quote API error - ",{error:JSON.stringify(S)}),window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:"Quote Status",Quote_response:"0",Quote_SourceChainName:`${q.name}`,Quote_SourceChainAsset:`${Y.name}`,Quote_DestinationChainName:`${te.name}`,Quote_DestinationChainAsset:`${X.name}`,Quote_Amount:`${ie}`}),u().isCancel(S))return null;{var m,h,y,x,g,f,b,w;let e=(0,mr.l8)(13,`${null===S||void 0===S||null===(m=S.response)||void 0===m?void 0:m.status}`);var v,T,C;if(console.log("e?.response?.data",null===S||void 0===S||null===(h=S.response)||void 0===h?void 0:h.data),null!==S&&void 0!==S&&null!==(y=S.response)&&void 0!==y&&null!==(x=y.data)&&void 0!==x&&x.errorCode&&null!==S&&void 0!==S&&null!==(g=S.response)&&void 0!==g&&null!==(f=g.data)&&void 0!==f&&f.error)e=S.response.data.error;else e=(0,mr.l8)(22,`${null===S||void 0===S||null===(v=S.response)||void 0===v?void 0:v.status}`);if(502===(null===S||void 0===S||null===(b=S.response)||void 0===b?void 0:b.status))e=(0,mr.l8)(21,`${null===S||void 0===S||null===(T=S.response)||void 0===T?void 0:T.status}`);if(429===(null===S||void 0===S||null===(w=S.response)||void 0===w?void 0:w.status))e=(0,mr.l8)(29,`${null===S||void 0===S||null===(C=S.response)||void 0===C?void 0:C.status}`);Ue(e),dt(!0),$e(!0),Se(""),Ze(!0),ut(!1)}return null}}),[q,te,Y,X,ie,ai,ri,Se,Wt,$,e,sa,ha]),oi=(0,f.useCallback)((async()=>{if(O)try{let e;e="solana"===q.networkId?await st.t.getBalance(new at.nh($)):await(await Ar).getBalance($),bt(e)}catch(e){console.log("gas balance error- ",e)}}),[Ar,$,O]),li=(0,f.useCallback)((async()=>{try{const e=await(await Ar).getGasPrice();vt(e)}catch(e){console.log("gas price - ",e)}}),[Ar]),di=(0,f.useCallback)((async e=>{if(""===Y||""===X)return;console.log("Fetching Values ==================> "),lt&&($e(!1),Ze(!1)),ut(!0),oi(),li();const t=(0,ye.Jl)(ie,Y.decimals);if(q.networkId===te.networkId&&As(Y.address,X.address)){const e=(0,ye.ff)(2,q.networkId);return Qe([]),mt("0.0"),yt("0.0"),qe([...e]),He(t),Ye((0,ye.Jl)(ie,X.decimals).mul(100-parseFloat(Wt)).div(100)),Se((0,P._k)(Number(ie),6)),Sn((0,P._k)(Number(ie),6)),Zt((0,ye.Jl)(ie,X.decimals)),Lt(X.address),Zn(q.assetBridge),void ut(!1)}const n=await si(e).catch((e=>{console.log("erroror - ",e)}));if(console.log("pathFinderData - ",n),null!==n){if(void 0===n)return console.log("error from pf "),void ut(!1);var a;if(gt(n.source.bridgeFeeAmount),(parseFloat(n.source.priceImpact)>=10||parseFloat(n.destination.priceImpact)>=10)&&Qt(!0),mt(n.source.priceImpact),Qe(n.source.path),qe(n.source.flags),jn(n.source.dataTx),yt(n.destination.priceImpact),n.isTransfer?Ct(cr.gC):Ct(cr.Cj),q.networkId===te.networkId)et(n.source.tokenPath),Ye((0,ye.Yy)(n.destination.tokenAmount,parseFloat(Wt),(0,ye.yZ)(Wt))),console.log("Formatted Amount -",(0,ye.og)(n.destination.tokenAmount,X.decimals)),Se((0,P._k)(Number((0,ye.og)(n.destination.tokenAmount,X.decimals)),6)),Sn((0,P._k)(Number((0,ye.og)(n.destination.tokenAmount,X.decimals)),6));else Ye((0,ye.Yy)(n.destination.tokenAmount,parseFloat(Wt),(0,ye.yZ)(Wt))),Se((0,P._k)(Number((0,ye.og)(n.destination.tokenAmount,X.decimals)),6)),Sn((0,P._k)(Number((0,ye.og)(n.destination.tokenAmount,X.decimals)),6)),Zt(n.destination.stableReserveAmount),Lt(null===(a=n.destination.stableReserveAsset)||void 0===a?void 0:a.address);ut(!1)}}),[q,Y,te,X,oi,li,It,ie,si,Se,Wt,$,lt,$e,sa,ha]),pi=async()=>{if(pt)return;dn(!1),_(!0);const e=[...zn];e.push({title:"Transaction Pending",pending:!0,link:""}),Hn(e);const t=Oe?[...Oe]:[],n=(new Date).toLocaleString();if(""!==Y&&""!==X){{let b,w;try{let e="";if(As(Y.address,X.address))b=await(c=q,h=$,y=Y.address,x=(0,ye.Jl)(ie,Y.decimals),console.log("-- sendAssetBridgeTxn -- "),new na.CH(c.assetBridge,js,new m.Q(window.walletClient).getSigner()).unstake(h,!1,y,x));else{let t=await ii(An);if(e=t.txn,Mn.toLowerCase()!==An.allowanceTo.toLowerCase())return;console.log("enableZyfiToggle - ",ha),b=await(0,xr.Le)(Pr,q,Tt,wt,e,Y,ha,ha&&he.a_.ZkSync?fa:ve,Q,t.source.chainId),fe(b.reclaimData)}}catch(f){var a,r;return Hn([]),"4001"===(null===f||void 0===f||null===(a=f.code)||void 0===a?void 0:a.toString())||"ACTION_REJECTED"===(null===f||void 0===f||null===(r=f.code)||void 0===r?void 0:r.toString())?(_(!1),dn(!0),$e(!0),dt(!0),void Ue((0,mr.l8)(20,""))):(wr().log("swapsamechain error - ",{error:JSON.stringify(f)}),console.log("Error swapsamechain - ",f),_(!1),dn(!0),$e(!0),dt(!0),void Ue(g().get(f,"data.message","Error")))}Ht&&jr&&jr.current&&jr.current.scrollIntoView();try{var i;w=await(0,xr.YW)(q,null===(i=b)||void 0===i?void 0:i.hash),console.log("\ud83d\ude80 ~ swapSameChain ~ result:",w)}catch(f){wr().log("waitForTxnOnChain in swapcrosschain error - ",{error:JSON.stringify(f)}),console.error(f)}var s,o,l,d,p;if(w)bi(),nt((0,z.WT)(q.type,q.networkId,null===(s=b)||void 0===s?void 0:s.hash)),Re((e=>!e)),e[e.length-1]={title:"Transaction Done",pending:!1,link:(0,z.WT)(te.type,te.networkId,null===(o=b)||void 0===o?void 0:o.hash)},Ha(!0),Hn(e),Yn(null===(l=b)||void 0===l?void 0:l.hash),qn(null===(d=b)||void 0===d?void 0:d.hash),Qn({address:X.address,symbol:X.symbol,amount:(0,P.YG)(Ce.toString(),4),refuel_Amount:"-",refuel_Symbol:""}),t.push({name:`${Zr} ${ve} ${Y?Y.symbol:""} for ${Ce} ${X?X.symbol:""}`,status:"Complete",icon:`${Zr}`,date:n,txUrl:(0,z.WT)(q.type,q.networkId,null===(p=b)||void 0===p?void 0:p.hash)});else if(q.networkId==he.a_.ZkSync&&b.error)v.Am.error(b.error),Hn([]),_(!1);else{var u;v.Am.error((0,A.jsx)(ir,{summary:`${Zr} ${ve} ${Y?Y.symbol:""} for ${Ce} ${X?X.symbol:""}`,srcTxExplorerLink:(0,z.WT)(q.type,q.networkId,null===(u=b)||void 0===u?void 0:u.hash),dstTxExplorerLink:""}),{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),Hn([]),_(!1)}}Be(t)}var c,h,y,x},ui=(0,f.useCallback)((async()=>{try{let e=[];Rn.p.forEach((t=>{const n=U.P_[t.networkId];n&&n.length>0&&(e=[...e,...n])}));const t=e.reduce(((e,t)=>({...e,[t.symbol]:"-"})),{}),n=await(async e=>{try{const t={...e},n=Object.keys(e);let a={};const r=await(0,Es.restFetcher)("https://price-api.crypto.com/meta/v1/all-tokens"),i=["felicette"];r.data.forEach((t=>{e[t.symbol.toUpperCase()]&&!i.includes(t.slug)&&(a[t.symbol.toUpperCase()]=t.slug)}));let s={PEPE:"pepe",ETH:"ethereum",DOGE:"dogecoin"};a={...a,...s},console.log("slugsvalues =>",a);const o=await Promise.allSettled(n.map((e=>void 0!==a[e]&&(0,Es.restFetcher)(`https://price-api.crypto.com/price/v1/token-price/${a[e]}`))));return n.forEach(((e,n)=>{"fulfilled"===o[n].status&&(t[e]=o[n].value.usd_price?o[n].value.usd_price.toString():null)})),n.forEach(((e,n)=>{"-"===t[e]&&t[e.substring(1)]&&(t[e]=t[e.substring(1)]),"USDC"!==e&&"USDT"!==e&&"DAI"!==e||(t[e]="1")})),t}catch(t){return console.log("Price Fetch Error -",t),null}})(t);n&&Object.keys(n).length>0&&$t({...n})}catch(e){console.log(e)}}),[$t]),ci=((0,f.useCallback)((e=>0===parseFloat(e)?e:parseFloat(e)<=.01?"<0.01":e),[]),(0,f.useCallback)((()=>"-"===ct||"-"===ht?"-":parseFloat(ct)+parseFloat(ht)===0?"0.0":(parseFloat(ct)+parseFloat(ht)).toFixed(2).toString()),[ct,ht]),(0,f.useCallback)((()=>""===Y||""===X||""===Ce?"-":`${(0,P.YG)((0,ye.og)(Ge,X.decimals),2)} ${X.symbol} (1 ${Y.symbol} = ${(0,P.YG)(parseFloat((0,ye.og)(Ge,X.decimals))/parseFloat(ve),2)} ${X.symbol})`),[Y,X,ve,Ge,Ce]),(0,f.useCallback)((()=>{if(Ie("-"),je("-"),""===Y||"-"===ve||"-"===Ft[Y.symbol])return;const e=parseFloat(Ft[Y.symbol])?parseFloat(ve)*parseFloat(Ft[Y.symbol]):"";if(Ie(String(e)),""===X||"-"===Ce||"-"===Ft[X.symbol])return;const t=parseFloat(Ft[X.symbol])?parseFloat(Ce)*parseFloat(Ft[X.symbol]):"";je(String(t))}),[Y,ve,Ft,X,Ce])),mi=async()=>{const e=await async function(e,t,n){var a;const r=null!==(a={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_DEFAULT_SOURCE_NETWORK_ID:"137",REACT_APP_TESTNET_NITRO_HOST:"https://testnet.routernitro.com/",REACT_APP_GOOGLE_ANALYTICS_ID:"UA-202970314-2",REACT_APP_ROUTER_EXPLORER_HOST:"https://explorer.routernitro.com/",REACT_APP_PORTIS_ID:"7e4ce7f9-7cd0-42da-a634-44e682aacd73",REACT_APP_MAINNET:"true",REACT_APP_TRADING_COMPETITION_API:"https://api.trading-competition.routerprotocol.com",REACT_APP_FORWARDER_HELPER:"https://api-beta.forwarder.routerprotocol.com",REACT_APP_VOYAGER_FORWARDER_API_HOST:"https://main.d151405sc3vyf4.amplifyapp.com/",REACT_APP_PATH_FINDER_ENDPOINT:"https://api-beta.pathfinder.routerprotocol.com/api",REACT_APP_NETWORK_ENVIRONMENT:"mainnet",REACT_APP_GTAG_ID:"G-FCXX6SSC6X",REACT_APP_IS_INTERNAL_TESTNET:"false",REACT_APP_REFUEL:"true",REACT_APP_ROUTER_STATS_HOST:"https://api.stats.routerprotocol.com",REACT_APP_UNDER_MAINTENANCE_TEXT:"false",REACT_APP_MAINNET_NITRO_HOST:"https://app.routernitro.com/",REACT_APP_INFURA_ID:"774b1e4252de48c3997d66ac5f5078d8",REACT_APP_IS_ZYFI_ENABLED:"true",REACT_APP_ZKSYNC_BLOCK_CONFIRMATION:"30",REACT_APP_SENTRY_DSN:"https://010f06b25d084884882d400c1f502461@o936875.ingest.sentry.io/5887301",REACT_APP_DEFAULT_DESTINATION_NETWORK_ID:"43114",REACT_APP_MAX_THRESHOLD_FOR_SWAP:"5000",REACT_APP_IS_INTERNAL_MAINNET:"false",REACT_APP_UNDER_MAINTENANCE:"false",REACT_APP_ENVIRONMENT:"development",REACT_APP_FORTMATIC_KEY:"pk_live_F95FEECB1BE324B5",REACT_APP_EXP_TIME_DIFF:"21600",REACT_APP_VOYAGER_EXPLORER_API_HOST:"https://api.pro-nitro-explorer.routernitro.com",REACT_APP_LIQUIDITY_MINING:"false",REACT_APP_REFUEL_ALLOWED_CHAINS:"56,8453,30,137,43114,2000,23294",REACT_APP_ALLOWED_CHAINS:"34443,42161,43114,10,324,137,728126428,1,56,5000,169,8453,30,534352,81457,288,1101,10242,7225878,1088,167000,59144,solana,196,2000,23294,router_9600-1,995,570,2040",REACT_APP_GTM_ID:"GTM-TK68H26G",REACT_APP_BACKEND_SERVER:"https://nitro-dapp-mainnet.routerprotocol.com",REACT_APP_LCD_URL:"https://sentry.lcd.routerprotocol.com/router-protocol/router-chain/multichain/contract_config",REACT_APP_DEFAULT_SOURCE_NETWORK_MAINNET_ID:"137",REACT_APP_VOYAGER_FAUCET_API_HOST:"https://api-beta.forwarder.routerprotocol.com/",REACT_APP_FRONTEND_URL:"https://app.routernitro.com",REACT_APP_CACHE_VERSION:"9"}.IRIS_API_URL)&&void 0!==a?a:"https://iris-api.circle.com",i=e.publicKey,s=new at.nh("CCTPmbSD7gX1bxKPAmg77w8oFzNFpaQiQUWD43TKaecd"),o=jo.Y7.defaultOptions(),l=new jo.$r(Po,s,o),d=await(async e=>{console.log("Fetching messages for tx...",e);let t={};for(;t.error||!t.messages||"PENDING"===(null===(n=t.messages)||void 0===n||null===(a=n[0])||void 0===a?void 0:a.attestation);){var n,a,i,s;const o=await fetch(`${r}/messages/5/${e}`);t=await o.json(),!t.error&&t.messages&&"PENDING"!==(null===(i=t.messages)||void 0===i||null===(s=i[0])||void 0===s?void 0:s.attestation)||await new Promise((e=>setTimeout(e,500)))}return t})(t),{attestation:p}=d.messages[0];console.log("Attestation Hex: ",p),console.log("Attestation response ",d);const u=function(e,t){const n=[Ao.from(jo.P6.bytes.utf8.encode(e))],a=at.nh.findProgramAddressSync(n,t);return{publicKey:a[0],bump:a[1]}}("message_transmitter",s),c=await l.methods.reclaimEventAccount({attestation:Ao.from(p.replace("0x",""),"hex")}).accounts({payee:i,messageTransmitter:u.publicKey,messageSentEventData:new at.nh(n)}).instruction(),m=new at.YW;m.add(c);let h=await st.t.getLatestBlockhash({commitment:"confirmed"});m.recentBlockhash=h.blockhash,m.feePayer=e.publicKey;let y=await e.signAndSendTransaction(m);return await st.t.confirmTransaction(y.signature,"confirmed"),console.log("confirm : ",y),console.log("\n\nreclaimEventAccount hash: ",c),y.signature}(null===ge||void 0===ge?void 0:ge.wallet,null===ge||void 0===ge?void 0:ge.hash,ge.messageSentEvent),t=[...zn];return t.push({title:"Reclaim Transaction Completed",pending:!1,link:(0,z.WT)(yr.Py,q.networkId,e)}),Hn(t),vi(e,t),we(e),e},hi=(0,f.useCallback)((async()=>{if(""!==Y)try{$e(!1),dt(!1),mn(!0);const e=Oe?[...Oe]:[],t=(new Date).toLocaleString();let n;console.log(ha),console.log("Testing 1 2 3 ",q,X,te,X),window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:"Approve",Approve_SourceChainName:`${q.name}`,Approve_SourceChainAsset:`${Y.name}`,Approve_DestinationChainName:`${te.name}`,Approve_DestinationChainAsset:`${X?X.name:""}`,Approve_Amount:`${ie.toString()}`});const a=await(0,hr._P)(q,Y,ie.toString(),Mn,$,ha,ve,Q);console.log("Source approval tx -",a);await(0,xr.YW)(q,a.hash)?(window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:"Approve Status",Approve_SourceChainName:`${q.name}`,Approve_SourceChainAsset:`${Y.name}`,Approve_DestinationChainName:`${te.name}`,Approve_DestinationChainAsset:`${X?X.name:""}`,Approve_Amount:`${ie.toString()}`,Approve_Response:"1"}),n=!0,Hn([{title:"Source Token Approved",pending:!1,link:(0,z.WT)(q.type,q.networkId,null===a||void 0===a?void 0:a.hash)}]),un(String(ie)),wn(!1)):n=!1,n&&(on(!1),dn(!0),e.push({name:`Approve ${Y.symbol}`,status:"Complete",icon:"Approve",date:t,txUrl:(0,z.WT)(q.networkId,q.name,null===a||void 0===a?void 0:a.hash)}),Be(e)),mn(!1)}catch(n){var e,t;console.log("Error setApprovalToChain - ",n),window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:"Approve Status",Approve_SourceChainName:`${q.name}`,Approve_SourceChainAsset:`${Y.name}`,Approve_DestinationChainName:`${te.name}`,Approve_DestinationChainAsset:`${X?X.name:""}`,Approve_Amount:`${ie.toString()}`,Approve_Response:"0"}),mn(!1),$e(!0),dt(!0),"4001"===(null===n||void 0===n||null===(e=n.code)||void 0===e?void 0:e.toString())||"ACTION_REJECTED"===(null===n||void 0===n||null===(t=n.code)||void 0===t?void 0:t.toString())?Ue("Transaction rejected by user"):Ue("An error occurred")}}),[Y,Oe,ie,Q,Mn,$,q,ha]),yi=(0,f.useCallback)((async()=>{let e=[];en&&nn.forEach((t=>{var n,a;null===(n=en[t])||void 0===n||null===(a=n.tokens)||void 0===a||a.forEach((t=>{let n={...t};t.chainId.toString()===q.networkId&&(n.native=!1,e.push(n))}))})),e&&e.filter((e=>"0x0000000000000000000000000000000000000000"!==e.address));let t=localStorage.getItem("anyToken")?JSON.parse(localStorage.getItem("anyToken")||"{}"):null,n=t&&t[$]?t[$][q.networkId]:[],a=n?[...U.P_[q.networkId],...e,...n]:[...U.P_[q.networkId],...e];if($&&O&&q&&a){const e=await(0,ea.sm)(q,a,$);Ot(e)}}),[en,nn,q,$,O,ea.sm]),xi=(0,f.useCallback)((async()=>{let e=[];en&&nn.forEach((t=>{var n,a;null===(n=en[t])||void 0===n||null===(a=n.tokens)||void 0===a||a.forEach((t=>{let n={...t};t.chainId.toString()===te.networkId&&(n.native=!1,e.push(n))}))})),e&&e.filter((e=>"0x0000000000000000000000000000000000000000"!==e.address));let t=localStorage.getItem("anyToken")?JSON.parse(localStorage.getItem("anyToken")||"{}"):null,n=t&&t[$]?t[$][te.networkId]:[],a=n?[...U.P_[te.networkId],...e,...n]:[...U.P_[te.networkId],...e];if($&&O&&te&&a){const e=await(0,ea.sm)(te,a,$);Ut(e)}}),[en,nn,te,$,O,ea.sm]),gi=(0,f.useCallback)((async()=>{if(""!==Y&&""!==$){Dt[Y.address.toLowerCase()]&&J(Dt[Y.address.toLowerCase()]);const e=await(0,ea.NT)(q,Y,$);J(e)}else J("-")}),[Y,$,Dt,ea.NT,q,J]);(0,f.useEffect)((()=>(gi(),()=>{})),[Y,$,Ae]);const fi=(0,f.useCallback)((async()=>{if(""!==X&&""!==$){if(0===e&&Nt[X.address.toLowerCase()]&&re(Nt[X.address.toLowerCase()]),1===e&&!h.isHexString(oe))return()=>{};const t=await(0,ea.NT)(te,X,1===e?te.networkId===he.a_.SOLANA?de:oe:$);re(t)}else re("-");return()=>{}}),[X,$,e,Nt,oe,de,ea.NT,te,re]);(0,f.useEffect)((()=>(fi(),()=>{})),[X,$,Ae,oe,de,e]);const bi=(0,f.useCallback)((async()=>{if(console.log("approvalAddress",Mn),""===Y||""===$)return()=>{};const e=await(0,hr.aq)(q,$,Y,Mn);return console.log("Fetched Allownce =>",e),un(null!==e&&void 0!==e?e:"0"),()=>{}}),[Y,O,hr.aq,q,$,Y,Mn,un]);(0,f.useEffect)((()=>(bi(),()=>{})),[Y,Mn,ie,$,O]),(0,f.useEffect)((()=>O?(Ot({}),yi(),()=>{}):()=>{}),[$,O,q,nn]),(0,f.useEffect)((()=>O?(yi(),()=>{}):()=>{}),[Ae]),(0,f.useEffect)((()=>O?(Ut({}),xi(),()=>{}):()=>{}),[$,O,te,nn]),(0,f.useEffect)((()=>O?(xi(),()=>{}):()=>{}),[Ae]),(0,f.useEffect)((()=>(q.networkId===te.networkId&&t(0),()=>{})),[q,te]),(0,f.useEffect)((()=>{if(""===H||H&&"Loading..."===H.name)return()=>{};const e=new URLSearchParams(Ka.search).get("fromChain");return(e&&ur.Z[e]?ur.Z[e]:null)||q.networkId===H.networkId||Hr(H),()=>{}}),[H]),(0,f.useEffect)((()=>Mr?()=>{}:O?(oi(),()=>{}):()=>{}),[$]),(0,f.useEffect)((()=>ci()),[ve,Ce,Y,X,Ft]),(0,f.useEffect)((()=>{if(!Rr)return()=>{};ui();const e=setInterval((()=>{ui()}),cr.Zt);return()=>{clearInterval(e)}}),[q,te,Rr]);const wi=async()=>{const e=await Promise.all(U.Dx.map((e=>(async e=>{try{return await(await fetch(e)).json()}catch(t){console.log(`Token List Fetching error ${e} =>`,t)}})(e))));console.log("DATA =>",e);const t={};U.Dx.map(((n,a)=>t[n]=e[a])),console.log("groupedData - ",t),tn(t)};(0,f.useEffect)((()=>(console.log("FETCHING =>"),wi(),()=>{})),[]);(0,f.useEffect)((()=>(Mr||(async()=>{const e=new URLSearchParams(Ka.search),t=e.get("fromChain"),n=e.get("toChain"),a=e.get("fromToken"),r=e.get("toToken"),i=t&&ur.Z[t]?ur.Z[t]:null,s=n&&ur.Z[n]?ur.Z[n]:null;let o=localStorage.getItem("anyToken")?JSON.parse(localStorage.getItem("anyToken")||"{}"):null,l=null;if(i&&a){var d;l=null!==(d=U.P_[i.networkId].filter((e=>e.address.toLowerCase()===a.toLowerCase()))[0])&&void 0!==d?d:null;let e=o&&i&&o[$]?o[$][i.networkId]:[];var p;if(l||(l=null!==(p=e.filter((e=>e.address.toLowerCase()===a.toLowerCase()))[0])&&void 0!==p?p:null),!l&&0===e.length&&y.isAddress(a.toLowerCase())&&"true"===(null===ar||void 0===ar?void 0:ar.toLowerCase())){const e=await(0,Pn.OZ)({tokenAddress:a.toLowerCase(),provider:(0,ea.G$)(i.endpoint),networkId:i.networkId});e&&(l={name:e[0],symbol:e[1],decimals:e[2],address:a.toLowerCase(),logoURI:"",chainId:i.networkId,native:!1},o={[$]:{[i.networkId]:[l]}},localStorage.setItem("anyToken",JSON.stringify(o)))}l||en&&nn.forEach((e=>{var t,n;null===(t=en[e])||void 0===t||null===(n=t.tokens)||void 0===n||n.forEach((e=>{let t={...e};e.chainId.toString()===i.networkId&&e.address.toString().toLowerCase()===a.toLowerCase()&&(t.native=!1,l=t)}))}))}let u=null;if(s&&r){var c;u=null!==(c=U.P_[s.networkId].filter((e=>e.address.toLowerCase()===r.toLowerCase()))[0])&&void 0!==c?c:null;let e=o&&s&&o[$]?o[$][s.networkId]:[];var m;if(u||(u=null!==(m=e.filter((e=>e.address.toLowerCase()===r.toLowerCase()))[0])&&void 0!==m?m:null),!u&&0===e.length&&y.isAddress(r.toLowerCase())&&"true"===(null===ar||void 0===ar?void 0:ar.toLowerCase())){const e=await(0,Pn.OZ)({tokenAddress:r.toLowerCase(),provider:(0,ea.G$)(s.endpoint),networkId:s.networkId});e&&(u={name:e[0],symbol:e[1],decimals:e[2],address:r.toLowerCase(),logoURI:"",chainId:s.networkId,native:!1},o={[$]:{[s.networkId]:[u]}},localStorage.setItem("anyToken",JSON.stringify(o)))}u||en&&nn.map((e=>{var t,n;null===(t=en[e])||void 0===t||null===(n=t.tokens)||void 0===n||n.map((e=>{let t={...e};e.chainId.toString()===s.networkId&&e.address.toString().toLowerCase()===r.toLowerCase()&&(t.native=!1,u=t)}))}))}var h;i&&K(i),s&&ne(s),"none"===t||"none"===a?V(""):l&&V(l),"none"===n||"none"===r?ee(""):u&&ee((null===i||void 0===i?void 0:i.networkId)===(null===s||void 0===s?void 0:s.networkId)&&(null===(h=l)||void 0===h?void 0:h.address.toLowerCase())===u.address.toLowerCase()?"":u)})(),()=>{})),[en]),(0,f.useEffect)((()=>""!==Y?parseFloat(pn)<ie?wn(!0):wn(!1):(wn(!1),()=>{})),[pn,ie]),(0,f.useEffect)((()=>{se(Number(Jr)),Xt(!1)}),[Jr]),(0,f.useEffect)((()=>{const e=(0,P.b6)(Y&&q.networkId,ie*parseFloat(Ft[Y&&Y.symbol]));if(Mr)return()=>{};if(!Rr)return()=>{};if(""===Y||""===X||0===ie||""===ve)return ut(!1),Se(""),()=>{};if(Z)return()=>{};const t=u().CancelToken.source();return mt("-"),yt("-"),Nn===he.n.TRUSTLESS&&ie*parseFloat(Ft[Y&&Y.symbol])>Number(W.MAX_THRESHOLD_FOR_SWAP)?($e(!0),Ue((0,mr.l8)(4,Y.symbol)),Ze(!0)):e.isDenied&&($e(!0),Ue((0,mr.l8)(25,e.limit)),Ze(!0)),di(t),()=>{t.cancel((0,mr.l8)(15,""))}}),[q,te,Y,X,ie,Wt,$,Z,sa,Nn,ha]),(0,f.useEffect)((()=>{if(!Rr)return()=>{};if(""===Y||""===X||0===ie||""===ve)return Se(""),()=>{};if(Z)return()=>{};const e=u().CancelToken.source(),t=setInterval((()=>di(e)),cr._j);return()=>{clearInterval(t),e.cancel((0,mr.l8)(15,""))}}),[q,te,Y,X,ie,Wt,Rr,$,Z,sa]),(0,f.useEffect)((()=>(Mr||(mt("-"),yt("-")),()=>{})),[q,te,Y,X]),(0,f.useEffect)((()=>Se("")),[X]),(0,f.useEffect)((()=>(Mr||Re((e=>!e)),()=>{})),[oe,de,e]),(0,f.useEffect)((()=>{if(!Rr)return()=>{};if(!O)return()=>{};const e=setInterval((()=>{oi(),Re((e=>!e))}),cr.Zt);return()=>clearInterval(e)}),[Rr,$]),(0,f.useEffect)((()=>(""===ve&&($e(!1),dt(!1)),(()=>{const e=(0,P.b6)(Y&&q.networkId,ie*parseFloat(Ft[Y&&Y.symbol]));lt||(O&&(0,P.i7)(q.type,Pr)?""===Y?(Ue((0,mr.l8)(2,"")),Ze(!0)):""===X?(Ue((0,mr.l8)(3,"")),Ze(!0)):""===ve?(Ue((0,mr.l8)(7,"")),Ze(!0)):Number(Q)<Number(ve)?($e(!0),Ue((0,mr.l8)(5,Y.symbol)),Ze(!0)):Nn===he.n.TRUSTLESS&&ie*parseFloat(Ft[Y&&Y.symbol])>Number(W.MAX_THRESHOLD_FOR_SWAP)?($e(!0),Ue((0,mr.l8)(4,Y.symbol)),Ze(!0)):pt?(Ue((0,mr.l8)(12,"")),Ze(!0),Le(!0),$e(!0)):e.isDenied?($e(!0),Ue((0,mr.l8)(25,e.limit)),Ze(!0)):($e(!1),Ze(!1),Le(!1)):Ze(!1))})(),()=>{})),[Fe,lt,O,H,q,ve,ie,Y,X,Q,oe,de,e,pt,Nn]),(0,f.useEffect)((()=>{Ze(!1),ln&&gn&&"CHAIN_TYPE_SOLANA"!==q.type?Ln("Approve Transfer"):ln&&cn&&"CHAIN_TYPE_SOLANA"!==q.type?Ln("Approving Transfer"):ln?Ln(Fn?"Transfer":"Swap"):O&&""===ve?Ln("Enter Amount"):Pr!==pr.UI.walletconnect&&Pr!==pr.UI.near&&O&&""!==Y&&(H&&H.networkId!==q.networkId||""===H)?q.type===yr.q8&&(Pr===pr.UI.injected||Pr===pr.UI.coinbase)||q.type===yr.$n&&Pr===pr.UI.keplr?Ln("Switch Network"):q.type===yr.XQ&&Pr===pr.UI.tron?(Ln("Switch Network Manually"),Ze(!0)):Ln("Switch Wallet"):O?(0,z.O5)(te.type,1===e?oe:$)?Ln("Continue"):Ln("Add Recipient Address"):Ln("Connect Wallet")}),[ve,O,Y,q,gn,sn,cn,ln,H,Pr,e]),(0,f.useEffect)((()=>(Mr||Y&&Y.chainId===lr.F.networkId&&qa(or.F.filter((e=>e.id===Pr))[0]),()=>{})),[Y]),(0,f.useEffect)((()=>{(0,z.O5)(te.type,1===e?oe:$)||(t(0),le(""),xe(""))}),[te]),(0,f.useEffect)((()=>{const e=new URLSearchParams(Ka.search).get("transactionHashes");if(console.log("txnHash",e),e&&Mr)return(async(t,n,a)=>{if("storage_deposit"===(await u().get(`https://api3.nearblocks.io/v1/txns/${e}`)).data.txns[0].actions[0].method)return;_(!0);const r=[];r.push({title:"Source Transaction Completed",pending:!1,link:(0,z.WT)(yr.a3,q.networkId,e)}),r.push({title:"Waiting For Destination",pending:!0,link:""}),Hn(r),Ua(!0),Ha(!0);let i=new Date;i.setSeconds(i.getSeconds()+Number(40)),ja(i);let s=await fr(e);Te(null!==(t=null===(n=s.findNitroTransactionByFilter)||void 0===n?void 0:n.src_amount)&&void 0!==t?t:""),Se(null!==(a=s.findNitroTransactionByFilter.dest_amount)&&void 0!==a?a:localStorage.getItem(yr.dC));let o=setInterval((async()=>{var t,n,a;s=await fr(e),Te(null!==(t=null===(n=s.findNitroTransactionByFilter)||void 0===n?void 0:n.src_amount)&&void 0!==t?t:""),Se(null!==(a=s.findNitroTransactionByFilter.dest_amount)&&void 0!==a?a:localStorage.getItem(yr.dC)),l(s.findNitroTransactionByFilter)}),500);ua(o);const l=e=>{e&&(console.log("txx",e),"completed"===e.status.toLowerCase()&&(r[r.length-1]={title:"Destination Transaction Done",pending:!1,link:(0,z.WT)(te.type,te.networkId,te.type===yr.XQ?e.dest_tx_hash.slice(2):e.dest_tx_hash)},Yn(e.dest_tx_hash),Hn(r),Fa(),Ia(),e.dest_partial_info||(Qn({address:e.dest_address,symbol:e.dest_symbol,amount:e.dest_amount,refuel_Amount:e.native_token_amount,refuel_Symbol:e.native_token_symbol}),clearInterval(o),X&&e.dest_address.toLowerCase()!==X.address.toLowerCase()&&($e(!0),dt(!0),Ue((0,mr.l8)(19,"destination token selected by user is not equal to settlement token"))))))}})(),()=>clearInterval(pa)}),[]);const vi=(0,f.useCallback)((async(e,t)=>{if($e(!1),!e||""===e)return;const n=[...t];let a=!1,r=0;if(await(async()=>{try{te.type===yr.q8&&(r=await(await Er).eth.getBlockNumber()),a=await(0,xr.YW)(q,e)}catch(t){return wr().log("startTxnStatusListener waitForTxnOnChain error - ",{error:JSON.stringify(t)}),new Promise((async t=>{const n=async()=>{(await fr(q.type===yr.XQ?"0x"+e:e)).findNitroTransactionByFilter&&(a=!0,clearInterval(r),t(0))};n();const r=setInterval(n,5e3)}))}})(),!a)return _(!1),dn(!0),$e(!0),void setTimeout((()=>{Hn([]),Ua(!1),Ha(!1),$a(),Fa(),Ia(),Yn(""),clearInterval(pa)}),15e3);{bi();let t=n.findIndex((e=>"Source Transaction Pending"===e.title));n[t]={title:"Source Transaction Completed",pending:!1,link:(0,z.WT)(q.type,q.networkId,e)},Hn(n),Ua(!0),Ha(!0);let a=new Date;a.setSeconds(a.getSeconds()+Number(An.estimatedTime)),ja(a)}const i=e=>{e&&(console.log("txx",e),"completed"===e.status.toLowerCase()&&(n[n.length-1]={title:"Destination Transaction Done",pending:!1,link:e.dest_tx_hash?(0,z.WT)(te.type,te.networkId,te.type===yr.XQ?e.dest_tx_hash.slice(2):e.dest_tx_hash):"router_9600-1"===te.networkId&&`https://routerscan.io/crosschain/details?srcChainId=${q.networkId}&eventNonce=${e.deposit_id}`},Ha(!0),Yn(e.dest_tx_hash),Hn(n),Fa(),Ia(),e.dest_partial_info||(Qn({address:e.dest_address,symbol:e.dest_symbol,amount:e.dest_amount,refuel_Amount:e.native_token_amount,refuel_Symbol:e.native_token_symbol}),clearInterval(l),X&&e.dest_address.toLowerCase()!==X.address.toLowerCase()&&($e(!0),dt(!0),Ue((0,mr.l8)(19,"destination token selected by user is not equal to settlement token"))))))},s=async()=>{try{o=await fr(q.type===yr.XQ?"0x"+e:e),l=setInterval((async()=>{o=await fr(q.type===yr.XQ?"0x"+e:e),i(o.findNitroTransactionByFilter)}),500),ua(l)}catch(t){console.error("destFallback error - ",t)}};let o,l;if(0!==r&&q.type===yr.q8&&te.type===yr.q8)if(Nn===he.n.TRUSTLESS)try{const t=await(async(e,t)=>(e.type,yr.q8,Ys(e.endpoint,t)))(q,e),n=await(async(e,t,n)=>(e.type,yr.q8,Vs(t,n)))(q,Nn,t);if(console.log("identifier",n),0===n)return void await s();o=await((e,t,n,a,r)=>(e.type,yr.q8,qs(e,t,n,a,r)))(te,q.networkId,Nn,r,n),console.log("findDestTxn",o),o?i(o):await s()}catch(d){console.log("getDstTxn error",d),await s()}else await s();else await s()}),[zn,An,bi,pa,X,Nn,q,te]),Ti=(0,f.useCallback)((()=>{ln?dn(!1):Z&&Nr(),Hn([]);const e=u().CancelToken.source();di(e)}),[ln,Z,zn]),Ci=(0,f.useCallback)((async()=>{try{var e;ia(!0);let t=await(0,Vr.Ce)();null!==t&&void 0!==t&&null!==(e=t.data)&&void 0!==e&&e.slot_eligible&&aa(!0),ia(!1)}catch(t){ia(!1)}}),[]);(0,f.useEffect)((()=>{null!==Kn&&void 0!==Kn&&Kn.address&&(s&&Xa($,G),Ci())}),[Kn,s]),(0,f.useEffect)((()=>{Ci()}),[]);const{handleGetNitroPointsTotals:Si,pointsData:ki,isLoading:Ii}=(0,Qs.e)(),[Pi,,,ji]=(0,Ps.f)();return(0,f.useEffect)((()=>{Pi&&Si()}),[Pi,O]),(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(c.q,{children:[(0,A.jsx)("title",{children:"Router Nitro: Cross-chain bridge powered by Router Chain | Cross-Chain Swaps"}),(0,A.jsx)("meta",{name:"description",content:"A cross-chain bridge powered by Router Chain, offering connectivity with various EVM and non-EVM chains. Enjoy low-latency, cost-efficient transfers at high speed."}),(0,A.jsx)("meta",{name:"keywords",content:"Cross-chain bridge, EVM & non-EVM connectivity, low-latency transfers, cost-efficient transfers, high-speed transfers."})]}),(0,A.jsxs)(Zo,{backgroundColor:"true"===(null===ar||void 0===ar?void 0:ar.toString())?vr:"",children:[(0,A.jsx)(so,{children:(0,A.jsxs)(_o,{children:[(0,A.jsx)(Je.Z,{open:d,onClose:Ur,children:(0,A.jsx)(Ga,{chain:q,list:q.networkId===te.networkId?U.P_[q.networkId].filter((e=>""===X||e.address!==X.address)):U.P_[q.networkId],iconList:U.oO,title:"Select Token",currentValue:Y,optionSelectHandler:Wr,chainSelectHandler:Hr,peerValue:q.networkId===te.networkId?X:"",close:Ur,balanceList:Dt,isSource:!0})}),(0,A.jsx)(Je.Z,{open:k,onClose:Dr,children:(0,A.jsx)(Ga,{chain:te,list:q.networkId===te.networkId?U.P_[te.networkId].filter((e=>""===Y||e.address!==Y.address)):U.P_[te.networkId],iconList:U.oO,title:"Select Asset",currentValue:X,optionSelectHandler:Gr,chainSelectHandler:qr,peerValue:Y,close:Dr,balanceList:Nt,isSource:!1})}),(0,A.jsx)(Je.Z,{open:E,onClose:Or,children:(0,A.jsx)(pe,{close:Or})}),(0,A.jsx)(Je.Z,{open:Et,onClose:Br,children:(0,A.jsx)(rs,{currentSourceChain:q,currentSourceAsset:Y,close:Br,setShowWalletList:De})}),(0,A.jsx)(Je.Z,{open:!Jt&&Kt,onClose:Kr,children:(0,A.jsx)(In,{priceImpact:parseFloat(ct||"0")>=parseFloat(ht||"0")?ct:ht,action:()=>{Qt(!1),Xt(!0)},close:Kr})}),(0,A.jsxs)(Wo,{display:Sr,isWidget:"true"===ar,children:[!1,(0,A.jsxs)($o,{error:Fe,display:Sr,backgroundColor:"true"===(null===ar||void 0===ar?void 0:ar.toString())?vr:"",widget:"true"===(null===ar||void 0===ar?void 0:ar.toString()),isUnderMaintenance:Mo,children:[ar?(0,A.jsx)(Vo,{isWidget:"true"===(null===ar||void 0===ar?void 0:ar.toString()),children:(0,A.jsx)(Lo,{children:(ln||Z)&&(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(i.Z,{style:{width:"18px",cursor:"pointer",color:`${Cr||"#FFFFFF"}`},onClick:Ti}),(0,A.jsx)(Fo,{children:"Back to Swap"})]})})}):(0,A.jsxs)(Vo,{isWidget:"true"===(null===ar||void 0===ar?void 0:ar.toString()),children:[(0,A.jsxs)(Lo,{children:[(ln||Z)&&(0,A.jsx)(i.Z,{style:{width:"18px",cursor:"pointer"},onClick:Ti}),(0,A.jsx)(Fo,{children:"Swap"})]}),(0,A.jsxs)(qo,{children:[(W.IS_INTERNAL_MAINNET||"mainnet"===W.NETWORK_ENVIRONMENT||W.IS_INTERNAL_TESTNET)&&(0,A.jsx)(Jo,{onClick:()=>Rt((e=>!e)),children:(0,A.jsx)(tl,{})}),(0,A.jsx)(Jo,{onClick:()=>At((e=>!e)),children:(0,A.jsx)(el,{})}),O?(0,A.jsxs)(Xo,{isBlinking:za,onClick:()=>R((e=>!e)),children:[(0,A.jsx)(nl,{isBlinking:za}),"Recent"]}):(0,A.jsx)(A.Fragment,{})]})]}),jt&&(0,A.jsx)(r.Z,{onClickAway:()=>At(!1),children:(0,A.jsx)(Qo,{children:(0,A.jsx)(S.Z,{close:()=>At(!1)})})}),(0,A.jsxs)(Uo,{children:[ln?(0,A.jsxs)(f.Fragment,{children:[(0,A.jsx)(No,{children:(0,A.jsx)(Ee,{label:"From Send",showRefuelMenu:la,refuelValue:sa})}),q.networkId!==te.networkId&&(0,A.jsx)(No,{children:(0,A.jsx)(zr,{sourceChain:q,destinationChain:te,sourceInput:ve,currentSourceAsset:Y,currentDestinationAsset:X,quoteResponse:An,transactionInfo:ca})}),(0,A.jsx)(No,{children:(0,A.jsx)(an,{isSwap:!Fn,path:[{asset:Y,amount:ve,chainName:q.name.split(" ")[0]},...Bn.source.map((e=>({asset:{logoURI:"",symbol:e},amount:"",chainName:q.name.split(" ")[0]}))),..."circle"===Nn?[{asset:{logoURI:rn,symbol:"via"},amount:"",chainName:"Circle\u2019s CCTP"}]:[],...Bn.destination.map((e=>({asset:{logoURI:"",symbol:e},amount:"",chainName:te.name.split(" ")[0]}))),{asset:X,amount:Ce,chainName:te.name.split(" ")[0]}]})}),"true"!==(null===ar||void 0===ar?void 0:ar.toLowerCase())&&Fe&&(0,A.jsx)(Go,{active:Fe,children:(0,A.jsx)(fn,{message:Ne})})]}):Z?(0,A.jsxs)(f.Fragment,{children:[(0,A.jsx)(No,{children:(0,A.jsx)(Ee,{label:"From Send",showRefuelMenu:la,refuelValue:sa})}),zn.map((e=>(0,A.jsx)(No,{children:(0,A.jsx)(hn,{title:e.title,pending:e.pending,link:e.link,txnFlowType:Nn,reclaimSOLHandler:mi})}))),!ar&&Na&&(0,A.jsx)(tr,{quoteResponse:An,timerTotalSeconds:va,timerSeconds:Ta,timerMinutes:Ca,isTimerRunning:Sa,isStopwatchRunning:_a,stopwatchSeconds:Ea,stopwatchMinutes:Ra,stopwatchHours:Ma,stopwatchTotalSeconds:Aa,action:Fn?"Transfer":"Swap",showFinal:""!==Gn,hash:Vn}),""!==Gn&&(0,A.jsx)(No,{children:(0,A.jsx)(ze,{hash:Vn,dstToken:Kn.address,dstSymbol:Kn.symbol,dstAmount:Kn.amount,refuel_Amount:Kn.refuel_Amount,refuel_Symbol:Kn.refuel_Symbol,showRefuelMenu:la,txnFlowType:Nn})}),""!==Gn&&"router_9600-1"===te.networkId&&(0,A.jsx)(No,{children:(0,A.jsx)(sl,{onClick:()=>(0,Xn.sT)("29"),children:"Add Router Chain to Metamask"})}),"true"!==(null===ar||void 0===ar?void 0:ar.toLowerCase())&&Fe&&!Na&&(0,A.jsx)(Go,{active:Fe,children:(0,A.jsx)(fn,{message:Ne})})]}):(0,A.jsxs)(f.Fragment,{children:[(0,A.jsx)(No,{children:(0,A.jsx)(Bt,{currentChain:q,currentAsset:Y,tokenBalance:Q,usdBalance:ke,showChainMenu:_r,showAssetMenu:Lr,inputValue:ve,inputHandler:Xr,label:"From Send",id:"send-source-token",fetching:!1,maxButton:ei,locked:!1,isInputDisabled:_e,showRxAddressMenu:Ya,setShowRxAddressMenu:Va,showRefuelMenu:la,refuelValue:sa})}),(0,A.jsx)(Do,{onClick:ni,textColor:"true"===(null===ar||void 0===ar?void 0:ar.toString())?Tr:"",display:"true"===(null===ar||void 0===ar?void 0:ar.toString())?Sr:"",ctaColor:"true"===(null===ar||void 0===ar?void 0:ar.toString())?Cr:"",bgColor:"true"===(null===ar||void 0===ar?void 0:ar.toString())?vr:""}),(0,A.jsx)(No,{children:(0,A.jsx)(Bt,{currentChain:te,currentAsset:X,tokenBalance:ae,usdBalance:Pe,showChainMenu:Fr,showAssetMenu:$r,inputValue:Ce,inputHandler:ti,label:"To Send",id:"send-destination-token",fetching:pt,maxButton:ei,locked:!1,isInputDisabled:_e,showRxAddressMenu:Ya,setShowRxAddressMenu:Va,showRefuelMenu:la,refuelValue:sa})}),W.IS_ZYFI_ENABLED&&q.networkId==he.a_.ZkSync&&!ar&&(0,A.jsx)(No,{children:(0,A.jsx)(Io,{setEnableZyfiToggle:ya,enableZyfiToggle:ha,disableZyfi:xa})}),W.REFUEL&&!ar&&(0,A.jsx)(No,{children:(0,A.jsx)(Is,{destinationInput:Ce,inputValue:ve,refuelValue:sa,setRefuelValue:oa,showRefuelMenu:la,setShowRefuelMenu:da})}),"true"!==(null===ar||void 0===ar?void 0:ar.toLowerCase())&&Fe&&(0,A.jsx)(Go,{active:Fe,children:(0,A.jsx)(fn,{message:Ne})}),!1]}),!Z&&(0,A.jsxs)(Yo,{display:"true"===(null===ar||void 0===ar?void 0:ar.toString())?Sr:"",children:["true"===(null===ar||void 0===ar?void 0:ar.toLowerCase())&&Fe&&(0,A.jsx)(Go,{active:Fe,children:(0,A.jsx)(fn,{message:Ne})}),(0,A.jsx)(M,{clicked:async()=>{if(O&&(0,P.i7)(q.type,Pr))if(Pr!==pr.UI.walletconnect&&Pr!==pr.UI.near&&(Me||H&&H.networkId!==q.networkId||""===H))Pr!==pr.UI.injected&&Pr!==pr.UI.coinbase||H&&H.networkId===q.networkId?De(!0):await(0,Xn.sT)(q.id);else if(!O||(0,z.O5)(te.type,1===e?oe:$)){if(0===ie||""===String(ie))return $e(!0),dt(!0),void Ue((0,mr.l8)(7,Y&&Y.symbol));if(""===String(Ce))return $e(!0),dt(!0),void Ue((0,mr.l8)(8,""));if(pt)return $e(!0),dt(!0),void Ue((0,mr.l8)(12,""));if(!cn)if(ln)gn&&"CHAIN_TYPE_SOLANA"!==q.type?hi():(localStorage.setItem(yr.dC,Ce),q.networkId!==te.networkId?(async()=>{if(pt)return;dn(!1),_(!0);const e=[...zn];if(e.push({title:"Source Transaction Pending",pending:!0,link:""}),e.push({title:"Waiting For Destination",pending:!0,link:""}),Hn(e),""!==Y&&""!==X){let o,l;try{let t=await ii(An);const n=t.txn;if(Mn.toLowerCase()!==An.allowanceTo.toLowerCase())return;if(q.networkId!==An.source.chainId)throw new Error("Selected chain Id is incorrect");if(q.type===yr.q8)try{const e=new m.Q(window.walletClient);await e.estimateGas(n),console.log("simulation done")}catch(i){console.log("error",i),parseFloat(Wt)<2?($e(!0),Ue((0,mr.l8)(27,""))):($e(!0),Ue((0,mr.l8)(28,"")))}window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:"Transfer",Transfer_SourceChainName:`${q.name}`,Transfer_SourceChainAsset:`${Y.name}`,Transfer_DestinationChainName:`${te.name}`,Transfer_DestinationChainAsset:`${X.name}`,Transfer_Amount:`${ie.toString()}`}),console.log("debug start"),o=await(0,xr.Le)(Pr,q,"-"===Tt?n.gasLimit:Tt,"-"===wt?n.gasPrice:wt,n,Y,ha,ha&&he.a_.ZkSync?fa:ve,Q,t.source.chainId),window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:"Transfer Status",Transfer_SourceChainName:`${q.name}`,Transfer_SourceChainAsset:`${Y.name}`,Transfer_DestinationChainName:`${te.name}`,Transfer_DestinationChainAsset:`${X.name}`,Transfer_Amount:`${ie.toString()}`,Transfer_Response:"1"}),console.log("debug end",o),vi(o.hash,e),qn(o.hash),fe(o.reclaimData)}catch(s){var t,n;if(window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:"Transfer Status",Transfer_SourceChainName:`${q.name}`,Transfer_SourceChainAsset:`${Y.name}`,Transfer_DestinationChainName:`${te.name}`,Transfer_DestinationChainAsset:`${X.name}`,Transfer_Amount:`${ie.toString()}`,Transfer_Response:"0"}),"4001"===(null===s||void 0===s||null===(t=s.code)||void 0===t?void 0:t.toString())||"ACTION_REJECTED"===(null===s||void 0===s||null===(n=s.code)||void 0===n?void 0:n.toString()))return _(!1),dn(!0),$e(!0),dt(!0),Ue((0,mr.l8)(20,"")),Hn([]),Ua(!1),Ha(!1),$a(),Fa(),Ia(),void Yn("");if("Error: Selected chain Id is incorrect"!==s.toString())return wr().log("swapCrossChain function error - ",{error:JSON.stringify(s)}),_(!1),dn(!0),$e(!0),dt(!0),Ue(g().get(s,"data.message","Error")),console.error("Error swapcrosschain - ",s),Hn([]),Ua(!1),Ha(!1),$a(),Fa(),Ia(),void Yn("");wr().log("Selected chain Id is incorrect - ",{error:JSON.stringify(s)}),_(!1),dn(!0),$e(!0),dt(!0),Ue((0,mr.l8)(26,"")),console.error("Error swapcrosschain - ",s),Hn([]),Ua(!1),Ha(!1),$a(),Fa(),Ia(),Yn("")}try{var a;l=await(0,xr.YW)(q,null===(a=o)||void 0===a?void 0:a.hash)}catch(s){wr().log("waitForTxnOnChain in swapCrossChain error - ",{error:JSON.stringify(s)}),console.log(s)}var r;l?Re((e=>!e)):v.Am.error((0,A.jsx)(ir,{summary:`${Zr} ${ve} ${Y?Y.symbol:""} for ${Ce} ${X?X.symbol:""}`,srcTxExplorerLink:(0,z.WT)(q.type,q.networkId,null===(r=o)||void 0===r?void 0:r.hash),dstTxExplorerLink:""}),{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}})():pi());else if(dn(!0),!As(Y&&Y.address,X&&X.address)){const e=(await ii(An)).txn;ma(e)}}else Va(!0);else De(!0)},isDisabled:Me,locked:Z||cn,icon:C,title:_n})]})]}),"true"!==(null===ar||void 0===ar?void 0:ar.toLowerCase())?za?(0,A.jsx)(Ai,{isSameChainSwap:Da,stableTokenAmountCarrot:Ba,showRewardBanner:za,coinPriceList:Ft,dstTxnHash:Gn,dstToken:Kn.address,dstSymbol:Kn.symbol,dstAmount:Kn.amount,sourceUsdBalance:ke}):(0,A.jsx)(Yr.tq,{style:{borderRadius:"14px",height:"155px",width:"100%"},children:(0,A.jsxs)(Yr.o5,{style:{display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"rgb(243, 191, 43)",gap:"5px",position:"relative"},children:[(0,A.jsx)("img",{src:Js}),(0,A.jsxs)(al,{children:[(0,A.jsx)(rl,{children:"Wheel of Fortune"}),(0,A.jsx)(il,{style:{paddingRight:"15px"},children:"Complete a transaction of min 50$ to spin the wheel and earn exciting rewards."})]})]})}):(0,A.jsx)(A.Fragment,{})]}),s&&W.IS_MAINNET&&"true"!==(null===ar||void 0===ar?void 0:ar.toLowerCase())&&za&&Number(Ba)>=50&&(0,A.jsx)(zo,{children:(0,A.jsx)(co,{isSameChainSwap:Da,stableTokenAmountCarrot:Ba,showRewardBanner:za})})]}),!1]})}),(0,A.jsx)(sr.Z,{})]})]})}},74946:(e,t,n)=>{n.d(t,{t:()=>l,T:()=>o});var a=n(64249),r=n(39707);const i=JSON.parse('{"M":[{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"target","type":"address"}],"name":"AddressEmptyCode","type":"error"},{"inputs":[{"internalType":"address","name":"implementation","type":"address"}],"name":"ERC1967InvalidImplementation","type":"error"},{"inputs":[],"name":"ERC1967NonPayable","type":"error"},{"inputs":[],"name":"ERC721EnumerableForbiddenBatchMint","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address","name":"owner","type":"address"}],"name":"ERC721IncorrectOwner","type":"error"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ERC721InsufficientApproval","type":"error"},{"inputs":[{"internalType":"address","name":"approver","type":"address"}],"name":"ERC721InvalidApprover","type":"error"},{"inputs":[{"internalType":"address","name":"operator","type":"address"}],"name":"ERC721InvalidOperator","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"ERC721InvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"}],"name":"ERC721InvalidReceiver","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"}],"name":"ERC721InvalidSender","type":"error"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ERC721NonexistentToken","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"ERC721OutOfBoundsIndex","type":"error"},{"inputs":[],"name":"EnforcedPause","type":"error"},{"inputs":[],"name":"ExpectedPause","type":"error"},{"inputs":[],"name":"FailedInnerCall","type":"error"},{"inputs":[],"name":"InvalidInitialization","type":"error"},{"inputs":[],"name":"NotInitializing","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"inputs":[],"name":"UUPSUnauthorizedCallContext","type":"error"},{"inputs":[{"internalType":"bytes32","name":"slot","type":"bytes32"}],"name":"UUPSUnsupportedProxiableUUID","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_fromTokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_toTokenId","type":"uint256"}],"name":"BatchMetadataUpdate","type":"event"},{"inputs":[{"internalType":"address","name":"initialOwner","type":"address"},{"internalType":"string","name":"baseTokenURI","type":"string"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint64","name":"version","type":"uint64"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"MetadataUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"safeMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseTokenURI","type":"string"}],"name":"setBaseTokenURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"string","name":"newTokenMetadata","type":"string"}],"name":"updateTokenURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"implementation","type":"address"}],"name":"Upgraded","type":"event"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"upgradeToAndCall","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_baseTokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"}],"name":"getMessageHash","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"proxiableUUID","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenExists","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UPGRADE_INTERFACE_VERSION","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]}'),s=JSON.parse('{"g":"0x738e7881C878e7EAC7A12eBCB2B284d95144C249"}'),o=()=>{let e=new a.Q(window.walletClient);return null===e||void 0===e?void 0:e.getSigner()},l=()=>{const e=o(),t=s.g,n=i.M;return{contract:new r.CH(t,n,e),signer:e}}},46220:()=>{}}]);