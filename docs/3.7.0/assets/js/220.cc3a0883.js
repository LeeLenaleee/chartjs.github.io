(window.webpackJsonp=window.webpackJsonp||[]).push([[220],{550:function(n,t,a){"use strict";a.r(t);var e=a(6),s=Object(e.a)({},(function(){var n=this.$createElement,t=this._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h1",{attrs:{id:"polar-area-centered-point-labels"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#polar-area-centered-point-labels"}},[this._v("#")]),this._v(" Polar area centered point labels")]),this._v(" "),t("chart-editor",{attrs:{code:"// <block:actions:2>\nconst actions = [\n  {\n    name: 'Randomize',\n    handler(chart) {\n      chart.data.datasets.forEach(dataset => {\n        dataset.data = Utils.numbers({count: chart.data.labels.length, min: 0, max: 100});\n      });\n      chart.update();\n    }\n  },\n  {\n    name: 'Add Data',\n    handler(chart) {\n      const data = chart.data;\n      if (data.datasets.length > 0) {\n        data.labels.push('data #' + (data.labels.length + 1));\n\n        for (let index = 0; index < data.datasets.length; ++index) {\n          data.datasets[index].data.push(Utils.rand(0, 100));\n        }\n\n        chart.update();\n      }\n    }\n  },\n  {\n    name: 'Remove Data',\n    handler(chart) {\n      chart.data.labels.splice(-1, 1); // remove the label first\n\n      chart.data.datasets.forEach(dataset => {\n        dataset.data.pop();\n      });\n\n      chart.update();\n    }\n  }\n];\n// </block:actions>\n\n// <block:setup:1>\nconst DATA_COUNT = 5;\nconst NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};\n\nconst labels = ['Red', 'Orange', 'Yellow', 'Green', 'Blue'];\nconst data = {\n  labels: labels,\n  datasets: [\n    {\n      label: 'Dataset 1',\n      data: Utils.numbers(NUMBER_CFG),\n      backgroundColor: [\n        Utils.transparentize(Utils.CHART_COLORS.red, 0.5),\n        Utils.transparentize(Utils.CHART_COLORS.orange, 0.5),\n        Utils.transparentize(Utils.CHART_COLORS.yellow, 0.5),\n        Utils.transparentize(Utils.CHART_COLORS.green, 0.5),\n        Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),\n      ]\n    }\n  ]\n};\n// </block:setup>\n\n// <block:config:0>\nconst config = {\n  type: 'polarArea',\n  data: data,\n  options: {\n    responsive: true,\n    scales: {\n      r: {\n        pointLabels: {\n          display: true,\n          centerPointLabels: true,\n          font: {\n            size: 18\n          }\n        }\n      }\n    },\n    plugins: {\n      legend: {\n        position: 'top',\n      },\n      title: {\n        display: true,\n        text: 'Chart.js Polar Area Chart With Centered Point Labels'\n      }\n    }\n  },\n};\n// </block:config>\n\nmodule.exports = {\n  actions: actions,\n  config: config,\n};\n"}})],1)}),[],!1,null,null,null);t.default=s.exports}}]);