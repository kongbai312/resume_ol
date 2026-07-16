<template>
    <section class="boxItem home" :style="homeImg">
        <!-- 导航区 -->
        <Narbar></Narbar>
        <div class="content">
            <div class="authorImgBox">
                <div class="moonImg authorItem" :style="moonImg"></div>
                <div class="authorImg authorItem" :style="authorImg"></div>
                <div class="authorBg authorItem"></div>
            </div>
            <div class="authorInfo">
                <span class="name">{{ ResumeConfig.name }}</span>
                <span class="info">{{ ResumeConfig.workName }} - {{ ResumeConfig.degree}}</span>
                <span class="info professional">{{ResumeConfig.professional}}</span>
                <div class="advantageBox">
                    <span class="advantageItem" v-for="item in ResumeConfig.advantages" :key="item">{{ item }}</span>
                </div>
            </div>
        </div>
        <!-- 箭头 --><!-- 传入当前导航的下一个id -->
        <DownArrow :id="(NarbarArr[0].id + 1)"></DownArrow>
    </section>
</template>

<script setup lang='ts'>
import ResumeConfig from '@/config/resume.config';
import gsap from '@/utils/gsap';
import NarbarArr from '@/config/narbar.config';
//图片配置对象
import ImgConfig from '@/config/img.config';
//作者头像
let authorImg = computed(() => {
    let imgObj = {
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, .1), rgba(0, 0, 0, 0.1)),url(${ImgConfig.authorImg})`
    }
    return imgObj
})
//月亮图片
let moonImg = computed(() => {
    let imgObj = {
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, .2), rgba(0, 0, 0, 0.2)),url(${ImgConfig.moonImg})`
    }
    return imgObj
})
//主页背景
let homeImg = computed(() => {
    let imgObj = {
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, .4), rgba(0, 0, 0, 0.4)),url(${ImgConfig.homeImg})`
    }
    return imgObj
})

//头像动画
let tl = gsap.timeline({ duration: 3, ease: 'power2.inOut' })
const authorImgAnimation = () => {
    tl.from(".moonImg", { x: 0, y: -610, opacity: 0 })
    tl.to(".moonImg", { x: 0, y: 50, opacity: 1 })
    tl.to(".moonImg", { x: 0, y: -25, opacity: 1 })
    tl.to(".moonImg", { x: 0, y: 10, opacity: 1 })
    tl.to(".moonImg", { x: 0, y: -5, opacity: 1 })
    tl.to(".moonImg", { x: 0, y: 0, opacity: 1 })
    tl.to(".authorImgBox", { opacity: 1, rotationY: 180, scale: 2, duration: 1 })
    tl.to(".authorImg", { opacity: 1, duration: 0.5 }, "-=0.5")
    tl.add(() => {
        let nestedTl = gsap.timeline({ duration: 1.5, repeat: -1 });
        nestedTl.to(".authorBg", { duration: 0.5, opacity: 1 });
        nestedTl.to(".authorBg", { opacity: 0, scale: 1.2, duration: 2 })
    })
    tl.to(".authorInfo .name", { opacity: 1 , duration: 1})
    tl.to(".authorInfo .info", { opacity: 1 , duration: 1})
    tl.to(".advantageItem", { opacity: 1, y: 0, stagger: 0.08, duration: 0.6 })
}
onMounted(() => {
    authorImgAnimation()
})
</script>

<style lang="scss" scoped>
@use '@/styles/mixins.scss' as *;

// 首页背景图
.home {
    background: linear-gradient(to right, rgba(0, 0, 0, .4), rgba(0, 0, 0, 0.4)), url(../../../assets/image/bg-home.jpg);
    background-size: cover;
    background-position: center;
}

.boxItem {
    @include boxItem;
    top: 0;
    margin-top: 0;
    height: 100vh;

    // 内容
    .content {
        @include content;
        flex-direction: column;
        .authorImgBox {
            position: relative;
            width: var(--home-authorImg-length);
            height: var(--home-authorImg-length);

            .authorItem {
                position: absolute;
                top: 0;
                left: 0;
                width: var(--home-authorImg-length);
                height: var(--home-authorImg-length);
                border-radius: 50%;
            }

            // 月亮
            .moonImg {
                background: linear-gradient(to right, rgba(0, 0, 0, .2), rgba(0, 0, 0, 0.2)), url(../../../assets/image/moon.jpg);
                background-size: cover;
            }

            // 作者头像
            .authorImg {
                background: linear-gradient(to right, rgba(0, 0, 0, .1), rgba(0, 0, 0, 0.1)), url(../../../assets/image/author.png);
                background-size: cover;
                transform: rotateY(180deg);
                opacity: 0;
            }

            //发光效果
            .authorBg {
                transform: scale(0.6);
                background-color: #8EA4BF;
                opacity: 0;
                margin: auto;
                z-index: -1;
            }
        }
        .authorInfo{
            margin-top: 120px;
            display: flex;
            flex-direction: column;
            align-items: center;
            color: #fff;
            span{
                box-sizing: border-box;
                padding: 10px 0;
                opacity: 0;
            }
            .name{
                font-size: var(--home-name-font-size);
            }
            .info{
                font-size: var(--home-info-font-size);
                margin-top: 10px;
                color: rgba(255,255,255,0.8);
            }
            .professional{
                font-size: var(--home-professional-font-size);
            }
            .advantageBox {
                box-sizing: border-box;
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                gap: 10px;
                max-width: 760px;
                margin-top: 20px;
                padding: 0 20px;
            }
            .advantageItem {
                box-sizing: border-box;
                padding: 8px 14px;
                border: 1px solid rgba(255, 255, 255, 0.45);
                border-radius: 999px;
                background: rgba(0, 0, 0, 0.25);
                color: rgba(255, 255, 255, 0.86);
                font-size: var(--home-professional-font-size);
                backdrop-filter: blur(8px);
                opacity: 0;
                transform: translateY(10px);
            }
        }
    }

}

@media (max-width: 800px) {
    .boxItem{
        .content{
            .authorInfo{
                margin-top: 60px;
                .info{
                    margin-top: 5px;
                }
                .advantageBox {
                    gap: 6px;
                    margin-top: 12px;
                    max-width: 90vw;
                    padding: 0 8px;
                }
                .advantageItem {
                    padding: 6px 9px;
                }
            }
        }
    }
}
</style>
