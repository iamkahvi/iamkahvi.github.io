(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{153:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return d});a(75);var n=a(7),o=a.n(n),r=a(0),i=a.n(r),s=a(157),l=a(159),c=a(160),m=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,a=e.allMarkdownRemark.edges,n=e.site.siteMetadata.description;return i.a.createElement(l.a,{location:this.props.location,title:t,description:n},i.a.createElement(c.a,{title:t}),a.map(function(e){var t=e.node,a=e.previous,n=t.frontmatter.title||t.fields.slug,o=a||t,r=t.frontmatter.date.split(" ").pop(),l=r!==o.frontmatter.date.split(" ").pop();return i.a.createElement("div",{key:t.fields.slug},l&&i.a.createElement("h1",{className:"roboto f4 fw4 tc faded-blue mb4"},r),i.a.createElement("h3",{className:"mt0 mb2 pt3 bt b--light-gray"},i.a.createElement(s.a,{style:{boxShadow:"none"},className:"alink roboto b faded-orange",to:t.fields.slug},n)),i.a.createElement("small",{className:"f5 roboto faded-blue fr"},t.frontmatter.date),i.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt},className:"f6 roboto faded-blue"}))}))},t}(i.a.Component);t.default=m;var d="496064590"},156:function(e,t,a){var n;e.exports=(n=a(158))&&n.default||n},157:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(4),i=a.n(r),s=a(33),l=a.n(s);a.d(t,"a",function(){return l.a});a(156),o.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},158:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),o=a.n(n),r=a(4),i=a.n(r),s=a(55),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?o.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},159:function(e,t,a){"use strict";var n=a(7),o=a.n(n),r=a(0),i=a.n(r),s=a(157),l=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e,t=this.props,a=t.location,n=t.title,o=t.children,r=t.description;return e="/"===a.pathname?i.a.createElement("div",{className:"pt3"},i.a.createElement("p",null,i.a.createElement(s.a,{to:"/",style:{boxShadow:"none"},className:"alink helvetica faded-orange mh2"},"Home")," /",i.a.createElement(s.a,{to:"/book-list",style:{boxShadow:"none"},className:"alink helvetica faded-orange mh2"},"Book List")," /",i.a.createElement(s.a,{to:"/about",style:{boxShadow:"none"},className:"alink helvetica faded-orange mh2"},"About")),i.a.createElement("h1",{className:"mt3 mb0"},i.a.createElement(s.a,{style:{boxShadow:"none"},className:"f1 helvetica underline faded-orange",to:"/"}," ",n," ")),i.a.createElement("p",{className:"f6 roboto pt1 mt2 faded-blue"}," ",r," ")):i.a.createElement("div",{className:"pt3"},i.a.createElement("p",null,i.a.createElement(s.a,{to:"/",style:{boxShadow:"none"},className:"alink helvetica faded-orange mh2"},"Home")," /",i.a.createElement(s.a,{to:"/book-list",style:{boxShadow:"none"},className:"alink helvetica faded-orange mh2"},"Book List")," /",i.a.createElement(s.a,{to:"/about",style:{boxShadow:"none"},className:"alink helvetica faded-orange mh2"},"About"))),i.a.createElement("div",{className:"w-90 mw7 center"},i.a.createElement("header",{className:"pa2 pt3"},e),i.a.createElement("main",{className:"pa2"},o))},t}(i.a.Component);t.a=l},160:function(e,t,a){"use strict";var n=a(161),o=a(0),r=a.n(o),i=a(4),s=a.n(i),l=a(162),c=a.n(l);function m(e){var t=e.description,a=e.lang,o=e.meta,i=e.title,s=n.data.site,l=t||s.siteMetadata.description;return r.a.createElement(c.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s",meta:[{name:"description",content:l},{property:"og:title",content:i},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:l}].concat(o)})}m.defaultProps={lang:"en",meta:[],description:""},m.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),title:s.a.string.isRequired},t.a=m},161:function(e){e.exports={data:{site:{siteMetadata:{title:"kahvi's blog",description:"I create here sometimes. And rarely capitalize.",author:"Kahvi Patel"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-ad0ac8bb237661aa1837.js.map