import{_ as s,c as i,o as a,a3 as t}from"./chunks/framework.BjRzcE-A.js";const g=JSON.parse('{"title":"CentOS 7 安装 RTTOV","description":"","frontmatter":{"lastUpdated":"2019-06-02T00:00:00.000Z"},"headers":[],"relativePath":"blog/rttov/rttov-centos.md","filePath":"blog/rttov/rttov-centos.md","lastUpdated":1714482263000}'),n={name:"blog/rttov/rttov-centos.md"},l=t(`<h1 id="centos-7-安装-rttov" tabindex="-1">CentOS 7 安装 RTTOV <a class="header-anchor" href="#centos-7-安装-rttov" aria-label="Permalink to &quot;CentOS 7 安装 RTTOV&quot;">​</a></h1><p>前面做过在 <a href="./rttov.html">Manjaro Linux 下安装 RTTOV</a> 的笔记，由于 Manjaro Linux 下的所有包都是最新的，难免会出现一些稳定性问题（e.g. RTTOV 挂了），故换用 CentOS 7 安装 RTTOV，记录一下安装过程。</p><h2 id="安装准备" tabindex="-1">安装准备 <a class="header-anchor" href="#安装准备" aria-label="Permalink to &quot;安装准备&quot;">​</a></h2><ul><li>CentOS 7 x64</li><li>rttov12.tar.gz</li></ul><h2 id="安装-rttov-依赖包" tabindex="-1">安装 RTTOV 依赖包 <a class="header-anchor" href="#安装-rttov-依赖包" aria-label="Permalink to &quot;安装 RTTOV 依赖包&quot;">​</a></h2><h3 id="设置-yum-为国内镜像-可选" tabindex="-1">设置 yum 为国内镜像（可选） <a class="header-anchor" href="#设置-yum-为国内镜像-可选" aria-label="Permalink to &quot;设置 yum 为国内镜像（可选）&quot;">​</a></h3><p>参照 <a href="http://mirrors.ustc.edu.cn/help/centos.html" target="_blank" rel="noreferrer">CentOS 镜像使用帮助</a> 将 yum 镜像设置为国内镜像</p><h3 id="安装-epel" tabindex="-1">安装 epel <a class="header-anchor" href="#安装-epel" aria-label="Permalink to &quot;安装 epel&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> epel-release</span></span></code></pre></div><h3 id="更新软件包缓存" tabindex="-1">更新软件包缓存 <a class="header-anchor" href="#更新软件包缓存" aria-label="Permalink to &quot;更新软件包缓存&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> makecache</span></span></code></pre></div><h3 id="安装依赖包" tabindex="-1">安装依赖包 <a class="header-anchor" href="#安装依赖包" aria-label="Permalink to &quot;安装依赖包&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> make</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                 gcc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gcc-gfortran</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                 perl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> perl-core</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> perl-devel</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> perl-libs</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                 zlib</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> zlib-devel</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                 hdf5</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hdf5-devel</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                 netcdf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> netcdf-devel</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                 netcdf-fortran</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> netcdf-fortran-devel</span></span></code></pre></div><h2 id="安装-rttov-gui-依赖包-可选" tabindex="-1">安装 RTTOV GUI 依赖包（可选） <a class="header-anchor" href="#安装-rttov-gui-依赖包-可选" aria-label="Permalink to &quot;安装 RTTOV GUI 依赖包（可选）&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 下载 Miniconda 2</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -O</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://repo.anaconda.com/miniconda/Miniconda2-latest-Linux-x86_64.sh</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Miniconda2-latest-Linux-x86_64.sh</span></span></code></pre></div><p>注意：在出现 <code>by running conda init? [yes|no]</code> 时输入 <code>yes</code>。</p><p>重启 terminal，使 miniconda 环境变量生效。</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装 RTTOV GUI 的依赖库，注意 wxpython 版本</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> numpy</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> scipy</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> h5py</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> matplotlib</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wxpython==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3.0.0</span></span></code></pre></div><h2 id="编译安装-rttov" tabindex="-1">编译安装 RTTOV <a class="header-anchor" href="#编译安装-rttov" aria-label="Permalink to &quot;编译安装 RTTOV&quot;">​</a></h2><h3 id="下载解压-rttov-12-2" tabindex="-1">下载解压 RTTOV 12.2 <a class="header-anchor" href="#下载解压-rttov-12-2" aria-label="Permalink to &quot;下载解压 RTTOV 12.2&quot;">​</a></h3><p>到官网下载 RTTOV 12.2，下载完成后解压</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在 /home/{username}/ 下安装</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rttov12</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tar</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -zxvf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rttov122.tar.gz</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -C</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rttov12</span></span></code></pre></div><h3 id="修改-makefile-local" tabindex="-1">修改 Makefile.local <a class="header-anchor" href="#修改-makefile-local" aria-label="Permalink to &quot;修改 Makefile.local&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/rttov12</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build/Makefile.local</span></span></code></pre></div><p>主要修改如下内容，注意新增的部分：</p><div class="language-toml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">HDF5_PREFIX = /</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">usr</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># For most compilers:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">FFLAGS_HDF5 = -</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">D_RTTOV_HDF $(FFLAG_MOD)$(HDF5_PREFIX)/include -I/usr/lib64/gfortran/modules</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># In most cases:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LDFLAGS_HDF5 = -</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">L$(HDF5_PREFIX)/lib -L$(HDF5_PREFIX)/lib64 -lhdf5hl_fortran -lhdf5_hl -lhdf5_fortran -lhdf5</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">NETCDF_PREFIX = /</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">usr</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># For most other compilers:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">FFLAGS_NETCDF = -</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">D_RTTOV_NETCDF -I$(NETCDF_PREFIX)/include</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># For NetCDF v4.2 and later:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LDFLAGS_NETCDF = -</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">L$(NETCDF_PREFIX)/lib -L$(NETCDF_PREFIX)/lib64 -lnetcdff</span></span></code></pre></div><h3 id="编译-rttov" tabindex="-1">编译 RTTOV <a class="header-anchor" href="#编译-rttov" aria-label="Permalink to &quot;编译 RTTOV&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/rttov12/src</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 根据提示进行编译安装，可根据实际情况调整编译参数</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">./build/rttov_compile.sh</span></span></code></pre></div><h3 id="测试-rttov-安装情况" tabindex="-1">测试 RTTOV 安装情况 <a class="header-anchor" href="#测试-rttov-安装情况" aria-label="Permalink to &quot;测试 RTTOV 安装情况&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/rttov12/rttov_test</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test_rttov12.sh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ARCH=gfortran</span></span></code></pre></div><p>若出现 <code>Ran 11 tests, 11=OK</code> 则说明测试无误。</p><h3 id="配置-gui-环境-可选" tabindex="-1">配置 GUI 环境（可选） <a class="header-anchor" href="#配置-gui-环境-可选" aria-label="Permalink to &quot;配置 GUI 环境（可选）&quot;">​</a></h3><blockquote><p>若未进行<code>安装 RTTOV GUI 依赖库</code>操作，本小节无需进行</p></blockquote><p>修改 <code>rttov_gui.env</code> 文件</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/rttov12/gui</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rttov_gui.env</span></span></code></pre></div><p>在 <code>RTTOV_GUI_PREFIX=</code> 后添加</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/home/{username}/rttov12/gui</span></span></code></pre></div><p>图形界面测试</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/rttov12/gui</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">source</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rttov_gui.env</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./rttovgui</span></span></code></pre></div><p>如果出来图形界面，则说明图形界面安装配置成功。</p><h2 id="参考内容" tabindex="-1">参考内容 <a class="header-anchor" href="#参考内容" aria-label="Permalink to &quot;参考内容&quot;">​</a></h2><ol><li><a href="./rttov.html">RTTOV 12.2 安装记录</a></li><li><a href="https://www.jianshu.com/p/1c2a771a2eca" target="_blank" rel="noreferrer">RTTOV 12.2 (Radiative Transfer for TOVS) 研究环境搭建（一）on WSL Ubuntu LTS 18.04</a></li><li><a href="https://www.jianshu.com/p/ba81ce2ca81e" target="_blank" rel="noreferrer">RTTOV 12.2 (Radiative Transfer for TOVS) 研究环境搭建（二）on WSL Ubuntu LTS 18.04</a></li></ol>`,42),e=[l];function h(p,k,r,o,d,c){return a(),i("div",null,e)}const u=s(n,[["render",h]]);export{g as __pageData,u as default};
