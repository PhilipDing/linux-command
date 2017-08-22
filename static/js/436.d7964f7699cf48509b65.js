webpackJsonp([436],{115:function(e,r,v){e.exports=v(704)},1317:function(e,r){e.exports={render:function(){var e=this,r=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,r=e.$createElement,v=e._self._c||r;return v("section",[v("p",[v("strong",[v("a",{attrs:{href:"#/dpkg",title:"dpkg命令"}},[e._v("dpkg")]),e._v("-divert命令")]),e._v("是Debian Linux中创建并管理一个转向（diversion）列表，其使得安装文件的默认位置失效的工具。")]),e._v(" "),v("h3",[e._v("语法")]),e._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[e._v("dpkg-divert(选项)(参数)\n")])]),e._v(" "),v("h3",[e._v("选项")]),e._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[e._v("--add：添加一个转移文件；\n--remove：删除一个转移文件；\n--list：列出匹配的转移；\n--truename：对应转移文件真实文件名；\n--quidet：安静模式。\n")])]),e._v(" "),v("h3",[e._v("参数")]),e._v(" "),v("p",[e._v("文件：指定转移文件名。")]),e._v(" "),v("h3",[e._v("实例")]),e._v(" "),v("p",[e._v("指定软件包wibble安装时，写入"),v("code",{pre:!0},[e._v("/usr/bin/example.foo")]),e._v("，而不是"),v("code",{pre:!0},[e._v("/usr/bin/example")]),e._v("：")]),e._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[e._v('dpkg-divert --package wibble --divert /usr/bin/example.foo --[rename](#/rename "rename命令") /usr/bin/example\n')])]),e._v(" "),v("p",[e._v("指定软件包wibble安装时，删除对"),v("code",{pre:!0},[e._v("/usr/bin/example")]),e._v("的转移修改：")]),e._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[e._v("dpkg-divert --package wibble --rename --remove /usr/bin/example\n")])]),e._v(" "),v("p",[e._v("删除对"),v("code",{pre:!0},[e._v("/usr/bin/example")]),e._v("的转移修改：")]),e._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[e._v("dpkg-divert --rename --remove /usr/bin/example\n")])]),e._v(" "),v("p",[e._v("添加一个软件包安装时，写入"),v("code",{pre:!0},[e._v("/usr/bin/example.foo")]),e._v("，而不是"),v("code",{pre:!0},[e._v("/usr/bin/example")]),e._v("的修改：")]),e._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[e._v("dpkg-divert --divert /usr/bin/example.foo --rename /usr/bin/example\n")])])])}]}},704:function(e,r,v){var p=v(5)(null,v(1317),null,null,null);e.exports=p.exports}});
//# sourceMappingURL=436.d7964f7699cf48509b65.js.map