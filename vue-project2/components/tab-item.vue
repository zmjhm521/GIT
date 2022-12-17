<script setup>
    import { reactive } from 'vue';
    // 创建一个响应式对象
    // 子组件的数据通常不会再子组件件中直接定义，这样会导致数据和试图发生耦合，丧失灵活性
    // 子组件中的数据通常会在创建组件实例时确定
    // 父组件通过props 来将数据传递给子组件
    // 使用props
    //  先在子组件中定义props
    // const props = defineProps(["a","b","c"])
    const props = defineProps(["item"])
    console.log(props.item.img);
   
</script>

<template>
    <div class="tab-item">
        <!-- 图片 -->
        <div class="photo">
            <img :src="props.item.img" style="width: 200px;">
            <span>{{props.item.rate}}</span>
        </div>
        <!-- 描述 -->
        <div class="desc">
            <span class="name">{{props.item.name}}</span>
            <div class="hot-bar">
                <div class="inner">{{props.item.hot}}热度</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.tab-item {
    display: flex;
    margin-bottom: 40px;
}

/* 容器 */
.photo {
    width: 150px;
    border-radius: 20px;
    overflow: hidden;
    position: relative;
}

/* 图片标签 */
.photo img {
    width: 100%;
    vertical-align: top;
}

/* 排名 */
.photo span {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    width: 50px;
    height: 50px;
    border-bottom-right-radius: 20px;
    background-color: rgb(245, 102, 1);
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    justify-content: center;
    align-items: center;
}

.desc {
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    font-size: 40px;
    color: #fff;
    flex: auto;
    margin-left: 30px;
}

.hot-bar {
    background-color: rgb(3, 37, 103);
    border-radius: 20px;
    text-indent: 0.5em;
}

.inner {
    /* background-color: red; */
    border-radius: 20px;
    background-image: linear-gradient(to right, rgb(187, 3, 52) 50%, rgb(66, 2, 12));
    white-space: nowrap;
}
</style>