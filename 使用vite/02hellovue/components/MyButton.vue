<script>
export default {
    data() {
        return {
            count:0
        }
    }
};
</script>
<template>
    <div>
        <button @click='count++'>点我一下</button>
        <span>{{count}}</span>
    </div>
</template>