(window["webpackJsonp_erpcode"]=window["webpackJsonp_erpcode"]||[]).push([["chunk-405b413a"],{b680:function(e,t,a){"use strict";var i=a("23e7"),r=a("da84"),n=a("e330"),o=a("5926"),l=a("408a"),s=a("1148"),c=a("d039"),m=r.RangeError,d=r.String,p=Math.floor,u=n(s),_=n("".slice),f=n(1..toFixed),h=function(e,t,a){return 0===t?a:t%2===1?h(e,t-1,a*e):h(e*e,t/2,a)},v=function(e){var t=0,a=e;while(a>=4096)t+=12,a/=4096;while(a>=2)t+=1,a/=2;return t},b=function(e,t,a){var i=-1,r=a;while(++i<6)r+=t*e[i],e[i]=r%1e7,r=p(r/1e7)},y=function(e,t){var a=6,i=0;while(--a>=0)i+=e[a],e[a]=p(i/t),i=i%t*1e7},g=function(e){var t=6,a="";while(--t>=0)if(""!==a||0===t||0!==e[t]){var i=d(e[t]);a=""===a?i:a+u("0",7-i.length)+i}return a},x=c((function(){return"0.000"!==f(8e-5,3)||"1"!==f(.9,0)||"1.25"!==f(1.255,2)||"1000000000000000128"!==f(0xde0b6b3a7640080,0)}))||!c((function(){f({})}));i({target:"Number",proto:!0,forced:x},{toFixed:function(e){var t,a,i,r,n=l(this),s=o(e),c=[0,0,0,0,0,0],p="",f="0";if(s<0||s>20)throw m("Incorrect fraction digits");if(n!=n)return"NaN";if(n<=-1e21||n>=1e21)return d(n);if(n<0&&(p="-",n=-n),n>1e-21)if(t=v(n*h(2,69,1))-69,a=t<0?n*h(2,-t,1):n/h(2,t,1),a*=4503599627370496,t=52-t,t>0){b(c,0,a),i=s;while(i>=7)b(c,1e7,0),i-=7;b(c,h(10,i,1),0),i=t-1;while(i>=23)y(c,1<<23),i-=23;y(c,1<<i),b(c,1,1),y(c,2),f=g(c)}else b(c,0,a),b(c,1<<-t,0),f=g(c)+u("0",s);return s>0?(r=f.length,f=p+(r<=s?"0."+u("0",s-r)+f:_(f,0,r-s)+"."+_(f,r-s))):f=p+f,f}})},c14a:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"params"},[a("div",{attrs:{id:"leixin"}},[a("div",{staticClass:"search_container"},[a("el-form",{ref:"filterFormRef",staticClass:"demo-form-inline",attrs:{inline:!0,model:e.params}},[a("el-form-item",{attrs:{label:"采购组织",size:"mini"}},[a("erpCompanyList",{attrs:{fatherParams:e.params},on:{change:e.companyChange},model:{value:e.params.company_id,callback:function(t){e.$set(e.params,"company_id",t)},expression:"params.company_id"}})],1),a("el-form-item",{attrs:{label:"业务日期",size:"mini"}},[a("el-date-picker",{attrs:{type:"daterange","range-separator":"-","value-format":"yyyy-MM-dd","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.timeValue,callback:function(t){e.timeValue=t},expression:"timeValue"}})],1),a("el-form-item",{attrs:{label:"单据号",size:"mini"}},[a("el-input",{attrs:{maxlength:"100",placeholder:"请输入"},model:{value:e.params.instorage_sn,callback:function(t){e.$set(e.params,"instorage_sn",t)},expression:"params.instorage_sn"}})],1),a("el-form-item",{attrs:{label:"供应商(厂家)",size:"mini"}},[a("erpSupplier",{attrs:{searchParams:{company_id:e.params.company_id}},model:{value:e.params.supplier_id,callback:function(t){e.$set(e.params,"supplier_id",t)},expression:"params.supplier_id"}})],1),a("el-form-item",{attrs:{label:"采购订单号",size:"mini"}},[a("el-input",{attrs:{maxlength:"100",placeholder:"请输入",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onSearch.apply(null,arguments)}},model:{value:e.params.order_sn,callback:function(t){e.$set(e.params,"order_sn",t)},expression:"params.order_sn"}})],1),a("el-form-item",{attrs:{label:"仓库名称",size:"mini"}},[a("erpWarehouse",{attrs:{searchParams:{company_id:e.params.company_id}},on:{change:function(t){e.params.allocation_id=""}},model:{value:e.params.warehouse_id,callback:function(t){e.$set(e.params,"warehouse_id",t)},expression:"params.warehouse_id"}})],1),a("el-form-item",{attrs:{label:"货位",size:"mini"}},[a("erpAllocation",{attrs:{searchParams:{company_id:e.params.company_id,warehouse_id:e.params.warehouse_id}},model:{value:e.params.allocation_id,callback:function(t){e.$set(e.params,"allocation_id",t)},expression:"params.allocation_id"}})],1),a("el-form-item",{attrs:{label:"商品名称",size:"mini"}},[a("el-input",{attrs:{maxlength:"100",placeholder:"请输入",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onSearch.apply(null,arguments)}},model:{value:e.params.goods_name,callback:function(t){e.$set(e.params,"goods_name",t)},expression:"params.goods_name"}})],1),a("el-form-item",{attrs:{label:"商品编号",size:"mini"}},[a("el-input",{attrs:{maxlength:"100",placeholder:"请输入",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onSearch.apply(null,arguments)}},model:{value:e.params.goods_id,callback:function(t){e.$set(e.params,"goods_id",t)},expression:"params.goods_id"}})],1),a("el-form-item",{attrs:{label:"部门",size:"mini"}},[a("erpDepartment",{attrs:{searchParams:{company_id:e.params.company_id}},model:{value:e.params.department_id,callback:function(t){e.$set(e.params,"department_id",t)},expression:"params.department_id"}})],1),a("el-form-item",{attrs:{label:"采购员",size:"mini"}},[a("erpEmployee",{attrs:{searchParams:{company_id:e.params.company_id}},model:{value:e.params.buyer_id,callback:function(t){e.$set(e.params,"buyer_id",t)},expression:"params.buyer_id"}})],1),a("el-form-item",{attrs:{label:"分摊方式",size:"mini"}},[a("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:e.params.other_price_type,callback:function(t){e.$set(e.params,"other_price_type",t)},expression:"params.other_price_type"}},[a("el-option",{attrs:{label:"不分摊",value:0}},[e._v("不分摊")]),a("el-option",{attrs:{label:"按金额分摊",value:1}},[e._v("按金额分摊")]),a("el-option",{attrs:{label:"按数量分摊",value:2}},[e._v("按数量分摊")])],1)],1),a("el-form-item",{attrs:{label:"付款方式",size:"mini"}},[a("el-select",{attrs:{clearable:"",placeholder:"请选择"},on:{focus:e.receivablesInvok,change:e.receivablesChange},model:{value:e.params.receivables_mode_id,callback:function(t){e.$set(e.params,"receivables_mode_id",t)},expression:"params.receivables_mode_id"}},e._l(e.receivablesList,(function(e){return a("el-option",{key:e.receivables_mode_id,attrs:{label:e.receivables_mode_name,value:e.receivables_mode_id}})})),1)],1),a("el-form-item",{attrs:{label:"厂家发货单号",size:"mini"}},[a("el-input",{attrs:{maxlength:"100",placeholder:"请输入",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onSearch.apply(null,arguments)}},model:{value:e.params.factorysend_sn,callback:function(t){e.$set(e.params,"factorysend_sn",t)},expression:"params.factorysend_sn"}})],1),a("el-form-item",{attrs:{label:"厂家发货日期",size:"mini"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"请选择","value-format":"yyyy-MM-dd"},model:{value:e.params.factorysend_time,callback:function(t){e.$set(e.params,"factorysend_time",t)},expression:"params.factorysend_time"}})],1),a("el-form-item",{attrs:{label:"入库类型",size:"mini",prop:"type",rules:{required:!0}}},[a("el-select",{model:{value:e.params.type,callback:function(t){e.$set(e.params,"type",t)},expression:"params.type"}},[a("el-option",{attrs:{label:"采购入库",value:1}}),a("el-option",{attrs:{label:"采购退货",value:2}})],1)],1),a("el-form-item",{attrs:{label:"开票状态",size:"mini"}},[a("el-select",{attrs:{clearable:""},model:{value:e.params.invoice_status,callback:function(t){e.$set(e.params,"invoice_status",t)},expression:"params.invoice_status"}},[a("el-option",{attrs:{label:"所有状态",value:0}},[e._v("所有状态")]),a("el-option",{attrs:{label:"全部开票",value:2}},[e._v("全部开票")]),a("el-option",{attrs:{label:"部分开票",value:1}},[e._v("部分开票")]),a("el-option",{attrs:{label:"未开票",value:3}},[e._v("未开票")])],1)],1),a("el-form-item",{staticClass:"search-style search",attrs:{size:"mini"}},[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:e.onSearch}},[e._v("查询")]),a("el-button",{attrs:{plain:"",size:"mini"},on:{click:e.onReset}},[e._v("重置")])],1)],1)],1),a("div",{staticClass:"add_delet"},[1===e.editType?a("el-button",{staticClass:"addBtn",attrs:{type:"primary",icon:"el-icon-circle-plus-outline",size:"mini"},on:{click:e.openBill}},[e._v("开票 ")]):e._e(),1!==e.editType?a("el-button",{staticClass:"addBtn",attrs:{icon:"el-icon-circle-plus-outline",size:"mini"},on:{click:e.saveOpenBill}},[e._v("保存 ")]):e._e(),1!==e.editType?a("el-button",{staticClass:"addBtn",attrs:{icon:"el-icon-circle-plus-outline",size:"mini"},on:{click:e.onSearch}},[e._v("取消 ")]):e._e(),1==e.authority.b_export&&1===e.editType?a("el-dropdown",{attrs:{placement:"bottom-start"}},[a("span",{staticStyle:{cursor:"pointer",color:"#4e90e2"},attrs:{"split-button":""}},[a("el-button",{attrs:{plain:"",icon:"iconfont icon-daochu10",size:"mini"}},[e._v("导出")])],1),a("el-dropdown-menu",{staticStyle:{"margin-top":"10px"},attrs:{slot:"dropdown",name:"testflag"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{name:"testflag1"},nativeOn:{click:function(t){return e.exportOrder(1)}}},[e._v("导出Excel文件")]),a("el-dropdown-item",{attrs:{name:"testflag2"},nativeOn:{click:function(t){return e.exportOrder(2)}}},[e._v("导出CSV逗号分隔")])],1)],1):e._e()],1),a("div",{staticClass:"table_container"},[1===e.editType?a("xTable",{key:"0",ref:"xTable",attrs:{ajax:{url:"getPurchaseInvoice",params:e.params},isEdit:e.isEdit,footerMethod:e.footerMethod,tableColumn:e.tableColumn},on:{getData:e.dealData}}):a("xTable",{key:"1",ref:"xTable",attrs:{"edit-rules":e.editRules,editConfig:{mode:"row"},isEdit:e.isEdit,tableColumn:e.tableColumn}})],1)])])},r=[],n=(a("d81d"),a("4de4"),a("d3b7"),a("99af"),a("e9c4"),a("159b"),a("b680"),a("caad"),{company_id:localStorage.getItem("company_id"),company_name:localStorage.getItem("company_name"),type:1,invoice_status:3}),o={instorage_goods_id:"",invoice_amount:"",invoice_num:"",invoice_price:""},l={data:function(){var e=this;return{footerData:{},editRules:{invoice_price:[{required:!0,message:"请输入开票金额"}],invoice_num:[{required:!0,message:"请输入开票号"}],invoice_amount:[{required:!0,message:"开票数量大于等于0",type:"number",min:0}]},tableColumn:[{type:"checkbox",fixed:"left",width:50},{type:"index",title:"序号",width:50},{title:"采购组织",field:"company_name",width:150},{title:"单据号",field:"instorage_sn",width:160},{title:"供应商(厂家)",field:"supplier_name",width:150},{title:"商品编号",field:"goods_id",width:80},{title:"商品名称",field:"goods_name",width:300},{title:"年周批次",field:"batch",width:80},{title:"入库数量",field:"goods_num",headerAlign:"right",align:"right",width:80},{title:"采购价格",field:"purchase_price",headerAlign:"right",align:"right",formatter:"priceFormatNone",width:100},{title:"小计金额",field:"subtotal_price",headerAlign:"right",align:"right",formatter:"priceFormatNone",width:100},{title:"仓库",field:"warehouse_name",width:100},{title:"开票状态",field:"instorage_status",width:100},{title:"发票号",field:"invoice_num",width:100,editRender:{name:"Vinput",autoselect:!0,formatter:"String",events:{change:function(t){var a=t.row,i=t.$rowIndex,r=e.$refs.xTable._proxy("getTableData").fullData;r.forEach((function(e,t){t>i&&e.instorage_sn===a.instorage_sn&&(e.invoice_num=a.invoice_num)}))}}}},{title:"开票数量",field:"invoice_amount",headerAlign:"right",align:"right",width:100,editRender:{name:"number",formatter:"Positive",autoselect:!0,events:{change:function(t){var a=t.row;a.invoice_amount>a.goods_num&&(a.invoice_amount=a.goods_num,a.invoice_price=(a.purchase_price*a.invoice_amount).toFixed(2),e.$message.warning("开票数量必须小于入库数量"))},input:function(e){var t=e.row;isNaN(t.invoice_amount)||(t.invoice_price=(t.purchase_price*t.invoice_amount).toFixed(2))}}}},{title:"开票金额",field:"invoice_price",headerAlign:"right",align:"right",width:100,editRender:{name:"Vinput",autoselect:!0,formatter:"Positive"}},{title:"货位",field:"allocation_name",width:150},{title:"来源单号（采购订单号）",field:"order_sn",width:100},{title:"返利金额",headerAlign:"right",align:"right",field:"rebate_price",width:100},{title:"已退货数量",headerAlign:"right",align:"right",field:"return_goods_num",width:100},{title:"部门",field:"department_name",width:130},{title:"采购员",field:"buyer_name",width:80},{title:"入库类型",field:"type_name",width:80},{title:"业务日期",field:"business_time",width:130},{title:"单据时间",field:"add_time",width:150},{title:"创建人",field:"add_user_name",width:130},{title:"修改人",field:"update_user_name",width:130},{title:"修改时间",field:"update_time",width:150},{title:"审核状态",field:"auditor_status_name",width:130},{title:"审核人",field:"auditor_name",width:130},{title:"审核时间",field:"auditor_time",width:150}]}},methods:{dealData:function(e){this.footerData=e.data.data.desc},footerMethod:function(e){var t=this,a=e.columns,i=e.data;return[a.map((function(e,a){if(1===a)return"页小计";if(["goods_num","subtotal_price"].includes(e.property)){var r=t.$utils.sum(i,e.property);return"subtotal_price"===e.property?t.$publicFution.priceFormatNone(r):t.$publicFution.priceFormatNone(r,0)}return null})),a.map((function(e,a){return 1===a?"合计":"goods_num"===e.property&&t.footerData.total_inventory_num?t.$publicFution.priceFormatNone(t.footerData.total_inventory_num,0):"subtotal_price"===e.property&&t.footerData.total_amount_price?t.$publicFution.priceFormatNone(t.footerData.total_amount_price):null}))]},getTableData:function(e){200===e.data.code&&(this.footerData=e.data.data.desc)},isEdit:function(e){var t=e.row;return t.isEdit}}},s={mixins:[l],name:"purchase/purchaseInvoice",data:function(){return{timeValue:[],editType:1,params:this.$publicFution.deepCopy(n)}},methods:{exportOrder:function(e){var t=this,a=Object.assign(this.params,{export_type:e});this.$axMethod.exportPriceStrategyUrl(a).then((function(e){200==e.data.code&&t.$globalState.print()}))},openBill:function(){var e=this,t=0,a=this.multipleSelection.map((function(e){return e.invoice_amount=e.invoice_amount?e.invoice_amount:e.goods_num,e.invoice_price=e.invoice_price?e.invoice_price:e.subtotal_price,e.isEdit=!0,"全部开票"===e.instorage_status&&t++,"未开票"===e.instorage_status&&(e.invoice_price=e.subtotal_price,e.invoice_amount=e.goods_num),e}));a=a.filter((function(e){return"全部开票"!==e.instorage_status})),0!==a.length?(t&&this.$message.success("已帮您筛掉不可开票的单据"+t+"条!"),this.editType=2,this.$nextTick((function(){e.$refs.xTable._proxy("loadData",a),e.$refs.xTable._proxy("setActiveRow",a[0])})),setTimeout((function(){e.$refs.xTable._proxy("scrollToColumn",e.$refs.xTable._proxy("getColumnByField","instorage_status"))}),200)):this.$message.warning("请勾选未全部开票的单据！")},saveOpenBill:function(){var e=this,t=this.$refs.xTable._proxy("getTableData").fullData.concat([]);this.$refs.xTable._proxy("validate",t).then((function(a){var i=t.map((function(t){var a=e.$publicFution.filter(o,t);return a=e.$publicFution.dealParams(a),a}));e.$axMethod.purchaseAddInvoice({type:e.params.type,goods_json:JSON.stringify(i)}).then((function(t){var a=t.data;200===a.code&&(e.onSearch(1),e.$message.success(a.msg))}))}))},companyChange:function(){this.params.warehouse_id="",this.params.allocation_id="",this.params.buyer_id="",this.params.department_id="",this.params.supplier_id=""},onSearch:function(){var e=this;this.editType=1,Array.isArray(this.timeValue)?(this.params.start_time=this.timeValue[0],this.params.end_time=this.timeValue[1]):this.params.start_time=this.params.end_time="",this.$nextTick((function(){e.$refs.xTable._getData(1)}))},onReset:function(){this.timeValue=[],this.params=this.$publicFution.deepCopy(n),this.onSearch(1)}}},c=s,m=a("2877"),d=Object(m["a"])(c,i,r,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-405b413a.73902a63.js.map