<template>
    <section class="boxItem about">
        <div class="title title-about">
            <span class="narbarItem" @click="goNarbar(4)"><i class="iconfont icon-about"></i>关于</span>
            <div class="narbarBg aboutBg">
                <Star v-if="!isMobile" :imageUrl="''" :heightBoolean="'big'"></Star>
            </div>
        </div>
        <div class="content">
            <div class="aboutInfoBox">
                <div class="infoTitleBox">
                    <div class="infoTitleBox_title">感谢您的莅临</div>
                    <div class="infoTitleBox_prompt">如果合适，可以请您在下方联系我</div>
                </div>
                <div class="buttonBox">
                    <span class="buttonItem" @click="buttonClick('qq')"><i class="iconfont icon-qq"></i>QQ</span>
                    <span class="buttonItem" @click="buttonClick('wechat')"><i
                            class="iconfont icon-wechat"></i>Wechat</span>
                    <span class="buttonItem" @click="buttonClick('email')"><i
                            class="iconfont icon-email"></i>Email</span>
                    <span class="buttonItem" @click="buttonClick('phone')"><i
                            class="iconfont icon-phone"></i>Phone</span>
                </div>
            </div>
            <div class="contentBg lastBg">
                <Star v-if="!isMobile" :imageUrl="''" :heightBoolean="'normal'"></Star>
            </div>
        </div>
    </section>
</template>

<script setup lang='ts'>
import { useNarbarClick } from '@/hooks/narbarClick';
import Star from '@/components/star/star.vue';
import { useIsMobile, useCopy } from '@/hooks';
//导航跳转
const { goNarbar } = useNarbarClick()

//是否是手机端
const { isMobile } = useIsMobile()

//引入复制
const { copyInfo } = useCopy()
//点击按钮
const buttonClick = (type: string) => {
    if (type === 'qq') {
        if (isMobile.value) {
            copyInfo('312781556')
            // 使用QQ的URL Scheme来打开微信，并跳转到添加好友页面
            window.location.href = `mqqapi://card/show_pslcard?uin=312781556`
        }
        else {
            copyInfo('312781556', '已复制QQ到剪贴板')
        }
    }
    else if (type === 'wechat') {
        copyInfo('Zhby312', '已复制微信到剪贴板')
    }
    else if (type === 'email') {
        if (isMobile.value) {
            // 替换为你的邮件主题
            const subject = '招聘';

            // 替换为你的邮件内容
            const body = 'BOSS请填写您的内容';

            // 使用邮件的URL Scheme来发送邮件
            window.location.href = `mailto:zbywork312@163.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        }
        copyInfo('zbywork312@163.com','已复制邮箱到剪贴板，手机用户将会前往app')
    }
    else if (type === 'phone') {
        // 使用电话的URL Scheme来拨打电话
        copyInfo('13760171072', '已复制手机号到剪贴板')
    }
}

</script>

<style lang="scss" scoped>
@import '@/styles/mixins.scss';

//关于背景图
.about {
    --bg-img: url(../../../assets/image/bg-about.jpg);
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

        // 关于导航背景
        .aboutBg {
            margin-left: calc(var(--narWidth) * -4);
            width: calc(100% + var(--narWidth) * 4) !important;
        }
    }

    .title-about {
        margin-left: calc(var(--narWidth) * 4); //4倍单个导航宽度
        width: calc(100% - var(--narWidth) * 4);
    }

    // 内容
    .content {
        @include content;

        // 内容盒子
        .aboutInfoBox {
            width: 100%;
            height: 100%;
            @include flex-center;
            flex-direction: column;

            //标题
            .infoTitleBox {
                display: flex;
                flex-direction: column;
                align-items: center;

                .infoTitleBox_title {
                    color: #fff;
                    font-size: var(--about-title-font-size);
                    margin-bottom: 40px;
                }

                .infoTitleBox_prompt {
                    color: rgba(255, 255, 255, 0.5);
                    font-size: var(--about-prompt-font-size);
                }
            }

            //按钮
            .buttonBox {
                display: flex;
                margin-top: 50px;

                .buttonItem {
                    box-sizing: border-box;
                    @include flex-center;
                    border: 2px solid #fff;
                    height: 70px;
                    width: 180px;
                    border-radius: 20px;
                    font-size: var(--about-buttom-font-size);
                    color: #fff;
                    cursor: pointer;

                    &:hover {
                        background-color: #fff;
                        color: #333;

                        .iconfont {
                            color: #333;
                        }
                    }

                    .iconfont {
                        color: #fff;
                        margin-right: 10px;
                        font-size: var(--about-buttom-icon-font-size);
                    }
                }

                //按钮间距
                .buttonItem+.buttonItem {
                    margin-left: 40px;
                }
            }
        }

        // 内容背景
        .contentBg {
            @include contentBg;
        }

        //最后一个背景
        .lastBg {
            height: calc(100vh - var(--narHeight));

            &::after {
                height: 100vh;
            }
        }
    }
}

@media (max-width: 996px) {
    .boxItem {

        // 内容
        .content {

            // 内容盒子
            .aboutInfoBox {

                //标题
                .infoTitleBox {
                    .infoTitleBox_title {
                        margin-bottom: 20px;
                    }
                }

                //按钮
                .buttonBox {
                    flex-direction: column;
                    margin-top: 20px;

                    .buttonItem {
                        width: 150px;
                        height: 40px;
                        border-radius: 10px;

                        .iconfont {
                            color: #fff;
                            margin-right: 5px;
                            font-size: var(--about-buttom-icon-font-size);
                        }
                    }

                    //按钮间距
                    .buttonItem+.buttonItem {
                        margin-left: 0px;
                        margin-top: 10px;
                    }
                }
            }
        }
    }
}
</style>