import{j as jsxRuntime,s as styled,r as react,a as reactDom}from"./vendor.c4d7e8de.js";const p=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}};p();const numberType=(e,t)=>{const{currentValue:n,setCurrentValue:s}=e,r=Number(t);(r||r===0)&&s(n+r.toString())},operatorType=(e,t)=>{const{history:n,setHistory:s,currentValue:r,setCurrentValue:o}=e;if(!(r||n.length))return;const l=[...n],c={value:r,type:"number"};if(r)l.push(c),l.push(t);else{const a=l.length-1;l[a]=t}s(l),o("")},resultType=states=>{const{history,setHistory,currentValue,setCurrentValue}=states;if(!currentValue&&!history.length)return;const resultString=history.map(e=>`${e.operator||e.value}`).join(""),evalResult=eval(resultString+currentValue);setHistory([]),setCurrentValue(evalResult.toString())},percentType=(e,t)=>{const{history:n,currentValue:s,setCurrentValue:r}=e,o=parseInt(n[0].value),l=parseInt(s);o&&l&&r(percentage.toString())},signType=e=>{const{currentValue:t,setCurrentValue:n}=e;if(t&&t!==0){const s=t*-1;n(s.toString())}},periodType=e=>{const{currentValue:t,setCurrentValue:n}=e,s=!t.includes(".");t&&s&&n(t+".")},backspaceType=e=>{const{currentValue:t,setCurrentValue:n}=e;t&&n(t.slice(0,-1))},inputHandler=(e,t)=>{if(!t)return;const{value:n,type:s}=t;switch(s){case"number":numberType(e,n);break;case"operator":operatorType(e,t);break;case"result":resultType(e);break;case"period":periodType(e);break;case"sign":signType(e);break;case"percent":percentType(e);break;case"backspace":backspaceType(e);break;case"clear":e.setCurrentValue(""),e.setHistory([]);break}},jsx=jsxRuntime.exports.jsx,jsxs=jsxRuntime.exports.jsxs;var Display=({history:e,currentValue:t})=>{const n=c=>c.map(a=>a.type==="number"?a.value:a.type==="operator"?" "+a.value+" ":null),s=(c,a)=>{const u=a[a.length-1],i=a[a.length-2];return!c&&!a.length?"0":!c&&u.type==="operator"?i.value:c},r=(c,a)=>{const u=a.current,i=c.current,x=100,g=u.textContent.length,v=i.offsetWidth+x,d=Math.floor(v/g),y=72;let f=y;d<y&&(f=d),a.current.style.fontSize=f+"px"},o=react.exports.useRef(),l=react.exports.useRef();return react.exports.useEffect(()=>r(o,l),[t]),jsxs(Display$1,{children:[jsx(History,{children:e&&n(e)}),jsx(Result,{ref:o,children:jsx("span",{"data-testid":"resultText",ref:l,children:e?s(t,e):0})})]})};const Display$1=styled.div`
  display: flex;
  background: #fff9f9;
  flex-direction: column;
  height: calc(100% - 350px);
`,History=styled.div`
  color: gray;
  flex-grow: 1;
  display: flex;
  padding: 15px;
  font-size: 27px;
  padding-top: 41px;
  align-items: center;
  justify-content: flex-end;
`,Result=styled.div`
  display: flex;
  padding: 15px;
  font-size: 55px;
  overflow: hidden;
  align-items: center;
  justify-content: flex-end;
  span { transition: all .1s ease; }
`,keypadData=[{value:"c",type:"clear"},{value:"%",type:"percent"},{value:"\xF7",type:"operator",operator:"/"},{value:"<",type:"backspace"},{value:"7",type:"number"},{value:"8",type:"number"},{value:"9",type:"number"},{value:"\xD7",type:"operator",operator:"*"},{value:"4",type:"number"},{value:"5",type:"number"},{value:"6",type:"number"},{value:"+",type:"operator",operator:"+"},{value:"1",type:"number"},{value:"2",type:"number"},{value:"3",type:"number"},{value:"-",type:"operator",operator:"-"},{value:"\xB1",type:"sign"},{value:"0",type:"number"},{value:".",type:"period"},{value:"=",type:"result"}];var Keypad=({handleClick:e})=>jsx(Keypad$1,{children:jsx(Buttons,{children:(()=>keypadData.map((n,s)=>{const r=()=>e(n),{value:o}=n;return jsx("button",{onClick:r,children:o},s)}))()})});const Keypad$1=styled.div`
  height: 370px;
  background: var(--bg-color-2);
`,Buttons=styled.div`
  display: grid;
  grid-template: repeat(5, 75px) / repeat(4, 1fr);

  button {
    color: #444;
    padding: 5px;
    border: none; 
    display: flex;
    cursor: pointer;
    font-size: 22px;
    background: #ffe4f0;
    align-items: center;
    justify-content: center;
    outline: 1px solid rgba(136, 14, 79, 0.1);

    &:nth-of-type(4n + 4) {
      color: #eee;
      background: #ff9ba0;
    }
    &:last-of-type { background: #fe6f76; }
    &:hover {
      z-index: 10;
      box-shadow: 10px 10px 18px -6px #e91e63;
    }
    &:active {
      box-shadow: inset 10px 10px 18px -6px #e91e63;
    }
  }
`;var Calculator=()=>{const[e,t]=react.exports.useState([]),[n,s]=react.exports.useState("");return jsxs(Calculator$1,{children:[jsx(Display,{history:e,currentValue:n,"data-testid":"displayComponent"}),jsx(Keypad,{handleClick:o=>inputHandler({history:e,setHistory:t,currentValue:n,setCurrentValue:s},o)})]})};const Calculator$1=styled.div`
  width: 300px;
  height: 580px;
  display: flex;
  overflow: hidden;
  position: relative;
  border-radius: 10px;
  flex-direction: column;
  box-shadow: 1px -1px 20px rgba(0, 0, 0, 0.15);
`;var App=()=>jsx(App$1,{children:jsx(Calculator,{})});const App$1=styled.div`
  --color-bg: #FCD07A;
  --bg-color-1: #9DB3ED;
  --bg-color-2: #F9F9F9;
  --text-color-1: #0B1537;
  --text-color-2: #636363;

  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-bg);
`;var index="";const root=document.getElementById("root");reactDom.exports.render(jsx(react.exports.StrictMode,{children:jsx(App,{})}),root);
