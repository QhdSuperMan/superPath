(window["webpackJsonp_erpcode"]=window["webpackJsonp_erpcode"]||[]).push([["chunk-66dbb5b1"],{"0cb2":function(t,e,a){var o=a("e330"),i=a("7b0b"),r=Math.floor,s=o("".charAt),n=o("".replace),l=o("".slice),u=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,c=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,a,o,_,d){var m=a+t.length,b=o.length,h=c;return void 0!==_&&(_=i(_),h=u),n(d,h,(function(i,n){var u;switch(s(n,0)){case"$":return"$";case"&":return t;case"`":return l(e,0,a);case"'":return l(e,m);case"<":u=_[l(n,1,-1)];break;default:var c=+n;if(0===c)return i;if(c>b){var d=r(c/10);return 0===d?i:d<=b?void 0===o[d-1]?s(n,1):o[d-1]+s(n,1):i}u=o[c-1]}return void 0===u?"":u}))}},5319:function(t,e,a){"use strict";var o=a("2ba4"),i=a("c65b"),r=a("e330"),s=a("d784"),n=a("d039"),l=a("825a"),u=a("1626"),c=a("5926"),_=a("50c4"),d=a("577e"),m=a("1d80"),b=a("8aa5"),h=a("dc4a"),p=a("0cb2"),f=a("14c3"),v=a("b622"),g=v("replace"),w=Math.max,y=Math.min,k=r([].concat),D=r([].push),S=r("".indexOf),T=r("".slice),$=function(t){return void 0===t?t:String(t)},x=function(){return"$0"==="a".replace(/./,"$0")}(),z=function(){return!!/./[g]&&""===/./[g]("a","$0")}(),C=!n((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}));s("replace",(function(t,e,a){var r=z?"$":"$0";return[function(t,a){var o=m(this),r=void 0==t?void 0:h(t,g);return r?i(r,t,o,a):i(e,d(o),t,a)},function(t,i){var s=l(this),n=d(t);if("string"==typeof i&&-1===S(i,r)&&-1===S(i,"$<")){var m=a(e,s,n,i);if(m.done)return m.value}var h=u(i);h||(i=d(i));var v=s.global;if(v){var g=s.unicode;s.lastIndex=0}var x=[];while(1){var z=f(s,n);if(null===z)break;if(D(x,z),!v)break;var C=d(z[0]);""===C&&(s.lastIndex=b(n,_(s.lastIndex),g))}for(var O="",P=0,I=0;I<x.length;I++){z=x[I];for(var N=d(z[0]),A=w(y(c(z.index),n.length),0),F=[],G=1;G<z.length;G++)D(F,$(z[G]));var j=z.groups;if(h){var M=k([N],F,A,n);void 0!==j&&D(M,j);var q=d(o(i,void 0,M))}else q=p(N,n,A,F,j,i);A>=P&&(O+=T(n,P,A)+q,P=A+N.length)}return O+T(n,P)}]}),!C||!x||z)},"53ac":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"seePage"},[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",[t._v("库存管理")]),a("el-breadcrumb-item",{staticClass:"attrbute"},[a("span",{on:{click:t.goBack}},[t._v("其他出库")])]),a("el-breadcrumb-item",[t._v("查看其他出库")])],1),a("div",{staticClass:"search_container"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.TableData}},[a("el-form-item",{attrs:{label:"库存组织：",size:"mini",prop:"supplier_name",rules:[{required:!0}]}},[t._v(" "+t._s(t.TableData.company_name)+" ")]),a("el-form-item",{attrs:{label:"单据号：",size:"mini",prop:"supplier_name"}},[t._v(" "+t._s(t.TableData.outstock_sn)+" ")]),a("el-form-item",{attrs:{label:"关联单据号：",size:"mini"}},[a("span",[t._v(t._s(t.TableData.order_sn))])]),a("el-form-item",{attrs:{label:"业务日期：",size:"mini",rules:[{required:!0}]}},[t._v(" "+t._s(t.TableData.business_time)+" ")]),a("el-form-item",{attrs:{label:"出库类型：",size:"mini",rules:[{required:!0}]}},[t._v(" "+t._s(t.TableData.outstock_type_name)+" ")]),a("el-form-item",{attrs:{label:"客户名称：",size:"mini"}},[t._v(" "+t._s(t.TableData.customer_name)+" ")]),a("el-form-item",{attrs:{label:"部门：",size:"mini"}},[t._v(" "+t._s(t.TableData.department_name)+" ")]),a("el-form-item",{attrs:{label:"业务员：",size:"mini"}},[t._v(" "+t._s(t.TableData.business_name)+" ")]),a("el-form-item",{attrs:{label:"收货人：",size:"mini"}},[t._v(" "+t._s(t.TableData.consignee_name)+" ")]),a("el-form-item",{attrs:{label:"收货人电话：",size:"mini"}},[t._v(" "+t._s(t.TableData.consignee_mobile)+" ")]),a("el-form-item",{attrs:{label:"所属区域：",size:"mini"}},[a("span",[t._v(t._s(t.TableData.province_name)+t._s(t.TableData.city_name)+t._s(t.TableData.area_name))])]),a("el-form-item",{attrs:{label:"详细地址：",size:"mini"}},[t._v(" "+t._s(t.TableData.address)+" ")]),a("el-form-item",{attrs:{label:"仓库名称：",size:"mini"}},[t._v(" "+t._s(t.TableData.warehouse_name)+" ")]),a("el-form-item",{attrs:{label:"回款方式：",size:"mini"}},[t._v(" "+t._s(function(){return 1==t.TableData.payment_method?"客户自结":2==t.TableData.payment_method?"物流代收":""}())+" ")]),a("el-form-item",{attrs:{label:"物流公司：",size:"mini"}},[t._v(" "+t._s(t.TableData.settlement_customer_name)+" ")]),a("el-form-item",{attrs:{label:"送货需求：",size:"mini"}},[t._v(" "+t._s(t.TableData.delivery_demand_name)+" ")]),a("el-form-item",{attrs:{label:"交货方式：",size:"mini"}},[t._v(" "+t._s(t.TableData.hand_over_name)+" ")]),a("el-form-item",{attrs:{label:"打印次数",size:"mini"}},[a("span",[t._v(t._s(t.TableData.print_times))])]),a("el-form-item",{attrs:{label:"审核状态：",size:"mini"}},[t._v(" "+t._s(t.TableData.auditor_status_name)+" ")]),a("el-form-item",{attrs:{label:"订单号",size:"mini"}},[t._v(" "+t._s(t.TableData.sales_order_sn)+" ")])],1)],1),a("div",{staticClass:"table_container"},[a("el-table",{staticStyle:{width:"100%"},attrs:{"highlight-current-row":!0,"tooltip-effect":"light",border:"",data:t.TableData.goods_info,"summary-method":t.getSummaries,"show-summary":"","max-height":"600"}},[a("el-table-column",{attrs:{"show-overflow-tooltip":!0,label:"序号",type:"index",width:"50","text-align":"center"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"goods_id",label:"商品编号",width:"80"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"goods_name",label:"商品名称",width:"400"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("pre",[t._v(t._s(e.row.goods_name))])]}}])}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"batch",label:"年周/批次",width:"88"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"unit_name",label:"单位",width:"88"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"warehouse_name",label:"仓库名称",width:"132"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"allocation_name",label:"货位名称",width:"130"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.allocation_id_str,(function(e,o){return a("el-tag",{key:o},t._l(t.allocationList.options,(function(e,i){return a("span",{key:i},[o==e.allocation_id?a("span",[t._v(t._s(e.allocation_name))]):t._e()])})),0)}))}}])}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"real_num",label:"数量",align:"right",width:"70"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"sale_price",label:"单价",align:"right",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t._f("priceFormat")(e.row.sale_price))+" ")]}}])}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"total_price",label:"小计金额",align:"right",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t._f("priceFormat")(e.row.total_price))+" ")]}}])}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"remark",label:"备注"}})],1)],1),a("div",{staticClass:"wz_remark refundauditFoot",staticStyle:{"text-align":"left"}},[a("span",{staticStyle:{"margin-right":"0"}},[t._v("备注：")]),t._v(" "+t._s(t.TableData.abstract)+" ")]),a("div",{staticClass:"refundauditFoot",staticStyle:{"text-align":"left"}},[a("span",[t._v("创建人："+t._s(t.TableData.add_user_name))]),a("span",[t._v("创建时间："+t._s(t.TableData.add_time))]),a("span",[t._v("审核人："+t._s(t.TableData.auditor_name))]),a("span",[t._v("审核时间："+t._s(t.TableData.auditor_time))]),a("span",[t._v("修改人："+t._s(t.TableData.update_user_name))]),a("span",[t._v("修改时间："+t._s(t.TableData.update_time))])]),a("div",{staticClass:"dialog-footer",staticStyle:{"text-align":"center","margin-top":"20px"}},[[a("el-button",{attrs:{type:"primary"},on:{click:t.printSheet}},[t._v("打印")])],2==t.TableData.auditor_status?[1==t.authority.b_nopass?a("el-button",{attrs:{plain:"",size:"mini"},on:{click:function(e){return t.audit("otherStockNopassInvalid")}}},[t._v("弃审")]):t._e()]:t._e(),1==t.TableData.auditor_status?[1==t.authority.b_pass?a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.audit("otherStockAuidtorPass")}}},[t._v("审核")]):t._e(),1==t.authority.b_invalid?a("el-button",{on:{click:function(e){return t.audit("otherStockAuditorInvalid")}}},[t._v("作废")]):t._e()]:t._e(),3==t.TableData.auditor_status||2==t.TableData.auditor_status||1!=t.authority.b_invalid&&1!=t.authority.b_pass?[a("el-button",{on:{click:t.goBack}},[t._v("返回")])]:a("el-button",{on:{click:t.goBack}},[t._v("取消")])],2),t.printingStatusGet?a("div",[a("lodopDelivery",{ref:"lodopDelivery",attrs:{title:t.title},on:{Search:t.onSearch}})],1):t._e()],1)},i=[],r=a("53ca"),s=a("5530"),n=(a("d3b7"),a("159b"),a("d81d"),a("a9e3"),a("ac1f"),a("5319"),a("25f0"),a("b680"),a("2f62")),l=a("78d2"),u={name:"instorageOthenoutstorageSalesoutstorageSee",data:function(){return{authority:{},TableData:{goods_info:[]},title:"",defaultArea:null,defaultAreaId:[],allocationList:{options:[]},checkPage:""}},components:{lodopDelivery:l["a"]},computed:Object(s["a"])({},Object(n["c"])(["salesoutstorageSeeGet","salesoutstorageSeeSearch_showGet","printingStatusGet"])),methods:Object(s["a"])(Object(s["a"])({},Object(n["b"])(["othenoutstorageIndexACT","outstorageauditDefault_show","printingStatus"])),{},{printSheet:function(){var t=this;this.printingStatus(!0),this.$set(this,"title","otherOutboundSinglesToPrint"),this.$nextTick((function(){t.$refs.lodopDelivery.printPdf({outstock_id:t.TableData.outstock_id})}))},goBack:function(){"outstorageauditPage"==this.checkPage?(this.outstorageauditDefault_show({commont:"outstorageauditDefault",goPage:this.salesoutstorageSeeSearch_showGet.goPage,params:this.salesoutstorageSeeSearch_showGet.params,pageSize:this.salesoutstorageSeeSearch_showGet.pageSize}),this.$router.push({path:"/inventory/othenoutstorage"})):(this.othenoutstorageIndexACT({goPage:this.salesoutstorageSeeGet.goPage,params:this.salesoutstorageSeeGet.params,pageSize:this.salesoutstorageSeeGet.pageSize}),this.$router.push({path:"/inventory/othenoutstorage"}))},audit:function(t){var e=this;"otherStockAuidtorPass"==t?this.$baseData.checkCarDoctor({bill_type:10003===this.TableData.outstock_type_id?10:10004===this.TableData.outstock_type_id?11:12,bill_id:this.TableData.outstock_id,operation_type:4}).then((function(){e.$axMethod.safetyStockCheck({bill_logogram:"qtck",order_type:2,bill_id:e.TableData.outstock_id}).then((function(){e.$axMethod[t]({outstock_id:e.TableData.outstock_id}).then((function(t){var a=t.data;if(200==a.code){var o=a.data;Object(r["a"])(o)!=String&&a.msg&&(o=a.msg),e.$message({message:o,type:"success"}),e.goBack()}}))}))})):this.$baseData.checkCarDoctor({bill_type:10003===this.TableData.outstock_type_id?10:10004===this.TableData.outstock_type_id?11:12,bill_id:this.TableData.outstock_id,operation_type:"otherStockAuditorInvalid"==t?6:5}).then((function(){e.$axMethod[t]({outstock_id:e.TableData.outstock_id}).then((function(t){var a=t.data;if(200==a.code){var o=a.data;Object(r["a"])(o)!=String&&a.msg&&(o=a.msg),e.$message({message:o,type:"success"}),e.goBack()}}))}))},initData:function(){var t=this;this.$axMethod.otherStockCheckOutstock({outstock_id:this.$route.query.outstock_id,outstock_sn:this.$route.query.outstock_sn}).then((function(e){var a=e.data;"200"==a.code&&t.$set(t,"TableData",a.data)}))},getSummaries:function(t){var e=t.columns,a=t.data,o=[];return e.forEach((function(t,e){if(1!==e){var i=a.map((function(e){return Number(e[t.property])}));i.every((function(t){return isNaN(t)}))?o[e]="":(o[e]=i.reduce((function(t,e){var a=Number(e);return isNaN(a)?t:t+e}),0),o[e]=7==e?parseFloat(o[e]).toFixed(0).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"):9==e?parseFloat(o[e]).toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"):"")}else o[e]="总计"})),o}}),created:function(){this.authority=JSON.parse(localStorage.getItem("authority")),this.$common.options("getAllocationListOption",this.allocationList),this.initData()}},c=u,_=(a("b61d"),a("2877")),d=Object(_["a"])(c,o,i,!1,null,"232c4960",null);e["default"]=d.exports},b61d:function(t,e,a){"use strict";a("f76d")},b680:function(t,e,a){"use strict";var o=a("23e7"),i=a("da84"),r=a("e330"),s=a("5926"),n=a("408a"),l=a("1148"),u=a("d039"),c=i.RangeError,_=i.String,d=Math.floor,m=r(l),b=r("".slice),h=r(1..toFixed),p=function(t,e,a){return 0===e?a:e%2===1?p(t,e-1,a*t):p(t*t,e/2,a)},f=function(t){var e=0,a=t;while(a>=4096)e+=12,a/=4096;while(a>=2)e+=1,a/=2;return e},v=function(t,e,a){var o=-1,i=a;while(++o<6)i+=e*t[o],t[o]=i%1e7,i=d(i/1e7)},g=function(t,e){var a=6,o=0;while(--a>=0)o+=t[a],t[a]=d(o/e),o=o%e*1e7},w=function(t){var e=6,a="";while(--e>=0)if(""!==a||0===e||0!==t[e]){var o=_(t[e]);a=""===a?o:a+m("0",7-o.length)+o}return a},y=u((function(){return"0.000"!==h(8e-5,3)||"1"!==h(.9,0)||"1.25"!==h(1.255,2)||"1000000000000000128"!==h(0xde0b6b3a7640080,0)}))||!u((function(){h({})}));o({target:"Number",proto:!0,forced:y},{toFixed:function(t){var e,a,o,i,r=n(this),l=s(t),u=[0,0,0,0,0,0],d="",h="0";if(l<0||l>20)throw c("Incorrect fraction digits");if(r!=r)return"NaN";if(r<=-1e21||r>=1e21)return _(r);if(r<0&&(d="-",r=-r),r>1e-21)if(e=f(r*p(2,69,1))-69,a=e<0?r*p(2,-e,1):r/p(2,e,1),a*=4503599627370496,e=52-e,e>0){v(u,0,a),o=l;while(o>=7)v(u,1e7,0),o-=7;v(u,p(10,o,1),0),o=e-1;while(o>=23)g(u,1<<23),o-=23;g(u,1<<o),v(u,1,1),g(u,2),h=w(u)}else v(u,0,a),v(u,1<<-e,0),h=w(u)+m("0",l);return l>0?(i=h.length,h=d+(i<=l?"0."+m("0",l-i)+h:b(h,0,i-l)+"."+b(h,i-l))):h=d+h,h}})},f76d:function(t,e,a){}}]);
//# sourceMappingURL=chunk-66dbb5b1.7406d9d8.js.map