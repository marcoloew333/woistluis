(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),o=n.n(c),i=(n(15),n(1)),l=n(4),s=n(5),m=n(7),u=n(6),d=n(8),b=(n(16),n(17),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={bets:[],bet:{person_name:"Peter Pan",time_bet:"10:17 Uhr"},isHidden:!0},n.getBets=function(e){fetch("http://ec2-54-157-54-3.compute-1.amazonaws.com/bets").then(function(e){return e.json()}).then(function(e){return n.setState({bets:e.data})}).catch(function(e){return console.error(e)})},n.addBet=function(e){var t=n.state.bet;fetch("http://ec2-54-157-54-3.compute-1.amazonaws.com/bets/add?name=".concat(t.person_name,"&bet=").concat(t.time_bet)).then(function(e){return e.json()}).then(n.getBets).catch(function(e){return console.error(e)})},n.renderBets=function(e){var t=e.bet_id,n=e.name,a=e.bet,c=e.timestamp;return r.a.createElement("div",{className:"bet-table"},r.a.createElement("div",{className:"bet-entries",key:t},r.a.createElement("p",null,n),r.a.createElement("p",null,a),r.a.createElement("p",null,c)))},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getBets()}},{key:"toggleHidden",value:function(){this.setState({isHidden:!this.state.isHidden})}},{key:"render",value:function(){var e=this,t=this.state,n=t.bets,a=t.bet;return r.a.createElement("div",{className:"app-container"},r.a.createElement("div",{className:"form-container"},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{id:"name",className:"name-input",value:a.person_name,onChange:function(t){return e.setState({bet:Object(i.a)({},a,{person_name:t.target.value})})}}),r.a.createElement("label",{htmlFor:"bet"},"Gesch\xe4tzte Ankunftszeit"),r.a.createElement("input",{id:"bet",className:"bet-input",value:a.time_bet,onChange:function(t){return e.setState({bet:Object(i.a)({},a,{time_bet:t.target.value})})}}),r.a.createElement("button",{onClick:function(){e.addBet(),e.toggleHidden(),e.getBets()}},"Wette abgeben"),!this.state.isHidden&&r.a.createElement(h,null)),r.a.createElement("div",{className:"bet-container"},r.a.createElement("div",{className:"column-titles"},r.a.createElement("p",null,"Name"),r.a.createElement("p",null,"Zeit"),r.a.createElement("p",null,"Timestamp")),n.map(this.renderBets)))}}]),t}(a.Component)),h=function(){return r.a.createElement("div",{className:"modal"},r.a.createElement("p",null,"Wette erfolgreich eingetragen."))},p=b;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.0bac26c0.chunk.js.map