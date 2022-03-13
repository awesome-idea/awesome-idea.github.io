![image.png](images/vim-idea/7f2e83de4c3dc36bd05d9fd93c541df3.png)

## 前情提要

本教程并不是单纯的 `vim` 操作介绍，更多的是与 `Intellj Idea` 进行配合。需要同时具备 `Intellj Idea` 和 `vim` 使用基础的同学学习

## 简介

`Vim` 是一个高度可配置的文本编辑器，旨在高效地创建和更改任何类型的文本。 它作为“`vi`”包含在大多数 `UNIX` 系统和 `Apple OS X` 中。

Vim 非常稳定，并且正在不断开发以变得更好。 <br />**它的特点包括：**

1. 持久的、多级撤消树
1. 广泛的插件系统
1. 支持数百种编程语言和文件格式
1. 强大的搜索和替换
1. 与许多工具集成

## 为什么要在 `Intellj Idea` 中使用 `Vim`？

在我们学习某一项新技能，或者新的编程语言，新的编程模式。

我们应该自问让我们做出这样的行为的驱动力是什么？

学习完它之后它能解决你什么样的疼点问题。这样我们学习起来会更有**动力**一些。

### 让我尝试学习 `Vim` 的理由

- `Mac` 平台下 `Intellj Idea` 的很多的常用的 `action` 都是需要 `command + option` 这个组合键，从我转到 `Mac` 下，就一直很懊恼，个人感觉这个按键很反人类。
- 作为一名服务端开发同学，还是会经常需要在 `linux` 服务器上去修改服务器的系统配置文件。比如 `nginx` 配置，这个时候不可避免的需要使用到 `vim` 编辑器。如果你不熟练 操作起来还是相当的难受的。
- 在 `Intellj Idea` 中安装了 `vim` 插件之后。是一个互补的状态 利用各自的优势 使得编程更有效率。

## 安装

![idea_plugin_vim.svg](images/vim-idea/a5be003789e82d3aabe34ceb513b5452.svg)

在 `Intellj Idea` 中 安装以下三个插件

- `IdeaVim`
- `IdeaVim-EasyMotion`
- `IdeaVimExtension`

![image.png](images/vim-idea/b067dc2266f9b0204df852820327add2.png)<br />发现图标像上面一样编程一个小方块的时候 就代表插件安装成功

## Vim

不得不说 `vim` 的学习成本还是有的，典型的入门很难 入门之后就会爱不释手。<br />我这里对一些基础操作进行一些简单的总结和整理。

### 练习一：方向键联系 hjkl

![image.png](images/vim-idea/d6c1621058d4d2eaf732e1a307420836.png)<br />根据我自己的经验总结下来从原生编辑器过度到 `Vim` 最不习惯的当属方向键的移动从原本的 方向键变成了 `hjkl`

**这个其实没有太多好说的 就是需要克服这一关。多练就行。（下图为 Gif 演示）**<br />![normal_hijk.gif](images/vim-idea/cfe0ec28b858ce0088041c2442ccb40f.gif)

###

### 练习二：复制 & 粘贴![image.png](images/vim-idea/cd17bc00ebddb7ed689bdec23b14d22b.png)

`CV` 大法好，毕竟大家有时候自嘲都是 `C V` 工程师 😈 所以 复制 粘贴 还是需要在第一时间学会，这样才能更好的 `coding`💩。

- `yy` 复制当前行
- `p` 粘贴

![normal_yy_p.gif](images/vim-idea/db99a23dd66bc92805b24467ec3b6718.gif)

### 练习三：在学多一点点

![image.png](images/vim-idea/293e634509d57cb981b897fe358ff004.png)

在学习一些其他的命令 提交效率。

#### y p f h c i

![normal_yy_p_dd.gif](images/vim-idea/faff777ae99a136d1f2f2b3b6b0153eb.gif)<br />gif 中步骤如下

1. `yy` 复制当前行 `private String username;`
1. `p` 将复制的内容进行粘贴
1. `f;` 跳转到字符 `;` 处，这里其实就是相当于行位。
1. `h` 向左移动一个光标
1. `ciw` 删除当前处的词，并进入 `插入模式`
1. `password` 输入 password 完成

#### v j d

![V_j_d.gif](images/vim-idea/9f0247b49d8012b43316577ba4d7f501.gif)<br />gif 中步骤如下

1. `V` 进入内容选择模式
1. `kkk` 向上移动 3 行，并进行选中
1. `d` 删除选中部分

#### 块级删除「常用」di* da*

