import Company1 from '@/assets/image/company1.jpg';
//个人博客图片
import BlogImg from '@/assets/image/blog.png';
//贸速达图片
import MaosudaImg from '@/assets/image/maosuda.jpg';
//修仙全靠运气图片
import xiuxianImg from '@/assets/image/xiuxian.png';
//大屏数据监控
import bigScreenImg from '@/assets/image/bigscreen.png';

export default {
    //自己的姓名
    name : '朱博艺',
    //从事工作
    workName : '2年前端',
    //学历
    degree : '本科',
    //个人技能
    skills : [
        '熟练使用 Vue2.0 、Vue-Router、Vuex、Vue-axios，熟练掌握SPA程序开发。',
        '熟练使用 Vue3.0，TypeScript、Pinia 等前端技术，并有相关的项目经验。',
        '熟练使用 Element-ui、Vant、Bootstrap 等 UI 框架。',
        '熟练使用HTML5、CSS3、JavaScript进行快速独立完成PC端和移动端页面架构和响应式布局。',
        '熟练使用Less、Sass等CSS预处理语言，提升代码灵活性与开发效率。',
        '熟练使用uni-app框架进行小程序开发。',
        '了解Node.js 。',
        '了解使用 Echarts 图表，高德地图，能够阅读文档进行配置。'
    ],
    //工作经历
    works : [
        {
            workTime : '2021/12/12 - 2024/12/12',
            companyImg : Company1,//没有图片会显示公司的第一个字
            company : '安能贸易有限公司',
            department:'magento建站部',
            worksBox:[
                '1. 参与公司产品规划构思及需求分析，对涉及的产品主题、用户交互等相关问题提出建议。',
                '2. 根据效果图，熟练运用相关制作工具独立完成页面制作。',
                '3. 优化页面，缩减页面体积、加快页面元素的加载速度、优化用户体验。'
            ]
        },
        {
            workTime : '2021/12/12 - 2024/12/12',
            companyImg : Company1,//没有图片会显示公司的第一个字
            company : '安能贸易有限公司',
            department:'magento建站部',
            worksBox:[
                '1. 参与公司产品规划构思及需求分析，对涉及的产品主题、用户交互等相关问题提出建议。',
                '2. 根据效果图，熟练运用相关制作工具独立完成页面制作。',
                '3. 优化页面，缩减页面体积、加快页面元素的加载速度、优化用户体验。'
            ]
        }
    ] ,
    //项目经历
    projects:[
        {
            name : '个人博客',
            img : BlogImg,
            profile : '用于记录学习与生活'
        },
        {
            name : '贸速达',
            img : MaosudaImg,
            profile : '贸易订单的管理。为客户提供可视化运输状态。'
        },
        {
            name : '修仙全靠运气(移动端)',
            img : xiuxianImg,
            profile : '玩家能够随时随地的参与游戏活动。'
        },
        {
            name : '数据监管',
            img : bigScreenImg,
            profile : '用于销售数据监控'
        },
    ]
}