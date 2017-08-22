webpackJsonp([359],{1264:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement;n._self._c;return n._m(0)},staticRenderFns:[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("section",[t("p",[t("strong",[n._v("host命令")]),n._v("是常用的分析域名查询工具，可以用来测试域名系统工作是否正常。")]),n._v(" "),t("h3",[n._v("语法")]),n._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[n._v("host(选项)(参数)\n")])]),n._v(" "),t("h3",[n._v("选项")]),n._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[n._v('-a：显示详细的DNS信息；\n-c<类型>：指定查询类型，默认值为“IN“；\n-C：查询指定主机的完整的SOA记录；\n-r：在查询域名时，不使用递归的查询方式；\n-t<类型>：指定查询的域名信息类型；\n-v：显示指令执行的详细信息；\n-[w](#/w "w命令")：如果域名服务器没有给出应答信息，则总是等待，直到域名服务器给出应答；\n-W<时间>：指定域名查询的最长时间，如果在指定时间内域名服务器没有给出应答信息，则退出指令；\n-4：使用IPv4；\n-6：使用IPv6.\n')])]),n._v(" "),t("h3",[n._v("参数")]),n._v(" "),t("p",[n._v("主机：指定要查询信息的主机信息。")]),n._v(" "),t("h3",[n._v("实例")]),n._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[n._v('[root@localhost ~]# host www.linuxde.net \nwww.linuxde.net is an [alias](#/alias "alias命令") for host.1.linuxde.net.\nhost.1.linuxde.net has address 100.42.212.8\n\n[root@localhost ~]# host -a www.linuxde.net\nTrying "www.linuxde.net"\n;; ->>HEADER<<- opcode: QUERY, status: NOERROR, [id](#/id "id命令"): 34671\n;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 0\n\n;; QUESTION SECTION:\n;www.linuxde.net.               IN      ANY\n\n;; ANSWER SECTION:\nwww.linuxde.net.        463     IN      CNAME   host.1.linuxde.net.\n\nReceived 54 bytes from 202.96.104.15#53 in 0 ms\n')])])])}]}},192:function(n,e,t){n.exports=t(781)},781:function(n,e,t){var r=t(5)(null,t(1264),null,null,null);n.exports=r.exports}});
//# sourceMappingURL=359.736bd7d816478d4dda6d.js.map