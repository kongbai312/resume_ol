<template>
    <section class="boxItem project">
      <div class="title title-project">
        <span class="narbarItem" @click="goNarbar(3)"><i class="iconfont icon-project"></i>项目</span>
        <div class="narbarBg projectBg"></div>
      </div>
      <div class="content">
        <div class="contentBg"></div>
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

// 项目背景图
.project {
    --bg-img: url(../../../assets/image/bg-project.jpg);
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

        // 项目导航背景
        .projectBg {
            margin-left: calc(var(--narWidth) * -3);
            width: calc(100% + var(--narWidth) * 3) !important;
        }
    }

    .title-project {
      margin-left: calc(var(--narWidth) * 3); //3倍单个导航宽度
      width: calc(100% - var(--narWidth) * 3);
    }

    // 内容
    .content {
        @include content;

        // 内容背景
        .contentBg {
            @include contentBg;
        }
    }
}
</style>