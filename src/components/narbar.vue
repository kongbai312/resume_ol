<template>
  <div class="narbar_container">
    <span class="narbarItem" @click="goNarbar(0)"><i class="iconfont icon-home"></i>首页</span>
    <span class="narbarItem" @click="goNarbar(1)"><i class="iconfont icon-skill"></i>专业技能</span>
    <span class="narbarItem" @click="goNarbar(2)"><i class="iconfont icon-work"></i>工作经历</span>
    <span class="narbarItem" @click="goNarbar(3)"><i class="iconfont icon-project"></i>项目成果</span>
    <span class="narbarItem" @click="goNarbar(4)"><i class="iconfont icon-about"></i>关于</span>
  </div>
</template>

<script setup lang='ts'>
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
