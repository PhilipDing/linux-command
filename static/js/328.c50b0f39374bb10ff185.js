webpackJsonp([328],{1484:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("p",[n("strong",[n("a",{attrs:{href:"#/iptables",title:"iptables命令"}},[t._v("iptables")]),t._v("-save命令")]),t._v("用于将linux内核中的iptables表导出到标准输出设备商，通常，使用shell中I/O重定向功能将其输出保存到指定文件中。")]),t._v(" "),n("h3",[t._v("语法")]),t._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[t._v("iptables-save(选项)\n")])]),t._v(" "),n("h3",[t._v("选项")]),t._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[t._v("-c：指定要保存的iptables表时，保存当权的数据包计算器和字节计数器的值；\n-t：指定要保存的表的名称。\n")])]),t._v(" "),n("h3",[t._v("实例")]),t._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[t._v('[root@localhost ~]# iptables-save -t filter > iptables.bak\n[root@localhost ~]# [cat](#/cat "cat命令") iptables.bak\n# Generated by iptables-save v1.3.5 on Thu Dec 26 21:25:15 2013\n*filter\n:INPUT DROP [48113:2690676]\n:FORWARD [accept](#/accept "accept命令") [0:0]\n:OUTPUT ACCEPT [3381959:1818595115]\n-A INPUT -i lo -j ACCEPT\n-A INPUT -p tcp -m tcp --dport 22 -j ACCEPT\n-A INPUT -p tcp -m tcp --dport 80 -j ACCEPT\n-A INPUT -m state --state RELATED,ESTABLISHED -j ACCEPT\n-A INPUT -p icmp -j ACCEPT\n-A OUTPUT -o lo -j ACCEPT\nCOMMIT\n')])])])}]}},223:function(t,e,n){t.exports=n(811)},811:function(t,e,n){var a=n(5)(null,n(1484),null,null,null);t.exports=a.exports}});
//# sourceMappingURL=328.c50b0f39374bb10ff185.js.map