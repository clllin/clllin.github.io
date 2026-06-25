/**
 * 全站项目数据库
 * 提示：新项目请写在数组的最前面，这样首页会自动显示最新作品
 */
const ALL_PROJECTS = [
    {
        id: "agri-brand-mp",
        title: "农业品牌计划公众号",
        date: "2024",
        category: "交互体验",
        client: "",
        services: "",
        role: "主设计",
        cover: "images/nonage/农业公众号1.jpg",
        url: "project-agri-brand.html",
        description: "",
        details: [
            "images/nonage/农业公众号1.jpg",
            "images/nonage/农业公众号2.jpg"
        ]
    },
    {
        id: "Shanghai-energy",
        title: "上海能源类展厅——落地实拍",
        date: "2025-10",
        category: "展览展示",
        client: "能源行业客户",
        services: "展厅设计, 空间规划, 视觉导视系统",
        role: "主案设计师",
        cover: "images/Shanghai/封面图.jpg", // 已修正
        url: "project-Shanghai-energy.html",
        description: `上海能源类展厅 0-1 全流程落地项目，统筹项目全视觉平面工作，前期参与内容梳理策划，敲定各展区内容叙事与展陈呈现形式；搭建展厅专属 VI 视觉体系，统一全空间版式标准；主导全馆可视化大屏、交互屏幕内容规划与画面落地输出，制定整套视觉执行规范，把控所有图文、屏幕物料最终呈现效果。`,
        details: [
            "images/Shanghai/封面图.jpg", // 已修正
            "images/Shanghai/展厅照片1.jpg",
            "images/Shanghai/展厅照片11.jpg",
            "images/Shanghai/展厅照片2.jpg",
            "images/Shanghai/展厅照片3.jpg",
            "images/Shanghai/展厅照片4.jpg",
            "images/Shanghai/展厅照片5.jpg",
            "images/Shanghai/展厅照片6.jpg",
            "images/Shanghai/展厅照片7.jpg",
            "images/Shanghai/展厅照片8.jpg",
            "images/Shanghai/展厅照片9.jpg"
        ]
    },
    {
        id: "shibohui2024",
        title: "2024中国国际食品博览会主视觉及活动系统设计",
        date: "2024-11",
        category: "活动视觉",
        client: "中国国际食品博览会组委会",
        services: "活动主视觉设计, 展会场馆导视, 延展物料规划",
        role: "主案设计师",
        cover: "images/shibohui/2024食博会封面.jpg",
        url: "project-shibohui.html",
        description: `2024 中国国际食品及配料博览会、预制菜产业博览会视觉全案设计，以 “食全食美，预见‘味’来” 为主题，覆盖主视觉、多语种VI体系、招商手册、线上长图等全链路物料，为东莞展会打造兼具地域文化与行业属性的品牌形象。主视觉以“碗舟载味+龙纹”为核心意象，融合东莞地标与食材元素，传递水乡文化与产业活力；VI系统采用活力渐变色，适配多语种应用；招商物料以清新蓝绿为主调，强化信息可读性，兼顾品牌识别与商业传播需求。`,
        details: [
            "images/shibohui/2024食博会1.jpg",
            "images/shibohui/2024食博会2.jpg",
            "images/shibohui/2024食博会3.jpg",
            "images/shibohui/2024食博会4.jpg",
            "images/shibohui/2024食博会5.jpg",
            "images/shibohui/2024食博会6.jpg",
            "images/shibohui/2024食博会7.jpg",
            "images/shibohui/2024食博会8.jpg",
            "images/shibohui/2024食博会9.jpg",
            "images/shibohui/2024食博会10.jpg"
        ]
    },
    {
        id: "tebiandiangong",
        title: "特变电工天津武清展区设计",
        date: "2025-04",
        category: "展览展示",
        client: "特变电工",
        services: "展厅设计, 空间布局, 平面视觉",
        role: "展厅布局及平面设计师",
        cover: "images/tebiandiangong/tebiandiangong封面.jpg",
        url: "project-tbea.html",
        description: `本项目为特变电工天津武清展厅，选址地地下室原停车楼改造而成。设计以科技蓝为主调，融合工业质感与未来语言，通过沉浸式大屏、动态模型与数字互动，串联企业发展历程、核心技术与全球布局，打造兼具品牌叙事力与未来感的展示空间。`,
        details: [
            "images/tebiandiangong/tebiandiangong1.png",
            "images/tebiandiangong/tebiandiangong2.png",
            "images/tebiandiangong/tebiandiangong3.jpg",
            "images/tebiandiangong/tebiandiangong4.jpg",
            "images/tebiandiangong/tebiandiangong5.jpg",
            "images/tebiandiangong/tebiandiangong6.jpg",
            "images/tebiandiangong/tebiandiangong7.jpg",
            "images/tebiandiangong/tebiandiangong8.jpg",
            "images/tebiandiangong/tebiandiangong9.jpg"
        ]
    },
    {
        id: "tsinghua",
        title: "清华电子系文创产品",
        date: "2024-10",
        category: "品牌文创体系",
        client: "清华大学电子工程系",
        services: "文创产品开发",
        role: "主案设计",
        cover: "images/qinghuawenchuang/清华文创封面.jpg",
        url: "project-tsinghua.html",
        description: `本系列文创以清华电子系学科特色为核心，融合 AI、电路、建筑等元素，打造徽章、雨伞、魔方、拼图、帆布袋等产品。采用蓝紫渐变主色调，兼具科技感与人文底蕴，现已线下开售，传递电子系严谨创新的精神内核。`,
        details: [
            "images/qinghuawenchuang/清华文创1.jpg",
            "images/qinghuawenchuang/清华文创2.jpg",
            "images/qinghuawenchuang/清华文创3.jpg",
            "images/qinghuawenchuang/清华文创4.jpg",
            "images/qinghuawenchuang/清华文创5.jpg",
            "images/qinghuawenchuang/清华文创6.jpg"
        ]
    },
    {
        id: "guihuaju",
        title: "规划居定制酒 - 品牌文创体系设计",
        date: "2024-03",
        category: "品牌文创体系",
        client: "规划居",
        services: "文创产品开发, 包装设计",
        role: "主设计",
        cover: "images/guihuaju/guihuaju1.jpg",
        url: "project-guihuaju.html",
        description: `《规划居定制酒》以茅台经典瓶型为载体，延续 “规划居” 品牌主题色的清雅调性，将东方水墨意境融入包装。瓶身与礼盒以品牌主色铺陈，搭配极极简书法字体与暗纹山水意象，红盖点睛，既保留酱酒的庄重质感，又赋予品牌专属的文创表达，成为承载文化底蕴的定制佳酿。`,
        details: [
            "images/guihuaju/guihuaju1.jpg",
            "images/guihuaju/guihuaju2.jpg"
        ]
    },
    {
        id: "yunzhongshengle",
        title: "云中盛乐 - 品牌全案视觉系统设计",
        date: "2025-05",
        category: "品牌全案 / 视觉识别",
        client: "内蒙古文旅局",
        services: "品牌策略, 品牌全案, 视觉系统设计",
        role: "主案设计",
        cover: "images/yunzhongshengle/云中盛乐封面.jpg",
        url: "project-yunzhong.html",
        description: `“云中盛乐”项目紧扣文化强国与文旅融合战略，以“历史文化 + 艺术创意 + 休闲度假”为核心模式，活化盛乐古邑文化遗产，植入演艺、沉浸体验、文创研发等业态，打造文旅融合创新标杆。LOGO以七彩渐变云为轮廓，融入百灵鸟意象，呼应内蒙古草原的灵动与盛乐文化底蕴。七种色彩既承载地域基因，也对应度假区七大游玩体系，串联游牧文化与现代体验，传递自然、人文与活力的融合之美。`,
        details: [
            "images/yunzhongshengle/云中盛乐封面.jpg",
            "images/yunzhongshengle/云中盛乐logo横.jpg",
            "images/yunzhongshengle/云中盛乐logo竖.jpg",
            "images/yunzhongshengle/云中盛乐标准制图.jpg",
            "images/yunzhongshengle/云中盛乐1.jpg",
            "images/yunzhongshengle/云中盛乐2.jpg",
            "images/yunzhongshengle/云中盛乐3.jpg",
            "images/yunzhongshengle/云中盛乐4.jpg",
            "images/yunzhongshengle/云中盛乐5.jpg",
            "images/yunzhongshengle/云中盛乐6.jpg",
            "images/yunzhongshengle/云中盛乐7.jpg",
            "images/yunzhongshengle/云中盛乐8.jpg",
            "images/yunzhongshengle/云中盛乐9.jpg",
            "images/yunzhongshengle/云中盛乐10.jpg"
        ]
    },
    {
        id: "kaigang",
        title: "开杠招商手册设计",
        date: "2021-04",
        category: "印刷物料设计 / Print & Layout",
        client: "开杠品牌方",
        services: "招商手册设计, 视觉排版, 画册装帧",
        role: "主设计师",
        cover: "images/kaigang/开杠封面.jpg",
        url: "project-kaigang.html",
        description: `“开杠招商手册”设计本手册设计以极极具张力的“国潮绿”与“中国红”为主基调，将传统麻将文化与现代潮流插画趣味融合，打造兼具文化底蕴与前卫网格系统的视觉排版。整体设计通过大块面的色彩碰撞与精致的图表系统，在张扬品牌年轻活力的同时，清晰传递了餐饮品牌的商业模式与加盟优势。`,
        details: [
            "images/kaigang/开杠封面.jpg",
            "images/kaigang/开杠1.jpg",
            "images/kaigang/开杠2.jpg",
            "images/kaigang/开杠3.jpg",
            "images/kaigang/开杠4.jpg",
            "images/kaigang/开杠5.jpg",
            "images/kaigang/开杠6.jpg"
        ]
    },
    {
        id: "mixiaoquan",
        title: "米小圈产品手册",
        date: "2022-03",
        category: "印刷物料设计 / Print & Layout",
        client: "米小圈品牌方",
        services: "手册设计, product插画, 画册装订",
        role: "主设计师",
        cover: "images/mixiaoquan/mixiaoquan封面.jpg",
        url: "project-mixiaoquan.html",
        description: `《米小圈产品手册》设计延续该品牌一贯的活泼、趣味风格，通过高饱和度的色彩搭配与生动的插画排版，将产品和手册完美融合，信息趣味化呈现，打造兼具阅读乐趣与商业营销价值的高品质产品手册。`,
        details: [
            "images/mixiaoquan/mixiaoquan封面.jpg",
            "images/mixiaoquan/mixiaoquan1.jpg",
            "images/mixiaoquan/mixiaoquan2.jpg",
            "images/mixiaoquan/mixiaoquan3.jpg",
            "images/mixiaoquan/mixiaoquan4.jpg",
            "images/mixiaoquan/mixiaoquan5.jpg",
            "images/mixiaoquan/mixiaoquan6.jpg"
        ]
    },
    {
        id: "atpc",
        title: "农业贸易促进中心宣传册",
        date: "2025-05",
        category: "印刷物料设计 / Print & Layout",
        client: "农业农村部农业贸易促进中心",
        services: "宣传册设计, 印刷物料",
        role: "主设计师",
        cover: "images/atpc/农贸促手册1.jpg",
        url: "project-atpc.html",
        description: `画面采用中式水墨风格，以淡雅色彩 and 写意笔触勾勒山山、田园等自然景观，营造宁静悠远且具文化底蕴的氛围，契合农业自然、生态理念。`,
        details: [
            "images/atpc/农贸促手册1.jpg",
            "images/atpc/农贸促手册2.jpg",
            "images/atpc/农贸促手册3.jpg",
            "images/atpc/农贸促手册4.jpg",
            "images/atpc/农贸促手册5.jpg",
            "images/atpc/农贸促手册6.jpg"
        ]
    },
    {
        id: "rudolf",
        title: "鲁道夫项目设计",
        date: "2020-06",
        category: "印刷物料设计 / Print & Layout",
        client: "鲁道夫品牌方",
        services: "画册排版, 物料视觉设计, 印刷工艺规划",
        role: "主设计师",
        cover: "images/rudolf/鲁道夫封面.jpg",
        url: "project-rudolf.html",
        description: `“鲁道夫”印刷物料设计围绕品牌空气能净化的核心视觉资产展开，通过严谨的现代版式律动与大面积留白，赋予画面高级、洗练的视觉质感。在信息层级上进行了精细化的梳理，确保商业核心内容的逻辑性传达，同时结合富有层次的网格规范，使整体画册兼具极高的审美价值与阅读体验。`,
        details: [
            "images/rudolf/鲁道夫封面.jpg",
            "images/rudolf/鲁道夫1.jpg",
            "images/rudolf/鲁道夫2.jpg",
            "images/rudolf/鲁道夫3.jpg",
            "images/rudolf/鲁道夫4.jpg"
        ]
    },
    {
        id: "charity",
        title: "公善循互助-品牌设计方案",
        date: "2026-03",
        category: "品牌全案 / 视觉识别",
        client: "公善循互助公益方",
        services: "品牌定位, Logo设计, VI系统",
        role: "主设计师",
        cover: "images/charity/公善循互助1.jpg",
        url: "project2.html",
        description: `整体意象：公益为核・循环为脉・科技赋能。以字母“G”作为核心视觉锚点，既提取 “公善循互助” 首字拼音“GONG”的首字母，又直接指向“公益（Gongyi）”的核心属性。中英文 + 拼音的组合，实现 “公益受众 + 年年轻消费群体 + 合作商家” 的全受众覆盖。`,
        details: [
            'images/charity/公善循互助logo特写.jpg',
            'images/charity/公善循互助logo标准化制图.jpg',
            'images/charity/公善循互助1.jpg',
            'images/charity/公善循互助2.jpg',
            'images/charity/公善循互助3.jpg',
            'images/charity/公善循互助4.jpg'
        ]
    },
    {
        id: "camping",
        title: "内蒙古露营小镇——奇幻星球项目策划品牌设计方案",
        date: "2024-05",
        category: "品牌全案 / 视觉识别",
        client: "露营小镇项目组",
        services: "品牌定位, Logo设计, VI系统",
        role: "主设计师",
        cover: "images/camping/封面.jpg",
        url: "coffee.html",
        description: `本 logo 是为“奇幻星球”打造的专属视觉标识，以 “卡通童趣 + 科幻星球” 为核心风格。拟人化黄色五角星既强化科幻辨识度，又传递乐园轻松欢乐的氛围，成为品牌高记忆点的标志性符号。`,
        details: [
            'images/camping/详情1.jpg',
            'images/camping/详情2.jpg',
            'images/camping/详情3.jpg',
            'images/camping/详情4.jpg',
            'images/camping/详情5.jpg',
            'images/camping/详情6.jpg'
        ]
    },
    {
        id: "elementsclub",
        title: "Elements Club 品牌视觉系统设计",
        date: "2026-05",
        category: "品牌全案 / 视觉识别",
        client: "Elements Club 创始团队",
        services: "VIS 系统设计, 品牌标准色, 社交媒体规范",
        role: "主设计师",
        cover: "images/elementsclub/elementsclub封面.jpg",
        url: "project-elements.html",
        description: `Elements Club ELEMENTS 的 LOGO 以首字母 “E” 为原型重构，采用递进式几何线条，兼具 3D 延伸感与阶梯式上升的美好寓意，既呼应电音场景的律动感，又传递品牌突破传统、拥抱年轻潮流的先锋态度`,
        details: [
            "images/elementsclub/elementsclub1.jpg",
            "images/elementsclub/elementsclub2.jpg",
            "images/elementsclub/elementsclub3.jpg",
            "images/elementsclub/elementsclub4.jpg", // 已修正拼写
            "images/elementsclub/elementsclub5.jpg", // 已修正拼写
            "images/elementsclub/elementsclub6.jpg",
            "images/elementsclub/elementsclub7.jpg",
            "images/elementsclub/elementsclub8.jpg",
            "images/elementsclub/elementsclub9.jpg",
            "images/elementsclub/elementsclub10.jpg",
            "images/elementsclub/elementsclub11.png"
        ]
    }
];
