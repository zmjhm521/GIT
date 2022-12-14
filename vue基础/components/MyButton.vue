<script>
export default{
    data() {
        return {
            count:0
        }
    },
}
</script>

<template>
    <div>
        <button @click="count++">点了{{count}}次</button>
    </div>
</template>