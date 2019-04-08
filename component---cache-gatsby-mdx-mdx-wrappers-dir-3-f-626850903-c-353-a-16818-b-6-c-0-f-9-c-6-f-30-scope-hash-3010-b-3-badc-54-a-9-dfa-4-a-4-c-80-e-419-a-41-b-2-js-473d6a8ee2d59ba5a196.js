(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread.js
var objectSpread = __webpack_require__(14);
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(167);
var objectWithoutPropertiesLoose_default = /*#__PURE__*/__webpack_require__.n(objectWithoutPropertiesLoose);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/gatsby-mdx/context.js
var context = __webpack_require__(182);

// EXTERNAL MODULE: ./node_modules/@mdx-js/tag/dist/index.js
var dist = __webpack_require__(169);

// CONCATENATED MODULE: ./.cache/gatsby-mdx/mdx-scopes-dir/3010b3badc54a9dfa4a4c80e419a41b2.js


/* harmony default export */ var _3010b3badc54a9dfa4a4c80e419a41b2 = ({
  React: react_default.a,
  MDXTag: dist["MDXTag"]
});
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__(56);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.map.js
var es6_array_map = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inheritsLoose.js
var inheritsLoose = __webpack_require__(7);
var inheritsLoose_default = /*#__PURE__*/__webpack_require__.n(inheritsLoose);

// EXTERNAL MODULE: ./node_modules/gatsby-mdx/mdx-renderer.js
var mdx_renderer = __webpack_require__(200);

// EXTERNAL MODULE: ./node_modules/react-helmet/lib/Helmet.js
var Helmet = __webpack_require__(187);

// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(171);

// EXTERNAL MODULE: ./src/utils/palette/index.js
var palette = __webpack_require__(172);

// EXTERNAL MODULE: ./src/components/text/Text.js
var Text = __webpack_require__(173);

// EXTERNAL MODULE: ./src/constants/index.js
var constants = __webpack_require__(174);

// CONCATENATED MODULE: ./src/components/contentArea/ContentArea.js






var ContentWrapper = styled_components_browser_esm["a" /* default */].main.withConfig({
  displayName: "ContentArea__ContentWrapper",
  componentId: "y7q6wg-0"
})(["", " background-color:rgba(", ",.9);box-shadow:0 0 6.25rem rgba(", ",100);color:", ";padding:0 2rem;max-width:50vw;position:relative;top:2.5vh;align-self:center;& h2{font-size:2rem;font-weight:800;margin-bottom:.75rem;}& p,li{margin:1.5rem .75rem;}@media (max-width:", "px){max-width:95vw;width:95vw;padding:0 .5rem;margin:0 .5rem 0 .5rem;}"], Text["b" /* textCss */], palette["a" /* default */].rgbContentBackground, palette["a" /* default */].rgbContentBackground, palette["a" /* default */].white, constants["f" /* TABLET_LANDSCAPE_WIDTH */]);

var ContentArea_default =
/*#__PURE__*/
function (_React$Component) {
  inheritsLoose_default()(_default, _React$Component);

  function _default() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = _default.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        style = _this$props.style;
    return react_default.a.createElement(ContentWrapper, {
      style: style
    }, children);
  };

  return _default;
}(react_default.a.Component);


// CONCATENATED MODULE: ./src/components/contentArea/index.js

// EXTERNAL MODULE: ./src/components/secondaryNavigation/index.js + 1 modules
var secondaryNavigation = __webpack_require__(196);

// EXTERNAL MODULE: ./src/components/siteContainer/index.js + 12 modules
var siteContainer = __webpack_require__(195);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/marksy/components.js
var components = __webpack_require__(227);
var components_default = /*#__PURE__*/__webpack_require__.n(components);

// CONCATENATED MODULE: ./src/components/touchableOpacity/TouchableOpacity.js

var Button = styled_components_browser_esm["a" /* default */].button.withConfig({
  displayName: "TouchableOpacity__Button",
  componentId: "sc-1cyiyik-0"
})(["background:none;border:none;padding:0;margin:0;outline:none;transition:transform 200ms,opacity:200ms;opacity:1;transform:scale(1,1);&:active{transform:scale(0.98,0.98);opacity:.8;}"]);
/* harmony default export */ var TouchableOpacity = (Button);
// CONCATENATED MODULE: ./src/components/touchableOpacity/index.js

// CONCATENATED MODULE: ./src/components/expandableBlockquote/ExpandableBlockquote.js






