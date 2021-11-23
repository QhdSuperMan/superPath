(window["webpackJsonp_service"]=window["webpackJsonp_service"]||[]).push([["chunk-9f983e0c"],{"1fe4":function(e,t,a){"use strict";a("bea3")},"281d":function(e,t,a){"use strict";a("35e2")},"35e2":function(e,t,a){},bea3:function(e,t,a){},d8a4:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",[e._v("库存管理")]),a("el-breadcrumb-item",{staticClass:"attrbute"},[a("span",{on:{click:e.goBack}},[e._v("公司商品信息")])]),a("el-breadcrumb-item",[e._v(" "+e._s(1==e.type?"修改":"新增")+"公司商品信息")])],1),a("div",{staticClass:"companyGoodsInfoAdd"},[a("el-form",{ref:"params",attrs:{inline:"",model:e.params,"label-width":"150px"}},[a("el-row",[a("el-form-item",{attrs:{label:"销售组织",size:"mini",rules:e.rules.company_id,prop:"company_id"}},[a("getServiceCompany",{ref:"erpCompanyList",attrs:{fatherParams:e.params,disabled:2==e.type},model:{value:e.params.company_id,callback:function(t){e.$set(e.params,"company_id",t)},expression:"params.company_id"}})],1)],1),a("el-row",[a("el-form-item",{attrs:{label:"商品分类",size:"mini",prop:"goods_type_id",rules:{required:!0,message:"请输入选择商品类型"}}},[a("jybd-cascader",{ref:"cascader",attrs:{cascaderVue:e.cascaderVue},on:{cascaderChange:e.goodsTypeChange}})],1)],1),a("el-row",[a("el-form-item",{attrs:{label:"商品品牌",rules:e.rules.trademark,prop:"brand_name",size:"mini"}},[a("getServiceBrand",{ref:"getServiceBrand",attrs:{fatherParams:e.params,searchParams:{goods_type_id:e.params.goods_type_id},type:2},on:{focus:e.serviceBrandFocus,change:e.brandChange,nameChange:e.nameChange},model:{value:e.params.brand_id,callback:function(t){e.$set(e.params,"brand_id",t)},expression:"params.brand_id"}}),a("span",{staticClass:"information"},[e._v("如目前搜索结果没有要选择的品牌信息，可在此输入品牌名称，在提交保存时会自动增加对应商品分类的品牌名称")])],1)],1),a("el-row",[a("el-form-item",{attrs:{label:"商品名称",rules:e.rules.goods_name,prop:"goods_name",size:"mini"}},[a("el-input",{attrs:{clearable:""},model:{value:e.params.goods_name,callback:function(t){e.$set(e.params,"goods_name",t)},expression:"params.goods_name"}})],1)],1),e.modelLabel?a("el-row",[a("el-form-item",{attrs:{label:e.modelLabel,rules:{required:!0,message:"请输入"+e.modelLabel},prop:"goods_model",size:"mini"}},[a("el-input",{attrs:{clearable:""},on:{change:e.getCarModels},model:{value:e.params.goods_model,callback:function(t){e.$set(e.params,"goods_model",t)},expression:"params.goods_model"}}),a("span",{staticClass:"information"},[e._v(e._s(e.modelLabel)+"型号编码，如：H2201、WK20331等")])],1)],1):e._e(),e.isHuoHuaSai?a("el-row",[a("el-form-item",{attrs:{label:"材质",size:"mini"}},[a("el-input",{attrs:{clearable:""},on:{change:e.getCarModels},model:{value:e.params.goods_texture,callback:function(t){e.$set(e.params,"goods_texture",t)},expression:"params.goods_texture"}}),a("span",{staticClass:"information"},[e._v("火花塞材质，如：高端陶瓷、高碳陶瓷、金属、陶瓷、陶银等")])],1)],1):e._e(),a("el-row",[a("el-form-item",{attrs:{label:"商品单位",rules:{required:!0,message:"商品单位不能为空"},prop:"unit_id",size:"mini"}},[a("getUnitName",{attrs:{fatherParams:e.params},model:{value:e.params.unit_id,callback:function(t){e.$set(e.params,"unit_id",t)},expression:"params.unit_id"}})],1)],1),a("el-row",[a("el-form-item",{attrs:{label:"销售价",rules:{required:!0,message:"销售价不能为空"},prop:"guide_price",size:"mini"}},[a("el-input",{on:{blur:function(t){return e.$publicFution.toFixedTwo(e.params,"guide_price",{type:"Positive"})}},model:{value:e.params.guide_price,callback:function(t){e.$set(e.params,"guide_price",t)},expression:"params.guide_price"}},[a("template",{slot:"append"},[e._v("元")])],2),a("span",{staticClass:"information"},[e._v("销售价应用于开单指导价及小程序店铺售价，请务必确保准确性")])],1)],1),a("el-row",[a("el-form-item",{attrs:{label:"自定义编码",size:"mini"}},[a("el-input",{model:{value:e.params.goods_sn,callback:function(t){e.$set(e.params,"goods_sn",t)},expression:"params.goods_sn"}})],1)],1),a("el-row",[a("el-form-item",{attrs:{label:"商品图片",size:"mini"}},[a("cupload",{ref:"cupload",attrs:{limit:5,allowType:["png","jpeg","jpg","gif"],extendParams:e.extendParams,sizeLimit:2,returnStr:"response.data.name_path",url:"/service_station/open/Upload/uploadImage"},model:{value:e.params.goods_image,callback:function(t){e.$set(e.params,"goods_image",t)},expression:"params.goods_image"}},[a("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary"}},[e._v("选择文件")])],1),a("span",{staticClass:"information"},[e._v(" 上传图片的最佳尺寸：800像素*800像素，其他尺寸会影响页效果，格式png，jpeg，jpg，gif。大小不超过2M，商品图片一共可以上传5张. ")])],1)],1),a("el-row",[a("el-form-item",{attrs:{label:"车型匹配码",size:"mini"}},[a("el-input",{attrs:{type:"textarea",rows:5,cols:20},on:{change:e.oeCodeShowChange},model:{value:e.params.oe_code_show,callback:function(t){e.$set(e.params,"oe_code_show",t)},expression:"params.oe_code_show"}})],1),a("p",{staticClass:"information",staticStyle:{margin:"0px 10px 10px 147px",width:"50%"}},[e._v(" 注：商品对应的OE码、原厂编码、品牌件码、大厂码、曼牌编码、TRW编码、Ngk火花塞编码等，可以输入多个，多个码请使用逗号、分号或顿号（，；、）分隔；系统会根据填写内容自动匹配适用车型，本信息填写完整性及准确性将影响关联适配车型的准确性。 ")])],1),a("el-row",[a("el-form-item",{attrs:{label:"适配车型",size:"mini"}},[a("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary"},on:{click:function(t){e.isShowSelectModels=!0}}},[e._v(" "+e._s(e.carId.length||e.oeCarModles.length?"修改":"添加")+"适配车型")])],1)],1),e.isRevealAll?a("div",[a("el-row",[a("el-form-item",{attrs:{label:"工厂编码",size:"mini"}},[a("el-input",{attrs:{type:"text"},model:{value:e.params.factory_code,callback:function(t){e.$set(e.params,"factory_code",t)},expression:"params.factory_code"}})],1)],1),a("el-row",[a("el-form-item",{attrs:{label:"销售税率",size:"mini"}},[a("el-input",{attrs:{type:"text",placeholder:"请输入",maxlength:"300",size:"mini"},on:{input:function(t){return e.$publicFution.limitInput(e.params,"taxrate",t)},change:function(t){return e.$publicFution.toFixedTwo(e.params,"taxrate",{min:0,less:100})}},model:{value:e.params.taxrate,callback:function(t){e.$set(e.params,"taxrate",t)},expression:"params.taxrate"}},[a("template",{slot:"append"},[e._v("%")])],2)],1)],1),a("el-row",[a("el-form-item",{attrs:{label:"停用",size:"mini"}},[a("el-radio",{attrs:{label:1},model:{value:e.params.is_disabled,callback:function(t){e.$set(e.params,"is_disabled",t)},expression:"params.is_disabled"}},[e._v("是")]),a("el-radio",{attrs:{label:0},model:{value:e.params.is_disabled,callback:function(t){e.$set(e.params,"is_disabled",t)},expression:"params.is_disabled"}},[e._v("否")])],1)],1),a("el-row",[a("el-form-item",{attrs:{label:"备注",size:"mini"}},[a("el-input",{attrs:{type:"textarea",rows:5,cols:20},model:{value:e.params.remark,callback:function(t){e.$set(e.params,"remark",t)},expression:"params.remark"}})],1)],1)],1):e._e(),a("hr"),a("p",{staticStyle:{"text-align":"center","font-size":"14px",cursor:"pointer",color:"#409eff"},on:{click:function(t){e.isRevealAll=!e.isRevealAll}}},[a("i",{class:e.isRevealAll?"el-icon-caret-top":"el-icon-caret-bottom"}),a("span",[e._v(e._s(e.isRevealAll?"收起":"展开全部"))])])],1)],1),a("div",{staticClass:"dialog-footer"},[a("el-button",{on:{click:e.goBack}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submit(1)}}},[e._v("保 存")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submit(2)}}},[e._v("保存并新增")])],1),a("selectModels",{attrs:{oeCarModles:e.oeCarModles,carModles:e.carId},on:{change:e.carModelsChange},model:{value:e.isShowSelectModels,callback:function(t){e.isShowSelectModels=t},expression:"isShowSelectModels"}})],1)},s=[],i=(a("4de4"),a("d3b7"),a("ac1f"),a("1276"),a("a15b"),a("e9c4"),a("99af"),a("b64b"),a("159b"),a("a9e3"),{is_disabled:0,add_brand_name:"",company_id:"",goods_type_id:"",goods_type_name:"",brand_id:"",brand_name:"",goods_name:"",goods_model:"",unit_id:"",guide_price:"",goods_sn:"",oe_code:"",oe_code_show:"",car_library:[],car_library_name:[],goods_image:"",goods_texture:"",parameter_list:{},remark:"",factory_code:""}),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"params"},[a("vxe-modal",{attrs:{title:"适配车型",width:"1200","esc-closable":!0,"destroy-on-close":"",height:"800","min-width":"600","min-height":"100",resize:"",remember:"",storage:"",transfer:""},on:{hide:e.close},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[a("selectModelAdd",{directives:[{name:"show",rawName:"v-show",value:1==e.type,expression:"type == 1"}],ref:"selectModelAdd",attrs:{carId:e.carId},on:{close:e.addClose,submitData:e.renderAll}}),a("div",{directives:[{name:"show",rawName:"v-show",value:1!==e.type,expression:"type !== 1"}]},[a("div",[a("el-form",{ref:"filterFormRef",staticClass:"demo-form-inline",attrs:{inline:!0,model:e.params}},[e._l(e.paramsModule,(function(t,r){return a("el-form-item",{key:r,attrs:{label:t,size:"mini"}},[a("el-select",{attrs:{clearable:"",placeholder:"请选择"+t},on:{focus:function(t){return e.getSelectOptions(r)}},model:{value:e.params[r],callback:function(t){e.$set(e.params,r,t)},expression:"params[key]"}},e._l(e.selectOptionsCopy[r],(function(e,t){return a("el-option",{key:t,attrs:{label:t,value:t}})})),1)],1)})),a("el-form-item",{staticClass:"search-style search",attrs:{size:"mini"}},[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){return e.onSearch(1)}}},[e._v("查询")]),a("el-button",{attrs:{plain:"",size:"mini"},on:{click:e.onReset}},[e._v("重置")])],1)],2)],1),a("div",{staticClass:"add_delet"},[a("el-button",{staticClass:"addBtn",attrs:{icon:"el-icon-circle-plus-outline",type:"primary",size:"mini"},on:{click:e.addCarModels}},[e._v("添加其他车型")]),a("el-button",{attrs:{plain:"",icon:"el-icon-delete",size:"mini"},on:{click:e.delCarModels}},[e._v("删除车型")])],1),a("div",[a("xTable",{ref:"xTable",attrs:{tableColumn:e.tableColumn,xData:e.renderData},on:{selectChange:function(t){return e.selection=t.selection}}}),a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[10,10,30],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.toTal},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),a("div",{staticClass:"dialog-footer"},[a("el-button",{on:{click:e.close}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("确定")])],1)])],1)])],1)},o=[],l=(a("b1f0"),a("3c64"),a("54b4"),a("3db6"),a("42aa"),a("e326"),a("3736"),a("fde8"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"params"},[a("div",{staticClass:"matchingModel"},[a("div",{staticClass:"matchingModelSearch"},[a("p",{staticClass:"matchingModelAll"},[a("el-button",{attrs:{plain:"",size:"mini"}},[a("el-checkbox",{on:{change:e.isAllChange},model:{value:e.isAll,callback:function(t){e.isAll=t},expression:"isAll"}},[e._v("通用全部车型")])],1),a("span",[e._v("已选择车型 "+e._s(e.selectedCarNumber))])],1),e._l(e.letterBox,(function(t){return a("el-tag",{key:t,attrs:{type:t,effect:e.current.letter===t?"dark":"plain"},on:{click:function(a){return e.changeLetter(t)}}},[e._v(" "+e._s(t)+" ")])})),a("p",{staticClass:"matchingModelBrand"},e._l(e.brandBox,(function(t,r){return a("el-button",{key:r,class:e.current.brand==r?"active":"",attrs:{type:"text",size:"mini"},on:{click:function(t){return e.setBrand(r)}}},[e._v(e._s(r)+" ")])})),1)],2),e.brandBox?a("div",{staticClass:"matchingModelResultBox"},[a("el-row",[a("el-col",{attrs:{span:4}},[a("h4",[e._v("品牌")]),a("div",[a("el-checkbox",{staticClass:"carModelActive",attrs:{label:e.current.brand},on:{change:e.brandChange},model:{value:e.selectModel.brand,callback:function(t){e.$set(e.selectModel,"brand",t)},expression:"selectModel.brand"}})],1)]),a("el-col",{attrs:{span:6}},[a("h4",[e._v("车系")]),a("div",[a("el-checkbox-group",{model:{value:e.selectModel.series,callback:function(t){e.$set(e.selectModel,"series",t)},expression:"selectModel.series"}},e._l(e.carSeriesKeys,(function(t){return a("el-checkbox",{key:t,class:e.current.series===t?"carModelActive":"",attrs:{value:t,label:t},nativeOn:{click:function(a){e.seriesChange(t),e.setCarSeries(t,2)}}},[a("span",{on:{click:function(a){return a.stopPropagation(),a.preventDefault(),e.setCarSeries(t)}}},[e._v(e._s(t))])])})),1)],1)]),a("el-col",{attrs:{span:2}},[a("h4",[e._v("排量")]),a("div",[a("el-checkbox-group",{model:{value:e.selectModel.displacement,callback:function(t){e.$set(e.selectModel,"displacement",t)},expression:"selectModel.displacement"}},e._l(e.carSeries[e.current.series],(function(t,r){return a("el-checkbox",{key:r,class:e.current.displacement===r?"carModelActive":"",attrs:{value:r,label:r},nativeOn:{click:function(t){e.displacementChange(r),e.setDisplacement(r,2)}}},[a("span",{on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.setDisplacement(r)}}},[e._v(e._s(r))])])})),1)],1)]),a("el-col",{attrs:{span:2}},[a("h4",[e._v("年款")]),e.carSeries[e.current.series]?a("div",[a("el-checkbox-group",{model:{value:e.selectModel.year,callback:function(t){e.$set(e.selectModel,"year",t)},expression:"selectModel.year"}},e._l(e.carSeries[e.current.series][e.current.displacement],(function(t,r){return a("el-checkbox",{key:r,class:e.current.year===r?"carModelActive":"",attrs:{value:r,label:r},nativeOn:{click:function(t){e.yearChange(r),e.setYear(r,2)}}},[a("span",{on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.setYear(r)}}},[e._v(e._s(r))])])})),1)],1):e._e()]),a("el-col",{attrs:{span:10}},[a("h4",[e._v("配置")]),e.carSeries[e.current.series]&&e.carSeries[e.current.series][e.current.displacement]?a("div",[a("el-checkbox-group",{model:{value:e.selectModel.models,callback:function(t){e.$set(e.selectModel,"models",t)},expression:"selectModel.models"}},e._l(e.carSeries[e.current.series][e.current.displacement][e.current.year],(function(t,r){return a("el-checkbox",{key:r,attrs:{label:t.car_lib_id},nativeOn:{click:function(a){return e.modelsChange(t.car_lib_id)}}},[e._v(e._s(t.sales_name))])})),1)],1):e._e()])],1)],1):e._e(),a("div",{staticClass:"dialog-footer"},[a("el-button",{on:{click:e.close}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("确定")])],1)])])}),c=[],d=(a("410a"),a("6f78"),a("c07b"),a("de3b"),a("c9ce"),a("bf00"),a("fde9")),u={data:function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZ";return{loading:!1,letterBox:e.split(""),selectModelsId:{},carSeriesKeys:[],isAll:!1,selectModel:{brand:!1,series:[],displacement:[],year:[],models:[]},current:{letter:"A",brand:"",series:"",displacement:"",year:""},unRenderArray:[],renderAllObj:null,checkList:"",selectedCarNumber:0,brandBox:{},carSeries:{}}},props:{value:null,carId:{type:Array,default:function(){return[]}},isGeneralModels:{type:Boolean,default:!1}},created:function(){this.allData={},this.allId={},this.allTotal=0,this.isDisabled=!1},methods:{init:function(e,t){var a=Object(d["a"])(e);this.allData=a.brandObj,this.allId=a.brandId,this.allTotal=a.total,this.initSelectModelsId(),t&&this.getBrand()},initRender:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.loading=!0,this.unRenderArray=[],setTimeout((function(){e.isGeneralModels?e.selectModelsId=e.$publicFution.deepCopy(e.allId):e.carId.length&&(e.initSelectModelsId("德玛西亚"),e.unRenderArray=e.carId.concat([]),e.initSingleSelectModelsId(t.brand_letter,t.brand_name)),e.getBrand(t),e.loading=!1}),50)},initSingleSelectModelsId:function(e,t){var a=this,r=[];this.unRenderArray=this.unRenderArray.filter((function(s){return!a.allData[e][t].some((function(e){return e.car_lib_id===s}))||(r.push(s),!1)})),this.selectModelsId[t]=r},initSelectModelsId:function(e){var t=this;for(var a in this.allData)Object.keys(this.allData[a]).forEach((function(a){t.selectModelsId[a]=e||[]}))},getBrand:function(e){this.current.letter=e?e.brand_letter:this.current.letter,this.brandBox=Object.freeze(this.allData[this.current.letter]),this.brandBox&&this.setBrand(e?e.brand_name:Object.keys(this.brandBox)[0])},isAllChange:function(e){this.unRenderArray=[],e?this.selectModelsId=this.$publicFution.deepCopy(this.allId):this.initSelectModelsId(),this.renderCheckbox()},brandChange:function(e){if(e){var t=[];for(var a in this.carSeries)for(var r in this.carSeries[a])for(var s in this.carSeries[a][r])this.carSeries[a][r][s].forEach((function(e){return t.push(e.car_lib_id)}));this.selectModelsId[this.current.brand]=t}else this.selectModelsId[this.current.brand]=[];this.renderCheckbox()},seriesChange:function(e){var t=this;this.isDisabled||(this.isDisabled=!0,setTimeout((function(){if(t.isDisabled=!1,t.selectModel.series.includes(e))for(var a in t.carSeries[e])for(var r in t.carSeries[e][a])for(var s in t.carSeries[e][a][r])t.arrPush(t.selectModelsId[t.current.brand],t.carSeries[e][a][r][s].car_lib_id);else for(var a in t.carSeries[e])for(var r in t.carSeries[e][a])for(var s in t.carSeries[e][a][r])t.arrRemove(t.selectModelsId[t.current.brand],t.carSeries[e][a][r][s].car_lib_id);t.renderCheckbox()}),50))},displacementChange:function(e){var t=this;if(!this.isDisabled){this.isDisabled=!0;var a=this.carSeries[this.current.series];setTimeout((function(){if(t.isDisabled=!1,t.selectModel.displacement.includes(e))for(var r in a[e])a[e][r].forEach((function(e){t.arrPush(t.selectModelsId[t.current.brand],e.car_lib_id)}));else for(var r in a[e])a[e][r].forEach((function(e){t.arrRemove(t.selectModelsId[t.current.brand],e.car_lib_id)}));t.renderCheckbox()}),50)}},yearChange:function(e){var t=this;if(!this.isDisabled){this.isDisabled=!0;var a=this.carSeries[this.current.series][this.current.displacement];setTimeout((function(){t.isDisabled=!1,t.selectModel.year.includes(e)?a[e].forEach((function(e){t.arrPush(t.selectModelsId[t.current.brand],e.car_lib_id)})):a[e].forEach((function(e){t.arrRemove(t.selectModelsId[t.current.brand],e.car_lib_id)})),t.renderCheckbox()}),50)}},modelsChange:function(e){var t=this;this.isDisabled||(this.isDisabled=!0,setTimeout((function(){t.isDisabled=!1,t.selectModel.models.includes(e)?t.arrPush(t.selectModelsId[t.current.brand],e):t.arrRemove(t.selectModelsId[t.current.brand],e),t.renderCheckbox()}),50))},renderCheckbox:function(){var e=this,t=this.carSeries[this.current.series][this.current.displacement][this.current.year],a=this.selectModelsId[this.current.brand],r=t.length;t.forEach((function(t){a.includes(t.car_lib_id)?e.arrPush(e.selectModel.models,t.car_lib_id):e.arrRemove(e.selectModel.models,t.car_lib_id)}));var s=!0;r===this.selectModel.models.length?this.arrPush(this.selectModel.year,this.current.year):(this.arrRemove(this.selectModel.year,this.current.year),s=!1);var i=this.carSeries[this.current.series][this.current.displacement];for(var n in i)n!==this.current.year&&(i[n].every((function(e){return a.includes(e.car_lib_id)}))?this.arrPush(this.selectModel.year,n):(s=!1,this.arrRemove(this.selectModel.year,n)));s?this.arrPush(this.selectModel.displacement,this.current.displacement):this.arrRemove(this.selectModel.displacement,this.current.displacement);var o=this.carSeries[this.current.series];for(var n in o)if(n!==this.current.displacement){var l=!0;for(var c in o[n])if(!o[n][c].every((function(e){return a.includes(e.car_lib_id)}))){l=!1;break}l?this.arrPush(this.selectModel.displacement,n):(this.arrRemove(this.selectModel.displacement,n),s=!1)}s?this.arrPush(this.selectModel.series,this.current.series):this.arrRemove(this.selectModel.series,this.current.series);var d=this.carSeries;for(var n in d)if(n!==this.current.series){var u=!0;for(var c in d[n]){for(var h in d[n][c])if(!d[n][c][h].every((function(e){return a.includes(e.car_lib_id)}))){u=!1,s=!1;break}if(!u)break}u?this.arrPush(this.selectModel.series,n):this.arrRemove(this.selectModel.series,n)}this.selectModel.brand=!!s;var p=this.unRenderArray.length;for(var m in this.selectModelsId)p+=Array.isArray(this.selectModelsId[m])?this.selectModelsId[m].length:0;this.selectedCarNumber=p,p<this.allTotal?this.isAll=!1:this.isAll=!0,this.loading=!1},arrPush:function(e,t){var a=e.indexOf(t);-1===a&&e.push(t)},arrRemove:function(e,t){var a=e.indexOf(t);-1!=a&&e.splice(a,1)},setBrand:function(e){var t=this;this.loading=!0,setTimeout((function(){t.selectModel.series=[],t.current.brand=e,"德玛西亚"===t.selectModelsId[t.current.brand]&&t.initSingleSelectModelsId(t.current.letter,t.current.brand);var a=Object.freeze(Object(d["c"])(t.brandBox[e],t.selectModelsId[t.current.brand][0])),r=a.obj,s=a.echoObj;t.echoObj=s,t.carSeriesKeys=Object.keys(r).sort(),t.carSeries=r,t.setCarSeries(t.echoObj?t.echoObj.car_series:t.carSeriesKeys[0])}),50)},setCarSeries:function(e,t){this.selectModel.displacement=[],this.current.series=e,this.setDisplacement(this.echoObj?this.echoObj.displacement:Object.keys(this.carSeries[e])[0],t)},setDisplacement:function(e,t){this.selectModel.year=[],this.current.displacement=e,this.setYear(this.echoObj?this.echoObj.years:Object.keys(this.carSeries[this.current.series][e])[0],t)},setYear:function(e,t){this.selectModel.models=[],this.current.year=e,2!==t&&this.renderCheckbox(),this.echoObj=null},changeLetter:function(e){this.current.letter=e,this.getBrand()},close:function(){this.$emit("close")},submit:function(){var e=this.unRenderArray;for(var t in this.selectModelsId)e=e.concat(Array.isArray(this.selectModelsId[t])?this.selectModelsId[t]:[]);this.$emit("submitData",e)}}},h=u,p=(a("281d"),a("2877")),m=Object(p["a"])(h,l,c,!1,null,null,null),_=m.exports,f=a("f043"),b={brand_name:"",show_name:"",car_series:"",car_models:"",engine_type:"",fuel_type:"",displacement:"",max_power:"",years:"",c_variant_sop:"",c_variant_eop:"",emission_standard:""},v={brand_name:{},show_name:{},car_series:{},car_models:{},engine_type:{},fuel_type:{},displacement:{},max_power:{},years:{},c_variant_sop:{},c_variant_eop:{},emission_standard:{}},g={data:function(){return{paramsModule:{brand_name:"品牌",show_name:"厂商",car_series:"车系",car_models:"车型",engine_type:"发动机",fuel_type:"燃油类型",displacement:"排量",max_power:"功率",years:"年款",c_variant_sop:"上市年份",c_variant_eop:"停产年份",emission_standard:"排放标准"},tableColumn:[{type:"checkbox",width:44,align:"center"},{title:"车款",field:"sales_name",width:250},{title:"品牌",field:"brand_name",width:100},{title:"厂家",field:"show_name",width:100},{title:"车系",field:"car_series",width:100},{title:"排放标准",field:"emission_standard",width:70},{title:"年款",field:"years",width:100},{title:"上市年份",field:"c_variant_sop",width:120},{title:"生产年份",field:"c_variant_sop",width:120},{title:"停产年份",field:"c_variant_eop",width:100},{title:"排量",field:"displacement",width:100},{title:"发动机",field:"engine_type",width:100},{title:"适配来源",field:"unit_name",width:100,formatter:function(e){var t=e.row;return 1==t.match_type?"OE码匹配":"自主选择"}}]}}},y={mixins:[g],data:function(){return{loading:!1,type:2,params:this.$publicFution.deepCopy(b),selectOptions:this.$publicFution.deepCopy(v),selectOptionsCopy:this.$publicFution.deepCopy(v),renderData:[],selection:[],carId:[],currentPage:1,pageSize:10,toTal:0}},created:function(){this.init()},watch:{value:function(e){var t=this;!0===e&&(this.carModles.length||this.oeCarModles.length?setTimeout((function(){t.renderAll(t.carModles,t.oeCarModles)}),50):this.addCarModels())}},props:{value:null,data:{type:Object,default:function(){}},goods:{type:Object,default:function(){}},carModles:{type:Array,default:function(){return[]}},oeCarModles:{type:Array,default:function(){return[]}}},components:{selectModelAdd:_},methods:{init:function(){var e=this;this.AllTableData=[],this.tableDate=[],this.allData={},Object(f["a"])((function(t){e.allData=t.data,setTimeout((function(){e.$refs.selectModelAdd.init(t.data)}))}))},addClose:function(){this.carModles.length?this.type=2:this.close()},getSelectOptions:function(e){this.selectOptionsCopy[e]=this.selectOptions[e]},onSearch:function(e){var t=this;this.currentPage=e||this.currentPage;var a=[],r=this.$publicFution.deepCopy(v);this.AllTableData.forEach((function(e){var s=!0;for(var i in t.selectOptions)if(t.params[i]&&t.params[i]!==e[i]){s=!1;break}if(s){for(var n in t.selectOptions)!r[n][e[n]]&&e[n]&&e[n].trim()&&(r[n][e[n]]="断剑重铸之日骑士归来之时");a.push(e)}})),this.selectOptions=r,this.tableDate=a,this.toTal=this.tableDate.length,this.renderTable()},onReset:function(){this.tableDate=this.AllTableData.concat([]),this.params=this.$publicFution.deepCopy(b),this.onSearch(1)},handleSizeChange:function(e){this.pageSize=e,this.renderTable()},handleCurrentChange:function(e){this.currentPage=e,this.renderTable()},delCarModels:function(){var e=this;if(this.selection.length){var t=[];this.AllTableData=this.AllTableData.filter((function(a){if(!e.selection.includes(a))return t.push(a.car_lib_id),!0})),this.carId=t,this.onSearch()}else this.$message.warning("请选择车型")},addCarModels:function(){this.type=1,this.$refs.selectModelAdd.initRender(this.AllTableData[0])},renderTable:function(){this.renderData=this.tableDate.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize)},getMatchingData:function(e,t,a){var r=[];for(var s in this.allData)this.allData[s].forEach((function(s){if(t.includes(s.car_lib_id))for(var i in s.match_type=1==s.match_type?s.match_type:a,r.push(s),e)!e[i][s[i]]&&s[i]&&s[i].trim()&&(e[i][s[i]]="哈撒给")}));return r},renderAll:function(e,t){var a=this;this.type=2,this.loading=!0,setTimeout((function(){var r=a.$publicFution.deepCopy(v),s=a.getMatchingData(r,e,0);t?(s=s.concat(a.getMatchingData(r,t,1)),a.carId=e.concat(a.oeCarModles)):a.carId=e,a.selectOptions=r,a.AllTableData=s,a.tableDate=s.concat([]),a.toTal=s.length,a.currentPage=1,a.renderTable(),a.loading=!1,0==a.carModles.length&&0==a.oeCarModles.length&&a.submit()}),50)},close:function(){this.$emit("input",!1)},submit:function(){this.$emit("change",this.AllTableData,this.carId),this.close()}}},M=y,C=Object(p["a"])(M,n,o,!1,null,"5fdf5d9e",null),S=C.exports,w={name:"service_station_inventory_goods_add",data:function(){return{type:0,cascaderVue:[],modelLabel:"商品型号",isRevealAll:!1,isHuoHuaSai:!1,huoHuaSaiList:[],params:this.$publicFution.deepCopy(i),extendParams:{directory:"service_station"},parameter_list:{},isShowSelectModels:!1,carId:[],oeCarModles:[]}},components:{selectModels:S},methods:{brandChange:function(){this.params.add_brand_name="",this.getCarModels()},nameChange:function(e){this.params.add_brand_name=e,this.params.brand_name=e,this.params.brand_id=""},serviceBrandFocus:function(){this.params.goods_type_id||this.$message.warning("请先选择商品分类")},oeCodeShowChange:function(e){var t="";e&&(e=e.split(/,|，|;|、|；/g).filter((function(e){return e})),t=e.join(",")),this.params.oe_code=t},carModelsChange:function(e,t){this.oeCarModles=[],this.car_lib_id=e,this.carId=t},getCarModels:function(){var e=this;if(this.params.brand_name&&this.params.goods_type_id){for(var t in this.parameter_list)this.parameter_list[t].attribute_value_name="材质"!==t?this.params.goods_model:this.params.goods_texture;this.$api.serviceStationGetOeCodeOrCarLibraryList({parameter_list:JSON.stringify(this.parameter_list),brand_name:this.params.brand_name,goods_type_id:this.params.goods_type_id,goods_type_name:this.params.goods_type_name}).then((function(t){var a=t.data;if(200==a.code){var r=[];for(var s in a.data.car_library)r=r.concat(a.data.car_library[s]);var i=[];for(var s in a.data.oe_code)i=i.concat(a.data.oe_code[s]);e.params.oe_code=e.params.oe_code_show=i.join(","),e.renderCarModels(r)}}))}},renderAttribute:function(e,t){var a=this;e?(1942==e[2]?(this.isHuoHuaSai=!0,this.$api.serviceStationGetShopGoodsAttributeValueList({goods_type_id:e[2],attribute_name:"材质"}).then((function(e){var t=e.data;200==t.code&&(a.huoHuaSaiList=t.data[0].attr_value_list)}))):this.isHuoHuaSai=!1,this.cascaderVue=e,this.params.goods_type_id=e[2],this.$api.serviceStationGetTypeParameterList({goods_type_id:e[2]}).then((function(e){var r=e.data;200==r.code&&(a.modelLabel=Object.keys(r.data).filter((function(e){return"材质"!=e}))[0],a.parameter_list=r.data,t&&t())}))):this.isHuoHuaSai=!1},goodsTypeChange:function(e,t){var a=this;this.renderAttribute(e,(function(){a.getCarModels()})),this.params.goods_type_name=t[0].label,this.$refs.params.validateField("goods_type_id"),this.params.add_brand_name="",this.params.brand_name="",this.params.brand_id="",this.$refs.getServiceBrand.clear()},submit:function(e){var t=this;this.$refs.params.validate((function(a){if(a){var r=t.$publicFution.deepCopy(t.params),s="serviceStationAddGoods";t.type&&(s="serviceStationEditGoods"),r.car_library=[],r.car_library_name=[],t.car_lib_id.forEach((function(e){1!=e.match_type&&(r.car_library.push(e.car_lib_id),r.car_library_name.push(e.sales_name))})),r.car_library.join(","),r.car_library_name.join(","),delete r.parameter_list,t.$api[s](r).then((function(a){var r=a.data;200==r.code&&(t.$message.success(r.msg),1===e&&t.goBack())}))}}))},renderCarModels:function(e){var t=this;e&&(this.carId=[],this.car_lib_id=[],this.oeCarModles=[],e.forEach((function(e){1==e.match_type?t.oeCarModles.push(e.car_lib_id):t.carId.push(e.car_lib_id)})),this.car_lib_id=e)},goBack:function(){this.$router.push({path:"/service_station_goods/service_station_inventory_goods"})}},mounted:function(){var e=this;this.$route.query.id?(this.carId=[],this.car_lib_id=[],this.oeCarModles=[],this.type=1,this.$api.serviceStationgetGoodsInfo({inventory_goods_id:this.$route.query.id}).then((function(t){var a=t.data;200==a.code&&(a.data.oe_code_show=a.data.oe_code,e.params=a.data,e.cascaderVue=[a.data.goods_type_id_1-0,a.data.goods_type_id_2-0,a.data.goods_type_id-0],e.renderAttribute(e.cascaderVue),e.$refs.cupload._initList(e.params.image),e.$refs.getServiceBrand.query=a.data.brand_name,e.renderCarModels(a.data.car_library))}))):(setTimeout((function(){e.$refs.erpCompanyList._setList({company_id:Number(localStorage.company_id),company_name:localStorage.company_name})}),500),Object.assign(this.params,{company_id:Number(localStorage.company_id)}))}},k=w,x=(a("1fe4"),Object(p["a"])(k,r,s,!1,null,"0b2d9cc2",null));t["default"]=x.exports},de3b:function(e,t,a){var r=a("ef00"),s=a("6446"),i=a("88e4"),n=a("e67c"),o=a("a754").onFreeze,l=Object.freeze,c=i((function(){l(1)}));r({target:"Object",stat:!0,forced:c,sham:!s},{freeze:function(e){return l&&n(e)?l(o(e)):e}})},f043:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));a("410a"),a("6f78"),a("b1f0"),a("3c64");var r=a("fc5a"),s=a("9887"),i=a.n(s);function n(e){var t="car_librarys_csv_874654166";if(window[t])return e({code:200,data:window[t]});function a(e){if(!(window.localStorage&&window.indexedDB&&window.indexedDB.open))return e(!1);var t=indexedDB.open("jybd-car",1);t.onerror=function(t){console.log("数据库打开报错"),e(!1)},t.onsuccess=function(a){console.log("数据库打开成功"),e(t.result)},t.onupgradeneeded=function(e){e.target.result.objectStoreNames.contains("car_choice")||e.target.result.createObjectStore("car_choice",{keyPath:"id"})}}function s(e,t){i.a.get(e).then((function(e){for(var a=e.data.split("\n"),r=[],s=a[1].split(","),i=2;i<a.length;i++){for(var n={},o=a[i].split(","),l=0;l<o.length;l++)s[l]&&(n[s[l]]=o[l]);n.car_lib_id&&r.push(n)}t({code:200,data:r})}))}function n(e,r){window[t]=e,a((function(a){if(!1!==a){var s=a.transaction(["car_choice"],"readwrite").objectStore("car_choice").put({id:0,data:e});s.onsuccess=function(e){window.localStorage.setItem(t,r.data.update_time),console.log("数据库存储成功")},s.onerror=function(e){console.log("Database error: ",e.target.error)}}}))}function o(e,r){if(200==e.code&&window.localStorage&&window.localStorage.getItem&&window.localStorage.getItem(t)!=e.data.update_time)return r();a((function(e){if(!1===e)return r();var a=e.transaction(["car_choice"]).objectStore("car_choice").get(0);a.onsuccess=function(e){console.log("数据库读取成功");var s=a.result&&a.result.data;r(s),s&&(window[t]=s)},a.onerror=function(e){console.log("Database error: ",e.target.error),r()}}))}function l(e){Object(r["a"])({type:"get",url:"v2/open/Excel/getCarLibraryExcel"}).then((function(t){try{t=JSON.parse(t.data.data)}catch(a){}e({code:t.code,data:t.result})})).catch((function(){e({code:400,message:"服务器错误，请联系管理员"})}))}function c(e){var t={};return e.forEach((function(e){t[e.brand_letter]||(t[e.brand_letter]=[]),t[e.brand_letter].push(e)})),t}l((function(t){o(t,(function(a){return a?e({code:200,data:a}):200!=t.code?e(t):void s(t.data.url,(function(a){a.data=c(a.data),e(a),200==a.code&&setTimeout((function(){n(a.data,t)}),100)}))}))}))}},fde9:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"e",(function(){return s})),a.d(t,"d",(function(){return c})),a.d(t,"a",(function(){return d})),a.d(t,"c",(function(){return u}));a("bf00"),a("c07b"),a("b1f0"),a("3c64"),a("e326"),a("3736"),a("42aa");function r(e){for(var t={},a=Object.keys(e).sort(),r=0;r<a.length;r++){var s=a[r];t[s]||(t[s]={});for(var i=0;i<e[s].length;i++)t[s][e[s][i].brand_name]||(t[s][e[s][i].brand_name]=[]),t[s][e[s][i].brand_name].push(e[s][i])}return t}function s(e){var t=e.list,a=e.letter,r=e.keywords;if(a){var s=t[a]||{},i={};return Object.keys(s).forEach((function(e){e.includes(r)&&(i[e]=s[e])})),i}var n=t,o={};for(var l in n){var c=Object.keys(n[l]),d=c.filter((function(e){return e.includes(r)}));if(d.length){o[l]={};for(var u=0;u<d.length;u++){var h=d[u];o[l][h]=n[l][h]}}}return o}var i=["三厢","三厢车","两厢车","两厢","掀背车","旅行车"],n=["EV","氢燃料","增程式"],o=["硬顶敞篷车","软顶敞篷车","硬顶跑车","跑车"];function l(e){var t=e.car_type,a=e.displacement;return n.includes(a)?"新能源":"MPV"===t.toUpperCase()?"MPV":"SUV"===t.toUpperCase()?"SUV":"客车"===t?"客车":o.includes(t)?"跑车":i.includes(t)?"轿车":"其他"}function c(e){var t={},a=0,r=[];return e.forEach((function(e){if(1!=e.source){t[e.show_name]||(t[e.show_name]={});var s=l(e);t[e.show_name][s]||(t[e.show_name][s]={}),t[e.show_name][s][e.car_series]||(t[e.show_name][s][e.car_series]=[]),r.includes(e.car_series)||r.push(e.car_series),t[e.show_name][s][e.car_series].push(e),a++}})),{obj:t,total:a,carSeriesArr:r}}function d(e){var t={},a={},r=0;for(var s in e){t[s]||(t[s]={});for(var i=0;i<e[s].length;i++){var n=e[s][i];t[s][n.brand_name]||(t[s][n.brand_name]=[]),a[n.brand_name]||(a[n.brand_name]=[]),r++,t[s][n.brand_name].push(n),a[n.brand_name].push(n.car_lib_id)}}return{brandObj:t,brandId:a,total:r}}function u(e,t){var a={},r=null;return t?e.forEach((function(e){e.car_lib_id==t&&(r=e),a[e.car_series]||(a[e.car_series]={}),a[e.car_series][e.displacement]||(a[e.car_series][e.displacement]={}),a[e.car_series][e.displacement][e.years]||(a[e.car_series][e.displacement][e.years]=[]),a[e.car_series][e.displacement][e.years].push(e)})):e.forEach((function(e){a[e.car_series]||(a[e.car_series]={}),a[e.car_series][e.displacement]||(a[e.car_series][e.displacement]={}),a[e.car_series][e.displacement][e.years]||(a[e.car_series][e.displacement][e.years]=[]),a[e.car_series][e.displacement][e.years].push(e)})),{obj:a,echoObj:r}}}}]);
//# sourceMappingURL=chunk-9f983e0c.4aa89a65.js.map