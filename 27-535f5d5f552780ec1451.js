(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{173:function(e,t,n){"use strict";t.__esModule=!0,t.Consumer=t.Provider=void 0;var r=i(n(0)),o=i(n(49));function i(e){return e&&e.__esModule?e:{default:e}}var a=r.default.createContext?r.default.createContext():(0,o.default)(),u=a.Provider,c=a.Consumer;u.displayName="ReactBreakpoints.Provider",c.displayName="ReactBreakpoints.Consumer",t.Provider=u,t.Consumer=c,t.default=a},180:function(e,t,n){"use strict";t.__esModule=!0,t.Media=t.withBreakpoints=void 0;var r=n(173);Object.defineProperty(t,"Media",{enumerable:!0,get:function(){return r.Consumer}});var o=a(n(231)),i=a(n(235));function a(e){return e&&e.__esModule?e:{default:e}}t.withBreakpoints=i.default,t.default=o.default},219:function(e,t,n){"use strict";n.d(t,"a",function(){return P}),n.d(t,"b",function(){return M});var r=n(0),o=n.n(r),i=n(4),a=n.n(i),u=n(166);function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function h(){var e=p(["\n  list-style: none;\n  position: absolute;\n  display: flex;\n  align-items: flex-end;\n  width: ",";\n  justify-content: space-between;\n  padding: 0;\n  top: calc(("," / 2) - ","px);\n"]);return h=function(){return e},e}function v(){var e=p(["\n  padding: 0.5rem;\n"]);return v=function(){return e},e}function m(){var e=p(["\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n"]);return m=function(){return e},e}function b(){var e=p(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n"]);return b=function(){return e},e}function y(){var e=p(["\n  list-style: none;\n  margin: 0;\n  flex: 0 0 100%;\n"]);return y=function(){return e},e}function w(){var e=p(["\n  display: flex;\n  margin: 0;\n  padding: 0;\n"]);return w=function(){return e},e}function g(){var e=p(["\n  background-color: ",";\n  text-align: center;\n  color: ",";\n  ","\n"]);return g=function(){return e},e}function k(){var e=p(["\n  overflow: hidden;\n  overflow-x: scroll;\n  width: 100%;\n  background-color: #ededed;\n  position: relative;\n\n  &:focus {\n    outline: 4px solid DodgerBlue;\n    outline-offset: -6px;\n  }\n\n  & + div #hoverfocus,\n  & + div #hover,\n  & + div #focus {\n    display: none;\n  }\n\n  &:hover + div #hover {\n    display: block;\n  }\n\n  &:focus + div #focus {\n    display: block;\n  }\n\n  &:hover:focus + div #hoverfocus {\n    display: block;\n  }\n\n  &:hover:focus + div #hover,\n  &:hover:focus + div #focus {\n    display: none;\n  }\n"]);return k=function(){return e},e}function x(){var e=p(["\n  width: ",";\n  height: ",";\n  display: flex;\n  flex-direction: column;\n  position: relative;\n"]);return x=function(){return e},e}var O=u.a.div(x(),function(e){return e.width},function(e){return e.height}),E=u.a.div(k()),j=u.a.div(g(),function(e){return e.background||"#000"},function(e){return e.color||"#FFF"},function(e){return e.style}),S=u.a.ul(w()),_=u.a.li(y()),T=u.a.figure(b()),W=u.a.img(m()),C=u.a.figcaption(v()),P=function(e){var t=e.imgSrc,n=e.caption,r=e.description,i=e.showCaption,a=void 0!==i&&i;return o.a.createElement(_,null,o.a.createElement(T,null,o.a.createElement(W,{src:t,alt:r}),a&&o.a.createElement(C,null,n)))},R=u.a.ul(h(),function(e){return e.width},function(e){return e.height},50),B=function(e){var t=e.onNext,n=e.onPrevious,r=e.previous,i=e.next,a=e.width,u=e.height,c=e.style;return o.a.createElement(R,{width:a,height:u,"aria-hidden":!0,style:c},o.a.createElement("li",null,r(n)),o.a.createElement("li",null,i(t)))},M=function(e){function t(){var e,n,r,i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,u=new Array(a),c=0;c<a;c++)u[c]=arguments[c];return r=this,i=(e=s(t)).call.apply(e,[this].concat(u)),n=!i||"object"!=typeof i&&"function"!=typeof i?d(r):i,l(d(d(n)),"state",{slideIndex:0}),l(d(d(n)),"element",o.a.createRef()),l(d(d(n)),"resetTimer",function(){n.removeTimer(),n.setupTimer()}),l(d(d(n)),"handleKeydown",function(e){e.preventDefault(),"ArrowLeft"===e.key&&n.onPrevious(),"ArrowRight"===e.key&&n.onNext()}),l(d(d(n)),"setupTimer",function(){n.timer=window.setInterval(function(){n.onNext()},n.props.scrollTimer)}),l(d(d(n)),"removeTimer",function(){window.clearInterval(n.timer)}),l(d(d(n)),"getSlideWidth",function(){return n.element.current.scrollWidth/n.props.children.length}),l(d(d(n)),"gotoSlideByIndex",function(e){var t=n.getSlideWidth();n.element.current.scroll(e*t,0)}),l(d(d(n)),"getCurrentIndex",function(){var e=n.getSlideWidth(),t=n.element.current.scrollLeft;return Math.round(t/e)}),l(d(d(n)),"onNext",function(){var e=n.getCurrentIndex(),t=n.props.children.length;n.setState({slideIndex:t-1===e?0:e+1}),n.resetTimer()}),l(d(d(n)),"onPrevious",function(){var e=n.getCurrentIndex(),t=n.props.children.length;n.setState({slideIndex:0===e?t-1:e-1}),n.resetTimer()}),n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,o.a.Component),n=t,(r=[{key:"componentDidMount",value:function(){this.props.autoScroll&&this.setupTimer(),this.element.current.addEventListener("keydown",this.handleKeydown)}},{key:"componentWillUnmount",value:function(){this.element.current.removeEventListener("keydown",this.handleKeydown)}},{key:"componentDidUpdate",value:function(e,t){t.slideIndex!==this.state.slideIndex&&this.gotoSlideByIndex(this.state.slideIndex),e.autoScroll===this.props.autoScroll&&e.scrollTimer===this.props.scrollTimer||this.resetTimer()}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.width,r=e.height,i=e.label,a=e.next,u=e.previous,c=e.controlsStyle;return o.a.createElement(O,{width:n,height:r},o.a.createElement(E,{ref:this.element,role:"region","aria-label":i,tabIndex:"0","aria-describedby":"focus"},o.a.createElement(S,null,t)),o.a.createElement(j,null,o.a.createElement("p",{id:"hoverfocus"},"Scroll or use arrow keys for more"),o.a.createElement("p",{id:"hover"},"Scroll for more"),o.a.createElement("p",{id:"focus"},"Use arrow keys for more")),o.a.createElement(B,{onNext:this.onNext,onPrevious:this.onPrevious,previous:u,next:a,width:n,height:r,style:c}))}}])&&c(n.prototype,r),i&&c(n,i),t}();l(M,"defaultProps",{label:"Image gallery",next:function(e){return o.a.createElement("button",{id:"next","aria-label":"next",onClick:e,style:{padding:25,marginLeft:25,marginRight:25}},"Next")},previous:function(e){return o.a.createElement("button",{id:"previous","aria-label":"previous",onClick:e,style:{padding:25,marginLeft:25,marginRight:25}},"Previous")},autoScroll:!0,scrollTimer:5e3,controlsStyle:null}),l(M,"propTypes",{width:a.a.oneOfType([a.a.string,a.a.number]).isRequired,height:a.a.oneOfType([a.a.string,a.a.number]).isRequired,label:a.a.string,next:a.a.func,previous:a.a.func,children:a.a.oneOfType([a.a.node,a.a.arrayOf(a.a.node)]),autoScroll:a.a.bool,scrollTimer:a.a.number,controlsStyle:a.a.object})},231:function(e,t,n){"use strict";(function(e){t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=f(n(0)),a=f(n(4)),u=f(n(232)),c=n(233),l=n(173),s=n(234);function f(e){return e&&e.__esModule?e:{default:e}}var d=function(t){function n(r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,t.call(this,r));p.call(i);var a=i.props,u=a.breakpoints,c=a.defaultBreakpoint,l=a.guessedBreakpoint;if(!u)throw new Error(s.ERRORS.NO_BREAKPOINTS);if("object"!==(void 0===u?"undefined":o(u)))throw new Error(s.ERRORS.NOT_OBJECT);var f=null;e.window?f=i.calculateCurrentBreakpoint(i.convertScreenWidth(e.window.innerWidth)):l?f=i.calculateCurrentBreakpoint(l):c&&(f=i.calculateCurrentBreakpoint(c));var d=e.window?i.convertScreenWidth(e.window.innerWidth):c;return i.state={breakpoints:u||{},screenWidth:d,currentBreakpoint:f},i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,t),n.prototype.convertScreenWidth=function(e){return"em"===this.props.breakpointUnit?(0,c.stripUnit)((0,c.em)(e)):e},n.prototype.componentDidMount=function(){"undefined"!=typeof window&&(this.readWidth(),this.props.debounceResize?window.addEventListener("resize",(0,u.default)(this.readWidth,this.props.debounceDelay)):window.addEventListener("resize",this.readWidth),window.addEventListener("orientationchange",this.readWidth))},n.prototype.componentWillUnmount=function(){"undefined"!=typeof window&&(this.props.debounceResize?window.addEventListener("resize",(0,u.default)(this.readWidth,this.props.debounceDelay)):window.addEventListener("resize",this.readWidth),window.removeEventListener("orientationchange",this.readWidth))},n.prototype.calculateCurrentBreakpoint=function(e){var t=this,n=null,r=Object.keys(this.props.breakpoints);return(new(Function.prototype.bind.apply(Array,[null].concat(r)))).reverse().map(function(r){var o=t.props.breakpoints[r];!n&&e>=o&&(n=r)}),null===n&&(n=r[0]),n},n.prototype.render=function(){var e=this.props.children;return i.default.createElement(l.Provider,{value:this.getContextValues()},e&&e)},n}(i.default.Component);d.defaultProps={breakpointUnit:"px",debounceResize:!1,debounceDelay:50,snapMode:!0},d.propTypes={breakpoints:a.default.objectOf(a.default.number),breakpointUnit:a.default.oneOf(["px","em"]),guessedBreakpoint:a.default.number,defaultBreakpoint:a.default.number,debounceResize:a.default.bool,debounceDelay:a.default.number,snapMode:a.default.bool};var p=function(){var e=this;this.readWidth=function(t){var n=e.props.snapMode,r=t&&t.target.innerWidth?t.target.innerWidth:window.innerWidth,o=e.convertScreenWidth(r),i=e.calculateCurrentBreakpoint(o);e.setState(function(e){return e.currentBreakpoint===i?null:{currentBreakpoint:n?i:null,screenWidth:n?null:o}})},this.getContextValues=function(){return r({breakpoints:r({},e.props.breakpoints)},e.props.snapMode&&{currentBreakpoint:e.state.currentBreakpoint},!e.props.snapMode&&{screenWidth:e.state.screenWidth})}};t.default=d}).call(this,n(170))},232:function(e,t,n){(function(t){var n="Expected a function",r=NaN,o="[object Symbol]",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt,s="object"==typeof t&&t&&t.Object===Object&&t,f="object"==typeof self&&self&&self.Object===Object&&self,d=s||f||Function("return this")(),p=Object.prototype.toString,h=Math.max,v=Math.min,m=function(){return d.Date.now()};function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&p.call(e)==o}(e))return r;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=u.test(e);return n||c.test(e)?l(e.slice(2),n?2:8):a.test(e)?r:+e}e.exports=function(e,t,r){var o,i,a,u,c,l,s=0,f=!1,d=!1,p=!0;if("function"!=typeof e)throw new TypeError(n);function w(t){var n=o,r=i;return o=i=void 0,s=t,u=e.apply(r,n)}function g(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-s>=a}function k(){var e=m();if(g(e))return x(e);c=setTimeout(k,function(e){var n=t-(e-l);return d?v(n,a-(e-s)):n}(e))}function x(e){return c=void 0,p&&o?w(e):(o=i=void 0,u)}function O(){var e=m(),n=g(e);if(o=arguments,i=this,l=e,n){if(void 0===c)return function(e){return s=e,c=setTimeout(k,t),f?w(e):u}(l);if(d)return c=setTimeout(k,t),w(l)}return void 0===c&&(c=setTimeout(k,t)),u}return t=y(t)||0,b(r)&&(f=!!r.leading,a=(d="maxWait"in r)?h(y(r.maxWait)||0,t):a,p="trailing"in r?!!r.trailing:p),O.cancel=function(){void 0!==c&&clearTimeout(c),s=0,o=l=i=c=void 0},O.flush=function(){return void 0===c?u:x(m())},O}}).call(this,n(170))},233:function(e,t,n){"use strict";function r(e){var t=parseFloat(e);return isNaN(t)?e:t}t.__esModule=!0,t.stripUnit=r,t.em=function(e){return r(e)/16+"em"}},234:function(e,t,n){"use strict";t.__esModule=!0;t.ERRORS={NO_BREAKPOINTS:"react-breakpoints requires you to pass an object of breakpoints, see documentation at: https://github.com/ehellman/react-breakpoints",NOT_OBJECT:"react-breakpoints requires you to pass an object of breakpoints, see documentation at: https://github.com/ehellman/react-breakpoints"}},235:function(e,t,n){"use strict";t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=u(n(0)),i=(u(n(4)),u(n(163))),a=n(173);u(a);function u(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=o.default.forwardRef?o.default.forwardRef(function(t,n){return o.default.createElement(a.Consumer,null,function(i){return o.default.createElement(e,r({},t,{ref:n},i))})}):function(t){return o.default.createElement(a.Consumer,null,function(n){return o.default.createElement(e,r({},t,n))})};return t.displayName="withBreakpoints("+(e.displayName||e.name)+")",(0,i.default)(t,e)}}}]);
//# sourceMappingURL=27-535f5d5f552780ec1451.js.map