(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{19:function(e,a,t){e.exports=t(44)},42:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(12),i=t.n(s),c=t(2),m=t.n(c),o=t(13),l=t(14),v=t(15),d=t(18),u=t(17),p=t(16),_=t.n(p);t(42);var E=function(e){var a=e.year,t=e.title,n=e.summary,s=e.poster,i=e.genres,c=e.order;return r.a.createElement("div",{className:"movie"},r.a.createElement("div",{className:"movie__order"},c+1),r.a.createElement("div",{className:"poster__shadow"},r.a.createElement("img",{src:s,alt:t,title:t})),r.a.createElement("div",{className:"movie__data"},r.a.createElement("div",{className:"movie__title"},t),r.a.createElement("div",{className:"movie__desc"},r.a.createElement("div",{className:"movie__year"},a),r.a.createElement("div",{className:"movie__genres"},i.slice(0,2).map((function(e,a){return r.a.createElement("span",{key:a,className:"genres__genre"},e)}))),r.a.createElement("p",{className:"movie__summary"},n.slice(0,100),"..."))))},g=(t(43),function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=a.call.apply(a,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(o.a)(m.a.mark((function a(){var t,n;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,_.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:t=a.sent,n=t.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return a.stop()}}),a)}))),e}return Object(v.a)(t,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,a=e.isLoading,t=e.movies;return r.a.createElement("section",{className:"container"},a?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"movies"},t.map((function(e,a){return r.a.createElement(E,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres,order:a})}))))}}]),t}(r.a.Component));i.a.render(r.a.createElement(r.a.StrictMode,null," ",r.a.createElement(g,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.b0faaf85.chunk.js.map