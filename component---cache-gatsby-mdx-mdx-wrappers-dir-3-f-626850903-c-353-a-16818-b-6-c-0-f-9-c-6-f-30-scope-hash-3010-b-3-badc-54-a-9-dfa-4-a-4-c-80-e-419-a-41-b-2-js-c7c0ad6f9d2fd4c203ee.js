(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{159:function(t,e,n){"use strict";n.r(e);var a=n(13),i=n.n(a),o=n(162),r=n.n(o),c=n(0),l=n.n(c),u=n(183),d=n(163),s={React:l.a,MDXTag:d.MDXTag},p=n(7),m=n.n(p),g=(n(50),n(170),n(193)),f=n(184),h=n(182),y=n(166),w=n(167),M=n(169),x=y.a.a.withConfig({displayName:"SecondaryNavigation__Link",componentId:"sc-19nitkx-0"})(["color:",";",';font-size:30px;text-decoration:none;position:flex;&:after{content:" ";display:block;opacity:0.5;}'],w.a.white,M.a),v=y.a.ul.withConfig({displayName:"SecondaryNavigation__ListContainer",componentId:"sc-19nitkx-1"})(["padding:","px 0;display:flex;flex-direction:column;flex-grow:1;height:100%;list-style-type:none;position:relative;min-height:500px;"],20),b=y.a.li.withConfig({displayName:"SecondaryNavigation__ListItem",componentId:"sc-19nitkx-2"})(["position:absolute;left:","%;top:","px;background-color:rgba(",",0.8);padding:20px;border-radius:20px;"],function(t){return t.left},function(t){return t.top+20},w.a.rgbContentBackground);var I=function(t){function e(){for(var e,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))||this).state={paddingHeight:90},e.mounted=!1,e.getPaddingAmount=function(){var t=e.props.linkProperties,n=e.container.clientHeight/t.length;e.setState({paddingHeight:n>90?90:n})},e}m()(e,t);var n=e.prototype;return n.componentDidMount=function(){this.getPaddingAmount(),window.addEventListener("resize",this.getPaddingAmount)},n.componentWillUnmount=function(){window.removeEventListener("resize",this.getPaddingAmount)},n.render=function(){var t=this,e=this.props.linkProperties,n=this.state.paddingHeight;return e?l.a.createElement(v,{ref:function(e){return t.container=e}},e.map(function(t,e){return l.a.createElement(b,{left:(a=35,Math.floor(Math.random()*Math.floor(a))),top:e*n},l.a.createElement(x,{href:t.href},t.title));var a})):null},e}(c.Component),L=n(181),z=n(213),N=n.n(z)()({createElement:l.a.createElement,components:{}}),E=function(t){var e=t.children;return e&&N(e).tree},C=(n(219),n(220),y.a.div.withConfig({displayName:"ExpandablePanel__Container",componentId:"alw0sz-0"})(["margin:10px 0;"])),k=(y.a.button.withConfig({displayName:"ExpandablePanel__Title",componentId:"alw0sz-1"})(["display:flex;width:100%;flex-direction:row;justify-content:space-between;background-color:rgba(0,0,0,0.4);height:30px;align-items:center;color:",";font-size:20px;"],w.a.white),y.a.div.withConfig({displayName:"ExpandablePanel__RowContainer",componentId:"alw0sz-2"})(["background:rgba(0,0,0,0.2);border:1px solid rgba(255,255,255,0.3);margin:",";transition:margin 0.25s;"],function(t){return t.isActive?"15px 0":"0"}),Object(y.b)(["0%{height:0%;opacity:0;}100%{height:100%;opacity:1;}"])),j=(y.a.div.withConfig({displayName:"ExpandablePanel__Body",componentId:"alw0sz-3"})(["padding:15px;animation:0.5s "," ease-out;"],k),y.a.img.withConfig({displayName:"ExpandablePanel__Icon",componentId:"alw0sz-4"})(["height:24px;width:24px;color:#fff;fill:#fff;"]),y.a.div.withConfig({displayName:"ExpandablePanel__ContentSection",componentId:"alw0sz-5"})(["margin:10px 0;"])),T=function(t){function e(){return t.apply(this,arguments)||this}return m()(e,t),e.prototype.render=function(){var t=this.props.points;return l.a.createElement(C,null,t.map(function(t,e){return l.a.createElement(j,null,l.a.createElement("h2",null,t.title),l.a.createElement(E,null,t.point))}))},e}(c.Component),S=y.a.div.withConfig({displayName:"RelatedContent__ContentWrapper",componentId:"z6antt-0"})([""," background-color:rgba(",",.9);box-shadow:0px 0px 100px rgba(",",100);color:",";overflow-y:scroll;padding:20px;max-height:80vh;width:50vw;margin:90px 0;align-self:center;"],M.a,w.a.rgbRelatedBackground,w.a.rgbRelatedBackground,w.a.white),D=y.a.a.withConfig({displayName:"RelatedContent__Link",componentId:"z6antt-1"})(["color:",";"],w.a.white),_=y.a.h3.withConfig({displayName:"RelatedContent__Heading",componentId:"z6antt-2"})(["color:",";margin:0px;font-size:20px;font-weight:800;"],w.a.white),A=y.a.ul.withConfig({displayName:"RelatedContent__ListContainer",componentId:"z6antt-3"})(["padding:0;margin-left:10px;list-style-type:none;"]),Y=y.a.li.withConfig({displayName:"RelatedContent__ListItem",componentId:"z6antt-4"})(["margin:20px 0;"]),P=function(t){function e(){return t.apply(this,arguments)||this}return m()(e,t),e.prototype.render=function(){var t=this.props.relatedLinks;return l.a.createElement(S,null,l.a.createElement(_,null,"Related Content"),l.a.createElement(A,null,t.map(function(t){return l.a.createElement(Y,null,l.a.createElement(D,{href:t.href},t.title))})))},e}(l.a.Component);function G(t){return t&&t.siblingPages&&t.siblingPages.edges&&t.siblingPages.edges.length>0&&!1===Z(t)}function Z(t){return!!(t.childPages&&t.childPages.edges.length>0)}var B=function(t){function e(){return t.apply(this,arguments)||this}return m()(e,t),e.prototype.render=function(){var t,e=this.props,n=e.pageContext,a=n.title,i=(n.section,n.key,n.parentKey,n.id,e.data);return l.a.createElement(L.a,this.props,l.a.createElement(f.Helmet,null,l.a.createElement("meta",{charSet:"utf-8"}),l.a.createElement("title",null,a," | Developing Writers")),l.a.createElement("div",{style:{backgroundColor:"#FAB"}},l.a.createElement("h2",null,"Test"),l.a.createElement("strong",null,i.post.code.body)),i.post.wordCount.words&&l.a.createElement(h.a,null,l.a.createElement("h2",null,a),l.a.createElement(g.a,this.props,i.post.code.body),i.post.frontmatter&&i.post.frontmatter.points&&l.a.createElement(T,{points:i.post.frontmatter.points}),l.a.createElement(E,null,i.post.frontmatter.afterPoints)),G(i)&&l.a.createElement(P,{relatedLinks:function(t){return G(t)?t.siblingPages.edges.map(function(t){var e=t.node;return{href:e.fields.slug,title:e.frontmatter.title}}):null}(i)}),Z(i)&&l.a.createElement(I,{linkProperties:(t=i.childPages.edges,t?t.map(function(t){return{title:t.node.frontmatter.title,href:t.node.fields.slug}}):[])}))},e}(l.a.Component);n.d(e,"pageQuery",function(){return O});var O="1308305183";e.default=function(t){var e=t.children,n=r()(t,["children"]);return l.a.createElement(u.MDXScopeProvider,{__mdxScope:i()({},s)},l.a.createElement(B,n,e))}},167:function(t,e,n){"use strict";e.a={black:"#000",white:"#FFF",purpleMain:"#662D91",blueMain:"#29ABE2",mainNavText:"#F4F5AA",yellowLine:"#D1D420",yellow:"#E2E420",contentBackground:"#0F384A",relatedBackground:"#378496",rgbContentBackground:"16, 56, 74",rgbRelatedBackground:"55, 132, 150",rgbBlack:"0, 0, 0"}},169:function(t,e,n){"use strict";n.d(e,"a",function(){return i});n(0);var a=n(166),i="\n  font-family: Helvetica, Arial, sans-serif;\n";a.a.span.withConfig({displayName:"Text",componentId:"sc-5f0f5h-0"})(["",";"],i)},170:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return g}),n.d(e,"StaticQueryContext",function(){return p}),n.d(e,"StaticQuery",function(){return m});var a=n(0),i=n.n(a),o=n(4),r=n.n(o),c=n(168),l=n.n(c);n.d(e,"Link",function(){return l.a}),n.d(e,"withPrefix",function(){return c.withPrefix}),n.d(e,"navigate",function(){return c.navigate}),n.d(e,"push",function(){return c.push}),n.d(e,"replace",function(){return c.replace}),n.d(e,"navigateTo",function(){return c.navigateTo});var u=n(172),d=n.n(u);n.d(e,"PageRenderer",function(){return d.a});var s=n(36);n.d(e,"parsePath",function(){return s.a});var p=i.a.createContext({}),m=function(t){return i.a.createElement(p.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},171:function(t,e,n){"use strict";var a=n(166).a.button.withConfig({displayName:"TouchableOpacity__Button",componentId:"sc-1cyiyik-0"})(["background:none;border:none;padding:0;margin:0;outline:none;transition:transform 200ms,opacity:200ms;opacity:1;transform:scale(1,1);&:active{transform:scale(0.98,0.98);opacity:.8;}"]);n.d(e,"a",function(){return a})},172:function(t,e,n){var a;t.exports=(a=n(174))&&a.default||a},174:function(t,e,n){"use strict";n.r(e);var a=n(13),i=n.n(a),o=n(0),r=n.n(o),c=n(4),l=n.n(c),u=n(55),d=n(2),s=function(t){var e=t.location,n=d.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(u.a,i()({location:e,pageResources:n},n.json))};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},e.default=s},176:function(t,e,n){t.exports=n.p+"static/background-f71b79687d926dd0b8ea53aad5c48665.jpg"},177:function(t,e,n){t.exports=n.p+"static/background-df1b82adac12cfe23dc34883e963fac8.webp"},178:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJiYXJzIiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDQ0OCA1MTIiIGNsYXNzPSJzdmctaW5saW5lLS1mYSBmYS1iYXJzIGZhLXctMTQgZmEtM3giPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0xNiAxMzJoNDE2YzguODM3IDAgMTYtNy4xNjMgMTYtMTZWNzZjMC04LjgzNy03LjE2My0xNi0xNi0xNkgxNkM3LjE2MyA2MCAwIDY3LjE2MyAwIDc2djQwYzAgOC44MzcgNy4xNjMgMTYgMTYgMTZ6bTAgMTYwaDQxNmM4LjgzNyAwIDE2LTcuMTYzIDE2LTE2di00MGMwLTguODM3LTcuMTYzLTE2LTE2LTE2SDE2Yy04LjgzNyAwLTE2IDcuMTYzLTE2IDE2djQwYzAgOC44MzcgNy4xNjMgMTYgMTYgMTZ6bTAgMTYwaDQxNmM4LjgzNyAwIDE2LTcuMTYzIDE2LTE2di00MGMwLTguODM3LTcuMTYzLTE2LTE2LTE2SDE2Yy04LjgzNyAwLTE2IDcuMTYzLTE2IDE2djQwYzAgOC44MzcgNy4xNjMgMTYgMTYgMTZ6IiBjbGFzcz0iIj48L3BhdGg+PC9zdmc+"},179:function(t,e,n){},180:function(t,e,n){},181:function(t,e,n){"use strict";var a=n(7),i=n.n(a),o=n(0),r=n.n(o),c=n(166),l=(n(76),n(186)),u=n.n(l),d=(n(175),n(187)),s=n.n(d),p=n(176),m=n.n(p),g=(n(177),c.a.div.withConfig({displayName:"Background",componentId:"sc-1qwcq2r-0"})(["background:url(",") no-repeat center center fixed;background-size:cover;min-height:100vh;display:flex;flex-direction:column;"],function(t){return t.src})),f=function(t){var e=t.children,n=t.src;return r.a.createElement(g,{src:n},e)};var h=function(t){function e(){for(var e,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))||this).state={isLoading:!0,src:null},e}i()(e,t);var n=e.prototype;return n.componentDidMount=function(){var t=s()(u.a.mark(function t(){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:!1,this.setState({isLoading:!1,src:m.a});case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),n.render=function(){var t=this.state,e=t.isLoading,n=t.src;return e?null:r.a.createElement(f,Object.assign({},this.props,{src:n}))},e}(r.a.Component),y=n(170),w=n(167),M=c.a.div.withConfig({displayName:"SiteHeading__HeadingWrapper",componentId:"sc-8jchkq-0"})(["font-family:Helvetica,sans-serif;font-size:45px;font-weight:normal;color:",';text-transform:uppercase;&:after{content:" ";display:block;border:1px solid ',";margin-top:20px;max-width:700px;}& a{text-decoration:none;color:#fff;}"],w.a.white,w.a.yellowLine),x=function(t){function e(){return t.apply(this,arguments)||this}return i()(e,t),e.prototype.render=function(){return r.a.createElement(M,null,r.a.createElement(y.Link,{to:"/"},"Developing Writers"))},e}(o.Component),v=(n(50),n(169)),b=c.a.div.withConfig({displayName:"Breadcrumbs__BreadcrumbWrapper",componentId:"sc-3dyv7-0"})(["margin:10px 0;display:flex;flex-direction:row;"," color:",";a,a:visited{margin:0 10px;color:",';opacity:.8;}a:first-child{margin-right:10px;margin-left:0;}span:not(:last-child)::after{content:">";margin-right:10px;opacity:.6;}'],v.a,w.a.white,w.a.white),I=c.a.span.withConfig({displayName:"Breadcrumbs__LinkWrapper",componentId:"sc-3dyv7-1"})([""]),L=function(t){function e(){return t.apply(this,arguments)||this}return i()(e,t),e.prototype.render=function(){var t=this.props.items;return t&&t.length>0?r.a.createElement(b,null,t.map(function(e,n){return n!==t.length-1?r.a.createElement(I,null,r.a.createElement(y.Link,{to:e.slug},e.title)):r.a.createElement(I,null,e.title)})):null},e}(o.Component),z=n(188),N=n(171),E=c.a.h2.withConfig({displayName:"Flyout__Heading",componentId:"sc-1pufune-0"})(["",";color:",";"],v.a,w.a.yellow),C=c.a.div.withConfig({displayName:"Flyout__Container",componentId:"sc-1pufune-1"})(["z-index:10;padding:0px 20px;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;background-color:",";color:",";",";font-size:40px;position:absolute;top:0;right:0;height:100vh;a,a:visited,a:active{text-decoration:none;color:",";}"],w.a.contentBackground,w.a.white,v.a,w.a.white),k=c.a.div.withConfig({displayName:"Flyout__LinkContainer",componentId:"sc-1pufune-2"})(["opacity:",";margin:30px 0;"],function(t){return t.opacity}),j=c.a.button.withConfig({displayName:"Flyout__CloseButton",componentId:"sc-1pufune-3"})(["background:none;border:none;font-size:40px;color:",";margin-bottom:40px;"],w.a.white),T=c.a.div.withConfig({displayName:"Flyout__Overlay",componentId:"sc-1pufune-4"})(["position:absolute;top:0;left:0;background-color:rgba(0,0,0,0.6);height:100vh;width:100vw;"]),S=c.a.div.withConfig({displayName:"Flyout__LinkWrapper",componentId:"sc-1pufune-5"})(["display:flex;flex-wrap:wrap;font-size:","rem;flex-direction:",";font-weight:",";opacity:",";color:#fff;& > div{margin-bottom:",";}a{display:inline-block;margin:20px;margin-top:","px;}"],function(t){return 1.4-.1*t.depth},function(t){return t.depth>=1?"row":"column"},function(t){return t.depth>=1?"normal":"bold"},function(t){return t.depth>=1?.8:.6},function(t){return t.depth>=1?"auto":"20px"},function(t){return t.depth>=1?10:30}),D=c.a.div.withConfig({displayName:"Flyout__LinkBlockWrapper",componentId:"sc-1pufune-6"})(["margin-bottom:30px;"]);var _="90vw",A="0vw",Y=1,P=0,G=function(t){function e(){for(var e,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))||this).state={shouldClose:!1,nextWidth:_,nextOpacity:Y},e.onClose=function(){e.setState({shouldClose:!0,nextWidth:A,nextOpacity:P})},e.afterAnimation=function(){e.state.shouldClose&&e.setState({shouldClose:!1,nextWidth:_,nextOpacity:Y},function(){return e.props.onClose()})},e}i()(e,t);var n=e.prototype;return n.componentDidMount=function(){this.div=document.createElement("div"),document.body.appendChild(this.div)},n.render=function(){var t=this,e=this.props,n=e.isVisible,a=e.items;if(!n)return null;var i=function t(e,n){return void 0===n&&(n=0),e?e.map(function(e){return r.a.createElement(D,null,r.a.createElement(y.Link,{to:e.slug},e.title),r.a.createElement(S,{depth:n,"data-depth":n},t(e.children,n+1)))}):null}(a);return r.a.createElement(o.Fragment,null,r.a.createElement(T,{onClick:this.onClose}),r.a.createElement(z.a,{from:{width:A,opacity:P},to:{width:this.state.nextWidth,opacity:this.state.nextOpacity},onRest:this.afterAnimation},function(e){return r.a.createElement(C,{style:{width:e.width,opacity:e.opacity}},r.a.createElement(j,{"aria-label":"Close",onClick:t.onClose},r.a.createElement("span",{"aria-hidden":"true"},"×")),r.a.createElement(E,null,"Navigation"),r.a.createElement(k,{opacity:e.opacity},i))}))},e}(o.Component),Z=n(35),B=function(t){function e(){for(var e,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))||this).div=null,e.state={hasMounted:!1},e}i()(e,t);var n=e.prototype;return n.componentDidMount=function(){this.div=document.createElement("div"),this.div.style.zIndex=10,document.body.appendChild(this.div),this.setState({hasMounted:!0})},n.componentWillUnmount=function(){document.body.removeChild(this.div)},n.render=function(){return this.state.hasMounted?Object(Z.createPortal)(this.props.children,this.div):null},e}(o.Component);B.defaultProps={isStyleguide:!1};var O=n(178),F=n.n(O),W=function(t){function e(){return t.apply(this,arguments)||this}return i()(e,t),e.prototype.render=function(){return r.a.createElement("img",{src:F.a,width:32,height:32})},e}(r.a.Component),R=n(13),Q=n.n(R);n(78),n(77),n(52),n(189),n(51);var H=function(t,e,n){void 0===e&&(e=!1),void 0===n&&(n=!1);var a=t.reduce(function(t,n){var a,i=n.node;if(!i.frontmatter)return t;var o=e?Q()({},i.fields):{};return Q()({},t,((a={})[i.frontmatter.key]=Q()({},i.frontmatter,o),a))},{});return n?function t(e,n){void 0===n&&(n=null);var a=Object.keys(e).reduce(function(t,a){return e[a].parentKey===n&&t.push(e[a]),t},[]);return a?(a.forEach(function(n){var a=t(e,n.key);a&&a!==[]&&(n.children=a)}),a):null}(a):a},J=(n(191),n(179),n(180),c.a.div.withConfig({displayName:"SiteContainer__HeadingWrapper",componentId:"sc-1enlc16-0"})(["background:linear-gradient(rgba(0,0,0,1.5) 50%,rgba(0,0,0,0));padding:15px;display:flex;flex-direction:column;width:calc(100vw - 30px);position:fixed;top:0;z-index:1;"])),U=c.a.div.withConfig({displayName:"SiteContainer__ContentArea",componentId:"sc-1enlc16-1"})(["display:flex;flex-grow:1;flex-direction:column;height:100%;margin-top:calc(","px + 30px);position:relative;z-index:0;"],function(t){return t.headingHeight}),X=c.a.div.withConfig({displayName:"SiteContainer__HeadingRow",componentId:"sc-1enlc16-2"})(["display:flex;flex-direction:row;justify-content:space-between;width:100%;"]),q=function(t){function e(){for(var e,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))||this).state={showFlyout:!1},e.shouldShowBreadcrumbs=function(){return e.props.showBreadcrumbs&&e.props.data&&e.props.data.allMdx&&e.props.data.allMdx.edges},e.buildLinkTree=function(){var t=e.props,n=(t.pageContext.key,t.data.allMdx.edges);return H(n,!0,!0)},e.buildBreadcrumbLinks=function(){if(e.shouldShowBreadcrumbs()){for(var t=e.props,n=t.pageContext.key,a=t.data.allMdx.edges,i=H(a,!0),o=n,r=[];o;){var c=i[o];r.push({title:c.title,slug:c.slug}),o=c.parentKey}return r.push({title:"home",slug:"/"}),r.reverse()}},e}i()(e,t);var n=e.prototype;return n.componentDidMount=function(){this.buildLinkTree()},n.render=function(){var t=this;this.shouldShowBreadcrumbs();return r.a.createElement(o.Fragment,null,r.a.createElement(J,null,r.a.createElement(X,null,r.a.createElement(x,null),r.a.createElement(N.a,{onClick:function(){return t.setState({showFlyout:!0})}},r.a.createElement(W,null))),r.a.createElement(X,null,r.a.createElement(L,{items:this.buildBreadcrumbLinks()}))),r.a.createElement(h,null,r.a.createElement(B,null,r.a.createElement(G,{onClose:function(){return t.setState({showFlyout:!1})},isVisible:this.state.showFlyout,items:this.buildLinkTree()})),r.a.createElement(U,null,this.props.children)))},e}(o.Component);q.defaultProps={showBreadcrumbs:!0,breadcrumbLinks:[]},n.d(e,"a",function(){return q})},182:function(t,e,n){"use strict";var a=n(7),i=n.n(a),o=n(0),r=n.n(o),c=n(166),l=n(167),u=n(169),d=c.a.main.withConfig({displayName:"ContentArea__ContentWrapper",componentId:"y7q6wg-0"})([""," background-color:rgba(",",.9);box-shadow:0px 0px 100px rgba(",",100);color:",";overflow-y:scroll;padding:20px;max-width:50vw;position:relative;top:2.5vh;align-self:center;& h2{font-size:20px;font-weight:800;margin-bottom:10px;}& p,li{margin:20px 10px;}"],u.a,l.a.rgbContentBackground,l.a.rgbContentBackground,l.a.white),s=function(t){function e(){return t.apply(this,arguments)||this}return i()(e,t),e.prototype.render=function(){var t=this.props,e=t.children,n=t.style;return r.a.createElement(d,{style:n},e)},e}(r.a.Component);n.d(e,"a",function(){return s})},219:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJjaGV2cm9uLWRvd24iIHJvbGU9ImltZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNDQ4IDUxMiIgY2xhc3M9InN2Zy1pbmxpbmUtLWZhIGZhLWNoZXZyb24tZG93biBmYS13LTE0IGZhLTl4Ij48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMjA3LjAyOSAzODEuNDc2TDEyLjY4NiAxODcuMTMyYy05LjM3My05LjM3My05LjM3My0yNC41NjkgMC0zMy45NDFsMjIuNjY3LTIyLjY2N2M5LjM1Ny05LjM1NyAyNC41MjItOS4zNzUgMzMuOTAxLS4wNEwyMjQgMjg0LjUwNWwxNTQuNzQ1LTE1NC4wMjFjOS4zNzktOS4zMzUgMjQuNTQ0LTkuMzE3IDMzLjkwMS4wNGwyMi42NjcgMjIuNjY3YzkuMzczIDkuMzczIDkuMzczIDI0LjU2OSAwIDMzLjk0MUwyNDAuOTcxIDM4MS40NzZjLTkuMzczIDkuMzcyLTI0LjU2OSA5LjM3Mi0zMy45NDIgMHoiIGNsYXNzPSIiPjwvcGF0aD48L3N2Zz4="},220:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJjaGV2cm9uLXVwIiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDQ0OCA1MTIiIGNsYXNzPSJzdmctaW5saW5lLS1mYSBmYS1jaGV2cm9uLXVwIGZhLXctMTQgZmEtOXgiPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0yNDAuOTcxIDEzMC41MjRsMTk0LjM0MyAxOTQuMzQzYzkuMzczIDkuMzczIDkuMzczIDI0LjU2OSAwIDMzLjk0MWwtMjIuNjY3IDIyLjY2N2MtOS4zNTcgOS4zNTctMjQuNTIyIDkuMzc1LTMzLjkwMS4wNEwyMjQgMjI3LjQ5NSA2OS4yNTUgMzgxLjUxNmMtOS4zNzkgOS4zMzUtMjQuNTQ0IDkuMzE3LTMzLjkwMS0uMDRsLTIyLjY2Ny0yMi42NjdjLTkuMzczLTkuMzczLTkuMzczLTI0LjU2OSAwLTMzLjk0MUwyMDcuMDMgMTMwLjUyNWM5LjM3Mi05LjM3MyAyNC41NjgtOS4zNzMgMzMuOTQxLS4wMDF6IiBjbGFzcz0iIj48L3BhdGg+PC9zdmc+"}}]);
//# sourceMappingURL=component---cache-gatsby-mdx-mdx-wrappers-dir-3-f-626850903-c-353-a-16818-b-6-c-0-f-9-c-6-f-30-scope-hash-3010-b-3-badc-54-a-9-dfa-4-a-4-c-80-e-419-a-41-b-2-js-c7c0ad6f9d2fd4c203ee.js.map