(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{516:function(t,e,a){"use strict";a.r(e);var s=a(7),r=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"publishing-an-extension"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#publishing-an-extension"}},[t._v("#")]),t._v(" Publishing an extension")]),t._v(" "),e("p",[t._v("If you are planning on publishing an extension for Chart.js, here are a some pointers.")]),t._v(" "),e("h2",{attrs:{id:"awesome"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#awesome"}},[t._v("#")]),t._v(" Awesome")]),t._v(" "),e("p",[t._v("You'd probably want your extension to be listed in the "),e("a",{attrs:{href:"https://github.com/chartjs/awesome",target:"_blank",rel:"noopener noreferrer"}},[t._v("awesome"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[t._v("Note the minimum extension age requirement of 30 days.")]),t._v(" "),e("h2",{attrs:{id:"esm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#esm"}},[t._v("#")]),t._v(" ESM")]),t._v(" "),e("p",[t._v("If you are utilizing ESM, you probably still want to publish an UMD bundle of your extension. Because Chart.js v3 is tree shakeable, the interface is a bit different.\nUMD package's global "),e("code",[t._v("Chart")]),t._v(" includes everything, while ESM package exports all the things separately.\nFortunately, most of the exports can be mapped automatically by the bundlers.")]),t._v(" "),e("p",[t._v("But not the helpers.")]),t._v(" "),e("p",[t._v("In UMD, helpers are available through "),e("code",[t._v("Chart.helpers")]),t._v(". In ESM, they are imported from "),e("code",[t._v("chart.js/helpers")]),t._v(".")]),t._v(" "),e("p",[t._v("For example "),e("code",[t._v("import {isNullOrUndef} from 'chart.js/helpers'")]),t._v(" is available at "),e("code",[t._v("Chart.helpers.isNullOrUndef")]),t._v(" for UMD.")]),t._v(" "),e("h3",{attrs:{id:"rollup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rollup"}},[t._v("#")]),t._v(" Rollup")]),t._v(" "),e("p",[e("code",[t._v("output.globals")]),t._v(" can be used to convert the helpers.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("output")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("globals")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'chart.js'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Chart'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'chart.js/helpers'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Chart.helpers'")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);