(window["webpackJsonp_erpcode"]=window["webpackJsonp_erpcode"]||[]).push([["chunk-75fd09c0"],{"0c4c":function(e,t,a){},"15fd":function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));a("a4d3"),a("b64b");function i(e,t){if(null==e)return{};var a,i,s={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(s[a]=e[a]);return s}function s(e,t){if(null==e)return{};var a,s,o=i(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}},"5cda":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",[e._v("库存管理")]),a("el-breadcrumb-item",{staticClass:"attrbute"},[a("span",{on:{click:e.goBack}},[e._v("不良品管理")])]),a("el-breadcrumb-item",[e._v(e._s(e.title)+"新增不良品")])],1),a("div",{staticClass:"search_container"},[a("el-form",{ref:"ruleForm",staticClass:"demo-form-inline",attrs:{inline:!0,model:e.params}},[a("el-form-item",{attrs:{label:"库存组织",size:"mini",prop:"company_id",rules:e.rules.company_id}},[a("erpCompanyList",{attrs:{fatherParams:e.params,disabled:e.disabled},on:{change:e.companyChange},model:{value:e.params.company_id,callback:function(t){e.$set(e.params,"company_id",t)},expression:"params.company_id"}})],1),a("el-form-item",{attrs:{label:"部门",size:"mini",filterable:""}},[e._v(" "+e._s(function(){0==e.params.department_id&&(e.params.department_id=null)}())+" "),a("el-select",{attrs:{clearable:"",placeholder:"请选择",filterable:""},on:{focus:e.DepartmentListInvok,change:e.departmentChange},model:{value:e.params.department_id,callback:function(t){e.$set(e.params,"department_id",t)},expression:"params.department_id"}},e._l(e.departmentList,(function(e){return a("el-option",{key:e.department_id,attrs:{label:e.department_name,value:e.department_id}})})),1)],1),a("el-form-item",{attrs:{label:"业务员",size:"mini"}},[e._v(" "+e._s(function(){0==e.params.business_id&&(e.params.business_id=null)}())+" "),a("el-select",{attrs:{clearable:""},on:{focus:function(t){return e.EmployeeListInvok(1)}},model:{value:e.params.business_id,callback:function(t){e.$set(e.params,"business_id",t)},expression:"params.business_id"}},e._l(e.employeeList,(function(e){return a("el-option",{key:e.employee_id,attrs:{label:e.employee_name,value:e.employee_id}})})),1)],1),a("el-form-item",{attrs:{label:"业务日期",size:"mini",prop:"business_time",rules:e.rules.business_time}},[a("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd",type:"date",placeholder:"选择日期"},model:{value:e.params.business_time,callback:function(t){e.$set(e.params,"business_time",t)},expression:"params.business_time"}})],1),a("el-form-item",{attrs:{label:"单据类型",size:"mini",disabled:e.disabled,prop:"order_type",rules:{required:!0,message:"请选择单据类型"}}},[e._v(" "+e._s(function(){0==e.params.order_type&&(e.params.order_type=null)}())+" "),a("el-select",{attrs:{placeholder:"请选择"},on:{change:e.clearTable},model:{value:e.params.order_type,callback:function(t){e.$set(e.params,"order_type",t)},expression:"params.order_type"}},[a("el-option",{attrs:{label:"良品转不良品",value:1}}),a("el-option",{attrs:{label:"不良品转良品",value:2}})],1)],1),a("el-form-item",{attrs:{label:"单据号",size:"mini"}},[a("el-input",{attrs:{disabled:""},model:{value:e.params.conversion_sn,callback:function(t){e.$set(e.params,"conversion_sn",t)},expression:"params.conversion_sn"}})],1),a("el-form-item",{attrs:{label:"备注",size:"mini"}},[a("el-input",{attrs:{type:"text",maxlength:"300"},model:{value:e.params.abstract,callback:function(t){e.$set(e.params,"abstract",t)},expression:"params.abstract"}})],1)],1)],1),a("div",{staticClass:"add_delet"},[a("el-button",{staticClass:"addBtn",attrs:{icon:"el-icon-circle-plus-outline",type:"primary",size:"mini"},on:{click:e.addF}},[e._v("增行")]),a("el-button",{attrs:{plain:"",icon:"el-icon-delete",size:"mini"},on:{click:e.deleteF}},[e._v("删行")])],1),a("div",{staticClass:"table_container"},[a("xTable",{ref:"xTable",attrs:{isEdit:e.isEdit,"edit-rules":e.editRules,tableColumn:e.tableColumn,showFooter:!0,totalArray:["goods_cost_price","goods_num","goods_price"]}})],1),a("div",{staticClass:"dialog-footer",staticStyle:{"text-align":"center","margin-top":"20px"}},[a("el-button",{on:{click:e.goBack}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submit("ruleForm")}}},[e._v("确 定")])],1)],1)},s=[],o=a("15fd"),r=a("5530"),n=(a("d3b7"),a("159b"),a("4de4"),a("99af"),a("e9c4"),a("65b0")),l={data:function(){var e=this;return{editRules:{goods_name:[{required:!0,message:"请选择商品"}],after_warehouse_name:[{required:!0,message:"请选择仓库"}],batch:[{required:!0,message:"请选择批次"}],goods_num:[{required:!0,message:"请输入不良品数量"}],reason:[{required:!0,message:"请输入原因"}]},activateScope:{},tableColumn:[{type:"checkbox",width:44},{title:"商品编号",field:"goods_id",width:80},{title:"商品名称",field:"goods_name",width:350,editRender:{name:"vGoods",getParams:function(){return{params:{company_id:e.params.company_id},showObj:{goods_id:"商品编号",goods_name:"商品名称",unit_name:"单位",brand_name:"品牌",specification_type:"规格型号",factory_code:"工厂代码"}}},events:{change:this.changeGoods}}},{field:"batch",title:"年周/批次",showOverflow:"tooltip",showHeaderOverflow:"tooltip",width:200,editRender:{autoselect:!0,name:"vBatch",getParams:function(t){return{params:{company_id:e.params.company_id,goods_id:t.row.goods_id,bill_type:2,relation_warehouse_id:1,is_incomplete:1==e.params.order_type?2:1},showObj:{batch:"年周/批次",warehouse_name:"调出仓库",allocation_name:"调出货位",available_stocks:"批次可用库存",stocks:"在库库存",cost_price:"入库单价"}}},events:{change:function(e,t){var a=t.row;if(!a.goods_id)return!1;var i=e.production_time,s=e.batch_id,o=e.batch,r=e.stocks,n=e.available_stocks,l=e.warehouse_id,d=e.unit_name,c=e.warehouse_name,m=e.allocation_id,u=e.allocation_name,p=e.cost_price;Object.assign(a,{production_time:i,batch_id:s,batch:o,stocks:r,available_stocks:n,warehouse_id:l,goods_unit_name:d,warehouse_name:c,allocation_id:m,allocation_name:u,goods_price:p})}}}},{title:"单位",field:"goods_unit_name",width:100},{title:"调出仓库",field:"warehouse_name",width:240,showOverflow:!0},{title:"调出货位",field:"allocation_name",width:130,showOverflow:!0},{title:"调入仓库",field:"after_warehouse_name",width:150,showOverflow:!0,editRender:{name:"vSelect",getParams:function(){return{url:"getWarehouseFocus",modelKey:"after_warehouse_id",params:{company_id:e.params.company_id,relation_warehouse_id:1},itemObj:{id:"warehouse_id",name:"warehouse_name"}}},events:{change:function(t,a){var i=t.row;i.after_warehouse_id=a.warehouse_id,i.after_warehouse_name=a.warehouse_name,i.after_allocation_id="",i.after_allocation_name="",e.$axMethod.allocationInventoryListFocus({warehouse_id:a.warehouse_id,is_incomplete:e.params.order_type}).then((function(t){var a=t.data;e.$set(i,"after_allocation_id",a.data[0].allocation_id),e.$set(i,"after_allocation_name",a.data[0].allocation_name)}))}}}},{title:"调入货位",field:"after_allocation_name",width:150,showOverflow:!0},{title:"商品单价",field:"goods_price",align:"center",width:100},{title:"不良品数量",field:"goods_num",headerAlign:"center",align:"center",width:120,editRender:{name:"number",events:{input:this.handleEdit}}},{title:"商品成本",field:"goods_cost_price",headerAlign:"center",align:"center",width:100},{title:"转不良品原因",field:"reason",width:200,editRender:{name:"Vinput",formatter:"String"}}]}},methods:{isEdit:function(e){if("goods_name"!=e.column.property){if(!Boolean(e.row.goods_id))return this.$message.error({message:"请选择商品信息"}),!1}else if(!this.params.company_id)return this.$message.error({message:"请选择组织"}),!1;return!0}}},d={},c=["goods_list"],m={name:"IncompleteNew",mixins:[l],data:function(){return{title:"新增",loading:!1,disabled:!1,params:{order_type:1}}},methods:{warehouseChange:function(e){this.$refs.xTable._proxy("getTableData").fullData.forEach((function(e){e.allocation_name="",e.allocation_id=""}));var t=this.warehouseList.filter((function(t){return t.warehouse_id===e}));this.params.warehouse_name=t[0]?t[0].warehouse_name:""},changeGoods:function(e,t){var a=t.row;a.goods_id=e.goods_id,a.unit_name=e.unit_name;var i=this.$refs.xTable._proxy("getTableData").fullData.concat([]);i[i.length-1].goods_id&&this.addF()},addF:function(){this.$refs.xTable._proxy("insertAt",this.$publicFution.deepCopy(d),-1)},clearTable:function(){var e=this;1===this.params.order_type?this.editRules.reason=[{required:!0,message:"请输入原因"}]:this.editRules.reason=[{required:!1,message:"请输入原因"}],this.tableColumn.forEach((function(t){"reason"===t.field&&(1===e.params.order_type?t.title="转不良品原因":t.title="转良品原因")})),this.$refs.xTable._proxy("loadData",[])},companyChange:function(){Object(n["a"])(this,this.params),this.$refs.xTable._proxy("loadData",[])},departmentChange:function(){this.$set(this.params,"business_id","")},goBack:function(){this.$router.push({path:"/inventory/Incomplete"})},deleteF:function(){this.$refs.xTable._proxy("getCheckboxRecords").length?this.$refs.xTable._proxy("removeSelecteds"):this.$message({message:"请先选择要删除的订单！",type:"warning"})},Commit:function(e){var t,a=this,i=Object(r["a"])(Object(r["a"])({},this.params),{},{goods_json:JSON.stringify(e)});t=this.params.conversion_id?this.$axMethod.ConversionsEditOrder(i):this.$axMethod.ConversionsAddOrder(i),t.then((function(e){var t=e.data;200==t.code&&(a.$message({message:t.msg,type:"success"}),a.goBack())}))},submit:function(e){var t=this;this.$refs[e].validate((function(e){if(e){var a=t.$refs.xTable._proxy("getTableData").fullData.concat([]);if(a[a.length-1].goods_id||a.pop(),!a.length)return t.$message.error("请完善表格数据"),!1;t.$refs.xTable._proxy("validate",a).then((function(e){t.Commit(a)}))}}))},handleEdit:function(e){var t=e.row,a=e.column,i={num:"goods_num",price:"goods_price",totalPrice:"goods_cost_price"};this.$publicFution.computeTotal(t,i,a.property,this)}},mounted:function(){var e=this;this.conversion_id=this.$route.query.conversion_id,this.title=this.conversion_id?"修改":"新增",this.conversion_id?this.$axios({method:"get",url:this.$api.DefectiveProductGetOrderInfo,params:{conversion_id:this.conversion_id}}).then((function(t){if(200==t.data.code){var a=t.data.data,i=a.goods_list,s=Object(o["a"])(a,c);e.params=s,"添加残次品"===e.params.order_type?e.params.order_type=1:e.params.order_type=2,e.$refs.xTable._proxy("loadData",i),e.addF(),e.disabled=!0,e.employeeList=[{employee_id:s.business_id,employee_name:s.business_name}],Object(n["l"])(e,s)}})):(this.$set(this,"params",{business_time:this.$publicFution.formatData(new Date),company_id:"",company_name:"",order_type:1}),Object(n["l"])(this,window.localStorage),setTimeout((function(){e.addF()}),200))}},u=m,p=(a("825ac"),a("2877")),_=Object(p["a"])(u,i,s,!1,null,"e54eaf1c",null);t["default"]=_.exports},"825ac":function(e,t,a){"use strict";a("0c4c")}}]);
//# sourceMappingURL=chunk-75fd09c0.a4240608.js.map