import{c as e,S as t,i as n,f as i,s as o,x as s,j as r,d as l,t as a,k as c,v as u,g as d,m as _,q as m,n as f,h as p,y as g,u as h,a as b,o as y,V as w,e as v,B as I,C as k,l as T,p as x,G as C,w as E,F as $}from"./stores.58Do80Lg.js";import{l as F}from"./Services.ISLpxZ-Z.js";function S(e,t,n){const i=e.slice();return i[32]=t[n],i}function A(e,t,n){const i=e.slice();return i[35]=t[n],i}function B(e,t,n){const i=e.slice();return i[38]=t[n],i}function W(e,t,n){const i=e.slice();return i[41]=t[n],i}function L(e,t,n){const i=e.slice();return i[38]=t[n],i}function N(e){let t,n,i;return{c(){t=r("a"),t.textContent="access_time",c(t,"class","material-icons"),c(t,"title","<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','By user status on site');?>")},m(o,s){d(o,t,s),n||(i=m(t,"click",e[22]),n=!0)},p:f,d(e){e&&p(t),n=!1,i()}}}function V(e){let t,n=s(e[5].additionalColumns),i=[];for(let t=0;t<n.length;t+=1)i[t]=P(L(e,n,t));return{c(){for(let e=0;e<i.length;e+=1)i[e].c();t=v()},m(e,n){for(let t=0;t<i.length;t+=1)i[t]&&i[t].m(e,n);d(e,t,n)},p(e,o){if(32&o[0]){let r;for(n=s(e[5].additionalColumns),r=0;r<n.length;r+=1){const s=L(e,n,r);i[r]?i[r].p(s,o):(i[r]=P(s),i[r].c(),i[r].m(t.parentNode,t))}for(;r<i.length;r+=1)i[r].d(1);i.length=n.length}},d(e){e&&p(t),g(i,e)}}}function R(e){let t,n,i,o=e[38].name+"",s=""!==e[38].icon&&D(e);return{c(){t=r("th"),s&&s.c(),n=a(o),i=l()},m(e,o){d(e,t,o),s&&s.m(t,null),_(t,n),_(t,i)},p(e,i){""!==e[38].icon?s?s.p(e,i):(s=D(e),s.c(),s.m(t,n)):s&&(s.d(1),s=null),32&i[0]&&o!==(o=e[38].name+"")&&x(n,o)},d(e){e&&p(t),s&&s.d()}}}function D(e){let t,n,i=e[38].icon+"";return{c(){t=r("i"),n=a(i),c(t,"class","material-icons text-muted")},m(e,i){d(e,t,i),_(t,n)},p(e,t){32&t[0]&&i!==(i=e[38].icon+"")&&x(n,i)},d(e){e&&p(t)}}}function P(e){let t,n=1==e[38].oenabl&&!e[38].iconm&&R(e);return{c(){n&&n.c(),t=v()},m(e,i){n&&n.m(e,i),d(e,t,i)},p(e,i){1!=e[38].oenabl||e[38].iconm?n&&(n.d(1),n=null):n?n.p(e,i):(n=R(e),n.c(),n.m(t.parentNode,t))},d(e){e&&p(t),n&&n.d(e)}}}function U(e){let t,n,i,o,s,l,u,m,f=(e[32].label?e[32].label:"-")+"",g=e[32].ou.length+"";return{c(){t=r("tr"),n=r("td"),i=r("h5"),o=a(f),s=a(" ("),l=a(g),u=a(")"),c(i,"class",m="group-by-"+e[3].groupByField),c(n,"colspan","6")},m(e,r){d(e,t,r),_(t,n),_(n,i),_(i,o),_(i,s),_(i,l),_(i,u)},p(e,t){16&t[0]&&f!==(f=(e[32].label?e[32].label:"-")+"")&&x(o,f),16&t[0]&&g!==(g=e[32].ou.length+"")&&x(l,g),8&t[0]&&m!==(m="group-by-"+e[3].groupByField)&&c(i,"class",m)},d(e){e&&p(t)}}}function j(e){let t,n,i,o,s,f,g,b,y,w,v,I,k,T,$,F,S,A,B,W,L,N,V,R,D,P,U=e[35].lastactivity_ago+"",j=e[35].time_on_site_front+"",O=e[35].vid&&q(e),M=(e[35].page_title||e[35].current_page)&&Q(e),J=e[35].referrer&&K(e),z=e[5].additionalColumns&&X(e);function G(...t){return e[28](e[35],...t)}return{c(){t=r("tr"),n=r("td"),i=r("div"),o=a(U),s=a(" ago"),f=r("br"),g=l(),b=r("span"),y=a(j),w=l(),v=r("td"),O&&O.c(),I=l(),M&&M.c(),k=l(),J&&J.c(),T=l(),z&&z.c(),$=l(),F=r("td"),S=r("div"),A=r("div"),B=r("button"),B.textContent="chat",W=l(),L=r("button"),N=a("delete"),c(b,"class","fs-11"),c(n,"nowrap",""),c(n,"width","1%"),c(B,"class","btn btn-secondary btn-sm material-icons mat-100 me-0"),c(B,"title","Send message"),c(L,"class","btn btn-danger btn-sm material-icons mat-100 me-0"),c(L,"title",V="Delete, ID - "+e[35].id),c(A,"class","btn-group"),c(A,"role","group"),c(A,"aria-label","..."),C(S,"width","90px"),c(S,"ng-if","ou.vid"),c(t,"id",R="uo-vid-"+e[35].vid),c(t,"class","online-user-filter-row"),u(t,"online_user",e[2]&&e[35].last_check_time_ago<parseInt(e[2])+3),u(t,"recent_visit",e[35].last_visit_seconds_ago<15),u(t,"bg-red",e[2])},m(r,l){d(r,t,l),_(t,n),_(n,i),_(i,o),_(i,s),_(i,f),_(i,g),_(i,b),_(b,y),_(t,w),_(t,v),O&&O.m(v,null),_(v,I),M&&M.m(v,null),_(v,k),J&&J.m(v,null),_(t,T),z&&z.m(t,null),_(t,$),_(t,F),_(F,S),_(S,A),_(A,B),_(A,W),_(A,L),_(L,N),D||(P=[m(B,"click",G),m(L,"click",(function(){E(e[6](e[35]))&&e[6](e[35]).apply(this,arguments)}))],D=!0)},p(n,i){e=n,16&i[0]&&U!==(U=e[35].lastactivity_ago+"")&&x(o,U),16&i[0]&&j!==(j=e[35].time_on_site_front+"")&&x(y,j),e[35].vid?O?O.p(e,i):(O=q(e),O.c(),O.m(v,I)):O&&(O.d(1),O=null),e[35].page_title||e[35].current_page?M?M.p(e,i):(M=Q(e),M.c(),M.m(v,k)):M&&(M.d(1),M=null),e[35].referrer?J?J.p(e,i):(J=K(e),J.c(),J.m(v,null)):J&&(J.d(1),J=null),e[5].additionalColumns?z?z.p(e,i):(z=X(e),z.c(),z.m(t,$)):z&&(z.d(1),z=null),16&i[0]&&V!==(V="Delete, ID - "+e[35].id)&&c(L,"title",V),16&i[0]&&R!==(R="uo-vid-"+e[35].vid)&&c(t,"id",R),20&i[0]&&u(t,"online_user",e[2]&&e[35].last_check_time_ago<parseInt(e[2])+3),16&i[0]&&u(t,"recent_visit",e[35].last_visit_seconds_ago<15),4&i[0]&&u(t,"bg-red",e[2])},d(e){e&&p(t),O&&O.d(),M&&M.d(),J&&J.d(),z&&z.d(),D=!1,h(P)}}}function q(e){let t,n,i,o,s,f,g,b,y,w,v,I,k,T,C,E,$,F,S,A=e[35].nick+"",B=e[35].user_country_code&&O(e);function W(...t){return e[25](e[35],...t)}let L=e[35].chat_id>0&&1==e[35].can_view_chat&&M(e),N=e[35].total_visits>1&&J(e),V=1==e[35].total_visits&&z(),R=e[35].operator_message&&G(e),D=""!=e[35].user_country_code&&H(e);function P(...t){return e[27](e[35],...t)}return{c(){t=r("div"),n=r("a"),i=r("i"),i.textContent="content_copy",s=l(),f=r("a"),g=r("i"),g.textContent="info_outline",b=a(A),y=a(" \n                                "),B&&B.c(),v=l(),L&&L.c(),I=l(),N&&N.c(),k=l(),V&&V.c(),T=l(),R&&R.c(),C=l(),D&&D.c(),E=l(),$=r("a"),$.innerHTML='<i class="material-icons">send</i>Start a chat',c(i,"class","material-icons me-0"),c(n,"href","#"),c(n,"class","btn btn-xs btn-secondary"),c(n,"title","Copy nick"),c(n,"onclick","lhinst.copyContent($(this))"),c(n,"data-success","Copied"),c(n,"data-copy",o=e[35].nick),c(g,"class","material-icons"),c(f,"href","#"),c(f,"class","btn btn-xs btn-secondary"),c(f,"id",w="ou-face-"+e[35].vid),u(f,"icon-user-away",1==e[35].online_status),u(f,"icon-user-online",!e[35].online_status||0==e[35].online_status),c($,"href","#"),c($,"class","btn btn-xs btn-secondary"),c(t,"class","btn-group"),c(t,"role","group"),c(t,"aria-label","...")},m(e,o){d(e,t,o),_(t,n),_(n,i),_(t,s),_(t,f),_(f,g),_(f,b),_(f,y),B&&B.m(f,null),_(t,v),L&&L.m(t,null),_(t,I),N&&N.m(t,null),_(t,k),V&&V.m(t,null),_(t,T),R&&R.m(t,null),_(t,C),D&&D.m(t,null),_(t,E),_(t,$),F||(S=[m(f,"click",W),m($,"click",P)],F=!0)},p(i,s){e=i,16&s[0]&&o!==(o=e[35].nick)&&c(n,"data-copy",o),16&s[0]&&A!==(A=e[35].nick+"")&&x(b,A),e[35].user_country_code?B?B.p(e,s):(B=O(e),B.c(),B.m(f,null)):B&&(B.d(1),B=null),16&s[0]&&w!==(w="ou-face-"+e[35].vid)&&c(f,"id",w),16&s[0]&&u(f,"icon-user-away",1==e[35].online_status),16&s[0]&&u(f,"icon-user-online",!e[35].online_status||0==e[35].online_status),e[35].chat_id>0&&1==e[35].can_view_chat?L?L.p(e,s):(L=M(e),L.c(),L.m(t,I)):L&&(L.d(1),L=null),e[35].total_visits>1?N?N.p(e,s):(N=J(e),N.c(),N.m(t,k)):N&&(N.d(1),N=null),1==e[35].total_visits?V||(V=z(),V.c(),V.m(t,T)):V&&(V.d(1),V=null),e[35].operator_message?R?R.p(e,s):(R=G(e),R.c(),R.m(t,C)):R&&(R.d(1),R=null),""!=e[35].user_country_code?D?D.p(e,s):(D=H(e),D.c(),D.m(t,E)):D&&(D.d(1),D=null)},d(e){e&&p(t),B&&B.d(),L&&L.d(),N&&N.d(),V&&V.d(),R&&R.d(),D&&D.d(),F=!1,h(S)}}}function O(e){let t,n,i,o,s;return{c(){t=r("span"),n=r("img"),$(n.src,i=e[0]+"/"+e[35].user_country_code+".png")||c(n,"src",i),c(n,"alt",o=e[35].user_country_name),c(n,"title",s=e[35].user_country_name)},m(e,i){d(e,t,i),_(t,n)},p(e,t){17&t[0]&&!$(n.src,i=e[0]+"/"+e[35].user_country_code+".png")&&c(n,"src",i),16&t[0]&&o!==(o=e[35].user_country_name)&&c(n,"alt",o),16&t[0]&&s!==(s=e[35].user_country_name)&&c(n,"title",s)},d(e){e&&p(t)}}}function M(e){let t,n,i;function o(...t){return e[26](e[35],...t)}return{c(){t=r("span"),t.innerHTML='<i class="material-icons">chat</i>Chat',c(t,"class","btn btn-xs btn-success action-image")},m(e,s){d(e,t,s),n||(i=m(t,"click",o),n=!0)},p(t,n){e=t},d(e){e&&p(t),n=!1,i()}}}function J(e){let t,n,i,o,s,l=e[35].total_visits+"";return{c(){t=r("span"),n=r("i"),n.textContent="face",i=a("Returning ("),o=a(l),s=a(")"),c(n,"class","material-icons"),c(t,"class","btn btn-xs btn-info")},m(e,r){d(e,t,r),_(t,n),_(t,i),_(t,o),_(t,s)},p(e,t){16&t[0]&&l!==(l=e[35].total_visits+"")&&x(o,l)},d(e){e&&p(t)}}}function z(e){let t;return{c(){t=r("span"),t.innerHTML='<i class="material-icons">face</i>New',c(t,"class","btn btn-success btn-xs")},m(e,n){d(e,t,n)},d(e){e&&p(t)}}}function G(e){let t,n,i,o,s,l=1==e[35].message_seen?"tr.msg_seen":"tr.msg_not_seen";return{c(){t=r("span"),n=r("i"),n.textContent="chat_bubble_outline",i=a(l),c(n,"class","material-icons"),c(t,"title",o=e[35].operator_user_string+" has sent a message to the user"),c(t,"class",s="btn btn-xs "+(1==e[35].message_seen?"btn-success":"btn-danger"))},m(e,o){d(e,t,o),_(t,n),_(t,i)},p(e,n){16&n[0]&&l!==(l=1==e[35].message_seen?"tr.msg_seen":"tr.msg_not_seen")&&x(i,l),16&n[0]&&o!==(o=e[35].operator_user_string+" has sent a message to the user")&&c(t,"title",o),16&n[0]&&s!==(s="btn btn-xs "+(1==e[35].message_seen?"btn-success":"btn-danger"))&&c(t,"class",s)},d(e){e&&p(t)}}}function H(e){let t,n,i,o,s,l,u,m,f=e[35].user_country_name+"",g=""!=e[35].city?" | "+e[35].city:"",h=e[35].visitor_tz+"",b=e[35].visitor_tz_time+"";return{c(){t=r("span"),n=a(f),i=a(g),o=r("span"),s=r("i"),s.textContent="access_time",l=a(h),u=a(" - "),m=a(b),c(t,"class","btn btn-xs btn-primary up-case-first"),c(t,"ng-if","ou.user_country_code != ''"),c(s,"class","material-icons"),c(o,"class","btn btn-primary btn-xs")},m(e,r){d(e,t,r),_(t,n),_(t,i),d(e,o,r),_(o,s),_(o,l),_(o,u),_(o,m)},p(e,t){16&t[0]&&f!==(f=e[35].user_country_name+"")&&x(n,f),16&t[0]&&g!==(g=""!=e[35].city?" | "+e[35].city:"")&&x(i,g),16&t[0]&&h!==(h=e[35].visitor_tz+"")&&x(l,h),16&t[0]&&b!==(b=e[35].visitor_tz_time+"")&&x(m,b)},d(e){e&&(p(t),p(o))}}}function Q(e){let t,n,i,o,s,l,u=(e[35].page_title||e[35].current_page)+"";return{c(){t=r("div"),n=r("i"),n.textContent="",i=r("a"),o=a(u),c(n,"class","material-icons"),c(n,"title","Page"),c(i,"target","_blank"),c(i,"href",s=e[35].current_page),c(i,"title",l=e[35].current_page),c(t,"class","abbr-list")},m(e,s){d(e,t,s),_(t,n),_(t,i),_(i,o)},p(e,t){16&t[0]&&u!==(u=(e[35].page_title||e[35].current_page)+"")&&x(o,u),16&t[0]&&s!==(s=e[35].current_page)&&c(i,"href",s),16&t[0]&&l!==(l=e[35].current_page)&&c(i,"title",l)},d(e){e&&p(t)}}}function K(e){let t,n,i,o,s,l,u=e[35].referrer+"";return{c(){t=r("div"),n=r("i"),n.textContent="",i=r("a"),o=a(u),c(n,"class","material-icons"),c(n,"title","From"),c(i,"target","_blank"),c(i,"href",s="http:"+e[35].referrer),c(i,"title",l=e[35].referrer),c(t,"class","abbr-list")},m(e,s){d(e,t,s),_(t,n),_(t,i),_(i,o)},p(e,t){16&t[0]&&u!==(u=e[35].referrer+"")&&x(o,u),16&t[0]&&s!==(s="http:"+e[35].referrer)&&c(i,"href",s),16&t[0]&&l!==(l=e[35].referrer)&&c(i,"title",l)},d(e){e&&p(t)}}}function X(e){let t,n=s(e[5].additionalColumns),i=[];for(let t=0;t<n.length;t+=1)i[t]=ne(B(e,n,t));return{c(){for(let e=0;e<i.length;e+=1)i[e].c();t=v()},m(e,n){for(let t=0;t<i.length;t+=1)i[t]&&i[t].m(e,n);d(e,t,n)},p(e,o){if(48&o[0]){let r;for(n=s(e[5].additionalColumns),r=0;r<n.length;r+=1){const s=B(e,n,r);i[r]?i[r].p(s,o):(i[r]=ne(s),i[r].c(),i[r].m(t.parentNode,t))}for(;r<i.length;r+=1)i[r].d(1);i.length=n.length}},d(e){e&&p(t),g(i,e)}}}function Y(e){let t,n,i=s(e[38].items),o=[];for(let t=0;t<i.length;t+=1)o[t]=te(W(e,i,t));return{c(){t=r("td");for(let e=0;e<o.length;e+=1)o[e].c();n=l()},m(e,i){d(e,t,i);for(let e=0;e<o.length;e+=1)o[e]&&o[e].m(t,null);_(t,n)},p(e,r){if(48&r[0]){let l;for(i=s(e[38].items),l=0;l<i.length;l+=1){const s=W(e,i,l);o[l]?o[l].p(s,r):(o[l]=te(s),o[l].c(),o[l].m(t,n))}for(;l<o.length;l+=1)o[l].d(1);o.length=i.length}},d(e){e&&p(t),g(o,e)}}}function Z(e){let t,n,i=e[35][e[41]]+"";return{c(){t=r("div"),n=a(i),c(t,"class","abbr-list")},m(e,i){d(e,t,i),_(t,n)},p(e,t){48&t[0]&&i!==(i=e[35][e[41]]+"")&&x(n,i)},d(e){e&&p(t)}}}function te(e){let t,n=e[35][e[41]]&&Z(e);return{c(){n&&n.c(),t=v()},m(e,i){n&&n.m(e,i),d(e,t,i)},p(e,i){e[35][e[41]]?n?n.p(e,i):(n=Z(e),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},d(e){e&&p(t),n&&n.d(e)}}}function ne(e){let t,n=1==e[38].oenabl&&!e[38].iconm&&Y(e);return{c(){n&&n.c(),t=v()},m(e,i){n&&n.m(e,i),d(e,t,i)},p(e,i){1!=e[38].oenabl||e[38].iconm?n&&(n.d(1),n=null):n?n.p(e,i):(n=Y(e),n.c(),n.m(t.parentNode,t))},d(e){e&&p(t),n&&n.d(e)}}}function ie(e,t){let n,i,o=""==t[3].query||t[7](t[35]),s=o&&j(t);return{key:e,first:null,c(){n=v(),s&&s.c(),i=v(),this.first=n},m(e,t){d(e,n,t),s&&s.m(e,t),d(e,i,t)},p(e,n){t=e,24&n[0]&&(o=""==t[3].query||t[7](t[35])),o?s?s.p(t,n):(s=j(t),s.c(),s.m(i.parentNode,i)):s&&(s.d(1),s=null)},d(e){e&&(p(n),p(i)),s&&s.d(e)}}}function oe(e){let t,n,i,o=[],a=new Map,c="none"!=e[3].groupByField&&U(e),u=s(e[32].ou);const m=e=>e[35].id;for(let t=0;t<u.length;t+=1){let n=A(e,u,t),i=m(n);a.set(i,o[t]=ie(i,n))}return{c(){t=r("tbody"),c&&c.c(),n=l();for(let e=0;e<o.length;e+=1)o[e].c();i=l()},m(e,s){d(e,t,s),c&&c.m(t,null),_(t,n);for(let e=0;e<o.length;e+=1)o[e]&&o[e].m(t,null);_(t,i)},p(e,r){"none"!=e[3].groupByField?c?c.p(e,r):(c=U(e),c.c(),c.m(t,n)):c&&(c.d(1),c=null),253&r[0]&&(u=s(e[32].ou),o=I(o,r,m,1,e,u,a,t,k,ie,i,A))},d(e){e&&p(t),c&&c.d();for(let e=0;e<o.length;e+=1)o[e].d()}}}function se(e){let t,n,i,o,b,y,w,v,I,k,T,x,C,E,$,F,A,B,W,L,R=e[1]&&N(e),D=e[5].additionalColumns&&V(e),P=s(e[4].onlineusersGrouped),U=[];for(let t=0;t<P.length;t+=1)U[t]=oe(S(e,P,t));return{c(){t=r("table"),n=r("thead"),i=r("tr"),o=r("th"),b=r("a"),b.textContent="access_time",y=l(),w=r("a"),w.textContent="access_time",v=l(),I=r("a"),I.textContent="access_time",k=l(),R&&R.c(),T=l(),x=r("a"),x.textContent="Page",C=a(" | "),E=r("a"),E.textContent="Came from",$=l(),D&&D.c(),F=l(),A=r("th"),A.textContent="Action",B=l();for(let e=0;e<U.length;e+=1)U[e].c();c(b,"class","material-icons"),c(b,"title","Last activity"),c(w,"class","material-icons"),c(w,"title","<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','Time on site');?>"),c(I,"class","material-icons"),c(I,"title","<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','Visitor local time');?>"),c(x,"href","#"),c(E,"href","#"),c(o,"width","50%"),c(o,"colspan","2"),c(A,"width","1%"),c(t,"class","table table-sm online-users-table"),c(t,"cellpadding","0"),c(t,"cellspacing","0"),u(t,"filter-online-active",e[3].online_connected)},m(s,r){d(s,t,r),_(t,n),_(n,i),_(i,o),_(o,b),_(o,y),_(o,w),_(o,v),_(o,I),_(o,k),R&&R.m(o,null),_(o,T),_(o,x),_(o,C),_(o,E),_(i,$),D&&D.m(i,null),_(i,F),_(i,A),_(t,B);for(let e=0;e<U.length;e+=1)U[e]&&U[e].m(t,null);W||(L=[m(b,"click",e[19]),m(w,"click",e[20]),m(I,"click",e[21]),m(x,"click",e[23]),m(E,"click",e[24])],W=!0)},p(e,n){if(e[1]?R?R.p(e,n):(R=N(e),R.c(),R.m(o,T)):R&&(R.d(1),R=null),e[5].additionalColumns?D?D.p(e,n):(D=V(e),D.c(),D.m(i,F)):D&&(D.d(1),D=null),253&n[0]){let i;for(P=s(e[4].onlineusersGrouped),i=0;i<P.length;i+=1){const o=S(e,P,i);U[i]?U[i].p(o,n):(U[i]=oe(o),U[i].c(),U[i].m(t,null))}for(;i<U.length;i+=1)U[i].d(1);U.length=P.length}8&n[0]&&u(t,"filter-online-active",e[3].online_connected)},i:f,o:f,d(e){e&&p(t),R&&R.d(),D&&D.d(),g(U,e),W=!1,h(L)}}}function re(e,t){let n=document.getElementById("svelte-"+e);n&&(n.innerText=t)}function le(e,t){let n=document.getElementById("svelte-"+e);n&&(n.value=t)}function ae(e,t,n){e.sort((function(e,i){return e[t]<=i[t]?n&&!1!==n?1:-1:n&&!1!==n?-1:1}))}function ce(e,t,n){let i,o;b(e,w,(e=>n(4,i=e))),b(e,T,(e=>n(5,o=e)));let{www_dir_flags:s=""}=t,{track_is_online:r=!1}=t,{soundEnabled:l}=t,{notificationEnabled:a}=t,{online_connected:c}=t,{max_rows:u}=t,{timeout:d="3600"}=t,{country:_="none"}=t,{forbiddenVisitors:m="false"}=t,{updateTimeout:f=10}=t,{time_on_site:p=""}=t,{online_check:g=null}=t,{groupByField:h}=t,v={timeoutVisitors:null,department_dpgroups:[],department:[],time_on_site:p,country:_,max_rows:parseInt(u),updateTimeout:parseInt(f),timeout:d,lhcListRequestInProgress:!1,timeoutControl:null,forbiddenVisitors:"true"===m,soundEnabled:"true"===l,notificationEnabled:"true"===a,lastSyncSkipped:!1,attrf_key_1:"",attrf_val_1:"",attrf_key_2:"",attrf_val_2:"",attrf_key_3:"",attrf_val_3:"",attrf_key_4:"",attrf_val_4:"",attrf_key_5:"",attrf_val_5:"",query:"",onlineusersPreviousID:[],wasInitiated:!1,online_connected:"true"===c,predicate:"last_visit",reverse:!0,groupByField:h};async function I(){if(1!=lhinst.disableSync&&1!=v.forbiddenVisitors){var e=!1,t=document.getElementById("onlineusers");if(null!==t&&(e=t.classList.contains("active")),0==e){var o=document.getElementById("map");null!==o&&(e=o.classList.contains("active"))}if(0==e)if(null!==document.getElementById("widget-onvisitors-body")){var s=document.getElementById("dashboard");null!==s&&s.classList.contains("active")&&(e=!0)}if(!1!==e){n(3,v.lastSyncSkipped=!1,v),clearTimeout(v.timeoutControl);try{const e=await fetch(WWW_DIR_JAVASCRIPT+"chat/onlineusers/(method)/ajax/(timeout)/"+v.timeout+(v.department_dpgroups.length>0?"/(department_dpgroups)/"+v.department_dpgroups.join("/"):"")+(v.department.length>0?"/(department)/"+v.department.join("/"):"")+(v.max_rows>0?"/(maxrows)/"+v.max_rows:"")+(""!=v.country?"/(country)/"+v.country:"")+(""!=v.time_on_site?"/(timeonsite)/"+encodeURIComponent(v.time_on_site):""),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}});if(!e.ok)throw new Error("Network response was not OK ["+e.status+"] ["+e.statusText+"]");const t=await e.json();w.update((e=>(e.onlineusers=t.list,e.onlineusers_tt=t.tt,"none"!==v.groupByField?e.onlineusersGrouped=function(e){let t=[];ae(e,v.groupByField);for(var n="_INVALID_GROUP_VALUE_",i=0;i<e.length;i++){var o=e[i];if(o[v.groupByField]!==n){var s={label:o[v.groupByField],id:i,ou:[]};n=s.label,t.push(s)}s.ou.push(o)}return t}(e.onlineusers):(e.onlineusersGrouped=[],e.onlineusersGrouped.push({label:"",id:0,ou:e.onlineusers})),e.onlineusersGrouped.forEach((e=>{ae(e.ou,v.predicate,v.reverse)})),e)));let o=document.getElementById("online-users-count");if(o&&(o.innerText=t.list.length),ee.emitEvent("chatAdminSyncOnlineVisitors",[t.list]),v.notificationEnabled||v.soundEnabled){var r=!1,l=[];if(i.onlineusers.forEach((e=>{var t=!0;-1===v.onlineusersPreviousID.indexOf(e.id)&&(t=!1,v.onlineusersPreviousID.push(e.id)),!0===v.wasInitiated&&!1===t&&(r=!0,l.push(e))})),1==r){if(v.soundEnabled&&Modernizr.audio){var a=new Audio;a.src=Modernizr.audio.ogg?WWW_DIR_JAVASCRIPT_FILES+"/new_visitor.ogg":Modernizr.audio.mp3?WWW_DIR_JAVASCRIPT_FILES+"/new_visitor.mp3":WWW_DIR_JAVASCRIPT_FILES+"/new_visitor.wav",a.load(),setTimeout((function(){a.play()}),500)}v.notificationEnabled&&(window.webkitNotifications||window.Notification)&&angular.forEach(l,(function(e,t){if(window.webkitNotifications)0==window.webkitNotifications.checkPermission()&&((n=window.webkitNotifications.createNotification(WWW_DIR_JAVASCRIPT_FILES_NOTIFICATION+"/notification.png",e.ip+(""!=e.user_country_name?", "+e.user_country_name:""),(""!=e.page_title?e.page_title+"\n-----\n":"")+(""!=e.referrer?e.referrer+"\n-----\n":""))).onclick=function(){n.cancel()},n.show(),setTimeout((function(){n.cancel()}),15e3));else if(window.Notification){var n;if("granted"==window.Notification.permission)(n=new Notification(e.ip+(""!=e.user_country_name?", "+e.user_country_name:""),{icon:WWW_DIR_JAVASCRIPT_FILES_NOTIFICATION+"/notification.png",body:(""!=e.page_title?e.page_title+"\n-----\n":"")+(""!=e.referrer?e.referrer+"\n-----\n":"")})).onclick=function(){n.close()},setTimeout((function(){n.close()}),15e3)}}))}n(3,v.wasInitiated=!0,v),v.onlineusersPreviousID.length>100&&(n(3,v.wasInitiated=!1,v),n(3,v.onlineusersPreviousID=[],v))}!0!==v.forbiddenVisitors&&n(3,v.timeoutControl=setTimeout((function(){I()}),1e3*v.updateTimeout),v)}catch(e){n(3,v.timeoutControl=setTimeout((function(){I()}),1e3*v.updateTimeout),v),console.error("There has been a problem with your fetch operation:",e)}}else n(3,v.lastSyncSkipped=!0,v)}}function k(e){n(3,v.predicate=e,v),n(3,v.reverse=!v.reverse,v),I()}ee.addListener("svelteOnlineUserSetting",(function(e,t){if("disableNewUserBNotif"==e)n(3,v.notificationEnabled=!v.notificationEnabled,v),lhinst.changeUserSettings("new_user_bn",1==v.notificationEnabled?1:0),re("disableNewUserBNotif",v.notificationEnabled?"visibility":"visibility_off");else if("disableNewUserSound"==e)n(3,v.soundEnabled=!v.soundEnabled,v),lhinst.changeUserSettings("new_user_sound",1==v.soundEnabled?1:0),re("disableNewUserSound",v.soundEnabled?"volume_up":"volume_off");else if("showConnected"==e)n(3,v.online_connected=!v.online_connected,v),lhinst.changeUserSettings("online_connected",1==v.online_connected?1:0),re("showConnected",v.online_connected?"flash_on":"flash_off");else if("countryFilter"==e)n(3,v.country=t,v),lhinst.changeUserSettingsIndifferent("ocountry",t),setTimeout((()=>I()),500);else if("maxrowsFilter"==e)lhinst.changeUserSettingsIndifferent("omax_rows",t),n(3,v.max_rows=parseInt(t),v),setTimeout((()=>I()),500);else if("userTimeoutFilter"==e)lhinst.changeUserSettingsIndifferent("ouser_timeout",t),n(3,v.timeout=parseInt(t),v),setTimeout((()=>I()),500);else if("updateTimeoutFilter"==e)lhinst.changeUserSettingsIndifferent("oupdate_timeout",t),n(3,v.updateTimeout=parseInt(t),v),setTimeout((()=>I()),500);else if("timeOnSiteFilter"==e)lhinst.changeUserSettingsIndifferent("otime_on_site",""==t?"none":t),n(3,v.time_on_site=t,v),setTimeout((()=>I()),500);else if("groupBy"==e)n(3,v.groupByField=t,v),lhinst.changeUserSettingsIndifferent("ogroup_by",t),setTimeout((()=>I()),500);else if("setQuery"==e)n(3,v.query=t,v);else if("departments"==e){let e=[];jQuery(".online-department-filter input[name^=department_ids]").each((function(t){e.push(parseInt(this.value))})),n(3,v.department=e,v),setTimeout((()=>I()),500),F.setLocalSettings("department_online",v.department)}})),ee.addListener("svelteOnlineUserSettingKey",(function(e,t){lhinst.changeUserSettingsIndifferent(e,t),setTimeout((()=>I()),500)})),y((async()=>{if(!0!==v.forbiddenVisitors&&["onlineusers","widget-onvisitors","map","dashboard"].forEach((function(e){var t=document.getElementById(e);null!==t&&new MutationObserver((function(e){t.classList.contains("active")&&!0===v.lastSyncSkipped&&I()})).observe(t,{attributes:!0,attributeFilter:["class"],childList:!1,characterData:!1})})),window.onlineAttributeFilter){n(3,v.attrf_key_1=window.onlineAttributeFilter.attrf_key_1,v),n(3,v.attrf_val_1=window.onlineAttributeFilter.attrf_val_1,v),n(3,v.attrf_key_2=window.onlineAttributeFilter.attrf_key_2,v),n(3,v.attrf_val_2=window.onlineAttributeFilter.attrf_val_2,v),n(3,v.attrf_key_3=window.onlineAttributeFilter.attrf_key_3,v),n(3,v.attrf_val_3=window.onlineAttributeFilter.attrf_val_3,v),n(3,v.attrf_key_4=window.onlineAttributeFilter.attrf_key_4,v),n(3,v.attrf_val_4=window.onlineAttributeFilter.attrf_val_4,v),n(3,v.attrf_key_5=window.onlineAttributeFilter.attrf_key_5,v),n(3,v.attrf_val_5=window.onlineAttributeFilter.attrf_val_5,v);for(let e=1;e<=5;e++)document.getElementById("svelte-attrf_key_"+e).value=v["attrf_key_"+e],document.getElementById("svelte-attrf_val_"+e).value=v["attrf_val_"+e]}re("disableNewUserBNotif",v.notificationEnabled?"visibility":"visibility_off"),re("disableNewUserSound",v.soundEnabled?"volume_up":"volume_off"),re("showConnected",v.online_connected?"flash_on":"flash_off"),le("countryFilter",v.country),le("maxrowsFilter",v.max_rows),le("userTimeoutFilter",v.timeout),le("updateTimeoutFilter",v.updateTimeout),le("time_on_siteFilter",v.time_on_site),le("groupByField",v.groupByField);let e=[];jQuery(".online-department-filter input[name^=department_ids]").each((function(t){e.push(parseInt(this.value))})),n(3,v.department=e,v),I()}));return e.$$set=e=>{"www_dir_flags"in e&&n(0,s=e.www_dir_flags),"track_is_online"in e&&n(1,r=e.track_is_online),"soundEnabled"in e&&n(9,l=e.soundEnabled),"notificationEnabled"in e&&n(10,a=e.notificationEnabled),"online_connected"in e&&n(11,c=e.online_connected),"max_rows"in e&&n(12,u=e.max_rows),"timeout"in e&&n(13,d=e.timeout),"country"in e&&n(14,_=e.country),"forbiddenVisitors"in e&&n(15,m=e.forbiddenVisitors),"updateTimeout"in e&&n(16,f=e.updateTimeout),"time_on_site"in e&&n(17,p=e.time_on_site),"online_check"in e&&n(2,g=e.online_check),"groupByField"in e&&n(18,h=e.groupByField)},[s,r,g,v,i,o,function(e){confirm("Are you sure?")&&(fetch(WWW_DIR_JAVASCRIPT+"chat/onlineusers/(deletevisitor)/"+e.id+"/(csfr)/"+confLH.csrf_token,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFToken":confLH.csrf_token}}),setTimeout((()=>I()),500))},function(e){return!(!e.nick||!e.nick.toLowerCase().includes(v.query))||(!(!e.user_country_code||!e.user_country_code.toLowerCase().includes(v.query))||(!(!e.user_country_name||!e.user_country_name.toLowerCase().includes(v.query))||(!(!e.page_title||!e.page_title.toLowerCase().includes(v.query))||(!(!e.current_page||!e.current_page.toLowerCase().includes(v.query))||(!(!e.referrer||!e.referrer.toLowerCase().includes(v.query))||!(!e.visitor_tz||!e.visitor_tz.toLowerCase().includes(v.query)))))))},k,l,a,c,u,d,_,m,f,p,h,e=>k("last_visit"),e=>k("time_on_site"),e=>k("visitor_tz_time"),e=>k("last_check_time"),e=>k("current_page"),e=>k("referrer"),(e,t)=>{lhc.revealModal({url:WWW_DIR_JAVASCRIPT+"chat/getonlineuserinfo/"+e.id})},(e,t)=>lhc.revealModal({url:WWW_DIR_JAVASCRIPT+"chat/previewchat/"+e.chat_id}),(e,t)=>lhc.revealModal({url:WWW_DIR_JAVASCRIPT+"chat/sendnotice/"+e.id}),(e,t)=>lhc.revealModal({url:WWW_DIR_JAVASCRIPT+"chat/sendnotice/"+e.id})]}class ue extends t{constructor(e){super(),n(this,e,ce,se,o,{www_dir_flags:0,track_is_online:1,soundEnabled:9,notificationEnabled:10,online_connected:11,max_rows:12,timeout:13,country:14,forbiddenVisitors:15,updateTimeout:16,time_on_site:17,online_check:2,groupByField:18},null,[-1,-1])}get www_dir_flags(){return this.$$.ctx[0]}set www_dir_flags(e){this.$$set({www_dir_flags:e}),i()}get track_is_online(){return this.$$.ctx[1]}set track_is_online(e){this.$$set({track_is_online:e}),i()}get soundEnabled(){return this.$$.ctx[9]}set soundEnabled(e){this.$$set({soundEnabled:e}),i()}get notificationEnabled(){return this.$$.ctx[10]}set notificationEnabled(e){this.$$set({notificationEnabled:e}),i()}get online_connected(){return this.$$.ctx[11]}set online_connected(e){this.$$set({online_connected:e}),i()}get max_rows(){return this.$$.ctx[12]}set max_rows(e){this.$$set({max_rows:e}),i()}get timeout(){return this.$$.ctx[13]}set timeout(e){this.$$set({timeout:e}),i()}get country(){return this.$$.ctx[14]}set country(e){this.$$set({country:e}),i()}get forbiddenVisitors(){return this.$$.ctx[15]}set forbiddenVisitors(e){this.$$set({forbiddenVisitors:e}),i()}get updateTimeout(){return this.$$.ctx[16]}set updateTimeout(e){this.$$set({updateTimeout:e}),i()}get time_on_site(){return this.$$.ctx[17]}set time_on_site(e){this.$$set({time_on_site:e}),i()}get online_check(){return this.$$.ctx[2]}set online_check(e){this.$$set({online_check:e}),i()}get groupByField(){return this.$$.ctx[18]}set groupByField(e){this.$$set({groupByField:e}),i()}}customElements.define("lhc-online-visitors",e(ue,{www_dir_flags:{},track_is_online:{type:"Boolean"},soundEnabled:{},notificationEnabled:{},online_connected:{},max_rows:{},timeout:{},country:{},forbiddenVisitors:{},updateTimeout:{},time_on_site:{},online_check:{},groupByField:{}},[],[],!1));export{ue as LHCOnlineVisitors};
//# sourceMappingURL=onlinevisitors.js.map
