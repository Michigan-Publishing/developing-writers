(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var palette = {
  lightBackground: "#CFDBDF",
  black: "#000",
  white: "#FFF",
  red: "#BB2929",
  redBackground: "#FFD9D9",
  purpleMain: "#662D91",
  blueMain: "#29ABE2",
  mainNavText: "#F4F5AA",
  yellowLine: "#D1D420",
  yellow: "#E2E420",
  gameBackground: "#EDEDED",
  contentBackground: "#0F384A",
  relatedBackground: "#307382",
  rgbContentBackground: "16, 56, 74",
  rgbRelatedBackground: "48, 115, 130",
  rgbBlack: "0, 0, 0",
  blue: "rgba(0, 39, 76)",
  rgbBlue: "0, 39, 76",
  success: "#C1DACA",
  successBorder: "#365242"
};
/* harmony default export */ __webpack_exports__["a"] = (palette);

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return textCss; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(171);

var textCss = "\n  font-family: Helvetica, Arial, sans-serif;\n";
var Text = styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].span.withConfig({
  displayName: "Text",
  componentId: "sc-5f0f5h-0"
})(["", ";"], textCss);
/* harmony default export */ __webpack_exports__["a"] = (Text);

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return MOBILE_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return MOBILE_LANDSCAPE_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return TABLET_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return TABLET_LANDSCAPE_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DESKTOP_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DESKTOP_LARGE_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DESKTOP_WIDE_WIDTH; });
var MOBILE_WIDTH = 320;
var MOBILE_LANDSCAPE_WIDTH = 480;
var TABLET_WIDTH = 768;
var TABLET_LANDSCAPE_WIDTH = 1024;
var DESKTOP_WIDTH = 1200;
var DESKTOP_LARGE_WIDTH = 1500;
var DESKTOP_WIDE_WIDTH = 1920;

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphql", function() { return graphql; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQueryContext", function() { return StaticQueryContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQuery", function() { return StaticQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(177);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2___default.a; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withPrefix", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["withPrefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigate", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "push", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["push"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["replace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigateTo"]; });

/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(189);
/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_page_renderer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "PageRenderer", function() { return _public_page_renderer__WEBPACK_IMPORTED_MODULE_3___default.a; });
/* harmony import */ var _parse_path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parsePath", function() { return _parse_path__WEBPACK_IMPORTED_MODULE_4__["a"]; });






var StaticQueryContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});

var StaticQuery = function StaticQuery(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StaticQueryContext.Consumer, null, function (staticQueryData) {
    if (props.data || staticQueryData[props.query] && staticQueryData[props.query].data) {
      return (props.render || props.children)(props.data ? props.data.data : staticQueryData[props.query].data);
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Loading (StaticQuery)");
    }
  });
};

StaticQuery.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  render: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

function graphql() {
  throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls " + "are supposed to only be evaluated at compile time, and then compiled away,. " + "Unfortunately, something went wrong and the query was left in the compiled code.\n\n." + "Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.");
}



/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(171);

// CONCATENATED MODULE: ./src/components/visuallyHidden/VisuallyHidden.js

var hiddenCss = "\n  position: absolute !important;\n  clip: rect(1px,1px,1px,1px) !important;\n  clip: rect(1px,1px,1px,1px) !important;\n  height: 1px !important;\n  width: 1px !important;\n  overflow: hidden !important;\n  padding: 0 !important;\n  margin: 0 !important; \n";
var VisuallyHidden_visuallyHiddenWrapper = function visuallyHiddenWrapper(component) {
  return Object(styled_components_browser_esm["a" /* default */])(component).withConfig({
    displayName: "VisuallyHidden",
    componentId: "ksfyyu-0"
  })(["", ";"], hiddenCss);
};
var VisuallyHidden = styled_components_browser_esm["a" /* default */].span.withConfig({
  displayName: "VisuallyHidden",
  componentId: "ksfyyu-1"
})(["", ";"], hiddenCss);
/* harmony default export */ var visuallyHidden_VisuallyHidden = (VisuallyHidden);
// CONCATENATED MODULE: ./src/components/visuallyHidden/index.js
/* concated harmony reexport default */__webpack_require__.d(__webpack_exports__, "a", function() { return visuallyHidden_VisuallyHidden; });


/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

var preferDefault = function preferDefault(m) {
  return m && m.default || m;
};

if (false) {} else if (true) {
  module.exports = preferDefault(__webpack_require__(218));
} else {}

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inheritsLoose.js
var inheritsLoose = __webpack_require__(7);
var inheritsLoose_default = /*#__PURE__*/__webpack_require__.n(inheritsLoose);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(171);

// EXTERNAL MODULE: ./src/components/background/background.jpg
var background = __webpack_require__(219);
var background_default = /*#__PURE__*/__webpack_require__.n(background);

