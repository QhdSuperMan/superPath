(window["webpackJsonp_erpcode"]=window["webpackJsonp_erpcode"]||[]).push([["chunk-0ebd1a08"],{"814a":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"returnRequest"},[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",[e._v("采购管理")]),a("el-breadcrumb-item",{staticClass:"attrbute"},[a("span",{on:{click:e.goBack}},[e._v("采购退款申请")])]),a("el-breadcrumb-item",[e._v("采购退款详情")])],1),a("div",{staticClass:"returnRequestBox"},[a("el-row",[a("el-col",{attrs:{span:16}},[a("div",{staticClass:"returnRequest_left"},[a("h3",{staticClass:"rtitle"},[e._v(" 服务类型： 退款 ")]),a("div",{staticClass:"instructions"},[a("p",[e._v("操作提示")]),a("p",[e._v("1.若提出申请后，商家拒绝退款或退货，可再次提交申请或者选择“商品投诉”，请求商城客服人员介入")])]),a("div",{staticClass:"stepBar"},[a("el-steps",{attrs:{active:e.params.admin_time>0?3:e.params.seller_time>0?2:1,"align-center":"","finish-status":"success"}},[a("el-step",{attrs:{title:"买家申请退款",description:""}}),a("el-step",{attrs:{title:"商家处理退款申请",description:""}}),a("el-step",{attrs:{title:"平台审核，退款完成",description:""}})],1)],1),a("el-form",{ref:"params",staticClass:"orderForm",attrs:{model:e.params,"label-width":"120px"}},[a("h3",{staticClass:"rtitle"},[e._v(" 我的退款申请 ")]),a("el-form-item",{attrs:{label:"退款编号：",size:"mini",prop:"name"}},[e._v(" "+e._s(e.params.refund_sn)+" ")]),a("el-form-item",{attrs:{label:"退款原因：",size:"mini",prop:"name"}},[e._v(" "+e._s(e.params.reason_info)+" ")]),a("el-form-item",{attrs:{label:"退款说明：",size:"mini",prop:"name"}},[e._v(" "+e._s(e.params.buyer_message)+" ")]),a("el-form-item",{attrs:{label:"退款金额：",size:"mini",prop:"name"}},[e._v(" "+e._s(e.params.refund_amount)+" ")]),a("el-form-item",{attrs:{label:"凭证上传：",size:"mini",prop:"name"}},[a("cupload",{ref:"cupload",attrs:{beforeRemove:function(){return!1},url:"service_station/open/Upload/uploadImage"},model:{value:e.params.upload_pic,callback:function(t){e.$set(e.params,"upload_pic",t)},expression:"params.upload_pic"}})],1),a("h3",{staticClass:"rtitle"},[e._v(" 商家退款处理 ")]),a("el-form-item",{attrs:{label:"审核状态：",size:"mini",prop:"name"}},[e._v(" "+e._s(3==e.params.seller_state?"不同意":2==e.params.seller_state?"同意":"审核中")+" ")]),a("el-form-item",{attrs:{label:"商家备注：",size:"mini",prop:"name"}},[e._v(" "+e._s(e.params.seller_message)+" ")]),a("h3",{staticClass:"rtitle"},[e._v(" 商城退款审核 ")]),a("el-form-item",{attrs:{label:"平台确认：",size:"mini",prop:"name"}},[e._v(" "+e._s(e.params.admin_message)+" ")]),a("el-form-item",{attrs:{label:"平台备注：",size:"mini",prop:"name"}},[e._v(" "+e._s(e.params.admin_message)+" ")]),a("h3",{staticClass:"rtitle"},[e._v(" 退款详情 ")]),a("el-form-item",{attrs:{label:"支付方式：",size:"mini",prop:"name"}},[e._v(" "+e._s(e.params.extend_order.payment_name)+" ")]),a("el-form-item",{attrs:{label:"在线退款金额：",size:"mini",prop:"name"}},[e._v(" "+e._s(e.params.refund_amount)+" ")])],1)],1)]),a("el-col",{attrs:{span:8}},[a("div",{staticClass:"returnRequest_right"},[a("h3",{staticClass:"rtitle"},[e._v(" 相关商品交易信息 ")]),e._l(e.params.extend_order.goods_list,(function(t,s){return a("el-row",{key:s},[a("el-col",{staticClass:"imgBox",attrs:{span:6}},[a("img",{attrs:{src:t.goods_image,alt:""}})]),a("el-col",{staticStyle:{"line-height":"50px"},attrs:{span:18}},[a("p",[e._v(e._s(t.goods_name)+" ")]),a("p",[e._v("￥"+e._s(t.goods_price)+"元 * "+e._s(t.goods_num)+" (数量)")])])],1)})),a("el-form",{ref:"params",staticClass:"orderForm",attrs:{model:e.params,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"运费：",size:"mini",prop:"name"}},[e._v(" "+e._s(e.params.extend_order.shipping_fee)+" ")]),a("el-form-item",{attrs:{label:"订单总额：",size:"mini",prop:"name"}},[a("span",{staticClass:"mainGreen"},[e._v(" "+e._s(e.params.extend_order.order_amount)+" ")]),e._v("元 ")]),a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:"订单编号：",size:"mini",prop:"name"}},[e._v(" "+e._s(e.params.order_sn)+" "),a("el-popover",{staticStyle:{float:"right"},attrs:{placement:"left",width:"400",trigger:"hover"}},[a("el-form",{attrs:{"label-width":"150px"}},[a("el-form-item",{attrs:{label:"付款单号："}},[e._v(" "+e._s(e.params.extend_order.pay_sn))]),a("el-form-item",{attrs:{label:"支付方式："}},[e._v(e._s(e.$publicFution.getAllTime(e.params.extend_order.payment_name)))]),a("el-form-item",{attrs:{label:"下单时间："}},[e._v(e._s(e.$publicFution.getAllTime(1e3*e.params.extend_order.add_time)))]),a("el-form-item",{attrs:{label:"付款时间："}},[e._v(e._s(e.$publicFution.getAllTime(1e3*e.params.extend_order.payment_time)))])],1),a("el-button",{attrs:{slot:"reference"},slot:"reference"},[e._v("更多")])],1)],1),a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:"订单商家：",size:"mini",prop:"name"}},[e._v(" "+e._s(e.params.store_name)+" "),a("el-popover",{staticStyle:{float:"right"},attrs:{placement:"left",width:"400",trigger:"hover"}},[e.params.extend_order.extend_store?a("el-form",{attrs:{"label-width":"150px"}},[a("el-form-item",{attrs:{label:"所在地区："}},[e._v(e._s(e.params.extend_order.extend_store.store_address))]),a("el-form-item",{attrs:{label:"联系电话："}},[e._v(e._s(e.params.extend_order.extend_store.contact_phone))])],1):e._e(),a("el-button",{attrs:{slot:"reference"},slot:"reference"},[e._v("更多")])],1)],1)],1)],2)])],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.goBack}},[e._v("返回列表")])],1)],1)},r=[],i={name:"purchasePurchaserefundRefundRequestSee",data:function(){return{params:{extend_order:{}}}},methods:{goBack:function(){this.$router.push({path:"/purchase/refundRequest"})},success:function(){console.log(this.params)}},created:function(){var e=this;this.$route.query.id&&this.$axMethod.serviceGetRefundInfo({refund_id:this.$route.query.id}).then((function(t){var a=t.data;200==a.code&&(e.params=a.data,e.params.pic_info&&e.params.pic_info.buyer&&e.$refs.cupload._initList(e.params.pic_info.buyer))}))}},l=i,o=(a("db53"),a("2877")),m=Object(o["a"])(l,s,r,!1,null,"07262872",null);t["default"]=m.exports},d8e2:function(e,t,a){},db53:function(e,t,a){"use strict";a("d8e2")}}]);
//# sourceMappingURL=chunk-0ebd1a08.1a32cc09.js.map