(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__(56);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inheritsLoose.js
var inheritsLoose = __webpack_require__(7);
var inheritsLoose_default = /*#__PURE__*/__webpack_require__.n(inheritsLoose);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(168);

// EXTERNAL MODULE: ./node_modules/react-helmet/lib/Helmet.js
var Helmet = __webpack_require__(182);

// EXTERNAL MODULE: ./src/components/siteContainer/index.js + 12 modules
var siteContainer = __webpack_require__(191);

// EXTERNAL MODULE: ./src/components/text/Text.js
var Text = __webpack_require__(170);

// CONCATENATED MODULE: ./src/components/text/index.js

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(4);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// CONCATENATED MODULE: ./node_modules/react-whirl/lib/whirl.es.js




function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  width: 100%;\n  height: auto;\n  padding-top: ", "%;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Container = styled_components_browser_esm["a" /* default */].div(_templateObject(), function (props) {
  return props.percent;
});
var Content = styled_components_browser_esm["a" /* default */].div(_templateObject2());
var whirl_es_FixedAspectRatio = function FixedAspectRatio(_ref) {
  var width = _ref.width,
      height = _ref.height,
      children = _ref.children;
  var percent = parseInt(height) / parseInt(width) * 100;
  return react_default.a.createElement(Container, {
    percent: percent
  }, react_default.a.createElement(Content, null, children));
};

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  list-style: none;\n  position: absolute;\n  display: flex;\n  align-items: flex-end;\n  width: ", ";\n  justify-content: space-between;\n  padding: 0;\n  top: calc((", " / 2) - ", "px);\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  padding: 0.5rem;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  list-style: none;\n  margin: 0;\n  flex: 0 0 100%;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  margin: 0;\n  padding: 0;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  text-align: center;\n  color: ", ";\n  ", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  overflow: hidden;\n  overflow-x: scroll;\n  width: 100%;\n  background-color: #ededed;\n  position: relative;\n\n  &:focus {\n    outline: 4px solid DodgerBlue;\n    outline-offset: -6px;\n  }\n\n  & + div #hoverfocus,\n  & + div #hover,\n  & + div #focus {\n    display: none;\n  }\n\n  &:hover + div #hover {\n    display: block;\n  }\n\n  &:focus + div #focus {\n    display: block;\n  }\n\n  &:hover:focus + div #hoverfocus {\n    display: block;\n  }\n\n  &:hover:focus + div #hover,\n  &:hover:focus + div #focus {\n    display: none;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: ", ";\n  height: ", ";\n  position: relative;\n  display: flex;\n  flex-direction: column;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$1() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  position: relative;\n"]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var BUTTON_PADDING = 25;
var whirl_es_hidden = "\n  position: absolute !important;\n  clip: rect(1px,1px,1px,1px) !important;\n  clip: rect(1px,1px,1px,1px) !important;\n  height: 1px !important;\n  width: 1px !important;\n  overflow: hidden !important;\n  padding: 0 !important;\n  margin: 0 !important; \n";
var Definition = styled_components_browser_esm["a" /* default */].aside(_templateObject$1(), whirl_es_hidden);
var OverallWrapper = styled_components_browser_esm["a" /* default */].div(_templateObject2$1()); // See https://inclusive-components.design/a-content-slider/

var GalleryWrapper = styled_components_browser_esm["a" /* default */].div(_templateObject3(), function (props) {
  return props.width;
}, function (props) {
  return props.height;
});
var Gallery = styled_components_browser_esm["a" /* default */].div(_templateObject4());
var Instructions = styled_components_browser_esm["a" /* default */].div(_templateObject5(), function (props) {
  return props.background || "#000";
}, function (props) {
  return props.color || "#FFF";
}, function (props) {
  return props.style;
});
var GalleryList = styled_components_browser_esm["a" /* default */].ul(_templateObject6());
var GalleryListItem = styled_components_browser_esm["a" /* default */].li(_templateObject7());
var Figure = styled_components_browser_esm["a" /* default */].figure(_templateObject8());
var Image = styled_components_browser_esm["a" /* default */].img(_templateObject9());
var Caption = styled_components_browser_esm["a" /* default */].figcaption(_templateObject10());
var whirl_es_ImageContent = function ImageContent(_ref) {
  var imgSrc = _ref.imgSrc,
      caption = _ref.caption,
      description = _ref.description,
      descriptionId = _ref.descriptionId,
      _ref$showCaption = _ref.showCaption,
      showCaption = _ref$showCaption === void 0 ? false : _ref$showCaption;
  return react_default.a.createElement(GalleryListItem, null, react_default.a.createElement(Figure, null, react_default.a.createElement(Image, {
    src: imgSrc,
    "aria-describedby": descriptionId,
    alt: caption
  }), react_default.a.createElement(Caption, null, showCaption && {
    caption: caption
  }, react_default.a.createElement(Definition, {
    id: descriptionId
  }, description))));
};