// EXTERNAL MODULE: ./node_modules/lodash.throttle/index.js
var lodash_throttle = __webpack_require__(220);
var lodash_throttle_default = /*#__PURE__*/__webpack_require__.n(lodash_throttle);

// EXTERNAL MODULE: ./src/constants/index.js
var constants = __webpack_require__(174);

// CONCATENATED MODULE: ./src/components/background/Background.js






var BackgroundContainer = styled_components_browser_esm["a" /* default */].div.withConfig({
  displayName: "Background__BackgroundContainer",
  componentId: "sc-1qwcq2r-0"
})(["min-height:100vh;min-width:100vw;display:flex;flex-direction:column;overflow-x:hidden;"]);
var BackgroundBox = styled_components_browser_esm["a" /* default */].div.withConfig({
  displayName: "Background__BackgroundBox",
  componentId: "sc-1qwcq2r-1"
})(["width:100vw;height:100vh;position:fixed;overflow:hidden;@media (max-width:", "px){position:fixed;top:0;z-index:-1;}"], constants["f" /* TABLET_LANDSCAPE_WIDTH */]);
var Background = styled_components_browser_esm["a" /* default */].div.withConfig({
  displayName: "Background",
  componentId: "sc-1qwcq2r-2"
})(["background:url(", ") no-repeat center center fixed;background-origin:border-box;background-size:cover;transform-origin:top center;transform:perspective(500px) skewY(-", "turn) scale(", ");transition:transform 200ms;min-width:100%;min-height:100%;"], function (props) {
  return props.src;
}, function (props) {
  return props.backgroundCalculation / 10000;
}, function (props) {
  return 1 + props.backgroundCalculation / 2000;
});

function getPercentScrolled() {
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
  var clientHeight = document.documentElement.clientHeight;
  return scrollTop / (scrollHeight - clientHeight) * 100;
}

var Background_BackgroundWrapper =
/*#__PURE__*/
function (_React$Component) {
  inheritsLoose_default()(BackgroundWrapper, _React$Component);

  function BackgroundWrapper() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      backgroundCalculation: 0
    };
    _this.element = react_default.a.createRef();

    _this.onScroll = function (e) {
      var percentScrolled = getPercentScrolled();

      _this.setState({
        backgroundCalculation: percentScrolled
      });
    };

    _this.throttledOnScroll = lodash_throttle_default()(_this.onScroll, 100);
    return _this;
  }

  var _proto = BackgroundWrapper.prototype;

  _proto.componentDidMount = function componentDidMount() {
    window.addEventListener("scroll", this.throttledOnScroll);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener("scroll", this.throttledOnScroll);
  };

  _proto.render = function render() {
    var children = this.props.children;
    return react_default.a.createElement(BackgroundContainer, null, react_default.a.createElement(BackgroundBox, null, react_default.a.createElement(Background, {
      src: background_default.a,
      backgroundCalculation: this.state.backgroundCalculation
    })), children);
  };

  return BackgroundWrapper;
}(react_default.a.Component);


// CONCATENATED MODULE: ./src/components/background/index.js

// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js
var gatsby_browser_entry = __webpack_require__(178);

// EXTERNAL MODULE: ./src/utils/palette/index.js
var palette = __webpack_require__(172);

// CONCATENATED MODULE: ./src/components/siteHeading/SiteHeading.js






var HeadingWrapper = styled_components_browser_esm["a" /* default */].header.withConfig({
  displayName: "SiteHeading__HeadingWrapper",
  componentId: "sc-8jchkq-0"
})(["font-family:Helvetica,sans-serif;font-size:3rem;font-weight:normal;color:", ";text-transform:uppercase;margin-top:1rem;&:after{content:\" \";display:block;border:1px solid ", ";margin-top:1.5rem;max-width:700px;}& a{text-decoration:none;color:#fff;}@media (max-width:", "px){font-size:2rem;line-height:2.5rem;}"], palette["a" /* default */].white, palette["a" /* default */].yellowLine, constants["g" /* TABLET_WIDTH */]);

var SiteHeading_default =
/*#__PURE__*/
function (_Component) {
  inheritsLoose_default()(_default, _Component);

  function _default() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = _default.prototype;

  _proto.render = function render() {
    return react_default.a.createElement(HeadingWrapper, null, react_default.a.createElement(gatsby_browser_entry["Link"], {
      to: "/"
    }, "Developing Writers"));
  };

  return _default;
}(react["Component"]);


// CONCATENATED MODULE: ./src/components/siteHeading/index.js

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.map.js
var es6_array_map = __webpack_require__(28);

// EXTERNAL MODULE: ./src/components/text/Text.js
var Text = __webpack_require__(173);

// CONCATENATED MODULE: ./src/components/breadcrumbs/Breadcrumbs.js