var ExpandableBlockquote_ExpandableBlockquote =
/*#__PURE__*/
function (_Component) {
  inheritsLoose_default()(ExpandableBlockquote, _Component);

  function ExpandableBlockquote(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this.toggleExpanded = function (e) {
      e.preventDefault();

      _this.setState({
        expanded: !_this.state.expanded
      });
    };

    _this.state = {
      expanded: false
    };
    return _this;
  }

  var _proto = ExpandableBlockquote.prototype;

  _proto.render = function render() {
    var opacityStyle = {
      color: palette["a" /* default */].white,
      cursor: 'pointer'
    };
    return this.state.expanded ? react_default.a.createElement("blockquote", null, react_default.a.createElement(markdown_Markdown, null, unescape(this.props.fullText)), "\xA0", react_default.a.createElement(TouchableOpacity, {
      style: opacityStyle,
      onClick: this.toggleExpanded
    }, "[Less]")) : react_default.a.createElement("blockquote", null, unescape(this.props.previewText), "\xA0", react_default.a.createElement(TouchableOpacity, {
      style: opacityStyle,
      onClick: this.toggleExpanded
    }, "[More]"));
  };

  return ExpandableBlockquote;
}(react["Component"]);


// CONCATENATED MODULE: ./src/components/expandableBlockquote/index.js

// CONCATENATED MODULE: ./src/components/fulcrum/FulcrumTextAudio.js



var FulcrumTextAudio_FulcrumTextAudio =
/*#__PURE__*/
function (_Component) {
  inheritsLoose_default()(FulcrumTextAudio, _Component);

  function FulcrumTextAudio() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = FulcrumTextAudio.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        blockType = _this$props.blockType,
        handle = _this$props.handle,
        title = _this$props.title;
    return react_default.a.createElement("iframe", {
      "data-block-type": blockType,
      src: "https://www.fulcrum.org/embed?hdl=" + handle,
      title: escape(title),
      style: {
        display: "block",
        overflow: "hidden",
        borderWidth: 0,
        width: "98%",
        maxWidth: "98%",
        maxHeight: 400,
        margin: "auto"
      }
    });
  };

  return FulcrumTextAudio;
}(react["Component"]);


// CONCATENATED MODULE: ./src/components/fulcrum/FulcrumImageVideo.js



var FulcrumImageVideo_FulcrumImageVideo =
/*#__PURE__*/
function (_Component) {
  inheritsLoose_default()(FulcrumImageVideo, _Component);

  function FulcrumImageVideo() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = FulcrumImageVideo.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        blockType = _this$props.blockType,
        handle = _this$props.handle,
        title = _this$props.title,
        width = _this$props.width;
    return react_default.a.createElement("div", {
      "data-block-type": blockType,
      style: {
        width: "auto",
        pageBreakInside: "avoid",
        maxWidth: width,
        margin: "auto"
      }
    }, react_default.a.createElement("div", {
      style: {
        overflow: "hidden",
        paddingBottom: "56.25%",
        position: "relative",
        height: 0
      }
    }, react_default.a.createElement("iframe", {
      src: "https://www.fulcrum.org/embed?hdl=" + handle,
      title: "" + escape(title),
      style: {
        overflow: "hidden",
        borderWidth: 0,
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        position: "absolute"
      }
    })));
  };

  return FulcrumImageVideo;
}(react["Component"]);


// CONCATENATED MODULE: ./src/components/fulcrum/index.js


// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__(179);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__(57);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.link.js
var es6_string_link = __webpack_require__(191);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__(180);

// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 113 modules
var formik_esm = __webpack_require__(258);

// EXTERNAL MODULE: ./node_modules/react-aria-live/es/index.js + 7 modules
var es = __webpack_require__(260);

// EXTERNAL MODULE: ./node_modules/react-tabs/esm/index.js + 10 modules
var esm = __webpack_require__(259);

// EXTERNAL MODULE: ./node_modules/react-tabs/style/react-tabs.css
var react_tabs = __webpack_require__(240);

// CONCATENATED MODULE: ./src/components/feedbackGame/FeedbackGame.js

























