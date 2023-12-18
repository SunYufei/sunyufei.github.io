import{_ as l,o as e,c as a,R as i}from"./chunks/framework.3LEfkZv-.js";const f=JSON.parse('{"title":"设计模式 ⭐⭐⭐⭐","description":"","frontmatter":{},"headers":[],"relativePath":"design-pattern/index.md","filePath":"design-pattern/README.md","lastUpdated":1701930599000}'),t={name:"design-pattern/index.md"},r=i('<h1 id="设计模式-⭐⭐⭐⭐" tabindex="-1">设计模式 ⭐⭐⭐⭐ <a class="header-anchor" href="#设计模式-⭐⭐⭐⭐" aria-label="Permalink to &quot;设计模式 ⭐⭐⭐⭐&quot;">​</a></h1><h2 id="创建型模式" tabindex="-1">创建型模式 <a class="header-anchor" href="#创建型模式" aria-label="Permalink to &quot;创建型模式&quot;">​</a></h2><p>对象实例化的模式，创建型模式用于解耦对象的实例化过程</p><ul><li>生成器（建造者）Builder：分步骤创建复杂对象</li><li>工厂模式 Factory <ul><li>定义一个创建对象的接口，让子类决定实例化哪个类</li><li>简单工厂：根据参数的不同返回不同的实例。专门定义一个类创建其他类的实例</li><li>抽象工厂：对工厂的扩展</li></ul></li><li>原型 Prototype：对象复制</li><li><a href="./singleton.html">单例</a> Singleton：确保一个类只有一个实例，且自行实例化，且向整个系统提供这个实例</li></ul><h2 id="行为型模式" tabindex="-1">行为型模式 <a class="header-anchor" href="#行为型模式" aria-label="Permalink to &quot;行为型模式&quot;">​</a></h2><p>类和对象如何交互，及划分责任和算法</p><ul><li>责任链 Chain of Responsibility：一种处理请求的模式，让多个处理器有机会处理该请求，直到其中某个处理成功为止。把多个请求处理器串成链，然后让请求在链上传递</li><li>命令 Command：将请求转换为一个包含与请求相关的所有信息的独立对象。</li><li>观察者（发布-订阅）Observer：定义对象间的一对多依赖关系，每当一个对象的状态发生改变的时候，相关依赖对象得到通知并自动更新</li><li>状态 State：允许对象在内部状态改变时改变它的行为</li><li>策略 Strategy：定义一组算法，将每个算法都封装起来，并使它们可以互相替换。让算法独立于使用它的客户而变化</li><li>模板方法 Template：定义一个操作的算法框架，将一些步骤延迟到子类中，使得子类可以不改变一个算法的结构即可重定义算法某些特定的步骤。封装不变部分，扩展可变部分</li></ul><h2 id="结构型模式" tabindex="-1">结构型模式 <a class="header-anchor" href="#结构型模式" aria-label="Permalink to &quot;结构型模式&quot;">​</a></h2><p>把类和对象结合在一起形成一个更大的结构</p><ul><li>适配器 Adapter：将一个类的接口变换成客户端所期待的另一个接口，从而使因接口不匹配而无法在一起工作的两个类在一起工作</li><li>装饰器 Decorator：动态的给对象添加功能，就增加功能来说，比生成子类更加灵活</li><li>外观（门面）Facade：提供高层次接口，使子系统更易使用</li><li>享元 Flyweight：共享内部信息，内部信息不会因为外部环境改变而改变。典型应用是池技术，减少对象数量</li><li>代理 Proxy：为其他对象提供一种代理来控制这个对象的访问</li></ul><h2 id="资源" tabindex="-1">资源 <a class="header-anchor" href="#资源" aria-label="Permalink to &quot;资源&quot;">​</a></h2><ul><li>书籍 <ul><li>⭐《图解设计模式》（强烈推荐这本书，正是用 Java 语言实现，图多、有示例代码、有习题和答案，很不错）</li><li>《Head First 设计模式》</li><li>《大话设计模式》</li><li>《设计模式：可复用面向对象软件的基础》（大黑书，有能力的话也可以去读）</li></ul></li><li>视频 <ul><li><a href="https://www.bilibili.com/video/BV1G4411c7N4" target="_blank" rel="noreferrer">尚硅谷图解 Java 设计模式</a></li></ul></li><li>文档 <ul><li><a href="https://www.runoob.com/design-pattern/design-pattern-tutorial.html" target="_blank" rel="noreferrer">菜鸟教程</a></li><li><a href="https://design-patterns.readthedocs.io/zh_CN/latest/" target="_blank" rel="noreferrer">图说设计模式</a></li></ul></li></ul>',12),o=[r];function n(s,d,h,c,u,p){return e(),a("div",null,o)}const m=l(t,[["render",n]]);export{f as __pageData,m as default};