var BreadcrumbWrapper = styled_components_browser_esm["a" /* default */].div.withConfig({
  displayName: "Breadcrumbs__BreadcrumbWrapper",
  componentId: "sc-3dyv7-0"
})(["margin:.75rem 0;display:flex;flex-direction:row;", " color:", ";a,a:visited{margin:0 .75rem;color:", ";opacity:.8;}a:first-child{margin-right:.75rem;margin-left:0;}& span{display:inline-block;max-width:300px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}span:not(:last-child)::after{content:\">\";margin-right:.75rem;opacity:.6;}@media (max-width:", "px){flex-direction:column !important;& span{max-width:300px;white-space:unset;}}"], Text["b" /* textCss */], palette["a" /* default */].white, palette["a" /* default */].white, constants["f" /* TABLET_LANDSCAPE_WIDTH */]);
var LinkWrapper = styled_components_browser_esm["a" /* default */].span.withConfig({
  displayName: "Breadcrumbs__LinkWrapper",
  componentId: "sc-3dyv7-1"
})([""]);

var Breadcrumbs_default =
/*#__PURE__*/
function (_Component) {
  inheritsLoose_default()(_default, _Component);

  function _default() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = _default.prototype;

  _proto.render = function render() {
    var items = this.props.items;
    return items && items.length > 0 ? react_default.a.createElement(BreadcrumbWrapper, null, items.map(function (item, index) {
      return index !== items.length - 1 ? react_default.a.createElement(LinkWrapper, {
        key: item.slug
      }, react_default.a.createElement(gatsby_browser_entry["Link"], {
        to: item.slug
      }, item.title)) : react_default.a.createElement(LinkWrapper, {
        key: item.slug
      }, item.title);
    })) : null;
  };

  return _default;
}(react["Component"]);


// CONCATENATED MODULE: ./src/components/breadcrumbs/index.js

// EXTERNAL MODULE: ./node_modules/react-flyout-menu/lib/flyoutMenu.es.js + 1 modules
var flyoutMenu_es = __webpack_require__(197);

// CONCATENATED MODULE: ./src/components/flyoutMenu/Flyout.js










var _Heading = styled_components_browser_esm["a" /* default */].h2.withConfig({
  displayName: "Flyout__Heading",
  componentId: "sc-1pufune-0"
})(["display:flex;width:100%;text-align:center;", ";color:", ";justify-content:center;"], Text["b" /* textCss */], palette["a" /* default */].yellow);

var LinkContainer = styled_components_browser_esm["a" /* default */].div.withConfig({
  displayName: "Flyout__LinkContainer",
  componentId: "sc-1pufune-1"
})(["", ";font-size:2rem;opacity:", ";margin:1rem 0;"], Text["b" /* textCss */], function (props) {
  return props.opacity;
});
var StyledLink = Object(styled_components_browser_esm["a" /* default */])(gatsby_browser_entry["Link"]).withConfig({
  displayName: "Flyout__StyledLink",
  componentId: "sc-1pufune-2"
})(["margin-bottom:", "rem;display:inline-block;"], function (props) {
  return props.depth === 0 ? 0.5 : 0;
});
var Flyout_LinkWrapper = styled_components_browser_esm["a" /* default */].div.withConfig({
  displayName: "Flyout__LinkWrapper",
  componentId: "sc-1pufune-3"
})(["display:flex;flex-wrap:wrap;font-size:", "rem;flex-direction:", ";font-weight:", ";opacity:", ";color:#fff;padding-left:", "rem;padding-top:", "rem;& > div{margin-bottom:", ";}a{display:inline-block;margin:0.5rem 1rem;}"], function (props) {
  return 1.4 - 0.1 * props.depth;
}, function (props) {
  return props.depth >= 1 ? "row" : "column";
}, function (props) {
  return props.depth >= 1 ? "normal" : "bold";
}, function (props) {
  return props.depth >= 1 ? 0.8 : 0.6;
}, function (props) {
  return props.depth >= 1 ? 1 : 0;
}, function (props) {
  return props.depth < 1 ? 0.5 : 0;
}, function (props) {
  return props.depth >= 1 ? "auto" : "1rem";
});
var LinkBlockWrapper = styled_components_browser_esm["a" /* default */].div.withConfig({
  displayName: "Flyout__LinkBlockWrapper",
  componentId: "sc-1pufune-4"
})(["margin-bottom:1rem;"]);

function buildLinks(items, depth) {
  if (depth === void 0) {
    depth = 0;
  }

  if (!items) {
    return null;
  }

  return items.map(function (item) {
    return react_default.a.createElement(LinkBlockWrapper, {
      key: item.slug
    }, react_default.a.createElement(StyledLink, {
      to: item.slug,
      depth: depth
    }, item.title), react_default.a.createElement(Flyout_LinkWrapper, {
      depth: depth,
      "data-depth": depth
    }, buildLinks(item.children, depth + 1)));
  });
}

