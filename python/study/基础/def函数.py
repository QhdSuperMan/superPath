'''
Author: your name
Date: 2021-08-19 23:15:07
LastEditTime: 2021-08-19 23:49:10
LastEditors: Please set LastEditors
Description: In User Settings Edit
FilePath: \python\study\基础\def.py
'''

# 引用传值  跟js一样
# def fun(a,b):
#     a = 100
#     print('函数内a',id(a),a)
#     b.append(4)
#     print('函数内b',id(b),b)

# c = 1
# d = [1,2,3]
# fun(c,d)
# print('函数外c',id(c))
# print('函数外d',id(d),d)
# print('函数外c',id(c),c)

# 定义时


# 只能有一个
# 可变的位置参数 (1,) (1, 5)
# def fun(a,b,*,c,d): *号后面只能用关键字
def fun(*args):
    print(args)
# fun(1)
# fun(1,5)
# 可变的关键字参数


def fun(**args):
    print(args)
# fun(a=1)
# fun(b=5,d=5)
# 同时存在  def fun(*args,**args) 一个星星在前，否则报错


# 调用时


# fun(*[1,2,3]) === fun(1,2,3)
# fun(**{a:1b:2}) === fun(a=1,b=2)
