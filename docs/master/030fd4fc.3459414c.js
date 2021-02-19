(window.webpackJsonp=window.webpackJsonp||[]).push([[3,6,13,26,32],{142:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),d=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m=function(e){var t=d(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,i=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),m=d(a),j=n,O=m["".concat(i,".").concat(j)]||m[j]||s[j]||b;return a?r.a.createElement(O,c(c({ref:t},o),{},{components:a})):r.a.createElement(O,c({ref:t},o))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,i=new Array(b);i[0]=j;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var o=2;o<b;o++)i[o]=a[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},56:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),b=(a(0),a(142)),i={},c={unversionedId:"axes/_common",id:"axes/_common",isDocsHomePage:!1,title:"_common",description:"Common options to all axes",source:"@site/docs/axes/_common.md",slug:"/axes/_common",permalink:"/docs/master/axes/_common",editUrl:"https://github.com/chartjs/Chart.js/edit/master/docs/docs/axes/_common.md",version:"current"},l=[{value:"Common options to all axes",id:"common-options-to-all-axes",children:[]}],o={toc:l};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h3",{id:"common-options-to-all-axes"},"Common options to all axes"),Object(b.b)("p",null,"Namespace: ",Object(b.b)("inlineCode",{parentName:"p"},"options.scales[scaleId]")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"type")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Type of scale being employed. Custom scales can be created and registered with a string key. This allows changing the type of an axis for a chart.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"display")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"boolean"),"|",Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"true")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Controls the axis global visibility (visible when ",Object(b.b)("inlineCode",{parentName:"td"},"true"),", hidden when ",Object(b.b)("inlineCode",{parentName:"td"},"false"),"). When ",Object(b.b)("inlineCode",{parentName:"td"},"display: 'auto'"),", the axis is visible only if at least one associated dataset is visible.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"gridLines")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"object")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Grid line configuration. ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/master/axes/styling#grid-line-configuration"}),"more..."))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"min")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"number")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"User defined minimum number for the scale, overrides minimum value from data. ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/master/axes/index#axis-range-settings"}),"more..."))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"max")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"number")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"User defined maximum number for the scale, overrides maximum value from data. ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/master/axes/index#axis-range-settings"}),"more..."))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"reverse")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"boolean")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Reverse the scale.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"suggestedMax")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"number")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Adjustment used when calculating the maximum data value. ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/master/axes/index#axis-range-settings"}),"more..."))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"suggestedMin")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"number")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Adjustment used when calculating the minimum data value. ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/master/axes/index#axis-range-settings"}),"more..."))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"ticks")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"object")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Tick configuration. ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#tick-configuration"}),"more..."))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"weight")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"number")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"0")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The weight used to sort the axis. Higher weights are further away from the chart area.")))))}d.isMDXComponent=!0},57:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),b=(a(0),a(142)),i={},c={unversionedId:"axes/_common_ticks",id:"axes/_common_ticks",isDocsHomePage:!1,title:"_common_ticks",description:"Common tick options to all axes",source:"@site/docs/axes/_common_ticks.md",slug:"/axes/_common_ticks",permalink:"/docs/master/axes/_common_ticks",editUrl:"https://github.com/chartjs/Chart.js/edit/master/docs/docs/axes/_common_ticks.md",version:"current"},l=[{value:"Common tick options to all axes",id:"common-tick-options-to-all-axes",children:[]}],o={toc:l};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h3",{id:"common-tick-options-to-all-axes"},"Common tick options to all axes"),Object(b.b)("p",null,"Namespace: ",Object(b.b)("inlineCode",{parentName:"p"},"options.scales[scaleId].ticks")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Scriptable"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"callback")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"function")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Returns the string representation of the tick value as it should be displayed on the chart. See ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/master/axes/labelling#creating-custom-tick-formats"}),"callback"),".")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"display")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"boolean")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"true")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, show tick labels.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"color")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/master/general/colors"}),Object(b.b)("inlineCode",{parentName:"a"},"Color"))),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"Chart.defaults.color")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Color of ticks.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"font")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"Font")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"Chart.defaults.font")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"See ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/master/general/fonts"}),"Fonts"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"major")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"object")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"{}")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/master/axes/styling#major-tick-configuration"}),"Major ticks configuration"),".")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"padding")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"number")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"0")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sets the offset of the tick labels from the axis")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"textStrokeColor")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/master/general/colors"}),Object(b.b)("inlineCode",{parentName:"a"},"Color"))),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"``"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The color of the stroke around the text.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"textStrokeWidth")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"number")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"0")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Stroke width around the text.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"z")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"number")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"0")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"z-index of tick layer. Useful when ticks are drawn on chart area. Values ","<","= 0 are drawn under datasets, ",">"," 0 on top.")))))}d.isMDXComponent=!0},58:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),b=(a(0),a(142)),i={},c={unversionedId:"axes/cartesian/_common",id:"axes/cartesian/_common",isDocsHomePage:!1,title:"_common",description:"Common options to all cartesian axes",source:"@site/docs/axes/cartesian/_common.md",slug:"/axes/cartesian/_common",permalink:"/docs/master/axes/cartesian/_common",editUrl:"https://github.com/chartjs/Chart.js/edit/master/docs/docs/axes/cartesian/_common.md",version:"current"},l=[{value:"Common options to all cartesian axes",id:"common-options-to-all-cartesian-axes",children:[]}],o={toc:l};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h3",{id:"common-options-to-all-cartesian-axes"},"Common options to all cartesian axes"),Object(b.b)("p",null,"Namespace: ",Object(b.b)("inlineCode",{parentName:"p"},"options.scales[scaleId]")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"bounds")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"'ticks'")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Determines the scale bounds. ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/master/axes/cartesian/index#scale-bounds"}),"more..."))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"position")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Position of the axis. ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/master/axes/cartesian/index#axis-position"}),"more..."))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"axis")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Which type of axis this is. Possible values are: ",Object(b.b)("inlineCode",{parentName:"td"},"'x'"),", ",Object(b.b)("inlineCode",{parentName:"td"},"'y'"),". If not set, this is inferred from the first character of the ID which should be ",Object(b.b)("inlineCode",{parentName:"td"},"'x'")," or ",Object(b.b)("inlineCode",{parentName:"td"},"'y'"),".")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"offset")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"boolean")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, extra space is added to the both edges and the axis is scaled to fit into the chart area. This is set to ",Object(b.b)("inlineCode",{parentName:"td"},"true")," for a bar chart by default.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"scaleLabel")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"object")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Scale title configuration. ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/master/axes/labelling#scale-title-configuration"}),"more..."))))))}d.isMDXComponent=!0},59:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),b=(a(0),a(142)),i={},c={unversionedId:"axes/cartesian/_common_ticks",id:"axes/cartesian/_common_ticks",isDocsHomePage:!1,title:"_common_ticks",description:"Common tick options to all cartesian axes",source:"@site/docs/axes/cartesian/_common_ticks.md",slug:"/axes/cartesian/_common_ticks",permalink:"/docs/master/axes/cartesian/_common_ticks",editUrl:"https://github.com/chartjs/Chart.js/edit/master/docs/docs/axes/cartesian/_common_ticks.md",version:"current"},l=[{value:"Common tick options to all cartesian axes",id:"common-tick-options-to-all-cartesian-axes",children:[]}],o={toc:l};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h3",{id:"common-tick-options-to-all-cartesian-axes"},"Common tick options to all cartesian axes"),Object(b.b)("p",null,"Namespace: ",Object(b.b)("inlineCode",{parentName:"p"},"options.scales[scaleId].ticks")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"align")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"'center'")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The tick alignment along the axis. Can be ",Object(b.b)("inlineCode",{parentName:"td"},"'start'"),", ",Object(b.b)("inlineCode",{parentName:"td"},"'center'"),", or ",Object(b.b)("inlineCode",{parentName:"td"},"'end'"),".")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"crossAlign")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"'near'")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The tick alignment perpendicular to the axis. Can be ",Object(b.b)("inlineCode",{parentName:"td"},"'near'"),", ",Object(b.b)("inlineCode",{parentName:"td"},"'center'"),", or ",Object(b.b)("inlineCode",{parentName:"td"},"'far'"),". See ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"./index#tick-alignment"}),"Tick Alignment"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"sampleSize")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"number")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"ticks.length")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The number of ticks to examine when deciding how many labels will fit. Setting a smaller value will be faster, but may be less accurate when there is large variability in label length.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"autoSkip")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"boolean")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"true")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, automatically calculates how many labels can be shown and hides labels accordingly. Labels will be rotated up to ",Object(b.b)("inlineCode",{parentName:"td"},"maxRotation")," before skipping any. Turn ",Object(b.b)("inlineCode",{parentName:"td"},"autoSkip")," off to show all labels no matter what.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"autoSkipPadding")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"number")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"0")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Padding between the ticks on the horizontal axis when ",Object(b.b)("inlineCode",{parentName:"td"},"autoSkip")," is enabled.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"labelOffset")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"number")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"0")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Distance in pixels to offset the label from the centre point of the tick (in the x-direction for the x-axis, and the y-direction for the y-axis). ",Object(b.b)("em",{parentName:"td"},"Note: this can cause labels at the edges to be cropped by the edge of the canvas"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"maxRotation")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"number")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"50")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Maximum rotation for tick labels when rotating to condense labels. Note: Rotation doesn't occur until necessary. ",Object(b.b)("em",{parentName:"td"},"Note: Only applicable to horizontal scales."))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"minRotation")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"number")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"0")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Minimum rotation for tick labels. ",Object(b.b)("em",{parentName:"td"},"Note: Only applicable to horizontal scales."))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"mirror")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"boolean")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Flips tick labels around axis, displaying the labels inside the chart instead of outside. ",Object(b.b)("em",{parentName:"td"},"Note: Only applicable to vertical scales."))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"padding")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"number")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"0")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Padding between the tick label and the axis. When set on a vertical axis, this applies in the horizontal (X) direction. When set on a horizontal axis, this applies in the vertical (Y) direction.")))))}d.isMDXComponent=!0},70:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return d})),a.d(t,"metadata",(function(){return m})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return O}));var n=a(3),r=a(7),b=(a(0),a(142)),i=a(56),c=a(58),l=a(59),o=a(57),d={title:"Category Axis"},m={unversionedId:"axes/cartesian/category",id:"axes/cartesian/category",isDocsHomePage:!1,title:"Category Axis",description:"If the global configuration is used, labels are drawn from one of the label arrays included in the chart data. If only data.labels is defined, this will be used. If data.xLabels is defined and the axis is horizontal, this will be used. Similarly, if data.yLabels is defined and the axis is vertical, this property will be used. Using both xLabels and yLabels together can create a chart that uses strings for both the X and Y axes.",source:"@site/docs/axes/cartesian/category.mdx",slug:"/axes/cartesian/category",permalink:"/docs/master/axes/cartesian/category",editUrl:"https://github.com/chartjs/Chart.js/edit/master/docs/docs/axes/cartesian/category.mdx",version:"current",sidebar:"someSidebar",previous:{title:"Cartesian Axes",permalink:"/docs/master/axes/cartesian/index"},next:{title:"Linear Axis",permalink:"/docs/master/axes/cartesian/linear"}},s=[{value:"Category Axis Definition",id:"category-axis-definition",children:[]},{value:"Configuration Options",id:"configuration-options",children:[{value:"Category Axis specific options",id:"category-axis-specific-options",children:[]}]},{value:"Tick Configuration",id:"tick-configuration",children:[]},{value:"Min Max Configuration",id:"min-max-configuration",children:[]},{value:"Internal data format",id:"internal-data-format",children:[]}],j={toc:s};function O(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},j,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"If the global configuration is used, labels are drawn from one of the label arrays included in the chart data. If only ",Object(b.b)("inlineCode",{parentName:"p"},"data.labels")," is defined, this will be used. If ",Object(b.b)("inlineCode",{parentName:"p"},"data.xLabels")," is defined and the axis is horizontal, this will be used. Similarly, if ",Object(b.b)("inlineCode",{parentName:"p"},"data.yLabels")," is defined and the axis is vertical, this property will be used. Using both ",Object(b.b)("inlineCode",{parentName:"p"},"xLabels")," and ",Object(b.b)("inlineCode",{parentName:"p"},"yLabels")," together can create a chart that uses strings for both the X and Y axes."),Object(b.b)("p",null,"Specifying any of the settings above defines the x-axis as ",Object(b.b)("inlineCode",{parentName:"p"},"type: 'category'")," if not defined otherwise. For more fine-grained control of category labels, it is also possible to add ",Object(b.b)("inlineCode",{parentName:"p"},"labels")," as part of the category axis definition. Doing so does not apply the global defaults."),Object(b.b)("h2",{id:"category-axis-definition"},"Category Axis Definition"),Object(b.b)("p",null,"Globally:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"let chart = new Chart(ctx, {\n    type: ...\n    data: {\n        labels: ['January', 'February', 'March', 'April', 'May', 'June'],\n        datasets: ...\n    }\n});\n")),Object(b.b)("p",null,"As part of axis definition:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"let chart = new Chart(ctx, {\n    type: ...\n    data: ...\n    options: {\n        scales: {\n            x: {\n                type: 'category',\n                labels: ['January', 'February', 'March', 'April', 'May', 'June']\n            }\n        }\n    }\n});\n")),Object(b.b)("h2",{id:"configuration-options"},"Configuration Options"),Object(b.b)("h3",{id:"category-axis-specific-options"},"Category Axis specific options"),Object(b.b)("p",null,"Namespace: ",Object(b.b)("inlineCode",{parentName:"p"},"options.scales[scaleId]")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"min")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string"),"|",Object(b.b)("inlineCode",{parentName:"td"},"number")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The minimum item to display. ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#min-max-configuration"}),"more..."))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"max")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string"),"|",Object(b.b)("inlineCode",{parentName:"td"},"number")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The maximum item to display. ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#min-max-configuration"}),"more..."))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"labels")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string[]"),"|",Object(b.b)("inlineCode",{parentName:"td"},"string[][]")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"An array of labels to display. When an individual label is an array of strings, each item is rendered on a new line.")))),Object(b.b)(c.default,{mdxType:"CommonCartesian"}),Object(b.b)(i.default,{mdxType:"CommonAll"}),Object(b.b)("h2",{id:"tick-configuration"},"Tick Configuration"),Object(b.b)(l.default,{mdxType:"CommonTicks"}),Object(b.b)(o.default,{mdxType:"CommonTicksAll"}),Object(b.b)("h2",{id:"min-max-configuration"},"Min Max Configuration"),Object(b.b)("p",null,"For both the ",Object(b.b)("inlineCode",{parentName:"p"},"min")," and ",Object(b.b)("inlineCode",{parentName:"p"},"max")," properties, the value must be ",Object(b.b)("inlineCode",{parentName:"p"},"string")," in the ",Object(b.b)("inlineCode",{parentName:"p"},"labels")," array or ",Object(b.b)("inlineCode",{parentName:"p"},"numeric"),' value as an index of a label in that array. In the example below, the x axis would only display "March" through "June".'),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"let chart = new Chart(ctx, {\n    type: 'line',\n    data: {\n        datasets: [{\n            data: [10, 20, 30, 40, 50, 60]\n        }],\n        labels: ['January', 'February', 'March', 'April', 'May', 'June']\n    },\n    options: {\n        scales: {\n            x: {\n                min: 'March'\n            }\n        }\n    }\n});\n")),Object(b.b)("h2",{id:"internal-data-format"},"Internal data format"),Object(b.b)("p",null,"Internally category scale uses label indices"))}O.isMDXComponent=!0}}]);