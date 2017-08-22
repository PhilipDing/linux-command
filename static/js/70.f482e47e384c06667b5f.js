webpackJsonp([70],{1075:function(t,e,n){var v=n(5)(null,n(1598),null,null,null);t.exports=v.exports},1598:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("p",[n("strong",[t._v("umount命令")]),t._v("用于卸载已经加载的文件系统。利用设备名或挂载点都能umount文件系统，不过最好还是通过挂载点卸载，以免使用绑定挂载（一个设备，多个挂载点）时产生混乱。")]),t._v(" "),n("h3",[t._v("语法")]),t._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[t._v("umount(选项)(参数)\n")])]),t._v(" "),n("h3",[t._v("选项")]),t._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[t._v("-a：卸除/etc/mtab中记录的所有文件系统；\n-h：显示帮助；\n-n：卸除时不要将信息存入/etc/mtab文件中；\n-r：若无法成功卸除，则尝试以只读的方式重新挂入文件系统；\n-t<文件系统类型>：仅卸除选项中所指定的文件系统；\n-v：执行时显示详细的信息；\n-V：显示版本信息。\n")])]),t._v(" "),n("h3",[t._v("参数")]),t._v(" "),n("p",[t._v("文件系统：指定要卸载的文件系统或者其对应的设备文件名。")]),t._v(" "),n("h3",[t._v("实例")]),t._v(" "),n("p",[t._v("下面两条命令分别通过设备名和挂载点卸载文件系统，同时输出详细信息：")]),t._v(" "),n("p",[t._v("通过设备名卸载")]),t._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[t._v("umount -v /dev/sda1\n/dev/sda1 umounted\n")])]),t._v(" "),n("p",[t._v("通过挂载点卸载")]),t._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[t._v("umount -v /mnt/mymount/\n/tmp/diskboot.img umounted\n")])]),t._v(" "),n("p",[t._v("如果设备正忙，卸载即告失败。卸载失败的常见原因是，某个打开的shell当前目录为挂载点里的某个目录：")]),t._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[t._v("umount -v /mnt/mymount/\numount: /mnt/mymount: device is busy\numount: /mnt/mymount: device is busy\n")])]),t._v(" "),n("p",[t._v("有时，导致设备忙的原因并不好找。碰到这种情况时，可以用"),n("a",{attrs:{href:"#/lsof",title:"lsof命令"}},[t._v("lsof")]),t._v("列出已打开文件，然后搜索列表查找待卸载的挂载点：")]),t._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[t._v('lsof | [grep](#/grep "grep命令") mymount         查找mymount分区里打开的文件\nbash   9341  francois  cwd   DIR   8,1   1024    2 /mnt/mymount\n')])]),t._v(" "),n("p",[t._v("从上面的输出可知，mymount分区无法卸载的原因在于，francois运行的PID为9341的bash进程。")]),t._v(" "),n("p",[t._v("对付系统文件正忙的另一种方法是执行延迟卸载：")]),t._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[t._v("umount -vl /mnt/mymount/     执行延迟卸载\n")])]),t._v(" "),n("p",[t._v("延迟卸载（lazy unmount）会立即卸载目录树里的文件系统，等到设备不再繁忙时才清理所有相关资源。卸载可移动存储介质还可以用eject命令。下面这条命令会卸载"),n("a",{attrs:{href:"#/cd",title:"cd命令"}},[t._v("cd")]),t._v("并弹出CD：")]),t._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[t._v("eject /dev/cdrom      卸载并弹出CD \n")])])])}]}},486:function(t,e,n){t.exports=n(1075)}});
//# sourceMappingURL=70.f482e47e384c06667b5f.js.map