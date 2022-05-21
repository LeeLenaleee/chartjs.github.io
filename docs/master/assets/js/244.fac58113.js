(window.webpackJsonp=window.webpackJsonp||[]).push([[244],{575:function(n,t,a){"use strict";a.r(t);var e=a(6),o=Object(e.a)({},(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"bubble-chart"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bubble-chart"}},[n._v("#")]),n._v(" Bubble Chart")]),n._v(" "),a("chart-editor",{attrs:{code:"// <block:setup:2>\nconst DATA_COUNT = 16;\nconst MIN_XY = -150;\nconst MAX_XY = 100;\nUtils.srand(110);\n\nconst actions = [\n  {\n    name: 'Randomize',\n    handler(chart) {\n      chart.data.datasets.forEach(dataset => {\n        dataset.data = generateData();\n      });\n      chart.update();\n    }\n  },\n];\n// </block:setup>\n\n// <block:data:1>\nfunction generateData() {\n  const data = [];\n  let i;\n\n  for (i = 0; i < DATA_COUNT; ++i) {\n    data.push({\n      x: Utils.rand(MIN_XY, MAX_XY),\n      y: Utils.rand(MIN_XY, MAX_XY),\n      v: Utils.rand(0, 1000)\n    });\n  }\n\n  return data;\n}\n\nconst data = {\n  datasets: [{\n    data: generateData()\n  }, {\n    data: generateData()\n  }]\n};\n// </block:data>\n\n// <block:options:0>\nfunction channelValue(x, y, values) {\n  return x < 0 && y < 0 ? values[0] : x < 0 ? values[1] : y < 0 ? values[2] : values[3];\n}\n\nfunction colorize(opaque, context) {\n  const value = context.raw;\n  const x = value.x / 100;\n  const y = value.y / 100;\n  const r = channelValue(x, y, [250, 150, 50, 0]);\n  const g = channelValue(x, y, [0, 50, 150, 250]);\n  const b = channelValue(x, y, [0, 150, 150, 250]);\n  const a = opaque ? 1 : 0.5 * value.v / 1000;\n\n  return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';\n}\n\nconst config = {\n  type: 'bubble',\n  data: data,\n  options: {\n    aspectRatio: 1,\n    plugins: {\n      legend: false,\n      tooltip: false,\n    },\n    elements: {\n      point: {\n        backgroundColor: colorize.bind(null, false),\n\n        borderColor: colorize.bind(null, true),\n\n        borderWidth: function(context) {\n          return Math.min(Math.max(1, context.datasetIndex + 1), 8);\n        },\n\n        hoverBackgroundColor: 'transparent',\n\n        hoverBorderColor: function(context) {\n          return Utils.color(context.datasetIndex);\n        },\n\n        hoverBorderWidth: function(context) {\n          return Math.round(8 * context.raw.v / 1000);\n        },\n\n        radius: function(context) {\n          const size = context.chart.width;\n          const base = Math.abs(context.raw.v) / 1000;\n          return (size / 24) * base;\n        }\n      }\n    }\n  }\n};\n// </block:options>\n\nmodule.exports = {\n  actions,\n  config,\n};\n"}}),a("h2",{attrs:{id:"docs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docs"}},[n._v("#")]),n._v(" Docs")]),n._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/charts/bubble.html"}},[n._v("Bubble")])],1),n._v(" "),a("li",[a("RouterLink",{attrs:{to:"/general/options.html"}},[n._v("Options")]),n._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/general/options.html#scriptable-options"}},[n._v("Scriptable Options")])],1)])],1)])],1)}),[],!1,null,null,null);t.default=o.exports}}]);