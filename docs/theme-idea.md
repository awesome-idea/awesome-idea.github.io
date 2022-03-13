## 背景

官方对主题模块的介绍

> 作为一名开发人员，您需要使用大量文本资源: 编辑器中的源代码、搜索结果、调试器信息、控制台输入和输出等等。颜色和字体样式用于格式化这个文本，并帮助您更好地理解它一目了然。

个人感觉 每天我们大半的时间都是在跟代码打交道，时间长了在一个配色下 还是会比较枯燥，转而代码效率也会下降。这个时候定期的更换一些主题配色就变得尤为重要了。

**强行重要**

## 官网主题

### Intellij Light

![image.png](images/theme-idea/fd16cc08591b269efd6fad56e8eba35b.png)<br />在最开始的很长时间都是使用这个主题，最主要的问题是 白天还好，晚上写代码的话 就有点头疼了。所以官网也提供了 dark 版本<br />![image.png](images/theme-idea/693c28d4cd5d1d02d0cdba965daef9c7.png)<br />现在大家大部分都是这两种中使用一种

## Material Theme

> 这个算是非常出名的主题了，不过在 2021.3 版本后就要收费了。不过别慌有解决办法 放在最后

### 主题名 | Acr Dark

![image.png](images/theme-idea/e235de688025dbe06d3cc738cd33eb31.png)

### 主题名 | Dracula

![image.png](images/theme-idea/f23f901ae9e86e77f29157643e17e2bc.png)

### 主题名 | Github

![image.png](images/theme-idea/f3c4dc40c34248a95b88ca8f38b3425a.png)

### 主题名 | Github Dark

![image.png](images/theme-idea/45bd6208af6eec3422fa105f993c7468.png)

### 主题名 | Darker

![image.png](images/theme-idea/fe51d678d77ad35072f02cd74aeb55e5.png)

### 主题名 | Deep Ocean

![image.png](images/theme-idea/64ca7cfd379eb4834b72ad3a55d82933.png)

### 主题名 | Lighter

![image.png](images/theme-idea/076d24d803bf01e7c41714d3c156e31b.png)

### 主题名 | Oceanic

![image.png](images/theme-idea/c2f44467128ccf6c18a190809a86a319.png)

### 主题名 | Monokai Pro

![image.png](images/theme-idea/fc8197f89e3ea11942f0aaf2c35bc91c.png)

### 主题名 | Moonlight

![image.png](images/theme-idea/b34ae6b8ea02967958e38b441d1080ea.png)

### 主题名 | Solarized Light

![image.png](images/theme-idea/377736caae02f3e897b055eb50e7770a.png)

###

## [tomorrow-theme](https://github.com/chriskempson/tomorrow-theme)

![image.png](images/theme-idea/e031f2d8bf08a1fca8282f7d8ad76ba5.png)<br />上面的主题都来自一个开源项目 tomorrow-theme 就算是上面的 material ui 也算是这个项目后的衍生项目。下载可以去 [Github](https://github.com/chriskempson/tomorrow-theme) 主题

## solarized

![image.png](images/theme-idea/b9f922152e82c7c452dfa9b1fb010ffd.png)

### <br />

Github 地址 [https://github.com/jkaving/intellij-colors-solarized](https://github.com/jkaving/intellij-colors-solarized) 将主题地址下载下来直接导入 Idea 中即可。Intellij Idea 的主题项目是 [solarized](https://github.com/altercation/solarized) 项目的衍生项目

## Monokai Theme

![image.png](images/theme-idea/e73e1c160268c446621dfeb834271925.png)

[下载地址](https://darekkay.com/blog/monokai-theme-intellij/dk-monokai-142.jar)

> 直接将下载的 Jar 包导入即可，如果没有选中，需要手动的到 close scheme 下去选择一下

## Intellij-Zenburn

![image.png](images/theme-idea/910e166c809deb2afce4db657fcb3653.png)<br />[Github 下载地址](https://github.com/pedropenna/Intellij-Zenburn)

## dracula

![image.png](images/theme-idea/4ebb2a7247bca97d3988e49edf5d0775.png)

[Github 下载地址](https://github.com/dracula/jetbrains)

## gruvbox

![image.png](images/theme-idea/4b707192881f107772ef17153a9a98c9.png)<br />[Github 下载地址](https://github.com/Vincent-P/gruvbox-intellij-theme)

## lucario

![image.png](images/theme-idea/33012cd0db99e493f6d0732badeffb98.png)<br />[Github 下载地址](https://github.com/raphamorim/lucario#jetbrains-editors)

## Atom One Dark

![image.png](images/theme-idea/5c67b818e40c24b183040292deb100c8.png)<br />我自己最爱的主题，直接在插件市场下载即可。

## 如果处理 Material Theme 收费问题

2021.1 版本后，Material Theme 收费，一年 15 美元，对于我自己来说还是有点小贵的，这里给出几种方案处理这个问题

第一个就是去网上下载一个 2021.1 之前版本的插件。因为之前是免费的 就还是可以用的。

还有另外的一个办法就是，应为本来主题 本来其实就是一个配置而已，就是配置了哪个地方是什么颜色，所以其实我们只要拿到这个配置就可以了，这个 Jetbrains 官方有一个开源项目刚好可以处理这个问题。

## colorSchemeTool

[colorSchemeTool](https://github.com/JetBrains/colorSchemeTool) 是 Jetbrains 官方出的主题转换工具<br />该工具可以帮助您转换 TextMate 和 VS Code 中使用的配色方案，并使它们与基于 IntelliJ 的 IDE 兼容，例如 IntelliJ IDEA、WebStorm 和 PyCharm。

**使用步骤**

- **Clone 项目代码**
- **在 VsCode 中下载你想要转换的主题的 JSON 文件**
- **将转换的 JSON 文件移动到项目对应的 vscThemes 文件夹下**
- **运行 convert.sh 脚本**
- **在 intellijThemes 文件夹下看，可以找到你导出对应 VsCode 主题的 **`.icls` 文件

** 🌈 VsCode 导出自己当前正在使用主题的文件**<br />![image.png](images/theme-idea/91152037aaae3dc5c9838a82c1f0476c.png)<br />command + shift + p 输入 Generate Color Theme From Current Settings<br />就可以将自己当前正在使用的主题文件转换为 JSON 文件

### 将配置文件导入到 Idea 中

![image.png](images/theme-idea/e092ec47f61b000cf351abc9afc2830a.png)<br />重启生效
