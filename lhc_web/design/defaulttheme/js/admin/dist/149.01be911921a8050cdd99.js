"use strict";(self.webpackChunkLHCReactAPPAdmin=self.webpackChunkLHCReactAPPAdmin||[]).push([[149],{6149:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var a,s=n(1002),c=n(885),d=n(7294),r=n(9669),o=n.n(r),l=n(6793),i=null,m=null;const u=function(e){var t=(0,d.useState)([]),n=(0,c.Z)(t,2),r=n[0],u=n[1],f=(0,d.useState)(!1),p=(0,c.Z)(f,2),g=p[0],h=p[1],v=(0,d.useReducer)((function(e){return e+1}),0),I=(0,c.Z)(v,2),C=(I[0],I[1]),_=(0,d.useState)(!0),b=(0,c.Z)(_,2),E=b[0],k=b[1],y=function(){g||o().get(WWW_DIR_JAVASCRIPT+"cannedmsg/filter/"+e.chatId).then((function(e){k(!1),u(e.data),h(!0),e.data.map((function(e,t){e.messages.map((function(e){1==e.current&&A(e)}))}))}))},x=function(t,n){void 0!==n&&(n.stopPropagation(),n.preventDefault()),setTimeout((function(){var n=new FormData;n.append("msg",t.msg);var a=!1;t.subject_ids&&(n.append("subjects_ids",t.subject_ids),a=!0),n.append("canned_id",t.id);var s=document.getElementById("CSChatMessage-"+e.chatId);s&&s.getAttribute("mode-write")&&n.append("mode_write",s.getAttribute("mode-write")),o().post(WWW_DIR_JAVASCRIPT+"chat/addmsgadmin/"+e.chatId,n,{headers:{"X-CSRFToken":confLH.csrf_token}}).then((function(t){return LHCCallbacks.addmsgadmin&&LHCCallbacks.addmsgadmin(e.chatId),ee.emitEvent("chatAddMsgAdmin",[e.chatId]),1==a&&lhinst.updateVoteStatus(e.chatId),lhinst.syncadmincall(),!0}))}),t.delay)},A=function(t){if(clearTimeout(i),null!==t){var n=document.getElementById("chat-render-preview-"+e.chatId);n.innerHTML=t.msg;var a=new FormData;a.append("msg",t.msg),a.append("msg_body",!0),i=setTimeout((function(){o().post(WWW_DIR_JAVASCRIPT+"chat/previewmessage/",a).then((function(e){n.innerHTML=e.data}))}),100)}else document.getElementById("chat-render-preview-"+e.chatId).innerHTML=""};(0,d.useEffect)((function(){r.map((function(t,n){t.messages.map((function(t){if(t.current){var n=document.getElementById("canned-msg-"+e.chatId+"-"+t.id);null==n||(a="canned-list-"+e.chatId,s="canned-msg-"+e.chatId+"-"+t.id,c={threshold:10},d=document.getElementById(a),r=document.getElementById(s),d.offsetHeight+d.scrollTop>=r.offsetTop+c.threshold&&r.offsetTop>d.scrollTop-c.threshold)||n.scrollIntoView()}var a,s,c,d,r}))}))})),(0,d.useEffect)((function(){function t(t,n){e.chatId==t&&o().get(WWW_DIR_JAVASCRIPT+"cannedmsg/filter/"+e.chatId).then((function(e){g||(u(e.data),A(null),h(!0)),e.data.map((function(e,t){e.messages.map((function(e){e.id==n&&x(e)}))}))}))}return ee.addListener("sendCannedByMessageId",t),ee.emitEvent("chatCannedMounted",[e.chatId]),function(){ee.removeListener("sendCannedByMessageId",t)}}),[]);var N=function(t,n){if((13==t.keyCode||38==t.keyCode||40==t.keyCode)&&1==n)return t.preventDefault(),void t.stopPropagation();if(27==t.keyCode&&(document.getElementById("CSChatMessage-"+e.chatId).focus(),k(!0)),13==t.keyCode)r.map((function(t,n){return t.messages.map((function(t){if(t.current){var n=document.getElementById("CSChatMessage-"+e.chatId);n.value=t.msg,n.focus(),t.subject_ids&&n.setAttribute("subjects_ids",t.subject_ids),n.setAttribute("canned_id",t.id),k(!0)}}))})),t.preventDefault(),t.stopPropagation();else if(38==t.keyCode){var c=!1;if(void 0!==r[0]&&1==r[0].messages[0].current){r[0].messages[0].current=!1;var d=r.length-1;r[d].messages[r[d].messages.length-1].current=!0,A(r[d].messages[r[d].messages.length-1]),r[d].expanded||(r[d].expanded=!0)}else r.map((function(e,t,n){return n[n.length-1-t].messages.map((function(e,a,s){var d=s[s.length-1-a];1==c?(n[n.length-1-t].expanded||(n[n.length-1-t].expanded=!0),d.current=!0,c=!1,A(d)):d.current&&(d.current=!1,c=!0)}))}));u(r),C(),t.preventDefault(),t.stopPropagation()}else if(40==t.keyCode)c=!1,void 0!==r[r.length-1]&&1==r[r.length-1].messages[r[r.length-1].messages.length-1].current?(r[r.length-1].messages[r[r.length-1].messages.length-1].current=!1,r[0].messages[0].current=!0,A(r[0].messages[0]),r[0].expanded||(r[0].expanded=!0)):r.map((function(e,t){e.messages.map((function(t){1==c?(e.expanded||(e.expanded=!0),t.current=!0,A(t),c=!1):t.current&&(t.current=!1,c=!0)}))})),u(r),C(),t.preventDefault(),t.stopPropagation();else if(!0===n){clearTimeout(m);var l=t.target.value;m=setTimeout((function(){"undefined"!=(0,s.Z)(a)&&a.cancel("Operation canceled due to new request."),a=o().CancelToken.source(),o().get(WWW_DIR_JAVASCRIPT+"cannedmsg/filter/"+e.chatId+"?q="+encodeURIComponent(l),{cancelToken:a.token}).then((function(e){u(e.data),k(!1),A(null),e.data.map((function(e,t){e.messages.map((function(e){1==e.current&&A(e)}))}))})).catch((function(e){o().isCancel(e)}))}),50)}},T=(0,l.$)("chat_canned"),w=T.t;return T.i18n,d.createElement(d.Fragment,null,d.createElement("div",{className:"col-12 col-xl-6 pb-1"},!g&&d.createElement("p",{className:"border mb-0 mt-0 pb-1 pt-1"},d.createElement("a",{className:"fs13 d-block",onClick:y},d.createElement("span",{className:"material-icons"},"expand_more"),w("chat_canned.canned"))),g&&E&&d.createElement("ul",{className:"list-unstyled fs13 border mt-0 mx300 mb-0"},d.createElement("li",{className:"pt-1 pb-1"},d.createElement("a",{className:"d-block",onClick:function(e){return k(!1)}},d.createElement("span",{className:"material-icons"},"expand_more"),w("chat_canned.canned")))),g&&!E&&d.createElement("ul",{className:"list-unstyled fs13 border mt-0 mx300",id:"canned-list-"+e.chatId},d.createElement("li",{className:"border-bottom pt-1 pb-1"},d.createElement("a",{onClick:function(e){return k(!0)}},d.createElement("span",{className:"material-icons"},"expand_less"),w("chat_canned.canned"))),r.map((function(t,n){return d.createElement("li",null,d.createElement("a",{className:"font-weight-bold",key:n,onClick:function(){return a=n,(e=t).expanded=!e.expanded,void u(r.map((function(t,n){return a==n?e:t})));var e,a}},d.createElement("span",{className:"material-icons"},t.expanded?"expand_less":"expand_more"),t.title," [",t.messages.length,t.messages.length>=50?"+":"","]"),t.expanded&&d.createElement("ul",{className:"list-unstyled ms-4"},t.messages.map((function(t){return d.createElement("li",{key:t.id,className:t.current?"font-italic font-weight-bold":"",id:"canned-msg-"+e.chatId+"-"+t.id},d.createElement("a",{className:"hover-canned d-block",onMouseLeave:function(e){return A(null),void r.map((function(e,t){e.messages.map((function(e){1==e.current&&A(e)}))}))},onMouseEnter:function(e){return function(e){A(e)}(t)},title:t.msg,onClick:function(n){return function(t){var n=document.getElementById("CSChatMessage-"+e.chatId);n.value=n.getAttribute("content_modified")?n.value+t.msg:t.msg,n.focus(),t.subject_ids&&n.setAttribute("subjects_ids",t.subject_ids),n.setAttribute("canned_id",t.id),A(t)}(t)}},d.createElement("span",{title:w("chat_canned.send_instantly"),onClick:function(e){return x(t,e)},className:"material-icons fs12"},"send")," ",t.message_title))}))))})))),d.createElement("div",{className:"col-12 col-xl-6"},d.createElement("input",{type:"text",onFocus:y,className:"form-control form-control-sm",onKeyUp:function(e){return N(e,!0)},onKeyDown:function(e){return N(e,!1)},defaultValue:"",placeholder:w("chat_canned.navigate")}),!E&&d.createElement("div",{className:"mx275 mh275 mt-1 break-words",id:"chat-render-preview-"+e.chatId})))}}}]);
//# sourceMappingURL=149.01be911921a8050cdd99.js.map