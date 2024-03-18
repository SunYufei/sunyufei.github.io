import{_ as s,c as i,o as a,a4 as e}from"./chunks/framework.DNMPuCUY.js";const u=JSON.parse('{"title":"通过 scp 在 Linux 之间互传文件","description":"","frontmatter":{"lastUpdated":"2020-02-12T00:00:00.000Z"},"headers":[],"relativePath":"blog/linux/scp.md","filePath":"blog/linux/scp.md","lastUpdated":1709626271000}'),p={name:"blog/linux/scp.md"},t=e('<h1 id="通过-scp-在-linux-之间互传文件" tabindex="-1">通过 scp 在 Linux 之间互传文件 <a class="header-anchor" href="#通过-scp-在-linux-之间互传文件" aria-label="Permalink to &quot;通过 scp 在 Linux 之间互传文件&quot;">​</a></h1><h2 id="scp-简介" tabindex="-1">scp 简介 <a class="header-anchor" href="#scp-简介" aria-label="Permalink to &quot;scp 简介&quot;">​</a></h2><p>传文件</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">scp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file.ext</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> user@ip:/path/</span></span></code></pre></div><p>传目录</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">scp</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> path</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> user@ip:/path/</span></span></code></pre></div><h2 id="免密传输" tabindex="-1">免密传输 <a class="header-anchor" href="#免密传输" aria-label="Permalink to &quot;免密传输&quot;">​</a></h2><p>如果没有配置好 SSH Key，上面的两个操作回要求输入密码。配置免密传输很简单，先将公钥文件传到目标服务器中</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">scp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.ssh/id_rsa.pub</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> user@ip:/home/user</span></span></code></pre></div><p>然后在目标服务器上将公钥添加到 <code>authorized_keys</code> 文件中</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> id_rsa.pub</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.ssh/authorized_keys</span></span></code></pre></div><p>此时传输文件不需要输密码了</p><h2 id="后台传输" tabindex="-1">后台传输 <a class="header-anchor" href="#后台传输" aria-label="Permalink to &quot;后台传输&quot;">​</a></h2><p>文件量巨大，前台传输的话当 ssh 断开传输就停止了</p><p>若已配置好 ssh 免密登录，可以使用 <code>nohup</code> 命令将其放到后台运行，关闭终端后文件传输不会中断</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nohup</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> scp</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /home/user</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> user@ip:/home/user</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;</span></span></code></pre></div><p>若不能配置 ssh 免密登录，需要使用密码方式传输，可以采用如下方式后台运行</p><ol><li><p>正常执行 scp 命令</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">scp</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> path</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> user@ip:/path/</span></span></code></pre></div></li><li><p>按下 <code>ctrl + z</code> 暂停任务</p></li><li><p>输入 <code>bg</code> 命令将任务放入后台</p></li><li><p>输入 <code>disown -h</code> 命令将这个作业忽略 HUP 信号</p></li></ol>',18),h=[t];function l(n,d,c,o,k,r){return a(),i("div",null,h)}const F=s(p,[["render",l]]);export{u as __pageData,F as default};
