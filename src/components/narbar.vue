<template>
  <div class="narbar_container">
    <span 
      v-for="narbar in NarbarArr" :key="narbar.id" 
      class="narbarItem" @click="goNarbar(narbar.id)"
    ><i :class="`iconfont icon-${narbar.icon}`"></i>{{narbar.name}}</span>
  </div>
</template>

<script setup lang='ts'>
import NarbarArr from '@/config/narbar.config'
import { useNarbarClick } from '@/hooks/narbarClick';
//导航跳转
const { goNarbar } = useNarbarClick()
</script>

<style lang="scss" scoped>
@import '@/styles/mixins.scss';
.narbar_container {
  background-color: transparent;
  height: var(--narHeight);
  display: flex;
  .narbarItem {
    box-sizing: border-box;
    @include narbarItem;
    color: #cfcfcf;
    &:first-of-type {
      color: #fff;
    }
  }
}

</style>
