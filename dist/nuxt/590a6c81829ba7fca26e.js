(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{289:function(t,e,r){"use strict";r.r(e);r(8),r(9),r(2),r(32);var n=r(281),c=(r(50),r(11)),o=r(5),l=r(22),v=r(10),f=r(3),d=r(15),m=r(67),h=r(282),_=r(54),y=r(147);function V(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var j=function(t){Object(d.a)(h,t);var e,r,m=(e=h,function(){var t,r=Object(f.a)(e);if(V()){var n=Object(f.a)(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return Object(v.a)(this,t)});function h(){var t;return Object(o.a)(this,h),(t=m.apply(this,arguments)).posts=[],t}return Object(l.a)(h,[{key:"onReachBottomPage",value:(r=Object(c.a)(regeneratorRuntime.mark((function t(e){var r,c,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=Object(_.e)(y.default,this.$store),t.next=3,r.fetchPosts();case 3:(c=r.posts).length>1?((o=this.posts).push.apply(o,Object(n.a)(c)),e.loaded()):e.complete();case 5:case"end":return t.stop()}}),t,this)}))),function(t){return r.apply(this,arguments)})}]),h}(h.b),x=j=Object(m.a)([h.a],j),w=r(53),O=r(128),R=r.n(O),C=r(291),k=r(244),I=r(228),L=r(285),B=r(286),P=r(241),S=r(290),A=r(287),D=r(230),J=r(245),T=r(220),$=r(288),component=Object(w.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-flex",[r("v-container",{staticClass:"mt-5",attrs:{fluid:"","grid-list-lg":""}},[r("client-only",[r("v-card",{attrs:{flat:""}},[r("v-layout",{attrs:{row:"",wrap:""}},t._l(t.posts,(function(e,n){return r("v-flex",{key:n},[r("v-card",{staticClass:"mx-auto",attrs:{hover:"","max-width":"344"}},[r("v-list-item",[r("v-list-item-avatar",{attrs:{color:"grey"}}),t._v(" "),r("v-list-item-content",[r("v-list-item-title",{staticClass:"headline"},[t._v(t._s(e.title))]),t._v(" "),r("v-list-item-subtitle",[t._v("by Kurt Wagner")])],1)],1),t._v(" "),r("v-img",{attrs:{src:"https://cdn.vuetifyjs.com/images/cards/mountain.jpg",height:"194"}}),t._v(" "),r("v-card-text",[t._v(t._s(e.body))]),t._v(" "),r("v-card-actions",[r("v-btn",{attrs:{text:"",color:"deep-purple accent-4"}},[t._v("Read")]),t._v(" "),r("v-btn",{attrs:{text:"",color:"deep-purple accent-4"}},[t._v("Bookmark")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{icon:""}},[r("v-icon",[t._v("mdi-heart")])],1),t._v(" "),r("v-btn",{attrs:{icon:""}},[r("v-icon",[t._v("mdi-share-variant")])],1)],1)],1)],1)})),1),t._v(" "),r("infinite-loading",{attrs:{spinner:"spiral"},on:{infinite:t.onReachBottomPage}})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;R()(component,{VBtn:C.a,VCard:k.a,VCardActions:I.a,VCardText:I.b,VContainer:L.a,VFlex:B.a,VIcon:P.a,VImg:S.a,VLayout:A.a,VListItem:D.a,VListItemAvatar:J.a,VListItemContent:T.a,VListItemSubtitle:T.b,VListItemTitle:T.c,VSpacer:$.a})}}]);