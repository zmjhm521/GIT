<script>
import MyButton from "../components/MyButton.vue"
export default{
    data() {
        return {
            msg:"我超级爱vue"
        }
    },
    components:{
        MyButton
    }
}
</script>
<template>
    <div>
        <h1>{{msg}}</h1>
        <MyButton></MyButton>
    </div> 
</template>