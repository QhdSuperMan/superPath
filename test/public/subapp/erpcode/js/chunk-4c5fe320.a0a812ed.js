(window["webpackJsonp_erpcode"]=window["webpackJsonp_erpcode"]||[]).push([["chunk-4c5fe320"],{bb7d:function(t,a,e){},c83e:function(t,a,e){"use strict";e("bb7d")},fe33:function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[e("el-breadcrumb-item",[t._v("厂家三包")]),e("el-breadcrumb-item",{staticClass:"attrbute"},[e("span",{on:{click:t.goBack}},[t._v("厂家预检")])]),e("el-breadcrumb-item",[t._v("查看厂家预检")])],1),e("div",{staticClass:"formHeader"},[e("div",{staticClass:"wz_headerWrapper"},[e("div",{staticClass:"wz_setStyleBox"},[e("div",{staticClass:"box_title"},[t._v("销售组织")]),e("div",{staticClass:"box_value"},[t._v(t._s(t.params.company_name))])])]),e("div",{staticClass:"wz_headerWrapper"},[e("div",{staticClass:"wz_setStyleBox"},[e("div",{staticClass:"box_title"},[t._v("厂家预检单据号")]),e("div",{staticClass:"box_value"},[t._v(t._s(t.params.factory_appraisal_sn))])])]),e("div",{staticClass:"wz_headerWrapper"},[e("div",{staticClass:"wz_setStyleBox"},[e("div",{staticClass:"box_title"},[t._v("供应商(厂家)")]),e("div",{staticClass:"box_value"},[t._v(t._s(t.params.supplier_name))])])]),e("div",{staticClass:"wz_headerWrapper"},[e("div",{staticClass:"wz_setStyleBox"},[e("div",{staticClass:"box_title"},[t._v("审核状态")]),e("div",{staticClass:"box_value"},[t._v(t._s(t.params.auditor_status_name))])])]),e("div",{staticClass:"wz_headerWrapper"},[e("div",{staticClass:"wz_setStyleBox"},[e("div",{staticClass:"box_title"},[t._v("鉴定日期")]),e("div",{staticClass:"box_value"},[t._v(t._s(t.params.business_time))])])]),e("div",{staticClass:"wz_headerWrapper"},[e("div",{staticClass:"wz_setStyleBox"},[e("div",{staticClass:"box_title"},[t._v("部门")]),e("div",{staticClass:"box_value"},[t._v(t._s(t.params.department_name))])])]),e("div",{staticClass:"wz_headerWrapper",staticStyle:{width:"100%"}},[e("div",{staticClass:"wz_setStyleBox"},[e("div",{staticClass:"box_title"},[t._v("备注")]),e("div",{staticClass:"box_value",staticStyle:{flex:"1"}},[t._v(t._s(t.params.remark))])])])]),e("div",{staticClass:"table_container"},[e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading1,expression:"loading1"}],staticStyle:{width:"100%"},attrs:{"highlight-current-row":!0,"tooltip-effect":"light",border:"",data:t.TableData,"max-height":"600"}},[e("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"brand_name",width:"180",label:"品牌名称"}}),e("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"goods_id",width:"180",label:"商品编号"}}),e("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"goods_name","min-width":"500",label:"商品名称"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("pre",[t._v(t._s(a.row.goods_name))])]}}])}),e("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"tire_un",width:"180",label:"胎号"}}),e("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"symptom_name",width:"180",label:"病象"}}),e("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"company_status",width:"180",label:"公司鉴定结果"},scopedSlots:t._u([{key:"default",fn:function(a){return[1==a.row.company_status?e("span",[t._v("待厂检")]):t._e(),2==a.row.company_status?e("span",[t._v("理赔")]):t._e(),3==a.row.company_status?e("span",[t._v("不理赔")]):t._e()]}}])}),e("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"raw_flowerdeep",width:"180",label:"出厂花深"}}),e("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"surplus_flowerdeep",width:"180",label:"剩余花深"}}),e("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"factory_flowerdeep",width:"180",label:"厂免花深"}}),e("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"charge_flowerdeep",width:"180",label:"收费花深"}}),e("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"mm_wearprice",width:"180",label:"毫米磨损费"}}),e("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"wear_price",width:"180",label:"磨损费"}}),e("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"intube_price",width:"180",label:"内胎采购价"}}),e("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"flap_price",width:"180",label:"垫带采购价"}}),e("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"inflap_price",width:"180",label:"内垫采购价"}}),e("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"goods_price",width:"180",label:"商品采购价"}}),e("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"factory_price",width:"180",label:"厂赔单价"},scopedSlots:t._u([{key:"default",fn:function(a){return[t._v(" "+t._s(t._f("priceFormat")(a.row.factory_price))+" ")]}}])}),e("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"factory_status",width:"180",label:"厂家鉴定结果"},scopedSlots:t._u([{key:"default",fn:function(a){return[1==a.row.factory_status?e("span",[t._v("理赔")]):t._e(),2==a.row.factory_status?e("span",[t._v("不理赔")]):t._e()]}}])})],1)],1),e("div",{staticClass:"dialog-footer",staticStyle:{"text-align":"center","margin-top":"20px"}},[1==t.params.auditor_status?[1==t.authority.b_pass?e("el-button",{attrs:{type:"primary"},on:{click:function(a){return t.audit("auditorPassCompanyAppraisal")}}},[t._v("审核")]):t._e(),1==t.authority.b_invalid?e("el-button",{on:{click:function(a){return t.audit("auditorInvalidCompanyAppraisal")}}},[t._v("作废")]):t._e()]:t._e(),3==t.params.auditor_status||1!=t.authority.b_invalid&&1!=t.authority.b_pass&&1!=t.authority.b_nopass?[e("el-button",{on:{click:t.goBack}},[t._v("返回")])]:e("el-button",{on:{click:t.goBack}},[t._v("返回")])],2)],1)},s=[],l=e("5530"),r=e("2f62"),i={name:"aftersaleFactoryjudgementWExamine",data:function(){return{authority:{},TableData:null,loading:!0,params:{}}},computed:Object(l["a"])({},Object(r["c"])(["factoryjudgementExamine_Get","factoryjudgementDefault_Get"])),methods:Object(l["a"])(Object(l["a"])({},Object(r["b"])(["factoryjudgementDefault"])),{},{goBack:function(){this.$router.push({path:"/aftersale/factoryjudgement"})},audit:function(t){var a=this;this.$axios({method:"post",url:this.$api[t],data:{factory_appraisal_id:this.factoryjudgementExamine_Get.factory_appraisal_id}}).then((function(t){200==t.data.code&&(a.$message({message:t.data.data,type:"success"}),a.goBack())}))}}),mounted:function(){var t=this;this.authority=JSON.parse(localStorage.getItem("authority")),this.$axMethod.getCompanyAppraisalInfo({factory_appraisal_id:this.factoryjudgementExamine_Get.factory_appraisal_id}).then((function(a){200==a.data.code&&(t.loading=!1,t.params=a.data.data.infoList,t.TableData=a.data.data.goodsList)}))}},p=i,c=(e("c83e"),e("2877")),n=Object(c["a"])(p,o,s,!1,null,"4310415e",null);a["default"]=n.exports}}]);
//# sourceMappingURL=chunk-4c5fe320.a0a812ed.js.map