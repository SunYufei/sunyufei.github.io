import{_ as i,c as e,a2 as s,o as t}from"./chunks/framework.BCZhKq8w.js";const c=JSON.parse('{"title":"解决本站无法被百度搜索收录的问题","description":"","frontmatter":{"lastUpdated":"2019-07-03T00:00:00.000Z"},"headers":[],"relativePath":"blog/github/baidu-search.md","filePath":"blog/github/baidu-search.md","lastUpdated":1562112000000}'),h={name:"blog/github/baidu-search.md"};function n(l,a,r,o,d,p){return t(),e("div",null,a[0]||(a[0]=[s(`<h1 id="解决本站无法被百度搜索收录的问题" tabindex="-1">解决本站无法被百度搜索收录的问题 <a class="header-anchor" href="#解决本站无法被百度搜索收录的问题" aria-label="Permalink to &quot;解决本站无法被百度搜索收录的问题&quot;">​</a></h1><h2 id="问题综述" tabindex="-1">问题综述 <a class="header-anchor" href="#问题综述" aria-label="Permalink to &quot;问题综述&quot;">​</a></h2><p>本站搭建在 GitHub Pages 上，搭建后发现 Google 已经收录了，但百度却没有收录，原因在于 GitHub 屏蔽了百度爬虫的抓取。</p><h2 id="可选的解决方案" tabindex="-1">可选的解决方案 <a class="header-anchor" href="#可选的解决方案" aria-label="Permalink to &quot;可选的解决方案&quot;">​</a></h2><h4 id="当百度不存在" tabindex="-1">当百度不存在 <a class="header-anchor" href="#当百度不存在" aria-label="Permalink to &quot;当百度不存在&quot;">​</a></h4><p>这个方案最方便，实现起来也简单（没有任何操作）。但作为中文站，大部分人还是通过百度来发现网站内容的，抛弃百度等于和相当一部分读者说再见了。方案不可行，PASS</p><h4 id="抛弃-github-pages-选用其他产品-如-vps、gitlab-等" tabindex="-1">抛弃 GitHub Pages，选用其他产品（如 VPS、GitLab 等） <a class="header-anchor" href="#抛弃-github-pages-选用其他产品-如-vps、gitlab-等" aria-label="Permalink to &quot;抛弃 GitHub Pages，选用其他产品（如 VPS、GitLab 等）&quot;">​</a></h4><p>VPS 需要花时间和金钱去维护，GitLab 的响应速度比 GitHub 慢接近一倍。用户体验差，PASS</p><h4 id="使用-cdn" tabindex="-1">使用 CDN <a class="header-anchor" href="#使用-cdn" aria-label="Permalink to &quot;使用 CDN&quot;">​</a></h4><p>此方案需要网站有一定的访问量，且需要花钱买服务。PASS</p><h4 id="双仓库-多路解析" tabindex="-1">双仓库 + 多路解析 <a class="header-anchor" href="#双仓库-多路解析" aria-label="Permalink to &quot;双仓库 + 多路解析&quot;">​</a></h4><p>使用 Coding Pages 和 GitHub Pages 双站点，结合多路解析实现让百度爬虫访问 Coding Pages，其他用户直接访问 GitHub Pages。这个需要有自己的自定义域名，可行，本文使用这个方案。</p><h2 id="具体实现方式的选择" tabindex="-1">具体实现方式的选择 <a class="header-anchor" href="#具体实现方式的选择" aria-label="Permalink to &quot;具体实现方式的选择&quot;">​</a></h2><h4 id="为什么使用-coding-pages" tabindex="-1">为什么使用 Coding Pages <a class="header-anchor" href="#为什么使用-coding-pages" aria-label="Permalink to &quot;为什么使用 Coding Pages&quot;">​</a></h4><p>目前国内免费的 Pages 服务主要是 Coding Pages 或者 码云 Gitee，Coding Pages 可以免费支持自定义域名，码云需要开通 VIP 才能使用自定义域名。</p><h2 id="部署过程" tabindex="-1">部署过程 <a class="header-anchor" href="#部署过程" aria-label="Permalink to &quot;部署过程&quot;">​</a></h2><h3 id="双站点部署" tabindex="-1">双站点部署 <a class="header-anchor" href="#双站点部署" aria-label="Permalink to &quot;双站点部署&quot;">​</a></h3><p>本站使用 <code>Hugo</code> 搭建，通过编写自动部署脚本 <code>deploy.bat</code> 部署到 GitHub Pages 和 Coding Pages 中。</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hugo</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> public</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Update: %date:~0,10%&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> master</span></span></code></pre></div><h3 id="配置多路解析" tabindex="-1">配置多路解析 <a class="header-anchor" href="#配置多路解析" aria-label="Permalink to &quot;配置多路解析&quot;">​</a></h3><p>前往自定义域名提供商的网站修改域名解析，本文使用的是腾讯云的域名服务。</p><p>在域名解析中分别创建指向 GitHub Pages 域名和 Coding Pages 域名的解析规则。注意添加指向 Coding Pages，线路类型为搜索引擎的解析规则。</p><h3 id="绑定自定义域名" tabindex="-1">绑定自定义域名 <a class="header-anchor" href="#绑定自定义域名" aria-label="Permalink to &quot;绑定自定义域名&quot;">​</a></h3><p>Coding Pages 不支持直接读取 CNAME，所以需要手动设置，在 Pages 服务界面点击设置图标，根据官方提示进行设置，这里不再赘述。</p><h2 id="参考内容" tabindex="-1">参考内容 <a class="header-anchor" href="#参考内容" aria-label="Permalink to &quot;参考内容&quot;">​</a></h2><p><a href="https://www.huliujia.com/blog/7d8b8a8b346ec437171b8ceca0c4fd708af4b702/" target="_blank" rel="noreferrer">胡刘郏：使用双仓库 + 多路解析解决 Github Pages 无法被百度搜索收录的问题</a></p>`,26)]))}const b=i(h,[["render",n]]);export{c as __pageData,b as default};
