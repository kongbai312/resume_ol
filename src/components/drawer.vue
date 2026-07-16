<template>
    <el-drawer :with-header="false" style="border-radius: 20px 20px 0 0;" direction="btt" :model-value="drawerShow"
        :size="heightPercentage" @close="close" @open="open">
        <div ref="drawerBoxRef" class="drawerBox" v-if="Object.keys(projectDetail).length !== 0">
            <div class="drawerHeader">
                <div class="technologyTitle" v-if="projectDetail.title !== ''">{{ projectDetail.title }}</div>
                <div
                    class="technologyUrl"
                    @click="urlClick(projectDetail.url)"
                    v-if="projectDetail.url !== ''"
                >在线地址：{{ projectDetail.url }}</div>
            </div>

            <div class="drawerContent">
                <div class="drawerMain">
                    <div class="summaryGrid">
                        <div class="summaryCard summaryProfile" v-if="projectDetail.profile !== ''">
                            <div class="summaryLabel">项目简介</div>
                            <div class="summaryContent">{{ projectDetail.profile }}</div>
                        </div>
                        <div class="summaryCard" v-if="projectDetail.result !== ''">
                            <div class="summaryLabel">项目成果</div>
                            <div class="summaryContent">{{ projectDetail.result }}</div>
                        </div>
                        <div class="summaryCard" v-if="projectDetail.module !== ''">
                            <div class="summaryLabel">职责模块</div>
                            <div class="summaryContent">{{ projectDetail.module }}</div>
                        </div>
                    </div>

                    <div class="detailBlock technicalPointsBlock" v-if="projectDetail.technicalPoints.length !== 0">
                        <div class="blockTitle">技术要点</div>
                        <div class="technologyItemBox">
                            <div
                                class="technologyItem"
                                :key="index" v-for="(item, index) in projectDetail.technicalPoints"
                            >{{ item }}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="drawerAside" v-if="techStackList.length !== 0">
                    <div class="detailBlock stackBlock">
                        <div class="blockTitle">技术栈</div>
                        <div class="stackList">
                            <span class="stackTag" :key="item" v-for="item in techStackList">{{ item }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="technologySectionBox" v-if="projectDetail.sections?.length">
                <div class="technologySection" :key="section.title" v-for="section in projectDetail.sections">
                    <div class="technologySectionTitle">{{ section.title }}</div>
                    <div class="technologyItemBox">
                        <div
                            class="technologyItem"
                            :key="item"
                            v-for="item in section.points"
                        >{{ item }}</div>
                    </div>
                </div>
            </div>
        </div>
    </el-drawer>
</template>

<script setup lang='ts'>
import { nextTick } from 'vue';
import type { ProjectDetailType } from '@/types/project.d.ts';

let { drawerShow = false, projectDetail = {} as ProjectDetailType } = defineProps<{
    drawerShow: boolean,//控制drawer显示隐藏
    projectDetail: ProjectDetailType//项目详情
}>()

const emit = defineEmits<{
    (eventName: 'close'): void
}>()

//关闭的回调
const close = () => {
    emit('close')
    //允许滚动
    document.body.style.overflow = 'auto';
}

//在线地址点击
const urlClick = ( url : string) => {
    window.open(url)
}

const techStackList = computed(() => {
    return projectDetail.technologyStack
        ? projectDetail.technologyStack.split('+').map(item => item.trim()).filter(Boolean)
        : []
})

//drawerBox元素
let drawerBoxRef = ref()

//drawerBox子元素高度总和 与 视口高度比例
let heightProportion = ref(0.6)
const getDrawerContentHeight = () => {
    if (!drawerBoxRef.value) return 0

    let drawerStyle = window.getComputedStyle(drawerBoxRef.value)
    let heightAll = parseFloat(drawerStyle.paddingTop) + parseFloat(drawerStyle.paddingBottom)

    Array.from(drawerBoxRef.value.children).forEach((item: any) => {
        let itemStyle = window.getComputedStyle(item)
        heightAll += item.getBoundingClientRect().height
        heightAll += parseFloat(itemStyle.marginTop) + parseFloat(itemStyle.marginBottom)
    })

    return heightAll
}
//打开回调
const open = () => {
    //将body元素进行滚动锁定
    document.body.style.overflow = 'hidden';
    nextTick(() => {
        let heightAll = getDrawerContentHeight()
        heightProportion.value = heightAll / window.innerHeight
    })
}

//比例转换为百分数
let heightPercentage = computed(() => {
    let minHeight = window.innerWidth <= 996 ? 92 : 48
    //多百分之2的预留高度
    return Math.max(Math.min(heightProportion.value * 100 + 2, 92), minHeight).toFixed(2) + '%'
})
</script>

<style lang="scss" scoped>
.drawerBox {
    box-sizing: border-box;
    display: block;
    height: 100%;
    width: calc(100% - 160PX);
    max-width: 1480PX;
    margin: 0 auto;
    padding: 24PX 0 32PX;
    overflow: auto;
    color: #1f2937;
    font-size: 15PX;
    line-height: 1.72;
    scrollbar-gutter: stable;

    .drawerHeader {
        box-sizing: border-box;
        margin-bottom: 18PX;
        padding-bottom: 14PX;
        border-bottom: 1PX solid #e5e7eb;
    }

    .technologyTitle {
        box-sizing: border-box;
        max-width: 100%;
        font-weight: 800;
        font-size: 21PX;
        line-height: 1.42;
        color: #111827;
    }

    .technologyUrl {
        width: fit-content;
        max-width: 100%;
        margin-top: 8PX;
        color: #2563eb;
        font-size: 13PX;
        line-height: 1.5;
        cursor: pointer;
        word-break: break-all;
    }

    .drawerContent {
        display: grid;
        grid-template-columns: minmax(0, 1fr) 320PX;
        gap: 24PX;
        align-items: start;
        margin-bottom: 16PX;
    }

    .drawerMain {
        display: flex;
        min-width: 0;
        flex-direction: column;
        gap: 14PX;
    }

    .drawerAside {
        min-width: 0;
    }

    .summaryGrid {
        display: flex;
        flex-direction: column;
        gap: 12PX;
    }

    .summaryCard,
    .detailBlock,
    .technologySection {
        box-sizing: border-box;
        border: 1PX solid #e5e7eb;
        border-radius: 8PX;
        background: #ffffff;
    }

    .summaryCard {
        border-left: 4PX solid #dbeafe;
        padding: 12PX 14PX;
    }

    .summaryLabel,
    .blockTitle,
    .technologySectionTitle {
        color: #0f172a;
        font-size: 14PX;
        font-weight: 800;
        line-height: 1.4;
    }

    .summaryContent {
        margin-top: 6PX;
        color: #334155;
        font-size: 15PX;
        line-height: 1.75;
    }

    .detailBlock {
        padding: 14PX 16PX;
    }

    .stackBlock {
        background: #f8fafc;
    }

    .stackList {
        display: flex;
        flex-wrap: wrap;
        gap: 6PX;
        margin-top: 10PX;
    }

    .stackTag {
        box-sizing: border-box;
        border: 1PX solid #bfdbfe;
        border-radius: 999PX;
        padding: 2PX 8PX;
        background: #eff6ff;
        color: #1d4ed8;
        font-size: 12PX;
        font-weight: 700;
        line-height: 1.6;
        word-break: break-word;
    }

    .technologyItemBox {
        display: flex;
        flex-direction: column;
        gap: 8PX;
        margin-top: 10PX;

        .technologyItem {
            position: relative;
            box-sizing: border-box;
            padding-left: 14PX;
            color: #334155;
            font-size: 14PX;
            line-height: 1.75;
        }

        .technologyItem::before {
            position: absolute;
            top: 0.78em;
            left: 0;
            width: 5PX;
            height: 5PX;
            border-radius: 50%;
            background: #2563eb;
            content: '';
        }
    }

    .technologySectionBox {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 16PX;
        align-items: start;
        margin-top: 18PX;

        .technologySection {
            box-sizing: border-box;
            border-left: 4PX solid #2563eb;
            padding: 13PX 15PX 15PX;
            background: #ffffff;
        }

        .technologySection:first-child:nth-last-child(3) {
            grid-row: span 2;
        }

        .technologySection:nth-child(n + 4) {
            grid-column: span 1;
        }

        .technologySectionTitle {
            color: #1d4ed8;
        }
    }
}

@media (max-width: 996PX) {
    .drawerBox {
        width: 100%;
        padding: 16PX 14PX 20PX;
        font-size: 14PX;

        .technologyTitle {
            font-size: 18PX;
            line-height: 1.45;
        }

        .drawerHeader {
            margin-bottom: 14PX;
            padding-bottom: 12PX;
        }

        .drawerContent {
            grid-template-columns: 1fr;
            gap: 12PX;
            margin-bottom: 12PX;
        }

        .drawerMain {
            display: contents;
        }

        .summaryGrid {
            order: 1;
        }

        .drawerAside {
            order: 2;
        }

        .technicalPointsBlock {
            order: 3;
        }

        .technologySectionBox {
            grid-template-columns: 1fr;
            gap: 10PX;
            margin-top: 12PX;

            .technologySection {
                grid-column: auto;
                grid-row: auto;
            }
        }

        .summaryCard {
            padding: 10PX 12PX;
        }

        .summaryContent {
            font-size: 14PX;
            line-height: 1.7;
        }

        .detailBlock {
            padding: 12PX;
        }

        .stackTag {
            font-size: 12PX;
            line-height: 1.55;
        }

        .technologyItemBox {
            gap: 8PX;

            .technologyItem {
                padding-left: 14PX;
                font-size: 14PX;
                line-height: 1.7;
            }
        }
    }
}
</style>
