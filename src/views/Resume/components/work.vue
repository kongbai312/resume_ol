<template>
    <section class="boxItem work">
        <div class="title title-work">
            <span class="narbarItem" @click="goNarbar(2)"><i class="iconfont icon-work"></i>工作经历</span>
            <div class="narbarBg workBg"></div>
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

// 工作经历背景图
.work {
    --bg-img: url(../../../assets/image/bg-work.jpg);
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

        // 工作经历导航背景
        .workBg {
            margin-left: calc(var(--narWidth) * -2);
            width: calc(100% + var(--narWidth) * 2) !important;
        }
    }

    .title-work {
        margin-left: calc(var(--narWidth) * 2); //2倍单个导航宽度
        width: calc(100% - var(--narWidth) * 2);
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