var Fieldset = styled_components_browser_esm["a" /* default */].fieldset.withConfig({
  displayName: "FeedbackGame__Fieldset",
  componentId: "sdhzov-0"
})(["", " border:none;border-left:0.75rem solid #ccc;margin-bottom:2rem;color:", ";"], Text["b" /* textCss */], palette["a" /* default */].black);
var Legend = styled_components_browser_esm["a" /* default */].label.withConfig({
  displayName: "FeedbackGame__Legend",
  componentId: "sdhzov-1"
})(["", ";margin:1.5em 0;padding:0.5em 10px;line-height:2rem;font-size:1;&:before,&:after{color:#ccc;content:'\"'; font-size: 4em; line-height: 0.1em; margin-right: 0.25em; vertical-align: -0.4em; }"], Text["b" /* textCss */]);
var Strong = styled_components_browser_esm["a" /* default */].p.withConfig({
  displayName: "FeedbackGame__Strong",
  componentId: "sdhzov-2"
})(["", ";font-weight:bold;margin:1rem 0 1rem 1rem;color:", ";"], Text["b" /* textCss */], palette["a" /* default */].black);
var TopLink = styled_components_browser_esm["a" /* default */].a.withConfig({
  displayName: "FeedbackGame__TopLink",
  componentId: "sdhzov-3"
})(["", " display:inline-block;color:#555;margin:1rem 0 1rem 1rem;font-size:1.5rem;color:", ";"], Text["b" /* textCss */], palette["a" /* default */].black);
var GameBackground = styled_components_browser_esm["a" /* default */].div.withConfig({
  displayName: "FeedbackGame__GameBackground",
  componentId: "sdhzov-4"
})(["background-color:", ";"], palette["a" /* default */].gameBackground);
var Row = styled_components_browser_esm["a" /* default */].div.withConfig({
  displayName: "FeedbackGame__Row",
  componentId: "sdhzov-5"
})(["min-height:4rem;margin-bottom:1rem;display:flex;flex-direction:row;justify-content:center;align-items:center;@media (max-width:", "px){display:column;}"], constants["f" /* TABLET_LANDSCAPE_WIDTH */]);
var Centered = Object(styled_components_browser_esm["a" /* default */])(Row).withConfig({
  displayName: "FeedbackGame__Centered",
  componentId: "sdhzov-6"
})(["min-height:0;display:flex;justify-content:center;"]);
var ErrorRow = Object(styled_components_browser_esm["a" /* default */])(Row).withConfig({
  displayName: "FeedbackGame__ErrorRow",
  componentId: "sdhzov-7"
})(["background-color:", ";border:1px solid ", ";width:50%;justify-content:flex-start;padding-left:2rem;margin-top:2rem;"], palette["a" /* default */].redBackground, palette["a" /* default */].red);
var SuccessRow = Object(styled_components_browser_esm["a" /* default */])(Row).withConfig({
  displayName: "FeedbackGame__SuccessRow",
  componentId: "sdhzov-8"
})(["", " background-color:", ";border:1px solid ", ";width:50%;flex-direction:column;justify-content:flex-start;padding-left:2rem;a{align-self:flex-start;color:rgba(", ",.9);}"], Text["b" /* textCss */], palette["a" /* default */].success, palette["a" /* default */].successBorder, palette["a" /* default */].rgbBlack);
var responses = {
  criticalAcceptance: {
    key: "CriticalAcceptance",
    label: "Critical Acceptance"
  },
  criticalResistance: {
    key: "CriticalResistance",
    label: "Critical Resistance"
  },
  uncriticalResistance: {
    key: "UncriticalResistance",
    label: "Uncritical Resistance"
  },
  uncriticalAcceptance: {
    key: "UncriticalAcceptance",
    label: "Uncritical Acceptance"
  }
};

function buildGameStep(quote, correctResponse, correctOutput, linkText, link, topLinkText) {
  return {
    quote: quote,
    correctResponse: correctResponse,
    correctOutput: correctOutput,
    linkText: linkText,
    link: link,
    topLinkText: topLinkText
  };
}

