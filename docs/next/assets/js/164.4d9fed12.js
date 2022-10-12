(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{512:function(t,a,s){"use strict";s.r(a);var e=s(7),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),a("p",[t._v("For each chart, there are a set of global prototype methods on the shared chart type which you may find useful. These are available on all charts created with Chart.js, but for the examples, let's use a line chart we've made.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// For example:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" myLineChart "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Chart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"destroy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#destroy"}},[t._v("#")]),t._v(" .destroy()")]),t._v(" "),a("p",[t._v("Use this to destroy any chart instances that are created. This will clean up any references stored to the chart object within Chart.js, along with any associated event listeners attached by Chart.js.\nThis must be called before the canvas is reused for a new chart.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Destroys a specific chart instance")]),t._v("\nmyLineChart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("destroy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"update-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-mode"}},[t._v("#")]),t._v(" .update(mode?)")]),t._v(" "),a("p",[t._v("Triggers an update of the chart. This can be safely called after updating the data object. This will update all scales, legends, and then re-render the chart.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("myLineChart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("datasets"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Would update the first dataset's value of 'March' to be 50")]),t._v("\nmyLineChart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Calling update now animates the position of March from 90 to 50.")]),t._v("\n")])])]),a("p",[t._v("A "),a("code",[t._v("mode")]),t._v(" string can be provided to indicate transition configuration should be used. Core calls this method using any of "),a("code",[t._v("'active'")]),t._v(", "),a("code",[t._v("'hide'")]),t._v(", "),a("code",[t._v("'reset'")]),t._v(", "),a("code",[t._v("'resize'")]),t._v(", "),a("code",[t._v("'show'")]),t._v(" or "),a("code",[t._v("undefined")]),t._v(". "),a("code",[t._v("'none'")]),t._v(" is also a supported mode for skipping animations for single update. Please see "),a("RouterLink",{attrs:{to:"/configuration/animations.html"}},[t._v("animations")]),t._v(" docs for more details.")],1),t._v(" "),a("p",[t._v("Example:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("myChart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'active'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("See "),a("RouterLink",{attrs:{to:"/developers/updates.html"}},[t._v("Updating Charts")]),t._v(" for more details.")],1),t._v(" "),a("h2",{attrs:{id:"reset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reset"}},[t._v("#")]),t._v(" .reset()")]),t._v(" "),a("p",[t._v("Reset the chart to its state before the initial animation. A new animation can then be triggered using "),a("code",[t._v("update")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("myLineChart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reset")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"render"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#render"}},[t._v("#")]),t._v(" .render()")]),t._v(" "),a("p",[t._v("Triggers a redraw of all chart elements. Note, this does not update elements for new data. Use "),a("code",[t._v(".update()")]),t._v(" in that case.")]),t._v(" "),a("h2",{attrs:{id:"stop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stop"}},[t._v("#")]),t._v(" .stop()")]),t._v(" "),a("p",[t._v("Use this to stop any current animation. This will pause the chart during any current animation frame. Call "),a("code",[t._v(".render()")]),t._v(" to re-animate.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Stops the charts animation loop at its current frame")]),t._v("\nmyLineChart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stop")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => returns 'this' for chainability")]),t._v("\n")])])]),a("h2",{attrs:{id:"resize-width-height"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resize-width-height"}},[t._v("#")]),t._v(" .resize(width?, height?)")]),t._v(" "),a("p",[t._v("Use this to manually resize the canvas element. This is run each time the canvas container is resized, but you can call this method manually if you change the size of the canvas nodes container element.")]),t._v(" "),a("p",[t._v("You can call "),a("code",[t._v(".resize()")]),t._v(" with no parameters to have the chart take the size of its container element, or you can pass explicit dimensions (e.g., for "),a("RouterLink",{attrs:{to:"/configuration/responsive.html#printing-resizable-charts"}},[t._v("printing")]),t._v(").")],1),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Resizes & redraws to fill its container element")]),t._v("\nmyLineChart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => returns 'this' for chainability")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// With an explicit size:")]),t._v("\nmyLineChart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("width"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" height"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"clear"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clear"}},[t._v("#")]),t._v(" .clear()")]),t._v(" "),a("p",[t._v("Will clear the chart canvas. Used extensively internally between animation frames, but you might find it useful.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Will clear the canvas that myLineChart is drawn on")]),t._v("\nmyLineChart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clear")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => returns 'this' for chainability")]),t._v("\n")])])]),a("h2",{attrs:{id:"tobase64image-type-quality"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tobase64image-type-quality"}},[t._v("#")]),t._v(" .toBase64Image(type?, quality?)")]),t._v(" "),a("p",[t._v("This returns a base 64 encoded string of the chart in its current state.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("myLineChart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toBase64Image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => returns png data url of the image on the canvas")]),t._v("\n\nmyLineChart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toBase64Image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'image/jpeg'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => returns a jpeg data url in the highest quality of the canvas")]),t._v("\n")])])]),a("h2",{attrs:{id:"getelementsateventformode-e-mode-options-usefinalposition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getelementsateventformode-e-mode-options-usefinalposition"}},[t._v("#")]),t._v(" .getElementsAtEventForMode(e, mode, options, useFinalPosition)")]),t._v(" "),a("p",[t._v("Calling "),a("code",[t._v("getElementsAtEventForMode(e, mode, options, useFinalPosition)")]),t._v(" on your Chart instance passing an event and a mode will return the elements that are found. The "),a("code",[t._v("options")]),t._v(" and "),a("code",[t._v("useFinalPosition")]),t._v(" arguments are passed through to the handlers.")]),t._v(" "),a("p",[t._v("To get an item that was clicked on, "),a("code",[t._v("getElementsAtEventForMode")]),t._v(" can be used.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clickHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("evt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" points "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" myChart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementsAtEventForMode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("evt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'nearest'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("intersect")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("points"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" firstPoint "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" points"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" label "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" myChart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("labels"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("firstPoint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" myChart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("datasets"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("firstPoint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("datasetIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("firstPoint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"getsortedvisibledatasetmetas"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getsortedvisibledatasetmetas"}},[t._v("#")]),t._v(" .getSortedVisibleDatasetMetas()")]),t._v(" "),a("p",[t._v("Returns an array of all the dataset meta's in the order that they are drawn on the canvas that are not hidden.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" visibleMetas "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" chart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSortedVisibleDatasetMetas")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"getdatasetmeta-index"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getdatasetmeta-index"}},[t._v("#")]),t._v(" .getDatasetMeta(index)")]),t._v(" "),a("p",[t._v("Looks for the dataset that matches the current index and returns that metadata. This returned data has all of the metadata that is used to construct the chart.")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("data")]),t._v(" property of the metadata will contain information about each point, bar, etc. depending on the chart type.")]),t._v(" "),a("p",[t._v("Extensive examples of usage are available in the "),a("a",{attrs:{href:"https://github.com/chartjs/Chart.js/tree/master/test",target:"_blank",rel:"noopener noreferrer"}},[t._v("Chart.js tests"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" meta "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" myChart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDatasetMeta")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" meta"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"getvisibledatasetcount"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getvisibledatasetcount"}},[t._v("#")]),t._v(" getVisibleDatasetCount")]),t._v(" "),a("p",[t._v("Returns the amount of datasets that are currently not hidden.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" numberOfVisibleDatasets "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" chart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getVisibleDatasetCount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"setdatasetvisibility-datasetindex-visibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setdatasetvisibility-datasetindex-visibility"}},[t._v("#")]),t._v(" setDatasetVisibility(datasetIndex, visibility)")]),t._v(" "),a("p",[t._v("Sets the visibility for a given dataset. This can be used to build a chart legend in HTML. During click on one of the HTML items, you can call "),a("code",[t._v("setDatasetVisibility")]),t._v(" to change the appropriate dataset.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("chart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setDatasetVisibility")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// hides dataset at index 1")]),t._v("\nchart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// chart now renders with dataset hidden")]),t._v("\n")])])]),a("h2",{attrs:{id:"toggledatavisibility-index"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#toggledatavisibility-index"}},[t._v("#")]),t._v(" toggleDataVisibility(index)")]),t._v(" "),a("p",[t._v("Toggles the visibility of an item in all datasets. A dataset needs to explicitly support this feature for it to have an effect. From internal chart types, doughnut / pie, polar area, and bar use this.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("chart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toggleDataVisibility")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// toggles the item in all datasets, at index 2")]),t._v("\nchart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// chart now renders with item hidden")]),t._v("\n")])])]),a("h2",{attrs:{id:"getdatavisibility-index"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getdatavisibility-index"}},[t._v("#")]),t._v(" getDataVisibility(index)")]),t._v(" "),a("p",[t._v("Returns the stored visibility state of an data index for all datasets. Set by "),a("a",{attrs:{href:"#toggleDataVisibility"}},[t._v("toggleDataVisibility")]),t._v(". A dataset controller should use this method to determine if an item should not be visible.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" visible "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" chart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDataVisibility")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"hide-datasetindex-dataindex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hide-datasetindex-dataindex"}},[t._v("#")]),t._v(" hide(datasetIndex, dataIndex?)")]),t._v(" "),a("p",[t._v("If dataIndex is not specified, sets the visibility for the given dataset to false. Updates the chart and animates the dataset with "),a("code",[t._v("'hide'")]),t._v(" mode. This animation can be configured under the "),a("code",[t._v("hide")]),t._v(" key in animation options. Please see "),a("RouterLink",{attrs:{to:"/configuration/animations.html"}},[t._v("animations")]),t._v(" docs for more details.")],1),t._v(" "),a("p",[t._v("If dataIndex is specified, sets the hidden flag of that element to true and updates the chart.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("chart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hide")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// hides dataset at index 1 and does 'hide' animation.")]),t._v("\nchart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hide")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// hides the data element at index 2 of the first dataset.")]),t._v("\n")])])]),a("h2",{attrs:{id:"show-datasetindex-dataindex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#show-datasetindex-dataindex"}},[t._v("#")]),t._v(" show(datasetIndex, dataIndex?)")]),t._v(" "),a("p",[t._v("If dataIndex is not specified, sets the visibility for the given dataset to true. Updates the chart and animates the dataset with "),a("code",[t._v("'show'")]),t._v(" mode. This animation can be configured under the "),a("code",[t._v("show")]),t._v(" key in animation options. Please see "),a("RouterLink",{attrs:{to:"/configuration/animations.html"}},[t._v("animations")]),t._v(" docs for more details.")],1),t._v(" "),a("p",[t._v("If dataIndex is specified, sets the hidden flag of that element to false and updates the chart.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("chart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("show")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// shows dataset at index 1 and does 'show' animation.")]),t._v("\nchart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("show")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// shows the data element at index 2 of the first dataset.")]),t._v("\n")])])]),a("h2",{attrs:{id:"setactiveelements-activeelements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setactiveelements-activeelements"}},[t._v("#")]),t._v(" setActiveElements(activeElements)")]),t._v(" "),a("p",[t._v('Sets the active (hovered) elements for the chart. See the "Programmatic Events" sample file to see this in action.')]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("chart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setActiveElements")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("datasetIndex")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("index")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"ispluginenabled-pluginid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ispluginenabled-pluginid"}},[t._v("#")]),t._v(" isPluginEnabled(pluginId)")]),t._v(" "),a("p",[t._v("Returns a boolean if a plugin with the given ID has been registered to the chart instance.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("chart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isPluginEnabled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'filler'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"static-getchart-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#static-getchart-key"}},[t._v("#")]),t._v(" Static: getChart(key)")]),t._v(" "),a("p",[t._v("Finds the chart instance from the given key. If the key is a "),a("code",[t._v("string")]),t._v(", it is interpreted as the ID of the Canvas node for the Chart. The key can also be a "),a("code",[t._v("CanvasRenderingContext2D")]),t._v(" or an "),a("code",[t._v("HTMLDOMElement")]),t._v(". This will return "),a("code",[t._v("undefined")]),t._v(" if no Chart is found. To be found, the chart must have previously been created.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" chart "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Chart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getChart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"canvas-id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"static-register-chartcomponentlike"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#static-register-chartcomponentlike"}},[t._v("#")]),t._v(" Static: register(chartComponentLike)")]),t._v(" "),a("p",[t._v("Used to register plugins, axis types or chart types globally to all your charts.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Chart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Tooltip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" LinearScale"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" PointElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" BubbleController "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'chart.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nChart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("register")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Tooltip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" LinearScale"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" PointElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" BubbleController"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"static-unregister-chartcomponentlike"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#static-unregister-chartcomponentlike"}},[t._v("#")]),t._v(" Static: unregister(chartComponentLike)")]),t._v(" "),a("p",[t._v("Used to unregister plugins, axis types or chart types globally from all your charts.")])])}),[],!1,null,null,null);a.default=n.exports}}]);