var whirl_es_Previous = function Previous(onPrevious) {
  return react_default.a.createElement("button", {
    id: "previous",
    "aria-label": "previous",
    onClick: onPrevious,
    style: {
      padding: BUTTON_PADDING,
      marginLeft: BUTTON_PADDING,
      marginRight: BUTTON_PADDING
    }
  }, "Previous");
};

var whirl_es_Next = function Next(onNext) {
  return react_default.a.createElement("button", {
    id: "next",
    "aria-label": "next",
    onClick: onNext,
    style: {
      padding: BUTTON_PADDING,
      marginLeft: BUTTON_PADDING,
      marginRight: BUTTON_PADDING
    }
  }, "Next");
};

var ControlsList = styled_components_browser_esm["a" /* default */].ul(_templateObject11(), function (props) {
  return props.width;
}, function (props) {
  return props.height;
}, BUTTON_PADDING * 2);
var whirl_es_Controls = function Controls(_ref2) {
  var onNext = _ref2.onNext,
      onPrevious = _ref2.onPrevious,
      previous = _ref2.previous,
      next = _ref2.next,
      width = _ref2.width,
      height = _ref2.height,
      style = _ref2.style;
  return react_default.a.createElement(ControlsList, {
    width: width,
    height: height,
    style: style
  }, react_default.a.createElement("li", null, previous(onPrevious)), react_default.a.createElement("li", null, next(onNext)));
};
var stretchInstructionStyles = {
  position: "absolute",
  bottom: 0,
  width: "100%"
};
var whirl_es_Whirl =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Whirl, _React$Component);

  function Whirl() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Whirl);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Whirl)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      slideIndex: 0
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "element", react_default.a.createRef());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onResize", function () {
      // we want to reset the timer everytime resize happens so we're not changing slides while resizing
      _this.resetTimer();

      _this.gotoSlideByIndex(_this.state.slideIndex);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "resetTimer", function () {
      _this.removeTimer();

      _this.setupTimer();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleKeydown", function (e) {
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        e.preventDefault();
      }

      if (e.key === "ArrowLeft") {
        _this.onPrevious();
      }

      if (e.key === "ArrowRight") {
        _this.onNext();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setupTimer", function () {
      _this.timer = window.setInterval(function () {
        _this.onNext();
      }, _this.props.scrollTimer);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "removeTimer", function () {
      window.clearInterval(_this.timer);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getScrollWidth", function () {
      if (!_this.element.current) {
        return 0;
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getSlideWidth", function () {
      if (!_this.element.current) {
        return;
      }

      var totalWidth = _this.element.current.scrollWidth;
      var items = _this.props.children.length;
      return totalWidth / items;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "gotoSlideByIndex", function (index) {
      var slideWidth = _this.getSlideWidth();

      _this.element.current.scroll(index * slideWidth, 0);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getCurrentIndex", function () {
      if (!_this.element.current) {
        return;
      }

      var slideWidth = _this.getSlideWidth();

      var scrollPosition = _this.element.current.scrollLeft;
      return Math.round(scrollPosition / slideWidth);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onNext", function () {
      var index = _this.getCurrentIndex();

      var total = _this.props.children.length; // if on the last slide go to the first -- otherwise goto next

      _this.setState({
        slideIndex: total - 1 === index ? 0 : index + 1
      });

      _this.resetTimer();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onPrevious", function () {
      var index = _this.getCurrentIndex();

      var total = _this.props.children.length; // if on the first slide go to the last -- otherwise goto previous

      _this.setState({
        slideIndex: index === 0 ? total - 1 : index - 1
      });

      _this.resetTimer();
    });

    return _this;
  }

  _createClass(Whirl, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.autoScroll) {
        this.setupTimer();
      }

      this.element.current.addEventListener("keydown", this.handleKeydown);
      window.addEventListener("resize", this.onResize);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.element.current.removeEventListener("keydown", this.handleKeydown);
      window.removeEventListener("resize", this.onResize);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(previousProps, previousState) {
      if (previousState.slideIndex !== this.state.slideIndex) {
        this.gotoSlideByIndex(this.state.slideIndex);
      }

      if (previousProps.autoScroll !== this.props.autoScroll || previousProps.scrollTimer !== this.props.scrollTimer) {
        this.resetTimer();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          slides = _this$props.children,
          width = _this$props.width,
          height = _this$props.height,
          label = _this$props.label,
          next = _this$props.next,
          previous = _this$props.previous,
          controlsStyle = _this$props.controlsStyle,
          stretch = _this$props.stretch;
      var Wrapper = stretch ? whirl_es_FixedAspectRatio : GalleryWrapper;
      return react_default.a.createElement(OverallWrapper, null, react_default.a.createElement(Wrapper, {
        width: width,
        height: height,
        stretch: stretch
      }, react_default.a.createElement(Gallery, {
        ref: this.element,
        role: "region",
        "aria-label": label,
        tabIndex: "0",
        "aria-describedby": "focus"
      }, react_default.a.createElement(GalleryList, null, slides)), react_default.a.createElement(Instructions, {
        style: stretch ? stretchInstructionStyles : {}
      }, react_default.a.createElement("p", {
        id: "hoverfocus"
      }, "Scroll or use arrow keys for more"), react_default.a.createElement("p", {
        id: "hover"
      }, "Scroll for more"), react_default.a.createElement("p", {
        id: "focus"
      }, "Use arrow keys for more"))), react_default.a.createElement(whirl_es_Controls, {
        onNext: this.onNext,
        onPrevious: this.onPrevious,
        previous: previous,
        next: next,
        width: stretch ? "100%" : width,
        style: controlsStyle
      }));
    }
  }]);

  return Whirl;
}(react_default.a.Component);

