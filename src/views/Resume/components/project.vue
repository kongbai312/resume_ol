<template>
    <section class="boxItem project">
        <div class="title title-project">
            <span class="narbarItem" @click="goNarbar(3)"><i class="iconfont icon-project"></i>项目</span>
            <div class="narbarBg projectBg"></div>
        </div>
        <div class="content">
            <!-- 项目信息 -->
            <div class="projectInfoBox">
                <div class="projectInfoItem firstProjectInfoItem">
                    <div class="infoItemBox" title="点击查看详情" @click="showProjectDetail(firstProject.id)">
                        <img class="projectItemImg" :src="firstProject.img" alt="">
                        <div class="infoItemContent">
                            <div class="infoItemContent_title"><span class="title_text">{{ firstProject.name }}</span></div>
                            <div class="infoItemContent_profile">{{ firstProject.profile }}</div>
                        </div>
                    </div>
                </div>
                <!-- 横向滚动 -->
                <section class="section-card-view">
                    <div class="sticky-wrapper">
                        <div class="sticky-content">
                            <div class="section-wrapper">
                                <div class="section-card" @click="showProjectDetail(item.id)" title="点击查看详情" v-for="(item ,index) in centerProject" :key="index">
                                    <!-- 只有两个卡片时，添加模糊处理 -->
                                    <div class="section-card-content" :class="{'fuzzy':index === 1 && centerProject.length === 2}">
                                        <div class="infoItemBox">
                                            <img class="projectItemImg" :src="item.img" alt="">
                                            <div class="infoItemContent">
                                                <div class="infoItemContent_title"><span class="title_text">{{item.name}}</span>
                                                </div>
                                                <div class="infoItemContent_profile">{{item.profile}}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div class="projectInfoItem lastProjectInfoItem">
                    <div class="infoItemBox" title="点击查看详情"  @click="showProjectDetail(lastProject.id)" >
                        <img class="projectItemImg" :src="lastProject.img" alt="">
                        <div class="infoItemContent">
                            <div class="infoItemContent_title"><span class="title_text">{{ lastProject.name }}</span></div>
                            <div class="infoItemContent_profile">{{ lastProject.profile }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="contentBg"></div>
        </div>
    </section>
    <Drawer :drawerShow="drawerShow" :projectDetail="currentProjectDetail" @close="closeDrawer"></Drawer>
</template>

<script setup lang='ts'>
import { useNarbarClick } from '@/hooks/narbarClick';
import gsap from '@/utils/gsap';
import ResumeConfig from '@/config/resume.config';
import type { ProjectDetailType } from '@/types/project.d.ts';
//控制drawer显示隐藏
let drawerShow = ref(false)

//当前点击的项目详情
let currentProjectDetail = ref<ProjectDetailType>()

//关闭drawer
const closeDrawer = () => {
    drawerShow.value = false
}

//显示当前的项目详情
const showProjectDetail = ( id : number) => {
    //获取项目详情
    currentProjectDetail.value = ResumeConfig.projects.find( item => item.id === id)!.detail
    //显示drawer
    drawerShow.value = true
}

//第一个项目数据
let firstProject = computed(() => {
    return ResumeConfig.projects[0]
})
//中间滚动数据
let centerProject = computed(() => {
    if(ResumeConfig.projects.length > 2){
        return  ResumeConfig.projects.slice(1,-1)
    }
    else{
        return []
    }
})
//最后一个项目数据
let lastProject = computed(() => {
    return ResumeConfig.projects.slice(ResumeConfig.projects.length - 1)[0]
})

// 实现卡片横向滚动
const cardViewFn = () => {
    // 获取横向滚动视图容器
    const sections = document.querySelectorAll(".section-card-view");
    // 获取所有的Card
    const cards = document.querySelectorAll(".section-card");
    //卡片的宽度
    const cardWidth = cards[0].clientWidth;
    // 获取卡片间的margin-left
    const cardMargin = Number(window.getComputedStyle(cards[1]).getPropertyValue("margin-left").slice(0, -2));
    //卡片的数量
    const cardsNumber = cards.length;
    //获取当前屏幕宽度
    const screenWidth = document.documentElement.clientWidth

    //添加sections动画
    sections.forEach((section) => {
        //获取卡片外层包裹容器
        const wrapper = section.querySelector(".section-wrapper") as Element;
        // 允许滚动的高度容器
        const stickyWrapper = section.querySelector(".sticky-wrapper");
        //到最左侧距离  最后一个要居中，整体卡片宽度为80% ，左右两边分一半为0.1，再省去最后一个margin-left
        const swiperOffset = (cardWidth + cardMargin) * (cardsNumber - 1)
        //横向滚动
        gsap.to(wrapper, {
            scrollTrigger: {
                scroller: '.projectInfoBox',
                trigger: stickyWrapper,
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
            },
            ease: "none",
            x: -swiperOffset
        })
        // //去除模糊  两个卡片才使用去除
        if (cardsNumber === 2) {
            //手机屏幕处理，大屏"top top"，小屏"bottom 90%"
            let cardTwoStart = screenWidth > 700 ? "top top": "bottom 90%"
            //手机屏幕处理，大屏"top top"，小屏"bottom 85%"
            let cardTwoEnd = screenWidth > 700 ? "center top": "bottom 85%"
            gsap.to(cards[1].querySelector(".section-card-content"), {
                scrollTrigger: {
                    trigger: cards[1],
                    scroller: '.projectInfoBox',
                    start: cardTwoStart,
                    end: cardTwoEnd,
                    scrub: 1,
                },
                ease: "none",
                filter: "blur(0px)",
                scale: 1,
            });
        }
    })
    //时间线 模糊相关动画
    const tl = gsap.timeline({})
    //变模糊
    const setFuzzyOption = (target: string, start: string, end: string ,markers: boolean = false) => {
        return {
            scrollTrigger: {
                trigger: target,
                scroller: '.projectInfoBox',
                start: start,
                end: end,
                markers: markers, //显示滚动触发点的标记 用于调试
                scrub: 1,
            },
            filter: "blur(10px)",
            scale: 0.9,
        }
    }
    //变放大模糊然后恢复原样
    const setEnlargeFuzzyRecoveryOption = (target: string, start: string, end: string, markers: boolean = false) => {
        return {
            scrollTrigger: {
                trigger: target,
                scroller: '.projectInfoBox',
                start: start,
                end: end,
                scrub: 1,
                markers: markers, //显示滚动触发点的标记 用于调试
                toggleActions: 'play none reverse none'
            },
            keyframes: {
                '0%': { filter: "blur(0px)", scale: 1 },
                '50%': { filter: "blur(5px)", scale: 1.1 },
                '100%': { filter: "blur(0px)", scale: 1 }
            }
        }
    }
    // 第一个盒子向上滚动的时候变模糊
    tl.to('.firstProjectInfoItem', setFuzzyOption('.firstProjectInfoItem', "top top", "center top"))
    //section-card-view的动画配置项
    let sectionCardOption: any
    // section-card-view模糊配置
    let sectionCardFuzzyOption: any
    // 最后一个盒子向上滚动的时候变放大模糊然后恢复
    let lastBoxOption: any
    if (screenWidth > 700) {//大屏处理
        sectionCardOption = setEnlargeFuzzyRecoveryOption('.section-card-view', "top bottom", "30% bottom")
        sectionCardFuzzyOption = setFuzzyOption('.section-card-view', "bottom 80%", "bottom 70%")
    }
    else if (screenWidth <= 700) {//小屏处理理
        sectionCardOption = setEnlargeFuzzyRecoveryOption('.section-card-view', "top bottom", "30% center")
        sectionCardFuzzyOption = setFuzzyOption('.section-card-view', "center 25%", "center 15%")
    }
    //最后一个盒子配置
    lastBoxOption = setEnlargeFuzzyRecoveryOption('.lastProjectInfoItem', "top bottom", "center 80%")
    // section-card向上滚动模糊放大-恢复
    tl.to('.section-card-view', sectionCardOption)
    // section-card向上滚动的时候变模糊
    tl.to('.section-card-view', sectionCardFuzzyOption)
    // 模糊放大-恢复
    tl.to('.lastProjectInfoItem', lastBoxOption)
}
onMounted(() => {
    cardViewFn()
})
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

        .projectInfoBox {
            box-sizing: border-box;
            padding: 20px;
            height: 100%;
            width: 100vw;
            display: flex;
            flex-direction: column;
            align-items: center;
            overflow: scroll;

            .projectInfoItem {
                flex-shrink: 0;
                width: var(--projectInfoItem-width);
                height: 100%;
                background-color: transparent;
                margin-bottom: 20px;
                @include flex-center;

                .infoItemBox {
                    @include projectCard;
                }
            }

            .lastProjectInfoItem {
                margin-top: 20px;
                margin-bottom: 0;
            }

            .section-card-view {

                // 允许滚动的高度
                .sticky-wrapper {
                    height: var(--project-sticky-wrapper-height);
                }

                //粘性盒子容器，根据父级滚动容器定位
                .sticky-content {
                    position: sticky;
                    width: 100%;
                    height: auto;
                    top: 0px;
                    overflow: hidden;
                }

                //卡片外层包裹容器
                .section-wrapper {
                    display: flex;
                    width: var(--projectInfoItem-width);
                }

                //单个卡片样式
                .section-card {
                    width: 100%;
                    flex-shrink: 0;
                    height: calc(100vh - var(--narHeight) - 40px);
                    background-color: transparent;
                    @include flex-center;
                    .infoItemBox {
                        @include projectCard;
                    }
                }

                //卡片间距
                .section-card+.section-card {
                    margin-left: 3.125vw;
                }

                //下一张卡片模糊处理
                .fuzzy {
                    transform: scale(0.8);
                    transform-origin: left;
                    filter: blur(10px);
                }
            }
        }

        // 内容背景
        .contentBg {
            @include contentBg;
        }
    }
}
</style>