![normal_di%22.gif](images/vim-idea/f68fa89e9d93d602d5c0832ffc42497c.gif)<br />`di"` 删除`"` 内的内容，个人感觉这个还是非常常用了。也是初步在效率上优于传统的 intellj idea 的操作方式。如果想要删除之后马上进入插入模式 可以使用 `ci"`

![normal_di(.gif](images/vim-idea/df76a13c2c97ba97406e34cb008cf46e.gif)<br />`di(` 删除`(` 内的内容，如果想要删除之后马上进入插入模式 可以使用 `ci(`

![normal_di{.gif](images/vim-idea/3d3d3c4a3dc25b1e2bfda8573ae74d5b.gif)<br />`di{` 删除`{` 内的内容，如果想要删除之后马上进入插入模式 可以使用 `ci{`

#### 各种进入插入模式

- `i` 在光标之前，进入插入模式
- `I` 在本行开头，进入插入模式
- `a` 在光标之后，进入插入模式
- `A` 在本行结尾，进入插入模式
- `o` 在本行之后新增一行，并进入插入模式
- `O` 在本行之前新增一行，并进入插入模式
- `s` 删除当前字符，并进入插入模式
- `S` 删除当前行中的所有文本，并进入插入模式

在我最开始的学习 vim 的时候只知道 `i` 进入插入模式。后面才知道还有这么多种方式。<br />如果你真的是切换过来之后 这里所有的方式都能用到。

**下面是 gif 演示 可以直接跳过**<br />![normal_a.gif](images/vim-idea/1c643c3738af377a79b014604fddc0fe.gif)

- `a` 在光标之后，进入插入模式

![normal_i.gif](images/vim-idea/741156ec2833f67259651bfb58493442.gif)

- `i` 在光标之前，进入插入模式

![normal_o.gif](images/vim-idea/22169c8272dbcd521f6556e64cb8c031.gif)

- `o` 在本行之后新增一行，并进入插入模式

![normal_shift_a.gif](images/vim-idea/9029c3403a1a0748f3d09f8a15face03.gif)

- `A` 在本行结尾，进入插入模式

![normal_shift_i.gif](images/vim-idea/ea2690bd3e09ff54727575826ed4d9e8.gif)

- `I` 在本行开头，进入插入模式

![normal_shift_o.gif](images/vim-idea/d8e74977178c38be9ee5de5eac38d41c.gif)

- `O` 在本行之前新增一行，并进入插入模式

### 练习四：jump

![image.png](images/vim-idea/f00b35daaaab2234de573a9c4c1f88dd.png)<br />不得不说我们使用 vim 更多的就是为了减少鼠标操作，因为使用鼠标你的手需要离开键盘。<br />一来一回 麻烦！！！所以我们需要了解更多光标移动操作

- `[n]f{word}` `f` 用来查找在**当前行** 当前光标后是否存在某个字符 `{word}` 如果存在则将光标移动过去
- `$ | ^` `$` 跳转到行尾 `^` 跳转到行首
- `%` 括号匹配跳转 `() [] {}`
- `*` 跳转到上一个字符的定位处
- `[n]h/j/k/l` 数字加上方向键 代表重复运行多少次
  - 2jj 向下移动两行
  - 10l 向右移动 10 个字符
  - 3kk 向下移动 3 行
  - 20h 向左移动 20 字符
- `G | gg`
  - G 移动到最后一行
  - gg 移动到第一行
- `H | M | L`
  - H 移动到当前页的第一行
  - M 移动到编辑器中部
  - L 移动到当前页的最后一行
- `[n]w` 移动到后面 word 的开始位置，前面加上数字 代表重复多少次
- `e` 移动到下一个词语的末尾
- `b` 移动到上一个单词的开头
- `zz` 改变窗口的整体位置，将当前光标所在处 移动到窗口中部

**下面是 gif 演示**<br />![normal_fF.gif](images/vim-idea/2b221f30acf8e7c8dfe344ac08c5b2e3.gif)

- `[n]f{word}` `f` 用来查找在**当前行** 当前光标后是否存在某个字符 `{word}` 如果存在则将光标移动过去。
- 如果将这里的 f 改为 F 则是反向查找

![normal_#*.gif](images/vim-idea/45ea8a00a8d86674b563e8e5d16b91d9.gif)

- `$ | ^` `$` 跳转到行尾 `^` 跳转到行首

![normal_%.gif](images/vim-idea/6fc1c5ce8d999377d791a237dc53de1a.gif)

- `%` 括号匹配跳转 `() [] {}`

### 练习五 学习一些通用场景

其他的比较好用的命令

- `zo | zc`
- `dt{char}`

## 配置

在安装了 Vim 之后，其实官方只是给我们了一个基本的架子，能够实现 Vim 的基本操作。如果你想要用的更加顺手，那么你需要对 Vim 进行自己的个性化配置。

> 这是一张白纸，它会被书写成什么样子由你自己决定。

###

如何对 Idea 中的 Vim 模块进行配置<br />![image.png](images/vim-idea/335c34cd442d30f3ddd5d6982104b14d.png)<br />在右下角点击 Vim 图标，然后点击 **Open ~/.ideavimrc**

### 基础配置

老规矩，个人感觉对于新手对编辑器进行配置，还是参照社区的常用配置进行使用。当自己对 Vim 更加熟练的时候可以在加入自己的东西

```bash

"语法高亮
syntax on
"显示行号
set number relativenumber
"显示光标所在位置的行号和列号
set ruler
set wrap                      "自动折行
set shiftwidth=4
set tabstop=4
set softtabstop=4
set expandtab                  "将tab替换为相应数量空格
set smartindent
set backspace=2
set co=5
"设置取消备份 禁止临时文件生成
set nobackup
set noswapfile
" 为IdeaVim插件增加自动切换为英文输入法的功能,
" idea 需要安装 IdeaVimExtension plugin
set keep-english-in-normal
"设置匹配模式 类似当输入一个左括号时会匹配相应的那个右括号
set showmatch
set clipboard^=unnamed,unnamedplus
"set laststatus=2   "命令行为两行
"set fenc=utf-8     "文件编码
"set mouse=a        "启用鼠标
"set ignorecase     "忽略大小写
set cursorline     "突出显示当前行
"set cursorcolumn   "突出显示当前列
set fdm=marker

```

上面当中比较特别的配置就是

- 设置 relativenumber 这样可以看相对行号
- keep-english-in-normal 这个设置开启之后可以在进入命令模式之后自动将输入法切换为英文。这个还是非常推荐设置的，不然每次从 插入模式 切换到 命令模式的时候 如果这个时候是中文输入法，体验就极差了
- `set clipboard^=unamed,unnamedplus` 共享剪切板，Vim 的剪切板和系统的剪切板是隔离的。设置之后可以共享。

### Action 配置

在 Idea 中大部分的操作都可以抽象为一个 Action 比如

- 文件重命名 Rename File
- 重命名变量 或者 类名 RenameElement
- 去到接口实现 GotoImplementation
- 复制 Class 引用 CopyReference
- ...

在 Vim 中可以通过插入命令模式 直接调用 action<br />![insert_command_invoke_action.gif](images/vim-idea/23602e208abb9cd292a574ba4b911ccc.gif)<br />上图中 gif 中演示的就是通过 调用 `RenameElement` Action 重命名变量。

初步的介绍完 `Intellj Idea` 的 `action` 之后，下面分享我自己目前在用的几个比较常用的配置，通过快捷键 调用 `action`

```bash
"jk退出insert模式
inoremap jk <ESC>

let mapleader = '\<space>'
"Idea action 配置
" 重命令元素
nnoremap <Leader>re :action RenameElement<CR>
nnoremap <Leader>gi :action GotoImplementation<CR>
nnoremap <Leader>im :action ImplementMethods<CR>
nnoremap <Leader>rv :action IntroduceVariable<CR>
nnoremap <Leader>cr :action CopyReference<CR>
nnoremap <Leader>em :action ExtractMethod<CR>
nnoremap <Leader>sw :action SurroundWith<CR>

```

[action list](https://gist.github.com/zchee/9c78f91cc5ad771c1f5d) `Intellj Idea` 中只是的所有的 `action` 列表

### 插件配置

其实本来 Vim 中的插件体系是非常强大的，但是因为我们是在 `Intellj Idea` 中使用 `Vim` 可以利用很多 `Intellj Idea` 原本的很多功能。目前我个人还没有发现有很亮眼的插件。所以如果你也正在使用 可以分享一下。

## 其他

- [B 站 vim 入门讲解](https://www.bilibili.com/video/BV1Yt411X7mu)
- [简明 VIM 练级攻略](https://coolshell.cn/articles/5426.html)
- [learn-vim](https://github.com/iggredible/Learn-Vim)
- [Vim 配置](https://www.ruanyifeng.com/blog/2018/09/vimrc.html)
