(this.webpackJsonpfacerecognition=this.webpackJsonpfacerecognition||[]).push([[0],{102:function(e,t,a){},103:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){},348:function(e,t,a){},350:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a.n(n),i=a(49),o=a.n(i),r=(a(102),a(21)),l=a(22),c=a(24),m=a(23),u=function(e){var t=e.onRouteChange;return e.isSignedIn?s.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},s.a.createElement("p",{onClick:function(){return t("signout")},className:"f3 link dim black underline pa3 pointer"},"Sign Out")):s.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},s.a.createElement("p",{onClick:function(){return t("signin")},className:"f3 link dim black underline pa3 pointer"},"Sign In"),s.a.createElement("p",{onClick:function(){return t("register")},className:"f3 link dim black underline pa3 pointer"},"Register"))},p=a(94),h=a.n(p),d=(a(103),a(95)),g=a.n(d),b=function(){return s.a.createElement("div",{className:"ma4 mto "},s.a.createElement(h.a,{className:"Tilt br2 shadow-2",options:{max:55},style:{height:150,width:150}},s.a.createElement("div",{className:"Tilt-inner pa3"},s.a.createElement("img",{style:{paddingTop:"3px"},alt:"logo",src:g.a}))))},f=(a(104),function(e){var t=e.onInputChange,a=e.onButtonSubmit;return s.a.createElement("div",null,s.a.createElement("p",{className:"f3"},"This Robot will detect faces,give it a try."),s.a.createElement("div",{className:"center"},s.a.createElement("div",{className:"form center pa4 br3 shadow-5"},s.a.createElement("input",{className:"f4 pa2 w-70 center",type:"tex",onChange:t}),s.a.createElement("button",{className:"w-30 grow f4 link ph3 pv2 dib white bg-light-purple",onClick:a},"Detect"))))}),E=function(e){var t=e.name,a=e.entries;return s.a.createElement("div",null,s.a.createElement("div",{className:"white f3"},"".concat(t,",your search count is")),s.a.createElement("div",{className:"white f1"},a))},w=(a(105),function(e){var t=e.imgUrl,a=e.box;return s.a.createElement("div",{className:"center ma"},s.a.createElement("div",{className:"absolute mt2"},s.a.createElement("img",{id:"inputimage",alt:"",src:t,width:"350px",height:"auto"}),s.a.createElement("div",{className:"bounting-box",style:{top:a.topRow,right:a.rightCol,bottom:a.bottomRow,left:a.leftCol}})))}),v=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).onEmailChange=function(e){n.setState({signInEmail:e.target.value})},n.onPasswordChange=function(e){n.setState({signInPassword:e.target.value})},n.onSubmitSignIn=function(){fetch("https://blooming-forest-44537.herokuapp.com/signin",{method:"post",headers:{"content-type":"application/json"},body:JSON.stringify({email:n.state.signInEmail,password:n.state.signInPassword})}).then((function(e){return e.json()})).then((function(e){e.id&&(n.props.loadUser(e),n.props.onRouteChange("home"))}))},n.state={signInEmail:"",signInPassword:""},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.onRouteChange;return s.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow center"},s.a.createElement("main",{className:"pa4 black-80"},s.a.createElement("div",{className:"measure"},s.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},s.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Sign In"),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),s.a.createElement("input",{onChange:this.onEmailChange,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})),s.a.createElement("div",{className:"mv3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),s.a.createElement("input",{onChange:this.onPasswordChange,className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",ame:"password",id:"password"}))),s.a.createElement("div",{className:""},s.a.createElement("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign In"})),s.a.createElement("div",{className:"lh-copy mt3"},s.a.createElement("p",{style:{cursor:"pointer"},onClick:function(){return e("register")},className:"f6 link dim black db"},"Register")))))}}]),a}(s.a.Component),N=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).onNameChange=function(e){n.setState({name:e.target.value})},n.onEmailChange=function(e){n.setState({email:e.target.value})},n.onPasswordChange=function(e){n.setState({password:e.target.value})},n.onSubmitSignIn=function(){fetch("https://blooming-forest-44537.herokuapp.com/register",{method:"post",headers:{"content-type":"application/json"},body:JSON.stringify({email:n.state.email,password:n.state.password,name:n.state.name})}).then((function(e){return e.json()})).then((function(e){e.id&&(n.props.loadUser(e),n.props.onRouteChange("home"))}))},n.state={email:"",password:"",name:""},n}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow center"},s.a.createElement("main",{className:"pa4 black-80"},s.a.createElement("div",{className:"measure"},s.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},s.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Register"),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"name"},"Name"),s.a.createElement("input",{onChange:this.onNameChange,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name"})),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),s.a.createElement("input",{onChange:this.onEmailChange,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})),s.a.createElement("div",{className:"mv3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),s.a.createElement("input",{onChange:this.onPasswordChange,className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",ame:"password",id:"password"}))),s.a.createElement("div",{className:""},s.a.createElement("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register and SignIn"})))))}}]),a}(s.a.Component),C=a(96),y=a.n(C),S=a(50),k=a.n(S),I=(a(348),new k.a.App({apiKey:"32a9d392f9fc4530ad945c248c4ae3c0"})),j={input:"",imgUrl:"",box:{},route:"signin",isSignedIn:!1,user:{id:"",name:"",email:"",entries:0,joined:""}},x=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).loadUser=function(t){e.setState({user:{id:t.id,name:t.name,email:t.email,entries:t.entries,joined:t.joined}})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.calculateFaceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,a=document.getElementById("inputimage"),n=Number(a.width),s=Number(a.height);return{leftCol:t.left_col*n,topRow:t.top_row*s,rightCol:n-t.right_col*n,bottomRow:s-t.bottom_row*s}},e.displayFaceBox=function(t){e.setState({box:t}),console.log(t)},e.onButtonSubmit=function(){e.setState({imgUrl:e.state.input}),I.models.predict(k.a.FACE_DETECT_MODEL,e.state.input).then((function(t){t&&(fetch("https://blooming-forest-44537.herokuapp.com/image",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then((function(e){return e.json()})).then((function(t){e.setState(Object.assign(e.state.user,{entries:t}))})),e.displayFaceBox(e.calculateFaceLocation(t)))})).catch((function(e){return console.log("Here is the mistake",e)}))},e.onRouteChange=function(t){"signout"===t?e.setState(j):"home"===t&&e.setState({isSignedIn:!0}),e.setState({route:t})},e.state=j,e}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(y.a,{className:"particles"}),s.a.createElement(u,{isSignedIn:this.state.isSignedIn,onRouteChange:this.onRouteChange}),"home"===this.state.route?s.a.createElement("div",null,s.a.createElement(b,null),s.a.createElement(E,{name:this.state.user.name,entries:this.state.user.entries}),s.a.createElement(f,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),s.a.createElement(w,{box:this.state.box,imgUrl:this.state.imgUrl})):"signin"===this.state.route?s.a.createElement(v,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):s.a.createElement(N,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(349);o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},95:function(e,t,a){e.exports=a.p+"static/media/brain.9936776a.png"},97:function(e,t,a){e.exports=a(350)}},[[97,1,2]]]);
//# sourceMappingURL=main.ccd0839b.chunk.js.map