var gameSteps = [buildGameStep("I met with my professor, and she pushed me to reorganize my entire essay—completely switch up the structure. I had never done that. I felt like I was pouring my essay into a food processor and dumping the chopped up bits onto a new page, trying earnestly to make sense of it all. I pulled sentences from different paragraphs, combining them into new paragraphs and writing new transitions to glue that mess of an essay together… I wrote her these words in my reflection letter upon turning in the essay: You advised me to organize my essay source by source, and although I wasn’t entirely sold, you explained it well and it made sense to me… Although I was initially resistant to rearranging my essay, pushing myself to try something completely different really strengthened my writing. It was the struggle that made me realize I could step out—or be forced out—of my comfort zone and be successful.", responses.criticalAcceptance.key, "Jenna listens to her instructor and tries out a new idea based on her instructor’s explanation. Jenna sees that the advice helps her reach her writing goal. This is critical acceptance.", "If you’d like to see more of Jenna’s Gateway Eportfolio, click here.", "https://doi.org/10.3998/mpub.10079890.cmp.310", "From Jenna's Gateway Eportfolio"), buildGameStep("She [instructor] had problems with them [my papers] in the beginning, and then we had a meeting. She told me what she thought could be improved, and then I just followed those instructions. She liked them a lot better. I think it was probably just like the order of paragraphs and unnecessary quotes that I could take out.", responses.uncriticalAcceptance.key, "Dariella listens to her instructor and adopts her advice without question. This is uncritical acceptance.", "If you’d like to see the more of the interview transcript with Dariella, click here", "https://doi.org/10.3998/mpub.10079890.cmp.130", "From Dariella's interview transcript"), buildGameStep("You’re not giving me the feedback I want, because you’re telling about adding onto this. I’m telling you, no, I don’t want to do that. I plan to do this... That’s not to say I didn’t take their feedback, or didn’t ever use it, because they’re brilliant writers. That’s why we’re here, so, yeah.", responses.criticalResistance.key, "Dan listens to his classmates and thinks that this specific feedback doesn’t help him reach his own writing goals. This doesn’t mean that all the advice he gets from peers is unhelpful, though. This is critical resistance.", "If you’d like to see more of the interview transcript with Dan, click here", "https://doi.org/10.3998/mpub.10079890.cmp.44", "From Dan's interview transcript"), buildGameStep("Get rid of the peer reviews—because I hate those. I’d rather [the instructor] take a class day to just sit in their office and we can go in there individually and talk with the teachers, than have our peers look at it.", responses.uncriticalResistance.key, "Katie has decided that her peers have nothing useful to offer her, and so has decided that peer feedback is not useful. Although her decision is likely to be based in experience, she has ruled out different experiences she might have. This is uncritical resistance.", "If you’d like to see more of the interview transcript with Katie, click here", "https://doi.org/10.3998/mpub.10079890.cmp.44", "From Katie's interview transcript")];
var RadioWrapper = styled_components_browser_esm["a" /* default */].div.withConfig({
  displayName: "FeedbackGame__RadioWrapper",
  componentId: "sdhzov-9"
})(["display:inline-block;margin-right:10px;margin-top:30px;& input[type=\"radio\"]{display:none;}& input[type=\"radio\"] + label{background-color:", ";padding:20px;border-radius:40px;border:1px solid #ddd;}& input[type=\"radio\"] + label:hover{border:1px solid ", ";}& input[type=\"radio\"]:checked + label{color:", ";background-color:", ";}"], palette["a" /* default */].white, palette["a" /* default */].contentBackground, palette["a" /* default */].white, palette["a" /* default */].relatedBackground);

var FeedbackGame_RadioButton = function RadioButton(_ref) {
  var _ref$field = _ref.field,
      name = _ref$field.name,
      value = _ref$field.value,
      _onChange = _ref$field.onChange,
      _onBlur = _ref$field.onBlur,
      handleSubmit = _ref$field.handleSubmit,
      id = _ref.id,
      label = _ref.label,
      className = _ref.className,
      onUpdateValue = _ref.onUpdateValue,
      props = objectWithoutPropertiesLoose_default()(_ref, ["field", "id", "label", "className", "onUpdateValue"]);

  return react_default.a.createElement(RadioWrapper, null, react_default.a.createElement("input", Object.assign({
    name: name,
    id: id,
    type: "radio",
    value: id,
    checked: id === value,
    tabIndex: 0,
    onChange: function onChange(params) {
      _onChange(params);

      onUpdateValue();
    },
    onBlur: function onBlur(params) {
      _onBlur(params);

      onUpdateValue(props);
    }
  }, props)), react_default.a.createElement("label", {
    htmlFor: id
  }, label));
};

var InputFeedback = styled_components_browser_esm["a" /* default */].span.withConfig({
  displayName: "FeedbackGame__InputFeedback",
  componentId: "sdhzov-10"
})(["color:", ";"], palette["a" /* default */].red);

var FeedbackGame_RadioButtonGroup = function RadioButtonGroup(_ref2) {
  var value = _ref2.value,
      error = _ref2.error,
      touched = _ref2.touched,
      id = _ref2.id,
      label = _ref2.label,
      className = _ref2.className,
      children = _ref2.children;
  return react_default.a.createElement(Fieldset, null, react_default.a.createElement(Legend, null, label), children, react_default.a.createElement(Centered, {
    style: {
      display: error ? "flex" : "none",
      visibility: error ? "visible" : "none"
    }
  }, react_default.a.createElement(ErrorRow, {
    style: {
      display: error ? "flex" : "none",
      visibility: error ? "visible" : "none"
    }
  }, react_default.a.createElement(InputFeedback, null, error))));
};

