(function(t,n,o){"use strict";const a=o.before("render",n.ReactNative.Text,function(c){let[e]=c;e.style={textTransform:"lowercase"},n.ReactNative.StyleSheet.flatten(e.style),console.log(e.style)});function l(){a()}return t.onUnload=l,t})({},vendetta.metro.common,vendetta.patcher);