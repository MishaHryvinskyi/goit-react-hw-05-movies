"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[828],{576:function(n,r,t){t.d(r,{IQ:function(){return u},Jh:function(){return x},V0:function(){return f},YJ:function(){return s},gr:function(){return p}});var e=t(861),a=t(687),o=t.n(a),i=t(243),c="0f1efce4687e0d99ded26e5d35e0a6b0",p=function(){var n=(0,e.Z)(o().mark((function n(){var r,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"https://api.themoviedb.org/3/trending/movie/day",r={api_key:c},n.next=4,i.Z.get("https://api.themoviedb.org/3/trending/movie/day",{params:r});case 4:return t=n.sent,n.abrupt("return",t);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(o().mark((function n(r){var t,e,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="https://api.themoviedb.org/3/movie/".concat(r),e={api_key:c},n.next=4,i.Z.get(t,{params:e});case 4:return a=n.sent,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),u=function(){var n=(0,e.Z)(o().mark((function n(r){var t,e,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="https://api.themoviedb.org/3/movie/".concat(r,"/credits"),e={api_key:c},n.next=4,i.Z.get(t,{params:e});case 4:return a=n.sent,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),x=function(){var n=(0,e.Z)(o().mark((function n(r){var t,e,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="https://api.themoviedb.org/3/movie/".concat(r,"/reviews"),e={api_key:c},n.next=4,i.Z.get(t,{params:e});case 4:return a=n.sent,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(o().mark((function n(r){var t,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"https://api.themoviedb.org/3/search/movie",t={api_key:c,query:"".concat(r)},n.next=4,i.Z.get("https://api.themoviedb.org/3/search/movie",{params:t});case 4:return e=n.sent,n.abrupt("return",e);case 6:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()},828:function(n,r,t){t.r(r),t.d(r,{default:function(){return z}});var e,a,o,i,c,p,s=t(861),u=t(439),x=t(687),f=t.n(x),h=t(791),d=t(576),m=t(87),l=t(168),g=t(686),v=g.Z.h2(e||(e=(0,l.Z)(["\n    text-align: center;\n    color: #f3cba5;\n    margin: 30px;\n"]))),b=g.Z.div(a||(a=(0,l.Z)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding: 20px;\n"]))),w=g.Z.ul(o||(o=(0,l.Z)(["\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n"]))),Z=g.Z.li(i||(i=(0,l.Z)(["\n    display: flex;\n    width: 300px;\n    flex-direction: column;\n    margin-right: 10px;\n    margin-bottom: 10px;\n    &:nth-child(4n) {\n        margin-right: 0px;\n    }\n    background-color: #975a5e;\n    border-radius: 20px;\n"]))),y=g.Z.img(c||(c=(0,l.Z)(["\n    width: 250px;\n    height: auto;\n    margin-right: auto;\n    margin-left: auto;\n    margin-bottom: 10px;\n    margin-top: 30px;\n    border-radius: 8px;\n    cursor: pointer;\n    transition: transform 0.6s ease;\n    box-shadow: -1px 1px 49px -10px rgba(211,214,219,1);\n    -moz-box-shadow: -1px 1px 49px -10px rgba(211,214,219,1);\n    box-shadow: -1px 1px 49px -10px rgba(211,214,219,1);\n    &:hover {\n        transform: scale(1.05); \n        box-shadow:  -1px 1px 49px -10px rgba(243,203,165,1);\n        -moz-box-shadow: -1px 1px 49px -10px rgba(243,203,165,1);\n        box-shadow: -1px 1px 49px -10px rgba(243,203,165,1);\n      }\n    \n"]))),k=g.Z.h4(p||(p=(0,l.Z)(["\n    color: #f3cba5;\n    text-align: center;\n    margin-bottom:10px;\n"]))),j=t(184),_=function(){var n=(0,h.useState)([]),r=(0,u.Z)(n,2),t=r[0],e=r[1];return(0,h.useEffect)((function(){var n=function(){var n=(0,s.Z)(f().mark((function n(){var r,t;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,d.gr)();case 3:r=n.sent,t=r.data.results,e(t),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.error("Error fetching trend day movies:",n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,j.jsxs)(b,{children:[(0,j.jsx)(v,{children:"Trending Movies Today"}),(0,j.jsx)(w,{children:t.map((function(n){return(0,j.jsx)(m.rU,{to:"/movies/".concat(n.id),children:(0,j.jsxs)(Z,{children:[(0,j.jsx)(y,{src:"https://image.tmdb.org/t/p/w500/".concat(n.poster_path),alt:n.title}),(0,j.jsx)(k,{children:n.title})]})},n.id)}))})]})},z=function(){return(0,j.jsx)(_,{})}}}]);
//# sourceMappingURL=828.080eb832.chunk.js.map