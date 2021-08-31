lst = [1, 2, 3, 4, 5, 6, 7, 8, 9]
# 切片 切割列表  产生新列表 可以删除
# lst2 = lst[1:6:1]
# append 只能添加一个
# lst2.append(1)
# extend 合并列表
# lst2.extend([1,2])
# remove  移除指定值元素
# lst.remove(1) [2, 3, 4, 5, 6, 7, 8, 9]
# pop 移除指定索引元素
# lst.pop(0) [2, 3, 4, 5, 6, 7, 8, 9]
# 切片删除 [1, 3, 4, 5, 6, 7, 8, 9]
# lst[1:2] = []
# 切片添加 [0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
# lst[0:0] = [0,0]
# clear 清空列表 []
# 排序 sort [9, 8, 7, 6, 5, 4, 3, 2, 1] 降序
# sorted 产生新数组的排序
# lst.sort(reverse=True)
# 列表生成式
lst2 = [i for i in range(5)]

print(lst2)
