(function(e,n,o){"use strict";const a=o.before("render",n.ReactNative.Text,function(l){let[t]=l;const r={...n.ReactNative.StyleSheet.flatten(t.style)??{},textTransform:"lowercase"};t.style=r,console.log(t.style)});function c(){a()}return e.onUnload=c,e})({},vendetta.metro.common,vendetta.patcher);