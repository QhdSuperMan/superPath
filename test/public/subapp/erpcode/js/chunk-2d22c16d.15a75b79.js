(window["webpackJsonp_erpcode"]=window["webpackJsonp_erpcode"]||[]).push([["chunk-2d22c16d"],{f26a:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{attrs:{id:"leixin"}},[a("div",{staticClass:"search_container"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.params}},[a("el-form-item",{attrs:{label:"库存组织",size:"mini"}},[a("el-select",{attrs:{clearable:"",placeholder:"请选择",filterable:""},on:{focus:t.companyListInvok,change:t.companyChange},model:{value:t.params.company_id,callback:function(e){t.$set(t.params,"company_id",e)},expression:"params.company_id"}},t._l(t.companyList,(function(e){return a("el-option",{key:e.company_id,attrs:{label:e.company_name,value:e.company_id}},[a("span",{class:1==e.type?"optionStyle":""},[t._v(t._s(e.company_name))])])})),1)],1),a("el-form-item",{attrs:{label:"业务日期",size:"mini"}},[a("el-date-picker",{attrs:{type:"daterange","range-separator":"-","value-format":"yyyy-MM-dd","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.timeValue,callback:function(e){t.timeValue=e},expression:"timeValue"}})],1),a("el-form-item",{attrs:{label:"单据号",size:"mini"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:t.params.adjust_sn,callback:function(e){t.$set(t.params,"adjust_sn",e)},expression:"params.adjust_sn"}})],1),a("el-form-item",{attrs:{label:"审核状态",size:"mini"}},[a("el-select",{attrs:{clearable:""},model:{value:t.params.auditor_status,callback:function(e){t.$set(t.params,"auditor_status",e)},expression:"params.auditor_status"}},[a("el-option",{attrs:{label:"全部",value:0}},[t._v("全部")]),a("el-option",{attrs:{label:"未审核",value:1}},[t._v("未审核")]),a("el-option",{attrs:{label:"已审核",value:2}},[t._v("已审核")]),a("el-option",{attrs:{label:"作废",value:3}},[t._v("作废")])],1)],1),a("el-form-item",{attrs:{label:"审核时间",size:"mini"}},[a("el-date-picker",{attrs:{type:"daterange","range-separator":"-","value-format":"yyyy-MM-dd","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.timeValue2,callback:function(e){t.timeValue2=e},expression:"timeValue2"}})],1),a("el-form-item",{staticClass:"search-style search",attrs:{size:"mini"}},[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:t.onSearch}},[t._v("查询")]),a("el-button",{attrs:{plain:"",size:"mini"},on:{click:t.onReset}},[t._v("重置")])],1)],1)],1),a("div",{staticClass:"add_delet"},[1==t.authority.b_add?a("el-button",{staticClass:"addBtn",attrs:{icon:"el-icon-circle-plus-outline",type:"primary",size:"mini"},on:{click:t.AddF}},[t._v("新增")]):t._e(),1==t.authority.b_del?a("el-button",{attrs:{plain:"",icon:"el-icon-delete",size:"mini"},on:{click:t.deletes}},[t._v("删除")]):t._e(),1==t.authority.b_pass?a("el-button",{attrs:{icon:"iconfont icon-pass",type:"primary",size:"mini"},on:{click:function(e){return t.examineFun(2)}}},[t._v("审核")]):t._e(),1==t.authority.b_invalid?a("el-button",{attrs:{plain:"",icon:"iconfont icon-zuofei",size:"mini"},on:{click:function(e){return t.examineFun(3)}}},[t._v("作废")]):t._e()],1),a("div",{staticClass:"table_container"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading1,expression:"loading1"}],staticStyle:{width:"100%"},attrs:{"highlight-current-row":!0,"tooltip-effect":"light",border:"",data:t.TableData.tableData,"max-height":"600"},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{"show-overflow-tooltip":!0,type:"selection",fixed:"left",align:"center",width:"44"}}),a("el-table-column",{attrs:{label:"操作",fixed:"right",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==t.authority.b_info?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.seeDetail(e,e.row)}}},[t._v(" 查看 ")]):t._e(),1==e.row.auditor_status&&1==t.authority.b_edit?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.AddF(e,e.row)}}},[t._v(" 修改 ")]):a("el-button",{attrs:{disabled:"",type:"text",size:"small"}},[t._v(" 修改 ")])]}}])}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"company_name",width:"150",label:"库存组织"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"adjust_sn",width:"160",label:"单据号"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"business_time",width:"120",label:"业务日期"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"add_time",width:"170",label:"单据时间"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"auditor_name",width:"130",label:"审核人"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"auditor_status_name",width:"80",label:"审核状态","text-align":"center"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"auditor_time",width:"120",label:"审核时间"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"remark",label:"备注"}})],1)],1),a("div",{staticClass:"page_container"},[a("div",{staticClass:"pageNumber"},[t._v("每页显示")]),a("el-pagination",{staticClass:"erp-pagination",attrs:{"current-page":t.goPage,"page-size":t.pageSize1,layout:"total,sizes, prev, pager, next,jumper",prevText:"上一页",nextText:"下一页",total:t.TableData.total},on:{"size-change":t.handleSizeChange,"update:currentPage":function(e){t.goPage=e},"update:current-page":function(e){t.goPage=e},"current-change":t.handleCurrentChange}})],1)])])},i=[],l=a("5530"),o=(a("4de4"),a("d3b7"),a("99af"),a("65b0")),n=a("2f62"),r={name:"instorageAdjustcostAdjustcostIndex",data:function(){return{timeValue2:[],loading:!1,dialogFormVisible:!1}},computed:Object(l["a"])({},Object(n["c"])(["adjustcostIndexGet"])),methods:Object(l["a"])(Object(l["a"])({},Object(n["b"])(["adjustcostAddACT","adjustcostSeeACT","adjustcostModifyACT","adjustcostIndexACT"])),{},{companyChange:function(t){t&&(this.params.company_name=this.companyList.filter((function(e){return e.company_id===t}))[0].company_name)},seeDetail:function(t,e){this.$router.push({path:"/inventory/adjustcost/adjustcostSee"}),this.adjustcostSeeACT({adjust_id:e.adjust_id,goPage:this.goPage,params:this.params,pageSize:this.pageSize})},AddF:function(t,e){this.$router.push({path:"/inventory/adjustcost/adjustcostAdd"}),this.adjustcostAddACT({goPage:this.goPage,params:this.params,pageSize:this.pageSize,adjust_id:e?e.adjust_id:""})},onReset:function(t){this.$set(this,"params",{}),this.timeValue=[],this.timeValue2=null,this.$set(this,"searchParams",{params:{},TableData:this.TableData,API:"getAdjustCostList",vm:this}),this.onSearch()},onSearch:function(){this.timeValue&&2==this.timeValue.length?(this.params.start_time=this.timeValue[0],this.params.end_time=this.timeValue[1]):this.params.start_time=this.params.end_time="",this.timeValue2&&2==this.timeValue2.length?(this.params.aud_start_time=this.timeValue2[0],this.params.aud_end_time=this.timeValue2[1]):this.params.aud_start_time=this.params.aud_end_time="",Object.assign(this.searchParams.params,this.params,{page:1}),this.adjustcostIndexACT({goPage:this.goPage,params:this.params,pageSize:this.pageSize}),Object(o["g"])(this.searchParams)},deletes:function(){if(this.multipleSelection.length<1)return this.$message({message:"请选择需要操作的信息",type:"warning"}),!1;var t={deleID:"adjust_id",deleSelect:this.multipleSelection,deleApi:"deladjustGoods",list:{UrlApi:"getAdjustCostList",data:this.TableData,esData:this.searchParams.params}};this.$common.deletes(t,"删除",this)},examineFun:function(t){if(this.multipleSelection.length<1)return this.$message({message:"请选择需要操作的信息",type:"warning"}),!1;for(var e=[],a=0;a<this.multipleSelection.length;a++)e.push(this.multipleSelection[a].adjust_id);var s=e.toString(),i={examineID:"adjust_id",eachData:{adjust_id:s},examineApi:2==t?"adjustCostAuidtorPass":"adjustCostAuditorInvalid",list:{UrlApi:"getAdjustCostList",data:this.TableData,esData:this.searchParams.params}};this.$common.examineFun(i)}}),mounted:function(){if(this.adjustcostIndexGet&&this.adjustcostIndexGet.params){if(this.adjustcostIndexGet.params.start_time){var t=this.adjustcostIndexGet.params,e=t.start_time,a=t.end_time;this.timeValue=this.timeValue.concat([e,a]);var s=this.adjustcostIndexGet.params,i=s.aud_start_time,l=s.aud_end_time;this.timeValue2=this.timeValue2.concat([i,l])}this.$set(this,"params",this.adjustcostIndexGet.params),Object(o["l"])(this,this.adjustcostIndexGet.params)}this.adjustcostIndexGet.goPage&&(this.params.page=this.adjustcostIndexGet.goPage,this.params.per_page=this.adjustcostIndexGet.pageSize),this.$set(this,"searchParams",{params:this.params,TableData:this.TableData,API:"getAdjustCostList",vm:this}),Object(o["g"])(this.searchParams)}},c=r,d=a("2877"),u=Object(d["a"])(c,s,i,!1,null,"d04f2196",null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d22c16d.15a75b79.js.map