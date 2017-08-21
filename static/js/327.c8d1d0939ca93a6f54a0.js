webpackJsonp([327],{1180:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,p=t._self._c||e;return p("section",[p("p",[p("strong",[t._v("iptables命令")]),t._v("是Linux上常用的防火墙软件，是netfilter项目的一部分。可以直接配置，也可以通过许多前端和图形界面配置。")]),t._v(" "),p("h3",[t._v("语法")]),t._v(" "),p("pre",{pre:!0},[p("code",{attrs:{"v-pre":""}},[t._v("iptables(选项)(参数)\n")])]),t._v(" "),p("h3",[t._v("选项")]),t._v(" "),p("pre",{pre:!0},[p("code",{attrs:{"v-pre":""}},[t._v('-t<表>：指定要操纵的表；\n-A：向规则链中添加条目；\n-D：从规则链中删除条目；\n-i：向规则链中插入条目；\n-R：替换规则链中的条目；\n-L：显示规则链中已有的条目；\n-F：清楚规则链中已有的条目；\n-Z：清空规则链中的数据包计算器和字节计数器；\n-N：创建新的用户自定义规则链；\n-P：定义规则链中的默认目标；\n-h：显示帮助信息；\n-p：指定要匹配的数据包协议类型；\n-s：指定要匹配的数据包源[ip](#/ip "ip命令")地址；\n-j<目标>：指定要跳转的目标；\n-i<网络接口>：指定数据包进入本机的网络接口；\n-o<网络接口>：指定数据包要离开本机所使用的网络接口。\n')])]),t._v(" "),p("p",[p("strong",[t._v("iptables命令选项输入顺序：")])]),t._v(" "),p("pre",{pre:!0},[p("code",{attrs:{"v-pre":""}},[t._v("iptables -t 表名 <-A/I/D/R> 规则链名 [规则号] <-i/o 网卡名> -p 协议名 <-s 源IP/源子网> --sport 源端口 <-d 目标IP/目标子网> --dport 目标端口 -j 动作\n")])]),t._v(" "),p("p",[t._v("表名包括：")]),t._v(" "),p("ul",[p("li",[p("strong",[t._v("raw")]),t._v("：高级功能，如：网址过滤。")]),t._v(" "),p("li",[p("strong",[t._v("mangle")]),t._v("：数据包修改（QOS），用于实现服务质量。")]),t._v(" "),p("li",[p("strong",[t._v("net")]),t._v("：地址转换，用于网关路由器。")]),t._v(" "),p("li",[p("strong",[t._v("filter")]),t._v("：包过滤，用于防火墙规则。")])]),t._v(" "),p("p",[t._v("规则链名包括：")]),t._v(" "),p("ul",[p("li",[p("strong",[t._v("INPUT链")]),t._v("：处理输入数据包。")]),t._v(" "),p("li",[p("strong",[t._v("OUTPUT链")]),t._v("：处理输出数据包。")]),t._v(" "),p("li",[p("strong",[t._v("PORWARD链")]),t._v("：处理转发数据包。")]),t._v(" "),p("li",[p("strong",[t._v("PREROUTING链")]),t._v("：用于目标地址转换（DNAT）。")]),t._v(" "),p("li",[p("strong",[t._v("POSTOUTING链")]),t._v("：用于源地址转换（SNAT）。")])]),t._v(" "),p("p",[t._v("动作包括：")]),t._v(" "),p("ul",[p("li",[p("strong",[p("a",{attrs:{href:"#/accept",title:"accept命令"}},[t._v("accept")])]),t._v("：接收数据包。")]),t._v(" "),p("li",[p("strong",[t._v("DROP")]),t._v("：丢弃数据包。")]),t._v(" "),p("li",[p("strong",[t._v("REDIRECT")]),t._v("：重定向、映射、透明代理。")]),t._v(" "),p("li",[p("strong",[t._v("SNAT")]),t._v("：源地址转换。")]),t._v(" "),p("li",[p("strong",[t._v("DNAT")]),t._v("：目标地址转换。")]),t._v(" "),p("li",[p("strong",[t._v("MASQUERADE")]),t._v("：IP伪装（NAT），用于ADSL。")]),t._v(" "),p("li",[p("strong",[t._v("LOG")]),t._v("：日志记录。")])]),t._v(" "),p("h3",[t._v("实例")]),t._v(" "),p("p",[p("strong",[t._v("清除已有iptables规则")])]),t._v(" "),p("pre",{pre:!0},[p("code",{attrs:{"v-pre":""}},[t._v("iptables -F\niptables -X\niptables -Z\n")])]),t._v(" "),p("p",[p("strong",[t._v("开放指定的端口")])]),t._v(" "),p("pre",{pre:!0},[p("code",{attrs:{"v-pre":""}},[t._v('iptables -A INPUT -s 127.0.0.1 -d 127.0.0.1 -j ACCEPT               #允许本地回环接口(即运行本机访问本机)\niptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT    #允许已建立的或相关连的通行\niptables -A OUTPUT -j ACCEPT         #允许所有本机向外的访问\niptables -A INPUT -p tcp --dport 22 -j ACCEPT    #允许访问22端口\niptables -A INPUT -p tcp --dport 80 -j ACCEPT    #允许访问80端口\niptables -A INPUT -p tcp --dport 21 -j ACCEPT    #允许[ftp](#/ftp "ftp命令")服务的21端口\niptables -A INPUT -p tcp --dport 20 -j ACCEPT    #允许FTP服务的20端口\niptables -A INPUT -j [reject](#/reject "reject命令")       #禁止其他未允许的规则访问\niptables -A FORWARD -j REJECT     #禁止其他未允许的规则访问\n')])]),t._v(" "),p("p",[p("strong",[t._v("屏蔽IP")])]),t._v(" "),p("pre",{pre:!0},[p("code",{attrs:{"v-pre":""}},[t._v("iptables -I INPUT -s 123.45.6.7 -j DROP       #屏蔽单个IP的命令\niptables -I INPUT -s 123.0.0.0/8 -j DROP      #封整个段即从123.0.0.1到123.255.255.254的命令\niptables -I INPUT -s 124.45.0.0/16 -j DROP    #封IP段即从123.45.0.1到123.45.255.254的命令\niptables -I INPUT -s 123.45.6.0/24 -j DROP    #封IP段即从123.45.6.1到123.45.6.254的命令是\n")])]),t._v(" "),p("p",[p("strong",[t._v("查看已添加的iptables规则")])]),t._v(" "),p("pre",{pre:!0},[p("code",{attrs:{"v-pre":""}},[t._v("iptables -L -n -v\nChain INPUT (policy DROP 48106 packets, 2690K bytes)\n pkts bytes target     prot opt in     out     source               destination         \n 5075  589K ACCEPT     all  --  lo     *       0.0.0.0/0            0.0.0.0/0           \n 191K   90M ACCEPT     tcp  --  *      *       0.0.0.0/0            0.0.0.0/0           tcp dpt:22\n1499K  133M ACCEPT     tcp  --  *      *       0.0.0.0/0            0.0.0.0/0           tcp dpt:80\n4364K 6351M ACCEPT     all  --  *      *       0.0.0.0/0            0.0.0.0/0           state RELATED,ESTABLISHED\n 6256  327K ACCEPT     icmp --  *      *       0.0.0.0/0            0.0.0.0/0           \n\nChain FORWARD (policy ACCEPT 0 packets, 0 bytes)\n pkts bytes target     prot opt in     out     source               destination         \n\nChain OUTPUT (policy ACCEPT 3382K packets, 1819M bytes)\n pkts bytes target     prot opt in     out     source               destination         \n 5075  589K ACCEPT     all  --  *      lo      0.0.0.0/0            0.0.0.0/0  \n")])]),t._v(" "),p("p",[p("strong",[t._v("删除已添加的iptables规则")])]),t._v(" "),p("p",[t._v("将所有iptables以序号标记显示，执行：")]),t._v(" "),p("pre",{pre:!0},[p("code",{attrs:{"v-pre":""}},[t._v("iptables -L -n --line-numbers\n")])]),t._v(" "),p("p",[t._v("比如要删除INPUT里序号为8的规则，执行：")]),t._v(" "),p("pre",{pre:!0},[p("code",{attrs:{"v-pre":""}},[t._v("iptables -D INPUT 8\n")])])])}]}},224:function(t,e,p){t.exports=p(812)},812:function(t,e,p){var n=p(5)(null,p(1180),null,null,null);t.exports=n.exports}});
//# sourceMappingURL=327.c8d1d0939ca93a6f54a0.js.map