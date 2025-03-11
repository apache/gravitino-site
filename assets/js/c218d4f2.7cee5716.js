"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[85807],{17014:(e,a,t)=>{t.d(a,{R:()=>i,x:()=>r});var n=t(79474);const s={},l=n.createContext(s);function i(e){const a=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(l.Provider,{value:a},e.children)}},32243:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>g});var n=t(13274),s=t(17014),l=t(48578),i=t(86572);const r={title:"Manage tags in Gravitino",slug:"/manage-tags-in-gravitino",date:new Date("2024-07-24T00:00:00.000Z"),keyword:"tag management, tag, tags, Gravitino",license:"This software is licensed under the Apache License version 2."},c=void 0,o={id:"manage-tags-in-gravitino",title:"Manage tags in Gravitino",description:"Introduction",source:"@site/versioned_docs/version-0.6.0-incubating/manage-tags-in-gravitino.md",sourceDirName:".",slug:"/manage-tags-in-gravitino",permalink:"/docs/0.6.0-incubating/manage-tags-in-gravitino",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/manage-tags-in-gravitino.md",tags:[],version:"0.6.0-incubating",frontMatter:{title:"Manage tags in Gravitino",slug:"/manage-tags-in-gravitino",date:"2024-07-24T00:00:00.000Z",keyword:"tag management, tag, tags, Gravitino",license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"Manage messaging metadata",permalink:"/docs/0.6.0-incubating/manage-massaging-metadata-using-gravitino"},next:{title:"Use Gravitino Python Client",permalink:"/docs/0.6.0-incubating/how-to-use-gravitino-python-client"}},d={},g=[{value:"Introduction",id:"introduction",level:2},{value:"Tag operations",id:"tag-operations",level:2},{value:"Create new tags",id:"create-new-tags",level:3},{value:"List created tags",id:"list-created-tags",level:3},{value:"Get a tag by name",id:"get-a-tag-by-name",level:3},{value:"Update a tag",id:"update-a-tag",level:3},{value:"Delete a tag",id:"delete-a-tag",level:3},{value:"Tag associations",id:"tag-associations",level:2},{value:"Associate and disassociate tags with a metadata object",id:"associate-and-disassociate-tags-with-a-metadata-object",level:3},{value:"List associated tags for a metadata object",id:"list-associated-tags-for-a-metadata-object",level:3},{value:"Get an associated tag by name for a metadata object",id:"get-an-associated-tag-by-name-for-a-metadata-object",level:3},{value:"List metadata objects associated with a tag",id:"list-metadata-objects-associated-with-a-tag",level:3}];function h(e){const a={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsx)(a.p,{children:"Starting from 0.6.0, Gravitino introduces a new tag system that allows you to manage tags for\nmetadata objects. Tags are a way to categorize and organize metadata objects in Gravitino."}),"\n",(0,n.jsx)(a.p,{children:"This document briefly introduces how to use tags in Gravitino by both Gravitino Java client and\nREST APIs. If you want to know more about the tag system in Gravitino, please refer to the\nJavadoc and REST API documentation."}),"\n",(0,n.jsx)(a.p,{children:"Note that current tag system is a basic implementation, some advanced features will be added in\nthe future versions."}),"\n",(0,n.jsx)(a.admonition,{type:"info",children:(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsxs)(a.li,{children:["Metadata objects are objects that are managed in Gravitino, such as ",(0,n.jsx)(a.code,{children:"CATALOG"}),", ",(0,n.jsx)(a.code,{children:"SCHEMA"}),", ",(0,n.jsx)(a.code,{children:"TABLE"}),",\n",(0,n.jsx)(a.code,{children:"COLUMN"}),", ",(0,n.jsx)(a.code,{children:"FILESET"}),", ",(0,n.jsx)(a.code,{children:"TOPIC"}),", ",(0,n.jsx)(a.code,{children:"COLUMN"}),", etc. A metadata object is combined by a ",(0,n.jsx)(a.code,{children:"type"})," and a\ncomma-separated ",(0,n.jsx)(a.code,{children:"name"}),". For example, a ",(0,n.jsx)(a.code,{children:"CATAGLOG"}),' object has a name "catalog1" with type\n"CATALOG", a ',(0,n.jsx)(a.code,{children:"SCHEMA"}),' object has a name "catalog1.schema1" with type "SCHEMA", a ',(0,n.jsx)(a.code,{children:"TABLE"}),'\nobject has a name "catalog1.schema1.table1" with type "TABLE".']}),"\n",(0,n.jsxs)(a.li,{children:["Currently, only ",(0,n.jsx)(a.code,{children:"CATALOG"}),", ",(0,n.jsx)(a.code,{children:"SCHEMA"}),", ",(0,n.jsx)(a.code,{children:"TABLE"}),", ",(0,n.jsx)(a.code,{children:"FILESET"}),", ",(0,n.jsx)(a.code,{children:"TOPIC"})," objects can be tagged, tagging\non ",(0,n.jsx)(a.code,{children:"COLUMN"})," will be supported in the future."]}),"\n",(0,n.jsxs)(a.li,{children:["Tags in Gravitino is inheritable, so listing tags of a metadata object will also list the\ntags of its parent metadata objects. For example, listing tags of a ",(0,n.jsx)(a.code,{children:"Table"})," will also list\nthe tags of its parent ",(0,n.jsx)(a.code,{children:"Schema"})," and ",(0,n.jsx)(a.code,{children:"Catalog"}),"."]}),"\n",(0,n.jsxs)(a.li,{children:["Same tag can be associated to both parent and child metadata objects. When you list the\nassociated tags of a child metadata object, this tag will be included twice in the result\nlist with different ",(0,n.jsx)(a.code,{children:"inherited"})," values."]}),"\n"]})}),"\n",(0,n.jsx)(a.h2,{id:"tag-operations",children:"Tag operations"}),"\n",(0,n.jsx)(a.h3,{id:"create-new-tags",children:"Create new tags"}),"\n",(0,n.jsx)(a.p,{children:"The first step to manage tags is to create new tags. You can create a new tag by providing a tag\nname, optional comment and properties."}),"\n",(0,n.jsxs)(l.A,{groupId:"language",queryString:!0,children:[(0,n.jsx)(i.default,{value:"shell",label:"Shell",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-shell",children:'curl -X POST -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" -d \'{\n  "name": "tag1",\n  "comment": "This is a tag",\n  "properties": {\n    "key1": "value1",\n    "key2": "value2"\n  }\n}\' http://localhost:8090/api/metalakes/test/tags\n'})})}),(0,n.jsx)(i.default,{value:"java",label:"Java",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:'GravitinoClient client = ...\nTag tag =\n    client.createTag("tag1", "This is a tag", ImmutableMap.of("key1", "value1", "key2", "value2"));\n'})})})]}),"\n",(0,n.jsx)(a.h3,{id:"list-created-tags",children:"List created tags"}),"\n",(0,n.jsx)(a.p,{children:"You can list all the created tag names as well as tag objects in a metalake in Gravitino."}),"\n",(0,n.jsxs)(l.A,{groupId:"language",queryString:!0,children:[(0,n.jsx)(i.default,{value:"shell",label:"Shell",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-shell",children:'curl -X GET -H "Accept: application/vnd.gravitino.v1+json" \\\nhttp://localhost:8090/api/metalakes/test/tags\n\ncurl -X GET -H "Accept: application/vnd.gravitino.v1+json" \\\nhttp://localhost:8090/api/metalakes/test/tags?details=true\n'})})}),(0,n.jsx)(i.default,{value:"java",label:"Java",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:"GravitinoClient client = ...\nString[] tagNames = client.listTags();\n\nTag[] tags = client.listTagsInfo();\n"})})})]}),"\n",(0,n.jsx)(a.h3,{id:"get-a-tag-by-name",children:"Get a tag by name"}),"\n",(0,n.jsx)(a.p,{children:"You can get a tag by its name."}),"\n",(0,n.jsxs)(l.A,{groupId:"language",queryString:!0,children:[(0,n.jsx)(i.default,{value:"shell",label:"Shell",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-shell",children:'curl -X GET -H "Accept: application/vnd.gravitino.v1+json" \\\nhttp://localhost:8090/api/metalakes/test/tags/tag1\n'})})}),(0,n.jsx)(i.default,{value:"java",label:"Java",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:'GravitinoClient client = ...\nTag tag = client.getTag("tag1");\n'})})})]}),"\n",(0,n.jsx)(a.h3,{id:"update-a-tag",children:"Update a tag"}),"\n",(0,n.jsx)(a.p,{children:"Gravitino allows you to update a tag by providing a new tag name, comment and properties."}),"\n",(0,n.jsxs)(l.A,{groupId:"language",queryString:!0,children:[(0,n.jsx)(i.default,{value:"shell",label:"Shell",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-shell",children:'curl -X PUT -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" -d \'{\n  "updates": [\n    {\n      "@type": "rename",\n      "newName": "tag2"\n    },\n    {\n      "@type": "updateComment",\n      "newComment": "This is an updated tag"\n    },\n    {\n      "@type": "setProperty",\n      "property": "key3",\n      "value": "value3"\n    },\n    {\n      "@type": "removeProperty",\n      "property": "key1"\n    }\n  ]\n}\' http://localhost:8090/api/metalakes/test/tags/tag1\n'})})}),(0,n.jsx)(i.default,{value:"java",label:"Java",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:'GravitinoClient client = ...\nTag tag = client.alterTag(\n    "tag1",\n    TagChange.rename("tag2"),\n    TagChange.updateComment("This is an updated tag"),\n    TagChange.setProperty("key3", "value3"),\n    TagChange.removeProperty("key1"));\n'})})})]}),"\n",(0,n.jsx)(a.p,{children:"Currently, Gravitino support the following tag changes:"}),"\n",(0,n.jsxs)(a.table,{children:[(0,n.jsx)(a.thead,{children:(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.th,{children:"Supported modification"}),(0,n.jsx)(a.th,{children:"JSON"}),(0,n.jsx)(a.th,{children:"Java"})]})}),(0,n.jsxs)(a.tbody,{children:[(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"Rename a tag"}),(0,n.jsx)(a.td,{children:(0,n.jsx)(a.code,{children:'{"@type":"rename","newName":"tag_renamed"}'})}),(0,n.jsx)(a.td,{children:(0,n.jsx)(a.code,{children:'TagChange.rename("tag_renamed")'})})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"Update a comment"}),(0,n.jsx)(a.td,{children:(0,n.jsx)(a.code,{children:'{"@type":"updateComment","newComment":"new_comment"}'})}),(0,n.jsx)(a.td,{children:(0,n.jsx)(a.code,{children:'TagChange.updateComment("new_comment")'})})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"Set a tag property"}),(0,n.jsx)(a.td,{children:(0,n.jsx)(a.code,{children:'{"@type":"setProperty","property":"key1","value":"value1"}'})}),(0,n.jsx)(a.td,{children:(0,n.jsx)(a.code,{children:'TagChange.setProperty("key1", "value1")'})})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"Remove a tag property"}),(0,n.jsx)(a.td,{children:(0,n.jsx)(a.code,{children:'{"@type":"removeProperty","property":"key1"}'})}),(0,n.jsx)(a.td,{children:(0,n.jsx)(a.code,{children:'TagChange.removeProperty("key1")'})})]})]})]}),"\n",(0,n.jsx)(a.h3,{id:"delete-a-tag",children:"Delete a tag"}),"\n",(0,n.jsx)(a.p,{children:"You can delete a tag by its name."}),"\n",(0,n.jsxs)(l.A,{groupId:"language",queryString:!0,children:[(0,n.jsx)(i.default,{value:"shell",label:"Shell",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-shell",children:'curl -X DELETE -H "Accept: application/vnd.gravitino.v1+json" \\\nhttp://localhost:8090/api/metalakes/test/tags/tag2\n'})})}),(0,n.jsx)(i.default,{value:"java",label:"Java",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:'GravitinoClient client = ...\nclient.deleteTag("tag2");\n'})})})]}),"\n",(0,n.jsx)(a.h2,{id:"tag-associations",children:"Tag associations"}),"\n",(0,n.jsxs)(a.p,{children:["Gravitino allows you to associate and disassociate tags with metadata objects. Currently, only\n",(0,n.jsx)(a.code,{children:"CATALOG"}),", ",(0,n.jsx)(a.code,{children:"SCHEMA"}),", ",(0,n.jsx)(a.code,{children:"TABLE"}),", ",(0,n.jsx)(a.code,{children:"FILESET"}),", ",(0,n.jsx)(a.code,{children:"TOPIC"})," objects can be tagged."]}),"\n",(0,n.jsx)(a.h3,{id:"associate-and-disassociate-tags-with-a-metadata-object",children:"Associate and disassociate tags with a metadata object"}),"\n",(0,n.jsx)(a.p,{children:"You can associate and disassociate tags with a metadata object by providing the object type, object\nname and tag names."}),"\n",(0,n.jsxs)(a.p,{children:["The request path for REST API is ",(0,n.jsx)(a.code,{children:"/api/metalakes/{metalake}/tags/{metadataObjectType}/{metadataObjectName}"}),"."]}),"\n",(0,n.jsxs)(l.A,{groupId:"language",queryString:!0,children:[(0,n.jsx)(i.default,{value:"shell",label:"Shell",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-shell",children:'curl -X POST -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" -d \'{\n  "tagsToAdd": ["tag1", "tag2"],\n  "tagsToRemove": ["tag3"]\n}\' http://localhost:8090/api/metalakes/test/tags/catalog/catalog1\n\ncurl -X POST -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" -d \'{\n  "tagsToAdd": ["tag1"]\n}\' http://localhost:8090/api/metalakes/test/tags/schema/catalog1.schema1\n'})})}),(0,n.jsx)(i.default,{value:"java",label:"Java",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:'Catalog catalog1 = ...\ncatalog1.supportsTags().associateTags(\n    new String[] {"tag1", "tag2"},\n    new String[] {"tag3"});\n\nSchema schema1 = ...\nschema1.supportsTags().associateTags(new String[] {"tag1"}\uff0c null);\n'})})})]}),"\n",(0,n.jsx)(a.h3,{id:"list-associated-tags-for-a-metadata-object",children:"List associated tags for a metadata object"}),"\n",(0,n.jsx)(a.p,{children:"You can list all the tags associated with a metadata object. The tags in Gravitino are\ninheritable, so listing tags of a metadata object will also list the tags of its parent metadata\nobjects."}),"\n",(0,n.jsxs)(a.p,{children:["The request path for REST API is ",(0,n.jsx)(a.code,{children:"/api/metalakes/{metalake}/tags/{metadataObjectType}/{metadataObjectName}"}),"."]}),"\n",(0,n.jsxs)(l.A,{groupId:"language",queryString:!0,children:[(0,n.jsx)(i.default,{value:"shell",label:"Shell",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-shell",children:'curl -X GET -H "Accept: application/vnd.gravitino.v1+json" \\\nhttp://localhost:8090/api/metalakes/test/tags/catalog/catalog1\n\ncurl -X GET -H "Accept: application/vnd.gravitino.v1+json" \\\nhttp://localhost:8090/api/metalakes/test/tags/schema/catalog1.schema1\n\ncurl -X GET -H "Accept: application/vnd.gravitino.v1+json" \\\nhttp://localhost:8090/api/metalakes/test/tags/catalog/catalog1?details=true\n\ncurl -X GET -H "Accept: application/vnd.gravitino.v1+json" \\\nhttp://localhost:8090/api/metalakes/test/tags/schema/catalog1.schema1?details=true\n'})})}),(0,n.jsx)(i.default,{value:"java",label:"Java",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:"Catalog catalog1 = ...\nString[] tags = catalog1.supportsTags().listTags();\nTag[] tagsInfo = catalog1.supportsTags().listTagsInfo();\n\nSchema schema1 = ...\nString[] tags = schema1.supportsTags().listTags();\nTag[] tagsInfo = schema1.supportsTags().listTagsInfo();\n"})})})]}),"\n",(0,n.jsx)(a.h3,{id:"get-an-associated-tag-by-name-for-a-metadata-object",children:"Get an associated tag by name for a metadata object"}),"\n",(0,n.jsx)(a.p,{children:"You can get an associated tag by its name for a metadata object."}),"\n",(0,n.jsxs)(a.p,{children:["The request path for REST API is ",(0,n.jsx)(a.code,{children:"/api/metalakes/{metalake}/tags/{metadataObjectType}/{metadataObjectName}/{tagName}"}),"."]}),"\n",(0,n.jsxs)(l.A,{groupId:"language",queryString:!0,children:[(0,n.jsx)(i.default,{value:"shell",label:"Shell",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-shell",children:'curl -X GET -H "Accept: application/vnd.gravitino.v1+json" \\\nhttp://localhost:8090/api/metalakes/test/tags/catalog/catalog1/tag1\n\ncurl -X GET -H "Accept: application/vnd.gravitino.v1+json" \\\nhttp://localhost:8090/api/metalakes/test/tags/schema/catalog1.schema1/tag1\n'})})}),(0,n.jsx)(i.default,{value:"java",label:"Java",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:'Catalog catalog1 = ...\nTag tag = catalog1.supportsTags().getTag("tag1");\n\nSchema schema1 = ...\nTag tag = schema1.supportsTags().getTag("tag1");\n'})})})]}),"\n",(0,n.jsx)(a.h3,{id:"list-metadata-objects-associated-with-a-tag",children:"List metadata objects associated with a tag"}),"\n",(0,n.jsx)(a.p,{children:"You can list all the metadata objects associated with a tag."}),"\n",(0,n.jsxs)(l.A,{groupId:"language",queryString:!0,children:[(0,n.jsx)(i.default,{value:"shell",label:"Shell",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-shell",children:'curl -X GET -H "Accept: application/vnd.gravitino.v1+json" \\\nhttp://localhost:8090/api/metalakes/test/tags/tag1/objects\n'})})}),(0,n.jsx)(i.default,{value:"java",label:"Java",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:"Tag tag = ...\nMetadataObject[] objects = tag.associatedObjects().objects();\nint count = tag.associatedObjects().count();\n"})})})]})]})}function u(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},48578:(e,a,t)=>{t.d(a,{A:()=>u});var n=t(79474),s=t(13526),l=t(5505),i=t(54638),r=t(49352);const c={tabList:"tabList_Bgbz",tabItem:"tabItem_O29R"};var o=t(13274);function d(e){let{className:a,block:t,selectedValue:n,selectValue:i,tabValues:r}=e;const d=[],{blockElementScrollPositionUntilNextRender:g}=(0,l.a_)(),h=e=>{const a=e.currentTarget,t=d.indexOf(a),s=r[t].value;s!==n&&(g(a),i(s))},u=e=>{let a=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;a=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;a=d[t]??d[d.length-1];break}}a?.focus()};return(0,o.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},a),children:r.map((e=>{let{value:a,label:t,attributes:l}=e;return(0,o.jsx)("li",{role:"tab",tabIndex:n===a?0:-1,"aria-selected":n===a,ref:e=>d.push(e),onKeyDown:u,onClick:h,...l,className:(0,s.A)("tabs__item",c.tabItem,l?.className,{"tabs__item--active":n===a}),children:t??a},a)}))})}function g(e){let{lazy:a,children:t,selectedValue:s}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=l.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,o.jsx)("div",{className:"margin-top--md",children:l.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==s})))})}function h(e){const a=(0,i.u)(e);return(0,o.jsxs)("div",{className:(0,s.A)("tabs-container",c.tabList),children:[(0,o.jsx)(d,{...a,...e}),(0,o.jsx)(g,{...a,...e})]})}function u(e){const a=(0,r.default)();return(0,o.jsx)(h,{...e,children:(0,i.v)(e.children)},String(a))}},54638:(e,a,t)=>{t.d(a,{u:()=>u,v:()=>o});var n=t(79474),s=t(20241),l=t(97052),i=t(5290),r=t(37651),c=t(88679);function o(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:a,children:t}=e;return(0,n.useMemo)((()=>{const e=a??function(e){return o(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:s}}=e;return{value:a,label:t,attributes:n,default:s}}))}(t);return function(e){const a=(0,r.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function g(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function h(e){let{queryString:a=!1,groupId:t}=e;const l=(0,s.W6)(),r=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,i.aZ)(r),(0,n.useCallback)((e=>{if(!r)return;const a=new URLSearchParams(l.location.search);a.set(r,e),l.replace({...l.location,search:a.toString()})}),[r,l])]}function u(e){const{defaultValue:a,queryString:t=!1,groupId:s}=e,i=d(e),[r,o]=(0,n.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!g({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:i}))),[u,p]=h({queryString:t,groupId:s}),[m,j]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[s,l]=(0,c.Dv)(t);return[s,(0,n.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:s}),v=(()=>{const e=u??m;return g({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{v&&o(v)}),[v]);return{selectedValue:r,selectValue:(0,n.useCallback)((e=>{if(!g({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),p(e),j(e)}),[p,j,i]),tabValues:i}}},86572:(e,a,t)=>{t.r(a),t.d(a,{default:()=>i});t(79474);var n=t(13526);const s={tabItem:"tabItem_VJ4w"};var l=t(13274);function i(e){let{children:a,hidden:t,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,i),hidden:t,children:a})}}}]);