(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(3),i=n(7),r=(n(0),n(142)),o={title:"Interaction Modes"},c={unversionedId:"configuration/interactions/modes",id:"configuration/interactions/modes",isDocsHomePage:!1,title:"Interaction Modes",description:"When configuring interaction with the graph via hover or tooltips, a number of different modes are available.",source:"@site/docs/configuration/interactions/modes.md",slug:"/configuration/interactions/modes",permalink:"/docs/master/configuration/interactions/modes",editUrl:"https://github.com/chartjs/Chart.js/edit/master/docs/docs/configuration/interactions/modes.md",version:"current",sidebar:"someSidebar",previous:{title:"Events",permalink:"/docs/master/configuration/interactions/events"},next:{title:"Animations",permalink:"/docs/master/configuration/animations"}},s=[{value:"point",id:"point",children:[]},{value:"nearest",id:"nearest",children:[]},{value:"index",id:"index",children:[]},{value:"dataset",id:"dataset",children:[]},{value:"x",id:"x",children:[]},{value:"y",id:"y",children:[]}],d={toc:s};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"When configuring interaction with the graph via hover or tooltips, a number of different modes are available."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"options.hover")," and ",Object(r.b)("inlineCode",{parentName:"p"},"options.plugins.tooltip")," extend from ",Object(r.b)("inlineCode",{parentName:"p"},"options.interaction"),". So if ",Object(r.b)("inlineCode",{parentName:"p"},"mode"),", ",Object(r.b)("inlineCode",{parentName:"p"},"intersect")," or any other common settings are configured only in ",Object(r.b)("inlineCode",{parentName:"p"},"options.interaction"),", both hover and tooltips obey that."),Object(r.b)("p",null,"The modes are detailed below and how they behave in conjunction with the ",Object(r.b)("inlineCode",{parentName:"p"},"intersect")," setting."),Object(r.b)("h2",{id:"point"},"point"),Object(r.b)("p",null,"Finds all of the items that intersect the point."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"var chart = new Chart(ctx, {\n    type: 'line',\n    data: data,\n    options: {\n        interaction: {\n            mode: 'point'\n        }\n    }\n});\n")),Object(r.b)("h2",{id:"nearest"},"nearest"),Object(r.b)("p",null,"Gets the items that are at the nearest distance to the point. The nearest item is determined based on the distance to the center of the chart item (point, bar). You can use the ",Object(r.b)("inlineCode",{parentName:"p"},"axis")," setting to define which directions are used in distance calculation. If ",Object(r.b)("inlineCode",{parentName:"p"},"intersect")," is true, this is only triggered when the mouse position intersects an item in the graph. This is very useful for combo charts where points are hidden behind bars."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"var chart = new Chart(ctx, {\n    type: 'line',\n    data: data,\n    options: {\n        interaction: {\n            mode: 'nearest'\n        }\n    }\n});\n")),Object(r.b)("h2",{id:"index"},"index"),Object(r.b)("p",null,"Finds item at the same index. If the ",Object(r.b)("inlineCode",{parentName:"p"},"intersect")," setting is true, the first intersecting item is used to determine the index in the data. If ",Object(r.b)("inlineCode",{parentName:"p"},"intersect")," false the nearest item, in the x direction, is used to determine the index."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"var chart = new Chart(ctx, {\n    type: 'line',\n    data: data,\n    options: {\n        interaction: {\n            mode: 'index'\n        }\n    }\n});\n")),Object(r.b)("p",null,"To use index mode in a chart like the horizontal bar chart, where we search along the y direction, you can use the ",Object(r.b)("inlineCode",{parentName:"p"},"axis")," setting introduced in v2.7.0. By setting this value to ",Object(r.b)("inlineCode",{parentName:"p"},"'y'")," on the y direction is used."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"var chart = new Chart(ctx, {\n    type: 'bar',\n    data: data,\n    options: {\n        interaction: {\n            mode: 'index',\n            axis: 'y'\n        }\n    }\n});\n")),Object(r.b)("h2",{id:"dataset"},"dataset"),Object(r.b)("p",null,"Finds items in the same dataset. If the ",Object(r.b)("inlineCode",{parentName:"p"},"intersect")," setting is true, the first intersecting item is used to determine the index in the data. If ",Object(r.b)("inlineCode",{parentName:"p"},"intersect")," false the nearest item is used to determine the index."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"var chart = new Chart(ctx, {\n    type: 'line',\n    data: data,\n    options: {\n        interaction: {\n            mode: 'dataset'\n        }\n    }\n});\n")),Object(r.b)("h2",{id:"x"},"x"),Object(r.b)("p",null,"Returns all items that would intersect based on the ",Object(r.b)("inlineCode",{parentName:"p"},"X")," coordinate of the position only. Would be useful for a vertical cursor implementation. Note that this only applies to cartesian charts."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"var chart = new Chart(ctx, {\n    type: 'line',\n    data: data,\n    options: {\n        interaction: {\n            mode: 'x'\n        }\n    }\n});\n")),Object(r.b)("h2",{id:"y"},"y"),Object(r.b)("p",null,"Returns all items that would intersect based on the ",Object(r.b)("inlineCode",{parentName:"p"},"Y")," coordinate of the position. This would be useful for a horizontal cursor implementation. Note that this only applies to cartesian charts."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"var chart = new Chart(ctx, {\n    type: 'line',\n    data: data,\n    options: {\n        interaction: {\n            mode: 'y'\n        }\n    }\n});\n")))}l.isMDXComponent=!0},142:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=i.a.createContext({}),l=function(e){var t=i.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return i.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),u=a,h=p["".concat(o,".").concat(u)]||p[u]||b[u]||r;return n?i.a.createElement(h,c(c({ref:t},d),{},{components:n})):i.a.createElement(h,c({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var d=2;d<r;d++)o[d]=n[d];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);