webpackJsonp([413],{138:function(e,n,r){e.exports=r(726)},1530:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("section",[r("p",[r("strong",[e._v("emacs命令")]),e._v("是由GNU组织的创始人Richard Stallman开发的一个功能强大的全屏文本编辑器，它支持多种编程语言，具有很多优良的特性。有众多的系统管理员和软件开发者使用emacs。")]),e._v(" "),r("h3",[e._v("语法")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("emacs(选项)(参数)\n")])]),e._v(" "),r("h3",[e._v("选项")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v('+<行号>：启动emacs编辑器，并将光标移动到制定行号的行；\n-q：启动emacs编辑器，而不加载初始化文件；\n-u<用户>：启动emacs编辑器时，加载指定用户的初始化文件；\n-t<文件>：启动emacs编辑器时，把指定的文件作为中端，不适用标准输入（stdin）与标准输出（stdout）；\n-f<函数>：执行指定lisp（广泛应用于人工智能领域的编程语言）函数；\n-l<lisp代码文件>：加载指定的lisp代码文件；\n-[batch](#/batch "batch命令")：以批处理模式运行emacs编辑器。\n')])]),e._v(" "),r("h3",[e._v("参数")]),e._v(" "),r("p",[e._v("文件：指定要编辑的文本文件。")]),e._v(" "),r("h2",[e._v("emacs命令操作大全")]),e._v(" "),r("p",[e._v("基本命令")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("C-x C-c : 退出Emacs\nC-x C-f : 打开一个文件，如果文件不存在，则创建一个文件\nC-g : 取消未完成的命令\n")])]),e._v(" "),r("p",[e._v("编辑")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v('C-z (redefined): Undo；原来C-z是挂起Emacs（然后用[fg](#/fg "fg命令")命令调出）；C-x u 是默认的命令； 移动一下光标，再C-z就可以redo\nM-d : 删除光标后的词语\n')])]),e._v(" "),r("p",[e._v("移动光标")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v('C-v : 向前翻页\nM-v : 向后翻页\nM-r : 将光标移动到屏幕中间那行\nC-a : 移到行首\nM-a : 移到句首，从行首到句首之间可能有空格\nC-e : 移到行尾\nM-e : 移到句尾\nM-{ : 向上移动一段\nM-} : 向下移动一段\nC-right : 向前移动一个单词\nC-left : 向后移动一个单词\nC-up : 向前移动一段\nC-down : 向后移动一段\nM-< : 移到整个文本开头\nM-> : 移到整个文本末尾\nC-u 数字 命令 : 执行多次(数字表示次数)该命令；"M-数字 命令" 也可以\nM-x goto-line : 移动到某一行\nC-l : 重绘屏幕，效果就是当前编辑行移动窗口中央\n')])]),e._v(" "),r("p",[e._v("Buffer 相关")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v('C-x k : 关闭当前buffer\nC-x b : 切换到前一个编辑的buffer\nC-x C-b : 列出当前所有buffer\nC-x C-s : 保存当前buffer\nC-x s : 保存所有未保存的buffer，会提示你是否需要保存\nC-x C-[w](#/w "w命令") : 文件另存为\n')])]),e._v(" "),r("p",[e._v("拷贝与粘贴")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("M-space (redefined): 设置mark; C-@ 是默认命令\nC-w (redefined) : 剪切一块区域；如果没有设置mark，则是剪切一行\nM-w (redefined) : 拷贝一块区域；如果没有设置mark, 则是拷贝一行\nC-k : 从当前位置剪切到行尾\nC-y : 粘贴\nM-y : 用C-y拉回最近被除去的文本后，换成 M-y可以拉回以前被除去的文本。键入多次的M-y可以拉回更早以前被除去的文本。\nC-x r k : 执行矩形区域的剪切\nC-x r y : 执行矩形区域的粘贴\n")])]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("窗口操作\nC-x 0 : 关闭当前窗口\nC-x 1 : 将当前窗口最大化\nC-x 2 : 垂直分割窗口\nC-x 3 : 水平分割窗口\nM-o (redefined) : 在窗口之间切换; C-x o 是默认命令\nC-x 5 1/2/3/0 : 对frame类似的操作\nC-x < : 窗口内容右卷\nC-x > : 窗口内容左卷（这两个命令在垂直分割窗口后比较有用）\n(C-u) C-x ^ : 加高当前窗口，如果有C-u，则每次加高4行\n(C-u) C-x } : 加宽当前窗口\n(C-u) C-x { : 压窄当前窗口\nESC C-v : 在其它窗口进行卷屏操作\n")])]),e._v(" "),r("p",[e._v("搜索和替换")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("C-s : 向前搜索（增量式搜索）；连续C-s，跳到下一个搜索到的目标\nC-s RET : 普通搜索\nC-r : 向前搜索\nC-s RET C-w : 按单词查询\nM-% : 查询替换，也就是替换前会询问一下\nM-x replace-string : 普通替换\n")])]),e._v(" "),r("p",[e._v("Tags")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("M-! etags .c .h : 创建TAGS文件\nM-. : 跳到tag所在位置\nM-x list-tags : 列出tags\n")])]),e._v(" "),r("p",[e._v("书签")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("C-x r m : 设置书签bookmark\nC-x r b : 跳到bookmark处\n")])]),e._v(" "),r("p",[e._v("帮助")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v('C-h ? : 查看帮助信息\nC-h f : 查看一个函数\nC-h v : 查看一个变量\nC-h k : 查看一个键绑定 (C－h c 也是查看键绑定，但是信息较简略)\nC-h C-f : 查看一个函数的[info](#/info "info命令")，非常有用\nC-h i : 看Info\n')])]),e._v(" "),r("p",[e._v("其它")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("C-M-\\ : 对选中区域，按照某种格式(比如C程序)进行格式化\nC-x h : 全部选中\nM-! : 执行外部shell命令\nM-x shell : 模拟shell的buffer\nM-x term : 模拟terminal, C-c k 关闭terminal\nC-x C-q : 修改buffer的只读属性\n")])])])}]}},726:function(e,n,r){var v=r(5)(null,r(1530),null,null,null);e.exports=v.exports}});
//# sourceMappingURL=413.9ade3d4f17046594bef6.js.map