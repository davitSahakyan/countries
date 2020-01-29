(this["webpackJsonphwk-08-02"]=this["webpackJsonphwk-08-02"]||[]).push([[0],{46:function(e,t,a){e.exports=a(63)},51:function(e,t,a){},52:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(23),c=a.n(r),i=a(21),o=a(13),u=a(9),m=a(14),s=a(15),E=a(16),h=a(22),d=(a(51),function(e){var t=e.title;return l.a.createElement("div",{className:"header-container"},l.a.createElement("div",null,l.a.createElement("h1",null,t)))}),p=(a(52),a(77)),g=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(m.a)(this,Object(s.a)(t).call(this))).state={countries:[],loading:!1,error:""},e}return Object(E.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),fetch("https://restcountries.eu/rest/v2/all").then((function(e){return e.json()})).then((function(t){e.setState({loading:!1,countries:t})})).catch((function(t){e.setState({loading:!1,error:t.errorMessage})}))}},{key:"render",value:function(){var e=this.state,t=e.countries,a=e.loading;return console.log(t),a?l.a.createElement("div",{className:"loading"},l.a.createElement(p.a,{disableShrink:!0})):l.a.createElement("div",{className:"table-container"},l.a.createElement("table",{className:"table"},l.a.createElement("thead",{className:"table-header"},l.a.createElement("tr",{className:"table-header-row"},l.a.createElement("td",null,"name"),l.a.createElement("td",null,"capital"),l.a.createElement("td",null,"population"),l.a.createElement("td",null,"area ",l.a.createElement("span",null,"km",l.a.createElement("sup",null,"2"))),l.a.createElement("td",null,"flag"))),l.a.createElement("tbody",null,t.map((function(e){return l.a.createElement("tr",{key:e.name},l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.capital),l.a.createElement("td",null,e.population),l.a.createElement("td",null,e.area,l.a.createElement("span",null)),l.a.createElement("td",null,l.a.createElement("img",{src:e.flag,alt:"flag",width:"30px"})))})))))}}]),t}(l.a.Component),f=(a(56),a(81)),b=a(85),v=a(84),j=a(79),y=a(82),O=a(83),k=a(80),w=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(m.a)(this,Object(s.a)(t).call(this))).state={countries:[],loading:!1,error:""},e}return Object(E.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),fetch("https://restcountries.eu/rest/v2/all").then((function(e){return e.json()})).then((function(t){e.setState({loading:!1,countries:t})})).catch((function(t){e.setState({loading:!1,error:t.errorMessage})}))}},{key:"render",value:function(){var e=this.state,t=e.countries,a=e.loading;return console.log(t),a?l.a.createElement("div",{className:"loading"},l.a.createElement(p.a,{disableShrink:!0})):l.a.createElement("div",{className:"table-container-ui"},l.a.createElement(j.a,{component:k.a},l.a.createElement(f.a,{size:"small","aria-label":"a dense table"},l.a.createElement(y.a,null,l.a.createElement(O.a,null,l.a.createElement(v.a,null,"Country"),l.a.createElement(v.a,{align:"right"},"capital"),l.a.createElement(v.a,{align:"right"},"population"),l.a.createElement(v.a,{align:"right"},"area"),l.a.createElement(v.a,{align:"right"},"flag"))),l.a.createElement(b.a,null,t.map((function(e){return l.a.createElement(O.a,{key:e.name},l.a.createElement(v.a,{component:"th",scope:"row"},e.name),l.a.createElement(v.a,{align:"right"},e.capital),l.a.createElement(v.a,{align:"right"},e.population),l.a.createElement(v.a,{align:"right"},e.area),l.a.createElement(v.a,{align:"right"}," ",l.a.createElement("img",{src:e.flag,alt:"flag",width:"30px"})))}))))))}}]),t}(l.a.Component),C=(a(57),a(58),["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]),N=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"letters-container"},C.map((function(t){return l.a.createElement("div",{key:t,id:t,onClick:e.props.filterCountries},l.a.createElement("span",{className:"letter"},t))})))}}]),t}(l.a.Component),S=a(88),x=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(m.a)(this,Object(s.a)(t).call(this))).filterCountries=function(t){e.setState({SearchLetter:t.currentTarget.id})},e.state={loading:!1,data:[],table:{minWidth:"320px"},SearchLetter:""},e}return Object(E.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),setTimeout((function(){return fetch("https://restcountries.eu/rest/v2/all").then((function(e){return e.json()})).then((function(e){return e})).then((function(t){return e.setState({data:t,loading:!1})})).catch((function(t){e.setState({error:t.errorMessage,loading:!1})}))}),1e3)}},{key:"render",value:function(){var e=this.state,t=e.data,a=e.loading,n=e.SearchLetter,r=t;return console.log(t),a?l.a.createElement("div",null,l.a.createElement(S.a,{variant:"query",color:"primary"})):(n&&(r=t.filter((function(e){return e.name[0].toLowerCase()===n}))),l.a.createElement("div",{className:"container-CountriesWithFilter"},l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(N,{filterCountries:this.filterCountries})),l.a.createElement(j.a,{component:k.a},l.a.createElement(f.a,{className:this.state.table,"aria-label":"simple table"},l.a.createElement(y.a,null,l.a.createElement(O.a,null,l.a.createElement(v.a,null,"name"),l.a.createElement(v.a,{align:"right"},"capital"),l.a.createElement(v.a,{align:"right"},"population"),l.a.createElement(v.a,{align:"right"},"area"),l.a.createElement(v.a,{align:"right"},"flag"))),l.a.createElement(b.a,null,r.map((function(e){return l.a.createElement(O.a,{key:e.name},l.a.createElement(v.a,{component:"th",scope:"row"},e.name),l.a.createElement(v.a,{align:"right"},e.capital),l.a.createElement(v.a,{align:"right"},e.population),l.a.createElement(v.a,{align:"right"},e.area),l.a.createElement(v.a,{align:"right"},l.a.createElement("img",{src:e.flag,alt:"flag",width:"30px"})," "))}))))))))}}]),t}(l.a.Component),D=a(32);a(59);var M=function(){var e=Object(n.useState)([]),t=Object(D.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),i=Object(D.a)(c,2),o=i[0],u=i[1];return Object(n.useEffect)((function(){return u(!0)}),fetch("https://restcountries.eu/rest/v2/all").then((function(e){return e.json()})).then((function(e){return u(!1),r(e),e})).catch((function(e){console.log(e)}))),o?l.a.createElement("div",{className:"loading-container"},l.a.createElement("div",null,"Loading....")):l.a.createElement("div",{className:"with-hooks-container"},l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Country"),l.a.createElement("th",null,"Capital"),l.a.createElement("th",null,"Population"),l.a.createElement("th",null,"Flag"))),l.a.createElement("tbody",null,a.map((function(e){return l.a.createElement("tr",{key:e.name},l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.capital),l.a.createElement("td",null,e.population),l.a.createElement("td",null," ",l.a.createElement("img",{src:e.flag,alt:"flag",width:"40px"})," "))})))))},L=(a(60),a(64)),W=a(86),q=function(){return l.a.createElement("div",{className:"navigation-container"},l.a.createElement("div",{className:"navigation"},l.a.createElement(W.a,null,l.a.createElement(i.b,{style:{textDecoration:"none"},to:"/"},l.a.createElement(L.a,{color:"primary","aria-label":"outlined primary "},"Countries")),l.a.createElement(i.b,{style:{textDecoration:"none"},to:"/material-ui"},l.a.createElement(L.a,{color:"primary","aria-label":"outlined primary "},"MaterialUi")),l.a.createElement(i.b,{style:{textDecoration:"none"},to:"/countries-with-filter"},l.a.createElement(L.a,{color:"primary","aria-label":"outlined primary "},"Countries With filter")),l.a.createElement(i.b,{style:{textDecoration:"none"},to:"/with-hooks"},l.a.createElement(L.a,{color:"primary","aria-label":"outlined primary "},"With Hooks")))))},z=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement(d,{title:"countries"}),l.a.createElement(q,null),l.a.createElement(h.c,null,l.a.createElement(h.a,{path:"/with-hooks",component:M}),l.a.createElement(h.a,{path:"/countries-with-filter",component:x}),l.a.createElement(h.a,{path:"/material-ui",component:w}),l.a.createElement(h.a,{path:"/",component:g,exact:!0})))}}]),t}(l.a.Component);c.a.render(l.a.createElement(i.a,null,l.a.createElement(z,null)),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.cc5294f3.chunk.js.map