webpackJsonp([73],{1071:function(t,l,e){var n=e(5)(null,e(1518),null,null,null);t.exports=n.exports},1518:function(t,l){t.exports={render:function(){var t=this,l=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("section",[e("p",[e("strong",[t._v("type命令")]),t._v("用来显示指定命令的类型，判断给出的指令是内部指令还是外部指令。")]),t._v(" "),e("p",[t._v("命令类型：")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#/alias",title:"alias命令"}},[t._v("alias")]),t._v("：别名。")]),t._v(" "),e("li",[t._v("keyword：关键字，Shell保留字。")]),t._v(" "),e("li",[t._v("function：函数，Shell函数。")]),t._v(" "),e("li",[e("a",{attrs:{href:"#/builtin",title:"builtin命令"}},[t._v("builtin")]),t._v("：内建命令，Shell内建命令。")]),t._v(" "),e("li",[e("a",{attrs:{href:"#/file",title:"file命令"}},[t._v("file")]),t._v("：文件，磁盘文件，外部命令。")]),t._v(" "),e("li",[t._v("unfound：没有找到。")])]),t._v(" "),e("h3",[t._v("语法")]),t._v(" "),e("pre",{pre:!0},[e("code",{attrs:{"v-pre":""}},[t._v("type(选项)(参数)\n")])]),t._v(" "),e("h3",[t._v("选项")]),t._v(" "),e("pre",{pre:!0},[e("code",{attrs:{"v-pre":""}},[t._v("-t：输出“file”、“alias”或者“builtin”，分别表示给定的指令为“外部指令”、“命令别名”或者“内部指令”；\n-p：如果给出的指令为外部指令，则显示其绝对路径；\n-a：在环境变量“PATH”指定的路径中，显示给定指令的信息，包括命令别名。\n")])]),t._v(" "),e("h3",[t._v("参数")]),t._v(" "),e("p",[t._v("指令：要显示类型的指令。")]),t._v(" "),e("h3",[t._v("实例")]),t._v(" "),e("pre",{pre:!0},[e("code",{attrs:{"v-pre":""}},[t._v('[root@localhost ~]# type [ls](#/ls "ls命令")\nls is aliased to `ls --color=tty\'\n\n[root@localhost ~]# type [cd](#/cd "cd命令")\ncd is a shell builtin\n\n[root@localhost ~]# type [date](#/date "date命令")\ndate is /bin/date\n\n[root@localhost ~]# type [mysql](#/mysql "mysql命令")\nmysql is /usr/bin/mysql\n\n[root@localhost ~]# type nginx\n-bash: type: nginx: not found\n\n[root@localhost ~]# type if\nif is a shell keyword\n\n[root@localhost ~]# type [which](#/which "which命令")\nwhich is aliased to `alias | /usr/bin/which --tty-only --[read](#/read "read命令")-alias --show-dot --show-tilde\'\n\n[root@localhost ~]# type -a cd\ncd is a shell builtin\n\n[root@localhost ~]# type -a [grep](#/grep "grep命令")\ngrep is /bin/grep\n')])])])}]}},483:function(t,l,e){t.exports=e(1071)}});
//# sourceMappingURL=73.f7152a85c1dac64af691.js.map