webpackJsonp([228],{1279:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement;n._self._c;return n._m(0)},staticRenderFns:[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("section",[t("p",[t("strong",[n._v("nmap命令")]),n._v("是一款开放源代码的网络探测和安全审核工具，它的设计目标是快速地扫描大型网络。")]),n._v(" "),t("h3",[n._v("语法")]),n._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[n._v("nmap(选项)(参数)\n")])]),n._v(" "),t("h3",[n._v("选项")]),n._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[n._v('-O：激活操作探测；\n-P0：值进行扫描，不[ping](#/ping "ping命令")主机；\n-PT：是同TCP的ping；\n-sV：探测服务版本信息；\n-sP：ping扫描，仅发现目标主机是否存活；\n-[ps](#/ps "ps命令")：发送同步（SYN）报文；\n-PU：发送udp ping；\n-PE：强制执行直接的ICMPping；\n-PB：默认模式，可以使用ICMPping和TCPping；\n-6：使用IPv6地址；\n-v：得到更多选项信息；\n-d：增加调试信息地输出；\n-oN：以人们可阅读的格式输出；\n-oX：以xml格式向指定文件输出信息；\n-oM：以机器可阅读的格式输出；\n-A：使用所有高级扫描选项；\n--resume：继续上次执行完的扫描；\n-P：指定要扫描的端口，可以是一个单独的端口，用逗号隔开多个端口，使用“-”表示端口范围；\n-e：在多网络接口Linux系统中，指定扫描使用的网络接口；\n-g：将指定的端口作为源端口进行扫描；\n--ttl：指定发送的扫描报文的生存期；\n--packet-trace：显示扫描过程中收发报文统计；\n--scanflags：设置在扫描报文中的TCP标志。\n')])]),n._v(" "),t("h3",[n._v("参数")]),n._v(" "),t("p",[t("a",{attrs:{href:"#/ip",title:"ip命令"}},[n._v("ip")]),n._v("地址：指定待扫描报文中的TCP地址。")]),n._v(" "),t("h3",[n._v("实例")]),n._v(" "),t("p",[t("strong",[n._v("安装nmap")])]),n._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[n._v('[yum](#/yum "yum命令") [install](#/install "install命令") nmap\n')])]),n._v(" "),t("p",[t("strong",[n._v("使用nmap扫描www.linuxde.net的开放端口")])]),n._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[n._v('[root@localhost ~]# nmap www.linuxde.net\n\nStarting Nmap 4.11 ( http://www.insecure.org/nmap/ ) [at](#/at "at命令") 2013-12-28 00:06 CST\nInteresting ports on 100-42-212-8.static.webnx.com (100.42.212.8):\nNot shown: 1678 filtered ports\nPORT   STATE [service](#/service "service命令")\n22/tcp open  [ssh](#/ssh "ssh命令")\n80/tcp open  http\n\nNmap finished: 1 IP address (1 [host](#/host "host命令") up) scanned in 45.870 seconds\n')])])])}]}},325:function(n,e,t){n.exports=t(914)},914:function(n,e,t){var p=t(5)(null,t(1279),null,null,null);n.exports=p.exports}});
//# sourceMappingURL=228.ba391d4f399fbbf1e25a.js.map