(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"/1x4":function(e){e.exports=JSON.parse('{"4c31df":[{"name":"`audio` or `video` avoids automatically playing audio","slug":"rules/80f0bf"}],"aaa1bf":[{"name":"`audio` or `video` avoids automatically playing audio","slug":"rules/80f0bf"}],"2eb176":[{"name":"`audio` element content has text alternative","slug":"rules/e7aa44"}],"afb423":[{"name":"`audio` element content has text alternative","slug":"rules/e7aa44"}],"a1b64e":[{"name":"Focusable element has no keyboard trap","slug":"rules/80af7b"}],"ebe86a":[{"name":"Focusable element has no keyboard trap","slug":"rules/80af7b"}],"ab4d13":[{"name":"`video` element auditory content has accessible alternative","slug":"rules/eac66b"},{"name":"`video` element visual content has accessible alternative","slug":"rules/c5a4ea"},{"name":"`video` element visual content has strict accessible alternative","slug":"rules/1ec09b"}],"f51b46":[{"name":"`video` element auditory content has accessible alternative","slug":"rules/eac66b"}],"1ea59c":[{"name":"`video` element visual content has accessible alternative","slug":"rules/c5a4ea"},{"name":"`video` element visual content has strict accessible alternative","slug":"rules/1ec09b"}],"1a02b0":[{"name":"`video` element visual content has accessible alternative","slug":"rules/c5a4ea"}],"f196ce":[{"name":"`video` element visual content has accessible alternative","slug":"rules/c5a4ea"},{"name":"`video` element visual content has strict accessible alternative","slug":"rules/1ec09b"}],"fd26cf":[{"name":"`video` element visual-only content has accessible alternative","slug":"rules/c3232f"}],"ac7dc6":[{"name":"`video` element visual-only content has accessible alternative","slug":"rules/c3232f"}],"ee13b5":[{"name":"`video` element visual-only content has accessible alternative","slug":"rules/c3232f"}],"d7ba54":[{"name":"`video` element visual-only content has accessible alternative","slug":"rules/c3232f"}]}')},"6vEM":function(e,t,a){},Yh6b:function(e,t,a){},"e+bk":function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return I}));a("pIFo"),a("dRSK"),a("f3/d"),a("Z2Ku"),a("L9s1");var n=a("q1tI"),l=a.n(n),r=a("Wbzz"),s=a("M55E"),i=a.n(s),c=a("sWYD"),u=a("vrFN"),o=a("Bl7J"),m=(a("KKXr"),a("/8Fb"),a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),function(e){var t=e.scrollLinkId,a=e.items,n=e.contributors,r=["authors","previous_authors","reviewers","funding"],s=Object.keys(a).reduce((function(e,t){return r.includes(t)||(e[t]=a[t]),e}),{}),i=Object.assign({Authors:a.authors,"Previous Authors":a.previous_authors,Reviewers:a.reviewers,funding:a.funding},s);return l.a.createElement(l.a.Fragment,null,l.a.createElement("a",{id:t,href:"#"+t},l.a.createElement("h2",null,"Acknowledgments")),Object.entries(i).map((function(e){var t=e[0],a=e[1];if(!a||!a.length)return null;var r=t.split("_").join(" ");return l.a.createElement("div",{className:"meta",key:t},l.a.createElement("h3",{className:"heading"},r),l.a.createElement("ul",null,a.map((function(e){if(["Previous Authors","Authors"].includes(t)){var a=n.find((function(t){return t.name.toLowerCase()===e.toLowerCase()}));return a?l.a.createElement("li",{key:a.name},l.a.createElement("a",{className:"sc-item block",target:"_blank",rel:"noopener noreferrer",href:a.url},a.name)):(console.warn(e+", not in contributor list."),l.a.createElement("li",{key:e},e))}return l.a.createElement("li",{key:e},e)}))))})))});m.defaultProps={scrollLinkId:"",items:{authors:[],previous_authors:[],reviewers:[]},contributors:[]};var d=m,h=a("3OQw"),f=a("rbzX"),E=a("TSYQ"),p=a.n(E),g=a("lU33"),v=(a("6vEM"),function(e){var t=e.toc,a=Object(n.useState)(!0),r=a[0],s=a[1];return l.a.createElement("section",{className:p()("tableOfContents",{hide:!r})},l.a.createElement(g.a,{queries:{large:"(min-width: 1200px)"},onChange:function(e){return s(e.large)}}),l.a.createElement("span",{role:"heading","aria-level":"1",className:"heading"},"Table of Contents"),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}}),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"#glossary-listing"},"Glossary")),l.a.createElement("li",null,l.a.createElement("a",{href:"#useful-links"},"Useful Links")),l.a.createElement("li",null,l.a.createElement("a",{href:"#implementation-metrics"},"Implementations")),l.a.createElement("li",null,l.a.createElement("a",{href:"#acknowledgments"},"Acknowledgments"))))}),b=a("hmaj"),y=a("/1x4"),k=a("IQve"),_=a.n(k),w=a("t1PT"),N=function(e){var t=[];return Object.keys(w).forEach((function(a){w[a].forEach((function(n){n.slug!==e||t.includes(a)||t.push(a)}))})),t},T=a("rlp3"),I=(a("Yh6b"),t.default=function(e){var t=e.location,a=e.data,n=a.rule,s=a.allRules,m=a.allGlossary,E=a.site,p=n.html,g=n.frontmatter,k=n.tableOfContents,w=n.fields,I=w.slug,S=w.fastmatterAttributes,L=w.changelog,M=w.fileName.relativePath,H=JSON.parse(L),O=JSON.parse(S),C=new i.a.Converter,A=JSON.parse(E.siteMetadata.actRulesPackage),R=A.repository,j=A.config,P=A.contributors,q=_()(R.url),F=g.id,x="/testcases/"+F+"/rule-"+F+"-testcases-for-em-report-tool.json",G=q+"/edit/develop/_rules/"+M,J="/rules/"+F+"/changelog",z=q+"/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+"+F+"+",W=j["rule-format-metadata"]["input-aspects"],D=y[F],K=T.filter((function(e){return e.actMapping.filter((function(e){var t=e.ruleId,a=e.consistency;return t===F&&["consistent","partially-consistent"].includes(a)})).length>0}));return l.a.createElement(o.a,{location:t},l.a.createElement(u.a,{title:"Rule | "+g.name}),l.a.createElement("section",{className:"page-rule"},l.a.createElement("header",null,l.a.createElement("h1",{dangerouslySetInnerHTML:{__html:C.makeHtml(g.name)}})),l.a.createElement("ul",{className:"meta"},g.rule_type&&l.a.createElement("li",null,l.a.createElement("span",{className:"heading"},"Rule Type:"),l.a.createElement("span",null,g.rule_type)),l.a.createElement("li",null,l.a.createElement("span",{className:"heading"},"Rule Id:"),l.a.createElement("span",null," ",F)),l.a.createElement("li",null,l.a.createElement("span",{className:"heading"},"Last modified:"),l.a.createElement("span",null," ",H&&H.length?Object(c.a)(new Date(H[0].date),"MMM dd, yyyy"):"-")),l.a.createElement("li",null,l.a.createElement(h.a,{accessibility_requirements:O.accessibility_requirements})),D&&D.length>0&&l.a.createElement("li",null,l.a.createElement(b.a,{cls:"side-notes",headingTemplate:function(){return l.a.createElement("span",{className:"heading"},"Used in rules:")},itemTemplate:function(e){return l.a.createElement("li",{key:e.slug},l.a.createElement(r.Link,{to:"/"+e.slug},l.a.createElement("span",{dangerouslySetInnerHTML:{__html:C.makeHtml(e.name)}})))},items:D})),g.input_aspects&&g.input_aspects.length&&l.a.createElement("li",null,l.a.createElement(b.a,{cls:"side-notes",headingTemplate:function(){return l.a.createElement("span",{className:"heading"},"Input Aspects:")},itemTemplate:function(e){var t=W[e]?W[e]:W.default;return l.a.createElement("li",{key:e},l.a.createElement("a",{className:"sc-item block",href:t},e))},items:g.input_aspects})),g.input_rules&&g.input_rules.length&&l.a.createElement("li",null,l.a.createElement(b.a,{cls:"side-notes",headingTemplate:function(){return l.a.createElement("span",{className:"heading"},"Input Rules:")},itemTemplate:function(e){var t=s.edges.find((function(t){return t.node.frontmatter.id===e})),a=t.node.fields.slug.replace("rules/",""),n=t.node.frontmatter.name;return l.a.createElement("li",{key:e},l.a.createElement("a",{className:"sc-item block",href:a,dangerouslySetInnerHTML:{__html:C.makeHtml(n)}}))},items:g.input_rules}))),l.a.createElement("hr",null),l.a.createElement("h2",{id:"description"},l.a.createElement("a",{href:"#description","aria-label":"description permalink",className:"anchor before"},l.a.createElement("svg",{"aria-hidden":"true",focusable:"false",height:"16",viewBox:"0 0 16 16",width:"16"},l.a.createElement("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Description"),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:C.makeHtml(g.description)}}),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:p}}),l.a.createElement("hr",null),function(e,t){var a=N(e);a.includes("#outcome")||a.push("#outcome");var n=t.edges.filter((function(e){var t=e.node.frontmatter.key;return a.includes("#"+t)}));return n.length?l.a.createElement(l.a.Fragment,null,l.a.createElement("a",{id:"glossary-listing",href:"#glossary-listing"},l.a.createElement("h2",null,"Glossary")),n.map((function(e){var t=e.node,a=t.frontmatter,n=t.html,r=a.key;return l.a.createElement("article",{key:t.id},l.a.createElement("a",{id:r,href:"#"+r},l.a.createElement("h3",null,a.title)),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:n}}))}))):null}(I,m),l.a.createElement("hr",null),l.a.createElement("a",{href:"#useful-links",id:"useful-links"},l.a.createElement("h2",null,"Useful Links")),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:z},"Github issues related to this rule")),l.a.createElement("li",null,l.a.createElement("a",{rel:"noopener noreferrer",href:J},"Changelog")),l.a.createElement("li",null,l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:G},"Propose a change to the rule")),l.a.createElement("li",null,l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:x},"Test case file for use in the WCAG-EM Report Tool"))),l.a.createElement("hr",null),l.a.createElement(l.a.Fragment,null,l.a.createElement("a",{id:"implementation-metrics",href:"#implementation-metrics"},l.a.createElement("h2",null,"Implementations")),l.a.createElement("p",null,"This section is not part of the official rule. It is populated dynamically and not accounted for in the change history or the last modified date. This section will not be included in the rule when it is published on the W3C website."),l.a.createElement(f.a,{implementers:K,ruleId:F})),l.a.createElement(d,{scrollLinkId:"acknowledgments",items:O.acknowledgments||O.acknowledgements,contributors:P})),l.a.createElement(v,{toc:k}))},"1207203083")},hmaj:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r=function(e){var t=e.cls,a=e.headingTemplate,n=e.itemTemplate,r=e.items,s=void 0===r?[]:r;return l.a.createElement("div",{className:t},a(),(!s||!s.length)&&l.a.createElement("div",{className:"note"},"No Data"),s.length>0&&l.a.createElement("ul",null,s.map((function(e){return n(e)}))))};r.defaultProps={cls:"",heading:"",items:[]},t.a=r}}]);
//# sourceMappingURL=component---src-templates-rule-js-bdebe6ffe446183acbc7.js.map