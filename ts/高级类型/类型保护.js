var pet;
if (pet.swim) {
    pet.swim();
}
else {
    pet.fly();
}
//! typeof类型保护
function padLeft(value) {
    if (typeof value === 'string') {
        return 'string';
    }
    if (typeof value === 'number') {
        return 'number';
    }
}
padLeft(1);
//! instanceof的右侧要求是一个构造函数，TypeScript将细化为：
//此构造函数的 prototype属性的类型，如果它的类型不为 any的话
//构造签名所返回的类型的联合
