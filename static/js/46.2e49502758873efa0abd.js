webpackJsonp([46],{1098:function(e,v,r){var _=r(5)(null,r(1345),null,null,null);e.exports=_.exports},1345:function(e,v){e.exports={render:function(){var e=this,v=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,v=e.$createElement,r=e._self._c||v;return r("section",[r("p",[r("strong",[e._v("vgreduce命令")]),e._v("通过删除LVM卷组中的物理卷来减少卷组容量。不能删除LVM卷组中剩余的最后一个物理卷。")]),e._v(" "),r("h3",[e._v("语法")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("vgreduce(选项)(参数)\n")])]),e._v(" "),r("h3",[e._v("选项")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("-a：如果命令行中没有指定要删除的物理卷，则删除所有的空物理卷；\n--removemissing：删除卷组中丢失的物理卷，使卷组恢复正常状态。\n")])]),e._v(" "),r("h3",[e._v("参数")]),e._v(" "),r("ul",[r("li",[e._v("卷组：指定要操作的卷组名称；")]),e._v(" "),r("li",[e._v("物理卷列表：指定要删除的物理卷列表。")])]),e._v(" "),r("h3",[e._v("实例")]),e._v(" "),r("p",[e._v('使用vgreduce命令从卷组"vg2000"中移除物理卷'),r("code",{pre:!0},[e._v("/dev/sdb2")]),e._v("。在命令行中输入下面的命令：")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v('[root@localhost ~]# vgreduce vg2000 /dev/sdb2    #将物理卷"/dev/sdb2"从卷组"vg2000"中删除\n')])]),e._v(" "),r("p",[e._v("输出信息如下：")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v('Removed "/dev/sdb2" from volume group "vg2000"\n')])])])}]}},510:function(e,v,r){e.exports=r(1098)}});
//# sourceMappingURL=46.2e49502758873efa0abd.js.map