webpackJsonp([263],{1434:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("p",[r("strong",[e._v("md5sum命令")]),e._v("采用MD5报文摘要算法（128位）计算和检查文件的校验和。一般来说，安装了Linux后，就会有md5sum这个工具，直接在命令行终端直接运行。")]),e._v(" "),r("p",[e._v("MD5算法常常被用来验证网络文件传输的完整性，防止文件被人篡改。MD5 全称是报文摘要算法（Message-Digest Algorithm 5），此算法对任意长度的信息逐位进行计算，产生一个二进制长度为128位（十六进制长度就是32位）的“指纹”（或称“报文摘要”），不同的文件产生相同的报文摘要的可能性是非常非常之小的。")]),e._v(" "),r("h3",[e._v("语法")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("md5sum(选项)(参数)\n")])]),e._v(" "),r("h3",[e._v("选项")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v('-b：二进制模式读取文件；\n-t或--text：把输入的文件作为文本文件看待；\n-c：从指定文件中读取MD5校验和，并进行校验；\n--status：验证成功时不输出任何信息；\n-[w](#/w "w命令")：当校验不正确时给出警告信息。\n')])]),e._v(" "),r("h3",[e._v("参数")]),e._v(" "),r("p",[e._v("文件：指定保存着文件名和校验和的文本文件。")]),e._v(" "),r("h3",[e._v("实例")]),e._v(" "),r("p",[r("strong",[e._v("生成一个文件insert.sql的md5值：")])]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("[root@localhost ~]# md5sum insert.sql\nbcda6cb5c704664f989703ac5a88f112  insert.sql\n")])]),e._v(" "),r("p",[r("strong",[e._v("检查文件testfile是否被修改过：")])]),e._v(" "),r("p",[e._v("首先生成md5文件：")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("md5sum testfile > testfile.md5\n")])]),e._v(" "),r("p",[e._v("检查：")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("md5sum testfile -c testfile.md5\n")])]),e._v(" "),r("p",[e._v("如果文件没有变化，输出应该如下：")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("forsort: OK\n")])]),e._v(" "),r("p",[e._v("此时，md5sum命令返回0。")]),e._v(" "),r("p",[e._v("如果文件发生了变化，输出应该如下：")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("forsort: FAILED\nmd5sum: WARNING: 1 of 1 computed checksum did NOT match\n")])]),e._v(" "),r("p",[e._v("此时，md5sum命令返回非0。")]),e._v(" "),r("p",[e._v("这里，检查用的文件名随意。如果不想有任何输出，则"),r("code",{pre:!0},[e._v("md5sum testfile --status -c testfile.md5")]),e._v("，这时候通过返回值来检测结果。")]),e._v(" "),r("p",[e._v("检测的时候如果检测文件非法则输出信息的选项:")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("md5sum -w -c testfile.md5\n")])]),e._v(" "),r("p",[e._v("输出之后，文件异常输出类似如下：")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("md5sum: testfile.md5: 1: improperly formatted MD5 checksum line\nmd5sum: testfile.md5: no properly formatted MD5 checksum lines found\n")])]),e._v(" "),r("p",[e._v("这里，testfile.md5只有一行信息，但是我认为地给它多加了一个字符，导致非法。如果md5文件正常那么"),r("code",{pre:!0},[e._v("-w")]),e._v("有没有都一样。")])])}]}},289:function(e,t,r){e.exports=r(878)},878:function(e,t,r){var v=r(5)(null,r(1434),null,null,null);e.exports=v.exports}});
//# sourceMappingURL=263.772122946bb7df6c78d3.js.map