"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[30477],{17014:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>l});var a=r(79474);const t={},s=a.createContext(t);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(s.Provider,{value:n},e.children)}},48578:(e,n,r)=>{r.d(n,{A:()=>f});var a=r(79474),t=r(13526),s=r(5505),i=r(54638),l=r(49352);const o={tabList:"tabList_Bgbz",tabItem:"tabItem_O29R"};var u=r(13274);function c(e){let{className:n,block:r,selectedValue:a,selectValue:i,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),p=e=>{const n=e.currentTarget,r=c.indexOf(n),t=l[r].value;t!==a&&(d(n),i(t))},f=e=>{let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;n=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;n=c[r]??c[c.length-1];break}}n?.focus()};return(0,u.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,u.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>c.push(e),onKeyDown:f,onClick:p,...s,className:(0,t.A)("tabs__item",o.tabItem,s?.className,{"tabs__item--active":a===n}),children:r??n},n)}))})}function d(e){let{lazy:n,children:r,selectedValue:t}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===t));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,u.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function p(e){const n=(0,i.u)(e);return(0,u.jsxs)("div",{className:(0,t.A)("tabs-container",o.tabList),children:[(0,u.jsx)(c,{...n,...e}),(0,u.jsx)(d,{...n,...e})]})}function f(e){const n=(0,l.default)();return(0,u.jsx)(p,{...e,children:(0,i.v)(e.children)},String(n))}},54638:(e,n,r)=>{r.d(n,{u:()=>f,v:()=>u});var a=r(79474),t=r(20241),s=r(97052),i=r(5290),l=r(37651),o=r(88679);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function c(e){const{values:n,children:r}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:a,default:t}}=e;return{value:n,label:r,attributes:a,default:t}}))}(r);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function d(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:r}=e;const s=(0,t.W6)(),l=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,i.aZ)(l),(0,a.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(s.location.search);n.set(l,e),s.replace({...s.location,search:n.toString()})}),[l,s])]}function f(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,i=c(e),[l,u]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[f,h]=p({queryString:r,groupId:t}),[g,x]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,s]=(0,o.Dv)(r);return[t,(0,a.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:t}),m=(()=>{const e=f??g;return d({value:e,tabValues:i})?e:null})();(0,s.A)((()=>{m&&u(m)}),[m]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);u(e),h(e),x(e)}),[h,x,i]),tabValues:i}}},86572:(e,n,r)=>{r.r(n),r.d(n,{default:()=>i});r(79474);var a=r(13526);const t={tabItem:"tabItem_VJ4w"};var s=r(13274);function i(e){let{children:n,hidden:r,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(t.tabItem,i),hidden:r,children:n})}},90467:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var a=r(13274),t=r(17014),s=r(48578),i=r(86572);const l={title:"Expression system of Apache Gravitino",slug:"/expression",date:new Date("2024-02-02T00:00:00.000Z"),keyword:"expression function field literal reference",license:"This software is licensed under the Apache License version 2."},o=void 0,u={id:"expression",title:"Expression system of Apache Gravitino",description:"This page introduces the expression system of Apache Gravitino. Expressions are vital component of metadata definition, through expressions, you can define default values for columns, function arguments for function partitioning, bucketing, and sort term of sort ordering in tables.",source:"@site/versioned_docs/version-0.7.0-incubating/expression.md",sourceDirName:".",slug:"/expression",permalink:"/docs/0.7.0-incubating/expression",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/expression.md",tags:[],version:"0.7.0-incubating",frontMatter:{title:"Expression system of Apache Gravitino",slug:"/expression",date:"2024-02-02T00:00:00.000Z",keyword:"expression function field literal reference",license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"Table partitioning, bucketing, sort ordering and indexes",permalink:"/docs/0.7.0-incubating/table-partitioning-bucketing-sort-order-indexes"},next:{title:"Manage fileset metadata",permalink:"/docs/0.7.0-incubating/manage-fileset-metadata-using-gravitino"}},c={},d=[{value:"Field reference",id:"field-reference",level:2},{value:"Literal",id:"literal",level:2},{value:"Function expression",id:"function-expression",level:2},{value:"Unparsed expression",id:"unparsed-expression",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["This page introduces the expression system of Apache Gravitino. Expressions are vital component of metadata definition, through expressions, you can define ",(0,a.jsx)(n.a,{href:"/docs/0.7.0-incubating/manage-relational-metadata-using-gravitino#table-column-default-value",children:"default values"})," for columns, function arguments for ",(0,a.jsx)(n.a,{href:"/docs/0.7.0-incubating/table-partitioning-bucketing-sort-order-indexes#table-partitioning",children:"function partitioning"}),", ",(0,a.jsx)(n.a,{href:"/docs/0.7.0-incubating/table-partitioning-bucketing-sort-order-indexes#table-bucketing",children:"bucketing"}),", and sort term of ",(0,a.jsx)(n.a,{href:"/docs/0.7.0-incubating/table-partitioning-bucketing-sort-order-indexes#sort-ordering",children:"sort ordering"})," in tables.\nGravitino expression system divides expressions into three basic parts: field reference, literal, and function. Function expressions can contain field references, literals, and other function expressions."]}),"\n",(0,a.jsx)(n.h2,{id:"field-reference",children:"Field reference"}),"\n",(0,a.jsxs)(n.p,{children:["Field reference is a reference to a field in a table.\nThe following is an example of creating a field reference expression, demonstrating how to create a reference for the ",(0,a.jsx)(n.code,{children:"student"})," field."]}),"\n",(0,a.jsxs)(s.A,{groupId:"language",queryString:!0,children:[(0,a.jsx)(i.default,{value:"Json",label:"Json",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "type": "field",\n    "fieldName": [\n      "student"\n    ]\n  }\n]\n'})})}),(0,a.jsx)(i.default,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'NamedReference field = NamedReference.field("student");\n'})})})]}),"\n",(0,a.jsx)(n.h2,{id:"literal",children:"Literal"}),"\n",(0,a.jsxs)(n.p,{children:["Literal is a constant value.\nThe following is an example of creating a literal expression, demonstrating how to create a ",(0,a.jsx)(n.code,{children:"NULL"})," literal and three different data types of literal expressions for the value ",(0,a.jsx)(n.code,{children:"1024"}),"."]}),"\n",(0,a.jsxs)(s.A,{groupId:"language",queryString:!0,children:[(0,a.jsx)(i.default,{value:"Json",label:"Json",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "type": "literal",\n    "dataType": "null",\n    "value": "null"\n  },\n  {\n    "type": "literal",\n    "dataType": "integer",\n    "value": "1024"\n  },\n  {\n    "type": "literal",\n    "dataType": "string",\n    "value": "1024"\n  },\n  {\n    "type": "literal",\n    "dataType": "decimal(10,2)",\n    "value": "1024"\n  }\n]\n'})})}),(0,a.jsx)(i.default,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'Literal<?>[] literals =\n    new Literal[] {\n    Literals.NULL,\n    Literals.integerLiteral(1024),\n    Literals.stringLiteral("1024"),\n    Literals.decimalLiteral(Decimal.of("1024", 10, 2))\n    };\n'})})})]}),"\n",(0,a.jsx)(n.h2,{id:"function-expression",children:"Function expression"}),"\n",(0,a.jsxs)(n.p,{children:["Function expression represents a function call with/without arguments. The arguments can be field references, literals, or other function expressions.\nThe following is an example of creating a function expression, demonstrating how to create function expressions for ",(0,a.jsx)(n.code,{children:"rand()"})," and ",(0,a.jsx)(n.code,{children:"date_trunc('year', birthday)"}),"."]}),"\n",(0,a.jsxs)(s.A,{groupId:"language",queryString:!0,children:[(0,a.jsx)(i.default,{value:"Json",label:"Json",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "type": "function",\n    "funcName": "rand",\n    "funcArgs": []\n  },\n  {\n    "type": "function",\n    "funcName": "date_trunc",\n    "funcArgs": [\n      {\n        "type": "literal",\n        "dataType": "string",\n        "value": "year"\n      },\n      {\n        "type": "field",\n        "fieldName": [\n          "birthday"\n        ]\n      }\n    ]\n  }\n]\n'})})}),(0,a.jsx)(i.default,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'FunctionExpression[] functionExpressions =\n        new FunctionExpression[] {\n          FunctionExpression.of("rand"),\n          FunctionExpression.of("date_trunc", Literals.stringLiteral("year"), NamedReference.field("birthday"))\n        };\n'})})})]}),"\n",(0,a.jsx)(n.h2,{id:"unparsed-expression",children:"Unparsed expression"}),"\n",(0,a.jsx)(n.p,{children:"Unparsed expression is a special type of expression, currently serves exclusively for presenting the default value of a column when it's unsolvable.\nThe following shows the data structure of an unparsed expression in JSON and Java, enabling easy retrieval of its value."}),"\n",(0,a.jsxs)(s.A,{groupId:"language",queryString:!0,children:[(0,a.jsx)(i.default,{value:"Json",label:"Json",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "type": "unparsed",\n  "unparsedExpression": "(curdate() + interval 1 year)"\n}\n'})})}),(0,a.jsx)(i.default,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'// The result of the following expression is a string "(curdate() + interval 1 year)"\nString unparsedValue = ((UnparsedExpression) expressino).unparsedExpression();\n'})})})]})]})}function f(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}}}]);