var FeedbackGame_GameStepButtons =
/*#__PURE__*/
function (_Component) {
  inheritsLoose_default()(GameStepButtons, _Component);

  function GameStepButtons() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      showAnswer: false
    };
    return _this;
  }

  var _proto = GameStepButtons.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        quote = _this$props.quote,
        correctOutput = _this$props.correctOutput,
        correctResponse = _this$props.correctResponse,
        link = _this$props.link,
        linkText = _this$props.linkText,
        topLinkText = _this$props.topLinkText;
    return react_default.a.createElement(react["Fragment"], null, react_default.a.createElement(TopLink, {
      href: link,
      target: "_blank",
      rel: "nofollow"
    }, topLinkText, ":"), react_default.a.createElement(Strong, null, "Which of the responses does the following quote represent?"), react_default.a.createElement(es["a" /* LiveAnnouncer */], null, react_default.a.createElement(es["b" /* LiveMessenger */], null, function (_ref3) {
      var announcePolite = _ref3.announcePolite,
          announceAssertive = _ref3.announceAssertive;
      return react_default.a.createElement(formik_esm["c" /* Formik */], {
        initialValues: {
          result: ""
        },
        validate: function validate(values) {
          var errors = {};

          if (values.result !== correctResponse) {
            var errorMessage = "Sorry this is not correct! Try again";
            announcePolite(errorMessage);
            errors.result = errorMessage;
          }

          return errors;
        },
        onSubmit: function onSubmit(values) {
          announcePolite(correctOutput);

          _this2.setState({
            showAnswer: true
          });
        }
      }, function (_ref4) {
        var values = _ref4.values,
            errors = _ref4.errors,
            touched = _ref4.touched,
            handleChange = _ref4.handleChange,
            handleBlur = _ref4.handleBlur,
            handleSubmit = _ref4.handleSubmit,
            isSubmitting = _ref4.isSubmitting,
            submitForm = _ref4.submitForm;
        return react_default.a.createElement(react["Fragment"], null, react_default.a.createElement(formik_esm["b" /* Form */], {
          onSubmit: handleSubmit
        }, react_default.a.createElement(FeedbackGame_RadioButtonGroup, {
          id: "radio-" + quote,
          label: quote,
          value: values.result,
          error: errors.result,
          touched: touched.result
        }, react_default.a.createElement(Row, null, Object.keys(responses).map(function (k, index) {
          return react_default.a.createElement(formik_esm["a" /* Field */], {
            key: index,
            component: FeedbackGame_RadioButton,
            name: "result",
            id: responses[k].key,
            label: responses[k].label,
            onUpdateValue: function onUpdateValue(props) {
              setTimeout(submitForm, 100);
            }
          });
        })))), react_default.a.createElement(Centered, null, react_default.a.createElement(SuccessRow, {
          style: {
            display: _this2.state.showAnswer && !errors.result ? "flex" : "none"
          }
        }, react_default.a.createElement("p", null, correctOutput), react_default.a.createElement("p", null, react_default.a.createElement("a", {
          href: link,
          target: "_blank",
          rel: "nofollow noopener noreferrer"
        }, linkText)))));
      });
    })));
  };

  return GameStepButtons;
}(react["Component"]);

var FeedbackGame_FeedbackGame =
/*#__PURE__*/
function (_Component2) {
  inheritsLoose_default()(FeedbackGame, _Component2);

  function FeedbackGame() {
    return _Component2.apply(this, arguments) || this;
  }

  var _proto2 = FeedbackGame.prototype;

  _proto2.render = function render() {
    return react_default.a.createElement(GameBackground, null, react_default.a.createElement("h1", {
      style: {
        color: palette["a" /* default */].black
      }
    }, "Feedback Game"), react_default.a.createElement(esm["d" /* Tabs */], null, react_default.a.createElement(esm["b" /* TabList */], null, gameSteps.map(function (item, index) {
      return react_default.a.createElement(esm["a" /* Tab */], {
        style: {
          color: palette["a" /* default */].black
        },
        key: index
      }, "Question ", index + 1);
    })), gameSteps.map(function (step, index) {
      return react_default.a.createElement(esm["c" /* TabPanel */], {
        key: index
      }, react_default.a.createElement(FeedbackGame_GameStepButtons, Object.assign({
        key: index
      }, step)));
    })));
  };

  return FeedbackGame;
}(react["Component"]);


// CONCATENATED MODULE: ./src/components/feedbackGame/index.js

// CONCATENATED MODULE: ./src/components/games/Game1.js




