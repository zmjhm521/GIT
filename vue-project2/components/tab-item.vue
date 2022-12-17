<script setup>
    import { reactive } from 'vue';
    import Photo from './Phont.vue'
    import HotBar from './HotBar.vue'
    // 创建一个响应式对象
    // 子组件的数据通常不会再子组件件中直接定义，这样会导致数据和试图发生耦合，丧失灵活性
    // 子组件中的数据通常会在创建组件实例时确定
    // 父组件通过props 来将数据传递给子组件
    // 使用props
    //  先在子组件中定义props
    // const props = defineProps(["a","b","c"])
    const props = defineProps(["item","max-hot"])
    const item = props.item
</script>

<template>
    <div class="tab-item">
       <!-- 图片组件 -->
       <Photo :src="item.img" :rate="item.rate"></Photo>
        <!-- 描述 -->
        <div class="desc">
            <span class="name">{{item.name}}</span>
            <HotBar :hot="item.hot" :max-hot="props.maxHot"></HotBar>
        </div>
    </div>
</template>

<style scoped>
.tab-item {
    display: flex;
    margin-bottom: 40px;
}

/* 容器 */


.desc {
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    font-size: 40px;
    color: #fff;
    flex: auto;
    margin-left: 30px;
}
</style>