(window["webpackJsonp_service"]=window["webpackJsonp_service"]||[]).push([["chunk-57b58384"],{"173f":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"search_container"},[i("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.params}},[i("el-form-item",{attrs:{label:"销售组织",size:"mini"}},[i("el-select",{attrs:{clearable:"",placeholder:"请选择",filterable:"",maxlength:"100"},on:{change:t.clearBusiss,focus:t.companyListInvok},model:{value:t.params.company_id,callback:function(e){t.$set(t.params,"company_id",e)},expression:"params.company_id"}},t._l(t.companyList,(function(e){return i("el-option",{key:e.company_id,attrs:{label:e.company_name,value:e.company_id}},[i("span",{class:1==e.type?"optionStyle":""},[t._v(t._s(e.company_name))])])})),1)],1),i("el-form-item",{attrs:{label:"创建日期",size:"mini"}},[i("el-date-picker",{attrs:{type:"daterange","range-separator":"-","value-format":"yyyy-MM-dd","start-placeholder":"开始日期","end-placeholder":"结束日期"},on:{change:t.changeDate},model:{value:t.timeValue,callback:function(e){t.timeValue=e},expression:"timeValue"}},[i("i",{staticClass:"el-input__icon el-icon-date",attrs:{slot:"suffix"},slot:"suffix"})])],1),i("el-form-item",{staticClass:"wauto",attrs:{label:"区域",size:"mini",prop:"cityList"}},[t.defaultArea&&t.defaultArea.length?i("getAreaList",{attrs:{defaultArea:t.defaultArea},on:{changeDefaultArea:t.changeDefaultArea,focus:t.getprovinceFocus}}):t._e()],1),i("el-form-item",{attrs:{label:"客户名称",size:"mini"}},[i("el-select",{attrs:{filterable:"",placeholder:"请输入",clearable:"",loading:t.loading,remote:"","remote-method":t.clienteleListInvok},on:{focus:t.clienteleListInvok,change:t.getCustomerChange},model:{value:t.params.customer_id,callback:function(e){t.$set(t.params,"customer_id",e)},expression:"params.customer_id"}},[i("ul",{staticClass:"customer customer-ul4 customer-ul2"},[i("li",[t._v("客户编号")]),i("li",[t._v("客户名称")]),i("li",[t._v("联系人")]),i("li",[t._v("联系电话")]),i("li",[t._v("区域")])]),t._l(t.customerList,(function(e){return i("el-option",{key:e.customer_id,attrs:{label:e.customer_name,value:e.customer_id}},[i("ul",{staticClass:"customer customer-ul4"},[i("li",{attrs:{title:e.customer_id}},[t._v(t._s(e.customer_id))]),i("li",{attrs:{title:e.customer_name}},[t._v(t._s(e.customer_name))]),i("li",{attrs:{title:e.contact_name}},[t._v(t._s(e.contact_name))]),i("li",{attrs:{title:e.customer_mobile}},[t._v(t._s(e.customer_mobile))]),i("li",[t._v(t._s(e.province_name)+"/"+t._s(e.city_name)+"/"+t._s(e.area_name))])])])}))],2)],1),i("el-form-item",{attrs:{label:"联系人",size:"mini"}},[i("el-input",{attrs:{maxlength:"100",placeholder:"请输入"},model:{value:t.params.contact_name,callback:function(e){t.$set(t.params,"contact_name",e)},expression:"params.contact_name"}})],1),i("el-form-item",{attrs:{label:"联系电话",size:"mini"}},[i("el-input",{attrs:{maxlength:"100",placeholder:"请输入"},model:{value:t.params.customer_mobile,callback:function(e){t.$set(t.params,"customer_mobile",e)},expression:"params.customer_mobile"}})],1),i("el-form-item",{staticClass:"search-style search",attrs:{size:"mini"}},[i("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(e){return t.onSearch(1)}}},[t._v("查询")]),i("el-button",{attrs:{plain:"",size:"mini"},on:{click:t.onReset}},[t._v("重置")])],1)],1)],1),i("div",{staticClass:"add_delet"},[1==t.authority.b_add?i("el-button",{staticClass:"addBtn",attrs:{icon:"el-icon-circle-plus-outline",type:"primary",size:"mini"},on:{click:t.addFun}},[t._v("新增")]):t._e(),1==t.authority.b_del?i("el-button",{attrs:{plain:"",icon:"el-icon-delete",size:"mini"},on:{click:t.deletes}},[t._v("删除")]):t._e(),i("el-button",{attrs:{plain:"",icon:"el-icon-download",size:"mini"},on:{click:t.downLoadFile}},[t._v("下载模板")]),1==t.authority.b_import?i("el-button",{staticClass:"addBtn",attrs:{plain:"",icon:"iconfont icon-daoru5",size:"mini"},on:{click:t.dialogEmployee}},[t._v("导入")]):t._e(),1==t.authority.b_export?i("el-dropdown",{staticStyle:{"margin-left":"10px"}},[i("span",{staticStyle:{cursor:"pointer",color:"#4e90e2"},attrs:{"split-button":""}},[i("el-button",{attrs:{plain:"",icon:"iconfont icon-daochu10",size:"mini"}},[t._v(t._s(t.fileter))])],1),i("el-dropdown-menu",{staticStyle:{"margin-top":"10px"},attrs:{slot:"dropdown"},slot:"dropdown"},[i("el-dropdown-item",{nativeOn:{click:function(e){return t.exportFile(1)}}},[t._v("导出Excel文件")]),i("el-dropdown-item",{nativeOn:{click:function(e){return t.exportFile(2)}}},[t._v("导出CSV逗号分隔")])],1)],1):t._e()],1),i("div",{staticClass:"table_container"},[i("div",{staticClass:"table_container"},[i("xTable",{ref:"xTable",attrs:{ajax:{url:"getCustomerList",params:t.params},sign:t.sign,tableColumn:t.tableColumn}})],1)]),i("upload",{ref:"upload",attrs:{options:t.options},on:{receiveUploadMsg:t.receiveUploadMsg}})],1)},s=[],n=i("5530"),o=(i("4de4"),i("d3b7"),i("a15b"),i("a9e3"),i("65b0")),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-cascader",{attrs:{filterable:t.filterable,placeholder:"请选择",options:t.options,clearable:"",size:"mini",props:t.prop},on:{change:t.changes,"expand-change":t.handleItemChange},model:{value:t.newDefaultArea,callback:function(e){t.newDefaultArea=e},expression:"newDefaultArea"}})],1)},l=[],c=(i("e3df"),i("42aa"),i("b1f0"),{data:function(){return{options:[],newDefaultArea:[]}},props:{defaultArea:{type:Array},filterable:{type:Boolean,default:!1},Level:{type:Number,default:3},prop:{type:Object,default:function(){return{value:"value",children:"cities"}}}},methods:{changes:function(t){var e=this;this.$nextTick((function(){e.$emit("changeDefaultArea",e.newDefaultArea)}))},handleItemChange:function(t){var e,i=this;1==t.length&&(e=t[0]),2==t.length&&(e=t[1]),this.$axios({method:"get",url:this.$api.getAreaListOption,params:{p_id:e,is_page:1}}).then((function(e){for(var a in i.options){if(1==t.length&&i.options[a].value==t[0]&&!i.options[a].cities.length)for(var s in e.data.data){var n={};n.label=e.data.data[s].area_name,n.value=e.data.data[s].area_id,3==i.Level&&(n.cities=[]),i.options[a].cities.push(n)}if(2==t.length&&3==i.Level)for(var o in i.options[a].cities)if(i.options[a].cities[o].value==t[1]&&!i.options[a].cities[o].cities.length)for(var r in e.data.data){var l={};l.label=e.data.data[r].area_name,l.value=e.data.data[r].area_id,i.options[a].cities[o].cities.push(l)}}}))},initAddress:function(){var t=this,e={level:2},i=this;i.$axMethod.getAreaList(e).then((function(e){var a={};for(var s in e.data.data){a={label:e.data.data[s].area_name,value:e.data.data[s].area_id,cities:[]};i.options.push(a)}if(t.defaultArea.length<=1)return!1;var n={level:3,p_id:i.defaultArea[0]};i.$axMethod.getAreaList(n).then((function(e){for(var a in i.options)if(i.options[a].value==n.p_id&&!i.options[a].cities.length)for(var s in e.data.data){var o={label:e.data.data[s].area_name,value:e.data.data[s].area_id,cities:[]};i.options[a].cities.push(o)}if(t.defaultArea.length<=2)return!1;var r={level:4,p_id:i.defaultArea[1]};i.$axMethod.getAreaList(r).then((function(t){for(var e in i.options)for(var a in i.options[e].cities)if(i.options[e].cities[a].value==r.p_id&&!i.options[e].cities[a].cities.length)for(var s in t.data.data){var n={label:t.data.data[s].area_name,value:t.data.data[s].area_id};i.options[e].cities[a].cities.push(n)}}))}))}))}},mounted:function(){var t=this;if(this.defaultArea.length>1)this.newDefaultArea=this.defaultArea.filter((function(t){return t})),this.initAddress();else{var e={level:2};this.$axMethod.getAreaList(e).then((function(e){var i={};for(var a in e.data.data){i={label:e.data.data[a].area_name,value:e.data.data[a].area_id,cities:[]};t.options.push(i)}}))}},watch:{defaultArea:{handler:function(t,e){this.options=[],this.newDefaultArea=this.defaultArea,this.initAddress()},deep:!0}}}),u=c,d=i("2877"),h=Object(d["a"])(u,r,l,!1,null,null,null),m=h.exports,p={data:function(){var t=this,e=this.$createElement;return{tableColumn:[{type:"checkbox",width:50},{title:"销售组织",field:"company_name",width:160},{title:"客户名称",field:"customer_name",width:100},{field:"name",title:"操作",width:80,fixed:"right",slots:{default:function(i){return[e("el-button",{attrs:{size:"small",type:"text",disabled:1!=t.authority.b_info},on:{click:function(){t.examine(i.row)}}},["查看"]),e("el-button",{attrs:{size:"small",type:"text",disabled:1!=t.authority.b_edit},on:{click:function(){t.handleEdit(i.row)}}},["修改"])]}}},{title:"所属区域",field:"goods_name",width:200,formatter:function(t){return t.row.province_name+t.row.city_name+t.row.area_name}},{title:"详细地址",field:"address"},{title:"联系人",field:"contact_name",width:80},{title:"联系电话(手机)",field:"customer_mobile",width:130},{title:"操作人",field:"option_name",width:100},{title:"操作时间",field:"option_time",width:150}]}}},f=i("4997"),_={name:"service_station_list",mixins:[p],data:function(){return{authority:{},sign:{arr:[],str:"associated_customer_id"},options:{title:"客户信息导入",url:"/v2/custom/Customer/importCustomer"},companyidspop:"",btnShow:!1,dialogBillVisible:!1,fileter:"全部导出",loading:!1,defaultArea:[0],timeValue:[],province:{options:[]},city:{options:[]},area:{options:[]},multipleSelection:[]}},components:{getAreaList:m},methods:{dialogEmployee:function(){this.$refs.upload.stateOpen()},tableRowClassName:function(t){var e=t.row;t.rowIndex;return e.canNotDelete?"error-row":""},receiveUploadMsg:function(t){this.onSearch()},getCustomerChange:function(t){t&&(this.params.customer_name=this.customerList.filter((function(e){return e.customer_id===t}))[0].customer_name)},customer_type_change:function(t){t&&(this.params.customer_type_name=this.customerTypeList.filter((function(e){return e.customer_type_id===t}))[0].customer_type_name)},businessChange:function(t){t&&(this.params.employee_name=this.employeeList.filter((function(e){return e.employee_id===t}))[0].employee_name)},getprovinceFocus:function(){this.$common.options("getAreaListOption",this.province,{level:2})},exportFile:function(t){if(0==this.listShow)return this.$message({message:"请查询需要导出的数据",type:"error"}),!1;for(var e=[],i=0;i<this.multipleSelection.length;i++)e.push(this.multipleSelection[i].customer_id);var a=e.toString(),s={params:Object(n["a"])(Object(n["a"])({},this.params),{},{customer_id:a,export_type:t}),API:"exportCustomerUrl"};Object(o["a"])(s)},downLoadFile:function(){this.$axMethod.cusdowntemplet().then((function(t){200==t.data.code&&(window.location.href=t.data.data.url)}))},changeDefaultArea:function(t){this.params.cityList=t.join(","),this.params.province_id=t[0],this.params.city_id=t[1],this.params.area_id=t[2]},changeDate:function(t){this.params.start_time=t[0],this.params.end_time=t[1]},changeProvince:function(){this.params.city_id="",this.$common.options("getAreaListOption",this.city,{level:3,p_id:this.params.province_id})},changeCity:function(){this.$common.options("getAreaListOption",this.area,{level:4,p_id:this.params.city_id})},onSearch:function(t){this.timeValue&&2==this.timeValue.length?(this.params.start_time=this.timeValue[0],this.params.end_time=this.timeValue[1]):this.params.start_time=this.params.end_time="",this.$refs.xTable._getData(t),this.sign.arr=[]},onReset:function(){this.defaultArea=[0],this.$set(this,"params",{is_disabled:""}),this.timeValue=[],this.onSearch(1)},addFun:function(){this.$router.push({path:"/custom/service_station_list/service_station_list_add"})},deletes:function(){var t=this;new f["a"]({id:"associated_customer_id",_this:this,title:"删除",url:"delCustomer",showConfirm:!0,callbackFunc:function(e){200!=e.code&&(t.sign.arr=e.msg.error,t.$message.error("选中"+e.msg.sum.all+"条 删除成功"+e.msg.sum.success+"条，不可删除已引用数据"))}}).send()},examine:function(t){this.$router.push({path:"/custom/service_station_list/service_station_list_see",query:{id:t.customer_id,associated_customer_id:t.associated_customer_id}})},handleEdit:function(t){this.$router.push({path:"/custom/service_station_list/service_station_list_add",query:{id:t.customer_id,associated_customer_id:t.associated_customer_id}})},handleSelectionChange:function(t){var e=this;this.multipleSelection=t,this.btnShow=!this.multipleSelection.every((function(t){return t.company_name===e.multipleSelection[0].company_name})),this.companyidspop=this.multipleSelection,this.multipleSelection.length?this.fileter="导出":this.fileter="全部导出"}},activated:function(){this.$set(this,"params",{company_id:Number(localStorage.company_id)}),Object(o["c"])(this,localStorage),this.onSearch(window.goPage)}},v=_,g=(i("7a16"),Object(d["a"])(v,a,s,!1,null,"0dfd64fa",null));e["default"]=g.exports},"19fe":function(t,e,i){},4997:function(t,e,i){"use strict";i.d(e,"a",(function(){return c}));var a=i("1da1"),s=i("ade3"),n=i("d4ec"),o=i("bee2"),r=(i("96cf"),i("d3b7"),i("25f0"),i("159b"),i("4de4"),i("caad"),i("2532"),i("4360"));function l(t){if("function"===typeof t&&t().then)return!0}var c=function(){function t(e){Object(n["a"])(this,t),this._this=e._this,this.addr=[],this.indexSign=null,this.URL=e.url,this.id=e.id,this.errId=e.errId?e.errId:e.id,this.title=e.title?e.title:"审核",this.allTitle=e.allTitle,this.params=e.params,this.before=e.before,this.checkbox=null,this.Data=null,this.showConfirm=e.showConfirm,this.callbackFunc=e.callbackFunc}return Object(o["a"])(t,[{key:"verify",value:function(){return!(this._this.multipleSelection.length<1)||(this._this.$message({message:"请选择需要".concat(this.title,"的信息"),type:"warning"}),!1)}},{key:"confirm",value:function(){var t="确定要“"+this.title+"”此条信息?";return this.allTitle&&(t=this.allTitle),this._this.$confirm(t,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"})}},{key:"sendAjax",value:function(t,e,i){var a,n=this,o=Object.assign(Object(s["a"])({},this.id,t),this.params);this._this.$axMethod[this.URL]?a=this._this.$axMethod[this.URL](o):this._this.$api[this.URL]&&(a=this._this.$axios({url:this._this.$api[this.URL],method:"post",data:o})),a.then((function(t){n.checkbox=n._this.multipleSelection,n.callbackFunc&&n.callbackFunc(t.data),200==t.data.code?(e(t),n.Data=t):i(t)})).catch((function(t){i(t)}))}},{key:"logic",value:function(){var t=this;if(!this.verify())return!1;for(var e=0;e<this._this.multipleSelection.length;e++)this.addr.push(this._this.multipleSelection[e][this.id]);var i=this.addr.toString();return new Promise((function(e,a){if(1==t.showConfirm)t.confirm().then((function(){if(l(t.before))t.before(i).then((function(){return t.sendAjax(i,e,a)}));else if(t.before&&t.before()||!t.before)return t.sendAjax(i,e,a)}));else if(l(t.before))t.before(i).then((function(){return t.sendAjax(i,e,a)}));else if(t.before&&t.before()||!t.before)return t.sendAjax(i,e,a)}))}},{key:"send",value:function(){var t=this;this.logic().then((function(e){var i=e.data;200===i.code&&(t._this.$message.success(i.msg?i.msg:i.data),t._this.onSearch&&t._this.onSearch())}))}},{key:"callback",value:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e,i,a,s,n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.logic();case 3:this.Data&&this.Data.data&&this.Data.data.data.length?(e=this.Data.data.data,i=[],e.forEach((function(t){i.push(t.serial)})),a=this.checkbox.filter((function(t){return 1==i.includes(t[n.errId])})),this._this.indexSign.arr=a,this._this.indexSign.str=this.errId,r["a"].commit("setErrorObj",{msg:this.Data.data.msg,table:this.Data.data.data,state:!0})):(s=this.Data.data.msg?this.Data.data.msg:this.Data.data.data,this._this.indexSign.arr=[],this._this.$message({message:s,type:"success"}),this._this.multipleSelection=[],this._this.onSearch&&this._this.onSearch()),t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),console.log();case 9:case"end":return t.stop()}}),t,this,[[0,6]])})));function e(){return t.apply(this,arguments)}return e}()}]),t}()},"7a16":function(t,e,i){"use strict";i("19fe")}}]);
//# sourceMappingURL=chunk-57b58384.7e1dfa17.js.map