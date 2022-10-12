(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{489:function(t,a,e){"use strict";e.r(a);var s=e(7),r=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"area-chart"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#area-chart"}},[t._v("#")]),t._v(" Area Chart")]),t._v(" "),a("p",[t._v("Both "),a("RouterLink",{attrs:{to:"/charts/line.html"}},[t._v("line")]),t._v(" and "),a("RouterLink",{attrs:{to:"/charts/radar.html"}},[t._v("radar")]),t._v(" charts support a "),a("code",[t._v("fill")]),t._v(" option on the dataset object which can be used to create space between two datasets or a dataset and a boundary, i.e. the scale "),a("code",[t._v("origin")]),t._v(", "),a("code",[t._v("start,")]),t._v(" or "),a("code",[t._v("end")]),t._v(" (see "),a("a",{attrs:{href:"#filling-modes"}},[t._v("filling modes")]),t._v(").")],1),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("This feature is implemented by the "),a("a",{attrs:{href:"https://github.com/chartjs/Chart.js/blob/master/src/plugins/plugin.filler/index.js",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("filler")]),t._v(" plugin"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("h2",{attrs:{id:"filling-modes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#filling-modes"}},[t._v("#")]),t._v(" Filling modes")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Mode")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Values")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Absolute dataset index")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("number")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("1")]),t._v(", "),a("code",[t._v("2")]),t._v(", "),a("code",[t._v("3")]),t._v(", ...")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Relative dataset index")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("string")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("'-1'")]),t._v(", "),a("code",[t._v("'-2'")]),t._v(", "),a("code",[t._v("'+1'")]),t._v(", ...")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Boundary")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("string")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("'start'")]),t._v(", "),a("code",[t._v("'end'")]),t._v(", "),a("code",[t._v("'origin'")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Disabled "),a("sup",[t._v("1")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("boolean")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("false")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Stacked value below")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("string")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("'stack'")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Axis value")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("object")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("{ value: number; }")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Shape (fill inside line)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("string")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("'shape'")])])])])]),t._v(" "),a("blockquote",[a("p",[a("sup",[t._v("1")]),t._v(" for backward compatibility, "),a("code",[t._v("fill: true")]),t._v(" is equivalent to "),a("code",[t._v("fill: 'origin'")]),a("br")])]),t._v(" "),a("h3",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Chart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("datasets")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("fill")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'origin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0: fill to 'origin'")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("fill")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'+2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1: fill to dataset 3")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("fill")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("             "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2: fill to dataset 1")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("fill")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3: no fill")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("fill")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4: fill to dataset 2")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("fill")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("25")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 5: fill to axis value 25")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("If you need to support multiple colors when filling from one dataset to another, you may specify an object with the following option :")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Param")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("target")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("number")]),t._v(", "),a("code",[t._v("string")]),t._v(", "),a("code",[t._v("boolean")]),t._v(", "),a("code",[t._v("object")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The accepted values are the same as the filling mode values, so you may use absolute and relative dataset indexes and/or boundaries.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("above")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("Color")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("If no color is set, the default color will be the background color of the chart.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("below")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("Color")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Same as the above.")])])])]),t._v(" "),a("h3",{attrs:{id:"example-with-multiple-colors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-with-multiple-colors"}},[t._v("#")]),t._v(" Example with multiple colors")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Chart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("datasets")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("fill")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("target")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'origin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("above")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rgb(255, 0, 0)'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Area will be red above the origin")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("below")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rgb(0, 0, 255)'")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// And blue below the origin")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),a("p",[t._v("Namespace: "),a("code",[t._v("options.plugins.filler")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Option")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Default")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("drawTime")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("string")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("beforeDatasetDraw")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Filler draw time. Supported values: "),a("code",[t._v("'beforeDraw'")]),t._v(", "),a("code",[t._v("'beforeDatasetDraw'")]),t._v(", "),a("code",[t._v("'beforeDatasetsDraw'")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"#propagate"}},[a("code",[t._v("propagate")])])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("boolean")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("true")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Fill propagation when target is hidden.")])])])]),t._v(" "),a("h3",{attrs:{id:"propagate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#propagate"}},[t._v("#")]),t._v(" propagate")]),t._v(" "),a("p",[a("code",[t._v("propagate")]),t._v(" takes a "),a("code",[t._v("boolean")]),t._v(" value (default: "),a("code",[t._v("true")]),t._v(").")]),t._v(" "),a("p",[t._v("If "),a("code",[t._v("true")]),t._v(", the fill area will be recursively extended to the visible target defined by the "),a("code",[t._v("fill")]),t._v(" value of hidden dataset targets:")]),t._v(" "),a("h4",{attrs:{id:"example-using-propagate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-using-propagate"}},[t._v("#")]),t._v(" Example using propagate")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Chart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("datasets")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("fill")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'origin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0: fill to 'origin'")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("fill")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1: fill to dataset 0")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("fill")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2: fill to dataset 1")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("fill")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3: no fill")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("fill")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4: fill to dataset 2")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("options")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("plugins")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("filler")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("propagate")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("code",[t._v("propagate: true")]),t._v(":\n-if dataset 2 is hidden, dataset 4 will fill to dataset 1\n-if dataset 2 and 1 are hidden, dataset 4 will fill to "),a("code",[t._v("'origin'")])]),t._v(" "),a("p",[a("code",[t._v("propagate: false")]),t._v(":\n-if dataset 2 and/or 4 are hidden, dataset 4 will not be filled")])])}),[],!1,null,null,null);a.default=r.exports}}]);