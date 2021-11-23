(window["webpackJsonp_erpcode"]=window["webpackJsonp_erpcode"]||[]).push([["chunk-2d225661"],{e3da:function(e,t,a){"use strict";a.r(t);var l,s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"search_container"},[a("el-form",{ref:"filterFormRef",staticClass:"demo-form-inline",attrs:{inline:!0,model:e.params}},[a("el-form-item",{attrs:{clearable:"",label:"财务组织",size:"mini",rules:e.rules.company_id,prop:"company_id"}},[a("el-select",{attrs:{placeholder:"请选择","filter-method":e.companyChange,filterable:""},on:{change:e.companyChange,focus:e.getCompany},model:{value:e.params.company_id,callback:function(t){e.$set(e.params,"company_id",t)},expression:"params.company_id"}},e._l(e.companyList,(function(t){return a("el-option",{key:t.company_id,attrs:{label:t.company_name,value:t.company_id}},[a("span",{class:1==t.type?"optionStyle":""},[e._v(e._s(t.company_name))])])})),1)],1),a("el-form-item",{attrs:{label:"审核日期",size:"mini"}},[a("el-date-picker",{attrs:{type:"daterange","range-separator":"-","value-format":"yyyy-MM-dd","start-placeholder":"开始日期","end-placeholder":"结束日期",clearable:""},on:{change:e.change},model:{value:e.timeValue,callback:function(t){e.timeValue=t},expression:"timeValue"}})],1),a("el-form-item",{attrs:{label:"业务日期",size:"mini"}},[a("el-date-picker",{attrs:{type:"daterange","range-separator":"-","value-format":"yyyy-MM-dd","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.timeValue2,callback:function(t){e.timeValue2=t},expression:"timeValue2"}})],1),a("el-form-item",{attrs:{label:"客户名称",size:"mini"}},[a("el-select",{attrs:{filterable:"",placeholder:"请输入",clearable:"",loading:e.loading,remote:"","remote-method":e.clienteleListInvok},on:{focus:e.clienteleListInvok},model:{value:e.params.customer_id,callback:function(t){e.$set(e.params,"customer_id",t)},expression:"params.customer_id"}},[a("ul",{staticClass:"customer customer-ul4 customer-ul2"},[a("li",[e._v("客户编号")]),a("li",[e._v("客户名称")]),a("li",[e._v("联系人")]),a("li",[e._v("联系电话")]),a("li",[e._v("区域")])]),e._l(e.customerList,(function(t){return a("el-option",{key:t.customer_id,attrs:{label:t.customer_name,value:t.customer_id}},[a("ul",{staticClass:"customer customer-ul4"},[a("li",{attrs:{title:t.customer_id}},[e._v(e._s(t.customer_id))]),a("li",{attrs:{title:t.customer_name}},[e._v(e._s(t.customer_name))]),a("li",{attrs:{title:t.contact_name}},[e._v(e._s(t.contact_name))]),a("li",{attrs:{title:t.customer_mobile}},[e._v(e._s(t.customer_mobile))]),a("li",[e._v(e._s(t.province_name)+"/"+e._s(t.city_name)+"/"+e._s(t.area_name))])])])}))],2)],1),a("el-form-item",{attrs:{label:"业务员",size:"mini"}},[a("el-select",{attrs:{clearable:"",multiple:"","collapse-tags":"",filterable:""},on:{focus:e.EmployeeListInvok},model:{value:e.params.employee_id,callback:function(t){e.$set(e.params,"employee_id",t)},expression:"params.employee_id"}},[e._v(" "+e._s(function(){0==e.params.employee_id&&(e.params.employee_id=null)}())+" "),e._l(e.employeeList,(function(e){return a("el-option",{key:e.employee_id,attrs:{label:e.employee_name,value:e.employee_id}})}))],2)],1),a("el-form-item",{staticClass:"search-style search",attrs:{size:"mini"}},[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){return e.onSearch("filterFormRef")}}},[e._v("查询")]),a("el-button",{attrs:{plain:"",size:"mini"},on:{click:e.onReset}},[e._v("重置")])],1)],1)],1),1==e.authority.b_export&&e.listShow?a("div",{staticClass:"add_delet"},[a("el-dropdown",{attrs:{placement:"bottom-start"}},[a("span",{staticStyle:{cursor:"pointer",color:"#4e90e2"},attrs:{"split-button":""}},[a("el-button",{attrs:{plain:"",icon:"iconfont icon-daochu10",size:"mini"}},[e._v("导出")])],1),a("el-dropdown-menu",{staticStyle:{"margin-top":"10px"},attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{nativeOn:{click:function(t){return e.exportOrder(1)}}},[e._v("导出Excel文件")]),a("el-dropdown-item",{nativeOn:{click:function(t){return e.exportOrder(2)}}},[e._v("导出CSV逗号分隔")])],1)],1)],1):e._e(),e.listShow?a("div",{staticClass:"table_container"},[a("el-table",{staticStyle:{width:"100%"},attrs:{"highlight-current-row":!0,"tooltip-effect":"light",border:"",data:e.TableData.tableData,"max-height":e.tableHeight}},[a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"company_name",label:"财务组织"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"customer_name",label:"客户名称"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"employee_name",label:"业务员"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"early_stage",label:"期初余额",align:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e._f("priceFormatNone")(t.row.early_stage))+" ")]}}],null,!1,3097628760)}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"receivable_price",label:"应收款",align:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e._f("priceFormatNone")(t.row.receivable_price))+" ")]}}],null,!1,1764993974)}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"receipt_price",label:"收款",align:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e._f("priceFormatNone")(t.row.receipt_price))+" ")]}}],null,!1,1801758958)}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"terminal",label:"期末余额",align:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e._f("priceFormatNone")(t.row.terminal))+" ")]}}],null,!1,2701528036)})],1),a("div",{staticClass:"table_info"},[a("el-row",{staticClass:"row-bg",attrs:{type:"flex"}},[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"report_row"},[e._v("本页期末合计："+e._s(e._f("priceFormatNone")(e.TableData.allList?e.TableData.allList.perpage_terminal:0)))])]),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"textAr"},[e._v("期末总合计："+e._s(e._f("priceFormatNone")(e.all_terminal)))])])],1),a("el-row",{staticClass:"row-bg",attrs:{type:"flex"}},[a("el-col",{attrs:{span:12}},[a("div",[e._v("生成时间："+e._s(e.TableData.allList?e.TableData.allList.time:""))])]),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"textAr"},[e._v("制表人："+e._s(e.TableData.allList?e.TableData.allList.name:""))])])],1),a("el-row",{staticClass:"row-bg report_row",attrs:{type:"flex"}},[a("el-col",{attrs:{span:12}},[a("div",[e._v("审核日期起始:"+e._s(this.params.start_time))])]),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"textAr"},[e._v("审核日期截止:"+e._s(this.params.end_time))])])],1)],1),a("div",{staticClass:"page_container"},[a("div",{staticClass:"pageNumber"},[e._v("每页显示")]),a("el-pagination",{staticClass:"erp-pagination",attrs:{"current-page":e.goPage,"page-size":e.pageSize1,"page-sizes":e.per_page,layout:"total,sizes, prev, pager, next,jumper",prevText:"上一页",nextText:"下一页",total:e.TableData.total},on:{"size-change":e.handleSizeChange,"update:currentPage":function(t){e.goPage=t},"update:current-page":function(t){e.goPage=t},"current-change":e.handleCurrentChange}})],1)],1):e._e()])},r=[],i=a("ade3"),o=(a("a9e3"),a("65b0")),n={name:"customeAccountlog",data:function(){return{authority:{},params:{},all_terminal:"正在计算中...",timeValue2:[],searchParams:{},listShow:!1,timeValue:[],exportType:null,TableData:{allList:{},tableData:[]},companyList:[],goPage:1,pageSize:30,per_page:[30,50,100,500],loading:!1,tableHeight:600}},methods:(l={handleSizeChange:function(e){Object.assign(this.searchParams.params,{per_page:e,page:1}),Object(o["g"])(this.searchParams,2)},handleCurrentChange:function(e){Object.assign(this.searchParams.params,{page:e}),Object(o["g"])(this.searchParams,2)},companyChange:function(){this.params.employee_id=""},exportOrder:function(e){var t=Object.assign({},this.params,{export_type:e}),a={params:t,API:"exportCustomerContactsListUrl"};Object(o["d"])(a)},change:function(e){this.params.start_time=e[0],this.params.end_time=e[1]},onReset:function(){var e=this;this.timeValue=[],this.timeValue2=[],this.params={},this.companyList=[{company_id:Number(localStorage.company_id),company_name:localStorage.company_name}],this.$set(this,"params",{company_id:Number(localStorage.company_id)}),this.$set(this,"searchParams",{params:this.params,TableData:this.TableData,API:"getCustomerContactsList",vm:this}),Object(o["g"])(this.searchParams,2,(function(){e.$set(e,"all_terminal","正在计算中..."),e.$axios({method:"get",url:e.$api.getCustomerDealingsListv2,params:Object.assign({},e.params)}).then((function(t){var a=t.data;200==a.code&&e.$set(e,"all_terminal",a.data.desc.all_terminal)}))}))},onSearch:function(e){var t=this;this.$refs[e].validate((function(e){e&&(t.listShow=!0,t.timeValue&&2==t.timeValue.length?(t.params.start_time=t.timeValue[0],t.params.end_time=t.timeValue[1]):t.params.start_time=t.params.end_time="",t.timeValue2&&2==t.timeValue2.length?(t.params.business_start_time=t.timeValue2[0],t.params.business_end_time=t.timeValue2[1]):t.params.business_start_time=t.params.business_end_time="",t.$set(t,"searchParams",{params:Object.assign({},t.params,{page:1}),TableData:t.TableData,API:"getCustomerContactsList",vm:t}),Object(o["g"])(t.searchParams,2,(function(){t.$set(t,"all_terminal","正在计算中..."),t.$axios({method:"get",url:t.$api.getCustomerDealingsListv2,params:Object.assign({},t.params)}).then((function(e){var a=e.data;200==a.code&&t.$set(t,"all_terminal",a.data.desc.all_terminal)}))})))}))}},Object(i["a"])(l,"companyChange",(function(e){var t={type:2,company_name:e};this.$set(this.params,"employee_id",""),Object(o["k"])(this,t)})),Object(i["a"])(l,"getCompany",(function(){var e={type:2,company_name:null};Object(o["k"])(this,e)})),l),mounted:function(){this.companyList=[{company_id:Number(localStorage.company_id),company_name:localStorage.company_name}],this.$set(this,"params",{company_id:Number(localStorage.company_id)}),this.authority=JSON.parse(localStorage.getItem("authority")),o["o"].bind(this)(),window.onresize=o["o"].bind(this)}},c=n,m=a("2877"),p=Object(m["a"])(c,s,r,!1,null,null,null);t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d225661.2ffc9c50.js.map