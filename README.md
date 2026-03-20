# clllin.github.io
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>个人设计师作品集 | Portfolio</title>
    <style>
        /* --- CSS 样式部分 --- */
        :root {
            --bg: #ffffff;
            --text: #111111;
            --accent: #666666;
            --gray: #f4f4f4;
            --dark-footer: #2a2a2a; /* 深灰色底部 */
            --radius: 12px;         /* 统一微圆角 */
            --transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html {
            scroll-behavior: smooth; /* 点击锚点平滑滚动 */
        }

        body {
            font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            background: var(--bg);
            color: var(--text);
            line-height: 1.6;
            overflow-x: hidden;
        }

        /* 导航栏 */
        .nav-bar {
            height: 80px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: fixed;
            width: 100%;
            padding: 0 5%;
            z-index: 1000;
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(15px);
            -webkit-backdrop-filter: blur(15px);
        }

        .logo-img {
            height: 28px;
            width: auto;
            display: block;
        }

        .nav-links {
            display: flex;
            gap: 40px;
            list-style: none;
        }

        .nav-links a {
            text-decoration: none;
            color: var(--text);
            font-size: 13px;
            font-weight: 500;
            letter-spacing: 1px;
            transition: opacity 0.3s;
        }

        .nav-links a:hover {
            opacity: 0.6;
        }

        /* 全屏 Banner */
        .full-banner {
            height: 100vh;
            position: relative;
            width: 100%;
            overflow: hidden;
        }

        .full-banner img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            filter: brightness(0.65);
        }

        .banner-content {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            color: white;
            width: 100%;
            padding: 0 20px;
        }

        .banner-content h1 {
            font-size: clamp(2.2rem, 6vw, 4.2rem);
            font-weight: 200;
            letter-spacing: -1px;
            margin-bottom: 10px;
        }

        .banner-content p {
            font-size: 14px;
            letter-spacing: 4px;
            text-transform: uppercase;
            opacity: 0.8;
        }

        /* 主体内容容器 */
        .main-content {
            max-width: 1200px;
            margin: 0 auto;
            padding: 120px 5%;
        }

        /* 标签头样式 */
        .section-label {
            font-size: 11px;
            letter-spacing: 3px;
            color: #bbb;
            margin-bottom: 30px;
            border-bottom: 1px solid #eee;
            padding-bottom: 10px;
            text-transform: uppercase;
        }

        /* 关于我 - 三栏布局 */
        .about-grid {
            display: grid;
            grid-template-columns: 2.2fr 1.2fr 0.8fr;
            gap: 60px;
            margin-bottom: 150px;
        }

        /* 履历风琴折叠 */
        .resume-item {
            display: flex;
            gap: 20px;
            border-bottom: 1px solid #f5f5f5;
            padding: 25px 0;
            cursor: pointer;
        }

        .year {
            font-size: 11px;
            color: #999;
            min-width: 80px;
            padding-top: 6px;
        }

        .resume-title {
            font-size: 17px;
            font-weight: 400;
            transition: color 0.3s;
        }

        .resume-detail {
            max-height: 0;
            overflow: hidden;
            transition: var(--transition);
            color: #666;
            font-size: 14px;
            line-height: 1.7;
        }

        .resume-item.active .resume-detail {
            max-height: 300px;
            margin-top: 15px;
        }

        .resume-item.active .resume-title {
            color: var(--accent);
        }

        /* 中间：语录与照片 */
        .quote-box {
            font-size: 18px;
            font-style: italic;
            border-left: 2px solid #000;
            padding-left: 15px;
            margin-bottom: 30px;
            line-height: 1.5;
        }

        .mood-photo {
            width: 100%;
            border-radius: var(--radius);
            overflow: hidden;
        }

        .mood-photo img {
            width: 100%;
            display: block;
            filter: grayscale(100%);
            transition: 0.8s;
        }

        .mood-photo:hover img {
            filter: grayscale(0);
        }

        /* 右侧：技能标签 */
        .skill-tags {
            list-style: none;
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }

        .skill-tags li {
            font-size: 11px;
            background: var(--gray);
            padding: 6px 14px;
            border-radius: 4px;
            color: #555;
        }

        /* 作品展示 - 一行三个 */
        .work-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
        }

        .work-card {
            text-decoration: none;
            color: inherit;
        }

        .img-16-9 {
            width: 100%;
            aspect-ratio: 16/9;
            border-radius: var(--radius);
            overflow: hidden;
            background: #eee;
        }

        .img-16-9 img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: var(--transition);
        }

        .work-card:hover .img-16-9 img {
            transform: scale(1.05);
        }

        .work-card h4 {
            margin-top: 18px;
            font-size: 15px;
            font-weight: 500;
        }

        .btn-container {
            text-align: center;
            margin-top: 60px;
        }

        .btn-more {
            display: inline-block;
            padding: 16px 45px;
            border: 1px solid #000;
            text-decoration: none;
            color: #000;
            font-size: 13px;
            transition: 0.3s;
            border-radius: 2px;
        }

        .btn-more:hover {
            background: #000;
            color: #fff;
        }

        /* 底部深灰色联系区 (Banner同宽, 高度约1/3) */
        .footer-dark {
            background: var(--dark-footer);
            min-height: 33.3vh;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            padding: 60px 5%;
        }

        .footer-inner {
            width: 100%;
            max-width: 1200px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .footer-label {
            font-size: 11px;
            letter-spacing: 3px;
            color: #777;
            margin-bottom: 12px;
        }

        .contact-text h2 {
            font-size: clamp(1.5rem, 4vw, 2.2rem);
            font-weight: 300;
        }

        .contact-info {
            text-align: right;
            line-height: 2.2;
            font-size: 14px;
            color: #bbb;
        }

        /* 响应式适配 */
        @media (max-width: 900px) {
            .about-grid {
                grid-template-columns: 1fr;
                gap: 40px;
            }
            .work-grid {
                grid-template-columns: 1fr;
            }
            .footer-inner {
                flex-direction: column;
                text-align: center;
                gap: 40px;
            }
            .contact-info {
                text-align: center;
            }
            .nav-links {
                display: none; /* 移动端建议后续增加汉堡菜单 */
            }
        }
    </style>
</head>
<body>

    <nav class="nav-bar">
        <div class="logo">
            <img src="https://img.icons8.com/ios-filled/50/000000/triangle.png" alt="Logo" class="logo-img">
        </div>
        <ul class="nav-links">
            <li><a href="projects.html">项目展示集</a></li>
            <li><a href="#about">关于我</a></li>
            <li><a href="#contact">联系方式</a></li>
        </ul>
    </nav>

    <section class="full-banner">
        <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000" alt="Banner Image">
        <div class="banner-content">
            <h1>探索美学与逻辑的边界</h1>
            <p>UI/UX Designer & Creative Director</p>
        </div>
    </section>

    <div class="main-content">
        <section id="about" class="about-grid">
            <div class="experience-col">
                <h2 class="section-label">Experience</h2>
                <div class="resume-list">
                    <div class="resume-item">
                        <span class="year">2023 - 2026</span>
                        <div class="resume-info">
                            <h3 class="resume-title">高级交互设计师 @ 腾讯科技</h3>
                            <div class="resume-detail">
                                <p>主导核心产品 3.0 版本的视觉迭代，搭建了高复用性的组件库，提升了团队 30% 的交付效率。通过设计驱动业务增长，达成年度核心指标。</p>
                            </div>
                        </div>
                    </div>
                    <div class="resume-item">
                        <span class="year">2020 - 2023</span>
                        <div class="resume-info">
                            <h3 class="resume-title">视觉设计师 @ 字节跳动</h3>
                            <div class="resume-detail">
                                <p>负责品牌数字化转型中的视觉识别系统设计，参与多个 DAU 过亿产品的 UI 规范制定与视觉升级工作。</p>
                            </div>
                        </div>
                    </div>
                    <div class="resume-item">
                        <span class="year">2018 - 2020</span>
                        <div class="resume-info">
                            <h3 class="resume-title">初级设计师 @ 创意工作室</h3>
                            <div class="resume-detail">
                                <p>负责电商节日促销活动页面的视觉设计，以及日常品牌宣发物料的创意输出。学习并实践了完整的设计工作流。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="personal-col">
                <div class="quote-box">
                    <p>“好的设计应该是隐形的，它能自然地引导用户达成目标。”</p>
                </div>
                <div class="mood-photo">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" alt="Personal Mood">
                </div>
            </div>

            <div class="skills-col">
                <h2 class="section-label">Skills</h2>
                <ul class="skill-tags">
                    <li>UI/UX Design</li>
                    <li>Prototyping</li>
                    <li>Figma / AE</li>
                    <li>Design Systems</li>
                    <li>Visual Branding</li>
                    <li>Motion Logic</li>
                </ul>
            </div>
        </section>

        <section id="work">
            <h2 class="section-label">Featured Projects</h2>
            <div class="work-grid">
                <a href="#" class="work-card">
                    <div class="img-16-9">
                        <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1000" alt="Work 1">
                    </div>
                    <h4>智能移动终端交互系统</h4>
                </a>
                <a href="#" class="work-card">
                    <div class="img-16-9">
                        <img src="https://images.unsplash.com/photo-1618761767630-0114736b193f?auto=format&fit=crop&q=80&w=1000" alt="Work 2">
                    </div>
                    <h4>品牌视觉重塑手册</h4>
                </a>
                <a href="#" class="work-card">
                    <div class="img-16-9">
                        <img src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=1000" alt="Work 3">
                    </div>
                    <h4>极简主义网页排版研究</h4>
                </a>
            </div>
            <div class="btn-container">
                <a href="projects.html" class="btn-more">展示全部作品</a>
            </div>
        </section>
    </div>

    <footer id="contact" class="footer-dark">
        <div class="footer-inner">
            <div class="contact-text">
                <p class="footer-label">GET IN TOUCH</p>
                <h2>期待与您共同创造</h2>
            </div>
            <div class="contact-info">
                <p>Mobile: +86 138 0013 8000</p>
                <p>Email: designer@portfolio.com</p>
                <p>WeChat: Design_Alpha</p>
            </div>
        </div>
    </footer>

    <script>
        // 1. 履历折叠点击逻辑
        document.querySelectorAll('.resume-item').forEach(item => {
            item.addEventListener('click', () => {
                // 切换 active 类，控制 CSS 中的 max-height
                item.classList.toggle('active');
            });
        });

        // 2. 导航栏平滑滚动逻辑
        document.querySelectorAll('.nav-links a, .btn-more').forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');

                // 如果是内部锚点 (# 开头)
                if (href.startsWith('#')) {
                    e.preventDefault();
                    const targetElement = document.querySelector(href);
                    if (targetElement) {
                        const offsetTop = targetElement.offsetTop - 80; // 减去固定导航栏高度
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                }
                // 如果是外部跳转 (如 projects.html)，则执行默认行为
            });
        });

        // 3. 简单的滚动显现动画 (可选增强)
        const observerOptions = { threshold: 0.1 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }
            });
        }, observerOptions);

        document.querySelectorAll('section').forEach(section => {
            section.style.opacity = "0";
            section.style.transform = "translateY(20px)";
            section.style.transition = "opacity 0.8s ease, transform 0.8s ease";
            observer.observe(section);
        });
    </script>
</body>
</html>
