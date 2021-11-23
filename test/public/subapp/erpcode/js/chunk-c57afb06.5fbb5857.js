(window["webpackJsonp_erpcode"]=window["webpackJsonp_erpcode"]||[]).push([["chunk-c57afb06"],{"02aa":function(e,t,a){},"1d77":function(e,t,a){"use strict";a("3e26")},"3e26":function(e,t,a){},"658d":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-dialog",{attrs:{"close-on-click-modal":!1,title:"引用采购入库单据",visible:e.$parent.isShowCustomBill,width:"1280px"},on:{"update:visible":function(t){return e.$set(e.$parent,"isShowCustomBill",t)},close:function(t){return e.cancel()}}},[a("el-form",{ref:"params",attrs:{inline:!0,model:e.params}},[a("el-form-item",{attrs:{label:"业务日期",size:"mini"}},[a("el-date-picker",{attrs:{type:"daterange","range-separator":"-","value-format":"yyyy-MM-dd","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.timeValue,callback:function(t){e.timeValue=t},expression:"timeValue"}})],1),a("el-form-item",{attrs:{label:"单据号",clearable:""}},[a("el-input",{attrs:{placeholder:"请输入",disabled:2===e.editType,clearable:""},model:{value:e.params.instorage_sn,callback:function(t){e.$set(e.params,"instorage_sn",t)},expression:"params.instorage_sn"}})],1),a("el-form-item",{attrs:{label:"供应商(厂家)",size:"mini",prop:"supplier_id"}},[a("el-select",{attrs:{clearable:"",maxlength:"100","filter-method":e.supplierListInvok,filterable:"",placeholder:"请选择"},on:{focus:e.supplierListInvok},model:{value:e.params.supplier_id,callback:function(t){e.$set(e.params,"supplier_id",t)},expression:"params.supplier_id"}},e._l(e.supplierList,(function(e){return a("el-option",{key:e.supplier_id,attrs:{label:e.supplier_name,value:e.supplier_id}})})),1)],1),a("el-form-item",{attrs:{label:"商品名称",size:"mini"}},[a("v-GoodsList",{attrs:{scopes:{row:e.params},vxeParams:{company_id:e.params.company_id},showObj:{goods_id:"商品编号",goods_name:"商品名称"}}})],1),a("el-form-item",{attrs:{label:"年周批次",size:"mini"}},[a("el-input",{attrs:{clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onSearch.apply(null,arguments)}},model:{value:e.params.batch,callback:function(t){e.$set(e.params,"batch",t)},expression:"params.batch"}})],1),a("el-form-item",{staticStyle:{"margin-left":"-60px"},attrs:{label:"仓库名称",size:"mini"}},[a("erpWarehouse",{attrs:{searchParams:{company_id:e.params.company_id}},model:{value:e.params.warehouse_id,callback:function(t){e.$set(e.params,"warehouse_id",t)},expression:"params.warehouse_id"}})],1),a("el-form-item",{staticClass:"search-style search",attrs:{size:"mini"}},[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){return e.onSearch(1)}}},[e._v("查询")]),a("el-button",{attrs:{size:"mini",type:"default"},on:{click:e.onReset}},[e._v("重置")])],1)],1),a("div",{staticClass:"delet"},[e._v(" 单据类型：采购入库单 ")]),a("div",{staticClass:"table_container"},[a("xTable",{ref:"selectxTable",attrs:{rowId:"selectInstorage",ajax:{url:"getInStorageListPublics",params:e.params},maxHeight:300,tableColumn:e.searchTableColumn}})],1),a("div",{staticStyle:{"padding-top":"20px","border-top":"1px dotted #333","margin-top":"20px"}},[a("p",[e._v("单据明细")]),a("xTable",{ref:"xTable",attrs:{rowId:"instorageList",xData:e.instoragInfo,sign:e.signObj,tableColumn:e.tableColumn},on:{selectChange:e.selectChange}})],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.cancel}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("确 定")])],1)],1)],1)},s=[],r=(a("d3b7"),a("159b"),a("4de4"),{start_time:"",end_time:"",company_id:"",warehouse_id:"",instorage_sn:""}),o={data:function(){var e=this,t=this.$createElement;return{tableColumn:[{type:"checkbox",width:44,align:"center"},{title:"商品编号",field:"goods_id",width:170},{title:"商品名称",field:"goods_name",width:300,slots:{default:function(e,t){return[t("pre",[e.row.goods_name])]}}},{title:"年周/批次",field:"batch",width:170},{title:"采购价",field:"purchase_price",headerAlign:"right",align:"right"},{title:"入库类型",field:"instorage_type_name",headerAlign:"right",align:"right"},{title:"入库数量",field:"goods_num",headerAlign:"right",align:"right"},{title:"小计金额",field:"old_subtotal_price",headerAlign:"right",align:"right"},{title:"已退货数量",field:"reference_goods_num",headerAlign:"right",align:"right"},{title:"备注",field:"remark"}],searchTableColumn:[{title:"单据号",field:"instorage_sn",width:160,slots:{default:function(a){return[t("span",{style:"cursor: pointer;color: #4e90e2",on:{click:function(){e.instorageDetailFun(a.row)}}},[" ",a.row.instorage_sn])]}}},{title:"供应商厂家",field:"supplier_name"},{title:"入库数量",field:"num",width:100,headerAlign:"right",align:"right"},{title:"已退货数量",field:"reference_num",width:100,headerAlign:"right",align:"right"},{title:"入库仓库",field:"warehouse_name",width:100},{title:"业务日期",field:"business_time",width:100},{title:"单据时间",field:"add_time",width:170},{title:"审核状态",field:"auditor_status_name"}]}}},n={name:"selectCustomLayer",mixins:[o],data:function(){return{authority:{},params:this.$publicFution.deepCopy(r),signObj:{arr:[],str:"instorage_id"},infolist:{},instoragInfo:[],multipleSelection:[]}},props:["selectParams","editType"],methods:{instorageDetailFun:function(e){var t=this;this.instorage_id=e.instorage_id;var a=this;this.$axios({method:"get",url:this.$api.referenceInstorageInfo,params:{instorage_id:e.instorage_id}}).then((function(i){var s=i.data;if(200==s.code){var r=[];t.$set(t,"infolist",s.data.info),t.$set(t.infolist,"instorage_id",e.instorage_id),t.multipleSelection=[],s.data.goodsList.forEach((function(e){e.reference_goods_num>=e.goods_num?r.push(e):t.multipleSelection.push(e)})),t.signObj={arr:r,str:"instorage_goods_id"},a.$set(a,"instoragInfo",s.data.goodsList),setTimeout((function(){t.$refs.xTable._proxy("setAllSelection",!0)}),50)}}))},cancel:function(){this.$parent.isShowCustomBill=!1,this.$parent.readonly=!1},selectChange:function(e){this.multipleSelection=e.selection},submit:function(){if(0==this.multipleSelection.length)return this.$message.warning("请选择需要退货的商品"),!1;var e={goodsList:this.multipleSelection,info:this.infolist};this.$emit("selectOutstockResult",e),this.$parent.isShowCustomBill=!1,this.$parent.readonly=!1},onSearch:function(e){this.timeValue?(this.params.start_time=this.timeValue[0],this.params.end_time=this.timeValue[1]):this.params.start_time=this.params.end_time="",this.instoragInfo=[],this.$refs.selectxTable._getData(e)},onReset:function(){this.timeValue=[],this.params=this.$publicFution.filter(r,this.selectParams),this.onSearch(1)}},mounted:function(){this.params=this.$publicFution.filter(r,this.selectParams)}},_=n,l=a("2877"),d=Object(l["a"])(_,i,s,!1,null,"bf66f84a",null);t["a"]=d.exports},"795e":function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("4de4"),core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("d3b7"),core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("d81d"),core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("99af"),core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__),core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("e9c4"),core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_4__),core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("cb29"),core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_5__),core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("caad"),core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6__),core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("a9e3"),core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_7__),_selectBill__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("658d"),common_utils_public_function_commonUtils__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("65b0"),_config_refundAdd_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("fe52");__webpack_exports__["a"]={name:"purchaseRefundAdd",mixins:[_config_refundAdd_js__WEBPACK_IMPORTED_MODULE_10__["b"]],components:{selectBill:_selectBill__WEBPACK_IMPORTED_MODULE_8__["a"]},data:function(){return{editType:1,params:{},indexSign:[],onlyQuote:!1,tableData:[],readonly:!1,loading:!1,isShowCustomBill:!1,line:null}},methods:{computedPrice:function(e){var t=e.row,a=e.column,i={num:"goods_num",price:"purchase_price",goodsPrice:"goods_price",taxrate:"taxrate",revenue_price:"revenue_price",no_revenue_price:"no_revenue_price"};this.$publicFution.computeTotal(t,i,a.property,this),this.$refs.xTable._proxy("updateFooter")},quoteOrder:function(){2!=this.line&&(this.isShowCustomBill=!0)},departmentChange:function(e){this.$set(this.params,"buyer_id")},companyChange:function companyChange(val){var _this=this;this.$refs.xTable._proxy("loadData",[]),this.$refs.xTable._proxy("updateFooter"),this.$set(this.params,"warehouse_id",""),this.$set(this.params,"reason_id",0),this.$set(this.params,"buyer_id"),this.$set(this.params,"supplier_id",""),this.$set(this.params,"department_id",""),this.$baseData.settingInfo({num:3,company_id:val},(function(){var state=localStorage.getItem("FDBName_business");_this.onlyQuote=1==eval(state)[7].status}))},clearF:function(){this.params={},this.$refs.xTable._proxy("loadData",[]),this.$refs.xTable._proxy("updateFooter"),this.line=null,this.$set(this,"params",{business_time:this.$publicFution.formatData(new Date)})},addF:function(){this.params.warehouse_id&&this.params.company_id?(this.line=2,this.$refs.xTable._proxy("insertAt",this.$publicFution.deepCopy(_config_refundAdd_js__WEBPACK_IMPORTED_MODULE_10__["a"]),-1),this.$refs.xTable._proxy("updateFooter")):this.$message.warning("请先选择仓库和组织")},warehouseChange:function(e){var t=this.warehouseList.filter((function(t){return t.warehouse_id===e}));this.params.warehouse_name=t[0]?t[0].warehouse_name:""},deleteF:function(){this.$refs.xTable._proxy("getSelectRecords").length?this.$refs.xTable._proxy("removeSelecteds"):this.$message.warning("请先选择要删除的商品！"),0===this.$refs.xTable._proxy("getTableData").fullData.length&&(this.params.instorage_sn||this.$set(this,"line",null))},selectOutstockResult:function(e){var t=this;if(e){this.employeeList=[{employee_id:e.info.buyer_id,employee_name:e.info.buyer_name}],Object(common_utils_public_function_commonUtils__WEBPACK_IMPORTED_MODULE_9__["l"])(this,e.info),this.params=e.info;var a=e.goodsList.map((function(e){return e.can_refund_num=e.remaining_goods_num,e.goods_num=e.goods_num-e.reference_goods_num,e.goods_price=e.subtotal_price,t.computedPrice({row:e,column:{property:"goods_price"}}),0===e.allocation_id&&(e=""),e}));this.line=1,this.$refs.xTable._proxy("loadData",a),this.$refs.xTable._proxy("updateFooter"),this.params.business_time=this.$publicFution.formatData(new Date)}},goBack:function(){this.$publicFution.goPage(this.$route.query.id),this.$router.push({path:"/purchase/refund"})},submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(e){if(void 0==t.params.instorage_sn&&2!=t.line)return t.$message.error("请引用单据"),!1;var a=t.$refs.xTable._proxy("getTableData").fullData.concat([]);a.length<1&&t.$message.warning("请完善表格数据"),a[a.length-1].goods_id||a.pop(),t.$refs.xTable._proxy("validate",a).then((function(){for(var e=0;e<a.length;e++)a[e].serial_number=e+1,a[e].line=2==t.line?2:1,a[e]=t.$publicFution.filter(_config_refundAdd_js__WEBPACK_IMPORTED_MODULE_10__["a"],a[e]);var i={line:2==t.line?2:1,goods_json:JSON.stringify(a)},s="addRefund",r=Object.assign(i,t.params);t.$route.query.id&&(s="editRefund",r.refund_id=t.$route.query.id),t.$baseData.checkCarDoctor({company_id:t.params.company_id,company_name:t.params.company_name,bill_type:14,bill_id:t.$route.query.id,operation_type:t.$route.query.id?2:1,goods_info:JSON.stringify(Array(a.length).fill({warehouse_id:t.params.warehouse_id,warehouse_name:t.params.warehouse_id}))}).then((function(){t.$baseData.checkComputation(a,{goods_num:"goods_num",total_price:"goods_price",goods_price:"purchase_price"}).then((function(){t.$axios({method:"post",url:t.$api[s],data:r}).then((function(e){200==e.data.code?(t.$message.success(e.data.msg),t.goBack()):t.indexSign=e.data.data}))}))}))}))}}))}},mounted:function mounted(){var _this4=this,state=localStorage.getItem("FDBName_business");if(state&&"undefined"!=state&&(this.onlyQuote=1==eval(state)[7].status),this.editType=1,this.$route.query&&this.$route.query.id)this.editType=2,this.$axios({method:"get",url:this.$api.getRefundInfo,params:{refund_id:this.$route.query.id}}).then((function(e){var t=e.data;200==t.code&&(_this4.params=t.data.info,_this4.$refs.xTable._proxy("loadData",t.data.goods_list),_this4.$refs.xTable._proxy("updateFooter"),_this4.params=t.data.info,_this4.$set(_this4,"line",t.data.info.line),Object.assign(t.data.info,{employee_id:t.data.info.buyer_id,employee_name:t.data.info.buyer_name}),Object(common_utils_public_function_commonUtils__WEBPACK_IMPORTED_MODULE_9__["l"])(_this4,t.data.info),_this4.params.reason_id=0==t.data.info.reason_id?"":t.data.info.reason_id)}));else{var _localStorage=localStorage,employee_id=_localStorage.employee_id,company_admin_id=_localStorage.company_admin_id;[0,1,2].includes(Number(employee_id))||company_admin_id>0?this.$set(this,"params",{business_time:this.$publicFution.formatData(new Date),company_id:Number(localStorage.company_id)}):this.$set(this,"params",{business_time:this.$publicFution.formatData(new Date),company_id:Number(localStorage.company_id),department_id:Number(localStorage.department_id),buyer_id:Number(localStorage.employee_id)}),Object(common_utils_public_function_commonUtils__WEBPACK_IMPORTED_MODULE_9__["l"])(this,localStorage)}}}},"81d5":function(e,t,a){"use strict";var i=a("7b0b"),s=a("23cb"),r=a("07fa");e.exports=function(e){var t=i(this),a=r(t),o=arguments.length,n=s(o>1?arguments[1]:void 0,a),_=o>2?arguments[2]:void 0,l=void 0===_?a:s(_,a);while(l>n)t[n++]=e;return t}},9569:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",[e._v("采购管理")]),a("el-breadcrumb-item",{staticClass:"attrbute"},[a("span",{on:{click:e.goBack}},[e._v("采购退货")])]),a("el-breadcrumb-item",[e._v(e._s(e.$route.query.id?"修改":"添加")+"采购退货单")])],1),a("div",[a("div",{staticClass:"search_container "},[a("el-form",{ref:"ruleForm",staticClass:"demo-form-inline",attrs:{inline:!0,model:e.params}},[a("el-form-item",{attrs:{label:"采购组织",size:"mini",prop:"company_id",rules:e.rules.company_name}},[e._v(" "+e._s(function(){0==e.params.company_id&&(e.params.company_id=null)}())+" "),a("el-select",{attrs:{clearable:"",filterable:"",disabled:1===e.line},on:{focus:e.companyListInvok,change:e.companyChange},model:{value:e.params.company_id,callback:function(t){e.$set(e.params,"company_id",t)},expression:"params.company_id"}},e._l(e.companyList,(function(e){return a("el-option",{key:e.company_id,attrs:{label:e.company_name,value:e.company_id}})})),1)],1),a("el-form-item",{attrs:{label:"单据号","label-width":"110px",size:"mini"}},[a("el-input",{attrs:{disabled:""},model:{value:e.params.refund_sn,callback:function(t){e.$set(e.params,"refund_sn",t)},expression:"params.refund_sn"}})],1),a("el-form-item",{attrs:{label:"来源单据",size:"mini"}},[a("el-input",{class:{disabledInstorage_sn:2===e.editType},staticStyle:{cursor:"pointer",width:"200px"},attrs:{clearable:1==e.editType,disabled:2===e.line||2===e.editType,readonly:e.isShowCustomBill,"suffix-icon":"el-icon-more"},on:{clear:e.clearF},nativeOn:{click:function(t){return e.quoteOrder.apply(null,arguments)}},model:{value:e.params.instorage_sn,callback:function(t){e.$set(e.params,"instorage_sn",t)},expression:"params.instorage_sn"}})],1),a("el-form-item",{attrs:{label:"业务日期",size:"mini",prop:"business_time",rules:e.rules.business_time}},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:e.params.business_time,callback:function(t){e.$set(e.params,"business_time",t)},expression:"params.business_time"}})],1),a("el-form-item",{attrs:{label:"出库类型",size:"mini"}},[a("el-input",{attrs:{type:"text",maxlength:"300",value:"采购退货",disabled:"disabled"}})],1),a("el-form-item",{attrs:{label:"仓库名称",size:"mini",prop:"warehouse_id",rules:e.rules.warehouse_id}},[a("el-select",{attrs:{placeholder:"请选择",filterable:""},on:{focus:e.warehouseInvok,change:e.warehouseChange},model:{value:e.params.warehouse_id,callback:function(t){e.$set(e.params,"warehouse_id",t)},expression:"params.warehouse_id"}},e._l(e.warehouseList,(function(e){return a("el-option",{key:e.warehouse_id,attrs:{label:e.warehouse_name,value:e.warehouse_id}})})),1)],1),a("el-form-item",{attrs:{label:"供应商(厂家)",size:"mini",prop:"supplier_id",rules:e.rules.supplier_id}},[a("el-select",{attrs:{clearable:"",maxlength:"100","filter-method":e.supplierListInvok,disabled:1===e.line,filterable:"",placeholder:"请选择"},on:{focus:e.supplierListInvok},model:{value:e.params.supplier_id,callback:function(t){e.$set(e.params,"supplier_id",t)},expression:"params.supplier_id"}},e._l(e.supplierList,(function(e){return a("el-option",{key:e.supplier_id,attrs:{label:e.supplier_name,value:e.supplier_id}})})),1)],1),a("el-form-item",{attrs:{label:"部门",size:"mini"}},[e._v(" "+e._s(function(){0==e.params.department_id&&(e.params.department_id=null)}())+" "),a("el-select",{attrs:{clearable:"",placeholder:"请选择",filterable:""},on:{focus:e.DepartmentListInvok,change:e.departmentChange},model:{value:e.params.department_id,callback:function(t){e.$set(e.params,"department_id",t)},expression:"params.department_id"}},e._l(e.departmentList,(function(e){return a("el-option",{key:e.department_id,attrs:{label:e.department_name,value:e.department_id}})})),1)],1),a("el-form-item",{attrs:{label:"采购员",size:"mini"}},[e._v(" "+e._s(function(){([0,1,2].includes(e.params.buyer_id)||e.params.company_admin_id>0)&&(e.params.buyer_id=null)}())+" "),a("el-select",{attrs:{clearable:"",placeholder:"请选择",filterable:""},on:{focus:e.EmployeeListInvok},model:{value:e.params.buyer_id,callback:function(t){e.$set(e.params,"buyer_id",t)},expression:"params.buyer_id"}},e._l(e.employeeList,(function(e){return a("el-option",{key:e.employee_id,attrs:{label:e.employee_name,value:e.employee_id}})})),1)],1),a("el-form-item",{attrs:{label:"退货原因",size:"mini"}},[e._v(" "+e._s(function(){0==e.params.reason_id&&(e.params.reason_id=null)}())+" "),a("el-select",{attrs:{clearable:""},on:{focus:e.getReasonInvok},model:{value:e.params.reason_id,callback:function(t){e.$set(e.params,"reason_id",t)},expression:"params.reason_id"}},e._l(e.reasonList,(function(e){return a("el-option",{key:e.reason_id,attrs:{label:e.reason_name,value:e.reason_id}})})),1)],1),a("el-form-item",{attrs:{label:"备注",size:"mini"}},[a("el-input",{attrs:{type:"text",maxlength:"50",placeholder:"请输入"},model:{value:e.params.remark,callback:function(t){e.$set(e.params,"remark",t)},expression:"params.remark"}})],1)],1)],1)]),a("div",{staticClass:"add_delet"},[e.onlyQuote?e._e():a("el-button",{attrs:{icon:"el-icon-circle-plus-outline",type:"primary",disabled:1==e.line,size:"mini"},on:{click:function(t){return e.addF("ruleForm")}}},[e._v("增行")]),a("el-button",{attrs:{plain:"",icon:"el-icon-delete",size:"mini"},on:{click:e.deleteF}},[e._v("删行")])],1),a("div",{staticClass:"table_container"},[a("xTable",{ref:"xTable",attrs:{isEdit:e.isEdit,indexSignStart:1,indexSign:e.indexSign,"edit-rules":e.editRules,tableColumn:e.tableColumn,showFooter:!0,totalArray:["goods_num","goods_price"]}}),a("div",{staticClass:"refundauditFoot"},[a("span",[e._v("创建人："+e._s(e.params.add_user_name))]),a("span",[e._v("创建时间："+e._s(e.params.add_time))]),a("span",[e._v("审核人：")]),a("span",[e._v("审核时间：")]),a("span",[e._v("修改人："+e._s(e.params.update_user_name))]),a("span",[e._v("修改时间："+e._s(e.params.update_time))])]),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.goBack}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("确 定")])],1)],1),e.isShowCustomBill?a("div",[a("select-bill",{attrs:{isShowCustomBill:e.isShowCustomBill,selectParams:e.params,editType:e.editType},on:{selectOutstockResult:e.selectOutstockResult}})],1):e._e()],1)},s=[],r=a("795e"),o=r["a"],n=(a("c190"),a("1d77"),a("2877")),_=Object(n["a"])(o,i,s,!1,null,"3470cab5",null);t["default"]=_.exports},c190:function(e,t,a){"use strict";a("02aa")},cb29:function(e,t,a){var i=a("23e7"),s=a("81d5"),r=a("44d2");i({target:"Array",proto:!0},{fill:s}),r("fill")},fe52:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return s}));a("d3b7");var i={serial_number:"",goods_id:"",goods_price:"",instorage_goods_id:"",purchase_price:"",batch:"",remark:"",allocation_id:"",goods_num:"",can_refund_num:"",production_time:"",refund_goods_id:0,no_revenue_price:"",taxrate:"",revenue_price:"",line:1},s={data:function(){var e=this;this.$createElement;return{editRules:{goods_num:[{required:!0,message:"数量输入请在0-99999999之间"}],goods_name:[{required:!0,message:"请选择商品"}],allocation_name:[{required:!0,message:"请选择货位"}],purchase_price:[{required:!0,message:"请输入采购价"}]},tableColumn:[{type:"checkbox",width:44,align:"center"},{title:"序号",type:"seq",width:50},{title:"操作",fixed:"right",width:80,field:"goods_id",slots:{default:function(t,a){return[a("i",{class:"el-icon-document",on:{click:function(){e.$refs.xTable._copyRow(t.row)}},style:"cursor: pointer;font-size: 15px;line-height: 28px;"})]}}},{title:"商品编号",field:"goods_id",width:80},{title:"商品名称",field:"goods_name",width:400,editRender:{name:"vGoods",getParams:function(t){var a=t.row;return{params:{isTotal:1,company_id:e.params.company_id,warehouse_id:e.params.warehouse_id,is_incomplete:0},getIcon:function(){return a.goods_name?[{icon:"el-icon-close",title:"删除商品",iconMethod:function(){for(var e in a)a[e]=""}}]:[]}}},events:{change:function(t,a){var i=a.row;["allocation_id","allocation_name","batch_id","unit_name","factory_code","purchase_price","production_time","return_goodsNum","refund_goods_id","goods_price"].forEach((function(e){i[e]="refund_goods_id"==e?0:null}));var s=["goods_id","goods_sn","stocks","factory_code","purchase_price","unit_name","taxrate"];s.forEach((function(e){i[e]=t[e]}));var r=e.$refs.xTable._proxy("getTableData").fullData;r[r.length-1].goods_name&&e.addF()}}}},{title:"年周/批次",field:"batch",width:120,editRender:{name:"vBatch",getParams:function(t){var a=t.row;return{url:"getGoodsBatchList",params:{company_id:e.params.company_id,warehouse_id:e.params.warehouse_id,goods_id:a.goods_id?a.goods_id:""}}},events:{change:function(e,t){var a=t.row;["batch","batch_id","production_time","allocation_id","allocation_name"].forEach((function(t){a[t]=e[t]}))}}}},{title:"生产日期",field:"production_time",width:100,slots:{header:function(e,t){return[t("el-tooltip",{class:"item",attrs:{content:"Bottom center",effect:"light"}},[t("p",{slot:"content"},["生产日期列后期将会隐藏，同时新增商品入库日期列"]),t("span",{class:"el-icon-question",style:"cursor:pointer;font-weight:bold;"},["生产日期"])])]}}},{title:"单位",field:"unit_name",width:100},{title:"货位名称",field:"allocation_name",width:130,editRender:{name:"vAllocation",getParams:function(t){var a=t.row;return{url:"newAllocationListList",isPage:!0,params:{company_id:e.params.company_id?e.params.company_id:"",warehouse_id:e.params.warehouse_id?e.params.warehouse_id:"",goods_id:a.goods_id,is_incomplete:0,batch:a.batch}}},events:{change:function(e,t){var a=e.row;a.allocation_id=t.allocation_id,a.allocation_name=t.allocation_name}}}},{title:"数量",field:"goods_num",headerAlign:"right",align:"right",width:110,editRender:{name:"number",events:{input:this.computedPrice}}},{title:"采购价",field:"purchase_price",headerAlign:"right",align:"right",width:132,editRender:{name:"Vinput",formatter:"String",events:{input:this.computedPrice}}},{title:"小计金额",field:"goods_price",headerAlign:"right",align:"right",width:132,editRender:{name:"Vinput",events:{input:this.computedPrice}}},{field:"revenue_price",showOverflow:!0,title:"税额",width:100,editRender:{autoselect:!0,name:"vNumber",events:{input:this.computedPrice}}},{field:"no_revenue_price",showOverflow:!0,width:100,title:"不含税金额"},{title:"工厂代码",field:"factory_code",width:150},{title:"备注",field:"remark",width:200,editRender:{name:"Vinput",formatter:"String"}}]}},methods:{isEdit:function(e){var t=e.row,a=e.column;return"goods_name"!==a.property&&"batch"!==a.property||1!==this.line?!("batch"===a.property&&!t.goods_name)||(this.$publicFution.confirm("请先选择商品"),!1):(this.$publicFution.confirm("引用单据不可修改"),!1)}}}}}]);
//# sourceMappingURL=chunk-c57afb06.5fbb5857.js.map