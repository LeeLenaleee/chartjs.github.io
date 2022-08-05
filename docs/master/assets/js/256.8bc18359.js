(window.webpackJsonp=window.webpackJsonp||[]).push([[256],{603:function(n,t,a){"use strict";a.r(t);var e=a(7),l=Object(e.a)({},(function(){var n=this,t=n._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"alignment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#alignment"}},[n._v("#")]),n._v(" Alignment")]),n._v(" "),t("p",[n._v("This sample show how to configure the alignment of the chart title")]),n._v(" "),t("chart-editor",{attrs:{code:"// <block:actions:2>\nconst actions = [\n  {\n    name: 'Title Alignment: start',\n    handler(chart) {\n      chart.options.plugins.title.align = 'start';\n      chart.update();\n    }\n  },\n  {\n    name: 'Title Alignment: center (default)',\n    handler(chart) {\n      chart.options.plugins.title.align = 'center';\n      chart.update();\n    }\n  },\n  {\n    name: 'Title Alignment: end',\n    handler(chart) {\n      chart.options.plugins.title.align = 'end';\n      chart.update();\n    }\n  },\n];\n// </block:actions>\n\n\n// <block:setup:1>\nconst DATA_COUNT = 7;\nconst NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};\nconst data = {\n  labels: Utils.months({count: DATA_COUNT}),\n  datasets: [\n    {\n      label: 'Dataset 1',\n      data: Utils.numbers(NUMBER_CFG),\n      fill: false,\n      borderColor: Utils.CHART_COLORS.red,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),\n    },\n  ]\n};\n// </block:setup>\n\n// <block:config:0>\nconst config = {\n  type: 'line',\n  data: data,\n  options: {\n    plugins: {\n      title: {\n        display: true,\n        text: 'Chart Title',\n      }\n    }\n  }\n};\n// </block:config>\n\nmodule.exports = {\n  actions: actions,\n  config: config,\n};\n"}}),t("h2",{attrs:{id:"docs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docs"}},[n._v("#")]),n._v(" Docs")]),n._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/general/data-structures.html"}},[n._v("Data structures ("),t("code",[n._v("labels")]),n._v(")")])],1),n._v(" "),t("li",[t("RouterLink",{attrs:{to:"/charts/line.html"}},[n._v("Line")])],1),n._v(" "),t("li",[t("RouterLink",{attrs:{to:"/configuration/title.html"}},[n._v("Title")])],1)])],1)}),[],!1,null,null,null);t.default=l.exports}}]);