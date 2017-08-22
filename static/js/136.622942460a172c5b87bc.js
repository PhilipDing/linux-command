webpackJsonp([136],{1008:function(e,t,r){var _=r(5)(null,r(1329),null,null,null);e.exports=_.exports},1329:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("p",[r("strong",[e._v("setsebool命令")]),e._v("是用来修改SElinux策略内各项规则的布尔值。setsebool命令和"),r("a",{attrs:{href:"#/getsebool",title:"getsebool命令"}},[e._v("getsebool")]),e._v("命令是SELinux修改和查询布尔值的一套工具组。SELinux的策略与规则管理相关命令："),r("a",{attrs:{href:"#/seinfo",title:"seinfo命令"}},[e._v("seinfo")]),e._v("命令、"),r("a",{attrs:{href:"#/sesearch",title:"sesearch命令"}},[e._v("sesearch")]),e._v("命令、getsebool命令、setsebool命令、"),r("a",{attrs:{href:"#/semanage",title:"semanage命令"}},[e._v("semanage")]),e._v("命令。")]),e._v(" "),r("h3",[e._v("语法")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("setsebool [-P] 布尔值=[0|1]\n")])]),e._v(" "),r("h3",[e._v("选项")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("-P:直接将设置值写入配置文件，该设置数据将来会生效的。\n")])]),e._v(" "),r("h3",[e._v("实例")]),e._v(" "),r("p",[e._v("允许vsvtp匿名用户写入权限：")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("setsebool -P allow_ftpd_anon_write=1\n")])]),e._v(" "),r("p",[e._v("如果你希望你的"),r("a",{attrs:{href:"#/ftp",title:"ftp命令"}},[e._v("ftp")]),e._v("用户可以访问自己的家目录的话，需要开启：")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("setsebool -P ftp_home_dir 1\n")])]),e._v(" "),r("p",[e._v("如果你希望将vsftpd以daemon的方式运行的话，需要开启：")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("setsebool -P ftpd_is_daemon 1\n")])]),e._v(" "),r("p",[e._v("你可以让SElinux停止保护vsftpd的daemon方式动行：")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("setsebool -P ftpd_disable_trans 1 \n")])]),e._v(" "),r("p",[e._v("HTTP被设置允许cgi的设置：")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("setsebool -P httpd_enable_cgi 1\n")])]),e._v(" "),r("p",[e._v("允许用户HHTP访问其家目录，该设定限仅于用户的家目录主页：")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v('setsebool -P httpd_enable_homedirs 1\n[chcon](#/chcon "chcon命令") -R -t httpd_sys_content_t ~user/public_html\n')])]),e._v(" "),r("p",[e._v("允许"),r("a",{attrs:{href:"#/httpd",title:"httpd命令"}},[e._v("httpd")]),e._v("访问终端：")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("setsebool -P httpd_tty_comm 1\n")])]),e._v(" "),r("p",[e._v("关闭Selinux的关于httpd进程守护的保护：")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v('setsebool -P httpd_disable_trans 1\n[service](#/service "service命令") httpd restart\n')])]),e._v(" "),r("p",[e._v("关于named、master更新selinux设定：")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("setsebool -P named_write_master_zones 1\n")])]),e._v(" "),r("p",[e._v("关闭named的进程守护保护：")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("setsebool -P named_disable_trans 1\nservice named restart\n")])]),e._v(" "),r("p",[e._v("Selinux将本机的NFS共享设置成只读：")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("setsebool -P nfs_export_all_ro 1\n")])]),e._v(" "),r("p",[e._v("SElinux将本机的NFS共享设置成可读可写：")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("setsebool -P nfs_export_all_rw 1\n")])]),e._v(" "),r("p",[e._v("如果你想要将远程NFS的家目录共享到本机，需要开启：")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("setsebool -P use_nfs_home_dirs 1\n")])]),e._v(" "),r("p",[e._v("如果samba服务器共享目录给多个域，则需要：")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("setsebool -P allow_smbd_anon_write=1\n")])]),e._v(" "),r("p",[e._v("samba服务器要共享家目录时：")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("setsebool -P samba_enable_home_dirs 1\n")])]),e._v(" "),r("p",[e._v("如果你需在本机上使用远程samba服务器的家目录：")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("setsebool -P use_samba_home_dirs 1\n")])]),e._v(" "),r("p",[e._v("关闭selinux关于samba的进程守护的保护：")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("setsebool -P smbd_disable_trans 1\nservice smb restart\n")])]),e._v(" "),r("p",[e._v("允许"),r("a",{attrs:{href:"#/rsync",title:"rsync命令"}},[e._v("rsync")]),e._v("其他用户写入时：")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("setsebool -P allow_rsync_anon_write=1\n")])]),e._v(" "),r("p",[e._v("停止rsync的进程保护")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("setsebool -P rsync_disable_trans 1\n")])]),e._v(" "),r("p",[e._v("允许系统使用kerberos：")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("setsebool -P allow_kerberos 1\n")])]),e._v(" "),r("p",[e._v("系统工作在nis环境时：")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("setsebool -P allow_ypbind 1\n")])])])}]}},419:function(e,t,r){e.exports=r(1008)}});
//# sourceMappingURL=136.622942460a172c5b87bc.js.map