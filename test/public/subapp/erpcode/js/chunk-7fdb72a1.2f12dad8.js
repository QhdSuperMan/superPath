(window["webpackJsonp_erpcode"]=window["webpackJsonp_erpcode"]||[]).push([["chunk-7fdb72a1"],{"0a0e":function(e,t,a){},"19aa":function(e,t,a){var i=a("da84"),s=a("3a9b"),o=i.TypeError;e.exports=function(e,t){if(s(t,e))return e;throw o("Incorrect invocation")}},2266:function(e,t,a){var i=a("da84"),s=a("0366"),o=a("c65b"),n=a("825a"),r=a("0d51"),l=a("e95a"),c=a("07fa"),d=a("3a9b"),u=a("9a1f"),m=a("35a1"),p=a("2a62"),h=i.TypeError,f=function(e,t){this.stopped=e,this.result=t},_=f.prototype;e.exports=function(e,t,a){var i,g,b,v,y,w,k,x=a&&a.that,A=!(!a||!a.AS_ENTRIES),$=!(!a||!a.IS_ITERATOR),S=!(!a||!a.INTERRUPTED),D=s(t,x),C=function(e){return i&&p(i,"normal",e),new f(!0,e)},O=function(e){return A?(n(e),S?D(e[0],e[1],C):D(e[0],e[1])):S?D(e,C):D(e)};if($)i=e;else{if(g=m(e),!g)throw h(r(e)+" is not iterable");if(l(g)){for(b=0,v=c(e);v>b;b++)if(y=O(e[b]),y&&d(_,y))return y;return new f(!1)}i=u(e,g)}w=i.next;while(!(k=o(w,i)).done){try{y=O(k.value)}catch(z){p(i,"throw",z)}if("object"==typeof y&&y&&d(_,y))return y}return new f(!1)}},2626:function(e,t,a){"use strict";var i=a("d066"),s=a("9bf2"),o=a("b622"),n=a("83ab"),r=o("species");e.exports=function(e){var t=i(e),a=s.f;n&&t&&!t[r]&&a(t,r,{configurable:!0,get:function(){return this}})}},6062:function(e,t,a){"use strict";var i=a("6d61"),s=a("6566");i("Set",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),s)},6566:function(e,t,a){"use strict";var i=a("9bf2").f,s=a("7c73"),o=a("e2cc"),n=a("0366"),r=a("19aa"),l=a("2266"),c=a("7dd0"),d=a("2626"),u=a("83ab"),m=a("f183").fastKey,p=a("69f3"),h=p.set,f=p.getterFor;e.exports={getConstructor:function(e,t,a,c){var d=e((function(e,i){r(e,p),h(e,{type:t,index:s(null),first:void 0,last:void 0,size:0}),u||(e.size=0),void 0!=i&&l(i,e[c],{that:e,AS_ENTRIES:a})})),p=d.prototype,_=f(t),g=function(e,t,a){var i,s,o=_(e),n=b(e,t);return n?n.value=a:(o.last=n={index:s=m(t,!0),key:t,value:a,previous:i=o.last,next:void 0,removed:!1},o.first||(o.first=n),i&&(i.next=n),u?o.size++:e.size++,"F"!==s&&(o.index[s]=n)),e},b=function(e,t){var a,i=_(e),s=m(t);if("F"!==s)return i.index[s];for(a=i.first;a;a=a.next)if(a.key==t)return a};return o(p,{clear:function(){var e=this,t=_(e),a=t.index,i=t.first;while(i)i.removed=!0,i.previous&&(i.previous=i.previous.next=void 0),delete a[i.index],i=i.next;t.first=t.last=void 0,u?t.size=0:e.size=0},delete:function(e){var t=this,a=_(t),i=b(t,e);if(i){var s=i.next,o=i.previous;delete a.index[i.index],i.removed=!0,o&&(o.next=s),s&&(s.previous=o),a.first==i&&(a.first=s),a.last==i&&(a.last=o),u?a.size--:t.size--}return!!i},forEach:function(e){var t,a=_(this),i=n(e,arguments.length>1?arguments[1]:void 0);while(t=t?t.next:a.first){i(t.value,t.key,this);while(t&&t.removed)t=t.previous}},has:function(e){return!!b(this,e)}}),o(p,a?{get:function(e){var t=b(this,e);return t&&t.value},set:function(e,t){return g(this,0===e?0:e,t)}}:{add:function(e){return g(this,e=0===e?0:e,e)}}),u&&i(p,"size",{get:function(){return _(this).size}}),d},setStrong:function(e,t,a){var i=t+" Iterator",s=f(t),o=f(i);c(e,t,(function(e,t){h(this,{type:i,target:e,state:s(e),kind:t,last:void 0})}),(function(){var e=o(this),t=e.kind,a=e.last;while(a&&a.removed)a=a.previous;return e.target&&(e.last=a=a?a.next:e.state.first)?"keys"==t?{value:a.key,done:!1}:"values"==t?{value:a.value,done:!1}:{value:[a.key,a.value],done:!1}:(e.target=void 0,{value:void 0,done:!0})}),a?"entries":"values",!a,!0),d(t)}}},"6d61":function(e,t,a){"use strict";var i=a("23e7"),s=a("da84"),o=a("e330"),n=a("94ca"),r=a("6eeb"),l=a("f183"),c=a("2266"),d=a("19aa"),u=a("1626"),m=a("861d"),p=a("d039"),h=a("1c7e"),f=a("d44e"),_=a("7156");e.exports=function(e,t,a){var g=-1!==e.indexOf("Map"),b=-1!==e.indexOf("Weak"),v=g?"set":"add",y=s[e],w=y&&y.prototype,k=y,x={},A=function(e){var t=o(w[e]);r(w,e,"add"==e?function(e){return t(this,0===e?0:e),this}:"delete"==e?function(e){return!(b&&!m(e))&&t(this,0===e?0:e)}:"get"==e?function(e){return b&&!m(e)?void 0:t(this,0===e?0:e)}:"has"==e?function(e){return!(b&&!m(e))&&t(this,0===e?0:e)}:function(e,a){return t(this,0===e?0:e,a),this})},$=n(e,!u(y)||!(b||w.forEach&&!p((function(){(new y).entries().next()}))));if($)k=a.getConstructor(t,e,g,v),l.enable();else if(n(e,!0)){var S=new k,D=S[v](b?{}:-0,1)!=S,C=p((function(){S.has(1)})),O=h((function(e){new y(e)})),z=!b&&p((function(){var e=new y,t=5;while(t--)e[v](t,t);return!e.has(-0)}));O||(k=t((function(e,t){d(e,w);var a=_(new y,e,k);return void 0!=t&&c(t,a[v],{that:a,AS_ENTRIES:g}),a})),k.prototype=w,w.constructor=k),(C||z)&&(A("delete"),A("has"),g&&A("get")),(z||D)&&A(v),b&&w.clear&&delete w.clear}return x[e]=k,i({global:!0,forced:k!=y},x),f(k,e),b||a.setStrong(k,e,g),k}},"96ce":function(e,t,a){},b42c:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-dialog",{staticClass:"dialogForm",attrs:{"close-on-click-modal":!1,title:"货位列表",visible:!0,width:"800px"},on:{close:e.closeDialog}},[a("div",{staticClass:"search_container"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.params}},[a("el-form-item",{attrs:{label:"货位名称",size:"mini"}},[a("el-input",{staticClass:"shortSearchInput",model:{value:e.params.allocation_name,callback:function(t){e.$set(e.params,"allocation_name",t)},expression:"params.allocation_name"}})],1),a("el-form-item",{staticClass:"search-style search",attrs:{size:"mini"}},[a("el-button",{attrs:{size:"mini"},on:{click:e.onSearch}},[e._v("查询")])],1)],1)],1),a("span",{staticClass:"pr20"},[e._v(e._s(e.TableData.goods_info.warehouse_name))]),a("span",{staticClass:"pr20"},[e._v(e._s(e.TableData.goods_info.goods_name))]),a("br"),a("br"),a("div",{staticClass:"table_container"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading1,expression:"loading1"}],staticStyle:{width:"100%"},attrs:{"highlight-current-row":!0,"tooltip-effect":"light",border:"",data:e.TableData.tableData,"max-height":"600"},on:{"row-click":e.handleSelectionChange}},[a("el-table-column",{attrs:{"show-overflow-tooltip":!0,width:"50",label:"选择"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-radio",{attrs:{label:t.row.allocation_id},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[e._v(e._s(null))])]}}])}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"allocation_name",label:"货位名称"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"stocks",label:"货位目前货品数量"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,label:"订单商品数量"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{placeholder:"请输入","suffix-icon":"el-icon-edit-outline"},on:{change:function(a){return e.toPositiveNum(t.row)}},model:{value:t.row.num,callback:function(a){e.$set(t.row,"num",a)},expression:"scope.row.num"}})]}}])})],1)],1),a("div",{staticClass:"page_container"},[a("div",{staticClass:"pageNumber"},[e._v("每页显示")]),a("el-pagination",{staticClass:"erp-pagination",attrs:{"current-page":e.goPage,"page-sizes":[30,50,100,500],layout:"total,sizes, prev, pager, next,jumper",prevText:"上一页",nextText:"下一页",total:e.TableData.total},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.goPage=t},"update:current-page":function(t){e.goPage=t}}})],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){return e.closeDialog()}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submit()}}},[e._v("确 定")])],1)])],1)},s=[],o=(a("e9c4"),a("65b0"),{data:function(){return{TableData:{tableData:[],goods_info:{},total:10},goPage:1,loading:!0,manageList:[],multipleSelection:[],params:{},radio:null}},props:{selectData:{type:[Object],default:"",required:!0}},methods:{toPositiveNum:function(e){var t=this;this.$nextTick((function(){(e.num<0||isNaN(e.num))&&(e.num=0),e.num>e.stocks&&(t.$message.warning("订单商品数量不能大于可用数量"),e.num=0),e.num=Math.ceil(e.num)}))},closeDialog:function(){this.$parent.goodsAddressVisible=!1},initData:function(){var e=this;this.$axMethod.publicsAllocationList(this.params).then((function(t){200==t.data.code&&(e.loading=!1,e.goods_info=t.data.data.goods_info,e.TableData.tableData=t.data.data.allocation_list.data,e.TableData.total=t.data.data.allocation_list.total)}))},handleSelectionChange:function(e){this.radio=e.allocation_id,this.multipleSelection=e},handleCurrentChange:function(e){this.params.page=e,this.initData()},onSearch:function(){this.goPage=1,this.params.page=1,this.initData()},submit:function(){var e=!0;if("{}"!=JSON.stringify(this.multipleSelection)){if(this.multipleSelection.num||(this.$message({message:"请填写已勾选货位的商品数量",type:"warning"}),e=!1),this.multipleSelection.num>this.multipleSelection.now_goods_num&&(this.$message({message:"数量不得大于货位目前货品数量！",type:"warning"}),e=!1),!e)return!1;this.$emit("getAllocationArr",this.multipleSelection),this.$parent.goodsAddressVisible=!1}else this.$message({message:"请选择货位信息",type:"warning"})}},mounted:function(){this.$set(this,"params",{goods_id:this.selectData.goods_id,warehouse_id:this.selectData.warehouse_id,company_id:this.selectData.company_id}),this.initData()}}),n=o,r=(a("d95ac"),a("2877")),l=Object(r["a"])(n,i,s,!1,null,"cc8da5b8",null);t["a"]=l.exports},b7b1:function(e,t,a){"use strict";a("96ce")},b944:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",[e._v("库存管理")]),a("el-breadcrumb-item",{staticClass:"attrbute"},[a("span",{on:{click:e.goBack}},[e._v("旧胎退回")])]),a("el-breadcrumb-item",[e._v(e._s(e.title)+"旧胎退回")])],1),a("div",{staticClass:"search_container"},[a("el-form",{ref:"TableDataRef",staticClass:"demo-form-inline",attrs:{inline:!0,model:e.params}},[a("el-form-item",{attrs:{label:"库存组织",size:"mini",prop:"company_id",rules:[{required:!0,message:"请选择库存组织",trigger:"change"}]}},[e._v(" "+e._s(function(){0==e.params.company_id&&(e.params.company_id=null)}())+" "),a("el-select",{attrs:{placeholder:"请选择",disabled:!!e.tirebackstorageAddGet.outstock_id,filterable:""},on:{change:e.companyChange,focus:e.companyListInvok},model:{value:e.params.company_id,callback:function(t){e.$set(e.params,"company_id",t)},expression:"params.company_id"}},e._l(e.companyList,(function(t){return a("el-option",{key:t.company_id,attrs:{label:t.company_name,value:t.company_id}},[a("span",{class:1==t.type?"optionStyle":""},[e._v(e._s(t.company_name))])])})),1)],1),a("el-form-item",{attrs:{label:"业务日期",size:"mini",prop:"business_time",rules:[{required:!0,message:"请选择业务日期",trigger:"change"}]}},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:e.params.business_time,callback:function(t){e.$set(e.params,"business_time",t)},expression:"params.business_time"}})],1),a("el-form-item",{attrs:{label:"出库类型：",size:"mini"}},[a("span",[e._v("旧胎退回")])]),a("el-form-item",{attrs:{label:"选择客户",size:"mini"}},[a("el-input",{attrs:{disabled:""},model:{value:e.params.customer_name,callback:function(t){e.$set(e.params,"customer_name",t)},expression:"params.customer_name"}})],1),a("el-form-item",{attrs:{label:"业务员",size:"mini"}},[e._v(" "+e._s(function(){0==e.params.business_id&&(e.params.business_id=null)}())+" "),a("el-select",{attrs:{clearable:"",filterable:""},on:{focus:e.EmployeeListInvok},model:{value:e.params.business_id,callback:function(t){e.$set(e.params,"business_id",t)},expression:"params.business_id"}},e._l(e.employeeList,(function(e){return a("el-option",{key:e.employee_id,attrs:{label:e.employee_name,value:e.employee_id}})})),1)],1),a("el-form-item",{attrs:{label:"部门",size:"mini"}},[e._v(" "+e._s(function(){0==e.params.department_id&&(e.params.department_id=null)}())+" "),a("el-select",{attrs:{clearable:"",placeholder:"请选择",filterable:""},on:{focus:e.DepartmentListInvok,change:e.departmentChange},model:{value:e.params.department_id,callback:function(t){e.$set(e.params,"department_id",t)},expression:"params.department_id"}},e._l(e.departmentList,(function(e){return a("el-option",{key:e.department_id,attrs:{label:e.department_name,value:e.department_id}})})),1)],1),a("el-form-item",{attrs:{label:"收货人",size:"mini",prop:"consignee_name"}},[a("el-input",{model:{value:e.params.consignee_name,callback:function(t){e.$set(e.params,"consignee_name",t)},expression:"params.consignee_name"}})],1),a("el-form-item",{attrs:{label:"收货人手机号",size:"mini"}},[a("el-input",{model:{value:e.params.consignee_mobile,callback:function(t){e.$set(e.params,"consignee_mobile",t)},expression:"params.consignee_mobile"}})],1),a("el-form-item",{attrs:{label:"所属区域",size:"mini"}},[e.defaultArea&&e.defaultArea.length?a("getAreaList",{attrs:{defaultArea:e.defaultArea},on:{changeDefaultArea:e.changeDefaultArea}}):e._e()],1),a("el-form-item",{attrs:{size:"mini",label:"详细地址"}},[a("el-input",{model:{value:e.params.address,callback:function(t){e.$set(e.params,"address",t)},expression:"params.address"}})],1),a("el-form-item",{attrs:{label:"送货需求",size:"mini"}},[e._v(" "+e._s(function(){0==e.params.delivery_demand_id&&(e.params.delivery_demand_id=null)}())+" "),a("el-select",{attrs:{clearable:""},on:{focus:e.getDeliveryDemandListInvok},model:{value:e.params.delivery_demand_id,callback:function(t){e.$set(e.params,"delivery_demand_id",t)},expression:"params.delivery_demand_id"}},e._l(e.deliveryDemandList,(function(e){return a("el-option",{key:e.delivery_demand_id,attrs:{label:e.delivery_demand_name,value:e.delivery_demand_id}})})),1)],1),a("el-form-item",{attrs:{label:"交货方式",size:"mini"}},[e._v(" "+e._s(function(){0==e.params.hand_over_id&&(e.params.hand_over_id=null)}())+" "),a("el-select",{attrs:{clearable:""},on:{focus:e.getHandoverListInvok},model:{value:e.params.hand_over_id,callback:function(t){e.$set(e.params,"hand_over_id",t)},expression:"params.hand_over_id"}},e._l(e.handoverList,(function(e){return a("el-option",{key:e.hand_over_id,attrs:{label:e.hand_over_name,value:e.hand_over_id}})})),1)],1),a("el-form-item",{attrs:{label:"回款方式",size:"mini",prop:"payment_method"}},[e._v(" "+e._s(function(){0==e.params.intentional_logistics_id&&(e.params.intentional_logistics_id=null)}())+" "),a("el-select",{model:{value:e.params.payment_method,callback:function(t){e.$set(e.params,"payment_method",t)},expression:"params.payment_method"}},[a("el-option",{attrs:{label:"客户自结",value:1}},[e._v("客户自结")]),a("el-option",{attrs:{label:"物流代收",value:2}},[e._v("物流代收")])],1)],1),a("el-form-item",{attrs:{label:"意向物流",size:"mini",prop:"intentional_logistics_id"}},[e._v(" "+e._s(function(){0==e.params.intentional_logistics_id&&(e.params.intentional_logistics_id=null)}())+" "),a("el-select",{attrs:{clearable:"",filterable:"","filter-method":e.logisticsInvok},on:{focus:e.logisticsInvok,change:e.logisticsChanges},model:{value:e.params.intentional_logistics_id,callback:function(t){e.$set(e.params,"intentional_logistics_id",t)},expression:"params.intentional_logistics_id"}},e._l(e.logisticsList,(function(e){return a("el-option",{key:e.logistics_id,attrs:{label:e.logistics_name,value:e.logistics_id}})})),1)],1),a("el-form-item",{attrs:{label:"备注"}},[a("el-input",{model:{value:e.params.abstract,callback:function(t){e.$set(e.params,"abstract",t)},expression:"params.abstract"}})],1)],1)],1),a("div",{staticClass:"add_delet"},[e.tirebackstorageAddGet.outstock_id?e._e():a("el-button",{staticClass:"addBtn",attrs:{icon:"el-icon-circle-plus-outline",type:"primary",size:"mini"},on:{click:e.addF}},[e._v("来源单据")]),a("el-button",{attrs:{plain:"",icon:"el-icon-delete",size:"mini"},on:{click:e.deletes}},[e._v("删行")])],1),a("div",{staticClass:"table_container"},[a("el-table",{staticStyle:{width:"100%"},attrs:{"highlight-current-row":!0,"tooltip-effect":"light",border:"",data:e.TableData.goods_info,"max-height":"500","summary-method":e.getSummaries,"show-summary":""},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{"show-overflow-tooltip":!0,type:"selection",fixed:"left",align:"center",width:"44","text-align":"center"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,label:"序号",type:"index",width:"60"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"goods_id",label:"商品编号",width:"170"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"goods_name",label:"商品名称","min-width":"500"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("pre",[e._v(e._s(t.row.goods_name))])]}}])}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"batch",label:"年周/批次",width:"100"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,label:"仓库名称",width:"132"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-select",{attrs:{filterable:"",placeholder:"请输入",clearable:"","value-key":"allocation_id"},on:{focus:function(a){return e.getWarehouseInfo(t.row,t.$index)},change:function(a){return e.warehouseChange(t.row,t.$index)}},model:{value:t.row.warehouseObj,callback:function(a){e.$set(t.row,"warehouseObj",a)},expression:"scope.row.warehouseObj"}},[a("ul",{staticClass:"customer customer-ul4 customer-ul2"},[a("li",[e._v("仓库")]),a("li",[e._v("货位")]),a("li",{staticStyle:{"text-align":"right"}},[e._v("可用数量")]),a("li",{staticStyle:{"text-align":"right"}},[e._v("在库数量")])]),e._l(t.row.wareHouselist,(function(t){return a("el-option",{key:t.allocation_id,attrs:{label:t.warehouse_name,value:t}},[a("ul",{staticClass:"customer customer-ul4"},[a("li",{attrs:{title:t.warehouse_name}},[e._v(e._s(t.warehouse_name))]),a("li",{attrs:{title:t.allocation_name}},[e._v(e._s(t.allocation_name))]),a("li",{staticStyle:{"text-align":"right"},attrs:{title:t.available_stocks}},[e._v(e._s(t.available_stocks))]),a("li",{staticStyle:{"text-align":"right"},attrs:{title:t.stocks}},[e._v(e._s(t.stocks))])])])}))],2)]}}])}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"allocation_name",label:"货位名称",width:"120"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"tire_un",label:"胎号",width:"100"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"real_num",label:"数量",align:"right",width:"100"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"company_appraisal_sn",label:"来源单号",width:"150"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,label:"备注","min-width":"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{maxlength:"300",placeholder:"请输入","suffix-icon":"el-icon-edit-outline"},model:{value:t.row.remark,callback:function(a){e.$set(t.row,"remark",a)},expression:"scope.row.remark"}})]}}])})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){return e.goBack()}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submit("TableDataRef")}}},[e._v("确 定")])],1),e.goodsAddressVisible?a("chooseProducts",{attrs:{message:e.params.company_id},on:{getAllocationArr:e.getAllocationArr,customerId:e.getCustomerInfo}}):e._e()],1)},s=[],o=a("b85c"),n=a("2909"),r=a("5530"),l=(a("d3b7"),a("4de4"),a("99af"),a("a15b"),a("159b"),a("6062"),a("3ca3"),a("ddb0"),a("a630"),a("e9c4"),a("d81d"),a("a9e3"),a("caad"),a("b42c")),c=a("d12c"),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-dialog",{staticClass:"dialogForm",attrs:{"close-on-click-modal":!1,title:"引用公司鉴定单据",visible:!0,width:"1300px"},on:{close:e.closeDialog}},[a("div",{staticClass:"search_container"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.params}},[a("el-form-item",{attrs:{label:"库存组织",size:"mini",prop:"company_id"}},[e._v(" "+e._s(function(){0==e.params.company_id&&(e.params.company_id=null)}())+" "),a("el-select",{attrs:{placeholder:"请选择",filterable:"",disabled:"disabled"},on:{focus:e.companyListInvok},model:{value:e.params.company_id,callback:function(t){e.$set(e.params,"company_id",t)},expression:"params.company_id"}},e._l(e.companyList,(function(t){return a("el-option",{key:t.company_id,attrs:{label:t.company_name,value:t.company_id}},[a("span",{class:1==t.type?"optionStyle":""},[e._v(e._s(t.company_name))])])})),1)],1),a("el-form-item",{attrs:{label:"业务日期",size:"mini"}},[a("el-date-picker",{attrs:{type:"daterange","range-separator":"-","value-format":"yyyy-MM-dd","start-placeholder":"开始日期","end-placeholder":"结束日期",clearable:""},model:{value:e.timeValue,callback:function(t){e.timeValue=t},expression:"timeValue"}})],1),a("el-form-item",{attrs:{label:"单据号",size:"mini"}},[a("el-input",{staticClass:"shortSearchInput",model:{value:e.params.company_appraisal_sn,callback:function(t){e.$set(e.params,"company_appraisal_sn",t)},expression:"params.company_appraisal_sn"}})],1),a("el-form-item",{attrs:{label:"客户名称",size:"mini"}},[a("el-select",{attrs:{filterable:"",placeholder:"请输入",clearable:"",loading:e.loading,remote:"","remote-method":e.clienteleListInvok},on:{focus:e.clienteleListInvok},model:{value:e.params.customer_id,callback:function(t){e.$set(e.params,"customer_id",t)},expression:"params.customer_id"}},[a("ul",{staticClass:"customer customer-ul4 customer-ul2"},[a("li",[e._v("客户编号")]),a("li",[e._v("客户名称")]),a("li",[e._v("联系人")]),a("li",[e._v("联系电话")]),a("li",[e._v("区域")])]),e._l(e.customerList,(function(t){return a("el-option",{key:t.customer_id,attrs:{label:t.customer_name,value:t.customer_id}},[a("ul",{staticClass:"customer customer-ul4"},[a("li",{attrs:{title:t.customer_id}},[e._v(e._s(t.customer_id))]),a("li",{attrs:{title:t.customer_name}},[e._v(e._s(t.customer_name))]),a("li",{attrs:{title:t.contact_name}},[e._v(e._s(t.contact_name))]),a("li",{attrs:{title:t.customer_mobile}},[e._v(e._s(t.customer_mobile))]),a("li",[e._v(e._s(t.province_name)+"/"+e._s(t.city_name)+"/"+e._s(t.area_name))])])])}))],2)],1),a("el-form-item",{attrs:{label:"胎号",size:"mini"}},[a("el-input",{staticClass:"shortSearchInput",model:{value:e.params.tire_un,callback:function(t){e.$set(e.params,"tire_un",t)},expression:"params.tire_un"}})],1),a("el-form-item",{attrs:{label:"商品编号",size:"mini"}},[a("el-input",{staticClass:"shortSearchInput",model:{value:e.params.goods_id,callback:function(t){e.$set(e.params,"goods_id",t)},expression:"params.goods_id"}})],1),a("el-form-item",{attrs:{label:"商品名称",size:"mini"}},[a("el-input",{staticClass:"shortSearchInput",model:{value:e.params.goods_name,callback:function(t){e.$set(e.params,"goods_name",t)},expression:"params.goods_name"}})],1),a("el-form-item",{staticClass:"search-style search",attrs:{size:"mini"}},[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:e.onSearch}},[e._v("查询")]),a("el-button",{attrs:{plain:"",size:"mini"},on:{click:e.onReset}},[e._v("重置")])],1)],1)],1),a("div",{staticClass:"table_container"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading1,expression:"loading1"}],staticStyle:{width:"100%"},attrs:{"highlight-current-row":!0,"tooltip-effect":"light",border:"",data:e.TableData.tableData,"max-height":"450"},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{"show-overflow-tooltip":!0,type:"selection",fixed:"left",align:"center",width:"44"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"company_appraisal_sn",width:"145",label:"单据号"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"business_time",label:"业务日期"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"customer_name",label:"客户名称"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"goods_id",label:"商品编号"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"goods_name",label:"商品名称","min-width":"500"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("pre",[e._v(e._s(t.row.goods_name))])]}}])}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"tire_un",label:"胎号"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"company_status",label:"公司鉴定结果"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"remark",label:"备注"}})],1)],1),a("div",{staticClass:"page_container"},[a("div",{staticClass:"pageNumber"},[e._v("每页显示")]),a("el-pagination",{staticClass:"erp-pagination",attrs:{"current-page":e.goPage,"page-size":e.pageSize1,"page-sizes":[30,50,100,500],layout:"total,sizes, prev, pager, next,jumper",prevText:" 上一页 ",nextText:"下一页 ",total:e.TableData.total},on:{"size-change":e.handleSizeChange,"update:currentPage":function(t){e.goPage=t},"update:current-page":function(t){e.goPage=t},"current-change":e.handleCurrentChange}})],1),a("div",{staticClass:"dialog-footer ",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){return e.closeDialog()}}},[e._v("取 消")]),a("el-button",{staticClass:"tx ",attrs:{type:"primary "},on:{click:function(t){return e.dialogSubmitForm()}}},[e._v("确 定")])],1)])],1)},u=[],m=a("65b0"),p={data:function(){return{authority:{},radio:"",TableData:{tableData:[]},companyList:[],params:{},per_page:[30,50,100,500],loading:!1,searchParams:{},goPage:1,pageSize:30,timeValue:[],dialogmultipleSelection:[],goodsList:[],options4:[],list:[]}},props:["message"],methods:{handleSelectionChange:function(e){this.addmultipleSelection=e},handleSizeChange:function(e){Object.assign(this.searchParams.params,{per_page:e,page:1}),Object(m["g"])(this.searchParams)},handleCurrentChange:function(e){Object.assign(this.searchParams.params,{page:e}),Object(m["g"])(this.searchParams)},getCustomerListRemote:function(e){getCustomerList(this,{company_id:this.params.company_id,customer_name:e})},onSearch:function(){this.timeValue&&2==this.timeValue.length?(this.params.start_time=this.timeValue[0],this.params.end_time=this.timeValue[1]):this.params.start_time=this.params.end_time="",Object.assign(this.searchParams.params,this.params,{page:1}),Object(m["g"])(this.searchParams)},onReset:function(){this.$set(this,"params",{}),this.$set(this.params,"company_id",this.message),this.timeValue=[],this.$set(this,"searchParams",{params:{company_id:this.message},TableData:this.TableData,API:"getreferenceAppraisalList",vm:this}),Object(m["g"])(this.searchParams)},dialoghandleSelectionChange:function(e){this.dialogmultipleSelection=e},closeDialog:function(){this.$parent.goodsAddressVisible=!1},dialogSubmitForm:function(){var e=this,t=this.addmultipleSelection.every((function(t){return e.addmultipleSelection[0].customer_id==t.customer_id}));if(!t)return this.$message({message:"多个客户的公司鉴定数据不可在一张旧胎退回单上，请重新选择！",type:"warning"}),!1;var a=this.addmultipleSelection.map((function(e){return e.company_appraisal_goods_id}));this.$emit("customerId",this.addmultipleSelection[0].customer_id),this.$emit("getAllocationArr",a),this.$parent.goodsAddressVisible=!1}},mounted:function(){this.companyListInvok(),this.$set(this.params,"company_id",this.message),this.$set(this,"searchParams",{params:{company_id:this.message},TableData:this.TableData,API:"getreferenceAppraisalList",vm:this}),Object(m["g"])(this.searchParams)}},h=p,f=a("2877"),_=Object(f["a"])(h,d,u,!1,null,null,null),g=_.exports,b=a("2f62"),v={name:"instorageOldtyresstorageTirebackstorageAdd",data:function(){return{authority:{},title:"新增",goodsAddressVisible:!1,addChandise:!1,rowIndex:null,multipleSelection:[],TableData:{goods_info:[]},showAllocationList:!0,params:{payment_method:1},showDepartment:!0,defaultArea:[0],loading:!1,cityList:[]}},components:{chooseProducts:g,goodsAddress:l["a"],getAreaList:c["a"]},computed:Object(r["a"])({},Object(b["c"])(["tirebackstorageAddGet"])),methods:Object(r["a"])(Object(r["a"])({},Object(b["b"])(["tirebackstorageIndexAct"])),{},{getWarehouseInfo:function(e,t){var a=this;this.$axMethod.getBatchInfo({company_id:this.params.company_id,goods_id:e.goods_id}).then((function(e){"200"==e.data.code&&a.$set(a.TableData.goods_info[t],"wareHouselist",e.data.data)}))},warehouseChange:function(e,t){var a=this;if(Array.isArray(e.wareHouselist))["batch_id","warehouse_id","warehouse_name","allocation_name","allocation_id"].forEach((function(i){a.$set(a.TableData.goods_info[t],i,e.warehouseObj[i])}))},logisticsChanges:function(e){this.params.logistics_name=this.logisticsList.filter((function(t){return t.logistics_id==e}))[0].logistics_name,this.params.intentional_logistics=this.params.logistics_name},handleSelectionChange:function(e){this.multipleSelection=e},goBack:function(){this.$router.push({path:"/inventory/tireback"}),this.tirebackstorageIndexAct({goPage:this.tirebackstorageAddGet.goPage,params:this.tirebackstorageAddGet.params,pageSize:this.tirebackstorageAddGet.pageSize})},addF:function(){this.params.company_id?this.goodsAddressVisible=!0:this.$message({message:"请先选择库存组织！",type:"warning"})},attribute:function(e){this.addChandise=e},getCustomerInfo:function(e){var t=this;this.params.customer_id=e;var a={customer_id:e,company_id:this.params.company_id};if(!e)return!1;this.$axMethod.getCustomerInfoNEWqx(a).then((function(e){var a=e.data;if(200==a.code){var i=["business_id","department_id","customer_id","customer_name","business_name","hand_over_id","hand_over_name","delivery_demand_id","delivery_demand_name"];i.forEach((function(e){t.$set(t.params,e,a.data[e])})),Object.assign(a.data,{employee_id:a.data.business_id,employee_name:a.data.business_name}),Object(m["l"])(t,a.data)}})).then((function(e){t.$axMethod.getDefaultAddress(a).then((function(e){var a=e.data;200==a.code&&(t.$set(t.params,"address",a.data.address),t.$set(t.params,"consignee_name",a.data.consignee_name),t.$set(t.params,"consignee_mobile",a.data.consignee_mobile),t.defaultAreaName="".concat(a.data.province_name,"/").concat(a.data.city_name,"/").concat(a.data.area_name),t.defaultArea=[a.data.province_id,a.data.city_id,a.data.area_id],t.params.cityList=t.defaultArea.join(","),t.params.province_id=t.defaultArea[0],t.params.city_id=t.defaultArea[1],t.params.area_id=t.defaultArea[2])}))}))},getAllocationArr:function(e){var t=this,a=e.join(","),i=this;this.$axMethod.getreferenceAppraisalInfo({company_appraisal_goods_id:a}).then((function(e){var a=e.data;200==a.code&&(a.data.forEach((function(e){e.batch="返胎",e.wareHouselist=[{warehouse_id:e.warehouse_id,warehouse_name:e.warehouse_name,allocation_id:e.allocation_id,allocation_name:e.allocation_name}],e.warehouseObj={warehouse_id:e.warehouse_id,warehouse_name:e.warehouse_name,allocation_id:e.allocation_id,allocation_name:e.allocation_name}})),a.data.forEach((function(e){e.discount_unit_price=0,e.company_id=i.params.company_id,e.company_name=i.params.company_name})),t.TableData.goods_info=a.data,Object(m["l"])(t,t.TableData.goods_info))}))},deletes:function(){if(this.multipleSelection.length){var e=new Set(this.TableData.goods_info),t=new Set(this.multipleSelection),a=new Set(Object(n["a"])(e).filter((function(e){return!t.has(e)})));this.$set(this.TableData,"goods_info",Array.from(a))}else this.$message({message:"请先选择要删除的商品！",type:"warning"})},submit:function(e){var t=this;if(!this.TableData.goods_info.length)return this.$message({message:"请先添加商品！",type:"warning"}),!1;this.$refs[e].validate((function(e){if(e){var a=Object.assign({},t.TableData,t.params);t.TableData.goods_info.forEach((function(e){e.unit_price=0,delete e.wareHouselist,delete e.warehouseObj,delete e.subtotal_price})),a.goods_info=JSON.stringify(t.TableData.goods_info),Object.assign(t.params,{intentional_logistics:t.params.logistics_name});var i=t.params.outstock_id?"geteditOutstock":"getaddOutstock";t.$baseData.checkCarDoctor({company_id:t.params.company_id,company_name:t.params.company_name,bill_type:15,bill_id:t.params.outstock_id,operation_type:t.params.outstock_id?2:1,goods_info:JSON.stringify(t.TableData.goods_info)}).then((function(){t.$axMethod[i](a).then((function(e){var a=e.data;"200"==a.code&&(t.$message({message:a.msg,type:"success"}),t.goBack())}))}))}}))},companyChange:function(e){Object(m["a"])(this,this.params),this.$set(this.params,"customer_id",null),this.$set(this.params,"goods_info",[])},departmentChange:function(e){this.$set(this.params,"business_id","")},changeDefaultArea:function(e){this.params.cityList=e.join(","),this.params.province_id=e[0],this.params.city_id=e[1],this.params.area_id=e[2]},getSummaries:function(e){var t=e.columns,a=e.data,i=[];return t.forEach((function(e,t){if(1!==t){var s=a.map((function(t){return Number(t[e.property])}));s.every((function(e){return isNaN(e)}))?i[t]="":(i[t]=s.reduce((function(e,t){var a=Number(t);return isNaN(a)?e:e+t}),0),i[t]=8==t?parseFloat(i[t]):"")}else i[t]="总计"})),i}}),mounted:function(){var e=this;if(this.title=this.tirebackstorageAddGet.outstock_id?"修改":"新增",this.params.outstock_id=this.tirebackstorageAddGet.outstock_id,this.tirebackstorageAddGet.outstock_id)delete this.TableData.goods_info,this.$axMethod.getcheckOutstock({outstock_id:this.tirebackstorageAddGet.outstock_id}).then((function(t){var a=t.data;if(200==a.code){var i,s=Object(o["a"])(a.data.goods_info);try{for(s.s();!(i=s.n()).done;){var n=i.value;n.wareHouselist=[{warehouse_id:n.warehouse_id,warehouse_name:n.warehouse_name,allocation_id:n.allocation_id,allocation_name:n.allocation_name}],n.warehouseObj={warehouse_id:n.warehouse_id,warehouse_name:n.warehouse_name,allocation_id:n.allocation_id,allocation_name:n.allocation_name}}}catch(r){s.e(r)}finally{s.f()}e.$set(e.TableData,"goods_info",a.data.goods_info),e.$set(e,"params",a.data),e.defaultArea=[a.data.province_id,a.data.city_id,a.data.area_id],e.params.cityList=e.defaultArea.join(","),e.params.province_id=e.defaultArea[0],e.params.city_id=e.defaultArea[1],e.params.area_id=e.defaultArea[2],Object.assign(a.data,{employee_id:a.data.business_id,employee_name:a.data.business_name}),e.logisticsList=[],e.logisticsList.push({logistics_id:a.data.intentional_logistics_id,logistics_name:a.data.intentional_logistics}),Object(m["l"])(e,a.data)}}));else{var t=localStorage,a=t.employee_id,i=t.company_admin_id;[0,1,2].includes(Number(a))||i>0?(this.$set(this,"params",{outstock_type_id:10008,business_time:this.$publicFution.formatData(new Date),company_id:Number(localStorage.company_id),goods_info:[],payment_method:1,cityList:""}),this.$set(this,"TableData",{goods_info:[]})):(this.$set(this,"params",{outstock_type_id:10008,business_time:this.$publicFution.formatData(new Date),company_id:Number(localStorage.company_id),department_id:Number(localStorage.department_id),business_id:Number(localStorage.employee_id),payment_method:1,cityList:""}),this.$set(this,"TableData",{goods_info:[]})),Object(m["l"])(this,localStorage)}}},y=v,w=(a("b7b1"),Object(f["a"])(y,i,s,!1,null,"0b7a9e5c",null));t["default"]=w.exports},bb2f:function(e,t,a){var i=a("d039");e.exports=!i((function(){return Object.isExtensible(Object.preventExtensions({}))}))},d12c:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-cascader",{attrs:{filterable:e.filterable,placeholder:"请选择",options:e.options,clearable:"",size:"mini",props:e.prop},on:{change:e.changes,"expand-change":e.handleItemChange},model:{value:e.newDefaultArea,callback:function(t){e.newDefaultArea=t},expression:"newDefaultArea"}})],1)},s=[],o=(a("e3df"),a("42aa"),a("b1f0"),{data:function(){return{options:[],newDefaultArea:[]}},props:{defaultArea:{type:Array},filterable:{type:Boolean,default:!1},Level:{type:Number,default:3},prop:{type:Object,default:function(){return{value:"value",children:"cities"}}}},methods:{changes:function(e){var t=this;this.$nextTick((function(){t.$emit("changeDefaultArea",t.newDefaultArea)}))},handleItemChange:function(e){var t,a=this;1==e.length&&(t=e[0]),2==e.length&&(t=e[1]),this.$axios({method:"get",url:this.$api.getAreaListOption,params:{p_id:t,is_page:1}}).then((function(t){for(var i in a.options){if(1==e.length&&a.options[i].value==e[0]&&!a.options[i].cities.length)for(var s in t.data.data){var o={};o.label=t.data.data[s].area_name,o.value=t.data.data[s].area_id,3==a.Level&&(o.cities=[]),a.options[i].cities.push(o)}if(2==e.length&&3==a.Level)for(var n in a.options[i].cities)if(a.options[i].cities[n].value==e[1]&&!a.options[i].cities[n].cities.length)for(var r in t.data.data){var l={};l.label=t.data.data[r].area_name,l.value=t.data.data[r].area_id,a.options[i].cities[n].cities.push(l)}}}))},initAddress:function(){var e=this,t={level:2},a=this;a.$axMethod.getAreaList(t).then((function(t){var i={};for(var s in t.data.data){i={label:t.data.data[s].area_name,value:t.data.data[s].area_id,cities:[]};a.options.push(i)}if(e.defaultArea.length<=1)return!1;var o={level:3,p_id:a.defaultArea[0]};a.$axMethod.getAreaList(o).then((function(t){for(var i in a.options)if(a.options[i].value==o.p_id&&!a.options[i].cities.length)for(var s in t.data.data){var n={label:t.data.data[s].area_name,value:t.data.data[s].area_id,cities:[]};a.options[i].cities.push(n)}if(e.defaultArea.length<=2)return!1;var r={level:4,p_id:a.defaultArea[1]};a.$axMethod.getAreaList(r).then((function(e){for(var t in a.options)for(var i in a.options[t].cities)if(a.options[t].cities[i].value==r.p_id&&!a.options[t].cities[i].cities.length)for(var s in e.data.data){var o={label:e.data.data[s].area_name,value:e.data.data[s].area_id};a.options[t].cities[i].cities.push(o)}}))}))}))}},mounted:function(){var e=this;if(this.defaultArea.length>1)this.newDefaultArea=this.defaultArea.filter((function(e){return e})),this.initAddress();else{var t={level:2};this.$axMethod.getAreaList(t).then((function(t){var a={};for(var i in t.data.data){a={label:t.data.data[i].area_name,value:t.data.data[i].area_id,cities:[]};e.options.push(a)}}))}},watch:{defaultArea:{handler:function(e,t){this.options=[],this.newDefaultArea=this.defaultArea,this.initAddress()},deep:!0}}}),n=o,r=a("2877"),l=Object(r["a"])(n,i,s,!1,null,null,null);t["a"]=l.exports},d95ac:function(e,t,a){"use strict";a("0a0e")},e2cc:function(e,t,a){var i=a("6eeb");e.exports=function(e,t,a){for(var s in t)i(e,s,t[s],a);return e}},f183:function(e,t,a){var i=a("23e7"),s=a("e330"),o=a("d012"),n=a("861d"),r=a("1a2d"),l=a("9bf2").f,c=a("241c"),d=a("057f"),u=a("90e3"),m=a("bb2f"),p=!1,h=u("meta"),f=0,_=Object.isExtensible||function(){return!0},g=function(e){l(e,h,{value:{objectID:"O"+f++,weakData:{}}})},b=function(e,t){if(!n(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!r(e,h)){if(!_(e))return"F";if(!t)return"E";g(e)}return e[h].objectID},v=function(e,t){if(!r(e,h)){if(!_(e))return!0;if(!t)return!1;g(e)}return e[h].weakData},y=function(e){return m&&p&&_(e)&&!r(e,h)&&g(e),e},w=function(){k.enable=function(){},p=!0;var e=c.f,t=s([].splice),a={};a[h]=1,e(a).length&&(c.f=function(a){for(var i=e(a),s=0,o=i.length;s<o;s++)if(i[s]===h){t(i,s,1);break}return i},i({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:d.f}))},k=e.exports={enable:w,fastKey:b,getWeakData:v,onFreeze:y};o[h]=!0}}]);
//# sourceMappingURL=chunk-7fdb72a1.2f12dad8.js.map