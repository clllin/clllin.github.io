# clllin.github.io
<div class="container-fluid">
  <nav class="nav-bar">
    <div class="logo">
      <img src="https://img.icons8.com/ios-filled/50/000000/triangle.png" alt="Logo" class="logo-img">
    </div>
    <ul class="nav-links">
      <li><a href="projects.html">项目展示集</a></li> <li><a href="#about">关于我</a></li>       <li><a href="#contact">联系方式</a></li>     </ul>
  </nav>

  <section class="full-banner">
    <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000" alt="Banner">
    <div class="banner-content">
      <h1>探索美学与逻辑的边界</h1>
      <p>UI/UX DESIGNER / CREATIVE DIRECTOR</p>
    </div>
  </section>

  <div class="main-content">
    <section id="about" class="about-grid">
      <div class="experience-col">
        <h2 class="section-label">ABOUT ME / EXPERIENCE</h2>
        <div class="resume-list">
          <div class="resume-item">
            <span class="year">2023 - 2026</span>
            <div class="resume-info">
              <h3 class="resume-title">高级交互设计师 @ 腾讯科技</h3>
              <div class="resume-detail">
                <p>主导核心产品 3.0 版本的视觉迭代，搭建了高复用性的组件库，提升了团队交付效率。</p>
              </div>
            </div>
          </div>
          <div class="resume-item">
            <span class="year">2020 - 2023</span>
            <div class="resume-info">
              <h3 class="resume-title">视觉设计师 @ 字节跳动</h3>
              <div class="resume-detail">
                <p>负责品牌数字化转型中的视觉识别系统设计，参与多个过亿日活产品的 UI 规范制定。</p>
              </div>
            </div>
          </div>
          <div class="resume-item">
            <span class="year">2018 - 2020</span>
            <div class="resume-info">
              <h3 class="resume-title">初级设计师 @ 创意工作室</h3>
              <div class="resume-detail">
                <p>负责电商节日促销活动页面的视觉设计，以及日常品牌宣发物料的创意输出。</p>
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
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" alt="Profile">
        </div>
      </div>

      <div class="skills-col">
        <h2 class="section-label">CORE SKILLS</h2>
        <ul class="skill-tags">
          <li>UI/UX Design</li>
          <li>Prototyping</li>
          <li>Figma / AE</li>
          <li>Design Systems</li>
          <li>Visual Branding</li>
        </ul>
      </div>
    </section>

    <section id="work">
      <h2 class="section-label">FEATURED PROJECTS</h2>
      <div class="work-grid">
        <div class="work-card">
          <div class="img-16-9">
            <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1000" alt="Work 1">
          </div>
          <h4>智能移动终端交互系统</h4>
        </div>
        <div class="work-card">
          <div class="img-16-9">
            <img src="https://images.unsplash.com/photo-1618761767630-0114736b193f?auto=format&fit=crop&q=80&w=1000" alt="Work 2">
          </div>
          <h4>品牌视觉重塑手册</h4>
        </div>
        <div class="work-card">
          <div class="img-16-9">
            <img src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=1000" alt="Work 3">
          </div>
          <h4>极简主义网页排版研究</h4>
        </div>
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
</div>
:root {
  --bg: #ffffff;
  --text: #111111;
  --accent: #666666;
  --gray: #f4f4f4;
  --dark-footer: #2a2a2a; /* 深灰色 */
  --radius: 12px;         /* 圆角弧度 */
}

* { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; } /* 全局平滑滚动 */

body { font-family: "Inter", -apple-system, sans-serif; background: var(--bg); color: var(--text); }

/* 导航 */
.nav-bar { height: 80px; display: flex; justify-content: space-between; align-items: center; position: fixed; width: 100%; padding: 0 5%; z-index: 1000; background: rgba(255,255,255,0.7); backdrop-filter: blur(15px); }
.logo-img { height: 28px; width: auto; }
.nav-links { display: flex; gap: 40px; list-style: none; }
.nav-links a { text-decoration: none; color: var(--text); font-size: 13px; font-weight: 500; letter-spacing: 1px; }

/* 全屏 Banner */
.full-banner { height: 100vh; position: relative; width: 100%; overflow: hidden; }
.full-banner img { width: 100%; height: 100%; object-fit: cover; filter: brightness(0.65); }
.banner-content { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; color: white; width: 100%; }
.banner-content h1 { font-size: clamp(2.2rem, 6vw, 4.2rem); font-weight: 200; letter-spacing: -1px; }

