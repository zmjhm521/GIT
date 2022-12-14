//引入组件
import MyButton from "../components/MyButton"


//创建一个根组件
export default{
    data() {
        return {
            //响应式数据
            message:"我爱vue",
            count:0
        }
    },
    //在组件中注册子组件在那用在那里注册
    components:{
        //属性名 属性值对应引入组件名
        "my-button":MyButton
    },
    //template使用字符串的形式在编写模板
    // 1.字符串会在项目运行时，在浏览器中被编译成js代码(性能不好)
    // 2.在字符串中编写代码，体验很差
    //为了解决这个问题，vue提供了一种单文件组件（SFC）
    //单文件组件的格式是vue
    //vue文件用来编写单文件组件，vue文件本身并不能被浏览器所识别
    //所以必须要被构建工具打包后，才可以使用
    //同时vue文件在打包时，构建工具会直接将template转换为函数
    //无需在浏览器中去编译，这样一来性能也会有所提升

    template:`
    <h1>{{message}}</h1>
    <my-button></my-button>
    `
}