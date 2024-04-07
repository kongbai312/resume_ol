<template>
  <!-- 内容区 -->
  <div class="box_container">
    <!-- 首页 -->
    <Home></Home>
    <!-- 专业技能 -->
    <Skill></Skill>
    <!-- 工作经历 -->
    <Work></Work>
    <!-- 项目成果 -->
    <Project></Project>
    <!-- 关于 -->
    <About></About>
  </div>
</template>

<script setup lang='ts'>
import Home from './components/home.vue';
import Skill from './components/skill.vue';
import Work from './components/work.vue';
import Project from './components/project.vue';
import About from './components/about.vue';
</script>

<style lang="scss" scoped>
// @import '@/styles/mixins.scss';

// .box_container {
//   // 首页背景图
//   .home {
//     background: linear-gradient(to right, rgba(0, 0, 0, .4), rgba(0, 0, 0, 0.4)), url(../../assets/image/bg-home.jpg);
//     background-size: cover;
//     background-position: center;
//   }

//   // 专业技能背景图
//   .skill {
//     --bg-img: url(../../assets/image/bg-skill.jpg);
//   }

//   // 工作经历背景图
//   .work {
//     --bg-img: url(../../assets/image/bg-work.jpg);
//   }

//   // 项目背景图
//   .project {
//     --bg-img: url(../../assets/image/bg-project.jpg);
//   }

//   //关于背景图
//   .about {
//     --bg-img: url(../../assets/image/bg-about.jpg);
//   }

//   .boxItem {
//     position: sticky;
//     top: var(--narHeight);
//     margin-top: var(--narHeight);
//     width: 100%;
//     height: calc(100vh - var(--narHeight));
//     display: flex;
//     flex-direction: column;
//     &:nth-child(1) {
//       top: 0;
//       margin-top: 0;
//       height: 100vh;
//     }

//     // 头部标题
//     .title {
//       position: absolute;
//       margin-top: calc(-1 * var(--narHeight));
//       color: #fff;
//       height: var(--narHeight);
//       border-radius: var(--narBordRadius);
//       overflow: hidden;

//       // 导航
//       .narbarItem {
//         height: 100%;
//         width: var(--narWidth);
//         @include flex-center;
//         font-size: 6px;
//         cursor: pointer;
//         .iconfont {
//           margin-right: 5px;
//           font-size: 6px;
//         }
//       }

//       // 导航公共背景
//       .narbarBg {
//         margin-top: calc(-1 * var(--narHeight));
//         pointer-events: none;
//         @include bg-img-after;
//       }

//       // 专业技能导航背景
//       .skillBg {
//         margin-left: calc(-1 * var(--narWidth));
//         width: calc(100% + var(--narWidth)) !important;
//       }

//       // 工作经历导航背景
//       .workBg {
//         margin-left: calc(var(--narWidth) * -2);
//         width: calc(100% + var(--narWidth) * 2) !important;
//       }

//       // 项目导航背景
//       .projectBg {
//         margin-left: calc(var(--narWidth) * -3);
//         width: calc(100% + var(--narWidth) * 3) !important;
//       }

//       // 关于导航背景
//       .aboutBg {
//         margin-left: calc(var(--narWidth) * -4);
//         width: calc(100% + var(--narWidth) * 4) !important;
//       }
//     }

//     .title-skill {
//       margin-left: var(--narWidth);
//       width: calc(100% - var(--narWidth));
//     }

//     .title-work {
//       margin-left: calc(var(--narWidth) * 2); //2倍单个导航宽度
//       width: calc(100% - var(--narWidth) * 2);
//     }

//     .title-project {
//       margin-left: calc(var(--narWidth) * 3); //3倍单个导航宽度
//       width: calc(100% - var(--narWidth) * 3);
//     }

//     .title-about {
//       margin-left: calc(var(--narWidth) * 4); //4倍单个导航宽度
//       width: calc(100% - var(--narWidth) * 4);
//     }

//     // 内容
//     .content {
//       position: relative;
//       height: calc(100vh - var(--narHeight));
//       @include flex-center;
//       .authorBox{
//         position: relative;
//         width: 150px;
//         height: 150px;
//         .authorItem{
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 150px;
//           height: 150px;
//           border-radius: 50%;
//         }
//         // 月亮
//         .moonImg {
//           background: linear-gradient(to right, rgba(0, 0, 0, .2), rgba(0, 0, 0, 0.2)), url(../../assets/image/moon.jpg);
//           background-size: cover;
//         }
//         // 作者头像
//         .authorImg{
//           background: linear-gradient(to right, rgba(0, 0, 0, .1), rgba(0, 0, 0, 0.1)), url(../../assets/image/author.png);
//           background-size: cover;
//           transform: rotateY(180deg);
//           opacity: 0;
//         }
//         //发光效果
//         .authorBg{
//           transform: scale(0.6);
//           background-color: #8EA4BF;
//           opacity: 0;
//           margin: auto;
//           z-index: -1;
//         }
//       }


      

//       // 内容背景
//       .contentBg {
//         overflow: hidden;
//         @include bg-img-after;
//         height: 100vh;
//         top: 0;
//         z-index: -1;
//         &::after {
//           margin-top: calc(-1 * var(--narHeight)) !important;
//         }
//       }

//       //最后一个背景
//       .lastBg {
//         height: calc(100vh - var(--narHeight));
//         &::after {
//           height: 100vh;
//         }
//       }
//     }
//   }

// }
</style>