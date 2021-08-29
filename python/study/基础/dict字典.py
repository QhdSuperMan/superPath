
obj = {'id': 1, 'key': 3}
# obj2 = dict({'id': 1, 'key': 3})
# 获取值 get 1
# print(obj.get('id'))
# 获取key的值  keys ['id', 'key']
# print(list(obj.keys()))
# 获取value的值  dict_items([('id', 1), ('key', 3)])
# print(obj.items())
# 字典生成式 {'a': 1, 'b': 2, 'c': 3}
# item = ['a', 'b', 'c']
# value = [1, 2, 3]
# obj3 = {item: price for item, price in zip(item, value)}
# zip的作用
# for item, price in zip(item, value):
#     print(item, price)

# print(obj3, zip(item, value))


# dict(a='a', b='b', t='t')     # 传入关键字
# {'a': 'a', 'b': 'b', 't': 't'}
# dict(zip(['one', 'two', 'three'], [1, 2, 3]))   # 映射函数方式来构造字典
# {'three': 3, 'two': 2, 'one': 1}
# dict([('one', 1), ('two', 2), ('three', 3)])    # 可迭代对象方式来构造字典
# {'three': 3, 'two': 2, 'one': 1}
