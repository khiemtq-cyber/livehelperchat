"use strict";(self.webpackChunkLHCReactAPP=self.webpackChunkLHCReactAPP||[]).push([[536],{3536:function(t,e,n){n.r(e);var u,o=n(7154),r=n.n(o),c=n(4575),i=n.n(c),a=n(3913),s=n.n(a),l=n(1506),f=n.n(l),m=n(2205),p=n.n(m),v=n(8585),b=n.n(v),d=n(9754),h=n.n(d),y=n(9713),k=n.n(y),Q=n(7294),R=n(6458),C=(n(6512),n(2137),n(488));var N=(0,R.$j)((function(t){return{chatwidget:t.chatwidget}}))(u=function(t){p()(o,t);var e,n,u=(e=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,u=h()(e);if(n){var o=h()(this).constructor;t=Reflect.construct(u,arguments,o)}else t=u.apply(this,arguments);return b()(this,t)});function o(t){var e;return i()(this,o),e=u.call(this,t),k()(f()(e),"state",{currentQuestion:1}),e}return s()(o,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"hideInvitation",value:function(t){}},{key:"fullInvitation",value:function(){}},{key:"render",value:function(){var t=this,e=1,n=0;return(0,C.domToReact)(this.props.surveyOptions,{replace:function(t){t.attribs&&"voteoption"===t.name&&n++}}),console.log(n),Q.createElement("div",null,(0,C.domToReact)(this.props.surveyOptions,{replace:function(u){if(u.attribs&&"voteoption"===u.name){var o=t.state.currentQuestion!=e?"d-none":"";return e++,Q.createElement("div",r()({},u.attribs,{className:o}),(0,C.domToReact)(u.children),Q.createElement("div",{className:"d-block"},t.state.currentQuestion>1&&Q.createElement("input",{type:"button",className:"btn btn-outline-info btn-sm",onClick:function(e){return t.setState({currentQuestion:t.state.currentQuestion-1})},value:"〈 Prev",name:"Prev"}),n>t.state.currentQuestion&&Q.createElement("input",{type:"button",className:"btn btn-outline-info btn-sm float-end",onClick:function(e){return t.setState({currentQuestion:t.state.currentQuestion+1})},value:"Next 〉",name:"Next"}),n==t.state.currentQuestion&&Q.createElement("input",{type:"button",className:"btn btn-outline-info btn-sm float-end",onClick:function(e){return t.setState({currentQuestion:t.state.currentQuestion+1})},value:"Submit",name:"Submit"})))}}}))}}]),o}(Q.Component))||u;e.default=N}}]);
//# sourceMappingURL=536.ec14ab446e2fd36a1bfa.js.map