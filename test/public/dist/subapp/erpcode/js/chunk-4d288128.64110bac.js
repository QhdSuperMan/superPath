(window["webpackJsonp_erpcode"]=window["webpackJsonp_erpcode"]||[]).push([["chunk-4d288128"],{"1bea":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{attrs:{id:"leixin"}},[i("div",{staticClass:"search_container"},[i("el-form",{ref:"filterFormRef",staticClass:"demo-form-inline",attrs:{inline:!0,model:t.params}},[i("el-form-item",{attrs:{label:"库存组织",size:"mini"}},[i("el-select",{attrs:{clearable:"",placeholder:"请选择",filterable:""},on:{change:t.companyChange,focus:t.companyListInvok},model:{value:t.params.company_id,callback:function(e){t.$set(t.params,"company_id",e)},expression:"params.company_id"}},t._l(t.companyList,(function(e){return i("el-option",{key:e.company_id,attrs:{label:e.company_name,value:e.company_id}},[i("span",{class:1==e.type?"optionStyle":""},[t._v(t._s(e.company_name))])])})),1)],1),i("el-form-item",{attrs:{label:"部门",size:"mini"}},[i("el-select",{attrs:{clearable:"",placeholder:"请选择",filterable:""},on:{focus:t.DepartmentListInvok,change:t.departmentChange},model:{value:t.params.department_id,callback:function(e){t.$set(t.params,"department_id",e)},expression:"params.department_id"}},t._l(t.departmentList,(function(t){return i("el-option",{key:t.department_id,attrs:{label:t.department_name,value:t.department_id}})})),1)],1),i("el-form-item",{attrs:{label:"业务日期",size:"mini"}},[i("el-date-picker",{attrs:{type:"daterange","range-separator":"-","value-format":"yyyy-MM-dd","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.timeValue,callback:function(e){t.timeValue=e},expression:"timeValue"}})],1),i("el-form-item",{attrs:{label:"单据号",size:"mini"}},[i("el-input",{attrs:{placeholder:"请输入"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onSearch(1)}},model:{value:t.params.return_sn,callback:function(e){t.$set(t.params,"return_sn",e)},expression:"params.return_sn"}})],1),i("el-form-item",{attrs:{label:"客户名称",size:"mini"}},[i("el-select",{attrs:{clearable:"",filterable:"",placeholder:"请输入",loading:t.loading,remote:"","remote-method":t.clienteleListInvok},on:{change:t.getCustomer,focus:t.clienteleListInvok},model:{value:t.params.customer_id,callback:function(e){t.$set(t.params,"customer_id",e)},expression:"params.customer_id"}},[i("ul",{staticClass:"customer customer-ul4 customer-ul2"},[i("li",[t._v("客户编号")]),i("li",[t._v("客户名称")]),i("li",[t._v("联系人")]),i("li",[t._v("联系电话")]),i("li",[t._v("区域")])]),t._l(t.customerList,(function(e){return i("el-option",{key:e.customer_id,attrs:{label:e.customer_name,value:e.customer_id}},[i("ul",{staticClass:"customer customer-ul4"},[i("li",{attrs:{title:e.customer_id}},[t._v(t._s(e.customer_id))]),i("li",{attrs:{title:e.customer_name}},[t._v(t._s(e.customer_name))]),i("li",{attrs:{title:e.contact_name}},[t._v(t._s(e.contact_name))]),i("li",{attrs:{title:e.customer_mobile}},[t._v(t._s(e.customer_mobile))]),i("li",[t._v(t._s(e.province_name)+"/"+t._s(e.city_name)+"/"+t._s(e.area_name))])])])}))],2)],1),i("el-form-item",{attrs:{label:"出库单号",size:"mini"}},[i("el-input",{attrs:{placeholder:"请输入"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onSearch(1)}},model:{value:t.params.outstock_sn,callback:function(e){t.$set(t.params,"outstock_sn",e)},expression:"params.outstock_sn"}})],1),i("el-form-item",{attrs:{label:"单据状态",size:"mini"}},[i("el-select",{attrs:{clearable:""},model:{value:t.params.auditor_status,callback:function(e){t.$set(t.params,"auditor_status",e)},expression:"params.auditor_status"}},[i("el-option",{attrs:{label:"全部",value:0}},[t._v("全部")]),i("el-option",{attrs:{label:"未审核",value:1}},[t._v("未审核")]),i("el-option",{attrs:{label:"已审核",value:2}},[t._v("已审核")]),i("el-option",{attrs:{label:"作废",value:3}},[t._v("作废")])],1)],1),i("el-form-item",{staticClass:"search-style search",attrs:{size:"mini"}},[i("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(e){return t.onSearch(1)}}},[t._v("查询")]),i("el-button",{attrs:{plain:"",size:"mini"},on:{click:t.onReset}},[t._v("重置")])],1)],1)],1),i("div",{staticClass:"add_delet"},[1==t.authority.b_add?i("el-button",{staticClass:"addBtn",attrs:{icon:"el-icon-circle-plus-outline",type:"primary",size:"mini"},on:{click:t.salesAddF}},[t._v("新增")]):t._e(),1==t.authority.b_del?i("el-button",{attrs:{plain:"",icon:"el-icon-delete",size:"mini"},on:{click:t.deletes}},[t._v("删除")]):t._e(),1==t.authority.b_pass?i("el-button",{attrs:{icon:"iconfont icon-pass",type:"primary",size:"mini"},on:{click:t.examineFun}},[t._v("审核")]):t._e(),1==t.authority.b_invalid?i("el-button",{attrs:{plain:"",icon:"iconfont icon-zuofei",size:"mini"},on:{click:t.voidF}},[t._v("作废")]):t._e(),1==t.authority.b_nopass?i("el-button",{attrs:{plain:"",icon:"iconfont icon-fanshenhe",size:"mini"},on:{click:t.cancellation}},[t._v("弃审")]):t._e(),1==t.authority.b_print?i("el-button",{attrs:{plain:"",size:"mini",icon:"el-icon-printer"},on:{click:t.printF}},[t._v("批量打印")]):t._e()],1),i("xTable",{ref:"xTable",attrs:{ajax:{url:"getThressReturnList",params:t.params},tableColumn:t.tableColumn,xData:t.tableData}}),t.dialogUserVisible?i("div",[i("el-dialog",{staticClass:"dialogForm",attrs:{"close-on-click-modal":!1,title:"审核确认",visible:t.dialogUserVisible,width:"800px"},on:{"update:visible":function(e){t.dialogUserVisible=e}}},[i("div",{staticStyle:{width:"750px"}},[i("span",{staticStyle:{color:"red"}},[t._v("提示：由于以下商品无结存成本或者结存成本为0，请先输入成本单价！")]),i("el-table",{staticStyle:{width:"750px",float:"left","margin-top":"5px",cursor:"pointer"},attrs:{"highlight-current-row":!0,"tooltip-effect":"light",border:"",data:t.leftList,height:"242"}},[i("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"company_name",width:"100",label:"销售组织"}}),i("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"warehouse_name",width:"132",label:"仓库"}}),i("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"allocation_name",width:"100",label:"货位"}}),i("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"goods_id",width:"100",label:"商品编号"}}),i("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"goods_name",width:"138",label:"商品名称"}}),i("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"batch",width:"100",label:"年周/批次"}}),i("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"cost_price",width:"110",label:"成本单价/条","render-header":t.renderHeader},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-input",{attrs:{size:"small",type:"number","suffix-icon":"el-icon-edit-outline",placeholder:"请输入"},on:{change:function(i){return t.getcost(e.row,e.$index)}},model:{value:e.row.cost_price,callback:function(i){t.$set(e.row,"cost_price",i)},expression:"scope.row.cost_price"}})]}}],null,!1,3279741191)})],1)],1),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{staticStyle:{"margin-top":"10px"},on:{click:function(e){t.dialogUserVisible=!1}}},[t._v("取 消")]),i("el-button",{staticClass:"tx",staticStyle:{"margin-top":"10px"},attrs:{type:"primary"},on:{click:function(e){return t.submitUserForm()}}},[t._v("确 定")])],1)])],1):t._e(),i("publicPrint",{ref:"printDelieveryBill",attrs:{title:"threeReturn"},on:{Search:t.onSearch}})],1)])},r=[],s=i("5530"),n=(i("d3b7"),i("159b"),i("d81d"),i("99af"),i("a15b"),i("b680"),i("a9e3"),i("4de4"),i("caad"),i("2532"),i("e9c4"),i("2f62")),l={data:function(){var t=this,e=this.$createElement;return{tableColumn:[{type:"checkbox",width:40},{title:"操作",fixed:"right",width:140,slots:{default:function(i){var a=i.row,r=[];return 1===t.authority.b_info&&r.push(e("el-button",{attrs:{type:"text"},style:"margin-left: 15px;",on:{click:function(){t.seeDetail(a)}}},["查看"])),r.push(e("el-button",{attrs:{type:"text",disabled:!(1===a.auditor_status&&1===t.authority.b_edit)},on:{click:function(){t.salesAddF(a)}}},["修改"])),r.push(e("el-button",{attrs:{type:"text",disabled:!(1===a.after_auditor_print_status&&t.authority.b_print&&2===a.auditor_status||1!==a.after_auditor_print_status&&1===t.authority.b_print)},on:{click:function(){t.printSheet(a)}}},["打印"])),r}}},{field:"company_name",title:"库存组织",width:150},{width:156,title:"单据号",slots:{default:function(i){var a=i.row;return[e("a",{on:{click:function(){t.seeDetail(a)}}},[" ",a.return_sn])]}}},{field:"customer_name",title:"客户名称",width:120},{field:"return_num",width:70,title:"退货数量",headerAlign:"right",align:"right"},{field:"return_price",title:"总计金额",formatter:"priceFormat",headerAlign:"right",align:"right",width:100},{field:"auditor_status_name",title:"审核状态",width:70},{field:"business_time",title:"业务日期",width:88},{field:"add_time",title:"单据时间",width:140},{field:"auditor_time",title:"审核时间",width:140},{field:"add_user_name",title:"操作员",width:84},{field:"department_name",title:"部门",width:100},{field:"auditor_name",title:"审核人",width:84},{field:"outstock_sn",title:"关联出库单号",width:156},{field:"update_time",title:"修改时间",width:140},{field:"update_user_name",title:"修改人",width:84},{field:"reason_name",title:"退货原因",width:130},{field:"remark",title:"备注",width:130}],tableData:[]}},methods:{addRow:function(){var t=this.$refs.xTable;t.createRow({production_time:"",allocation_id:null,batch:this.getWeek()}).then((function(e){t.insertAt(e,-1)})),this.referenceDisabled=!0},allocationChange:function(t,e,i){var a=t.row;a.allocation_name=i.allocation_name},activeMethod:function(t){var e=t.row,i=(t.rowIndex,t.column);t.columnIndex;return"goods_name"==i.property?!!this.params.company_id:!!e.goods_id},deleteRow:function(){var t=this.$refs.xTable;t.removeSelecteds(),t.updateFooter()}}},o=i("78d2"),c={name:"salesSalesReturnIndex",mixins:[l],data:function(){return{printFlag:!1,leftList:[],loading:!1,params:{auditor_status:0,outstock_type_id:0},timeValue2:[],dialogUserVisible:!1,auditValue:null,hasAuditorStatusPrint:null}},computed:Object(s["a"])({},Object(n["c"])(["salesReturnIndexGet"])),components:{publicPrint:o["a"]},methods:Object(s["a"])(Object(s["a"])({},Object(n["b"])(["salesReturnAdd","salesReturnSee","salesReturnModify","salesReturnIndexACT"])),{},{printF:function(){for(var t=!1,e=this.multipleSelection,i=1;i<e.length;i++)if(e[i-1].company_id!=e[i].company_id){t=!0;break}if(this.multipleSelection.length)if(t)this.$message({message:"请选择相同公司单据进行打印",type:"warning"});else{var a=!0,r=[];if(this.multipleSelection.forEach((function(t){1==t.after_auditor_print_status&&2!=t.auditor_status&&(r.push(t.return_sn),a=!1)})),a)this.$refs.printDelieveryBill.printList(this.multipleSelection,["return_id"]);else{var s=r.map((function(t,e){return"".concat(e+1,".").concat(t)}));this.$alert('以下未审核的单据不可打印：<br/>\n            <div style="color:#e6a23c">\n              '.concat(s.join("，"),"\n            <div>"),"提示",{dangerouslyUseHTMLString:!0})}}else this.$message({message:"请选择单据进行打印",type:"warning"})},cancellation:function(){var t=this;if(this.multipleSelection.length<1)return this.$message({message:"请选择需要弃审的信息",type:"warning"}),!1;for(var e=[],i=0;i<this.multipleSelection.length;i++)e.push(this.multipleSelection[i].return_id);var a=e.toString(),r={examineID:"return_id",eachData:{return_id:a},examineApi:"auditNoThressReturn",list:{UrlApi:"getReturnList",data:this.tableData,esData:this.searchParams.params}};this.$baseData.checkCarDoctor({bill_type:7,bill_id:e.join(","),operation_type:6}).then((function(){t.$common.examineFun(r,t.onSearch)}))},printSheet:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.$nextTick((function(){this.$refs.printDelieveryBill.printPdf({return_id:t.return_id},e)}))},getcost:function(t,e){if(t.cost_price<0||isNaN(t.cost_price))this.$message.warning("成本单价不能为空且必须为正数"),this.$set(this.leftList[e],"cost_price","");else if(t.cost_price>=1e8)this.$message.warning("数值不能超过一亿"),this.$set(this.leftList[e],"cost_price",0);else{var i=parseFloat(Number(t.cost_price)).toFixed(2);this.$set(this.leftList[e],"cost_price",i)}},renderHeader:function(t,e){var i=e.column;e.$index;return t("span",{class:"start",style:"cursor:pointer"},[" ",i.label," "])},getCustomer:function(t){""!=t&&(this.params.customer_name=this.customerList.filter((function(e){return e.customer_id===t}))[0].customer_name)},departmentChange:function(t){t&&(this.params.department_name=this.departmentList.filter((function(e){return e.department_id===t}))[0].department_name)},selectRowChangeBg:function(t){var e=t.row;t.rowIndex;return this.multipleSelection.length&&this.multipleSelection.map((function(t){return t.return_id})).includes(e.return_id)?"background:#d4e1ee":""},seeDetail:function(t){this.$router.push({path:"/aftersale/threepackagereturn/threePackageReturnSee",query:{id:t.return_id}})},examineFun:function(){var t=this,e=this;if(this.multipleSelection.length<1)return this.$message({message:"请选择需要审核的信息",type:"warning"}),!1;for(var i=[],a=0;a<this.multipleSelection.length;a++)i.push(this.multipleSelection[a].return_id);var r=i.toString();this.$baseData.checkCarDoctor({bill_type:7,bill_id:r,operation_type:4}).then((function(){t.$axMethod.checkThreeReturnGoods({return_id:r}).then((function(i){var a=i.data;if(200==a.code)if(1==a.data.is_success){var s={examineID:"return_id",eachData:{return_id:r},examineApi:"auditThressReturn",list:{UrlApi:"getReturnList",data:t.tableData,esData:t.searchParams.params}};e.$common.examineFun(s,t.onSearch)}else t.leftList=a.data,t.dialogUserVisible=!0}))}))},submitUserForm:function(){for(var t=0;t<this.leftList.length;t++)if(void 0==this.leftList[t].cost_price||null==this.leftList[t].cost_price||""==this.leftList[t].cost_price)return this.$message({message:"成本单价不能为空且必须为正数",type:"warning"}),!1;var e=[];for(t=0;t<this.multipleSelection.length;t++)e.push(this.multipleSelection[t].return_id);var i=e.toString(),a={examineID:"return_id",eachData:{return_id:i,cost_price_str:JSON.stringify(this.leftList)},examineApi:"auditThressReturn",list:{UrlApi:"getReturnList",data:this.tableData,esData:this.searchParams.params}};this.$common.examineFun(a,this.onSearch),this.dialogUserVisible=!1},voidF:function(){var t=this;if(this.multipleSelection.length<1)return this.$message({message:"请选择需要作废的信息",type:"warning"}),!1;for(var e=[],i=0;i<this.multipleSelection.length;i++)e.push(this.multipleSelection[i].return_id);var a=e.toString(),r={examineID:"return_id",eachData:{return_id:a},examineApi:"auditInvalidThressReturn",list:{UrlApi:"getReturnList",data:this.tableData,esData:this.searchParams.params}};this.$baseData.checkCarDoctor({bill_type:7,bill_id:e.join(","),operation_type:6}).then((function(){t.$common.examineFun(r,t.onSearch)}))},salesModifyF:function(t,e){if(e&&1==e.is_execute)return this.$message.error("wms系统正在操作此单据，暂不支持单据修改"),!1;this.timeF(),this.$router.push({path:"/sales/salesrefund/salesReturnAdd"}),this.salesReturnAdd({return_id:e.return_id,departmentList:this.departments,companyList:this.companys,SelesTomerList:this.customerList,params:this.params,goPage:this.params.goPage,pageSize:this.params.pageSize})},salesAddF:function(t){this.$router.push({path:"/aftersale/threepackagereturn/threepackagereturnAdd",query:{id:t.return_id}})},onReset:function(){this.$set(this,"params",{auditor_status:0,outstock_type_id:0}),this.timeValue=[],this.timeValue2=[],this.auditValue=[],this.onSearch(1)},timeF:function(){this.timeValue?(this.params.business_start_time=this.timeValue[0],this.params.business_end_time=this.timeValue[1]):this.params.business_start_time=this.params.business_end_time="",this.timeValue2?(this.params.add_start_time=this.timeValue2[0],this.params.add_end_time=this.timeValue2[1]):this.params.add_start_time=this.params.add_end_time="",this.auditValue?(this.params.auditor_start_time=this.auditValue[0],this.params.auditor_end_time=this.auditValue[1]):this.params.auditor_start_time=this.params.auditor_end_time=""},onSearch:function(t){this.timeF(),this.$refs.xTable._getData(t)},deletes:function(){var t=this;if(this.multipleSelection.length<1)return this.$message({message:"请选择需要审核的信息",type:"warning"}),!1;for(var e=[],i=0;i<this.multipleSelection.length;i++)e.push(this.multipleSelection[i].return_id);var a={deleID:"return_id",deleSelect:this.multipleSelection,deleApi:"deleteThressReturn",list:{UrlApi:"getReturnList",data:this.tableData,esData:this.searchParams.params}};this.$baseData.checkCarDoctor({bill_type:7,bill_id:e.join(","),operation_type:3}).then((function(){t.$common.deletes(a,"删除",t,t.onSearch)}))},companyChange:function(t){""!=t&&(this.params.company_name=this.companyList.filter((function(e){return e.company_id===t}))[0].company_name),this.$set(this.params,"department_id",""),this.$set(this.params,"customer_id","")}}),created:function(){this.companyList.push({company_name:this.params.company_name=localStorage.getItem("company_name"),company_id:this.params.company_id=localStorage.getItem("company_id")}),this.hasAuditorStatusPrint=window.localStorage.hasAuditorStatusPrint},activated:function(){this.onSearch(window.goPage)}},u=c,m=i("2877"),d=Object(m["a"])(u,a,r,!1,null,"111da5f6",null);e["default"]=d.exports},b680:function(t,e,i){"use strict";var a=i("23e7"),r=i("da84"),s=i("e330"),n=i("5926"),l=i("408a"),o=i("1148"),c=i("d039"),u=r.RangeError,m=r.String,d=Math.floor,p=s(o),h=s("".slice),_=s(1..toFixed),f=function(t,e,i){return 0===e?i:e%2===1?f(t,e-1,i*t):f(t*t,e/2,i)},b=function(t){var e=0,i=t;while(i>=4096)e+=12,i/=4096;while(i>=2)e+=1,i/=2;return e},g=function(t,e,i){var a=-1,r=i;while(++a<6)r+=e*t[a],t[a]=r%1e7,r=d(r/1e7)},v=function(t,e){var i=6,a=0;while(--i>=0)a+=t[i],t[i]=d(a/e),a=a%e*1e7},y=function(t){var e=6,i="";while(--e>=0)if(""!==i||0===e||0!==t[e]){var a=m(t[e]);i=""===i?a:i+p("0",7-a.length)+a}return i},w=c((function(){return"0.000"!==_(8e-5,3)||"1"!==_(.9,0)||"1.25"!==_(1.255,2)||"1000000000000000128"!==_(0xde0b6b3a7640080,0)}))||!c((function(){_({})}));a({target:"Number",proto:!0,forced:w},{toFixed:function(t){var e,i,a,r,s=l(this),o=n(t),c=[0,0,0,0,0,0],d="",_="0";if(o<0||o>20)throw u("Incorrect fraction digits");if(s!=s)return"NaN";if(s<=-1e21||s>=1e21)return m(s);if(s<0&&(d="-",s=-s),s>1e-21)if(e=b(s*f(2,69,1))-69,i=e<0?s*f(2,-e,1):s/f(2,e,1),i*=4503599627370496,e=52-e,e>0){g(c,0,i),a=o;while(a>=7)g(c,1e7,0),a-=7;g(c,f(10,a,1),0),a=e-1;while(a>=23)v(c,1<<23),a-=23;v(c,1<<a),g(c,1,1),v(c,2),_=y(c)}else g(c,0,i),g(c,1<<-e,0),_=y(c)+p("0",o);return o>0?(r=_.length,_=d+(r<=o?"0."+p("0",o-r)+_:h(_,0,r-o)+"."+h(_,r-o))):_=d+_,_}})}}]);
//# sourceMappingURL=chunk-4d288128.64110bac.js.map