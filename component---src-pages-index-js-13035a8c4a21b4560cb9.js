(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{162:function(e,n,t){"use strict";t.r(n);t(76);var i=t(7),r=t.n(i),o=t(0),a=t.n(o),c=t(168),l=t(177),u=t(182),s=t(170),d=t(4),f=t.n(d);function p(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function m(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,n){return(g=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function y(){var e=b(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n"]);return y=function(){return e},e}function w(){var e=b(["\n  position: relative;\n  width: 100%;\n  height: auto;\n  padding-top: ","%;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n"]);return w=function(){return e},e}var x=c.a.div(w(),function(e){return e.percent}),E=c.a.div(y()),S=function(e){var n=e.width,t=e.height,i=e.children,r=parseInt(t)/parseInt(n)*100;return a.a.createElement(x,{percent:r},a.a.createElement(E,null,i))};function k(){var e=b(["\n  list-style: none;\n  position: absolute;\n  display: flex;\n  align-items: flex-end;\n  width: ",";\n  justify-content: space-between;\n  padding: 0;\n  top: calc(("," / 2) - ","px);\n"]);return k=function(){return e},e}function j(){var e=b(["\n  padding: 0.5rem;\n"]);return j=function(){return e},e}function I(){var e=b(["\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n"]);return I=function(){return e},e}function T(){var e=b(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n"]);return T=function(){return e},e}function C(){var e=b(["\n  list-style: none;\n  margin: 0;\n  flex: 0 0 100%;\n"]);return C=function(){return e},e}function _(){var e=b(["\n  display: flex;\n  margin: 0;\n  padding: 0;\n"]);return _=function(){return e},e}function O(){var e=b(["\n  background-color: ",";\n  text-align: center;\n  color: ",";\n  ","\n"]);return O=function(){return e},e}function N(){var e=b(["\n  overflow: hidden;\n  overflow-x: scroll;\n  width: 100%;\n  background-color: #ededed;\n  position: relative;\n\n  &:focus {\n    outline: 4px solid DodgerBlue;\n    outline-offset: -6px;\n  }\n\n  & + div #hoverfocus,\n  & + div #hover,\n  & + div #focus {\n    display: none;\n  }\n\n  &:hover + div #hover {\n    display: block;\n  }\n\n  &:focus + div #focus {\n    display: block;\n  }\n\n  &:hover:focus + div #hoverfocus {\n    display: block;\n  }\n\n  &:hover:focus + div #hover,\n  &:hover:focus + div #focus {\n    display: none;\n  }\n"]);return N=function(){return e},e}function P(){var e=b(["\n  width: ",";\n  height: ",";\n  position: relative;\n  display: flex;\n  flex-direction: column;\n"]);return P=function(){return e},e}function L(){var e=b(["\n  width: 100%;\n  position: relative;\n"]);return L=function(){return e},e}var R=c.a.div(L()),W=c.a.div(P(),function(e){return e.width},function(e){return e.height}),z=c.a.div(N()),B=c.a.div(O(),function(e){return e.background||"#000"},function(e){return e.color||"#FFF"},function(e){return e.style}),F=c.a.ul(_()),A=c.a.li(C()),D=c.a.figure(T()),q=c.a.img(I()),K=c.a.figcaption(j()),M=function(e){var n=e.imgSrc,t=e.caption,i=e.description,r=e.showCaption,o=void 0!==r&&r;return a.a.createElement(A,null,a.a.createElement(D,null,a.a.createElement(q,{src:n,alt:i}),o&&a.a.createElement(K,null,t)))},U=c.a.ul(k(),function(e){return e.width},function(e){return e.height},50),H=function(e){var n=e.onNext,t=e.onPrevious,i=e.previous,r=e.next,o=e.width,c=e.height,l=e.style;return a.a.createElement(U,{width:o,height:c,"aria-hidden":!0,style:l},a.a.createElement("li",null,i(t)),a.a.createElement("li",null,r(n)))},J={position:"absolute",bottom:0,width:"100%"},G=function(e){function n(){var e,t,i,r;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var o=arguments.length,c=new Array(o),l=0;l<o;l++)c[l]=arguments[l];return i=this,r=(e=h(n)).call.apply(e,[this].concat(c)),t=!r||"object"!=typeof r&&"function"!=typeof r?v(i):r,m(v(v(t)),"state",{slideIndex:0}),m(v(v(t)),"element",a.a.createRef()),m(v(v(t)),"onResize",function(){t.resetTimer(),t.gotoSlideByIndex(t.state.slideIndex)}),m(v(v(t)),"resetTimer",function(){t.removeTimer(),t.setupTimer()}),m(v(v(t)),"handleKeydown",function(e){"ArrowLeft"!==e.key&&"ArrowRight"!==e.key||e.preventDefault(),"ArrowLeft"===e.key&&t.onPrevious(),"ArrowRight"===e.key&&t.onNext()}),m(v(v(t)),"setupTimer",function(){t.timer=window.setInterval(function(){t.onNext()},t.props.scrollTimer)}),m(v(v(t)),"removeTimer",function(){window.clearInterval(t.timer)}),m(v(v(t)),"getScrollWidth",function(){if(!t.element.current)return 0}),m(v(v(t)),"getSlideWidth",function(){if(t.element.current)return t.element.current.scrollWidth/t.props.children.length}),m(v(v(t)),"gotoSlideByIndex",function(e){var n=t.getSlideWidth();t.element.current.scroll(e*n,0)}),m(v(v(t)),"getCurrentIndex",function(){if(t.element.current){var e=t.getSlideWidth(),n=t.element.current.scrollLeft;return Math.round(n/e)}}),m(v(v(t)),"onNext",function(){var e=t.getCurrentIndex(),n=t.props.children.length;t.setState({slideIndex:n-1===e?0:e+1}),t.resetTimer()}),m(v(v(t)),"onPrevious",function(){var e=t.getCurrentIndex(),n=t.props.children.length;t.setState({slideIndex:0===e?n-1:e-1}),t.resetTimer()}),t}var t,i,r;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&g(e,n)}(n,a.a.Component),t=n,(i=[{key:"componentDidMount",value:function(){this.props.autoScroll&&this.setupTimer(),this.element.current.addEventListener("keydown",this.handleKeydown),window.addEventListener("resize",this.onResize)}},{key:"componentWillUnmount",value:function(){this.element.current.removeEventListener("keydown",this.handleKeydown),window.removeEventListener("resize",this.onResize)}},{key:"componentDidUpdate",value:function(e,n){n.slideIndex!==this.state.slideIndex&&this.gotoSlideByIndex(this.state.slideIndex),e.autoScroll===this.props.autoScroll&&e.scrollTimer===this.props.scrollTimer||this.resetTimer()}},{key:"render",value:function(){var e=this.props,n=e.children,t=e.width,i=e.height,r=e.label,o=e.next,c=e.previous,l=e.controlsStyle,u=e.stretch,s=u?S:W;return a.a.createElement(R,null,a.a.createElement(s,{width:t,height:i,stretch:u},a.a.createElement(z,{ref:this.element,role:"region","aria-label":r,tabIndex:"0","aria-describedby":"focus"},a.a.createElement(F,null,n)),a.a.createElement(B,{style:u?J:{}},a.a.createElement("p",{id:"hoverfocus"},"Scroll or use arrow keys for more"),a.a.createElement("p",{id:"hover"},"Scroll for more"),a.a.createElement("p",{id:"focus"},"Use arrow keys for more"))),a.a.createElement(H,{onNext:this.onNext,onPrevious:this.onPrevious,previous:c,next:o,width:u?"100%":t,style:l}))}}])&&p(t.prototype,i),r&&p(t,r),n}();m(G,"defaultProps",{label:"Image gallery",next:function(e){return a.a.createElement("button",{id:"next","aria-label":"next",onClick:e,style:{padding:25,marginLeft:25,marginRight:25}},"Next")},previous:function(e){return a.a.createElement("button",{id:"previous","aria-label":"previous",onClick:e,style:{padding:25,marginLeft:25,marginRight:25}},"Previous")},autoScroll:!0,scrollTimer:5e3,controlsStyle:null}),m(G,"propTypes",{width:f.a.oneOfType([f.a.string,f.a.number]).isRequired,height:f.a.oneOfType([f.a.string,f.a.number]).isRequired,label:f.a.string,next:f.a.func,previous:f.a.func,children:f.a.oneOfType([f.a.node,f.a.arrayOf(f.a.node)]),autoScroll:f.a.bool,scrollTimer:f.a.number,controlsStyle:f.a.object});var Q=t(169),V=t(224),X=t.n(V),Y=t(225),Z=t.n(Y),$=t(226),ee=t.n($),ne=t(227),te=t.n(ne),ie=t(228),re=t.n(ie),oe=t(229),ae=t.n(oe),ce=t(230),le=t.n(ce),ue=t(231),se=t.n(ue),de=t(232),fe=t.n(de),pe=t(233),me=t.n(pe),he=t(234),ge=t.n(he),ve=c.a.div.withConfig({displayName:"Carousel__Wrapper",componentId:"lq8dhs-0"})([""," background-color:rgba(",",.9);box-shadow:0 0 6.25rem rgba(",",100);color:",";padding:1rem;position:relative;display:flex;flex-direction:column;align-items:center;"],s.b,Q.a.rgbContentBackground,Q.a.rgbContentBackground,Q.a.white),be=c.a.button.withConfig({displayName:"Carousel__Button",componentId:"lq8dhs-1"})(["background-color:",";color:#fff;font-size:30px;font-weight:bold;height:48px;width:48px;display:flex;flex-direction:row;justify-content:center;align-items:center;"],Q.a.contentBackground),ye=function(e){return a.a.createElement(be,{onClick:e},"⟩")},we=function(e){return a.a.createElement(be,{onClick:e},"⟨")},xe=function(e){function n(){for(var n,t=arguments.length,i=new Array(t),r=0;r<t;r++)i[r]=arguments[r];return(n=e.call.apply(e,[this].concat(i))||this).state={mounted:!1},n}r()(n,e);var t=n.prototype;return t.componentDidMount=function(){this.setState({mounted:!0})},t.render=function(){return a.a.createElement(ve,null,a.a.createElement(G,{controlsStyle:{top:"50%",marginLeft:"-25px",width:"calc(100% + 50px)"},next:ye,previous:we,stretch:!0,width:"1024px",height:"576px"},a.a.createElement(M,{imgSrc:X.a,caption:"First image",description:"First slide"}),a.a.createElement(M,{imgSrc:Z.a,caption:"Second image",description:"Second slide"}),a.a.createElement(M,{imgSrc:ee.a,caption:"Third image",description:"Third slide"}),a.a.createElement(M,{imgSrc:te.a,caption:"Fourth image",description:"Fourth slide"}),a.a.createElement(M,{imgSrc:re.a,caption:"Fifth image",description:"Fifth slide"}),a.a.createElement(M,{imgSrc:ae.a,caption:"Sixth image",description:"Sixth slide"}),a.a.createElement(M,{imgSrc:le.a,caption:"Seventh image",description:"Seventh slide"}),a.a.createElement(M,{imgSrc:se.a,caption:"Eighth image",description:"Eighth slide"}),a.a.createElement(M,{imgSrc:fe.a,caption:"Ninth image",description:"Ninth slide"}),a.a.createElement(M,{imgSrc:me.a,caption:"Tenth image",description:"Tenth slide"}),a.a.createElement(M,{imgSrc:ge.a,caption:"Eleventh image",description:"Eleventh slide"})),this.props.children)},n}(a.a.Component);xe.defaultProps={width:1024,height:576};var Ee=t(183),Se=t(171),ke=(t(181),t(184));t.d(n,"default",function(){return Oe}),t.d(n,"query",function(){return Ne});var je=Object(c.a)(ke.a).withConfig({displayName:"pages__StyledLinkButton",componentId:"ifild7-0"})([""," z-index:10;"],ke.b),Ie=c.a.div.withConfig({displayName:"pages__LinkRow",componentId:"ifild7-1"})(["margin-top:2rem;display:flex;flex-direction:row;justify-content:space-around;width:1024px;@media (max-width:","px){width:80%;flex-direction:column;& a{margin-bottom:1em;}}"],Se.f),Te=c.a.h2.withConfig({displayName:"pages__SecondaryHeading",componentId:"ifild7-2"})([""," color:",";margin:1rem 0 0 0;background-opacity:.9;"],s.b,Q.a.white),Ce=c.a.div.withConfig({displayName:"pages__ContentWrapper",componentId:"ifild7-3"})(["display:flex;flex-direction:column;justify-content:flex-start;align-items:center;flex-grow:1;"]),_e=Object(c.a)(s.a).withConfig({displayName:"pages__LinkText",componentId:"ifild7-4"})(["font-size:1.5rem;"]),Oe=function(e){function n(){return e.apply(this,arguments)||this}return r()(n,e),n.prototype.render=function(){return a.a.createElement(Ee.c,null,a.a.createElement(u.a,Object.assign({},this.props,{showBreadcrumbs:!1}),a.a.createElement(l.Helmet,null,a.a.createElement("meta",{charSet:"utf-8"}),a.a.createElement("title",null,"Developing Writers")),a.a.createElement(Ce,null,a.a.createElement(o.Fragment,null,a.a.createElement(xe,null,a.a.createElement(Te,null,"Welcome! Start here to find out what 169 students can tell you about writing.")),a.a.createElement(Ie,null,a.a.createElement(je,{to:"/pages/writing-involves-choices"},a.a.createElement(_e,null,"Writing involves choices")),a.a.createElement(je,{to:"/pages/writing-is-social"},a.a.createElement(_e,null,"Writing is social")))))))},n}(o.Component),Ne="993696026"},224:function(e,n,t){e.exports=t.p+"static/slide1-46f6ece3c9f2431108dec8c2dfcdedd3.jpg"},225:function(e,n,t){e.exports=t.p+"static/slide2-8d8875b6a04312e82d64dacf7578a761.jpg"},226:function(e,n,t){e.exports=t.p+"static/slide3-70490c959127f617e52fc7f820a34891.jpg"},227:function(e,n,t){e.exports=t.p+"static/slide4-5c33ae7416b6cf6f8945864cc109688b.jpg"},228:function(e,n,t){e.exports=t.p+"static/slide5-04ab3bbe21ed9fe546663277a468fa0b.jpg"},229:function(e,n,t){e.exports=t.p+"static/slide6-ce4395bf3ddec19f770204ff458917eb.jpg"},230:function(e,n,t){e.exports=t.p+"static/slide7-c6522f5c61c8453b14430d4824aed7fe.jpg"},231:function(e,n,t){e.exports=t.p+"static/slide8-e64019b50b7285fbcdc4634ec9166082.jpg"},232:function(e,n,t){e.exports=t.p+"static/slide9-0379e00d6b0520a5a001bea4eb641324.jpg"},233:function(e,n,t){e.exports=t.p+"static/slide10-e4e727fb4868bc05f8b452942567f1f2.jpg"},234:function(e,n,t){e.exports=t.p+"static/slide11-a9a26d68fa00f8adcf777c2f0c84e5ff.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-13035a8c4a21b4560cb9.js.map