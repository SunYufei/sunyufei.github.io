import{_ as s,c as i,o as a,a4 as t}from"./chunks/framework.nQaBHiNx.js";const y=JSON.parse('{"title":"Padavan 启用 IPv6","description":"","frontmatter":{"lastUpdated":"2019-05-21T00:00:00.000Z"},"headers":[],"relativePath":"blog/network/padavan-ipv6.md","filePath":"blog/network/padavan-ipv6.md","lastUpdated":1710149074000}'),l={name:"blog/network/padavan-ipv6.md"},n=t(`<h1 id="padavan-启用-ipv6" tabindex="-1">Padavan 启用 IPv6 <a class="header-anchor" href="#padavan-启用-ipv6" aria-label="Permalink to &quot;Padavan 启用 IPv6&quot;">​</a></h1><p>实验室里用的路由器刷的 OpenWrt，不知为何以太网和 WiFi 不能同时使用，将其换成了 Padavan，问题解决。</p><p>由于平时需要科学上网，使用的工具是基于 IPv6 的科学上网工具。校园网提供原生 IPv6，但中间多了路由器后需要配置 Teredo 或者配置路由器支持 IPv6 交换。Teredo 不太稳定，后一种方法稳定一些，本文记录一下配置方法。</p><h2 id="_1-开启-opt-环境" tabindex="-1">1 开启 opt 环境 <a class="header-anchor" href="#_1-开启-opt-环境" aria-label="Permalink to &quot;1 开启 opt 环境&quot;">​</a></h2><p>首先需要到 Padavan 管理后台开启 opt 环境。设置路径在 <code>扩展功能-配置扩展功能-opt 环境</code></p><p>启用下列选项：</p><ul><li>启用 opt 自动更新</li><li>启用 扩展脚本 自动更新</li><li>opt 强制安装</li><li>启用 提交统计</li></ul><p>注意点击下方 <code>应用本页面设置</code> 按钮，后文不在赘述。</p><h2 id="_2-开启-wan-端-ipv6" tabindex="-1">2 开启 WAN 端 IPv6 <a class="header-anchor" href="#_2-开启-wan-端-ipv6" aria-label="Permalink to &quot;2 开启 WAN 端 IPv6&quot;">​</a></h2><p>在管理后台 <code>外部网络(WAN)-IPv6 设置</code> 中设置：</p><table><thead><tr><th style="text-align:left;">选项</th><th style="text-align:left;">值</th></tr></thead><tbody><tr><td style="text-align:left;">IPv6 连接类型</td><td style="text-align:left;">Native DHCPv6</td></tr><tr><td style="text-align:left;">获取 IPv6 外网地址</td><td style="text-align:left;">Stateless: RA</td></tr><tr><td style="text-align:left;">自动获取 IPv6 DNS</td><td style="text-align:left;">启用</td></tr><tr><td style="text-align:left;">通过 DHCPv6 获取内网 IPv6 地址</td><td style="text-align:left;">启用</td></tr><tr><td style="text-align:left;">启用 LAN 路由器通告</td><td style="text-align:left;">启用</td></tr><tr><td style="text-align:left;">启用 LAN DHCPv6 服务器</td><td style="text-align:left;">Stateless (*)</td></tr></tbody></table><p>若需要手动设置 IPv6 DNS，禁用 <code>自动获取 IPv6 DNS</code> 选项后手动设置 DNS 地址。</p><h2 id="_3-安装并运行-6relayd" tabindex="-1">3 安装并运行 6relayd <a class="header-anchor" href="#_3-安装并运行-6relayd" aria-label="Permalink to &quot;3 安装并运行 6relayd&quot;">​</a></h2><p>转到 <code>系统管理-控制台</code>，在输入框中依次输入如下命令：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">opkg</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">opkg</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 6</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">relayd</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 安装 6relayd</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">6relayd</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -A</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eth2.2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> br0</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 启用 6relayd</span></span></code></pre></div><p>这里 <code>eth2.2</code> 是 WAN 网口网卡名，可用 <code>ifconfig</code> 命令查看，一般不用更改。<code>br0</code> 代表整个内网，一般不用更改。</p><h2 id="_4-开机自动安装并配置-6relayd-脚本" tabindex="-1">4 开机自动安装并配置 6relayd 脚本 <a class="header-anchor" href="#_4-开机自动安装并配置-6relayd-脚本" aria-label="Permalink to &quot;4 开机自动安装并配置 6relayd 脚本&quot;">​</a></h2><p>将下面的脚本复制粘贴到 <code>高级设置-自定义设置-脚本-在路由器启动之后执行</code> 中最后即可实现开机自动安装配置 6relayd：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 开机自动安装运行 6relayd</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PATH</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/etc/storage/bin:/tmp/script:/etc/storage/script:/opt/usr/sbin:/opt/usr/bin:/opt/sbin:/opt/bin:/usr/local/sbin:/usr/sbin:/usr/bin:/sbin:/bin&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> LD_LIBRARY_PATH</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/lib:/opt/lib</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">while</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> !</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-x</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;\`</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">which</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> opkg\`&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">do</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        logger</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;【6relayd】&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Waitting opt install&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        sleep</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">done</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">while</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> !</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-x</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;\`</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">which</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 6</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">relayd\`&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">do</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        logger</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;【6relayd】&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;6relayd not found,begin to install it&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        opkg</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        opkg</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 6</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">relayd</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">done</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">logger</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;【6relayd】&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;6relayd has been installed&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">6relayd</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -A</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eth2.2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> br0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">logger</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;【6relayd】&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;6relayd start&quot;</span></span></code></pre></div><h2 id="_5-解决-6relayd-自动掉线" tabindex="-1">5 解决 6relayd 自动掉线 <a class="header-anchor" href="#_5-解决-6relayd-自动掉线" aria-label="Permalink to &quot;5 解决 6relayd 自动掉线&quot;">​</a></h2><p>若长时间没有 IPv6 的连接，6relayd 会自动停止，简单的解决方法是每隔半小时重新连接一下 6relayd。将一下代码添加到<code>系统管理</code>-<code>服务</code>-<code>计划任务(Crontab)</code>中即可：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/30 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 6relayd -d -A eth2.2 br0</span></span></code></pre></div>`,22),e=[n];function h(p,k,d,r,o,F){return a(),i("div",null,e)}const c=s(l,[["render",h]]);export{y as __pageData,c as default};
