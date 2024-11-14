(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[98212],{89084:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var i=n(13274),r=n(8438),o=(n(67310),n(28332)),s=n.n(o),a=n(5237);n(34909);const l={id:"gravitino-rest-api",title:"Gravitino REST API",description:"Defines the specification for the first version of the Gravitino REST API.",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},c=void 0,d={id:"api/rest/gravitino-rest-api",title:"Gravitino REST API",description:"Defines the specification for the first version of the Gravitino REST API.",source:"@site/versioned_docs/version-0.6.0-incubating/api/rest/gravitino-rest-api.info.mdx",sourceDirName:"api/rest",slug:"/api/rest/gravitino-rest-api",permalink:"/docs/0.6.0-incubating/api/rest/gravitino-rest-api",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"0.6.0-incubating",lastUpdatedBy:"Qian Xia",lastUpdatedAt:1731578623e3,sidebarPosition:0,frontMatter:{id:"gravitino-rest-api",title:"Gravitino REST API",description:"Defines the specification for the first version of the Gravitino REST API.",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},sidebar:"docs",previous:{title:"Use Gravitino Python Client",permalink:"/docs/0.6.0-incubating/how-to-use-gravitino-python-client"},next:{title:"List metalakes",permalink:"/docs/0.6.0-incubating/api/rest/list-metalakes"}},h={},u=[];function p(e){const t={a:"a",p:"p",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{className:"theme-doc-version-badge badge badge--secondary",children:(0,i.jsx)(t.p,{children:"Version: 0.4.0"})}),"\n",(0,i.jsx)("h1",{className:"openapi__heading",children:(0,i.jsx)(t.p,{children:"Gravitino REST API"})}),"\n",(0,i.jsx)(t.p,{children:"Defines the specification for the first version of the Gravitino REST API."}),"\n",(0,i.jsxs)("div",{style:{marginBottom:"2rem"},children:[(0,i.jsx)("h2",{id:"authentication",style:{marginBottom:"1rem"},children:(0,i.jsx)(t.p,{children:"Authentication"})}),(0,i.jsxs)(s(),{className:"openapi-tabs__security-schemes",children:[(0,i.jsxs)(a.default,{label:"OAuth 2.0: OAuth2WithJWT",value:"OAuth2WithJWT",children:[(0,i.jsx)(t.p,{children:"OAuth2 with JWT"}),(0,i.jsx)("div",{children:(0,i.jsx)("table",{children:(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:(0,i.jsx)(t.p,{children:"Security Scheme Type:"})}),(0,i.jsx)("td",{children:(0,i.jsx)(t.p,{children:"oauth2"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:(0,i.jsx)(t.p,{children:"OAuth Flow (clientCredentials):"})}),(0,i.jsxs)("td",{children:[(0,i.jsx)("p",{children:(0,i.jsxs)(t.p,{children:["Token URL: ",(0,i.jsx)(t.a,{href:"https://external-oauth-server.com/token",children:"https://external-oauth-server.com/token"})]})}),(0,i.jsx)("span",{children:(0,i.jsx)(t.p,{children:"Scopes:"})}),(0,i.jsx)("ul",{children:(0,i.jsx)("li",{children:(0,i.jsx)(t.p,{children:"serviceAudience: The audience name when Gravitino uses OAuth as the authenticator."})})})]})]})]})})})]}),(0,i.jsx)(a.default,{label:"HTTP: Basic Auth",value:"BasicAuth",children:(0,i.jsx)("div",{children:(0,i.jsx)("table",{children:(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:(0,i.jsx)(t.p,{children:"Security Scheme Type:"})}),(0,i.jsx)("td",{children:(0,i.jsx)(t.p,{children:"http"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:(0,i.jsx)(t.p,{children:"HTTP Authorization Scheme:"})}),(0,i.jsx)("td",{children:(0,i.jsx)(t.p,{children:"basic"})})]})]})})})}),(0,i.jsx)(a.default,{label:"Kerberos Auth",value:"KerberosAuth",children:(0,i.jsx)("div",{children:(0,i.jsx)("table",{children:(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:(0,i.jsx)(t.p,{children:"Security Scheme Type:"})}),(0,i.jsx)("td",{children:(0,i.jsx)(t.p,{children:"http"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:(0,i.jsx)(t.p,{children:"HTTP Authorization Scheme:"})}),(0,i.jsx)("td",{children:(0,i.jsx)(t.p,{children:"negotiate"})})]})]})})})})]})]}),"\n",(0,i.jsxs)("div",{style:{marginBottom:"var(--ifm-paragraph-margin-bottom)"},children:[(0,i.jsx)("h3",{style:{marginBottom:"0.25rem"},children:(0,i.jsx)(t.p,{children:"License"})}),(0,i.jsx)("a",{href:"https://www.apache.org/licenses/LICENSE-2.0.html",children:(0,i.jsx)(t.p,{children:"Apache 2.0"})})]})]})}function f(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},34909:function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=i(n(79474)),o=i(n(4972));t.default=function(e){let{url:t,proxy:n}=e;return r.default.createElement("div",{style:{float:"right"},className:"dropdown dropdown--hoverable dropdown--right"},r.default.createElement("button",{className:"export-button button button--sm button--secondary"},"Export"),r.default.createElement("ul",{className:"export-dropdown dropdown__menu"},r.default.createElement("li",null,r.default.createElement("a",{onClick:e=>{e.preventDefault(),(e=>{let t;(e.endsWith("json")||e.endsWith("yaml")||e.endsWith("yml"))&&(t=e.substring(e.lastIndexOf("/")+1)),o.default.saveAs(e,t||"openapi.txt")})(`${t}`)},className:"dropdown__link",href:`${t}`},"OpenAPI Spec"))))}},67310:function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=i(n(79474)),o=n(4393),s=i(n(7175)),a=i(n(35008));t.default=function(e){const{colorMode:t}=(0,o.useColorMode)(),{logo:n,darkLogo:i}=e,l=()=>"dark"===t?i?.altText??n?.altText:n?.altText,c=(0,s.default)(n?.url),d=(0,s.default)(i?.url);return n&&i?r.default.createElement(a.default,{alt:l(),sources:{light:c,dark:d},className:"openapi__logo"}):n||i?r.default.createElement(a.default,{alt:l(),sources:{light:c??d,dark:c??d},className:"openapi__logo"}):void 0}},4972:function(e,t,n){var i,r,o,s=n(65640);r=[],void 0===(o="function"==typeof(i=function(){"use strict";function t(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(s.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function i(e,t,n){var i=new XMLHttpRequest;i.open("GET",e),i.responseType="blob",i.onload=function(){c(i.response,t,n)},i.onerror=function(){s.error("could not download file")},i.send()}function r(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function o(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(i){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var a="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n.g&&n.g.global===n.g?n.g:void 0,l=a.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=a.saveAs||("object"!=typeof window||window!==a?function(){}:"download"in HTMLAnchorElement.prototype&&!l?function(e,t,n){var s=a.URL||a.webkitURL,l=document.createElement("a");t=t||e.name||"download",l.download=t,l.rel="noopener","string"==typeof e?(l.href=e,l.origin===location.origin?o(l):r(l.href)?i(e,t,n):o(l,l.target="_blank")):(l.href=s.createObjectURL(e),setTimeout((function(){s.revokeObjectURL(l.href)}),4e4),setTimeout((function(){o(l)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,s){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,s),n);else if(r(e))i(e,n,s);else{var a=document.createElement("a");a.href=e,a.target="_blank",setTimeout((function(){o(a)}))}}:function(e,t,n,r){if((r=r||open("","_blank"))&&(r.document.title=r.document.body.innerText="downloading..."),"string"==typeof e)return i(e,t,n);var o="application/octet-stream"===e.type,s=/constructor/i.test(a.HTMLElement)||a.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||o&&s||l)&&"undefined"!=typeof FileReader){var d=new FileReader;d.onloadend=function(){var e=d.result;e=c?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=e:location=e,r=null},d.readAsDataURL(e)}else{var h=a.URL||a.webkitURL,u=h.createObjectURL(e);r?r.location=u:location.href=u,r=null,setTimeout((function(){h.revokeObjectURL(u)}),4e4)}});a.saveAs=c.saveAs=c,e.exports=c})?i.apply(t,r):i)||(e.exports=o)}}]);