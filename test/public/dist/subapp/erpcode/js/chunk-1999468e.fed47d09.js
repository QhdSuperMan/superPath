(window["webpackJsonp_erpcode"]=window["webpackJsonp_erpcode"]||[]).push([["chunk-1999468e"],{"016f":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"paycenter"},[r("iframe",{ref:"paycenter",attrs:{id:"paycenter",src:e.origin+"/pc/pay",frameborder:"0",width:"100%",height:"100%"}})])},a=[],i=r("1da1"),s=r("5530"),o=(r("96cf"),location.protocol+"//"+location.host+"/#/"),c={name:"paycenter",data:function(){return{origin:"",queryParams:{cashier_token:"",pay_trade_no:"",token:"",device_type:"pc",app_type:"erp",reset_pwd_url:o+"system/service_station_myself_account",order_detail_title:"采购订单",order_detail_url:o+"purchase/order"}}},created:function(){this.queryParams=Object(s["a"])(Object(s["a"])({},this.queryParams),this.$route.params)},watch:{"$route.params.pay_trade_no":{handler:function(e){e&&this.init()}}},mounted:function(){this.getOrigin(),this.init(!0)},activated:function(){this.init()},deactivated:function(){window.removeEventListener("message",this.receiveMsg)},methods:{init:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$nextTick();case 2:e.$route.params.pay_trade_no&&(e.queryParams=Object(s["a"])(Object(s["a"])({},e.queryParams),e.$route.params)),r=e.$refs.paycenter.contentWindow,e.$refs.paycenter.onload=function(){r.postMessage(e.queryParams,e.origin)},window.addEventListener("message",e.receiveMsg,!1);case 6:case"end":return t.stop()}}),t)})))()},getOrigin:function(){location.protocol+"//"+location.host=="https://test-www.taijierp.com"?this.origin="https://test-paywap.jybd.cn":this.origin="https://paywap.jybd.cn"},closeTab:function(e){this.$EventBus.$emit("closeTab",this.$router,e)},receiveMsg:function(e){var t=this;e.origin===this.origin&&e.data&&"succ"==e.data.pay_status&&this.closeTab((function(){t.$router.push({path:"/purchase/order"})}))}},beforeDestroy:function(){window.removeEventListener("message",this.receiveMsg)}},u=c,p=(r("d21b"),r("2877")),d=Object(p["a"])(u,n,a,!1,null,null,null);t["default"]=d.exports},"4dd4":function(e,t,r){},d21b:function(e,t,r){"use strict";r("4dd4")}}]);
//# sourceMappingURL=chunk-1999468e.fed47d09.js.map