import{_ as a,c as s,a2 as n,o as p}from"./chunks/framework.BCZhKq8w.js";const c=JSON.parse('{"title":"使用 Miniconda 和 pipenv 管理 Python 版本及包依赖","description":"","frontmatter":{"lastUpdated":"2019-04-05T00:00:00.000Z"},"headers":[],"relativePath":"blog/python/pipenv.md","filePath":"blog/python/pipenv.md","lastUpdated":1554422400000}'),e={name:"blog/python/pipenv.md"};function t(h,i,l,o,d,k){return p(),s("div",null,i[0]||(i[0]=[n(`<h1 id="使用-miniconda-和-pipenv-管理-python-版本及包依赖" tabindex="-1">使用 Miniconda 和 pipenv 管理 Python 版本及包依赖 <a class="header-anchor" href="#使用-miniconda-和-pipenv-管理-python-版本及包依赖" aria-label="Permalink to &quot;使用 Miniconda 和 pipenv 管理 Python 版本及包依赖&quot;">​</a></h1><h2 id="miniconda-简介" tabindex="-1">Miniconda 简介 <a class="header-anchor" href="#miniconda-简介" aria-label="Permalink to &quot;Miniconda 简介&quot;">​</a></h2><p>Conda 是一个开源的包管理系统和环境管理系统，用于安装多个版本的软件包及其依赖关系，并在它们之间轻松切换。Conda 适用于 Linux、OS X 和 Windows，是为 Python 程序创建的，可以打包和分发任何软件。</p><p>Anaconda 是一个开源的 Python 发行版，包含了 Conda、Python 等多个科学计算包及其依赖项，安装包较大。</p><p>Miniconda 是最小的 Conda 安装环境，只包含 Conda 和 Python。</p><h2 id="pipenv-简介" tabindex="-1">pipenv 简介 <a class="header-anchor" href="#pipenv-简介" aria-label="Permalink to &quot;pipenv 简介&quot;">​</a></h2><p>pipenv 是 Pipfile 主要倡导者、requests 作者 Kenneth Reitz 写的一个命令行工具，主要包含了 Pipfile、pip、click、requests 和 virtualenv。Pipfile 和 pipenv 本来都是 Kenneth Reitz 的个人项目，后来贡献给了 pypa 组织。Pipfile 是社区拟定的依赖管理文件，用于替代过于简陋的 requirements.txt 文件。</p><p>Pipfile 文件是 TOML 格式而不是 requirements.txt 这样的纯文本。</p><p>一个项目对应一个 Pipfile，支持开发环境与正式环境区分。默认提供 default 和 development 区分。</p><p>提供版本锁支持，存为 Pipfile.lock。</p><h2 id="开发环境配置" tabindex="-1">开发环境配置 <a class="header-anchor" href="#开发环境配置" aria-label="Permalink to &quot;开发环境配置&quot;">​</a></h2><h3 id="miniconda-创建多版本-python-环境" tabindex="-1">Miniconda 创建多版本 Python 环境 <a class="header-anchor" href="#miniconda-创建多版本-python-环境" aria-label="Permalink to &quot;Miniconda 创建多版本 Python 环境&quot;">​</a></h3><p>以创建 Python 2.7 和 Python 3.6 环境为例</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Python 2.7</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> py27</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> python=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2.7</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Python 3.6</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> py36</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> python=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3.6</span></span></code></pre></div><h3 id="pipenv-安装" tabindex="-1">pipenv 安装 <a class="header-anchor" href="#pipenv-安装" aria-label="Permalink to &quot;pipenv 安装&quot;">​</a></h3><p>推荐使用 Python 3 的 pip 进行 pipenv 的安装</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pipenv</span></span></code></pre></div><h3 id="pipenv-项目依赖环境管理" tabindex="-1">pipenv 项目依赖环境管理 <a class="header-anchor" href="#pipenv-项目依赖环境管理" aria-label="Permalink to &quot;pipenv 项目依赖环境管理&quot;">​</a></h3><p>通过使用 Conda 创建的多版本 Python 实现多版本控制</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pipenv</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --python</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /path/to/python</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 或者使用系统自带的 Python 3</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pipenv</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --three</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 或者使用系统自带的 Python 2</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pipenv</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --two</span></span></code></pre></div><p>如果需要安装项目依赖包，使用 <code>pipenv install</code> 命令，以 requests 和 beautifulsoup4 为例，可以使用 <code>==</code> 指定安装的版本。</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pipenv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> requests</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> beautifulsoup4==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4.6.0</span></span></code></pre></div>`,22)]))}const y=a(e,[["render",t]]);export{c as __pageData,y as default};
