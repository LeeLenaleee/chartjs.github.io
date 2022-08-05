(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{495:function(t,e,a){"use strict";a.r(e);var r=a(7),o=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"polar-area-chart"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#polar-area-chart"}},[t._v("#")]),t._v(" Polar Area Chart")]),t._v(" "),e("p",[t._v("Polar area charts are similar to pie charts, but each segment has the same angle - the radius of the segment differs depending on the value.")]),t._v(" "),e("p",[t._v("This type of chart is often useful when we want to show a comparison data similar to a pie chart, but also show a scale of values for context.")]),t._v(" "),e("chart-editor",{attrs:{code:"// <block:setup:1>\nconst data = {\n  labels: [\n    'Red',\n    'Green',\n    'Yellow',\n    'Grey',\n    'Blue'\n  ],\n  datasets: [{\n    label: 'My First Dataset',\n    data: [11, 16, 7, 3, 14],\n    backgroundColor: [\n      'rgb(255, 99, 132)',\n      'rgb(75, 192, 192)',\n      'rgb(255, 205, 86)',\n      'rgb(201, 203, 207)',\n      'rgb(54, 162, 235)'\n    ]\n  }]\n};\n// </block:setup>\n\n// <block:config:0>\nconst config = {\n  type: 'polarArea',\n  data: data,\n  options: {}\n};\n// </block:config>\n\nmodule.exports = {\n  actions: [],\n  config: config,\n};\n"}}),e("h2",{attrs:{id:"dataset-properties"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dataset-properties"}},[t._v("#")]),t._v(" Dataset Properties")]),t._v(" "),e("p",[t._v("Namespaces:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("data.datasets[index]")]),t._v(" - options for this dataset only")]),t._v(" "),e("li",[e("code",[t._v("options.datasets.polarArea")]),t._v(" - options for all polarArea datasets")]),t._v(" "),e("li",[e("code",[t._v("options.elements.arc")]),t._v(" - options for all "),e("RouterLink",{attrs:{to:"/configuration/elements.html#arc-configuration"}},[t._v("arc elements")])],1),t._v(" "),e("li",[e("code",[t._v("options")]),t._v(" - options for the whole chart")])]),t._v(" "),e("p",[t._v("The following options can be included in a polar area chart dataset to configure options for that specific dataset.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[e("RouterLink",{attrs:{to:"/general/options.html#scriptable-options"}},[t._v("Scriptable")])],1),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[e("RouterLink",{attrs:{to:"/general/options.html#indexable-options"}},[t._v("Indexable")])],1),t._v(" "),e("th",[t._v("Default")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("a",{attrs:{href:"#styling"}},[e("code",[t._v("backgroundColor")])])]),t._v(" "),e("td",[e("RouterLink",{attrs:{to:"/general/colors.html"}},[e("code",[t._v("Color")])])],1),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("'rgba(0, 0, 0, 0.1)'")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#border-alignment"}},[e("code",[t._v("borderAlign")])])]),t._v(" "),e("td",[e("code",[t._v("'center'")]),t._v("|"),e("code",[t._v("'inner'")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("'center'")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#styling"}},[e("code",[t._v("borderColor")])])]),t._v(" "),e("td",[e("RouterLink",{attrs:{to:"/general/colors.html"}},[e("code",[t._v("Color")])])],1),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("'#fff'")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#styling"}},[e("code",[t._v("borderJoinStyle")])])]),t._v(" "),e("td",[e("code",[t._v("'round'")]),t._v("|"),e("code",[t._v("'bevel'")]),t._v("|"),e("code",[t._v("'miter'")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("undefined")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#styling"}},[e("code",[t._v("borderWidth")])])]),t._v(" "),e("td",[e("code",[t._v("number")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("2")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#general"}},[e("code",[t._v("clip")])])]),t._v(" "),e("td",[e("code",[t._v("number")]),t._v("|"),e("code",[t._v("object")]),t._v("|"),e("code",[t._v("false")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",[e("code",[t._v("undefined")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#data-structure"}},[e("code",[t._v("data")])])]),t._v(" "),e("td",[e("code",[t._v("number[]")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",[e("strong",[t._v("required")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#interactions"}},[e("code",[t._v("hoverBackgroundColor")])])]),t._v(" "),e("td",[e("RouterLink",{attrs:{to:"/general/colors.html"}},[e("code",[t._v("Color")])])],1),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("undefined")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#interactions"}},[e("code",[t._v("hoverBorderColor")])])]),t._v(" "),e("td",[e("RouterLink",{attrs:{to:"/general/colors.html"}},[e("code",[t._v("Color")])])],1),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("undefined")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#interactions"}},[e("code",[t._v("hoverBorderJoinStyle")])])]),t._v(" "),e("td",[e("code",[t._v("'round'")]),t._v("|"),e("code",[t._v("'bevel'")]),t._v("|"),e("code",[t._v("'miter'")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("undefined")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#interactions"}},[e("code",[t._v("hoverBorderWidth")])])]),t._v(" "),e("td",[e("code",[t._v("number")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("undefined")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#styling"}},[e("code",[t._v("circular")])])]),t._v(" "),e("td",[e("code",[t._v("boolean")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("true")])])])])]),t._v(" "),e("p",[t._v("All these values, if "),e("code",[t._v("undefined")]),t._v(", fallback to the scopes described in "),e("a",{attrs:{href:"../general/options"}},[t._v("option resolution")])]),t._v(" "),e("h3",{attrs:{id:"general"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#general"}},[t._v("#")]),t._v(" General")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("clip")])]),t._v(" "),e("td",[t._v("How to clip relative to chartArea. Positive value allows overflow, negative value clips that many pixels inside chartArea. "),e("code",[t._v("0")]),t._v(" = clip at chartArea. Clipping can also be configured per side: "),e("code",[t._v("clip: {left: 5, top: false, right: -2, bottom: 0}")])])])])]),t._v(" "),e("h3",{attrs:{id:"styling"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#styling"}},[t._v("#")]),t._v(" Styling")]),t._v(" "),e("p",[t._v("The style of each arc can be controlled with the following properties:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("backgroundColor")])]),t._v(" "),e("td",[t._v("arc background color.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("borderColor")])]),t._v(" "),e("td",[t._v("arc border color.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("borderJoinStyle")])]),t._v(" "),e("td",[t._v("arc border join style. See "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("borderWidth")])]),t._v(" "),e("td",[t._v("arc border width (in pixels).")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("circular")])]),t._v(" "),e("td",[t._v("By default the Arc is curved. If "),e("code",[t._v("circular: false")]),t._v(" the Arc will be flat.")])])])]),t._v(" "),e("p",[t._v("All these values, if "),e("code",[t._v("undefined")]),t._v(", fallback to the associated "),e("RouterLink",{attrs:{to:"/configuration/elements.html#arc-configuration"}},[e("code",[t._v("elements.arc.*")])]),t._v(" options.")],1),t._v(" "),e("h3",{attrs:{id:"border-alignment"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#border-alignment"}},[t._v("#")]),t._v(" Border Alignment")]),t._v(" "),e("p",[t._v("The following values are supported for "),e("code",[t._v("borderAlign")]),t._v(".")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("'center'")]),t._v(" (default)")]),t._v(" "),e("li",[e("code",[t._v("'inner'")])])]),t._v(" "),e("p",[t._v("When "),e("code",[t._v("'center'")]),t._v(" is set, the borders of arcs next to each other will overlap. When "),e("code",[t._v("'inner'")]),t._v(" is set, it is guaranteed that all the borders do not overlap.")]),t._v(" "),e("h3",{attrs:{id:"interactions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#interactions"}},[t._v("#")]),t._v(" Interactions")]),t._v(" "),e("p",[t._v("The interaction with each arc can be controlled with the following properties:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("hoverBackgroundColor")])]),t._v(" "),e("td",[t._v("arc background color when hovered.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("hoverBorderColor")])]),t._v(" "),e("td",[t._v("arc border color when hovered.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("hoverBorderJoinStyle")])]),t._v(" "),e("td",[t._v("arc border join style when hovered. See "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("hoverBorderWidth")])]),t._v(" "),e("td",[t._v("arc border width when hovered (in pixels).")])])])]),t._v(" "),e("p",[t._v("All these values, if "),e("code",[t._v("undefined")]),t._v(", fallback to the associated "),e("RouterLink",{attrs:{to:"/configuration/elements.html#arc-configuration"}},[e("code",[t._v("elements.arc.*")])]),t._v(" options.")],1),t._v(" "),e("h2",{attrs:{id:"config-options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#config-options"}},[t._v("#")]),t._v(" Config Options")]),t._v(" "),e("p",[t._v("These are the customisation options specific to Polar Area charts. These options are looked up on access, and form together with the "),e("a",{attrs:{href:"#default-options"}},[t._v("global chart default options")]),t._v(" the options of the chart.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Default")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("animation.animateRotate")])]),t._v(" "),e("td",[e("code",[t._v("boolean")])]),t._v(" "),e("td",[e("code",[t._v("true")])]),t._v(" "),e("td",[t._v("If true, the chart will animate in with a rotation animation. This property is in the "),e("code",[t._v("options.animation")]),t._v(" object.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("animation.animateScale")])]),t._v(" "),e("td",[e("code",[t._v("boolean")])]),t._v(" "),e("td",[e("code",[t._v("true")])]),t._v(" "),e("td",[t._v("If true, will animate scaling the chart from the center outwards.")])])])]),t._v(" "),e("p",[t._v("The polar area chart uses the "),e("RouterLink",{attrs:{to:"/axes/radial/linear.html"}},[t._v("radialLinear")]),t._v(" scale. Additional configuration is provided via the scale.")],1),t._v(" "),e("h2",{attrs:{id:"default-options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#default-options"}},[t._v("#")]),t._v(" Default Options")]),t._v(" "),e("p",[t._v("We can also change these default values for each PolarArea type that is created, this object is available at "),e("code",[t._v("Chart.overrides.polarArea")]),t._v(". Changing the global options only affects charts created after the change. Existing charts are not changed.")]),t._v(" "),e("p",[t._v("For example, to configure all new polar area charts with "),e("code",[t._v("animateScale = false")]),t._v(" you would do:")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("Chart"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("overrides"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("polarArea"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("animation"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("animateScale "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"data-structure"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#data-structure"}},[t._v("#")]),t._v(" Data Structure")]),t._v(" "),e("p",[t._v("For a polar area chart, datasets need to contain an array of data points. The data points should be a number, Chart.js will total all of the numbers and calculate the relative proportion of each.")]),t._v(" "),e("p",[t._v("You also need to specify an array of labels so that tooltips appear correctly for each slice.")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("data "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("datasets")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("data")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// These labels appear in the legend and in the tooltips when hovering different arcs")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("labels")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Red'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Yellow'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Blue'")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])],1)}),[],!1,null,null,null);e.default=o.exports}}]);