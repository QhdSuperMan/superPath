'''
Author: your name
Date: 2021-06-29 22:34:00
LastEditTime: 2021-06-30 21:09:22
LastEditors: Please set LastEditors
Description: In User Settings Edit
FilePath: \albb\python\class\class.py
'''

class Penson:
    def __init__(self) -> None:
        pass
class Stuent(Penson):
    dress = '北京'
    def __init__(self,name,age):
        super().__init__()
        self.name = name
        self.age = age
    def eat (self):
        print('吃饭')
    @staticmethod
    def staticmeth(cls):
        pass

stud = Stuent('张
三',52)
studs = Stuent('李四',52)
print(stud.name, studs.name)