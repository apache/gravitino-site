(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[47742],{22692:(e,t,r)=>{"use strict";r.d(t,{_:()=>l,u:()=>i});var a=r(79474),o=r(2411),s=r(13274);const n=a.createContext(null);function l(e){let{children:t,content:r}=e;const o=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(r);return(0,s.jsx)(n.Provider,{value:o,children:t})}function i(){const e=(0,a.useContext)(n);if(null===e)throw new o.dV("DocProvider");return e}},41708:(e,t,r)=>{"use strict";r.d(t,{A:()=>i,G:()=>u});var a=r(79474),o=r(2411),s=r(13274);const n=Symbol("EmptyContext"),l=a.createContext(n);function i(e){let{children:t}=e;const[r,o]=(0,a.useState)(null),n=(0,a.useMemo)((()=>({expandedItem:r,setExpandedItem:o})),[r]);return(0,s.jsx)(l.Provider,{value:n,children:t})}function u(){const e=(0,a.useContext)(l);if(e===n)throw new o.dV("DocSidebarItemsExpandedStateProvider");return e}},61912:(e,t,r)=>{"use strict";r.d(t,{H:()=>n});var a=r(79474),o=r(67697),s=r(88575);function n(e){let{threshold:t}=e;const[r,n]=(0,a.useState)(!1),l=(0,a.useRef)(!1),{startScroll:i,cancelScroll:u}=(0,o.gk)();return(0,o.Mq)(((e,r)=>{let{scrollY:a}=e;const o=r?.scrollY;o&&(l.current?l.current=!1:a>=o?(u(),n(!1)):a<t?n(!1):a+window.innerHeight<document.documentElement.scrollHeight&&n(!0))})),(0,s.$)((e=>{e.location.hash&&(l.current=!0,n(!1))})),{shown:r,scrollToTop:()=>i(0)}}},73415:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Collapsible:()=>c.N,ErrorBoundaryError:()=>O.bq,ErrorBoundaryErrorMessageFallback:()=>O.MN,ErrorBoundaryTryAgainButton:()=>O.a2,ErrorCauseBoundary:()=>O.k2,HtmlClassNameProvider:()=>m.e3,NavbarSecondaryMenuFiller:()=>b.GX,PageMetadata:()=>m.be,ReactContextError:()=>g.dV,SkipToContentFallbackId:()=>L.j,SkipToContentLink:()=>L.K,ThemeClassNames:()=>d.G,ThemedComponent:()=>o.A,UnlistedBannerMessage:()=>N.Uh,UnlistedBannerTitle:()=>N.Rc,UnlistedMetadata:()=>N.AE,composeProviders:()=>g.fM,createStorageSlot:()=>s.Wf,duplicates:()=>M.X,filterDocCardListItems:()=>l.d1,isMultiColumnFooterLinks:()=>k.C,isRegexpStringMatch:()=>B.G,listStorageKeys:()=>s.Eo,listTagsByLetters:()=>h.Q,prefersReducedMotion:()=>f.O,processAdmonitionProps:()=>D.c,translateTagsPageTitle:()=>h.b,uniq:()=>M.s,useBlogListPageStructuredData:()=>i.k,useBlogPostStructuredData:()=>i.J,useClearQueryString:()=>y.W9,useCollapsible:()=>c.u,useColorMode:()=>p.G,useContextualSearchFilters:()=>n.af,useCurrentSidebarCategory:()=>l.$S,useDocsPreferredVersion:()=>x.g1,useEvent:()=>g._q,useHistorySelector:()=>y.Hl,usePluralForm:()=>u.W,usePrevious:()=>g.ZC,usePrismTheme:()=>_.A,useQueryString:()=>y.l,useQueryStringList:()=>y.fV,useSearchLinkCreator:()=>E,useSearchQueryString:()=>T,useStorageSlot:()=>s.Dv,useThemeConfig:()=>a.p,useWindowSize:()=>S.l});var a=r(47441),o=r(3108),s=r(67946),n=r(59958),l=r(54131),i=r(63355),u=r(42828),c=r(80609),d=r(71026),f=r(10834),g=r(2411),m=r(51565),p=r(69402),b=r(33799),S=r(4220),h=r(60521),C=r(79474),v=r(4273),y=r(71738);const P="q";function T(){return(0,y.l)(P)}function E(){const{siteConfig:{baseUrl:e,themeConfig:t}}=(0,v.default)(),{algolia:{searchPagePath:r}}=t;return(0,C.useCallback)((t=>`${e}${r}?${P}=${encodeURIComponent(t)}`),[e,r])}var k=r(37975),B=r(80917),M=r(17891),_=r(94275),x=r(91744),D=r(29696),L=r(991),N=r(19080),O=r(91317)},51664:(e,t,r)=>{"use strict";r.r(t),r.d(t,{AnnouncementBarProvider:()=>c.o,BlogPostProvider:()=>i.i,Collapsible:()=>a.Collapsible,ColorModeProvider:()=>m.a,DEFAULT_SEARCH_TAG:()=>S.Cy,DocProvider:()=>l._,DocSidebarItemsExpandedStateProvider:()=>o.A,DocsPreferredVersionContextProvider:()=>u.VQ,DocsSidebarProvider:()=>n.V,DocsVersionProvider:()=>s.n,ErrorBoundaryError:()=>a.ErrorBoundaryError,ErrorBoundaryErrorMessageFallback:()=>a.ErrorBoundaryErrorMessageFallback,ErrorBoundaryTryAgainButton:()=>a.ErrorBoundaryTryAgainButton,ErrorCauseBoundary:()=>a.ErrorCauseBoundary,HtmlClassNameProvider:()=>a.HtmlClassNameProvider,NavbarProvider:()=>M.G,NavbarSecondaryMenuFiller:()=>a.NavbarSecondaryMenuFiller,PageMetadata:()=>a.PageMetadata,PluginHtmlClassNameProvider:()=>B.Jx,ReactContextError:()=>a.ReactContextError,ScrollControllerProvider:()=>E.Tv,SkipToContentFallbackId:()=>a.SkipToContentFallbackId,SkipToContentLink:()=>a.SkipToContentLink,ThemeClassNames:()=>a.ThemeClassNames,ThemedComponent:()=>a.ThemedComponent,UnlistedBannerMessage:()=>a.UnlistedBannerMessage,UnlistedBannerTitle:()=>a.UnlistedBannerTitle,UnlistedMetadata:()=>a.UnlistedMetadata,composeProviders:()=>a.composeProviders,containsLineNumbers:()=>b._u,createStorageSlot:()=>a.createStorageSlot,docVersionSearchTag:()=>S.tU,duplicates:()=>a.duplicates,filterDocCardListItems:()=>a.filterDocCardListItems,findFirstSidebarItemLink:()=>h.Nr,findSidebarCategory:()=>h._j,getPrismCssVariables:()=>b.M$,isActiveSidebarItem:()=>h.w8,isDocsPluginEnabled:()=>h.C5,isMultiColumnFooterLinks:()=>a.isMultiColumnFooterLinks,isRegexpStringMatch:()=>a.isRegexpStringMatch,isSamePath:()=>k.ys,isVisibleSidebarItem:()=>h.Se,keyboardFocusedClassName:()=>N.w,listStorageKeys:()=>a.listStorageKeys,listTagsByLetters:()=>a.listTagsByLetters,parseCodeBlockTitle:()=>b.wt,parseLanguage:()=>b.Op,parseLines:()=>b.Li,prefersReducedMotion:()=>a.prefersReducedMotion,processAdmonitionProps:()=>a.processAdmonitionProps,sanitizeTabsChildren:()=>d.v,splitNavbarItems:()=>M.D,translateTagsPageTitle:()=>a.translateTagsPageTitle,uniq:()=>a.uniq,useAlternatePageUtils:()=>p.o,useAnnouncementBar:()=>c.M,useBackToTopButton:()=>j.H,useBlogListPageStructuredData:()=>a.useBlogListPageStructuredData,useBlogPost:()=>i.e,useBlogPostStructuredData:()=>a.useBlogPostStructuredData,useClearQueryString:()=>a.useClearQueryString,useCodeWordWrap:()=>w.f,useCollapsible:()=>a.useCollapsible,useColorMode:()=>a.useColorMode,useContextualSearchFilters:()=>a.useContextualSearchFilters,useCurrentSidebarCategory:()=>a.useCurrentSidebarCategory,useDateTimeFormat:()=>D.i,useDoc:()=>l.u,useDocById:()=>h.cC,useDocRootMetadata:()=>h.B5,useDocSidebarItemsExpandedState:()=>o.G,useDocsPreferredVersion:()=>a.useDocsPreferredVersion,useDocsPreferredVersionByPluginId:()=>u.XK,useDocsSidebar:()=>n.t,useDocsVersion:()=>s.r,useDocsVersionCandidates:()=>h.Vd,useEvent:()=>a.useEvent,useFilteredAndTreeifiedTOC:()=>T.h,useHideableNavbar:()=>L.S,useHistoryPopHandler:()=>P.$Z,useHistorySelector:()=>P.Hl,useHomePageRoute:()=>k.Dt,useKeyboardNavigation:()=>N.J,useLayoutDoc:()=>h.QB,useLayoutDocsSidebar:()=>h.fW,useLocalPathname:()=>y.B,useLocationChange:()=>v.$,useLockBodyScroll:()=>O._,useNavbarMobileSidebar:()=>f.M,useNavbarSecondaryMenu:()=>g.T,usePluralForm:()=>a.usePluralForm,usePrevious:()=>a.usePrevious,usePrismTheme:()=>a.usePrismTheme,useQueryString:()=>a.useQueryString,useQueryStringList:()=>a.useQueryStringList,useQueryStringValue:()=>P.aZ,useScrollController:()=>E.n1,useScrollPosition:()=>E.Mq,useScrollPositionBlocker:()=>E.a_,useSearchLinkCreator:()=>a.useSearchLinkCreator,useSearchQueryString:()=>a.useSearchQueryString,useSidebarBreadcrumbs:()=>h.OF,useSmoothScrollTo:()=>E.gk,useStorageSlot:()=>a.useStorageSlot,useTOCHighlight:()=>_.i,useTabs:()=>d.u,useThemeConfig:()=>a.useThemeConfig,useTitleFormatter:()=>C.s,useTreeifiedTOC:()=>T.v,useVisibleBlogSidebarItems:()=>x.G,useVisibleSidebarItems:()=>h.Y,useWindowSize:()=>a.useWindowSize});var a=r(73415),o=r(41708),s=r(62831),n=r(54887),l=r(22692),i=r(90102),u=r(91744),c=r(42422),d=r(24382),f=r(44774),g=r(39396),m=r(69402),p=r(12134),b=r(97008),S=r(59958),h=r(54131),C=r(16714),v=r(88575),y=r(5377),P=r(71738),T=r(62260),E=r(67697),k=r(19144),B=r(51565),M=r(43624),_=r(34075),x=r(52182),D=r(12915),L=r(22263),N=r(97876),O=r(47923),w=r(3002),j=r(61912)},60521:(e,t,r)=>{"use strict";r.d(t,{Q:()=>s,b:()=>o});var a=r(45086);const o=()=>(0,a.translate)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function s(e){const t={};return Object.values(e).forEach((e=>{const r=function(e){return e[0].toUpperCase()}(e.label);t[r]??=[],t[r].push(e)})),Object.entries(t).sort(((e,t)=>{let[r]=e,[a]=t;return r.localeCompare(a)})).map((e=>{let[t,r]=e;return{letter:t,tags:r.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}},47742:function(e,t,r){"use strict";var a=this&&this.__createBinding||(Object.create?function(e,t,r,a){void 0===a&&(a=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,o)}:function(e,t,r,a){void 0===a&&(a=r),e[a]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&a(t,e,r);return o(t,e),t},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const l=s(r(79474)),i=r(51664),u=n(r(22972)),c=n(r(68835)),d=n(r(82874));function f(e){let{className:t,block:r,selectedValue:a,selectValue:o,tabValues:s}=e;const n=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.useScrollPositionBlocker)(),d=e=>{const t=e.currentTarget,r=n.indexOf(t),l=s[r].value;l!==a&&(u(t),o(l))},f=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=n.indexOf(e.currentTarget)+1;t=n[r]??n[0];break}case"ArrowLeft":{const r=n.indexOf(e.currentTarget)-1;t=n[r]??n[n.length-1];break}}t?.focus()},g=(0,l.useRef)(null),[m,p]=(0,l.useState)(!1);(0,l.useEffect)((()=>{const e=new ResizeObserver((e=>{for(let t of e)t.target.clientWidth<t.target.scrollWidth?p(!0):p(!1)}));return e.observe(g.current),()=>{e.disconnect()}}),[]);return l.default.createElement("div",{className:"openapi-tabs__schema-tabs-container"},m&&l.default.createElement("button",{className:"openapi-tabs__arrow left",onClick:()=>{g.current.scrollLeft-=90}}),l.default.createElement("ul",{ref:g,role:"tablist","aria-orientation":"horizontal",className:(0,c.default)("openapi-tabs__schema-list-container","tabs",{"tabs--block":r},t)},s.map((e=>{let{value:t,label:r,attributes:o}=e;return l.default.createElement("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,key:t,ref:e=>n.push(e),onKeyDown:f,onClick:d,...o,className:(0,c.default)("tabs__item","openapi-tabs__schema-item",o?.className,{active:a===t})},l.default.createElement("span",{className:"openapi-tabs__schema-label"},r??t))}))),m&&l.default.createElement("button",{className:"openapi-tabs__arrow right",onClick:()=>{g.current.scrollLeft+=90}}))}function g(e){let{lazy:t,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean),s=(0,d.default)(o);if(t){const e=s.find((e=>e.props.value===a));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.default.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function m(e){const t=(0,i.useTabs)(e);return l.default.createElement("div",{className:"openapi-tabs__schema-container"},l.default.createElement(f,{...e,...t}),l.default.createElement(g,{...e,...t}))}t.default=function(e){const t=(0,u.default)();return l.default.createElement(m,{key:String(t),...e},(0,i.sanitizeTabsChildren)(e.children))}},68835:(e,t,r)=>{"use strict";function a(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=a(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}r.r(t),r.d(t,{clsx:()=>o,default:()=>s});const s=o},64073:(e,t,r)=>{var a=r(58453).Symbol;e.exports=a},79512:e=>{e.exports=function(e,t){for(var r=-1,a=t.length,o=e.length;++r<a;)e[o+r]=t[r];return e}},83880:(e,t,r)=>{var a=r(79512),o=r(88923);e.exports=function e(t,r,s,n,l){var i=-1,u=t.length;for(s||(s=o),l||(l=[]);++i<u;){var c=t[i];r>0&&s(c)?r>1?e(c,r-1,s,n,l):a(l,c):n||(l[l.length]=c)}return l}},76624:(e,t,r)=>{var a=r(64073),o=r(7915),s=r(14478),n=a?a.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":n&&n in Object(e)?o(e):s(e)}},47382:(e,t,r)=>{var a=r(76624),o=r(2050);e.exports=function(e){return o(e)&&"[object Arguments]"==a(e)}},18928:(e,t,r)=>{var a="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g;e.exports=a},7915:(e,t,r)=>{var a=r(64073),o=Object.prototype,s=o.hasOwnProperty,n=o.toString,l=a?a.toStringTag:void 0;e.exports=function(e){var t=s.call(e,l),r=e[l];try{e[l]=void 0;var a=!0}catch(i){}var o=n.call(e);return a&&(t?e[l]=r:delete e[l]),o}},88923:(e,t,r)=>{var a=r(64073),o=r(6356),s=r(66521),n=a?a.isConcatSpreadable:void 0;e.exports=function(e){return s(e)||o(e)||!!(n&&e&&e[n])}},14478:e=>{var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},58453:(e,t,r)=>{var a=r(18928),o="object"==typeof self&&self&&self.Object===Object&&self,s=a||o||Function("return this")();e.exports=s},82874:(e,t,r)=>{var a=r(83880);e.exports=function(e){return(null==e?0:e.length)?a(e,1):[]}},6356:(e,t,r)=>{var a=r(47382),o=r(2050),s=Object.prototype,n=s.hasOwnProperty,l=s.propertyIsEnumerable,i=a(function(){return arguments}())?a:function(e){return o(e)&&n.call(e,"callee")&&!l.call(e,"callee")};e.exports=i},66521:e=>{var t=Array.isArray;e.exports=t},2050:e=>{e.exports=function(e){return null!=e&&"object"==typeof e}}}]);