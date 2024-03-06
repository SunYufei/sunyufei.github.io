import{_ as s,c as i,o as a,a4 as t}from"./chunks/framework.Bl20_RFa.js";const g=JSON.parse('{"title":"RTTOV 12.2 安装记录","description":"","frontmatter":{"lastUpdated":"2018-11-16T00:00:00.000Z"},"headers":[],"relativePath":"blog/rttov/rttov.md","filePath":"blog/rttov/rttov.md","lastUpdated":1709626271000}'),n={name:"blog/rttov/rttov.md"},l=t(`<h1 id="rttov-12-2-安装记录" tabindex="-1">RTTOV 12.2 安装记录 <a class="header-anchor" href="#rttov-12-2-安装记录" aria-label="Permalink to &quot;RTTOV 12.2 安装记录&quot;">​</a></h1><p>最近帮助海洋技术系的老师和师姐安装了 RTTOV12.2 系统。记录一下安装过程，同时记录一下踩过的坑。</p><h2 id="day-1" tabindex="-1">Day 1 <a class="header-anchor" href="#day-1" aria-label="Permalink to &quot;Day 1&quot;">​</a></h2><p>RTTOV，全称 Radiative Transferfor TOVS，具体是干啥的我不知道。安装 RTTOV 需要 Linux 系统环境，一开始我选择了 Ubuntu 18.10 版本，电脑除了运行 RTTOV 还要跑点别的，用 Ubuntu 相对方便一点。我在电脑上划出 20GB 空间，安装好 Ubuntu，就开始编译根据手册准备编译 RTTOV。</p><p>手册要求先安装依赖库 gfortran、perl 等。安装这些很简单，一条命令即可。</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gfortran</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> perl</span></span></code></pre></div><p>由于我的英语有些瑕疵，把手册中安装完成后的其他内容的下载当成了下一步操作，导致分给 Linux 的 20GB 很快就木有了。又划了 80GB 给 Linux，继续安装。</p><p>手册中讲到需要先编译 HDF5 后再编译 RTTOV，于是我就转到了 HDF5 的编译。在编译 HDF5 的过程中遇到了依赖库缺失的问题，编译未能继续，第一天结束。</p><h2 id="day-2" tabindex="-1">Day 2 <a class="header-anchor" href="#day-2" aria-label="Permalink to &quot;Day 2&quot;">​</a></h2><blockquote><p>看手册要仔细，看不懂英文手册就上网搜一下安装成功的示例</p></blockquote><p>简书上有一篇文章记录了 RTTOV12.2 的安装过程（<a href="https://www.jianshu.com/p/ba81ce2ca81e" target="_blank" rel="noreferrer">文章链接</a>）。这篇文章看起来写的很详细，实际上漏洞百出，不能说是一篇不好的文章，至少提供了一个安装的思路。</p><p>文章记录了 RTTOV 的安装依赖关系。简单来说，需要先安装 gcc g++ gfortran make，在依次编译安装 zlib hdf5 netcdf netcdf-fortran，最后编译安装 RTTOV。</p><p>有了安装过程，开始安装。</p><p>前四个很简单，一条命令即可。</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build-essential</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gfortran</span></span></code></pre></div><p>接下来坑爹的地方来了，简书的这篇文章写了怎样编译 zlib 等库，但按照它给的步骤实际操作根本不能完成，因为文章中有些命令是错误的。于是我找到官方安装文档进行编译安装。</p><p>zlib、hdf5、netcdf 编译安装成功，netcdf-fortran 编译失败，不知道原因在哪里。又进行不下去了，第二天结束。</p><h2 id="day-3" tabindex="-1">Day 3 <a class="header-anchor" href="#day-3" aria-label="Permalink to &quot;Day 3&quot;">​</a></h2><blockquote><p><a href="https://archlinux.org/" target="_blank" rel="noreferrer">Arch Linux</a> 是个好东西</p></blockquote><p>我到 Arch 仓库中搜了一下这几个包，都可以通过 <code>pacman</code> 安装。我将系统换成了 Manjaro，一个基于 Arch Linux 的发行版。</p><p><strong>终于找到简便的安装方法了</strong></p><p>下面记录一下安装过程。</p><h2 id="rttov-12-2-安装记录-1" tabindex="-1">RTTOV 12.2 安装记录 <a class="header-anchor" href="#rttov-12-2-安装记录-1" aria-label="Permalink to &quot;RTTOV 12.2 安装记录&quot;">​</a></h2><blockquote><p>以下操作在 <a href="https://archlinux.org/" target="_blank" rel="noreferrer">Arch Linux</a> 或 <a href="https://manjaro.org/" target="_blank" rel="noreferrer">Manjaro Linux</a> 中进行</p></blockquote><h3 id="step-1-下载安装依赖库" tabindex="-1">Step 1 下载安装依赖库 <a class="header-anchor" href="#step-1-下载安装依赖库" aria-label="Permalink to &quot;Step 1 下载安装依赖库&quot;">​</a></h3><p>设置 pacman 镜像为国内镜像（非必须）</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 备份 mirrorlist</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/pacman.d/mirrorlist</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/pacman.d/mirrorlist.bak</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 将清华镜像写入新的 mirrorlist 中</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Server = https://mirrors.tuna.tsinghua.edu.cn/manjaro/stable/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">repo/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">arch&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/pacman.d/mirrorlist</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 同步软件仓库</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -Syy</span></span></code></pre></div><p>安装依赖包</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 一条命令安装编译依赖库，无需自行编译</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gcc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> make</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gcc-fortran</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> zlib</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hdf5</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> netcdf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> netcdf-fortran</span></span></code></pre></div><h3 id="step-2-安装-python-2" tabindex="-1">Step 2 安装 Python 2 <a class="header-anchor" href="#step-2-安装-python-2" aria-label="Permalink to &quot;Step 2 安装 Python 2&quot;">​</a></h3><p>到 <a href="https://conda.io/en/latest/miniconda.html" target="_blank" rel="noreferrer">Miniconda 官网</a>下载 Miniconda2</p><p>安装 Miniconda2，安装过程中注意将 Miniconda 加入环境变量</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Miniconda2-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.sh</span></span></code></pre></div><p>安装 RTTOV GUI 的依赖库，注意 wxpython 版本</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> numpy</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> scipy</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> h5py</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> matplotlib</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wxpython==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3.0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.0</span></span></code></pre></div><h3 id="step-3-下载-rttov-12-2" tabindex="-1">Step 3 下载 RTTOV 12.2 <a class="header-anchor" href="#step-3-下载-rttov-12-2" aria-label="Permalink to &quot;Step 3 下载 RTTOV 12.2&quot;">​</a></h3><p>到官网下载 RTTOV12.2，下载完成后解压</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在家目录下安装</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rttov12</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tar</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -zxvf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rttov122.tar.gz</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -C</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rttov12</span></span></code></pre></div><h3 id="step-4-修改-build-makefile-local" tabindex="-1">Step 4 修改 build/Makefile.local <a class="header-anchor" href="#step-4-修改-build-makefile-local" aria-label="Permalink to &quot;Step 4 修改 build/Makefile.local&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rttov12</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nano</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build/Makefile.local</span></span></code></pre></div><p>主要修改如下内容</p><div class="language-toml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">HDF5_PREFIX = /</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">usr</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># For most compilers ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">FFLAGS_HDF5 = -</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">D_RTTOV_HDF $(FFLAG_MOD)$(HDF5_PREFIX)/include</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># For most compilers ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LDFLAGS_HDF5 = -</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">L$(HDF5_PREFIX)/lib -lhdf5hl_fortran -lhdf5_hl -lhdf5_fortran -lhdf5</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">NETCDF_PREFIX = /</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">usr</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># For most compilers ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">FFLAGS_NETCDF = -</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">D_RTTOV_NETCDF -I$(NETCDF_PREFIX)/include</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># For netcdf v4.2 and later ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LDFLAGS_NETCDF = -</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">L$(NETCDF_PREFIX)/lib -lnetcdff</span></span></code></pre></div><h3 id="step-5-编译-rttov" tabindex="-1">Step 5 编译 RTTOV <a class="header-anchor" href="#step-5-编译-rttov" aria-label="Permalink to &quot;Step 5 编译 RTTOV&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rttov12</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 需要在此目录下进行编译</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 根据提示进行编译安装，可根据实际情况调整编译参数</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">./build/rttov_compile.sh</span></span></code></pre></div><p>测试 RTTOV 安装情况</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rttov12</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rttov_test</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test_rttov12.sh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ARCH=gfortran</span></span></code></pre></div><h3 id="step-6-配置-gui-环境" tabindex="-1">Step 6 配置 GUI 环境 <a class="header-anchor" href="#step-6-配置-gui-环境" aria-label="Permalink to &quot;Step 6 配置 GUI 环境&quot;">​</a></h3><p>修改 <code>rttov_gui.env</code> 文件</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rttov12</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gui</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nano</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rttov_gui.env</span></span></code></pre></div><p>在 <code>RTTOV_GUI_PREFIX=</code> 后添加</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/home/{username}/rttov12/gui</span></span></code></pre></div><h3 id="step-7-运行-rttov" tabindex="-1">Step 7 运行 RTTOV <a class="header-anchor" href="#step-7-运行-rttov" aria-label="Permalink to &quot;Step 7 运行 RTTOV&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rttov12</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gui</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">source</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rttov_gui.env</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./rttovgui</span></span></code></pre></div><p>如果出来图形界面，则说明安装成功。</p><p>至此，安装完毕。</p><h2 id="参考内容" tabindex="-1">参考内容 <a class="header-anchor" href="#参考内容" aria-label="Permalink to &quot;参考内容&quot;">​</a></h2><ol><li><a href="https://archlinux.org/" target="_blank" rel="noreferrer">Arch Linux</a></li><li><a href="https://wiki.archlinux.org/" target="_blank" rel="noreferrer">ArchWiki</a></li><li><a href="https://manjaro.org/" target="_blank" rel="noreferrer">Manjaro Linux</a></li><li><a href="https://www.jianshu.com/p/ba81ce2ca81e" target="_blank" rel="noreferrer">RTTOV12.2 (Radiative Transfer for TOVS) 研究环境搭建（二）on WSL Ubuntu LTS 18.04</a></li></ol><p>推荐一波 Manjaro Linux</p>`,58),e=[l];function h(p,k,r,d,o,c){return a(),i("div",null,e)}const y=s(n,[["render",h]]);export{g as __pageData,y as default};
