<template>
    <section class="boxItem skill" :style="skillImg">
        <div class="title title-skill">
            <span class="narbarItem" @click="goNarbar(NarbarArr[1].id)">
                <i :class="`iconfont icon-${ NarbarArr[1].icon}`"></i>{{NarbarArr[1].name}}
            </span>
            <div class="narbarBg skillBg"></div>
        </div>
        <div class="content">
            <!-- 专业技能信息 -->
            <div class="skillInfoBox">
                <span class="skillInfoItem" v-for="skill in ResumeConfig.skills">
                    <i class="iconfont icon-point"></i>{{ skill }}
                </span>
            </div>
            <div class="contentBg"></div>
        </div>
        <!-- 箭头 --><!-- 传入当前导航的下一个id -->
        <DownArrow :id="(NarbarArr[1].id + 1)"></DownArrow>
    </section>
</template>

<script setup lang='ts'>
import { useNarbarClick } from '@/hooks/narbarClick';
import gsap from '@/utils/gsap';
import ResumeConfig from '@/config/resume.config';
import NarbarArr from '@/config/narbar.config';
//图片配置对象
import ImgConfig from '@/config/img.config';
//专业技能背景图
let skillImg = computed(() => {
    return {
        '--bg-img' : `url(${ImgConfig.skillImg})`
    }
})

//导航跳转
const { goNarbar } = useNarbarClick()

//技能滚动动画
const skillAnimation = () => {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.skillInfoBox',
            // pin: true,
            start: 'top bottom', //动画的开始位置
            end: '80% 80%', // 动画的结束位置
            scrub: 1,//设置滚动时动画的平滑度。值为 1 表示滚动时动画会平滑地跟随滚动
            // markers: true, //显示滚动触发点的标记 用于调试
            /*
                设置触发动画时的行为。
                这里的含义是：当动画进入视口时，播放动画；当动画离开视口时，不进行任何操作；
                当再次滚动到触发点时，将动画倒播到起始状态
            */
            toggleActions: 'play none reverse none' 
        }
    })
    tl.to('.skillInfoItem', {
      stagger: 0.1, //动画延迟间隔
      keyframes: {
        '0%': { color: '#4c4c4c' },
        '40%': { color: '#4c4c4c' },
        '100%': { color: '#ffffff' }
      }
    })
}

onMounted(() => {
    skillAnimation()
})

</script>

<style lang="scss" scoped>
@import '@/styles/mixins.scss';

// // 专业技能背景图
// .skill {
//     --bg-img: url(../../../assets/image/bg-skill.jpg);
// }

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

        //专业技能信息
        .skillInfoBox {
            box-sizing: border-box;
            padding: 0 20px;
            border-radius: 20px;
            display: flex;
            flex-direction: column;
            color: #fff;
            background-color: rgba(255, 255, 255, 0.1);

            .skillInfoItem {
                box-sizing: border-box;
                padding: 20px 0;
                font-size: var(--skill-info-font-size);
                color: #4c4c4c;
                display: flex;
                align-items: flex-start;
                .iconfont{
                    font-size: var(--skill-info-font-size);
                    margin-right: 5px;
                }
            }
        }

        // 内容背景
        .contentBg {
            @include contentBg;
        }
    }
}
@media (max-width: 800px) {
    .boxItem{
        .content{
            .skillInfoBox{
                margin: 0 10px;
                .skillInfoItem{
                    padding: 10px 5px;
                }
            }
        }
    }
}
</style>
