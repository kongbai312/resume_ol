<template>
    <section class="boxItem work">
        <div class="title title-work">
            <span class="narbarItem" @click="goNarbar(2)"><i class="iconfont icon-work"></i>工作经历</span>
            <div class="narbarBg workBg"></div>
        </div>
        <div class="content">
            <!-- 工作经历信息 -->
            <div class="workInfoBox">
                <div class="workInfoItem" v-for="item in 5" :key="item">
                    <div class="itemLeft infoItem">
                        <div class="time">2021/12/12 - 2024/12/12</div>
                        <div class="companyImgBox">
                            <img class="companyImg" src="../../../assets/image/author.png" alt="">
                        </div>
                        <div class="position">安能贸易有限公司</div>
                    </div>
                    <div class="itemRight infoItem">
                        <div class="department">magento建站部</div>
                        <div class="workBox">
                            <span class="workItem">1. 参与公司产品规划构思及需求分析，对涉及的产品主题、用户交互等相关问题提出建议。</span>
                            <span class="workItem">2. 根据效果图，熟练运用相关制作工具独立完成页面制作。</span>
                            <span class="workItem">3. 优化页面，缩减页面体积、加快页面元素的加载速度、优化用户体验。</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="contentBg"></div>
        </div>
    </section>
</template>

<script setup lang='ts'>
import { useNarbarClick } from '@/hooks/narbarClick';
import gsap from '@/utils/gsap';
//导航跳转
const { goNarbar } = useNarbarClick()

//工作经历滚动动画
const workAnimation = () => {
    // 获取所有workInfoItem元素
    const workItems = document.querySelectorAll('.workInfoItem');
    // 给所有的workItem添加动画
    workItems.forEach(( workItem , index ) => {
        const triggerOptions = {
            trigger: workItem,
            start: 'top 90%', //动画的开始位置
            end: '60% 90%', // 动画的结束位置
            scrub: 1,
            toggleActions: 'play none reverse none' 
        } as any
        // 添加内层容器属性的条件 第二个
        let workItemNum = (window.innerWidth < 1366) ? 2 : 3
        if (index >= workItemNum) {
            triggerOptions.scroller = '.workInfoBox'; // 指定内层滚动容器
            triggerOptions.end = '40% 90%'
        }
        let t1 = gsap.timeline({
            scrollTrigger: triggerOptions
        })
        t1.addLabel('spin')
        t1.from(workItem.querySelector('.itemLeft'),{
                x: '-20%',
                opacity: 0
            },
            'spin'
        )
        t1.from(workItem.querySelector('.itemRight'),{
                x: '20%',
                opacity: 0
            },
            'spin'
        )
    })
}

onMounted(() => {
    workAnimation()
})

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
        // 工作经历信息
        .workInfoBox{
            box-sizing: border-box;
            padding-bottom: 15px;
            height: 100%;
            color: #fff;
            display: flex;
            flex-direction: column;
            overflow: scroll;
            .workInfoItem{
                box-sizing: border-box;
                display: flex;
                border-radius: 15px;
                margin-top: 15px;
                // 公共样式
                .infoItem{
                    box-sizing: border-box;
                    padding: 20px 40px;
                    display: flex;
                    flex-direction: column;
                }
                .itemLeft{
                    height: 100%;
                    border-radius: 15px 0 0 15px;
                    width: 20vw;
                    background-color: rgba(255,255,255,0.4);
                    align-items: center;
                    justify-content: space-around;
                    .time{
                        font-size: var(--work-info-time-font-size);
                    }
                    .companyImgBox{
                        box-sizing: border-box;
                        width: 150px;
                        height: 150px;
                        margin: 20px 0;
                        border-radius: 50%;
                        .companyImg{
                            height: 100%;
                            width: 100%;
                            border-radius: 50%;
                        }
                    }
                    .position{
                        font-size: var(--work-info-position-font-size);
                    }
                }
                .itemRight{
                    border-radius: 0 15px 15px 0;
                    width: 40vw;
                    background-color: rgba(0,0,0,0.5);
                    .department{
                        font-size: var(--work-info-department-font-size);
                        font-weight: 700;
                    }
                    .workBox{
                        box-sizing: border-box;
                        flex: 1;
                        display: flex;
                        flex-direction: column;
                        padding: 10px 0;
                        font-size: var(--work-info-work-font-size);
                        .workItem{
                            box-sizing: border-box;
                            padding: 10px 0;
                        }
                    }
                }
            }
        }

        // 内容背景
        .contentBg {
            @include contentBg;
        }
    }
}
@media (max-width: 996px) {
    .boxItem{
        // 内容
        .content{
            // 工作经历信息
            .workInfoBox{
                padding-bottom: 15px;
                .workInfoItem{
                    flex-direction: column;
                    margin-top: 15px;
                    .itemLeft{
                        width: 70vw;
                        border-radius: 8px 8px 0 0;
                        .companyImgBox{
                            width: 60px;
                            height: 60px;
                        }
                    }
                    .itemRight{
                        padding: 10px 10px 0 10px;
                        width: 70vw;
                        border-radius: 0 0 8px 8px;
                        .workBox{
                            .workItem{
                                padding: 10px 0;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
