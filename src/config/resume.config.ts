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
            id : 1,
            name : '个人博客',
            img : BlogImg,
            profile : '用于记录学习与生活',
            detail:{
                title:'个人博客',
                profile: '',
                module : '',
                result:'',
                url : 'http://zby312781556.gitee.io/personal_cicd',
                technologyStack : 'Vue3+TypeScript+Vue-Router+Axios+Element-Plus+MarkDown+Echarts+Pinia+Mockjs',
                technicalPoints :[
                    '1. 首屏使用live2d，生成2d人物，丰富网页效果。首屏使用live2d，生成2d人物，丰富网页效果。',
                    '2. 网页整体设计了两种主题，结合VueUse函数与CSS变量，实现网站主题的切换。并进行了移动端适配，一套代码，两端展示。',
                    '3. 文章预览部分采用Vue3版的Markdown，并重写目录代码，使得能够简洁明了的阅读文章。',
                    '4. 相册采用瀑布流布局，使得整体更加美观。且静态资源接入图床，节省空间。',
                    '5. 接入弹幕墙功能，并通过插槽重新修改弹幕结构，并通过Mockjs模拟真实弹幕。',
                    '6. 项目使用Pinia管理用户的数据，并创建了静态表情库供用户评论使用。',
                    '7. 通过阅读Echarts文档，配置相关选项，直观的展示文章数据。并且监听页面数据变化，实现响应式的图形数据页面。',
                    '8. 利用自定义Hooks封装可重复使用的逻辑，优化代码。例如处理微信和QQ菜单按钮点击等功能。',
                    '9. 实现CI/CD工程化项目，Git中push到主分支就会自动打包部署到Github，并同步到Gitee，渲染在GiteePage中。'
                ]
            }
        },
        {
            id : 2,
            name : '贸速达',
            img : MaosudaImg,
            profile : '贸易订单的管理。为客户提供可视化运输状态。',
            detail:{
                title:'贸速达',
                profile: '通过该项目能够进行贸易订单的管理。每个客户都能在该系统上进行查询与咨询。并且与物流公司联合，利用物流运输信息数据为客户提供可视化运输状态。',
                module : '个人中心，地址管理，物流查询，客服咨询',
                result:'',
                url : '',
                technologyStack : 'Vue3+Vue-Router+Axios+Pinia+socket.io+TypeScript',
                technicalPoints :[
                    '1. 填写表单数据时，意外关闭窗口，第二次填写能够进行数据回弹。',
                    '2. 数据筛查，实现地址数据的多级联动。',
                    '3. 基于高德地图提供的资源包，注册AMap实例，根据文档进行地图的绘制，实现物流可视化。',
                    '4. 基于 websocket 技术和 socket.io-client 插件，建立链接，实现客户与客服即时聊天功能。',
                    '5. 基于axios 封装全局请求方法，简化传参逻辑，以及业务失败处理。',
                ]
            }
        },
        {
            id : 3,
            name : '修仙全靠运气(移动端)',
            img : xiuxianImg,
            profile : '玩家能够随时随地的参与游戏活动。',
            detail:{
                title:'修仙全靠运气（移动端）',
                profile: '为了响应用户需求，使得用户能够随时随地的参与游戏活动，获取奖励，挂机历练升级。',
                module : '整个项目',
                result:'项目上线后，方便了玩家日常体验，用户量稳定升高，日在线量千人以上。',
                url : '',
                technologyStack : 'Vue3+Vue-Router+Axios+Vuex+ElementPlus',
                technicalPoints :[
                    '1. 项目进行权限拦截，对是否登录进行判断。',
                    '2. 使用Vuex管理全局状态，支持多账号一键切换与删除。',
                    '3. 支持用户在不同的世界频道，门票聊天，公屏答题。因为后端不支持socket，项目采用的是定时器轮询机制，间隔发送请求，并对返回数据进行处理。',
                    '4. 若频道出现违规信息，管理员进行消息撤回，能够自动过滤对违规信息做防窥处理。',
                    '5. 功能页中，消息框过多消息超出范围，能自动滚动到消息底部。',
                    '6. 性能优化方面，使用路由懒加载模式，减少首屏加载使用时间。将图片资源压缩等。FCP由2.3s优化至1.81s。'
                ]
            }
        },
        {
            id : 4,
            name : '数据监管系统',
            img : bigScreenImg,
            profile : '用于销售数据监控',
            detail:{
                title:'',
                profile: '',
                module : '',
                result:'',
                url : '',
                technologyStack : '',
                technicalPoints :[]
            }
        },
    ]
}