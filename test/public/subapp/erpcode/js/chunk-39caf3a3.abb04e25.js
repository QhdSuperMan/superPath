(window["webpackJsonp_erpcode"]=window["webpackJsonp_erpcode"]||[]).push([["chunk-39caf3a3"],{"10dc":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",[e._v("售后管理")]),a("el-breadcrumb-item",{staticClass:"attrbute"},[a("span",{on:{click:e.goBack}},[e._v("公司理赔")])]),a("el-breadcrumb-item",[e._v("新增公司理赔")])],1),a("div",{staticClass:"search_container"},[a("el-form",{ref:"addFormInline",staticClass:"demo-form-inline",attrs:{inline:!0,model:e.params}},[a("el-form-item",{attrs:{label:"销售组织",size:"mini",rules:e.rules.company_id,prop:"company_id"}},[a("el-select",{attrs:{placeholder:"请选择",filterable:""},on:{change:e.companyChange,focus:e.companyListInvok},model:{value:e.params.company_id,callback:function(t){e.$set(e.params,"company_id",t)},expression:"params.company_id"}},e._l(e.companyList,(function(t){return a("el-option",{key:t.company_id,attrs:{label:t.company_name,value:t.company_id}},[a("span",{class:1==t.type?"optionStyle":""},[e._v(e._s(t.company_name))])])})),1)],1),a("el-form-item",{attrs:{label:"客户名称",rules:e.rules.customer_name,size:"mini",prop:"customer_id"}},[a("el-select",{attrs:{filterable:"",placeholder:"请输入",loading:e.loading,remote:"","remote-method":function(t){e.clienteleListInvok(t)}},on:{focus:e.clienteleListInvok,change:e.customerChange},model:{value:e.params.customer_id,callback:function(t){e.$set(e.params,"customer_id",t)},expression:"params.customer_id"}},[a("ul",{staticClass:"customer customer-ul4 customer-ul2"},[a("li",[e._v("客户名称")]),a("li",[e._v("联系人")]),a("li",[e._v("联系电话")]),a("li",[e._v("区域")])]),e._l(e.customerList,(function(t){return a("el-option",{key:t.customer_id,attrs:{label:t.customer_name,value:t.customer_id}},[a("ul",{staticClass:"customer customer-ul4"},[a("li",{attrs:{title:t.customer_name}},[e._v(e._s(t.customer_name))]),a("li",{attrs:{title:t.contact_name}},[e._v(e._s(t.contact_name))]),a("li",{attrs:{title:t.customer_mobile}},[e._v(e._s(t.customer_mobile))]),a("li",{attrs:{title:t.address}},[e._v(e._s(t.address))])])])}))],2)],1),a("el-form-item",{attrs:{label:"业务日期",size:"mini",rules:e.rules.business_time,prop:"business_time"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期","range-separator":"-","value-format":"yyyy-MM-dd"},model:{value:e.params.business_time,callback:function(t){e.$set(e.params,"business_time",t)},expression:"params.business_time"}})],1),a("el-form-item",{attrs:{label:"部门",size:"mini"}},[e._v(" "+e._s(function(){0==e.params.department_id&&(e.params.department_id=null)}())+" "),a("el-select",{attrs:{clearable:"",placeholder:"请选择",filterable:""},on:{focus:e.DepartmentListInvok},model:{value:e.params.department_id,callback:function(t){e.$set(e.params,"department_id",t)},expression:"params.department_id"}},e._l(e.departmentList,(function(e){return a("el-option",{key:e.department_id,attrs:{label:e.department_name,value:e.department_id}})})),1)],1),a("el-form-item",{attrs:{label:"质检员",rules:e.rules.employee_name,prop:"inspector_id",size:"mini"}},[a("el-select",{attrs:{clearable:"",placeholder:"请选择",filterable:""},on:{focus:e.EmployeeListInvok},model:{value:e.params.inspector_id,callback:function(t){e.$set(e.params,"inspector_id",t)},expression:"params.inspector_id"}},e._l(e.employeeList,(function(e){return a("el-option",{key:e.employee_id,attrs:{label:e.employee_name,value:e.employee_id}})})),1)],1)],1)],1),a("div",{staticClass:"add_delet"},[a("el-button",{staticClass:"addBtn",attrs:{icon:"el-icon-circle-plus-outline",type:"primary",size:"mini"},on:{click:e.quoteOrder}},[e._v("引用单据")]),a("el-button",{staticClass:"addBtn",attrs:{icon:"el-icon-circle-plus-outline",type:"primary",disabled:1===e.editType,size:"mini"},on:{click:e.addOrder}},[e._v("增行")]),a("el-button",{attrs:{plain:"",icon:"el-icon-delete",size:"mini"},on:{click:e.deletes}},[e._v("删行")])],1),a("div",{staticClass:"table_container"},[a("xTable",{ref:"xTable",attrs:{"edit-rules":e.editRules,isEdit:e.isEdit,tableColumn:e.tableColumn}})],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){return e.goBack()}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submit("params")}}},[e._v("确 定")])],1),e.salesDocumentsVisible?a("appraisalDialog",{attrs:{searchParams:e.params},on:{sumbitData:e.getSumbitData,close:function(t){e.salesDocumentsVisible=!1}}}):e._e()],1)},s=[],r=(a("4de4"),a("d3b7"),a("d81d"),a("ac1f"),a("1276"),a("a9e3"),a("a15b"),a("e9c4"),a("caad"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-dialog",{staticClass:"dialogForm",attrs:{"close-on-click-modal":!1,title:"引用公司鉴定单据",visible:!0,width:"1300px"},on:{close:e.close}},[a("div",{staticClass:"search_container"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.params}},[a("el-form-item",{attrs:{label:"审核状态",size:"mini"}},[a("span",[e._v("已审核")])]),a("br"),a("el-form-item",{attrs:{label:"业务日期",size:"mini"}},[a("el-date-picker",{attrs:{type:"daterange","range-separator":"-","value-format":"yyyy-MM-dd","start-placeholder":"开始日期","end-placeholder":"结束日期",clearable:""},model:{value:e.timeValue,callback:function(t){e.timeValue=t},expression:"timeValue"}})],1),a("el-form-item",{attrs:{label:"客户名称",size:"mini"}},[a("el-select",{attrs:{filterable:"",placeholder:"请输入",loading:e.loading,remote:"","remote-method":e.clienteleListInvok},on:{focus:e.clienteleListInvok},model:{value:e.params.customer_id,callback:function(t){e.$set(e.params,"customer_id",t)},expression:"params.customer_id"}},[a("ul",{staticClass:"customer customer-ul4 customer-ul2"},[a("li",[e._v("客户编号")]),a("li",[e._v("客户名称")]),a("li",[e._v("联系人")]),a("li",[e._v("联系电话")]),a("li",[e._v("区域")])]),e._l(e.customerList,(function(t){return a("el-option",{key:t.customer_id,attrs:{label:t.customer_name,value:t.customer_id}},[a("ul",{staticClass:"customer customer-ul4"},[a("li",{attrs:{title:t.customer_id}},[e._v(e._s(t.customer_id))]),a("li",{attrs:{title:t.customer_name}},[e._v(e._s(t.customer_name))]),a("li",{attrs:{title:t.contact_name}},[e._v(e._s(t.contact_name))]),a("li",{attrs:{title:t.customer_mobile}},[e._v(e._s(t.customer_mobile))]),a("li",[e._v(e._s(t.province_name)+"/"+e._s(t.city_name)+"/"+e._s(t.area_name))])])])}))],2)],1),a("el-form-item",{attrs:{label:"胎号",size:"mini"}},[a("el-input",{staticClass:"shortSearchInput",attrs:{clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onSearch(1)}},model:{value:e.params.tire_un,callback:function(t){e.$set(e.params,"tire_un",t)},expression:"params.tire_un"}})],1),a("el-form-item",{attrs:{label:"商品名称",size:"mini"}},[a("el-input",{staticClass:"shortSearchInput",attrs:{clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onSearch(1)}},model:{value:e.params.goods_name,callback:function(t){e.$set(e.params,"goods_name",t)},expression:"params.goods_name"}})],1),a("el-form-item",{attrs:{label:"公司鉴定单据号",size:"mini"}},[a("el-input",{staticClass:"shortSearchInput",attrs:{clearable:"",placeholder:"请输入"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onSearch(1)}},model:{value:e.params.company_appraisal_sn,callback:function(t){e.$set(e.params,"company_appraisal_sn",t)},expression:"params.company_appraisal_sn"}})],1),a("el-form-item",{attrs:{label:"公司鉴定结果",size:"mini"}},[a("el-select",{attrs:{clearable:""},model:{value:e.params.company_status,callback:function(t){e.$set(e.params,"company_status",t)},expression:"params.company_status"}},[a("el-option",{attrs:{label:"待厂检",value:1}},[e._v("待厂检")]),a("el-option",{attrs:{label:"理赔",value:2}},[e._v("理赔")])],1)],1),a("el-form-item",{staticClass:"search-style search",attrs:{size:"mini"}},[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:e.onSearch}},[e._v("查询")]),a("el-button",{attrs:{plain:"",size:"mini"},on:{click:e.onReset}},[e._v("重置")])],1)],1)],1),a("xTable",{ref:"xTable",attrs:{ajax:{url:"getAuthenticateList",params:e.params},tableColumn:e.tableColumn},on:{selectChange:e.selectChange}}),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.close}},[e._v("取 消")]),a("el-button",{staticClass:"tx",attrs:{type:"primary"},on:{click:function(t){return e.dialogSubmitForm()}}},[e._v("确 定")])],1)],1)],1)}),n=[],o=a("e87e"),l={data:function(){return{footerData:{},tableColumn:[{type:"checkbox",width:44,fixed:"left"},{title:"公司鉴定单据号",field:"company_appraisal_sn",width:180},{title:"品牌名称",field:"brand_name",width:150},{title:"商品编号",field:"goods_id",width:80},{title:"商品名称",field:"goods_name",width:400},{title:"客户名称",field:"customer_name",width:120},{title:"胎号",field:"tire_un",width:104},{title:"病象",field:"symptom_name_str",width:200},{title:"公司鉴定结果",field:"company_status_name",width:120},{title:"磨损费",field:"wear_price",formatter:"priceFormatNone",headerAlign:"right",align:"right",width:100},{title:"内垫费",field:"inflap_price",formatter:"priceFormat",headerAlign:"right",align:"right",width:100},{title:"最新销售价",field:"new_goods_price",formatter:"priceFormat",headerAlign:"right",align:"right",width:100},{title:"业务日期",field:"business_time",width:140},{title:"单据时间",field:"add_time",width:160}]}}},m={mixins:[l],data:function(){return{authority:{},paramsModule:{company_status:2},params:{},loading:!1,timeValue:[]}},props:["searchParams"],methods:{onSearch:function(e){this.timeValue&&2==this.timeValue.length?(this.params.start_time=this.timeValue[0],this.params.end_time=this.timeValue[1]):this.params.start_time=this.params.end_time="",this.$refs.xTable._getData(e)},onReset:function(){this.params=Object.assign({},this.paramsModule),this.onSearch(1)},close:function(){this.$emit("close")},selectChange:function(e){this.multipleSelection=e.selection},dialogSubmitForm:function(){var e=this,t=[];for(var a in this.multipleSelection)t.push(this.multipleSelection[a].company_appraisal_goods_id);0!==t.length?this.$axios({method:"post",url:o["a"].claimCompanyList,data:{company_appraisal_goods_id:t.join(",")}}).then((function(t){200==t.data.code&&e.$emit("sumbitData",{customerList:{customer_id:t.data.data.data[0].customer_id,customer_name:t.data.data.data[0].customer_name,contact_name:"",customer_mobile:"",address:""},goods_info:t.data.data.data})})).catch((function(){e.$emit("sumbitData",{})})):this.$message.warning("请选择单据！")}},created:function(){this.params=Object.assign({},this.paramsModule,{customer_id:this.searchParams.customer_id}),this.$set(this,"customerList",[{customer_id:this.searchParams.customer_id,customer_name:this.searchParams.customer_name}])}},c=m,d=a("2877"),u=Object(d["a"])(c,r,n,!1,null,null,null),p=u.exports,_=a("65b0"),f=a("b686"),h={name:"aftersaleCompanyclaimAdd",mixins:[f["d"]],data:function(){return{customer:{options:[]},getEmployeeList:{options:[]},loading:!1,editType:2,params:{},salesDocumentsVisible:!1}},components:{appraisalDialog:p},methods:{customerChange:function(e){this.$set(this.params,"customer_name",this.customerList.filter((function(t){return t.customer_id==e}))[0].customer_name)},getSumbitData:function(e){var t=this;this.customerList=[e.customerList],this.editType=1,this.salesDocumentsVisible=!1,this.$refs.xTable._proxy("loadData",e.goods_info.map((function(e){e.intube_price=e.inflap_price,e.abrasion_price=e.wear_price;var a=e.symptom_id_str&&e.symptom_id_str.split(",");e.symptom_id=a.map((function(e){return Number(e)})),e.tire_check_status=Number(e.tire_check_status),e.company_status=Number(e.company_status);var i=t.$publicFution.filter(f["c"],e);return i})))},addOrder:function(e){this.params.customer_id||!0===e?(this.editType=2,this.$refs.xTable._proxy("insertAt",this.$publicFution.deepCopy(f["c"]),-1)):this.$message({message:"请先选择客户名称",type:"warning"})},companyChange:function(){this.$refs.xTable._proxy("loadData",[]),this.$set(this.params,"department_id",null),this.$set(this.params,"customer_id",null)},goBack:function(){this.$publicFution.goPage(),this.$router.push({path:"/aftersale/companyclaim"})},quoteOrder:function(){this.params.customer_id?this.salesDocumentsVisible=!0:this.$message({message:"请先选择客户名称",type:"warning"})},submit:function(){var e=this,t=this.$publicFution.deepCopy(this.$refs.xTable._proxy("getTableData").fullData);t.length&&!t[t.length-1].goods_name&&t.pop(),0!==t.length?(this.$refs.xTable._proxy("loadData",this.$publicFution.deepCopy(t)),this.$refs["addFormInline"].validate((function(a){a&&e.$refs.xTable._proxy("validate").then((function(){var a=e.$publicFution.deepCopy(e.params),i=t.map((function(e){return e.symptom_id=e.symptom_id.join(","),e}));a.goods_json=JSON.stringify(i),e.$axMethod.addClaim(a).then((function(t){200==t.data.code&&(e.$message({message:t.data.msg?t.data.msg:t.data.data,type:"success"}),e.goBack())}))}))}))):this.$message.warning("请完善表格数据")}},mounted:function(){this.getNEwlist();var e=localStorage,t=e.employee_id,a=e.company_admin_id;[0,1,2].includes(Number(t))||a>0?this.$set(this,"params",{business_time:this.$publicFution.formatData(new Date),company_id:Number(localStorage.company_id)}):this.$set(this,"params",{business_time:this.$publicFution.formatData(new Date),company_id:Number(localStorage.company_id),inspector_id:Number(localStorage.employee_id),department_id:Number(localStorage.department_id)}),this.addOrder(!0),Object(_["l"])(this,localStorage)}},b=h,y=(a("4e824"),Object(d["a"])(b,i,s,!1,null,"5168c50c",null));t["default"]=y.exports},"4e824":function(e,t,a){"use strict";a("be75")},b680:function(e,t,a){"use strict";var i=a("23e7"),s=a("da84"),r=a("e330"),n=a("5926"),o=a("408a"),l=a("1148"),m=a("d039"),c=s.RangeError,d=s.String,u=Math.floor,p=r(l),_=r("".slice),f=r(1..toFixed),h=function(e,t,a){return 0===t?a:t%2===1?h(e,t-1,a*e):h(e*e,t/2,a)},b=function(e){var t=0,a=e;while(a>=4096)t+=12,a/=4096;while(a>=2)t+=1,a/=2;return t},y=function(e,t,a){var i=-1,s=a;while(++i<6)s+=t*e[i],e[i]=s%1e7,s=u(s/1e7)},g=function(e,t){var a=6,i=0;while(--a>=0)i+=e[a],e[a]=u(i/t),i=i%t*1e7},v=function(e){var t=6,a="";while(--t>=0)if(""!==a||0===t||0!==e[t]){var i=d(e[t]);a=""===a?i:a+p("0",7-i.length)+i}return a},w=m((function(){return"0.000"!==f(8e-5,3)||"1"!==f(.9,0)||"1.25"!==f(1.255,2)||"1000000000000000128"!==f(0xde0b6b3a7640080,0)}))||!m((function(){f({})}));i({target:"Number",proto:!0,forced:w},{toFixed:function(e){var t,a,i,s,r=o(this),l=n(e),m=[0,0,0,0,0,0],u="",f="0";if(l<0||l>20)throw c("Incorrect fraction digits");if(r!=r)return"NaN";if(r<=-1e21||r>=1e21)return d(r);if(r<0&&(u="-",r=-r),r>1e-21)if(t=b(r*h(2,69,1))-69,a=t<0?r*h(2,-t,1):r/h(2,t,1),a*=4503599627370496,t=52-t,t>0){y(m,0,a),i=l;while(i>=7)y(m,1e7,0),i-=7;y(m,h(10,i,1),0),i=t-1;while(i>=23)g(m,1<<23),i-=23;g(m,1<<i),y(m,1,1),g(m,2),f=v(m)}else y(m,0,a),y(m,1<<-t,0),f=v(m)+p("0",l);return l>0?(s=f.length,f=u+(s<=l?"0."+p("0",l-s)+f:_(f,0,s-l)+"."+_(f,s-l))):f=u+f,f}})},b686:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return s})),a.d(t,"c",(function(){return r})),a.d(t,"d",(function(){return n}));a("b680"),a("a9e3"),a("d3b7"),a("159b"),a("a15b");function i(e){var t=e.row,a=e.column;if(!isNaN(t[a.property]||t[a.property]<0)){var i=t.new_goods_price-t.abrasion_price-t.intube_price;i<0||isNaN(i)?t.claim_price=0:t.claim_price=Number(i).toFixed(2)}}function s(e){var t=e.row,a=e.column;if(isNaN(t[a.property]||t[a.property]<0))t[a.property]=0;else{var s=t.raw_flowerdeep-t.surplus_flowerdeep-t.factory_flowerdeep-t.care_flowerdeep;if(s<0||isNaN(s))t.charge_flowerdeep=0;else{t.charge_flowerdeep=Number(s).toFixed(2);var r=t.mm_wearprice*t.charge_flowerdeep;t.abrasion_price=isNaN(r)?0:Number(r).toFixed(2),i(e)}}}var r={company_appraisal_sn:"",company_appraisal_goods_id:0,flap_price:0,raw_flowerdeep:0,factory_flowerdeep:0,care_flowerdeep:0,charge_flowerdeep:0,symptom_id:"",goods_id:"",goods_name:"",brand_id:"",brand_name:"",tire_check_status:"",company_status:"",claim_price:0,tire_un:"",abrasion_price:0,surplus_flowerdeep:0,new_goods_price:0,mm_wearprice:0,intube_price:0,remark:"",warehouse_id:"",warehouse_name:"",allocation_name:"",allocation_id:""},n={data:function(){var e=this,t=this.$createElement;return{editRules:{goods_name:[{required:!0,message:"请选择商品"}],warehouse_name:[{required:!0,message:"请选择仓库"}],allocation_name:[{required:!0,message:"请选择货位"}],tire_un:[{required:!0,message:"请填写胎号"}],tire_check_status_name:[{required:!0,message:"请选择胎号校验状态"}],symptom_id:[{required:!0,message:"请选择病象"}],company_status_name:[{required:!0,message:"请选择公司鉴定结果"}],raw_flowerdeep:[{required:!0,message:"出厂花深请在0-99999999之间",type:"number",min:0,max:99999999}],surplus_flowerdeep:[{required:!0,message:"剩余花深请在0-99999999之间",type:"number",min:0,max:99999999}],mm_wearprice:[{required:!0,message:"毫米磨损费请在0-99999999之间",type:"number",min:0,max:99999999}],new_goods_price:[{required:!0,message:"最新销售价请在0-99999999之间",type:"number",min:0,max:99999999}],claim_price:[{required:!0,message:"理赔单价请在0-99999999之间",type:"number",min:0,max:99999999}]},tableColumn:[{type:"checkbox",width:44},{title:"品牌名称",field:"brand_name",width:76},{title:"商品编号",field:"goods_id",width:80},{title:"商品名称",field:"goods_name",width:400,editRender:{name:"vGoods",getParams:function(t){var a=t.row;return{params:{company_id:e.params.company_id},showObj:{goods_id:"商品编号",goods_name:"商品名称"},getIcon:function(){return a.goods_name?[{icon:"el-icon-close",title:"删除商品",iconMethod:function(){for(var e in a)a[e]=""}}]:[]}}},events:{change:function(t,a){var i=a.row;i.goods_id=t.goods_id,i.goods_sn=t.goods_sn,i.brand_id=t.brand_id,i.brand_name=t.brand_name,i.company_status=t.company_status,i.goods_id=t.goods_id;var s=e.$refs.xTable._proxy("getTableData").fullData;s[s.length-1].goods_name&&e.addOrder()}}}},{field:"warehouse_name",title:"仓库名称",width:200,editRender:{name:"vSelect",getParams:function(t){t.row;return{url:"getWarehouseFocus",params:{company_id:e.params.company_id,warehouse_type_id:10004},itemObj:{id:"warehouse_id",name:"warehouse_name"}}},events:{change:function(e,t){var a=e.row;a.allocation_name="",a.allocation_id=""}}}},{title:"货位名称",field:"allocation_name",width:130,editRender:{name:"vAllocation",getParams:function(t){var a=t.row;return{url:"newAllocationListList",isPage:!0,params:{company_id:e.params.company_id,warehouse_id:a.warehouse_id,goods_id:a.goods_id}}}}},{title:"胎号",field:"tire_un",width:132,editRender:{name:"Vinput",autoselect:!0,formatter:"String"}},{title:"胎号校验状态",field:"tire_check_status_name",width:140,editRender:{name:"vSelect",getParams:function(e){e.row;return{modelKey:"tire_check_status",list:[{label:"匹配",value:1},{label:"不匹配",value:2}]}}}},{title:"病像",field:"symptom_id",width:200,editRender:{name:"vSelect",getParams:function(t){t.row;return{itemObj:{id:"symptom_id",name:"symptom_name"},popperClass:"longSymptom",list:e.diseaseList,extendParams:{multiple:!0}}},slots:function(a){var i=a.row,s=[];return Array.isArray(i.symptom_id)&&e.diseaseList.forEach((function(e){i.symptom_id.forEach((function(t){Number(e.symptom_id)===Number(t)&&s.push(e.symptom_name)}))})),[t("span",[s.join(",")])]}}},{title:"公司鉴定结果",field:"company_status_name",width:140,editRender:{name:"vSelect",getParams:function(e){e.row;return{modelKey:"company_status",list:[{label:"待厂检",value:1},{label:"理赔",value:2},{label:"不理赔",value:3}]}}}},{title:"出厂花深",field:"raw_flowerdeep",width:120,editRender:{name:"Vinput",autoselect:!0,events:{input:s}}},{title:"剩余花深",field:"surplus_flowerdeep",width:120,editRender:{name:"Vinput",autoselect:!0,events:{input:s}}},{title:"厂免花深",field:"factory_flowerdeep",width:120,editRender:{name:"Vinput",autoselect:!0,events:{input:s}}},{title:"公司照顾花深",field:"care_flowerdeep",width:120,editRender:{name:"Vinput",autoselect:!0,events:{input:s}}},{title:"收费花深",field:"charge_flowerdeep",width:120},{title:"毫米磨损费",field:"mm_wearprice",width:120,editRender:{name:"Vinput",autoselect:!0,events:{input:s}}},{title:"磨损费",field:"abrasion_price",width:120,editRender:{name:"Vinput",autoselect:!0,events:{input:i}}},{title:"内垫费",field:"intube_price",width:120,editRender:{name:"Vinput",autoselect:!0,events:{input:i}}},{title:"最新销售价",field:"new_goods_price",width:120,editRender:{name:"Vinput",autoselect:!0,events:{input:i}}},{title:"理赔单价",field:"claim_price",width:120,editRender:{name:"Vinput",autoselect:!0}},{title:"备注",field:"remark",width:200,editRender:{name:"Vinput",autoselect:!0,formatter:"String"}}]}},methods:{deletes:function(){this.$refs.xTable._proxy("getSelectRecords").length?this.$refs.xTable._proxy("removeSelecteds"):this.$message.warning("请先选择要删除的商品！"),0===this.$refs.xTable._proxy("getTableData").fullData.length&&(this.editType="",this.$forceupdate())},isEdit:function(e){var t=e.column;e.row;return this.params.customer_id||"goods_name"!==t.property?"tire_un"!==t.property||1!==this.params.type||(this.$publicFution.confirm("引用单据胎号不可以更改"),!1):(this.$publicFution.confirm("请先选择客户"),!1)}}}},be75:function(e,t,a){}}]);
//# sourceMappingURL=chunk-39caf3a3.abb04e25.js.map