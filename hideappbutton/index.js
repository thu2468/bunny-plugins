(function(n,o,a,c){"use strict";const d=a.findByName("ChatInput"),i=c.after("render",d.prototype,function(){for(var t=arguments.length,r=new Array(t),e=0;e<t;e++)r[e]=arguments[e];try{r[1].props.children[2].props.children.props.children[1].props.isAppLauncherEnabled=!1}catch(s){o.logger.error("Failed to hide voice message button",s)}}),p=function(){return i()};return n.onUnload=p,n})({},vendetta,vendetta.metro,vendetta.patcher);