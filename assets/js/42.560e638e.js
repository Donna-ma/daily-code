(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{288:function(s,a,t){"use strict";t.r(a);var n=t(28),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"算术运算符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#算术运算符"}},[s._v("#")]),s._v(" 算术运算符")]),s._v(" "),t("p",[s._v("运算符是处理数据的基本方法，用来从现有的值得到新的值。JavaScript 提供了多种运算符，覆盖了所有主要的运算。")]),s._v(" "),t("h2",{attrs:{id:"概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[s._v("#")]),s._v(" 概述")]),s._v(" "),t("p",[s._v("JavaScript 共提供10个算术运算符，用来完成基本的算术运算。")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("加法运算符")]),s._v("："),t("code",[s._v("x + y")])]),s._v(" "),t("li",[t("strong",[s._v("减法运算符")]),s._v("： "),t("code",[s._v("x - y")])]),s._v(" "),t("li",[t("strong",[s._v("乘法运算符")]),s._v("： "),t("code",[s._v("x * y")])]),s._v(" "),t("li",[t("strong",[s._v("除法运算符")]),s._v("："),t("code",[s._v("x / y")])]),s._v(" "),t("li",[t("strong",[s._v("指数运算符")]),s._v("："),t("code",[s._v("x ** y")])]),s._v(" "),t("li",[t("strong",[s._v("余数运算符")]),s._v("："),t("code",[s._v("x % y")])]),s._v(" "),t("li",[t("strong",[s._v("自增运算符")]),s._v("："),t("code",[s._v("++x")]),s._v(" 或者 "),t("code",[s._v("x++")])]),s._v(" "),t("li",[t("strong",[s._v("自减运算符")]),s._v("："),t("code",[s._v("--x")]),s._v(" 或者 "),t("code",[s._v("x--")])]),s._v(" "),t("li",[t("strong",[s._v("数值运算符")]),s._v("： "),t("code",[s._v("+x")])]),s._v(" "),t("li",[t("strong",[s._v("负数值运算符")]),s._v("："),t("code",[s._v("-x")])])]),s._v(" "),t("p",[s._v("减法、乘法、除法运算法比较单纯，就是执行相应的数学运算。下面介绍其他几个算术运算符，重点是加法运算符。")]),s._v(" "),t("h2",{attrs:{id:"加法运算符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#加法运算符"}},[s._v("#")]),s._v(" 加法运算符")]),s._v(" "),t("h3",{attrs:{id:"基本规则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本规则"}},[s._v("#")]),s._v(" 基本规则")]),s._v(" "),t("p",[s._v("加法运算符（"),t("code",[s._v("+")]),s._v("）是最常见的运算符，用来求两个数值的和。")]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 2")]),s._v("\n")])])]),t("p",[s._v("JavaScript 允许非数值的相加。")]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 2")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 2")]),s._v("\n")])])]),t("p",[s._v("上面代码中，第一行是两个布尔值相加，第二行是数值与布尔值相加。这两种情况，布尔值都会自动转成数值，然后再相加。")]),s._v(" "),t("p",[s._v("比较特殊的是，如果是两个字符串相加，这时加法运算符会变成连接运算符，返回一个新的字符串，将两个原字符串连接在一起。")]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bc'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// "abc"')]),s._v("\n")])])]),t("p",[s._v("如果一个运算子是字符串，另一个运算子是非字符串，这时非字符串会转成字符串，再连接在一起。")]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// "1a"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// "falsea"')]),s._v("\n")])])]),t("p",[s._v("加法运算符是在运行时决定，到底是执行相加，还是执行连接。也就是说，运算子的不同，导致了不同的语法行为，这种现象称为“重载”（overload）。由于加法运算符存在重载，可能执行两种运算，使用的时候必须很小心。")]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// "345"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'5'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// "75"')]),s._v("\n")])])]),t("p",[s._v("上面代码中，由于从左到右的运算次序，字符串的位置不同会导致不同的结果。")]),s._v(" "),t("p",[s._v("除了加法运算符，其他算术运算符（比如减法、除法和乘法）都不会发生重载。它们的规则是：所有运算子一律转为数值，再进行相应的数学运算。")]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// -1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 2")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 0.5")]),s._v("\n")])])]),t("p",[s._v("上面代码中，减法、除法和乘法运算符，都是将字符串自动转为数值，然后再运算。")]),s._v(" "),t("h3",{attrs:{id:"对象的相加"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对象的相加"}},[s._v("#")]),s._v(" 对象的相加")]),s._v(" "),t("p",[s._v("如果运算子是对象，必须先转成原始类型的值，然后再相加。")]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" obj "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" p"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nobj "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// "[object Object]2"')]),s._v("\n")])])]),t("p",[s._v("上面代码中，对象"),t("code",[s._v("obj")]),s._v("转成原始类型的值是"),t("code",[s._v("[object Object]")]),s._v("，再加"),t("code",[s._v("2")]),s._v("就得到了上面的结果。")]),s._v(" "),t("p",[s._v("对象转成原始类型的值，规则如下。")]),s._v(" "),t("p",[s._v("首先，自动调用对象的"),t("code",[s._v("valueOf")]),s._v("方法。")]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" obj "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" p"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nobj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("valueOf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// { p: 1 }")]),s._v("\n")])])]),t("p",[s._v("一般来说，对象的"),t("code",[s._v("valueOf")]),s._v("方法总是返回对象自身，这时再自动调用对象的"),t("code",[s._v("toString")]),s._v("方法，将其转为字符串。")]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" obj "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" p"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nobj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("valueOf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("toString")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// "[object Object]"')]),s._v("\n")])])]),t("p",[s._v("对象的"),t("code",[s._v("toString")]),s._v("方法默认返回"),t("code",[s._v("[object Object]")]),s._v("，所以就得到了最前面那个例子的结果。")]),s._v(" "),t("p",[s._v("知道了这个规则以后，就可以自己定义"),t("code",[s._v("valueOf")]),s._v("方法或"),t("code",[s._v("toString")]),s._v("方法，得到想要的结果。")]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" obj "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("valueOf")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nobj "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 3")]),s._v("\n")])])]),t("p",[s._v("上面代码中，我们定义"),t("code",[s._v("obj")]),s._v("对象的"),t("code",[s._v("valueOf")]),s._v("方法返回"),t("code",[s._v("1")]),s._v("，于是"),t("code",[s._v("obj + 2")]),s._v("就得到了"),t("code",[s._v("3")]),s._v("。这个例子中，由于"),t("code",[s._v("valueOf")]),s._v("方法直接返回一个原始类型的值，所以不再调用"),t("code",[s._v("toString")]),s._v("方法。")]),s._v(" "),t("p",[s._v("下面是自定义"),t("code",[s._v("toString")]),s._v("方法的例子。")]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" obj "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("toString")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nobj "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// "hello2"')]),s._v("\n")])])]),t("p",[s._v("上面代码中，对象"),t("code",[s._v("obj")]),s._v("的"),t("code",[s._v("toString")]),s._v("方法返回字符串"),t("code",[s._v("hello")]),s._v("。前面说过，只要有一个运算子是字符串，加法运算符就变成连接运算符，返回连接后的字符串。")]),s._v(" "),t("p",[s._v("这里有一个特例，如果运算子是一个"),t("code",[s._v("Date")]),s._v("对象的实例，那么会优先执行"),t("code",[s._v("toString")]),s._v("方法。")]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" obj "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Date")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nobj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("valueOf")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nobj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("toString")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nobj "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// "hello2"')]),s._v("\n")])])]),t("p",[s._v("上面代码中，对象"),t("code",[s._v("obj")]),s._v("是一个"),t("code",[s._v("Date")]),s._v("对象的实例，并且自定义了"),t("code",[s._v("valueOf")]),s._v("方法和"),t("code",[s._v("toString")]),s._v("方法，结果"),t("code",[s._v("toString")]),s._v("方法优先执行。")]),s._v(" "),t("h2",{attrs:{id:"余数运算符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#余数运算符"}},[s._v("#")]),s._v(" 余数运算符")]),s._v(" "),t("p",[s._v("余数运算符（"),t("code",[s._v("%")]),s._v("）返回前一个运算子被后一个运算子除，所得的余数。")]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 2")]),s._v("\n")])])]),t("p",[s._v("需要注意的是，运算结果的正负号由第一个运算子的正负号决定。")]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// -1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1")]),s._v("\n")])])]),t("p",[s._v("所以，为了得到负数的正确余数值，可以先使用绝对值函数。")]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 错误的写法")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("isOdd")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("n")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" n "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("isOdd")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("isOdd")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 正确的写法")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("isOdd")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("n")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" Math"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("abs")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("isOdd")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("isOdd")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\n")])])]),t("p",[s._v("余数运算符还可以用于浮点数的运算。但是，由于浮点数不是精确的值，无法得到完全准确的结果。")]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6.5")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 0.19999999999999973")]),s._v("\n")])])]),t("h2",{attrs:{id:"自增和自减运算符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自增和自减运算符"}},[s._v("#")]),s._v(" 自增和自减运算符")]),s._v(" "),t("p",[s._v("自增和自减运算符，是一元运算符，只需要一个运算子。它们的作用是将运算子首先转为数值，然后加上1或者减去1。它们会修改原始变量。")]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" x "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("x "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 2")]),s._v("\nx "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 2")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("x "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1")]),s._v("\nx "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1")]),s._v("\n")])])]),t("p",[s._v("上面代码的变量"),t("code",[s._v("x")]),s._v("自增后，返回"),t("code",[s._v("2")]),s._v("，再进行自减，返回"),t("code",[s._v("1")]),s._v("。这两种情况都会使得，原始变量"),t("code",[s._v("x")]),s._v("的值发生改变。")]),s._v(" "),t("p",[s._v("运算之后，变量的值发生变化，这种效应叫做运算的副作用（side effect）。自增和自减运算符是仅有的两个具有副作用的运算符，其他运算符都不会改变变量的值。")]),s._v(" "),t("p",[s._v("自增和自减运算符有一个需要注意的地方，就是放在变量之后，会先返回变量操作前的值，再进行自增/自减操作；放在变量之前，会先进行自增/自减操作，再返回变量操作后的值。")]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" x "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" y "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nx"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("y "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 2")]),s._v("\n")])])]),t("p",[s._v("上面代码中，"),t("code",[s._v("x")]),s._v("是先返回当前值，然后自增，所以得到"),t("code",[s._v("1")]),s._v("；"),t("code",[s._v("y")]),s._v("是先自增，然后返回新的值，所以得到"),t("code",[s._v("2")]),s._v("。")]),s._v(" "),t("h2",{attrs:{id:"数值运算符，负数值运算符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数值运算符，负数值运算符"}},[s._v("#")]),s._v(" 数值运算符，负数值运算符")]),s._v(" "),t("p",[s._v("数值运算符（"),t("code",[s._v("+")]),s._v("）同样使用加号，但它是一元运算符（只需要一个操作数），而加法运算符是二元运算符（需要两个操作数）。")]),s._v(" "),t("p",[s._v("数值运算符的作用在于可以将任何值转为数值（与"),t("code",[s._v("Number")]),s._v("函数的作用相同）。")]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// NaN")]),s._v("\n")])])]),t("p",[s._v("上面代码表示，非数值经过数值运算符以后，都变成了数值（最后一行"),t("code",[s._v("NaN")]),s._v("也是数值）。具体的类型转换规则，参见《数据类型转换》一章。")]),s._v(" "),t("p",[s._v("负数值运算符（"),t("code",[s._v("-")]),s._v("），也同样具有将一个值转为数值的功能，只不过得到的值正负相反。连用两个负数值运算符，等同于数值运算符。")]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" x "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("x "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// -1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1")]),s._v("\n")])])]),t("p",[s._v("上面代码最后一行的圆括号不可少，否则会变成自减运算符。")]),s._v(" "),t("p",[s._v("数值运算符号和负数值运算符，都会返回一个新的值，而不会改变原始变量的值。")]),s._v(" "),t("h2",{attrs:{id:"指数运算符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#指数运算符"}},[s._v("#")]),s._v(" 指数运算符")]),s._v(" "),t("p",[s._v("指数运算符（"),t("code",[s._v("**")]),s._v("）完成指数运算，前一个运算子是底数，后一个运算子是指数。")]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 16")]),s._v("\n")])])]),t("p",[s._v("注意，指数运算符是右结合，而不是左结合。即多个指数运算符连用时，先进行最右边的计算。")]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 相当于 2 ** (3 ** 2)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 512")]),s._v("\n")])])]),t("p",[s._v("上面代码中，由于指数运算符是右结合，所以先计算第二个指数运算符，而不是第一个。")]),s._v(" "),t("h2",{attrs:{id:"赋值运算符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#赋值运算符"}},[s._v("#")]),s._v(" 赋值运算符")]),s._v(" "),t("p",[s._v("赋值运算符（Assignment Operators）用于给变量赋值。")]),s._v(" "),t("p",[s._v("最常见的赋值运算符，当然就是等号（"),t("code",[s._v("=")]),s._v("）。")]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 将 1 赋值给变量 x")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" x "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 将变量 y 的值赋值给变量 x")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" x "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" y"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("赋值运算符还可以与其他运算符结合，形成变体。下面是与算术运算符的结合。")]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等同于 x = x + y")]),s._v("\nx "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" y\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等同于 x = x - y")]),s._v("\nx "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-=")]),s._v(" y\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等同于 x = x * y")]),s._v("\nx "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*=")]),s._v(" y\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等同于 x = x / y")]),s._v("\nx "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/=")]),s._v(" y\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等同于 x = x % y")]),s._v("\nx "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%=")]),s._v(" y\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等同于 x = x ** y")]),s._v("\nx "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**=")]),s._v(" y\n")])])]),t("p",[s._v("下面是与位运算符的结合（关于位运算符，请见后文的介绍）。")]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等同于 x = x >> y")]),s._v("\nx "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>=")]),s._v(" y\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等同于 x = x << y")]),s._v("\nx "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<=")]),s._v(" y\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等同于 x = x >>> y")]),s._v("\nx "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>>=")]),s._v(" y\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等同于 x = x & y")]),s._v("\nx "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&=")]),s._v(" y\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等同于 x = x | y")]),s._v("\nx "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|=")]),s._v(" y\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等同于 x = x ^ y")]),s._v("\nx "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^=")]),s._v(" y\n")])])]),t("p",[s._v("这些复合的赋值运算符，都是先进行指定运算，然后将得到值返回给左边的变量。")])])}),[],!1,null,null,null);a.default=e.exports}}]);