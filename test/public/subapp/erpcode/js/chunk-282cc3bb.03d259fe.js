(window["webpackJsonp_erpcode"]=window["webpackJsonp_erpcode"]||[]).push([["chunk-282cc3bb"],{"0308":function(e,t,i){"use strict";i("652a")},"652a":function(e,t,i){},"7cb9":function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"container squareFormSpan"},[i("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[i("el-breadcrumb-item",[e._v("销售管理")]),i("el-breadcrumb-item",{staticClass:"attrbute"},[i("span",{on:{click:e.goBack}},[e._v("商品底价策略")])]),i("el-breadcrumb-item",[e._v("查看商品底价策略")])],1),i("div",{staticClass:"editOrderbox"},[i("h5",{staticClass:"baseTitle"},[e._v("基本信息")]),i("el-form",{ref:"params",staticClass:"demo-form-inline",attrs:{inline:!0,model:e.params}},[i("el-form-item",{attrs:{label:"组织名称",size:"mini"}},[e._v(" "+e._s(e.params.company_name)+" ")]),i("el-form-item",{attrs:{label:"策略名称",size:"mini"}},[e._v(" "+e._s(e.params.price_strategy_name)+" ")]),i("el-form-item",{attrs:{label:"品牌",size:"mini"}},[e._v(" "+e._s(e.params.brand_name)+" ")]),i("el-form-item",{attrs:{label:"策略有效年月",size:"mini"}},[e._v(" "+e._s(e.params.effective_start_time?e.params.effective_start_time.slice(0,7):"")+" "+e._s("-"+(e.params.effective_end_time?e.params.effective_end_time.slice(0,7):""))+" ")])],1),i("h5",{staticClass:"baseTitle"},[e._v("策略内容")]),i("div",{staticClass:"table_container policyContent"},[i("xTable",{attrs:{xData:e.infoTableData,"cell-class-name":e.cellClassName,isEdit:function(){},tableColumn:e.infoTableColumn,"span-method":e.spanMethod}})],1),i("h5",{staticClass:"baseTitle"},[e._v("商品信息")]),i("div",{staticClass:"table_container"},[i("xTable",{ref:"xTable",attrs:{tableColumn:e.tableColumn,isEdit:function(){}}})],1),i("div",{staticClass:"add_delet"},[i("el-button",{attrs:{plain:"",size:"small"},on:{click:e.goBack}},[e._v("返回")])],1)],1)],1)},a=[],o=i("c88a"),c={name:"shoplowPrice/shoplowPriceAdd",mixins:[o["b"]],data:function(){return{policyMonth:[],params:this.$publicFution.deepCopy(o["a"]),editType:1}},methods:{goBack:function(){this.$publicFution.goPage(this.$route.query&&this.$route.query.id),this.$router.push("/purchase/shoplowPrice")}},mounted:function(){var e=this;this.$route.query&&this.$route.query.id&&(this.editType=2,this.$axios({method:"get",params:{price_strategy_id:this.$route.query.id},url:this.$api.getPriceStrategyInfo}).then((function(t){var i=t.data;if(200===i.code){for(var r in e.params=i.data.info,e.tableConfig)e.infoTableData[r].price=e.params[e.tableConfig[r].value];e.computedContent(!0),e.$refs.xTable._proxy("loadData",i.data.goods_list)}})))}},s=c,n=(i("0308"),i("2877")),p=Object(n["a"])(s,r,a,!1,null,"3991e2c4",null);t["default"]=p.exports},b680:function(e,t,i){"use strict";var r=i("23e7"),a=i("da84"),o=i("e330"),c=i("5926"),s=i("408a"),n=i("1148"),p=i("d039"),l=a.RangeError,d=a.String,_=Math.floor,h=o(n),u=o("".slice),f=o(1..toFixed),m=function(e,t,i){return 0===t?i:t%2===1?m(e,t-1,i*e):m(e*e,t/2,i)},g=function(e){var t=0,i=e;while(i>=4096)t+=12,i/=4096;while(i>=2)t+=1,i/=2;return t},w=function(e,t,i){var r=-1,a=i;while(++r<6)a+=t*e[r],e[r]=a%1e7,a=_(a/1e7)},v=function(e,t){var i=6,r=0;while(--i>=0)r+=e[i],e[i]=_(r/t),r=r%t*1e7},y=function(e){var t=6,i="";while(--t>=0)if(""!==i||0===t||0!==e[t]){var r=d(e[t]);i=""===i?r:i+h("0",7-r.length)+r}return i},b=p((function(){return"0.000"!==f(8e-5,3)||"1"!==f(.9,0)||"1.25"!==f(1.255,2)||"1000000000000000128"!==f(0xde0b6b3a7640080,0)}))||!p((function(){f({})}));r({target:"Number",proto:!0,forced:b},{toFixed:function(e){var t,i,r,a,o=s(this),n=c(e),p=[0,0,0,0,0,0],_="",f="0";if(n<0||n>20)throw l("Incorrect fraction digits");if(o!=o)return"NaN";if(o<=-1e21||o>=1e21)return d(o);if(o<0&&(_="-",o=-o),o>1e-21)if(t=g(o*m(2,69,1))-69,i=t<0?o*m(2,-t,1):o/m(2,t,1),i*=4503599627370496,t=52-t,t>0){w(p,0,i),r=n;while(r>=7)w(p,1e7,0),r-=7;w(p,m(10,r,1),0),r=t-1;while(r>=23)v(p,1<<23),r-=23;v(p,1<<r),w(p,1,1),v(p,2),f=y(p)}else w(p,0,i),w(p,1<<-t,0),f=y(p)+h("0",n);return n>0?(a=f.length,f=_+(a<=n?"0."+h("0",n-a)+f:u(f,0,a-n)+"."+u(f,a-n))):f=_+f,f}})},c88a:function(e,t,i){"use strict";i.d(t,"a",(function(){return o})),i.d(t,"b",(function(){return c}));i("a9e3"),i("b680"),i("99af"),i("d3b7"),i("d81d");var r=[{type:"采购",project:"工厂年度任务",unit_name:"条",price:"",computePriceInfo:"手动填写",ratio:"不适用",ratioCycle:"不适用"},{type:"采购",project:"平均含税进价",unit_name:"元/条",price:"",computePriceInfo:"手动填写",ratio:"不适用",ratioCycle:"不适用"},{type:"采购",project:"采购金额",unit_name:"元",price:"",computePriceInfo:"工厂年度任务*平均含税进价",ratio:"不适用",ratioCycle:"不适用"},{type:"固定费用",project:"人力费用",unit_name:"元",price:"",computePriceInfo:"手动填写",ratio:"0.0",ratioCycle:"人力费用/销售金额"},{type:"固定费用",project:"差旅费",unit_name:"元",price:"",computePriceInfo:"手动填写",ratio:"0.0",ratioCycle:"差旅费/销售金额"},{type:"固定费用",project:"培训费",unit_name:"元",price:"",computePriceInfo:"手动填写",ratio:"0.0",ratioCycle:"培训费/销售金额"},{type:"固定费用",project:"模具折旧",unit_name:"元",price:"",computePriceInfo:"手动填写",ratio:"0.0",ratioCycle:"模具折旧/销售金额"},{type:"变动费用",project:"仓储费用",unit_name:"元",price:"",computePriceInfo:"手动填写",ratio:"0.0",ratioCycle:"仓储费用/销售金额"},{type:"变动费用",project:"物流费用",unit_name:"元",price:"",computePriceInfo:"手动填写",ratio:"0.0",ratioCycle:"物流费用/销售金额"},{type:"变动费用",project:"资金成本",unit_name:"元",price:"",computePriceInfo:"手动填写",ratio:"0.0",ratioCycle:"资金成本/销售金额"},{type:"变动费用",project:"总部管理费",unit_name:"元",price:"",computePriceInfo:"销售金额*比率",ratio:"固定1.0",ratioCycle:"固定值"},{type:"变动费用",project:"订单通奖励",unit_name:"元",price:"",computePriceInfo:"销售金额*比率",ratio:"固定1.0",ratioCycle:"固定值"},{type:"变动费用",project:"综合税金",unit_name:"元",price:"",computePriceInfo:"销售金额*比率",ratio:"实际0.0",ratioCycle:"固比率（底价毛利）/1.13*0.1456定值"},{type:"税前利润",project:"税前利润",unit_name:"元",price:"",computePriceInfo:"销售金额*比率",ratio:"固定2.0",ratioCycle:"固定值"},{type:"销售",project:"销售金额",unit_name:"元",price:"",computePriceInfo:"采购金额+底价毛利",ratio:"不适用",ratioCycle:"不适用"},{type:"销售",project:"销售底价毛利金额",unit_name:"元",price:"",computePriceInfo:"（（固定费用+仓储费用+物流费用+资金成本）+采购金额*（比率（总部管理费）+比率（订单通奖励）+比率（税前利润））/（1-1/1.13*13%*1.12-（比率（总部管理费）+比率（订单通奖励）+比率（税前利润）））",ratio:0,ratioCycle:"底价毛利/销售金额"},{type:"销售",project:"平均含税售价",unit_name:"元/条",price:"",computePriceInfo:"销售金额/工厂年度任务",ratio:"不适用",ratioCycle:"不适用"}],a={0:{value:"factory_annual_task",isEdit:!0,title:"工厂年度任务"},1:{value:"avg_purchase_price",isEdit:!0,title:"平均含税进价"},2:{value:"purchase_price",isEdit:!1,title:"采购金额"},3:{value:"manpower_price",isEdit:!0,title:"人力费用"},4:{value:"travel_price",isEdit:!0,title:"差旅费"},5:{value:"trainning_price",isEdit:!0,title:"培训费"},6:{value:"depreciation_price",isEdit:!0,title:"模具折旧"},7:{value:"warehousing_price",isEdit:!0,title:"仓储费用"},8:{value:"logistics_price",isEdit:!0,title:"物流费用"},9:{value:"capital_price",isEdit:!0,title:"资金成本"},10:{value:"headquarters_management_price",isEdit:!1,title:"总部管理费"},11:{value:"order_pass_price",isEdit:!1,title:"订单通奖励"},12:{value:"comprehensive_tax_price",isEdit:!1,title:"综合税金"},13:{value:"profit_before_tax",isEdit:!1,title:"税前利润"},14:{value:"sales_price",isEdit:!1,title:"销售金额"},15:{value:"gross_profit",isEdit:!1,title:"底价毛利"},16:{value:"sales_gross_profit",isEdit:!1,title:"平均含税售价"}},o={company_id:localStorage.getItem("company_id"),company_name:localStorage.getItem("company_name"),price_strategy_name:"",effective_start_time:"",effective_end_time:""},c=(localStorage.getItem("purchase_center_company_id"),{data:function(){var e=this,t=this.$createElement;return{editRules:{price:[{required:!0,message:"数量输入请在0-99999999之间"}]},infoTableData:this.$publicFution.deepCopy(r),tableConfig:a,infoTableColumn:[{title:"类型",field:"type",width:200},{title:"项目",field:"project",width:200},{title:"单位",field:"unit_name",width:80},{title:"金额",field:"price",headerAlign:"right",align:"right",width:100,editRender:{name:"Vinput",autoselect:!0,formatter:"Positive",getOutSlots:function(i){var r=i.$rowIndex,a="";return e.tableConfig[r].isEdit&&(a=[t("i",{style:"margin-left: 2px;color:#5CADFF",class:"el-icon-edit"})]),a},events:{change:function(){e.contentDisabled=!0}}}},{title:"金额计算说明",field:"computePriceInfo",width:300},{title:"比率",field:"ratio",headerAlign:"right",align:"right",width:120,editRender:{name:"Vinput",getOutSlots:function(e){var i=e.row;if("不适用"!==i.ratio)return[t("span",["%"])]}}},{title:"比率计算说明",field:"ratioCycle"}],tableColumn:[{title:"商品类型",field:"goods_type_name",width:100},{title:"品牌",field:"unit_name",width:100},{title:"商品编号",field:"goods_id",width:100},{title:"商品名称",field:"goods_name",width:400},{title:"工厂代码",field:"factory_code",width:100},{title:"单位",field:"unit_name",width:100},{title:"采购",width:100,children:[{title:"工厂年度任务",field:"factory_annual_task",width:100},{title:"平均进货价",field:"avg_purchase_price",editRender:{name:"Vinput",formatter:"Positive",events:{change:function(t){var i=t.row;e.shopDisabled=!0,i.remark="手动修改进价"}}},width:100},{title:"采购金额",field:"purchase_price",width:100}]},{title:"固定费用",width:100,children:[{title:"人力费用",field:"manpower_price",width:100},{title:"差旅费",field:"travel_price",width:100},{title:"培训费",field:"trainning_price",width:100},{title:"模具折旧",field:"depreciation_price",width:100}]},{title:"变动费用",width:100,children:[{title:"仓储费用",field:"warehousing_price",width:100},{title:"物流费用",field:"logistics_price",width:100},{title:"资金成本",field:"capital_price",width:100},{title:"总部管理费",field:"headquarters_management_price",width:100},{title:"订单通奖励",field:"order_pass_price",width:100},{title:"综合税金",field:"comprehensive_tax_price",width:100}]},{title:"税前利润",field:"profit_before_tax",width:100},{title:"销售",width:100,children:[{title:"销售金额",field:"sales_price",width:100},{title:"底价毛利",field:"gross_profit",width:100},{title:"销售底价金额",field:"sales_gross_profit",width:100}]},{title:"备注",field:"remark",width:100}]}},methods:{getRowPrice:function(e){for(var t in this.tableConfig)if(this.tableConfig[t].value===e)return isNaN(Number(this.infoTableData[t].price))?0:Number(this.infoTableData[t].price)},getRow:function(e){for(var t in this.tableConfig)if(this.tableConfig[t].value===e)return this.infoTableData[t]},brandChange:function(e){var t=this;e.brand_id&&this.$axMethod.getInventoryGoodsList({company_id:this.params.company_id,brand_id:e.brand_id,start_time:this.params.effective_start_time?this.params.effective_start_time+="-01":"",end_time:this.params.effective_end_time?this.params.effective_end_time+="-01":""}).then((function(e){var i=e.data;t.$refs.xTable._proxy("loadData",i.data)}))},getRenderRow:function(){var e={};for(var t in this.tableConfig)e[this.tableConfig[t].value]=this.getRowPrice(this.tableConfig[t].value);return e},policyMonthChange:function(e){this.currentYear=null,Array.isArray(e)?(this.params.effective_start_time=e[0],this.params.effective_end_time=e[1]):(this.params.effective_start_time="",this.params.effective_end_time=""),this.brandChange(this.params)},isEdit:function(e){var t=e.column,i=e.$rowIndex;return!!this.tableConfig[i].isEdit&&"ratio"!==t.property},cellClassName:function(e){var t=e.row,i=e.column;if("销售底价毛利金额"===t.project&&"computePriceInfo"===i.property)return"vxe-nowrap"},spanMethod:function(e){var t=e.row,i=e.rowIndex,r=e.column,a=e.data;if("type"===r.property||"ratio"===r.property||"ratioCycle"===r.property){if(a[i-1]&&a[i-1][r.property]!==t[r.property]||0===i){var o=this.computedSapn(e,"ratio"===r.property||"ratioCycle"===r.property?3:null),c=1;return t.type===t.project&&"type"===r.property&&(c=2),{rowspan:o,colspan:c}}var s=0;return("ratio"===r.property||"ratioCycle"===r.property)&&i>2&&(s=1),{rowspan:s,colspan:1}}return"project"===r.property&&t.type===t.project?{rowspan:0,colspan:0}:{rowspan:1,colspan:1}},computedSapn:function(e,t){for(var i=e.row,r=e.rowIndex,a=e.data,o=e.column,c=1,s=t||a.length,n=r+1;n<s;n++){if(a[n][o.property]!==i[o.property])return c;c++}return c},computedContent:function(e){this.computedPurchasePrice(),this.computedGrossProfit(),this.getRow("headquarters_management_price").price=(.01*this.getRowPrice("sales_price")).toFixed(2),this.getRow("order_pass_price").price=(.01*this.getRowPrice("sales_price")).toFixed(2);var t=this.getRow("gross_profit").ratio/100/1.13*.1456;this.getRow("comprehensive_tax_price").ratio=(100*t).toFixed(2),this.getRow("comprehensive_tax_price").price=(this.getRowPrice("sales_price")*t.toFixed(4)).toFixed(2),this.getRow("profit_before_tax").price=(.02*this.getRowPrice("sales_price")).toFixed(2),0!==this.getRowPrice("factory_annual_task")?this.getRow("sales_gross_profit").price=(this.getRowPrice("sales_price")/this.getRowPrice("factory_annual_task")).toFixed(2):this.getRow("sales_gross_profit").price=0,0!==this.getRowPrice("sales_price")?(this.getRow("manpower_price").ratio=(this.getRowPrice("manpower_price")/this.getRowPrice("sales_price")*100).toFixed(2),this.getRow("travel_price").ratio=(this.getRowPrice("travel_price")/this.getRowPrice("sales_price")*100).toFixed(2),this.getRow("trainning_price").ratio=(this.getRowPrice("trainning_price")/this.getRowPrice("sales_price")*100).toFixed(2),this.getRow("depreciation_price").ratio=(this.getRowPrice("depreciation_price")/this.getRowPrice("sales_price")*100).toFixed(2),this.getRow("warehousing_price").ratio=(this.getRowPrice("warehousing_price")/this.getRowPrice("sales_price")*100).toFixed(2),this.getRow("logistics_price").ratio=(this.getRowPrice("logistics_price")/this.getRowPrice("sales_price")*100).toFixed(2),this.getRow("capital_price").ratio=(this.getRowPrice("capital_price")/this.getRowPrice("sales_price")*100).toFixed(2)):(this.getRow("manpower_price").ratio=0,this.getRow("travel_price").ratio=0,this.getRow("trainning_price").ratio=0,this.getRow("depreciation_price").ratio=0,this.getRow("warehousing_price").ratio=0,this.getRow("logistics_price").ratio=0,this.getRow("capital_price").ratio=0),!0!==e&&this.renderShop(),this.contentDisabled=!1,this.shopDisabled=!0},renderShop:function(){var e=this.$refs.xTable._proxy("getTableData").fullData.concat([]),t=e.length,i=this.getRenderRow();delete i.avg_purchase_price;var r={};["manpower_price","travel_price","trainning_price","depreciation_price","warehousing_price","logistics_price","capital_price","factory_annual_task"].forEach((function(e){r[e]=(i[e]/t).toFixed(2)})),e=e.map((function(e){var t=Object.assign({},e,r);return t})),this.$refs.xTable._proxy("loadData",e)},computedPurchasePrice:function(){var e=(this.getRowPrice("factory_annual_task")*this.getRowPrice("avg_purchase_price")).toFixed(2);this.getRow("purchase_price").price=e},computedGrossProfit:function(){var e=(this.getRowPrice("manpower_price")+this.getRowPrice("travel_price")+this.getRowPrice("trainning_price")+this.getRowPrice("depreciation_price")+this.getRowPrice("warehousing_price")+this.getRowPrice("logistics_price")+this.getRowPrice("capital_price")+.04*this.getRowPrice("purchase_price"))/.8311504424778761;e=e.toFixed(2),this.getRow("gross_profit").price=e,this.getRow("sales_price").price=(this.getRowPrice("purchase_price")+this.getRowPrice("gross_profit")).toFixed(2),0!==this.getRowPrice("sales_price")&&(this.getRow("gross_profit").ratio=(this.getRowPrice("gross_profit")/this.getRowPrice("sales_price")*100).toFixed(2))}}})}}]);
//# sourceMappingURL=chunk-282cc3bb.03d259fe.js.map