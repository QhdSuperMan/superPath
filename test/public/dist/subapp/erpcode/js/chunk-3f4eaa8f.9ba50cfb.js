(window["webpackJsonp_erpcode"]=window["webpackJsonp_erpcode"]||[]).push([["chunk-3f4eaa8f"],{"61fd":function(e,t,a){"use strict";a("a99c")},a99c:function(e,t,a){},b8e1:function(e,t,a){"use strict";a("d03c")},d03c:function(e,t,a){},d12c:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-cascader",{attrs:{filterable:e.filterable,placeholder:"请选择",options:e.options,clearable:"",size:"mini",props:e.prop},on:{change:e.changes,"expand-change":e.handleItemChange},model:{value:e.newDefaultArea,callback:function(t){e.newDefaultArea=t},expression:"newDefaultArea"}})],1)},s=[],r=(a("e3df"),a("42aa"),a("b1f0"),{data:function(){return{options:[],newDefaultArea:[]}},props:{defaultArea:{type:Array},filterable:{type:Boolean,default:!1},Level:{type:Number,default:3},prop:{type:Object,default:function(){return{value:"value",children:"cities"}}}},methods:{changes:function(e){var t=this;this.$nextTick((function(){t.$emit("changeDefaultArea",t.newDefaultArea)}))},handleItemChange:function(e){var t,a=this;1==e.length&&(t=e[0]),2==e.length&&(t=e[1]),this.$axios({method:"get",url:this.$api.getAreaListOption,params:{p_id:t,is_page:1}}).then((function(t){for(var i in a.options){if(1==e.length&&a.options[i].value==e[0]&&!a.options[i].cities.length)for(var s in t.data.data){var r={};r.label=t.data.data[s].area_name,r.value=t.data.data[s].area_id,3==a.Level&&(r.cities=[]),a.options[i].cities.push(r)}if(2==e.length&&3==a.Level)for(var l in a.options[i].cities)if(a.options[i].cities[l].value==e[1]&&!a.options[i].cities[l].cities.length)for(var o in t.data.data){var n={};n.label=t.data.data[o].area_name,n.value=t.data.data[o].area_id,a.options[i].cities[l].cities.push(n)}}}))},initAddress:function(){var e=this,t={level:2},a=this;a.$axMethod.getAreaList(t).then((function(t){var i={};for(var s in t.data.data){i={label:t.data.data[s].area_name,value:t.data.data[s].area_id,cities:[]};a.options.push(i)}if(e.defaultArea.length<=1)return!1;var r={level:3,p_id:a.defaultArea[0]};a.$axMethod.getAreaList(r).then((function(t){for(var i in a.options)if(a.options[i].value==r.p_id&&!a.options[i].cities.length)for(var s in t.data.data){var l={label:t.data.data[s].area_name,value:t.data.data[s].area_id,cities:[]};a.options[i].cities.push(l)}if(e.defaultArea.length<=2)return!1;var o={level:4,p_id:a.defaultArea[1]};a.$axMethod.getAreaList(o).then((function(e){for(var t in a.options)for(var i in a.options[t].cities)if(a.options[t].cities[i].value==o.p_id&&!a.options[t].cities[i].cities.length)for(var s in e.data.data){var r={label:e.data.data[s].area_name,value:e.data.data[s].area_id};a.options[t].cities[i].cities.push(r)}}))}))}))}},mounted:function(){var e=this;if(this.defaultArea.length>1)this.newDefaultArea=this.defaultArea.filter((function(e){return e})),this.initAddress();else{var t={level:2};this.$axMethod.getAreaList(t).then((function(t){var a={};for(var i in t.data.data){a={label:t.data.data[i].area_name,value:t.data.data[i].area_id,cities:[]};e.options.push(a)}}))}},watch:{defaultArea:{handler:function(e,t){this.options=[],this.newDefaultArea=this.defaultArea,this.initAddress()},deep:!0}}}),l=r,o=a("2877"),n=Object(o["a"])(l,i,s,!1,null,null,null);t["a"]=n.exports},eb15:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"search_container"},[a("el-form",{ref:"TableDataRef",staticClass:"demo-form-inline",attrs:{inline:!0,model:e.params}},[a("el-form-item",{staticClass:"demo-ruleForm",attrs:{label:"销售组织",size:"mini",prop:"company_id",rules:e.rules.company_id}},[a("el-select",{attrs:{autocomplete:"off","collapse-tags":"",multiple:"",filterable:"",placeholder:"请选择"},on:{change:e.companyChange},model:{value:e.params.company_id,callback:function(t){e.$set(e.params,"company_id",t)},expression:"params.company_id"}},e._l(e.companyList,(function(t){return a("el-option",{key:t.company_id,attrs:{label:t.company_name,value:t.company_id}},[a("span",{class:1==t.type?"optionStyle":""},[e._v(e._s(t.company_name))])])})),1)],1),a("el-form-item",{attrs:{label:"部门",size:"mini"}},[e._v(" "+e._s(function(){0==e.params.department_id&&(e.params.department_id=null)}())+" "),a("el-select",{attrs:{clearable:"",placeholder:"请选择",filterable:""},on:{focus:e.DepartmentListInvok,change:e.departmentChange},model:{value:e.params.department_id,callback:function(t){e.$set(e.params,"department_id",t)},expression:"params.department_id"}},e._l(e.departmentList,(function(e){return a("el-option",{key:e.department_id,attrs:{label:e.department_name,value:e.department_id}})})),1)],1),a("el-form-item",{attrs:{label:"业务员",size:"mini"}},[a("el-select",{attrs:{clearable:"",filterable:""},on:{focus:e.EmployeeListInvok},model:{value:e.params.employee_id,callback:function(t){e.$set(e.params,"employee_id",t)},expression:"params.employee_id"}},e._l(e.employeeList,(function(e){return a("el-option",{key:e.employee_id,attrs:{label:e.employee_name,value:e.employee_id}})})),1)],1),a("el-form-item",{attrs:{label:"客户名称",size:"mini"}},[a("el-select",{attrs:{filterable:"",placeholder:"请输入",clearable:"",loading:e.loading,remote:"","remote-method":e.clienteleListInvok},on:{focus:e.clienteleListInvok},model:{value:e.params.customer_id,callback:function(t){e.$set(e.params,"customer_id",t)},expression:"params.customer_id"}},[a("ul",{staticClass:"customer customer-ul4 customer-ul2"},[a("li",[e._v("客户编号")]),a("li",[e._v("客户名称")]),a("li",[e._v("联系人")]),a("li",[e._v("联系电话")]),a("li",[e._v("区域")])]),e._l(e.customerList,(function(t){return a("el-option",{key:t.customer_id,attrs:{label:t.customer_name,value:t.customer_id}},[a("ul",{staticClass:"customer customer-ul4"},[a("li",{attrs:{title:t.customer_id}},[e._v(e._s(t.customer_id))]),a("li",{attrs:{title:t.customer_name}},[e._v(e._s(t.customer_name))]),a("li",{attrs:{title:t.contact_name}},[e._v(e._s(t.contact_name))]),a("li",{attrs:{title:t.customer_mobile}},[e._v(e._s(t.customer_mobile))]),a("li",[e._v(e._s(t.province_name)+"/"+e._s(t.city_name)+"/"+e._s(t.area_name))])])])}))],2)],1),a("el-form-item",{attrs:{label:"业务日期",size:"mini",prop:"timeValue",rules:e.rules.timeValue}},[a("el-date-picker",{attrs:{type:"daterange","range-separator":"-","value-format":"yyyy-MM-dd","start-placeholder":"开始日期","end-placeholder":"结束日期"},on:{change:e.changetime},model:{value:e.params.timeValue,callback:function(t){e.$set(e.params,"timeValue",t)},expression:"params.timeValue"}})],1),a("transition",{attrs:{name:"fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}],staticClass:"me_hidden"},[a("el-form-item",{attrs:{label:"仓库名称",size:"mini"}},[a("el-select",{attrs:{filterable:"",clearable:"",placeholder:"请选择"},on:{focus:e.warehouseInvok,change:e.warehouseChangeId},model:{value:e.params.warehouse_id,callback:function(t){e.$set(e.params,"warehouse_id",t)},expression:"params.warehouse_id"}},e._l(e.warehouseList,(function(e){return a("el-option",{key:e.warehouse_id,attrs:{label:e.warehouse_name,value:e.warehouse_id}})})),1)],1),a("el-form-item",{attrs:{label:"货位名称",size:"mini"}},[a("el-select",{attrs:{filterable:"",remote:"",clearable:"",placeholder:"请输入"},on:{focus:function(t){return e.InventoryInvok({company_id:e.params.company_id})},change:e.allocationChangeId},model:{value:e.params.allocation_id,callback:function(t){e.$set(e.params,"allocation_id",t)},expression:"params.allocation_id"}},e._l(e.allocationInventoryList,(function(e){return a("el-option",{key:e.allocation_id,attrs:{label:e.allocation_name,value:e.allocation_id}})})),1)],1),a("el-form-item",{attrs:{size:"mini",label:"品牌名称"}},[a("getBrand",{on:{change:e.brand_idChangeId},model:{value:e.params.brand_id,callback:function(t){e.$set(e.params,"brand_id",t)},expression:"params.brand_id"}})],1),a("el-form-item",{attrs:{label:"商品名称",size:"mini"}},[a("v-GoodsList",{attrs:{scopes:{row:e.params},isFuzzy:!0,vxeParams:{company_id:e.params.company_id},showObj:{goods_id:"商品编号",goods_name:"商品名称"}}})],1),a("el-form-item",{attrs:{label:"年周/批次",size:"mini"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.params.batch,callback:function(t){e.$set(e.params,"batch","string"===typeof t?t.trim():t)},expression:"params.batch"}})],1),a("el-form-item",{attrs:{label:"单据号",size:"mini"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.params.receipt_sn,callback:function(t){e.$set(e.params,"receipt_sn",t)},expression:"params.receipt_sn"}})],1),a("el-form-item",{attrs:{label:"单据状态",size:"mini"}},[a("el-select",{attrs:{clearable:""},model:{value:e.params.auditor_status,callback:function(t){e.$set(e.params,"auditor_status",t)},expression:"params.auditor_status"}},[a("el-option",{attrs:{label:"全部",value:0}},[e._v("全部")]),a("el-option",{attrs:{label:"未审核",value:1}},[e._v("未审核")]),a("el-option",{attrs:{label:"已审核",value:2}},[e._v("已审核")])],1)],1),a("el-form-item",{attrs:{label:"审核日期",size:"mini"}},[a("el-date-picker",{attrs:{type:"daterange","range-separator":"-","value-format":"yyyy-MM-dd","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.auditValue,callback:function(t){e.auditValue=t},expression:"auditValue"}})],1),a("el-form-item",{attrs:{label:"业务类型",size:"mini"}},[a("el-select",{attrs:{"collapse-tags":"",multiple:"",placeholder:"请选择"},on:{focus:e.getBusinsstypeInvok,change:e.changebusiness},model:{value:e.business_type,callback:function(t){e.business_type=t},expression:"business_type"}},e._l(e.businessTypeList,(function(e){return a("el-option",{key:e.business_type_id,attrs:{label:e.business_type_name,value:e.business_type_id}})})),1)],1),a("el-form-item",{attrs:{label:"关联单据号",size:"mini"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.params.business_sn,callback:function(t){e.$set(e.params,"business_sn",t)},expression:"params.business_sn"}})],1),a("el-form-item",{attrs:{label:"电商订单号",size:"mini"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.params.ec_order_sn,callback:function(t){e.$set(e.params,"ec_order_sn",t)},expression:"params.ec_order_sn"}})],1),a("el-form-item",{staticClass:"wauto",attrs:{label:"客户区域",size:"mini"}},[e.defaultArea&&e.defaultArea.length?a("getAreaList",{attrs:{prop:e.propactive,defaultArea:e.defaultArea},on:{changeDefaultArea:e.changeDefaultArea}}):e._e()],1)],1)]),a("el-form-item",{staticClass:"search-style search",attrs:{size:"mini"}},[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){return e.onSearch("TableDataRef")}}},[e._v("查询")]),a("el-button",{attrs:{plain:"",size:"mini"},on:{click:e.onReset}},[e._v("重置")])],1)],1)],1),a("div",{staticClass:"me_growth"},[a("div",{staticClass:"me_broder"}),a("div",{staticClass:"me_showBtn",on:{click:e.showOrHidden}},[e._v(" "+e._s(e.isShow?"收起":"显示全部")+" "),a("b",{staticClass:"me_showIcon",class:e.isShow?"el-icon-caret-top":"el-icon-caret-bottom"})])]),1==e.authority.b_export&&e.listShow?a("div",{staticClass:"add_delet"},[a("el-dropdown",{attrs:{placement:"bottom-start"}},[a("span",{staticStyle:{cursor:"pointer",color:"#4e90e2"},attrs:{"split-button":""}},[a("el-button",{attrs:{plain:"",icon:"iconfont icon-daochu10",size:"mini"}},[e._v("导出")])],1),a("el-dropdown-menu",{staticStyle:{"margin-top":"10px"},attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{nativeOn:{click:function(t){return e.exportOrder(1)}}},[e._v("导出Excel文件")]),a("el-dropdown-item",{nativeOn:{click:function(t){return e.exportOrder(2)}}},[e._v("导出CSV逗号分隔")])],1)],1)],1):e._e(),a("div",{directives:[{name:"show",rawName:"v-show",value:e.listShow,expression:"listShow"}],staticClass:"table_container"},[e.tableColumn.length>0?a("xTable",{ref:"xTable",attrs:{ajax:{url:"getSalesProfitListV2",params:e.params},footerMethod:e.footerMethod,isShowTool:!0,tableColumn:e.tableColumn},on:{getData:e.getTableData}}):e._e(),a("div",{staticClass:"table_info"},[a("el-row",{staticClass:"row-bg",attrs:{type:"flex"}},[e.timeValue?a("el-col",{attrs:{span:12}},[a("div",[e._v("业务起始时间:"+e._s(e.params.start_time))])]):e._e(),e.timeValue?a("el-col",{attrs:{span:12}},[a("div",{staticClass:"textAr"},[e._v("业务截止时间:"+e._s(e.params.end_time))])]):e._e()],1),e.footUser?a("el-row",{staticClass:"row-bg",attrs:{type:"flex"}},[a("el-col",{attrs:{span:12}},[a("div",[e._v("生成时间："+e._s(e.footUser.search_time))])]),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"textAr"},[e._v("制表人："+e._s(e.footUser.make_user))])])],1):e._e()],1)],1)])},s=[],r=(a("a15b"),a("a9e3"),a("65b0")),l=a("d12c"),o=(a("d81d"),a("caad"),{data:function(){var e=this,t=this.$createElement;return{tableColumn:[{title:"序号",type:"seq",width:50},{title:"销售组织",field:"company_name",width:180},{title:"部门",field:"department_name",width:120},{title:"业务员",field:"business_name",width:110},{title:"客户名称",field:"customer_name",width:150},{title:"省",field:"province_name",width:100},{title:"市",field:"city_name",width:100},{title:"区",field:"area_name",width:100},{title:"仓库名称",field:"warehouse_name",width:120},{title:"货位名称",field:"allocation_name",width:132},{title:"品牌名称",field:"brand_name",width:120},{title:"商品名称",field:"goods_name",width:500},{title:"年周/批次",field:"batch",width:120},{title:"单据类型",field:"order_type_name",width:120},{title:"数量",field:"return_goods_num",headerAlign:"right",align:"right",width:120},{title:"销售收入",field:"subtotal_price",headerAlign:"right",align:"right",width:100},{title:"使用返利",field:"rebate_price",headerAlign:"right",align:"right",width:120},{title:"优惠金额",field:"discount_price",headerAlign:"right",align:"right",width:120},{title:"销售成本",field:"cost_price",headerAlign:"right",align:"right",width:120},{title:"毛利金额",field:"gross_profit",headerAlign:"right",align:"right",width:120},{title:"毛利率",field:"gross_profit_rate",headerAlign:"right",align:"right",width:120},{title:"单据状态",field:"auditor_status_name",width:120},{title:"净收入",field:"net_income",width:120,slots:{header:function(e,t){e.row;return[t("el-tooltip",{class:"item",attrs:{content:"Bottom center",effect:"light"}},[t("p",{slot:"content"},["净收入=数量*售价-优惠-返利"]),t("span",{class:"el-icon-question",style:"cursor:pointer;font-weight:bold;"},["净收入"])])]}}},{title:"净毛利",field:"net_gross_profit",width:120,slots:{header:function(e,t){e.row;return[t("el-tooltip",{class:"item",attrs:{content:"Bottom center",effect:"light"}},[t("p",{slot:"content"},["净毛利=净收入-销售成本"]),t("span",{class:"el-icon-question",style:"cursor:pointer;font-weight:bold;"},["净毛利"])])]}}},{title:"净毛利率",field:"net_gross_profit_margin",width:120,slots:{header:function(){return[t("el-tooltip",{class:"item",attrs:{content:"Bottom center",effect:"light"}},[t("p",{slot:"content"},["净毛利率=净毛利/净收入"]),t("span",{class:"el-icon-question",style:"cursor:pointer;font-weight:bold;"},["净毛利率"])])]}}},{title:"单据号",field:"invoices_sn",width:120,slots:{default:function(a){var i=a.row;return[t("el-link",{on:{click:function(){e.goDetails(i)}}},[i.invoices_sn])]}}},{title:"关联单据号",field:"correlation_invoices_sn",width:120},{title:"电商订单号",field:"ec_order_sn",width:120},{title:"业务日期",field:"business_time",width:120},{title:"审核时间",field:"auditor_time",width:120},{title:"单据备注",field:"remark",width:130},{title:"业务类型",field:"business_type_name",width:130},{title:"订单来源",field:"is_erp_name",width:80},{title:"活动类型",field:"ec_liancai_client_name",width:100}]}},methods:{goDetails:function(e){var t=this.$globalState.getOrderType(e.invoices_sn);"销售出库"===t?this.$router.push({path:"/sales/salesout/salesamend",query:{id:e.return_id}}):"销售退货"===t&&this.$router.push({path:"/sales/salesrefund/salesReturnSee",query:{id:e.return_id}})},footerMethod:function(e){var t=this,a=e.columns;e.data;return[a.map((function(e,a){return 1===a?"页小计":["return_goods_num","subtotal_price","rebate_price","discount_price","cost_price","gross_profit","gross_profit_rate"].includes(e.property)?(i=t.$refs.xTable?t.footUser[e.property]:0,i):null;var i})),a.map((function(e,a){if(1===a)return"合计";if(["return_goods_num","subtotal_price","rebate_price","discount_price","cost_price","gross_profit","gross_profit_rate"].includes(e.property)){var i;switch(e.property){case"return_goods_num":i=t.TableDataSum?t.TableDataSum.total_return_goods_num:"计算中...";break;case"subtotal_price":i=t.TableDataSum?t.TableDataSum.total_subtotal_price:"计算中...";break;case"rebate_price":i=t.TableDataSum?t.$options.filters["priceFormatNone"](t.TableDataSum.total_rebate_price):"计算中...";break;case"discount_price":i=t.TableDataSum?t.$options.filters["priceFormatNone"](t.TableDataSum.total_discount_price):"计算中...";break;case"cost_price":i=t.TableDataSum?t.$options.filters["priceFormatNone"](t.TableDataSum.total_cost_price):"计算中...";break;case"gross_profit":i=t.TableDataSum?t.$options.filters["priceFormatNone"](t.TableDataSum.total_gross_profit):"计算中...";break;case"gross_profit_rate":i=t.TableDataSum?t.$options.filters["priceFormatNone"](t.TableDataSum.total_gross_profit_rate):"计算中...";break}return i}return null}))]}}}),n={name:"reportSalesdetrpt",mixins:[o],data:function(){return{isShow:!1,authority:{},defaultArea:[0],auditValue:null,searchParams:{},TableDataSum:null,footUser:{},listShow:!1,business_type:null,timeValue:[(new Date).setTime((new Date).getTime()-2592e6),new Date],propactive:{value:"value",children:"cities",checkStrictly:!0},exportType:null,goPage:1,loading:!1}},components:{getAreaList:l["a"]},methods:{showOrHidden:function(){this.isShow=!this.isShow},changeDefaultArea:function(e){this.params.province_id=e[0],this.params.city_id=e[1],this.params.area_id=e[2]},changebusiness:function(e){this.params.business_type_ids=e.join(",")},getTableData:function(e){var t=e.data;this.footUser=t.data?t.data.desc:{}},querySearch:function(e,t){this.$set(this.params,"goods_id",""),this.$axMethod.getAllGoodsList({company_id:this.params.company_id,goods_name:e}).then((function(e){var a={goods_id:"编号",goods_name:"商品名称",disabled:!0};e.data.data.unshift(a),t(e.data.data)}))},handleSelect:function(e){this.$set(this.params,"goods_id",e.goods_id)},changetime:function(e){null!=e&&(this.params.start_time=e[0],this.params.end_time=e[1])},companyChange:function(e){this.$set(this.params,"warehouse_id",""),this.$set(this.params,"department_id",""),this.$set(this.params,"employee_id",""),this.$set(this.params,"allocation_id",""),this.$set(this.params,"brand_id",""),this.$set(this.params,"goods_name",""),this.$set(this.params,"batch","")},warehouseChangeId:function(e){this.$set(this.params,"allocation_id",""),this.$set(this.params,"brand_id",""),this.$set(this.params,"goods_name",""),this.$set(this.params,"batch","")},allocationChangeId:function(e){this.$set(this.params,"brand_id",""),this.$set(this.params,"goods_name",""),this.$set(this.params,"batch","")},brand_idChangeId:function(e){this.$set(this.params,"goods_name",""),this.$set(this.params,"batch","")},exportOrder:function(e){if(0==this.listShow)return this.$message({message:"请查询需要导出的数据",type:"error"}),!1;var t=Object.assign(this.params,{export_type:e});t=Object.assign({},t),this.$axMethod.exportSalesProfitUrl(t).then((function(e){200==e.data.code&&(window.location.href=e.data.data.url)}))},departmentChange:function(){this.$set(this.params,"employee_id","")},timeF:function(){this.auditValue?(this.params.auditor_start_time=this.auditValue[0],this.params.auditor_end_time=this.auditValue[1]):this.params.auditor_start_time=this.params.auditor_end_time=""},onReset:function(){this.$set(this,"params",{auditor_status:2,company_id:[Number(localStorage.company_id)],start_time:this.formData(this.timeValue[0]),end_time:this.formData(this.timeValue[1]),timeValue:[this.formData(this.timeValue[0]),this.formData(this.timeValue[1])]}),this.business_type=[],this.defaultArea=[0],this.auditValue=[],this.onSearch("TableDataRef")},totleSum:function(){var e=this,t=Object.assign({},this.params);this.$axMethod.getAllSalesProfitList(t).then((function(t){var a=t.data;200==a.code&&(e.TableDataSum=a.data,setTimeout((function(){e.$refs.xTable._proxy("updateFooter")}),50))}))},onSearch:function(){var e=this;this.timeF(),this.$refs["TableDataRef"].validate((function(t){if(!t)return!1;e.listShow=!0,e.$refs.xTable._getData(),e.totleSum()}))},formData:function(e){var t=new Date(e),a=""+(t.getMonth()+1),i=""+t.getDate(),s=t.getFullYear();return a.length<2&&(a="0"+a),i.length<2&&(i="0"+i),[s,a,i].join("-")}},created:function(){this.authority=JSON.parse(localStorage.getItem("authority")),this.$set(this,"params",{auditor_status:2,company_id:[Number(localStorage.company_id)],start_time:this.formData(this.timeValue[0]),end_time:this.formData(this.timeValue[1]),timeValue:[this.formData(this.timeValue[0]),this.formData(this.timeValue[1])]}),this.totleSum(),this.companyListInvok(),Object(r["l"])(this,localStorage)}},c=n,d=(a("61fd"),a("b8e1"),a("2877")),u=Object(d["a"])(c,i,s,!1,null,"869b352e",null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-3f4eaa8f.9ba50cfb.js.map