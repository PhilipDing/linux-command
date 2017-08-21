webpackJsonp([212],{1546:function(v,_){v.exports={render:function(){var v=this,_=v.$createElement;v._self._c;return v._m(0)},staticRenderFns:[function(){var v=this,_=v.$createElement,p=v._self._c||_;return p("section",[p("p",[p("strong",[v._v("pfctl命令")]),v._v("是PF防火墙的配置命令，PF防火墙( 全称：Packet Filter )是UNIX LIKE系统上进行TCP/"),p("a",{attrs:{href:"#/ip",title:"ip命令"}},[v._v("ip")]),v._v("流量过滤和网络地址转换的软件系统。PF同样也能提供TCP/IP流量的整形和控制，并且提供带宽控制和数据包优先集控制。PF最早是由Daniel Hartmeier开发的，现在的开发和维护由Daniel和openBSD小组的其他成员负责。")]),v._v(" "),p("p",[v._v("PF防火墙的功能很多，本站只列举一些基本配置。")]),v._v(" "),p("h3",[v._v("激活")]),v._v(" "),p("p",[v._v("要激活pf并且使它在启动时调用配置文件，编辑"),p("code",{pre:!0},[v._v("/etc/rc.conf")]),v._v("文件，修改配置pf的一行：")]),v._v(" "),p("pre",{pre:!0},[p("code",{attrs:{"v-pre":""}},[v._v('pf=[yes](#/yes "yes命令")\n')])]),v._v(" "),p("p",[v._v("重启操作系统让配置生效。")]),v._v(" "),p("p",[v._v("也可以通过pfctl程序启动和停止pf：")]),v._v(" "),p("pre",{pre:!0},[p("code",{attrs:{"v-pre":""}},[v._v("# pfctl -e\n# pfctl -d\n")])]),v._v(" "),p("p",[v._v("注意这仅仅是启动和关闭PF，实际它不会载入规则集，规则集要么在系统启动时载入，要在PF启动后通过命令单独载入。")]),v._v(" "),p("h3",[v._v("配置")]),v._v(" "),p("p",[v._v("系统引导到在rc脚本文件运行PF时PF从"),p("code",{pre:!0},[v._v("/etc/pf.conf")]),v._v("文件载入配置规则。注意当"),p("code",{pre:!0},[v._v("/etc/pf.conf")]),v._v("文件是默认配置文件，在系统调用rc脚本文件时，它仅仅是作为文本文件由pfctl装入并解释和插入pf的。对于一些应用来说，其他的规则集可以在系统引导后由其他文件载入。对于一些设计的非常好的unix程序，PF提供了足够的灵活性。")]),v._v(" "),p("p",[p("strong",[v._v("pf.conf文件有7个部分：")])]),v._v(" "),p("ol",[p("li",[v._v("宏：用户定义的变量，包括IP地址，接口名称等等。")]),v._v(" "),p("li",[v._v("表：一种用来保存IP地址列表的结构。")]),v._v(" "),p("li",[v._v("选项：控制PF如何工作的变量。")]),v._v(" "),p("li",[v._v("整形：重新处理数据包，进行正常化和碎片整理。")]),v._v(" "),p("li",[v._v("排队：提供带宽控制和数据包优先级控制。")]),v._v(" "),p("li",[v._v("转换：控制网络地址转换和数据包重定向。")]),v._v(" "),p("li",[v._v("过滤规则：在数据包通过接口时允许进行选择性的过滤和阻止。")])]),v._v(" "),p("p",[v._v("除去宏和表，其他的段在配置文件中也应该按照这个顺序出现，尽管对于一些特定的应用并不是所有的段都是必须的。")]),v._v(" "),p("p",[v._v("空行会被忽略，以#开头的行被认为是注释。")]),v._v(" "),p("h3",[v._v("控制")]),v._v(" "),p("p",[v._v("引导之后，PF可以通过pfctl程序进行操作，以下是一些例子：")]),v._v(" "),p("pre",{pre:!0},[p("code",{attrs:{"v-pre":""}},[v._v('# pfctl -f /etc/pf.conf  载入 pf.conf 文件\n# pfctl -nf /etc/pf.conf 解析文件，但不载入\n# pfctl -Nf /etc/pf.conf 只载入文件中的NAT规则\n# pfctl -Rf /etc/pf.conf 只载入文件中的过滤规则\n\n# pfctl -sn 显示当前的NAT规则\n# pfctl -sr 显示当前的过滤规则\n# pfctl -[ss](#/ss "ss命令") 显示当前的状态表\n# pfctl -si 显示过滤状态和计数\n# pfctl -sa 显示任何可显示的\n')])]),v._v(" "),p("p",[v._v("完整的命令列表，请参阅pfctl的"),p("a",{attrs:{href:"#/man",title:"man命令"}},[v._v("man")]),v._v("手册页。")])])}]}},342:function(v,_,p){v.exports=p(930)},930:function(v,_,p){var e=p(5)(null,p(1546),null,null,null);v.exports=e.exports}});
//# sourceMappingURL=212.4c429b78d52dca185e23.js.map