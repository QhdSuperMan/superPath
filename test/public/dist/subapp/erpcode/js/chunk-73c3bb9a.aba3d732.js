(window["webpackJsonp_erpcode"]=window["webpackJsonp_erpcode"]||[]).push([["chunk-73c3bb9a"],{"2e4b":function(e,t,a){"use strict";a("6de6")},"6de6":function(e,t,a){},"89d8":function(e,t,a){"use strict";a("d81d"),a("caad"),a("b680");var i={data:function(){var e=this;return{tableColumn:[{type:"checkbox",width:40},{field:"business_type_name",title:"业务类型",width:150},{field:"brand_name",title:"品牌",width:150},{field:"goods_id",title:"商品编号",width:80},{field:"goods_name",title:"商品名称",width:300},{field:"batch",title:"年周/批次",width:200,editRender:{autoselect:!0,name:"vBatch",getParams:function(t){return{params:{company_id:e.params.company_id,warehouse_id:e.params.warehouse_id,goods_id:t.row.goods_id,bill_type:2}}},events:{change:function(e,t){var a=t.row;if(!a.goods_id)return!1;var i=e.warehouse_id,s=e.warehouse_name,r=e.allocation_name,o=e.allocation_id,n=e.available_stocks,l=e.batch,c=e.batch_id;Object.assign(a,{warehouse_id:i,warehouse_name:s,allocation_name:r,allocation_id:o,available_stocks:n,batch:l,batch_id:c})}}}},{field:"unit_name",title:"单位",width:80},{field:"warehouse_name",title:"仓库",width:132},{field:"allocation_name",title:"货位",width:170},{field:"real_num",title:"数量",width:130},{field:"goods_price",title:"原销售价",width:130},{field:"discount_unit_price",title:"原折后价",width:130},{field:"abrasion_price",title:"磨损费",width:130},{field:"intube_price",title:"内垫费",width:130},{field:"claim_price",title:"理赔单价",width:130},{field:"new_goods_price",title:"最新销售价",width:130},{field:"total_price",title:"小计金额",width:130},{field:"remark",title:"备注",width:150,showOverflow:!0,editRender:{name:"Vinput",formatter:"String"}}],tableData:[]}},methods:{activeMethod:function(e){var t=e.column,a=e.row;e.$rowIndex;return"remark"===t.property||("batch"===t.property?"三包折款"!=a.business_type_name:void 0)},addRow:function(){var e=this.$refs.xTable;e.createRow({production_time:"",allocation_id:null,batch:this.getWeek()}).then((function(t){e.insertAt(t,-1)})),this.referenceDisabled=!0},footerMethod:function(e){var t=this,a=e.columns,i=e.data;return[a.map((function(e,a){return 1===a?"合计":["total_price"].includes(e.property)?(t.totalPrice=t.$utils.sum(i,e.property).toFixed(2),t.$utils.sum(i,e.property).toFixed(2)):null}))]}}};t["a"]=i},b680:function(e,t,a){"use strict";var i=a("23e7"),s=a("da84"),r=a("e330"),o=a("5926"),n=a("408a"),l=a("1148"),c=a("d039"),m=s.RangeError,d=s.String,u=Math.floor,p=r(l),_=r("".slice),b=r(1..toFixed),f=function(e,t,a){return 0===t?a:t%2===1?f(e,t-1,a*e):f(e*e,t/2,a)},h=function(e){var t=0,a=e;while(a>=4096)t+=12,a/=4096;while(a>=2)t+=1,a/=2;return t},g=function(e,t,a){var i=-1,s=a;while(++i<6)s+=t*e[i],e[i]=s%1e7,s=u(s/1e7)},v=function(e,t){var a=6,i=0;while(--a>=0)i+=e[a],e[a]=u(i/t),i=i%t*1e7},y=function(e){var t=6,a="";while(--t>=0)if(""!==a||0===t||0!==e[t]){var i=d(e[t]);a=""===a?i:a+p("0",7-i.length)+i}return a},w=c((function(){return"0.000"!==b(8e-5,3)||"1"!==b(.9,0)||"1.25"!==b(1.255,2)||"1000000000000000128"!==b(0xde0b6b3a7640080,0)}))||!c((function(){b({})}));i({target:"Number",proto:!0,forced:w},{toFixed:function(e){var t,a,i,s,r=n(this),l=o(e),c=[0,0,0,0,0,0],u="",b="0";if(l<0||l>20)throw m("Incorrect fraction digits");if(r!=r)return"NaN";if(r<=-1e21||r>=1e21)return d(r);if(r<0&&(u="-",r=-r),r>1e-21)if(t=h(r*f(2,69,1))-69,a=t<0?r*f(2,-t,1):r/f(2,t,1),a*=4503599627370496,t=52-t,t>0){g(c,0,a),i=l;while(i>=7)g(c,1e7,0),i-=7;g(c,f(10,i,1),0),i=t-1;while(i>=23)v(c,1<<23),i-=23;v(c,1<<i),g(c,1,1),v(c,2),b=y(c)}else g(c,0,a),g(c,1<<-t,0),b=y(c)+p("0",l);return l>0?(s=b.length,b=u+(s<=l?"0."+p("0",l-s)+b:_(b,0,s-l)+"."+_(b,s-l))):b=u+b,b}})},f24e:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",[e._v("库存管理")]),a("el-breadcrumb-item",{staticClass:"attrbute"},[a("span",{on:{click:e.goBack}},[e._v("三包出库")])]),a("el-breadcrumb-item",[e._v("修改三包出库")])],1),a("div",{directives:[{name:"clock",rawName:"v-clock"}],staticClass:"search_container"},[a("el-form",{ref:"TableDataRef",attrs:{inline:!0,model:e.params}},[a("el-form-item",{attrs:{label:"库存组织",size:"mini"}},[a("el-input",{attrs:{disabled:""},model:{value:e.params.company_name,callback:function(t){e.$set(e.params,"company_name",t)},expression:"params.company_name"}})],1),a("el-form-item",{attrs:{label:"部门",size:"mini"}},[a("el-input",{attrs:{disabled:""},model:{value:e.params.department_name,callback:function(t){e.$set(e.params,"department_name",t)},expression:"params.department_name"}})],1),a("el-form-item",{attrs:{label:"业务员",size:"mini"}},[a("el-input",{attrs:{disabled:""},model:{value:e.params.business_name,callback:function(t){e.$set(e.params,"business_name",t)},expression:"params.business_name"}})],1),a("el-form-item",{attrs:{label:"选择客户",size:"mini"}},[a("el-input",{attrs:{disabled:""},model:{value:e.params.customer_name,callback:function(t){e.$set(e.params,"customer_name",t)},expression:"params.customer_name"}})],1),a("el-form-item",{attrs:{label:"业务日期",size:"mini",prop:"business_time",rules:e.rules.business_time}},[a("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd"},model:{value:e.params.business_time,callback:function(t){e.$set(e.params,"business_time",t)},expression:"params.business_time"}})],1),a("el-form-item",{attrs:{label:"送货需求",size:"mini"}},[a("el-input",{attrs:{disabled:""},model:{value:e.params.delivery_demand_name,callback:function(t){e.$set(e.params,"delivery_demand_name",t)},expression:"params.delivery_demand_name"}})],1),a("el-form-item",{attrs:{label:"交货方式",size:"mini"}},[a("el-input",{attrs:{disabled:""},model:{value:e.params.hand_over_name,callback:function(t){e.$set(e.params,"hand_over_name",t)},expression:"params.hand_over_name"}})],1),a("el-form-item",{staticClass:"wauto",staticStyle:{"min-width":"312px"},attrs:{label:"所属区域",size:"mini"}},[a("el-input",{attrs:{disabled:""},model:{value:e.defaultAreaName,callback:function(t){e.defaultAreaName=t},expression:"defaultAreaName"}})],1),a("el-form-item",{attrs:{label:"详细地址",size:"mini"}},[a("el-input",{attrs:{disabled:""},model:{value:e.params.address,callback:function(t){e.$set(e.params,"address",t)},expression:"params.address"}})],1),a("el-form-item",{attrs:{label:"收货人",size:"mini"}},[a("el-input",{attrs:{disabled:""},model:{value:e.params.consignee_name,callback:function(t){e.$set(e.params,"consignee_name",t)},expression:"params.consignee_name"}})],1),a("el-form-item",{attrs:{label:"手机号",size:"mini"}},[a("el-input",{attrs:{disabled:""},model:{value:e.params.consignee_mobile,callback:function(t){e.$set(e.params,"consignee_mobile",t)},expression:"params.consignee_mobile"}})],1),a("el-form-item",{attrs:{label:"出库类型",size:"mini"}},[a("el-input",{attrs:{value:"三包出库",disabled:""}})],1),a("el-form-item",{attrs:{label:"回款方式",size:"mini",prop:"payment_method"}},[e._v(" "+e._s(function(){0==e.params.settlement_customer_id&&(e.params.settlement_customer_id=null)}())+" "),a("el-select",{model:{value:e.params.payment_method,callback:function(t){e.$set(e.params,"payment_method",t)},expression:"params.payment_method"}},[a("el-option",{attrs:{label:"客户自结",value:1}},[e._v("客户自结")]),a("el-option",{attrs:{label:"物流代收",value:2}},[e._v("物流代收")])],1)],1),2===e.params.payment_method?a("el-form-item",{attrs:{label:"物流公司",size:"mini",prop:"settlement_customer_id",rules:e.rules.settlement_customer_id}},[e._v(" "+e._s(function(){0==e.params.settlement_customer_id&&(e.params.settlement_customer_id=null)}())+" "),a("el-select",{attrs:{clearable:"",filterable:"","filter-method":e.logisticsInvok},on:{focus:e.logisticsInvok,change:e.logisticsChanges},model:{value:e.params.settlement_customer_id,callback:function(t){e.$set(e.params,"settlement_customer_id",t)},expression:"params.settlement_customer_id"}},e._l(e.logisticsList,(function(e){return a("el-option",{key:e.logistics_id,attrs:{label:e.logistics_name,value:e.logistics_id}})})),1)],1):a("el-form-item",{attrs:{label:"物流公司",size:"mini",prop:"settlement_customer_id"}},[e._v(" "+e._s(function(){0==e.params.settlement_customer_id&&(e.params.settlement_customer_id=null)}())+" "),a("el-select",{attrs:{clearable:"",filterable:"","filter-method":e.logisticsInvok},on:{focus:e.logisticsInvok,change:e.logisticsChanges},model:{value:e.params.settlement_customer_id,callback:function(t){e.$set(e.params,"settlement_customer_id",t)},expression:"params.settlement_customer_id"}},e._l(e.logisticsList,(function(e){return a("el-option",{key:e.logistics_id,attrs:{label:e.logistics_name,value:e.logistics_id}})})),1)],1),a("el-form-item",{attrs:{label:"摘要",size:"mini"}},[a("el-input",{attrs:{type:"text"},model:{value:e.params.abstract,callback:function(t){e.$set(e.params,"abstract",t)},expression:"params.abstract"}})],1)],1)],1),a("div",{staticClass:"table_container"},[a("vxe-grid",{ref:"xTable",attrs:{border:"","show-footer":"true","show-overflow":"tooltip","row-style":e.rowClassName,size:"mini","footer-method":e.footerMethod,"max-height":"500px",data:e.tableData,resizable:"",height:"500px","column-min-width":"100","mouse-config":{selected:!0},columns:e.tableColumn,"keyboard-config":{isArrow:!0,isDel:!1,isTab:!0,isEdit:!0},"edit-config":{trigger:"click",mode:"cell",autoClear:!1,activeMethod:e.activeMethod}}})],1),a("br"),a("el-form",{ref:"TableDataRef2",staticClass:"priceFoot",attrs:{model:e.params,inline:!0}},[a("el-form-item",{attrs:{label:"本单使用返利："}},[a("el-input",{staticClass:"element_input",attrs:{type:"number","suffix-icon":"el-icon-edit-outline",disabled:""},on:{change:function(t){return e.toFixed2("rebate_price")}},nativeOn:{keyup:function(t){return e.countSettlementPrice.apply(null,arguments)}},model:{value:e.params.rebate_price,callback:function(t){e.$set(e.params,"rebate_price",t)},expression:"params.rebate_price"}}),e._v(" 元 "),a("span",{staticClass:"yeban"},[e._v("余额:"+e._s(e._f("priceFormat")(e.params.rebate_balance?e.params.rebate_balance:0)))])],1),a("el-form-item",{attrs:{label:"本单使用授信："}},[a("el-input",{staticClass:"element_input",attrs:{type:"number","suffix-icon":"el-icon-edit-outline",disabled:""},on:{change:function(t){return e.toFixed2("credit_price")}},nativeOn:{keyup:function(t){return e.countSettlementPrice.apply(null,arguments)}},model:{value:e.params.credit_price,callback:function(t){e.$set(e.params,"credit_price",t)},expression:"params.credit_price"}}),e._v(" 元 "),a("span",{staticClass:"yeban"},[e._v("余额:"+e._s(e._f("priceFormat")(e.params.credit_balance?e.params.credit_balance:0)))])],1),a("el-form-item",{attrs:{label:"本单使用预收："}},[a("el-input",{staticClass:"element_input",attrs:{"suffix-icon":"el-icon-edit-outline",type:"number",disabled:""},on:{change:function(t){return e.toFixed2("deposits_price")}},nativeOn:{keyup:function(t){return e.countSettlementPrice.apply(null,arguments)}},model:{value:e.params.deposits_price,callback:function(t){e.$set(e.params,"deposits_price",t)},expression:"params.deposits_price"}}),e._v(" 元 "),a("span",{staticClass:"yeban"},[e._v("余额:"+e._s(e._f("priceFormat")(e.params.deposits?e.params.deposits:0)))])],1),a("el-form-item",{attrs:{label:"客户余额："}},[a("el-input",{staticClass:"element_input",attrs:{disabled:""},model:{value:e.params.balance,callback:function(t){e.$set(e.params,"balance",t)},expression:"params.balance"}}),a("el-button",{attrs:{type:"primary"},on:{click:e.seeMoneyDetail}},[e._v("查看往来")])],1),a("el-form-item",{attrs:{label:"本单结算金额："}},[a("span",[e._v(e._s(e.params.settlement_price))])])],1),a("br"),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.goBack}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submit("TableDataRef")}}},[e._v("确 定")])],1)],1)},s=[],r=a("5530"),o=(a("d3b7"),a("a9e3"),a("b680"),a("a15b"),a("159b"),a("e9c4"),a("4de4"),a("d81d"),a("99af"),a("2f62")),n=a("65b0"),l=a("89d8"),c={name:"instorageThreeoutstorageThreeoutstorageModifyOrder",mixins:[l["a"]],data:function(){return{authority:{},defaultArea:[0],defaultAreaName:"",rowIndex:null,params:{},TableData:{tableData:[],total:10},multipleSelection:[],multiGoodsList:{},cityList:[],totalPrice:0}},props:["outstockId"],computed:Object(r["a"])({},Object(o["c"])(["threeoutstorageModifyGet"])),methods:Object(r["a"])(Object(r["a"])({},Object(o["b"])(["threeoutstorageAddACT","threeoutstorageIndexACT","creditmanageAdd_show"])),{},{cleasrsettlement_customer_id:function(){this.$set(this.params,"settlement_customer_id",0)},goBack:function(){this.threeoutstorageIndexACT({goPage:this.threeoutstorageModifyGet.goPage,params:this.threeoutstorageModifyGet.params,pageSize:this.threeoutstorageModifyGet.pageSize}),this.$router.push({path:"/inventory/threeoutstorage"})},countSettlementPrice:function(){var e=this,t=["rebate_price","credit_price","deposits_price"];t.forEach((function(t){e.$set(e.params,t,!e.params[t]||e.params[t]<0?0:e.params[t])}));var a=Number(this.totalPrice)-Number(this.params.rebate_price)-Number(this.params.credit_price)-Number(this.params.deposits_price);this.$set(this.params,"settlement_price",a.toFixed(2))},toFixed2:function(e){var t=this;this.$nextTick((function(){t.params[e]&&!isNaN(t.params[e])||(t.params[e]=0),t.params[e]>=1e8&&(t.$message.warning("数值不能超过一亿"),t.params[e]=0),t.params[e]=Number(t.params[e]).toFixed(2)}))},handleEdit:function(e,t){var a=this;this.$nextTick((function(){(t.real_num<0||isNaN(t.real_num))&&(t.real_num=0),t.real_num>=1e8&&(a.$message.warning("数值不能超过一亿"),t.real_num=0),t.real_num=Math.ceil(t.real_num)}))},seeMoneyDetail:function(){this.$router.push({path:"/custom/accountlog"})},getCustomerInfo:function(){var e=this,t={customer_id:this.params.customer_id,company_id:this.params.company_id,is_three_packs:1};this.$axMethod.getCustomerInfoNEWqx(t).then((function(t){var a=t.data;e.$set(e.params,"deposits",a.data.deposits),e.$set(e.params,"credit_balance",a.data.credit_balance),e.$set(e.params,"balance",a.data.balance),e.$set(e.params,"rebate_balance",a.data.rebate_balance)}))},warehouseChange:function(){this.$set(this.params,"warehouse_id",this.params.warehouse_id),this.$set(this.params,"customer_id",this.params.customer_id),this.$set(this.TableData,"tableData",null)},changeDefaultArea:function(e){this.params.cityList=e.join(","),this.params.province_id=e[0],this.params.city_id=e[1],this.params.area_id=e[2]},submit:function(e){var t=this,a=this;this.params.rebate_price||(this.params.rebate_price=0),this.params.goods_info=[],this.$refs[e].validate((function(e){if(e){if(!t.$refs.xTable.getTableData().fullData.length)return t.$message.error("请先选择订单"),!1;t.$refs.xTable.getTableData().fullData.forEach((function(e){t.params.goods_info.push({order_goods_id:e.order_goods_id,goods_id:e.goods_id,batch_id:e.batch_id,unit_name:e.unit_name,warehouse_id:e.warehouse_id,warehouse_name:e.warehouse_name,allocation_id:e.allocation_id?e.allocation_id:0,allocation_name:e.allocation_name?e.allocation_name:"",discount_unit_price:e.discount_unit_price,unit_credit_price:e.unit_credit_price,unit_rebate_price:e.unit_rebate_price,unit_deposits_price:e.unit_deposits_price,company_id:t.params.company_id,company_name:t.params.company_name,remark:e.remark,real_num:e.real_num,goods_num:e.real_num,total_price:e.total_price,claim_price:e.claim_price,business_type:e.business_type,goods_price:e.goods_price,batch:e.batch,new_goods_price:e.new_goods_price,abrasion_price:e.abrasion_price,intube_price:e.intube_price,outstock_goods_id:e.outstock_goods_id})})),t.params.goods_info=JSON.stringify(t.params.goods_info);var i=t.params.goods_info;i=JSON.parse(i),i=i.filter((function(e){return 2==e.business_type}));var s=i.map((function(e){return{warehouse_id:e.warehouse_id,warehouse_name:e.warehouse_name,allocation_id:e.allocation_id,goods_id:e.goods_id,batch:e.batch,order_goods_id:e.order_goods_id||0,sale_price:e.new_goods_price||0,batch_id:e.batch_id,goods_num:e.real_num}}));t.$baseData.checkCarDoctor({company_id:t.params.company_id,company_name:t.params.company_name,bill_type:13,bill_id:t.outstock_id,operation_type:2,goods_info:JSON.stringify(s)}).then((function(){t.$axMethod.safetyStockCheck({bill_sn:t.params.outstock_sn,bill_id:t.outstock_id,company_id:t.params.company_id,company_name:t.params.company_name,business_time:t.params.business_time,bill_logogram:"tbck",order_type:1,goods_info:JSON.stringify(s)}).then((function(){Object(n["m"])(t,{company_id:t.params.company_id,goods_info:JSON.stringify(i),status:1,type:3},(function(){a.$axMethod.editThreeOutStorage(a.params).then((function(e){var t=e.data;"200"==t.code&&(a.$message({message:t.data,type:"success"}),a.goBack())}))}))}))}))}}))}}),mounted:function(){var e=this;this.outstock_id=this.threeoutstorageModifyGet.outstock_id,this.$axios({method:"get",url:this.$api.infoThreeOutStorage,params:{outstock_id:this.outstock_id}}).then((function(t){var a=t.data;if(200==a.code){e.$set(e,"params",a.data),e.defaultAreaName="".concat(a.data.province_name,"/").concat(a.data.city_name,"/").concat(a.data.area_name);var i={customer_id:e.params.customer_id,company_id:e.params.company_id,is_three_packs:1};e.logisticsList=[{logistics_name:a.data.settlement_customer_name,logistics_id:a.data.settlement_customer_id}],e.$axMethod.getCustomerInfoNEWqx(i).then((function(t){var a=t.data;e.$set(e.params,"deposits",a.data.deposits),e.$set(e.params,"credit_balance",a.data.credit_balance),e.$set(e.params,"balance",a.data.balance),e.$set(e.params,"rebate_balance",a.data.rebate_balance)})),e.tableData=a.data.goods_info}}))}},m=c,d=(a("2e4b"),a("2877")),u=Object(d["a"])(m,i,s,!1,null,"1278ba9c",null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-73c3bb9a.aba3d732.js.map