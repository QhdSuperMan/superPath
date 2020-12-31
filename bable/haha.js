'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * 生成规格列 JS
 * @param list
 * @returns {*}
 */

//组合函数 by zba
function combination(list) {
    return list.reduce(function (result, subList) {
        return subList.reduce(function (subResult, item) {
            var tail = result.length ? result.map(function (l) {
                return [].concat(_toConsumableArray(l), [item]);
            }) : [[item]];
            return subResult.concat(tail);
        }, []);
    }, []);
}
//生成 规格列HTML by zba
// skuType = 1 多地区sku   skuType = 0 普通sku tabd需求号 1025093
function newRecursionSpec(combSpec) {
    var attrList = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var is_channel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var skuType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var callBack = arguments[4];
    var ExtendAttr = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

    var combSpecCopy = [];
    for (var item = 0; item < combSpec.length; item++) {
        if (combSpec[item].length !== 0) {
            combSpecCopy.push(combSpec[item]);
        }
    }; // 去掉为空的sku
    combSpec = combSpecCopy;
    var nowSpecList = [];
    var arr = [];
    var str = '';
    for (var ii = 0; ii < combSpec.length; ii++) {
        arr[ii] = [];
    }
    var combSpecList = arr;
    var k = 0;
    var i = 0;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = combSpec[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var value = _step.value;
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {

                for (var _iterator3 = value[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var item = _step3.value;

                    // console.log(item);
                    nowSpecList[item[1]] = item[0];
                    combSpecList[k].push(k + '_' + item[1]);
                    i++;
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }

            k++;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    var comb = combination(combSpecList);

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = comb[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var oneComb = _step2.value;

            str += getSpecTdHtml(oneComb, nowSpecList, attrList, is_channel, skuType, callBack, ExtendAttr);
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }

    return str;
}
//生成 规格列HTML by zba
function getSpecTdHtml() {
    var oneComb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var nowSpecList = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var attrList = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var is_channel = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var skuType = arguments[4];
    var callBack = arguments[5];
    var ExtendAttr = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : {};

    if (oneComb.length == 0) {
        return '';
    }
    var newSelectSpec = [];
    var newSelectSpecComKey = [];
    var i = 0;
    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
        for (var _iterator4 = oneComb[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var oneItem = _step4.value;

            newSelectSpec[i] = oneItem.substring(oneItem.lastIndexOf("_") + 1, oneItem.length);
            newSelectSpecComKey[i] = oneItem.substring(oneItem.lastIndexOf("_") + 1, oneItem.length);
            newSelectSpecComKey.sort(function (a, b) {
                return a - b;
            });
            i++;
        }
    } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion4 && _iterator4.return) {
                _iterator4.return();
            }
        } finally {
            if (_didIteratorError4) {
                throw _iteratorError4;
            }
        }
    }

    var combKey = 'i_' + newSelectSpecComKey.join('');
    var tdStr = '';
    var extendStr = '';
    var allStr = '';
    var maximumStr = '';
    if (skuType !== 1) {
        //  eleteBarcode   tabd需求号 1025093  去掉sp_value数组
        //规格列
        var _iteratorNormalCompletion5 = true;
        var _didIteratorError5 = false;
        var _iteratorError5 = undefined;

        try {
            for (var _iterator5 = newSelectSpec[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                var oneItemTd = _step5.value;

                tdStr += '<td><input type="hidden" name="spec[' + combKey + '][sp_value][' + oneItemTd + ']" value="' + nowSpecList[oneItemTd] + '">' + nowSpecList[oneItemTd] + '' + '</td>';
            }
        } catch (err) {
            _didIteratorError5 = true;
            _iteratorError5 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion5 && _iterator5.return) {
                    _iterator5.return();
                }
            } finally {
                if (_didIteratorError5) {
                    throw _iteratorError5;
                }
            }
        }
    } else {
        var index = 0;
        var _iteratorNormalCompletion6 = true;
        var _didIteratorError6 = false;
        var _iteratorError6 = undefined;

        try {
            for (var _iterator6 = newSelectSpec[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                var oneItemTd = _step6.value;

                tdStr += callBack ? callBack(oneItemTd, nowSpecList, combKey, index) : ''; // id id名字 spu的key
                index++;
            }
        } catch (err) {
            _didIteratorError6 = true;
            _iteratorError6 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion6 && _iterator6.return) {
                    _iterator6.return();
                }
            } finally {
                if (_didIteratorError6) {
                    throw _iteratorError6;
                }
            }
        }
    }

    //扩张属性
    var _iteratorNormalCompletion7 = true;
    var _didIteratorError7 = false;
    var _iteratorError7 = undefined;

    try {
        for (var _iterator7 = attrList[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
            var oneAttr = _step7.value;

            if (oneAttr.is_extend == 1 && oneAttr.is_apply_sku == 1) {
                var attr_class = '';
                extendStr += '<td>';
                //输入框形式
                if (oneAttr.extend_type == 2) {

                    if (oneAttr.attr_check == 1) {
                        attr_class = 'attr_txt_check';
                    }
                    extendStr += '<input type="text" name="spec[' + combKey + '][skuExtendTxtAttr][' + oneAttr.attr_id + '][val]"  nc_type="' + combKey + '|skuExtendTxtAttr_' + oneAttr.attr_id + '" ncSkuExtendAttrId=' + oneAttr.attr_id + ' class="' + attr_class + ' extendAttributeText" />';
                    extendStr += '<input type="hidden" name="spec[' + combKey + '][skuExtendTxtAttr][' + oneAttr.attr_id + '][val_id]" class="noImpotant" value="' + oneAttr.value[0].attr_value_id + '" ncSkuExtendAttrId=' + oneAttr.attr_id + ' />';
                } else if (oneAttr.extend_type == 1) {
                    if (oneAttr.attr_check == 1) {
                        attr_class = 'attr_select';
                    }
                    extendStr += '<select  name="spec[' + combKey + '][skuExtendAttr][]" nc_type="' + combKey + '|skuExtendAttr_' + oneAttr.attr_id + '" ncSkuExtendAttrId=' + oneAttr.attr_id + ' class="' + attr_class + ' extendAttributeSelect">';
                    extendStr += '<option  value="">请选择</option>';
                    var _iteratorNormalCompletion8 = true;
                    var _didIteratorError8 = false;
                    var _iteratorError8 = undefined;

                    try {
                        for (var _iterator8 = oneAttr.value[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                            var attrVal = _step8.value;

                            var attr_default = '';
                            if (attrVal.is_default == 1) {
                                attr_default = 'selected';
                            }
                            extendStr += '<option value_id="' + attrVal.attr_value_id + '" value="' + oneAttr.attr_id + ':' + oneAttr.attr_name + '|' + attrVal.attr_value_id + ':' + attrVal.attr_value_name + '" ' + attr_default + ' >' + attrVal.attr_value_name + '</option>';
                        }
                    } catch (err) {
                        _didIteratorError8 = true;
                        _iteratorError8 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion8 && _iterator8.return) {
                                _iterator8.return();
                            }
                        } finally {
                            if (_didIteratorError8) {
                                throw _iteratorError8;
                            }
                        }
                    }
                }
                extendStr += "</select>";
                extendStr += "<span></span></td>";
            }
        }
        //是否限制最大购买量 class noImpotant  不导入字段 tabd需求号 1025093
    } catch (err) {
        _didIteratorError7 = true;
        _iteratorError7 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion7 && _iterator7.return) {
                _iterator7.return();
            }
        } finally {
            if (_didIteratorError7) {
                throw _iteratorError7;
            }
        }
    }

    if (is_channel == 1) {
        maximumStr += '<td><input class="text stock " type="text" name="spec[' + combKey + '][maximum]" data_type="maximum" nc_type="' + combKey + '|maximum" value="" /></td>';
    }
    allStr += '<tr class="spec_tr">\n' + '              <input type="hidden" name="spec[' + combKey + '][goods_id]" nc_type="' + combKey + '|id" value="">\n' + '               \n' + '              ' + tdStr + '\n' + '               \n' + '              <td>\n' + '                <input type="hidden" class="noImpotant" name="spec[' + combKey + '][marketprice]" data_type="marketprice" nc_type="' + combKey + '|marketprice" id="' + combKey + '_marketprice" value="0.00">\n' + '                <input class="text price goodsprice" type="text" name="spec[' + combKey + '][costprice]" data_type="costprice" nc_type="' + combKey + '|costprice" id="' + combKey + '_costprice" value="" onkeyup="costprice(this)" required="">\n' + '                <em class="add-on">\n' + '                  <i class="icon-renminbi"></i>\n' + '                </em>\n' + '              <span></span></td>\n' + '              <td style="display:block">\n' + '                <input class="text price" type="text" name="spec[' + combKey + '][price]" data_type="price" nc_type="' + combKey + '|price" id="' + combKey + '_price" value="" onchange="Integer(this)" onkeyup="priceChange(this)" required="">\n' + '                <em class="add-on">\n' + '                  <i class="icon-renminbi"></i>\n' + '                </em>\n' + '              <span></span></td>\n' + '              <td>\n' + '                <input class="text stock goodsstock" type="text" name="spec[' + combKey + '][stock]" data_type="stock" nc_type="' + combKey + '|stock" value=""></td>\n' + maximumStr + '              <td style="display:none" class="shrateku">\n' + '                <input class="text stock" type="text" name="spec[' + combKey + '][shrate]" data_type="shrate" nc_type="' + combKey + '|shrate" id="' + combKey + '_shrate" value="" readonly="readonly" style="background: none rgb(231, 231, 231);"></td>\n' + '              <td>\n' + '                <input class="text stock" type="text" name="spec[' + combKey + '][alarm]" data_type="alarm" nc_type="' + combKey + '|alarm" value=""></td>\n' + '              <td>\n' + '                <input class="text stock" type="text" name="spec[' + combKey + '][initial_purchase_count]" data_type="initial_purchase_count" nc_type="' + combKey + '|initial_purchase_count" value=""></td>\n' + '              <td>\n' + '                <input class="text sku goodssku" type="text" name="spec[' + combKey + '][sku]" nc_type="' + combKey + '|sku" value=""></td>\n' + '              ';
    if (skuType === 1 && ExtendAttr && ExtendAttr.deliveryArea) {
        // sku添加发货地
        allStr += '<td><select nc_type="' + combKey + '|daddress_id" name="spec[' + combKey + '][daddress_id]">';
        for (var i = 0; i < ExtendAttr.deliveryArea.length; i++) {
            console.log(ExtendAttr.deliveryArea[i]);
            allStr += '<option value_id=' + ExtendAttr.deliveryArea[i].address_id + ' ' + (ExtendAttr.deliveryArea[i].is_default - 0 === 1 ? "selected='selected'" : "") + ' value=' + ExtendAttr.deliveryArea[i].address_id + '>' + ExtendAttr.deliveryArea[i].address + '</option>';
        }
        allStr += '</select><span></span></td>';
    }
    // 条形码
    allStr += '<td>\n  <input name="spec[' + combKey + '][has_barcode]" nc_type_radio="' + combKey + '|has_barcode" class="barcode noImpotant" type="radio" value="1" checked/>有\n' + '                <input name="spec[' + combKey + '][has_barcode]" nc_type_radio="' + combKey + '|has_barcode" class="barcode noImpotant" type="radio" value="0"/>无\n' + '                <input class="text sku barcode-input " type="text" name="spec[' + combKey + '][barcode]" nc_type="' + combKey + '|barcode" value="">\n' + '                </td>\n' + '                ' + extendStr + '\n';
    allStr += '            </tr>';
    return allStr;
}

/**
 * 检测规格必填项
 * @returns {boolean}
 */
function check_spec() {
    var specSelectedChecked = [];
    var specSelected = [];
    var flag = true;
    //获取到所有的必填的sp_id
    $('input[nctype="spec_name"]').each(function (data) {
        if ($(this).attr('spec_require') == '1') {
            specSelectedChecked.push($(this).attr('sp_id'));
        }
    });
    //获取到所有的属于后台属性的规格列
    $('dl[nctype="spec_group_dl"]').find('input[inputSign="specitem"]:checked').each(function (data) {
        var attr_id = 'id_' + $(this).attr('nc_attr_id') + '';
        specSelected[attr_id] = $(this).attr('nc_type');
    });
    console.log(specSelectedChecked, specSelected);
    //判断必选项是否为空
    for (var i in specSelectedChecked) {
        if (specSelected['id_' + specSelectedChecked[i]] == undefined || specSelected['id_' + specSelectedChecked[i]].length == 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
