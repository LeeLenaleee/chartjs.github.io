(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{541:function(t,n,a){"use strict";a.r(n);var o=a(7),e=Object(o.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"delay"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#delay"}},[t._v("#")]),t._v(" Delay")]),t._v(" "),n("chart-editor",{attrs:{code:"// <block:actions:2>\nconst actions = [\n  {\n    name: 'Randomize',\n    handler(chart) {\n      chart.data.datasets.forEach(dataset => {\n        dataset.data = Utils.numbers({count: chart.data.labels.length, min: -100, max: 100});\n      });\n      chart.update();\n    }\n  },\n];\n// </block:actions>\n\n// <block:setup:1>\nconst DATA_COUNT = 7;\nconst NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};\n\nconst labels = Utils.months({count: 7});\nconst data = {\n  labels: labels,\n  datasets: [\n    {\n      label: 'Dataset 1',\n      data: Utils.numbers(NUMBER_CFG),\n      backgroundColor: Utils.CHART_COLORS.red,\n    },\n    {\n      label: 'Dataset 2',\n      data: Utils.numbers(NUMBER_CFG),\n      backgroundColor: Utils.CHART_COLORS.blue,\n    },\n    {\n      label: 'Dataset 3',\n      data: Utils.numbers(NUMBER_CFG),\n      backgroundColor: Utils.CHART_COLORS.green,\n    },\n  ]\n};\n// </block:setup>\n\n// <block:config:0>\nlet delayed;\nconst config = {\n  type: 'bar',\n  data: data,\n  options: {\n    animation: {\n      onComplete: () => {\n        delayed = true;\n      },\n      delay: (context) => {\n        let delay = 0;\n        if (context.type === 'data' && context.mode === 'default' && !delayed) {\n          delay = context.dataIndex * 300 + context.datasetIndex * 100;\n        }\n        return delay;\n      },\n    },\n    scales: {\n      x: {\n        stacked: true,\n      },\n      y: {\n        stacked: true\n      }\n    }\n  }\n};\n// </block:config>\n\nmodule.exports = {\n  actions: actions,\n  config: config,\n};\n"}}),n("h2",{attrs:{id:"docs"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docs"}},[t._v("#")]),t._v(" Docs")]),t._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/configuration/animations.html"}},[t._v("Animations")]),t._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/configuration/animations.html#animation"}},[t._v("animation ("),n("code",[t._v("delay")]),t._v(")")])],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/configuration/animations.html#animation-callbacks"}},[t._v("Animation Callbacks")])],1)])],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/charts/bar.html"}},[t._v("Bar")]),t._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/charts/bar.html#stacked-bar-chart"}},[t._v("Stacked Bar Chart")])],1)])],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/general/options.html"}},[t._v("Options")]),t._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/general/options.html#scriptable-options"}},[t._v("Scriptable Options")])],1)])],1)])],1)}),[],!1,null,null,null);n.default=e.exports}}]);