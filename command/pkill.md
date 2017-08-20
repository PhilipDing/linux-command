**pkill命令**可以按照进程名杀死进程。pkill和[killall](https://philipding.github.io/linux-command/killall "killall命令")应用方法差不多，也是直接杀死运行中的程序；如果您想杀掉单个进程，请用[kill](https://philipding.github.io/linux-command/kill "kill命令")来杀掉。

### 语法  

```
pkill(选项)(参数)
```

### 选项  

```
-o：仅向找到的最小（起始）进程号发送信号；
-n：仅向找到的最大（结束）进程号发送信号；
-P：指定父进程号发送信号；
-g：指定进程组；
-t：指定开启进程的终端。
```

### 参数  

进程名称：指定要查找的进程名称，同时也支持类似[grep](https://philipding.github.io/linux-command/grep "grep命令")指令中的匹配模式。

### 实例  

```
[pgrep](https://philipding.github.io/linux-command/pgrep "pgrep命令") -l gaim
2979 gaim

pkill gaim
```

也就是说：kill对应的是PID，pkill对应的是[command](https://philipding.github.io/linux-command/command "command命令")。