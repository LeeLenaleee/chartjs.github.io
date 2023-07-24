(window.webpackJsonp=window.webpackJsonp||[]).push([[233],{568:function(t,n,a){"use strict";a.r(n);var s=a(3),e=Object(s.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"scatter-multi-axis"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#scatter-multi-axis"}},[t._v("#")]),t._v(" Scatter - Multi axis")]),t._v(" "),n("chart-editor",{attrs:{code:"// <block:setup:1>\nconst DATA_COUNT = 7;\nconst NUMBER_CFG = {count: DATA_COUNT, rmin: 1, rmax: 1, min: -100, max: 100};\n\nconst data = {\n  datasets: [\n    {\n      label: 'Dataset 1',\n      data: Utils.bubbles(NUMBER_CFG),\n      borderColor: Utils.CHART_COLORS.red,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),\n      yAxisID: 'y',\n    },\n    {\n      label: 'Dataset 2',\n      data: Utils.bubbles(NUMBER_CFG),\n      borderColor: Utils.CHART_COLORS.orange,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.orange, 0.5),\n      yAxisID: 'y2',\n    }\n  ]\n};\n// </block:setup>\n\n// <block:actions:2>\nconst actions = [\n  {\n    name: 'Randomize',\n    handler(chart) {\n      chart.data.datasets.forEach(dataset => {\n        dataset.data = Utils.bubbles({count: DATA_COUNT, rmin: 1, rmax: 1, min: -100, max: 100});\n      });\n      chart.update();\n    }\n  },\n  {\n    name: 'Add Dataset',\n    handler(chart) {\n      const chartData = chart.data;\n      const dsColor = Utils.namedColor(chartData.datasets.length);\n      const newDataset = {\n        label: 'Dataset ' + (chartData.datasets.length + 1),\n        backgroundColor: Utils.transparentize(dsColor, 0.5),\n        borderColor: dsColor,\n        data: Utils.bubbles({count: DATA_COUNT, rmin: 1, rmax: 1, min: -100, max: 100}),\n      };\n      chart.data.datasets.push(newDataset);\n      chart.update();\n    }\n  },\n  {\n    name: 'Add Data',\n    handler(chart) {\n      const chartData = chart.data;\n      if (chartData.datasets.length > 0) {\n\n        for (let index = 0; index < chartData.datasets.length; ++index) {\n          chartData.datasets[index].data.push(Utils.bubbles({count: 1, rmin: 1, rmax: 1, min: -100, max: 100})[0]);\n        }\n\n        chart.update();\n      }\n    }\n  },\n  {\n    name: 'Remove Dataset',\n    handler(chart) {\n      chart.data.datasets.pop();\n      chart.update();\n    }\n  },\n  {\n    name: 'Remove Data',\n    handler(chart) {\n      chart.data.datasets.forEach(dataset => {\n        dataset.data.pop();\n      });\n\n      chart.update();\n    }\n  }\n];\n// </block:actions>\n\n// <block:config:0>\nconst config = {\n  type: 'scatter',\n  data: data,\n  options: {\n    responsive: true,\n    plugins: {\n      legend: {\n        position: 'top',\n      },\n      title: {\n        display: true,\n        text: 'Chart.js Scatter Multi Axis Chart'\n      }\n    },\n    scales: {\n      y: {\n        type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance\n        position: 'left',\n        ticks: {\n          color: Utils.CHART_COLORS.red\n        }\n      },\n      y2: {\n        type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance\n        position: 'right',\n        reverse: true,\n        ticks: {\n          color: Utils.CHART_COLORS.blue\n        },\n        grid: {\n          drawOnChartArea: false // only want the grid lines for one axis to show up\n        }\n      }\n    }\n  },\n};\n// </block:config>\n\nmodule.exports = {\n  actions: actions,\n  config: config,\n};\n"}}),n("h2",{attrs:{id:"docs"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docs"}},[t._v("#")]),t._v(" Docs")]),t._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/charts/scatter.html"}},[t._v("Scatter")])],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/axes/cartesian/"}},[t._v("Cartesian Axes")]),t._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/axes/cartesian/#axis-position"}},[t._v("Axis Position")])],1)])],1)])],1)}),[],!1,null,null,null);n.default=e.exports}}]);