(window["webpackJsonp_erpcode"]=window["webpackJsonp_erpcode"]||[]).push([["chunk-33bc0c12"],{"0cb2":function(e,t,a){var i=a("e330"),s=a("7b0b"),o=Math.floor,r=i("".charAt),l=i("".replace),n=i("".slice),c=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,d=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,a,i,m,u){var p=a+e.length,b=i.length,_=d;return void 0!==m&&(m=s(m),_=c),l(u,_,(function(s,l){var c;switch(r(l,0)){case"$":return"$";case"&":return e;case"`":return n(t,0,a);case"'":return n(t,p);case"<":c=m[n(l,1,-1)];break;default:var d=+l;if(0===d)return s;if(d>b){var u=o(d/10);return 0===u?s:u<=b?void 0===i[u-1]?r(l,1):i[u-1]+r(l,1):s}c=i[d-1]}return void 0===c?"":c}))}},"132c":function(e,t,a){"use strict";a("62df")},5319:function(e,t,a){"use strict";var i=a("2ba4"),s=a("c65b"),o=a("e330"),r=a("d784"),l=a("d039"),n=a("825a"),c=a("1626"),d=a("5926"),m=a("50c4"),u=a("577e"),p=a("1d80"),b=a("8aa5"),_=a("dc4a"),h=a("0cb2"),f=a("14c3"),v=a("b622"),D=v("replace"),g=Math.max,y=Math.min,w=o([].concat),k=o([].push),T=o("".indexOf),x=o("".slice),$=function(e){return void 0===e?e:String(e)},S=function(){return"$0"==="a".replace(/./,"$0")}(),C=function(){return!!/./[D]&&""===/./[D]("a","$0")}(),N=!l((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));r("replace",(function(e,t,a){var o=C?"$":"$0";return[function(e,a){var i=p(this),o=void 0==e?void 0:_(e,D);return o?s(o,e,i,a):s(t,u(i),e,a)},function(e,s){var r=n(this),l=u(e);if("string"==typeof s&&-1===T(s,o)&&-1===T(s,"$<")){var p=a(t,r,l,s);if(p.done)return p.value}var _=c(s);_||(s=u(s));var v=r.global;if(v){var D=r.unicode;r.lastIndex=0}var S=[];while(1){var C=f(r,l);if(null===C)break;if(k(S,C),!v)break;var N=u(C[0]);""===N&&(r.lastIndex=b(l,m(r.lastIndex),D))}for(var O="",A=0,I=0;I<S.length;I++){C=S[I];for(var L=u(C[0]),F=g(y(d(C.index),l.length),0),G=[],j=1;j<C.length;j++)k(G,$(C[j]));var E=C.groups;if(_){var z=w([L],G,F,l);void 0!==E&&k(z,E);var J=u(i(s,void 0,z))}else J=h(L,l,F,G,E,s);F>=A&&(O+=x(l,A,F)+J,A=F+L.length)}return O+x(l,A)}]}),!N||!S||C)},"62df":function(e,t,a){},"7db0":function(e,t,a){"use strict";var i=a("23e7"),s=a("b727").find,o=a("44d2"),r="find",l=!0;r in[]&&Array(1)[r]((function(){l=!1})),i({target:"Array",proto:!0,forced:l},{find:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}}),o(r)},b680:function(e,t,a){"use strict";var i=a("23e7"),s=a("da84"),o=a("e330"),r=a("5926"),l=a("408a"),n=a("1148"),c=a("d039"),d=s.RangeError,m=s.String,u=Math.floor,p=o(n),b=o("".slice),_=o(1..toFixed),h=function(e,t,a){return 0===t?a:t%2===1?h(e,t-1,a*e):h(e*e,t/2,a)},f=function(e){var t=0,a=e;while(a>=4096)t+=12,a/=4096;while(a>=2)t+=1,a/=2;return t},v=function(e,t,a){var i=-1,s=a;while(++i<6)s+=t*e[i],e[i]=s%1e7,s=u(s/1e7)},D=function(e,t){var a=6,i=0;while(--a>=0)i+=e[a],e[a]=u(i/t),i=i%t*1e7},g=function(e){var t=6,a="";while(--t>=0)if(""!==a||0===t||0!==e[t]){var i=m(e[t]);a=""===a?i:a+p("0",7-i.length)+i}return a},y=c((function(){return"0.000"!==_(8e-5,3)||"1"!==_(.9,0)||"1.25"!==_(1.255,2)||"1000000000000000128"!==_(0xde0b6b3a7640080,0)}))||!c((function(){_({})}));i({target:"Number",proto:!0,forced:y},{toFixed:function(e){var t,a,i,s,o=l(this),n=r(e),c=[0,0,0,0,0,0],u="",_="0";if(n<0||n>20)throw d("Incorrect fraction digits");if(o!=o)return"NaN";if(o<=-1e21||o>=1e21)return m(o);if(o<0&&(u="-",o=-o),o>1e-21)if(t=f(o*h(2,69,1))-69,a=t<0?o*h(2,-t,1):o/h(2,t,1),a*=4503599627370496,t=52-t,t>0){v(c,0,a),i=n;while(i>=7)v(c,1e7,0),i-=7;v(c,h(10,i,1),0),i=t-1;while(i>=23)D(c,1<<23),i-=23;D(c,1<<i),v(c,1,1),D(c,2),_=g(c)}else v(c,0,a),v(c,1<<-t,0),_=g(c)+p("0",n);return n>0?(s=_.length,_=u+(s<=n?"0."+p("0",n-s)+_:b(_,0,s-n)+"."+b(_,s-n))):_=u+_,_}})},d582:function(e,t,a){"use strict";a.r(t);var i,s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",[e._v("客户管理")]),a("el-breadcrumb-item",{staticClass:"attrbute"},[a("span",{on:{click:e.goBack}},[e._v("预收冲应收")])]),a("el-breadcrumb-item",[e._v(e._s(e.title)+"预收冲应收")])],1),a("div",{staticClass:"search_container"},[a("el-form",{ref:"formInline",staticClass:"demo-form-inline",attrs:{inline:!0,model:e.params}},[a("el-form-item",{attrs:{label:"财务组织",size:"mini",prop:"company_id",rules:e.rules.company_id}},[e._v(" "+e._s(function(){0==e.params.company_id&&(e.params.company_id=null)}())+" "),a("el-select",{attrs:{clearable:"",placeholder:"请选择",filterable:"",disabled:e.isDisabled},on:{focus:e.companyListInvok,change:e.companyChange},model:{value:e.params.company_id,callback:function(t){e.$set(e.params,"company_id",t)},expression:"params.company_id"}},e._l(e.companyList,(function(t){return a("el-option",{key:t.company_id,attrs:{label:t.company_name,value:t.company_id}},[a("span",{class:1==t.type?"optionStyle":""},[e._v(e._s(t.company_name))])])})),1)],1),a("el-form-item",{attrs:{label:"单据号",size:"mini"}},[a("el-input",{attrs:{type:"text",disabled:""},model:{value:e.params.deposits_sn,callback:function(t){e.$set(e.params,"deposits_sn",t)},expression:"params.deposits_sn"}})],1),a("el-form-item",{attrs:{label:"业务日期",size:"mini",prop:"business_time",rules:e.rules.business_time}},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd",disabled:e.isDisabled,clearable:!1},model:{value:e.params.business_time,callback:function(t){e.$set(e.params,"business_time",t)},expression:"params.business_time"}})],1),a("el-form-item",{attrs:{label:"客户名称",size:"mini",prop:"customer_id",rules:e.rules.customer_id}},[e._v(" "+e._s(function(){0==e.params.customer_id&&(e.params.customer_id=null)}())+" "),a("el-select",{attrs:{filterable:"",placeholder:"请输入",disabled:e.isDisabled,loading:e.loading,remote:"","remote-method":e.clienteleListInvok},on:{change:e.changeCustomer,focus:e.clienteleListInvok},model:{value:e.params.customer_id,callback:function(t){e.$set(e.params,"customer_id",t)},expression:"params.customer_id"}},[a("ul",{staticClass:"customer customer-ul4 customer-ul2"},[a("li",[e._v("客户编号")]),a("li",[e._v("客户名称")]),a("li",[e._v("联系人")]),a("li",[e._v("联系电话")]),a("li",[e._v("区域")])]),e._l(e.customerList,(function(t){return a("el-option",{key:t.customer_id,attrs:{label:t.customer_name,value:t.customer_id}},[a("ul",{staticClass:"customer customer-ul4"},[a("li",{attrs:{title:t.customer_id}},[e._v(e._s(t.customer_id))]),a("li",{attrs:{title:t.customer_name}},[e._v(e._s(t.customer_name))]),a("li",{attrs:{title:t.contact_name}},[e._v(e._s(t.contact_name))]),a("li",{attrs:{title:t.customer_mobile}},[e._v(e._s(t.customer_mobile))]),a("li",[e._v(e._s(t.province_name)+"/"+e._s(t.city_name)+"/"+e._s(t.area_name))])])])}))],2)],1),a("el-form-item",{attrs:{label:"部门",size:"mini"}},[e._v(" "+e._s(function(){0==e.params.department_id&&(e.params.department_id=null)}())+" "),a("el-select",{attrs:{clearable:"",placeholder:"请选择",filterable:"",disabled:e.isDisabled},on:{focus:e.DepartmentListInvok,change:e.departmentChange},model:{value:e.params.department_id,callback:function(t){e.$set(e.params,"department_id",t)},expression:"params.department_id"}},e._l(e.departmentList,(function(e){return a("el-option",{key:e.department_id,attrs:{label:e.department_name,value:e.department_id}})})),1)],1),a("el-form-item",{attrs:{label:"业务员",size:"mini"}},[e._v(" "+e._s(function(){([0,1,2].includes(e.params.business_id)||e.params.company_admin_id>0)&&(e.params.business_id=null)}())+" "),a("el-select",{attrs:{clearable:"",filterable:"",disabled:e.isDisabled},on:{focus:e.EmployeeListInvok,change:e.employeeChange},model:{value:e.params.business_id,callback:function(t){e.$set(e.params,"business_id",t)},expression:"params.business_id"}},e._l(e.employeeList,(function(e){return a("el-option",{key:e.employee_id,attrs:{label:e.employee_name,value:e.employee_id}})})),1)],1),a("el-form-item",{attrs:{label:"备注",size:"mini"}},[a("el-input",{attrs:{type:"text",maxlength:"300"},model:{value:e.params.remark,callback:function(t){e.$set(e.params,"remark",t)},expression:"params.remark"}})],1)],1)],1),e._m(0),a("div",{staticClass:"table_container"},[a("el-table",{staticStyle:{width:"100%"},attrs:{"highlight-current-row":!0,"tooltip-effect":"light",border:"",data:e.TableData.tableData,"summary-method":e.getSummaries,"show-summary":"","max-height":"600"},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{"show-overflow-tooltip":!0,label:"结算方式"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" 预收冲应收 ")]}}])}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"bank_id",label:"银行帐户"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" 预收账户 ")]}}])}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"common_price",label:"金额"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{staticClass:"editor",attrs:{size:"small",type:"number","suffix-icon":"el-icon-edit-outline"},on:{change:function(a){return e.handleEdit(t.row.price,t.row)}},model:{value:t.row.common_price,callback:function(a){e.$set(t.row,"common_price",a)},expression:"scope.row.common_price"}})]}}])}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"remark",label:"备注"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{staticClass:"editor",attrs:{maxlength:"300","suffix-icon":"el-icon-edit-outline"},model:{value:t.row.remark,callback:function(a){e.$set(t.row,"remark",a)},expression:"scope.row.remark"}})]}}])})],1)],1),e.is_disabled?a("div",{staticClass:"aboutList"},[e._m(1),a("div",{staticClass:"table_container"},[a("div",[a("el-table",{attrs:{"highlight-current-row":!0,"tooltip-effect":"light","header-cell-class-name":e.cellClass,border:"",data:e.relationTable.tableData,"show-summary":"","summary-method":e.getrelationTableSummaries,"max-height":"600"}},[a("el-table-column",{attrs:{"show-overflow-tooltip":!0,width:"46"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-checkbox",{key:t.bill_id,on:{change:function(a){return e.clickCheckBox(t.row,t.row.bill_checked)}},model:{value:t.row.bill_checked,callback:function(a){e.$set(t.row,"bill_checked",a)},expression:"scope.row.bill_checked"}})]}}],null,!1,2178988420)}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,label:"序号",width:"46",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.$index+1)+" ")]}}],null,!1,192879353)}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"bill_sn",label:"单据号",width:"146"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"order_type",label:"单据类型"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"customer_name",label:"客户名称"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"bill_num",label:"出库数量",align:"right"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"order_price",label:"出库金额",align:"right"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"ec_channel_fee",label:"通道费",align:"right"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"sc_price",label:"实际应收金额",align:"right",width:"120","render-header":e.renderHeader},scopedSlots:e._u([{key:"default",fn:function(t){return[a("pre",[e._v(e._s(e._f("priceFormatNone")(t.row.sc_price)))])]}}],null,!1,311688178)}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"business_time",label:"业务日期",width:"156"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"add_time",label:"单据时间",width:"156"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"remark",label:"备注",width:"156"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"rc_price",label:"已冲销金额",align:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("pre",[e._v(e._s(e._f("priceFormatNone")(t.row.rc_price)))])]}}],null,!1,3238903667)}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"rest_price",label:"未冲销金额",align:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("pre",[e._v(e._s(e._f("priceFormatNone")(t.row.rest_price)))])]}}],null,!1,3523324530)}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"bill_price",label:"本次冲销金额",align:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{staticClass:"editor",attrs:{type:"number","suffix-icon":"el-icon-edit-outline"},model:{value:t.row.bill_price,callback:function(a){e.$set(t.row,"bill_price",a)},expression:"scope.row.bill_price"}})]}}],null,!1,3641301268)}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,property:"payment_method",label:"回款方式",width:"156"}})],1)],1)])]):e._e(),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.goBack}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("formInline")}}},[e._v("确 定")])],1)],1)},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"paymanageTitle"},[a("i"),a("span",[e._v("结算明细")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"paymanageTitle "},[a("i"),a("span",[e._v("核销明细")])])}],r=a("ade3"),l=a("5530"),n=(a("b680"),a("e9c4"),a("d81d"),a("7db0"),a("d3b7"),a("4de4"),a("a9e3"),a("a434"),a("159b"),a("caad"),a("ac1f"),a("5319"),a("25f0"),a("65b0")),c=a("2f62"),d=(i={name:"customeDepositsAdd",data:function(){return{authority:{},title:"添加",params:{remark:"",business_id:null,department_id:null},TableData:{tableData:[{}]},companyList:[],multipleSelection:[],per_page:[30,50,100,500],index:0,customer_id:null,deposits_id:null,customer_name:"",isDisabled:!1,loading:!1,is_disabled:!1,relationTable:{tableData:[]},changeIndex:0}},computed:Object(l["a"])({},Object(c["c"])(["depositsAdd_showGet"])),methods:Object(l["a"])(Object(l["a"])({},Object(c["b"])(["depositsIndexACT_show","depositsIndexACT"])),{},{renderHeader:function(){var e=this.$createElement;return e("el-tooltip",{class:"item",attrs:{effect:"dark",placement:"top"}},[e("p",{slot:"content"},["实际应收金额=本出库单中出库金额"]),e("span",{class:"el-icon-question",style:"cursor:pointer;font-weight:bold;"},["实际应收金额"])])},cellClass:function(e){if(0==e.columnIndex)return"Disabledselection"},employeeChange:function(){this.doDeposits(this.params)},changeTitle:function(e){this.changeIndex=e},handleEdit:function(e,t){this.$nextTick((function(){t.common_price=t.common_price.toFixed(2)}))},clickCheckBox:function(e,t){for(var a=[],i=0;i<this.TableData.tableData.length;i++)a.push({common_price:this.TableData.tableData[i].common_price,remark:void 0==this.TableData.tableData[i].remark?"":this.TableData.tableData[i].remark});var s=[];this.relationTable.tableData[this.relationTable.tableData.indexOf(e)].checked=1==t?1:0;for(var o=0;o<this.relationTable.tableData.length;o++)s.push({bid:this.relationTable.tableData[o].bid,checked:this.relationTable.tableData[o].checked,bill_price:this.relationTable.tableData[o].bill_price});var r=this.params;r.common_body=JSON.stringify(a),r.is_verify=2,r.bid=e.bid,r.bill_body=JSON.stringify(s),this.doDeposits(r)},changePrice:function(e,t){for(var a=[],i=0;i<this.TableData.tableData.length;i++){if(this.TableData.tableData[i].common_price>99999999.99)return this.$message.warning("金额输入不能大于一亿"),this.TableData.tableData[i].common_price=0,!1;if(this.TableData.tableData[i].common_price<-99999999.99)return this.$message.warning("金额输入不能小于负一亿"),this.TableData.tableData[i].common_price=0,!1;a.push({receivables_mode_id:this.TableData.tableData[i].receivables_mode_id,bank_id:this.TableData.tableData[i].bank_id,common_price:this.TableData.tableData[i].common_price,remark:void 0==this.TableData.tableData[i].remark?"":this.TableData.tableData[i].remark})}var s=this.params;s.common_body=JSON.stringify(a),s.is_verify=1,this.doDeposits(s)},doDeposits:function(e){var t=this,a=this.params,i=a.company_id,s=a.customer_id;if(!i||!s)return!1;this.depositsAdd_showGet.deposits_id&&(e.deposits_id=this.depositsAdd_showGet.deposits_id),this.$axMethod.getDepositsDetailed(e).then((function(e){if(400==e.data.code||0==e.data.data.length)t.is_disabled=!1,t.relationTable.tableData=[],t.params.bill_body=[];else{t.is_disabled=!0,t.relationTable.tableData=e.data.data;for(var a=[],i=0;i<t.relationTable.tableData.length;i++)1==t.relationTable.tableData[i].checked&&a.push(t.relationTable.tableData[i]);for(var s=[],o=0;o<a.length;o++)s.push({index:t.relationTable.tableData.indexOf(a[o])});for(var r=0;r<s.length;r++)t.relationTable.tableData[s[r].index].bill_checked=!0}}))},submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(e){if(t.TableData.tableData.length<1)return t.$message.warning("请完善表格信息"),!1;if(t.relationTable.tableData.length<=0)return t.$message.warning("您暂无核销明细，不能进行预收冲应收"),!1;for(var a=t,i=[],s=0;s<t.TableData.tableData.length;s++)i.push({receivables_mode_id:t.TableData.tableData[s].receivables_mode_id,bank_id:t.TableData.tableData[s].bank_id,common_price:t.TableData.tableData[s].common_price,remark:void 0==t.TableData.tableData[s].remark?"":t.TableData.tableData[s].remark});var o=t.params;o.common_body=JSON.stringify(i),o.is_verify=0;var r=t.relationTable.tableData.map((function(e){return e.checked=e.checked,e.bill_price=e.bill_price,e.bid=e.bid,e}));o.bill_body=JSON.stringify(r);var l=t.depositsAdd_showGet.deposits_id?"editDeposits":"addDeposits";"editDeposits"==l&&(o.deposits_id=t.depositsAdd_showGet.deposits_id),a.$axios({method:"post",url:a.$api[l],data:o}).then((function(e){200==e.data.code&&(t.$message({message:e.data.msg||e.data.data,type:"success"}),a.goBack())}))}}))},changeCustomer:function(e){var t=this;if(e){if(this.customerList.find((function(a){a.customer_id===e&&(t.customer_name=a.customer_name)})),this.TableData.tableData=[{}],e){var a=this.customerList.filter((function(t){return t.customer_id===e}))[0].company_id,i=this.customerList.filter((function(t){return t.customer_id===e}))[0].associated_customer_id;this.params.associated_customer_id=i}var s={customer_id:this.params.customer_id,associated_customer_id:i,company_id:a};this.$axMethod.getCustomerInfoNEWqx(s).then((function(e){var a=e.data;if(200==a.code)return t.$set(t.TableData.tableData[0],"common_price",Number(a.data.deposits).toFixed(2)),t.$set(t.params,"business_id",a.data.business_id),a.data})).then((function(e){if(e&&e.business_id)t.$axMethod.getEmployeeInfoMore({employee_id:e.business_id}).then((function(e){t.employeeList=[{employee_id:e.data.data.employee_id,employee_name:e.data.data.employee_name}];for(var a=[],i=0;i<t.TableData.tableData.length;i++)void 0==t.TableData.tableData[i].common_price?a=[]:a.push({receivables_mode_id:t.TableData.tableData[i].receivables_mode_id,bank_id:t.TableData.tableData[i].bank_id,common_price:t.TableData.tableData[i].common_price,remark:void 0==t.TableData.tableData[i].remark?"":t.TableData.tableData[i].remark});var s=t.params;s.common_body=JSON.stringify(a),s.is_verify=1,t.doDeposits(s)}));else{for(var a=[],i=0;i<t.TableData.tableData.length;i++)void 0==t.TableData.tableData[i].common_price?a=[]:a.push({receivables_mode_id:t.TableData.tableData[i].receivables_mode_id,bank_id:t.TableData.tableData[i].bank_id,common_price:t.TableData.tableData[i].common_price,remark:void 0==t.TableData.tableData[i].remark?"":t.TableData.tableData[i].remark});var s=t.params;s.common_body=JSON.stringify(a),s.is_verify=1,t.doDeposits(s)}}))}},goBack:function(){this.depositsIndexACT({params:this.depositsAdd_showGet.params,goPage:this.depositsAdd_showGet.goPage,pageSize:this.depositsAdd_showGet.pageSize}),this.$router.push({path:"/custom/deposits"})},addPaymangeFun:function(){if(void 0==this.params.customer_id||""==this.params.customer_id)return this.$message({message:"请选择客户名称",type:"warning"}),!1;this.TableData.tableData.push({})},delFun:function(){if(this.multipleSelection.length<1)return this.$message.warning("请选择要删除的数据"),!1;for(var e=0;e<this.multipleSelection.length;e++){var t=this.TableData.tableData.indexOf(this.multipleSelection[e]);this.TableData.tableData.splice(t,1)}},handleSelectionChange:function(e){this.multipleSelection=e},companyChange:function(e){this.TableData.tableData=[{}],this.relationTable.tableData=[],this.$set(this.params,"customer_id","")},departmentChange:function(e){this.doDeposits(this.params)},getSummaries:function(e){var t=e.columns,a=e.data,i=[];return t.forEach((function(e,t){if(1!==t){var s=a.map((function(t){return Number(t[e.property])}));s.every((function(e){return isNaN(e)}))?i[t]="":(i[t]=s.reduce((function(e,t){var a=Number(t);return isNaN(a)?e:e+t}),0),i[t]=2==t?parseFloat(i[t]).toFixed(2):"")}else i[t]="总计"})),i},getrelationTableSummaries:function(e){var t=e.columns,a=e.data,i=[];return t.forEach((function(e,t){if(1!==t){var s=a.map((function(t){return Number(t[e.property])}));s.every((function(e){return isNaN(e)}))?i[t]="":(i[t]=s.reduce((function(e,t){var a=Number(t);return isNaN(a)?e:e+t}),0),5==t?i[t]=i[t]:[6,7,8,14,12,13].includes(t)?i[t]=parseFloat(i[t]).toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"):i[t]="")}else i[t]="总计"})),i}})},Object(r["a"])(i,"computed",Object(l["a"])({},Object(c["c"])(["depositsAdd_showGet"]))),Object(r["a"])(i,"created",(function(){var e=this;if(this.depositsAdd_showGet.deposits_id)this.isDisabled=!0,this.$axios({method:"get",url:this.$api.getDepositsInfo,params:{deposits_id:this.depositsAdd_showGet.deposits_id,is_edit:1}}).then((function(t){var a=t.data;200==a.code&&(e.$set(e,"TableData",a.data),e.relationTable.tableData=a.data.receipt_common_bill,e.params={business_time:e.TableData.business_time?e.TableData.business_time:"",customer_id:e.TableData.customer_id,company_id:e.TableData.company_id,department_id:e.TableData.department_id,business_id:e.TableData.business_id,remark:e.TableData.remark,receipt_sn:e.TableData.receipt_sn},e.TableData.tableData=e.TableData.deposits_common,e.deposits_id=e.depositsAdd_showGet.deposits_id,e.companyList=[{company_name:a.data.company_name,company_id:a.data.company_id}],e.departmentList=[{department_name:a.data.department_name,department_id:a.data.department_id}],e.employeeList=[{employee_name:a.data.business_name,employee_id:a.data.business_id}],e.customerList=[{customer_name:a.data.customer_name,customer_id:a.data.customer_id,contact_name:a.data.contact_name,customer_mobile:a.data.customer_mobile,address:a.data.address}]);var i=e,s={business_time:void 0==e.TableData.business_time?"":e.TableData.business_time,customer_id:e.TableData.customer_id,company_id:e.TableData.company_id,department_id:e.TableData.department_id,business_id:e.TableData.business_id,remark:e.TableData.remark};s.common_body=JSON.stringify(a.data.tableData),s.is_verify=1,s.deposits_id=e.depositsAdd_showGet.deposits_id,e.$axios({method:"get",url:i.$api.getDepositsInfo,params:{deposits_id:e.depositsAdd_showGet.deposits_id,is_edit:1}}).then((function(e){for(var t=[],a=0;a<i.relationTable.tableData.length;a++)1==i.relationTable.tableData[a].checked&&t.push(i.relationTable.tableData[a]);for(var s=[],o=0;o<t.length;o++)s.push({index:i.relationTable.tableData.indexOf(t[o])});for(var r=0;r<s.length;r++)i.relationTable.tableData[s[r].index].bill_checked=!0;400==e.data.code||0==e.data.data.length?i.is_disabled=!1:i.is_disabled=!0}))}));else{var t=localStorage,a=t.employee_id,i=t.company_admin_id;[0,1,2].includes(Number(a))||i>0?this.$set(this,"params",{company_id:Number(localStorage.company_id),business_time:this.$publicFution.formatData(new Date)}):this.$set(this,"params",{company_id:Number(localStorage.company_id),department_id:0,business_id:0,business_time:this.$publicFution.formatData(new Date)}),Object(n["l"])(this,localStorage)}})),Object(r["a"])(i,"mounted",(function(){this.title=void 0==this.depositsAdd_showGet.deposits_id?"添加":"修改"})),i),m=d,u=(a("132c"),a("2877")),p=Object(u["a"])(m,s,o,!1,null,"ee1ee03c",null);t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-33bc0c12.c8b767ed.js.map