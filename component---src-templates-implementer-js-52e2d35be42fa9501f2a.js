(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{222:function(e,t,r){"use strict";r.r(t),r.d(t,"query",(function(){return d}));r(150),r(109),r(110);var n=r(0),a=r.n(n),o=r(237),i=r.n(o),c=r(220),u=r(21),l=r(219),s=function(e){return a.a.createElement("table",{className:"compact"},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Testcase Url"),a.a.createElement("th",{width:"100px"},"Expected"),a.a.createElement("th",{width:"100px"},"Actual"))),a.a.createElement("tbody",null,e.map((function(e,t){var r=e.url,n=e.expected,o=e.actual,i=t+"-"+r;return a.a.createElement("tr",{key:i},a.a.createElement("td",null,a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:r},r)),a.a.createElement("td",null,n),a.a.createElement("td",null,o))}))))},f=function(e,t,r,n){return a.a.createElement("div",{key:e},a.a.createElement(u.Link,{to:"/rules/"+e},a.a.createElement("h2",{id:"#"+e},t)),n&&a.a.createElement("div",{className:"invalid"},a.a.createElement("b",null,"INCOMPLETE IMPLEMENTATION.")," ",a.a.createElement("br",null),"Listed below are the incomplete assertions. Kindly submit an amended implementation report."),r)},p=function(e,t){return void 0===e&&(e=!1),t.implementation[0].complete===e},m=function(e,t){return a.a.createElement(c.a,null,a.a.createElement(l.a,{title:e}),a.a.createElement("section",{className:"page-container page-implementers"},a.a.createElement("h1",null,e),t))};t.default=function(e){var t=e.data,r=e.location,n=t.sitePage.context,o=n.title,c=n.data,u=JSON.parse(c).mapping,l=u.every((function(e){return p(!1,e)})),d=!1;if(r.search){var v=i.a.parse(r.search).incomplete;d="true"===(void 0!==v&&v)}if(l&&!d){var y=a.a.createElement("div",{className:"invalid"},a.a.createElement("b",null,"INCOMPLETE IMPLEMENTATIONS.")," ",a.a.createElement("br",null),"All implementations provided are incomplete. Kindly submit amended implementation reports.");return m(o,y)}var E=function(e,t){if(t){var r=e.filter((function(e){return p(!1,e)}));return r&&r.length?a.a.createElement("div",null,r.map((function(e){var r=e.ruleId,n=e.ruleName,a=e.implementation[0],o=a.incorrect,i=a.assertions,c=s(i.filter((function(e){var t=e.url;return o.includes(t)})));return f(r,n,c,t)}))):a.a.createElement("div",{className:"valid"},a.a.createElement("b",null,"WELL DONE.")," ",a.a.createElement("br",null),"All submitted implementation reports are complete.")}var n=e.filter((function(e){return p(!0,e)}));return a.a.createElement("div",null,n.map((function(e){var t=e.ruleId,r=e.ruleName,n=e.implementation[0].assertions,a=s(n);return f(t,r,a)})))}(u,d);return m(o,E)};var d="2516264365"},237:function(e,t,r){"use strict";r(59);var n=r(238);r(48),r(46),r(63),r(62),r(23),r(151),r(242),r(243),r(12),r(10),r(5),r(16),r(28),r(154),r(34),r(35),r(25),r(14);var a=r(244),o=r(248),i=r(249),c=r(250);function u(e,t){return t.encode?t.strict?o(e):encodeURIComponent(e):e}function l(e,t){return t.decode?i(e):e}function s(e){var t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function f(e){var t=(e=s(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function p(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function m(e,t){var r=function(e){var t;switch(e.arrayFormat){case"index":return function(e,r,n){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return function(e,r,n){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"comma":return function(e,t,r){var n="string"==typeof t&&t.split("").indexOf(",")>-1?t.split(","):t;r[e]=n};default:return function(e,t,r){void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",parseNumbers:!1,parseBooleans:!1},t)),a=Object.create(null);if("string"!=typeof e)return a;if(!(e=e.trim().replace(/^[?#&]/,"")))return a;var o=!0,i=!1,u=void 0;try{for(var s,f=e.split("&")[Symbol.iterator]();!(o=(s=f.next()).done);o=!0){var m=s.value,d=c(m.replace(/\+/g," "),"="),v=n(d,2),y=v[0];h=void 0===(h=v[1])?null:l(h,t),r(l(y,t),h,a)}}catch(x){i=!0,u=x}finally{try{o||null==f.return||f.return()}finally{if(i)throw u}}for(var E=0,b=Object.keys(a);E<b.length;E++){var h;y=b[E];if("object"==typeof(h=a[y])&&null!==h)for(var g=0,N=Object.keys(h);g<N.length;g++){var I=N[g];h[I]=p(h[I],t)}else a[y]=p(h,t)}return!1===t.sort?a:(!0===t.sort?Object.keys(a).sort():Object.keys(a).sort(t.sort)).reduce((function(e,t){var r=a[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(r):e[t]=r,e}),Object.create(null))}t.extract=f,t.parse=m,t.stringify=function(e,t){if(!e)return"";var r=function(e){switch(e.arrayFormat){case"index":return function(t){return function(r,n){var o=r.length;return void 0===n?r:[].concat(a(r),null===n?[[u(t,e),"[",o,"]"].join("")]:[[u(t,e),"[",u(o,e),"]=",u(n,e)].join("")])}};case"bracket":return function(t){return function(r,n){return void 0===n?r:[].concat(a(r),null===n?[[u(t,e),"[]"].join("")]:[[u(t,e),"[]=",u(n,e)].join("")])}};case"comma":return function(t){return function(r,n,a){return null==n||0===n.length?r:0===a?[[u(t,e),"=",u(n,e)].join("")]:[[r,u(n,e)].join(",")]}};default:return function(t){return function(r,n){return void 0===n?r:[].concat(a(r),null===n?[u(t,e)]:[[u(t,e),"=",u(n,e)].join("")])}}}}(t=Object.assign({encode:!0,strict:!0,arrayFormat:"none"},t)),n=Object.keys(e);return!1!==t.sort&&n.sort(t.sort),n.map((function(n){var a=e[n];return void 0===a?"":null===a?u(n,t):Array.isArray(a)?a.reduce(r(n),[]).join("&"):u(n,t)+"="+u(a,t)})).filter((function(e){return e.length>0})).join("&")},t.parseUrl=function(e,t){return{url:s(e).split("?")[0]||"",query:m(f(e),t)}}},238:function(e,t,r){var n=r(239),a=r(240),o=r(241);e.exports=function(e,t){return n(e)||a(e,t)||o()}},239:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},240:function(e,t){e.exports=function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var r=[],n=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(u){a=!0,o=u}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}}},241:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},242:function(e,t,r){var n=r(1);n(n.S,"Number",{isNaN:function(e){return e!=e}})},243:function(e,t,r){"use strict";var n=r(6),a=r(30),o=r(45),i=r(112),c=r(81),u=r(13),l=r(82).f,s=r(111).f,f=r(15).f,p=r(155).trim,m=n.Number,d=m,v=m.prototype,y="Number"==o(r(61)(v)),E="trim"in String.prototype,b=function(e){var t=c(e,!1);if("string"==typeof t&&t.length>2){var r,n,a,o=(t=E?t.trim():p(t,3)).charCodeAt(0);if(43===o||45===o){if(88===(r=t.charCodeAt(2))||120===r)return NaN}else if(48===o){switch(t.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+t}for(var i,u=t.slice(2),l=0,s=u.length;l<s;l++)if((i=u.charCodeAt(l))<48||i>a)return NaN;return parseInt(u,n)}}return+t};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof m&&(y?u((function(){v.valueOf.call(r)})):"Number"!=o(r))?i(new d(b(t)),r,m):b(t)};for(var h,g=r(11)?l(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;g.length>N;N++)a(d,h=g[N])&&!a(m,h)&&f(m,h,s(d,h));m.prototype=v,v.constructor=m,r(17)(n,"Number",m)}},244:function(e,t,r){var n=r(245),a=r(246),o=r(247);e.exports=function(e){return n(e)||a(e)||o()}},245:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}},246:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},247:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},248:function(e,t,r){"use strict";r(58),r(80),r(5),r(14),e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%".concat(e.charCodeAt(0).toString(16).toUpperCase())}))}},249:function(e,t,r){"use strict";r(14),r(12),r(10),r(5),r(16),r(108),r(152);var n=new RegExp("%[a-f0-9]{2}","gi"),a=new RegExp("(%[a-f0-9]{2})+","gi");function o(e,t){try{return decodeURIComponent(e.join(""))}catch(a){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],o(r),o(n))}function i(e){try{return decodeURIComponent(e)}catch(a){for(var t=e.match(n),r=1;r<t.length;r++)t=(e=o(t,r).join("")).match(n);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var r={"%FE%FF":"��","%FF%FE":"��"},n=a.exec(e);n;){try{r[n[0]]=decodeURIComponent(n[0])}catch(t){var o=i(n[0]);o!==n[0]&&(r[n[0]]=o)}n=a.exec(e)}r["%C2"]="�";for(var c=Object.keys(r),u=0;u<c.length;u++){var l=c[u];e=e.replace(new RegExp(l,"g"),r[l])}return e}(e)}}},250:function(e,t,r){"use strict";r(25),e.exports=function(e,t){if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];var r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}}}]);
//# sourceMappingURL=component---src-templates-implementer-js-52e2d35be42fa9501f2a.js.map