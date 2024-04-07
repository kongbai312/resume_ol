<template>
    <section class="boxItem skill">
        <div class="title title-skill">
            <span class="narbarItem" @click="goNarbar(1)"><i class="iconfont icon-skill"></i>专业技能</span>
            <div class="narbarBg skillBg"></div>
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

// 专业技能背景图
.skill {
    --bg-img: url(../../../assets/image/bg-skill.jpg);
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

        // 专业技能导航背景
        .skillBg {
            margin-left: calc(-1 * var(--narWidth));
            width: calc(100% + var(--narWidth)) !important;
        }
    }

    .title-skill {
        margin-left: var(--narWidth);
        width: calc(100% - var(--narWidth));
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
