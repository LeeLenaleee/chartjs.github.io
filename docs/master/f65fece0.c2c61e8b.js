(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{136:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return c})),t.d(a,"metadata",(function(){return o})),t.d(a,"toc",(function(){return s})),t.d(a,"RadialChartExample",(function(){return d})),t.d(a,"default",(function(){return p}));var r=t(3),n=t(7),i=t(0),l=t(143),c={title:"Radial Axes"},o={unversionedId:"axes/radial/index",id:"axes/radial/index",isDocsHomePage:!1,title:"Radial Axes",description:"Radial axes are used specifically for the radar and polar area chart types. These axes overlay the chart area, rather than being positioned on one of the edges. One radial axis is included by default in Chart.js.",source:"@site/docs/axes/radial/index.mdx",slug:"/axes/radial/index",permalink:"/docs/master/axes/radial/index",editUrl:"https://github.com/chartjs/Chart.js/edit/master/docs/docs/axes/radial/index.mdx",version:"current",sidebar:"someSidebar",previous:{title:"Time Series Axis",permalink:"/docs/master/axes/cartesian/timeseries"},next:{title:"Linear Radial Axis",permalink:"/docs/master/axes/radial/linear"}},s=[{value:"Visual Components",id:"visual-components",children:[{value:"Angle Lines",id:"angle-lines",children:[]},{value:"Grid Lines",id:"grid-lines",children:[]},{value:"Point Labels",id:"point-labels",children:[]},{value:"Ticks",id:"ticks",children:[]}]}],d=function(e){var a=e.id,t=e.rScaleConfig;return Object(i.useEffect)((function(){var e={type:"radar",data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"Dataset 1",backgroundColor:"rgba(54, 162, 235, 0.5)",borderColor:"rgb(54, 162, 235)",borderWidth:1,data:[10,20,30,40,50,0,5]}]},options:{scales:{r:t}}},r=new Chart(document.getElementById(a).getContext("2d"),e);return function(){return r.destroy()}})),Object(l.b)("div",{className:"chartjs-center"},Object(l.b)("div",{className:"chartjs-wrapper chartjs-small-chart"},Object(l.b)("canvas",{id:a,className:"chartjs"})))},b={toc:s,RadialChartExample:d};function p(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},b,t,{components:a,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Radial axes are used specifically for the radar and polar area chart types. These axes overlay the chart area, rather than being positioned on one of the edges. One radial axis is included by default in Chart.js."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/master/axes/radial/linear"}),"radialLinear"))),Object(l.b)("h2",{id:"visual-components"},"Visual Components"),Object(l.b)("p",null,"A radial axis is composed of visual components that can be individually configured. These components are:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"#angle-lines"}),"angle lines")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"#grid-lines"}),"grid lines")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"#point-labels"}),"point labels")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"#ticks"}),"ticks"))),Object(l.b)("h3",{id:"angle-lines"},"Angle Lines"),Object(l.b)("p",null,"The grid lines for an axis are drawn on the chart area. They stretch out from the center towards the edge of the canvas. In the example below, they are red."),Object(l.b)(d,{id:"chart-angle",rScaleConfig:{angleLines:{color:"red"}},mdxType:"RadialChartExample"}),Object(l.b)("h3",{id:"grid-lines"},"Grid Lines"),Object(l.b)("p",null,"The grid lines for an axis are drawn on the chart area. In the example below, they are red."),Object(l.b)(d,{id:"chart-grid",rScaleConfig:{grid:{color:"red"}},mdxType:"RadialChartExample"}),Object(l.b)("h3",{id:"point-labels"},"Point Labels"),Object(l.b)("p",null,"The point labels indicate the value for each angle line. In the example below, they are red."),Object(l.b)(d,{id:"chart-point-labels",rScaleConfig:{pointLabels:{color:"red"}},mdxType:"RadialChartExample"}),Object(l.b)("h3",{id:"ticks"},"Ticks"),Object(l.b)("p",null,"The ticks are used to label values based on how far they are from the center of the axis. In the example below, they are red."),Object(l.b)(d,{id:"chart-ticks",rScaleConfig:{ticks:{color:"red"}},mdxType:"RadialChartExample"}))}p.isMDXComponent=!0},143:function(e,a,t){"use strict";t.d(a,"a",(function(){return b})),t.d(a,"b",(function(){return h}));var r=t(0),n=t.n(r);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=n.a.createContext({}),d=function(e){var a=n.a.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},b=function(e){var a=d(e.components);return n.a.createElement(s.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},u=n.a.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),b=d(t),u=r,h=b["".concat(l,".").concat(u)]||b[u]||p[u]||i;return t?n.a.createElement(h,c(c({ref:a},s),{},{components:t})):n.a.createElement(h,c({ref:a},s))}));function h(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=u;var c={};for(var o in a)hasOwnProperty.call(a,o)&&(c[o]=a[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var s=2;s<i;s++)l[s]=t[s];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);