_defineProperty(whirl_es_Whirl, "defaultProps", {
  label: "Image gallery",
  next: whirl_es_Next,
  previous: whirl_es_Previous,
  autoScroll: false,
  scrollTimer: 5000,
  controlsStyle: null
});

_defineProperty(whirl_es_Whirl, "propTypes", {
  width: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number]).isRequired,
  height: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number]).isRequired,
  label: prop_types_default.a.string,
  next: prop_types_default.a.func,
  previous: prop_types_default.a.func,
  children: prop_types_default.a.oneOfType([prop_types_default.a.node, prop_types_default.a.arrayOf(prop_types_default.a.node)]),
  autoScroll: prop_types_default.a.bool,
  scrollTimer: prop_types_default.a.number,
  controlsStyle: prop_types_default.a.object
});



// EXTERNAL MODULE: ./src/utils/palette/index.js
var palette = __webpack_require__(169);

// EXTERNAL MODULE: ./src/components/carousel/slide1.jpg
var slide1 = __webpack_require__(243);
var slide1_default = /*#__PURE__*/__webpack_require__.n(slide1);

// EXTERNAL MODULE: ./src/components/carousel/slide2.jpg
var slide2 = __webpack_require__(244);
var slide2_default = /*#__PURE__*/__webpack_require__.n(slide2);

// EXTERNAL MODULE: ./src/components/carousel/slide3.jpg
var slide3 = __webpack_require__(245);
var slide3_default = /*#__PURE__*/__webpack_require__.n(slide3);

// EXTERNAL MODULE: ./src/components/carousel/slide4.jpg
var slide4 = __webpack_require__(246);
var slide4_default = /*#__PURE__*/__webpack_require__.n(slide4);

// EXTERNAL MODULE: ./src/components/carousel/slide5.jpg
var slide5 = __webpack_require__(247);
var slide5_default = /*#__PURE__*/__webpack_require__.n(slide5);

// EXTERNAL MODULE: ./src/components/carousel/slide6.jpg
var slide6 = __webpack_require__(248);
var slide6_default = /*#__PURE__*/__webpack_require__.n(slide6);

// EXTERNAL MODULE: ./src/components/carousel/slide7.jpg
var slide7 = __webpack_require__(249);
var slide7_default = /*#__PURE__*/__webpack_require__.n(slide7);

// EXTERNAL MODULE: ./src/components/carousel/slide8.jpg
var slide8 = __webpack_require__(250);
var slide8_default = /*#__PURE__*/__webpack_require__.n(slide8);

// EXTERNAL MODULE: ./src/components/carousel/slide9.jpg
var slide9 = __webpack_require__(251);
var slide9_default = /*#__PURE__*/__webpack_require__.n(slide9);

// EXTERNAL MODULE: ./src/components/carousel/slide10.jpg
var slide10 = __webpack_require__(252);
var slide10_default = /*#__PURE__*/__webpack_require__.n(slide10);

// EXTERNAL MODULE: ./src/components/carousel/slide11.jpg
var slide11 = __webpack_require__(253);
var slide11_default = /*#__PURE__*/__webpack_require__.n(slide11);