var Game1_PieChart =
/*#__PURE__*/
function (_Component) {
  inheritsLoose_default()(PieChart, _Component);

  function PieChart() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = PieChart.prototype;

  _proto.render = function render() {
    return react_default.a.createElement(FeedbackGame_FeedbackGame, null);
  };

  return PieChart;
}(react["Component"]);


// CONCATENATED MODULE: ./src/components/games/Game2.js



var Game2_Game2 =
/*#__PURE__*/
function (_Component) {
  inheritsLoose_default()(Game2, _Component);

  function Game2() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Game2.prototype;

  _proto.render = function render() {
    return react_default.a.createElement("span", null, "Game Two");
  };

  return Game2;
}(react["Component"]);


// CONCATENATED MODULE: ./src/components/games/PieChart.js



var PieChart_Game1 =
/*#__PURE__*/
function (_Component) {
  inheritsLoose_default()(Game1, _Component);

  function Game1() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Game1.prototype;

  _proto.render = function render() {
    return react_default.a.createElement("span", null, "Pie Chart");
  };

  return Game1;
}(react["Component"]);


// CONCATENATED MODULE: ./src/components/games/WordCloud.js



var WordCloud_WordCloud =
/*#__PURE__*/
function (_Component) {
  inheritsLoose_default()(WordCloud, _Component);

  function WordCloud() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = WordCloud.prototype;

  _proto.render = function render() {
    return react_default.a.createElement("span", null, "Word Cloud");
  };

  return WordCloud;
}(react["Component"]);


// CONCATENATED MODULE: ./src/components/games/index.js




// CONCATENATED MODULE: ./src/utils/escape/index.js
// import escapeRegExp from 'lodash.escaperegexp';
var escapeWithRegexp = function escapeWithRegexp(originalString) {
  return escape(originalString || '');
};
var unescapeWithRegexp = function unescapeWithRegexp(originalString) {
  return unescape(originalString || '');
}; //.replace(/\\(.)/g, ($0, $1) => $1) );
// CONCATENATED MODULE: ./src/components/aboutTheAuthor/AboutTheAuthor.js







var AboutTheAuthor_AboutTheAuthor =
/*#__PURE__*/
function (_Component) {
  inheritsLoose_default()(AboutTheAuthor, _Component);

  function AboutTheAuthor() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = AboutTheAuthor.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        headshot = _this$props.headshot,
        name = _this$props.name,
        bio = _this$props.bio,
        chapterDescription = _this$props.chapterDescription,
        interviewDescription = _this$props.interviewDescription;
    return react_default.a.createElement("div", {
      style: {
        paddingBottom: 30
      }
    }, react_default.a.createElement("img", {
      style: {
        float: "left",
        paddingRight: 10,
        width: 200
      },
      src: unescapeWithRegexp(headshot),
      alt: unescapeWithRegexp(name)
    }), react_default.a.createElement(markdown_Markdown, null, unescapeWithRegexp(bio)), react_default.a.createElement(markdown_Markdown, null, unescapeWithRegexp(chapterDescription)), react_default.a.createElement(markdown_Markdown, null, unescapeWithRegexp(interviewDescription)));
  };

  return AboutTheAuthor;
}(react["Component"]);


// CONCATENATED MODULE: ./src/components/aboutTheAuthor/index.js

// CONCATENATED MODULE: ./src/components/markdown/Markdown.js






var compile = components_default()({
  createElement: react_default.a.createElement,
  components: {
    ExpandableBlockquote: ExpandableBlockquote_ExpandableBlockquote,
    FulcrumImageVideo: FulcrumImageVideo_FulcrumImageVideo,
    FulcrumTextAudio: FulcrumTextAudio_FulcrumTextAudio,
    Game1: Game1_PieChart,
    Game2: Game2_Game2,
    PieChart: PieChart_Game1,
    WordCloud: WordCloud_WordCloud,
    AboutTheAuthor: AboutTheAuthor_AboutTheAuthor
  }
});

var Markdown = function Markdown(_ref) {
  var children = _ref.children;
  return children && compile(children).tree;
};

/* harmony default export */ var markdown_Markdown = (Markdown);
// CONCATENATED MODULE: ./src/components/markdown/index.js

// CONCATENATED MODULE: ./src/components/point/Point.js








var Container = styled_components_browser_esm["a" /* default */].div.withConfig({
  displayName: "Point__Container",
  componentId: "sc-1qrm1ud-0"
})(["margin:0.75rem 0;"]);
var ContentSection = styled_components_browser_esm["a" /* default */].div.withConfig({
  displayName: "Point__ContentSection",
  componentId: "sc-1qrm1ud-1"
})(["margin:0.75rem 0;"]);

