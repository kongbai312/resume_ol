//安能公司
// import AnnengCompany from '@/assets/image/anneng-company.jpg';
// //个人博客图片
// import BlogImg from '@/assets/image/blog.png';
// //贸速达图片
// import MaosudaImg from '@/assets/image/maosuda.jpg';
// //修仙全靠运气图片
// import xiuxianImg from '@/assets/image/xiuxian.png';
// //安心送
// import AnxinsongImg from '@/assets/image/anxinsong.png';
//图片配置对象
import ImgConfig from '@/config/img.config';

export default {
    //自己的姓名
    name : '朱博艺',
    //从事工作
    workName : '4年前端',
    //学历
    degree : '本科',
    //专业
    professional:'信息与计算科学',
    //github地址
    github: 'https://github.com/kongbai312',
    //博客
    blog: 'https://blog.swhite.work',
    //个人技能
    skills : [
        '熟练使用 Vue2 、Vue3、Vue-Router、Vuex、TypeScript，Pinia 等前端技术。并了解Vue实现原理',
        '熟练使用 Element-UI、Vant 等 UI 框架，具备组件二次开发能力',
        '熟练使用HTML5、CSS3、JavaScript进行快速独立完成PC端和移动端页面架构和响应式布局',
        '熟练使用Less、Sass等CSS预处理语言，提升代码灵活性与开发效率',
        '熟练使用Uni-app框架进行小程序开发',
        '了解前端工程化开发，以及Webpack、Vite配置与性能优化',
        '了解使用 Echarts、Mars3D/Cesium、高德地图AMap SDK、Mapbox GL，Three.js等工具进行图形可视化渲染',
    ],
    //工作经历
    works : [
        {
            workTime : '2022/9/23 - 2024/12/23',
            companyImg : ImgConfig.annengCompanyImg,//没有图片会显示公司的第一个字
            company : '安能贸易有限公司',
            department:'magic建站部',
            worksBox:[
                '1. 参与公司产品规划构思及需求分析，对涉及的产品主题、用户交互等相关问题提出建议。',
                '2. 根据设计稿，完成页面开发，并保证一定的响应式与兼容性',
                '3. 参与项目优化，缩减页面体积、加快页面元素的加载速度、优化用户体验。'
            ]
        },
        {
            workTime : '2025/3/10 - 至今',
            companyImg : ImgConfig.annengCompanyImg,//没有图片会显示公司的第一个字
            company : '思特顺科技有限公司',
            department:'项目服务部',
            worksBox:[
                '1. 负责交通/GIS 类项目前端开发，涵盖 B 端管理台、可视化大屏、企业微信/移动端 H5，技术栈以 Vue 3 + TypeScript + Vite 为主。',
                '2. 负责机场离港平台、地铁线网态势与客流预测、皇岗口岸大屏等核心业务模块，熟悉地图/拓扑/ECharts 可视化',
                '3. 参与项目 0—1 搭建、Docker 部署及二期迭代，具备多端协作交付与线上问题排查能力'
            ]
        }
    ] ,
    //项目经历
    projects:[
        {
            id : 1,
            name : '深圳机场综合交通全域一张图（兴智杯全国一等奖项目）',
            img : ImgConfig.blogImg,
            profile : '面向深圳宝安国际机场的综合交通数字化平台，覆盖「人、车、路、场」全域交通态势感知与协同调度。项目涵盖 B 端管理后台与数据可视化大屏双端，融合 AI 算法能力，实现机场客流、车辆运力、道路运行、场站态势等多维数据的一体化展示与辅助决策。一期完成后，基于原有架构持续进行二期功能扩展与业务补充开发。该项目荣获第二届「兴智杯」全国人工智能创新应用大赛全国总决赛全国一等奖。',
            detail:{
                title:'个人博客',
                profile: '',
                module : '',
                result:'',
                url : '',
                technologyStack : 'Vue3 + TypeScript + Vite + Pinia + Element Plus + Vant + ECharts + Mars3D / Cesium + Axios + Less',
                technicalPoints :[
                    '1. 首屏使用live2d，生成2d人物，丰富网页效果。首屏使用live2d，生成2d人物，丰富网页效果。',
                    '2. 网页整体设计了两种主题，结合VueUse函数与CSS变量，实现网站主题的切换。并进行了移动端适配，一套代码，两端展示。',
                    '3. 文章预览部分采用Vue3版的Markdown，并重写目录代码，使得能够简洁明了的阅读文章。',
                    '4. 相册采用瀑布流布局，使得整体更加美观。且静态资源接入图床，节省空间。',
                    '5. 接入弹幕墙功能，并通过插槽重新修改弹幕结构，并通过Mockjs模拟真实弹幕。',
                    '6. 项目使用Pinia管理用户的数据，并创建了静态表情库供用户评论使用。',
                    '7. 通过阅读Echarts文档，配置相关选项，直观的展示文章数据。并且监听页面数据变化，实现响应式的图形数据页面。',
                    '8. 利用自定义Hooks封装可重复使用的逻辑，优化代码。',
                    '9. 实现CI/CD工程化项目，Git中push到主分支就会自动打包部署到Github，并同步到Gitee，渲染在GiteePage中。'
                ]
            }
        },
        {
            id : 2,
            name : '贸速达',
            img : ImgConfig.maosudaImg,
            profile : '贸易订单的管理。为客户提供可视化运输状态。(点击查看详情)',
            detail:{
                title:'贸速达',
                profile: '该项目能够进行贸易订单的管理。客户能在该系统上进行订单查询与咨询。并为客户提供可视化运输状态',
                module : '个人中心，地址管理，物流查询，客服咨询',
                result:'',
                url : '',
                technologyStack : 'Vue3+Vue-Router+Axios+Pinia+Websocket+TypeScript',
                technicalPoints :[
                    '1. 开发高复用的消息组件，利用虚拟DOM动态渲染，解决高频触发可能导致的内存泄露。优化跨组件方法调用。同时，对该组件进行全面的测试以确保其稳定性和可靠性。',
                    '2. 集成高德地图SDK构建AMap实例集群，实现物流订单路线绘制与物流节点状态映射。',
                    '3. 基于 WebSocket 技术和 socket.io-client 插件，实现客户与客服之间的即时通讯。',
                    '4. 基于axios 封装全局请求方法，简化传参逻辑，统一处理401/503等异常状态等问题。',
                    '5. 解决表单窗口意外关闭数据丢失问题，重新打开窗口能够进行数据回弹，提升用户体验。',
                ]
            }
        },
        {
            id : 3,
            name : '安心送',
            img : ImgConfig.anxinsongImg,
            profile : '为客户提供系下单与订单查询(点击查看详情)',
            detail:{
                title:'安心送',
                profile: '该项目提供商品的送达服务。并为客户提供系下单与订单查询',
                module : '登录页，服务优选，订单管理，个人中心',
                result:'',
                url : '',
                technologyStack : 'Vue3+Pinia+Axios+Uniapp+Vant',
                technicalPoints :[
                    '1. 采用列表缓存优化组件渲染，提升页面性能。',
                    '2. 收集团队需求，二次封装符合EasyCom组件规范的scroll-view组件，实现多端UI一致性，并编写组件使用文档，支持多个业务模块复用。',
                    '3. 为简化用户注册流程，提供多平台登录策略，实现最佳用户体验。',
                    '4. 解决使用Uniapp出现的多平台跨端兼容问题。'
                ]
            }
        },
    ]
}