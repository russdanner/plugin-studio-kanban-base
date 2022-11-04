const e=craftercms.libs.React,{useState:t,useEffect:r}=craftercms.libs.React,o=craftercms.utils.constants.components.get("@mui/icons-material/EditRounded")&&Object.prototype.hasOwnProperty.call(craftercms.utils.constants.components.get("@mui/icons-material/EditRounded"),"default")?craftercms.utils.constants.components.get("@mui/icons-material/EditRounded").default:craftercms.utils.constants.components.get("@mui/icons-material/EditRounded"),{Box:n,Fab:a,Paper:l,Typography:s,cardClasses:c,Card:i,CardHeader:u,IconButton:d}=craftercms.libs.MaterialUI,{useSelector:m,useDispatch:p}=craftercms.libs.ReactRedux,{get:f}=craftercms.utils.ajax,{ApiResponseErrorState:b}=craftercms.components,g=craftercms.components.ToolsPanelListItemButton&&Object.prototype.hasOwnProperty.call(craftercms.components.ToolsPanelListItemButton,"default")?craftercms.components.ToolsPanelListItemButton.default:craftercms.components.ToolsPanelListItemButton,{createAction:v}=craftercms.libs.ReduxToolkit;var E=function(){return E=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},E.apply(this,arguments)};var h=function(p){var g=p.boardId,v=m((e=>e.sites.active)),h=t(),x=h[0],y=h[1],w=t({board:null,lists:null}),I=w[0],O=w[1],T=function(){var e="/studio/api/2/plugin/script/plugins/org/rd/plugin/trellowf/trellowf/board/lists.json?siteId=".concat(v);g&&(e+="&boardId="+g),f(e).subscribe({next:function(e){O(E(E({},I),{board:E({},e.response.result.board),lists:E({},e.response.result.lists)}))},error:function(e){var t,r;console.error(e),y(null!==(r=null===(t=e.response)||void 0===t?void 0:t.response)&&void 0!==r?r:{code:"?",message:"Unknown Error. Check browser console."})}})};return r((function(){T();var e=setInterval((function(){T()}),1e4);return function(){clearInterval(e)}}),[]),e.createElement(n,{sx:{backgroundImage:I.board?"url(".concat(I.board.prefs.backgroundImage,")"):null,flexDirection:"row",position:"relative",height:"100%"}},x&&e.createElement(b,{error:x}),I.board&&e.createElement(a,{href:I.board.url,target:"new","aria-label":"Edit in Trello",sx:{position:"absolute",bottom:20,right:20},color:"info"},e.createElement(o,null)),I.lists&&Object.values(I.lists).map((function(t){var r;return e.createElement(l,{elevation:1,style:{},sx:function(e){return{width:"200px",display:"inline-table",margin:"10px",p:1,bgcolor:"dark"===e.palette.mode?"grey":"grey.A200"}}},e.createElement(s,{variant:"h6",component:"h2",sx:{mb:1}},t.name),e.createElement(n,{sx:(r={},r[".".concat(c.root,":not(:last-child)")]={mb:1},r)},t.cards&&Object.values(t.cards).map((function(t){return e.createElement(i,{elevation:3,sx:{borderTop:t.cover.color?"10px solid ".concat(t.cover.color):""}},e.createElement(u,{action:e.createElement(d,{href:t.url,target:"card","aria-label":"Edit in Trello"},e.createElement(o,null)),title:t.name,titleTypographyProps:{variant:"body1"}}))}))))})))};const x=v("SHOW_WIDGET_DIALOG");function y(t){var r=t.title?t.title:"Trello Board",o=t.icon.id?t.icon.id:"@mui/icons-material/ContentPasteOutlined",n=p();return e.createElement(g,{icon:{id:o},title:r,onClick:function(){return n(x({title:r,extraProps:t,widget:{id:"org.rd.plugin.trellowf.board"}}))}})}var w={locales:void 0,scripts:void 0,stylesheets:void 0,id:"org.rd.plugin.trellowf",widgets:{"org.rd.plugin.trellowf.openBoardButton":y,"org.rd.plugin.trellowf.board":h}};export{h as Board,y as OpenBoardDialogPanelButton,w as default};
