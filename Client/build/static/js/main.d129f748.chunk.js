(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(20)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),o=n.n(c),i=(n(15),n(1)),s=n(2),l=n(4),u=n(3),m=n(5),b=(n(16),n(17),function(){return r.a.createElement("div",{className:"header"},r.a.createElement("p",null,"Wo Ist Luis?"))}),h=n(6),d=(n(18),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={bet:{person_name:"Peter Pan",time_bet:"10:17 Uhr"}},n.addBet=function(e){var t=n.state.bet;fetch("http://ec2-54-157-54-3.compute-1.amazonaws.com/bets/add",{headers:{"Content-Type":"application/json; charset=utf-8"},method:"POST",body:JSON.stringify({name:t.person_name,bet:t.time_bet})})},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state.bet;return r.a.createElement("div",{className:"form-container"},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{id:"name",className:"name-input",value:t.person_name,onChange:function(n){return e.setState({bet:Object(h.a)({},t,{person_name:n.target.value})})}}),r.a.createElement("label",{htmlFor:"bet"},"Gesch\xe4tzte Ankunftszeit"),r.a.createElement("input",{id:"bet",className:"bet-input",value:t.time_bet,onChange:function(n){return e.setState({bet:Object(h.a)({},t,{time_bet:n.target.value})})}}),r.a.createElement("button",{onClick:this.addBet},"Wette abgeben"))}}]),t}(a.Component)),f=(n(19),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={bets:[]},n.getBets=function(e){fetch("http://ec2-54-157-54-3.compute-1.amazonaws.com/bets").then(function(e){return e.json()}).then(function(e){return n.setState({bets:e.data})}).catch(function(e){return console.error(e)})},n.renderBets=function(e){var t=e.bet_id,n=e.name,a=e.bet;return r.a.createElement("div",{className:"bet-entry",key:t},r.a.createElement("p",{className:"name"},n),r.a.createElement("p",null,a))},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getBets()}},{key:"render",value:function(){var e=this.state.bets;return r.a.createElement("div",{className:"bet-container"},e.map(this.renderBets))}}]),t}(a.Component)),p=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement("div",{className:"content"},r.a.createElement(d,null),r.a.createElement(f,null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.d129f748.chunk.js.map