(window["webpackJsonp_erpcode"]=window["webpackJsonp_erpcode"]||[]).push([["chunk-02c4ca3a"],{"19aa":function(e,t,a){var i=a("da84"),n=a("3a9b"),r=i.TypeError;e.exports=function(e,t){if(n(t,e))return e;throw r("Incorrect invocation")}},2266:function(e,t,a){var i=a("da84"),n=a("0366"),r=a("c65b"),s=a("825a"),o=a("0d51"),l=a("e95a"),c=a("07fa"),d=a("3a9b"),u=a("9a1f"),p=a("35a1"),h=a("2a62"),m=i.TypeError,f=function(e,t){this.stopped=e,this.result=t},b=f.prototype;e.exports=function(e,t,a){var i,g,_,v,w,y,S,x=a&&a.that,D=!(!a||!a.AS_ENTRIES),I=!(!a||!a.IS_ITERATOR),T=!(!a||!a.INTERRUPTED),k=n(t,x),$=function(e){return i&&h(i,"normal",e),new f(!0,e)},P=function(e){return D?(s(e),T?k(e[0],e[1],$):k(e[0],e[1])):T?k(e,$):k(e)};if(I)i=e;else{if(g=p(e),!g)throw m(o(e)+" is not iterable");if(l(g)){for(_=0,v=c(e);v>_;_++)if(w=P(e[_]),w&&d(b,w))return w;return new f(!1)}i=u(e,g)}y=i.next;while(!(S=r(y,i)).done){try{w=P(S.value)}catch(N){h(i,"throw",N)}if("object"==typeof w&&w&&d(b,w))return w}return new f(!1)}},2626:function(e,t,a){"use strict";var i=a("d066"),n=a("9bf2"),r=a("b622"),s=a("83ab"),o=r("species");e.exports=function(e){var t=i(e),a=n.f;s&&t&&!t[o]&&a(t,o,{configurable:!0,get:function(){return this}})}},"399c":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"goodsattribute"},[a("div",{attrs:{id:"leixin"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:!e.isNeedHide,expression:"!isNeedHide"}],staticClass:"search_container"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.params}},[a("el-form-item",{attrs:{label:"采购组织",size:"mini"}},[a("el-select",{attrs:{clearable:"",placeholder:"请选择",filterable:""},on:{focus:e.companyListInvok,change:e.companyChange},model:{value:e.params.company_id,callback:function(t){e.$set(e.params,"company_id",t)},expression:"params.company_id"}},e._l(e.companyList,(function(t){return a("el-option",{key:t.company_id,attrs:{label:t.company_name,value:t.company_id}},[a("span",{class:1==t.type?"optionStyle":""},[e._v(e._s(t.company_name))])])})),1)],1),a("el-form-item",{attrs:{label:"商品名称",size:"mini"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.params.goods_name,callback:function(t){e.$set(e.params,"goods_name",t)},expression:"params.goods_name"}})],1),a("el-form-item",{attrs:{label:"品牌名称",size:"mini"}},[a("getBrand",{attrs:{fatherParams:e.params},model:{value:e.params.brand_id,callback:function(t){e.$set(e.params,"brand_id",t)},expression:"params.brand_id"}})],1),a("el-form-item",{staticClass:"wauto",attrs:{label:"商品类型",size:"mini"}},[a("jybd-cascader",{ref:"cascader",on:{cascaderChange:e.cascaderMethod}})],1),a("el-form-item",{attrs:{label:"生效日期",size:"mini"}},[a("el-date-picker",{attrs:{type:"daterange","range-separator":"-","value-format":"yyyy-MM-dd","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.timeValue,callback:function(t){e.timeValue=t},expression:"timeValue"}})],1),a("el-form-item",{attrs:{label:"审核状态",size:"mini"}},[a("el-select",{attrs:{clearable:""},model:{value:e.params.auditor_status,callback:function(t){e.$set(e.params,"auditor_status",t)},expression:"params.auditor_status"}},[a("el-option",{attrs:{label:"全部",value:0}},[e._v("全部")]),a("el-option",{attrs:{label:"未审核",value:1}},[e._v("未审核")]),a("el-option",{attrs:{label:"已审核",value:2}},[e._v("已审核")]),a("el-option",{attrs:{label:"作废",value:3}},[e._v("作废")])],1)],1),a("el-form-item",{staticClass:"search-style search",attrs:{size:"mini"}},[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:e.onSearch}},[e._v("查询")]),a("el-button",{attrs:{plain:"",size:"mini"},on:{click:e.onReset}},[e._v("重置")])],1)],1)],1),a("div",{staticClass:"add_delet"},[1==e.authority.b_edit?a("el-button",{staticClass:"addBtn",attrs:{icon:"el-icon-circle-plus-outline",type:"primary",disabled:e.btnStatus.addShow,size:"mini"},on:{click:e.addF}},[e._v(e._s(e.isNeedHide?"增行":"新增"))]):e._e(),1==e.authority.b_del?a("el-button",{directives:[{name:"show",rawName:"v-show",value:!e.isNeedHide,expression:"!isNeedHide"}],attrs:{plain:"",icon:"el-icon-delete",size:"mini",disabled:e.btnStatus.delShow},on:{click:e.deletes}},[e._v("删除")]):e._e(),1==e.authority.b_del?a("el-button",{directives:[{name:"show",rawName:"v-show",value:e.isNeedHide,expression:"isNeedHide"}],attrs:{plain:"",icon:"el-icon-delete",size:"mini",disabled:e.btnStatus.delShow},on:{click:e.deletesRow}},[e._v("删行")]):e._e(),1==e.authority.b_edit?a("el-button",{attrs:{plain:"",icon:"el-icon-edit-outline",disabled:e.btnStatus.untilShow,size:"mini"},on:{click:e.untilList}},[e._v("修改")]):e._e(),a("el-button",{attrs:{plain:"",icon:"el-icon-tickets",size:"mini",disabled:e.btnStatus.saveShow},on:{click:function(t){return e.saveList("formDom")}}},[e._v("保存")]),1==e.authority.b_pass?a("el-button",{attrs:{icon:"iconfont icon-pass",type:"primary",size:"mini",disabled:e.btnStatus.examine},on:{click:e.audit}},[e._v("审核")]):e._e(),1==e.authority.b_invalid?a("el-button",{attrs:{plain:"",icon:"iconfont icon-zuofei",size:"mini",disabled:e.btnStatus.abandon},on:{click:e.cancellation}},[e._v("作废")]):e._e(),a("el-button",{attrs:{plain:"",icon:"el-icon-download",size:"mini"},on:{click:e.downLoadFile}},[e._v("下载模板")]),1==e.authority.b_import?a("el-button",{attrs:{plain:"",icon:"iconfont icon-daoru5",size:"mini"},on:{click:e.dialogEmployee}},[e._v("导入")]):e._e(),e.isCancel?a("el-button",{attrs:{plain:"",icon:"el-icon-error",size:"mini"},on:{click:e.cancel}},[e._v("取消")]):e._e()],1),a("div",{staticClass:"table_container purchase_price"},[a("el-form",{ref:"formDom",attrs:{rules:e.TableData.rules,model:e.TableData}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading1,expression:"loading1"}],staticStyle:{width:"100%"},attrs:{"highlight-current-row":!0,"tooltip-effect":"light",border:"",data:e.TableData.tableData,"max-height":"600","cell-style":e.initStyle},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{"show-overflow-tooltip":!0,type:"selection",align:"center",width:"44"}}),a("el-table-column",{attrs:{label:"序号",type:"index",width:"46",align:"center"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"company_name","min-width":"120",label:"采购组织","render-header":e.renderHeader},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.edit&&"N"!=e.addType?a("el-form-item",{ref:"goods_name",staticClass:"form-container-purchasepriceindex",attrs:{prop:"tableData."+t.$index+".company_id",rules:e.TableData.rules.company_id}},[a("el-select",{class:{purchasepriceIndexRed:t.$index==e.tipsIndex},attrs:{loading:e.tableDownLoading,placeholder:"请选择",filterable:""},on:{change:function(a){return e.changeCpmpany(t.row,t.$index)},focus:function(a){return e.portFocusCompanyList("",t.row)}},model:{value:t.row.company_id,callback:function(a){e.$set(t.row,"company_id",a)},expression:"scope.row.company_id"}},e._l(t.row.companyList,(function(t){return a("el-option",{key:t.company_id,attrs:{label:t.company_name,value:t.company_id}},[a("span",{class:1==t.type?"optionStyle":""},[e._v(e._s(t.company_name))])])})),1)],1):a("span",[e._v(e._s(t.row.company_name))])]}}])}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"goods_id","min-width":"150",label:"商品编号","render-header":e.renderHeader},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{class:{purchasepriceIndexRed:t.$index==e.tipsIndex}},[e._v(e._s(t.row.goods_id))])]}}])}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"goods_name","min-width":"500",label:"商品名称","render-header":e.renderHeader},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.edit&&"N"!=e.addType?a("v-GoodsList",{attrs:{scopes:t,vxeParams:{company_id:t.row.company_id},changeGoods:e.handleSelect,showObj:{goods_id:"商品编号",goods_name:"商品名称"}}}):a("span",[e._v(e._s(t.row.goods_name))])]}}])}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"price","min-width":"100",label:"采购价格","render-header":e.renderHeader},scopedSlots:e._u([{key:"default",fn:function(t){return[!t.row.edit||"Y"!=e.addType&&1!=t.row.auditor_status?a("span",[e._v(e._s(e._f("priceFormatNone")(t.row.price)))]):a("el-form-item",{ref:"price",staticClass:"form-container-purchasepriceindex",attrs:{prop:"tableData."+t.$index+".price",rules:e.TableData.rules.price}},[a("el-input",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入"},model:{value:t.row.price,callback:function(a){e.$set(t.row,"price",a)},expression:"scope.row.price"}})],1)]}}])}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"start_time","min-width":"170",width:"170",label:"政策生效日期","render-header":e.renderHeader},scopedSlots:e._u([{key:"default",fn:function(t){return[!t.row.edit||"Y"!=e.addType&&1!=t.row.auditor_status?a("span",[e._v(e._s(t.row.start_time))]):a("el-form-item",{ref:"goods_name",staticClass:"form-container-purchasepriceindex",attrs:{prop:"tableData."+t.$index+".start_time",rules:e.TableData.rules.start_time}},[t.row.edit?a("el-date-picker",{class:{purchasepriceIndexRed:t.$index==e.tipsIndex},attrs:{"value-format":"yyyy-MM-dd",type:"date",placeholder:"选择日期",clearable:!1},model:{value:t.row.start_time,callback:function(a){e.$set(t.row,"start_time",a)},expression:"scope.row.start_time"}}):e._e()],1)]}}])}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"add_user_name","min-width":"80",label:"创建人"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"add_time","min-width":"170",label:"创建时间"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"auditor_status_name","min-width":"80",label:"审核状态"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"auditor_name","min-width":"80",label:"审核人"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"auditor_time","min-width":"170",label:"审核时间"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"update_user_name","min-width":"80",label:"修改人"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"update_time","min-width":"170",label:"修改时间"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"remark","min-width":"80",label:"备注"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.edit?a("el-input",{attrs:{placeholder:"请输入"},model:{value:t.row.remark,callback:function(a){e.$set(t.row,"remark",a)},expression:"scope.row.remark"}}):a("span",[e._v(e._s(t.row.remark))])]}}])})],1)],1),a("upload",{ref:"upload",attrs:{options:e.options},on:{receiveUploadMsg:e.receiveUploadMsg}})],1),e.isNeedHide?e._e():a("div",{staticClass:"page_container"},[a("div",{staticClass:"pageNumber"},[e._v("每页显示")]),a("el-pagination",{staticClass:"erp-pagination",attrs:{"current-page":e.goPage,"page-size":e.pageSize1,"page-sizes":e.per_page,layout:"total,sizes, prev, pager, next,jumper",prevText:"上一页",nextText:"下一页",total:e.TableData.total},on:{"size-change":e.handleSizeChange,"update:currentPage":function(t){e.goPage=t},"update:current-page":function(t){e.goPage=t},"current-change":e.handleCurrentChange}})],1)])])},n=[],r=a("5530"),s=a("2909"),o=(a("ac1f"),a("00b4"),a("d3b7"),a("6062"),a("3ca3"),a("ddb0"),a("4de4"),a("caad"),a("2532"),a("a9e3"),a("159b"),a("4e82"),a("e9c4"),a("99af"),a("c740"),a("d81d"),a("a434"),a("b64b"),a("2f62")),l=a("65b0"),c={name:"purchasePriceIndex",data:function(){var e=this,t=function(t,a,i){var n=/(^[0-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;if(!n.test(a)){var r=parseFloat(t.field[10]);return e.indexArr.push(r),e.indexArr=Object(s["a"])(new Set(e.indexArr)),i(new Error("请填非0数字,最多2位小数"))}i()},a=function(t,a,i){if(!a){var n=parseFloat(t.field[10]);return e.indexArr.push(n),e.indexArr=Object(s["a"])(new Set(e.indexArr)),i(new Error("输入不能为空"))}i()};return{tableDownLoading:!1,options:{title:"采购价信息导入",url:"/purchase/price/importPrice"},indexArr:[],params:{auditor_status:0},TableData:{tableData:[],total:10,rules:{price:[{validator:t,trigger:"blur"}],goods_name:[{validator:a,trigger:"blur"}],start_time:[{validator:a,trigger:"blur"}],company_id:[{validator:a,trigger:["blur","change"]}]}},listLength:0,isCancel:!1,btnStatus:{saveShow:!0,addShow:!1,untilShow:!0,delShow:!0,abandon:!0,examine:!0},addType:"",isNeedHide:!1,multipleSelection:[],multipleSelectionIndex:0,getIndex:[],tipsIndex:null}},methods:Object(r["a"])(Object(r["a"])({},Object(o["b"])(["settingPurchaseACT","purchasepriceIndexACT"])),{},{portFocusCompanyList:function(e,t){var a=this;this.tableDownLoading=!0,this.$axMethod.getCompanyListDefalut({company_name:e}).then((function(e){var i=e.data;a.tableDownLoading=!1;var n=i.data.company_list;n instanceof Array&&(n.unshift({company_name:i.data.company_name,company_id:i.data.company_id,is_choose:i.data.is_choose,type:1}),a.$set(t,"companyList",n.filter((function(e){return 1==e.is_choose}))))})).catch((function(e){a.tableDownLoading=!1}))},brandChange:function(e){e&&(this.params.brand_name=this.brandList.filter((function(t){return t.brand_id===e}))[0].brand_name)},companyChange:function(e){e&&(this.params.company_name=this.companyList.filter((function(t){return t.company_id===e}))[0].company_name)},cascaderMethod:function(e){this.params.goods_type_id=e[2]},dialogEmployee:function(){this.$refs.upload.stateOpen()},receiveUploadMsg:function(e){Object(l["g"])(this.searchParams)},initStyle:function(e){e.row,e.column;var t=e.rowIndex;e.columnIndex;if(this.indexArr.includes(t))return"vertical-align:top;padding-top:5px;"},handleExceed:function(e,t){this.$message({message:"一次只能上传一个文件！",type:"error"})},downLoadFile:function(){this.$axMethod.purchaseDownloadFileUrl().then((function(e){200==e.data.code&&(window.location.href=e.data.data.url)}))},onReset:function(){this.$refs.cascader.clear(),this.$set(this,"params",{company_id:Number(localStorage.company_id),auditor_status:0}),Object(l["l"])(this,localStorage),this.timeValue=[],this.params.start_time="",this.params.end_time="",this.$set(this,"searchParams",{params:this.params,TableData:this.TableData,API:"getGoodsPriceList",vm:this}),this.onSearch()},onSearch:function(){this.timeValue?(this.params.start_time=this.timeValue[0],this.params.end_time=this.timeValue[1]):this.params.start_time=this.params.end_time="",Object.assign(this.searchParams.params,this.params,{page:1}),this.purchasepriceIndexACT({params:this.params,goPage:this.goPage,pageSize:this.pageSize}),Object(l["g"])(this.searchParams)},handleSizeChange:function(e){Object.assign(this.searchParams.params,{per_page:e,page:1}),Object(l["g"])(this.searchParams)},handleCurrentChange:function(e){Object.assign(this.searchParams.params,{page:e}),Object(l["g"])(this.searchParams)},changeCpmpany:function(e,t,a){this.$set(e,"goods_id",""),this.$set(e,"goods_name","")},addF:function(){this.tipsIndex=null,this.TableData.length=this.TableData.tableData.length,this.btnStatus={saveShow:!1,addShow:!1,untilShow:!0,delShow:!1,abandon:!0,examine:!0},this.isNeedHide=!0,this.isCancel=!0,this.addType="Y",this.TableData.tableData.unshift({edit:!0,company_id:Number(localStorage.getItem("company_id")),company_name:localStorage.getItem("company_name"),companyList:[{company_id:Number(localStorage.getItem("company_id")),company_name:localStorage.getItem("company_name")}],start_time:this.$publicFution.formatData(new Date),add_user_name:localStorage.getItem("realname"),auditor_status_name:"未审核",Index:this.multipleSelectionIndex++})},untilList:function(){var e=this.multipleSelection,t=e.some((function(e,t){return 1==e.auditor_status})),a=e.some((function(e,t){return 2==e.auditor_status})),i=e.some((function(e,t){return 3==e.auditor_status}));if(a&&!i&&!t)return this.$message.error("已审核的单据不可以修改，请重新勾选"),!1;if(!a&&i&&!t)return this.$message.error("作废的单据不可以修改，请重新勾选"),!1;if(a&&i&&!t)return this.$message.error("审核的单据均不可以修改，请重新勾选"),!1;if(this.addType="N",this.multipleSelection.length){this.isNeedHide=!0,this.btnStatus={saveShow:!1,addShow:!0,untilShow:!1,delShow:!1,abandon:!0,examine:!0},this.isCancel=!0;for(var n=this.TableData.tableData.length,r=0;r<n;r++)-1!=this.getIndex.indexOf(r)&&this.$set(this.TableData.tableData[r],"edit",!0)}else this.$message({message:"请选择需要修改的信息",type:"warning"})},handleSelectionChange:function(e){var t=this;this.multipleSelection=e,e.length?(this.btnStatus={saveShow:!0,addShow:!0,untilShow:!1,delShow:!1,abandon:!1,examine:!1},this.isNeedHide&&(this.btnStatus={saveShow:!1,addShow:!0,untilShow:!1,delShow:!1,abandon:!0,examine:!0}),this.TableData.tableData.length-this.listLength>0&&(this.btnStatus={saveShow:!1,addShow:!1,untilShow:!0,delShow:!1,abandon:!0,examine:!0})):(this.btnStatus={saveShow:!0,addShow:!1,untilShow:!0,delShow:!0,abandon:!0,examine:!0},this.TableData.tableData.length-this.listLength>0&&(this.btnStatus={saveShow:!1,addShow:!1,untilShow:!0,delShow:!0,abandon:!0,examine:!0}));var a=[];if(e.forEach((function(e,i){t.TableData.tableData.forEach((function(t,i){e.price_id==t.price_id&&a.push(i)}))})),this.getIndex=a,a=a.sort(),null!=localStorage.getItem("aRR"))var i=JSON.parse(localStorage.getItem("aRR")).aRR;if(localStorage.setItem("aRR",JSON.stringify({aRR:a})),"N"==this.addType){var n=this.TableData.tableData;if(!a.length)for(var r=0;r<n.length;r++)this.$set(n[r],"edit",!1);for(var o=0;o<a.length;o++)this.$set(n[a[o]],"edit",!0);if(a.length-i.length<0)for(var l=new Set(a),c=new Set(i),d=new Set(Object(s["a"])(c).filter((function(e){return!l.has(e)}))),u=Object(s["a"])(d),p=0;p<u.length;p++)this.$set(n[u[p]],"edit",!1)}},saveList:function(e){var t=this,a=!1;if(this.tipsIndex=null,this.$refs[e].validate((function(e,i){e?(a=!0,t.indexArr=[]):(a=!1,t.$message.error("请输入合法的内容"))})),a){var i=this.TableData.tableData.filter((function(e){return 1==e.edit}));if(!i.length)return this.$message.warning("当前您没有编辑的数据！"),!1;for(var n=this.TableData.tableData,r=n.filter((function(e){return e.edit})),s=[],o=0;o<r.length;o++)"Y"!=this.addType&&"N"!=this.addType||s.push("".concat(r[o].company_id).concat(r[o].goods_id).concat(r[o].price).concat(r[o].start_time));var c=[];if("Y"==this.addType){for(var d=0;d<i.length;d++)c.push({price_id:0,company_id:i[d].company_id,price:i[d].price,start_time:i[d].start_time,remark:i[d].remark,goods_id:i[d].goods_id});for(var u=[],p=0;p<s.length;p++){if(u.includes(s[p]))return this.tipsIndex=p,this.$message({message:"与已新增数据重复，请修改后重新保存",type:"warning"}),!1;u.push(s[p]),this.tipsIndex=null}}else for(d=0;d<i.length;d++)c.push({price_id:i[d].price_id,company_id:i[d].company_id,price:i[d].price,start_time:i[d].start_time,remark:i[d].remark,goods_id:i[d].goods_id});this.tipsIndex||this.$axMethod.savePrice({price_data:JSON.stringify(c)}).then((function(e){var a=e.data,i=a.code,n=a.msg;if(200==i&&(t.$message({message:e.data.msg,type:"success"}),t.btnStatus={saveShow:!0,addShow:!1,untilShow:!0,delShow:!0,abandon:!0,examine:!0},t.isNeedHide=!1,t.isCancel=!1,t.tipsIndex=null,t.addType="",localStorage.removeItem("aRR"),Object(l["g"])(t.searchParams)),100==i){t.$message.error("您已提交，切勿重新提交，如需修改，请在已提交的数据中修改");var r=n[0];if(console.log(n[0]),console.log("".concat(r.company_id).concat(r.goods_id).concat(r.price).concat(r.start_time)),console.log(s),"Y"==t.addType&&(t.tipsIndex=s.findIndex((function(e){return e=="".concat(r.company_id).concat(r.goods_id).concat(r.price).concat(r.start_time)})),console.log(t.tipsIndex)),"N"==t.addType){var o=t.TableData.tableData;t.tipsIndex=o.findIndex((function(e){return"".concat(r.start_time).concat(r.goods_id)=="".concat(e.start_time).concat(e.goods_id)&&2!=e.auditor_status}))}}}))}},audit:function(){for(var e=[],t=0;t<this.multipleSelection.length;t++)e.push(this.multipleSelection[t].price_id);var a={eachData:{price_id:e.toString()},UrlApi:"auditorPrice",list:{UrlApi:"getGoodsPriceList",data:this.TableData,esData:this.searchParams.params}};this.$common.audit(a)},cancellation:function(){for(var e=[],t=0;t<this.multipleSelection.length;t++)e.push(this.multipleSelection[t].price_id);var a={eachData:{price_id:e.toString()},UrlApi:"priceauditorInvalid",list:{UrlApi:"getGoodsPriceList",data:this.TableData,esData:this.searchParams.params}};this.$common.audit(a)},beforeDeleteJudge:function(){return this.multipleSelection.some((function(e){var t=e.auditor_status_name;return t.includes("作废")||t.includes("已审核")}))},deletes:function(){var e={deleID:"price_id",deleSelect:this.multipleSelection,deleApi:"delPrice",list:{UrlApi:"getGoodsPriceList",data:this.TableData,esData:this.searchParams.params}};this.$common.deletes(e,"删除",this)},deletesRow:function(){if("Y"==this.addType){var e=this.TableData.tableData;if(this.multipleSelection.length){var t=[];this.multipleSelection.map((function(e){t.push(e.Index)}));for(var a=e.length-1;a>=0;a--)t.includes(e[a].Index)&&void 0!=e[a].Index&&e.splice(a,1);this.tipsIndex=null}else this.$message({message:"请选择需要删除的行",type:"warning"})}if("N"==this.addType){var i={deleID:"price_id",deleSelect:this.multipleSelection,deleApi:"delPrice",list:{UrlApi:"getGoodsPriceList",data:this.TableData,esData:this.searchParams.params}};this.$common.deletes(i,"删除",this)}},cancel:function(){this.tipsIndex=null,localStorage.removeItem("aRR"),this.addType="",this.btnStatus={saveShow:!0,addShow:!1,untilShow:!0,delShow:!0,abandon:!0,examine:!0},this.isCancel=!this.isCancel,this.isNeedHide=!this.isNeedHide,this.indexArr=[];for(var e=this.TableData.tableData,t=e.length-1;t>=0;t--)Object.keys(e[t]).includes("edit")&&e.splice(t,1);this.$refs.cascader.clear(),this.$set(this,"params",{company_id:Number(localStorage.company_id),auditor_status:0}),this.$set(this,"searchParams",{params:this.params,TableData:this.TableData,API:"getGoodsPriceList",vm:this}),Object(l["g"])(this.searchParams)},renderHeader:function(e,t){var a=t.column;t.$index;return this.isNeedHide?e("span",{class:"start",style:"cursor:pointer"},[a.label]):e("span",[" ",a.label])}}),computed:Object(r["a"])({},Object(o["c"])(["purchasepriceIndexGet"])),watch:{loading1:function(e,t){this.listLength=this.TableData.tableData.length}},mounted:function(){if(this.authority=JSON.parse(localStorage.getItem("authority")),this.$set(this,"companyList",[{company_id:Number(localStorage.company_id),company_name:localStorage.company_name}]),this.purchasepriceIndexGet&&this.purchasepriceIndexGet.params){if(this.purchasepriceIndexGet.params.start_time){var e=this.purchasepriceIndexGet.params,t=e.start_time,a=e.end_time;this.timeValue=this.timeValue.concat([t,a])}this.purchasepriceIndexGet.params.company_id==localStorage.company_id&&(this.purchasepriceIndexGet.params.company_name=localStorage.company_name),Object(l["l"])(this,this.purchasepriceIndexGet.params),this.$set(this,"params",this.purchasepriceIndexGet.params),this.params.page=this.purchasepriceIndexGet.goPage,this.params.per_page=this.purchasepriceIndexGet.pageSize}else this.$set(this,"params",{company_id:Number(localStorage.company_id),auditor_status:0});this.$set(this,"searchParams",{params:this.params,TableData:this.TableData,API:"getGoodsPriceList",vm:this}),Object(l["g"])(this.searchParams)}},d=c,u=(a("999b"),a("2877")),p=Object(u["a"])(d,i,n,!1,null,null,null);t["default"]=p.exports},6062:function(e,t,a){"use strict";var i=a("6d61"),n=a("6566");i("Set",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),n)},6566:function(e,t,a){"use strict";var i=a("9bf2").f,n=a("7c73"),r=a("e2cc"),s=a("0366"),o=a("19aa"),l=a("2266"),c=a("7dd0"),d=a("2626"),u=a("83ab"),p=a("f183").fastKey,h=a("69f3"),m=h.set,f=h.getterFor;e.exports={getConstructor:function(e,t,a,c){var d=e((function(e,i){o(e,h),m(e,{type:t,index:n(null),first:void 0,last:void 0,size:0}),u||(e.size=0),void 0!=i&&l(i,e[c],{that:e,AS_ENTRIES:a})})),h=d.prototype,b=f(t),g=function(e,t,a){var i,n,r=b(e),s=_(e,t);return s?s.value=a:(r.last=s={index:n=p(t,!0),key:t,value:a,previous:i=r.last,next:void 0,removed:!1},r.first||(r.first=s),i&&(i.next=s),u?r.size++:e.size++,"F"!==n&&(r.index[n]=s)),e},_=function(e,t){var a,i=b(e),n=p(t);if("F"!==n)return i.index[n];for(a=i.first;a;a=a.next)if(a.key==t)return a};return r(h,{clear:function(){var e=this,t=b(e),a=t.index,i=t.first;while(i)i.removed=!0,i.previous&&(i.previous=i.previous.next=void 0),delete a[i.index],i=i.next;t.first=t.last=void 0,u?t.size=0:e.size=0},delete:function(e){var t=this,a=b(t),i=_(t,e);if(i){var n=i.next,r=i.previous;delete a.index[i.index],i.removed=!0,r&&(r.next=n),n&&(n.previous=r),a.first==i&&(a.first=n),a.last==i&&(a.last=r),u?a.size--:t.size--}return!!i},forEach:function(e){var t,a=b(this),i=s(e,arguments.length>1?arguments[1]:void 0);while(t=t?t.next:a.first){i(t.value,t.key,this);while(t&&t.removed)t=t.previous}},has:function(e){return!!_(this,e)}}),r(h,a?{get:function(e){var t=_(this,e);return t&&t.value},set:function(e,t){return g(this,0===e?0:e,t)}}:{add:function(e){return g(this,e=0===e?0:e,e)}}),u&&i(h,"size",{get:function(){return b(this).size}}),d},setStrong:function(e,t,a){var i=t+" Iterator",n=f(t),r=f(i);c(e,t,(function(e,t){m(this,{type:i,target:e,state:n(e),kind:t,last:void 0})}),(function(){var e=r(this),t=e.kind,a=e.last;while(a&&a.removed)a=a.previous;return e.target&&(e.last=a=a?a.next:e.state.first)?"keys"==t?{value:a.key,done:!1}:"values"==t?{value:a.value,done:!1}:{value:[a.key,a.value],done:!1}:(e.target=void 0,{value:void 0,done:!0})}),a?"entries":"values",!a,!0),d(t)}}},"67b1":function(e,t,a){},"6d61":function(e,t,a){"use strict";var i=a("23e7"),n=a("da84"),r=a("e330"),s=a("94ca"),o=a("6eeb"),l=a("f183"),c=a("2266"),d=a("19aa"),u=a("1626"),p=a("861d"),h=a("d039"),m=a("1c7e"),f=a("d44e"),b=a("7156");e.exports=function(e,t,a){var g=-1!==e.indexOf("Map"),_=-1!==e.indexOf("Weak"),v=g?"set":"add",w=n[e],y=w&&w.prototype,S=w,x={},D=function(e){var t=r(y[e]);o(y,e,"add"==e?function(e){return t(this,0===e?0:e),this}:"delete"==e?function(e){return!(_&&!p(e))&&t(this,0===e?0:e)}:"get"==e?function(e){return _&&!p(e)?void 0:t(this,0===e?0:e)}:"has"==e?function(e){return!(_&&!p(e))&&t(this,0===e?0:e)}:function(e,a){return t(this,0===e?0:e,a),this})},I=s(e,!u(w)||!(_||y.forEach&&!h((function(){(new w).entries().next()}))));if(I)S=a.getConstructor(t,e,g,v),l.enable();else if(s(e,!0)){var T=new S,k=T[v](_?{}:-0,1)!=T,$=h((function(){T.has(1)})),P=m((function(e){new w(e)})),N=!_&&h((function(){var e=new w,t=5;while(t--)e[v](t,t);return!e.has(-0)}));P||(S=t((function(e,t){d(e,y);var a=b(new w,e,S);return void 0!=t&&c(t,a[v],{that:a,AS_ENTRIES:g}),a})),S.prototype=y,y.constructor=S),($||N)&&(D("delete"),D("has"),g&&D("get")),(N||k)&&D(v),_&&y.clear&&delete y.clear}return x[e]=S,i({global:!0,forced:S!=w},x),f(S,e),_||a.setStrong(S,e,g),S}},"999b":function(e,t,a){"use strict";a("67b1")},bb2f:function(e,t,a){var i=a("d039");e.exports=!i((function(){return Object.isExtensible(Object.preventExtensions({}))}))},c740:function(e,t,a){"use strict";var i=a("23e7"),n=a("b727").findIndex,r=a("44d2"),s="findIndex",o=!0;s in[]&&Array(1)[s]((function(){o=!1})),i({target:"Array",proto:!0,forced:o},{findIndex:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),r(s)},e2cc:function(e,t,a){var i=a("6eeb");e.exports=function(e,t,a){for(var n in t)i(e,n,t[n],a);return e}},f183:function(e,t,a){var i=a("23e7"),n=a("e330"),r=a("d012"),s=a("861d"),o=a("1a2d"),l=a("9bf2").f,c=a("241c"),d=a("057f"),u=a("90e3"),p=a("bb2f"),h=!1,m=u("meta"),f=0,b=Object.isExtensible||function(){return!0},g=function(e){l(e,m,{value:{objectID:"O"+f++,weakData:{}}})},_=function(e,t){if(!s(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!o(e,m)){if(!b(e))return"F";if(!t)return"E";g(e)}return e[m].objectID},v=function(e,t){if(!o(e,m)){if(!b(e))return!0;if(!t)return!1;g(e)}return e[m].weakData},w=function(e){return p&&h&&b(e)&&!o(e,m)&&g(e),e},y=function(){S.enable=function(){},h=!0;var e=c.f,t=n([].splice),a={};a[m]=1,e(a).length&&(c.f=function(a){for(var i=e(a),n=0,r=i.length;n<r;n++)if(i[n]===m){t(i,n,1);break}return i},i({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:d.f}))},S=e.exports={enable:y,fastKey:_,getWeakData:v,onFreeze:w};r[m]=!0}}]);
//# sourceMappingURL=chunk-02c4ca3a.3b241b16.js.map