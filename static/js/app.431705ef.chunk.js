(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{101:function(e,t,n){e.exports=n.p+"static/media/noor.45a020a2.png"},147:function(e,t,n){e.exports=n.p+"static/media/logo.45a020a2.png"},265:function(e,t,n){"use strict";n.d(t,"a",(function(){return ne}));var a=n(9),o=n.n(a),r=n(2),l=n.n(r),s=(n(377),n(201),n(0)),i=n.n(s),c=n(58),u=n(25),f=n(1),g=(n(101),n(143)),d=n(229),h=n.n(d),m=n(78),p=n(6),b=n(128),y=n(16),S=n(31),x=n(3),E=n(21),v=(n(147),n(406)),D=n(407);v.a({handleNotification:function(){return l.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{shouldShowAlert:!0,shouldPlaySound:!1,shouldSetBadge:!1});case 1:case"end":return e.stop()}}),null,null,null,Promise)}});var w=n(159),O=n(67);function k(e){var t=Object(s.useState)(""),n=o()(t,2),a=n[0],r=n[1],f=Object(s.useState)(""),g=o()(f,2),d=g[0],h=g[1],m=Object(s.useState)(""),v=o()(m,2),D=v[0],k=v[1],T=Object(s.useState)(""),C=o()(T,2),j=C[0],P=C[1],I=Object(s.useState)(""),L=o()(I,2),z=L[0],N=L[1],A=Object(s.useState)(""),B=o()(A,2),J=B[0],R=B[1],M=Object(s.useState)(null),V=o()(M,2),U=V[0],F=V[1],W=Object(s.useState)(null),H=o()(W,2),q=H[0],Y=H[1],_=(JSON.stringify(e.route.params.user),JSON.stringify(e.route.params.user.name).replace(/"/g,"")+"!"),G=JSON.stringify(e.route.params.user.nickname).replace(/"/g,"");console.log("props.params: "+G),Object(s.useEffect)((function(){console.log("UserInfo useEffect: entry"),null==U&&X(),function(){var e;l.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if("web"===p.a.OS){t.next=6;break}return t.next=3,l.a.awrap(w.b());case 3:e=t.sent,"granted"!==e.status&&alert("Sorry, we need camera roll permissions to make this work!");case 6:case"end":return t.stop()}}),null,null,null,Promise)}()}));var X=function(){var e,t,n,a;return l.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return console.log("Vendor Post fetchData: "+G),o.next=3,l.a.awrap(fetch("http://192.168.0.197:3000/User?name="+G));case 3:return e=o.sent,o.next=6,l.a.awrap(e.json());case 6:t=o.sent,F(t),n=JSON.stringify(t[0].name).replace(/"/g,""),P(n),a=JSON.stringify(t[0].postcode).replace(/"/g,""),R(a),console.log("Vendor Post Offer User Info: "+JSON.stringify(t[0]));case 13:case"end":return o.stop()}}),null,null,null,Promise)};function Z(){console.log("postOffer: entry");var e=parseInt(z),t=new Date(Date.now()+60*e*1e3);console.log("expiry: "+t);fetch("http://192.168.0.197:3000/VendorOffer",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({userID:U[0].userId,vendorName:j,summary:a,discountedPrice:D,description:d,offerDuration:z,imgsource:q.base64}),timeout:1e4}).then((function(e){console.log("done: "+e.insertId),c.a.alert("Published offer","summary: "+a),console.log("sendPushNotifications entry")})).catch((function(e){console.log("Error: "+e)})),console.log("fetching...")}return i.a.createElement(x.a,{style:{flex:1,alignItems:"center"}},i.a.createElement(y.a,{style:{color:"#655F5F",position:"absolute",top:0,fontSize:20,fontWeight:"bold",alignItems:"center",marginLeft:5,marginTop:10,width:240,height:50}},"Welcome "+_),i.a.createElement(y.a,{style:{color:"#655F5F",marginLeft:45,marginTop:50,fontSize:18,alignItems:"center",width:310,height:35}},"Enter your offer details below:"),i.a.createElement(y.a,{style:{color:"#655F5F",marginLeft:45,marginTop:10,fontSize:18,alignItems:"center",width:310,height:35}},j),i.a.createElement(S.a,{style:{fontSize:18,marginLeft:45,marginTop:10,width:310,height:20},placeholder:"Enter Offer Title",onChangeText:function(e){return r(e)},defaultValue:a}),i.a.createElement(S.a,{style:{fontSize:18,marginLeft:45,marginTop:10,width:310,height:20},placeholder:"Enter Offer Details",onChangeText:function(e){return h(e)},defaultValue:d}),i.a.createElement(S.a,{style:{fontSize:18,marginLeft:45,marginTop:10,width:310,height:20},keyboardType:"numeric",placeholder:"Enter Offer Price",onChangeText:function(e){return k(e)},defaultValue:D}),i.a.createElement(S.a,{style:{fontSize:18,marginLeft:45,marginTop:10,width:310,height:20},placeholder:"Duration (mins)",keyboardType:"numeric",onChangeText:function(e){return N(e)},defaultValue:z}),i.a.createElement(y.a,{style:{fontSize:18,marginLeft:45,marginTop:10,width:310,height:30}},J),i.a.createElement(b.a,{title:"Pick an image from camera roll",onPress:function(){var e;return l.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.awrap(w.a({mediaTypes:O.a.All,allowsEditing:!0,aspect:[4,3],quality:0,base64:!0}));case 2:e=t.sent,console.log(e),Y(e),e.cancelled;case 6:case"end":return t.stop()}}),null,null,null,Promise)}}),q&&i.a.createElement(u.a,{source:{uri:q.uri},style:{width:200,height:200}}),i.a.createElement(E.a,{onPress:function(){return Z()},disabled:!Boolean(a&&D&&z),style:{opacity:Boolean(a&&D&&z)?.8:.2,borderRadius:8,borderColor:"black",backgroundColor:"red",margin:20}},i.a.createElement(y.a,{style:{textAlign:"center",fontSize:24,color:"white",height:38,width:230}},"Publish")))}var T=n(53),C=n(74),j=n(403),P=n(23),I=n(404),L=n(401),z=n(402),N=n(405),A=Object(j.a)();n(365);function B(e){console.log("CurrentOffers props: "+JSON.stringify(e));var t,n,a="",r=Object(s.useState)(!1),c=o()(r,2),u=(c[0],c[1]),f=Object(s.useRef)(),g=Object(s.useRef)(),d=Object(s.useState)(null),h=o()(d,2),m=h[0],b=h[1],S=Object(s.useState)(null),x=o()(S,2),E=x[0],v=(x[1],Object(s.useState)(null)),w=o()(v,2),O=(w[0],w[1]),k="INSERT",j=JSON.stringify(e.route.params.user.nickname).replace(/"/g,"");function B(e,t,n,a){var o=e*Math.PI/180,r=n*Math.PI/180,l=(n-e)*Math.PI/180,s=(a-t)*Math.PI/180,i=Math.sin(l/2)*Math.sin(l/2)+Math.cos(o)*Math.cos(r)*Math.sin(s/2)*Math.sin(s/2);return 6371e3*(2*Math.atan2(Math.sqrt(i),Math.sqrt(1-i)))}function J(e){console.log("filterOffers: entry"),console.log("filterOffers: "+JSON.stringify(e));for(var a=[],o=0;o<e.length;o++){console.log("offers[i].latitude: "+e[o].latitude),console.log("lat: "+t);var r=B(t,n,e[o].latitude,e[o].longitude);console.log("d: "+r),r<4e3&&a.push(e[o])}return a}null!=e.route.params.user.location?(t=e.route.params.user.location.lat,n=e.route.params.user.location.lng):(alert("Enter your location"),e.navigation.goBack()),Object(s.useEffect)((function(){return console.log("useEffect: entry"),null==m&&R(),function(){var e,t,n,a,o,r;return l.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:if(console.log("registerForPushNotificationsAsync entry"),!P.a.isDevice){s.next=22;break}return s.next=4,l.a.awrap(N.c(N.a));case 4:if(t=s.sent,n=t.status,a=n,"granted"===n){s.next=13;break}return s.next=10,l.a.awrap(N.b(N.a));case 10:o=s.sent,r=o.status,a=r;case 13:if("granted"===a){s.next=16;break}return alert("Failed to get push token for push notification!"),s.abrupt("return");case 16:return s.next=18,l.a.awrap(I.a());case 18:e=s.sent.data,console.log(e),s.next=23;break;case 22:alert("Push Notifications for android or iOS phones only permitted");case 23:return"android"===p.a.OS&&L.a("default",{name:"default",importance:z.a.MAX,vibrationPattern:[0,250,250,250],lightColor:"#FF231F7C"}),console.log("registerForPushNotificationsAsync: "+e),s.abrupt("return",e);case 26:case"end":return s.stop()}}),null,null,null,Promise)}().then((function(e){a=e,console.log("Customer token: "+a),console.log("postUserInfo: entry"),console.log("postUserInfo: token: "+a),fetch("http://192.168.0.197:3000/User",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({operation:k,userType:"Customer",user:j,vendorName:"",postcode:"Test",doorNumber:11,expoPushToken:a}),timeout:1e4}).then((function(e){console.log("done: "+e.insertId)})).catch((function(e){console.log("Error: "+e)})),console.log("fetching...")})).catch((function(e){return console.error(e)})),f.current=D.a((function(e){u(e)})),g.current=D.b((function(e){console.log(e)})),function(){D.c(f),D.c(g)}}),[]);var R=function(){var e,t,n,a;return l.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return console.log("fetchData: entry"),o.next=3,l.a.awrap(fetch("http://192.168.0.197:3000/User?name="+j));case 3:return e=o.sent,o.next=6,l.a.awrap(e.json());case 6:return t=o.sent,O(t),console.log("fetchData userInfo: "+JSON.stringify(t)+"length: "+t.length),k=t.length>0?"UPDATE":"INSERT",console.log("fetchData: entry"),o.next=13,l.a.awrap(fetch("http://192.168.0.197:3000/VendorOffer"));case 13:return n=o.sent,console.log("fetchData: entry"),o.next=17,l.a.awrap(n.json());case 17:a=o.sent,a,b(J(a)),console.log("fetchData: "+m);case 21:case"end":return o.stop()}}),null,null,null,Promise)};var M=function(t){var n,a,o=t.item;o.id;return i.a.createElement(C.b,{onPress:function(){e.navigation.navigate("Checkout",{item:o})}},i.a.createElement(C.a,{size:100,source:{uri:(a=o.summary,"Thai"===a?"https://drive.google.com/uc?id=1hynmnJa8F8qkubt7-nxvUhR42zYyN4a_":"Chinese"===a?"https://drive.google.com/uc?id=1wVpJl-GuIDGqC-ZkGVUeY64WwtcUoDqD":"Burger"===a?"https://drive.google.com/uc?id=15vt0SdXqzjW6OS1-U2216nFX_Bub5tyG":"https://drive.google.com/uc?id=1akTHo3BbFfVWjUY99VB-rJIZJ8I9bBow")}}),i.a.createElement(C.b.Content,null,i.a.createElement(C.b.Title,null,o.name+"\n"+o.summary+": "+o.ccy+o.discountedPrice.toFixed(2)+" \n"+o.postcode+"\nExpires on "+((n=new Date(o.expiryTime)).getDate()+" "+["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][n.getMonth()]+" "+function(e){var t=e.getMinutes(),n=e.getHours();return(n<10?"0"+n:n)+":"+(t<10?"0"+t:t)}(n))),i.a.createElement(C.b.Subtitle,null,o.description)))};return i.a.createElement(A.Navigator,{initialRouteName:"Offers"},i.a.createElement(A.Screen,{name:"Offers",component:function(e){return e.navigation,null==m||m.length<1?i.a.createElement(y.a,{style:{color:"#655F5F",marginLeft:25,marginTop:50,fontSize:18,alignItems:"center",width:310,height:55}},"Currently no offers available"):i.a.createElement(T.a,{data:m,renderItem:M,keyExtractor:function(e,t){return t.toString()},extraData:E})}}))}function J(e){var t=Object(s.useState)(null),n=o()(t,2),a=n[0],r=n[1];return Object(s.useEffect)((function(){console.log("useEffect: entry"),null==a&&fetchData()})),fetchData=function(){var e,t;return l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("fetchData: entry"),n.next=3,l.a.awrap(fetch("http://192.168.0.16:3000/VendorOffer"));case 3:return e=n.sent,console.log("fetchData: entry"),n.next=7,l.a.awrap(e.json());case 7:t=n.sent,r(t),console.log("fetchData: "+a);case 10:case"end":return n.stop()}}),null,null,null,Promise)},i.a.createElement(T.a,{data:a,renderItem:function(e){var t=e.item;return i.a.createElement(C.b,{title:t.summary,subtitle:t.description})}})}v.a({handleNotification:function(){return l.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{shouldShowAlert:!0,shouldPlaySound:!1,shouldSetBadge:!1});case 1:case"end":return e.stop()}}),null,null,null,Promise)}});var R=n(52),M="http://34.89.25.113:3000";function V(e){var t=Object(s.useState)(""),a=o()(t,2),r=a[0],l=a[1],u=Object(s.useState)(""),f=o()(u,2),g=f[0],d=f[1],h=Object(s.useState)(null),m=o()(h,2),b=m[0],v=m[1],D=Object(s.useState)(null),w=o()(D,2),O=w[0],k=w[1],T=null;function C(){var e=function(){var e=b.match(/\d+/g);return T=new Date(e[2],e[1]-1,e[0]),console.log("formatDateOfDeath: "+e),console.log("formatDateOfDeath: "+T),T}();console.log("postPersonInfo: entry: "+e),"web"===p.a.OS&&(M="https://34.89.25.113:8000"),fetch(M+"/Person",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({operation:"INSERT",surname:r,firstNames:g,deathDate:b,dob:O}),timeout:1e4}).then((function(e){console.log("done: "+e.insertId),c.a.alert("Published User","summary: "+r)})).catch((function(e){console.log("Error: "+e)})),console.log("fetching...")}return i.a.createElement(x.a,{style:U.container},i.a.createElement(R.a,{source:n(101),style:U.bgImage},i.a.createElement(S.a,{style:{fontSize:20,marginLeft:20,marginTop:0,width:300,height:30},placeholder:"Enter Persons surname",onChangeText:function(e){return l(e)},defaultValue:r}),i.a.createElement(S.a,{style:{fontSize:20,paddingTop:10,marginLeft:20,marginTop:0,width:300,height:30},placeholder:"Enter Persons first names",onChangeText:function(e){return d(e)},defaultValue:g}),i.a.createElement(S.a,{style:{fontSize:20,marginLeft:20,marginTop:10,width:300,height:20},keyboardType:"default",placeholder:"Enter Date Died (yyyy-mm-dd)",onChangeText:function(e){return v(e)},defaultValue:b}),i.a.createElement(S.a,{style:{fontSize:20,marginLeft:20,marginTop:10,width:300,height:20},keyboardType:"default",placeholder:"Enter Date of Birth",onChangeText:function(e){return k(e)},defaultValue:O}),i.a.createElement(E.a,{onPress:function(){return C()},disabled:!Boolean(r&&g),style:{opacity:Boolean(r&&g)?.8:.2,borderRadius:8,height:30,width:160,borderColor:"black",backgroundColor:"gray",margin:20}},i.a.createElement(y.a,{style:{textAlign:"center",fontSize:20,color:"black",height:30,width:160}},"Store Details"))))}var U=f.a.create({container:{flex:1,padding:10,backgroundColor:"#ecf0f1"},bgImage:{flex:1,resizeMode:"cover",justifyContent:"center"},buttonVisible:{marginTop:20,marginLeft:10,borderRadius:8,width:200,borderColor:"black",backgroundColor:"gray"}}),F=n(18),W=n.n(F),H="http://34.89.25.113:3000";function q(e){var t=!1;console.log("DuasBeforeBurial props: "+JSON.stringify(e)),console.log("DuasBeforeBurial props init: "+t);var a=Object(s.useState)([]),r=o()(a,2),c=r[0],u=r[1],f=Object(s.useState)([]),g=o()(f,2),d=g[0],h=g[1],m=e.route.params.userDetails,b=Object(s.useState)(m.userId),v=o()(b,2),D=v[0],w=(v[1],i.a.useState(null)),O=o()(w,2),k=(O[0],O[1]),C=Object(s.useState)(m.surname),j=o()(C,2),P=j[0],I=(j[1],Object(s.useState)(m.fullnames)),L=o()(I,2),z=L[0],N=(L[1],i.a.useState(null)),A=o()(N,2),B=A[0],J=A[1],M=Object(s.useState)(e.route.params.table),V=o()(M,2),U=V[0];V[1];Object(s.useEffect)((function(){console.log("UserInfo useEffect: entry"),0==t&&_()}),[]);var F=function(){return l.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("loadDuas..."),"web"===p.a.OS&&(H="https://34.89.25.113:8000"),"INSERT",fetch(H+"/Duas",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({operation:"INSERT",userId:D,tableName:U}),timeout:1e4}).then((function(e){console.log("done: "+e.insertId),_()})).catch((function(e){console.log("Error: "+e)}));case 5:case"end":return e.stop()}}),null,null,null,Promise)},q=function(e){console.log("initReserveList userInfo: "+e);for(var t=[24],n=[24],a=0;a<e.length;a++)console.log("initReserveList i: "+a),console.log("initReserveList userInfo left: "+e[a].totalLeft),t[a]=0,n[a]="";u(t),h(n),console.log("initReserveList : "+c),console.log("initNameList : "+d)},_=function(){var e,n,a;return l.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return console.log("fetchData: entry: "+D),t=!0,"web"===p.a.OS&&(H="https://34.89.25.113:8000"),e=H+"/Duas",o.next=6,l.a.awrap(fetch(e+"?userId="+D+"&tableName="+U));case 6:if(!((n=o.sent).status>=200&&n.status<=299)){o.next=15;break}return o.next=10,l.a.awrap(n.json());case 10:a=o.sent,console.log("fetchData userInfo left: "+a),a.length>0?(console.log("fetchData userInfo length: "+a.length),k("UPDATE"),J(a),q(a),console.log("results: "+a[0])):(console.log("No records found fetching data, userId: "+D),k("INSERT"),F()),o.next=16;break;case 15:console.log(n.status,n.statusText);case 16:case"end":return o.stop()}}),null,null,null,Promise)};return console.log("reserveList",c),i.a.createElement(x.a,{style:Y.container},i.a.createElement(R.a,{source:n(101),style:Y.bgImage},i.a.createElement(y.a,{style:Y.textLabel},"Duas for "+z+" "+P),i.a.createElement(y.a,{style:Y.textLabel},"Duas before Burial"),i.a.createElement(E.a,{onPress:function(){return function(){var e,t;return l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:for(console.log("updateDuas..."+c.length),e=H+"/Duas","UPDATE",t=0;t<c.length;t++)0!=c[t]&&fetch(e,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({operation:"UPDATE",userId:D,duaId:B[t].duaId,operation:"UPDATE",reserve:c[t],name:d[t],tableName:U}),timeout:1e4}).then((function(e){console.log("done: "),_()})).catch((function(e){console.log("Error: "+e)}));case 4:case"end":return n.stop()}}),null,null,null,Promise)}()},style:{borderRadius:8,borderColor:"black",backgroundColor:"gray",margin:10,width:200}},i.a.createElement(y.a,{style:{textAlign:"center",fontSize:18,color:"white",height:30,width:200}},"Store Reserved Duas")),i.a.createElement(x.a,{style:{flex:1,flexDirection:"row"}},i.a.createElement(y.a,{style:Y.duatextHeadingLabel},"Surah/Dua"),i.a.createElement(y.a,{style:Y.subtextHeadingLabel},"Total"),i.a.createElement(y.a,{style:Y.subtextHeadingLabel},"To Do"),i.a.createElement(y.a,{style:Y.subtextEndHeadingLabel},"Reserve"),i.a.createElement(y.a,{style:[{display:"none"}]},"Name")),i.a.createElement(x.a,{style:{flex:5,flexDirection:"row"}},i.a.createElement(T.a,{data:c,renderItem:function(e){var t=e.item,n=e.index;return B&&i.a.createElement(x.a,{style:{flex:1,flexDirection:"row",justifyContent:"center"}},i.a.createElement(y.a,{style:Y.duatextLabel}," ",B[n].surah," "),i.a.createElement(y.a,{style:Y.subtextLabel}," ",B[n].totalCount," "),i.a.createElement(y.a,{style:Y.subtextLabel}," ",B[n].totalLeft," "),i.a.createElement(S.a,{style:Y.input,placeholder:"Enter how many",onChangeText:function(e){return function(e,t){if(console.log("handleReserveUpdate: "+e+": "+t),/^-?\d+$/.test(e)||""===e||"-"===e){""!==e&&"-"!==e||(e=0);var n=W()(c);n[t]=parseInt(e,10),console.log("handleReserveUpdate, name before: "+d[t]),u(n),console.log("handleReserveUpdate, name after: "+d[t])}}(e,n)},value:t.toString()}))},keyExtractor:function(e,t){return t.toString()}}))))}var Y=f.a.create({container:{flex:1,justifyContent:"center",padding:5,backgroundColor:"#ecf0f1"},input:{flex:1,marginTop:10,opacity:.7,marginRight:20,color:"black",width:5,height:25,fontWeight:"bold",backgroundColor:"gray",fontSize:14},textLabel:{padding:10,fontWeight:"bold",color:"black",fontSize:18},duatextLabel:{flex:4,marginLeft:5,marginTop:10,fontWeight:"bold",color:"black",fontSize:14},subtextLabel:{flex:1,marginTop:10,fontWeight:"bold",color:"black",fontSize:14},duatextHeadingLabel:{flex:4,marginTop:10,marginLeft:5,color:"black",height:25,backgroundColor:"#8dc2e0",fontWeight:"bold",fontSize:14},subtextHeadingLabel:{flex:1,marginTop:10,color:"black",height:25,backgroundColor:"#8dc2e0",fontWeight:"bold",fontSize:14},subtextEndHeadingLabel:{flex:1,marginTop:10,marginRight:20,color:"black",height:25,backgroundColor:"#8dc2e0",fontWeight:"bold",fontSize:14},bgImage:{flex:1,resizeMode:"cover",justifyContent:"center"}});function _(e){var t=Object(s.useState)([]),a=o()(t,2),r=(a[0],a[1],e.route.params.userDetails[0]),l=Object(s.useState)(r.userId),c=o()(l,2),u=(c[0],c[1],Object(s.useState)(r.surname)),f=o()(u,2),g=f[0],d=(f[1],Object(s.useState)(r.fullnames)),h=o()(d,2),m=h[0],p=(h[1],Object(s.useState)(function(e){var t=e.getDate(),n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()];return t+" "+n+" "+e.getFullYear()}(new Date(r.dateDied)))),b=o()(p,2),S=b[0],v=(b[1],Object(s.useState)(null)),D=o()(v,2);D[0],D[1];return i.a.createElement(x.a,{style:G.container},i.a.createElement(R.a,{source:n(101),style:G.bgImage},i.a.createElement(y.a,{style:G.textLabel},"Duas for "+m+" "+g),i.a.createElement(y.a,{style:G.textLabel},"Died on: "+S),i.a.createElement(y.a,{style:G.textLabel},"Duas before Burial"),i.a.createElement(E.a,{onPress:function(){e.navigation.navigate("DuasBeforeBurial",{userDetails:r,table:"DuasBeforeBurial"})},style:{borderRadius:8,borderColor:"black",backgroundColor:"gray",margin:10,width:200}},i.a.createElement(y.a,{style:{textAlign:"center",fontSize:18,color:"white",height:38,width:200}},"Duas Before Burial")),i.a.createElement(E.a,{onPress:function(){e.navigation.navigate("DuasBeforeBurial",{userDetails:r,table:"DuasBeforeChehlum"})},style:{borderRadius:8,borderColor:"black",backgroundColor:"gray",margin:10,width:200}},i.a.createElement(y.a,{style:{textAlign:"center",fontSize:18,color:"white",height:38,width:200}},"Duas Before Chehlum")),i.a.createElement(E.a,{onPress:function(){e.navigation.navigate("DuasBeforeBurial",{userDetails:r,table:"DuasOnChehlum"})},style:{borderRadius:8,borderColor:"black",backgroundColor:"gray",margin:10,width:200}},i.a.createElement(y.a,{style:{textAlign:"center",fontSize:18,color:"white",height:38,width:200}},"Duas On Chehlum")),i.a.createElement(E.a,{onPress:function(){e.navigation.navigate("DuasBeforeBurial",{userDetails:r,table:"Quran"})},style:{borderRadius:8,borderColor:"black",backgroundColor:"gray",margin:10,width:200}},i.a.createElement(y.a,{style:{textAlign:"center",fontSize:18,color:"white",height:38,width:200}},"Quran"))))}var G=f.a.create({container:{flex:1,padding:5,backgroundColor:"#ecf0f1"},input:{flex:1,marginTop:10,color:"black",width:5,height:25,backgroundColor:"gray",fontSize:14},textLabel:{padding:10,color:"black",fontSize:18},duatextLabel:{flex:3,marginTop:10,color:"black",fontSize:14},subtextLabel:{flex:1,marginTop:10,color:"black",fontSize:14},duatextHeadingLabel:{flex:3,marginTop:10,color:"black",height:25,backgroundColor:"#8dc2e0",fontSize:14},subtextHeadingLabel:{flex:1,marginTop:10,color:"black",height:25,backgroundColor:"#8dc2e0",fontSize:14},bgImage:{flex:1,resizeMode:"cover",justifyContent:"center"}}),X="http://34.89.25.113:3000";function Z(e){var t=Object(s.useState)(""),a=o()(t,2),r=a[0],u=a[1],f=Object(s.useState)(""),g=o()(f,2),d=g[0],h=g[1],m=i.a.useState(null),b=o()(m,2),v=b[0],D=b[1],w=i.a.useState(null),O=o()(w,2),k=(O[0],O[1]),T=Object(s.useState)(null),C=o()(T,2),j=C[0],P=C[1];function I(e){return e.getDate()+" "+["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()]+" "+e.getFullYear()}return i.a.createElement(x.a,{style:Q.container},i.a.createElement(R.a,{source:n(101),style:Q.bgImage},i.a.createElement(y.a,{style:{fontSize:16,color:"black",opacity:1,marginLeft:10,marginTop:30}},"Salamalaikum. Blessings to you and your family especially your recently departed loved ones"),i.a.createElement(y.a,{style:{fontSize:16,color:"black",opacity:1,marginLeft:10,marginTop:30}},"If the person has been added before, please enter their names and press search, otherwise add the person."),i.a.createElement(x.a,{style:{flex:1,flexDirection:"row",justifyContent:"flex-start",marginTop:20}},i.a.createElement(S.a,{style:Q.input,placeholder:"Enter first names",value:d,onChangeText:function(e){return h(e)}}),i.a.createElement(S.a,{style:Q.input,placeholder:"Enter surname",value:r,onChangeText:function(e){return u(e)}})),i.a.createElement(x.a,{style:{flex:1,flexDirection:"row",justifyContent:"flex-start",marginTop:20}},i.a.createElement(E.a,{onPress:function(){!function(){var e,t;l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("searchPerson"),D(null),"web"===p.a.OS&&(X="https://34.89.25.113:8000"),n.next=5,l.a.awrap(fetch(X+"/Person?surname="+r+"&fullnames="+d));case 5:if(!((e=n.sent).status>=200&&e.status<=299)){n.next=14;break}return n.next=9,l.a.awrap(e.json());case 9:t=n.sent,console.log(t),t.length>0?(console.log("Found: "+t[0].surname),D(I(new Date(t[0].dateDied))),k(t[0].dob),P(t)):(console.log("Name not found: "+r),"web"===p.a.OS?alert("Person not found, please check spelling or Add Person"):c.a.alert("Person not found, please check spelling or Add Person")),n.next=15;break;case 14:console.log(e.status,e.statusText);case 15:case"end":return n.stop()}}),null,null,null,Promise)}()},style:Q.buttonVisible},i.a.createElement(y.a,{style:{textAlign:"center",fontSize:18,color:"black",height:30,width:160}},"Search Person")),i.a.createElement(E.a,{onPress:function(){e.navigation.navigate("DeceasedPerson",{userDetails:j})},style:[Q.buttonVisible]},i.a.createElement(y.a,{style:{textAlign:"center",fontSize:18,color:"black",height:30,width:160}},"Add Person "))),i.a.createElement(x.a,{style:{flex:1,flexDirection:"row",justifyContent:"flex-start",marginTop:20,marginLeft:10}},i.a.createElement(y.a,{style:{fontSize:16,color:"black",opacity:1}},[null!=v?"Date Died: "+I(new Date(v)):""])),i.a.createElement(x.a,{style:{flex:1,flexDirection:"row",justifyContent:"flex-start",marginTop:20}},i.a.createElement(E.a,{onPress:function(){null!=v&&e.navigation.navigate("DeceasedPersonDuas",{userDetails:j})},style:[null==v?Q.buttonInvisible:Q.buttonVisible]},i.a.createElement(y.a,{style:{textAlign:"center",fontSize:20,color:"black",height:30,width:160}},"Search Duas ")))))}var Q=f.a.create({container:{flex:1,padding:10,backgroundColor:"#ecf0f1"},input:{marginTop:10,marginLeft:10,height:30,width:160,color:"black",fontSize:16},buttonVisible:{marginLeft:10,opacity:.7,borderRadius:8,height:30,width:160,borderColor:"black",backgroundColor:"gray"},buttonInvisible:{display:"none"},bgImage:{flex:1,resizeMode:"cover",justifyContent:"center"}}),$=n(202);n(372);m.b();var K=Object(j.a)(),ee=p.a.select({web:!1,default:!0}),te=g.b({useProxy:ee});function ne(){var e=Object(s.useState)(null),t=o()(e,2),n=(t[0],t[1]),a=Object(s.useState)(null),r=o()(a,2),l=(r[0],r[1],Object(s.useState)("")),u=o()(l,2),f=(u[0],u[1]),d=Object(s.useState)(""),m=o()(d,2),p=(m[0],m[1]),b=Object(s.useState)(""),y=o()(b,2),S=(y[0],y[1],Object(s.useState)("")),x=o()(S,2),E=(x[0],x[1],i.a.useState(null)),v=o()(E,2),D=(v[0],v[1],i.a.useState(null)),w=o()(D,2),O=(w[0],w[1],Object(s.useState)("")),T=o()(O,2),C=(T[0],T[1],Object(s.useState)(null)),j=o()(C,2),P=(j[0],j[1],g.c({redirectUri:te,clientId:"Y1eut5S6EUb85NZBn5vD5hC3LyVkmV9z",responseType:"id_token",scopes:["openid","profile"],extraParams:{nonce:"nonce"}},{authorizationEndpoint:"https://dev-2o8m1tra.eu.auth0.com/authorize"})),I=o()(P,3),L=(I[0],I[1]);I[2];console.log("Redirect URL: "+te),Object(s.useEffect)((function(){var e=!0;if(L&&e){if(L.error)return void c.a.alert("Authentication error",L.params.error_description||"something went wrong");if("success"===L.type){var t=L.params.id_token;console.log("jwtToken: "+JSON.stringify(t));var a=h()(t);console.log("decoded: "+JSON.stringify(a));var o=a.name;p(o),console.log("result: "+JSON.stringify(L)),console.log("name: "+o),n(t),f(a),console.log("user: "+a.nickname),console.log("name: "+a.name),console.log("sub: "+a.sub),console.log("email: "+a.email),e=!1}}}),[L]);return i.a.createElement($.a,null,i.a.createElement(K.Navigator,{initialRouteName:"Home"},i.a.createElement(K.Screen,{name:"Duas for Departed",component:Z,options:{title:"Duas for Departed",headerStyle:{backgroundColor:"#dedede"},headerTitleStyle:{fontWeight:"bold"}}}),i.a.createElement(K.Screen,{name:"DeceasedPerson",component:V,options:{title:"Enter Deceased Person Details",headerStyle:{backgroundColor:"#dedede"},headerTitleStyle:{fontWeight:"bold"}}}),i.a.createElement(K.Screen,{name:"DeceasedPersonDuas",component:_,options:{title:"Deceased Person Duas",headerStyle:{backgroundColor:"#dedede"},headerTitleStyle:{fontWeight:"bold"}}}),i.a.createElement(K.Screen,{name:"VendorPostOffer",component:k}),i.a.createElement(K.Screen,{name:"DuasBeforeBurial",component:q,options:{title:"Duas And Tasbeehs",headerStyle:{backgroundColor:"#dedede"},headerTitleStyle:{fontWeight:"bold"}}}),i.a.createElement(K.Screen,{name:"UserList",component:J}),i.a.createElement(K.Screen,{name:"CurrentOffers",component:B})))}f.a.create({container:{flex:1,padding:10,backgroundColor:"#ecf0f1"},container1:{top:0,padding:10,backgroundColor:"#ecf0f1"},customerInvisible:{display:"none"},customerVisible:{color:"gray",fontSize:16,marginTop:440},input:{marginTop:20,color:"black",fontSize:16},vendorInvisible:{display:"none"},vendorVisible:{marginTop:10,color:"gray",fontSize:16},buttonInvisible:{display:"none"},buttonVisible:{marginTop:20,borderRadius:8,width:200,borderColor:"black",backgroundColor:"green"},bgImage:{flex:1,resizeMode:"cover",justifyContent:"center",opacity:.4}})},278:function(e,t,n){e.exports=n(378)},365:function(e,t,n){e.exports=n.p+"static/media/out.3f0fb141.png"},376:function(e,t,n){e.exports=n.p+"static/media/duas.e6954684.jpeg"}},[[278,1,2]]]);
//# sourceMappingURL=app.431705ef.chunk.js.map