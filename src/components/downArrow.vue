<template>
    <div class="downArrow_container" @click="goNarbar(id)">
        <i class="iconfont icon-down_arrow"></i>
    </div>
</template>

<script setup lang='ts'>
import { useNarbarClick } from '@/hooks/narbarClick';
//导航跳转
const { goNarbar } = useNarbarClick()

let { id } = defineProps<{
    id: number //跳转导航的id
}>()
</script>

<style lang="scss" scoped>
.downArrow_container {
    position: absolute;
    bottom: 5%;
    left: 50%;
    cursor: pointer;
    animation: arrowAnimation 1s ease-in-out 0s alternate-reverse infinite;

    .iconfont {
        font-weight: 700;
        color: rgba(255, 255, 255, .5);
    }
}
</style>
