(window["webpackJsonp_erpcode"]=window["webpackJsonp_erpcode"]||[]).push([["chunk-2823a10e"],{"234a":function(e,a,t){},b680:function(e,a,t){"use strict";var r=t("23e7"),i=t("da84"),s=t("e330"),o=t("5926"),n=t("408a"),l=t("1148"),p=t("d039"),c=i.RangeError,m=i.String,u=Math.floor,d=s(l),_=s("".slice),f=s(1..toFixed),h=function(e,a,t){return 0===a?t:a%2===1?h(e,a-1,t*e):h(e*e,a/2,t)},g=function(e){var a=0,t=e;while(t>=4096)a+=12,t/=4096;while(t>=2)a+=1,t/=2;return a},w=function(e,a,t){var r=-1,i=t;while(++r<6)i+=a*e[r],e[r]=i%1e7,i=u(i/1e7)},b=function(e,a){var t=6,r=0;while(--t>=0)r+=e[t],e[t]=u(r/a),r=r%a*1e7},y=function(e){var a=6,t="";while(--a>=0)if(""!==t||0===a||0!==e[a]){var r=m(e[a]);t=""===t?r:t+d("0",7-r.length)+r}return t},v=p((function(){return"0.000"!==f(8e-5,3)||"1"!==f(.9,0)||"1.25"!==f(1.255,2)||"1000000000000000128"!==f(0xde0b6b3a7640080,0)}))||!p((function(){f({})}));r({target:"Number",proto:!0,forced:v},{toFixed:function(e){var a,t,r,i,s=n(this),l=o(e),p=[0,0,0,0,0,0],u="",f="0";if(l<0||l>20)throw c("Incorrect fraction digits");if(s!=s)return"NaN";if(s<=-1e21||s>=1e21)return m(s);if(s<0&&(u="-",s=-s),s>1e-21)if(a=g(s*h(2,69,1))-69,t=a<0?s*h(2,-a,1):s/h(2,a,1),t*=4503599627370496,a=52-a,a>0){w(p,0,t),r=l;while(r>=7)w(p,1e7,0),r-=7;w(p,h(10,r,1),0),r=a-1;while(r>=23)b(p,1<<23),r-=23;b(p,1<<r),w(p,1,1),b(p,2),f=y(p)}else w(p,0,t),w(p,1<<-a,0),f=y(p)+d("0",l);return l>0?(i=f.length,f=u+(i<=l?"0."+d("0",l-i)+f:_(f,0,i-l)+"."+_(f,i-l))):f=u+f,f}})},c818:function(e,a,t){"use strict";t("234a")},f957:function(e,a,t){"use strict";t.d(a,"a",(function(){return r})),t.d(a,"b",(function(){return i})),t.d(a,"d",(function(){return s})),t.d(a,"c",(function(){return o})),t.d(a,"e",(function(){return n}));t("b680"),t("a9e3"),t("d3b7"),t("159b"),t("a15b");function r(e){var a=e.row,t=e.column;if(!(isNaN(a[t.property])||a[t.property]<0)){var r=a.raw_flowerdeep-a.surplus_flowerdeep-a.factory_flowerdeep-a.care_flowerdeep;if(!isNaN(r)){r<0&&(r=0),a.charge_flowerdeep=Number(r).toFixed(2);var i=a.mm_wearprice*a.charge_flowerdeep;a.wear_price=isNaN(i)?0:Number(i).toFixed(2)}}}function i(e){var a=e.row,t=e.column;isNaN(a[t.property]||a[t.property]<0)||(a.inflap_price=(Number(a.intube_price)+Number(a.flap_price)).toFixed(2))}var s={intube_price:0,flap_price:0,raw_flowerdeep:0,factory_flowerdeep:0,care_flowerdeep:0,edit:!0,charge_flowerdeep:"",symptom_id:"",goods_id:"",brand_id:"",brand_name:"",tire_check_status:"",company_status:"",tire_un:"",wear_price:"",surplus_flowerdeep:"",mm_wearprice:"",inflap_price:"",goods_price:0,discount_price:"",remark:"",warehouse_id:"",warehouse_name:"",allocation_name:"",allocation_id:""},o={instorage_goods_id:"",goods_tire_id:"",intube_price:0,flap_price:0,raw_flowerdeep:0,factory_flowerdeep:0,care_flowerdeep:0,edit:!0,charge_flowerdeep:0,symptom_id:"",goods_id:"",goods_name:"",brand_id:"",brand_name:"",tire_check_status:"",tire_check_status_name:"",company_status:"",tire_un:"",wear_price:0,surplus_flowerdeep:0,mm_wearprice:0,inflap_price:0,goods_price:0,discount_price:"",remark:"",warehouse_id:"",warehouse_name:"",allocation_name:"",allocation_id:""},n={data:function(){var e=this,a=this.$createElement;return{editRules:{goods_name:[{required:!0,message:"请选择商品"}],warehouse_name:[{required:!0,message:"请选择仓库"}],allocation_name:[{required:!0,message:"请选择货位"}],tire_un:[{required:!0,message:"请填写胎号"}],tire_check_status_name:[{required:!0,message:"请选择胎号校验状态"}],symptom_id:[{required:!0,message:"请选择病象"}],company_status_name:[{required:!0,message:"请选择公司鉴定结果"}],raw_flowerdeep:[{required:!0,message:"出厂花深必须大于等于0",type:"number",min:0}],surplus_flowerdeep:[{required:!0,message:"剩余花深必须大于等于0",type:"number",min:0}],mm_wearprice:[{required:!0,message:"毫米磨损费必须大于等于0",type:"number",min:0}],charge_flowerdeep:[{required:!0,message:"收费花深必须大于等于0"}],inflap_price:[{required:!0,message:"内垫费费必须大于等于0",type:"number",min:0}]},tableColumn:[{type:"checkbox",width:44},{title:"品牌名称",field:"brand_name",width:76},{title:"商品编号",field:"goods_id",width:80},{title:"商品名称",field:"goods_name",width:300,editRender:{name:"vGoods",getParams:function(a){var t=a.row;return{params:{company_id:e.params.company_id},showObj:{goods_id:"商品编号",goods_name:"商品名称"},getIcon:function(){return t.goods_name?[{icon:"el-icon-close",title:"删除商品",iconMethod:function(){for(var e in t)t[e]=""}}]:[]}}},events:{change:function(a,t){var r=t.row;r.goods_id=a.goods_id,r.brand_id=a.brand_id,r.brand_name=a.brand_name;var i=e.$refs.xTable._proxy("getTableData").fullData;i[i.length-1].goods_name&&e.addOrder()}}}},{field:"warehouse_name",title:"仓库名称",width:200,editRender:{name:"vSelect",getParams:function(){return{url:"getWarehouseFocus",params:{company_id:e.params.company_id},itemObj:{id:"warehouse_id",name:"warehouse_name"}}},events:{change:function(e){var a=e.row;a.allocation_name="",a.allocation_id=""}}}},{title:"货位名称",field:"allocation_name",width:130,editRender:{name:"vAllocation",getParams:function(a){var t=a.row;return{url:"newAllocationListList",isPage:!0,params:{company_id:e.params.company_id,warehouse_id:t.warehouse_id,goods_id:t.goods_id}}}}},{title:"胎号",field:"tire_un",width:132,editRender:{name:"Vinput",autoselect:!0,formatter:"String",events:{change:function(a){var t=a.row;console.log(t),t.tire_un&&e.$axMethod.getTireSalesPrice({tire_un:t.tire_un,goods_id:t.goods_id,type:7,customer_id:e.params.customer_id}).then((function(e){var a=e.data;200===a.code&&(t.goods_price=a.data.sales_price?a.data.sales_price:t.goods_price)}))}}}},{title:"胎号校验状态",field:"tire_check_status_name",width:160,editRender:{name:"vSelect",getParams:function(){return{modelKey:"tire_check_status",list:[{label:"匹配",value:1},{label:"不匹配",value:2}]}}}},{title:"病像",field:"symptom_id",width:200,editRender:{name:"vSelect",getParams:function(){return{itemObj:{id:"symptom_id",name:"symptom_name"},popperClass:"longSymptom",list:e.diseaseList,extendParams:{multiple:!0}}},slots:function(t){var r=t.row,i=[];return Array.isArray(r.symptom_id)&&e.diseaseList.forEach((function(e){r.symptom_id.forEach((function(a){e.symptom_id===a&&i.push(e.symptom_name)}))})),[a("span",[i.join(",")])]}}},{title:"公司鉴定结果",field:"company_status_name",width:140,editRender:{name:"vSelect",getParams:function(){return{modelKey:"company_status",list:[{label:"待厂检",value:1},{label:"理赔",value:2},{label:"不理赔",value:3}]}}}},{title:"出厂花深",field:"raw_flowerdeep",width:120,editRender:{name:"Vinput",autoselect:!0,formatter:"Positive",events:{input:this.computeDeep}}},{title:"剩余花深",field:"surplus_flowerdeep",width:120,editRender:{name:"Vinput",autoselect:!0,formatter:"Positive",events:{input:this.computeDeep}}},{title:"厂免花深",field:"factory_flowerdeep",width:120,editRender:{name:"Vinput",autoselect:!0,formatter:"Positive",events:{input:this.computeDeep}}},{title:"公司照顾花深",field:"care_flowerdeep",width:120,editRender:{name:"Vinput",autoselect:!0,formatter:"Positive",events:{input:this.computeDeep}}},{title:"收费花深",field:"charge_flowerdeep",width:120},{title:"毫米磨损费",field:"mm_wearprice",width:120,editRender:{name:"Vinput",formatter:"Positive",autoselect:!0,events:{input:this.computeDeep}}},{title:"磨损费",field:"wear_price",width:80,editRender:{formatter:"Positive",name:"Vinput",autoselect:!0}},{title:"内胎售价",field:"intube_price",width:120,editRender:{name:"Vinput",autoselect:!0,formatter:"Positive",events:{input:this.computePrice}}},{title:"垫带售价",field:"flap_price",width:104,editRender:{name:"Vinput",autoselect:!0,formatter:"Positive",events:{input:this.computePrice}}},{title:"内垫费",field:"inflap_price",width:104,editRender:{name:"Vinput",formatter:"Positive",autoselect:!0}},{title:"原销售价",field:"goods_price",width:104,editRender:{name:"Vinput",formatter:"Positive",autoselect:!0}},{title:"备注",field:"remark",width:200,editRender:{name:"Vinput",autoselect:!0,formatter:"String"}}]}},methods:{deletes:function(){this.$refs.xTable._proxy("getSelectRecords").length?this.$refs.xTable._proxy("removeSelecteds"):this.$message.warning("请先选择要删除的商品！"),0===this.$refs.xTable._proxy("getTableData").fullData.length&&(this.editType=0)},isEdit:function(e){var a=e.column,t=e.row;return"goods_name"!==a.property||this.params.customer_id?"allocation_name"!==a.property&&"warehouse_name"!==a.property||2!==this.editType?!("allocation_name"===a.property&&!t.warehouse_id)||(this.$message.warning("请先选择仓库"),!1):(this.$message.warning("引用单据不可编辑"),!1):(this.$message.warning("请先选择客户"),!1)},computeDeep:r,computePrice:i}}},f969:function(e,a,t){"use strict";var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[t("el-breadcrumb-item",[e._v("售后管理")]),t("el-breadcrumb-item",{staticClass:"attrbute"},[t("span",{on:{click:e.goBack}},[e._v("公司鉴定")])]),t("el-breadcrumb-item",[e._v(" "+e._s(1===e.type?"修改":2===e.type?"变更":3===e.type?"查看":"照顾")+" 公司鉴定单")])],1),t("div",{staticClass:"search_container"},[t("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.params}},[t("el-form-item",{attrs:{label:"销售组织:"}},[t("span",[e._v(e._s(e.params.company_name))])]),t("br"),t("el-form-item",{attrs:{label:"公司鉴定单据号:"}},[t("span",[e._v(e._s(e.params.company_appraisal_sn))])]),2===e.type?t("el-form-item",{attrs:{label:"审核状态:",size:"mini"}},[1==e.params.auditor_status?t("span",[e._v("未审核")]):e._e(),2==e.params.auditor_status?t("span",[e._v("已审核")]):e._e(),3==e.params.auditor_status?t("span",[e._v("作废")]):e._e()]):e._e(),t("el-form-item",{attrs:{label:"部门:",size:"mini"}},[t("span",[e._v(e._s(e.params.department_name))])])],1)],1),t("div",[t("div",{staticClass:"table_simulate"},[t("p",{staticClass:"title"},[e._v("公司鉴定单据信息 "+e._s(1===e.type?"修改":2===e.type?"变更":3===e.type?"查看":"照顾")+" ")]),t("el-form",{ref:"elForm",attrs:{inline:!0,"label-width":"100px",model:e.params,rules:e.rules}},[t("el-row",[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"业务日期",prop:"business_time",rules:e.rules.business_time}},[t("el-date-picker",{staticClass:"elInput wxy",attrs:{disabled:3===e.type,type:"date",placeholder:"选择日期","range-separator":"-","value-format":"yyyy-MM-dd"},model:{value:e.params.business_time,callback:function(a){e.$set(e.params,"business_time",a)},expression:"params.business_time"}})],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"质检员",prop:"inspector_id",rules:e.rules.employee_name}},[e._v(" "+e._s(function(){0==e.params.inspector_id&&(e.params.inspector_id=null)}())+" "),t("el-select",{attrs:{clearable:"",disabled:3===e.type},model:{value:e.params.inspector_id,callback:function(a){e.$set(e.params,"inspector_id",a)},expression:"params.inspector_id"}},e._l(e.employeeList,(function(e){return t("el-option",{key:e.employee_id,attrs:{label:e.employee_name,value:e.employee_id}})})),1)],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"客户名称"}},[e._v(" "+e._s(e.params.customer_name)+" ")])],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"品牌名称"}},[e._v(" "+e._s(e.params.brand_name)+" ")])],1)],1),t("el-row",[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"商品编号"}},[e._v(" "+e._s(e.params.goods_id)+" ")])],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"商品名称",title:e.params.goods_name}},[e._v(" "+e._s(e.params.goods_name)+" ")])],1)],1),3===e.type||1===e.type?t("el-row",[t("el-col",{attrs:{span:12}},[e.params.instorage_goods_id?t("el-form-item",{attrs:{label:"仓库名称"}},[e._v(" "+e._s(function(){0==e.params.warehouse_id&&(e.params.warehouse_id=null)}())+" "),t("el-select",{attrs:{clearable:"",disabled:3===e.type||e.params.instorage_goods_id,filterable:"",placeholder:"请选择"},on:{focus:e.warehouseInvok,change:e.warehouseChange},model:{value:e.params.warehouse_id,callback:function(a){e.$set(e.params,"warehouse_id",a)},expression:"params.warehouse_id"}},e._l(e.warehouseList,(function(e){return t("el-option",{key:e.warehouse_id,attrs:{label:e.warehouse_name,value:e.warehouse_id}})})),1)],1):t("el-form-item",{attrs:{label:"仓库名称",prop:"warehouse_id",rules:e.rules.warehouse_id}},[e._v(" "+e._s(function(){0==e.params.warehouse_id&&(e.params.warehouse_id=null)}())+" "),t("el-select",{attrs:{clearable:"",disabled:3===e.type||e.params.instorage_goods_id,filterable:"",placeholder:"请选择"},on:{focus:e.warehouseInvok,change:e.warehouseChange},model:{value:e.params.warehouse_id,callback:function(a){e.$set(e.params,"warehouse_id",a)},expression:"params.warehouse_id"}},e._l(e.warehouseList,(function(e){return t("el-option",{key:e.warehouse_id,attrs:{label:e.warehouse_name,value:e.warehouse_id}})})),1)],1)],1),t("el-col",{attrs:{span:12}},[e.params.instorage_goods_id?t("el-form-item",{attrs:{label:"货位名称"}},[e._v(" "+e._s(function(){0==e.params.allocation_id&&(e.params.allocation_id=null)}())+" "),t("el-select",{attrs:{clearable:"",disabled:3===e.type||e.params.instorage_goods_id,filterable:"",placeholder:"请选择"},on:{focus:e.InventoryInvok},model:{value:e.params.allocation_id,callback:function(a){e.$set(e.params,"allocation_id",a)},expression:"params.allocation_id"}},e._l(e.allocationInventoryList,(function(e){return t("el-option",{key:e.allocation_id,attrs:{label:e.allocation_name,value:e.allocation_id}})})),1)],1):t("el-form-item",{attrs:{label:"货位名称",prop:"allocation_id",rules:e.rules.allocation_id}},[e._v(" "+e._s(function(){0==e.params.allocation_id&&(e.params.allocation_id=null)}())+" "),t("el-select",{attrs:{clearable:"",disabled:3===e.type||e.params.instorage_goods_id,filterable:"",placeholder:"请选择"},on:{focus:e.InventoryInvok},model:{value:e.params.allocation_id,callback:function(a){e.$set(e.params,"allocation_id",a)},expression:"params.allocation_id"}},e._l(e.allocationInventoryList,(function(e){return t("el-option",{key:e.allocation_id,attrs:{label:e.allocation_name,value:e.allocation_id}})})),1)],1)],1)],1):e._e(),t("el-row",[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"胎号校验状态",prop:"tire_check_status"}},[e._v(" "+e._s(e.params.tire_check_status_name)+" ")])],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"胎号"}},[e._v(" "+e._s(e.params.tire_un)+" ")])],1)],1),t("el-row",[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"病象",prop:"symptom_id",rules:{required:!0,message:"请选择病象",trigger:"change"}}},[t("el-select",{attrs:{multiple:"",disabled:3===e.type||4===e.type,"collapse-tags":"",placeholder:"请输入"},model:{value:e.params.symptom_id,callback:function(a){e.$set(e.params,"symptom_id",a)},expression:"params.symptom_id"}},e._l(e.diseaseList,(function(e){return t("el-option",{key:e.symptom_id,attrs:{label:e.symptom_name,value:e.symptom_id}})})),1)],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"公司鉴定结果",prop:"company_status",rules:{required:!0,message:"请选择公司鉴定结果",trigger:"change"}}},[t("el-select",{attrs:{clearable:"",disabled:3===e.type||4===e.type},model:{value:e.params.company_status,callback:function(a){e.$set(e.params,"company_status",a)},expression:"params.company_status"}},[t("el-option",{attrs:{label:"待厂检",value:1}},[e._v("待厂检")]),t("el-option",{attrs:{label:"理赔",value:2}},[e._v("理赔")]),t("el-option",{attrs:{label:"不理赔",value:3}},[e._v("不理赔")])],1)],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"出厂花深"}},[e._v(" "+e._s(e.params.raw_flowerdeep)+" ")])],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"剩余花深",prop:"surplus_flowerdeep",rules:{required:!0,validator:function(a,t,r){return e.checkPositive(a,t,r,"剩余花深")},trigger:"change"}}},[t("el-input",{attrs:{type:"text",disabled:3===e.type},on:{input:function(a){return e.computeDeep("surplus_flowerdeep")},change:function(a){return e.changeComputeDeep(e.params,"surplus_flowerdeep")}},model:{value:e.params.surplus_flowerdeep,callback:function(a){e.$set(e.params,"surplus_flowerdeep",a)},expression:"params.surplus_flowerdeep"}})],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"厂免花深",prop:"factory_flowerdeep",rules:{validator:function(a,t,r){return e.checkPositive(a,t,r,"厂免花深")},trigger:"change"}}},[t("el-input",{attrs:{type:"text",disabled:3===e.type},on:{input:function(a){return e.computeDeep("factory_flowerdeep")},change:function(a){return e.changeComputeDeep(e.params,"factory_flowerdeep")}},model:{value:e.params.factory_flowerdeep,callback:function(a){e.$set(e.params,"factory_flowerdeep",a)},expression:"params.factory_flowerdeep"}})],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"公司照顾花深",prop:"care_flowerdeep",rules:{validator:function(a,t,r){return e.checkPositive(a,t,r,"公司照顾花深")},trigger:"change"}}},[t("el-input",{attrs:{type:"text",disabled:3===e.type},on:{input:function(a){return e.computeDeep("care_flowerdeep")},change:function(a){return e.changeComputeDeep(e.params,"care_flowerdeep")}},model:{value:e.params.care_flowerdeep,callback:function(a){e.$set(e.params,"care_flowerdeep",a)},expression:"params.care_flowerdeep"}})],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"收费花深",prop:"charge_flowerdeep",rules:{validator:function(a,t,r){return e.checkPositive(a,t,r,"收费花深")},trigger:"change"}}},[t("span",[e._v(e._s(e.params.charge_flowerdeep))])])],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"毫米磨损费",prop:"mm_wearprice",rules:{required:!0,validator:function(a,t,r){return e.checkPositive(a,t,r,"毫米磨损")},trigger:"change"}}},[t("el-input",{attrs:{type:"text",disabled:3===e.type},on:{input:function(a){return e.computeDeep("mm_wearprice")},change:function(a){return e.changeComputeDeep(e.params,"mm_wearprice")}},model:{value:e.params.mm_wearprice,callback:function(a){e.$set(e.params,"mm_wearprice",a)},expression:"params.mm_wearprice"}})],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"磨损费",prop:"wear_price",rules:{validator:function(a,t,r){return e.checkPositive(a,t,r,"磨损费")},trigger:"blur"}}},[t("el-input",{attrs:{type:"text",disabled:3===e.type},on:{change:function(a){return e.$publicFution.toFixedTwo(e.params,"wear_price")}},model:{value:e.params.wear_price,callback:function(a){e.$set(e.params,"wear_price",a)},expression:"params.wear_price"}})],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"内胎售价",prop:"intube_price",rules:{validator:function(a,t,r){return e.checkPositive(a,t,r,"内胎售价")},trigger:"change"}}},[t("el-input",{attrs:{type:"text",disabled:3===e.type},on:{input:function(a){return e.computePrice("intube_price")},change:function(a){return e.changeComputePrice(e.params,"intube_price")}},model:{value:e.params.intube_price,callback:function(a){e.$set(e.params,"intube_price",a)},expression:"params.intube_price"}})],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"垫带售价",prop:"flap_price",rules:{validator:function(a,t,r){return e.checkPositive(a,t,r,"垫带售价")},trigger:"change"}}},[t("el-input",{attrs:{type:"text",disabled:3===e.type},on:{input:function(a){return e.computePrice("flap_price")},change:function(a){return e.changeComputePrice(e.params,"flap_price")}},model:{value:e.params.flap_price,callback:function(a){e.$set(e.params,"flap_price",a)},expression:"params.flap_price"}})],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"内垫费",prop:"inflap_price",rules:{validator:function(a,t,r){return e.checkPositive(a,t,r,"内垫费")},trigger:"change"}}},[t("el-input",{attrs:{type:"text",disabled:3===e.type},model:{value:e.params.inflap_price,callback:function(a){e.$set(e.params,"inflap_price",a)},expression:"params.inflap_price"}})],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"原销售价",prop:"goods_price",rules:{validator:function(a,t,r){return e.checkPositive(a,t,r,"原销售价")},trigger:"change"}}},[t("el-input",{attrs:{type:"text",disabled:3===e.type},on:{change:function(a){return e.$publicFution.toFixedTwo(e.params,"goods_price")}},model:{value:e.params.goods_price,callback:function(a){e.$set(e.params,"goods_price",a)},expression:"params.goods_price"}})],1)],1),t("el-col",{attrs:{span:24}},[t("el-form-item",{staticClass:"lang",attrs:{label:"备注"}},[t("el-input",{staticStyle:{width:"100%"},attrs:{type:"textarea",disabled:3===e.type,rows:2},model:{value:e.params.remark,callback:function(a){e.$set(e.params,"remark",a)},expression:"params.remark"}})],1)],1)],1)],1)],1),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{plain:"",size:"mini"},on:{click:e.goBack}},[e._v("取消")]),3!==e.type?t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.submit}},[e._v("保存")]):e._e(),1==e.params.auditor_status&&3===e.type?[1==e.authority.b_pass?t("el-button",{attrs:{type:"primary"},on:{click:function(a){return e.audit("auditorPassCompanyAppraisal")}}},[e._v("审核")]):e._e(),1==e.authority.b_invalid?t("el-button",{on:{click:function(a){return e.audit("auditorInvalidCompanyAppraisal")}}},[e._v("作废")]):e._e()]:e._e()],2)])],1)},i=[],s=(t("a9e3"),t("b680"),t("a15b"),t("4de4"),t("d3b7"),t("159b"),t("ac1f"),t("1276"),t("f957")),o={name:"aftersaleCompanyModification",data:function(){return{authority:{},TableData:{info_data:{},list:[]},timeValue:[],params:{symptom_id:[]},register_id:null}},props:["type"],methods:{checkPositive:function(e,a,t,r){var i=isNaN(Number(a))?0:Number(a).toFixed(2);(isNaN(Number(a))||i<0)&&t(new Error(r+"必须是大于等于0的数字")),t()},changeComputeDeep:function(e,a){this.$publicFution.toFixedTwo(e,a),this.computeDeep(a)},computeDeep:function(e){Object(s["a"])({row:this.params,column:{property:e}})},changeComputePrice:function(e,a){this.$publicFution.toFixedTwo(e,a),this.computePrice(a)},computePrice:function(e){Object(s["b"])({row:this.params,column:{property:e}})},warehouseChange:function(){this.$set(this.params,"allocation_id",null),this.$set(this.params,"allocation_name",null)},goBack:function(){this.$router.push({path:"/aftersale/companyjudgement"})},audit:function(e){var a=this;this.$axMethod[e]({company_appraisal_goods_id:this.orderId}).then((function(e){200==e.data.code&&(a.$message({message:e.data.msg?e.data.msg:e.data.data,type:"success"}),a.goBack())}))},submit:function(){var e=this;this.$refs.elForm.validate((function(a){if(a){var t=e.$publicFution.deepCopy(e.params);t.symptom_id=Array.isArray(t.symptom_id)?t.symptom_id.join(","):t.symptom_id;var r,i={company_appraisal_goods_id:t.company_appraisal_goods_id,business_time:t.business_time,company_id:t.company_id,inspector_id:t.inspector_id};Object.assign(i,e.$publicFution.filter(s["d"],t)),1===e.type?r="editCompanyAppraisal":2===e.type?r="DataChangesCompanyAppraisal":4===e.type&&(r="CareCompanyAppraisal"),e.$axMethod[r](i).then((function(a){200==a.data.code&&(e.$message({message:a.data.msg?a.data.msg:a.data.data,type:"success"}),e.goBack())}))}}))}},created:function(){var e=this;this.EmployeeListInvok(),this.getNEwlist(),this.$route.query&&this.$route.query.id&&(this.orderId=this.$route.query.id,this.$axMethod.infoCompanyAppraisal({company_appraisal_goods_id:this.orderId}).then((function(a){e.params=a.data.data,e.params.company_appraisal_goods_id=e.orderId;var t=[];String(a.data.data.symptom_id).split(",").forEach((function(e){t.push(Number(e))})),e.warehouseList=[{warehouse_name:e.params.warehouse_name,warehouse_id:e.params.warehouse_id}],e.allocationInventoryList=[{allocation_name:e.params.allocation_name,allocation_id:e.params.allocation_id}],e.params.symptom_id=t})))}},n=o,l=(t("c818"),t("2877")),p=Object(l["a"])(n,r,i,!1,null,"6f7c7666",null);a["a"]=p.exports}}]);
//# sourceMappingURL=chunk-2823a10e.5c70f8b7.js.map