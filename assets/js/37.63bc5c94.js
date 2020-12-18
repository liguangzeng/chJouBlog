(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{674:function(t,s,n){"use strict";n.r(s);var a=n(11),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),n("p",[t._v("最近看了些文章，感觉自己之前对知识的了解还是比较浅的，在此聊一下对"),n("code",[t._v("作用域")]),t._v("、"),n("code",[t._v("作用域链")]),t._v("及"),n("code",[t._v("闭包")]),t._v("新的理解")]),t._v(" "),n("h2",{attrs:{id:"作用域"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#作用域"}},[t._v("#")]),t._v(" 作用域")]),t._v(" "),n("p",[t._v("用一句话来描述："),n("span",{staticStyle:{background:"#E6A23C",color:"#fff"}},[t._v("作用域就是标识符（变量）在程序中的可见范围")])]),t._v(" "),n("p",[n("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Glossary/Scope",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),n("OutboundLink")],1),t._v("是这么解释的："),n("span",{staticStyle:{background:"#E6A23C",color:"#fff"}},[t._v('当前的执行上下文。值和表达式在其中 "可见" 或可被访问到的上下文')])]),t._v(" "),n("p",[t._v("防止把"),n("code",[t._v("作用域")]),t._v("和"),n("code",[t._v("执行上下文")]),t._v("搞混了，我们还是解释一下它们的关系："),n("code",[t._v("上下文")]),t._v("、"),n("code",[t._v("作用域")]),t._v("和环境是同义词，不过"),n("code",[t._v("上下文")]),t._v("指代的是整体的执行环境，"),n("code",[t._v("作用域")]),t._v("关心的则是标识符的可见性，上下文包含了"),n("code",[t._v("this")]),t._v("、"),n("code",[t._v("变量环境")]),t._v("和"),n("code",[t._v("词法环境")]),t._v("，"),n("code",[t._v("作用域")]),t._v("其实是"),n("code",[t._v("词法环境")]),t._v("，"),n("code",[t._v("作用域链")]),t._v("也可以理解为"),n("code",[t._v("词法环境链")]),t._v("，这里引出了"),n("code",[t._v("词法环境")]),t._v("，我们稍后解释")]),t._v(" "),n("p",[n("code",[t._v("js")]),t._v("中"),n("code",[t._v("作用域")]),t._v("是"),n("code",[t._v("静态作用域")]),t._v("，也就是"),n("code",[t._v("词法作用域")]),t._v("，就是说"),n("code",[t._v("作用域")]),t._v("在你书写代码的过程中就已经确定了，用下边的代码来解释一下：")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// demo-1")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" sex "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"男"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 男")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("B")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" sex "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"女"')]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("A")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("B")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// A.prototype打印结果")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [[Scopes]]: Scopes[1]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 0: Global {window: Window, self: Window, document: document, name: "xw", location: Location, …}')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可以看出B不在A作用域链上")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// demo-2")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" sex "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"男"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("B")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" sex "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"女"')]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 女")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("A")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("B")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// A.prototype打印结果")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [[Scopes]]: Scopes[2]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 0: Closure (B) {sex: "女"}')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 1: Global {window: Window, self: Window, document: document, name: "xw", location: Location, …}')]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 上边连个demo就能够确定，作用域在定义阶段就已经确定了")]),t._v("\n")])])]),n("h2",{attrs:{id:"词法环境-lexicalenvironment"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#词法环境-lexicalenvironment"}},[t._v("#")]),t._v(" 词法环境(LexicalEnvironment)")]),t._v(" "),n("p",[n("code",[t._v("词法环境")]),t._v("是一种规范类型，基于"),n("code",[t._v("ECMAScript")]),t._v("代码的词法嵌套结构来定义变量和函数的关联关系，"),n("code",[t._v("执行上下文")]),t._v("创建阶段"),n("code",[t._v("词法环境组件")]),t._v("和"),n("code",[t._v("变量环境组件")]),t._v("最初是同一个值，在执行环境相关联的代码的执行过程中，变量环境组件永远不变，而词法环境组件有可能改变（对于这句话的解释请看"),n("a",{attrs:{href:"https://www.imooc.com/wenda/detail/431275",target:"_blank",rel:"noopener noreferrer"}},[t._v("连接"),n("OutboundLink")],1),t._v("）")]),t._v(" "),n("ul",[n("li",[t._v("组成")])]),t._v(" "),n("ol",[n("li",[t._v("环境记录（EnvironmentRecord）：储存变量和函数声明的实际位置")]),t._v(" "),n("li",[t._v("对外部环境的引用(Outer)：当前可以访问的外部词法环境，当在环境记录中无法查询到某个变量将会到外部（父级）环境记录表中查询，直到找到为止，如果没有找到将会抛出错误： "),n("code",[t._v("ReferenceError")]),t._v("，")])]),t._v(" "),n("ul",[n("li",[t._v("类型")])]),t._v(" "),n("ol",[n("li",[t._v("全局环境：外部引用为null，环境记录保存着window、关联的方法属性和定义的全局变量")]),t._v(" "),n("li",[t._v("函数环境：外部引用可以是全局环境也可以是外部函数环境，环境记录中保存着函数内定义的变量、函数及arguments")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 全局环境")]),t._v("\nGlobalExectionContent "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  LexicalEnvironment"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    EnvironmentRecord"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      Type"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Object"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 剩余标识符")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Outer"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 函数环境")]),t._v("\nFunctionExectionContent "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  LexicalEnvironment"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    EnvironmentRecord"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      Type"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Declarative"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 剩余标识符")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Outer"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Global or outer "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" environment reference"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("当在一个函数内查询一个变量，会现在当前环境查询，所谓当前环境查询就是在当前词法环境的环境记录中查询，若查不到则到引用的外部环境中查，这也就是我们说的作用域链（词法环境链）")])])}),[],!1,null,null,null);s.default=e.exports}}]);