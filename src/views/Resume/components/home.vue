<template>
    <section class="boxItem home">
        <!-- 导航区 -->
        <Narbar></Narbar>
        <div class="content">
            <div class="authorBox">
                <div class="moonImg authorItem"></div>
                <div class="authorImg authorItem"></div>
                <div class="authorBg authorItem"></div>
            </div>
        </div>
    </section>
</template>

<script setup lang='ts'>
import gsap from '@/utils/gsap';
//头像动画
let tl = gsap.timeline({ duration: 3, ease: 'power2.inOut' })
const authorImgAnimation = () => {
    tl.from(".moonImg", { x: 0, y: -610, opacity: 0 })
    tl.to(".moonImg", { x: 0, y: 50, opacity: 1 })
    tl.to(".moonImg", { x: 0, y: -25, opacity: 1 })
    tl.to(".moonImg", { x: 0, y: 10, opacity: 1 })
    tl.to(".moonImg", { x: 0, y: -5, opacity: 1 })
    tl.to(".moonImg", { x: 0, y: 0, opacity: 1 })
    tl.to(".authorBox", { opacity: 1, rotationY: 180, scale: 2, duration: 1 })
    tl.to(".authorImg", { opacity: 1, duration: 0.5 }, "-=0.5")
    tl.add(() => {
        let nestedTl = gsap.timeline({ duration: 1.5, repeat: -1 });
        nestedTl.to(".authorBg", { duration: 0.5, opacity: 1 });
        nestedTl.to(".authorBg", { opacity: 0, scale: 1.2, duration: 2 })
    })
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

        .authorBox {
            position: relative;
            width: 150px;
            height: 150px;

            .authorItem {
                position: absolute;
                top: 0;
                left: 0;
                width: 150px;
                height: 150px;
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
    }

}
</style>
