(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{103:function(e,t,n){e.exports=n(132)},62:function(e,t,n){e.exports=n.p+"static/media/sample4.cceecdd6.mp3"},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var a=n(23),s=n.n(a),r=n(0),c=n.n(r),i=n(96),l=n(64),o=n(5),u=n(16),d=n(8),p=n(28),x=n(37),y=n(1),h=n(139),j=n(3);function f(e){return Object(j.jsxs)(d.a,{style:b.player,children:[Object(j.jsx)(p.a,{onPress:function(){return function(){var t,n,a,s;return c.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return(t=e.audioIndex-1)<0&&(t=e.musicas.length-1),e.setAudioIndex(t),n=e.musicas[t].file,a=e.musicas.filter((function(a,s){return t==s?(e.musicas[s].playing=!0,n=e.musicas[s].file):e.musicas[s].playing=!1,e.musicas[s]})),null!=e.audio&&e.audio.unloadAsync(),s=new x.a.Sound,r.prev=7,r.next=10,c.a.awrap(s.loadAsync(n));case 10:return r.next=12,c.a.awrap(s.playAsync());case 12:r.next=16;break;case 14:r.prev=14,r.t0=r.catch(7);case 16:e.setAudio(s),e.setMusicas(a),e.setPlaying(!0);case 19:case"end":return r.stop()}}),null,null,[[7,14]],Promise)}()},style:{marginRight:20,marginLeft:20},children:Object(j.jsx)(h.a,{name:"banckward",size:35,color:"white"})}),e.playing?Object(j.jsx)(p.a,{onPress:function(){return c.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:null!=e.audio&&e.audio.pauseAsync(),e.setPlaying(!1);case 2:case"end":return t.stop()}}),null,null,null,Promise)},style:{marginRight:20,marginLeft:20},children:Object(j.jsx)(h.a,{name:"pausecircleo",size:35,color:"white"})}):Object(j.jsx)(p.a,{onPress:function(){return function(){var t,n,a;return c.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:if(t=e.musicas[e.audioIndex].file,n=e.musicas.filter((function(n,a){return e.audioIndex==a?(e.musicas[a].playing=!0,t=e.musicas[a].file):e.musicas[a].playing=!1,e.musicas[a]})),s.prev=2,null==e.audio){s.next=10;break}return e.setPlaying(!0),e.setMusicas(n),s.next=8,c.a.awrap(e.audio.playAsync());case 8:s.next=23;break;case 10:return a=new x.a.Sound,s.prev=11,s.next=14,c.a.awrap(a.loadAsync(t));case 14:return s.next=16,c.a.awrap(a.playAsync());case 16:s.next=20;break;case 18:s.prev=18,s.t0=s.catch(11);case 20:e.setAudio(a),e.setMusicas(n),e.setPlaying(!0);case 23:s.next=27;break;case 25:s.prev=25,s.t1=s.catch(2);case 27:case"end":return s.stop()}}),null,null,[[2,25],[11,18]],Promise)}()},style:{marginRight:20,marginLeft:20},children:Object(j.jsx)(h.a,{name:"playcircleo",size:35,color:"white"})}),Object(j.jsx)(p.a,{onPress:function(){return function(){var t,n,a,s;return c.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return(t=e.audioIndex+1)>=e.musicas.length&&(t=0),e.setAudioIndex(t),n=e.musicas[t].file,a=e.musicas.filter((function(a,s){return t==s?(e.musicas[s].playing=!0,n=e.musicas[s].file):e.musicas[s].playing=!1,e.musicas[s]})),null!=e.audio&&e.audio.unloadAsync(),s=new x.a.Sound,r.prev=7,r.next=10,c.a.awrap(s.loadAsync(n));case 10:return r.next=12,c.a.awrap(s.playAsync());case 12:r.next=16;break;case 14:r.prev=14,r.t0=r.catch(7);case 16:e.setAudio(s),e.setMusicas(a),e.setPlaying(!0);case 19:case"end":return r.stop()}}),null,null,[[7,14]],Promise)}()},style:{marginRight:20,marginLeft:20},children:Object(j.jsx)(h.a,{name:"forward",size:35,color:"white"})})]})}var b=o.a.create({player:{width:"100%",height:100,position:"absolute",bottom:0,left:0,zIndex:99,backgroundColor:"#111",alignItems:"center",justifyContent:"center",flexDirection:"row"}}),m=n(93);function g(){m.a.ignoreAllLogs(!0);var e=Object(y.useState)(0),t=s()(e,2),a=t[0],r=t[1],o=Object(y.useState)(!1),b=s()(o,2),g=b[0],O=b[1],A=Object(y.useState)(null),v=s()(A,2),P=v[0],k=v[1],I=Object(y.useState)([{nomme:"eu",artista:"tu",playing:!1,file:n(62)},{nomme:"1",artista:"2",playing:!1,file:n(62)},{nomme:"a",artista:"b",playing:!1,file:n(62)}]),S=s()(I,2),z=S[0],C=S[1],M=function(e){var t,n,a;return c.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return t=null,n=z.filter((function(n,a){return e==a?(z[a].playing=!0,t=z[a].file,O(!0),r(e)):z[a].playing=!1,z[a]})),null!=P&&P.unloadAsync(),a=new x.a.Sound,s.prev=4,s.next=7,c.a.awrap(a.loadAsync(t));case 7:return s.next=9,c.a.awrap(a.playAsync());case 9:s.next=13;break;case 11:s.prev=11,s.t0=s.catch(4);case 13:k(a),C(n);case 15:case"end":return s.stop()}}),null,null,[[4,11]],Promise)};return Object(j.jsxs)(d.a,{style:{flex:1},children:[Object(j.jsxs)(l.a,{style:w.container,children:[Object(j.jsx)(i.a,{auto:!0}),Object(j.jsx)(d.a,{style:w.header,children:Object(j.jsx)(u.a,{style:{textAlign:"center",color:"white",fontSize:25,backgroundColor:"green",borderRadius:20,padding:8,width:"60%"},children:"SPOTIFY"})}),Object(j.jsxs)(d.a,{style:w.table,children:[Object(j.jsx)(u.a,{style:{width:"50%",color:"rgb(200,200,200)",textAlign:"center"},children:"Musica"}),Object(j.jsx)(u.a,{style:{width:"50%",color:"rgb(200,200,200)",textAlign:"center"},children:"Artista"})]}),z.map((function(e,t){return e.playing?Object(j.jsx)(d.a,{style:w.table,children:Object(j.jsxs)(p.a,{onPress:function(){return M(t)},style:{width:"100%",flexDirection:"row"},children:[Object(j.jsxs)(u.a,{style:{width:"50%",color:"green"},children:[Object(j.jsx)(h.a,{name:"pausecircle",size:20,color:"white"}),"  ",e.nomme]}),Object(j.jsx)(u.a,{style:{width:"50%",color:"green"},children:e.artista})]})}):Object(j.jsx)(d.a,{style:w.table,children:Object(j.jsxs)(p.a,{onPress:function(){return M(t)},style:{width:"100%",flexDirection:"row"},children:[Object(j.jsxs)(u.a,{style:{width:"50%",color:"white"},children:[Object(j.jsx)(h.a,{name:"play",size:20,color:"white"}),"  ",e.nomme]}),Object(j.jsx)(u.a,{style:{width:"50%",color:"white"},children:e.artista})]})})})),Object(j.jsx)(d.a,{style:{paddingBottom:200}})]}),Object(j.jsx)(f,{playing:g,setPlaying:O,audioIndex:a,setAudioIndex:r,musicas:z,setMusicas:C,audio:P,setAudio:k})]})}var w=o.a.create({container:{flex:1,backgroundColor:"#222"},header:{backgroundColor:"rgb(20,20,20)",alignItems:"center",justifyContent:"center",width:"100%",height:"18%"},table:{flexDirection:"row",padding:20,borderBottomColor:"white",borderBottomWidth:1}})}},[[103,1,2]]]);
//# sourceMappingURL=app.7d251473.chunk.js.map