(this["webpackJsonpvlogdat-client"]=this["webpackJsonpvlogdat-client"]||[]).push([[0],{158:function(e,t,a){e.exports=a(208)},163:function(e,t,a){},208:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),l=a.n(o),c=a(10),i=a(11),s=a(14),m=a(13),u=a(16),p=a(22),d=(a(163),a(244)),h=a(99),E=a.n(h),b=a(129),f=a.n(b),g=a(20),v=a.n(g),y=a(12),O=a(49),S=a(131),j=a(69),C=a(9),I={authenticated:!1,loading:!1,credentials:{},likes:[],notifications:[]},N={posts:[],post:{},loading:!1},k={loading:!1,errors:null},w=[S.a],T=Object(O.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_AUTHENTICATED":return Object(C.a)(Object(C.a)({},e),{},{authenticated:!0});case"SET_UNAUTHENTICATED":return I;case"SET_USER":return Object(C.a)({authenticated:!0,loading:!1},t.payload);case"LOADING_USER":return Object(C.a)(Object(C.a)({},e),{},{loading:!0});case"LIKE_POST":return Object(C.a)(Object(C.a)({},e),{},{likes:[].concat(Object(j.a)(e.likes),[{userHandle:e.credentials.handle,postId:t.payload.postId}])});case"UNLIKE_POST":return Object(C.a)(Object(C.a)({},e),{},{likes:e.likes.filter((function(e){return e.postId!==t.payload.postId}))});case"MARK_NOTIFICATIONSREAD":return e.notifications.forEach((function(e){return e.read=!0})),Object(C.a)({},e);default:return e}},data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING_DATA":return Object(C.a)(Object(C.a)({},e),{},{loading:!0});case"SET_POSTS":return Object(C.a)(Object(C.a)({},e),{},{posts:t.payload,loading:!1});case"SET_POST":return Object(C.a)(Object(C.a)({},e),{},{post:t.payload});case"LIKE_POST":case"UNLIKE_POST":var a=e.posts.findIndex((function(e){return e.postId===t.payload.postId}));return e.posts[a]=t.payload,e.post.postId===t.payload.postId&&(e.post=t.payload),Object(C.a)({},e);case"DELETE_POST":return a=e.posts.findIndex((function(e){return e.postId===t.payload})),e.posts.splice(a,1),Object(C.a)({},e);case"CREATE_POST":return Object(C.a)(Object(C.a)({},e),{},{posts:[t.payload].concat(Object(j.a)(e.posts))});case"SUBMIT_COMMENT":return Object(C.a)(Object(C.a)({},e),{},{post:Object(C.a)(Object(C.a)({},e.post),{},{comments:[t.payload].concat(Object(j.a)(e.post.comments))})});default:return e}},UI:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ERRORS":return Object(C.a)(Object(C.a)({},e),{},{loading:!1,errors:t.payload});case"CLEAR_ERRORS":return Object(C.a)(Object(C.a)({},e),{},{loading:!1,errors:null});case"LOADING_UI":return Object(C.a)(Object(C.a)({},e),{},{loading:!0});case"STOP_LOADING_UI":return Object(C.a)(Object(C.a)({},e),{},{loading:!1});default:return e}}}),x=Object(O.e)(T,{},Object(O.d)(O.a.apply(void 0,w))),A=function(){return function(e){localStorage.removeItem("FBIdToken"),delete v.a.defaults.headers.common.Authorization,e({type:"SET_UNAUTHENTICATED"})}},P=function(){return function(e){e({type:"LOADING_USER"}),v.a.get("/user").then((function(t){e({type:"SET_USER",payload:t.data})})).catch((function(e){return console.log(e)}))}},U=function(e){var t="Bearer ".concat(e);localStorage.setItem("FBIdToken",t),v.a.defaults.headers.common.Authorization=t},R=a(139),D=Object(y.b)((function(e){return{authenticated:e.user.authenticated}}))((function(e){var t=e.component,a=e.authenticated,n=Object(R.a)(e,["component","authenticated"]);return r.a.createElement(p.b,Object.assign({},n,{render:function(e){return!0===a?r.a.createElement(p.a,{to:"/home"}):r.a.createElement(t,e)}}))})),_=a(256),L=a(239),F=function(e){var t=e.children,a=e.onClick,n=e.tip,o=e.placement,l=e.btnClassName,c=e.tipClassName;return r.a.createElement(_.a,{title:n,placement:o,className:c},r.a.createElement(L.a,{onClick:a,className:l},t))},B=a(31),W=a(17),M=a.n(W),Y=a(242),G=a(254),H=a(257),z=a(241),K=a(240),J=a(243),q=a(133),V=a.n(q),Z=a(84),$=a.n(Z),Q=function(){return function(e){e({type:"CLEAR_ERRORS"})}},X=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={open:!1,body:"",errors:[]},e.handleOpen=function(){e.setState({open:!0})},e.handleClose=function(){e.props.clearErrors(),e.setState({open:!1,errors:{}})},e.handleChange=function(t){e.setState(Object(B.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.createPost({body:e.state.body})},e}return Object(i.a)(a,[{key:"componentWillReceiveProps",value:function(e){e.UI.errors&&this.setState({errors:e.UI.errors}),e.UI.errors||e.UI.loading||this.setState({body:"",open:!1,errors:{}})}},{key:"render",value:function(){var e=this.state.errors,t=this.props,a=t.classes,o=t.UI.loading;return r.a.createElement(n.Fragment,null,r.a.createElement(F,{onClick:this.handleOpen,tip:"Create a post"},r.a.createElement(V.a,null)),r.a.createElement(H.a,{open:this.state.open,onClose:this.handleClose,fullWidth:!0,maxWidth:"sm"},r.a.createElement(F,{tip:"close",onClick:this.handleClose,tipClassName:a.closeButton},r.a.createElement($.a,null)),r.a.createElement(K.a,null,"Add a new post"),r.a.createElement(z.a,null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(G.a,{name:"body",type:"text",label:"Post!",multiline:!0,rows:"3",placeholder:"Share what you think",errors:!!e.body,helperText:e.body,className:a.textField,onChange:this.handleChange,fullWidth:!0}),r.a.createElement(Y.a,{type:"submit",variant:"contained",color:"primary",className:a.submitButton,disabled:o},"Submit",o&&r.a.createElement(J.a,{size:30,className:a.progressSpinner}))))))}}]),a}(n.Component),ee=Object(y.b)((function(e){return{UI:e.UI}}),{createPost:function(e){return function(t){t({type:"LOADING_UI"}),v.a.post("/post",e).then((function(e){t({type:"CREATE_POST",payload:e.data}),t(Q())})).catch((function(e){t({type:"SET_ERRORS",payload:e.response.data})}))}},clearErrors:Q})(M()({submitButton:{position:"relative",marginTop:10,marginBottom:10,float:"right"},progressSpinner:{position:"absolute"},closeButton:{position:"absolute",left:"91%",top:"6%"}})(X)),te=a(28),ae=a.n(te),ne=a(86),re=a.n(ne),oe=a(138),le=a(258),ce=a(141),ie=a(245),se=a(91),me=a.n(se),ue=a(87),pe=a.n(ue),de=a(58),he=a.n(de),Ee=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={anchorEl:null},e.handleOpen=function(t){e.setState({anchorEl:t.target})},e.handleClose=function(){e.setState({anchorEl:null})},e.onMenuOpened=function(){var t=e.props.notifications.filter((function(e){return!e.read})).map((function(e){return e.notificationsId}));e.props.markNotificationsRead(t)},e}return Object(i.a)(a,[{key:"render",value:function(){var e,t=this,a=this.props.notifications,o=this.state.anchorEl;ae.a.extend(re.a),e=a&&a.length>0&&a.filter((function(e){return!1===e.read})).length>0?r.a.createElement(ie.a,{badgeContent:a.filter((function(e){return!1===e.read})).length,color:"secondary"},r.a.createElement(me.a,null)):r.a.createElement(me.a,null);var l=a&&a.length>0?a.map((function(e){var a="like"===e.type?"liked":"commented on",n=ae()(e.createdAt).fromNow(),o=e.read?"primary":"secondary",l="like"===e.type?r.a.createElement(pe.a,{color:o,style:{marginRight:10}}):r.a.createElement(he.a,{color:o,style:{marginRight:10}});return r.a.createElement(le.a,{key:e.createdAt,onClick:t.handleClose},l,r.a.createElement(ce.a,{component:u.b,color:"default",variat:"body1",to:"users/".concat(e.recipient,"/post/").concat(e.postId)},e.sender," ",a," your post ",n))})):r.a.createElement(le.a,{onClick:this.handleClose},"You have no notifications yet");return r.a.createElement(n.Fragment,null,r.a.createElement(_.a,{placement:"top",title:"Notifications"},r.a.createElement(L.a,{"aria-owns":o?"simple-menu":void 0,"aria-haspopup":"true",onClick:this.handleOpen},e)),r.a.createElement(oe.a,{anchorEl:o,open:Boolean(o),onClose:this.handleClose,onEntered:this.onMenuOpened},l))}}]),a}(n.Component),be=Object(y.b)((function(e){return{notifications:e.user.notifications}}),{markNotificationsRead:function(e){return function(t){v.a.post("notifications",e).then((function(e){t({type:"MARK_NOTIFICATIONSREAD"})})).catch((function(e){return console.log(e)}))}}})(Ee),fe=a(246),ge=a(247),ve=a(134),ye=a.n(ve),Oe=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.authenticated;return r.a.createElement(fe.a,null,r.a.createElement(ge.a,{className:"nav-container"},e?r.a.createElement(n.Fragment,null,r.a.createElement(ee,null),r.a.createElement(u.b,{to:"/home"},r.a.createElement(F,{tip:"Home",placement:"top"},r.a.createElement(ye.a,null))),r.a.createElement(be,null)):r.a.createElement(n.Fragment,null,r.a.createElement(Y.a,{color:"inherit",component:u.b,to:"/login"},"Login"),r.a.createElement(Y.a,{color:"inherit",component:u.b,to:"/"},"Home"),r.a.createElement(Y.a,{color:"inherit",component:u.b,to:"/signup"},"Signup"))))}}]),a}(n.Component),Se=Object(y.b)((function(e){return{authenticated:e.user.authenticated}}))(Oe),je=a(252),Ce=a(88),Ie=a.n(Ce),Ne=a(248),ke=a(249),we=a(250),Te=M()((function(e){return{card:{display:"flex",marginBottom:20},cardContent:{width:"100%",flexDirection:"column",padding:25},cover:{minWidth:200,objectFit:"cover"},handle:{width:60,height:20,backgroundColor:"#00897b",marginBottom:7},date:{height:14,width:100,backgroundColor:"rgba(0,0,0, 0.3)",marginBottom:10},fullLine:{height:15,width:"90%",backgroundColor:"rgba(0,0,0, 0.6)",marginBottom:10},halfLine:{height:15,width:"50%",backgroundColor:"rgba(0,0,0, 0.6)",marginBottom:10}}}))((function(e){var t=e.classes,a=Array.from({length:5}).map((function(e,a){return r.a.createElement(Ne.a,{className:t.card,key:a},r.a.createElement(ke.a,{className:t.cover,image:Ie.a}),r.a.createElement(we.a,{className:t.cardContent},r.a.createElement("div",{className:t.handle}),r.a.createElement("div",{className:t.date}),r.a.createElement("div",{className:t.fullLine}),r.a.createElement("div",{className:t.fullLine}),r.a.createElement("div",{className:t.halfLine})))}));return r.a.createElement(n.Fragment,null,a)})),xe=a(4),Ae=a.n(xe),Pe=a(251),Ue=a(135),Re=a.n(Ue),De=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={open:!1},e.handleOpen=function(){e.setState({open:!0})},e.handleClose=function(){e.setState({open:!1})},e.deletePost=function(){e.props.deletePost(e.props.postId),e.setState({open:!1})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(n.Fragment,null,r.a.createElement(F,{tip:"Delete Post",onClick:this.handleOpen,btnClassName:e.deleteButton},r.a.createElement(Re.a,{color:"secondary"})),r.a.createElement(H.a,{open:this.state.open,onClose:this.state.handleClose,fullWidth:!0,maxWidth:"sm"},r.a.createElement(K.a,null,"Are you sure to delete this post?"),r.a.createElement(Pe.a,null,r.a.createElement(Y.a,{onClick:this.handleClose,color:"primary"},"Cancel"),r.a.createElement(Y.a,{onClick:this.deletePost,color:"secondary"},"Delete"))))}}]),a}(n.Component),_e=Object(y.b)(null,{deletePost:function(e){return function(t){v.a.delete("/post/".concat(e)).then((function(){t({type:"DELETE_POST",payload:e})})).catch((function(e){return console.log(e)}))}}})(M()({deleteButton:{position:"absolute",left:"90%",top:"10%",color:"red"}})(De)),Le=a(103),Fe=a.n(Le),Be=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).likedPost=function(){return!(!e.props.user.likes||!e.props.user.likes.find((function(t){return t.postId===e.props.postId})))},e.likePost=function(){e.props.likePost(e.props.postId)},e.unlikePost=function(){e.props.unlikePost(e.props.postId)},e}return Object(i.a)(a,[{key:"render",value:function(){return this.props.user.authenticated?this.likedPost()?r.a.createElement(F,{tip:"Unlike",onClick:this.unlikePost},r.a.createElement(pe.a,{color:"primary"})):r.a.createElement(F,{tip:"Like",onClick:this.likePost},r.a.createElement(Fe.a,{color:"primary"})):r.a.createElement(u.b,{to:"login"},r.a.createElement(F,{tip:"Like"},r.a.createElement(Fe.a,{color:"primary"})))}}]),a}(n.Component),We={likePost:function(e){return function(t){v.a.get("/post/".concat(e,"/like")).then((function(e){t({type:"LIKE_POST",payload:e.data})})).catch((function(e){return console.log(e)}))}},unlikePost:function(e){return function(t){v.a.get("/post/".concat(e,"/unlike")).then((function(e){t({type:"UNLIKE_POST",payload:e.data})})).catch((function(e){return console.log(e)}))}}},Me=Object(y.b)((function(e){return{user:e.user}}),We)(Be),Ye=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.comments,a=e.classes;return r.a.createElement(je.a,{container:!0},t.map((function(e,o){var l=e.body,c=e.createdAt,i=e.userImage,s=e.userHandle;return r.a.createElement(n.Fragment,{key:c},r.a.createElement(je.a,{item:!0,sm:12},r.a.createElement(je.a,{container:!0},r.a.createElement(je.a,{item:!0,sm:2},r.a.createElement("img",{src:i,alt:"comment",className:a.commentImage})),r.a.createElement(je.a,{item:!0,sm:9},r.a.createElement("div",{className:a.commentData},r.a.createElement(ce.a,{variant:"h5",component:u.b,to:"/users/".concat(s),color:"primary"},s),r.a.createElement(ce.a,{variant:"body2",color:"textSecondary"},ae()(c).format("h:mm a, MMMM DD YYYY")),r.a.createElement("hr",{className:a.invisibleSeparator}),r.a.createElement(ce.a,{variant:"body1"},l))))),o!==t.length-1&&r.a.createElement("hr",{className:a.visibleSeparator}))})))}}]),a}(n.Component);customElements.propTypes={comments:Ae.a.array.isRequired};var Ge=M()((function(e){return{invisibleSeparator:{border:"none",margin:4},visibleSeparator:{width:"100%",borderBottom:"1px solid rgba(0,0,0,0.1)",marginBottom:"20px"},commentImage:{maxWidth:"100%",height:100,objectFit:"cover",borderRadius:"50%"},commentData:{marginLeft:20}}}))(Ye),He=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={body:"",errors:{}},e.handleChange=function(t){e.setState(Object(B.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.submitComment(e.props.postId,{body:e.state.body})},e}return Object(i.a)(a,[{key:"componentWillReceiveProps",value:function(e){e.UI.errors&&this.setState({errors:e.UI.errors}),e.UI.errors||e.UI.loading||this.setState({body:""})}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.authenticated,n=this.state.errors;return a?r.a.createElement(je.a,{item:!0,sm:12,style:{textAlign:"center"}},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(G.a,{name:"body",type:"text",label:"Comment on this post",error:!!n.comment,helperText:n.comment,value:this.state.body,onChange:this.handleChange,width:"75%",className:t.textField}),r.a.createElement(Y.a,{type:"submit",variant:"contained",color:"primary",className:t.button,style:{position:"relative"}},"Submit")),r.a.createElement("br",null),r.a.createElement("hr",{className:t.visibleSeperator})):null}}]),a}(n.Component),ze=Object(y.b)((function(e){return{UI:e.UI,authenticated:e.user.authenticated}}),{submitComment:function(e,t){return function(a){v.a.post("/post/".concat(e,"/comment"),t).then((function(e){a({type:"SUBMIT_COMMENT",payload:e.data}),a(Q())})).catch((function(e){a({type:"SET_ERRORS",payload:e.response.data})}))}}})(M()((function(e){return{visibleSeparator:{width:"100%",borderBottom:"1px solid rgba(0,0,0,0.1)",marginBottom:"20px"},button:{marginTop:"10px",position:"absolute"}}}))(He)),Ke=a(136),Je=a.n(Ke),qe=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={open:!1,oldPath:"",newPath:""},e.handleOpen=function(){var t=window.location.pathname,a=e.props,n=a.userHandle,r=a.postId,o="/users/".concat(n,"/post/").concat(r);t===o&&(t="/users/".concat(n)),window.history.pushState(null,null,o),e.setState({open:!0,oldPath:t,newPath:o}),e.props.getPost(e.props.postId)},e.handleClose=function(){window.history.pushState(null,null,e.state.oldPath),e.setState({open:!1}),e.props.clearErrors()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.openDialog&&this.handleOpen()}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.post,o=a.postId,l=a.body,c=a.createdAt,i=a.likeCount,s=a.commentCount,m=a.userImage,p=a.userHandle,d=a.comments,h=e.UI.loading?r.a.createElement("div",{className:t.spinnerDiv},r.a.createElement(J.a,{size:200,thickness:2})):r.a.createElement(je.a,{container:!0,spacing:16},r.a.createElement(je.a,{item:!0,sm:5},r.a.createElement("img",{src:m,alt:"Profile",className:t.profileImage})),r.a.createElement(je.a,{item:!0,sm:7},r.a.createElement(ce.a,{component:u.b,color:"primary",variant:"h5",to:"/users/".concat(p)},"@",p),r.a.createElement("hr",{className:t.invisibleSeparator}),r.a.createElement(ce.a,{variant:"body2",color:"textSecondary"},ae()(c).format("h:mm a, MMMM DD YYYY")),r.a.createElement("hr",{className:t.invisibleSeparator}),r.a.createElement(ce.a,{variant:"body1"},l),r.a.createElement(Me,{postId:o}),r.a.createElement("span",null,i," likes"),r.a.createElement(F,{tip:"comments"},r.a.createElement(he.a,{color:"primary"})),r.a.createElement("span",null,s," comments")),r.a.createElement(ze,{postId:o}),r.a.createElement(Ge,{comments:d}));return r.a.createElement(n.Fragment,null,r.a.createElement(F,{onClick:this.handleOpen,tip:"See Post",tipClassName:t.expandButton},r.a.createElement(Je.a,{color:"primary"})),r.a.createElement(H.a,{open:this.state.open,onClose:this.handleClose,fullWidth:!0,maxWidth:"sm"},r.a.createElement(F,{tip:"close",onClick:this.handleClose,tipClassName:t.closeButton},r.a.createElement($.a,null)),r.a.createElement(z.a,{className:t.dialogContent},h)))}}]),a}(n.Component),Ve={getPost:function(e){return function(t){t({type:"LOADING_UI"}),v.a.get("/post/".concat(e)).then((function(e){t({type:"SET_POST",payload:e.data}),t({type:"STOP_LOADING_UI"})})).catch((function(e){return console.log(e)}))}},clearErrors:Q},Ze=Object(y.b)((function(e){return{post:e.data.post,UI:e.UI}}),Ve)(M()({invisibleSeparator:{border:"none",margin:4},visibleSeparator:{width:"100%",borderBottom:"1px solid rgba(0,0,0,0.1)",marginBottom:"20px"},profileImage:{maxWidth:200,height:200,borderRadius:"50%",objectFit:"cover"},dialogContent:{padding:20},closeButton:{position:"absolute",left:"90%"},expandButton:{position:"absolute",left:"90%"},spinnerDiv:{textAlign:"center",marginTop:50,marginBottom:50}})(qe)),$e=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){ae.a.extend(re.a);var e=this.props,t=e.classes,a=e.post,n=a.body,o=a.createdAt,l=a.userImage,c=a.userHandle,i=a.postId,s=a.likeCount,m=a.commentCount,p=e.user,d=p.authenticated,h=p.credentials.handle,E=d&&c===h?r.a.createElement(_e,{postId:i}):null;return r.a.createElement(Ne.a,{className:t.card},r.a.createElement(ke.a,{className:t.image,image:l,title:"Profile Image"}),r.a.createElement(we.a,{className:t.content},r.a.createElement(ce.a,{variant:"h5",component:u.b,to:"/users/".concat(c),color:"primary"},c),E,r.a.createElement(ce.a,{variant:"body2",color:"textSecondary"},ae()(o).fromNow()),r.a.createElement(ce.a,{variant:"body1"},n),r.a.createElement(Me,{postId:i}),r.a.createElement("span",null,s),r.a.createElement(F,{tip:"comments"},r.a.createElement(he.a,{color:"primary"})),r.a.createElement("span",null,m," comments"),r.a.createElement(Ze,{postId:i,userHandle:c,openDialog:this.props.openDialog})))}}]),a}(n.Component);$e.prototypes={user:Ae.a.object.isRequired,post:Ae.a.object.isRequired,classes:Ae.a.object.isRequired,openDialog:Ae.a.bool};var Qe=Object(y.b)((function(e){return{user:e.user}}))(M()({card:{display:"flex",marginBottom:20,position:"relative"},image:{minWidth:200,backgroundPosition:"center center",backgroundSize:"cover"},content:{padding:25,objectFit:"cover"}})($e)),Xe=a(89),et=a.n(Xe),tt=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={bio:"",website:"",location:"",open:!1},e.mapsetUserDetailsToState=function(t){e.setState({bio:t.bio?t.bio:"",website:t.website?t.website:"",location:t.location?t.location:""})},e.handleOpen=function(t){e.setState({open:!0}),e.mapsetUserDetailsToState(t)},e.handleClose=function(){e.setState({open:!1})},e.handleSubmit=function(){var t={bio:e.state.bio,website:e.state.website,location:e.state.location};e.props.editUserDetails(t),e.handleClose()},e.handleChange=function(t){e.setState(Object(B.a)({},t.target.name,t.target.value))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.credentials;this.mapsetUserDetailsToState(e)}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(n.Fragment,null,r.a.createElement(F,{tip:"Edit Details",placement:"top",onClick:this.handleOpen,btnClassName:e.button},r.a.createElement(et.a,{color:"primary"})),r.a.createElement(H.a,{open:this.state.open,onClose:this.handleClose,fullWidth:!0,maxWidth:"sm"},r.a.createElement(K.a,null,"Edit your detials"),r.a.createElement(z.a,null,r.a.createElement("form",null,r.a.createElement(G.a,{name:"bio",type:"text",label:"Bio",multiline:!0,rows:"3",placeholder:"a short bio about you",className:e.TextField,value:this.state.bio,onChange:this.handleChange,fullWidth:!0}),r.a.createElement(G.a,{name:"website",type:"text",label:"Website",placeholder:"your personal website",className:e.TextField,value:this.state.website,onChange:this.handleChange,fullWidth:!0}),r.a.createElement(G.a,{name:"location",type:"text",label:"Location",placeholder:"Where you live",className:e.TextField,value:this.state.location,onChange:this.handleChange,fullWidth:!0}))),r.a.createElement(Pe.a,null,r.a.createElement(Y.a,{onClick:this.handleClose,color:"primary"},"Cancel"),r.a.createElement(Y.a,{onClick:this.handleSubmit,color:"primary"},"Save"))))}}]),a}(n.Component),at=Object(y.b)((function(e){return{credentials:e.user.credentials}}),{editUserDetails:function(e){return function(t){t({type:"LOADING_USER"}),v.a.post("/user",e).then((function(){t(P())})).catch((function(e){return console.log(e)}))}}})(M()((function(e){return{button:{float:"right"}}}))(tt)),nt=a(140),rt=a(59),ot=a.n(rt),lt=a(60),ct=a.n(lt),it=a(61),st=a.n(it),mt=M()((function(e){return{paper:{padding:20},profile:{"& .image-wrapper":{textAlign:"center",position:"relative","& button":{position:"absolute",top:"80%",left:"70%"}},"& .profile-image":{width:200,height:200,objectFit:"cover",borderRadius:"50%"},"& .profile-details":{textAlign:"center","& span, svg":{verticalAlign:"middle"},"& a":{color:"#00bcd4"}},"& hr":{border:"none",margin:"0 0 10px 0"},"& svg.button":{"&:hover":{cursor:"pointer"}}},handle:{height:20,backgroundColor:e.palette.primary.main,width:60,margin:"0 auto 7px auto"},fullLine:{height:15,backgroundColor:"rgba(0,0,0,0.6)",width:"100%",marginBottom:10},halfLine:{height:15,backgroundColor:"rgba(0,0,0,0.6)",width:"50%",marginBottom:10}}}))((function(e){var t=e.classes;return r.a.createElement(nt.a,{className:t.paper},r.a.createElement("div",{className:t.profile},r.a.createElement("div",{className:"image-wrapper"},r.a.createElement("img",{src:Ie.a,alt:"profile",className:"profile-image"})),r.a.createElement("hr",null),r.a.createElement("div",{className:"profile-details"},r.a.createElement("div",{className:t.handle}),r.a.createElement("hr",null),r.a.createElement("div",{className:t.fullLine}),r.a.createElement("div",{className:t.fullLine}),r.a.createElement("hr",null),r.a.createElement(ot.a,{color:"primary"})," ",r.a.createElement("span",null,"Location"),r.a.createElement("hr",null),r.a.createElement(ct.a,{color:"primary"})," .......",r.a.createElement(st.a,{color:"primary"})," Joined date")))})),ut=a(253),pt=a(137),dt=a.n(pt),ht=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleImageChange=function(t){var a=t.target.files[0],n=new FormData;n.append("image",a,a.name),e.props.uploadImage(n)},e.handleEditPicture=function(){document.getElementById("imageInput").click()},e.handleLogout=function(){e.props.logoutUser()},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.user,o=a.credentials,l=o.handle,c=o.createdAt,i=o.imageUrl,s=o.bio,m=o.website,p=o.location,d=a.loading,h=a.authenticated;return d?r.a.createElement(mt,null):h?r.a.createElement(nt.a,{className:t.paper},r.a.createElement("div",{className:t.profile},r.a.createElement("div",{className:"image-wrapper"},r.a.createElement("img",{src:i,alt:"profile",className:"profile-image"}),r.a.createElement("input",{type:"file",id:"imageInput",hidden:"hidden",onChange:this.handleImageChange}),r.a.createElement(F,{tip:"Edit profile picture",onClick:this.handleEditPicture,btnclassName:"button"},r.a.createElement(et.a,{color:"primary"}))),r.a.createElement("hr",null),r.a.createElement("div",{className:"profile-details"},r.a.createElement(ut.a,{component:u.b,to:"/users/".concat(l),color:"primary",variant:"h5"},l),r.a.createElement("hr",null),s&&r.a.createElement(ce.a,{variant:"body1"},s),r.a.createElement("hr",null),p&&r.a.createElement(n.Fragment,null,r.a.createElement(ot.a,{color:"primary"})," ",r.a.createElement("span",null,p),r.a.createElement("hr",null)),m&&r.a.createElement(n.Fragment,null,r.a.createElement(ct.a,{color:"primary"}),r.a.createElement("a",{href:m,target:"_blank",rel:"noopener noreferrer"}," ",m),r.a.createElement("hr",null)),r.a.createElement(st.a,{color:"primary"})," "," ",r.a.createElement("span",null,"Joined ",ae()(c).format("MMM YYYY"))),r.a.createElement(F,{tip:"Logout",placement:"top",onClick:this.handleLogout},r.a.createElement(dt.a,{color:"primary"})),r.a.createElement(at,null))):r.a.createElement(nt.a,{className:t.paper},r.a.createElement(ce.a,{variant:"body2",align:"center"},"no profile found, please login!"),r.a.createElement("div",{className:t.buttons},r.a.createElement(Y.a,{variant:"contained",color:"primary",component:u.b,to:"/login"},"Login"),r.a.createElement(Y.a,{variant:"contained",color:"secondary",component:u.b,to:"/Signup"},"Signup")))}}]),a}(n.Component),Et={logoutUser:A,uploadImage:function(e){return function(t){t({type:"LOADING_USER"}),v.a.post("/user/image",e).then((function(){t(P())})).catch((function(e){return console.log(e)}))}}},bt=Object(y.b)((function(e){return{user:e.user}}),Et)(M()((function(e){return{paper:{padding:20},profile:{"& .image-wrapper":{textAlign:"center",position:"relative","& button":{position:"absolute",top:"80%",left:"70%"}},"& .profile-image":{width:200,height:200,objectFit:"cover",maxWidth:"100%",borderRadius:"50%"},"& .profile-details":{textAlign:"center","& span, svg":{verticalAlign:"middle"},"& a":{color:"#00bcd4"}},"& hr":{border:"none",margin:"0 0 10px 0"},"& svg.button":{"&:hover":{cursor:"pointer"}}},buttons:{textAlign:"center","& a":{margin:"20px 10px"}}}}))(ht)),ft=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.getPosts()}},{key:"render",value:function(){var e=this.props.data,t=e.posts,a=e.loading?r.a.createElement(Te,null):t.map((function(e){return r.a.createElement(Qe,{key:e.postId,post:e})}));return r.a.createElement(je.a,{container:!0,spacing:10},r.a.createElement(je.a,{item:!0,sm:8,xs:12},a),r.a.createElement(je.a,{item:!0,sm:4,xs:12},r.a.createElement(bt,null)))}}]),a}(n.Component),gt=Object(y.b)((function(e){return{data:e.data}}),{getPosts:function(){return function(e){e({type:"LOADING_DATA"}),v.a.get("/posts").then((function(t){e({type:"SET_POSTS",payload:t.data})})).catch((function(t){e({type:"SET_POSTS",payload:[]})}))}}})(ft),vt=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).handleSubmit=function(t){t.preventDefault();var a={email:e.state.email,password:e.state.password};e.props.loginUser(a,e.props.history)},e.handleChange=function(t){e.setState(Object(B.a)({},t.target.name,t.target.value))},e.state={email:"",password:"",errors:[]},e}return Object(i.a)(a,[{key:"componentWillReceiveProps",value:function(e){e.UI.errors&&this.setState({errors:e.UI.errors})}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.UI.loading,n=this.state.errors;return r.a.createElement(je.a,{container:!0,className:t.form},r.a.createElement(je.a,{item:!0,sm:!0}),r.a.createElement(je.a,{item:!0,sm:!0},r.a.createElement("h4",{className:t.logo},"VlogThat"),r.a.createElement(ce.a,{variant:"h2",className:t.pageTitle},"Login"),r.a.createElement("form",{noValidate:!0,onSubmit:this.handleSubmit},r.a.createElement(G.a,{id:"email",name:"email",type:"email",label:"Email",className:t.textField,helperText:n.email,error:!!n.email,value:this.state.email,onChange:this.handleChange,fullWidth:!0}),r.a.createElement(G.a,{id:"password",name:"password",type:"password",label:"Password",className:t.textField,value:this.state.password,onChange:this.handleChange,helperText:n.password,error:!!n.password,fullWidth:!0}),n.general&&r.a.createElement(ce.a,{variant:"body2",className:t.customError},n.general),r.a.createElement(Y.a,{type:"submit",variant:"contained",color:"primary",className:t.button,disabled:a},"LOGIN",a&&r.a.createElement(J.a,{size:30,className:t.progress})),r.a.createElement("br",null),r.a.createElement("small",null,"dont have an account ? sign up ",r.a.createElement(u.b,{to:"/signup"},"here")))),r.a.createElement(je.a,{item:!0,sm:!0}))}}]),a}(n.Component),yt={loginUser:function(e,t){return function(a){a({type:"LOADING_UI"}),v.a.post("/login",e).then((function(e){U(e.data.token),a(P()),a({type:"CLEAR_ERRORS"}),t.push("/home")})).catch((function(e){a({type:"SET_ERRORS",payload:e.response.data})}))}}},Ot=Object(y.b)((function(e){return{user:e.user,UI:e.UI}}),yt)(M()({form:{textAlign:"center"},logo:{margin:"20px auto 20px auto"},pageTitle:{margin:"10px auto 10px auto"},textField:{margin:"10px auto 10px auto"},button:{marginTop:20,position:"relative"},customError:{color:"red",fontSize:".8rem",marginTop:10},progress:{position:"absolute",color:"black"}})(vt)),St=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).handleChange=function(t){e.setState(Object(B.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.setState({loading:!0});var a={email:e.state.email,password:e.state.password,confirmPassword:e.state.confirmPassword,handle:e.state.handle};e.props.signupUser(a,e.props.history)},e.state={email:"",password:"",confirmPassword:"",userHandle:"",errors:[]},e}return Object(i.a)(a,[{key:"componentWillReceiveProps",value:function(e){e.UI.errors&&this.setState({errors:e.UI.errors})}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.UI.loading,n=this.state.errors;return r.a.createElement(je.a,{container:!0,className:t.form},r.a.createElement(je.a,{item:!0,sm:!0}),r.a.createElement(je.a,{item:!0,sm:!0},r.a.createElement("h4",{className:t.logo},"VlogThat"),r.a.createElement(ce.a,{variant:"h2",className:t.pageTitle},"Signup"),r.a.createElement("form",{noValidate:!0,onSubmit:this.handleSubmit},r.a.createElement(G.a,{id:"email",name:"email",type:"email",label:"Email",className:t.textField,helperText:n.email,error:!!n.email,value:this.state.email,onChange:this.handleChange,fullWidth:!0}),r.a.createElement(G.a,{id:"password",name:"password",type:"password",label:"Password",className:t.textField,value:this.state.password,onChange:this.handleChange,helperText:n.password,error:!!n.password,fullWidth:!0}),r.a.createElement(G.a,{id:"confirmPassword",name:"confirmPassword",type:"password",label:"Confirm Password",className:t.textField,value:this.state.confirmPassword,onChange:this.handleChange,helperText:n.confirmPassword,error:!!n.confirmPassword,fullWidth:!0}),r.a.createElement(G.a,{id:"handle",name:"handle",type:"text",label:"Your display name",className:t.textField,value:this.state.handle,onChange:this.handleChange,helperText:n.handle,error:!!n.handle,fullWidth:!0}),n.general&&r.a.createElement(ce.a,{variant:"body2",className:t.customError},n.general),r.a.createElement(Y.a,{type:"submit",variant:"contained",color:"primary",className:t.button,disabled:a},"Signup",a&&r.a.createElement(J.a,{size:30,className:t.progress})),r.a.createElement("br",null),r.a.createElement("small",null,"already have an account ? Login ",r.a.createElement(u.b,{to:"/login"},"here")))),r.a.createElement(je.a,{item:!0,sm:!0}))}}]),a}(n.Component),jt=Object(y.b)((function(e){return{user:e.user,UI:e.UI}}),{signupUser:function(e,t){return function(a){a({type:"LOADING_UI"}),v.a.post("/signup",e).then((function(e){U(e.data.token),a(P()),a({type:"CLEAR_ERRORS"}),t.push("/home")})).catch((function(e){a({type:"SET_ERRORS",payload:e.response.data})}))}}})(M()({form:{textAlign:"center"},logo:{margin:"20px auto 20px auto"},pageTitle:{margin:"10px auto 10px auto"},textField:{margin:"10px auto 10px auto"},button:{marginTop:20,position:"relative"},customError:{color:"red",fontSize:".8rem",marginTop:10},progress:{position:"absolute",color:"black"}})(St)),Ct=M()((function(e){return{paper:{padding:20},profile:{"& .image-wrapper":{textAlign:"center",position:"relative"},"& .profile-image":{width:200,height:200,objectFit:"cover",maxWidth:"100%",borderRadius:"50%"},"& .profile-details":{textAlign:"center","& span, svg":{verticalAlign:"middle"},"& a":{color:"#00bcd4"}},"& hr":{border:"none",margin:"0 0 10px 0"}}}}))((function(e){var t=e.classes,a=e.profile,o=a.handle,l=a.createdAt,c=a.imageUrl,i=a.bio,s=a.website,m=a.location;return r.a.createElement(nt.a,{className:t.paper},r.a.createElement("div",{className:t.profile},r.a.createElement("div",{className:"image-wrapper"},r.a.createElement("img",{src:c,alt:"profile",className:"profile-image"})),r.a.createElement("hr",null),r.a.createElement("div",{className:"profile-details"},r.a.createElement(ut.a,{component:u.b,to:"/users/".concat(o),color:"primary",variant:"h5"},o),r.a.createElement("hr",null),i&&r.a.createElement(ce.a,{variant:"body1"},i),r.a.createElement("hr",null),m&&r.a.createElement(n.Fragment,null,r.a.createElement(ot.a,{color:"primary"})," ",r.a.createElement("span",null,m),r.a.createElement("hr",null)),s&&r.a.createElement(n.Fragment,null,r.a.createElement(ct.a,{color:"primary"}),r.a.createElement("a",{href:s,target:"_blank",rel:"noopener noreferrer"}," ",s),r.a.createElement("hr",null)),r.a.createElement(st.a,{color:"primary"})," "," ",r.a.createElement("span",null,"Joined ",ae()(l).format("MMM YYYY")))))})),It=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={profile:null,postId:null},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.handle,a=this.props.match.params.postId;a&&this.setState({postIdParam:a}),this.props.getUserData(t),v.a.get("/user/".concat(t)).then((function(t){e.setState({profile:t.data.user})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.props.data,t=e.posts,a=e.loading,n=this.state.postIdParam,o=a?r.a.createElement(Te,null):null===t?r.a.createElement("p",null,"This user has no post yet"):n?t.map((function(e){return e.postId!==n?r.a.createElement(Qe,{key:e.postId,post:e}):r.a.createElement(Qe,{key:e.postId,post:e,openDialog:!0})})):t.map((function(e){return r.a.createElement(Qe,{key:e.postId,post:e})}));return r.a.createElement(je.a,{container:!0,spacing:10},r.a.createElement(je.a,{item:!0,sm:8,xs:12},o),r.a.createElement(je.a,{item:!0,sm:4,xs:12},null===this.state.profile?r.a.createElement(mt,null):r.a.createElement(Ct,{profile:this.state.profile})))}}]),a}(n.Component),Nt=Object(y.b)((function(e){return{data:e.data}}),{getUserData:function(e){return function(t){t({type:"LOADING_DATA"}),v.a.get("/user/".concat(e)).then((function(e){t({type:"SET_POSTS",payload:e.data.posts})})).catch((function(){t({type:"SET_POSTS",payload:null})}))}}})(It),kt=E()({palette:{primary:{main:"#00897b"},secondary:{main:"#ff80ab"}}});v.a.defaults.baseURL="https://asia-northeast1-vlogdat-v2.cloudfunctions.net/api";var wt=localStorage.FBIdToken;if(wt){var Tt=f()(wt);console.log(Tt),1e3*Tt.exp<Date.now()?(x.dispatch(A()),window.location.href="/login"):(x.dispatch({type:"SET_AUTHENTICATED"}),v.a.defaults.headers.common.AUTHORIZATION=wt,x.dispatch(P()))}var xt=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(d.a,{theme:kt},r.a.createElement(y.a,{store:x},r.a.createElement("div",{className:"App"},r.a.createElement(u.a,null,r.a.createElement(Se,null),r.a.createElement(p.d,null,r.a.createElement("div",{className:"container"},r.a.createElement(p.b,{exact:!0,path:"/",component:gt}),r.a.createElement(p.b,{exact:!0,path:"/home",component:gt}),r.a.createElement(D,{exact:!0,path:"/login",component:Ot}),r.a.createElement(D,{exact:!0,path:"/signup",component:jt}),r.a.createElement(p.b,{exact:!0,path:"/users/:handle",component:Nt}),r.a.createElement(p.b,{exact:!0,path:"/users/:handle/post/:postId",component:Nt})))))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(xt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},88:function(e,t,a){e.exports=a.p+"static/media/no-image.5a021ab9.png"}},[[158,1,2]]]);
//# sourceMappingURL=main.9259bb4b.chunk.js.map