// CONCATENATED MODULE: ./src/components/carousel/Carousel.js

















var Carousel_Wrapper = styled_components_browser_esm["a" /* default */].div.withConfig({
  displayName: "Carousel__Wrapper",
  componentId: "lq8dhs-0"
})(["", " background-color:rgba(", ",.9);box-shadow:0 0 6.25rem rgba(", ",100);color:", ";padding:1rem;position:relative;display:flex;flex-direction:column;align-items:center;"], Text["b" /* textCss */], palette["a" /* default */].rgbContentBackground, palette["a" /* default */].rgbContentBackground, palette["a" /* default */].white);
var Button = styled_components_browser_esm["a" /* default */].button.withConfig({
  displayName: "Carousel__Button",
  componentId: "lq8dhs-1"
})(["background-color:", ";color:#fff;font-size:30px;font-weight:bold;height:48px;width:48px;display:flex;flex-direction:row;justify-content:center;align-items:center;"], palette["a" /* default */].contentBackground);

var Carousel_Next = function Next(onNext) {
  return react_default.a.createElement(Button, {
    onClick: onNext
  }, "\u27E9");
};

var Carousel_Previous = function Previous(onPrevious) {
  return react_default.a.createElement(Button, {
    onClick: onPrevious
  }, "\u27E8");
};

var Carousel_default =
/*#__PURE__*/
function (_React$Component) {
  inheritsLoose_default()(_default, _React$Component);

  function _default() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      mounted: false
    };
    return _this;
  }

  var _proto = _default.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.setState({
      mounted: true
    });
  };

  _proto.render = function render() {
    return react_default.a.createElement(Carousel_Wrapper, null, react_default.a.createElement(whirl_es_Whirl, {
      controlsStyle: {
        top: "50%",
        marginLeft: "-25px",
        width: "calc(100% + 50px)"
      },
      next: Carousel_Next,
      previous: Carousel_Previous,
      stretch: true,
      width: "1024px",
      height: "576px"
    }, react_default.a.createElement(whirl_es_ImageContent, {
      imgSrc: slide1_default.a,
      caption: "First image",
      description: "First slide"
    }), react_default.a.createElement(whirl_es_ImageContent, {
      imgSrc: slide2_default.a,
      caption: "Second image",
      description: "Second slide"
    }), react_default.a.createElement(whirl_es_ImageContent, {
      imgSrc: slide3_default.a,
      caption: "Third image",
      description: "Third slide"
    }), react_default.a.createElement(whirl_es_ImageContent, {
      imgSrc: slide4_default.a,
      caption: "Fourth image",
      description: "Fourth slide"
    }), react_default.a.createElement(whirl_es_ImageContent, {
      imgSrc: slide5_default.a,
      caption: "Fifth image",
      description: "Fifth slide"
    }), react_default.a.createElement(whirl_es_ImageContent, {
      imgSrc: slide6_default.a,
      caption: "Sixth image",
      description: "Sixth slide"
    }), react_default.a.createElement(whirl_es_ImageContent, {
      imgSrc: slide7_default.a,
      caption: "Seventh image",
      description: "Seventh slide"
    }), react_default.a.createElement(whirl_es_ImageContent, {
      imgSrc: slide8_default.a,
      caption: "Eighth image",
      description: "Eighth slide"
    }), react_default.a.createElement(whirl_es_ImageContent, {
      imgSrc: slide9_default.a,
      caption: "Ninth image",
      description: "Ninth slide"
    }), react_default.a.createElement(whirl_es_ImageContent, {
      imgSrc: slide10_default.a,
      caption: "Tenth image",
      description: "Tenth slide"
    }), react_default.a.createElement(whirl_es_ImageContent, {
      imgSrc: slide11_default.a,
      caption: "Eleventh image",
      description: "Eleventh slide"
    })), this.props.children);
  };

  return _default;
}(react_default.a.Component);

Carousel_default.defaultProps = {
  width: 1024,
  height: 576
};

// CONCATENATED MODULE: ./src/components/carousel/index.js

// EXTERNAL MODULE: ./src/components/breakpoints/index.js + 1 modules
var breakpoints = __webpack_require__(192);

// EXTERNAL MODULE: ./src/constants/index.js
var constants = __webpack_require__(171);

// EXTERNAL MODULE: ./src/styles/global.css
var global = __webpack_require__(190);

// EXTERNAL MODULE: ./src/components/secondaryNavigation/index.js + 1 modules
var secondaryNavigation = __webpack_require__(193);

// CONCATENATED MODULE: ./src/pages/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pages_Pages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });








 // eslint-disable-next-line




 // eslint-disable-next-line



