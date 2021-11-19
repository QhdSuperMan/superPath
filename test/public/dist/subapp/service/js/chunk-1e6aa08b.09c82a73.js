(window["webpackJsonp_service"]=window["webpackJsonp_service"]||[]).push([["chunk-1e6aa08b"],{1148:function(t,e,i){"use strict";var a=i("da84"),r=i("5926"),s=i("577e"),o=i("1d80"),n=a.RangeError;t.exports=function(t){var e=s(o(this)),i="",a=r(t);if(a<0||a==1/0)throw n("Wrong number of repetitions");for(;a>0;(a>>>=1)&&(e+=e))1&a&&(i+=e);return i}},"1b81":function(t,e,i){"use strict";i("ac8d")},"5ebb":function(t,e,i){"use strict";i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return s}));i("d81d"),i("caad"),i("a434"),i("4de4"),i("d3b7"),i("a9e3"),i("b680");var a={company_id:localStorage.getItem("company_id"),company_name:localStorage.getItem("company_name"),service_charge:"",packing_fee:"",discount_type:0,discount_num:"",discount_total_amount:"",settlement_price:"",pay_price:"",abstract:"",arrears:0,goodsAllprice:0,delivery_demand_id:"",outstock_type_id:10002},r={real_num:"",total_price:"",unit_price:""},s={data:function(){var t=this,e=this.$createElement;return{editRules:{real_num:[{required:!0,message:"数量输入请在0-99999999之间",type:"number",min:1,max:99999999}],unit_price:[{required:!0,message:"请输入价格"}],batch:[{required:!0,message:"批次不能为空"}]},tableColumn:[{title:"商品编号",field:"goods_id",width:80},{title:"库位码",field:"goods_sn",width:90},{field:"name",title:"操作",width:80,align:"center",fixed:"right",slots:{default:function(i){if(1===t.editType)return[e("el-button",{attrs:{size:"small",type:"text",icon:"el-icon-remove-outline"},on:{click:function(){t.deleteGoods(i)}}},[" "])];var a=[e("el-button",{attrs:{size:"small",type:"text",icon:"el-icon-circle-plus-outline"},on:{click:function(){t.copyRow(i.row)}}},[" "])];return t.$refs.xTable._proxy("getTableData").fullData.length>1&&a.push(e("el-button",{attrs:{size:"small",type:"text",icon:"el-icon-remove-outline"},on:{click:function(){t.removeRow(i.row)}}},[" "])),a}}},{title:"商品名称",field:"goods_name"},{title:"品牌",field:"brand_name",width:80},{title:"仓库",field:"warehouse_name",width:80},{title:"货位",field:"allocation_name",width:80},{title:"库存数量",field:"available_stocks",headerAlign:"right",align:"right",width:84,formatter:function(t){var e=t.row;return(e.available_stocks?e.available_stocks:"")+" "+(e.unit_name?e.unit_name:"")}},{title:"销售指导价",field:"guide_price",headerAlign:"right",align:"right",width:84},{title:"售价",field:"unit_price",headerAlign:"right",align:"right",width:120,editRender:{name:"Vinput",formatter:"Positive",autoselect:!0,events:{input:this.computedRowPrice},getSlots:function(i){return e("el-link",{on:{click:function(){t.openHistoryPrice(i)}}},["历史价"])}}},{title:"售卖数量",field:"real_num",headerAlign:"right",align:"right",width:100,formatter:function(t){var e=t.row;return e.real_num+" "+(e.unit_name?e.unit_name:"")},editRender:{name:"Vinput",formatter:"positiveInt",autoselect:!0,events:{input:this.computedRowPrice}}},{title:"总计金额",field:"total_price",headerAlign:"right",align:"right",width:132}]}},methods:{removeRow:function(t){this.$refs.xTable._proxy("getTableData").fullData.length>1&&this.$refs.xTable._proxy("remove",t)},footerMethod:function(t){var e=this,i=t.columns,a=t.data;return[i.map((function(t,i){if(0===i)return"页小计";if(["real_num","total_price"].includes(t.property)){var r=e.$utils.sum(a,t.property);return"real_num"===t.property?e.$publicFution.priceFormatNone(r,0):(e.params.goodsAllprice=r,e.computedTotalPrice(),e.$publicFution.priceFormatNone(r))}return null}))]},deleteGoods:function(t){var e=this,i=(t.row,t.$rowIndex);this.tableData.splice(i,1),this.$nextTick((function(){e.$refs.xTable._updateFooter()}))},copyRow:function(t){this.$refs.xTable._copyRow(t).then((function(t){t.row.real_num="",t.row.total_price=""}))},addGoods:function(t){var e=t.row,i=this.tableData.filter((function(t){return t.batch_id===e.batch_id}));if(i.length)i[0].real_num++,i.unit_price=e.unit_price?e.unit_price:i.unit_price,this.computedRowPrice({row:i[0]});else{var a=this.$publicFution.deepCopy(Object.assign(r,e));delete a.XID,a.real_num=1,a.unit_price=a.guide_price,this.computedRowPrice({row:a}),this.tableData.push(a),this.$refs.xTable._proxy("loadData",this.tableData)}},changeRowPrice:function(t){this.currentScope.row.unit_price=t.unit_price,this.computedRowPrice(this.currentScope)},openHistoryPrice:function(t){this.currentScope=t,this.isShowHistoryPrices=!0},getNumber:function(t,e){return isNaN(t)||""===t?e||0:Number(t)},computedRowPrice:function(t){var e=t.row;e.total_price=this.getNumber(e.unit_price)*this.getNumber(e.real_num),this.$refs.xTable._updateFooter()},computedTotalPrice:function(){var t=this.params.goodsAllprice;1==this.params.discount_type?t=this.getNumber(t)*this.getNumber(this.params.discount_num,10)/10:2==this.params.discount_type&&(t=this.getNumber(t)-this.getNumber(this.params.discount_total_amount)),t+=this.getNumber(this.params.service_charge),t+=this.getNumber(this.params.packing_fee),this.params.settlement_price=t.toFixed(2),this.params.arrears=(t-this.getNumber(this.params.pay_price)).toFixed(2)}}}},"913d":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"params",attrs:{id:"dropImg"}},[i("div",{attrs:{id:"leixin"}},[i("div",{staticClass:"search_container"},[i("el-form",{ref:"ruleForm",staticClass:"demo-form-inline",attrs:{inline:!0,model:t.params,rules:t.rules}},[i("el-form-item",{attrs:{label:"销售组织",size:"mini"}},[t._v(" "+t._s(t.params.company_name)+" ")]),i("el-form-item",{attrs:{label:"客户名称",size:"mini"}},[t._v(" "+t._s(t.params.customer_name)+" ")]),i("el-form-item",{attrs:{label:"单据状态：",size:"mini"}},[t._v(" "+t._s(t.params.auditor_status)+" ")]),i("el-form-item",{attrs:{label:"单据类型：",size:"mini"}},[t._v(" "+t._s(t.params.add_status)+" ")]),i("el-form-item",{attrs:{label:"单据号：",size:"mini"}},[t._v(" "+t._s(t.params.outstock_sn)+" ")]),i("el-form-item",{attrs:{label:"单据时间：",size:"mini"}},[t._v(" "+t._s(t.params.add_time)+" ")])],1)],1),t._m(0),i("div",[i("xTable",{ref:"xTable",attrs:{maxHeight:200,rowId:"goodsLists",tableColumn:t.tableColumn,isEdit:function(){return!1},xData:t.params.goods_list,footerMethod:t.footerMethod}})],1),i("div",{staticClass:"costDetail"},[i("el-row",{attrs:{gutter:5}},[i("el-col",{attrs:{span:2}},[i("span",{staticClass:"costDetailTitle"},[t._v(" 折扣类型： ")])]),i("el-col",{attrs:{span:10}},[i("el-radio",{attrs:{disabled:"",label:0},on:{change:t.computedTotalPrice},model:{value:t.params.discount_type,callback:function(e){t.$set(t.params,"discount_type",e)},expression:"params.discount_type"}},[t._v("无")]),i("el-radio",{attrs:{disabled:"",label:1},on:{change:t.computedTotalPrice},model:{value:t.params.discount_type,callback:function(e){t.$set(t.params,"discount_type",e)},expression:"params.discount_type"}},[t._v("整单打折")]),i("el-input",{staticClass:"discountInput",attrs:{readonly:""},on:{input:t.computedTotalPrice,change:function(e){t.$publicFution.toFixedTwo(t.params,"discount_num",{greater:0,max:10}),t.computedTotalPrice()}},model:{value:t.params.discount_num,callback:function(e){t.$set(t.params,"discount_num",e)},expression:"params.discount_num"}},[i("span",{staticClass:"el-input__icon",attrs:{slot:"suffix"},slot:"suffix"},[t._v("折")])]),i("el-radio",{attrs:{disabled:"",label:2},on:{change:t.computedTotalPrice},model:{value:t.params.discount_type,callback:function(e){t.$set(t.params,"discount_type",e)},expression:"params.discount_type"}},[t._v("整单减")]),i("el-input",{staticClass:"discountInput",attrs:{readonly:""},on:{input:t.computedTotalPrice,change:function(e){t.$publicFution.toFixedTwo(t.params,"discountInput",{min:0}),t.computedTotalPrice()}},model:{value:t.params.discount_total_amount,callback:function(e){t.$set(t.params,"discount_total_amount",e)},expression:"params.discount_total_amount"}},[i("span",{staticClass:"el-input__icon",attrs:{slot:"suffix"},slot:"suffix"},[t._v("元")])])],1),i("el-col",{attrs:{span:2}},[i("span",{staticClass:"costDetailTitle"},[t._v(" 其他费用： ")])]),i("el-col",{attrs:{span:10}},[t._v(" 服务费： "),i("el-input",{staticClass:"discountInput",attrs:{readonly:""},on:{input:t.computedTotalPrice,change:function(e){t.$publicFution.toFixedTwo(t.params,"service_charge",{min:0}),t.computedTotalPrice()}},model:{value:t.params.service_charge,callback:function(e){t.$set(t.params,"service_charge",e)},expression:"params.service_charge"}}),t._v(" 包装费： "),i("el-input",{staticClass:"discountInput",attrs:{readonly:""},on:{input:t.computedTotalPrice,change:function(e){t.$publicFution.toFixedTwo(t.params,"packing_fee",{min:0}),t.computedTotalPrice()}},model:{value:t.params.packing_fee,callback:function(e){t.$set(t.params,"packing_fee",e)},expression:"params.packing_fee"}})],1)],1),i("el-row",[i("el-col",{attrs:{span:12}},[i("span",{staticClass:"costDetailTitle"},[t._v("本次收款：")]),i("el-input",{staticClass:"discountInput",attrs:{readonly:""},on:{input:t.computedTotalPrice},model:{value:t.params.pay_price,callback:function(e){t.$set(t.params,"pay_price",e)},expression:"params.pay_price"}}),i("span",[t._v(" 欠款： "+t._s(t.params.arrears)+"元 ")])],1),i("el-col",{attrs:{span:12}},[t._v(" 备注： "),i("el-input",{staticStyle:{width:"80%"},attrs:{type:"text",readonly:"",maxlength:"200","show-word-limit":""},model:{value:t.params.abstract,callback:function(e){t.$set(t.params,"abstract",e)},expression:"params.abstract"}})],1)],1),i("div",[i("span",{staticClass:"costDetailTitle"},[t._v(" 配送方式：")]),t._v(" "+t._s(t.params.delivery_demand_name)+" ")]),i("div",[i("span",{staticClass:"totalPrice"},[t._v(" 总金额 "),i("span",{staticStyle:{color:"red"}},[t._v(t._s(t.params.settlement_price))])])])],1)]),i("div",{staticClass:"dialog-footer"},[i("el-button",{on:{click:t.goBack}},[t._v("返回")])],1),t.isShowHistoryPrices?i("historyPrices",{attrs:{searchParams:{company_id:t.params.company_id,goods_id:t.currentScope.row&&t.currentScope.row.goods_id},company_id:t.params.company_id},on:{sumbitData:t.changeRowPrice},model:{value:t.isShowHistoryPrices,callback:function(e){t.isShowHistoryPrices=e},expression:"isShowHistoryPrices"}}):t._e()],1)},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"goodsList"},[i("div",{staticClass:"goodsTitle"},[t._v(" 销售清单列表 ")])])}],s=(i("b680"),i("4de4"),i("d3b7"),i("5ebb")),o={name:"service_station_sales_outstock_see",mixins:[s["b"]],data:function(){return{tableData:[],currentScope:{},isShowHistoryPrices:!1,params:this.$publicFution.deepCopy(s["a"])}},methods:{goBack:function(){this.$router.push("/sales/service_station_sales_outstock_list")},onReset:function(){var t=this;this.params=this.$publicFution.deepCopy(s["a"]),this.$refs.Classification.clear(),this.$nextTick((function(){t.onSearch()}))}},created:function(){var t=this;this.$route.query.id&&this.$api.serviceStationGetDeliveryGetSalesOutInfo({outstock_id:this.$route.query.id}).then((function(e){var i=e.data;200==i.code&&(t.params=i.data,t.params.arrears=(t.params.settlement_price-t.getNumber(t.params.pay_price)).toFixed(2))})),this.tableColumn=this.$publicFution.filterTableColumn(this.tableColumn.filter((function(t){return"操作"!==t.title})))}},n=o,c=(i("1b81"),i("2877")),l=Object(c["a"])(n,a,r,!1,null,"7b439bcd",null);e["default"]=l.exports},ac8d:function(t,e,i){},b680:function(t,e,i){"use strict";var a=i("23e7"),r=i("da84"),s=i("e330"),o=i("5926"),n=i("408a"),c=i("1148"),l=i("d039"),u=r.RangeError,p=r.String,d=Math.floor,m=s(c),_=s("".slice),h=s(1..toFixed),f=function(t,e,i){return 0===e?i:e%2===1?f(t,e-1,i*t):f(t*t,e/2,i)},b=function(t){var e=0,i=t;while(i>=4096)e+=12,i/=4096;while(i>=2)e+=1,i/=2;return e},g=function(t,e,i){var a=-1,r=i;while(++a<6)r+=e*t[a],t[a]=r%1e7,r=d(r/1e7)},v=function(t,e){var i=6,a=0;while(--i>=0)a+=t[i],t[i]=d(a/e),a=a%e*1e7},w=function(t){var e=6,i="";while(--e>=0)if(""!==i||0===e||0!==t[e]){var a=p(t[e]);i=""===i?a:i+m("0",7-a.length)+a}return i},y=l((function(){return"0.000"!==h(8e-5,3)||"1"!==h(.9,0)||"1.25"!==h(1.255,2)||"1000000000000000128"!==h(0xde0b6b3a7640080,0)}))||!l((function(){h({})}));a({target:"Number",proto:!0,forced:y},{toFixed:function(t){var e,i,a,r,s=n(this),c=o(t),l=[0,0,0,0,0,0],d="",h="0";if(c<0||c>20)throw u("Incorrect fraction digits");if(s!=s)return"NaN";if(s<=-1e21||s>=1e21)return p(s);if(s<0&&(d="-",s=-s),s>1e-21)if(e=b(s*f(2,69,1))-69,i=e<0?s*f(2,-e,1):s/f(2,e,1),i*=4503599627370496,e=52-e,e>0){g(l,0,i),a=c;while(a>=7)g(l,1e7,0),a-=7;g(l,f(10,a,1),0),a=e-1;while(a>=23)v(l,1<<23),a-=23;v(l,1<<a),g(l,1,1),v(l,2),h=w(l)}else g(l,0,i),g(l,1<<-e,0),h=w(l)+m("0",c);return c>0?(r=h.length,h=d+(r<=c?"0."+m("0",c-r)+h:_(h,0,r-c)+"."+_(h,r-c))):h=d+h,h}})}}]);
//# sourceMappingURL=chunk-1e6aa08b.09c82a73.js.map