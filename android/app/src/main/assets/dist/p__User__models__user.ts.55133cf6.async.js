(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{FYNc:function(e,t,a){"use strict";a.r(t);var n=a("p0pE"),r=a.n(n),s=a("d6i3"),u=a.n(s),c=a("1l/V"),o=a.n(c),i=a("0lfv");function p(e){return l.apply(this,arguments)}function l(){return l=o()(u.a.mark(function e(t){var a,n,s;return u.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.userName,n="/view/oa/login/base/appLogin",console.log("\u767b\u5f55\u7684\u8bf7\u6c42\u53c2\u6570\u4e3a",t),s=Object(i["c"])({url:n,params:r()({},t,{"data-userid":a,"data-login":!0})}),e.abrupt("return",s);case 5:case"end":return e.stop()}},e)})),l.apply(this,arguments)}function d(e){return f.apply(this,arguments)}function f(){return f=o()(u.a.mark(function e(t){var a;return u.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=Object(i["b"])({url:"http://localhost:8000/view",params:{"data-application":"d05c00080f98444292d6700845b190af","data-action":"getDevice","data-device-id":"d1"}}),e.abrupt("return",a);case 2:case"end":return e.stop()}},e)})),f.apply(this,arguments)}var v=[{status:-1,msg:"\u5f02\u5e38"},{status:0,msg:"\u5931\u8d25"},{status:1,msg:"\u6210\u529f"},{status:10101,msg:"\u7528\u6237\u540d\u4e0d\u80fd\u4e3a\u7a7a"},{status:10102,msg:"\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a"},{status:10103,msg:"\u8d26\u53f7\u4e0d\u5b58\u5728"},{status:10104,msg:"\u5bc6\u7801\u9519\u8bef"},{status:10105,msg:"\u8d26\u53f7\u5931\u6548"}],g={namespace:"user",state:{loginInfo:{},userInfo:{},deviceInfo:{}},effects:{login(e,t){return u.a.mark(function a(){var n,r,s,c,o,l;return u.a.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n=e.payload,r=t.call,s=t.put,c=t.select,console.log("effects login, payload = ",n),a.next=5,r(p,n);case 5:return o=a.sent,a.next=8,s(Object(i["a"])("updateLogin")(o));case 8:return a.next=10,c(e=>{var t=e.user;return t.loginInfo});case 10:return l=a.sent,a.abrupt("return",l);case 12:case"end":return a.stop()}},a)})()},getDevice(e,t){return u.a.mark(function a(){var n,r,s,c,o;return u.a.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return e.payload,n=t.call,r=t.put,s=t.select,a.next=4,n(d);case 4:return c=a.sent,console.log("= = ",c),a.next=8,r(Object(i["a"])("saveDeviceInfo")(c));case 8:return a.next=10,s(e=>{var t=e.user;return t.deviceInfo});case 10:return o=a.sent,a.abrupt("return",o);case 12:case"end":return a.stop()}},a)})()}},reducers:{updateLogin(e,t){var a=t.payload,n=a.data,s=a.status,u=void 0===s?-2:s;if(1===u){var c=n.token;return localStorage.setItem("app-token",c),r()({},e,{loginInfo:a})}var o=v.find(e=>e.status===u),i={};return i=o?r()({},a,o):r()({},a,{status:-2,msg:"\u672a\u77e5\u9519\u8bef"}),r()({},e,{loginInfo:i})},saveDeviceInfo(e,t){return r()({},e,{deviceInfo:t.payload})}}};t["default"]=g}}]);