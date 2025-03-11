"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[84813],{17909:(e,t,n)=>{n.d(t,{A:()=>C});var a=n(79474),s=n(27823),r=n(10353),i=n(57497),l=n(13274);var o=n(54137);var c=n(10712);function d(e){const t=a.Children.toArray(e.children),n=t.find((e=>a.isValidElement(e)&&"summary"===e.type)),s=(0,l.jsx)(l.Fragment,{children:t.filter((e=>e!==n))});return(0,l.jsx)(c.A,{...e,summary:n,children:s})}var u=n(41674);function h(e){return(0,l.jsx)(u.default,{...e})}var g=n(13526);const m="containsTaskList_kggB";function p(e){if(void 0!==e)return(0,g.A)(e,e?.includes("contains-task-list")&&m)}var x=n(35196);const j="img_CujE";var f=n(84498),b=n(67020),A=n(83178),v=n(43865),w=n(71813),y=n.n(w);const N=e=>{const{url:t,others:n}=e;return(0,l.jsx)("div",{className:"aspect-video w-full object-cover",children:(0,l.jsx)(y(),{width:"100%",height:"100%",url:t,...n})})};var k=n(48578),T=n(86572);const _="highlight_vY2g",P=e=>{let{children:t,className:n,bg:a,color:s}=e;const r=(0,g.A)(n,_);return(0,l.jsx)("span",{className:r,style:{color:s||"var(--theme-button-primary-text-color)",backgroundColor:a||"var(--theme-button-primary-background-color)"},children:t})},C={Head:s.A,details:d,Details:d,code:function(e){return function(e){return void 0!==e.children&&a.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))}(e)?(0,l.jsx)(i.A,{...e}):(0,l.jsx)(r.default,{...e})},a:function(e){return(0,l.jsx)(o.default,{...e})},pre:function(e){return(0,l.jsx)(l.Fragment,{children:e.children})},ul:function(e){return(0,l.jsx)("ul",{...e,className:p(e.className)})},li:function(e){return(0,x.A)().collectAnchor(e.id),(0,l.jsx)("li",{...e})},img:function(e){return(0,l.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(t=e.className,(0,g.A)(t,j))});var t},h1:e=>(0,l.jsx)(h,{as:"h1",...e}),h2:e=>(0,l.jsx)(h,{as:"h2",...e}),h3:e=>(0,l.jsx)(h,{as:"h3",...e}),h4:e=>(0,l.jsx)(h,{as:"h4",...e}),h5:e=>(0,l.jsx)(h,{as:"h5",...e}),h6:e=>(0,l.jsx)(h,{as:"h6",...e}),admonition:f.A,mermaid:b.A,Icon:A.In,Image:v.A,Video:N,Tabs:k.A,TabItem:T.default,Highlight:P}},41619:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});n(79474);var a=n(13526),s=n(82744),r=n(3810),i=n(84498),l=n(13274);function o(e){let{className:t}=e;return(0,l.jsx)(i.A,{type:"caution",title:(0,l.jsx)(s.Rc,{}),className:(0,a.A)(t,r.G.common.unlistedBanner),children:(0,l.jsx)(s.Uh,{})})}function c(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.AE,{}),(0,l.jsx)(o,{...e})]})}},45269:(e,t,n)=>{n.d(t,{A:()=>i});n(79474);var a=n(91014),s=n(56499),r=n(13274);function i(e){let{items:t,component:n=s.A}=e;return(0,r.jsx)(r.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,r.jsx)(a.i,{content:t,children:(0,r.jsx)(n,{children:(0,r.jsx)(t,{})})},t.metadata.permalink)}))})}},50668:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});n(79474);var a=n(13526),s=n(95551),r=n(79260),i=n(34685),l=n(3810),o=n(54137),c=n(1755),d=n(57512),u=n(85636),h=n(45269),g=n(41619),m=n(41674),p=n(13274);function x(e){const t=function(){const{selectMessage:e}=(0,r.W)();return t=>e(t,(0,s.translate)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,s.translate)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function j(e){let{tag:t}=e;const n=x(t);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i.be,{title:n,description:t.description}),(0,p.jsx)(u.A,{tag:"blog_tags_posts"})]})}function f(e){let{tag:t,items:n,sidebar:a,listMetadata:r}=e;const i=x(t);return(0,p.jsxs)(c.A,{sidebar:a,children:[t.unlisted&&(0,p.jsx)(g.default,{}),(0,p.jsxs)("header",{className:"margin-bottom--xl",children:[(0,p.jsx)(m.default,{as:"h1",children:i}),t.description&&(0,p.jsx)("p",{children:t.description}),(0,p.jsx)(o.default,{href:t.allTagsPath,children:(0,p.jsx)(s.default,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,p.jsx)(h.A,{items:n}),(0,p.jsx)(d.A,{metadata:r})]})}function b(e){return(0,p.jsxs)(i.e3,{className:(0,a.A)(l.G.wrapper.blogPages,l.G.page.blogTagPostListPage),children:[(0,p.jsx)(j,{...e}),(0,p.jsx)(f,{...e})]})}},57512:(e,t,n)=>{n.d(t,{A:()=>i});n(79474);var a=n(95551),s=n(23129),r=n(13274);function i(e){const{metadata:t}=e,{previousPage:n,nextPage:i}=t;return(0,r.jsxs)("nav",{className:"pagination-nav","aria-label":(0,a.translate)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,r.jsx)(s.A,{permalink:n,title:(0,r.jsx)(a.default,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),i&&(0,r.jsx)(s.A,{permalink:i,title:(0,r.jsx)(a.default,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},82744:(e,t,n)=>{n.d(t,{AE:()=>o,Rc:()=>i,Uh:()=>l});n(79474);var a=n(95551),s=n(27823),r=n(13274);function i(){return(0,r.jsx)(a.default,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,r.jsx)(a.default,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function o(){return(0,r.jsx)(s.A,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}}}]);