var Flyout_default =
/*#__PURE__*/
function (_Component) {
  inheritsLoose_default()(_default, _Component);

  function _default() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = _default.prototype;

  _proto.render = function render() {
    var _this = this;

    var items = this.props.items;
    var links = buildLinks(items);
    return react_default.a.createElement(flyoutMenu_es["d" /* MenuConsumer */], null, function (_ref) {
      var toggleElement = _ref.toggleElement,
          setCloseElement = _ref.setCloseElement;
      return react_default.a.createElement(react["Fragment"], null, react_default.a.createElement(flyoutMenu_es["c" /* Menu */], {
        setCloseElement: setCloseElement,
        toggleElement: toggleElement,
        Heading: function Heading() {
          return react_default.a.createElement(_Heading, null, "NAVIGATION");
        },
        onClose: function onClose() {
          return document.body.classList.remove("modalOpen");
        }
      }, react_default.a.createElement(LinkContainer, {
        opacity: _this.props.opacity
      }, links)), react_default.a.createElement(flyoutMenu_es["a" /* Backdrop */], null));
    });
  };

  return _default;
}(react["Component"]);


// CONCATENATED MODULE: ./src/components/flyoutMenu/index.js

// EXTERNAL MODULE: ./src/components/footer/umich-logo.png
var umich_logo = __webpack_require__(223);
var umich_logo_default = /*#__PURE__*/__webpack_require__.n(umich_logo);

// EXTERNAL MODULE: ./src/components/footer/mliblogo.png
var mliblogo = __webpack_require__(224);
var mliblogo_default = /*#__PURE__*/__webpack_require__.n(mliblogo);

// EXTERNAL MODULE: ./src/components/footer/press.png
var press = __webpack_require__(225);
var press_default = /*#__PURE__*/__webpack_require__.n(press);

// EXTERNAL MODULE: ./src/components/footer/collaboratory.png
var collaboratory = __webpack_require__(226);
var collaboratory_default = /*#__PURE__*/__webpack_require__.n(collaboratory);

// CONCATENATED MODULE: ./src/components/footer/Footer.js













var FOOTER_HEIGHT = 172;
var FooterWrapper = styled_components_browser_esm["a" /* default */].footer.withConfig({
  displayName: "Footer__FooterWrapper",
  componentId: "sc-1gxmrx2-0"
})(["border-top:3px solid ", ";background-color:", ";width:100vw;min-height:", "px;z-index:1;display:flex;flex-direction:row;justify-content:space-between;", " padding:1rem 0 2rem 0;color:", ";@media (max-width:", "px){flex-direction:column;}"], palette["a" /* default */].relatedBackground, palette["a" /* default */].lightBackground, FOOTER_HEIGHT, Text["b" /* textCss */], palette["a" /* default */].contentBackground, constants["f" /* TABLET_LANDSCAPE_WIDTH */]);
var Footer_Heading = styled_components_browser_esm["a" /* default */].h4.withConfig({
  displayName: "Footer__Heading",
  componentId: "sc-1gxmrx2-1"
})(["font-size:1.5rem;margin:1rem 0;padding:0;@media (max-width:", "px){font-size:1rem;}"], constants["f" /* TABLET_LANDSCAPE_WIDTH */]);
var ColumnWrapper = styled_components_browser_esm["a" /* default */].div.withConfig({
  displayName: "Footer__ColumnWrapper",
  componentId: "sc-1gxmrx2-2"
})(["display:flex;flex-direction:row;@media (max-width:", "px){flex-direction:column;}"], constants["f" /* TABLET_LANDSCAPE_WIDTH */]);
var Column = styled_components_browser_esm["a" /* default */].div.withConfig({
  displayName: "Footer__Column",
  componentId: "sc-1gxmrx2-3"
})(["display:flex;flex-direction:column;margin-right:2rem;width:32%;@media (max-width:", "px){font-size:1rem;width:100%;}"], constants["f" /* TABLET_LANDSCAPE_WIDTH */]);
var Left = styled_components_browser_esm["a" /* default */].div.withConfig({
  displayName: "Footer__Left",
  componentId: "sc-1gxmrx2-4"
})(["width:50%;padding-left:1rem;@media (max-width:", "px){width:100%;justify-content:flex-start;margin-bottom:2rem;}"], constants["f" /* TABLET_LANDSCAPE_WIDTH */]);
var Right = Object(styled_components_browser_esm["a" /* default */])(Left).withConfig({
  displayName: "Footer__Right",
  componentId: "sc-1gxmrx2-5"
})(["width:50%;padding-left:unset;display:flex;flex-direction:row;align-items:center;justify-content:flex-end;padding-right:3rem;& img:not(:first-child){margin-left:20px;}@media (max-width:", "px){padding-left:1rem;padding-right:1rem;flex-direction:column;align-items:flex-start;justify-content:flex-start;}"], constants["f" /* TABLET_LANDSCAPE_WIDTH */]);
var Link = Object(styled_components_browser_esm["a" /* default */])(gatsby_browser_entry["Link"]).withConfig({
  displayName: "Footer__Link",
  componentId: "sc-1gxmrx2-6"
})(["@media (max-width:", "px){font-size:1rem;line-height:1.75rem;}"], constants["f" /* TABLET_LANDSCAPE_WIDTH */]);
var ChildLink = Object(styled_components_browser_esm["a" /* default */])(Link).withConfig({
  displayName: "Footer__ChildLink",
  componentId: "sc-1gxmrx2-7"
})(["margin:0.5rem;font-size:0.75rem;line-height:1.3rem;@media (max-width:", "px){font-size:0.75rem;line-height:1rem;}"], constants["f" /* TABLET_LANDSCAPE_WIDTH */]);
var LogoWrapper = styled_components_browser_esm["a" /* default */].div.withConfig({
  displayName: "Footer__LogoWrapper",
  componentId: "sc-1gxmrx2-8"
})(["height:100px;width:auto;background-color:", ";margin-right:2rem;& img{height:100%;}"], palette["a" /* default */].blue);
var OtherLogos = styled_components_browser_esm["a" /* default */].div.withConfig({
  displayName: "Footer__OtherLogos",
  componentId: "sc-1gxmrx2-9"
})(["border-left:2px solid rgba(", ",0.5);padding-left:2rem;display:flex;flex-direction:column;height:110px;min-width:430px;justify-content:space-between;@media (max-width:", "px){padding:0;border:none;justify-content:flex-start;align-items:flex-start;min-width:unset;}"], palette["a" /* default */].rgbBlue, constants["f" /* TABLET_LANDSCAPE_WIDTH */]);
var LogoRow = styled_components_browser_esm["a" /* default */].div.withConfig({
  displayName: "Footer__LogoRow",
  componentId: "sc-1gxmrx2-10"
})(["display:flex;flex-direction:row;justify-content:flex-start;height:", "px;& img{height:100%;width:auto;}@media (max-width:", "px){margin-top:1rem;}"], function (props) {
  return props.height;
}, constants["f" /* TABLET_LANDSCAPE_WIDTH */]);

