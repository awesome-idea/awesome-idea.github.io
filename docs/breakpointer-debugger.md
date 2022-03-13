断点是特殊的标记，可在特定点挂起程序执行。这使您可以检查程序状态和行为。断点可以很简单（例如，在到达某一行代码时暂停程序），也可以涉及更复杂的逻辑（针对[附加条件进行](https://www.jetbrains.com/help/idea/using-breakpoints.html#breakpoint_condition)检查，编写[日志消息](https://www.jetbrains.com/help/idea/using-breakpoints.html#log)等）。

## 断点类型

IntelliJ IDEA 中提供以下类型的断点：

- 行断点：到达设置断点的代码行时挂起程序。可以在任何可执行代码行上设置此类断点。<br />
- 方法断点：在进入或退出指定方法或其实现之一时挂起程序，使您可以检查方法的进入/退出条件。<br />
- 字段观察点：读取或写入指定字段时挂起程序。这使您可以对与特定实例变量的交互做出反应。例如，如果在复杂过程的最后，您在其中一个字段上的值显然是错误的，则设置字段观察点可能有助于确定故障的来源。<br />
- 异常断点：Throwable 抛出程序或其子类时挂起程序 。它们全局适用于异常条件，并且不需要特定的源代码引用。

## 设置断点

### 设置行断点

单击要设置断点的可执行代码行中的装订线。或者，将插入号放在该行上，然后按 ⌘F8。<br />![](/images/breakpointer-debugger/a477e01988a9f05bdb5a6ec4afb435e8.png)<br />如果该行包含 lambda 表达式，则可以选择是要设置常规的行断点，还是仅应在调用 lambda 时挂起程序。<br />![](/images/breakpointer-debugger/f6633105a8ee87de2f2a5bfe8254ddfb.png)

### 设置方法断点

- 单击声明方法所在行的装订线。或者，将插入号放在该行上，然后按 ⌘F8。<br />![](/images/breakpointer-debugger/07f34a00a38284e7727ac497e569e744.png)
- 要在调用某个类的默认构造函数时挂起程序，请在声明该类的行上单击装订线，或在该行处插入插入符号，然后按 ⌘F8。<br />![](/images/breakpointer-debugger/ab31fa1dda772401b88fa4da75d1852d.png)
- 要匹配多个类或方法，请 在“**调试”**工具窗口的左侧单击“ **查看断点”** ，然后单击“ **添加”** 并指定类和方法。使用相匹配的开始，结束，或整个标识符。 ![](/images/breakpointer-debugger/52b3676627eb459de7634362f8050a91.svg) ⌘N`*`<br />![](/images/breakpointer-debugger/62e0ddf1d9615470b5cfce94481a9820.png)

### 设置字段 监听

![](/images/breakpointer-debugger/b372ed7b31fba5d47e807bea7dc39dd3.png)

## 管理断点

### 删除断点

- 左键单击
- Ctrl + F8

### 静音断点

### 启动/禁用断点

### 移动/复制断点

- 要移动断点，请将其拖到另一行。
- 要复制断点，请按住断点^ 并将其拖到另一行。这将在目标位置创建具有相同参数的断点。

##

## 断点状态

| 线 | 方法 | 领域 | 例外 | 异常 |
| Regular | ![](/images/breakpointer-debugger/0ea72485e282426379787e704db30dfa.svg) | ![](/images/breakpointer-debugger/49b200a3054e10e94e2f52ed0cd9c539.svg) | ![](/images/breakpointer-debugger/d0888bd3a8e51f8d5e2bf39695e8422e.svg) | ![](/images/breakpointer-debugger/43f54d47b04ce578a504993cb21851ab.svg) |
| --- | --- | --- | --- | --- |
| 禁用断点 | ![](/images/breakpointer-debugger/65bae4865964da34f1afdf4faffaba38.svg) | ![](/images/breakpointer-debugger/92fd535217e0ea650fb7bedbb56affdb.svg) | ![](/images/breakpointer-debugger/113fc1dd20491afca52d9b2c6acfbbed.svg) | ![](/images/breakpointer-debugger/e28370768217745c4560282d02e5d802.svg) |
| 已验证 | ![](/images/breakpointer-debugger/5934833f2ffcadfed19b3291cfe231ac.svg) | ![](/images/breakpointer-debugger/c68539c0a5dd6abf0955fe003e78259e.svg) | ![](/images/breakpointer-debugger/c7332e0bb37ed0bf2bc6cad902d7d48a.svg) | |
| Muted | ![](/images/breakpointer-debugger/b177c84f5d141fa2e862d7cdeca8d738.svg) | ![](/images/breakpointer-debugger/8b4e16d9eef44cdb0f0fc13aafcbbb39.svg) | ![](/images/breakpointer-debugger/afa53d0891880bb197c2a4a8981d7e7d.svg) | |
| Inactive/dependent | ![](/images/breakpointer-debugger/af659c55e4c167d57725cc35045ba977.svg) | ![](/images/breakpointer-debugger/6602376dcb6536e281dc78a3ada9ce56.svg) | ![](/images/breakpointer-debugger/12ee57ffd9828a8b5d124a00e5ad9e5a.svg) | |
| Muted inactive/dependent | ![](/images/breakpointer-debugger/08424db4fb5b01ee00b0d2e95a57a512.svg) | ![](/images/breakpointer-debugger/5f4253c078e906b167bb974fae3b0b9d.svg) | ![](/images/breakpointer-debugger/5d04727f12caeea563832d490c60783d.svg) | |
| Muted disabled | ![](/images/breakpointer-debugger/87ad410309f5879206866c852263b66c.svg) | ![](/images/breakpointer-debugger/4be7fd8da528e074dac5b2a31a19c0f2.svg) | ![](/images/breakpointer-debugger/2b9977ea409fedcd5d000b015975378e.svg) | |
| Non-suspending | ![](/images/breakpointer-debugger/ff85e2ba53362d2832638ddf5399b5bd.svg) | ![](/images/breakpointer-debugger/86ff105261a192ed390b088c622103de.svg) | ![](/images/breakpointer-debugger/563b2d5f5c0cf479a9501b3a5c288663.svg) | |
| Verified non-suspending | ![](/images/breakpointer-debugger/7d30efe1027be45667715d87ef6ebe19.svg) | ![](/images/breakpointer-debugger/1d939e6df2a8c65c77f6bb1dbcba7e1e.svg) | ![](/images/breakpointer-debugger/5134e837d974ea83a223d97ad5ed209e.svg) | |
| 无效 | ![](/images/breakpointer-debugger/ab26e501851d75cc838a721759b021de.svg) | | | |

## 🧐👩‍💻🙋🏻‍♂️

> 你不知道的小技巧

### 方法断点

![](/images/breakpointer-debugger/e4c13186b4888f77c3c9ac57d607a295.png)<br />可以对断点添加 条件。这样只有在满足特定条件下才会进入断点

### printf 调试

在开发中我们总是会使用 下面这样的方式打印日志

```java
public class Test {
	public static void main(String[] args) {
    	System.out.println("prev log");
        method();
        System.out.println("post log");
    }
}
```

实际上上面的 print 语句都可以用 **非暂停断点** 来进行日志输出

### 通过断点查看程序执行时间
