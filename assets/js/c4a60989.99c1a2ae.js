"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[56583],{1445:(e,n,t)=>{t.r(n),t.d(n,{default:()=>i});t(79474);var r=t(13526);const a={tabItem:"tabItem_JtVc"};var s=t(13274);function i(e){let{children:n,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,i),hidden:t,children:n})}},17014:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var r=t(79474);const a={},s=r.createContext(a);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:n},e.children)}},48521:(e,n,t)=>{t.d(n,{A:()=>f});var r=t(79474),a=t(13526),s=t(34560),i=t(69671),l=t(49573);const o={tabList:"tabList_B_Yg",tabItem:"tabItem_UqCM"};var u=t(13274);function c(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),p=e=>{const n=e.currentTarget,t=c.indexOf(n),a=l[t].value;a!==r&&(d(n),i(a))},f=e=>{let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,u.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,u.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:f,onClick:p,...s,className:(0,a.A)("tabs__item",o.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function d(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,u.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function p(e){const n=(0,i.u)(e);return(0,u.jsxs)("div",{className:(0,a.A)("tabs-container",o.tabList),children:[(0,u.jsx)(c,{...n,...e}),(0,u.jsx)(d,{...n,...e})]})}function f(e){const n=(0,l.default)();return(0,u.jsx)(p,{...e,children:(0,i.v)(e.children)},String(n))}},68180:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var r=t(13274),a=t(17014),s=t(48521),i=t(1445);const l={title:"Expression system of Apache Gravitino",slug:"/expression",date:new Date("2024-02-02T00:00:00.000Z"),keyword:"expression function field literal reference",license:"This software is licensed under the Apache License version 2."},o=void 0,u={id:"expression",title:"Expression system of Apache Gravitino",description:"This page introduces the expression system of Apache Gravitino. Expressions are vital component of metadata definition, through expressions, you can define default values for columns, function arguments for function partitioning, bucketing, and sort term of sort ordering in tables.",source:"@site/docs/expression.md",sourceDirName:".",slug:"/expression",permalink:"/docs/next/expression",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/expression.md",tags:[],version:"current",lastUpdatedBy:"Justin Mclean",lastUpdatedAt:1740469354e3,frontMatter:{title:"Expression system of Apache Gravitino",slug:"/expression",date:"2024-02-02T00:00:00.000Z",keyword:"expression function field literal reference",license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"Table partitioning, bucketing, sort ordering and indexes",permalink:"/docs/next/table-partitioning-bucketing-sort-order-indexes"},next:{title:"Manage fileset metadata",permalink:"/docs/next/manage-fileset-metadata-using-gravitino"}},c={},d=[{value:"Field reference",id:"field-reference",level:2},{value:"Literal",id:"literal",level:2},{value:"Function expression",id:"function-expression",level:2},{value:"Unparsed expression",id:"unparsed-expression",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["This page introduces the expression system of Apache Gravitino. Expressions are vital component of metadata definition, through expressions, you can define ",(0,r.jsx)(n.a,{href:"/docs/next/manage-relational-metadata-using-gravitino#table-column-default-value",children:"default values"})," for columns, function arguments for ",(0,r.jsx)(n.a,{href:"/docs/next/table-partitioning-bucketing-sort-order-indexes#table-partitioning",children:"function partitioning"}),", ",(0,r.jsx)(n.a,{href:"/docs/next/table-partitioning-bucketing-sort-order-indexes#table-bucketing",children:"bucketing"}),", and sort term of ",(0,r.jsx)(n.a,{href:"/docs/next/table-partitioning-bucketing-sort-order-indexes#sort-ordering",children:"sort ordering"})," in tables.\nGravitino expression system divides expressions into three basic parts: field reference, literal, and function. Function expressions can contain field references, literals, and other function expressions."]}),"\n",(0,r.jsx)(n.h2,{id:"field-reference",children:"Field reference"}),"\n",(0,r.jsxs)(n.p,{children:["Field reference is a reference to a field in a table.\nThe following is an example of creating a field reference expression, demonstrating how to create a reference for the ",(0,r.jsx)(n.code,{children:"student"})," field."]}),"\n",(0,r.jsxs)(s.A,{groupId:"language",queryString:!0,children:[(0,r.jsx)(i.default,{value:"Json",label:"Json",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "type": "field",\n    "fieldName": [\n      "student"\n    ]\n  }\n]\n'})})}),(0,r.jsx)(i.default,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'NamedReference field = NamedReference.field("student");\n'})})})]}),"\n",(0,r.jsx)(n.h2,{id:"literal",children:"Literal"}),"\n",(0,r.jsxs)(n.p,{children:["Literal is a constant value.\nThe following is an example of creating a literal expression, demonstrating how to create a ",(0,r.jsx)(n.code,{children:"NULL"})," literal and three different data types of literal expressions for the value ",(0,r.jsx)(n.code,{children:"1024"}),"."]}),"\n",(0,r.jsxs)(s.A,{groupId:"language",queryString:!0,children:[(0,r.jsx)(i.default,{value:"Json",label:"Json",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "type": "literal",\n    "dataType": "null",\n    "value": "null"\n  },\n  {\n    "type": "literal",\n    "dataType": "integer",\n    "value": "1024"\n  },\n  {\n    "type": "literal",\n    "dataType": "string",\n    "value": "1024"\n  },\n  {\n    "type": "literal",\n    "dataType": "decimal(10,2)",\n    "value": "1024"\n  }\n]\n'})})}),(0,r.jsx)(i.default,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'Literal<?>[] literals =\n    new Literal[] {\n    Literals.NULL,\n    Literals.integerLiteral(1024),\n    Literals.stringLiteral("1024"),\n    Literals.decimalLiteral(Decimal.of("1024", 10, 2))\n    };\n'})})})]}),"\n",(0,r.jsx)(n.h2,{id:"function-expression",children:"Function expression"}),"\n",(0,r.jsxs)(n.p,{children:["Function expression represents a function call with/without arguments. The arguments can be field references, literals, or other function expressions.\nThe following is an example of creating a function expression, demonstrating how to create function expressions for ",(0,r.jsx)(n.code,{children:"rand()"})," and ",(0,r.jsx)(n.code,{children:"date_trunc('year', birthday)"}),"."]}),"\n",(0,r.jsxs)(s.A,{groupId:"language",queryString:!0,children:[(0,r.jsx)(i.default,{value:"Json",label:"Json",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "type": "function",\n    "funcName": "rand",\n    "funcArgs": []\n  },\n  {\n    "type": "function",\n    "funcName": "date_trunc",\n    "funcArgs": [\n      {\n        "type": "literal",\n        "dataType": "string",\n        "value": "year"\n      },\n      {\n        "type": "field",\n        "fieldName": [\n          "birthday"\n        ]\n      }\n    ]\n  }\n]\n'})})}),(0,r.jsx)(i.default,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'FunctionExpression[] functionExpressions =\n        new FunctionExpression[] {\n          FunctionExpression.of("rand"),\n          FunctionExpression.of("date_trunc", Literals.stringLiteral("year"), NamedReference.field("birthday"))\n        };\n'})})})]}),"\n",(0,r.jsx)(n.h2,{id:"unparsed-expression",children:"Unparsed expression"}),"\n",(0,r.jsx)(n.p,{children:"Unparsed expression is a special type of expression, currently serves exclusively for presenting the default value of a column when it's unsolvable.\nThe following shows the data structure of an unparsed expression in JSON and Java, enabling easy retrieval of its value."}),"\n",(0,r.jsxs)(s.A,{groupId:"language",queryString:!0,children:[(0,r.jsx)(i.default,{value:"Json",label:"Json",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "type": "unparsed",\n  "unparsedExpression": "(curdate() + interval 1 year)"\n}\n'})})}),(0,r.jsx)(i.default,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'// The result of the following expression is a string "(curdate() + interval 1 year)"\nString unparsedValue = ((UnparsedExpression) expressino).unparsedExpression();\n'})})})]})]})}function f(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},69671:(e,n,t)=>{t.d(n,{u:()=>f,v:()=>u});var r=t(79474),a=t(20241),s=t(33255),i=t(25869),l=t(55522),o=t(38118);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function c(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function d(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const s=(0,a.W6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(s.location.search);n.set(l,e),s.replace({...s.location,search:n.toString()})}),[l,s])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,i=c(e),[l,u]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[f,h]=p({queryString:t,groupId:a}),[x,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,o.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),m=(()=>{const e=f??x;return d({value:e,tabValues:i})?e:null})();(0,s.A)((()=>{m&&u(m)}),[m]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);u(e),h(e),g(e)}),[h,g,i]),tabValues:i}}}}]);