var Footer_Footer =
/*#__PURE__*/
function (_Component) {
  inheritsLoose_default()(Footer, _Component);

  function Footer() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this.getLinkColumn = function (link) {
      return react_default.a.createElement(react["Fragment"], null, react_default.a.createElement(Link, {
        to: link.slug
      }, react_default.a.createElement("strong", null, link.title)), link.children.map(function (childLink) {
        return react_default.a.createElement(ChildLink, {
          key: childLink.slug,
          to: childLink.slug
        }, childLink.title);
      }));
    };

    return _this;
  }

  var _proto = Footer.prototype;

  _proto.render = function render() {
    var _this2 = this;

    return react_default.a.createElement(FooterWrapper, null, react_default.a.createElement(Left, null, react_default.a.createElement(Footer_Heading, null, "Developing Writers"), react_default.a.createElement(ColumnWrapper, null, react_default.a.createElement(Column, null, react_default.a.createElement(Link, {
      to: "/pages/about/"
    }, react_default.a.createElement("strong", null, "About"))), this.props.links.map(function (link) {
      return react_default.a.createElement(Column, {
        key: link.slug
      }, _this2.getLinkColumn(link));
    }))), react_default.a.createElement(Right, null, react_default.a.createElement(LogoWrapper, null, react_default.a.createElement("img", {
      alt: "University of Michigan logo",
      src: umich_logo_default.a,
      width: "auto"
    })), react_default.a.createElement(OtherLogos, null, react_default.a.createElement(LogoRow, {
      height: 60
    }, react_default.a.createElement("img", {
      src: mliblogo_default.a,
      alt: "University of Michigan Library Logo",
      width: "auto"
    }), react_default.a.createElement("img", {
      src: press_default.a,
      alt: "University of Michigan Press Logo"
    })), react_default.a.createElement(LogoRow, {
      height: 40
    }, react_default.a.createElement("img", {
      src: collaboratory_default.a,
      alt: "Humanities Collaboratory Logo"
    })))));
  };

  return Footer;
}(react["Component"]);

/* harmony default export */ var footer_Footer = (Footer_Footer);
// CONCATENATED MODULE: ./src/components/footer/index.js

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.for-each.js
var es6_array_for_each = __webpack_require__(58);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__(57);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__(179);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.reduce.js
var es6_array_reduce = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread.js
var objectSpread = __webpack_require__(14);
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread);

// CONCATENATED MODULE: ./src/utils/node/index.js










 // builds a lookup based on key

function buildTreeFromList(nodes, parentKey) {
  if (parentKey === void 0) {
    parentKey = null;
  } // get matching nodes


  var matchingNodes = Object.keys(nodes).reduce(function (all, next) {
    if (nodes[next].parentKey === parentKey) {
      all.push(nodes[next]);
    }

    return all;
  }, []);

  if (!matchingNodes) {
    return null;
  }

  matchingNodes.forEach(function (n) {
    var children = buildTreeFromList(nodes, n.key);

    if (children && children !== []) {
      n.children = children;
    }
  });
  return matchingNodes;
}

