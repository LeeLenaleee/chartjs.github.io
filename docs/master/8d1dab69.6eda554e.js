(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{169:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(9),i=(a(0),a(200)),l={title:"Linear Axis"},c={id:"axes/cartesian/linear",title:"Linear Axis",description:"The linear scale is use to chart numerical data. It can be placed on either the x or y axis. The scatter chart type automatically configures a line chart to use one of these scales for the x axis. As the name suggests, linear interpolation is used to determine where a value lies on the axis.",source:"@site/docs/axes/cartesian/linear.md",permalink:"/docs/master/axes/cartesian/linear",editUrl:"https://github.com/chartjs/Chart.js/edit/master/docs/docs/axes/cartesian/linear.md",sidebar:"someSidebar",previous:{title:"Category Axis",permalink:"/docs/master/axes/cartesian/category"},next:{title:"Logarithmic Axis",permalink:"/docs/master/axes/cartesian/logarithmic"}},b=[{value:"Configuration Options",id:"configuration-options",children:[]},{value:"Tick Configuration Options",id:"tick-configuration-options",children:[]},{value:"Axis Range Settings",id:"axis-range-settings",children:[]},{value:"Step Size",id:"step-size",children:[]},{value:"Internal data format",id:"internal-data-format",children:[]}],o={rightToc:b};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The linear scale is use to chart numerical data. It can be placed on either the x or y axis. The scatter chart type automatically configures a line chart to use one of these scales for the x axis. As the name suggests, linear interpolation is used to determine where a value lies on the axis."),Object(i.b)("h2",{id:"configuration-options"},"Configuration Options"),Object(i.b)("p",null,"These options extend the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/master/axes/cartesian/index#configuration-options"}),"common configuration for all cartesian axes"),"."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"beginAtZero")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"boolean")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"if true, scale will include 0 if it is not already included.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"suggestedMax")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"number")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Adjustment used when calculating the maximum data value. ",Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"#axis-range-settings"}),"more..."))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"suggestedMin")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"number")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Adjustment used when calculating the minimum data value. ",Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"#axis-range-settings"}),"more..."))))),Object(i.b)("h2",{id:"tick-configuration-options"},"Tick Configuration Options"),Object(i.b)("p",null,"The following tick options are provided by the linear scale. They are all located in the ",Object(i.b)("inlineCode",{parentName:"p"},"ticks")," sub options. These options extend the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/master/axes/cartesian/index#tick-configuration"}),"common tick configuration"),"."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"format")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"object")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The ",Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat"}),Object(i.b)("inlineCode",{parentName:"a"},"Intl.NumberFormat"))," options used by the default label formatter")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"maxTicksLimit")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"number")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"11")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Maximum number of ticks and gridlines to show.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"precision")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"number")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"if defined and ",Object(i.b)("inlineCode",{parentName:"td"},"stepSize")," is not specified, the step size will be rounded to this many decimal places.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"stepSize")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"number")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"User defined fixed step size for the scale. ",Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"#step-size"}),"more..."))))),Object(i.b)("h2",{id:"axis-range-settings"},"Axis Range Settings"),Object(i.b)("p",null,"Given the number of axis range settings, it is important to understand how they all interact with each other."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"suggestedMax")," and ",Object(i.b)("inlineCode",{parentName:"p"},"suggestedMin")," settings only change the data values that are used to scale the axis. These are useful for extending the range of the axis while maintaining the auto fit behaviour."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"let minDataValue = Math.min(mostNegativeValue, options.suggestedMin);\nlet maxDataValue = Math.max(mostPositiveValue, options.suggestedMax);\n")),Object(i.b)("p",null,"In this example, the largest positive value is 50, but the data maximum is expanded out to 100. However, because the lowest data value is below the ",Object(i.b)("inlineCode",{parentName:"p"},"suggestedMin")," setting, it is ignored."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"let chart = new Chart(ctx, {\n    type: 'line',\n    data: {\n        datasets: [{\n            label: 'First dataset',\n            data: [0, 20, 40, 50]\n        }],\n        labels: ['January', 'February', 'March', 'April']\n    },\n    options: {\n        scales: {\n            y: {\n                suggestedMin: 50,\n                suggestedMax: 100\n            }\n        }\n    }\n});\n")),Object(i.b)("p",null,"In contrast to the ",Object(i.b)("inlineCode",{parentName:"p"},"suggested*")," settings, the ",Object(i.b)("inlineCode",{parentName:"p"},"min")," and ",Object(i.b)("inlineCode",{parentName:"p"},"max")," settings set explicit ends to the axes. When these are set, some data points may not be visible."),Object(i.b)("h2",{id:"step-size"},"Step Size"),Object(i.b)("p",null,"If set, the scale ticks will be enumerated by multiple of ",Object(i.b)("inlineCode",{parentName:"p"},"stepSize"),", having one tick per increment. If not set, the ticks are labeled automatically using the nice numbers algorithm."),Object(i.b)("p",null,"This example sets up a chart with a y axis that creates ticks at ",Object(i.b)("inlineCode",{parentName:"p"},"0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"let options = {\n    scales: {\n        y: {\n            max: 5,\n            min: 0,\n            ticks: {\n                stepSize: 0.5\n            }\n        }\n    }\n};\n")),Object(i.b)("h2",{id:"internal-data-format"},"Internal data format"),Object(i.b)("p",null,"Internally, linear scale uses numeric data"))}s.isMDXComponent=!0},200:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),p=s(a),u=n,m=p["".concat(l,".").concat(u)]||p[u]||d[u]||i;return a?r.a.createElement(m,c(c({ref:t},o),{},{components:a})):r.a.createElement(m,c({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=u;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var o=2;o<i;o++)l[o]=a[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);