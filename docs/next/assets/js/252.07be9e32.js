(window.webpackJsonp=window.webpackJsonp||[]).push([[252],{601:function(n,t,a){"use strict";a.r(t);var o=a(7),e=Object(o.a)({},(function(){var n=this,t=n._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"polar-area-chart"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#polar-area-chart"}},[n._v("#")]),n._v(" Polar Area Chart")]),n._v(" "),t("chart-editor",{attrs:{code:"// <block:setup:2>\nconst DATA_COUNT = 7;\nUtils.srand(110);\n\nconst actions = [\n  {\n    name: 'Randomize',\n    handler(chart) {\n      chart.data.datasets.forEach(dataset => {\n        dataset.data = generateData();\n      });\n      chart.update();\n    }\n  },\n];\n// </block:setup>\n\n// <block:data:1>\nfunction generateData() {\n  return Utils.numbers({\n    count: DATA_COUNT,\n    min: 0,\n    max: 100\n  });\n}\n\nconst data = {\n  labels: Utils.months({count: DATA_COUNT}),\n  datasets: [{\n    data: generateData()\n  }]\n};\n// </block:data>\n\n// <block:options:0>\nfunction colorize(opaque, hover, ctx) {\n  const v = ctx.raw;\n  const c = v < 35 ? '#D60000'\n    : v < 55 ? '#F46300'\n    : v < 75 ? '#0358B6'\n    : '#44DE28';\n\n  const opacity = hover ? 1 - Math.abs(v / 150) - 0.2 : 1 - Math.abs(v / 150);\n\n  return opaque ? c : Utils.transparentize(c, opacity);\n}\n\nfunction hoverColorize(ctx) {\n  return colorize(false, true, ctx);\n}\n\nconst config = {\n  type: 'polarArea',\n  data: data,\n  options: {\n    plugins: {\n      legend: false,\n      tooltip: false,\n    },\n    elements: {\n      arc: {\n        backgroundColor: colorize.bind(null, false, false),\n        hoverBackgroundColor: hoverColorize\n      }\n    }\n  }\n};\n// </block:options>\n\nmodule.exports = {\n  actions,\n  config,\n};\n"}}),t("h2",{attrs:{id:"docs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docs"}},[n._v("#")]),n._v(" Docs")]),n._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/general/options.html"}},[n._v("Options")]),n._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/general/options.html#scriptable-options"}},[n._v("Scriptable Options")])],1)])],1),n._v(" "),t("li",[t("RouterLink",{attrs:{to:"/charts/polar.html"}},[n._v("Polar Area Chart")])],1)])],1)}),[],!1,null,null,null);t.default=e.exports}}]);