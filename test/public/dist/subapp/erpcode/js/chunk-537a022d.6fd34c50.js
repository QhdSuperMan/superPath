(window["webpackJsonp_erpcode"]=window["webpackJsonp_erpcode"]||[]).push([["chunk-537a022d"],{"1fc5":function(t,e,a){"use strict";a("8020")},8020:function(t,e,a){},"8ba4":function(t,e,a){var i=a("23e7"),o=a("eac5");i({target:"Number",stat:!0},{isInteger:o})},b680:function(t,e,a){"use strict";var i=a("23e7"),o=a("da84"),r=a("e330"),s=a("5926"),n=a("408a"),l=a("1148"),c=a("d039"),d=o.RangeError,m=o.String,u=Math.floor,p=r(l),h=r("".slice),f=r(1..toFixed),b=function(t,e,a){return 0===e?a:e%2===1?b(t,e-1,a*t):b(t*t,e/2,a)},_=function(t){var e=0,a=t;while(a>=4096)e+=12,a/=4096;while(a>=2)e+=1,a/=2;return e},g=function(t,e,a){var i=-1,o=a;while(++i<6)o+=e*t[i],t[i]=o%1e7,o=u(o/1e7)},v=function(t,e){var a=6,i=0;while(--a>=0)i+=t[a],t[a]=u(i/e),i=i%e*1e7},y=function(t){var e=6,a="";while(--e>=0)if(""!==a||0===e||0!==t[e]){var i=m(t[e]);a=""===a?i:a+p("0",7-i.length)+i}return a},w=c((function(){return"0.000"!==f(8e-5,3)||"1"!==f(.9,0)||"1.25"!==f(1.255,2)||"1000000000000000128"!==f(0xde0b6b3a7640080,0)}))||!c((function(){f({})}));i({target:"Number",proto:!0,forced:w},{toFixed:function(t){var e,a,i,o,r=n(this),l=s(t),c=[0,0,0,0,0,0],u="",f="0";if(l<0||l>20)throw d("Incorrect fraction digits");if(r!=r)return"NaN";if(r<=-1e21||r>=1e21)return m(r);if(r<0&&(u="-",r=-r),r>1e-21)if(e=_(r*b(2,69,1))-69,a=e<0?r*b(2,-e,1):r/b(2,e,1),a*=4503599627370496,e=52-e,e>0){g(c,0,a),i=l;while(i>=7)g(c,1e7,0),i-=7;g(c,b(10,i,1),0),i=e-1;while(i>=23)v(c,1<<23),i-=23;v(c,1<<i),g(c,1,1),v(c,2),f=y(c)}else g(c,0,a),g(c,1<<-e,0),f=y(c)+p("0",l);return l>0?(o=f.length,f=u+(o<=l?"0."+p("0",l-o)+f:h(f,0,o-l)+"."+h(f,o-l))):f=u+f,f}})},e192:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{attrs:{id:"leixin"}},[a("div",{staticClass:"search_container"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.params}},[a("el-form-item",{staticClass:"organization",attrs:{label:"库存组织",size:"mini"}},[a("el-select",{attrs:{clearable:"",multiple:"","collapse-tags":"",loading:t.paramsLoading,placeholder:"请选择",filterable:""},on:{focus:t.companyListInvok,change:t.companyChange},model:{value:t.companyidList,callback:function(e){t.companyidList=e},expression:"companyidList"}},t._l(t.companyList,(function(e){return a("el-option",{key:e.company_id,attrs:{label:e.company_name,value:e.company_id}},[a("span",{class:1==e.type?"optionStyle":""},[t._v(t._s(e.company_name))])])})),1)],1),a("br"),a("el-form-item",{attrs:{label:"商品编号",size:"mini"}},[a("el-input",{attrs:{clearable:""},model:{value:t.params.goods_id,callback:function(e){t.$set(t.params,"goods_id",e)},expression:"params.goods_id"}})],1),a("el-form-item",{attrs:{label:"商品名称",size:"mini"}},[a("el-input",{attrs:{clearable:""},model:{value:t.params.goods_name,callback:function(e){t.$set(t.params,"goods_name",e)},expression:"params.goods_name"}})],1),a("el-form-item",{attrs:{label:"仓库名称",size:"mini"}},[a("el-select",{attrs:{clearable:"",loading:t.loading,filterable:"",placeholder:"请选择"},on:{focus:t.warehouseInvok},model:{value:t.params.warehouse_id,callback:function(e){t.$set(t.params,"warehouse_id",e)},expression:"params.warehouse_id"}},t._l(t.warehouseList,(function(e){return a("el-option",{key:e.warehouse_id,attrs:{label:e.warehouse_name,value:e.warehouse_id}},[a("span",{staticStyle:{float:"left"}},[t._v(t._s(e.warehouse_name))])])})),1)],1),a("el-form-item",{attrs:{label:"品牌",size:"mini"}},[a("getBrand",{model:{value:t.params.brand_id,callback:function(e){t.$set(t.params,"brand_id",e)},expression:"params.brand_id"}})],1),a("el-form-item",{attrs:{label:"类型",size:"mini"}},[a("jybd-cascader",{ref:"cascader",on:{cascaderChange:t.handleChange}})],1),a("el-form-item",{attrs:{label:"工厂代码",size:"mini"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:t.params.factory_code,callback:function(e){t.$set(t.params,"factory_code",e)},expression:"params.factory_code"}})],1),a("el-form-item",{attrs:{size:"mini"}},[a("el-checkbox",{staticStyle:{margin:"0px 22px 0 62px"},model:{value:t.stocks,callback:function(e){t.stocks=e},expression:"stocks"}},[t._v("包含库存为0的商品")])],1),a("el-form-item",{staticClass:"search-style search",attrs:{size:"mini"}},[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:t.onSearch}},[t._v("查询")]),a("el-button",{attrs:{plain:"",size:"mini"},on:{click:t.onReset}},[t._v("重置")])],1)],1)],1),a("div",{staticClass:"add_delet"},[1==t.authority.b_export?a("el-dropdown",{staticStyle:{margin:"0 10px"}},[a("span",{staticStyle:{cursor:"pointer",color:"#4e90e2"},attrs:{"split-button":""}},[a("el-button",{attrs:{plain:"",icon:"iconfont icon-daochu10",size:"mini"}},[t._v("导出")])],1),a("el-dropdown-menu",{staticStyle:{"margin-top":"10px"},attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{nativeOn:{click:function(e){return t.exportOrder(1)}}},[t._v("导出Excel文件")]),a("el-dropdown-item",{nativeOn:{click:function(e){return t.exportOrder(2)}}},[t._v("导出CSV逗号分隔")])],1)],1):t._e()],1),t.tableColumn.length>0?a("xTable",{ref:"xTable",attrs:{ajax:{url:"v2GetGoodsSummarizingList",params:Object.assign({},this.params,{stocks:t.stocks?1:0})},footerMethod:t.footerMethod,tableColumn:t.tableColumn,fieldUrl:"v2/inventory/InventoryGoods/getGoodsSummarizingList"}}):t._e()],1)])},o=[],r=(a("a15b"),a("d81d"),a("caad"),a("8ba4"),a("a9e3"),a("b680"),{data:function(){return{tableColumn:[{type:"seq",title:"序号",width:50},{title:"库存组织",field:"company_name",width:180},{title:"品牌",field:"brand_name",width:120},{title:"商品编号",field:"goods_id",width:110},{title:"商品名称",field:"goods_name",width:500},{title:"工厂代码",field:"factory_code",width:100},{title:"仓库名称",field:"warehouse_name",width:132},{title:"平均成本价",field:"cost_price",width:120,headerAlign:"right",align:"right",formatter:"priceFormat"},{title:"销售价",field:"sale_price",width:120,headerAlign:"right",align:"right",formatter:"priceFormat"},{title:"在库库存",field:"stocks",headerAlign:"right",align:"right",width:100},{title:"本公司占用",field:"company_occupy_num",headerAlign:"right",align:"right",width:100},{title:"可用库存",field:"available_stocks",headerAlign:"right",align:"right",width:120},{title:"不良品在库",field:"incomplete_stocks",headerAlign:"right",align:"right",width:120},{title:"成本金额",field:"subtotal_amount",width:120,headerAlign:"right",align:"right",formatter:"priceFormat"}]}},methods:{footerMethod:function(t){var e=this,a=t.columns;t.data;return[a.map((function(t,a){if(1===a)return"页小计";if(["stocks","available_stocks","subtotal_amount","incomplete_stocks"].includes(t.property)){var i;i=e.$refs.xTable?e.$utils.sum(e.$refs.xTable._proxy("getTableData").fullData,t.property):0;var o=Number.isInteger(i)?i:i.toFixed(2);return o}return null})),a.map((function(t,a){if(1===a)return"合计";if(["stocks","available_stocks","subtotal_amount","incomplete_stocks"].includes(t.property)){var i;switch(t.property){case"stocks":i=e.TableDataSum?e.TableDataSum.total_stocks:"计算中...";break;case"available_stocks":i=e.TableDataSum?e.TableDataSum.available_stocks:"计算中...";break;case"subtotal_amount":i=e.TableDataSum?e.$options.filters["priceFormatNone"](e.TableDataSum.total_subtotal_amount):"计算中...";break;case"incomplete_stocks":i=e.TableDataSum?e.$options.filters["priceFormatNone"](e.TableDataSum.incomplete_stocks):"计算中...";break}return i}return null}))]}}}),s={name:"inventoryInventorysummer",mixins:[r],data:function(){return{stocks:0,loadingsum:!0,TableDataSum:null,companyidList:[],loading:!1,params:{export_type:1,goods_type_id:""},rowIndex:""}},methods:{companyChange:function(t){this.$set(this.params,"company_id",t.join()),this.$set(this.params,"warehouse_id",""),this.$set(this.params,"goods_name",""),this.$set(this.params,"goods_id",""),this.$set(this.params,"brand_id",""),this.$set(this.params,"goods_type_id","")},exportOrder:function(t){var e=Object.assign(this.params,{export_type:t,stocks:this.stocks?1:0});this.$axMethod.exportGoodsSummarizingUrl(e).then((function(t){200==t.data.code&&(window.location.href=t.data.data.url)}))},handleChange:function(t){this.params.goods_type_id=t[2]},onReset:function(){this.$set(this,"params",{}),this.companyidList=[],this.$refs.cascader.clear(),this.stocks=0,this.onSearch()},portGetAlloodsSummarizingList:function(){var t=this;this.$axMethod.getAlloodsSummarizingList(this.params).then((function(e){var a=e.data;200==a.code&&(t.TableDataSum=a.data,setTimeout((function(){t.$refs.xTable._proxy("updateFooter")}),50))}))},onSearch:function(){this.TableDataSum=null,this.$refs.xTable._getData(),this.portGetAlloodsSummarizingList()}},mounted:function(){this.portGetAlloodsSummarizingList()}},n=s,l=(a("1fc5"),a("2877")),c=Object(l["a"])(n,i,o,!1,null,"1de89926",null);e["default"]=c.exports},eac5:function(t,e,a){var i=a("861d"),o=Math.floor;t.exports=Number.isInteger||function(t){return!i(t)&&isFinite(t)&&o(t)===t}}}]);
//# sourceMappingURL=chunk-537a022d.6fd34c50.js.map