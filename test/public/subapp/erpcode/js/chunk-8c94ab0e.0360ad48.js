(window["webpackJsonp_erpcode"]=window["webpackJsonp_erpcode"]||[]).push([["chunk-8c94ab0e"],{"5b20":function(t,e,a){"use strict";a("9d58")},"6b29":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"seePage"},[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",[t._v("库存管理")]),a("el-breadcrumb-item",{staticClass:"attrbute"},[a("span",{on:{click:t.goBack}},[t._v("旧胎退回")])]),a("el-breadcrumb-item",[t._v("查看旧胎退回")])],1),a("div",{staticClass:"search_container"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.TableData}},[a("el-form-item",{attrs:{label:"单据号：",size:"mini",prop:"supplier_name"}},[t._v(" "+t._s(t.TableData.outstock_sn)+" ")]),a("el-form-item",{attrs:{label:"库存组织：",size:"mini",prop:"supplier_name"}},[t._v(" "+t._s(t.TableData.company_name)+" ")]),a("el-form-item",{attrs:{label:"业务日期：",size:"mini"}},[t._v(" "+t._s(t.TableData.business_time)+" ")]),a("el-form-item",{attrs:{label:"出库类型：",size:"mini"}},[t._v(" "+t._s(t.TableData.outstock_type_name)+" ")]),a("el-form-item",{attrs:{label:"客户名称",size:"mini"}},[t._v(" "+t._s(t.TableData.customer_name)+" ")]),a("el-form-item",{attrs:{label:"业务员：",size:"mini"}},[t._v(" "+t._s(t.TableData.business_name)+" ")]),a("el-form-item",{attrs:{label:"部门：",size:"mini"}},[t._v(" "+t._s(t.TableData.department_name)+" ")]),a("el-form-item",{attrs:{label:"收货人：",size:"mini"}},[t._v(" "+t._s(t.TableData.consignee_name)+" ")]),a("el-form-item",{attrs:{label:"收货人电话：",size:"mini"}},[t._v(" "+t._s(t.TableData.consignee_mobile)+" ")]),a("el-form-item",{attrs:{label:"所属区域：",size:"mini"}},[a("span",[t._v(t._s(t.TableData.province_name)+t._s(t.TableData.city_name)+t._s(t.TableData.area_name))])]),a("el-form-item",{attrs:{label:"详细地址：",size:"mini"}},[t._v(" "+t._s(t.TableData.address)+" ")]),a("el-form-item",{attrs:{label:"送货需求：",size:"mini"}},[t._v(" "+t._s(t.TableData.delivery_demand_name)+" ")]),a("el-form-item",{attrs:{label:"交货方式：",size:"mini"}},[t._v(" "+t._s(t.TableData.hand_over_name)+" ")]),a("el-form-item",{attrs:{label:"回款方式：",size:"mini"}},[t._v(" "+t._s(function(){return 1==t.TableData.payment_method?"客户自结":2==t.TableData.payment_method?"物流代收":""}())+" ")]),a("el-form-item",{attrs:{label:"意向物流：",size:"mini"}},[t._v(" "+t._s(t.TableData.intentional_logistics)+" ")]),a("el-form-item",{attrs:{label:"审核状态：",size:"mini"}},[t._v(" "+t._s(t.TableData.auditor_status_name)+" ")]),a("el-form-item",{attrs:{label:"备注："}},[t._v(" "+t._s(t.TableData.abstract)+" ")])],1)],1),a("div",{staticClass:"table_container"},[a("el-table",{staticStyle:{width:"100%"},attrs:{"highlight-current-row":!0,"tooltip-effect":"light",border:"",data:t.TableData.goods_info,"summary-method":t.getSummaries,"show-summary":"","max-height":"600"}},[a("el-table-column",{attrs:{"show-overflow-tooltip":!0,label:"序号",type:"index",width:"50",align:"center"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"goods_id",label:"商品编号","min-width":"170"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"goods_name",label:"商品名称","min-width":"500"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("pre",[t._v(t._s(e.row.goods_name))])]}}])}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"batch",label:"年周/批次","min-width":"100"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"warehouse_name",label:"仓库名称",width:"132"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"allocation_name",label:"货位名称","min-width":"120"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"tire_un",label:"胎号","min-width":"120"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"real_num",label:"数量",align:"right","min-width":"120"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"company_appraisal_sn",label:"来源单号","min-width":"160"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"remark",label:"备注"}})],1)],1),a("div",{staticClass:"dialog-footer",staticStyle:{"text-align":"center","margin-top":"20px"}},[2==t.TableData.auditor_status?[1==t.authority.b_invalid?a("el-button",{on:{click:function(e){return t.audit("getauditorInvalid")}}},[t._v("作废")]):t._e()]:t._e(),1==t.TableData.auditor_status?[1==t.authority.b_pass?a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.audit("getauidtorPass")}}},[t._v("审核")]):t._e(),1==t.authority.b_invalid?a("el-button",{on:{click:function(e){return t.audit("getauditorInvalid")}}},[t._v("作废")]):t._e()]:t._e(),3==t.TableData.auditor_status||2==t.TableData.auditor_status||1!=t.authority.b_invalid&&1!=t.authority.b_pass?[a("el-button",{on:{click:t.goBack}},[t._v("返回")])]:a("el-button",{on:{click:t.goBack}},[t._v("取消")])],2)],1)},o=[],r=a("5530"),l=(a("d3b7"),a("159b"),a("d81d"),a("a9e3"),a("caad"),a("2f62")),s={name:"instorageOldtyresstorageTirebackstorageSee",data:function(){return{authority:{},TableData:{goods_info:[]}}},computed:Object(r["a"])({},Object(l["c"])(["tirebackstorageSeeGet"])),methods:Object(r["a"])(Object(r["a"])({},Object(l["b"])(["tirebackstorageIndexAct"])),{},{goBack:function(){this.$router.push({path:"/inventory/tireback"}),this.tirebackstorageIndexAct({goPage:this.tirebackstorageSeeGet.goPage,params:this.tirebackstorageSeeGet.params,pageSize:this.tirebackstorageSeeGet.pageSize})},audit:function(t){var e=this;this.$baseData.checkCarDoctor({bill_type:15,bill_id:this.TableData.outstock_id,operation_type:"getauditorInvalid"===t?6:4}).then((function(){e.$axMethod[t]({outstock_id:e.TableData.outstock_id}).then((function(t){var a=t.data;200==a.code&&(e.$message({message:a.msg,type:"success"}),e.goBack())}))}))},initData:function(){var t=this,e="";e=this.tirebackstorageSeeGet.outstock_id,this.$axMethod.getcheckOutstock({outstock_id:e}).then((function(e){var a=e.data;"200"==a.code&&t.$set(t,"TableData",a.data)}))},getSummaries:function(t){var e=t.columns,a=t.data,i=[];return e.forEach((function(t,e){if(1!==e){var o=a.map((function(e){return Number(e[t.property])}));o.every((function(t){return isNaN(t)}))?i[e]="":(i[e]=o.reduce((function(t,e){var a=Number(e);return isNaN(a)?t:t+e}),0),[5,7].includes(e)?i[e]=parseFloat(i[e]):i[e]="")}else i[e]="总计"})),i}}),created:function(){this.authority=JSON.parse(localStorage.getItem("authority")),this.TableData.outstock_id=this.tirebackstorageSeeGet.outstock_id,this.tirebackstorageSeeGet.outstock_id&&this.initData()}},n=s,c=(a("5b20"),a("2877")),m=Object(c["a"])(n,i,o,!1,null,"45132f07",null);e["default"]=m.exports},"9d58":function(t,e,a){}}]);
//# sourceMappingURL=chunk-8c94ab0e.0360ad48.js.map