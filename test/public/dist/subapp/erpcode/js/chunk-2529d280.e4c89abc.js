(window["webpackJsonp_erpcode"]=window["webpackJsonp_erpcode"]||[]).push([["chunk-2529d280"],{2834:function(e,t,a){"use strict";a("792d")},5571:function(e,t,a){"use strict";a("a00a")},"792d":function(e,t,a){},"7afe":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{attrs:{id:"leixin"}},[a("div",{staticClass:"search_container"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.params}},[a("el-form-item",{attrs:{label:"销售组织",size:"mini"}},[a("el-select",{attrs:{clearable:"",placeholder:"请选择",filterable:""},on:{focus:e.companyListInvok,change:e.companyChange},model:{value:e.params.company_id,callback:function(t){e.$set(e.params,"company_id",t)},expression:"params.company_id"}},e._l(e.companyList,(function(t){return a("el-option",{key:t.company_id,attrs:{label:t.company_name,value:t.company_id}},[a("span",{class:1==t.type?"optionStyle":""},[e._v(e._s(t.company_name))])])})),1)],1),a("el-form-item",{attrs:{label:"业务日期",size:"mini"}},[a("el-date-picker",{attrs:{type:"daterange","range-separator":"-","value-format":"yyyy-MM-dd","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.timeValue,callback:function(t){e.timeValue=t},expression:"timeValue"}})],1),a("el-form-item",{attrs:{label:"商品名称",size:"mini"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.params.goods_name,callback:function(t){e.$set(e.params,"goods_name",t)},expression:"params.goods_name"}})],1),a("el-form-item",{attrs:{label:"入库单据号",size:"mini"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.params.instorage_sn,callback:function(t){e.$set(e.params,"instorage_sn",t)},expression:"params.instorage_sn"}})],1),a("el-form-item",{attrs:{label:"客户名称",size:"mini"}},[a("el-select",{attrs:{clearable:"",filterable:"",placeholder:"请输入",loading:e.loading,remote:"","remote-method":e.clienteleListInvok},on:{change:e.customerListChange,focus:e.clienteleListInvok},model:{value:e.params.customer_id,callback:function(t){e.$set(e.params,"customer_id",t)},expression:"params.customer_id"}},[a("ul",{staticClass:"customer customer-ul4 customer-ul2"},[a("li",[e._v("客户编号")]),a("li",[e._v("客户名称")]),a("li",[e._v("联系人")]),a("li",[e._v("联系电话")]),a("li",[e._v("区域")])]),e._l(e.customerList,(function(t){return a("el-option",{key:t.customer_id,attrs:{label:t.customer_name,value:t.customer_id}},[a("ul",{staticClass:"customer customer-ul4"},[a("li",{attrs:{title:t.customer_id}},[e._v(e._s(t.customer_id))]),a("li",{attrs:{title:t.customer_name}},[e._v(e._s(t.customer_name))]),a("li",{attrs:{title:t.contact_name}},[e._v(e._s(t.contact_name))]),a("li",{attrs:{title:t.customer_mobile}},[e._v(e._s(t.customer_mobile))]),a("li",[e._v(e._s(t.province_name)+"/"+e._s(t.city_name)+"/"+e._s(t.area_name))])])])}))],2)],1),a("el-form-item",{attrs:{label:"审核状态",size:"mini"}},[a("el-select",{attrs:{clearable:""},model:{value:e.params.auditor_status,callback:function(t){e.$set(e.params,"auditor_status",t)},expression:"params.auditor_status"}},[a("el-option",{attrs:{label:"全部",value:0}},[e._v("全部")]),a("el-option",{attrs:{label:"未审核",value:1}},[e._v("未审核")]),a("el-option",{attrs:{label:"已审核",value:2}},[e._v("已审核")]),a("el-option",{attrs:{label:"作废",value:3}},[e._v("作废")])],1)],1),a("el-form-item",{attrs:{label:"仓库",size:"mini"}},[a("el-select",{attrs:{clearable:"",placeholder:"请选择"},on:{focus:e.warehouseInvok,change:e.allocation},model:{value:e.params.warehouse_id,callback:function(t){e.$set(e.params,"warehouse_id",t)},expression:"params.warehouse_id"}},e._l(e.warehouseList,(function(e){return a("el-option",{key:e.warehouse_id,attrs:{label:e.warehouse_name,value:e.warehouse_id}})})),1)],1),a("el-form-item",{attrs:{label:"货位",size:"mini"}},[a("el-select",{staticClass:"el_slect",attrs:{clearable:"",placeholder:"请选择",size:"mini"},on:{change:e.allocationChange,focus:e.InventoryInvok},model:{value:e.params.allocation_id,callback:function(t){e.$set(e.params,"allocation_id",t)},expression:"params.allocation_id"}},e._l(e.allocationInventoryList,(function(e){return a("el-option",{key:e.allocation_id,attrs:{label:e.allocation_name,value:e.allocation_id}})})),1)],1),a("el-form-item",{attrs:{label:"部门",size:"mini"}},[a("el-select",{attrs:{clearable:"",placeholder:"请选择",filterable:""},on:{change:e.departmentChange,focus:e.DepartmentListInvok},model:{value:e.params.department_id,callback:function(t){e.$set(e.params,"department_id",t)},expression:"params.department_id"}},e._l(e.departmentList,(function(e){return a("el-option",{key:e.department_id,attrs:{label:e.department_name,value:e.department_id}})})),1)],1),a("el-form-item",{attrs:{label:"返胎登记单号",size:"mini"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.params.register_sn,callback:function(t){e.$set(e.params,"register_sn",t)},expression:"params.register_sn"}})],1),a("el-form-item",{staticClass:"search-style search",attrs:{size:"mini"}},[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:e.onSearch}},[e._v("查询")]),a("el-button",{attrs:{plain:"",size:"mini"},on:{click:e.onReset}},[e._v("重置")])],1)],1)],1),a("div",{staticClass:"add_delet"},[1==e.authority.b_add?a("el-button",{staticClass:"addBtn",attrs:{icon:"el-icon-circle-plus-outline",type:"primary",size:"mini"},on:{click:e.salesAddF}},[e._v("新增")]):e._e(),1==e.authority.b_del?a("el-button",{attrs:{plain:"",icon:"el-icon-delete",size:"mini"},on:{click:e.deletes}},[e._v("删除")]):e._e(),1==e.authority.b_pass?a("el-button",{attrs:{icon:"iconfont icon-pass",type:"primary",size:"mini"},on:{click:e.examineFun}},[e._v("审核")]):e._e(),1==e.authority.b_nopass?a("el-button",{staticClass:"addBtn",attrs:{plain:"",icon:"iconfont icon-fanshenhe",size:"mini"},on:{click:e.examineFunF}},[e._v("弃审")]):e._e(),1==e.authority.b_invalid?a("el-button",{attrs:{plain:"",icon:"iconfont icon-zuofei",size:"mini"},on:{click:e.abolishFun}},[e._v("作废")]):e._e()],1),a("div",{staticClass:"table_container"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading1,expression:"loading1"}],staticStyle:{width:"100%"},attrs:{"highlight-current-row":!0,"tooltip-effect":"light",border:"",data:e.TableData.tableData,"max-height":"600"},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{"show-overflow-tooltip":!0,type:"selection",fixed:"left",align:"center",width:"44"}}),a("el-table-column",{attrs:{label:"操作",fixed:"right",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return["1"==t.row.auditor_status&&1==e.authority.b_edit?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.handleEdit(t,t.row)}}},[e._v("修改")]):a("el-button",{attrs:{disabled:"",type:"text",size:"small"}},[e._v("修改")]),1==e.authority.b_info?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.seeDetail(t.row)}}},[e._v("查看")]):e._e(),1==t.row.auditor_status&&1==e.authority.b_add?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.untilDetail(t,t.row)}}},[e._v("胎号录入")]):a("el-button",{attrs:{disabled:"",type:"text",size:"small"}},[e._v("胎号录入")])]}}])}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"company_name",width:"150",label:"销售组织"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"instorage_sn",width:"180",label:"入库单据号"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"customer_name",width:"120",label:"客户名称"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"brand_name",width:"150",label:"品牌名称"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"goods_id",width:"150",label:"商品编号"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"goods_name","min-width":"500",label:"商品名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("pre",[e._v(e._s(t.row.goods_name))])]}}])}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"goods_num",width:"150",label:"返胎数量"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"tire_num",width:"160",label:"胎号数量"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"warehouse_name",width:"132",label:"仓库名称"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"allocation_name",width:"150",label:"货位名称"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"business_time",width:"150",label:"业务日期"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"add_time",width:"100",label:"单据时间"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"auditor_time",width:"160",label:"审核时间"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"auditor_status_name",width:"80",label:"审核状态"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"auditor_name",width:"100",label:"审核人"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"add_user_name",width:"100",label:"操作员"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"department_name",width:"100",label:"部门"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"register_sn",width:"150",label:"返胎登记单号"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"remark",width:"180",label:"备注"}})],1)],1),a("div",{staticClass:"page_container"},[a("div",{staticClass:"pageNumber"},[e._v("每页显示")]),a("el-pagination",{staticClass:"erp-pagination",attrs:{"current-page":e.goPage,"page-size":e.pageSize1,"page-sizes":e.per_page,layout:"total,sizes, prev, pager, next,jumper",prevText:"上一页",nextText:"下一页",total:e.TableData.total},on:{"size-change":e.handleSizeChange,"update:currentPage":function(t){e.goPage=t},"update:current-page":function(t){e.goPage=t},"current-change":e.handleCurrentChange}})],1)]),e.dialogFormVisible?a("div",[a("el-dialog",{attrs:{"close-on-click-modal":!1,title:"胎号录入",visible:e.dialogFormVisible,width:"900px"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"ruleForm",staticClass:"dialog-see",attrs:{inline:!0,model:e.add}},[a("el-form-item",{staticClass:"hidden",attrs:{label:"销售组织："}},[a("span",[e._v(e._s(e.add.company_name))])]),a("el-form-item",{attrs:{label:"返胎入库单据号：","label-width":"105px"}},[e._v(e._s(e.add.instorage_sn))]),a("el-form-item",{staticClass:"hidden ys",attrs:{label:"客户名称："}},[a("span",[e._v(e._s(e.add.customer_name))])]),a("el-form-item",{staticClass:"hidden",attrs:{label:"品牌名称："}},[a("span",[e._v(e._s(e.add.brand_name))])]),a("el-form-item",{staticClass:"hidden",attrs:{label:"商品编号："}},[a("span",[e._v(e._s(e.add.goods_id))])]),a("el-form-item",{staticClass:"hidden",attrs:{label:"商品名称："}},[a("span",[e._v(e._s(e.add.goods_name))])]),a("el-form-item",{staticClass:"hidden",attrs:{label:"部 门："}},[a("span",[e._v(e._s(e.add.department_name))])])],1),a("span",{staticStyle:{width:"100%",height:"1px",background:"#666",display:"block","margin-bottom":"20px"}}),a("el-form",{attrs:{inline:!0}},[a("el-row",[a("h3",{staticStyle:{"margin-bottom":"20px"}},[e._v("胎号录入")])]),a("el-row",e._l(e.add.tire_json,(function(t,i){return a("el-form-item",{key:t.id,staticStyle:{width:"320px"},attrs:{label:"胎号"+(Number(i)+1)}},[a("el-input",{staticStyle:{width:"160px"},attrs:{placeholder:"请输入"},on:{input:function(a){return e.checkTire(t)}},model:{value:t.tire_un,callback:function(a){e.$set(t,"tire_un","string"===typeof a?a.trim():a)},expression:"item.tire_un"}}),a("span",{style:{color:"匹配"===t.check_status?"green":"red"}},[e._v(e._s(t.check_status))])],1)})),1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.clearAdd}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.Sure}},[e._v("确 定")])],1)],1)],1):e._e(),e.dialogFormVisibleSee?a("div",[a("el-dialog",{staticClass:"threein_index",attrs:{"close-on-click-modal":!1,title:"胎号查看",visible:e.dialogFormVisibleSee,width:"900px"},on:{"update:visible":function(t){e.dialogFormVisibleSee=t}}},[a("el-form",{ref:"ruleForm",staticClass:"dialog-see",attrs:{inline:!0,model:e.GoodsTire}},[a("el-form-item",{attrs:{label:"销售组织:"}},[e._v(e._s(e.GoodsTire.company_name))]),a("el-form-item",{attrs:{label:"返胎入库单据号:"}},[e._v(e._s(e.GoodsTire.instorage_sn))]),a("el-form-item",{attrs:{label:"客户名称:"}},[e._v(e._s(e.GoodsTire.customer_name))]),a("el-form-item",{attrs:{label:"品牌名称:"}},[e._v(e._s(e.GoodsTire.brand_name))]),a("el-form-item",{attrs:{label:"商品编号:"}},[e._v(e._s(e.GoodsTire.goods_id))]),a("el-form-item",{attrs:{label:"商品名称:"}},[e._v(e._s(e.GoodsTire.goods_name))]),a("el-form-item",{attrs:{label:"部 门:"}},[e._v(e._s(e.GoodsTire.department_name))])],1),a("span",{staticStyle:{width:"100%",height:"1px",background:"#666",display:"block","margin-bottom":"20px"}}),a("el-table",{staticStyle:{width:"100%"},attrs:{"highlight-current-row":!0,"tooltip-effect":"light",border:"",data:e.GoodsTire.tire_list,"max-height":"600"}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"60"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"tire_un",label:"胎号","min-width":"100"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"check_status",label:"校验状态"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"outstock_sn",label:"销售出库单据号"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("a",{attrs:{href:"javascript:;"},on:{click:function(a){return e.goSaleputSee(t.row)}}},[e._v(e._s(t.row.outstock_sn))])]}}],null,!1,609526300)}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"unit_price",label:"原销售价"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"discount",label:"原折后价"}})],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisibleSee=!1}}},[e._v("关 闭")])],1)],1)],1):e._e(),e.dialogFormVisibleChange?a("div",{staticClass:"wxy"},[a("el-dialog",{attrs:{"close-on-click-modal":!1,title:"修改三包登记信息",visible:e.dialogFormVisibleChange,width:"700px"},on:{"update:visible":function(t){e.dialogFormVisibleChange=t}}},[a("div",{staticClass:"search_container"},[a("div",[e._v("返胎登记单据号:"+e._s(e.paramsChange.instorage_sn))]),a("div",{staticStyle:{width:"100%",margin:"10px 0"}},[a("span",{staticStyle:{width:"33.3%",display:"inline-block"}},[e._v("销售组织:"+e._s(e.paramsChange.company_name))]),a("span",{staticStyle:{width:"33.3%",display:"inline-block"}},[e._v("客户名称:"+e._s(e.paramsChange.customer_name))]),a("span",{staticStyle:{width:"33.3%",display:"inline-block"}},[e._v("部门:"+e._s(e.paramsChange.department_name))])])]),a("div",{staticClass:"table_container"},[a("div",[a("div",{staticClass:"headerC linHt50",staticStyle:{width:"680px",border:"1px solid #edf0f9",margin:"0"}},[a("h3",{staticStyle:{"text-align":"center",background:"#6aa8f3",color:"#fff","font-size":"16px","font-weight":"200",height:"40px","line-height":"40px"}},[e._v("三包登记信息修改")]),a("div",{staticClass:"line_99 clearfix"},[a("div",{staticClass:"seeInfoLeft"},[e._v("品牌名称")]),a("div",{staticClass:"seeInfoRight"},[e._v(e._s(e.paramsChange.brand_name))])]),a("div",{staticClass:"line_99 clearfix"},[a("div",{staticClass:"seeInfoLeft"},[e._v("商品编号")]),a("div",{staticClass:"seeInfoRight"},[e._v(e._s(e.paramsChange.goods_id))])]),a("div",{staticClass:"line_99 clearfix"},[a("div",{staticClass:"seeInfoLeft"},[e._v("商品名称")]),a("div",{staticClass:"seeInfoRight"},[e._v(e._s(e.paramsChange.goods_name))])]),a("div",{staticClass:"line_99 clearfix"},[a("div",{staticClass:"seeInfoLeft"},[e._v("返胎数量")]),a("div",{staticClass:"seeInfoRight"},[e._v(e._s(e.paramsChange.goods_num))])]),a("div",{staticClass:"line_99 clearfix"},[a("div",{staticClass:"seeInfoLeft"},[e._v("返胎类型")]),a("div",{staticClass:"seeInfoRight"},[1==e.paramsChange.return_type?a("span",[e._v("返新胎类型")]):a("span",[e._v("返旧胎类型")])])]),a("div",{staticClass:"line_99 clearfix"},[a("div",{staticClass:"seeInfoLeft"},[e._v("仓库名称")]),a("div",{staticClass:"seeInfoRight"},[a("el-select",{staticStyle:{width:"300px"},attrs:{filterable:"",placeholder:"请选择",clearable:""},on:{focus:function(t){return e.warehouseInvok(e.paramsChange)},change:e.changeAll},model:{value:e.paramsChange.warehouse_id,callback:function(t){e.$set(e.paramsChange,"warehouse_id",t)},expression:"paramsChange.warehouse_id"}},e._l(e.warehouseList,(function(e){return a("el-option",{key:e.warehouse_id,attrs:{label:e.warehouse_name,value:e.warehouse_id}})})),1)],1)]),a("div",{staticClass:"line_99 clearfix"},[a("div",{staticClass:"seeInfoLeft"},[e._v("货位名称")]),a("div",{staticClass:"seeInfoRight"},[a("el-select",{staticClass:"el_slect",staticStyle:{width:"300px"},attrs:{placeholder:"请选择",size:"mini",clearable:""},on:{focus:function(t){return e.InventoryInvok(e.paramsChange)}},model:{value:e.paramsChange.allocation_id,callback:function(t){e.$set(e.paramsChange,"allocation_id",t)},expression:"paramsChange.allocation_id"}},e._l(e.allocationInventoryList,(function(e){return a("el-option",{key:e.allocation_id,attrs:{label:e.allocation_name,value:e.allocation_id}})})),1)],1)]),a("div",{staticClass:"line_99 clearfix"},[a("div",{staticClass:"seeInfoLeft"},[e._v("业务日期")]),a("div",{staticClass:"seeInfoRight"},[a("el-date-picker",{staticStyle:{width:"300px"},attrs:{type:"date",placeholder:"选择日期","range-separator":"-","value-format":"yyyy-MM-dd"},model:{value:e.paramsChange.business_time,callback:function(t){e.$set(e.paramsChange,"business_time",t)},expression:"paramsChange.business_time"}})],1)]),a("div",{staticClass:"line_99 clearfix"},[a("div",{staticClass:"seeInfoLeft",staticStyle:{height:"80px"}},[e._v("备注：")]),a("div",{staticClass:"seeInfoRight",staticStyle:{height:"80px","overflow-x":"scroll","line-height":"22px"}},[a("el-input",{staticStyle:{width:"300px","margin-top":"5px"},attrs:{type:"text",maxlength:"100",placeholder:"请输入"},model:{value:e.paramsChange.remark,callback:function(t){e.$set(e.paramsChange,"remark","string"===typeof t?t.trim():t)},expression:"paramsChange.remark"}})],1)])]),a("el-row",{staticStyle:{width:"690px",margin:"30px 0 0"},attrs:{type:"flex",justify:"center"}},[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple-light"},[a("el-button",{attrs:{plain:"",size:"mini"},on:{click:function(t){e.dialogFormVisibleChange=!1}}},[e._v("取消")])],1)]),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.submitChange}},[e._v("保存")])],1)])],1)],1)])])],1):e._e()])},s=[],o=a("b85c"),l=a("5530"),n=(a("4de4"),a("d3b7"),a("e9c4"),a("a15b"),a("99af"),a("2f62")),r=a("c9b7"),c=a("65b0"),d={name:"aftersaleThreeinIndex",data:function(){return{add:{tire_json:[]},paramsChange:{},GoodsTire:{},dialogFormVisibleChange:!1,dialogFormVisibleSee:!1,companyList:[],companys:{options:[]},goodsList:[],SelesTomer:{options:[]},params:{auditor_status:0},searchParams:{},dialogFormVisible:!1}},computed:Object(l["a"])({},Object(n["c"])(["threeinIndex_Get"])),methods:Object(l["a"])(Object(l["a"])({},Object(n["b"])(["threeinIndex","threeinExamine","threeinAdd"])),{},{change:function(e){this.$forceUpdate()},departmentChange:function(e){e&&(this.params.department_name=this.departmentList.filter((function(t){return t.department_id===e}))[0].department_name)},checkTire:Object(r["a"])((function(e){e.tire_un&&this.$axios({method:"get",url:"v2/open/Tire/getTireMatchStatus",params:{type:7,goods_id:this.add.goods_id,tire_un:e.tire_un,company_id:this.add.company_id}}).then((function(t){var a=t.data;200===a.code&&a.data&&a.data.tire_id?e.check_status="匹配":e.check_status="不匹配",console.log(a)}))}),500),changeAll:function(e){this.$set(this.paramsChange,"allocation_id","")},goSaleputSee:function(e){this.$router.push({path:"/sales/salesout/salesamend",query:{id:e.outstock_id,printSstatus:e.after_auditor_print_status}})},clearAdd:function(){this.$set(this,"add",{tire_json:[]}),this.dialogFormVisible=!1},submitChange:function(){var e=this;this.$baseData.checkCarDoctor({company_id:this.paramsChange.company_id,company_name:this.paramsChange.company_name,bill_type:8,bill_id:this.paramsChange.instorage_id,operation_type:2,goods_info:JSON.stringify([{warehouse_id:this.paramsChange.warehouse_id,warehouse_name:this.paramsChange.warehouse_name}])}).then((function(){e.$axMethod.editInStorage(e.paramsChange).then((function(t){200==t.data.code&&e.$message({message:t.data.msg?t.data.msg:t.data.data,type:"success"}),e.dialogFormVisibleChange=!1,Object(c["g"])(e.searchParams)}))}))},Sure:function(){for(var e=this,t=0;t<this.add.tire_json.length;t++)if(!this.add.tire_json[t].tire_un)return this.$message({message:"胎号需全部录入",type:"warning"}),!1;var a={instorage_goods_id:this.add.instorage_goods_id,goods_id:this.add.goods_id,goods_sn:this.add.goods_sn,tire_json:JSON.stringify(this.add.tire_json)};this.$axMethod.addGoodsTire(a).then((function(t){200==t.data.code&&(e.$message({message:t.data.msg?t.data.msg:t.data.data,type:"success"}),Object(c["g"])(e.searchParams))})),this.dialogFormVisible=!1,Object(c["g"])(this.searchParams)},untilDetail:function(e,t){var a=this;this.$axMethod.getGoodsTire({instorage_goods_id:t.instorage_goods_id}).then((function(e){var i=e.data.data;i.instorage_goods_id=t.instorage_goods_id,i.tire_json=[];var s,l=Object(o["a"])(i.tire_list);try{for(l.s();!(s=l.n()).done;){var n=s.value;i.tire_json.push({tire_un:n.tire_un,check_status:n.check_status})}}catch(c){l.e(c)}finally{l.f()}if(!i.tire_json.length)for(var r=1;r<=t.goods_num;r++)i.tire_json.push({tire_un:"",check_status:""});a.add=i,a.dialogFormVisible=!0}))},seeDetail:function(e){var t=this;this.$axMethod.getGoodsTire({instorage_goods_id:e.instorage_goods_id}).then((function(e){t.GoodsTire=e.data.data})),this.dialogFormVisibleSee=!0},companyChange:function(e){e&&(this.params.company_name=this.companyList.filter((function(t){return t.company_id===e}))[0].company_name),this.$set(this.params,"warehouse_id",""),this.$set(this.params,"department_id",""),this.$set(this.params,"customer_id",""),this.$set(this.params,"allocation_id","")},customerListChange:function(e){e&&(this.params.customer_name=this.customerList.filter((function(t){return t.customer_id===e}))[0].customer_name)},allocationChange:function(e){e&&(this.params.allocation_name=this.allocationInventoryList.filter((function(t){return t.allocation_id==e}))[0].allocation_name)},allocation:function(e){this.$set(this.params,"allocation_id",""),e&&(this.params.warehouse_name=this.warehouseList.filter((function(t){return t.warehouse_id===e}))[0].warehouse_name)},handleEdit:function(e,t){var a=this;if(t&&1==t.is_execute)return this.$message.error("wms系统正在操作此单据，暂不支持单据修改"),!1;this.dialogFormVisibleChange=!0,this.$axMethod.getInStorageInfo({instorage_goods_id:t.instorage_goods_id,goPage:this.goPage,pageSize:this.pageSize}).then((function(e){a.paramsChange=e.data.data,Object(c["l"])(a,a.paramsChange)}))},examineFun:function(){var e=this;if(this.multipleSelection.length<1)return this.$message({message:"请选择需要审核的信息",type:"warning"}),!1;for(var t=[],a=[],i=0;i<this.multipleSelection.length;i++)t.push(this.multipleSelection[i].instorage_goods_id),a.push(this.multipleSelection[i].instorage_id);var s=t.toString(),o={examineID:"instorage_goods_id",eachData:{instorage_goods_id:s},examineApi:"auditorPass",list:{UrlApi:"getInStorageList",data:this.TableData,esData:{}}};this.$baseData.checkCarDoctor({bill_type:8,bill_id:a.join(","),operation_type:4}).then((function(){e.$common.examineFun(o)}))},examineFunF:function(){var e=this;if(this.multipleSelection.length<1)return this.$message({message:"请选择需要审核的信息",type:"warning"}),!1;for(var t=[],a=[],i=0;i<this.multipleSelection.length;i++)t.push(this.multipleSelection[i].instorage_goods_id),a.push(this.multipleSelection[i].instorage_id);var s=t.toString(),o={instorage_goods_id:s};this.$baseData.checkCarDoctor({bill_type:8,bill_id:a.join(","),operation_type:5}).then((function(){e.$axMethod.returnAuditorPass(o).then((function(t){200==t.data.code&&(e.$message({message:t.data.data,type:"success"}),e.$common.initData("getInStorageList",e.TableData))}))}))},abolishFun:function(){var e=this;if(this.multipleSelection.length<1)return this.$message({message:"请选择需要作废的信息",type:"warning"}),!1;for(var t=[],a=[],i=0;i<this.multipleSelection.length;i++)t.push(this.multipleSelection[i].instorage_goods_id),a.push(this.multipleSelection[i].instorage_id);var s=t.toString(),o={examineID:"instorage_goods_id",eachData:{instorage_goods_id:s},examineApi:"auditorInvalid",list:{UrlApi:"getInStorageList",data:this.TableData,esData:{}}};this.$baseData.checkCarDoctor({bill_type:8,bill_id:a.join(","),operation_type:6}).then((function(){e.$common.examineFun(o)}))},handleSelectionChange:function(e){this.multipleSelection=e},salesAddF:function(){this.timeValue&&2==this.timeValue.length&&(this.params.start_time=this.timeValue[0],this.params.end_time=this.timeValue[1]),this.$router.push({path:"/aftersale/threein/threein_Add"}),this.threeinAdd({goPage:this.goPage,pageSize:this.pageSize,params:this.params})},onReset:function(){this.$set(this,"params",{}),this.timeValue=[],this.$set(this,"searchParams",{params:{},TableData:this.TableData,API:"getInStorageList",vm:this}),Object(c["g"])(this.searchParams),this.threeinIndex({params:{},goPage:this.goPage,pageSize:this.pageSize})},onSearch:function(){this.timeValue&&2==this.timeValue.length?(this.params.start_time=this.timeValue[0],this.params.end_time=this.timeValue[1]):this.params.start_time=this.params.end_time="",Object.assign(this.searchParams.params,this.params,{page:this.goPage}),Object(c["g"])(this.searchParams),this.threeinIndex({params:this.params,goPage:this.goPage,pageSize:this.pageSize})},deletes:function(){var e=this;if(this.multipleSelection.length<1)return this.$message({message:"请选择需要删除的信息",type:"warning"}),!1;for(var t=[],a=[],i=0;i<this.multipleSelection.length;i++)t.push(this.multipleSelection[i].instorage_goods_id),a.push(this.multipleSelection[i].instorage_id);this.$baseData.checkCarDoctor({bill_type:8,bill_id:a.join(","),operation_type:3}).then((function(){var t={deleID:"instorage_goods_id",deleSelect:e.multipleSelection,deleApi:"delInStorage",list:{UrlApi:"getInStorageList",data:e.TableData,esData:Object.assign({},e.params)}};e.$common.deletes(t,"删除",e)}))}}),mounted:function(){var e={};if(this.threeinIndex_Get&&this.threeinIndex_Get.params){if(this.threeinIndex_Get.params.start_time){var t=this.threeinIndex_Get.params,a=t.start_time,i=t.end_time;this.timeValue=this.timeValue.concat([a,i])}this.$set(this,"params",this.threeinIndex_Get.params),e=this.params,Object(c["l"])(this,this.threeinIndex_Get.params)}this.threeinIndex_Get&&this.threeinIndex_Get.goPage&&(this.params.page=this.threeinIndex_Get.goPage,this.params.per_page=this.threeinIndex_Get.pageSize),this.$set(this,"searchParams",{params:e,TableData:this.TableData,API:"getInStorageList",vm:this}),Object(c["g"])(this.searchParams)}},m=d,h=(a("2834"),a("5571"),a("2877")),p=Object(h["a"])(m,i,s,!1,null,"375f816b",null);t["default"]=p.exports},a00a:function(e,t,a){}}]);
//# sourceMappingURL=chunk-2529d280.e4c89abc.js.map