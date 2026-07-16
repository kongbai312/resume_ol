import ImgConfig from '@/config/img.config';

export default {
    name: '朱博艺',
    workName: '4年前端开发',
    degree: '本科',
    professional: '信息与计算科学',
    github: 'https://github.com/kongbai312',
    blog: 'https://blog.swhite.work',
    phone: '13760171072',
    email: 'zbywork312@163.com',
    onlineResume: 'https://swhite.work',
    intention: {
        position: '前端开发工程师',
        salary: '面议',
        city: '深圳'
    },
    advantages: [
        'Vue 3 / TypeScript / Vite',
        'GIS / 三维地图 / 数据可视化',
        'B端管理台 + 数据大屏 + 移动端H5',
        '兴智杯全国总决赛一等奖项目经验'
    ],
    skills: [
        '熟练使用 Vue2 / Vue 3、Vue-Router、Vuex / Pinia、TypeScript 等前端技术，并了解 Vue 实现原理。',
        '熟练使用 Element-UI、Element Plus、Vant 等 UI 框架，具备组件二次开发能力。',
        '熟练使用 HTML5、CSS3、JavaScript，能独立完成 PC 端和移动端页面架构及响应式布局。',
        '熟练使用 Less、Sass 等 CSS 预处理语言，提升代码灵活性与开发效率。',
        '熟悉 Uni-app 小程序开发，以及企业微信内嵌 H5、OAuth 登录、移动端 vw 适配等场景。',
        '了解前端工程化开发，具备 Webpack、Vite 配置、多入口构建、Docker + Nginx 部署与性能优化经验。',
        '了解 ECharts、Mars3D / Cesium、高德地图 AMap SDK、Mapbox GL、Three.js、vue-svg-pan-zoom 等可视化工具。'
    ],
    works: [
        {
            workTime: '2025.03 - 至今',
            companyImg: '',
            company: '深圳市思特顺科技有限公司',
            department: '前端开发工程师',
            worksBox: [
                '负责交通 / GIS 类项目前端开发，涵盖 B 端管理台、可视化大屏、企业微信 / 移动端 H5，技术栈以 Vue 3 + TypeScript + Vite 为主。',
                '负责机场离港平台、地铁线网态势与客流预测、皇岗口岸大屏等核心业务模块，熟悉地图、拓扑、ECharts 可视化场景。',
                '参与项目 0-1 搭建、Docker 部署及二期迭代，具备多端协作交付与线上问题排查能力。'
            ]
        },
        {
            workTime: '2022.09 - 2024.12',
            companyImg: ImgConfig.annengCompanyImg,
            company: '安能贸易有限公司',
            department: '前端开发工程师',
            worksBox: [
                '参与公司产品规划构思及需求分析，对产品主题、用户交互等相关问题提出建议。',
                '根据设计稿完成页面开发，并保证一定的响应式与兼容性。',
                '参与项目优化，缩减页面体积、加快页面元素加载速度、优化用户体验。'
            ]
        }
    ],
    projects: [
        {
            id: 1,
            name: '深圳机场综合交通全域一张图',
            img: ImgConfig.szAirportBigScreenImg,
            profile: '兴智杯全国一等奖项目，覆盖机场人、车、路、场全域交通态势感知，包含 B 端管理后台、数据可视化大屏和企业微信 H5。',
            detail: {
                title: '深圳机场综合交通全域一张图（兴智杯全国一等奖项目）',
                profile: '面向深圳宝安国际机场的综合交通数字化平台，覆盖“人、车、路、场”全域交通态势感知与协同调度。项目涵盖 B 端管理后台与数据可视化大屏双端，融合 AI 算法能力，实现机场客流、车辆运力、道路运行、场站态势等多维数据的一体化展示与辅助决策。一期完成后，基于原有架构持续进行二期功能扩展与业务补充开发。',
                module: '管理后台、数据可视化大屏、企业微信内嵌移动端 H5',
                result: '第二届“兴智杯”全国人工智能创新应用大赛全国总决赛一等奖。',
                url: '',
                technologyStack: 'Vue 3 + TypeScript + Vite + Pinia + Element Plus + Vant + ECharts + Mars3D / Cesium + Axios + Less',
                technicalPoints: [],
                sections: [
                    {
                        title: '管理后台',
                        points: [
                            '基于 Vue 3 + TypeScript + Vite 开发机场一张图管理端，接入 @sutpc/portal-alone 门户体系，完成路由白名单、权限入口、模块化页面组织及多环境构建配置，并接入机场中心单点登录。',
                            '参与 Mars3D / Cesium 三维地图能力建设，处理机场 GeoJSON 图层、道路状态着色、摄像头点位、hover 高亮和弹窗交互，实现地图点位与业务数据联动。',
                            '负责动态引导屏模块开发，并通过 Vite 多入口构建独立 guidance 展示页，支持外部大屏 / 引导屏脱离后台菜单访问和动态内容渲染。',
                            '负责二期信息发布功能开发，并剥离为独立系统，支持动态引导屏信息发布与编辑。',
                            '开发全局告警音频提醒组件，处理浏览器自动播放限制、后台开关、展示页白名单过滤等问题。'
                        ]
                    },
                    {
                        title: '数据可视化大屏',
                        points: [
                            '负责离港平台专题大屏：进出场多视角切换、告警预警、运行监测、实时车流分布及视频监控联动。',
                            '基于飞渡 AirCity 三维场景 + WebSocket 接收车辆实时坐标与朝向，动态创建 / 更新 3D 车辆对象，实现离港区域车辆运行轨迹展示。',
                            '参与人、车、路、场等其他专题页面的缺陷修复、样式调整与数据联调问题排查。'
                        ]
                    },
                    {
                        title: '移动端 H5（企业微信内嵌）',
                        points: [
                            '负责机场一张图移动端 H5，接入企业微信 OAuth 登录（wxWork）与菜单权限控制。',
                            '实现航班 / 交通工具数据录入、多级报表查询、权限管理等模块，使用 Vant + vw 完成移动端适配。'
                        ]
                    }
                ]
            }
        },
        {
            id: 2,
            name: '深圳市轨道交通客流动态感知系统',
            img: ImgConfig.projectDefaultImg,
            profile: '面向深圳轨道交通网络，覆盖客流预测、智能调度、应急辅助、运营图规划，重点负责 PC 端线网态势与移动端中断路径查询。',
            detail: {
                title: '深圳市轨道交通客流动态感知系统',
                profile: '面向深圳市轨道交通网络的客流动态感知与智能调度平台，覆盖客流预测、智能调度、应急辅助、运营图规划等核心业务场景，为地铁运营决策提供数据支撑与仿真评估能力。',
                module: 'PC 端线网态势 / 预测仿真 / 辅助应急，移动端中断路径查询 H5',
                result: '',
                url: '',
                technologyStack: 'Vue 3 + TypeScript + Vite + Pinia + Element Plus + ECharts + Mapbox GL + Three.js + vue-svg-pan-zoom',
                technicalPoints: [],
                sections: [
                    {
                        title: 'PC 端',
                        points: [
                            '负责线网态势、短期预测仿真、中长期预测、辅助应急等模块，统一“线网-线路-车站”下钻链路，并实现地图视图与拓扑视图的数据联动。',
                            '参与地铁 SVG 拓扑可视化开发，基于 vue-svg-pan-zoom 渲染线路、区间、站点、车辆等图层，支持缩放拖拽、区间 / 站点 hover 弹窗、点击下钻和时段数据刷新。',
                            '基于满载率、拥挤度等指标实现区间与站点分级染色，并将拓扑组件复用于线网态势、预测仿真、辅助应急等业务域，减少同类页面重复开发。'
                        ]
                    },
                    {
                        title: '中断路径查询（移动端 H5，嵌入深铁 App）',
                        points: [
                            '负责运营中断路径查询 H5，支持中断区段选择、站点搜索、路径结果展示与移动端 SVG 拓扑交互。',
                            '使用 Vant + vw 适配并独立构建部署。'
                        ]
                    }
                ]
            }
        },
        {
            id: 3,
            name: '皇岗口岸智慧化运营管理系统',
            img: ImgConfig.projectDefaultImg,
            profile: '面向新皇岗口岸的综合交通与智慧化运营管理平台，以数据可视化大屏为核心，覆盖全域总览、人流车流与重大活动保障。',
            detail: {
                title: '皇岗口岸智慧化运营管理系统',
                profile: '面向新皇岗口岸的综合交通与智慧化运营管理平台，覆盖旅客、车辆、场站全域态势监测与重大活动保障。以数据可视化大屏为核心，融合高德地图、客流热力、通关效率等指标，为口岸运营指挥提供态势总览与辅助决策能力。',
                module: '全域总览、人流车流态势、重大活动保障、L4 楼层平面图客流展示',
                result: '',
                url: '',
                technologyStack: 'Vue 3 + TypeScript + Vite + Pinia + Element Plus + ECharts + 高德地图 + Axios + Less',
                technicalPoints: [
                    '封装 HgAmapOverviewStage 地图舞台与 useHuanggangAmapHeatStage composable，实现高德地图加载、热力图 / 实时点位双模式、人车流视角切换，并复用于总览与重大活动页面。',
                    '负责皇岗口岸大屏 0-1 前端工程搭建，完成路由 / 模块组织、构建配置及测试环境 Docker + Nginx 部署，负责全域总览、人、重大活动等核心模块。',
                    '提供 L4 楼层平面图客流展示的渲染方案，基于 canvas 绘制实时点位，结合 ResizeObserver 同步图片与画布尺寸，并通过 5s 轮询更新区域实时客流状态。'
                ]
            }
        },
        {
            id: 4,
            name: '麦加朝觐人流仿真与实时管控平台',
            img: ImgConfig.projectDefaultImg,
            profile: '面向麦加朝觐场景的人流仿真与可视化管控平台，融合飞渡 3D 数字孪生、WebSocket 实时推送、CAD 热力图和预案评估能力。',
            detail: {
                title: '麦加朝觐人流仿真与实时管控平台',
                profile: '面向麦加朝觐场景的人流仿真与可视化管控平台，覆盖实时管控、人流监控、祈祷室监控、预案评估、告警处置、系统管理等模块。系统结合飞渡 3D 数字孪生场景、仿真数据、CAD 平面热力图与多维统计图表，实现重点区域人流态势展示、仿真方案评估、实时门口流量管控和异常告警辅助决策。',
                module: '实时管控、人流监控、祈祷室监控、预案评估、仿真视角、告警处置、系统管理',
                result: '',
                url: '',
                technologyStack: 'Vue 3 + TypeScript + Vite + Pinia + Vue Router + Element Plus + vue-i18n + ECharts + Mapbox GL + Axios + WebSocket + XLSX + Less',
                technicalPoints: [
                    '负责实时管控、预案评估、仿真视角等核心模块开发，支持 24 小时门口流量导入、实时仿真重启、六门实际流量查看、操作日志查询等业务操作。',
                    '封装 WebSocket 通信逻辑，支持心跳、自动重连、按消息类型分发处理，为仿真数据实时推送和大屏状态同步提供基础能力。',
                    '参与飞渡 3D 数字孪生场景接入，封装人员 Agent 与飞渡 Vehicle 图层的坐标转换、增量新增、移动、删除和缓存同步逻辑，实现仿真人流在三维场景中的动态展示。',
                    '开发预案评估模块，支持仿真任务分页查询、新建、复制、查看、删除和跳转仿真视角，并基于业务参数组装仿真创建 payload。',
                    '实现 Excel 导入导出能力，支持预案参数模板下载、门口流量数据解析、JSON / Excel 双格式导入，降低现场业务人员录入成本。',
                    '实现 CAD / DXF 平面图解析与热力图导出能力，提取 DXF 中 LINE、LWPOLYLINE 等线段，结合仿真 Agent 数据离屏渲染客流密度、空间利用率等热力图并导出 PNG。',
                    '搭建统一请求层，封装 Token 注入、重复请求取消、统一响应结构解析、401 / 403 登录态处理和全局错误提示，提升接口联调一致性。',
                    '接入 vue-i18n 与 Element Plus 多语言配置，支持中英文界面切换，并结合权限指令和路由守卫控制菜单及按钮级权限。'
                ]
            }
        }
    ]
}
