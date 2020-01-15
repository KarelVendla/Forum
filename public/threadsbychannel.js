(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["threadsbychannel"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ThreadsByChannelComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ThreadsByChannelComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },
  mounted: function mounted() {
    this.fetchThreads();
  },
  methods: {
    fetchThreads: function fetchThreads() {
      return this.$store.dispatch('GET_THREADS');
    }
  },
  computed: {
    getChannel: function getChannel() {
      return this.$route.params.channel;
    },
    getThreadsByChannel: function getThreadsByChannel() {
      return this.$store.getters.getThreadsByChannel(this.getChannel);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ThreadsByChannelComponent.vue?vue&type=template&id=6664705f&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ThreadsByChannelComponent.vue?vue&type=template&id=6664705f& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row justify-content-center" }, [
      _c(
        "div",
        { staticClass: "col-md-8" },
        [
          _c("div", { staticClass: "card-header" }, [
            _c("h4", [_vm._v(_vm._s(_vm.getChannel))]),
            _vm._v(" \r\n                    Threads\r\n                ")
          ]),
          _vm._v(" "),
          _vm._l(_vm.getThreadsByChannel, function(thread) {
            return _c("div", { key: thread.id, staticClass: "card m-1" }, [
              _c("div", { staticClass: "card-body" }, [
                _c("article", [
                  _c(
                    "h4",
                    [
                      _c(
                        "router-link",
                        {
                          attrs: {
                            to: {
                              name: "thread",
                              params: { channel: thread.channel, id: thread.id }
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\r\n                                    " +
                              _vm._s(thread.title) +
                              "\r\n                                "
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "body" }, [
                    _vm._v(
                      "\r\n                                " +
                        _vm._s(thread.body) +
                        "\r\n                            "
                    )
                  ])
                ])
              ])
            ])
          })
        ],
        2
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/ThreadsByChannelComponent.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/ThreadsByChannelComponent.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ThreadsByChannelComponent_vue_vue_type_template_id_6664705f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ThreadsByChannelComponent.vue?vue&type=template&id=6664705f& */ "./resources/js/components/ThreadsByChannelComponent.vue?vue&type=template&id=6664705f&");
/* harmony import */ var _ThreadsByChannelComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ThreadsByChannelComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/ThreadsByChannelComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ThreadsByChannelComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ThreadsByChannelComponent_vue_vue_type_template_id_6664705f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ThreadsByChannelComponent_vue_vue_type_template_id_6664705f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ThreadsByChannelComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ThreadsByChannelComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/ThreadsByChannelComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ThreadsByChannelComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ThreadsByChannelComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ThreadsByChannelComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ThreadsByChannelComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ThreadsByChannelComponent.vue?vue&type=template&id=6664705f&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/ThreadsByChannelComponent.vue?vue&type=template&id=6664705f& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ThreadsByChannelComponent_vue_vue_type_template_id_6664705f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ThreadsByChannelComponent.vue?vue&type=template&id=6664705f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ThreadsByChannelComponent.vue?vue&type=template&id=6664705f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ThreadsByChannelComponent_vue_vue_type_template_id_6664705f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ThreadsByChannelComponent_vue_vue_type_template_id_6664705f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);