var node_buildFrontmatterLookup = function buildFrontmatterLookup(nodes, includeFields, asTree) {
  if (includeFields === void 0) {
    includeFields = false;
  }

  if (asTree === void 0) {
    asTree = false;
  }

  var list = nodes.reduce(function (all, _ref) {
    var _objectSpread2;

    var nextNode = _ref.node;

    if (!nextNode.frontmatter) {
      return all;
    }

    var additional = includeFields ? objectSpread_default()({}, nextNode.fields) : {};
    return objectSpread_default()({}, all, (_objectSpread2 = {}, _objectSpread2[nextNode.frontmatter.key] = objectSpread_default()({}, nextNode.frontmatter, additional), _objectSpread2));
  }, {});
  return asTree ? buildTreeFromList(list) : list;
};
// CONCATENATED MODULE: ./src/components/siteContainer/SiteContainer.js












var SiteContainer_HeadingWrapper = styled_components_browser_esm["a" /* default */].div.withConfig({
  displayName: "SiteContainer__HeadingWrapper",
  componentId: "sc-1enlc16-0"
})(["background:linear-gradient(rgba(0,0,0,1.5) 50%,rgba(0,0,0,0));padding:1rem;display:flex;flex-direction:column;width:calc(100vw - 2rem);position:fixed;top:0;z-index:1;overflow:hidden;a,a:visited{color:", ";}@media (max-width:", "px){position:initial;background:unset;background:", ";border-bottom:2px solid ", ";}"], palette["a" /* default */].white, constants["f" /* TABLET_LANDSCAPE_WIDTH */], palette["a" /* default */].contentBackground, palette["a" /* default */].relatedBackground);
var ContentArea = styled_components_browser_esm["a" /* default */].div.withConfig({
  displayName: "SiteContainer__ContentArea",
  componentId: "sc-1enlc16-1"
})(["display:flex;flex-grow:1;flex-direction:column;height:100%;margin-top:8.5rem;position:relative;z-index:0;padding-bottom:", "px;@media (max-width:", "px){margin-top:0;}"], FOOTER_HEIGHT, constants["f" /* TABLET_LANDSCAPE_WIDTH */]);
var HeadingRow = styled_components_browser_esm["a" /* default */].div.withConfig({
  displayName: "SiteContainer__HeadingRow",
  componentId: "sc-1enlc16-2"
})(["display:flex;flex-direction:row;justify-content:space-between;width:100%;"]);

var SiteContainer_default =
/*#__PURE__*/
function (_Component) {
  inheritsLoose_default()(_default, _Component);

  function _default() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      showFlyout: false,
      headingHeight: 0
    };

    _this.shouldShowBreadcrumbs = function () {
      return _this.props.showBreadcrumbs && _this.props.data && _this.props.data.allMdx && _this.props.data.allMdx.edges;
    };

    _this.buildLinkTree = function () {
      var nodes = _this.props.data.allMdx.edges;
      var lookup = node_buildFrontmatterLookup(nodes, true, true);
      return lookup;
    };

    _this.buildBreadcrumbLinks = function () {
      if (_this.shouldShowBreadcrumbs()) {
        var _this$props = _this.props,
            key = _this$props.pageContext.key,
            nodes = _this$props.data.allMdx.edges;
        var lookup = node_buildFrontmatterLookup(nodes, true); // walk backwards up the lookup starting with this key

        var currentKey = key;
        var list = [];

        while (currentKey) {
          var data = lookup[currentKey];
          list.push({
            title: data.title,
            slug: data.slug
          });
          currentKey = data.parentKey;
        }

        list.push({
          title: "home",
          slug: "/"
        });
        var output = list.reverse();
        return output;
      }
    };

    return _this;
  }

  var _proto = _default.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.buildLinkTree();
    this.setState({
      headingHeight: this.headingWrapper.clientHeight
    });
  };

  _proto.render = function render() {
    var _this2 = this;

    var contentStyles = this.props.contentStyles;
    var linkTree = this.buildLinkTree();
    return react_default.a.createElement(flyoutMenu_es["e" /* MenuProvider */], null, react_default.a.createElement(react["Fragment"], null, react_default.a.createElement(SiteContainer_HeadingWrapper, {
      ref: function ref(headingWrapper) {
        return _this2.headingWrapper = headingWrapper;
      }
    }, react_default.a.createElement(HeadingRow, null, react_default.a.createElement(SiteHeading_default, null), react_default.a.createElement(flyoutMenu_es["d" /* MenuConsumer */], null, function (_ref) {
      var closeElement = _ref.closeElement,
          setToggleElement = _ref.setToggleElement;
      return react_default.a.createElement("span", {
        style: {
          fontSize: "1.5rem"
        }
      }, react_default.a.createElement(flyoutMenu_es["b" /* HamburgerButton */], {
        setToggleElement: setToggleElement,
        closeElement: closeElement,
        onClick: function onClick() {
          document.body.classList.add("modalOpen");
        }
      }));
    })), react_default.a.createElement(HeadingRow, null, react_default.a.createElement(Breadcrumbs_default, {
      items: this.buildBreadcrumbLinks()
    }))), react_default.a.createElement(Background_BackgroundWrapper, null, react_default.a.createElement(Flyout_default, {
      onClose: function onClose() {
        return _this2.setState({
          showFlyout: false
        });
      },
      isVisible: this.state.showFlyout,
      items: linkTree
    }), react_default.a.createElement(ContentArea, {
      style: contentStyles
    }, this.props.children), react_default.a.createElement(footer_Footer, {
      links: linkTree
    }))));
  };

  return _default;
}(react["Component"]);

