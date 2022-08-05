(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{543:function(t,n,a){"use strict";a.r(n);var o=a(7),e=Object(o.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"loop"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#loop"}},[t._v("#")]),t._v(" Loop")]),t._v(" "),n("chart-editor",{attrs:{code:"// <block:actions:2>\nconst actions = [\n  {\n    name: 'Randomize',\n    handler(chart) {\n      chart.data.datasets.forEach(dataset => {\n        dataset.data = Utils.numbers({count: chart.data.labels.length, min: -100, max: 100});\n      });\n      chart.update();\n    }\n  },\n  {\n    name: 'Add Dataset',\n    handler(chart) {\n      const data = chart.data;\n      const dsColor = Utils.namedColor(chart.data.datasets.length);\n      const newDataset = {\n        label: 'Dataset ' + (data.datasets.length + 1),\n        backgroundColor: Utils.transparentize(dsColor, 0.5),\n        borderColor: dsColor,\n        data: Utils.numbers({count: data.labels.length, min: -100, max: 100}),\n      };\n      chart.data.datasets.push(newDataset);\n      chart.update();\n    }\n  },\n  {\n    name: 'Add Data',\n    handler(chart) {\n      const data = chart.data;\n      if (data.datasets.length > 0) {\n        data.labels = Utils.months({count: data.labels.length + 1});\n\n        for (let index = 0; index < data.datasets.length; ++index) {\n          data.datasets[index].data.push(Utils.rand(-100, 100));\n        }\n\n        chart.update();\n      }\n    }\n  },\n  {\n    name: 'Remove Dataset',\n    handler(chart) {\n      chart.data.datasets.pop();\n      chart.update();\n    }\n  },\n  {\n    name: 'Remove Data',\n    handler(chart) {\n      chart.data.labels.splice(-1, 1); // remove the label first\n\n      chart.data.datasets.forEach(dataset => {\n        dataset.data.pop();\n      });\n\n      chart.update();\n    }\n  }\n];\n// </block:actions>\n\n// <block:setup:1>\nconst DATA_COUNT = 7;\nconst NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};\n\nconst labels = Utils.months({count: DATA_COUNT});\nconst data = {\n  labels: labels,\n  datasets: [\n    {\n      label: 'Dataset 1',\n      data: Utils.numbers(NUMBER_CFG),\n      borderColor: Utils.CHART_COLORS.red,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),\n      tension: 0.4,\n    },\n    {\n      label: 'Dataset 2',\n      data: Utils.numbers(NUMBER_CFG),\n      borderColor: Utils.CHART_COLORS.blue,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),\n      tension: 0.2,\n    }\n  ]\n};\n// </block:setup>\n\n// <block:config:0>\nconst config = {\n  type: 'line',\n  data: data,\n  options: {\n    animations: {\n      radius: {\n        duration: 400,\n        easing: 'linear',\n        loop: (context) => context.active\n      }\n    },\n    hoverRadius: 12,\n    hoverBackgroundColor: 'yellow',\n    interaction: {\n      mode: 'nearest',\n      intersect: false,\n      axis: 'x'\n    },\n    plugins: {\n      tooltip: {\n        enabled: false\n      }\n    }\n  },\n};\n// </block:config>\n\nmodule.exports = {\n  actions: actions,\n  config: config,\n};\n"}}),n("h2",{attrs:{id:"docs"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docs"}},[t._v("#")]),t._v(" Docs")]),t._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/configuration/animations.html"}},[t._v("Animations")]),t._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/configuration/animations.html#animation"}},[t._v("animation")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("duration")])]),t._v(" "),n("li",[n("code",[t._v("easing")])]),t._v(" "),n("li",[n("strong",[n("code",[t._v("loop")])])])])],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/configuration/animations.html#default-animations"}},[t._v("Default animations ("),n("code",[t._v("radius")]),t._v(")")])],1)])],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/general/data-structures.html"}},[t._v("Data structures ("),n("code",[t._v("labels")]),t._v(")")])],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/configuration/elements.html"}},[t._v("Elements")]),t._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/configuration/elements.html#point-configuration"}},[t._v("Point Configuration")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("hoverRadius")])]),t._v(" "),n("li",[n("code",[t._v("hoverBackgroundColor")])])])],1)])],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/charts/line.html"}},[t._v("Line")])],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/general/options.html"}},[t._v("Options")]),t._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/general/options.html#scriptable-options"}},[t._v("Scriptable Options")])],1)])],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/configuration/tooltip.html"}},[t._v("Tooltip ("),n("code",[t._v("enabled")]),t._v(")")])],1)])],1)}),[],!1,null,null,null);n.default=e.exports}}]);