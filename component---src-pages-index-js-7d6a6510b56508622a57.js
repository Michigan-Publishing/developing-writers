(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{159:function(e,t,n){"use strict";n.r(t);n(76);var i=n(7),a=n.n(i),o=n(0),r=n.n(o),c=n(166),l=n(175),p=n(169),d=n(181),s=n(162),m=n.n(s),f=n(217),h=n.n(f),u=n(218),g=n.n(u),x=n(168),b=c.a.text.withConfig({displayName:"CurvedText__Text",componentId:"s0s5i-0"})(["fill:",";font:bold 1.5rem sans-serif;letter-spacing:0.3rem;"],x.a.mainNavText),w=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props,t=e.topText,n=e.bottomText,i=e.style,a=e.width,o=e.height,c=e.topDx,l=e.topDy,p=e.bottomDx,d=e.bottomDy;return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 "+(a-1)+" "+(o-1),style:i},r.a.createElement("title",null,t),r.a.createElement("defs",null,r.a.createElement("path",{d:"M0,75 a75,75 0, 1,1 150,0 a75,75 0 1,1 -150,0",id:"top"}),r.a.createElement("path",{d:"M0,75 a75,75 0, 0,0 150,0 a75,75 0 1,0 -150,0",id:"bottom"})),r.a.createElement(b,{dx:c,dy:l,transform:"rotate(30deg)"},r.a.createElement("textPath",{href:"#top"},t)),r.a.createElement(b,{dx:p,dy:d},r.a.createElement("textPath",{href:"#bottom"},n)))},t}(r.a.Component);w.defaultProps={bottomDx:30,bottomDy:0,topDx:55,topDy:15};var y="\n  position: absolute !important;\n  height: 1px;\n  width: 1px;\n  overflow: hidden;\n  clip: rect(1px 1px 1px 1px); /* IE6, IE7 */\n  clip: rect(1px, 1px, 1px, 1px);\n",E=c.a.span.withConfig({displayName:"VisuallyHidden",componentId:"ksfyyu-1"})(["",";"],y),v=n(167),k=c.a.img.withConfig({displayName:"GlobeLink__Image",componentId:"sc-1gy2rdh-0"})(["height:","px;width:","px;"],function(e){return e.width},function(e){return e.height}),C=c.a.div.withConfig({displayName:"GlobeLink__Wrapper",componentId:"sc-1gy2rdh-1"})(["padding-left:","px padding-top:","px max-width:","px;max-height:","px;position:relative;"],function(e){return e.diameter/4},function(e){return e.diameter/4},function(e){return e.diameter},function(e){return e.diameter}),S=Object(c.a)(p.Link).withConfig({displayName:"GlobeLink__Link",componentId:"sc-1gy2rdh-2"})(["position:relative;z-index:1;&:hover{opacity:0.8;}&:active{img{transform:scale(0.9);}}@media (max-width:480px){img{display:none;}text-decoration:none;color:#fff;"," span{clip:unset;position:initial;height:auto;width:auto;}}"],v.b),D="purple";(function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props,t=e.style,n=e.diameter,i=(e.position,e.color),a=e.topText,o=e.bottomText,c=e.bottomDx,l=e.bottomDy,p=e.topDx,d=e.topDy,s=m()(e,["style","diameter","position","color","topText","bottomText","bottomDx","bottomDy","topDx","topDy"]);return r.a.createElement(C,{diameter:n,style:t},r.a.createElement(w,{width:n,height:n,topText:a,bottomText:o,bottomDx:c,bottomDy:l,topDx:p,topDy:d,style:{transform:"scale(1.5)",position:"absolute",zIndex:0}}),r.a.createElement(S,s,r.a.createElement(E,null,a," ",o),r.a.createElement(k,{width:n,height:n,src:i===D?h.a:g.a,alt:a+" "+o,title:a+" "+o})))},t}(o.Component)).defaultProps={color:D,diameter:150};n(182);var _=n(172),j={desktop:"desktop",mobile:"mobile"},I=(o.Component,n(4),n(219)),T=n(220),N=n.n(T),L=n(221),B=n.n(L),W=n(222),F=n.n(W),O=n(223),P=n.n(O),z=n(224),M=n.n(z),q=n(225),G=n.n(q),H=n(226),A=n.n(H),J=n(227),R=n.n(J),V=n(228),K=n.n(V),Q=n(229),U=n.n(Q),X=n(230),Y=n.n(X),Z=c.a.div.withConfig({displayName:"Carousel__Wrapper",componentId:"lq8dhs-0"})([""," background-color:rgba(",",.9);box-shadow:0 0 6.25rem rgba(",",100);color:",";padding:1rem;position:relative;display:flex;flex-direction:column;align-items:center;"],v.b,x.a.rgbContentBackground,x.a.rgbContentBackground,x.a.white),$=c.a.button.withConfig({displayName:"Carousel__Button",componentId:"lq8dhs-1"})(["background-color:",";color:#fff;font-size:30px;font-weight:bold;height:48px;width:48px;display:flex;flex-direction:row;justify-content:center;align-items:center;"],x.a.contentBackground),ee=function(e){return r.a.createElement($,{onClick:e},"⟩")},te=function(e){return r.a.createElement($,{onClick:e},"⟨")},ne=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(t=e.call.apply(e,[this].concat(i))||this).state={mounted:!1},t}a()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.setState({mounted:!0})},n.render=function(){return r.a.createElement(Z,null,r.a.createElement(I.b,{key:width,controlsStyle:{top:"50%",marginLeft:"-25px",width:"calc(100% + 50px)"},next:ee,previous:te},r.a.createElement(I.a,{imgSrc:N.a,caption:"First image",description:"First slide"}),r.a.createElement(I.a,{imgSrc:B.a,caption:"Second image",description:"Second slide"}),r.a.createElement(I.a,{imgSrc:F.a,caption:"Third image",description:"Third slide"}),r.a.createElement(I.a,{imgSrc:P.a,caption:"Fourth image",description:"Fourth slide"}),r.a.createElement(I.a,{imgSrc:M.a,caption:"Fifth image",description:"Fifth slide"}),r.a.createElement(I.a,{imgSrc:G.a,caption:"Sixth image",description:"Sixth slide"}),r.a.createElement(I.a,{imgSrc:A.a,caption:"Seventh image",description:"Seventh slide"}),r.a.createElement(I.a,{imgSrc:R.a,caption:"Eighth image",description:"Eighth slide"}),r.a.createElement(I.a,{imgSrc:K.a,caption:"Ninth image",description:"Ninth slide"}),r.a.createElement(I.a,{imgSrc:U.a,caption:"Tenth image",description:"Tenth slide"}),r.a.createElement(I.a,{imgSrc:Y.a,caption:"Eleventh image",description:"Eleventh slide"})),this.props.children)},t}(r.a.Component);ne.defaultProps={width:1024,height:576};var ie=n(180),ae=n.n(ie),oe="mobile",re="tablet",ce={mobile:_.e,mobileLandscape:_.d,tablet:_.g,tabletLandscape:_.f,desktop:_.c,desktopLarge:_.a,desktopWide:_.b},le=function(e){var t=e.children;return r.a.createElement(ae.a,{breakpoints:ce},t)},pe=(n(179),n(183));n.d(t,"default",function(){return ue}),n.d(t,"query",function(){return ge});var de=Object(c.a)(pe.a).withConfig({displayName:"pages__StyledLinkButton",componentId:"ifild7-0"})([""," z-index:10;"],pe.b),se=c.a.div.withConfig({displayName:"pages__LinkRow",componentId:"ifild7-1"})(["margin-top:2rem;display:flex;flex-direction:row;justify-content:space-around;width:","px;@media (max-width:","px){background-color:#fab;flex-direction:column;& a{margin-bottom:1em;}}"],function(e){return e.width||1024},_.g),me=c.a.h2.withConfig({displayName:"pages__SecondaryHeading",componentId:"ifild7-2"})([""," color:",";margin:1rem 0 0 0;background-opacity:.9;"],v.b,x.a.white),fe=c.a.div.withConfig({displayName:"pages__ContentWrapper",componentId:"ifild7-3"})(["display:flex;flex-direction:column;justify-content:flex-start;align-items:center;flex-grow:1;"]),he=Object(c.a)(v.a).withConfig({displayName:"pages__LinkText",componentId:"ifild7-4"})(["font-size:1.5rem;"]),ue=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(t=e.call.apply(e,[this].concat(i))||this).state={width:1024,height:576},t}return a()(t,e),t.prototype.render=function(){return r.a.createElement(le,null,r.a.createElement(d.a,Object.assign({},this.props,{showBreadcrumbs:!1}),r.a.createElement(l.Helmet,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,"Developing Writers")),r.a.createElement(fe,null,r.a.createElement(ie.Media,null,function(e){e.breakpoints;var t,n=e.currentBreakpoint,i=ce[t=n]>ce[re]?{width:1024,height:576}:ce[t]>ce[oe]?{width:682,height:384}:{width:341,height:192},a=i.width,c=i.height;return r.a.createElement(o.Fragment,null,r.a.createElement(ne,{width:a,height:c},r.a.createElement(me,null,"Welcome! Start here to find out what 169 students can tell you about writing.")),r.a.createElement(se,{width:a},r.a.createElement(de,{to:"/pages/writing-involves-choices"},r.a.createElement(he,null,"Writing involves choices")),r.a.createElement(de,{to:"/pages/writing-is-social"},r.a.createElement(he,null,"Writing is social"))))}))))},t}(o.Component),ge="993696026"},217:function(e,t,n){e.exports=n.p+"static/PurpleOrb-7d635d0b1b764a88f125b50abd0f1410.svg"},218:function(e,t,n){e.exports=n.p+"static/BlueOrb-71810b7e0499ecdc4201ddf4dad2deb2.svg"},220:function(e,t,n){e.exports=n.p+"static/slide1-46f6ece3c9f2431108dec8c2dfcdedd3.jpg"},221:function(e,t,n){e.exports=n.p+"static/slide2-8d8875b6a04312e82d64dacf7578a761.jpg"},222:function(e,t,n){e.exports=n.p+"static/slide3-70490c959127f617e52fc7f820a34891.jpg"},223:function(e,t,n){e.exports=n.p+"static/slide4-5c33ae7416b6cf6f8945864cc109688b.jpg"},224:function(e,t,n){e.exports=n.p+"static/slide5-04ab3bbe21ed9fe546663277a468fa0b.jpg"},225:function(e,t,n){e.exports=n.p+"static/slide6-ce4395bf3ddec19f770204ff458917eb.jpg"},226:function(e,t,n){e.exports=n.p+"static/slide7-c6522f5c61c8453b14430d4824aed7fe.jpg"},227:function(e,t,n){e.exports=n.p+"static/slide8-e64019b50b7285fbcdc4634ec9166082.jpg"},228:function(e,t,n){e.exports=n.p+"static/slide9-0379e00d6b0520a5a001bea4eb641324.jpg"},229:function(e,t,n){e.exports=n.p+"static/slide10-e4e727fb4868bc05f8b452942567f1f2.jpg"},230:function(e,t,n){e.exports=n.p+"static/slide11-a9a26d68fa00f8adcf777c2f0c84e5ff.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-7d6a6510b56508622a57.js.map