var Point_default =
/*#__PURE__*/
function (_Component) {
  inheritsLoose_default()(_default, _Component);

  function _default() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = _default.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        points = _this$props.points,
        headerOffset = _this$props.headerOffset;
    return react_default.a.createElement(Container, null, points.map(function (point, index) {
      var slug = (point.title || '').toLowerCase().replace(/[^a-z\d\s]+$/g, "").replace(/ +/g, "-");
      return react_default.a.createElement(ContentSection, {
        key: slug
      }, react_default.a.createElement("div", {
        id: slug,
        style: {
          display: "block",
          position: "relative",
          top: -1 * headerOffset,
          visibility: "hidden"
        }
      }), react_default.a.createElement("h2", null, point.title), react_default.a.createElement(markdown_Markdown, null, point.point));
    }));
  };

  return _default;
}(react["Component"]);


// CONCATENATED MODULE: ./src/components/point/index.js

// CONCATENATED MODULE: ./src/components/relatedContent/RelatedContent.js








var RelatedContent_ContentWrapper = styled_components_browser_esm["a" /* default */].div.withConfig({
  displayName: "RelatedContent__ContentWrapper",
  componentId: "z6antt-0"
})(["", " background-color:rgba(", ",.9);box-shadow:0 0 6.5rem rgba(", ",100);color:", ";padding:1.5rem;max-height:80vh;width:50vw;margin:6rem 0;align-self:center;@media (max-width:", "px){padding:1rem;max-width:95vw;width:95vw;& h3,ul{padding:0 1rem;}}"], Text["b" /* textCss */], palette["a" /* default */].rgbRelatedBackground, palette["a" /* default */].rgbRelatedBackground, palette["a" /* default */].white, constants["f" /* TABLET_LANDSCAPE_WIDTH */]);
var Link = styled_components_browser_esm["a" /* default */].a.withConfig({
  displayName: "RelatedContent__Link",
  componentId: "z6antt-1"
})(["color:", ";"], palette["a" /* default */].white);
var Heading = styled_components_browser_esm["a" /* default */].h3.withConfig({
  displayName: "RelatedContent__Heading",
  componentId: "z6antt-2"
})(["color:", ";margin:0;font-size:1.5rem;font-weight:800;"], palette["a" /* default */].white);
var ListContainer = styled_components_browser_esm["a" /* default */].ul.withConfig({
  displayName: "RelatedContent__ListContainer",
  componentId: "z6antt-3"
})(["padding:0;margin-left:0.75rem;list-style-type:none;"]);
var ListItem = styled_components_browser_esm["a" /* default */].li.withConfig({
  displayName: "RelatedContent__ListItem",
  componentId: "z6antt-4"
})(["margin:1.5rem 0;"]);

var RelatedContent_default =
/*#__PURE__*/
function (_React$Component) {
  inheritsLoose_default()(_default, _React$Component);

  function _default() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = _default.prototype;

  _proto.render = function render() {
    var relatedLinks = this.props.relatedLinks;
    return react_default.a.createElement(RelatedContent_ContentWrapper, null, react_default.a.createElement(Heading, null, "Related Content"), react_default.a.createElement(ListContainer, null, relatedLinks.map(function (link) {
      return react_default.a.createElement(ListItem, {
        key: link.href
      }, react_default.a.createElement(Link, {
        href: link.href
      }, link.title));
    })));
  };

  return _default;
}(react_default.a.Component);


// CONCATENATED MODULE: ./src/components/relatedContent/index.js

// EXTERNAL MODULE: ./src/components/breakpoints/index.js + 1 modules
var breakpoints = __webpack_require__(198);

// EXTERNAL MODULE: ./src/styles/global.css
var global = __webpack_require__(194);

// EXTERNAL MODULE: ./src/components/visuallyHidden/index.js + 1 modules
var visuallyHidden = __webpack_require__(186);

// CONCATENATED MODULE: ./src/templates/content-pages.js




















 // eslint-disable-next-line




function mapLinkProperties(edges) {
  if (!edges) {
    return [];
  }

  var output = edges.map(function (edge) {
    return {
      title: edge.node.frontmatter.title,
      href: edge.node.fields.slug
    };
  });
  return output;
}

function shouldShowRelatedContent(data) {
  return data && data.siblingPages && data.siblingPages.edges && data.siblingPages.edges.length > 0 && shouldShowChildLinks(data) === false;
}

function mapSiblingContent(data) {
  if (!shouldShowRelatedContent(data)) {
    return null;
  }

  return data.siblingPages.edges.map(function (_ref) {
    var node = _ref.node;
    return {
      href: node.fields.slug,
      title: node.frontmatter.title
    };
  });
}

