> 本文参考：[https://www.zhihu.com/question/303850876](https://www.zhihu.com/question/303850876)


### 安装 im-select

[https://gitee.com/hugewilliam/im-select.git](https://gitee.com/hugewilliam/im-select.git)


### 2. 将以下部分插入setting json里面
**mac**<br />"vim.autoSwitchInputMethod.enable": true, "vim.autoSwitchInputMethod.defaultIM": "com.apple.keylayout.US", "vim.autoSwitchInputMethod.obtainIMCmd": "/usr/local/bin/im-select", "vim.autoSwitchInputMethod.switchIMCmd": "/usr/local/bin/im-select {im}"

**win**<br />"vim.autoSwitchInputMethod.enable": true, "vim.autoSwitchInputMethod.defaultIM": "1033", "vim.autoSwitchInputMethod.obtainIMCmd": "C:\\im-select\\im-select.exe",  "vim.autoSwitchInputMethod.switchIMCmd": "C:\\im-select\\im-select.exe {im}"
