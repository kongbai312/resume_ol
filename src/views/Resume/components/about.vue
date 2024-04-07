<template>
    <section class="boxItem about">
      <div class="title title-about">
        <span class="narbarItem" @click="goNarbar(4)"><i class="iconfont icon-about"></i>关于</span>
        <div class="narbarBg aboutBg"></div>
      </div>
      <div class="content">
        <div class="contentBg lastBg"></div>
      </div>
    </section>
</template>

<script setup lang='ts'>
import { useNarbarClick } from '@/hooks/narbarClick';
//导航跳转
const { goNarbar } = useNarbarClick()
</script>

<style lang="scss" scoped>
@import '@/styles/mixins.scss';

//关于背景图
.about {
    --bg-img: url(../../../assets/image/bg-about.jpg);
  }

.boxItem {
    @include boxItem;

    // 标题
    .title {
        @include title;

        // 导航
        .narbarItem {
            @include narbarItem;
        }

        // 导航公共背景
        .narbarBg {
            @include narbarBg;
        }

        // 关于导航背景
        .aboutBg {
            margin-left: calc(var(--narWidth) * -4);
            width: calc(100% + var(--narWidth) * 4) !important;
        }
    }

    .title-about {
      margin-left: calc(var(--narWidth) * 4); //4倍单个导航宽度
      width: calc(100% - var(--narWidth) * 4);
    }

    // 内容
    .content {
        @include content;

        // 内容背景
        .contentBg {
            @include contentBg;
        }
        //最后一个背景
        .lastBg{
            height: calc(100vh - var(--narHeight));
            &::after {
                height: 100vh;
            }
        }
    }
}
</style>