(window["webpackJsonp_erpcode"]=window["webpackJsonp_erpcode"]||[]).push([["chunk-14fa0e6f"],{"0192":function(e,a,t){},"069e0":function(e,a,t){"use strict";var i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"confirmOrder"},[t("el-card",{staticClass:"box-card"},[t("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t("h3",[e._v("确认订单")])]),t("div",{staticClass:"instructions"},[t("p",[e._v("操作提示:")]),t("p",[e._v("请仔细核对填写收货、发票等信息，以确保物流快递及时准确投递")])]),t("div",{staticClass:"shopItem"},[t("h3",[e._v("收货人信息")]),t("div",{staticClass:"receiver"},[e._l(e.receiverBox,(function(a,i){return t("div",{key:i,class:e.activeREeceiver==i?"active":"",on:{click:function(t){return e.receiverChange(a,i)}}},[t("p",[e._v(e._s(a.area_info)+"("+e._s(a.consignee_name)+")")]),t("p",[e._v(e._s(a.address))]),t("p",[e._v(e._s(a.phone))]),e.activeREeceiver==i?t("p",[t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.editReceiver(a)}}},[e._v("修改")]),t("el-button",{attrs:{size:"mini"},on:{click:function(t){return e.deleteReceiver(a)}}},[e._v("删除")])],1):e._e(),e.activeREeceiver==i?t("p",[1!=a.is_default?t("el-button",{staticClass:"default",attrs:{size:"mini"},on:{click:function(t){return e.setDefault(a)}}},[e._v("设为默认")]):t("span",{staticClass:"default"},[e._v("默认地址")])],1):e._e()])})),e.receiverBox.length<4?t("div",{staticClass:"addReceiver",on:{click:function(a){return e.addRecevier(!0)}}},[t("span",[t("i",{staticClass:"el-icon-plus"}),e._v(" 添加收货人信息 ")])]):e._e()],2)]),t("div",{staticClass:"shopItem"},[t("h3",[e._v("支付方式")]),e.params.amountsPayable<=5e4?t("el-radio",{attrs:{label:1},model:{value:e.params.pay_way,callback:function(a){e.$set(e.params,"pay_way",a)},expression:"params.pay_way"}},[e._v("在线支付")]):e._e(),t("el-radio",{attrs:{label:0},model:{value:e.params.pay_way,callback:function(a){e.$set(e.params,"pay_way",a)},expression:"params.pay_way"}},[e._v("线下付款")]),e.params.pay_way?e._e():t("el-form",{ref:"params",staticClass:"orderForm",attrs:{model:e.params,"label-width":"200px"}},[t("el-form-item",{attrs:{label:"汇款手机号:"}},[t("el-input",{attrs:{maxlength:"11","show-word-limit":""},model:{value:e.params.pay_phone,callback:function(a){e.$set(e.params,"pay_phone",a)},expression:"params.pay_phone"}}),t("span",[e._v("收款账户信息将通过短信方式发送至该手机")])],1)],1)],1),t("div",{staticClass:"shopItem"},[t("h3",{staticStyle:{"margin-bottom":"-15px"}},[e._v("商品清单")]),t("el-form",{ref:"params",staticClass:"orderForm",attrs:{model:e.params,"label-width":"200px"}},[e._l(e.params.buy_goods_list,(function(a,i){return t("div",{key:i,staticClass:"shopFormItem"},[t("xTable",{key:i,ref:"xTable",refInFor:!0,attrs:{tableColumn:e.tableColumn,maxHeight:"200",params:{key:i},xData:a.goods_list}}),t("div"),t("el-row",[t("el-col",{attrs:{span:13}},[t("el-form-item",{attrs:{label:"买家留言：",size:"mini",prop:"name"}},[t("el-input",{staticStyle:{width:"100%"},attrs:{type:"textarea",maxlength:"100",placeholder:"选填：对本次交易的说明（建议填写已经和商家达成一致的说明）",clearable:""},model:{value:a.order_message,callback:function(t){e.$set(a,"order_message",t)},expression:"val.order_message"}})],1)],1)],1)],1)})),t("div",{staticClass:"orderTotalPrice"},[t("el-row",[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"订单总金额：",size:"mini",prop:"name"}},[t("span",{staticClass:"mainRed"},[e._v(e._s(this.params.order_total_amount))]),e._v("元 ")])],1)],1),t("el-row",[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"运费：",size:"mini",prop:"name"}},[t("span",{staticClass:"mainRed"},[e._v(e._s(this.params.freight_total_total))]),e._v("元 ")])],1)],1),t("el-row",[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"使用返利：",size:"mini"}},[t("span",{staticClass:"mainRed"},[t("el-input",{on:{blur:e.rebateChange},model:{value:e.params.rebate_price,callback:function(a){e.$set(e.params,"rebate_price",a)},expression:"params.rebate_price"}})],1),e._v("元 余额： "+e._s(e.account_rebate_balance)+" ")])],1)],1),t("el-row",{staticClass:"shouldPay"},[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"应付总金额： ",size:"mini"}},[t("span",{staticClass:"mainRed",staticStyle:{"font-size":"20px"}},[e._v(e._s(e.params.amountsPayable))]),e._v("元 ")])],1)],1)],1)],2)],1),t("editReceiverVue",{attrs:{data:e.currentRow},on:{success:e.getReceiverList},model:{value:e.isShowEditReceiverVue,callback:function(a){e.isShowEditReceiverVue=a},expression:"isShowEditReceiverVue"}})],1),t("div",{staticClass:"footerconfig",staticStyle:{"text-align":"center","margin-top":"20px"}},[t("el-button",{on:{click:e.goBack}},[e._v("取 消")]),1==e.authority.b_confirm_order?t("el-button",{attrs:{type:"primary"},on:{click:e.sumbit}},[e._v("提交订单")]):e._e()],1)],1)},s=[],r=(t("1e09"),t("74af"),t("fd3a"),t("e3df"),t("b1f0"),t("3c64"),t("42aa"),t("3db6"),function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"editReceiverVue"},[t("vxe-modal",{staticClass:"editReceiverVue",attrs:{title:"添加联系人信息",id:"inReceiptSelectOrder",width:"600","esc-closable":!0,"destroy-on-close":"",height:"550",resize:"",remember:"",storage:"",transfer:""},on:{hide:function(a){return e.$emit("input",!1)}},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}},[t("div",{staticClass:"el_tree_box"},[t("el-form",{ref:"params",staticClass:"demo-form-inline",attrs:{model:e.params,"label-width":"106px"}},[t("el-form-item",{attrs:{label:"智能地址识别：",size:"mini"}},[t("el-input",{staticStyle:{width:"310px"},attrs:{type:"textarea",size:"medium",rows:5,placeholder:"粘贴整段地址，自动识别姓名、电话和地址。例如：王西西  13200000000 北京市海淀区东升科技园\n"},model:{value:e.textarea,callback:function(a){e.textarea=a},expression:"textarea"}})],1),t("el-form-item",{attrs:{label:"",size:"mini"}},[t("el-button",{attrs:{type:"primary"},on:{click:e.Identify}},[e._v("识别")])],1),t("el-form-item",{attrs:{label:"收货人姓名：",size:"mini",prop:"consignee_name",rules:{required:!0,message:"请输入联系人姓名",tiggle:"blur"}}},[t("el-input",{attrs:{placeholder:"请输入联系人姓名",clearable:""},model:{value:e.params.consignee_name,callback:function(a){e.$set(e.params,"consignee_name",a)},expression:"params.consignee_name"}})],1),t("el-form-item",{attrs:{label:"手机号码：",size:"mini",prop:"phone",rules:e.rules.phone}},[t("el-input",{attrs:{maxlength:"11","show-word-limit":"",placeholder:"请输入联系人手机号",clearable:""},model:{value:e.params.phone,callback:function(a){e.$set(e.params,"phone",a)},expression:"params.phone"}})],1),t("el-form-item",{attrs:{label:"所属区域：",size:"mini",prop:"area_id",rules:{required:!0,message:"请选择所属区域",tiggle:"blur"}}},[t("getAreaList",{ref:"area",attrs:{data:{province:e.params.province_id,city:e.params.city_id,area:e.params.area_id}},on:{change:e.areaChange}})],1),t("el-form-item",{attrs:{label:"详细地址：",size:"mini",prop:"address",rules:{required:!0,message:"请输入详细地址",tiggle:"blur"}}},[t("el-input",{staticStyle:{width:"310px"},attrs:{type:"textarea",rows:5,maxlength:"100",placeholder:"请输入详细地址",clearable:""},model:{value:e.params.address,callback:function(a){e.$set(e.params,"address",a)},expression:"params.address"}})],1),t("el-form-item",{attrs:{label:"设为默认地址：",size:"mini"}},[t("el-radio-group",{model:{value:e.params.is_default,callback:function(a){e.$set(e.params,"is_default",a)},expression:"params.is_default"}},[t("el-radio",{attrs:{label:"1"}},[e._v("是")]),t("el-radio",{attrs:{label:"0"}},[e._v("否")])],1)],1)],1)],1),t("div",{staticClass:"dialog-footer"},[t("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("确定")]),t("el-button",{on:{click:function(a){return e.$emit("input",!1)}}},[e._v("取 消")])],1)])],1)}),n=[],o=(t("7801"),t("fb24"),function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"serviceBox"},[t("el-select",{attrs:{clearable:""},on:{change:e.provinceChange},model:{value:e.province.id,callback:function(a){e.$set(e.province,"id",a)},expression:"province.id"}},e._l(e.province.box,(function(e,a){return t("el-option",{key:a,attrs:{value:a,label:e}})})),1),t("el-select",{attrs:{clearable:""},on:{change:e.cityChange},model:{value:e.city.id,callback:function(a){e.$set(e.city,"id",a)},expression:"city.id"}},e._l(e.city.box,(function(e,a){return t("el-option",{key:a,attrs:{value:a,label:e}})})),1),t("el-select",{attrs:{clearable:""},on:{change:e.areaChange},model:{value:e.area.id,callback:function(a){e.$set(e.area,"id",a)},expression:"area.id"}},e._l(e.area.box,(function(e,a){return t("el-option",{key:a,attrs:{value:a,label:e}})})),1)],1)}),c=[],l={data:function(){return{areaObj:{},province:{id:"",name:"",box:{}},city:{id:"",name:"",box:{}},area:{id:"",name:"",box:{}}}},props:{data:{type:Object,default:function(){return{province:"",city:"",area:""}}}},methods:{initArea:function(){this.data.province?(this.province.id=this.data.province,this.provinceChange()):this.province.id="",this.data.city?(this.city.id=this.data.city,this.cityChange()):this.city.id="",this.data.area?(this.area.id=this.data.area,this.areaChange()):(this.area.id="",this.areaChange())},provinceChange:function(){this.province.name=this.province.box[this.province.id],this.city.box=this.areaObj[this.province.id],this.city.id="",this.area.id="",this.change()},cityChange:function(){this.city.name=this.city.box[this.city.id],this.area.box=this.areaObj[this.city.id],this.area.id="",this.change()},areaChange:function(){this.area.name=this.area.box[this.area.id],this.change()},change:function(){this.$emit("change",{province:this.province,city:this.city,area:this.area})},dealArea:function(e){var a={};for(var t in e){var i={};e[t].forEach((function(e){i[e[0]]=e[1]})),a[t]=i}this.areaObj=a,this.province.box=this.areaObj[0]}},mounted:function(){var e=this;this.$axMethod.serviceGetAreaList().then((function(a){var t=a.data;e.dealArea(t.data),e.initArea()}))},watch:{}},d=l,p=(t("0df1"),t("2877")),m=Object(p["a"])(d,o,c,!1,null,"1eff118c",null),u=m.exports,h={data:function(){return{params:{is_default:"0"},textarea:""}},watch:{value:function(e){!0===e&&this.initData()}},props:{value:null,data:{type:Object,default:function(){}}},created:function(){this.paramsModule={consignee_name:"",phone:"",province_id:"",city_id:"",area_id:"",is_default:"0",region:"",address:""},this.params=this.$publicFution.deepCopy(this.paramsModule)},methods:{areaChange:function(e){var a=e.province,t=e.city,i=e.area;this.params.province_id=a.id,this.params.city_id=t.id,this.params.area_id=i.id,this.params.region=a.name+" "+t.name+" "+i.name},Identify:function(){var e=this;this.textarea||this.$message.error("智能地址识别为空"),this.$axMethod.getAddressInfo({address:this.textarea}).then((function(a){var t=a.data,i=t.data,s=i.area_info,r=i.name,n=i.mobile,o=i.detail,c=["province_id","city_id","area_id"];for(var l in s)e.params[c[l-1]]=s[l].area_id.toString();e.params=Object.assign({},e.params,{consignee_name:r,phone:n,address:o}),e.$nextTick((function(){e.$refs.area.initArea()})),console.log(e.params)}))},submit:function(){var e=this;this.$refs.params.validate((function(a){if(a){var t="serviceAddAddress";e.data.address_id&&(t="serviceEditAddress"),e.$axMethod[t](e.params).then((function(a){var t=a.data;200===t.code&&(e.$message.success(t.msg),e.$emit("success",t))}))}}))},initData:function(){var e=this;this.data&&this.data.address_id?(this.params=Object.assign({},this.params,this.data),this.$nextTick((function(){e.$refs.area.initArea()}))):(this.params=this.$publicFution.deepCopy(this.paramsModule),this.$nextTick((function(){e.$refs.params.clearValidate(),e.$refs.area.initArea()})))}},components:{getAreaList:u}},_=h,f=(t("96a4"),Object(p["a"])(_,r,n,!1,null,"89ed1e82",null)),v=f.exports,b={cart_ids:"",address_id:"",by_cart:"",order_total_amount:0,freight_total_total:0,pay_way:1,pay_phone:"",amountsPayable:0,rebate_price:0,goods_list:"",store_list:"",sendAdress:"",receiverName:"",buy_goods_list:[]},g={data:function(){return{tableColumn:[{type:"seq",width:44,align:"center",title:"序号"},{title:"店铺",field:"store_name",width:150},{title:"商品",field:"goods_name",minWidth:300},{title:"单价",field:"goods_price",headerAlign:"right",align:"right",width:100,formatter:"priceFormat"},{title:"数量",field:"goods_num",headerAlign:"right",align:"right",width:100},{title:"小计",field:"goods_total_price",headerAlign:"right",align:"right",width:100,formatter:"priceFormat"}]}},methods:{receiverChange:function(e,a){this.params.address_id=Number(e.address_id),this.params.receiverName=e.consignee_name,this.params.sendAdress=e.area_info+e.area,this.activeREeceiver=a},setDefault:function(e){var a=this;this.$axMethod.setDefaultAddress({address_id:e.address_id}).then((function(e){var t=e.data;200===t.code&&(a.$message.success(t.msg),a.getReceiverList())}))},deleteReceiver:function(e){var a=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){a.$axMethod.serviceDeleteAddress({address_id:e.address_id}).then((function(e){var t=e.data;200===t.code&&(a.$message.success(t.msg),a.getReceiverList())}))}))},editReceiver:function(e){console.log(e),this.currentRow=e,this.isShowEditReceiverVue=!0},addRecevier:function(e){e&&(this.currentRow={},this.isShowEditReceiverVue=!0)},getReceiverList:function(){var e=this;this.isShowEditReceiverVue=!1,this.$axMethod.serviceGetAddress().then((function(a){var t=a.data;200===t.code&&(e.receiverBox=t.data,e.receiverBox.forEach((function(a,t){1===Number(a.is_default)&&e.receiverChange(a,t)})))}))}}},y={mixins:[g],name:"jybdorderJybdorderAdd",data:function(){return{isShowEditReceiverVue:!1,activeREeceiver:-1,account_rebate_balance:0,tableData:[],params:this.$publicFution.deepCopy(b),receiverBox:[],form:{},currentRow:{}}},props:{data:{type:Object,default:function(){}}},created:function(){this.getReceiverList(),this.initData()},methods:{initData:function(){var e=this;if(this.data&&void 0!==this.data.type){var a;if(this.data.data){var t=[];a={by_cart:this.data.type,data_list:this.data.data.map((function(a){return t.push(1===e.data.type?a.cart_id:a.shop_goods_id),{id:1===e.data.type?a.cart_id:a.shop_goods_id,num:a.goods_num,goods_name:a.goods_name,inventory_goods_id:a.inventory_goods_id}}))},this.params.cart_ids=t.join(","),a.data_list=JSON.stringify(a.data_list)}else a={by_cart:this.data.type,all_receipt:1};this.$axMethod.getConfirmOrder(a).then((function(a){var t=a.data;200==t.code?(e.params.buy_goods_list=t.data.buy_goods_list,e.account_rebate_balance=t.data.account_rebate_balance,e.params.by_cart=e.data.type,e.params.cart_ids=t.data.cart_id,e.params.pay_phone=t.data.member_mobile,e.computeToalPrice()):e.goBack()}))}},getNum:function(e){return isNaN(e)?0:Number(e)},computeToalPrice:function(){var e=this,a=0,t=0;this.params.buy_goods_list.forEach((function(i){t+=e.getNum(i.freight_store_total),a+=e.getNum(i.goods_price_total)})),this.params.order_total_amount=a,this.params.freight_total_total=t,this.params.amountsPayable=this.params.order_total_amount-this.getNum(this.params.rebate_price)+this.getNum(this.params.freight_total_total)},rebateChange:function(){this.$publicFution.toFixedTwo(this.params,"rebate_price",{min:0,max:this.params.order_total_amount>this.account_rebate_balance?this.account_rebate_balance:this.params.order_total_amount,message:"返利不能大于订单总金额和余额"}),this.params.amountsPayable=this.params.order_total_amount-this.getNum(this.params.rebate_price)+this.getNum(this.params.freight_total_total)},sumbit:function(){var e=this;if(-1==this.activeREeceiver)return this.$message({message:"请选择收货信息",type:"warning"}),!1;var a=this.$publicFution.filter(b,this.params);a.goods_list=[],a.store_list=[],this.params.buy_goods_list.forEach((function(t){a.goods_list=a.goods_list.concat(t.goods_list),a.order_type=e.data.order_type||1,a.store_list.push({store_id:t.store_id,order_message:t.order_message})})),a.goods_list=JSON.stringify(a.goods_list),a.store_list=JSON.stringify(a.store_list),this.$axMethod.createServiceOrder(a).then((function(a){var t=a.data;if(200==t.code)if(e.params.pay_way){var i={cashier_token:t.data.pay_data.cashier_token,pay_trade_no:t.data.pay_data.pay_trade_no,token:t.data.pay_data.user_pay_token};e.$router.push({name:"PlaceholderPaycenter",params:i})}else e.$router.push({path:"/MoneyManagement/Checkstand",query:{id:t.data.pay_sn.join(","),phone:e.params.pay_phone}})}))},goBack:function(){this.$emit("close")}},components:{editReceiverVue:v}},x=y,w=(t("317a"),Object(p["a"])(x,i,s,!1,null,"0bd43e28",null));a["a"]=w.exports},"0df1":function(e,a,t){"use strict";t("0192")},"317a":function(e,a,t){"use strict";t("e54b")},5734:function(e,a,t){},"96a4":function(e,a,t){"use strict";t("5734")},e54b:function(e,a,t){}}]);
//# sourceMappingURL=chunk-14fa0e6f.c048199d.js.map