SiteContainer_default.defaultProps = {
  showBreadcrumbs: true,
  breadcrumbLinks: []
};

// CONCATENATED MODULE: ./src/components/siteContainer/index.js
/* concated harmony reexport default */__webpack_require__.d(__webpack_exports__, "a", function() { return SiteContainer_default; });


/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.map.js
var es6_array_map = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inheritsLoose.js
var inheritsLoose = __webpack_require__(7);
var inheritsLoose_default = /*#__PURE__*/__webpack_require__.n(inheritsLoose);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js
var gatsby_browser_entry = __webpack_require__(178);

// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(171);

// EXTERNAL MODULE: ./src/utils/palette/index.js
var palette = __webpack_require__(172);

// EXTERNAL MODULE: ./src/components/text/Text.js
var Text = __webpack_require__(173);

// EXTERNAL MODULE: ./src/constants/index.js
var constants = __webpack_require__(174);

// CONCATENATED MODULE: ./src/components/secondaryNavigation/SecondaryNavigation.js









var Link = Object(styled_components_browser_esm["a" /* default */])(gatsby_browser_entry["Link"]).withConfig({
  displayName: "SecondaryNavigation__Link",
  componentId: "sc-19nitkx-0"
})(["color:", ";", ";font-size:2rem;text-decoration:none;position:flex;"], palette["a" /* default */].white, Text["b" /* textCss */]);
var ListContainer = styled_components_browser_esm["a" /* default */].ul.withConfig({
  displayName: "SecondaryNavigation__ListContainer",
  componentId: "sc-19nitkx-1"
})(["list-style-type:none;min-height:500px;@media (max-width:", "px){margin-top:6rem;padding:0;}"], constants["f" /* TABLET_LANDSCAPE_WIDTH */]);
var LinkBackground = "\n  background-color: rgba(" + palette["a" /* default */].rgbContentBackground + ", 0.8);\n  padding: 1.5rem;\n  border-radius: 1.5rem;\n";
var ListItem = styled_components_browser_esm["a" /* default */].li.withConfig({
  displayName: "SecondaryNavigation__ListItem",
  componentId: "sc-19nitkx-2"
})(["", " display:block;float:left;clear:both;margin-bottom:2rem;margin-left:", "%;@media (max-width:", "px){margin-left:0.5rem;margin-right:0.5rem;}"], LinkBackground, function (props) {
  return props.left;
}, constants["f" /* TABLET_LANDSCAPE_WIDTH */]);

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var SecondaryNavigation_default =
/*#__PURE__*/
function (_Component) {
  inheritsLoose_default()(_default, _Component);

  function _default() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      paddingHeight: 90
    };
    _this.mounted = false;

    _this.getPaddingAmount = function () {
      var linkProperties = _this.props.linkProperties;
      var height = _this.container.clientHeight / linkProperties.length;

      _this.setState({
        paddingHeight: height > 90 ? 90 : height
      });
    };

    return _this;
  }

  var _proto = _default.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.getPaddingAmount();
    window.addEventListener("resize", this.getPaddingAmount);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener("resize", this.getPaddingAmount);
  };

  _proto.render = function render() {
    var _this2 = this;

    var linkProperties = this.props.linkProperties;
    var paddingHeight = this.state.paddingHeight;

    if (!linkProperties) {
      return null;
    }

    return react_default.a.createElement(ListContainer, {
      ref: function ref(node) {
        return _this2.container = node;
      }
    }, linkProperties.map(function (link, index) {
      return react_default.a.createElement(ListItem, {
        key: link.href,
        left: getRandomInt(35),
        top: index * paddingHeight
      }, react_default.a.createElement(Link, {
        to: link.href
      }, link.title));
    }));
  };

  return _default;
}(react["Component"]);


// CONCATENATED MODULE: ./src/components/secondaryNavigation/index.js
/* concated harmony reexport default */__webpack_require__.d(__webpack_exports__, "c", function() { return SecondaryNavigation_default; });
/* concated harmony reexport Link */__webpack_require__.d(__webpack_exports__, "a", function() { return Link; });
/* concated harmony reexport LinkBackground */__webpack_require__.d(__webpack_exports__, "b", function() { return LinkBackground; });


