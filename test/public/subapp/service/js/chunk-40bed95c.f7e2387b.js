(window["webpackJsonp_service"]=window["webpackJsonp_service"]||[]).push([["chunk-40bed95c"],{"4bd4":function(e,t,a){},"831d":function(e,t,a){"use strict";a("4bd4")},a35c:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"params"},[a("vxe-modal",{attrs:{title:"适配车型",id:"inReceiptSelectOrder",width:"1200","esc-closable":!0,"destroy-on-close":"",height:"500","min-width":"600","min-height":"100",resize:"",remember:"",storage:"",transfer:""},on:{hide:function(t){return e.$emit("input",!1)}},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[e.tableData.length?a("div",[a("div",{staticClass:"el_tree_box"},[a("xTable",{ref:"xTable",attrs:{tableColumn:e.tableColumn,maxHeight:"380",xData:e.tableData}}),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[10,20,30,50],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)]):e.loading?e._e():a("div",{staticClass:"dialog-footer"},[e._v(" 适配车型无数据 ")])])])],1)},r=[],o=a("b85c"),n=(a("e3df"),a("3db6"),a("74af"),a("fde8"),a("c9ce"),a("b1f0"),a("3c64"),a("f043")),s={data:function(){var e=this;return{loading:!1,tableColumn:[{title:"车款",field:"sales_name",formatter:function(e){var t=e.row;return t.sales_name?t.sales_name:t.attr_value_name},width:250},{title:"品牌",field:"brand_name",width:70},{title:"厂家",field:"show_name",width:100},{title:"车系",field:"car_series",width:120},{title:"排放标准",field:"emission_standard",width:70},{title:"年款",field:"years",width:100},{title:"上市年份",field:"c_variant_sop",width:120},{title:"生产年份",field:"c_variant_sop",width:120},{title:"停产年份",field:"c_variant_eop",width:100},{title:"排量",field:"displacement",width:100},{title:"发动机",field:"engine_type",width:100},{title:"适配来源",field:"unit_name",width:100,formatter:function(t){var a=t.row;return 1==e.idsObj[a.car_lib_id]?"OE码匹配":"自主选择"}}],idsObj:{},tableData:[],currentPage:1,pageSize:10,total:0}},watch:{value:function(e){!0===e&&2===this.type&&this.getLibraryId()},library_id:function(){1===this.type&&this.getLibraryId()},ids:function(){this.getData()}},props:{value:null,type:{type:Number,default:1},library_id:{type:Number|String,default:""},shop_goods_id:{type:Number|String,default:""},ids:{type:Array,default:function(){return[]}}},created:function(){var e=this;this.alltableData=[],this.allData=[],Object(n["a"])((function(t){var a=[];for(var i in t.data){var r,n=Object(o["a"])(t.data[i]);try{for(n.s();!(r=n.n()).done;){var s=r.value;a.push(s)}}catch(l){n.e(l)}finally{n.f()}}e.allData=a,e.$emit("loaded"),1==e.type&&e.getData()}))},methods:{getLibraryId:function(){var e=this;this.init(),this.library_id?(this.loading=!0,this.$api.serviceStationGetOeCodeOrCarLibraryList({library_id:this.library_id}).then((function(t){var a=t.data;if(200==a.code){var i=[],r=[];for(var o in a.data.car_library)i=i.concat(a.data.car_library[o]);for(var n in a.data.oe_code)r.push(a.data.oe_code[n]);e.ids=i,e.$emit("getOeCode",r.join(","))}e.loading=!1,e.getAttributeCarLibraryList()})).catch((function(){e.loading=!1}))):this.getAttributeCarLibraryList()},submit:function(){this.$emit("sumbitData",{params:this.currentRow,selectBox:this.selectBox})},GetValue:function(e){if(e)return this.$api.serviceStationGetOeCodeOrCarLibraryList({library_id:e})},getAttributeCarLibraryList:function(){var e=this;this.shop_goods_id&&0===this.ids.length&&this.$api.getAttributeCarLibraryList({shop_goods_id:this.shop_goods_id}).then((function(t){var a=t.data;if(200==a.code){var i=[];for(var r in a.data)i=i.concat(a.data[r]);e.alltableData=i,e.handleCurrentChange(1)}}))},getFairModelData:function(e){for(var t="",a=0;a<e.length;a++){if(t.length>100)break;t=t+e[a].sales_name+","}this.$emit("renderModel",t.slice(0,-1)),this.$parent.showModelsName=t.slice(0,-1)},handleCurrentChange:function(e){var t=this.alltableData.concat([]);this.tableData=t.splice((e-1)*this.pageSize,this.pageSize)},handleSizeChange:function(e){this.pageSize=e},init:function(){this.currentPage=1,this.total=0,this.alltableData=[],this.tableData=[]},getData:function(){var e=this;if(this.init(),this.allData.length&&this.ids.length){this.idsObj={};for(var t=0;t<this.ids.length;t++){if(-1==this.ids[t].car_lib_id)return this.total=this.allData.length,this.alltableData=this.allData,this.handleCurrentChange(1),this.$emit("getData",[{sales_name:"通用车型"}]),void this.getFairModelData([{sales_name:"通用车型"}]);this.idsObj[this.ids[t].car_lib_id]=this.ids[t].match_type}var a=[],i=[];this.allData.forEach((function(t){1==e.idsObj[t.car_lib_id]&&i.push(t),0==e.idsObj[t.car_lib_id]&&a.push(t)})),this.total=i.length+a.length,this.alltableData=a.concat(i),this.handleCurrentChange(1),this.$emit("getData",this.alltableData),this.getFairModelData(this.alltableData)}}}},l=s,d=a("2877"),c=Object(d["a"])(l,i,r,!1,null,"5577fe30",null);t["a"]=c.exports},eea1:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",[e._v("库存管理")]),a("el-breadcrumb-item",{staticClass:"attrbute"},[a("span",{on:{click:e.goBack}},[e._v("公司商品信息")])]),a("el-breadcrumb-item",[e._v("查看公司商品信息")])],1),a("div",{staticClass:"companyGoodsInfoSee"},[a("el-form",{staticClass:"demo-form-inline",attrs:{model:e.params,"label-width":"150px"}},[a("el-form-item",{attrs:{label:"商品名称",size:"mini"}},[a("el-input",{attrs:{readonly:""},model:{value:e.params.goods_name,callback:function(t){e.$set(e.params,"goods_name",t)},expression:"params.goods_name"}})],1),a("el-form-item",{attrs:{label:"商品分类",size:"mini"}},[a("el-input",{attrs:{readonly:""},model:{value:e.params.goods_type_name,callback:function(t){e.$set(e.params,"goods_type_name",t)},expression:"params.goods_type_name"}})],1),a("el-form-item",{attrs:{label:"商品品牌",size:"mini"}},[a("el-input",{attrs:{readonly:""},model:{value:e.params.brand_name,callback:function(t){e.$set(e.params,"brand_name",t)},expression:"params.brand_name"}})],1),a("el-form-item",{attrs:{label:"商品名称",size:"mini"}},[a("el-input",{attrs:{readonly:""},model:{value:e.params.goods_name,callback:function(t){e.$set(e.params,"goods_name",t)},expression:"params.goods_name"}})],1),a("el-form-item",{attrs:{label:"商品单位",size:"mini"}},[a("el-input",{attrs:{readonly:""},model:{value:e.params.unit_name,callback:function(t){e.$set(e.params,"unit_name",t)},expression:"params.unit_name"}})],1),a("el-form-item",{attrs:{label:e.modelLabel,size:"mini"}},[a("el-input",{attrs:{readonly:""},model:{value:e.params.goods_model,callback:function(t){e.$set(e.params,"goods_model",t)},expression:"params.goods_model"}})],1),e.params.goods_texture?a("el-form-item",{attrs:{label:"材质",size:"mini"}},[a("el-input",{attrs:{readonly:""},model:{value:e.params.goods_texture,callback:function(t){e.$set(e.params,"goods_texture",t)},expression:"params.goods_texture"}})],1):e._e(),a("el-form-item",{attrs:{label:"商品编码",size:"mini"}},[a("el-input",{attrs:{readonly:""},model:{value:e.params.goods_id,callback:function(t){e.$set(e.params,"goods_id",t)},expression:"params.goods_id"}})],1),a("el-form-item",{attrs:{label:"销售价",size:"mini"}},[a("el-input",{attrs:{readonly:""},model:{value:e.params.guide_price,callback:function(t){e.$set(e.params,"guide_price",t)},expression:"params.guide_price"}},[a("template",{slot:"append"},[e._v("元")])],2)],1),a("el-form-item",{attrs:{label:"自定义编码",size:"mini"}},[a("el-input",{attrs:{readonly:""},model:{value:e.params.goods_sn,callback:function(t){e.$set(e.params,"goods_sn",t)},expression:"params.goods_sn"}})],1),a("el-form-item",{attrs:{label:"工厂编码",size:"mini"}},[a("el-input",{attrs:{readonly:""},model:{value:e.params.factory_code,callback:function(t){e.$set(e.params,"factory_code",t)},expression:"params.factory_code"}})],1),a("el-form-item",{attrs:{label:"销售税率",size:"mini"}},[a("el-input",{attrs:{readonly:""},model:{value:e.params.taxrate,callback:function(t){e.$set(e.params,"taxrate",t)},expression:"params.taxrate"}},[a("template",{slot:"append"},[e._v("%")])],2)],1),a("div",[a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:"适配车型",size:"mini"}},[a("span",[e._v(e._s(e.showModelsName))]),a("el-button",{staticStyle:{width:"auto"},attrs:{type:"primary"},on:{click:function(t){e.isShowFairModel=!0}}},[e._v("查看全部")])],1)],1),a("div",[a("el-form-item",{attrs:{label:"车型匹配码",size:"mini"}},[a("el-input",{attrs:{readonly:"",type:"textarea",rows:5,cols:20},model:{value:e.params.oe_code,callback:function(t){e.$set(e.params,"oe_code",t)},expression:"params.oe_code"}})],1)],1),a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:"商品图片",size:"mini"}},[e.params.image?a("cupload",{attrs:{beforeRemove:function(){return!1}},model:{value:e.params.image,callback:function(t){e.$set(e.params,"image",t)},expression:"params.image"}}):e._e()],1),a("div",[a("el-form-item",{attrs:{label:"备注",size:"mini"}},[a("el-input",{attrs:{readonly:"",type:"textarea",rows:5,cols:20},model:{value:e.params.remark,callback:function(t){e.$set(e.params,"remark",t)},expression:"params.remark"}})],1)],1)],1)],1),a("div",{staticClass:"dialog-footer"},[a("el-button",{on:{click:e.goBack}},[e._v("返 回")])],1),a("modelDetail",{ref:"modelDetail",attrs:{library_id:e.params.library_id},on:{getOeCode:function(t){e.params.oe_code=t},renderModel:function(t){return e.showModelsName=t}},model:{value:e.isShowFairModel,callback:function(t){e.isShowFairModel=t},expression:"isShowFairModel"}})],1)},r=[],o=(a("4de4"),a("d3b7"),a("b64b"),a("a35c")),n={name:"service_station_inventory_goods_see",data:function(){return{params:{},showModelsName:"",modelLabel:"",isShowFairModel:!1}},methods:{goBack:function(){this.$router.push({path:"/service_station_goods/service_station_inventory_goods"})}},components:{modelDetail:o["a"]},created:function(){var e=this;this.$api.serviceStationgetGoodsInfo({inventory_goods_id:this.$route.query.id}).then((function(t){var a=t.data;200==a.code&&(e.params=a.data,e.$api.serviceStationGetTypeParameterList({goods_type_id:a.data.goods_type_id}).then((function(t){var a=t.data;200==a.code&&(e.modelLabel=Object.keys(a.data).filter((function(e){return"材质"!=e}))[0])})))}))}},s=n,l=(a("831d"),a("2877")),d=Object(l["a"])(s,i,r,!1,null,"43785682",null);t["default"]=d.exports},f043:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));a("410a"),a("6f78"),a("b1f0"),a("3c64");var i=a("fc5a"),r=a("9887"),o=a.n(r);function n(e){var t="car_librarys_csv_874654166";if(window[t])return e({code:200,data:window[t]});function a(e){if(!(window.localStorage&&window.indexedDB&&window.indexedDB.open))return e(!1);var t=indexedDB.open("jybd-car",1);t.onerror=function(t){console.log("数据库打开报错"),e(!1)},t.onsuccess=function(a){console.log("数据库打开成功"),e(t.result)},t.onupgradeneeded=function(e){e.target.result.objectStoreNames.contains("car_choice")||e.target.result.createObjectStore("car_choice",{keyPath:"id"})}}function r(e,t){o.a.get(e).then((function(e){for(var a=e.data.split("\n"),i=[],r=a[1].split(","),o=2;o<a.length;o++){for(var n={},s=a[o].split(","),l=0;l<s.length;l++)r[l]&&(n[r[l]]=s[l]);n.car_lib_id&&i.push(n)}t({code:200,data:i})}))}function n(e,i){window[t]=e,a((function(a){if(!1!==a){var r=a.transaction(["car_choice"],"readwrite").objectStore("car_choice").put({id:0,data:e});r.onsuccess=function(e){window.localStorage.setItem(t,i.data.update_time),console.log("数据库存储成功")},r.onerror=function(e){console.log("Database error: ",e.target.error)}}}))}function s(e,i){if(200==e.code&&window.localStorage&&window.localStorage.getItem&&window.localStorage.getItem(t)!=e.data.update_time)return i();a((function(e){if(!1===e)return i();var a=e.transaction(["car_choice"]).objectStore("car_choice").get(0);a.onsuccess=function(e){console.log("数据库读取成功");var r=a.result&&a.result.data;i(r),r&&(window[t]=r)},a.onerror=function(e){console.log("Database error: ",e.target.error),i()}}))}function l(e){Object(i["a"])({type:"get",url:"v2/open/Excel/getCarLibraryExcel"}).then((function(t){try{t=JSON.parse(t.data.data)}catch(a){}e({code:t.code,data:t.result})})).catch((function(){e({code:400,message:"服务器错误，请联系管理员"})}))}function d(e){var t={};return e.forEach((function(e){t[e.brand_letter]||(t[e.brand_letter]=[]),t[e.brand_letter].push(e)})),t}l((function(t){s(t,(function(a){return a?e({code:200,data:a}):200!=t.code?e(t):void r(t.data.url,(function(a){a.data=d(a.data),e(a),200==a.code&&setTimeout((function(){n(a.data,t)}),100)}))}))}))}}}]);
//# sourceMappingURL=chunk-40bed95c.f7e2387b.js.map