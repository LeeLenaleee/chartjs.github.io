(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{793:function(e,a,t){"use strict";t.r(a);var r=t(6),s=Object(r.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"_4-x-migration-guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-x-migration-guide"}},[e._v("#")]),e._v(" 4.x Migration Guide")]),e._v(" "),a("p",[e._v("Chart.js 4.0 introduces a number of breaking changes. We tried keeping the amount of breaking changes to a minimum. For some features and bug fixes it was necessary to break backwars compatibility, but we aimed to do so only when worth the benefit.")]),e._v(" "),a("h2",{attrs:{id:"end-user-migration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#end-user-migration"}},[e._v("#")]),e._v(" End user migration")]),e._v(" "),a("h3",{attrs:{id:"charts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#charts"}},[e._v("#")]),e._v(" Charts")]),e._v(" "),a("ul",[a("li",[e._v("Charts don't override the default tooltip callbacks, so all chart types have the same-looking tooltips.")])]),e._v(" "),a("h3",{attrs:{id:"options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[e._v("#")]),e._v(" Options")]),e._v(" "),a("p",[e._v("A number of changes were made to the configuration options passed to the "),a("code",[e._v("Chart")]),e._v(" constructor. Those changes are documented below.")]),e._v(" "),a("h4",{attrs:{id:"specific-changes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specific-changes"}},[e._v("#")]),e._v(" Specific changes")]),e._v(" "),a("ul",[a("li",[e._v("The radialLinear grid indexable and scriptable options don't decrease the index of the specified grid line anymore.")]),e._v(" "),a("li",[e._v("The "),a("code",[e._v("destroy")]),e._v(" plugin hook has been removed and replaced with "),a("code",[e._v("afterDestroy")]),e._v(".")]),e._v(" "),a("li",[e._v("Ticks callback on time scale now receives timestamp instead of a formatted label.")]),e._v(" "),a("li",[a("code",[e._v("scales[id].grid.drawBorder")]),e._v(" has been renamed to "),a("code",[e._v("scales[id].border.display")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("scales[id].grid.borderWidth")]),e._v(" has been renamed to "),a("code",[e._v("scales[id].border.width")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("scales[id].grid.borderColor")]),e._v(" has been renamed to "),a("code",[e._v("scales[id].border.color")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("scales[id].grid.borderDash")]),e._v(" has been renamed to "),a("code",[e._v("scales[id].border.dash")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("scales[id].grid.borderDashOffset")]),e._v(" has been renamed to "),a("code",[e._v("scales[id].border.dashOffset")]),e._v(".")]),e._v(" "),a("li",[e._v("The z index for the border of a scale is now configurable instead of being 1 higher as the grid z index.")]),e._v(" "),a("li",[e._v("Linear scales now add and subtracts "),a("code",[e._v("5%")]),e._v(" of the max value to the range if the min and max are the same instead of "),a("code",[e._v("1")]),e._v(".")]),e._v(" "),a("li",[e._v("If the tooltip callback returns "),a("code",[e._v("undefined")]),e._v(", then the default callback will be used.")])]),e._v(" "),a("h4",{attrs:{id:"type-changes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type-changes"}},[e._v("#")]),e._v(" Type changes")]),e._v(" "),a("ul",[a("li",[e._v("The order of the "),a("code",[e._v("ChartMeta")]),e._v(" parameters have been changed from "),a("code",[e._v("<Element, DatasetElement, Type>")]),e._v(" to "),a("code",[e._v("<Type, Element, DatasetElement>")]),e._v(".")])]),e._v(" "),a("h3",{attrs:{id:"general"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#general"}},[e._v("#")]),e._v(" General")]),e._v(" "),a("ul",[a("li",[e._v("Removed fallback to "),a("code",[e._v("fontColor")]),e._v(" for the legend text and strikethrough color.")])])])}),[],!1,null,null,null);a.default=s.exports}}]);