(()=>{var e={};e.id=931,e.ids=[931],e.modules={399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},209:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9348:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},412:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},5315:e=>{"use strict";e.exports=require("path")},7360:e=>{"use strict";e.exports=require("url")},2907:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>f,pages:()=>c,routeModule:()=>p,tree:()=>l});var n=r(3003),i=r(4293),a=r(6550),o=r.n(a),s=r(6979),u={};for(let e in s)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(u[e]=()=>s[e]);r.d(t,u);let l=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,3455)),"/home/chad/repos/halloween_candy_menu/src/app/page.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,7973)),"/home/chad/repos/halloween_candy_menu/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,2075,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/home/chad/repos/halloween_candy_menu/src/app/page.tsx"],f={require:r,loadChunk:()=>Promise.resolve()},p=new n.AppPageRouteModule({definition:{kind:i.RouteKind.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},3719:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,2639,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23)),Promise.resolve().then(r.t.bind(r,2816,23))},6409:()=>{},5303:()=>{},2379:e=>{(()=>{"use strict";"undefined"!=typeof __nccwpck_require__&&(__nccwpck_require__.ab=__dirname+"/");var t={};(()=>{t.parse=function(t,r){if("string"!=typeof t)throw TypeError("argument str must be a string");for(var i={},a=t.split(n),o=(r||{}).decode||e,s=0;s<a.length;s++){var u=a[s],l=u.indexOf("=");if(!(l<0)){var c=u.substr(0,l).trim(),f=u.substr(++l,u.length).trim();'"'==f[0]&&(f=f.slice(1,-1)),void 0==i[c]&&(i[c]=function(e,t){try{return t(e)}catch(t){return e}}(f,o))}}return i},t.serialize=function(e,t,n){var a=n||{},o=a.encode||r;if("function"!=typeof o)throw TypeError("option encode is invalid");if(!i.test(e))throw TypeError("argument name is invalid");var s=o(t);if(s&&!i.test(s))throw TypeError("argument val is invalid");var u=e+"="+s;if(null!=a.maxAge){var l=a.maxAge-0;if(isNaN(l)||!isFinite(l))throw TypeError("option maxAge is invalid");u+="; Max-Age="+Math.floor(l)}if(a.domain){if(!i.test(a.domain))throw TypeError("option domain is invalid");u+="; Domain="+a.domain}if(a.path){if(!i.test(a.path))throw TypeError("option path is invalid");u+="; Path="+a.path}if(a.expires){if("function"!=typeof a.expires.toUTCString)throw TypeError("option expires is invalid");u+="; Expires="+a.expires.toUTCString()}if(a.httpOnly&&(u+="; HttpOnly"),a.secure&&(u+="; Secure"),a.sameSite)switch("string"==typeof a.sameSite?a.sameSite.toLowerCase():a.sameSite){case!0:case"strict":u+="; SameSite=Strict";break;case"lax":u+="; SameSite=Lax";break;case"none":u+="; SameSite=None";break;default:throw TypeError("option sameSite is invalid")}return u};var e=decodeURIComponent,r=encodeURIComponent,n=/; */,i=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/})(),e.exports=t})()},5394:e=>{(()=>{"use strict";"undefined"!=typeof __nccwpck_require__&&(__nccwpck_require__.ab=__dirname+"/");var t={};(()=>{function e(e,t){void 0===t&&(t={});for(var r=function(e){for(var t=[],r=0;r<e.length;){var n=e[r];if("*"===n||"+"===n||"?"===n){t.push({type:"MODIFIER",index:r,value:e[r++]});continue}if("\\"===n){t.push({type:"ESCAPED_CHAR",index:r++,value:e[r++]});continue}if("{"===n){t.push({type:"OPEN",index:r,value:e[r++]});continue}if("}"===n){t.push({type:"CLOSE",index:r,value:e[r++]});continue}if(":"===n){for(var i="",a=r+1;a<e.length;){var o=e.charCodeAt(a);if(o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122||95===o){i+=e[a++];continue}break}if(!i)throw TypeError("Missing parameter name at "+r);t.push({type:"NAME",index:r,value:i}),r=a;continue}if("("===n){var s=1,u="",a=r+1;if("?"===e[a])throw TypeError('Pattern cannot start with "?" at '+a);for(;a<e.length;){if("\\"===e[a]){u+=e[a++]+e[a++];continue}if(")"===e[a]){if(0==--s){a++;break}}else if("("===e[a]&&(s++,"?"!==e[a+1]))throw TypeError("Capturing groups are not allowed at "+a);u+=e[a++]}if(s)throw TypeError("Unbalanced pattern at "+r);if(!u)throw TypeError("Missing pattern at "+r);t.push({type:"PATTERN",index:r,value:u}),r=a;continue}t.push({type:"CHAR",index:r,value:e[r++]})}return t.push({type:"END",index:r,value:""}),t}(e),n=t.prefixes,a=void 0===n?"./":n,o="[^"+i(t.delimiter||"/#?")+"]+?",s=[],u=0,l=0,c="",f=function(e){if(l<r.length&&r[l].type===e)return r[l++].value},p=function(e){var t=f(e);if(void 0!==t)return t;var n=r[l];throw TypeError("Unexpected "+n.type+" at "+n.index+", expected "+e)},d=function(){for(var e,t="";e=f("CHAR")||f("ESCAPED_CHAR");)t+=e;return t};l<r.length;){var m=f("CHAR"),h=f("NAME"),g=f("PATTERN");if(h||g){var y=m||"";-1===a.indexOf(y)&&(c+=y,y=""),c&&(s.push(c),c=""),s.push({name:h||u++,prefix:y,suffix:"",pattern:g||o,modifier:f("MODIFIER")||""});continue}var v=m||f("ESCAPED_CHAR");if(v){c+=v;continue}if(c&&(s.push(c),c=""),f("OPEN")){var y=d(),E=f("NAME")||"",x=f("PATTERN")||"",_=d();p("CLOSE"),s.push({name:E||(x?u++:""),pattern:E&&!x?o:x,prefix:y,suffix:_,modifier:f("MODIFIER")||""});continue}p("END")}return s}function r(e,t){void 0===t&&(t={});var r=a(t),n=t.encode,i=void 0===n?function(e){return e}:n,o=t.validate,s=void 0===o||o,u=e.map(function(e){if("object"==typeof e)return RegExp("^(?:"+e.pattern+")$",r)});return function(t){for(var r="",n=0;n<e.length;n++){var a=e[n];if("string"==typeof a){r+=a;continue}var o=t?t[a.name]:void 0,l="?"===a.modifier||"*"===a.modifier,c="*"===a.modifier||"+"===a.modifier;if(Array.isArray(o)){if(!c)throw TypeError('Expected "'+a.name+'" to not repeat, but got an array');if(0===o.length){if(l)continue;throw TypeError('Expected "'+a.name+'" to not be empty')}for(var f=0;f<o.length;f++){var p=i(o[f],a);if(s&&!u[n].test(p))throw TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'", but got "'+p+'"');r+=a.prefix+p+a.suffix}continue}if("string"==typeof o||"number"==typeof o){var p=i(String(o),a);if(s&&!u[n].test(p))throw TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+p+'"');r+=a.prefix+p+a.suffix;continue}if(!l){var d=c?"an array":"a string";throw TypeError('Expected "'+a.name+'" to be '+d)}}return r}}function n(e,t,r){void 0===r&&(r={});var n=r.decode,i=void 0===n?function(e){return e}:n;return function(r){var n=e.exec(r);if(!n)return!1;for(var a=n[0],o=n.index,s=Object.create(null),u=1;u<n.length;u++)!function(e){if(void 0!==n[e]){var r=t[e-1];"*"===r.modifier||"+"===r.modifier?s[r.name]=n[e].split(r.prefix+r.suffix).map(function(e){return i(e,r)}):s[r.name]=i(n[e],r)}}(u);return{path:a,index:o,params:s}}}function i(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function a(e){return e&&e.sensitive?"":"i"}function o(e,t,r){void 0===r&&(r={});for(var n=r.strict,o=void 0!==n&&n,s=r.start,u=r.end,l=r.encode,c=void 0===l?function(e){return e}:l,f="["+i(r.endsWith||"")+"]|$",p="["+i(r.delimiter||"/#?")+"]",d=void 0===s||s?"^":"",m=0;m<e.length;m++){var h=e[m];if("string"==typeof h)d+=i(c(h));else{var g=i(c(h.prefix)),y=i(c(h.suffix));if(h.pattern){if(t&&t.push(h),g||y){if("+"===h.modifier||"*"===h.modifier){var v="*"===h.modifier?"?":"";d+="(?:"+g+"((?:"+h.pattern+")(?:"+y+g+"(?:"+h.pattern+"))*)"+y+")"+v}else d+="(?:"+g+"("+h.pattern+")"+y+")"+h.modifier}else d+="("+h.pattern+")"+h.modifier}else d+="(?:"+g+y+")"+h.modifier}}if(void 0===u||u)o||(d+=p+"?"),d+=r.endsWith?"(?="+f+")":"$";else{var E=e[e.length-1],x="string"==typeof E?p.indexOf(E[E.length-1])>-1:void 0===E;o||(d+="(?:"+p+"(?="+f+"))?"),x||(d+="(?="+p+"|"+f+")")}return new RegExp(d,a(r))}function s(t,r,n){return t instanceof RegExp?function(e,t){if(!t)return e;var r=e.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)t.push({name:n,prefix:"",suffix:"",modifier:"",pattern:""});return e}(t,r):Array.isArray(t)?RegExp("(?:"+t.map(function(e){return s(e,r,n).source}).join("|")+")",a(n)):o(e(t,n),r,n)}Object.defineProperty(t,"__esModule",{value:!0}),t.parse=e,t.compile=function(t,n){return r(e(t,n),n)},t.tokensToFunction=r,t.match=function(e,t){var r=[];return n(s(e,r,t),r,t)},t.regexpToFunction=n,t.tokensToRegexp=o,t.pathToRegexp=s})(),e.exports=t})()},771:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{fillMetadataSegment:function(){return f},normalizeMetadataPageToRoute:function(){return d},normalizeMetadataRoute:function(){return p}});let n=r(5847),i=function(e){return e&&e.__esModule?e:{default:e}}(r(2002)),a=r(9922),o=r(7716),s=r(7450),u=r(7613),l=r(9964);function c(e){let t="";return(e.includes("(")&&e.includes(")")||e.includes("@"))&&(t=(0,s.djb2Hash)(e).toString(36).slice(0,6)),t}function f(e,t,r){let n=(0,u.normalizeAppPath)(e),s=(0,o.getNamedRouteRegex)(n,!1),f=(0,a.interpolateDynamicPath)(n,t,s),p=c(e),d=p?`-${p}`:"",{name:m,ext:h}=i.default.parse(r);return(0,l.normalizePathSep)(i.default.join(f,`${m}${d}${h}`))}function p(e){if(!(0,n.isMetadataRoute)(e))return e;let t=e,r="";if("/robots"===e?t+=".txt":"/manifest"===e?t+=".webmanifest":r=c(e.slice(0,-(i.default.basename(e).length+1))),!t.endsWith("/route")){let{dir:e,name:n,ext:a}=i.default.parse(t);t=i.default.posix.join(e,`${n}${r?`-${r}`:""}${a}`,"route")}return t}function d(e,t){let r=e.endsWith("/route"),n=r?e.slice(0,-6):e,i=n.endsWith("/sitemap")?".xml":"";return(t?`${n}/[__metadata_id__]`:`${n}${i}`)+(r?"/route":"")}},5847:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{STATIC_METADATA_IMAGES:function(){return i},getExtensionRegexString:function(){return o},isMetadataRoute:function(){return c},isMetadataRouteFile:function(){return s},isStaticMetadataRoute:function(){return l},isStaticMetadataRouteFile:function(){return u}});let n=r(9964),i={icon:{filename:"icon",extensions:["ico","jpg","jpeg","png","svg"]},apple:{filename:"apple-icon",extensions:["jpg","jpeg","png"]},favicon:{filename:"favicon",extensions:["ico"]},openGraph:{filename:"opengraph-image",extensions:["jpg","jpeg","png","gif"]},twitter:{filename:"twitter-image",extensions:["jpg","jpeg","png","gif"]}},a=["js","jsx","ts","tsx"],o=(e,t)=>t?`(?:\\.(${e.join("|")})|((\\[\\])?\\.(${t.join("|")})))`:`\\.(?:${e.join("|")})`;function s(e,t,r){let a=[RegExp(`^[\\\\/]robots${r?`${o(t.concat("txt"),null)}$`:""}`),RegExp(`^[\\\\/]manifest${r?`${o(t.concat("webmanifest","json"),null)}$`:""}`),RegExp("^[\\\\/]favicon\\.ico$"),RegExp(`[\\\\/]sitemap${r?`${o(["xml"],t)}$`:""}`),RegExp(`[\\\\/]${i.icon.filename}\\d?${r?`${o(i.icon.extensions,t)}$`:""}`),RegExp(`[\\\\/]${i.apple.filename}\\d?${r?`${o(i.apple.extensions,t)}$`:""}`),RegExp(`[\\\\/]${i.openGraph.filename}\\d?${r?`${o(i.openGraph.extensions,t)}$`:""}`),RegExp(`[\\\\/]${i.twitter.filename}\\d?${r?`${o(i.twitter.extensions,t)}$`:""}`)],s=(0,n.normalizePathSep)(e);return a.some(e=>e.test(s))}function u(e){return s(e,[],!0)}function l(e){return"/robots"===e||"/manifest"===e||u(e)}function c(e){let t=e.replace(/^\/?app\//,"").replace(/\/route$/,"");return"/"!==t[0]&&(t="/"+t),!t.endsWith("/page")&&s(t,a,!1)}},304:(e,t,r)=>{"use strict";function n(e){return function(){let{cookie:t}=e;if(!t)return{};let{parse:n}=r(2379);return n(Array.isArray(t)?t.join("; "):t)}}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getCookieParser",{enumerable:!0,get:function(){return n}})},666:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{INTERCEPTION_ROUTE_MARKERS:function(){return i},extractInterceptionRouteInformation:function(){return o},isInterceptionRouteAppPath:function(){return a}});let n=r(7613),i=["(..)(..)","(.)","(..)","(...)"];function a(e){return void 0!==e.split("/").find(e=>i.find(t=>e.startsWith(t)))}function o(e){let t,r,a;for(let n of e.split("/"))if(r=i.find(e=>n.startsWith(e))){[t,a]=e.split(r,2);break}if(!t||!r||!a)throw Error(`Invalid interception route: ${e}. Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>`);switch(t=(0,n.normalizeAppPath)(t),r){case"(.)":a="/"===t?`/${a}`:t+"/"+a;break;case"(..)":if("/"===t)throw Error(`Invalid interception route: ${e}. Cannot use (..) marker at the root level, use (.) instead.`);a=t.split("/").slice(0,-1).concat(a).join("/");break;case"(...)":a="/"+a;break;case"(..)(..)":let o=t.split("/");if(o.length<=2)throw Error(`Invalid interception route: ${e}. Cannot use (..)(..) marker at the root level or one level up.`);a=o.slice(0,-2).concat(a).join("/");break;default:throw Error("Invariant: unexpected marker")}return{interceptingRoute:t,interceptedRoute:a}}},9922:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getUtils:function(){return h},interpolateDynamicPath:function(){return d},normalizeDynamicRouteParams:function(){return m},normalizeVercelUrl:function(){return p}});let n=r(7360),i=r(934),a=r(9200),o=r(7716),s=r(4398),u=r(5442),l=r(7175),c=r(7613),f=r(4674);function p(e,t,r,i,a){if(i&&t&&a){let t=(0,n.parse)(e.url,!0);for(let e of(delete t.search,Object.keys(t.query))){let n=e!==f.NEXT_QUERY_PARAM_PREFIX&&e.startsWith(f.NEXT_QUERY_PARAM_PREFIX),i=e!==f.NEXT_INTERCEPTION_MARKER_PREFIX&&e.startsWith(f.NEXT_INTERCEPTION_MARKER_PREFIX);(n||i||(r||Object.keys(a.groups)).includes(e))&&delete t.query[e]}e.url=(0,n.format)(t)}}function d(e,t,r){if(!r)return e;for(let n of Object.keys(r.groups)){let i;let{optional:a,repeat:o}=r.groups[n],s=`[${o?"...":""}${n}]`;a&&(s=`[${s}]`);let u=t[n];i=Array.isArray(u)?u.map(e=>e&&encodeURIComponent(e)).join("/"):u?encodeURIComponent(u):"",e=e.replaceAll(s,i)}return e}function m(e,t,r,n){let i=!0;return r?{params:e=Object.keys(r.groups).reduce((a,o)=>{let s=e[o];"string"==typeof s&&(s=(0,c.normalizeRscURL)(s)),Array.isArray(s)&&(s=s.map(e=>("string"==typeof e&&(e=(0,c.normalizeRscURL)(e)),e)));let u=n[o],l=r.groups[o].optional;return((Array.isArray(u)?u.some(e=>Array.isArray(s)?s.some(t=>t.includes(e)):null==s?void 0:s.includes(e)):null==s?void 0:s.includes(u))||void 0===s&&!(l&&t))&&(i=!1),l&&(!s||Array.isArray(s)&&1===s.length&&("index"===s[0]||s[0]===`[[...${o}]]`))&&(s=void 0,delete e[o]),s&&"string"==typeof s&&r.groups[o].repeat&&(s=s.split("/")),s&&(a[o]=s),a},{}),hasValidParams:i}:{params:e,hasValidParams:!1}}function h({page:e,i18n:t,basePath:r,rewrites:n,pageIsDynamic:c,trailingSlash:h,caseSensitive:g}){let y,v,E;return c&&(y=(0,o.getNamedRouteRegex)(e,!1),E=(v=(0,s.getRouteMatcher)(y))(e)),{handleRewrites:function(o,s){let f={},p=s.pathname,d=n=>{let l=(0,a.getPathMatch)(n.source+(h?"(/)?":""),{removeUnnamedParams:!0,strict:!0,sensitive:!!g})(s.pathname);if((n.has||n.missing)&&l){let e=(0,u.matchHas)(o,s.query,n.has,n.missing);e?Object.assign(l,e):l=!1}if(l){let{parsedDestination:a,destQuery:o}=(0,u.prepareDestination)({appendParamsToQuery:!0,destination:n.destination,params:l,query:s.query});if(a.protocol)return!0;if(Object.assign(f,o,l),Object.assign(s.query,a.query),delete a.query,Object.assign(s,a),p=s.pathname,r&&(p=p.replace(RegExp(`^${r}`),"")||"/"),t){let e=(0,i.normalizeLocalePath)(p,t.locales);p=e.pathname,s.query.nextInternalLocale=e.detectedLocale||l.nextInternalLocale}if(p===e)return!0;if(c&&v){let e=v(p);if(e)return s.query={...s.query,...e},!0}}return!1};for(let e of n.beforeFiles||[])d(e);if(p!==e){let t=!1;for(let e of n.afterFiles||[])if(t=d(e))break;if(!t&&!(()=>{let t=(0,l.removeTrailingSlash)(p||"");return t===(0,l.removeTrailingSlash)(e)||(null==v?void 0:v(t))})()){for(let e of n.fallback||[])if(t=d(e))break}}return f},defaultRouteRegex:y,dynamicRouteMatcher:v,defaultRouteMatches:E,getParamsFromRouteMatches:function(e,r,n){return(0,s.getRouteMatcher)(function(){let{groups:e,routeKeys:i}=y;return{re:{exec:a=>{let o=Object.fromEntries(new URLSearchParams(a)),s=t&&n&&o["1"]===n;for(let e of Object.keys(o)){let t=o[e];e!==f.NEXT_QUERY_PARAM_PREFIX&&e.startsWith(f.NEXT_QUERY_PARAM_PREFIX)&&(o[e.substring(f.NEXT_QUERY_PARAM_PREFIX.length)]=t,delete o[e])}let u=Object.keys(i||{}),l=e=>{if(t){let i=Array.isArray(e),a=i?e[0]:e;if("string"==typeof a&&t.locales.some(e=>e.toLowerCase()===a.toLowerCase()&&(n=e,r.locale=n,!0)))return i&&e.splice(0,1),!i||0===e.length}return!1};return u.every(e=>o[e])?u.reduce((t,r)=>{let n=null==i?void 0:i[r];return n&&!l(o[r])&&(t[e[n].pos]=o[r]),t},{}):Object.keys(o).reduce((e,t)=>{if(!l(o[t])){let r=t;return s&&(r=parseInt(t,10)-1+""),Object.assign(e,{[r]:o[t]})}return e},{})}},groups:e}}())(e.headers["x-now-route-matches"])},normalizeDynamicRouteParams:(e,t)=>m(e,t,y,E),normalizeVercelUrl:(e,t,r)=>p(e,t,r,c,y),interpolateDynamicPath:(e,t)=>d(e,t,y)}}},5316:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"escapeStringRegexp",{enumerable:!0,get:function(){return i}});let r=/[|\\{}()[\]^$+*?.-]/,n=/[|\\{}()[\]^$+*?.-]/g;function i(e){return r.test(e)?e.replace(n,"\\$&"):e}},7450:(e,t)=>{"use strict";function r(e){let t=5381;for(let r=0;r<e.length;r++)t=(t<<5)+t+e.charCodeAt(r)&0xffffffff;return t>>>0}function n(e){return r(e).toString(36).slice(0,5)}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{djb2Hash:function(){return r},hexHash:function(){return n}})},2531:(e,t)=>{"use strict";function r(e){return e.startsWith("/")?e:"/"+e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ensureLeadingSlash",{enumerable:!0,get:function(){return r}})},9964:(e,t)=>{"use strict";function r(e){return e.replace(/\\/g,"/")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"normalizePathSep",{enumerable:!0,get:function(){return r}})},7613:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{normalizeAppPath:function(){return a},normalizeRscURL:function(){return o}});let n=r(2531),i=r(9154);function a(e){return(0,n.ensureLeadingSlash)(e.split("/").reduce((e,t,r,n)=>!t||(0,i.isGroupSegment)(t)||"@"===t[0]||("page"===t||"route"===t)&&r===n.length-1?e:e+"/"+t,""))}function o(e){return e.replace(/\.rsc($|\?)/,"$1")}},1631:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"parseRelativeUrl",{enumerable:!0,get:function(){return i}}),r(8091);let n=r(5291);function i(e,t,r){void 0===r&&(r=!0);let i=new URL("http://n"),a=t?new URL(t,i):e.startsWith(".")?new URL("http://n"):i,{pathname:o,searchParams:s,search:u,hash:l,href:c,origin:f}=new URL(e,a);if(f!==i.origin)throw Error("invariant: invalid relative URL, router received "+e);return{pathname:o,query:r?(0,n.searchParamsToUrlQuery)(s):void 0,search:u,hash:l,href:c.slice(f.length)}}},7720:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"parseUrl",{enumerable:!0,get:function(){return a}});let n=r(5291),i=r(1631);function a(e){if(e.startsWith("/"))return(0,i.parseRelativeUrl)(e);let t=new URL(e);return{hash:t.hash,hostname:t.hostname,href:t.href,pathname:t.pathname,port:t.port,protocol:t.protocol,query:(0,n.searchParamsToUrlQuery)(t.searchParams),search:t.search}}},9200:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getPathMatch",{enumerable:!0,get:function(){return i}});let n=r(5394);function i(e,t){let r=[],i=(0,n.pathToRegexp)(e,r,{delimiter:"/",sensitive:"boolean"==typeof(null==t?void 0:t.sensitive)&&t.sensitive,strict:null==t?void 0:t.strict}),a=(0,n.regexpToFunction)((null==t?void 0:t.regexModifier)?new RegExp(t.regexModifier(i.source),i.flags):i,r);return(e,n)=>{if("string"!=typeof e)return!1;let i=a(e);if(!i)return!1;if(null==t?void 0:t.removeUnnamedParams)for(let e of r)"number"==typeof e.name&&delete i.params[e.name];return{...n,...i.params}}}},5442:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{compileNonPath:function(){return f},matchHas:function(){return c},prepareDestination:function(){return p}});let n=r(5394),i=r(5316),a=r(7720),o=r(666),s=r(2519),u=r(304);function l(e){return e.replace(/__ESC_COLON_/gi,":")}function c(e,t,r,n){void 0===r&&(r=[]),void 0===n&&(n=[]);let i={},a=r=>{let n;let a=r.key;switch(r.type){case"header":a=a.toLowerCase(),n=e.headers[a];break;case"cookie":n="cookies"in e?e.cookies[r.key]:(0,u.getCookieParser)(e.headers)()[r.key];break;case"query":n=t[a];break;case"host":{let{host:t}=(null==e?void 0:e.headers)||{};n=null==t?void 0:t.split(":",1)[0].toLowerCase()}}if(!r.value&&n)return i[function(e){let t="";for(let r=0;r<e.length;r++){let n=e.charCodeAt(r);(n>64&&n<91||n>96&&n<123)&&(t+=e[r])}return t}(a)]=n,!0;if(n){let e=RegExp("^"+r.value+"$"),t=Array.isArray(n)?n.slice(-1)[0].match(e):n.match(e);if(t)return Array.isArray(t)&&(t.groups?Object.keys(t.groups).forEach(e=>{i[e]=t.groups[e]}):"host"===r.type&&t[0]&&(i.host=t[0])),!0}return!1};return!!r.every(e=>a(e))&&!n.some(e=>a(e))&&i}function f(e,t){if(!e.includes(":"))return e;for(let r of Object.keys(t))e.includes(":"+r)&&(e=e.replace(RegExp(":"+r+"\\*","g"),":"+r+"--ESCAPED_PARAM_ASTERISKS").replace(RegExp(":"+r+"\\?","g"),":"+r+"--ESCAPED_PARAM_QUESTION").replace(RegExp(":"+r+"\\+","g"),":"+r+"--ESCAPED_PARAM_PLUS").replace(RegExp(":"+r+"(?!\\w)","g"),"--ESCAPED_PARAM_COLON"+r));return e=e.replace(/(:|\*|\?|\+|\(|\)|\{|\})/g,"\\$1").replace(/--ESCAPED_PARAM_PLUS/g,"+").replace(/--ESCAPED_PARAM_COLON/g,":").replace(/--ESCAPED_PARAM_QUESTION/g,"?").replace(/--ESCAPED_PARAM_ASTERISKS/g,"*"),(0,n.compile)("/"+e,{validate:!1})(t).slice(1)}function p(e){let t;let r=Object.assign({},e.query);delete r.__nextLocale,delete r.__nextDefaultLocale,delete r.__nextDataReq,delete r.__nextInferredLocaleFromDefault,delete r[s.NEXT_RSC_UNION_QUERY];let u=e.destination;for(let t of Object.keys({...e.params,...r}))u=t?u.replace(RegExp(":"+(0,i.escapeStringRegexp)(t),"g"),"__ESC_COLON_"+t):u;let c=(0,a.parseUrl)(u),p=c.query,d=l(""+c.pathname+(c.hash||"")),m=l(c.hostname||""),h=[],g=[];(0,n.pathToRegexp)(d,h),(0,n.pathToRegexp)(m,g);let y=[];h.forEach(e=>y.push(e.name)),g.forEach(e=>y.push(e.name));let v=(0,n.compile)(d,{validate:!1}),E=(0,n.compile)(m,{validate:!1});for(let[t,r]of Object.entries(p))Array.isArray(r)?p[t]=r.map(t=>f(l(t),e.params)):"string"==typeof r&&(p[t]=f(l(r),e.params));let x=Object.keys(e.params).filter(e=>"nextInternalLocale"!==e);if(e.appendParamsToQuery&&!x.some(e=>y.includes(e)))for(let t of x)t in p||(p[t]=e.params[t]);if((0,o.isInterceptionRouteAppPath)(d))for(let t of d.split("/")){let r=o.INTERCEPTION_ROUTE_MARKERS.find(e=>t.startsWith(e));if(r){"(..)(..)"===r?(e.params["0"]="(..)",e.params["1"]="(..)"):e.params["0"]=r;break}}try{let[r,n]=(t=v(e.params)).split("#",2);c.hostname=E(e.params),c.pathname=r,c.hash=(n?"#":"")+(n||""),delete c.search}catch(e){if(e.message.match(/Expected .*? to not repeat, but got an array/))throw Error("To use a multi-match in the destination you must add `*` at the end of the param name to signify it should repeat. https://nextjs.org/docs/messages/invalid-multi-match");throw e}return c.query={...r,...c.query},{newUrl:t,destQuery:p,parsedDestination:c}}},5291:(e,t)=>{"use strict";function r(e){let t={};return e.forEach((e,r)=>{void 0===t[r]?t[r]=e:Array.isArray(t[r])?t[r].push(e):t[r]=[t[r],e]}),t}function n(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function i(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[r,i]=e;Array.isArray(i)?i.forEach(e=>t.append(r,n(e))):t.set(r,n(i))}),t}function a(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return r.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,r)=>e.append(r,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{assign:function(){return a},searchParamsToUrlQuery:function(){return r},urlQueryToSearchParams:function(){return i}})},4398:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getRouteMatcher",{enumerable:!0,get:function(){return i}});let n=r(8091);function i(e){let{re:t,groups:r}=e;return e=>{let i=t.exec(e);if(!i)return!1;let a=e=>{try{return decodeURIComponent(e)}catch(e){throw new n.DecodeError("failed to decode param")}},o={};return Object.keys(r).forEach(e=>{let t=r[e],n=i[t.pos];void 0!==n&&(o[e]=~n.indexOf("/")?n.split("/").map(e=>a(e)):t.repeat?[a(n)]:a(n))}),o}}},7716:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getNamedMiddlewareRegex:function(){return h},getNamedRouteRegex:function(){return m},getRouteRegex:function(){return f},parseParameter:function(){return u}});let n=r(4674),i=r(666),a=r(5316),o=r(7175),s=/\[((?:\[.*\])|.+)\]/;function u(e){let t=e.match(s);return t?l(t[1]):l(e)}function l(e){let t=e.startsWith("[")&&e.endsWith("]");t&&(e=e.slice(1,-1));let r=e.startsWith("...");return r&&(e=e.slice(3)),{key:e,repeat:r,optional:t}}function c(e){let t=(0,o.removeTrailingSlash)(e).slice(1).split("/"),r={},n=1;return{parameterizedRoute:t.map(e=>{let t=i.INTERCEPTION_ROUTE_MARKERS.find(t=>e.startsWith(t)),o=e.match(s);if(t&&o){let{key:e,optional:i,repeat:s}=l(o[1]);return r[e]={pos:n++,repeat:s,optional:i},"/"+(0,a.escapeStringRegexp)(t)+"([^/]+?)"}if(!o)return"/"+(0,a.escapeStringRegexp)(e);{let{key:e,repeat:t,optional:i}=l(o[1]);return r[e]={pos:n++,repeat:t,optional:i},t?i?"(?:/(.+?))?":"/(.+?)":"/([^/]+?)"}}).join(""),groups:r}}function f(e){let{parameterizedRoute:t,groups:r}=c(e);return{re:RegExp("^"+t+"(?:/)?$"),groups:r}}function p(e){let{interceptionMarker:t,getSafeRouteKey:r,segment:n,routeKeys:i,keyPrefix:o}=e,{key:s,optional:u,repeat:c}=l(n),f=s.replace(/\W/g,"");o&&(f=""+o+f);let p=!1;(0===f.length||f.length>30)&&(p=!0),isNaN(parseInt(f.slice(0,1)))||(p=!0),p&&(f=r()),o?i[f]=""+o+s:i[f]=s;let d=t?(0,a.escapeStringRegexp)(t):"";return c?u?"(?:/"+d+"(?<"+f+">.+?))?":"/"+d+"(?<"+f+">.+?)":"/"+d+"(?<"+f+">[^/]+?)"}function d(e,t){let r;let s=(0,o.removeTrailingSlash)(e).slice(1).split("/"),u=(r=0,()=>{let e="",t=++r;for(;t>0;)e+=String.fromCharCode(97+(t-1)%26),t=Math.floor((t-1)/26);return e}),l={};return{namedParameterizedRoute:s.map(e=>{let r=i.INTERCEPTION_ROUTE_MARKERS.some(t=>e.startsWith(t)),o=e.match(/\[((?:\[.*\])|.+)\]/);if(r&&o){let[r]=e.split(o[0]);return p({getSafeRouteKey:u,interceptionMarker:r,segment:o[1],routeKeys:l,keyPrefix:t?n.NEXT_INTERCEPTION_MARKER_PREFIX:void 0})}return o?p({getSafeRouteKey:u,segment:o[1],routeKeys:l,keyPrefix:t?n.NEXT_QUERY_PARAM_PREFIX:void 0}):"/"+(0,a.escapeStringRegexp)(e)}).join(""),routeKeys:l}}function m(e,t){let r=d(e,t);return{...f(e),namedRegex:"^"+r.namedParameterizedRoute+"(?:/)?$",routeKeys:r.routeKeys}}function h(e,t){let{parameterizedRoute:r}=c(e),{catchAll:n=!0}=t;if("/"===r)return{namedRegex:"^/"+(n?".*":"")+"$"};let{namedParameterizedRoute:i}=d(e,!1);return{namedRegex:"^"+i+(n?"(?:(/.*)?)":"")+"$"}}},8091:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DecodeError:function(){return m},MiddlewareNotFoundError:function(){return v},MissingStaticPage:function(){return y},NormalizeError:function(){return h},PageNotFoundError:function(){return g},SP:function(){return p},ST:function(){return d},WEB_VITALS:function(){return r},execOnce:function(){return n},getDisplayName:function(){return u},getLocationOrigin:function(){return o},getURL:function(){return s},isAbsoluteUrl:function(){return a},isResSent:function(){return l},loadGetInitialProps:function(){return f},normalizeRepeatedSlashes:function(){return c},stringifyError:function(){return E}});let r=["CLS","FCP","FID","INP","LCP","TTFB"];function n(e){let t,r=!1;return function(){for(var n=arguments.length,i=Array(n),a=0;a<n;a++)i[a]=arguments[a];return r||(r=!0,t=e(...i)),t}}let i=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,a=e=>i.test(e);function o(){let{protocol:e,hostname:t,port:r}=window.location;return e+"//"+t+(r?":"+r:"")}function s(){let{href:e}=window.location,t=o();return e.substring(t.length)}function u(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function l(e){return e.finished||e.headersSent}function c(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function f(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await f(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&l(r))return n;if(!n)throw Error('"'+u(e)+'.getInitialProps()" should resolve to an object. But found "'+n+'" instead.');return n}let p="undefined"!=typeof performance,d=p&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class m extends Error{}class h extends Error{}class g extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class y extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class v extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function E(e){return JSON.stringify({message:e.message,stack:e.stack})}},7973:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l,metadata:()=>u});var n=r(9351),i=r(5326),a=r.n(i),o=r(1409),s=r.n(o);r(5023);let u={title:"Create Next App",description:"Generated by create next app"};function l({children:e}){return(0,n.jsx)("html",{lang:"en",children:(0,n.jsx)("body",{className:`${a().variable} ${s().variable} antialiased`,children:e})})}},3455:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var n=r(9351);let i=["blah","bleh","bluh"];function a(){return(0,n.jsx)("div",{className:"grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]",children:(0,n.jsx)("main",{className:"flex flex-col gap-8 row-start-2 items-center sm:items-start",children:(0,n.jsx)("div",{className:"FlexGrid",children:(0,n.jsx)("div",{className:"row",children:i.map(e=>(0,n.jsxs)("div",{children:[e,(0,n.jsx)("p",{children:e})]},e))})})})})}},3881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var n=r(771);let i=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,n.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},5023:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[147,491],()=>r(2907));module.exports=n})();