"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[448],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),c=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=c(n),u=r,k=s["".concat(d,".").concat(u)]||s[u]||m[u]||l;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[s]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6193:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const l={title:"EventSource \u670d\u52a1\u5668\u53d1\u9001\u4e8b\u4ef6",slug:"./eventsource"},i=void 0,o={unversionedId:"web/eventsource",id:"web/eventsource",title:"EventSource \u670d\u52a1\u5668\u53d1\u9001\u4e8b\u4ef6",description:"\u5b9a\u4e49",source:"@site/docs/web/eventsource.mdx",sourceDirName:"web",slug:"/web/eventsource",permalink:"/docs/web/eventsource",draft:!1,tags:[],version:"current",frontMatter:{title:"EventSource \u670d\u52a1\u5668\u53d1\u9001\u4e8b\u4ef6",slug:"./eventsource"},sidebar:"web",previous:{title:"Performance \u6027\u80fd",permalink:"/docs/web/performance"}},d={},c=[{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",level:2},{value:"SSE\u4e0eWebSocket\u533a\u522b",id:"sse\u4e0ewebsocket\u533a\u522b",level:3},{value:"\u6d4f\u89c8\u5668API EventSource",id:"\u6d4f\u89c8\u5668api-eventsource",level:2},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",level:3},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:3},{value:"\u4e8b\u4ef6",id:"\u4e8b\u4ef6",level:3},{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5",level:2},{value:"1. \u5ba2\u6237\u7aef\u521d\u59cb\u5316EventSource",id:"1-\u5ba2\u6237\u7aef\u521d\u59cb\u5316eventsource",level:3},{value:"2. \u5ba2\u6237\u7aef\u76d1\u542c\u4e8b\u4ef6",id:"2-\u5ba2\u6237\u7aef\u76d1\u542c\u4e8b\u4ef6",level:3},{value:"3. \u5ba2\u6237\u7aef\u81ea\u5b9a\u4e49\u4e8b\u4ef6",id:"3-\u5ba2\u6237\u7aef\u81ea\u5b9a\u4e49\u4e8b\u4ef6",level:3},{value:"4. \u670d\u52a1\u5668\u914d\u7f6e\u54cd\u5e94\u5934",id:"4-\u670d\u52a1\u5668\u914d\u7f6e\u54cd\u5e94\u5934",level:3},{value:"5. \u670d\u52a1\u5668\u53d1\u9001\u6d88\u606f",id:"5-\u670d\u52a1\u5668\u53d1\u9001\u6d88\u606f",level:3},{value:"data\u5b57\u6bb5",id:"data\u5b57\u6bb5",level:4},{value:"id\u5b57\u6bb5",id:"id\u5b57\u6bb5",level:4},{value:"event\u5b57\u6bb5",id:"event\u5b57\u6bb5",level:4},{value:"retry\u5b57\u6bb5",id:"retry\u5b57\u6bb5",level:4},{value:"\u6e90\u4ee3\u7801",id:"\u6e90\u4ee3\u7801",level:4},{value:"node \u670d\u52a1\u7aef",id:"node-\u670d\u52a1\u7aef",level:5},{value:"\u5ba2\u6237\u7aef",id:"\u5ba2\u6237\u7aef",level:5},{value:"6. \u6548\u679c\u5982\u4e0b",id:"6-\u6548\u679c\u5982\u4e0b",level:3}],p={toc:c},s="wrapper";function m(e){let{components:t,...l}=e;return(0,r.kt)(s,(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,r.kt)("p",null,"\u4e00\u4e2a\u53ef\u4ee5\u63a5\u6536\u670d\u52a1\u5668\u53d1\u9001\u4e8b\u4ef6\u7684Web\u63a5\u53e3\uff0c\u53ea\u80fd\u7531\u670d\u52a1\u5668\u5411Client\u63a8\u9001\u6570\u636e"),(0,r.kt)("p",null,"\u8be5\u5b9e\u4f8b\u6253\u5f00\u4e0eHTTP\u670d\u52a1\u5668\u7684\u6301\u4e45\u8fde\u63a5,\u76f4\u5230\u8c03\u7528EventSource.close()\u540e\u5173\u95ed"),(0,r.kt)("p",null,"\u6b63\u5e38\u6765\u8bf4\uff0cHTTP\u534f\u8bae\u65e0\u6cd5\u505a\u5230\u670d\u52a1\u5668\u4e3b\u52a8\u63a8\u9001\u4fe1\u606f\u3002\u4f46\u662f\u6709\u4e00\u79cd\u53d8\u901a\u65b9\u6cd5\uff0c\u5c31\u662f\u670d\u52a1\u5668\u5411\u5ba2\u6237\u7aef\u58f0\u660e\u63a5\u4e0b\u6765\u8981\u53d1\u7684\u4fe1\u606f\u662f\u6d41\u4fe1\u606f\uff0c\u8fd9\u65f6\u5ba2\u6237\u7aef\u4e0d\u4f1a\u5173\u95ed\u8fde\u63a5\uff0c\u4f1a\u4e00\u76f4\u7b49\u5f85\u670d\u52a1\u5668\u53d1\u9001\u65b0\u7684\u6570\u636e\u6d41\u3002\u672c\u8d28\u5c31\u662f\u4ee5\u6d41\u4fe1\u606f\u7684\u65b9\u5f0f\uff0c\u5b8c\u6210\u4e00\u6b21\u7528\u65f6\u5f88\u957f\u7684\u4e0b\u8f7d\u4efb\u52a1\u3002"),(0,r.kt)("p",null,"\u4e0e",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events"},"Server-sent events\uff08SSE\uff09"),"\u76f8\u5173"),(0,r.kt)("h3",{id:"sse\u4e0ewebsocket\u533a\u522b"},"SSE\u4e0eWebSocket\u533a\u522b"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"SSE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"WebSocket"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"SSE\u4f7f\u7528HTTP\u534f\u8bae"),(0,r.kt)("td",{parentName:"tr",align:"center"},"WebSocket\u662f\u4e00\u4e2a\u72ec\u7acb\u7684\u534f\u8bae")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"SSE\u8f7b\u91cf\u7ea7\uff0c\u4f7f\u7528\u7b80\u5355"),(0,r.kt)("td",{parentName:"tr",align:"center"},"WebScoket\u534f\u8bae\u76f8\u5bf9\u590d\u6742")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"SSE\u9ed8\u8ba4\u652f\u6301\u65ad\u7ebf\u91cd\u8fde"),(0,r.kt)("td",{parentName:"tr",align:"center"},"WebSokcet\u9700\u81ea\u5df1\u5b9e\u73b0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"SSE\u4e00\u822c\u7528\u6765\u4f20\u8f93\u6587\u672c\uff0c\u4e8c\u8fdb\u5236\u6570\u636e\u9700\u8981\u7f16\u7801\u540e\u4f20\u9001"),(0,r.kt)("td",{parentName:"tr",align:"center"},"WebSocket\u9ed8\u8ba4\u652f\u6301\u4f20\u9001\u4e8c\u8fdb\u5236\u6570\u636e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"SSE\u652f\u6301\u81ea\u5b9a\u4e49\u53d1\u9001\u7684\u6d88\u606f\u7c7b\u578b"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-")))),(0,r.kt)("h2",{id:"\u6d4f\u89c8\u5668api-eventsource"},"\u6d4f\u89c8\u5668API EventSource"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"new EventSource(url)\nnew EventSource(url, {\n  withCredentials: false // default\n})\n")),(0,r.kt)("h3",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\u5c5e\u6027"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"readyState"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u4e00\u4e2a\u53ea\u8bfb\u5c5e\u6027\uff0c\u8868\u793a\u5f53\u524d\u8fde\u63a5\u72b6\u6001",(0,r.kt)("br",null),"0 - connecting",(0,r.kt)("br",null),"1 - open",(0,r.kt)("br",null),"2 - closed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"url"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u8bf7\u6c42url")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"withCredentials"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u8de8\u57df\u65f6\u662f\u5426\u643a\u5e26cookie")))),(0,r.kt)("h3",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\u65b9\u6cd5"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"close"),(0,r.kt)("td",{parentName:"tr",align:"center"},"EventSource\u793a\u4f8b\u8c03\u7528close\u65b9\u6cd5\u540e\u4f1a\u5173\u95ed\u8fde\u63a5\uff0c\u5e76\u4e14\u5c06readyState\u72b6\u6001\u8bbe\u7f6e\u4e3a2")))),(0,r.kt)("h3",{id:"\u4e8b\u4ef6"},"\u4e8b\u4ef6"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\u4e8b\u4ef6"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u63cf\u8ff0(\u4e8b\u4ef6\u65e0\u6cd5\u53d6\u6d88\u3001\u5192\u6ce1)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"error")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u670d\u52a1\u5668\u8fde\u63a5\u65e0\u6cd5\u6253\u5f00\uff0c\u5c06\u4f1a\u89e6\u53d1\u9519\u8bef\u4e8b\u4ef6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"message")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u670d\u52a1\u5668\u8fd4\u56de\u6570\u636e\u65f6\u89e6\u53d1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"open")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u4e0e\u670d\u52a1\u5668\u8fde\u63a5\u65f6\u89e6\u53d1")))),(0,r.kt)("h2",{id:"\u57fa\u672c\u7528\u6cd5"},"\u57fa\u672c\u7528\u6cd5"),(0,r.kt)("h3",{id:"1-\u5ba2\u6237\u7aef\u521d\u59cb\u5316eventsource"},"1. \u5ba2\u6237\u7aef\u521d\u59cb\u5316EventSource"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let source;\nif ('EventSource' in window) {\n  source = new EventSource('http://127.0.0.1', {\n    withCredentials: true, // \u8de8\u57df\u65f6\u4e5f\u53ef\u4ee5\u53d1\u9001cookie\uff0c\u9ed8\u8ba4false\n  });\n} else {\n  document.write('\u5f53\u524d\u8bbe\u5907\u4e0d\u652f\u6301EventSource');\n}\n")),(0,r.kt)("h3",{id:"2-\u5ba2\u6237\u7aef\u76d1\u542c\u4e8b\u4ef6"},"2. \u5ba2\u6237\u7aef\u76d1\u542c\u4e8b\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let data = '';\nsource.addEventListener('open', function (event) {\n  console.log('\u8fde\u63a5\u5df2\u6253\u5f00')\n}, false);\n\nsource.addEventListener('message', function (event) {\n  let d = event.data; // \u5b57\u7b26\u4e32\n  data += d;\n  console.log(data);\n}, false);\n\nsource.addEventListener('error', function (event) {\n  // \u8fde\u63a5\u53d1\u751f\u9519\u8bef\uff0c\u53ef\u80fd\u662f\u7f51\u7edc\u95ee\u9898\uff0c\u4e5f\u53ef\u80fd\u662f\u670d\u52a1\u5668\u4e0d\u53ef\u7528\n}, false);\n\nsource.close(); // \u5728\u4e00\u5b9a\u65f6\u95f4\u5185\u6ca1\u53d1\u9001\u5b8c\u6570\u636e\uff0c\u5ba2\u6237\u7aef\u53ef\u4ee5\u4e3b\u52a8\u63d0\u524d\u5173\u95ed\u8fde\u63a5\n")),(0,r.kt)("h3",{id:"3-\u5ba2\u6237\u7aef\u81ea\u5b9a\u4e49\u4e8b\u4ef6"},"3. \u5ba2\u6237\u7aef\u81ea\u5b9a\u4e49\u4e8b\u4ef6"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u670d\u52a1\u5668\u53d1\u6765\u7684\u6570\u636e\uff0c\u4f1a\u89e6\u53d1EventSource\u5b9e\u4f8b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"message")," \u4e8b\u4ef6\uff0c\u4f46\u670d\u52a1\u5668\u4e5f\u53ef\u4ee5\u81ea\u5b9a\u4e49\u4e8b\u4ef6\uff0c\u6b64\u65f6\u53d1\u9001\u56de\u7684\u6570\u636e\u4e0d\u4f1a\u89e6\u53d1 ",(0,r.kt)("inlineCode",{parentName:"p"},"message")," \u4e8b\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"\u5ba2\u6237\u7aef\u811a\u672c","\u5ba2\u6237\u7aef\u811a\u672c":!0},"source.addEventListener('ping', function (event) {\n  console.log(event.data); // event.data \u662f\u5b57\u7b26\u4e32\n}, false);\n")),(0,r.kt)("h3",{id:"4-\u670d\u52a1\u5668\u914d\u7f6e\u54cd\u5e94\u5934"},"4. \u670d\u52a1\u5668\u914d\u7f6e\u54cd\u5e94\u5934"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// \u670d\u52a1\u5668\u9700\u8981\u54cd\u5e94\u5982\u4e0b\u54cd\u5e94\u5934\nContent-Type: text/event-stream // \u5b57\u7b26\u4e32\u7684\u4e8b\u4ef6\u6d41\u7c7b\u578b\nCache-Control: no-cache // \u4e0d\u7f13\u5b58\n")),(0,r.kt)("h3",{id:"5-\u670d\u52a1\u5668\u53d1\u9001\u6d88\u606f"},"5. \u670d\u52a1\u5668\u53d1\u9001\u6d88\u606f"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u6bcf\u884c\u6d88\u606f\u7531\u4e00\u884c\u6216\u8005\u591a\u884c\u6587\u5b57\u7ec4\u6210\uff0c\u5217\u51fa\u8be5\u6d88\u606f\u7684\u5b57\u6bb5\uff0c\u6bcf\u4e2a\u5b57\u6bb5\u7531\u5b57\u6bb5\u540d\u8868\u793a\uff0c\u540e\u9762\u662f\u5192\u53f7\uff0c\u7136\u540e\u662f\u8be5\u5b57\u6bb5\u7684\u6587\u672c\u503c\n\u89c4\u8303\u4e2d\u6709\u4ee5\u4e0b\u5b57\u6bb5"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"event")," \u4e00\u4e2a\u7528\u4e8e\u6807\u8bc6\u4e8b\u4ef6\u7c7b\u578b\u7684\u5b57\u7b26\u4e32\uff0c\u5236\u5b9a\u4e86\u8fd9\u4e2a\u5b57\u7b26\u4e32\u3002EventSource\u5b9e\u4f8b\u5fc5\u987b\u76d1\u542c\u6b64\u4e8b\u4ef6\uff0c\u800c\u4e0d\u662f ",(0,r.kt)("inlineCode",{parentName:"li"},"message"),"; \u5982\u679c\u4e00\u4e2a\u6d88\u606f\u6ca1\u6709\u6307\u5b9a\u4e8b\u4ef6\u540d\uff0c\u90a3\u4e48\u5c31\u9ed8\u8ba4\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"message")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"data"),"  \u6d88\u606f\u7684\u5185\u5bb9\uff0c\u5f53EventSource\u63a5\u6536\u5230\u591a\u4e2a\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"li"},"data:")," \u5f00\u5934\u7684\u8fde\u7eed\u884c\u65f6\uff0c\u4f1a\u5c06\u4ed6\u4eec\u8fde\u63a5\u8d77\u6765\uff0c\u5728\u4ed6\u4eec\u4e4b\u95f4\u63d2\u5165\u6362\u884c\u7b26\uff0c\u672b\u5c3e\u7684\u6362\u884c\u7b26\u4f1a\u88ab\u5220\u9664"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id"),"    \u4e8b\u4ef6ID\uff0c\u552f\u4e00\u6807\u8bc6\u6b64\u4e8b\u4ef6"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"retry")," \u6574\u578b\uff0c\u6beb\u79d2\u65f6\u95f4\u6233\u3002\u8868\u793a\u91cd\u65b0\u8fde\u63a5\u7684\u65f6\u95f4\uff0c\u5982\u679c\u4e0e\u670d\u52a1\u5668\u7684\u8fde\u63a5\u4e22\u5931\uff0c\u6d4f\u89c8\u5668\u5c06\u7b49\u5f85\u6307\u5b9a\u7684\u65f6\u95f4\uff0c\u7136\u540e\u5c1d\u8bd5\u91cd\u65b0\u8fde\u63a5"))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4e00\u884c\u6587\u672c\u4e2d\u4e0d\u5305\u542b\u5192\u53f7\uff0c\u5219\u6574\u884c\u6587\u672c\u4f1a\u88ab\u89e3\u6790\u6210\u4e3a\u5b57\u6bb5\u540d\uff0c\u5176\u5b57\u6bb5\u503c\u4e3a\u7a7a\u3002\u5982\u4e0b\n\u5982\u679c\u4e00\u4e2a\u6d88\u606f\u4ee5\u5192\u53f7\u5f00\u5934\u65f6\u662f\u6ce8\u91ca\u884c\uff0c\u4f1a\u88ab\u5ffd\u7565\uff0c\u53ef\u4ee5\u7528\u6765\u9632\u6b62\u8fde\u63a5\u8d85\u65f6\uff0c\u670d\u52a1\u5668\u5b9a\u671f\u53d1\u9001\u4e00\u6761\u6d88\u606f\u6ce8\u91ca\uff0c\u80fd\u4fdd\u6301\u8fde\u63a5\u4e0d\u65ad"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"this is a test stream\n\n// or\n\n: this is a test stream\n")),(0,r.kt)("p",{parentName:"admonition"},"\u8fd9\u6761\u6d88\u606f\u4f1a\u88ab\u7406\u89e3\u4e3a\u4e00\u4e2a\u5b57\u6bb5\u540d\uff0c\u4e0d\u5408\u6cd5\u7684\u5b57\u6bb5\u540d\u90fd\u4f1a\u88ab\u5ffd\u7565\n\u4ee5\u5192\u53f7\u5f00\u5934\u7684\u884c\u4e3a\u6ce8\u91ca\u884c\uff0c\u4f1a\u88ab\u5ffd\u7565")),(0,r.kt)("h4",{id:"data\u5b57\u6bb5"},"data\u5b57\u6bb5"),(0,r.kt)("p",null,"\u6570\u636e\u5185\u5bb9\u7528data\u5b57\u6bb5\u8868\u793a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"data: message\\n\\n\n")),(0,r.kt)("h4",{id:"id\u5b57\u6bb5"},"id\u5b57\u6bb5"),(0,r.kt)("p",null,"\u6570\u636e\u7684\u552f\u4e00\u6807\u8bc6\u7528id\u8868\u793a\uff0c\u5982\u679c\u65ad\u5f00\u8fde\u63a5\uff0c\u6d4f\u89c8\u5668\u4f1a\u53d1\u4e00\u4e2aHTTP\u5934\uff0c\u91cc\u9762\u643a\u5e26\u4e86\u4e00\u4e2a\u7279\u6b8a\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Last-Event-ID")," \u4fe1\u606f\uff0c\u670d\u52a1\u5668\u5c06\u6839\u636e\u6b64\u4fe1\u606f\u91cd\u5efa\u8fde\u63a5\u5e76\u540c\u6b65\u4fe1\u606f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"id: fd4321hf\\n\ndata: message\\n\\n\n")),(0,r.kt)("h4",{id:"event\u5b57\u6bb5"},"event\u5b57\u6bb5"),(0,r.kt)("p",null,"event\u5b57\u6bb5\u9ed8\u8ba4\u7f3a\u7701\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"message")," \u5ba2\u6237\u7aef\u53ef\u4ee5\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"addEventListener")," \u76d1\u542c\u6b64\u5b57\u6bb5\u5b9a\u4e49\u7684\u4e8b\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"event: ping\\n\nid: 43ghfdu3\\n\ndata: message\\n\\n\n")),(0,r.kt)("h4",{id:"retry\u5b57\u6bb5"},"retry\u5b57\u6bb5"),(0,r.kt)("p",null,"\u670d\u52a1\u5668\u53ef\u4ee5\u7528retry\u5b57\u6bb5\uff0c\u544a\u8bc9\u6d4f\u89c8\u5668\u65ad\u8fde\u540e\u91cd\u65b0\u53d1\u8d77\u8fde\u63a5\u7684\u65f6\u95f4\u95f4\u9694\uff08\u6beb\u79d2\uff09\n\u8fde\u63a5\u51fa\u9519\u6216\u8005retry\u65f6\u95f4\u5230\u671f\uff0c\u6d4f\u89c8\u5668\u90fd\u4f1a\u53d1\u8d77\u91cd\u8fde"),(0,r.kt)("h4",{id:"\u6e90\u4ee3\u7801"},"\u6e90\u4ee3\u7801"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u6e90\u4ee3\u7801\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"http://ruanyifeng.com/blog/2017/05/server-sent_events.html"},"Server-Sent Events \u6559\u7a0b"))),(0,r.kt)("h5",{id:"node-\u670d\u52a1\u7aef"},"node \u670d\u52a1\u7aef"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'var http = require("http");\n\nhttp.createServer(function (req, res) {\n  var fileName = "." + req.url;\n  console.log(req.rawHeaders) // \u5f53\u6536\u5230\u8bf7\u6c42\u65f6\uff0c\u6253\u5370Header\n  if (fileName === "./stream") {\n    res.writeHead(200, {\n      "Content-Type":"text/event-stream",\n      "Cache-Control":"no-cache",\n      "Connection":"keep-alive",\n      "Access-Control-Allow-Origin": \'*\',\n    });\n    res.write("retry: 10000\\n");\n    res.write("event: connectinit\\n");\n    res.write(`id: ${Math.random().toString().slice(2)}\\n`);\n    res.write("data: " + (new Date()) + "\\n\\n"); // \u53d1\u9001\u4e00\u6761\u521d\u59cb\u5316\u6d88\u606f\n\n    res.write("data: " + (new Date()) + "\\n\\n"); // \u5355\u72ec\u53d1\u9001\u7b2c\u4e8c\u6761\u6d88\u606f\n    res.write("data: " + (new Date()) + "\\n\\n"); // \u5355\u72ec\u53d1\u9001\u7b2c\u4e09\u6761\u6d88\u606f\n\n    interval = setInterval(function () {\n      res.write(`id: ${Math.random().toString().slice(2)}\\n`); // \u6bcf\u4e24\u79d2\u53d1\u4e00\u6761\u6d88\u606f\uff0c\u5e26\u6709\u4e0d\u540c\u7684id\n      res.write("data: " + (new Date()) + "\\n\\n");\n    }, 2000);\n\n    req.connection.addListener("close", function () {\n      console.log(\'connect-close\')\n      clearInterval(interval);\n    }, false);\n  }\n}).listen(8844, "127.0.0.1");\n')),(0,r.kt)("h5",{id:"\u5ba2\u6237\u7aef"},"\u5ba2\u6237\u7aef"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width\">\n  <title>JS Bin</title>\n</head>\n<body>\n<div id=\"example\"></div>\n<script>\n  var source = new EventSource('http://127.0.0.1:8844/stream');\n  var div = document.getElementById('example');\n  \n  source.onopen = function (event) {\n    div.innerHTML += '<p>Connection open ...</p>';\n  };\n  \n  source.onerror = function (event) {\n    div.innerHTML += '<p>Connection close.</p>';\n  };\n  \n  source.addEventListener('connectinit', function (event) { // \u7b2c\u4e00\u4e2a\u8bf7\u6c42\u662f 'connectinit' \u4e8b\u4ef6\n    console.log('init:' + event.lastEventId) // \u6765\u81ea\u670d\u52a1\u7aef\u7684\u7b2c\u4e00\u4e2a\u8bf7\u6c42\n    div.innerHTML += ('<p>Start time: ' + event.data + '</p>');\n  }, false);\n  \n  source.onmessage = function (event) { // \u9ed8\u8ba4\u76d1\u542c 'message' \u4e8b\u4ef6\n    console.log(event.lastEventId) // \u6253\u5370\u6765\u81ea\u670d\u52a1\u7aef\u7684eventId\uff0c\u5728\u5ba2\u6237\u7aef\u5c1d\u8bd5\u91cd\u65b0\u8fde\u63a5\u65f6\uff0c\u4f1a\u53d1\u8d77\u4e00\u4e2a\u65b0\u7684HTTP\u8bf7\u6c42\uff0c\u5176\u4e2d\u7684header\u5e26\u6709lasteventid\n    div.innerHTML += ('<p>Ping: ' + event.data + '</p>');\n  };\n  \n<\/script>\n</body>\n</html>\n")),(0,r.kt)("h3",{id:"6-\u6548\u679c\u5982\u4e0b"},"6. \u6548\u679c\u5982\u4e0b"),(0,r.kt)("p",null,"\u9875\u9762\u6253\u5f00\u540e"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u9996\u5148\u89e6\u53d1\u4e86 ",(0,r.kt)("inlineCode",{parentName:"li"},"open")," \u4e8b\u4ef6"),(0,r.kt)("li",{parentName:"ol"},"\u63a5\u7740\u89e6\u53d1\u4e86\u81ea\u5b9a\u4e49\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"connectinit")," \u4e8b\u4ef6"),(0,r.kt)("li",{parentName:"ol"},"\u63a5\u7740\u89e6\u53d1\u4e86\u9ed8\u8ba4\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"message")," \u4e8b\u4ef6\nconsole\u9762\u677f\u91cc\u6709\u6536\u5230\u4e8b\u4ef6\u65f6\u7684EventId")),(0,r.kt)("img",{src:n(7759).Z}),(0,r.kt)("p",null,"\u670d\u52a1\u5668\u5173\u95ed\u540e"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u89e6\u53d1\u4e86 ",(0,r.kt)("inlineCode",{parentName:"li"},"error")," \u4e8b\u4ef6"),(0,r.kt)("li",{parentName:"ol"},"\u7b49\u5f8510\u79d2\u540e\uff0c\u91cd\u65b0\u53d1\u8d77Http\u8bf7\u6c42\u5c1d\u8bd5\u91cd\u8fde\uff0c\u6b64\u65f6\u643a\u5e26\u4e86\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"li"},"Last-Event-ID"),", \u5373\u662f\u4e4b\u524d\u6536\u5230\u7684\u6700\u540e\u4e00\u4e2a\u4e8b\u4ef6\u7684EventId")),(0,r.kt)("img",{src:n(9757).Z}),(0,r.kt)("p",null,"\u670d\u52a1\u5668\u91cd\u542f\u540e"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u7b49\u5230retry\u8bbe\u7f6e\u7684\u91cd\u8bd5\u65f6\u95f4\u5230\u671f\u65f6\uff0c\u7ee7\u7eed\u53d1\u8d77\u540c\u6837\u7684EventSource\u8bf7\u6c42"),(0,r.kt)("li",{parentName:"ol"},"\u670d\u52a1\u5668\u6536\u5230\u5bf9\u5e94\u7684\u8bf7\u6c42\uff0c\u5e76\u4e14\u8bf7\u6c42\u7684Header\u91cc\u6709\u4e00\u4e2a\u7279\u6b8a\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"Last-Event-ID"),"\u3002\uff08\u670d\u52a1\u5668\u53ef\u4ee5\u57fa\u4e8e\u8fd9\u4e2aID\u505a\u65ad\u7ebf\u91cd\u8fde\u64cd\u4f5c\uff09")),(0,r.kt)("img",{src:n(5556).Z}))}m.isMDXComponent=!0},7759:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/eventsource-1-90adb75c382a01865e5fb210d9b1514e.png"},9757:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/eventsource-2-7e7951b31d1df98f1977f8e8bd37b42c.png"},5556:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/eventsource-3-55278b85106a72c552df41d0c9301ca4.png"}}]);