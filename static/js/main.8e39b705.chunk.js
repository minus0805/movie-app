(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{32:function(e,t,a){e.exports=a(65)},55:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(28),s=a.n(o),c=a(7),i=a(1),m=a(15),l=a.n(m),u=a(29),v=a(10),d=a(11),p=a(13),E=a(12),_=a(30),f=a.n(_);a(55);var y=function(e){var t=e.id,a=e.year,n=e.title,o=e.summary,s=e.poster,i=e.genres,m=e.order;return r.a.createElement(c.b,{to:{pathname:"/movie/".concat(t),state:{id:t,year:a,title:n,summary:o,poster:s,genres:i,order:m}}},r.a.createElement("div",{className:"movie"},r.a.createElement("div",{className:"movie__order"},m+1),r.a.createElement("div",{className:"poster__shadow"},r.a.createElement("img",{src:s,alt:n,title:n})),r.a.createElement("div",{className:"movie__data"},r.a.createElement("div",{className:"movie__title"},n),r.a.createElement("div",{className:"movie__desc"},r.a.createElement("div",{className:"movie__year"},a),r.a.createElement("div",{className:"movie__genres"},i.slice(0,2).map((function(e,t){return r.a.createElement("span",{key:t,className:"genres__genre"},e)}))),r.a.createElement("p",{className:"movie__summary"},o.slice(0,100),"...")))))},h=(a(61),function(e){Object(p.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(u.a)(l.a.mark((function t(){var a,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:a=t.sent,n=a.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"movies"},a.map((function(e,t){return r.a.createElement(y,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres,order:t})}))))}}]),a}(r.a.Component));a(62);var b=function(){return r.a.createElement("div",{className:"about__text"},"About this page: I built it because I love movies.")},g=(a(63),function(e){Object(p.a)(a,e);var t=Object(E.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location;return console.log(e),e.state?r.a.createElement("div",{className:"detail"},e.state.title):null}}]),a}(r.a.Component));a(64);var N=function(){return r.a.createElement("div",{className:"nav"},r.a.createElement(c.b,{to:"/"},"Home"),r.a.createElement(c.b,{to:"/about"},"About"))};var j=function(){return r.a.createElement(c.a,null,r.a.createElement(N,null),r.a.createElement(i.a,{path:"/",exact:!0,component:h}),r.a.createElement(i.a,{path:"/about",component:b}),r.a.createElement(i.a,{path:"/movie/:id",component:g}))};s.a.render(r.a.createElement(r.a.StrictMode,null," ",r.a.createElement(j,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.8e39b705.chunk.js.map