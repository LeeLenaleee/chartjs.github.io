(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{488:function(e,t,o){"use strict";o.r(t);var a=o(7),n=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h3",{attrs:{id:"common-tick-options-to-all-cartesian-axes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#common-tick-options-to-all-cartesian-axes"}},[e._v("#")]),e._v(" Common tick options to all cartesian axes")]),e._v(" "),t("p",[e._v("Namespace: "),t("code",[e._v("options.scales[scaleId].ticks")])]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Name")]),e._v(" "),t("th",[e._v("Type")]),e._v(" "),t("th",[e._v("Default")]),e._v(" "),t("th",[e._v("Description")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[t("code",[e._v("align")])]),e._v(" "),t("td",[t("code",[e._v("string")])]),e._v(" "),t("td",[t("code",[e._v("'center'")])]),e._v(" "),t("td",[e._v("The tick alignment along the axis. Can be "),t("code",[e._v("'start'")]),e._v(", "),t("code",[e._v("'center'")]),e._v(", "),t("code",[e._v("'end'")]),e._v(", or "),t("code",[e._v("'inner'")]),e._v(". "),t("code",[e._v("inner")]),e._v(" alignment means align "),t("code",[e._v("start")]),e._v(" for first tick and "),t("code",[e._v("end")]),e._v(" for the last tick of horizontal axis")])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("crossAlign")])]),e._v(" "),t("td",[t("code",[e._v("string")])]),e._v(" "),t("td",[t("code",[e._v("'near'")])]),e._v(" "),t("td",[e._v("The tick alignment perpendicular to the axis. Can be "),t("code",[e._v("'near'")]),e._v(", "),t("code",[e._v("'center'")]),e._v(", or "),t("code",[e._v("'far'")]),e._v(". See "),t("RouterLink",{attrs:{to:"/axes/cartesian/#tick-alignment"}},[e._v("Tick Alignment")])],1)]),e._v(" "),t("tr",[t("td",[t("code",[e._v("sampleSize")])]),e._v(" "),t("td",[t("code",[e._v("number")])]),e._v(" "),t("td",[t("code",[e._v("ticks.length")])]),e._v(" "),t("td",[e._v("The number of ticks to examine when deciding how many labels will fit. Setting a smaller value will be faster, but may be less accurate when there is large variability in label length.")])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("autoSkip")])]),e._v(" "),t("td",[t("code",[e._v("boolean")])]),e._v(" "),t("td",[t("code",[e._v("true")])]),e._v(" "),t("td",[e._v("If true, automatically calculates how many labels can be shown and hides labels accordingly. Labels will be rotated up to "),t("code",[e._v("maxRotation")]),e._v(" before skipping any. Turn "),t("code",[e._v("autoSkip")]),e._v(" off to show all labels no matter what.")])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("autoSkipPadding")])]),e._v(" "),t("td",[t("code",[e._v("number")])]),e._v(" "),t("td",[t("code",[e._v("3")])]),e._v(" "),t("td",[e._v("Padding between the ticks on the horizontal axis when "),t("code",[e._v("autoSkip")]),e._v(" is enabled.")])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("includeBounds")])]),e._v(" "),t("td",[t("code",[e._v("boolean")])]),e._v(" "),t("td",[t("code",[e._v("true")])]),e._v(" "),t("td",[e._v("Should the defined "),t("code",[e._v("min")]),e._v(" and "),t("code",[e._v("max")]),e._v(' values be presented as ticks even if they are not "nice".')])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("labelOffset")])]),e._v(" "),t("td",[t("code",[e._v("number")])]),e._v(" "),t("td",[t("code",[e._v("0")])]),e._v(" "),t("td",[e._v("Distance in pixels to offset the label from the centre point of the tick (in the x-direction for the x-axis, and the y-direction for the y-axis). "),t("em",[e._v("Note: this can cause labels at the edges to be cropped by the edge of the canvas")])])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("maxRotation")])]),e._v(" "),t("td",[t("code",[e._v("number")])]),e._v(" "),t("td",[t("code",[e._v("50")])]),e._v(" "),t("td",[e._v("Maximum rotation for tick labels when rotating to condense labels. Note: Rotation doesn't occur until necessary. "),t("em",[e._v("Note: Only applicable to horizontal scales.")])])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("minRotation")])]),e._v(" "),t("td",[t("code",[e._v("number")])]),e._v(" "),t("td",[t("code",[e._v("0")])]),e._v(" "),t("td",[e._v("Minimum rotation for tick labels. "),t("em",[e._v("Note: Only applicable to horizontal scales.")])])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("mirror")])]),e._v(" "),t("td",[t("code",[e._v("boolean")])]),e._v(" "),t("td",[t("code",[e._v("false")])]),e._v(" "),t("td",[e._v("Flips tick labels around axis, displaying the labels inside the chart instead of outside. "),t("em",[e._v("Note: Only applicable to vertical scales.")])])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("padding")])]),e._v(" "),t("td",[t("code",[e._v("number")])]),e._v(" "),t("td",[t("code",[e._v("0")])]),e._v(" "),t("td",[e._v("Padding between the tick label and the axis. When set on a vertical axis, this applies in the horizontal (X) direction. When set on a horizontal axis, this applies in the vertical (Y) direction.")])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("maxTicksLimit")])]),e._v(" "),t("td",[t("code",[e._v("number")])]),e._v(" "),t("td",[t("code",[e._v("11")])]),e._v(" "),t("td",[e._v("Maximum number of ticks and gridlines to show.")])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);