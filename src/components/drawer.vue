<template>
    <el-drawer :with-header="false" style="border-radius: 20px 20px 0 0;" direction="btt" :model-value="drawerShow"
        :size="heightPercentage" @close="close" @open="open">
        <div ref="drawerBoxRef" class="drawerBox" v-if="Object.keys(projectDetail).length !== 0">
            <div class="technologyTitle" v-if="projectDetail.title !== ''">{{ projectDetail.title }}</div>
            <div 
                class="technologyUrl technology"
                @click="urlClick(projectDetail.url)" 
                v-if="projectDetail.url !== ''"
            >在线地址：{{ projectDetail.url }}</div>
            <div 
                class="technologyProfile technology" 
                v-if="projectDetail.profile !== ''"
            >项目简介：{{ projectDetail.profile }}</div>
            <div 
                class="technologyResult technology" 
                v-if="projectDetail.result !== ''"
            >项目成果：{{ projectDetail.result }}</div>
            <div 
                class="technologyStack technology" 
                v-if="projectDetail.technologyStack !== ''"
            >技术栈：{{ projectDetail.technologyStack }}</div>
            <div 
                class="technologyModule technology" 
                v-if="projectDetail.module !== ''"
            >职责模块：{{ projectDetail.module }}
            </div>
            <div class="technologyItemBox" v-if="projectDetail.technicalPoints.length !== 0">
                <div 
                    class="technologyItem" 
                    :key="index" v-for="(item, index) in projectDetail.technicalPoints"
                >{{ item }}
                </div>
            </div>
        </div>
    </el-drawer>
</template>

<script setup lang='ts'>
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

//drawerBox元素
let drawerBoxRef = ref()

//drawerBox子元素高度总和 与 视口高度比例
let heightProportion = ref(0)
//打开回调
const open = () => {
    let heightAll = 0
    //获取所有的子元素
    Array.from(drawerBoxRef.value.children).forEach((item: any) => {
        heightAll += item.clientHeight
    })
    heightProportion.value = heightAll / window.innerHeight
    //将body元素进行滚动锁定
    document.body.style.overflow = 'hidden';
}

//比例转换为百分数
let heightPercentage = computed(() => {
    //多百分之2的预留高度
    return (heightProportion.value * 100 + 2).toFixed(2) + '%'
})
</script>

<style lang="scss" scoped>
.drawerBox {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 100%;

    .technologyTitle {
        box-sizing: border-box;
        font-weight: 700;
        font-size: var(--project-detail-font-size);
        padding: 10px 0 20px;
    }

    .technology {
        box-sizing: border-box;
        font-size: var(--project-detail-font-size);
        padding: 10px 0;
    }
    .technologyUrl{
        cursor: pointer;
    }
    .technologyItemBox {
        display: flex;
        flex-direction: column;

        .technologyItem {
            box-sizing: border-box;
            padding: 10px 0;
            font-size: var(--project-detail-font-size);
        }
    }
}

@media (max-width: 996px) {
    .drawerBox {
        padding: 5px;

        .technologyStack {
            word-break: break-all;
        }
        .technologyUrl{
            word-break: break-all;
        }
        .technologyItemBox {
            .technologyItem {
                padding: 5px 0;
            }
        }
    }
}
</style>
