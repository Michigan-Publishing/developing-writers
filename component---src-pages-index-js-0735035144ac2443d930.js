(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{165:function(e,t,n){"use strict";n.r(t);n(56);var o=n(7),i=n.n(o),r=n(0),l=n.n(r),a=n(171),c=n(248),s=n(285),u=n(178),d=n(4),f=n.n(d);function p(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function w(){var e=v(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n"]);return w=function(){return e},e}function b(){var e=v(["\n  position: relative;\n  width: 100%;\n  height: auto;\n  padding-top: ","%;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n"]);return b=function(){return e},e}var E=a.a.div(b(),function(e){return e.percent}),x=a.a.div(w()),k=function(e){var t=e.width,n=e.height,o=e.children,i=parseInt(n)/parseInt(t)*100;return l.a.createElement(E,{percent:i},l.a.createElement(x,null,o))};function S(){var e=v(["\n  list-style: none;\n  position: absolute;\n  display: flex;\n  align-items: flex-end;\n  width: ",";\n  justify-content: space-between;\n  padding: 0;\n  top: calc(("," / 2) - ","px);\n"]);return S=function(){return e},e}function I(){var e=v(["\n  padding: 0.5rem;\n"]);return I=function(){return e},e}function T(){var e=v(["\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n"]);return T=function(){return e},e}function j(){var e=v(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n"]);return j=function(){return e},e}function C(){var e=v(["\n  list-style: none;\n  margin: 0;\n  flex: 0 0 100%;\n"]);return C=function(){return e},e}function O(){var e=v(["\n  display: flex;\n  margin: 0;\n  padding: 0;\n"]);return O=function(){return e},e}function q(){var e=v(["\n  background-color: ",";\n  text-align: center;\n  color: ",";\n  ","\n"]);return q=function(){return e},e}function P(){var e=v(["\n  overflow: hidden;\n  overflow-x: scroll;\n  width: 100%;\n  background-color: #ededed;\n  position: relative;\n\n  &:focus {\n    outline: 4px solid DodgerBlue;\n    outline-offset: -6px;\n  }\n\n  & + div #hoverfocus,\n  & + div #hover,\n  & + div #focus {\n    display: none;\n  }\n\n  &:hover + div #hover {\n    display: block;\n  }\n\n  &:focus + div #focus {\n    display: block;\n  }\n\n  &:hover:focus + div #hoverfocus {\n    display: block;\n  }\n\n  &:hover:focus + div #hover,\n  &:hover:focus + div #focus {\n    display: none;\n  }\n"]);return P=function(){return e},e}function _(){var e=v(["\n  width: ",";\n  height: ",";\n  position: relative;\n  display: flex;\n  flex-direction: column;\n"]);return _=function(){return e},e}function B(){var e=v(["\n  width: 100%;\n  position: relative;\n"]);return B=function(){return e},e}function L(){var e=v(["\n  ",";\n"]);return L=function(){return e},e}var N=a.a.aside(L(),"\n  position: absolute !important;\n  clip: rect(1px,1px,1px,1px) !important;\n  clip: rect(1px,1px,1px,1px) !important;\n  height: 1px !important;\n  width: 1px !important;\n  overflow: hidden !important;\n  padding: 0 !important;\n  margin: 0 !important; \n"),W=a.a.div(B()),M=a.a.div(_(),function(e){return e.width},function(e){return e.height}),A=a.a.div(P()),D=a.a.div(q(),function(e){return e.background||"#000"},function(e){return e.color||"#FFF"},function(e){return e.style}),F=a.a.ul(O()),J=a.a.li(C()),R=a.a.figure(j()),Y=a.a.img(T()),X=a.a.figcaption(I()),z=function(e){var t=e.imgSrc,n=e.caption,o=e.description,i=e.descriptionId,r=e.showCaption,a=void 0!==r&&r;return l.a.createElement(J,null,l.a.createElement(R,null,l.a.createElement(Y,{src:t,"aria-describedby":i,alt:n}),l.a.createElement(X,null,a&&{caption:n},l.a.createElement(N,{id:i},o))))},U=a.a.ul(S(),function(e){return e.width},function(e){return e.height},50),H=function(e){var t=e.onNext,n=e.onPrevious,o=e.previous,i=e.next,r=e.width,a=e.height,c=e.style;return l.a.createElement(U,{width:r,height:a,style:c},l.a.createElement("li",null,o(n)),l.a.createElement("li",null,i(t)))},V={position:"absolute",bottom:0,width:"100%"},K=function(e){function t(){var e,n,o,i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return o=this,i=(e=h(t)).call.apply(e,[this].concat(a)),n=!i||"object"!=typeof i&&"function"!=typeof i?y(o):i,m(y(y(n)),"state",{slideIndex:0}),m(y(y(n)),"element",l.a.createRef()),m(y(y(n)),"onResize",function(){n.resetTimer(),n.gotoSlideByIndex(n.state.slideIndex)}),m(y(y(n)),"resetTimer",function(){n.removeTimer(),n.setupTimer()}),m(y(y(n)),"handleKeydown",function(e){"ArrowLeft"!==e.key&&"ArrowRight"!==e.key||e.preventDefault(),"ArrowLeft"===e.key&&n.onPrevious(),"ArrowRight"===e.key&&n.onNext()}),m(y(y(n)),"setupTimer",function(){n.timer=window.setInterval(function(){n.onNext()},n.props.scrollTimer)}),m(y(y(n)),"removeTimer",function(){window.clearInterval(n.timer)}),m(y(y(n)),"getScrollWidth",function(){if(!n.element.current)return 0}),m(y(y(n)),"getSlideWidth",function(){if(n.element.current)return n.element.current.scrollWidth/n.props.children.length}),m(y(y(n)),"gotoSlideByIndex",function(e){var t=n.getSlideWidth();n.element.current.scroll(e*t,0)}),m(y(y(n)),"getCurrentIndex",function(){if(n.element.current){var e=n.getSlideWidth(),t=n.element.current.scrollLeft;return Math.round(t/e)}}),m(y(y(n)),"onNext",function(){var e=n.getCurrentIndex(),t=n.props.children.length;n.setState({slideIndex:t-1===e?0:e+1}),n.resetTimer()}),m(y(y(n)),"onPrevious",function(){var e=n.getCurrentIndex(),t=n.props.children.length;n.setState({slideIndex:0===e?t-1:e-1}),n.resetTimer()}),n}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,l.a.Component),n=t,(o=[{key:"componentDidMount",value:function(){this.props.autoScroll&&this.setupTimer(),this.element.current.addEventListener("keydown",this.handleKeydown),window.addEventListener("resize",this.onResize)}},{key:"componentWillUnmount",value:function(){this.element.current.removeEventListener("keydown",this.handleKeydown),window.removeEventListener("resize",this.onResize)}},{key:"componentDidUpdate",value:function(e,t){t.slideIndex!==this.state.slideIndex&&this.gotoSlideByIndex(this.state.slideIndex),e.autoScroll===this.props.autoScroll&&e.scrollTimer===this.props.scrollTimer||this.resetTimer()}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.width,o=e.height,i=e.label,r=e.next,a=e.previous,c=e.controlsStyle,s=e.stretch,u=s?k:M;return l.a.createElement(W,null,l.a.createElement(u,{width:n,height:o,stretch:s},l.a.createElement(A,{ref:this.element,role:"region","aria-label":i,tabIndex:"0","aria-describedby":"focus"},l.a.createElement(F,null,t)),l.a.createElement(D,{style:s?V:{}},l.a.createElement("p",{id:"hoverfocus"},"Scroll or use arrow keys for more"),l.a.createElement("p",{id:"hover"},"Scroll for more"),l.a.createElement("p",{id:"focus"},"Use arrow keys for more"))),l.a.createElement(H,{onNext:this.onNext,onPrevious:this.onPrevious,previous:a,next:r,width:s?"100%":n,style:c}))}}])&&p(n.prototype,o),i&&p(n,i),t}();m(K,"defaultProps",{label:"Image gallery",next:function(e){return l.a.createElement("button",{id:"next","aria-label":"next",onClick:e,style:{padding:25,marginLeft:25,marginRight:25}},"Next")},previous:function(e){return l.a.createElement("button",{id:"previous","aria-label":"previous",onClick:e,style:{padding:25,marginLeft:25,marginRight:25}},"Previous")},autoScroll:!1,scrollTimer:5e3,controlsStyle:null}),m(K,"propTypes",{width:f.a.oneOfType([f.a.string,f.a.number]).isRequired,height:f.a.oneOfType([f.a.string,f.a.number]).isRequired,label:f.a.string,next:f.a.func,previous:f.a.func,children:f.a.oneOfType([f.a.node,f.a.arrayOf(f.a.node)]),autoScroll:f.a.bool,scrollTimer:f.a.number,controlsStyle:f.a.object});var G=function(e){var t=e.children;return l.a.createElement("span",{"aria-hidden":"true"},t)},Q=n(213),Z=n(461),$=n.n(Z),ee=n(175),te=n(462),ne=n.n(te),oe=n(463),ie=n.n(oe),re=n(464),le=n.n(re),ae=n(465),ce=n.n(ae),se=n(466),ue=n.n(se),de=n(467),fe=n.n(de),pe=n(468),me=n.n(pe),he=n(469),ge=n.n(he),ye=n(470),ve=n.n(ye),we=n(471),be=n.n(we),Ee=n(472),xe=n.n(Ee);try{$.a.polyfill()}catch(e){}var ke=a.a.div.withConfig({displayName:"Carousel__Wrapper",componentId:"lq8dhs-0"})([""," background-color:rgba(",",.9);box-shadow:0 0 6.25rem rgba(",",100);color:",";padding:1rem;position:relative;display:flex;flex-direction:column;align-items:center;"],u.b,ee.a.rgbContentBackground,ee.a.rgbContentBackground,ee.a.white),Se=a.a.button.withConfig({displayName:"Carousel__Button",componentId:"lq8dhs-1"})(["background-color:",";color:#fff;font-size:30px;font-weight:bold;height:48px;width:48px;display:flex;flex-direction:row;justify-content:center;align-items:center;"],ee.a.contentBackground),Ie=function(e){return l.a.createElement(Se,{onClick:e},l.a.createElement(G,null,"⟩"),l.a.createElement(Q.a,null,"Next"))},Te=function(e){return l.a.createElement(Se,{onClick:e},l.a.createElement(G,null,"⟨"),l.a.createElement(Q.a,null,"Previous"))},je=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))||this).state={mounted:!1},t}i()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.setState({mounted:!0})},n.render=function(){return l.a.createElement(ke,null,l.a.createElement(K,{controlsStyle:{top:"50%",marginLeft:"-25px",width:"calc(100% + 50px)"},next:Ie,previous:Te,stretch:!0,width:"1024px",height:"576px"},l.a.createElement(z,{imgSrc:ne.a,caption:"Manit Limlamai quote",description:l.a.createElement(r.Fragment,null,l.a.createElement("blockquote",null,l.a.createElement("p",null,"Things change all the time, so if you don't write it down nobody remembers what was spoken, what was said")),l.a.createElement("cite",null,"Manit Limlamai, Software Engineer. Google")),descriptionId:"slide1"}),l.a.createElement(z,{imgSrc:ie.a,caption:"Priya Jacob quote",description:l.a.createElement(r.Fragment,null,l.a.createElement("blockquote",null,l.a.createElement("p",null,"I struggled with writing. One of my writing instructors in undergrad taught me that it wasn't so complicated. I think it's just a skill that can be developed... if you have good instruction.")),l.a.createElement("cite",null,"Priya Jacob, Child Psychiatrist. University of Michigan Alumna")),descriptionId:"slide2"}),l.a.createElement(z,{imgSrc:le.a,caption:"Mike Boyle quote",description:l.a.createElement(r.Fragment,null,l.a.createElement("blockquote",null,l.a.createElement("p",null,"I think about writing as kind of a bridge between one's internal world, which is kind of amorphous and in a lot of ways unknown, even to ourselves, and the outside world.")),l.a.createElement("cite",null,"Mike Boyle, Stay-at-home dad. Creative Writer")),descriptionId:"slide3"}),l.a.createElement(z,{imgSrc:ce.a,caption:"Jessie Nixon quote",description:l.a.createElement(r.Fragment,null,l.a.createElement("blockquote",null,l.a.createElement("p",null,"The best way that we improve our writing is through getting feedback. I've gotten lots of feedback throughout the years that has helped inform my own writing.")),l.a.createElement("cite",null,"Jessie Nixon, PhD Student, Education Design. University of Wisconsin Madison")),descriptionId:"slide4"}),l.a.createElement(z,{imgSrc:ue.a,caption:"Nathan Tomow quote",description:l.a.createElement(r.Fragment,null,l.a.createElement("blockquote",null,l.a.createElement("p",null,"I write through and explore some ideas. I don't realize what I'm actually thinking or how thoroughly I'm thinking through something until I've actually written it out.")),l.a.createElement("cite",null,"Nathan Tomow, History Teacher. University of Michigan Alumnus")),descriptionId:"slide5"}),l.a.createElement(z,{imgSrc:fe.a,caption:"Sarah Juday quote",description:l.a.createElement(r.Fragment,null,l.a.createElement("blockquote",null,l.a.createElement("p",null,"One of the best ways to become a better writer is to edit others and edit yourself as if it were another.")),l.a.createElement("cite",null,"Sarah Juday, Writer/Editor. University of Alaska")),descriptionId:"slide6"}),l.a.createElement(z,{imgSrc:me.a,caption:"Bonny Hoffman quote",description:l.a.createElement(r.Fragment,null,l.a.createElement("blockquote",null,l.a.createElement("p",null,"Making sure your notes are clear and that the person who's coming behind you and wasn't there during your conversation knows exactly what you're trying to say.")),l.a.createElement("cite",null,"Bonny Hoffman, Pediatric Nurse. University of Michigan Alumna")),descriptionId:"slide7"}),l.a.createElement(z,{imgSrc:ge.a,caption:"Jane Johnson quote",description:l.a.createElement(r.Fragment,null,l.a.createElement("blockquote",null,l.a.createElement("p",null,"What was the most helpful to me was a professor I had in college who taught us how to write well. I learned how to be concrete in my communication, how to be organized.")),l.a.createElement("cite",null,"Jane Johnson, Administrative Manager. University of Michigan")),descriptionId:"slide8"}),l.a.createElement(z,{imgSrc:ve.a,caption:"Danielle Dreilinger quote",description:l.a.createElement(r.Fragment,null,l.a.createElement("blockquote",null,l.a.createElement("p",null,"[Writing offers] the ability to make sense of the world for other people.")),l.a.createElement("cite",null,"Danielle Dreilinger, Journalist. New Orleans Times-Picayune")),descriptionId:"slide9"}),l.a.createElement(z,{imgSrc:be.a,caption:"Shamai Thacker quote",description:l.a.createElement(r.Fragment,null,l.a.createElement("blockquote",null,l.a.createElement("p",null,"Everything comes from practice. Practice is key. You have to keep writing because the only way you get better is if you keep doing it.")),l.a.createElement("cite",null,"Shamai Thacker, E-Portfolio Strategist. University of Alaska")),descriptionId:"slide10"}),l.a.createElement(z,{imgSrc:xe.a,caption:"Jennifer Day quote",description:l.a.createElement(r.Fragment,null,l.a.createElement("blockquote",null,l.a.createElement("p",null,"I use writing to document the kids -- any kinds of new things that they did, funny things that they did -- just as an extension of memory. I'm trying to save it for later when they're older.")),l.a.createElement("cite",null,"Jennifer Day, Clinic Administration & Patient Account Specialist. Ninilchik Village Tribal Council Community Clinic")),descriptionId:"slide11"})),this.props.children)},t}(l.a.Component);je.defaultProps={width:1024,height:576};var Ce=n(288),Oe=n(179),qe=(n(284),n(287));n.d(t,"default",function(){return We}),n.d(t,"query",function(){return Me});var Pe=Object(a.a)(qe.a).withConfig({displayName:"pages__StyledLinkButton",componentId:"ifild7-0"})([""," z-index:10;"],qe.b),_e=a.a.div.withConfig({displayName:"pages__LinkRow",componentId:"ifild7-1"})(["margin-top:2rem;display:flex;flex-direction:row;justify-content:space-around;width:1024px;@media (max-width:","px){width:80%;flex-direction:column;& a{margin-bottom:1em;}}"],Oe.f),Be=a.a.h2.withConfig({displayName:"pages__SecondaryHeading",componentId:"ifild7-2"})([""," color:",";margin:1rem 0 0 0;background-opacity:.9;"],u.b,ee.a.white),Le=a.a.div.withConfig({displayName:"pages__ContentWrapper",componentId:"ifild7-3"})(["display:flex;flex-direction:column;justify-content:flex-start;align-items:center;flex-grow:1;"]),Ne=Object(a.a)(u.a).withConfig({displayName:"pages__LinkText",componentId:"ifild7-4"})(["font-size:1.5rem;"]),We=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return l.a.createElement(Ce.c,null,l.a.createElement(s.a,Object.assign({},this.props,{showBreadcrumbs:!1}),l.a.createElement(c.Helmet,null,l.a.createElement("meta",{charSet:"utf-8"}),l.a.createElement("title",null,"Developing Writers")),l.a.createElement(Q.a,null,l.a.createElement("h1",null,"Developing Writers home")),l.a.createElement(Le,null,l.a.createElement(r.Fragment,null,l.a.createElement(je,null,l.a.createElement(Be,null,"Welcome! Start here to find out what 169 students can tell you about writing.")),l.a.createElement(_e,null,l.a.createElement(Pe,{to:"/pages/writing-involves-choices"},l.a.createElement(Ne,null,"Writing involves choices")),l.a.createElement(Pe,{to:"/pages/writing-is-social"},l.a.createElement(Ne,null,"Writing is social")))))))},t}(r.Component),Me="993696026"},461:function(e,t,n){!function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style&&!0!==e.__forceSmoothScrollPolyfill__)){var n,o=e.HTMLElement||e.Element,i=468,r={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:o.prototype.scroll||c,scrollIntoView:o.prototype.scrollIntoView},l=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,a=(n=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(n)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?m.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):r.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(s(arguments[0])?r.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):m.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},o.prototype.scroll=o.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==s(arguments[0])){var e=arguments[0].left,t=arguments[0].top;m.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},o.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},o.prototype.scrollIntoView=function(){if(!0!==s(arguments[0])){var n=function(e){var n;do{n=(e=e.parentNode)===t.body}while(!1===n&&!1===f(e));return n=null,e}(this),o=n.getBoundingClientRect(),i=this.getBoundingClientRect();n!==t.body?(m.call(this,n,n.scrollLeft+i.left-o.left,n.scrollTop+i.top-o.top),"fixed"!==e.getComputedStyle(n).position&&e.scrollBy({left:o.left,top:o.top,behavior:"smooth"})):e.scrollBy({left:i.left,top:i.top,behavior:"smooth"})}else r.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function c(e,t){this.scrollLeft=e,this.scrollTop=t}function s(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function u(e,t){return"Y"===t?e.clientHeight+a<e.scrollHeight:"X"===t?e.clientWidth+a<e.scrollWidth:void 0}function d(t,n){var o=e.getComputedStyle(t,null)["overflow"+n];return"auto"===o||"scroll"===o}function f(e){var t=u(e,"Y")&&d(e,"Y"),n=u(e,"X")&&d(e,"X");return t||n}function p(t){var n,o,r,a,c=(l()-t.startTime)/i;a=c=c>1?1:c,n=.5*(1-Math.cos(Math.PI*a)),o=t.startX+(t.x-t.startX)*n,r=t.startY+(t.y-t.startY)*n,t.method.call(t.scrollable,o,r),o===t.x&&r===t.y||e.requestAnimationFrame(p.bind(e,t))}function m(n,o,i){var a,s,u,d,f=l();n===t.body?(a=e,s=e.scrollX||e.pageXOffset,u=e.scrollY||e.pageYOffset,d=r.scroll):(a=n,s=n.scrollLeft,u=n.scrollTop,d=c),p({scrollable:a,method:d,startTime:f,startX:s,startY:u,x:o,y:i})}}}}()},462:function(e,t,n){e.exports=n.p+"static/slide1-46f6ece3c9f2431108dec8c2dfcdedd3.jpg"},463:function(e,t,n){e.exports=n.p+"static/slide2-8d8875b6a04312e82d64dacf7578a761.jpg"},464:function(e,t,n){e.exports=n.p+"static/slide3-70490c959127f617e52fc7f820a34891.jpg"},465:function(e,t,n){e.exports=n.p+"static/slide4-5c33ae7416b6cf6f8945864cc109688b.jpg"},466:function(e,t,n){e.exports=n.p+"static/slide5-04ab3bbe21ed9fe546663277a468fa0b.jpg"},467:function(e,t,n){e.exports=n.p+"static/slide6-ce4395bf3ddec19f770204ff458917eb.jpg"},468:function(e,t,n){e.exports=n.p+"static/slide7-c6522f5c61c8453b14430d4824aed7fe.jpg"},469:function(e,t,n){e.exports=n.p+"static/slide8-e64019b50b7285fbcdc4634ec9166082.jpg"},470:function(e,t,n){e.exports=n.p+"static/slide9-0379e00d6b0520a5a001bea4eb641324.jpg"},471:function(e,t,n){e.exports=n.p+"static/slide10-e4e727fb4868bc05f8b452942567f1f2.jpg"},472:function(e,t,n){e.exports=n.p+"static/slide11-a9a26d68fa00f8adcf777c2f0c84e5ff.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-0735035144ac2443d930.js.map