'''
Author: your name
Date: 2021-08-08 21:35:14
LastEditTime: 2021-08-19 23:09:51
LastEditors: Please set LastEditors
Description: In User Settings Edit
FilePath: \python\study\基础\string.py
'''
# 字符串驻留机制 相同字符串id一样
# 编译时驻留，运行不驻留
s1 = 'abc%'
s2 = 'abc%'
print(s2 is s2)
# 字符串操作
# 字符串占位符 % 我是超人,今年26
name = '超人'
age = 26
print('我是%s,今年%s' % (name, age))


# 字符串占位符 {} 我是超人,今年26
name = '超人'
age = 26
print('我是{0},今年{1}'.format(name, age))
