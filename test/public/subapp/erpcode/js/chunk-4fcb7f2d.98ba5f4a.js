(window["webpackJsonp_erpcode"]=window["webpackJsonp_erpcode"]||[]).push([["chunk-4fcb7f2d"],{"3f2e":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"seePage"},[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",[t._v("采购管理")]),a("el-breadcrumb-item",[t._v("厂家往来")]),a("el-breadcrumb-item",{staticClass:"attrbute"},[a("span",{on:{click:t.goBack}},[t._v("厂家付款单管理")])]),a("el-breadcrumb-item",[t._v("查看付款单")])],1),a("div",{staticClass:"search_container"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0}},[a("el-form-item",{attrs:{label:"财务组织:",size:"mini"}},[t._v(" "+t._s(t.params.company_name)+" ")]),a("el-form-item",{attrs:{label:"单据号:",size:"mini"}},[t._v(" "+t._s(t.params.payment_sn)+" ")]),20002!=t.params.factory_accounts_type_id?a("el-form-item",{attrs:{label:"供应商(厂家)",size:"mini"}},[t._v(" "+t._s(t.params.supplier_name)+" ")]):t._e(),a("el-form-item",{attrs:{label:"应付余额",size:"mini"}},[a("span",[t._v(t._s(t.params.balance||0))])]),a("el-form-item",{attrs:{label:"联系人",size:"mini"}},[a("span",[t._v(t._s(t.params.principal_name||""))])]),a("el-form-item",{attrs:{label:"联系电话",size:"mini"}},[a("span",[t._v(t._s(t.params.principal_mobile||""))])]),a("el-divider"),a("el-form-item",{attrs:{label:"业务日期:",size:"mini"}},[t._v(" "+t._s(t.params.business_time)+" ")]),a("el-form-item",{attrs:{label:"往来类型:",size:"mini"}},[t._v(" "+t._s(t.params.factory_accounts_type_name)+" ")]),a("el-form-item",{attrs:{label:"运费付款"==t.params.factory_accounts_type_name?"物流公司:":"供应商(厂家):",size:"mini"}},["运费付款"==t.params.factory_accounts_type_name?[t._v(" "+t._s(t.params.logistics_name)+" ")]:[t._v(" "+t._s(t.params.supplier_name)+" ")]],2),a("el-form-item",{attrs:{label:"部门:",size:"mini"}},[t._v(" "+t._s(t.params.department_name)+" ")]),a("el-form-item",{attrs:{label:"业务员",size:"mini"}},[t._v(" "+t._s(t.params.employee_name)+" ")]),a("el-form-item",{attrs:{label:"备注:",size:"mini"}},[t._v(" "+t._s(t.params.remark)+" ")]),a("el-form-item",{attrs:{label:"审核状态:",size:"mini"}},[t._v(" "+t._s(t.params.auditor_status_name)+" ")])],1)],1),t._m(0),a("div",{staticClass:"table_container"},[a("el-table",{staticStyle:{width:"100%"},attrs:{"highlight-current-row":!0,"tooltip-effect":"light",border:"",data:t.addTableData,"summary-method":t.getSummaries,"show-summary":"","max-height":"600"}},[a("el-table-column",{attrs:{"show-overflow-tooltip":!0,label:"序号"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.$index+1)+" ")]}}])}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"receivables_mode_name",label:"结算方式"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"bank_name",label:"开户银行"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"bank_number",label:"银行账号"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"common_price",label:"金额",align:"right"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"remark",label:"备注"}})],1)],1),t.is_disabled?a("div",{staticClass:"aboutList"},[t._m(1),a("div",{staticClass:"table_container"},[a("div",[a("el-table",{attrs:{"highlight-current-row":!0,"tooltip-effect":"light",border:"",data:t.instorageTable,"show-summary":"","summary-method":t.getSummariesAboutlist,"max-height":"600"}},[a("el-table-column",{attrs:{"show-overflow-tooltip":!0,label:"序号"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.$index+1)+" ")]}}],null,!1,192879353)}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"bill_sn",label:"单据号"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"type_name",label:"单据类型"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"supplier_name",label:"供应商(厂家)"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"instorage_num",label:"采购数量",align:"right"}}),20001==t.params.factory_accounts_type_id?a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"order_price",label:"采购金额",align:"right"}}):t._e(),a("el-table-column",{attrs:{visible:Boolean(t.is_company_service),"show-overflow-tooltip":!0,property:"rebate_price",label:"使用返利",align:"right"}}),a("el-table-column",{attrs:{visible:Boolean(t.is_company_service),"show-overflow-tooltip":!0,property:"payable_price",label:"实际应付金额",align:"right"}}),20002==t.params.factory_accounts_type_id?a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"order_price",label:"其它金额",align:"right"}}):t._e(),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"business_time",label:"业务日期",width:"200"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"add_time",label:"单据时间",width:"200"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"price",label:"已付款金额",align:"right"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"rest_price",label:"未付款金额",align:"right"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"bill_price",label:"本次付款金额",align:"right"}})],1)],1)]),a("p",{staticStyle:{"margin-top":"10px","font-size":"13px"}},[t._v(" 注：入库金额：不包含其他费用 ")])]):t._e(),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[1==t.params.auditor_status?[1==t.params.auditor_status?a("el-button",{attrs:{type:"primary"},on:{click:t.examineFun}},[t._v("审 核")]):t._e(),a("el-button",{on:{click:t.abolishFun}},[t._v("作 废")])]:t._e(),2==t.params.auditor_status?[1==t.authority.b_nopass?a("el-button",{attrs:{plain:""},on:{click:t.AUDIT_GET}},[t._v("弃审")]):t._e()]:t._e(),2==t.params.auditor_status||3==t.params.auditor_status?[a("el-button",{on:{click:t.goBack}},[t._v("返 回")])]:[a("el-button",{on:{click:t.goBack}},[t._v("取 消")])]],2)],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"paymanageTitle"},[a("i"),t._v(" "),a("span",[t._v("结算明细")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"paymanageTitle fcsb"},[a("span",[t._v("核销明细")])])}],i=(a("d3b7"),a("159b"),a("d81d"),a("a9e3"),a("caad"),a("b680"),{name:"purchasePaymanagesearch",data:function(){return{authority:{},addTableData:[],params:{},is_disabled:!1,instorageTable:[]}},computed:{},methods:{goBack:function(){this.$router.push({path:"/purchase/paymanage"})},getSupplier:function(t){var e=this;this.$axMethod.getSupplierInfo({company_id:this.params.company_id,supplier_id:t}).then((function(t){var a=t.data;200==a.code&&["associated_supplier_id","balance","principal_mobile","principal_name"].forEach((function(t){e.$set(e.params,t,a.data[t])}))}))},examineFun:function(t){var e=this,a=this.$route.query.payment_id;this.$axMethod.purchaseAuditorPass({payment_id:a}).then((function(t){var a=t.data;200==a.code&&(e.$message({message:"审核成功",type:"success"}),e.selmethons())}))},abolishFun:function(){var t=this,e=this.$route.query.payment_id;this.$axMethod.purchaseAuditorInvalid({payment_id:e}).then((function(e){var a=e.data;200==a.code&&(t.$message({message:"作废成功",type:"success"}),t.selmethons(),t.goBack())}))},AUDIT_GET:function(){var t=this;this.$axMethod.auditorNoPassF({payment_id:this.$route.query.payment_id}).then((function(e){200==e.data.code&&(t.$message({message:e.data.data,type:"success"}),t.goBack())}))},getSummariesAboutlist:function(t){var e=t.columns,a=t.data,r=[];return e.forEach((function(t,e){if(0!==e){var o=a.map((function(e){return Number(e[t.property])}));o.every((function(t){return isNaN(t)}))?r[e]="":(r[e]=o.reduce((function(t,e){var a=Number(e);return isNaN(a)?t:t+e}),0),4==e?r[e]=parseFloat(r[e]):[8,9,10].includes(e)?r[e]=parseFloat(r[e]).toFixed(2):r[e]="")}else r[e]="总计"})),r},selmethons:function(){var t=this,e={payment_id:this.$route.query.payment_id};this.$axMethod.purchaseGetPaymentInfo(e).then((function(e){var a=e.data;if(200==a.code){var r=a.data;t.$set(t,"params",r.paymentInfo),t.getSupplier(r.paymentInfo.supplier_id),t.$set(t,"addTableData",r.paymentCommonList),t.$set(t,"instorageTable",r.list),r.list.length&&t.$set(t,"is_disabled",!0)}}))},getSummaries:function(t){var e=t.columns,a=t.data,r=[];return e.forEach((function(t,e){if(0!==e){var o=a.map((function(e){return Number(e[t.property])}));o.every((function(t){return isNaN(t)}))?r[e]="":(r[e]=o.reduce((function(t,e){var a=Number(e);return isNaN(a)?t:t+e}),0),r[e]=4==e?parseFloat(r[e]).toFixed(2):"")}else r[e]="总计"})),r}},created:function(){this.authority=JSON.parse(localStorage.getItem("authority")),this.selmethons()}}),s=i,l=(a("b815"),a("2877")),n=Object(l["a"])(s,r,o,!1,null,"314701b7",null);e["default"]=n.exports},"8d9d":function(t,e,a){},b680:function(t,e,a){"use strict";var r=a("23e7"),o=a("da84"),i=a("e330"),s=a("5926"),l=a("408a"),n=a("1148"),m=a("d039"),c=o.RangeError,p=o.String,u=Math.floor,_=i(n),d=i("".slice),b=i(1..toFixed),f=function(t,e,a){return 0===e?a:e%2===1?f(t,e-1,a*t):f(t*t,e/2,a)},h=function(t){var e=0,a=t;while(a>=4096)e+=12,a/=4096;while(a>=2)e+=1,a/=2;return e},v=function(t,e,a){var r=-1,o=a;while(++r<6)o+=e*t[r],t[r]=o%1e7,o=u(o/1e7)},y=function(t,e){var a=6,r=0;while(--a>=0)r+=t[a],t[a]=u(r/e),r=r%e*1e7},g=function(t){var e=6,a="";while(--e>=0)if(""!==a||0===e||0!==t[e]){var r=p(t[e]);a=""===a?r:a+_("0",7-r.length)+r}return a},w=m((function(){return"0.000"!==b(8e-5,3)||"1"!==b(.9,0)||"1.25"!==b(1.255,2)||"1000000000000000128"!==b(0xde0b6b3a7640080,0)}))||!m((function(){b({})}));r({target:"Number",proto:!0,forced:w},{toFixed:function(t){var e,a,r,o,i=l(this),n=s(t),m=[0,0,0,0,0,0],u="",b="0";if(n<0||n>20)throw c("Incorrect fraction digits");if(i!=i)return"NaN";if(i<=-1e21||i>=1e21)return p(i);if(i<0&&(u="-",i=-i),i>1e-21)if(e=h(i*f(2,69,1))-69,a=e<0?i*f(2,-e,1):i/f(2,e,1),a*=4503599627370496,e=52-e,e>0){v(m,0,a),r=n;while(r>=7)v(m,1e7,0),r-=7;v(m,f(10,r,1),0),r=e-1;while(r>=23)y(m,1<<23),r-=23;y(m,1<<r),v(m,1,1),y(m,2),b=g(m)}else v(m,0,a),v(m,1<<-e,0),b=g(m)+_("0",n);return n>0?(o=b.length,b=u+(o<=n?"0."+_("0",n-o)+b:d(b,0,o-n)+"."+d(b,o-n))):b=u+b,b}})},b815:function(t,e,a){"use strict";a("8d9d")}}]);
//# sourceMappingURL=chunk-4fcb7f2d.98ba5f4a.js.map