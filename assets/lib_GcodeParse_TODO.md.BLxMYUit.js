import{_ as a,o as n,c as i,a3 as p}from"./chunks/framework.Cs8hIhTA.js";const r=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"lib/GcodeParse/TODO.md","filePath":"lib/GcodeParse/TODO.md"}'),e={name:"lib/GcodeParse/TODO.md"};function l(t,s,o,c,d,h){return n(),i("div",{"data-pagefind-body":!0},s[0]||(s[0]=[p(`<div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> &quot;dependencies&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;ohm-js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^17.1.0&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;devDependencies&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;@ohm-js/cli&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^2.0.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;vitest&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^2.0.3&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>需要手动运行，打包命令：<code>npx ohm generateBundles --withTypes &#39;src/gcode/*.ohm&#39;</code>；</p><p>Match 信息：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> m</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> grammar.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">match</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(gcodeInput);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`match message:\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, m.message)</span></span></code></pre></div><p>文法错误提示<code>Rule g2 involves an alternation which has inconsistent arity (expected 4, got 3)</code><a href="https://github.com/ohmjs/ohm-editor/issues/32" target="_blank" rel="noreferrer">https://github.com/ohmjs/ohm-editor/issues/32</a></p><p>重构 addOperation 代码量</p><h2 id="循环指令-循环程序段-起始-n-与-终止-n-指令-数据验证。如下面代码中-p1-与-n1-对应-q2-与-n2-对应。" tabindex="-1">循环指令，循环程序段，起始 N 与 终止 N 指令，数据验证。如下面代码中，<code>P1</code> 与 <code>N1</code> 对应，<code>Q2</code> 与 <code>N2</code> 对应。 <a class="header-anchor" href="#循环指令-循环程序段-起始-n-与-终止-n-指令-数据验证。如下面代码中-p1-与-n1-对应-q2-与-n2-对应。" aria-label="Permalink to &quot;循环指令，循环程序段，起始 N 与 终止 N 指令，数据验证。如下面代码中，\`P1\` 与 \`N1\` 对应，\`Q2\` 与 \`N2\` 对应。&quot;">​</a></h2><p>处理逻辑：</p><ol><li>是否对应 <ul><li>是：处理完成；</li><li>否：抛出异常；</li></ul></li></ol><div class="language-gcode vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">gcode</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>G71U1R2</span></span>
<span class="line"><span>G71P1Q2X100Z200F300</span></span>
<span class="line"><span>N1G1X100Z200</span></span>
<span class="line"><span>G0X5</span></span>
<span class="line"><span>X300</span></span>
<span class="line"><span>N2G1X200</span></span></code></pre></div><h2 id="基础切削指令-模态-g-指令-数据验证。如下面代码中-x300-指令的-g-模态值应该为-g0。" tabindex="-1">基础切削指令，模态 G 指令，数据验证。如下面代码中 <code>X300</code> 指令的 G 模态值应该为 <code>G0</code>。 <a class="header-anchor" href="#基础切削指令-模态-g-指令-数据验证。如下面代码中-x300-指令的-g-模态值应该为-g0。" aria-label="Permalink to &quot;基础切削指令，模态 G 指令，数据验证。如下面代码中 \`X300\` 指令的 G 模态值应该为 \`G0\`。&quot;">​</a></h2><p>处理逻辑：</p><ul><li>当前指令 <code>G 指令</code><ul><li>为显性时，在 <code>state</code> 存储 <code>G 模态值</code>；</li><li>为缺省时： <ol><li>读取 <code>state</code> 存储 <code>G 模态值</code>；</li><li>通过 <code>InterpolationMotion = G1 | G0 | G2 | G3</code> 获取 <code>规则名</code>；</li><li>比较 <code>规则名</code> 与 <code>state</code> 两者 <code>G 模态值</code> 是否相同； <ul><li>是：处理完成；</li><li>否： <ol><li>抛出异常；</li><li>以 <code>state</code> 中 <code>G 模态值</code> 对应的<code>规则</code>进行匹配；</li></ol></li></ul></li></ol></li></ul></li></ul><div class="language-gcode vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">gcode</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>G71U1R2</span></span>
<span class="line"><span>G71P1Q2X100Z200F300</span></span>
<span class="line"><span>N1G1X100Z200</span></span>
<span class="line"><span>G0X5</span></span>
<span class="line"><span>X300</span></span>
<span class="line"><span>N2G1X200</span></span>
<span class="line"><span>{ G: 1 , X100, ret: true }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>O T 指令优化</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`generate\` 运行后，无结果。不生成相应文件。</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>&quot;scripts&quot;: {</span></span>
<span class="line"><span>    &quot;test&quot;: &quot;vitest&quot;,</span></span>
<span class="line"><span>    &quot;generate&quot;: &quot;npx ohm generateBundles --withTypes &#39;src/gcode/*.ohm&#39;&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>vitest 更新快照，控制台按 \`u\`；</span></span>
<span class="line"><span></span></span>
<span class="line"><span>解决 vscode 支持 js 新版本语法，如：Array.at()...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注释处理</span></span></code></pre></div><p>space += comment comment = &quot;(&quot; (~(&quot;)&quot;|&quot;(&quot;) any)* &quot;)&quot;</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>字符自动拼合</span></span>
<span class="line"><span></span></span>
<span class="line"><span>iden(arg0, arg1) {</span></span>
<span class="line"><span>    console.log(this.sourceString); // #0726</span></span>
<span class="line"><span>},</span></span></code></pre></div>`,16)]))}const g=a(e,[["render",l]]);export{r as __pageData,g as default};
