(window["webpackJsonp_erpcode"]=window["webpackJsonp_erpcode"]||[]).push([["chunk-da100eb6"],{"15fd":function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));a("a4d3"),a("b64b");function i(e,t){if(null==e)return{};var a,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}function r(e,t){if(null==e)return{};var a,r,o=i(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}},1700:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",[e._v("库存管理")]),a("el-breadcrumb-item",{staticClass:"attrbute"},[a("span",{on:{click:e.goBack}},[e._v("不良品管理")])]),a("el-breadcrumb-item",[e._v("查看不良品")])],1),a("div",{staticClass:"search_container"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0}},[a("el-form-item",{attrs:{label:"库存组织:"}},[e._v(" "+e._s(e.params.company_name)+" ")]),a("el-form-item",{attrs:{label:"部门:",size:"mini"}},[e._v(" "+e._s(e.params.department_name)+" ")]),a("el-form-item",{attrs:{label:"业务员:",size:"mini"}},[e._v(" "+e._s(e.params.business_name)+" ")]),a("el-form-item",{attrs:{label:"业务日期:",size:"mini"}},[e._v(" "+e._s(e.params.business_time)+" ")]),e._v("`` "),a("el-form-item",{attrs:{label:"单据类型:",size:"mini"}},[e._v(" "+e._s(e.params.order_type)+" ")]),a("el-form-item",{attrs:{label:"单据号:",size:"mini"}},[e._v(" "+e._s(e.params.conversion_sn)+" ")]),a("el-form-item",{attrs:{label:"备注:",size:"mini"}},[e._v(" "+e._s(e.params.abstract)+" ")])],1)],1),a("div",{staticClass:"table_container"},[a("xTable",{ref:"xTable",attrs:{ajax:{url:"DefectiveProductGetOrderInfo",params:{conversion_id:e.$route.query.conversion_id},result:"data.data.goods_list"},isPage:!1,tableColumn:e.tableColumn,footerMethod:e.footerMethod},on:{getData:e.getTableData}})],1),a("div",{staticClass:"dialog-footer",staticStyle:{"text-align":"center","margin-top":"20px"}},[a("el-button",{on:{click:e.goBack}},[e._v("返回")])],1)],1)},r=[],o=a("15fd"),n=(a("d81d"),a("caad"),{data:function(){return{tableColumn:[{type:"index",title:"序号",width:50},{title:"商品编号",field:"goods_id",width:80},{title:"商品名称",field:"goods_name",width:400},{title:"年周/批次",field:"batch",width:88},{title:"单位",field:"goods_unit_name",width:88},{title:"调出仓库",field:"warehouse_name",width:240,showOverflow:!0},{title:"调出货位",field:"allocation_name",width:130,showOverflow:!0},{title:"调入仓库",field:"after_warehouse_name",width:150,showOverflow:!0},{title:"调入货位",field:"after_allocation_name",width:150,showOverflow:!0},{title:"商品单价",field:"goods_price",align:"center",width:100},{title:"不良品数量",field:"goods_num",headerAlign:"center",align:"center",width:100},{title:"商品成本",field:"goods_cost_price",headerAlign:"center",align:"center",width:100},{title:"转不良品原因",field:"reason",width:200}]}},methods:{footerMethod:function(e){var t=this,a=e.columns,i=e.data;return[a.map((function(e,a){if(2===a)return"页小计";if(["goods_price","goods_num","goods_cost_price"].includes(e.property)){var r=t.$utils.sum(i,e.property);return r}return null}))]}}}),l=["goods_list"],s={mixins:[n],name:"IncompleteSee",data:function(){return{conversion_id:""}},methods:{goBack:function(){this.$router.push({path:"/inventory/Incomplete"})},getTableData:function(e){var t=e.data.data,a=(t.goods_list,Object(o["a"])(t,l));this.params=a,console.log(e.data.data)}},mounted:function(){}},d=s,c=a("2877"),m=Object(c["a"])(d,i,r,!1,null,"46b586c2",null);t["default"]=m.exports}}]);
//# sourceMappingURL=chunk-da100eb6.a4df2c42.js.map