function shouldShowChildLinks(data) {
  return !!(data.childPages && data.childPages.edges.length > 0);
}

var content_pages_ContentPages =
/*#__PURE__*/
function (_Component) {
  inheritsLoose_default()(ContentPages, _Component);

  function ContentPages(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      headerOffset: 0
    };
    return _this;
  }

  var _proto = ContentPages.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.setState({
      headerOffset: this.siteContainer ? this.siteContainer.headingWrapper.clientHeight : 0
    });
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        title = _this$props.pageContext.title,
        data = _this$props.data;
    var contextComponents = {
      ExpandableBlockquote: ExpandableBlockquote_ExpandableBlockquote,
      FulcrumImageVideo: FulcrumImageVideo_FulcrumImageVideo,
      FulcrumTextAudio: FulcrumTextAudio_FulcrumTextAudio,
      Game1: Game1_PieChart,
      Game2: Game2_Game2,
      PieChart: PieChart_Game1,
      WordCloud: WordCloud_WordCloud,
      AboutTheAuthor: AboutTheAuthor_AboutTheAuthor
    };

    var newScope = objectSpread_default()({}, this.props.scope, contextComponents);

    var newProps = objectSpread_default()({}, objectSpread_default()({}, this.props, {
      scope: newScope
    }));

    return react_default.a.createElement(breakpoints["c" /* default */], null, react_default.a.createElement(siteContainer["a" /* default */], Object.assign({
      ref: function ref(siteContainer) {
        return _this2.siteContainer = siteContainer;
      }
    }, this.props), react_default.a.createElement(Helmet["Helmet"], null, react_default.a.createElement("meta", {
      charSet: "utf-8"
    }), react_default.a.createElement("title", null, title, " | Developing Writers")), react_default.a.createElement(visuallyHidden["a" /* default */], null, react_default.a.createElement("h1", null, title)), (data.post.wordCount.words || data.post.frontmatter.title === "About The Authors") && react_default.a.createElement(ContentArea_default, null, react_default.a.createElement("h1", null, title), react_default.a.createElement(mdx_renderer["a" /* default */], newProps, data.post.code.body), data.post.frontmatter && data.post.frontmatter.points && react_default.a.createElement(Point_default, {
      points: data.post.frontmatter.points,
      headerOffset: this.state.headerOffset
    }), react_default.a.createElement(markdown_Markdown, null, data.post.frontmatter.afterPoints)), shouldShowRelatedContent(data) && react_default.a.createElement(RelatedContent_default, {
      relatedLinks: mapSiblingContent(data)
    }), shouldShowChildLinks(data) && react_default.a.createElement(secondaryNavigation["c" /* default */], {
      linkProperties: mapLinkProperties(data.childPages.edges)
    })));
  };

  return ContentPages;
}(react["Component"]);

/* harmony default export */ var content_pages = (Object(context["withMDXScope"])(content_pages_ContentPages));
var pageQuery = "1308305183";
// CONCATENATED MODULE: ./.cache/gatsby-mdx/mdx-wrappers-dir/3f626850903c353a16818b6c0f9c6f30--scope-hash-3010b3badc54a9dfa4a4c80e419a41b2.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageQuery", function() { return _3f626850903c353a16818b6c0f9c6f30_scope_hash_3010b3badc54a9dfa4a4c80e419a41b2_pageQuery; });

 // .cache/gatsby-mdx/wrapper-components/{wrapper-filepath-hash}-{scope-hash}.js




 // pageQuery, etc get hoisted to here

var _3f626850903c353a16818b6c0f9c6f30_scope_hash_3010b3badc54a9dfa4a4c80e419a41b2_pageQuery = "1308305183";
;
/* harmony default export */ var _3f626850903c353a16818b6c0f9c6f30_scope_hash_3010b3badc54a9dfa4a4c80e419a41b2 = __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children,
      props = objectWithoutPropertiesLoose_default()(_ref, ["children"]);

  return react_default.a.createElement(context["MDXScopeProvider"], {
    __mdxScope: objectSpread_default()({}, _3010b3badc54a9dfa4a4c80e419a41b2)
  }, react_default.a.createElement(content_pages, props, children));
});

/***/ })

}]);
//# sourceMappingURL=component---cache-gatsby-mdx-mdx-wrappers-dir-3-f-626850903-c-353-a-16818-b-6-c-0-f-9-c-6-f-30-scope-hash-3010-b-3-badc-54-a-9-dfa-4-a-4-c-80-e-419-a-41-b-2-js-473d6a8ee2d59ba5a196.js.map