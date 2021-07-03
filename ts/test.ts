
// 混合类型核


class minClass2<T>{
    public list:T[] = [];
    add(value:T):void{
        this.list.push(value);
    }
}

//调用泛型类
//实例化类  并且制定了类的T代表的类型是number
var m1 = new minClass2<number>();
m1.add('ssss')

