当你在 IntelliJ IDEA 中打开一个项目时，默认的用户界面如下所示<br />![ij_mainWindow_default.png](/images/interface-idea/1b08d8abb6630e173a2597f4b65a1148.png)

我将从以下 8 个面板来讲述界面内容

1. Editor
1. Navigation bar
1. Status bar
1. Project Tool window
1. Context menu
1. Popup menu
1. Run Tool Windows

## Editor

这里是我们 “改变世界的地方” 因为一句句代码从当前窗口产生。

![](/images/interface-idea/2bcc76f2e09e9d6fde6d9e5ddbf76f71.png)

## Navigation bar

顶部的导航栏是 Project 工具窗口的一个快速替代选项，在该窗口中，您可以导航项目的结构并打开文件进行编辑。<br />使用导航栏右侧的按钮来构建  ![icons.actions.compile.svg](/images/interface-idea/159461edb5604fd7f7122f95fbb310b0.actions.compile.svg) 、运行![icons.toolwindows.toolWindowRun.svg](/images/interface-idea/0e7ce3e9cfa253ff23cfeee21ba1f051.toolwindows.toolWindowRun.svg) 和调试 ![icons.actions.startDebugger.svg](/images/interface-idea/9c34a5a8ce5f6c9e079298e58378bdb0.actions.startDebugger.svg) ![icons.actions.compile.svg](/images/interface-idea/d9fcdfc9049a8fed881732328eaf7a7e.actions.compile.svg)应用程序，访问项目结构![icons.general.projectStructure (1).svg](/images/interface-idea/57328189a0f4274288d2517c623b0207.general.projectStructure (1).svg)设置  ![icons.general.projectStructure (1).svg](/images/interface-idea/74ccf5b893e28e4e9c64ad506443b388.general.projectStructure (1).svg)。它还包含运行任何东西 ![icons.actions.run_anything.svg](/images/interface-idea/435837fdfad1b6e91b5ddbbadbf6044d.actions.run_anything.svg)按钮。

## Status bar

![ijStatusBarWidgets.png](/images/interface-idea/0af44c913bff9e3ab8f1148a1980a9be.png)

| 小部件                                                                                 | 描述                                                                                                                                                           |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **52:11**                                                                              | 行号和列号除以冒号表示编辑器中当前插入符号的位置。单击数字可跳转到特定的行和列。如果在编辑器中选择代码片段，IntelliJ IDEA 还会显示所选片段中的字符数和换行符。 |
| ![uiStatusLineEnding.png](/images/interface-idea/10464cab210c98e891c660bd047308b3.png) | 单击可在编辑器中更改当前文件的行尾。                                                                                                                           |
| ![image.png](/images/interface-idea/afd9bcbf17b84fc5dad02f9ea330593c.png)              | 单击可在编辑器中更改当前文件的编码。                                                                                                                           |
| <br />                                                                                 | 点击设置当前文件是否可读。                                                                                                                                     |
| ![image.png](/images/interface-idea/27f4fc577be7c5c4746ad3bfbca99840.png)              | 如果版本控制工具开启，那么这个小组件显示当前版本控制分支，点击可以 进行版本控制                                                                                |
| ![image.png](/images/interface-idea/b38a89cf5d4b936906e38e17b1e25875.png)              | 单击可更改当前文件中使用的缩进样式。                                                                                                                           |
| ![image.png](/images/interface-idea/a3c8e5faf4597f5ef9385da8e3dc5577.png)              | 显示 IntelliJ IDEA 在堆内存总量中消耗的内存量。有关更多信息，请参阅增加 IDE 的内存堆。                                                                         |

## Tool window

工具窗口提供了补充编辑代码的功能。例如，“项目工具”窗口显示项目的结构，“运行工具”窗口显示应用程序运行时的输出。

默认情况下，工具窗口停靠在主窗口的侧面和底部。您可以根据需要对它们进行排列、取消停靠、调整大小、隐藏等等。右键单击工具窗口的标题，或单击其排列选项标题中的“显示选项”菜单按钮。

您可以**指定快捷方式**来快速访问您经常使用的工具窗口。其中一些默认情况下有快捷方式。例如，要打开“项目工具”窗口，请按 Alt+1；要打开“终端工具”窗口，请按 Alt+F12。

## context menu

![image.png](/images/interface-idea/6496f13eeb6ff504b656a3978b73ce9f.png)<br />右键菜单

您可以右键单击界面的各个元素以查看当前上下文中可用的操作。<br />例如，右键单击项目工具窗口中与该文件相关的操作的文件，或在编辑器中右键单击以查看应用于当前代码片段的操作。<br />大多数这些操作也可以从屏幕顶部的主菜单或主窗口执行。带有快捷方式的操作在操作名称旁边显示快捷方式。

## Popup menu

![image.png](/images/interface-idea/f8aaab37aca28c0fd0d2779cb259d4b2.png)<br />Refactor 弹出层

弹出菜单提供与当前上下文相关的操作的快速访问。以下是一些有用的弹出菜单及其快捷方式：

- `Alt+Insert` 打开生成弹出窗口，用于根据上下文生成样板代码。
- `Ctrl+Alt+Shift+T` 打开这个弹出窗口的重构，其中包含上下文可用的重构列表。
- `Alt+Insert` 在“项目工具”窗口中打开新弹出窗口，用于向项目添加新文件和目录。
- `Alt+` ` 打开 “VCS 操作” 弹出菜单，其中包含版本控制系统的可用操作。可以使用常用动作的快速列表创建自定义弹出菜单。

上面只是一个概览介绍，后面会有详细的介绍
