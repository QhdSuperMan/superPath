(window["webpackJsonp_erpcode"]=window["webpackJsonp_erpcode"]||[]).push([["chunk-088a935a"],{"0cb2":function(e,t,a){var r=a("e330"),i=a("7b0b"),s=Math.floor,l=r("".charAt),o=r("".replace),n=r("".slice),c=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,p=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,a,r,u,m){var d=a+e.length,h=r.length,b=p;return void 0!==u&&(u=i(u),b=c),o(m,b,(function(i,o){var c;switch(l(o,0)){case"$":return"$";case"&":return e;case"`":return n(t,0,a);case"'":return n(t,d);case"<":c=u[n(o,1,-1)];break;default:var p=+o;if(0===p)return i;if(p>h){var m=s(p/10);return 0===m?i:m<=h?void 0===r[m-1]?l(o,1):r[m-1]+l(o,1):i}c=r[p-1]}return void 0===c?"":c}))}},"3ba7":function(e,t,a){},5319:function(e,t,a){"use strict";var r=a("2ba4"),i=a("c65b"),s=a("e330"),l=a("d784"),o=a("d039"),n=a("825a"),c=a("1626"),p=a("5926"),u=a("50c4"),m=a("577e"),d=a("1d80"),h=a("8aa5"),b=a("dc4a"),_=a("0cb2"),f=a("14c3"),g=a("b622"),v=g("replace"),y=Math.max,w=Math.min,$=s([].concat),k=s([].push),S=s("".indexOf),x=s("".slice),C=function(e){return void 0===e?e:String(e)},D=function(){return"$0"==="a".replace(/./,"$0")}(),O=function(){return!!/./[v]&&""===/./[v]("a","$0")}(),P=!o((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));l("replace",(function(e,t,a){var s=O?"$":"$0";return[function(e,a){var r=d(this),s=void 0==e?void 0:b(e,v);return s?i(s,e,r,a):i(t,m(r),e,a)},function(e,i){var l=n(this),o=m(e);if("string"==typeof i&&-1===S(i,s)&&-1===S(i,"$<")){var d=a(t,l,o,i);if(d.done)return d.value}var b=c(i);b||(i=m(i));var g=l.global;if(g){var v=l.unicode;l.lastIndex=0}var D=[];while(1){var O=f(l,o);if(null===O)break;if(k(D,O),!g)break;var P=m(O[0]);""===P&&(l.lastIndex=h(o,u(l.lastIndex),v))}for(var z="",I=0,N=0;N<D.length;N++){O=D[N];for(var j=m(O[0]),F=y(w(p(O.index),o.length),0),B=[],M=1;M<O.length;M++)k(B,C(O[M]));var L=O.groups;if(b){var R=$([j],B,F,o);void 0!==L&&k(R,L);var A=m(r(i,void 0,R))}else A=_(j,o,F,B,L,i);F>=I&&(z+=x(o,I,F)+A,I=F+j.length)}return z+x(o,I)}]}),!P||!D||O)},"84fe":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",[e._v("采购管理")]),a("el-breadcrumb-item",{staticClass:"attrbute"},[a("span",{on:{click:e.goBack}},[e._v("厂家返利管理")])]),a("el-breadcrumb-item",[e._v(e._s(e.title)+"厂家返利单")])],1),a("div",{staticClass:"search_container"},[a("el-form",{ref:"ruleForm",staticClass:"demo-form-inline rebatemanageForm",attrs:{inline:!0,model:e.params}},[a("el-form-item",{attrs:{label:"采购组织",size:"mini",prop:"company_id",rules:e.rules.company_id}},[e._v(" "+e._s(function(){0==e.params.company_id&&(e.params.company_id=null)}())+" "),a("el-select",{attrs:{clearable:"",placeholder:"请选择",filterable:""},on:{focus:e.companyListInvok,change:e.companyChange},model:{value:e.params.company_id,callback:function(t){e.$set(e.params,"company_id",t)},expression:"params.company_id"}},e._l(e.companyList,(function(t){return a("el-option",{key:t.company_id,attrs:{label:t.company_name,value:t.company_id}},[a("span",{class:1==t.type?"optionStyle":""},[e._v(e._s(t.company_name))])])})),1)],1),a("el-form-item",{attrs:{label:"部门",size:"mini"}},[e._v(" "+e._s(function(){0==e.params.department_id&&(e.params.department_id=null)}())+" "),a("el-select",{attrs:{clearable:"",placeholder:"请选择",filterable:""},on:{focus:e.DepartmentListInvok,change:e.departmentChange},model:{value:e.params.department_id,callback:function(t){e.$set(e.params,"department_id",t)},expression:"params.department_id"}},e._l(e.departmentList,(function(e){return a("el-option",{key:e.department_id,attrs:{label:e.department_name,value:e.department_id}})})),1)],1),a("el-form-item",{attrs:{label:"供应商(厂家)",size:"mini",prop:"supplier_id",rules:e.rules.supplier_name}},[a("el-select",{attrs:{clearable:"",maxlength:"100","filter-method":e.supplierListInvok,filterable:"",placeholder:"请选择"},on:{change:e.changeSuppliter,focus:e.supplierListInvok},model:{value:e.params.supplier_id,callback:function(t){e.$set(e.params,"supplier_id",t)},expression:"params.supplier_id"}},e._l(e.supplierList,(function(e){return a("el-option",{key:e.supplier_id,attrs:{label:e.supplier_name,value:e.supplier_id}})})),1)],1),a("el-form-item",{attrs:{label:"品牌",size:"mini",prop:"brand_id",rules:e.rules.brand_id}},[a("getBrand",{attrs:{fatherParams:e.params},model:{value:e.params.brand_id,callback:function(t){e.$set(e.params,"brand_id",t)},expression:"params.brand_id"}})],1),a("el-form-item",{attrs:{label:"返利金额",size:"mini"}},[a("el-input",{attrs:{placeholder:"金额"},model:{value:e.params.total_price,callback:function(t){e.$set(e.params,"total_price",t)},expression:"params.total_price"}},[a("el-select",{staticClass:"styleInput",attrs:{slot:"prepend",placeholder:"请选择"},on:{change:e.shareMoney},slot:"prepend",model:{value:e.params.share_mode,callback:function(t){e.$set(e.params,"share_mode",t)},expression:"params.share_mode"}},[a("el-option",{attrs:{label:"不分摊",value:0}}),a("el-option",{attrs:{label:"按金额分摊",value:1}})],1)],1)],1),a("el-form-item",{attrs:{label:"采购员",size:"mini"}},[e._v(" "+e._s(function(){0==e.params.buyer_id&&(e.params.buyer_id=null)}())+" "),a("el-select",{attrs:{clearable:"",placeholder:"请选择",filterable:""},on:{focus:e.EmployeeListInvok},model:{value:e.params.buyer_id,callback:function(t){e.$set(e.params,"buyer_id",t)},expression:"params.buyer_id"}},e._l(e.employeeList,(function(e){return a("el-option",{key:e.employee_id,attrs:{label:e.employee_name,value:e.employee_id}})})),1)],1),a("el-form-item",{attrs:{label:"业务日期",size:"mini"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:e.params.business_time,callback:function(t){e.$set(e.params,"business_time",t)},expression:"params.business_time"}})],1),"修改"==e.title?a("el-form-item",{attrs:{label:"单据号",size:"mini"}},[[a("span",[e._v(e._s(e.params.rebate_sn))])]],2):e._e(),a("el-form-item",{attrs:{label:"返利类型",size:"mini"}},[e._v(" "+e._s(function(){0==e.params.rebate_type_id&&(e.params.rebate_type_id=null)}())+" "),a("el-select",{attrs:{clearable:""},on:{focus:e.RebateTypeListInvok},model:{value:e.params.rebate_type_id,callback:function(t){e.$set(e.params,"rebate_type_id",t)},expression:"params.rebate_type_id"}},e._l(e.rebateType,(function(e){return a("el-option",{key:e.rebate_type_id,attrs:{label:e.rebate_type_name,value:e.rebate_type_id}})})),1)],1),a("el-form-item",{attrs:{label:"返利周期",size:"mini"}},[a("el-select",{attrs:{clearable:"",width:"180px"},on:{focus:e.RebatecycleListInvok},model:{value:e.params.cycle_id,callback:function(t){e.$set(e.params,"cycle_id",t)},expression:"params.cycle_id"}},e._l(e.rebatecycle,(function(e){return a("el-option",{key:e.cycle_id,attrs:{label:e.cycle_name,value:e.cycle_id}})})),1)],1),a("el-form-item",{attrs:{label:"备注",size:"mini"}},[a("el-input",{attrs:{type:"text",maxlength:"300"},model:{value:e.params.remark,callback:function(t){e.$set(e.params,"remark",t)},expression:"params.remark"}})],1)],1),a("div",{staticClass:"add_delet"},[a("el-button",{staticClass:"addBtn",attrs:{icon:"el-icon-circle-plus-outline",type:"primary",size:"mini"},on:{click:function(t){return e.quoteOrder("ruleForm")}}},[e._v("分摊单据")]),a("el-button",{attrs:{plain:"",icon:"el-icon-delete",size:"mini"},on:{click:e.delF}},[e._v("删除")])],1)],1),a("div",{staticClass:"table_container"},[a("el-table",{staticStyle:{width:"100%"},attrs:{"highlight-current-row":!0,"tooltip-effect":"light",border:"",data:e.tableData,"show-summary":"","summary-method":e.getSummaries,"max-height":"600"},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{"show-overflow-tooltip":!0,type:"selection",fixed:"left",align:"center",width:"44"},on:{"selection-change":e.handleSelectionChange}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"instorage_sn",label:"单据号","min-width":"180"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"goods_id",label:"商品编号","min-width":"160"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"goods_name",label:"商品名称","min-width":"500"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("pre",[e._v(e._s(t.row.goods_name))])]}}])}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"purchase_price",label:"采购价","min-width":"160",align:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("pre",[e._v(e._s(e._f("priceFormatNone")(t.row.purchase_price)))])]}}])}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"goods_num",label:"入库数量","min-width":"120",align:"right"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"subtotal_price",label:"小计金额",align:"right","min-width":"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("pre",[e._v(e._s(e._f("priceFormatNone")(t.row.subtotal_price)))])]}}])}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"business_time",label:"业务日期","min-width":"130"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"add_time",label:"单据时间","min-width":"160"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"type_name",label:"入库类型","min-width":"120"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"rebate_price",label:"分摊返利金额","min-width":"120",align:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("pre",[e._v(e._s(e._f("priceFormatNone")(t.row.rebate_price)))])]}}])})],1)],1),e.isShowCustomBill?a("div",[a("select-bill",{attrs:{isShowCustomBill:e.isShowCustomBill,Params:e.params},on:{selectOutstockResult:e.selectOutstockResult}})],1):e._e(),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.goBack}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("确 定")])],1)],1)},i=[],s=a("5530"),l=(a("4de4"),a("d3b7"),a("b680"),a("a434"),a("159b"),a("a9e3"),a("d81d"),a("e9c4"),a("caad"),a("2532"),a("ac1f"),a("5319"),a("25f0"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-dialog",{attrs:{"close-on-click-modal":!1,title:"引用采购入库单据",visible:e.$parent.isShowCustomBill,width:"1280px"},on:{"update:visible":function(t){return e.$set(e.$parent,"isShowCustomBill",t)},close:function(t){return e.cancel()}}},[a("el-form",{ref:"params",attrs:{inline:!0,model:e.params}},[a("el-form-item",{staticClass:"mini_elform",attrs:{label:"供应商(厂家):",size:"mini"}},[a("span",[e._v(e._s(e.params.supplier_name))])]),a("el-form-item",{staticClass:"mini_elform",attrs:{label:"品牌:",size:"mini"}},[a("span",[e._v(e._s(e.params.brand_name?e.params.brand_name:"空品牌"))])]),a("el-form-item",{attrs:{label:"业务日期",size:"mini"}},[a("el-date-picker",{attrs:{type:"daterange","range-separator":"-","value-format":"yyyy-MM-dd","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.timeValue,callback:function(t){e.timeValue=t},expression:"timeValue"}})],1),a("el-form-item",{attrs:{label:"单据号",clearable:""}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.params.instorage_sn,callback:function(t){e.$set(e.params,"instorage_sn",t)},expression:"params.instorage_sn"}})],1),a("el-form-item",{staticClass:"search-style search",attrs:{size:"mini"}},[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:e.onSearch}},[e._v("查询")])],1)],1),a("div",{staticStyle:{"margin-bottom":"8px"}},[e._v(" 采购入库单分录明细 ")]),a("div",{staticClass:"table_container"},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{"highlight-current-row":!0,"tooltip-effect":"light",border:"",data:e.TableData.tableData,"max-height":"450",loading:e.loading},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{"show-overflow-tooltip":!0,type:"selection",fixed:"left",align:"center",width:"44","reserve-selection":!1}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"instorage_sn",label:"单据号","min-width":"170"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"goods_id",label:"商品编号","min-width":"100"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"goods_name",label:"商品名称","min-width":"500"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("pre",[e._v(e._s(t.row.goods_name))])]}}])}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"brand_name",label:"品牌","min-width":"150"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"batch",label:"年周/批次","min-width":"120"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,"render-header":e.renderHeaderpro,property:"production_time",width:"80",label:"生产日期"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"purchase_price",label:"采购价",align:"right","min-width":"120"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"goods_num",label:"入库数量",align:"right","min-width":"120"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"subtotal_price",label:"小计金额",align:"right","min-width":"120"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"business_time",label:"业务日期","min-width":"120"}})],1),a("div",{staticClass:"page_container"},[a("div",{staticClass:"pageNumber"},[e._v("每页显示")]),a("el-pagination",{staticClass:"erp-pagination",attrs:{"current-page":e.goPage,"page-size":e.pageSize1,"page-sizes":e.per_page,layout:"total,sizes, prev, pager, next,jumper",prevText:"上一页",nextText:"下一页",total:e.TableData.total},on:{"size-change":e.handleSizeChange,"update:currentPage":function(t){e.goPage=t},"update:current-page":function(t){e.goPage=t},"current-change":e.handleCurrentChange}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.cancel}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("确 定")])],1)],1)],1)}),o=[],n=a("65b0"),c={name:"selectCustomLayer",data:function(){return{authority:{},flag:!0,searchParams:{},TableData:{tableData:[],total:10},gather:[],timeValue:[],list:[],loading:!0,disabled:!1}},props:["Params"],methods:{cancel:function(){this.$parent.isShowCustomBill=!1},renderHeaderpro:function(){var e=this.$createElement;return e("el-tooltip",{class:"item",attrs:{content:"Bottom center",effect:"light"}},[e("p",{slot:"content"},["生产日期列后期将会隐藏，同时新增商品入库日期列"]),e("span",{class:"el-icon-question",style:"cursor:pointer;font-weight:bold;"},["生产日期"])])},submit:function(){var e=this;if(this.Params.brand_id){var t=!0;this.gather.forEach((function(a){e.Params.brand_id!=a.brand_id&&(t=!1)})),t?(this.$emit("selectOutstockResult",this.gather),this.$parent.isShowCustomBill=!1):this.$message.warning("请选择与返利单中其他商品相同的品牌进行返利")}else this.$emit("selectOutstockResult",this.gather),this.$parent.isShowCustomBill=!1},onSearch:function(){this.timeValue&&2==this.timeValue.length?(this.params.business_start_time=this.timeValue[0],this.params.business_end_time=this.timeValue[1]):this.params.business_start_time=this.params.business_end_time="",Object.assign(this.searchParams.params,this.params,{page:1}),Object(n["g"])(this.searchParams)},handleSelectionChange:function(e){this.gather=e},handleSizeChange:function(e){Object.assign(this.searchParams.params,{per_page:e,page:1}),Object(n["g"])(this.searchParams)},handleCurrentChange:function(e){Object.assign(this.searchParams.params,{page:e}),Object(n["g"])(this.searchParams)}},mounted:function(){Object(n["l"])(this,this.Params),Object.assign(this.params,{brand_name:this.Params.brand_name,brand_id:Number(this.Params.brand_id),supplier_id:this.Params.supplier_id,supplier_name:this.Params.supplier_name}),this.$set(this,"searchParams",{params:{supplier_id:this.Params.supplier_id,brand_id:Number(this.Params.brand_id)},TableData:this.TableData,API:"getWareListPublics",vm:this}),Object(n["g"])(this.searchParams)}},p=c,u=(a("c833"),a("2877")),m=Object(u["a"])(p,l,o,!1,null,"4fa3b0c9",null),d=m.exports,h=a("2f62"),b={name:"purchaseAddRebatemanage",components:{selectBill:d},data:function(){return{authority:{},tableData:[],addmultipleSelection:[],isShowCustomBill:!1,outstockResult:[],title:"添加",list:[],loading:!0}},methods:Object(s["a"])(Object(s["a"])({},Object(h["b"])(["purchaseDefault_show"])),{},{departmentChange:function(e){this.$set(this.params,"buyer_id","")},changeSuppliter:function(e){e&&(this.params.supplier_name=this.supplierList.filter((function(t){return t.supplier_id===e}))[0].supplier_name)},goBack:function(){this.purchaseAdd_showGet.rebate_id?(this.purchaseDefault_show({params:this.purchaseAdd_showGet.params,goPage:this.purchaseAdd_showGet.goPage,pageSize:this.purchaseAdd_showGet.pageSize}),this.$router.push({path:"/purchase/rebatemanage"})):(this.purchaseDefault_show({}),this.$router.push({path:"/purchase/rebatemanage"}))},clearData:function(){this.$set(this,"tableData",[])},toFixed2:function(e){var t=this;this.$nextTick((function(){t.params[e]||(t.params[e]=0),t.params[e]="goods_num"==e?Math.ceil(t.params[e]):t.params[e].toFixed(2)}))},companyChange:function(e){this.$set(this.params,"department_id",""),this.$set(this.params,"supplier_id",""),this.$set(this.params,"buyer_id","")},handleSelectionChange:function(e){this.addmultipleSelection=e},quoteOrder:function(e){var t=this;this.$refs[e].validate((function(e){e&&(t.isShowCustomBill=!0)}))},delF:function(){for(var e=0;e<this.addmultipleSelection.length;e++){var t=this.tableData.indexOf(this.addmultipleSelection[e]);this.tableData.splice(t,1)}this.shareMoney(this.params.total_price)},shareMoney:function(e){var t=this;e=e||this.params.total_price,(e<0||isNaN(e))&&(e=0),this.tableData.length&&this.tableData.forEach((function(a,r,i){if(r!=i.length-1)t.$set(t.tableData[r],"rebate_price",1==t.params.share_mode?(Number(a.subtotal_price)/t.totalPrice*e).toFixed(2):"0.00");else{var s=t.tableData.filter((function(e,t,a){return t!=a.length-1})).map((function(e){return e.rebate_price})),l=0;s.length&&(l=s.reduce((function(e,t){return Number(e)+Number(t)})));var o=t.params.total_price-l||0;o=Math.round(100*o)/100||"0.00",t.$set(t.tableData[r],"rebate_price",1==t.params.share_mode?o:"0.00")}}))},submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(e){var a=t.tableData.map((function(e){return{instorage_id:e.instorage_id,instorage_sn:e.instorage_sn,instorage_goods_id:e.instorage_goods_id,goods_id:e.goods_id,goods_num:e.goods_num,type:e.type,purchase_price:e.purchase_price,subtotal_price:e.subtotal_price,rebate_price:e.rebate_price,instorage_type:e.instorage_type,business_time:e.business_time,add_time:e.add_time,batch:e.batch,warehouse_id:e.warehouse_id,allocation_id:e.allocation_id}})),r=t.purchaseAdd_showGet.rebate_id?t.$api.editRebate:t.$api.addRebateOrder;t.$axios({method:"post",url:r,data:Object.assign({},{json_info:JSON.stringify(a)},t.params)}).then((function(e){200==e.data.code&&(t.$message({message:"成功",type:"success"}),t.goBack())}))}}))},selectOutstockResult:function(e){var t=this;if(0!=e.length){var a=this.tableData.map((function(e){return e.instorage_id}));e.forEach((function(e){a.includes(e.instorage_id)||t.tableData.push(e)})),this.shareMoney(this.params.total_price)}else this.$message({message:"您没有选择采购入库单据",type:"warning"})},getSummaries:function(e){var t=this,a=e.columns,r=e.data,i=[];return a.forEach((function(e,a){if(1!==a){if("subtotal_price"===e.property){var s=r.map((function(t){return Number(t[e.property])}));i[a]=s.reduce((function(e,t){Number(t);return e+t}),0),t.totalPrice=Number(i[a]||0),i[a]=Number(i[a]||0).toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}"rebate_price"===e.property&&(i[a]=Number(t.params.total_price||0).toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"),0==t.params.share_mode&&(i[a]=(0).toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")))}else i[a]="合计"})),this.shareMoney(this.params.total_price),i}}),computed:Object(s["a"])({},Object(h["c"])(["purchaseAdd_showGet"])),mounted:function(){var e=this;if(this.purchaseAdd_showGet.rebate_id){var t=this;this.$axios({method:"get",url:t.$api.getRebateInfo,params:{rebate_id:this.purchaseAdd_showGet.rebate_id}}).then((function(a){var r=a.data;if(200==r.code){var i=r.data.rebateInfo;Object.assign(i,{employee_id:r.data.rebateInfo.buyer_id,employee_name:r.data.rebateInfo.buyer_name,cycle_id:r.data.rebateInfo.cycle_id,cycle_name:r.data.rebateInfo.cycle_name}),Object(n["l"])(e,i),e.params=r.data.rebateInfo,e.params.instorage_sn=r.data.rebateInfo.reference_sn,e.params.total_price=r.data.rebateInfo.total_price,["rebate_id","department_id","supplier_id","cycle_id"].forEach((function(t){e.$set(e.params,t,r.data.rebateInfo[t]?r.data.rebateInfo[t]:"")})),e.tableData=r.data.rebateGoodsInfo;for(var s=r.data.rebateGoodsInfo,l=0;l<s.length;l++)t.tableData[l].goods_id=s[l].goods_id,t.tableData[l].goods_sn=s[l].goods_sn}})),this.title="修改"}else{var a=localStorage,r=a.employee_id,i=a.company_admin_id;[0,1,2].includes(Number(r))||i>0?this.$set(this,"params",{company_id:Number(localStorage.company_id),business_time:this.$publicFution.formatData(new Date),share_mode:0}):this.$set(this,"params",{company_id:Number(localStorage.company_id),department_id:Number(localStorage.department_id),buyer_id:Number(localStorage.employee_id),business_time:this.$publicFution.formatData(new Date),share_mode:0}),Object(n["l"])(this,localStorage)}}},_=b,f=(a("d0ad"),Object(u["a"])(_,r,i,!1,null,null,null));t["default"]=f.exports},"9a1fa":function(e,t,a){},b680:function(e,t,a){"use strict";var r=a("23e7"),i=a("da84"),s=a("e330"),l=a("5926"),o=a("408a"),n=a("1148"),c=a("d039"),p=i.RangeError,u=i.String,m=Math.floor,d=s(n),h=s("".slice),b=s(1..toFixed),_=function(e,t,a){return 0===t?a:t%2===1?_(e,t-1,a*e):_(e*e,t/2,a)},f=function(e){var t=0,a=e;while(a>=4096)t+=12,a/=4096;while(a>=2)t+=1,a/=2;return t},g=function(e,t,a){var r=-1,i=a;while(++r<6)i+=t*e[r],e[r]=i%1e7,i=m(i/1e7)},v=function(e,t){var a=6,r=0;while(--a>=0)r+=e[a],e[a]=m(r/t),r=r%t*1e7},y=function(e){var t=6,a="";while(--t>=0)if(""!==a||0===t||0!==e[t]){var r=u(e[t]);a=""===a?r:a+d("0",7-r.length)+r}return a},w=c((function(){return"0.000"!==b(8e-5,3)||"1"!==b(.9,0)||"1.25"!==b(1.255,2)||"1000000000000000128"!==b(0xde0b6b3a7640080,0)}))||!c((function(){b({})}));r({target:"Number",proto:!0,forced:w},{toFixed:function(e){var t,a,r,i,s=o(this),n=l(e),c=[0,0,0,0,0,0],m="",b="0";if(n<0||n>20)throw p("Incorrect fraction digits");if(s!=s)return"NaN";if(s<=-1e21||s>=1e21)return u(s);if(s<0&&(m="-",s=-s),s>1e-21)if(t=f(s*_(2,69,1))-69,a=t<0?s*_(2,-t,1):s/_(2,t,1),a*=4503599627370496,t=52-t,t>0){g(c,0,a),r=n;while(r>=7)g(c,1e7,0),r-=7;g(c,_(10,r,1),0),r=t-1;while(r>=23)v(c,1<<23),r-=23;v(c,1<<r),g(c,1,1),v(c,2),b=y(c)}else g(c,0,a),g(c,1<<-t,0),b=y(c)+d("0",n);return n>0?(i=b.length,b=m+(i<=n?"0."+d("0",n-i)+b:h(b,0,i-n)+"."+h(b,i-n))):b=m+b,b}})},c833:function(e,t,a){"use strict";a("3ba7")},d0ad:function(e,t,a){"use strict";a("9a1fa")}}]);
//# sourceMappingURL=chunk-088a935a.18a2c42a.js.map