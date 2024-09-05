import{_ as i,c as a,a2 as n,o as e}from"./chunks/framework.BCZhKq8w.js";const o=JSON.parse('{"title":"VuePress 部署时遇到的问题","description":"","frontmatter":{"lastUpdated":"2019-03-12T00:00:00.000Z"},"headers":[],"relativePath":"blog/github/vuepress-deploy.md","filePath":"blog/github/vuepress-deploy.md","lastUpdated":1552348800000}'),t={name:"blog/github/vuepress-deploy.md"};function l(p,s,h,k,r,d){return e(),a("div",null,s[0]||(s[0]=[n(`<h1 id="vuepress-部署时遇到的问题" tabindex="-1">VuePress 部署时遇到的问题 <a class="header-anchor" href="#vuepress-部署时遇到的问题" aria-label="Permalink to &quot;VuePress 部署时遇到的问题&quot;">​</a></h1><p><a href="https://vuepress.vuejs.org/" target="_blank" rel="noreferrer">VuePress</a> 官方文档的<a href="https://vuepress.vuejs.org/zh/guide/deploy.html#%E9%83%A8%E7%BD%B2" target="_blank" rel="noreferrer">部署</a>部分提供了在 <a href="https://pages.github.com/" target="_blank" rel="noreferrer">GitHub Pages</a> 上的部署脚本 <code>deploy.sh</code></p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#!/usr/bin/env sh</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 确保脚本抛出遇到的错误</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">set</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -e</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 生成静态文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs:build</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 进入生成的文件夹</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs/.vuepress/dist</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果是发布到自定义域名</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># echo &#39;www.example.com&#39; &gt; CNAME</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -A</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;deploy&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果发布到 https://&lt;USERNAME&gt;.github.io</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># git push -f git@github.com:&lt;USERNAME&gt;/&lt;USERNAME&gt;.github.io.git master</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果发布到 https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># git push -f git@github.com:&lt;USERNAME&gt;/&lt;REPO&gt;.git master:gh-pages</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> -</span></span></code></pre></div><p>参考这个脚本写了 Windows 系统下的 PowerShell 脚本</p><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">yarn.cmd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> docs:build</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Set-Location</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> .\\docs\\.vuepress\\dist</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Write-Output</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;sunyufei.ml&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Out-File</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CNAME</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">git.exe</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> init</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">git.exe</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> add </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">A</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">git.exe</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> commit </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">m </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Deploy on GitHub Pages&quot;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">git.exe</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> push </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> git@github.com:SunYufei</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sunyufei.github.io.git master</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Set-Location</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ..\\..\\..</span></span></code></pre></div><p>在运行时提示禁止运行，原因是 PowerShell 默认的执行策略是 <code>RETRICTED</code>，即只能运行单独的命令，不允许运行脚本</p><p>将执行策略修改为 <code>REMOTESIGNED</code> 即可运行用户自定义脚本和来自网络的已签名脚本</p><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Set-ExecutionPolicy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> REMOTESIGNED</span></span></code></pre></div><p>修改运行策略后脚本可以正常运行，但生成的 <code>CNAME</code> 文件编码有误，GitHub Pages 不识别</p><p>PowerShell 默认使用 UTF-16 编码，GitHub Pages 要求 CNAME 文件使用 UTF-8 编码，在 PowerShell 的 <code>Out-File</code> 命令中指定输出文件编码即可</p><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Write-Output</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;sunyufei.ml&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Out-File</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Encoding utf8 CNAME</span></span></code></pre></div>`,11)]))}const c=i(t,[["render",l]]);export{o as __pageData,c as default};
