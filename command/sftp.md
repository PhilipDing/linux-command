**sftp命令**是一款交互式的文件传输程序，命令的运行和使用方式与[ftp](https://philipding.github.io/linux-command/ftp "ftp命令")命令相似，但是，sftp命令对传输的所有信息使用[ssh](https://philipding.github.io/linux-command/ssh "ssh命令")加密，它还支持公钥认证和压缩等功能。

### 语法  

```
sftp(选项)(参数)
```

### 选项  

```
-B：指定传输文件时缓冲区的大小；
-l：使用ssh协议版本1；
-b：指定批处理文件；
-C：使用压缩；
-o：指定ssh选项；
-F：指定ssh配置文件；
-R：指定一次可以容忍多少请求数；
-v：升高日志等级。
```

### 参数  

目标主机：指定sftp服务器[ip](https://philipding.github.io/linux-command/ip "ip命令")地址或者主机名。