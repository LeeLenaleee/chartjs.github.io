(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{573:function(n,t,e){"use strict";e.r(t);var o=e(7),i=Object(o.a)({},(function(){var n=this,t=n._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"alignment-and-title-position"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#alignment-and-title-position"}},[n._v("#")]),n._v(" Alignment and Title Position")]),n._v(" "),t("p",[n._v("This sample show how to configure the alignment and title position of the chart legend.")]),n._v(" "),t("chart-editor",{attrs:{code:"// <block:actions:2>\nconst actions = [\n  {\n    name: 'Title Position: start',\n    handler(chart) {\n      chart.options.plugins.legend.align = 'start';\n      chart.options.plugins.legend.title.position = 'start';\n      chart.update();\n    }\n  },\n  {\n    name: 'Title Position: center (default)',\n    handler(chart) {\n      chart.options.plugins.legend.align = 'center';\n      chart.options.plugins.legend.title.position = 'center';\n      chart.update();\n    }\n  },\n  {\n    name: 'Title Position: end',\n    handler(chart) {\n      chart.options.plugins.legend.align = 'end';\n      chart.options.plugins.legend.title.position = 'end';\n      chart.update();\n    }\n  },\n];\n// </block:actions>\n\n\n// <block:setup:1>\nconst DATA_COUNT = 7;\nconst NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};\nconst data = {\n  labels: Utils.months({count: DATA_COUNT}),\n  datasets: [\n    {\n      label: 'Dataset 1',\n      data: Utils.numbers(NUMBER_CFG),\n      fill: false,\n      borderColor: Utils.CHART_COLORS.red,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),\n    },\n  ]\n};\n// </block:setup>\n\n// <block:config:0>\nconst config = {\n  type: 'line',\n  data: data,\n  options: {\n    plugins: {\n      legend: {\n        title: {\n          display: true,\n          text: 'Legend Title',\n        }\n      }\n    }\n  }\n};\n// </block:config>\n\nmodule.exports = {\n  actions: actions,\n  config: config,\n};\n"}}),t("h2",{attrs:{id:"docs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docs"}},[n._v("#")]),n._v(" Docs")]),n._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/general/data-structures.html"}},[n._v("Data structures ("),t("code",[n._v("labels")]),n._v(")")])],1),n._v(" "),t("li",[t("RouterLink",{attrs:{to:"/charts/line.html"}},[n._v("Line")])],1),n._v(" "),t("li",[t("RouterLink",{attrs:{to:"/configuration/legend.html"}},[n._v("Legend")])],1)])],1)}),[],!1,null,null,null);t.default=i.exports}}]);