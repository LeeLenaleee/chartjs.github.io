(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{149:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(9),l=(n(0),n(200)),o={title:"Fonts"},i={id:"general/fonts",title:"Fonts",description:"There are special global settings that can change all of the fonts on the chart. These options are in Chart.defaults.font. The global font settings only apply when more specific options are not included in the config.",source:"@site/docs/general/fonts.md",permalink:"/docs/master/general/fonts",editUrl:"https://github.com/chartjs/Chart.js/edit/master/docs/docs/general/fonts.md",sidebar:"someSidebar",previous:{title:"Colors",permalink:"/docs/master/general/colors"},next:{title:"Performance",permalink:"/docs/master/general/performance"}},b=[{value:"Missing Fonts",id:"missing-fonts",children:[]}],c={rightToc:b};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"There are special global settings that can change all of the fonts on the chart. These options are in ",Object(l.b)("inlineCode",{parentName:"p"},"Chart.defaults.font"),". The global font settings only apply when more specific options are not included in the config."),Object(l.b)("p",null,"For example, in this chart the text will all be red except for the labels in the legend."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"Chart.defaults.font.color = 'red';\nlet chart = new Chart(ctx, {\n    type: 'line',\n    data: data,\n    options: {\n        legend: {\n            labels: {\n                // This more specific font property overrides the global property\n                font: {\n                    color: 'black'\n                }\n            }\n        }\n    }\n});\n")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"color")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"Color")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"'#666'")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Default font color for all text.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"family")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"string")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"\"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif\"")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Default font family for all text, follows CSS font-family options.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"size")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"number")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"12")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Default font size (in px) for text. Does not apply to radialLinear scale point labels.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"style")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"string")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"'normal'")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Default font style. Does not apply to tooltip title or footer. Does not apply to chart title. Follows CSS font-style options (i.e. normal, italic, oblique, initial, inherit).")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"weight")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"string")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"undefined")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Default font weight (boldness). (see ",Object(l.b)("a",Object(a.a)({parentName:"td"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight"}),"MDN"),").")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"lineHeight")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("code",null,"number","|","string")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"1.2")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Height of an individual line of text (see ",Object(l.b)("a",Object(a.a)({parentName:"td"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/line-height"}),"MDN"),").")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"lineWidth")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"number")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"0")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Stroke width around the text. Currently only supported by ",Object(l.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/master/axes/styling#tick-configuration"}),"ticks"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"strokeStyle")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"string")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"``"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The color of the stroke around the text.  Currently only supported by ",Object(l.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/master/axes/styling#tick-configuration"}),"ticks"),".")))),Object(l.b)("h2",{id:"missing-fonts"},"Missing Fonts"),Object(l.b)("p",null,"If a font is specified for a chart that does exist on the system, the browser will not apply the font when it is set. If you notice odd fonts appearing in your charts, check that the font you are applying exists on your system. See ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/chartjs/Chart.js/issues/3318"}),"issue 3318")," for more details."))}p.isMDXComponent=!0},200:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},s=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),s=p(n),O=a,j=s["".concat(o,".").concat(O)]||s[O]||d[O]||l;return n?r.a.createElement(j,i({ref:t},c,{components:n})):r.a.createElement(j,i({ref:t},c))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=O;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);