/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-breakpoints/lib/index.js
var lib = __webpack_require__(241);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: ./src/constants/index.js
var constants = __webpack_require__(174);

// CONCATENATED MODULE: ./src/components/breakpoints/Breakpoints.js



var breakpointNames = {
  mobile: "mobile",
  mobileLandscape: "mobileLandscape",
  tablet: "tablet",
  tabletLandscape: "tabletLandscape",
  desktop: "desktop",
  desktopLarge: "desktopLarge",
  desktopWide: "desktopWide"
};
var breakpoints = {
  mobile: constants["e" /* MOBILE_WIDTH */],
  mobileLandscape: constants["d" /* MOBILE_LANDSCAPE_WIDTH */],
  tablet: constants["g" /* TABLET_WIDTH */],
  tabletLandscape: constants["f" /* TABLET_LANDSCAPE_WIDTH */],
  desktop: constants["c" /* DESKTOP_WIDTH */],
  desktopLarge: constants["a" /* DESKTOP_LARGE_WIDTH */],
  desktopWide: constants["b" /* DESKTOP_WIDE_WIDTH */]
};

var Breakpoints_Breakpoints = function Breakpoints(_ref) {
  var children = _ref.children;
  return react_default.a.createElement(lib_default.a, {
    breakpoints: breakpoints
  }, children);
};

/* harmony default export */ var breakpoints_Breakpoints = (Breakpoints_Breakpoints);
// CONCATENATED MODULE: ./src/components/breakpoints/index.js
/* concated harmony reexport default */__webpack_require__.d(__webpack_exports__, "c", function() { return breakpoints_Breakpoints; });
/* concated harmony reexport breakpointNames */__webpack_require__.d(__webpack_exports__, "a", function() { return breakpointNames; });
/* concated harmony reexport breakpoints */__webpack_require__.d(__webpack_exports__, "b", function() { return breakpoints; });


/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _page_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80);
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);






var ProdPageRenderer = function ProdPageRenderer(_ref) {
  var location = _ref.location;
  var pageResources = _loader__WEBPACK_IMPORTED_MODULE_4__["default"].getResourcesForPathnameSync(location.pathname);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_page_renderer__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({
    location: location,
    pageResources: pageResources
  }, pageResources.json));
};

ProdPageRenderer.propTypes = {
  location: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    pathname: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ProdPageRenderer);

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/background-7691e41e575495b521b4fa3eef843492.jpg";

/***/ }),

/***/ 223:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQcAAAEUCAYAAAAm6fOSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyNjAyNjU3OURERDUxMUUyOUNEMUZBNjEzMkVDMzkwQSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyNjAyNjU3QURERDUxMUUyOUNEMUZBNjEzMkVDMzkwQSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjI2MDI2NTc3RERENTExRTI5Q0QxRkE2MTMyRUMzOTBBIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjI2MDI2NTc4RERENTExRTI5Q0QxRkE2MTMyRUMzOTBBIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+WRkO6QAAG0tJREFUeNrtnQe4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"

/***/ }),

/***/ 224:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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apsHE2HUhLn188xwdybC6TGfUFFLcx0MzEQEVnZT7J4rznWMzIVRE7b586057+27Z4uc0dQcecxaL7eYWfd6iLhd9NMvPTp3wAcrByrR8ILmP4K23VVftG597g0vtPCoKGeZ+j6t7atKOSXnOtV6uWHui6usUZY9Han/kd0S7SOlRmCaH/Gy/Jly34K+8X7mjOR79bvs7lCuiXYkcQpGTJqT3zx0k72RD11PtSfb/FVuoxYODQKn+6UHaymbfmAiJhiNXEqbcrvLilckFDN40qG6te21aR5OmLmkpGOaC81oMriUjSecrlk25qI+CAwyQQRl0Cu7PSxx5QueZMzUHWtnOG084dc8bMBpERozx7EU5ixelSPgqC0ZF6jfbnWrravEgZ02W/NqPmWbQnHbgM+teev43R2b0pXyu16uy6dbv7A/SErZ5M7pux422TODLr43EUy6wADSACYiAAIDQGAAgMAAEBgAAgMABAaAwAAQGAAgMAAEBoDAAACBASAwAAQGAAgMAIEBIDAuAQACA0BgAIDAABAYAAIDAAQGgMAAEBgAIDAABAaAwAAAgQEgMAAEBgAIDACBASAwAEBgAAgMABAYAAIDSACN6//dyGUACIf/CTAAjPtg/VSLnBUAAAAASUVORK5CYII="

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/press-c05e809c98fa6d7a78da50aac4fe9287.png";

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/collaboratory-4aa3e01683064a327e58ca4b640a393c.png";

/***/ })

}]);
//# sourceMappingURL=1-4679c7e81680d77a5866.js.map