var StyledLinkButton = Object(styled_components_browser_esm["a" /* default */])(secondaryNavigation["a" /* Link */]).withConfig({
  displayName: "pages__StyledLinkButton",
  componentId: "ifild7-0"
})(["", " z-index:10;"], secondaryNavigation["b" /* LinkBackground */]);
var LinkRow = styled_components_browser_esm["a" /* default */].div.withConfig({
  displayName: "pages__LinkRow",
  componentId: "ifild7-1"
})(["margin-top:2rem;display:flex;flex-direction:row;justify-content:space-around;width:1024px;@media (max-width:", "px){width:80%;flex-direction:column;& a{margin-bottom:1em;}}"], constants["f" /* TABLET_LANDSCAPE_WIDTH */]);
var SecondaryHeading = styled_components_browser_esm["a" /* default */].h2.withConfig({
  displayName: "pages__SecondaryHeading",
  componentId: "ifild7-2"
})(["", " color:", ";margin:1rem 0 0 0;background-opacity:.9;"], Text["b" /* textCss */], palette["a" /* default */].white);
var ContentWrapper = styled_components_browser_esm["a" /* default */].div.withConfig({
  displayName: "pages__ContentWrapper",
  componentId: "ifild7-3"
})(["display:flex;flex-direction:column;justify-content:flex-start;align-items:center;flex-grow:1;"]);
var LinkText = Object(styled_components_browser_esm["a" /* default */])(Text["a" /* default */]).withConfig({
  displayName: "pages__LinkText",
  componentId: "ifild7-4"
})(["font-size:1.5rem;"]); // eslint-disable-next-line

var pages_getSlideshowDimensions = function getSlideshowDimensions(breakpoint) {
  if (breakpoints["b" /* breakpoints */][breakpoint] > breakpoints["b" /* breakpoints */][breakpoints["a" /* breakpointNames */].tablet]) {
    return {
      width: 1024,
      height: 576
    };
  }

  if (breakpoints["b" /* breakpoints */][breakpoint] > breakpoints["b" /* breakpoints */][breakpoints["a" /* breakpointNames */].mobile]) {
    return {
      width: 682,
      height: 384
    };
  }

  return {
    width: 341,
    height: 192
  };
};

var pages_Pages =
/*#__PURE__*/
function (_Component) {
  inheritsLoose_default()(Pages, _Component);

  function Pages() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Pages.prototype;

  _proto.render = function render() {
    return react_default.a.createElement(breakpoints["c" /* default */], null, react_default.a.createElement(siteContainer["a" /* default */], Object.assign({}, this.props, {
      showBreadcrumbs: false
    }), react_default.a.createElement(Helmet["Helmet"], null, react_default.a.createElement("meta", {
      charSet: "utf-8"
    }), react_default.a.createElement("title", null, "Developing Writers")), react_default.a.createElement(ContentWrapper, null, react_default.a.createElement(react["Fragment"], null, react_default.a.createElement(Carousel_default, null, react_default.a.createElement(SecondaryHeading, null, "Welcome! Start here to find out what 169 students can tell you about writing.")), react_default.a.createElement(LinkRow, null, react_default.a.createElement(StyledLinkButton, {
      to: "/pages/writing-involves-choices"
    }, react_default.a.createElement(LinkText, null, "Writing involves choices")), react_default.a.createElement(StyledLinkButton, {
      to: "/pages/writing-is-social"
    }, react_default.a.createElement(LinkText, null, "Writing is social")))))));
  };

  return Pages;
}(react["Component"]);


var query = "993696026";

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/slide1-46f6ece3c9f2431108dec8c2dfcdedd3.jpg";

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/slide2-8d8875b6a04312e82d64dacf7578a761.jpg";

/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/slide3-70490c959127f617e52fc7f820a34891.jpg";

/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/slide4-5c33ae7416b6cf6f8945864cc109688b.jpg";

/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/slide5-04ab3bbe21ed9fe546663277a468fa0b.jpg";

/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/slide6-ce4395bf3ddec19f770204ff458917eb.jpg";

/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/slide7-c6522f5c61c8453b14430d4824aed7fe.jpg";

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/slide8-e64019b50b7285fbcdc4634ec9166082.jpg";

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/slide9-0379e00d6b0520a5a001bea4eb641324.jpg";

/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/slide10-e4e727fb4868bc05f8b452942567f1f2.jpg";

/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/slide11-a9a26d68fa00f8adcf777c2f0c84e5ff.jpg";

/***/ })

}]);
//# sourceMappingURL=component---src-pages-index-js-6df715274745ba3123d7.js.map