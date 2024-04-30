import{_ as a,c as e,o as i,a3 as s,a9 as t,aa as r,ab as l}from"./chunks/framework.BjRzcE-A.js";const _=JSON.parse('{"title":"Alpine 安装 Docker","description":"","frontmatter":{"lastUpdated":"2020-02-09T00:00:00.000Z"},"headers":[],"relativePath":"blog/linux/alpine-docker.md","filePath":"blog/linux/alpine-docker.md","lastUpdated":1714482263000}'),h={name:"blog/linux/alpine-docker.md"},o=s('<h1 id="alpine-安装-docker" tabindex="-1">Alpine 安装 Docker <a class="header-anchor" href="#alpine-安装-docker" aria-label="Permalink to &quot;Alpine 安装 Docker&quot;">​</a></h1><p>Alpine Linux 是一个基于安全的轻量级 Linux 发行版，非常小巧，很省资源，用来做 Docker 的宿主很不错。本文尝试在虚拟机中安装 Alpine，然后安装 Docker，使用 Docker 跑复杂应用。</p><h2 id="virtual-box-安装-alpine" tabindex="-1">Virtual Box 安装 Alpine <a class="header-anchor" href="#virtual-box-安装-alpine" aria-label="Permalink to &quot;Virtual Box 安装 Alpine&quot;">​</a></h2><h3 id="_1-下载" tabindex="-1">1. 下载 <a class="header-anchor" href="#_1-下载" aria-label="Permalink to &quot;1. 下载&quot;">​</a></h3><p>到<a href="https://www.alpinelinux.org/downloads/" target="_blank" rel="noreferrer">官网下载页面</a>中，选择 <code>STANDARD</code> 版本，下载 ISO 文件</p><h3 id="_2-新建虚拟机" tabindex="-1">2. 新建虚拟机 <a class="header-anchor" href="#_2-新建虚拟机" aria-label="Permalink to &quot;2. 新建虚拟机&quot;">​</a></h3><p>打开 Virtual Box，新建虚拟机，类型选择 <code>Linux</code>，版本选择 <code>Other Linux (64-bit)</code></p><p><img src="'+t+'" alt=""></p><p>点击下一步，根据实际需求设置内存和硬盘大小</p><h3 id="_3-挂载-alpine-iso" tabindex="-1">3. 挂载 Alpine ISO <a class="header-anchor" href="#_3-挂载-alpine-iso" aria-label="Permalink to &quot;3. 挂载 Alpine ISO&quot;">​</a></h3><p><img src="'+r+'" alt=""></p><h3 id="_4-安装" tabindex="-1">4. 安装 <a class="header-anchor" href="#_4-安装" aria-label="Permalink to &quot;4. 安装&quot;">​</a></h3><p>启动虚拟机，根据提示进行安装（此处不赘述，参考官方文档）</p><h2 id="安装-docker" tabindex="-1">安装 Docker <a class="header-anchor" href="#安装-docker" aria-label="Permalink to &quot;安装 Docker&quot;">​</a></h2><h3 id="_1-设置端口映射" tabindex="-1">1. 设置端口映射 <a class="header-anchor" href="#_1-设置端口映射" aria-label="Permalink to &quot;1. 设置端口映射&quot;">​</a></h3><p>设置端口映射用于 ssh 连接</p><p><img src="'+l+`" alt=""></p><h3 id="_2-修改-ssh-配置" tabindex="-1">2. 修改 ssh 配置 <a class="header-anchor" href="#_2-修改-ssh-配置" aria-label="Permalink to &quot;2. 修改 ssh 配置&quot;">​</a></h3><p>打开 <code>/etc/ssh/sshd_config</code> 文件，取消注释 <code>Port 22</code> 和 <code>PermitRootLogin prohibit-password</code>，并将 <code>prohibit-password</code> 改为 <code>yes</code>，重启 <code>sshd</code> 服务</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">service</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sshd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restart</span></span></code></pre></div><p>此时可以使用 ssh 工具登录虚拟机内的 Alpine</p><h3 id="_3-安装-docker" tabindex="-1">3. 安装 Docker <a class="header-anchor" href="#_3-安装-docker" aria-label="Permalink to &quot;3. 安装 Docker&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apk</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apk</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker</span></span></code></pre></div><h3 id="_4-启动守护程序" tabindex="-1">4. 启动守护程序 <a class="header-anchor" href="#_4-启动守护程序" aria-label="Permalink to &quot;4. 启动守护程序&quot;">​</a></h3><p>添加引导时启动</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rc-update</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> boot</span></span></code></pre></div><p>手动启动 Docker 守护程序</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">service</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span></span></code></pre></div><blockquote><p>注意：此处顺序不能颠倒</p></blockquote><p>此时 Docker 安装启动完毕</p><h2 id="运行-docker" tabindex="-1">运行 Docker <a class="header-anchor" href="#运行-docker" aria-label="Permalink to &quot;运行 Docker&quot;">​</a></h2><p>以人人影视 docker 为例</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 3001:3001</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /opt/rrdata:/opt/work/store</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rrys</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> baiyuetribe/rrshare</span></span></code></pre></div><h2 id="参考内容" tabindex="-1">参考内容 <a class="header-anchor" href="#参考内容" aria-label="Permalink to &quot;参考内容&quot;">​</a></h2><ol><li><a href="https://www.imooc.com/article/287437" target="_blank" rel="noreferrer">alpine linux 环境中安装 docker</a></li><li><a href="https://wiki.alpinelinux.org/wiki/Installation" target="_blank" rel="noreferrer">Installation</a> (Alpine Wiki)</li><li><a href="https://wiki.alpinelinux.org/wiki/Docker" target="_blank" rel="noreferrer">Docker</a> (Alpine Wiki)</li><li><a href="https://github.com/Baiyuetribe/rrshare_docker" target="_blank" rel="noreferrer">Baiyuetribe/rrshare_docker</a></li></ol>`,35),n=[o];function p(d,c,k,u,g,b){return i(),e("div",null,n)}const m=a(h,[["render",p]]);export{_ as __pageData,m as default};
