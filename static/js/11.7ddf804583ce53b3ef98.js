webpackJsonp([11],{1055:function(t,n,e){var r=e(5)(null,e(1154),null,null,null);t.exports=r.exports},1154:function(t,n,e){t.exports={render:function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("section",[r("p",[r("strong",[t._v("tee命令")]),t._v("用于将数据重定向到文件，另一方面还可以提供一份重定向数据的副本作为后续命令的stdin。简单的说就是把数据重定向到给定文件和屏幕上。")]),t._v(" "),r("p",[r("img",{attrs:{src:e(569),alt:""}})]),t._v(" "),r("p",[t._v("存在缓存机制，每1024个字节将输出一次。若从管道接收输入数据，应该是缓冲区满，才将数据转存到指定的文件中。若文件内容不到1024个字节，则接收完从标准输入设备读入的数据后，将刷新一次缓冲区，并转存数据到指定文件。")]),t._v(" "),r("h3",[t._v("语法")]),t._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[t._v("tee(选项)(参数)\n")])]),t._v(" "),r("h3",[t._v("选项")]),t._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[t._v("-a：向文件中重定向时使用追加模式；\n-i：忽略中断（interrupt）信号。\n")])]),t._v(" "),r("h3",[t._v("参数")]),t._v(" "),r("p",[t._v("文件：指定输出重定向的文件。")]),t._v(" "),r("p",[t._v("在终端打印stdout同时重定向到文件中：")]),t._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[t._v('[ls](#/ls "ls命令") | tee out.txt\n1.sh\n1.txt\n2.txt\neee.tst\nEEE.tst\none\nout.txt\nstring2\nwww.pdf\nWWW.pdf\nWWW.pef\n')])]),t._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[t._v('[root@localhost text]# ls | tee out.txt | [cat](#/cat "cat命令") -n\n     1  1.sh\n     2  1.txt\n     3  2.txt\n     4  eee.tst\n     5  EEE.tst\n     6  one\n     7  out.txt\n     8  string2\n     9  www.pdf\n    10  WWW.pdf\n    11  WWW.pef\n')])])])}]}},466:function(t,n,e){t.exports=e(1055)},569:function(t,n,e){t.exports=e.p+"static/img/073315SF8.7372f60.gif"}});
//# sourceMappingURL=11.7ddf804583ce53b3ef98.js.map