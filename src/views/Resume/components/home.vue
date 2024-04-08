<template>
    <section class="boxItem home">
        <!-- 导航区 -->
        <Narbar></Narbar>
        <div class="content">
            <div class="authorImgBox">
                <div class="moonImg authorItem"></div>
                <div class="authorImg authorItem"></div>
                <div class="authorBg authorItem"></div>
            </div>
            <div class="authorInfo">
                <span class="name">{{ ResumeConfig.name }}</span>
                <span class="info">{{ ResumeConfig.workName }} - {{ ResumeConfig.degree}}</span>
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
}
onMounted(() => {
    authorImgAnimation()
})
</script>

<style lang="scss" scoped>
@import '@/styles/mixins.scss';

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
            }
        }
    }
}
</style>
