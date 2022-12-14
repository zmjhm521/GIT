import { proxyRefs } from "vue"

const obj = {
    name: "孙悟空",
    age: 18
}
const handler = {
    get(target, prop, receiver) {
        return target[prop]
    },
    set(target, prop, value, receiver) {
        target[prop] = value
    }
}
//设置代理时不会对源对象产生影响
//只有通过代理修改属性时会对原对象产生影响
const proxy = new Proxy(obj, handler)

obj.age = 45

console.log(proxy.age);
