(window.webpackJsonp=window.webpackJsonp||[]).push([[247],{582:function(t,n,e){"use strict";e.r(n);var s=e(3),a=Object(s.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"stacked-linear-category"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#stacked-linear-category"}},[t._v("#")]),t._v(" Stacked Linear / Category")]),t._v(" "),n("chart-editor",{attrs:{code:"// <block:setup:1>\nconst DATA_COUNT = 7;\nconst NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};\n\nconst labels = Utils.months({count: 7});\nconst data = {\n  labels: labels,\n  datasets: [\n    {\n      label: 'Dataset 1',\n      data: [10, 30, 50, 20, 25, 44, -10],\n      borderColor: Utils.CHART_COLORS.red,\n      backgroundColor: Utils.CHART_COLORS.red,\n    },\n    {\n      label: 'Dataset 2',\n      data: ['ON', 'ON', 'OFF', 'ON', 'OFF', 'OFF', 'ON'],\n      borderColor: Utils.CHART_COLORS.blue,\n      backgroundColor: Utils.CHART_COLORS.blue,\n      stepped: true,\n      yAxisID: 'y2',\n    }\n  ]\n};\n// </block:setup>\n\n// <block:config:0>\nconst config = {\n  type: 'line',\n  data: data,\n  options: {\n    responsive: true,\n    plugins: {\n      title: {\n        display: true,\n        text: 'Stacked scales',\n      },\n    },\n    scales: {\n      y: {\n        type: 'linear',\n        position: 'left',\n        stack: 'demo',\n        stackWeight: 2,\n        border: {\n          color: Utils.CHART_COLORS.red\n        }\n      },\n      y2: {\n        type: 'category',\n        labels: ['ON', 'OFF'],\n        offset: true,\n        position: 'left',\n        stack: 'demo',\n        stackWeight: 1,\n        border: {\n          color: Utils.CHART_COLORS.blue\n        }\n      }\n    }\n  },\n};\n// </block:config>\n\nmodule.exports = {\n  config: config,\n};\n"}}),n("h2",{attrs:{id:"docs"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docs"}},[t._v("#")]),t._v(" Docs")]),t._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/charts/line.html"}},[t._v("Line")])],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/axes/"}},[t._v("Axes scales")]),t._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/axes/#stacking"}},[t._v("Stacking")])],1)])],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/general/data-structures.html"}},[t._v("Data structures ("),n("code",[t._v("labels")]),t._v(")")])],1)])],1)}),[],!1,null,null,null);n.default=a.exports}}]);