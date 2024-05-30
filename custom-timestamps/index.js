(function(o,a,l,u,i,h,c){"use strict";function m(e){switch(arguments.length>1&&arguments[1]!==void 0?arguments[1]:a.storage.selected){case"calendar":return e.calendar();case"relative":return e.fromNow();case"iso":return e.toISOString();case"custom":return e.format(a.storage.customFormat)}}const d=l.findByName("RowManager"),y=function(){return i.before("generate",d.prototype,function(e){let[t]=e;t.rowType===1?(a.storage.separateMessages&&(t.isFirst=!0),t.message.__customTimestamp=m(t.message.timestamp)):t.rowType==="day"&&(t.text=m(u.moment(t.text,"LL")))})},R=function(){return i.after("generate",d.prototype,function(e,t){let[n]=e,{message:r}=t;n.rowType===1&&n.message.__customTimestamp&&r.state==="SENT"&&r.timestamp&&(r.timestamp=n.message.__customTimestamp)})};function v(){const e=new Array;return e.push(y()),e.push(R()),function(){return e.forEach(function(t){return t()})}}const{ClearButtonVisibility:w,default:E}=l.findByProps("ClearButtonVisibility");function p(e){let{value:t,onChangeText:n,placeholder:r,disabled:s}=e;return React.createElement(E,{value:t,onChangeText:n,placeholder:r,clearButtonVisibility:w.WITH_CONTENT,showBorder:!1,showTopContainer:!1,disabled:s,style:{paddingHorizontal:15,paddingVertical:13}})}const{FormRow:T}=c.Forms,M=l.findByName("RowCheckmark");function C(e){let{label:t,subLabel:n,selected:r,onPress:s}=e;return React.createElement(T,{label:t,subLabel:n,trailing:React.createElement(M,{selected:r}),onPress:s})}const{ScrollView:F}=c.General,{FormSection:f,FormDivider:S,FormSwitchRow:_}=c.Forms;let g=[{label:"Calendar",key:"calendar"},{label:"Relative",key:"relative"},{label:"ISO 8601",key:"iso"},{label:"Custom",key:"custom",renderExtra:function(e){return React.createElement(p,{value:a.storage.customFormat,onChangeText:function(t){return a.storage.customFormat=t},placeholder:"dddd, MMMM Do YYYY, h:mm:ss a",disabled:!e})}}];function Y(){return h.useProxy(a.storage),React.createElement(F,null,React.createElement(f,{title:"Mode"},g.map(function(e,t){let{label:n,key:r,renderExtra:s}=e;return React.createElement(React.Fragment,null,React.createElement(C,{label:n,subLabel:m(u.moment(),r),selected:a.storage.selected===r,onPress:function(){return a.storage.selected=r}}),s&&s(a.storage.selected===r),t!==g.length-1&&React.createElement(S,null))})),React.createElement(f,null,React.createElement(_,{label:"Separate messages",subLabel:"Always shows username, avatar and timestamp for each message",value:a.storage.separateMessages,onValueChange:function(e){a.storage.separateMessages=e}})))}let b=[];var k={onLoad:function(){a.storage.selected??="calendar",a.storage.customFormat??="dddd, MMMM Do YYYY, h:mm:ss a",b.push(v())},onUnload:function(){b.forEach(function(e){return e()})},settings:Y};return o.default=k,Object.defineProperty(o,"__esModule",{value:!0}),o})({},vendetta.plugin,vendetta.metro,vendetta.metro.common,vendetta.patcher,vendetta.storage,vendetta.ui.components);