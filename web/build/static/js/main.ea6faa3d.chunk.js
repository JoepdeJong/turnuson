(this["webpackJsonp@joepdejong/turnuson-web"]=this["webpackJsonp@joepdejong/turnuson-web"]||[]).push([[0],{21:function(e,t,n){e.exports=n.p+"static/media/kerstboom.f5cec279.png"},24:function(e,t,n){e.exports=n(55)},30:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),i=n.n(o),l=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function c(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var s=n(9),u=n.n(s),m=n(20),d=n(4),f=n(5),h=n(7),p=n(6),v=n(21),g=n.n(v);function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var w,E=r.a.createElement("style",{type:"text/css"},"\n\t.st0{display:none;}\n\t.st1{display:inline;fill:#071443;}\n\t.st2{display:inline;}\n\t.st3{fill:none;stroke:#FFFFFF;stroke-width:2;stroke-miterlimit:10;}\n\t.st4{font-family:'Futura-Bold';}\n\t.st5{font-size:60px;}\n\t.st6{fill:#FFFFFF;stroke:#FFFFFF;stroke-width:2;stroke-miterlimit:10;}\n"),O=r.a.createElement("g",{className:"st0"},r.a.createElement("rect",{x:-602.5,y:-178.5,className:"st1",width:1383,height:814}),r.a.createElement("path",{className:"st2",d:"M780-178v813H-602v-813H780 M781-179H-603v815H781V-179L781-179z"})),k=r.a.createElement("text",{transform:"matrix(1 0 0 1 10.1831 59.2529)"},r.a.createElement("tspan",{x:0,y:0,className:"st3 st4 st5"},"TURN "),r.a.createElement("tspan",{x:90.5,y:60,className:"st3 st4 st5"},"US "),r.a.createElement("tspan",{x:68,y:120,className:"st6 st4 st5"},"ON")),j=function(e){var t=e.svgRef,n=e.title,a=y(e,["svgRef","title"]);return r.a.createElement("svg",b({id:"Laag_1",x:"0px",y:"0px",viewBox:"0 0 200 194",style:{enableBackground:"new 0 0 200 194"},xmlSpace:"preserve",ref:t},a),n?r.a.createElement("title",null,n):null,E,O,k)},x=r.a.forwardRef((function(e,t){return r.a.createElement(j,b({svgRef:t},e))})),C=(n.p,n(30),function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("section",{id:"header"},r.a.createElement("div",{className:"Header"},r.a.createElement("div",{className:"Header__image"},r.a.createElement("img",{src:g.a,alt:"Kerstboom"})),r.a.createElement("div",{className:"Header__text"},r.a.createElement(x,null)))))}}]),n}(a.Component)),F=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("section",{id:"intro"},r.a.createElement("p",null,"During the last and dark days of the December month, we are all looking forward to the Christmas break. While some of us will visit friends or family, other students might not be able to do so. As the Covid-situation hinders us to go to the campus, we don\u2019t meet fellow students as much as before. As a result of this, there are a lot of students that feel lonely."),r.a.createElement("p",null,"In order to be able to feel a little bit more connected with all TU-students, three Christmas trees have been placed in front of the auditorium. These trees are lit with 25.000 lights, one for every TU student. You can turn your light on by clicking on the button below and leaving your email in the form! When all lights are turned on, we\u2019ve all thought of each other and we\u2019ve reached every student. Would you help to turn us on?")))}}]),n}(a.Component),N=n(22);w="https://turnuson.nl/v1/api";var S=n.n(N).a.create({baseURL:w,timeout:24e3}),W=n(10),U=n(3),R=function(){var e=Object(a.useState)(!1),t=Object(W.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)(),l=Object(W.a)(i,2),c=l[0],s=l[1];return r.a.createElement("div",null,r.a.createElement("section",{id:"turn-me-on"},n?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Form"},r.a.createElement("input",{type:"email",placeholder:"me@example.com",onChange:function(e){return s(e.target.value)}}),r.a.createElement("div",{className:"Button",onClick:function(){S.post("/register",{email:c}).then((function(e){U.b.success("\ud83d\udce7 Check your email! (And your spam)")})).catch((function(e){U.b.error("\ud83d\ude25 "+e.response.data.message),console.log(e.response)}))}},"Send confirmation email"))):r.a.createElement("div",{className:"Button",onClick:function(){return o(!0)}},"Turn my light ",r.a.createElement("b",null,"on"))))},_=(n(50),n(23)),A=(n(53),function(){var e=Object(_.useCountUp)({start:0,end:0,delay:1e3,duration:3}),t=e.countUp,n=e.update;return Object(a.useEffect)((function(){var e=function(){S.get("/total").then((function(e){n(e.data)}))};e();var t=setInterval((function(){e()}),5e3);return function(){return clearInterval(t)}}),[n]),r.a.createElement("div",null,r.a.createElement("section",{id:"counter",className:"Counter"},r.a.createElement("div",{className:"Counter__count"},t),r.a.createElement("div",{className:"Counter__text"},"people have already turned on their light!")))}),B=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"confirmEmail",value:function(){var e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=window.location.pathname.replace("/",""))&&""!==t&&"/"!==t&&S.post("/confirm",{code:t}).then((function(e){U.b.success("\ud83d\udca1 You turned your light successfully on!")})).catch((function(e){U.b.error(e.response.data.message)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.confirmEmail()}},{key:"render",value:function(){return r.a.createElement("div",{className:"MainComponent"},r.a.createElement(C,null),r.a.createElement(A,null),r.a.createElement(F,null),r.a.createElement(R,null),r.a.createElement(U.a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnVisibilityChange:!0,draggable:!0,pauseOnHover:!0}))}}]),n}(a.Component);n(54);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("https://turnuson.nl",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("https://turnuson.nl","/service-worker.js");l?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):c(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):c(t,e)}))}}()}},[[24,1,2]]]);
//# sourceMappingURL=main.ea6faa3d.chunk.js.map