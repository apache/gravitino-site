/*! For license information please see 1f391b9e.bef09591.js.LICENSE.txt */
"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[66061],{82794:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});var o=n(79474),s=n(22972),r=n(13526),c=n(94275),a=n(71026),l=n(97008);const i={codeBlockContainer:"codeBlockContainer_AOyn"};var d=n(13274);function u(e){let{as:t,...n}=e;const o=(0,c.A)(),s=(0,l.M$)(o);return(0,d.jsx)(t,{...n,style:s,className:(0,r.A)(n.className,i.codeBlockContainer,a.G.common.codeBlock)})}const m={codeBlockContent:"codeBlockContent_Co5c",codeBlockTitle:"codeBlockTitle_Nphj",codeBlock:"codeBlock_y4DS",codeBlockStandalone:"codeBlockStandalone_yp6b",codeBlockLines:"codeBlockLines_sIFz",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_yFbg",buttonGroup:"buttonGroup_cdYO"};function f(e){let{children:t,className:n}=e;return(0,d.jsx)(u,{as:"pre",tabIndex:0,className:(0,r.A)(m.codeBlockStandalone,"thin-scrollbar",n),children:(0,d.jsx)("code",{className:m.codeBlockLines,children:t})})}var p=n(47441),h=n(3002),g=n(40342);const x={codeLine:"codeLine_E0pF",codeLineNumber:"codeLineNumber_J8Jk",codeLineContent:"codeLineContent_Wy7l"};function v(e){let{line:t,classNames:n,showLineNumbers:o,getLineProps:s,getTokenProps:c}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const a=s({line:t,className:(0,r.A)(n,o&&x.codeLine)}),l=t.map(((e,t)=>(0,d.jsx)("span",{...c({token:e})},t)));return(0,d.jsxs)("span",{...a,children:[o?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("span",{className:x.codeLineNumber}),(0,d.jsx)("span",{className:x.codeLineContent,children:l})]}):l,(0,d.jsx)("br",{})]})}var b=n(65987),y=n(45086);function j(e){return(0,d.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,d.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function C(e){return(0,d.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,d.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}const N={copyButtonCopied:"copyButtonCopied_LknT",copyButtonIcons:"copyButtonIcons_dpZn",copyButtonIcon:"copyButtonIcon_PWaR",copyButtonSuccessIcon:"copyButtonSuccessIcon_yMzp"};function k(e){let{code:t,className:n}=e;const[s,c]=(0,o.useState)(!1),a=(0,o.useRef)(void 0),l=(0,o.useCallback)((()=>{(0,b.default)(t),c(!0),a.current=window.setTimeout((()=>{c(!1)}),1e3)}),[t]);return(0,o.useEffect)((()=>()=>window.clearTimeout(a.current)),[]),(0,d.jsx)("button",{type:"button","aria-label":s?(0,y.translate)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,y.translate)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,y.translate)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,r.A)("clean-btn",n,N.copyButton,s&&N.copyButtonCopied),onClick:l,children:(0,d.jsxs)("span",{className:N.copyButtonIcons,"aria-hidden":"true",children:[(0,d.jsx)(j,{className:N.copyButtonIcon}),(0,d.jsx)(C,{className:N.copyButtonSuccessIcon})]})})}function L(e){return(0,d.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,d.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}const A={wordWrapButtonIcon:"wordWrapButtonIcon_CAdj",wordWrapButtonEnabled:"wordWrapButtonEnabled_UJEl"};function B(e){let{className:t,onClick:n,isEnabled:o}=e;const s=(0,y.translate)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,d.jsx)("button",{type:"button",onClick:n,className:(0,r.A)("clean-btn",t,o&&A.wordWrapButtonEnabled),"aria-label":s,title:s,children:(0,d.jsx)(L,{className:A.wordWrapButtonIcon,"aria-hidden":"true"})})}function _(e){let{children:t,className:n="",metastring:o,title:s,showLineNumbers:a,language:i}=e;const{prism:{defaultLanguage:f,magicComments:x}}=(0,p.p)(),b=function(e){return e?.toLowerCase()}(i??(0,l.Op)(n)??f),y=(0,c.A)(),j=(0,h.f)(),C=(0,l.wt)(o)||s,{lineClassNames:N,code:L}=(0,l.Li)(t,{metastring:o,language:b,magicComments:x}),A=a??(0,l._u)(o);return(0,d.jsxs)(u,{as:"div",className:(0,r.A)(n,b&&!n.includes(`language-${b}`)&&`language-${b}`),children:[C&&(0,d.jsx)("div",{className:m.codeBlockTitle,children:C}),(0,d.jsxs)("div",{className:m.codeBlockContent,children:[(0,d.jsx)(g.Highlight,{theme:y,code:L,language:b??"text",children:e=>{let{className:t,style:n,tokens:o,getLineProps:s,getTokenProps:c}=e;return(0,d.jsx)("pre",{tabIndex:0,ref:j.codeBlockRef,className:(0,r.A)(t,m.codeBlock,"thin-scrollbar"),style:n,children:(0,d.jsx)("code",{className:(0,r.A)(m.codeBlockLines,A&&m.codeBlockLinesWithNumbering),children:o.map(((e,t)=>(0,d.jsx)(v,{line:e,getLineProps:s,getTokenProps:c,classNames:N[t],showLineNumbers:A},t)))})})}}),(0,d.jsxs)("div",{className:m.buttonGroup,children:[(j.isEnabled||j.isCodeScrollable)&&(0,d.jsx)(B,{className:m.codeButton,onClick:()=>j.toggle(),isEnabled:j.isEnabled}),(0,d.jsx)(k,{className:m.codeButton,code:L})]})]})]})}function w(e){let{children:t,...n}=e;const r=(0,s.default)(),c=function(e){return o.Children.toArray(e).some((e=>(0,o.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),a="string"==typeof c?_:f;return(0,d.jsx)(a,{...n,children:c},String(r))}},1827:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});n(79474);var o=n(13526),s=n(51565),r=n(71026),c=n(55312),a=n(40566),l=n(26009),i=n(47608),d=n(91656);const u={mdxPageWrapper:"mdxPageWrapper_X9Df"};var m=n(13274);function f(e){const{content:t}=e,{metadata:{title:n,editUrl:f,description:p,frontMatter:h,unlisted:g,lastUpdatedBy:x,lastUpdatedAt:v},assets:b}=t,{keywords:y,wrapperClassName:j,hide_table_of_contents:C}=h,N=b.image??h.image,k=!!(f||v||x);return(0,m.jsx)(s.e3,{className:(0,o.A)(j??r.G.wrapper.mdxPages,r.G.page.mdxPage),children:(0,m.jsxs)(c.A,{children:[(0,m.jsx)(s.be,{title:n,description:p,keywords:y,image:N}),(0,m.jsx)("main",{className:"container container--fluid margin-vert--lg",children:(0,m.jsxs)("div",{className:(0,o.A)("row",u.mdxPageWrapper),children:[(0,m.jsxs)("div",{className:(0,o.A)("col",!C&&"col--8"),children:[g&&(0,m.jsx)(i.default,{}),(0,m.jsx)("article",{children:(0,m.jsx)(a.A,{children:(0,m.jsx)(t,{})})}),k&&(0,m.jsx)(d.A,{className:(0,o.A)("margin-top--sm",r.G.pages.pageFooterEditMetaRow),editUrl:f,lastUpdatedAt:v,lastUpdatedBy:x})]}),!C&&t.toc.length>0&&(0,m.jsx)("div",{className:"col col--2",children:(0,m.jsx)(l.A,{toc:t.toc,minHeadingLevel:h.toc_min_heading_level,maxHeadingLevel:h.toc_max_heading_level})})]})})]})})}},26009:(e,t,n)=>{n.d(t,{A:()=>i});n(79474);var o=n(13526),s=n(59051);const r={tableOfContents:"tableOfContents_l8Oo",docItemContainer:"docItemContainer_wwiO"};var c=n(13274);const a="table-of-contents__link toc-highlight",l="table-of-contents__link--active";function i(e){let{className:t,...n}=e;return(0,c.jsx)("div",{className:(0,o.A)(r.tableOfContents,"thin-scrollbar",t),children:(0,c.jsx)(s.A,{...n,linkClassName:a,linkActiveClassName:l})})}},59051:(e,t,n)=>{n.d(t,{A:()=>u});var o=n(79474),s=n(47441),r=n(62260),c=n(34075),a=n(4661),l=n(13274);function i(e){let{toc:t,className:n,linkClassName:o,isChild:s}=e;return t.length?(0,l.jsx)("ul",{className:s?void 0:n,children:t.map((e=>(0,l.jsxs)("li",{children:[(0,l.jsx)(a.default,{to:`#${e.id}`,className:o??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,l.jsx)(i,{isChild:!0,toc:e.children,className:n,linkClassName:o})]},e.id)))}):null}const d=o.memo(i);function u(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:a="table-of-contents__link",linkActiveClassName:i,minHeadingLevel:u,maxHeadingLevel:m,...f}=e;const p=(0,s.p)(),h=u??p.tableOfContents.minHeadingLevel,g=m??p.tableOfContents.maxHeadingLevel,x=(0,r.h)({toc:t,minHeadingLevel:h,maxHeadingLevel:g}),v=(0,o.useMemo)((()=>{if(a&&i)return{linkClassName:a,linkActiveClassName:i,minHeadingLevel:h,maxHeadingLevel:g}}),[a,i,h,g]);return(0,c.i)(v),(0,l.jsx)(d,{toc:x,className:n,linkClassName:a,...f})}},47608:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});n(79474);var o=n(13526),s=n(19080),r=n(71026),c=n(51885),a=n(13274);function l(e){let{className:t}=e;return(0,a.jsx)(c.A,{type:"caution",title:(0,a.jsx)(s.Rc,{}),className:(0,o.A)(t,r.G.common.unlistedBanner),children:(0,a.jsx)(s.Uh,{})})}function i(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.AE,{}),(0,a.jsx)(l,{...e})]})}},34075:(e,t,n)=>{n.d(t,{i:()=>l});var o=n(79474),s=n(47441);function r(e){const t=e.getBoundingClientRect();return t.top===t.bottom?r(e.parentNode):t}function c(e,t){let{anchorTopOffset:n}=t;const o=e.find((e=>r(e).top>=n));if(o){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(r(o))?o:e[e.indexOf(o)-1]??null}return e[e.length-1]??null}function a(){const e=(0,o.useRef)(0),{navbar:{hideOnScroll:t}}=(0,s.p)();return(0,o.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function l(e){const t=(0,o.useRef)(void 0),n=a();(0,o.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:o,linkActiveClassName:s,minHeadingLevel:r,maxHeadingLevel:a}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(o),l=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const o=[];for(let s=t;s<=n;s+=1)o.push(`h${s}.anchor`);return Array.from(document.querySelectorAll(o.join()))}({minHeadingLevel:r,maxHeadingLevel:a}),i=c(l,{anchorTopOffset:n.current}),d=e.find((e=>i&&i.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(s),e.classList.add(s),t.current=e):e.classList.remove(s)}(e,e===d)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])}},62260:(e,t,n)=>{n.d(t,{h:()=>a,v:()=>r});var o=n(79474);function s(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const o=n.slice(2,e.level);e.parentIndex=Math.max(...o),n[e.level]=t}));const o=[];return t.forEach((e=>{const{parentIndex:n,...s}=e;n>=0?t[n].children.push(s):o.push(s)})),o}function r(e){return(0,o.useMemo)((()=>s(e)),[e])}function c(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:o}=e;return t.flatMap((e=>{const t=c({toc:e.children,minHeadingLevel:n,maxHeadingLevel:o});return function(e){return e.level>=n&&e.level<=o}(e)?[{...e,children:t}]:t}))}function a(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return(0,o.useMemo)((()=>c({toc:s(t),minHeadingLevel:n,maxHeadingLevel:r})),[t,n,r])}},19080:(e,t,n)=>{n.d(t,{AE:()=>l,Rc:()=>c,Uh:()=>a});n(79474);var o=n(45086),s=n(21099),r=n(13274);function c(){return(0,r.jsx)(o.default,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function a(){return(0,r.jsx)(o.default,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function l(){return(0,r.jsx)(s.A,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}},27287:(e,t,n)=>{n.d(t,{A:()=>w});var o=n(79474),s=n(21099),r=n(82794),c=n(51630),a=n(13274);var l=n(4661);var i=n(47758);function d(e){const t=o.Children.toArray(e.children),n=t.find((e=>o.isValidElement(e)&&"summary"===e.type)),s=(0,a.jsx)(a.Fragment,{children:t.filter((e=>e!==n))});return(0,a.jsx)(i.A,{...e,summary:n,children:s})}var u=n(54345);function m(e){return(0,a.jsx)(u.default,{...e})}var f=n(13526);const p="containsTaskList_kggB";function h(e){if(void 0!==e)return(0,f.A)(e,e?.includes("contains-task-list")&&p)}var g=n(18422);const x="img_CujE";var v=n(51885),b=n(515),y=n(83178),j=n(67269),C=n(71813),N=n.n(C);const k=e=>{const{url:t,others:n}=e;return(0,a.jsx)("div",{className:"aspect-video w-full object-cover",children:(0,a.jsx)(N(),{width:"100%",height:"100%",url:t,...n})})};var L=n(75863),A=n(64323);const B="highlight_vY2g",_=e=>{let{children:t,className:n,bg:o,color:s}=e;const r=(0,f.A)(n,B);return(0,a.jsx)("span",{className:r,style:{color:s||"var(--theme-button-primary-text-color)",backgroundColor:o||"var(--theme-button-primary-background-color)"},children:t})},w={Head:s.A,details:d,Details:d,code:function(e){return function(e){return void 0!==e.children&&o.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))}(e)?(0,a.jsx)(c.A,{...e}):(0,a.jsx)(r.default,{...e})},a:function(e){return(0,a.jsx)(l.default,{...e})},pre:function(e){return(0,a.jsx)(a.Fragment,{children:e.children})},ul:function(e){return(0,a.jsx)("ul",{...e,className:h(e.className)})},li:function(e){return(0,g.A)().collectAnchor(e.id),(0,a.jsx)("li",{...e})},img:function(e){return(0,a.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(t=e.className,(0,f.A)(t,x))});var t},h1:e=>(0,a.jsx)(m,{as:"h1",...e}),h2:e=>(0,a.jsx)(m,{as:"h2",...e}),h3:e=>(0,a.jsx)(m,{as:"h3",...e}),h4:e=>(0,a.jsx)(m,{as:"h4",...e}),h5:e=>(0,a.jsx)(m,{as:"h5",...e}),h6:e=>(0,a.jsx)(m,{as:"h6",...e}),admonition:v.A,mermaid:b.A,Icon:y.In,Image:j.A,Video:k,Tabs:L.A,TabItem:A.default,Highlight:_}},26936:(e,t)=>{var n,o=Symbol.for("react.element"),s=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),i=Symbol.for("react.context"),d=Symbol.for("react.server_context"),u=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),f=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),g=Symbol.for("react.offscreen");function x(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case r:case a:case c:case m:case f:return e;default:switch(e=e&&e.$$typeof){case d:case i:case u:case h:case p:case l:return e;default:return t}}case s:return t}}}n=Symbol.for("react.module.reference"),t.ContextConsumer=i,t.ContextProvider=l,t.Element=o,t.ForwardRef=u,t.Fragment=r,t.Lazy=h,t.Memo=p,t.Portal=s,t.Profiler=a,t.StrictMode=c,t.Suspense=m,t.SuspenseList=f,t.isAsyncMode=function(){return!1},t.isConcurrentMode=function(){return!1},t.isContextConsumer=function(e){return x(e)===i},t.isContextProvider=function(e){return x(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return x(e)===u},t.isFragment=function(e){return x(e)===r},t.isLazy=function(e){return x(e)===h},t.isMemo=function(e){return x(e)===p},t.isPortal=function(e){return x(e)===s},t.isProfiler=function(e){return x(e)===a},t.isStrictMode=function(e){return x(e)===c},t.isSuspense=function(e){return x(e)===m},t.isSuspenseList=function(e){return x(e)===f},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===r||e===a||e===c||e===m||e===f||e===g||"object"==typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===p||e.$$typeof===l||e.$$typeof===i||e.$$typeof===u||e.$$typeof===n||void 0!==e.getModuleId)},t.typeOf=x},84276:(e,t,n)=>{e.exports=n(26936)},65987:(e,t,n)=>{function o(e,t){let{target:n=document.body}=void 0===t?{}:t;if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const o=document.createElement("textarea"),s=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";const r=document.getSelection(),c=r.rangeCount>0&&r.getRangeAt(0);n.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;let a=!1;try{a=document.execCommand("copy")}catch{}return o.remove(),c&&(r.removeAllRanges(),r.addRange(c)),s&&s.focus(),a}n.r(t),n.d(t,{default:()=>o})}}]);