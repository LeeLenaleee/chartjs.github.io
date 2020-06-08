(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{171:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a(2),r=a(9),l=(a(0),a(200)),b={title:"Axes"},i={id:"axes/index",title:"Axes",description:"Axes are an integral part of a chart. They are used to determine how data maps to a pixel value on the chart. In a cartesian chart, there is 1 or more X axis and 1 or more Y axis to map points onto the 2 dimensional canvas. These axes are known as 'cartesian axes'.",source:"@site/docs/axes/index.md",permalink:"/docs/master/axes/index",editUrl:"https://github.com/chartjs/Chart.js/edit/master/docs/docs/axes/index.md",sidebar:"someSidebar",previous:{title:"Mixed Chart Types",permalink:"/docs/master/charts/mixed"},next:{title:"Cartesian Axes",permalink:"/docs/master/axes/cartesian/index"}},c=[{value:"Common Configuration",id:"common-configuration",children:[{value:"Callbacks",id:"callbacks",children:[]},{value:"Updating Axis Defaults",id:"updating-axis-defaults",children:[]}]},{value:"Creating New Axes",id:"creating-new-axes",children:[]}],o={rightToc:c};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Axes are an integral part of a chart. They are used to determine how data maps to a pixel value on the chart. In a cartesian chart, there is 1 or more X axis and 1 or more Y axis to map points onto the 2 dimensional canvas. These axes are known as ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/master/axes/cartesian/index#cartesian-axes"}),"'cartesian axes'"),"."),Object(l.b)("p",null,"In a radial chart, such as a radar chart or a polar area chart, there is a single axis that maps points in the angular and radial directions. These are known as ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/master/axes/radial/index#radial-axes"}),"'radial axes'"),"."),Object(l.b)("p",null,"Scales in Chart.js >v2.0 are significantly more powerful, but also different than those of v1.0."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Multiple X & Y axes are supported."),Object(l.b)("li",{parentName:"ul"},"A built-in label auto-skip feature detects would-be overlapping ticks and labels and removes every nth label to keep things displaying normally."),Object(l.b)("li",{parentName:"ul"},"Scale titles are supported."),Object(l.b)("li",{parentName:"ul"},"New scale types can be extended without writing an entirely new chart type.")),Object(l.b)("h2",{id:"common-configuration"},"Common Configuration"),Object(l.b)("p",null,"The following options are common to all axes provided by Chart.js."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"display")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"boolean"),"|",Object(l.b)("inlineCode",{parentName:"td"},"string")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"true")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Controls the axis global visibility (visible when ",Object(l.b)("inlineCode",{parentName:"td"},"true"),", hidden when ",Object(l.b)("inlineCode",{parentName:"td"},"false"),"). When ",Object(l.b)("inlineCode",{parentName:"td"},"display: 'auto'"),", the axis is visible only if at least one associated dataset is visible.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"weight")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"number")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"0")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The weight used to sort the axis. Higher weights are further away from the chart area.")))),Object(l.b)("h3",{id:"callbacks"},"Callbacks"),Object(l.b)("p",null,"There are a number of config callbacks that can be used to change parameters in the scale at different points in the update process. The options are supplied at the top level of the axis options."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Arguments"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"beforeUpdate")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"axis")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callback called before the update process starts.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"beforeSetDimensions")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"axis")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callback that runs before dimensions are set.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"afterSetDimensions")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"axis")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callback that runs after dimensions are set.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"beforeDataLimits")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"axis")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callback that runs before data limits are determined.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"afterDataLimits")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"axis")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callback that runs after data limits are determined.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"beforeBuildTicks")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"axis")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callback that runs before ticks are created.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"afterBuildTicks")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"axis")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callback that runs after ticks are created. Useful for filtering ticks.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"beforeTickToLabelConversion")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"axis")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callback that runs before ticks are converted into strings.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"afterTickToLabelConversion")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"axis")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callback that runs after ticks are converted into strings.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"beforeCalculateTickRotation")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"axis")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callback that runs before tick rotation is determined.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"afterCalculateTickRotation")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"axis")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callback that runs after tick rotation is determined.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"beforeFit")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"axis")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callback that runs before the scale fits to the canvas.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"afterFit")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"axis")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callback that runs after the scale fits to the canvas.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"afterUpdate")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"axis")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callback that runs at the end of the update process.")))),Object(l.b)("h3",{id:"updating-axis-defaults"},"Updating Axis Defaults"),Object(l.b)("p",null,"The default configuration for a scale can be easily changed using the scale service. All you need to do is to pass in a partial configuration that will be merged with the current scale default configuration to form the new default."),Object(l.b)("p",null,"For example, to set the minimum value of 0 for all linear scales, you would do the following. Any linear scales created after this time would now have a minimum of 0."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"Chart.scaleService.updateScaleDefaults('linear', {\n    min: 0\n});\n")),Object(l.b)("h2",{id:"creating-new-axes"},"Creating New Axes"),Object(l.b)("p",null,"To create a new axis, see the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/master/developers/axes"}),"developer docs"),"."))}d.isMDXComponent=!0},200:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),d=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=d(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),s=d(a),O=n,m=s["".concat(b,".").concat(O)]||s[O]||p[O]||l;return a?r.a.createElement(m,i(i({ref:t},o),{},{components:a})):r.a.createElement(m,i({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,b=new Array(l);b[0]=O;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,b[1]=i;for(var o=2;o<l;o++)b[o]=a[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);