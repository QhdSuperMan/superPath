(window["webpackJsonp_service"]=window["webpackJsonp_service"]||[]).push([["chunk-f454d4c2"],{4997:function(t,e,a){"use strict";a.d(e,"a",(function(){return d}));var i=a("1da1"),s=a("ade3"),o=a("d4ec"),r=a("bee2"),n=(a("96cf"),a("d3b7"),a("25f0"),a("159b"),a("4de4"),a("caad"),a("2532"),a("4360"));function l(t){if("function"===typeof t&&t().then)return!0}var d=function(){function t(e){Object(o["a"])(this,t),this._this=e._this,this.addr=[],this.indexSign=null,this.URL=e.url,this.id=e.id,this.errId=e.errId?e.errId:e.id,this.title=e.title?e.title:"审核",this.allTitle=e.allTitle,this.params=e.params,this.before=e.before,this.checkbox=null,this.Data=null,this.showConfirm=e.showConfirm,this.callbackFunc=e.callbackFunc}return Object(r["a"])(t,[{key:"verify",value:function(){return!(this._this.multipleSelection.length<1)||(this._this.$message({message:"请选择需要".concat(this.title,"的信息"),type:"warning"}),!1)}},{key:"confirm",value:function(){var t="确定要“"+this.title+"”此条信息?";return this.allTitle&&(t=this.allTitle),this._this.$confirm(t,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"})}},{key:"sendAjax",value:function(t,e,a){var i,o=this,r=Object.assign(Object(s["a"])({},this.id,t),this.params);this._this.$axMethod[this.URL]?i=this._this.$axMethod[this.URL](r):this._this.$api[this.URL]&&(i=this._this.$axios({url:this._this.$api[this.URL],method:"post",data:r})),i.then((function(t){o.checkbox=o._this.multipleSelection,o.callbackFunc&&o.callbackFunc(t.data),200==t.data.code?(e(t),o.Data=t):a(t)})).catch((function(t){a(t)}))}},{key:"logic",value:function(){var t=this;if(!this.verify())return!1;for(var e=0;e<this._this.multipleSelection.length;e++)this.addr.push(this._this.multipleSelection[e][this.id]);var a=this.addr.toString();return new Promise((function(e,i){if(1==t.showConfirm)t.confirm().then((function(){if(l(t.before))t.before(a).then((function(){return t.sendAjax(a,e,i)}));else if(t.before&&t.before()||!t.before)return t.sendAjax(a,e,i)}));else if(l(t.before))t.before(a).then((function(){return t.sendAjax(a,e,i)}));else if(t.before&&t.before()||!t.before)return t.sendAjax(a,e,i)}))}},{key:"send",value:function(){var t=this;this.logic().then((function(e){var a=e.data;200===a.code&&(t._this.$message.success(a.msg?a.msg:a.data),t._this.onSearch&&t._this.onSearch())}))}},{key:"callback",value:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,a,i,s,o=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.logic();case 3:this.Data&&this.Data.data&&this.Data.data.data.length?(e=this.Data.data.data,a=[],e.forEach((function(t){a.push(t.serial)})),i=this.checkbox.filter((function(t){return 1==a.includes(t[o.errId])})),this._this.indexSign.arr=i,this._this.indexSign.str=this.errId,n["a"].commit("setErrorObj",{msg:this.Data.data.msg,table:this.Data.data.data,state:!0})):(s=this.Data.data.msg?this.Data.data.msg:this.Data.data.data,this._this.indexSign.arr=[],this._this.$message({message:s,type:"success"}),this._this.multipleSelection=[],this._this.onSearch&&this._this.onSearch()),t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),console.log();case 9:case"end":return t.stop()}}),t,this,[[0,6]])})));function e(){return t.apply(this,arguments)}return e}()}]),t}()},ded0:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"fillcontain"},[a("div",{staticClass:"search_container"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.params}},[a("el-form-item",{attrs:{label:"品牌名称",size:"mini"}},[a("el-input",{attrs:{maxlength:"100",placeholder:"请输入"},model:{value:t.params.brand_name,callback:function(e){t.$set(t.params,"brand_name",e)},expression:"params.brand_name"}})],1),a("el-form-item",{attrs:{label:"品牌编号",size:"mini"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:t.params.brand_id,callback:function(e){t.$set(t.params,"brand_id",e)},expression:"params.brand_id"}})],1),a("el-form-item",{attrs:{label:"助记码",size:"mini"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:t.params.logogram,callback:function(e){t.$set(t.params,"logogram",e)},expression:"params.logogram"}})],1),a("el-form-item",{staticClass:"search-style search",attrs:{size:"mini"}},[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:t.onSearch}},[t._v("查询")]),a("el-button",{attrs:{plain:"",size:"mini"},on:{click:t.onReset}},[t._v("重置")])],1)],1),a("div",{staticClass:"add_delet"},[1==t.authority.b_add?a("el-button",{staticClass:"addBtn",attrs:{icon:"el-icon-circle-plus-outline",type:"primary",size:"mini"},on:{click:function(e){t.dialogVisible=!0}}},[t._v("新增")]):t._e(),1==t.authority.b_del?a("el-button",{attrs:{plain:"",icon:"el-icon-delete",size:"mini"},on:{click:t.delFun}},[t._v("删除")]):t._e(),1==t.authority.b_export?a("el-dropdown",{staticStyle:{"margin-left":"10px"},attrs:{placement:"bottom-start"}},[a("span",{staticStyle:{cursor:"pointer",color:"#4e90e2"},attrs:{"split-button":""}},[a("el-button",{attrs:{plain:"",icon:"iconfont icon-daochu10",size:"mini"}},[t._v("导出")])],1),a("el-dropdown-menu",{staticStyle:{"margin-top":"10px"},attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{nativeOn:{click:function(e){return t.exportFile(1)}}},[t._v("导出Excel文件")]),a("el-dropdown-item",{nativeOn:{click:function(e){return t.exportFile(2)}}},[t._v("导出CSV逗号分隔")])],1)],1):t._e()],1)],1),a("div",{staticClass:"table_container"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading1,expression:"loading1"}],staticStyle:{width:"100%"},attrs:{"highlight-current-row":!0,"tooltip-effect":"light",border:"",data:t.TableData.tableData,"max-height":"600",resizable:""},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{"show-overflow-tooltip":!0,type:"selection",fixed:"left",align:"center",selectable:t.checkSelectable,width:"50"}}),a("el-table-column",{attrs:{label:"操作",fixed:"right",width:"54"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.updateRow(e.row)}}},[t._v(" 修改 ")])]}}])}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"brand_name",label:"品牌名称",width:"150"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"brand_id",label:"品牌编号",width:"120"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"logogram",label:"助记码",width:"100"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"type_name",label:"所属类型",width:"130"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"auditor_is_disabled",formatter:t.formatis_disabled,label:"停用标志",width:"80"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"remark",label:"备注"}})],1)],1),a("div",{staticClass:"page_container"},[a("div",{staticClass:"pageNumber"},[t._v("每页显示")]),a("el-pagination",{staticClass:"erp-pagination",attrs:{"current-page":t.goPage,"page-size":t.pageSize1,"page-sizes":t.per_page,layout:"total,sizes, prev, pager, next,jumper",prevText:"上一页",nextText:"下一页",total:t.TableData.total},on:{"size-change":t.handleSizeChange,"update:currentPage":function(e){t.goPage=e},"update:current-page":function(e){t.goPage=e},"current-change":t.handleCurrentChange}})],1),a("el-dialog",{staticClass:"dialogForm",attrs:{"close-on-click-modal":!1,title:"品牌管理",visible:t.dialogVisible,width:"850px"},on:{"update:visible":function(e){t.dialogVisible=e},close:t.closeDialog}},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[a("el-form",{ref:"goodsForm",attrs:{model:t.goodsForm,"label-width":"150px",size:"mini"}},[a("el-form-item",{attrs:{label:"所属类型",prop:"goods_type_id",rules:[{required:!0,message:"请选择所属类型"}],size:"mini"}},[t.dialogVisible?a("jybd-cascader",{ref:"cascader",on:{cascaderChange:t.handleChange}}):t._e()],1),a("el-form-item",{staticClass:"el-form-item_shortInput",attrs:{label:"品牌名称",rules:[{required:!0,message:"品牌名称不能为空"}],prop:"brand_name"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:t.goodsForm.brand_name,callback:function(e){t.$set(t.goodsForm,"brand_name",e)},expression:"goodsForm.brand_name"}})],1),a("el-form-item",{staticClass:"el-form-item_shortInput",attrs:{label:"停用操作"}},[a("el-radio-group",{model:{value:t.goodsForm.is_disabled,callback:function(e){t.$set(t.goodsForm,"is_disabled",e)},expression:"goodsForm.is_disabled"}},[a("el-radio",{attrs:{label:1}},[t._v("是")]),a("el-radio",{attrs:{label:0}},[t._v("否")])],1)],1),a("el-form-item",{staticClass:"el-form-item_shortInput",attrs:{label:"备注"}},[a("el-input",{attrs:{type:"text",maxlength:"300",placeholder:"请输入"},model:{value:t.goodsForm.remark,callback:function(e){t.$set(t.goodsForm,"remark",e)},expression:"goodsForm.remark"}})],1)],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){return t.cancelForm("goodsForm")}}},[t._v("取 消")]),a("el-button",{staticClass:"tx",attrs:{type:"primary"},on:{click:function(e){return t.submitForm("goodsForm")}}},[t._v("确 定")])],1)])],1)},s=[],o=(a("a15b"),a("d81d"),a("65b0")),r=a("4997"),n={data:function(){return{authority:{},TableData:{tableData:[],per_page:[30,50,100,500],total:10},loading:!1,goodsForm:{is_disabled:0},selectedOptions:[],companyList:[],props:{value:"value",lable:"label",children:"child"},per_page:[30,50,100,500],AccordingParams:{},goPage:1,pageSize:30,AddOrExit:"Add",params:{},dialogVisible:!1,multipleSelection:[],currentPage:1}},methods:{clearCascader:function(){this.$refs.cascader.clear()},exportFile:function(t){if(!t)return this.$message({message:"请选择导出格式",type:"warning"}),!1;if(0==this.listShow)return this.$message({message:"请查询需要导出的数据",type:"warning"}),!1;var e={params:this.params,API:"exportBrandUrl"};Object(o["a"])(e)},handleChange:function(t){this.$set(this.goodsForm,"goods_type_id",t[2])},onReset:function(){this.$set(this,"params",{}),this.$set(this,"AccordingParams",{params:{},TableData:this.TableData,API:"getBrandList",vm:this}),Object(o["b"])(this.AccordingParams)},formatis_disabled:function(t,e,a){return 1==t.is_disabled?"已停":"未停"},checkSelectable:function(t){return"2016-05-01"!==t.date},handleSelectionChange:function(t){this.multipleSelection=t},closeDialog:function(){this.clearCascader(),this.AddOrExit="Add",this.selectedOptions=[],this.goodsForm={is_del:0,is_disabled:0}},updateRow:function(t){var e=this;this.AddOrExit="Exit",this.loading=!0;var a=this;this.$axios({method:"get",url:a.$api.getGoodsBrandInfo,params:{brand_id:t.brand_id,id:t.id}}).then((function(e){200==e.data.code&&(a.goodsForm={brand_name:e.data.data.brand_name,is_del:e.data.data.is_del,remark:e.data.data.remark,brand_id:t.brand_id,is_disabled:e.data.data.is_disabled,id:t.id,goods_type_id:t.goods_type_id},a.dialogVisible=!0,a.selectedOptions=[e.data.data.one_type_id,e.data.data.second_type_id,t.goods_type_id],a.$nextTick((function(){a.$refs.cascader.cascaderVue=a.selectedOptions,console.log(a.selectedOptions),a.loading=!1}))),a.$nextTick((function(){a.loading=!1}))})).catch((function(){e.loading=!1}))},handleSizeChange:function(t){Object.assign(this.AccordingParams.params,{per_page:t,page:1}),Object(o["b"])(this.AccordingParams)},handleCurrentChange:function(t){Object.assign(this.AccordingParams.params,{page:t}),Object(o["b"])(this.AccordingParams)},onSearch:function(){Object.assign(this.AccordingParams.params,this.params,{page:1}),Object(o["b"])(this.AccordingParams)},delFun:function(){new r["a"]({id:"brand_id",url:"delGoodsBrand",callbackFunc:this.onSearch,params:{id:this.multipleSelection.map((function(t){return t.id})).join(",")},_this:this}).send()},cancelForm:function(t){this.dialogVisible=!1,this.$refs[t].resetFields()},submitForm:function(t){var e=this,a=this;this.$refs[t].validate((function(t){if(t)if(e.dialogVisible=!1,void 0==a.goodsForm.brand_id){var i={brand_name:a.goodsForm.brand_name,goods_type_id:a.goodsForm.goods_type_id,remark:a.goodsForm.remark,is_disabled:a.goodsForm.is_disabled},s={eachData:i,UrlApi:"addGoodsBrand",closeDialog:e.dialogVisible=!1,list:{UrlApi:"getBrandList",data:e.TableData,esData:e.AccordingParams.params}};e.$common.addAndupdateFun(s)}else{i={brand_id:a.goodsForm.brand_id,brand_name:a.goodsForm.brand_name,goods_type_id:a.goodsForm.goods_type_id,remark:a.goodsForm.remark,is_disabled:a.goodsForm.is_disabled,id:a.goodsForm.id},s={eachData:i,UrlApi:"editGoodsBrand",closeDialog:e.dialogVisible=!1,list:{UrlApi:"getBrandList",data:e.TableData,esData:e.AccordingParams.params}};e.$common.addAndupdateFun(s)}}))}},mounted:function(){this.authority=JSON.parse(localStorage.getItem("authority")),this.$set(this,"AccordingParams",{params:{},TableData:this.TableData,API:"getBrandList",vm:this}),Object(o["b"])(this.AccordingParams)}},l=n,d=a("2877"),c=Object(d["a"])(l,i,s,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-f454d4c2.a08fbac7.js.map