(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{545:function(t,a,n){"use strict";n.r(a);var e=n(6),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"stepped-line-charts"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#stepped-line-charts"}},[t._v("#")]),t._v(" Stepped Line Charts")]),t._v(" "),n("chart-editor",{attrs:{code:"// <block:actions:2>\nconst actions = [\n  {\n    name: 'Step: false (default)',\n    handler: (chart) => {\n      chart.data.datasets.forEach(dataset => {\n        dataset.stepped = false;\n      });\n      chart.update();\n    }\n  },\n  {\n    name: 'Step: true',\n    handler: (chart) => {\n      chart.data.datasets.forEach(dataset => {\n        dataset.stepped = true;\n      });\n      chart.update();\n    }\n  },\n  {\n    name: 'Step: before',\n    handler: (chart) => {\n      chart.data.datasets.forEach(dataset => {\n        dataset.stepped = 'before';\n      });\n      chart.update();\n    }\n  },\n  {\n    name: 'Step: after',\n    handler: (chart) => {\n      chart.data.datasets.forEach(dataset => {\n        dataset.stepped = 'after';\n      });\n      chart.update();\n    }\n  },\n  {\n    name: 'Step: middle',\n    handler: (chart) => {\n      chart.data.datasets.forEach(dataset => {\n        dataset.stepped = 'middle';\n      });\n      chart.update();\n    }\n  }\n];\n// </block:actions>\n\n// <block:setup:1>\nconst data = {\n  labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'],\n  datasets: [\n    {\n      label: 'Dataset',\n      data: Utils.numbers({count: 6, min: -100, max: 100}),\n      borderColor: Utils.CHART_COLORS.red,\n      fill: false,\n      stepped: true,\n    }\n  ]\n};\n// </block:setup>\n\n// <block:config:0>\nconst config = {\n  type: 'line',\n  data: data,\n  options: {\n    responsive: true,\n    interaction: {\n      intersect: false,\n      axis: 'x'\n    },\n    plugins: {\n      title: {\n        display: true,\n        text: (ctx) => 'Step ' + ctx.chart.data.datasets[0].stepped + ' Interpolation',\n      }\n    }\n  }\n};\n// </block:config>\n\nmodule.exports = {\n  actions: actions,\n  config: config,\n};\n"}}),n("h2",{attrs:{id:"docs"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docs"}},[t._v("#")]),t._v(" Docs")]),t._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/general/data-structures.html"}},[t._v("Data structures ("),n("code",[t._v("labels")]),t._v(")")])],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/charts/line.html"}},[t._v("Line")]),t._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/charts/line.html#stepped"}},[t._v("Stepped")])],1)])],1)])],1)}),[],!1,null,null,null);a.default=s.exports}}]);