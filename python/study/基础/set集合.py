# 定义{} 集合不能重复
s = {'d', 'a', 'b', 'c'}
#  set() 把数组转成集合 {'o', 'h', 'n', 't', 'p', 'y'}
s2 = set('python')
# 空集合
s2 = set()
# {'key'}
s6 = set({'key': 1})
print(s6)
# 添加 add(一个)  update(多个)
# 删除 remove(没有报错)  discard(没有不报错)
# a是b的子集吗  a.issubset(b)
# a是b的超集吗  a.issuperset(b)
# a是b的交集吗  a.isdisjoint(b)
# 生成式  列表生成式变成{}