/* 主体内容 */
.main-content { max-width: 1200px; margin: 0 auto; padding: 120px 5%; }

/* 关于我三栏布局 */
.about-grid { display: grid; grid-template-columns: 2.2fr 1.2fr 0.8fr; gap: 60px; margin-bottom: 150px; }
.section-label { font-size: 11px; letter-spacing: 3px; color: #bbb; margin-bottom: 30px; border-bottom: 1px solid #eee; padding-bottom: 10px; text-transform: uppercase; }

/* 履历风琴效果 */
.resume-item { display: flex; gap: 20px; border-bottom: 1px solid #f5f5f5; padding: 25px 0; cursor: pointer; transition: 0.3s; }
.year { font-size: 11px; color: #999; min-width: 80px; padding-top: 6px; }
.resume-title { font-size: 17px; font-weight: 400; }
.resume-detail { max-height: 0; overflow: hidden; transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1); color: #666; font-size: 14px; line-height: 1.7; }
.resume-item.active .resume-detail { max-height: 300px; margin-top: 15px; }
.resume-item.active .resume-title { color: var(--accent); }

/* 语录与情绪照片 */
.quote-box { font-size: 18px; font-style: italic; border-left: 2px solid #000; padding-left: 15px; margin-bottom: 30px; line-height: 1.5; }
.mood-photo { width: 100%; border-radius: var(--radius); overflow: hidden; }
.mood-photo img { width: 100%; display: block; filter: grayscale(100%); transition: 0.8s; }
.mood-photo:hover img { filter: grayscale(0); }

/* 技能标签 */
.skill-tags { list-style: none; display: flex; flex-wrap: wrap; gap: 8px; }
.skill-tags li { font-size: 11px; background: var(--gray); padding: 6px 14px; border-radius: 4px; color: #555; }

/* 作品网格 (一行三个) */
.work-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }
.img-16-9 { width: 100%; aspect-ratio: 16/9; border-radius: var(--radius); overflow: hidden; background: #eee; }
.img-16-9 img { width: 100%; height: 100%; object-fit: cover; transition: 0.6s; }
.work-card:hover img { transform: scale(1.05); }
.work-card h4 { margin-top: 18px; font-size: 15px; font-weight: 500; }

.btn-container { text-align: center; margin-top: 60px; }
.btn-more { display: inline-block; padding: 16px 45px; border: 1px solid #000; text-decoration: none; color: #000; font-size: 13px; transition: 0.3s; }
.btn-more:hover { background: #000; color: #fff; }

/* 底部深灰色联系区域 */
.footer-dark { background: var(--dark-footer); height: 33.3vh; width: 100%; display: flex; align-items: center; justify-content: center; color: white; padding: 0 5%; }
.footer-inner { width: 100%; max-width: 1200px; display: flex; justify-content: space-between; align-items: center; }
.footer-label { font-size: 11px; letter-spacing: 3px; color: #777; margin-bottom: 12px; }
.contact-text h2 { font-size: clamp(1.5rem, 4vw, 2.2rem); font-weight: 300; }
.contact-info { text-align: right; line-height: 2; font-size: 14px; color: #bbb; }

/* 响应式适配 */
@media (max-width: 900px) {
  .about-grid { grid-template-columns: 1fr; gap: 40px; }
  .work-grid { grid-template-columns: 1fr; }
  .footer-inner { flex-direction: column; text-align: center; gap: 30px; }
  .contact-info { text-align: center; }
}
// 1. 履历折叠点击交互
document.querySelectorAll('.resume-item').forEach(item => {
  item.addEventListener('click', () => {
    // 切换 active 类名
    item.classList.toggle('active');
  });
});

// 2. 导航栏智能跳转/滚动逻辑
document.querySelectorAll('.nav-links a, .btn-more').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');

    // 逻辑：如果是本页锚点链接（以 # 开头）
    if (href.startsWith('#')) {
      e.preventDefault(); 
      const targetId = href;
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // 滚动到目标位置，减去 80px 的导航栏高度
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    }
    // 逻辑：如果是外部页面链接（如 projects.html），则不阻止 e.preventDefault，让它直接跳转
  });
});
