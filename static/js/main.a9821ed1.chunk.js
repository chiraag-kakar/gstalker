(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(7),l=a.n(s),c=(a(14),a(1)),i=a(2),u=a(4),o=a(3),m=(a(15),a(5));a(16);function d(){return r.a.createElement("div",{class:"lds-ring"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))}a(17);function h(e){return r.a.createElement("ul",null,e.data.map((function(e){var t=e.id,a=e.full_name,n=e.stargazers_count,s=e.html_url;return r.a.createElement("li",{key:t,className:"repos-list"},r.a.createElement("h3",null,r.a.createElement("a",{className:"user-repos-name",href:s},a)),r.a.createElement("div",{className:"user-repos-stars"},r.a.createElement("i",{class:"fas fa-star"}),n))})))}function p(e){return r.a.createElement("ul",null,e.data.map((function(e){var t=e.id,a=e.login,n=e.avatar_url,s=e.html_url;return r.a.createElement("li",{key:t},r.a.createElement("img",{className:"user-data-img",src:n,alt:""}),r.a.createElement("h3",null,r.a.createElement("a",{className:"user-data-login",href:s},a)))})))}var f=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=r.a.createElement(h,{data:this.props.data}),t=r.a.createElement(p,{data:this.props.data});return this.props.repos?e:t}}]),a}(r.a.Component),E=a(8),g=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).fetchMoreData=function(){if(!0===n.state.hasMore){var e=n.state.nextDataPage;setTimeout((function(){fetch("".concat(n.props.data,"?page=").concat(e)).then((function(e){return e.json()})).then((function(t){t.length>0?n.setState((function(a){return{hasMore:!0,nextDataPage:e+1,data:a.data.concat(t)}})):n.setState({hasMore:!1,nextDataPage:2})}))}),500)}},n.state={loading:!0,data:"",hasMore:!0,nextDataPage:2},n.fetchData=n.fetchData.bind(Object(m.a)(n)),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){console.log("I'm"),this.setState({loading:!0}),this.fetchData(this.props.data)}},{key:"componentDidUpdate",value:function(e,t){e.data!==this.props.data&&(this.setState({display:!1,loading:!0}),this.fetchData(this.props.data))}},{key:"fetchData",value:function(e){var t=this;this.setState({loading:!0,display:!1}),setTimeout((function(){fetch(e).then((function(e){return e.json()})).then((function(e){t.setState({loading:!1,display:!0,data:e})})).catch((function(e){console.log(e)}))}),500)}},{key:"render",value:function(){return!0===this.state.loading?r.a.createElement("div",{className:"user-data-loading"},r.a.createElement(d,null)):!1===this.state.display?r.a.createElement("div",null):(e=this.state.data[0].full_name?r.a.createElement(f,{repos:!0,data:this.state.data}):r.a.createElement(f,{data:this.state.data}),r.a.createElement("div",{className:"user-data-grid"},r.a.createElement(E.a,{dataLength:this.state.data.length,next:this.fetchMoreData,hasMore:this.state.hasMore,loader:r.a.createElement("div",{className:"user-data-scrolling-loading"},r.a.createElement(d,null))},!0===this.state.loading?r.a.createElement(d,null):r.a.createElement("div",{className:"data-wrapper"},e))));var e}}]),a}(r.a.Component),v=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).getUserData=function(e,t){n.setState({display_data:!1}),setTimeout((function(){n.setState({data:t,display_data:!0})}),500)},n.state={data:"",display_data:!1},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t="";return this.state.data&&this.state.display_data&&(t=r.a.createElement(g,{data:this.state.data})),r.a.createElement("div",{className:"user-profile"},r.a.createElement("div",{className:"user-profile-grid"},r.a.createElement("div",{className:"user-img"},r.a.createElement("img",{className:"user-img",src:""+this.props.user.avatar_url,alt:""})),r.a.createElement("div",{className:"profile-user-settings"},r.a.createElement("h1",{className:"user-name"},this.props.user.name),r.a.createElement("a",{className:"btn-visit",href:this.props.user.html_url},"Visit Profile")),r.a.createElement("div",{className:"user-bio"},r.a.createElement("p",{className:"user-bio"},this.props.user.bio)),r.a.createElement("div",{className:"user-stats"},r.a.createElement("ul",null,r.a.createElement("li",{className:"user-following",onClick:function(t){return e.getUserData(t,"".concat(e.props.user.url,"/following"))}},r.a.createElement("b",null,this.props.user.following),r.a.createElement("p",null,"Following")),r.a.createElement("li",{className:"user-followers",onClick:function(t){return e.getUserData(t,"".concat(e.props.user.url,"/followers"))}},r.a.createElement("b",null,this.props.user.followers),r.a.createElement("p",null,"Followers")),r.a.createElement("li",{className:"user-repos",onClick:function(t){return e.getUserData(t,"".concat(e.props.user.url,"/repos"))}},r.a.createElement("b",null,this.props.user.public_repos),r.a.createElement("p",null,"Repos")))),t))}}]),a}(r.a.Component);a(18);var b=function(){return r.a.createElement("div",{id:"header"},r.a.createElement("center",null,r.a.createElement("h2",null,r.a.createElement("b",null,"Github User's Insights served using Github API"))))},N=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).getUser=function(){n.setState({loading:!0});var e=n.refs.name.value;setTimeout((function(){fetch("https://api.github.com/users/".concat(e)).then((function(e){return e.json()})).then((function(e){n.setState({user:e,loading:!1})}))}),1e3)},n.state={user:"",loading:!1},n}return Object(i.a)(a,[{key:"render",value:function(){var e,t=this.state.user.name;return!0===this.state.loading?e=r.a.createElement("div",{className:"loading-user-card"},r.a.createElement(d,null)):t&&(e=r.a.createElement(v,{user:this.state.user})),r.a.createElement("div",{className:"App gradient-background"},r.a.createElement(b,null),r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{id:"search-bar"},r.a.createElement("input",{type:"text",placeholder:"Enter UserName",ref:"name"}),r.a.createElement("button",{className:"searchButton",onClick:this.getUser},r.a.createElement("i",{className:"fas fa-search"})))),e)}}]),a}(n.Component);l.a.render(r.a.createElement(N,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.a9821ed1.chunk.js.map