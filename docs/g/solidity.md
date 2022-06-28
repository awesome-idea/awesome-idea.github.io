# Solidity 入门



**导读**

此教程适合至少了解过一点合约相关知识，对区块链有基本共识同学进行观看。

不管你是需要阅读合约源码，亦或是需要编写合约。这份指南都会对你有所帮助，这份为个人整理比不上官方文档，但是对特别需要注意的知识点做了补充说明，可用此文档进行过度。在后续有更加细节的知识点需要查询时，可到官方文档进行查阅。

[Official Solidity Docs - EN](https://docs.soliditylang.org/en/v0.8.14/)

[Community Solidity Docs - ZH](https://solidity-cn.readthedocs.io/zh)

## 01. Tutorial


### 1.1 基础语法
```solidity
pragma solidity >=0.4.0 <0.6.0;
contract SimpleStorage {
   uint storedData;
   function set(uint x) public {
      storedData = x;
   }
   function get() public view returns (uint) {
      return storedData;
   }
}
```

上面是一个最简单的合约



#### Pragma

第一行表示合约对应的 **solidity** 版本，大于等于 **0.4.0** 但是小于 **0.6.0**

也可以像下面这种写法

```solidity
pragma solidity ^0.4.0;
```



#### Contract

合约本质上就是运行在区块链上的一段代码，如上方所示 `unit storedData` 代表了它是运行上区块链上的一个变量。我们可以通过下方的 get set 来对他进行修改。



#### Import 

在 solidity 语言中，想要使用其他模块的方法或属性，则需要进行倒入，总共由两种方法

```solidity
import "filename"
```

也可以使用

```solidity
import * as symbolName from "filename";
```



### 1.2 第一个程序

> 注意：solidity 不像 JS JAVA 等语言，可以直接在本地运行，它更多的是需要像 EVM 这样的环境才能运行，所以在刚开始练习的时候，最好是用比较简单，能直观看到结果的编辑器。

打开页面 [Remix IDE](https://remix.ethereum.org/)，运行我们的代码。

#### Step 1 

将下方 Example 中的代码拷贝到 Remix 中

**Example**

```solidity
pragma solidity ^0.5.0;
contract SolidityTest {
   constructor() public{
   }
   function getResult() public view returns(uint){
      uint a = 1;
      uint b = 2;
      uint result = a + b;
      return result;
   }
}
```



#### Step 2

切换到 编译 Tab，点击编译

![image-20220524153016705](https://raw.githubusercontent.com/xiaoxiunique/picgo/main/image-20220524153016705.png)



#### Step 3

点击部署

![image-20220524153348647](https://raw.githubusercontent.com/xiaoxiunique/picgo/main/image-20220524153348647.png)



#### Step 4

部署完成之后，下方就可以看到我们部署后的合约

![image-20220524153639653](https://raw.githubusercontent.com/xiaoxiunique/picgo/main/image-20220524153639653.png)

然后将合约展开,展开之后我们就可以在这里面调用合约中代码。

![image-20220524153706691](https://raw.githubusercontent.com/xiaoxiunique/picgo/main/image-20220524153706691.png)

点击 getResult

![image-20220524153724296](https://raw.githubusercontent.com/xiaoxiunique/picgo/main/image-20220524153724296.png)

就能得到结果。这样我们就完成了第一个 solidity 程序的编写和部署测试。



### 1.3 注释

支持两种形式

```solidity
function getResult() public view returns(uint){
   // This is a comment. It is similar to comments in C++

   /*
      * This is a multi-line comment in solidity
      * It is very similar to comments in C Programming
   */
   uint a = 1;
   uint b = 2;
   uint result = a + b;
   return result;
}
```



### 1.4 类型

[types](https://solidity-cn.readthedocs.io/zh/develop/types.html)



#### 地址 Address

address 保存代表以太坊地址大小的 20 字节值。 一个地址可以使用 .balance 方法获取余额，也可以使用 .transfer 方法将余额转移到另一个地址。

```solidity
address x = 0x212;
address myAddress = this;
if (x.balance < 10 && myAddress.balance >= 10) x.transfer(10);
```

![image-20220527113057200](https://raw.githubusercontent.com/xiaoxiunique/picgo/main/image-20220527113057200.png)

**address** 这里容易让人有点误解，明明存入的是 **0x1341243243...** 这样的一个东西，但是却可以直接点出方法 **balance** 和 **transfer**。**这里需要消化一下，不然后面容易懵**。



这里的 address 对象我们可以理解为是一个包装数据类型，可以直接理解 address 为一个类，他本身就具备很多方法。只不过在初始化的时候跟传统的 Struct 结构的数据不一样。只需要设置地址就可以了，程序会自动帮我们处理。



address 中所有的可用方法

`<address>.balance` (`uint256`):

以 Wei 为单位的 [地址类型](https://solidity-cn.readthedocs.io/zh/develop/types.html#address) 的余额。

`<address>.transfer(uint256 amount)`:

向 [地址类型](https://solidity-cn.readthedocs.io/zh/develop/types.html#address) 发送数量为 amount 的 Wei，失败时抛出异常，发送 2300 gas 的矿工费，不可调节。

`<address>.send(uint256 amount) returns (bool)`:

向 [地址类型](https://solidity-cn.readthedocs.io/zh/develop/types.html#address) 发送数量为 amount 的 Wei，失败时返回 `false`，发送 2300 gas 的矿工费用，不可调节。

`<address>.call(...) returns (bool)`:

发出低级函数 `CALL`，失败时返回 `false`，发送所有可用 gas，可调节。

`<address>.callcode(...) returns (bool)`：

发出低级函数 `CALLCODE`，失败时返回 `false`，发送所有可用 gas，可调节。

`<address>.delegatecall(...) returns (bool)`:

发出低级函数 `DELEGATECALL`，失败时返回 `false`，发送所有可用 gas，可调节。





### 1.5 变量

<img src="https://raw.githubusercontent.com/xiaoxiunique/picgo/main/image-20220524155201718.png" alt="image-20220524155201718" style="zoom:50%;" />



>  此小节非常重要。

在 Solidity 中总共有 3 种变量

- 状态变量
- 本地变量
- 全局变量



#### 状态变量

表明存储在合约中的变量，什么叫存储在合约中呢，其实就相当于 Java 里面的成员变量，在 solidity 中的写法如下

```solidity
pragma solidity ^0.5.0;
contract SolidityTest {
   uint storedData;      // State variable
   constructor() public {
      storedData = 10;   // Using State variable
   }
}
```



#### 本地变量

其值仅在定义它的函数内可用的变量。 函数参数始终是该函数的本地参数。其实说白了就是局部变量，就是写在方法里面的。

```solidity
pragma solidity ^0.5.0;
contract SolidityTest {
   uint storedData; // State variable
   constructor() public {
      storedData = 10;   
   }
   function getResult() public view returns(uint){
      uint a = 1; // local variable
      uint b = 2;
      uint result = a + b;
      return result; //access the local variable
   }
}
```



#### 全局变量【重要‼️】

![image-20220527113057200](https://raw.githubusercontent.com/xiaoxiunique/picgo/main/image-20220527113057200.png)

全局变量是存在于全局工作空间中的特殊变量，它们提供关于区块链和交易属性的信息。说白了就是不需要声明，有点类似于 Node 里面的 Process，浏览器里面的 Windows，可以直接拿来使用。



Solidity 中的全局变量有下面几种。

- `block.blockhash(uint blockNumber) returns (bytes32)`：指定区块的区块哈希——仅可用于最新的 256 个区块且不包括当前区块；而 blocks 从 0.4.22 版本开始已经不推荐使用，由 `blockhash(uint blockNumber)` 代替
- `block.coinbase` (`address`): 挖出当前区块的矿工地址
- `block.difficulty` (`uint`): 当前区块难度
- `block.gaslimit` (`uint`): 当前区块 gas 限额
- `block.number` (`uint`): 当前区块号
- `block.timestamp` (`uint`): 自 unix epoch 起始当前区块以秒计的时间戳
- `gasleft() returns (uint256)`：剩余的 gas
- `msg.data` (`bytes`): 完整的 calldata
- `msg.gas` (`uint`): 剩余 gas - 自 0.4.21 版本开始已经不推荐使用，由 `gesleft()` 代替
- `msg.sender` (`address`): 消息发送者（当前调用）
- `msg.sig` (`bytes4`): calldata 的前 4 字节（也就是函数标识符）
- `msg.value` (`uint`): 随消息发送的 wei 的数量
- `now` (`uint`): 目前区块时间戳（`block.timestamp`）
- `tx.gasprice` (`uint`): 交易的 gas 价格
- `tx.origin` (`address`): 交易发起者（完全的调用链）



看一下在合约中如何使用 全局变量

```solidity
pragma solidity ^0.5.0;
contract SolidityTest {

   function getNowTime() public view returns(uint) {
       return now;
   }

   function getSender() public view returns (address payable) {
       return msg.sender;
   }

   function getGaslimit() public view returns (uint) {
       return block.gaslimit;
   }
}
```

然后在从新点击 部署，按照上面讲过的步骤

![image-20220524161629834](https://raw.githubusercontent.com/xiaoxiunique/picgo/main/image-20220524161629834.png)

然后运行部署后的合约。



####  变量命名规范

- 您不应使用任何 Solidity 保留关键字作为变量名。 这些关键字将在下一节中提到。 例如，break, bool。

- Solidity 变量名称不应以数字 (0-9) 开头。 它们必须以字母或下划线字符开头。 例如，123test 是一个无效的变量名，但 _123test 是一个有效的变量名。

- Solidity 变量名称区分大小写。 例如，name 和 Name 是两个不同的变量。



### 1.6 变量作用域

在 1.5 小节中讲到 Solidity 中有三种类型的变量 

- 状态变量
- 本地变量
- 全局变量

本地变量的作用于只存在于方法中，但是状态变量有三种作用域。

- Public 

  公共状态变量可以在内部访问，也可以通过消息访问。 对于公共状态变量，会生成一个自动 getter 函数。

- Internal

  内部状态变量只能从当前合约或从它派生的合约内部访问，而不使用 this。就类似于 Java 里面的 protected

- Private

  私有状态变量只能在当前合约内部访问，它们不是在派生合约中定义的。

- ？External



```solidity
pragma solidity ^0.5.0;
contract C {
   uint public data = 30;
   uint internal iData= 10;
   
   function x() public returns (uint) {
      data = 3; // internal access
      return data;
   }
}
contract Caller {
   C c = new C();
   function f() public view returns (uint) {
      return c.data(); //external access
   }
}
contract D is C {
   function y() public returns (uint) {
      iData = 3; // internal access
      return iData;
   }
   function getResult() public view returns(uint){
      uint a = 1; // local variable
      uint b = 2;
      uint result = a + b;
      return storedData; //access the state variable
   }
}
```

上方 Example 的合约关系为

- 定义了一个 合约 C，并在合约 C 种定义了一个 public 状态变量和一个 interval 状态变量
- 定义了一个合约 Caller，并在内部 New 了合约 C
- 定义了一个合约 D 并继承 C



### 1.7 省略章节

- 循环
- if
- 操作符
- array
- enum

以上内容都比较常规，和平常使用的编程语言，语法差异不大。大家有兴趣可以查查官方文档，这里就不在赘述。



### 1.8 struct

```solidity
struct struct_name { 
   type1 type_name_1;
   type2 type_name_2;
   type3 type_name_3;
}
```

struct 可以理解为多种类型的一个包装，就和包装数据类型是一样的。



**Eample**

```solidity
pragma solidity ^0.5.0;

contract test {
   struct Book { 
      string title;
      string author;
      uint book_id;
   }
   Book book;

   function setBook() public {
      book = Book('Learn Java', 'TP', 1);
   }
   function getBookId() public view returns (uint) {
      return book.book_id;
   }
}
```



### 1.9 Mapping

`mapping(_KeyType => _ValueType)`

- _KeyType: 可以是任何内置类型加上字节和字符串。不允许引用类型或复杂对象。
- _ValueType: 任何类型都可以

可以理解为 Hash 类型

```solidity
pragma solidity ^0.5.0;

contract LedgerBalance {
   mapping(address => uint) public balances;

   function updateBalance(uint newBalance) public {
      balances[msg.sender] = newBalance;
   }
}
contract Updater {
   function updateBalance() public returns (uint) {
      LedgerBalance ledgerBalance = new LedgerBalance();
      ledgerBalance.updateBalance(10);
      return ledgerBalance.balances(address(this));
   }
}
```



[代码风格](https://www.tutorialspoint.com/solidity/solidity_style_guide.htm)

## 02. 函数

### 2.1 语法

#### 基本用法

在 Solidity 中一个函数的基本语法为

```solidity
function (<parameter types>) {internal|external} [pure|constant|view|payable] [returns (<return types>)]{
	//statements
}
```



**Example**

```solidity
pragma solidity ^0.5.0;

contract Test {
   function getResult() public view returns(uint){
      uint a = 1; // local variable
      uint b = 2;
      uint result = a + b;
      return result;
   }
}
```



在 Solidity 中的函数返回值除了常规的 return 的写法之外，也支持像golang 一样在return 中就定义号了返回的变量，不需要手动 return

```solidity
pragma solidity ^0.5.0;

contract Test {
   function getResult() public view returns(uint product, uint sum){
      uint a = 1; // local variable
      uint b = 2;
      product = a * b;
      sum = a + b;
  
      //alternative return statement to return 
      //multiple values
      //return(a*b, a+b);
   }
}
```



#### 进阶

```solidity
pragma solidity ^0.4.16;

contract C {
    // 省略参数名称
    function func(uint k, uint) public pure returns(uint) {
        return k;
    }
}
```

在传入参数中我们可以只定义类型，但是不定义变量, 这样的变量实际还存在与堆栈中，只是不能访问。



#### 解构赋值

#### ![image-20220527113057200](https://raw.githubusercontent.com/xiaoxiunique/picgo/main/image-20220527113057200.png)

```solidity
pragma solidity >0.4.23 <0.5.0;

contract C {
    uint[] data;

    function f() public pure returns (uint, bool, uint) {
        return (7, true, 2);
    }

    function g() public {
        //基于返回的元组来声明变量并赋值
        (uint x, bool b, uint y) = f();
        //交换两个值的通用窍门——但不适用于非值类型的存储 (storage) 变量。
        (x, y) = (y, x);
        //元组的末尾元素可以省略（这也适用于变量声明）。
        (data.length,,) = f(); // 将长度设置为 7
        //省略元组中末尾元素的写法，仅可以在赋值操作的左侧使用，除了这个例外：
        (x,) = (1,);
        //(1,) 是指定单元素元组的唯一方法，因为 (1)
        //相当于 1。
    }
}
```

同事返回多个参数可以通过(var1, var2, var3) 的方式进行返回。 接收参数时，也可以通过同样的方式进行接收

（type var1, type var2, type var3)



### 2.2 modifier

![image-20220527113057200](https://raw.githubusercontent.com/xiaoxiunique/picgo/main/image-20220527113057200.png)

类似于 Java 和 TypeScript 中的注解，可以为函数添加额外的功能。用法如下方所示。

```solidity
pragma solidity ^0.5.0;

contract Owner {
   address owner;
   constructor() public {
      owner = msg.sender;
   }
   modifier onlyOwner {
      require(msg.sender == owner);
      _;
   }
   modifier costs(uint price) {
      if (msg.value >= price) {
         _;
      }
   }
}
contract Register is Owner {
   mapping (address => bool) registeredAddresses;
   uint price;
   constructor(uint initialPrice) public { price = initialPrice; }
   
   function register() public payable costs(price) {
      registeredAddresses[msg.sender] = true;
   }
   function changePrice(uint _price) public onlyOwner {
      price = _price;
   }
}
```



### 2.3 view

没有修改状态变量，就只是存在 读操作

```solidity
pragma solidity ^0.5.0;

contract Test {
   function getResult() public view returns(uint product, uint sum){
      uint a = 1; // local variable
      uint b = 2;
      product = a * b;
      sum = a + b; 
   }
}
```



### 2.4 pure

针对状态变量，即没有读，也没有写。意味着该函数更多的操作时本地变量，或者是局部变量。

```solidity
pragma solidity ^0.5.0;

contract Test {
   function getResult() public pure returns(uint product, uint sum){
      uint a = 1; 
      uint b = 2;
      product = a * b;
      sum = a + b; 
   }
}
```



### 2.5 Fallback Function 

![image-20220527113057200](https://raw.githubusercontent.com/xiaoxiunique/picgo/main/image-20220527113057200.png)

Fallback 在合约中是一个特殊的函数，这个函数没有参数和返回后值，看起来就像下面这个样子。

```solidity
fallback () external {
	// logic
}
```

这个函数有两种应用场景。

**第一种**是如果在客户端调用 合约时，如果调用的方法在合约没有得到对应的匹配。那么就会触发这个方法的调用。

**第二种**是当合约接收到 ETH 时，次方法也会被触发，所以对应 fallback 函数我们必须添加 payable 修饰符，不然在客户端向合约进行转账，则会失败。所以上面的函数正确的写法为

```solidity
fallback () external payable {
	// logic
}
```



### 2.6 函数重载

```solidity
pragma solidity ^0.5.0;

contract Test {
   function getSum(uint a, uint b) public pure returns(uint){      
      return a + b;
   }
   function getSum(uint a, uint b, uint c) public pure returns(uint){      
      return a + b + c;
   }
   function callSumWithTwoArguments() public pure returns(uint){
      return getSum(1,2);
   }
   function callSumWithThreeArguments() public pure returns(uint){
      return getSum(1,2,3);
   }
}
```



### 2.7 内置数学函数

和全局变量一样，可以直接使用的函数。

- `addmod(uint x, uint y, uint k) returns (uint)`:

  计算 `(x + y) % k`，加法会在任意精度下执行，并且加法的结果即使超过 `2**256` 也不会被截取。从 0.5.0 版本的编译器开始会加入对 `k != 0` 的校验（assert）。
- `mulmod(uint x, uint y, uint k) returns (uint)`:

  计算 `(x * y) % k`，乘法会在任意精度下执行，并且乘法的结果即使超过 `2**256` 也不会被截取。从 0.5.0 版本的编译器开始会加入对 `k != 0` 的校验（assert）。

- `keccak256(...) returns (bytes32)`:

  计算 [(tightly packed) arguments](https://solidity-cn.readthedocs.io/zh/develop/abi-spec.html#abi-packed-mode) 的 Ethereum-SHA-3 （Keccak-256）哈希。

- `sha256(...) returns (bytes32)`:

  计算 [(tightly packed) arguments](https://solidity-cn.readthedocs.io/zh/develop/abi-spec.html#abi-packed-mode) 的 SHA-256 哈希。

- `sha3(...) returns (bytes32)`:

  等价于 keccak256。

- `ripemd160(...) returns (bytes20)`:

  计算 [(tightly packed) arguments](https://solidity-cn.readthedocs.io/zh/develop/abi-spec.html#abi-packed-mode) 的 RIPEMD-160 哈希。

- `ecrecover(bytes32 hash, uint8 v, bytes32 r, bytes32 s) returns (address)` ：

  利用椭圆曲线签名恢复与公钥相关的地址，错误返回零值。 ([example usage](https://ethereum.stackexchange.com/q/1777/222))



```solidity
pragma solidity ^0.5.0;

contract Test {   
   function callAddMod() public pure returns(uint){
      return addmod(4, 5, 3);
   }
   function callMulMod() public pure returns(uint){
      return mulmod(4, 5, 3);
   }
}
```



内置的数学函数也跟全局变量一样。



### 2.8 Cryptographic Functions

- keccak256
- ripemd160
- sha256
- ecrecover



```solidity
pragma solidity ^0.5.0;

contract Test {   
   function callKeccak256() public pure returns(bytes32 result){
      return keccak256("ABC");
   }  
}
```



## 03. 高级

Solidity 中的契约类似于 C++ 中的类。合同具有以下属性。

- **Constructor** - 使用构造函数关键字声明的特殊函数，每个合约执行一次，并在创建合约时调用。
- **状态变量**- 每个合约的变量来存储合约的状态。
- **Functions** - 每个合约的函数，可以修改状态变量以改变合约的状态。



### 3.1 可见性量词

![image-20220527113057200](https://raw.githubusercontent.com/xiaoxiunique/picgo/main/image-20220527113057200.png)

以下是合约功能/状态变量的各种可见性量词。

- **external** - 外部函数旨在由其他合约调用。它们不能用于内部呼叫。要在合约中调用外部函数 this.function_name() 调用是必需的。状态变量不能标记为外部。
- **public** - 公共函数/变量可以在外部和内部使用。对于公共状态变量，Solidity 会自动创建一个 getter 函数。
- **internal** - 内部函数/变量只能在内部或派生合同中使用。
- **private** - 私有函数/变量只能在内部使用，甚至不能由派生合约使用。



```solidity
pragma solidity ^0.5.0;

contract C {
   //private state variable
   uint private data;
   
   //public state variable
   uint public info;

   //constructor
   constructor() public {
      info = 10;
   }
   //private function
   function increment(uint a) private pure returns(uint) { return a + 1; }
   
   //public function
   function updateData(uint a) public { data = a; }
   function getData() public view returns(uint) { return data; }
   function compute(uint a, uint b) internal pure returns (uint) { return a + b; }
}
//External Contract
contract D {
   function readData() public returns(uint) {
      C c = new C();
      c.updateData(7);         
      return c.getData();
   }
}
//Derived Contract
contract E is C {
   uint private result;
   C private c;
   
   constructor() public {
      c = new C();
   }  
   function getComputedResult() public {      
      result = compute(3, 5); 
   }
   function getResult() public view returns(uint) { return result; }
   function getData() public view returns(uint) { return c.info(); }
}
```



### 3.2 继承

继承是扩展合约功能的一种方式。Solidity 支持单继承和多继承。以下是主要亮点。

- 派生合约可以访问所有非私有成员，包括内部方法和状态变量。但不允许使用它。
- 如果函数签名保持不变，则允许函数覆盖。如果输出参数不同，编译将失败。
- 我们可以使用 super 关键字或使用超级合约名称来调用超级合约的函数。
- 在多重继承的情况下，使用 super 的函数调用优先于大多数派生合约。



```solidity
pragma solidity ^0.5.0;

contract C {
   //private state variable
   uint private data;
   
   //public state variable
   uint public info;

   //constructor
   constructor() public {
      info = 10;
   }
   //private function
   function increment(uint a) private pure returns(uint) { return a + 1; }
   
   //public function
   function updateData(uint a) public { data = a; }
   function getData() public view returns(uint) { return data; }
   function compute(uint a, uint b) internal pure returns (uint) { return a + b; }
}
//Derived Contract
contract E is C {
   uint private result;
   C private c;
   constructor() public {
      c = new C();
   }  
   function getComputedResult() public {      
      result = compute(3, 5); 
   }
   function getResult() public view returns(uint) { return result; }
   function getData() public view returns(uint) { return c.info(); }
}
```



### 3.3 构造函数

构造函数是使用**构造函数**关键字声明的特殊函数。它是一个可选函数，用于初始化合约的状态变量。以下是构造函数的主要特征。

- 一个合约只能有一个构造函数。
- 构造函数代码在创建合约时执行一次，用于初始化合约状态。
- 在执行构造函数代码后，最终代码将部署到区块链。该代码包括公共函数和可通过公共函数访问的代码。构造函数代码或仅由构造函数使用的任何内部方法不包含在最终代码中。
- 构造函数可以是公共的或内部的。
- 内部构造函数将合约标记为抽象的。
- 如果未定义构造函数，则合约中存在默认构造函数。



```solidity
pragma solidity ^0.5.0;

contract Test {
   constructor() public {}
}
```

- 如果基础合约有带参数的构造函数，则每个派生合约都必须传递它们。
- 可以使用以下方式直接初始化基本构造函数 -

```solidity
pragma solidity ^0.5.0;

contract Base {
   uint data;
   constructor(uint _data) public {
      data = _data;   
   }
}
contract Derived is Base (5) {
   constructor() public {}
}
```



### 3.4 抽象合约

抽象合约是一种包含至少一个功能而没有任何实现的合约。这样的合同被用作基础合同。一般来说，抽象合约既包含实现的功能，也包含抽象的功能。派生合约将实现抽象功能并在需要时使用现有功能。

如果派生合约未实现抽象功能，则该派生合约将被标记为抽象。

```solidity
pragma solidity ^0.5.0;

contract Calculator {
   function getResult() public view returns(uint);
}
contract Test is Calculator {
   function getResult() public view returns(uint) {
      uint a = 1;
      uint b = 2;
      uint result = a + b;
      return result;
   }
}
```



### 3.5 接口

接口类似于抽象合约，是使用**interface**关键字创建的。以下是接口的主要特征。

- 接口不能有任何功能与实现。
- 接口的函数只能是外部类型。
- 接口不能有构造函数。
- 接口不能有状态变量。
- 接口可以有枚举，可以使用接口名称点符号访问的结构。



```solidity
pragma solidity ^0.5.0;

interface Calculator {
   function getResult() external view returns(uint);
}
contract Test is Calculator {
   constructor() public {}
   function getResult() external view returns(uint){
      uint a = 1; 
      uint b = 2;
      uint result = a + b;
      return result;
   }
}
```



### 3.6 Library

![image-20220527113057200](https://raw.githubusercontent.com/xiaoxiunique/picgo/main/image-20220527113057200.png)

库类似于合同，但主要用于重用。库包含其他合约可以调用的函数。Solidity 对库的使用有一定的限制。以下是 Solidity 库的主要特征。

- 如果库函数不修改状态，可以直接调用。这意味着只能从库外部调用纯函数或视图函数。
- 库不能被销毁，因为它被认为是无状态的。
- 库不能有状态变量。
- 库不能继承任何元素。
- 不能继承库。



```solidity
pragma solidity ^0.5.0;

library Search {
   function indexOf(uint[] storage self, uint value) public view returns (uint) {
      for (uint i = 0; i < self.length; i++) if (self[i] == value) return i;
      return uint(-1);
   }
}
contract Test {
   uint[] data;
   constructor() public {
      data.push(1);
      data.push(2);
      data.push(3);
      data.push(4);
      data.push(5);
   }
   function isValuePresent() external view returns(uint){
      uint value = 4;
      
      //search if value is present in the array using Library function
      uint index = Search.indexOf(data, value);
      return index;
   }
}
```



### 3.7 assembly

![image-20220527113057200](https://raw.githubusercontent.com/xiaoxiunique/picgo/main/image-20220527113057200.png)

Solidity 提供了使用汇编语言在 Solidity 源代码中编写内联汇编的选项。我们还可以编写一个独立的汇编代码，然后将其转换为字节码。Standalone Assembly 是 Solidity 编译器的中间语言，它将 Solidity 代码转换为 Standalone Assembly，然后再转换为字节码。我们可以使用内联汇编中使用的相同语言在独立程序集中编写代码。

```solidity
pragma solidity ^0.5.0;

library Sum {   
   function sumUsingInlineAssembly(uint[] memory _data) public pure returns (uint o_sum) {
      for (uint i = 0; i < _data.length; ++i) {
         assembly {
            o_sum := add(o_sum, mload(add(add(_data, 0x20), mul(i, 0x20))))
         }
      }
   }
}
contract Test {
   uint[] data;
   
   constructor() public {
      data.push(1);
      data.push(2);
      data.push(3);
      data.push(4);
      data.push(5);
   }
   function sum() external view returns(uint){      
      return Sum.sumUsingInlineAssembly(data);
   }
}
```



![image-20220526101600098](https://raw.githubusercontent.com/xiaoxiunique/picgo/main/image-20220526101600098.png)

上图中 add, mload, mul 就是汇编指令。



### 3.8 事件

事件是合约的可继承成员。发出一个事件，它存储在事务日志中传递的参数。这些日志存储在区块链上，并且可以使用合约的地址访问，直到合约出现在区块链上。生成的事件不能从合约内部访问，甚至是创建和发出它们的那个。

可以使用 event 关键字声明事件。

```solidity
//Declare an Event
event Deposit(address indexed _from, bytes32 indexed _id, uint _value);

//Emit an event
emit Deposit(msg.sender, _id, msg.value);
```



**Example**

```solidity
pragma solidity ^0.5.0;

contract Test {
   event Deposit(address indexed _from, bytes32 indexed _id, uint _value);
   function deposit(bytes32 _id) public payable {      
      emit Deposit(msg.sender, _id, msg.value);
   }
}
```



### 3.9 错误处理

Solidity 提供了各种错误处理功能。通常，当发生错误时，状态会恢复到其原始状态。其他检查是为了防止未经授权的代码访问。以下是错误处理中使用的一些重要方法 -

- **assert(bool condition)** - 如果不满足条件，此方法调用会导致操作码无效，并且对状态所做的任何更改都会被还原。此方法用于内部错误。
- **require(bool condition)** - 如果条件不满足，此方法调用将恢复到原始状态。- 此方法用于输入或外部组件中的错误。
- **require(bool condition, string memory message)** - 如果条件不满足，此方法调用将恢复到原始状态。- 此方法用于输入或外部组件中的错误。它提供了一个选项来提供自定义消息。
- **revert()** - 此方法中止执行并恢复对状态所做的任何更改。
- **revert(string memory reason)** - 此方法中止执行并恢复对状态所做的任何更改。它提供了一个选项来提供自定义消息。

```solidity
pragma solidity ^0.5.0;

contract Vendor {
    address public seller;

    modifier onlySeller() {
        require(
            msg.sender == seller,
            "Only seller can call this."
        );
        _;
    }

    function sell(uint amount) public payable onlySeller {
        if (amount > msg.value / 2 ether)
            revert("Not enough Ether provided.");
        // Perform the sell operation.
    }
}
```



## 04. other

[中文文档](https://solidity-cn.readthedocs.io/zh/develop/types.html#address)



### 4.1 Member Or Storage

![image-20220527113057200](https://raw.githubusercontent.com/xiaoxiunique/picgo/main/image-20220527113057200.png)

在 Solidity 中变量的存储会有两种形式

一种是 Storeage 这种类型的数据是存储在 区块链上的数据。

还有一种是 Memory 类型的数据，只在运行时内存中存在，当合约执行完毕之后 该变量会被消费。



除了上面的区别之外，Storage 与 Memory 在变量赋值时引用数据类型也有细微差别。Storage 更像我们常说的 **浅拷贝** 变量赋值时只是保存了引用地址。Memory 更像 深拷贝完成 Copy 了一份内存地址。



**Example**

```solidity
pragma solidity ^0.4.17;

// Creating a contract
contract helloGeeks
{
  // Initialising array numbers
  int[] public numbers;

  // Function to insert values
  // in the array numbers
  function Numbers() external 
  {
    numbers.push(1);
    numbers.push(2);

    //Creating a new instance
    int[] storage myArray = numbers;

    // Adding value to the
    // first index of the new Instance
    myArray[0] = 0;
  }
}

```

![image-20220525122053045](https://raw.githubusercontent.com/xiaoxiunique/picgo/main/image-20220525122053045.png)

直接将上面的代码放在 Remix 中执行，可以发现 numbers 的结果不是 1,2 而是 0,2 。还记得我们上面讲过 Storage 其实类似于是一种 **浅拷贝**。

![关键字存储](https://raw.githubusercontent.com/xiaoxiunique/picgo/main/Screenshot20200805at54037PM.png)

所以上面通过 storge 的方式创建的变量 myArray, 实际上他和 numbers 指向还是同一片内存地址。



```solidity
pragma solidity ^0.4.17;

// Creating a contract
contract helloGeeks
{
  // Initialising array numbers
  int[] public numbers;

  // Function to insert
  // values in the array
  // numbers
  function Numbers() public
  {
    numbers.push(1);
    numbers.push(2);

    //creating a new instance
    int[] memory myArray = numbers;

    // Adding value to the first
    // index of the array myArray
    myArray[0] = 0;
  }
}

```

当我们在上面的代码中检索数组 numbers 的值时，注意数组的输出是 [1,2]。在这种情况下，更改 myArray 的值不会影响数组 numbers 中的值。 



因为现在 myArray 变量通过 memory 的方式定义变量，相当于是深拷贝 会在内存中开辟出一块新的内存地址进行修改，所以不会影响到原变量内容。

![关键词记忆](https://raw.githubusercontent.com/xiaoxiunique/picgo/main/Screenshot20200805at54148PM.png)





### 4.2 Payable

![image-20220527113057200](https://raw.githubusercontent.com/xiaoxiunique/picgo/main/image-20220527113057200.png)

payable 修饰符可以用在方法上也可以用在 变量上，如果用在方法上则表明 我们可以通过在调用这个方法的时候向这个合约里面存储 ETH，当然也可以通过合约的提现功能将合约里面的资金体现出来。

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Payable {
    // Payable address can receive Ether
    address payable public owner;

    // Payable constructor can receive Ether
    constructor() payable {
        owner = payable(msg.sender);
    }

    // Function to deposit Ether into this contract.
    // Call this function along with some Ether.
    // The balance of this contract will be automatically updated.
    function deposit() public payable {}

    // Call this function along with some Ether.
    // The function will throw an error since this function is not payable.
    function notPayable() public {}

    // Function to withdraw all Ether from this contract.
    function withdraw() public {
        // get the amount of Ether stored in this contract
        uint amount = address(this).balance;

        // send all Ether to owner
        // Owner can receive Ether since the address of owner is payable
        (bool success, ) = owner.call{value: amount}("");
        require(success, "Failed to send Ether");
    }

    // Function to transfer Ether from this contract to address from input
    function transfer(address payable _to, uint _amount) public {
        // Note that "to" is declared as payable
        (bool success, ) = _to.call{value: _amount}("");
        require(success, "Failed to send Ether");
    }
}

```

在上面的合约中，我们有一个 deposit 方法，这个方式是通过 payable 进行修饰的，**那么意味着我们可以通过 deposit 方法让用户将 ETH 存储在 合约中。**



需要注意的是，上面只是让这个方法支持了接受 ETH 的能力，在这之上还需要将合约的进行 payble 修饰，修饰完成之后才可具备接收的能力。
```solidity
// Payable address can receive Ether
address payable public owner;

// Payable constructor can receive Ether
constructor() payable {
	owner = payable(msg.sender);
}
```



**客户端代码**: HardHat 测试用例

```solidity
async function main() {
  const Payable = await ethers.getContractFactory("PayableTest");
  const payable = await Payable.deploy();

  const r = await payable.deposit({ value: ethers.utils.parseEther("1.0") });
  console.log(r);

  const balance = await payable.balance();
  console.info("balance", balance);

  return "success";
}
```

上方为客户端在调用合约时进行存储的逻辑，在调用 payable 修饰的方法时，我们可以进行额外的 value 添加.

`payable.deposit({ value: ethers.utils.parseEther("1.0") })`  这样就将自己账户的钱转入到 合约中。

> 正常来说，其实所有的方法都支持传递 value 参数，但是如果该方法没有被标记为 payable 那么，如果客户端传递来 value 就会抛出 异常。



然后我们在进行账户 balance 查询，得到以下结果

```shell
balance BigNumber { value: "1000000000000000000" }
```

说明我们存储成功, 然后我们在可以通过上面的 withdraw 方法，将此账户在合约中存储的钱进行取出. 上面就是 payable 这个功能的整体代码。



### 4.3 Data Location

![image-20220527113057200](https://raw.githubusercontent.com/xiaoxiunique/picgo/main/image-20220527113057200.png)

在 Solidity ，默认我们需要指定返回数据的 Data location 就是数据位置。因为程序全都在链上运行，所以对于数据的存储位置必须格外小心注意。在 Solidity

 中规定了 3 种数据位置

- Storage

  Storage 修饰的变量会直接写入到区块链中，链上所有的东西都留在那里。持久化存储。

  因此，您可以随时访问存储变量。您可以修改它们的值，但它们的位置是永久的。每个更改都在区块链上注册。

- Memory

  Memory 修饰的变量只存在于内容中，他是临时的。memory 变量只能在方法内访问，存在的目的只是为了方便计算

- Callable

  Callable 修饰的变量和 Memory 差不多，但是 callable 修饰的变量只能被读取，不允许被修改

![image-20220527095532955](https://raw.githubusercontent.com/xiaoxiunique/picgo/main/image-20220527095532955.png)

如上图所示，我们在 [Remix](https://remix.ethereum.org/) 编辑其中，写入一个合约方法，定义了两个参数类型，一个为 calldata 类型，一个为 memory 类型，在下方分别对变量进行修改。

在编辑器中我们就能看到错误提示，因为我们正在修改一个修饰为 calldata 的变量，次变量是只读的 不可修改。

![image-20220527095908917](https://raw.githubusercontent.com/xiaoxiunique/picgo/main/image-20220527095908917.png)

如果我们只想返回数组，直接这样写也是不可以的。在上面我们耶进行了说明，需要对数据添加 Data Location 

```solidity
function testReturnStr() external pure returns(string memory) {
	return "Hello Solidity";
}
```



### 4.4 Remix 功能概述

![image-20220527113057200](https://raw.githubusercontent.com/xiaoxiunique/picgo/main/image-20220527113057200.png)

在尝试过各种花里胡哨的 Solidity 编写环境倒腾之后，最后还是感觉 Remix 最好用，体验最好，用起来最丝滑。

so，这里对 Remix 的功能做一下简单的概述，避免走弯路。

![image-20220527101431427](https://raw.githubusercontent.com/xiaoxiunique/picgo/main/image-20220527101431427.png)

从整体上看 Remix Editor 就像一个线上的 VSCode，只是它有比较多自己的定制功能，加入了 Solidity 语法检测，编译，与 DApp 对接上链，可以比较方便的进行 本地 和 链上测试。

![image-20220527102438773](https://raw.githubusercontent.com/xiaoxiunique/picgo/main/image-20220527102438773.png)

左侧菜单栏功能从上到下依次为

- File explorers

  编写合约代码主要在这里完成

- Search

- Compile

  编写完成后需要在这里进行 编译

- Deployment

  可以在 Deploy 中选择本地部署已经上链部署

- Debugger

我们用的比较多的是 File explorers， Compile，Deployment. 



![image-20220527103529221](https://raw.githubusercontent.com/xiaoxiunique/picgo/main/image-20220527103529221.png)

在编写完 Sol 合约代码时，需要先进行编译，编译功能区主要的功能有

- 选择编译器版本
- 选择编程语言
- 选择 EVM 版本
- 是否自动编译
- 是否开启自动优化
- 是否隐藏代码警告
- 手动编译代码
- 。。。 



 在完成合约编写后，我们就可以切换到 deploy 菜单进行合约部署。

![image-20220527104632350](https://raw.githubusercontent.com/xiaoxiunique/picgo/main/image-20220527104632350.png)

 



## 5. 合约分析

### 5.1 股权系统

#### **合约功能**

  * 收集投资者资金（以太币）并分配股份
  * 跟踪投资者对股票的贡献
  * 允许投资者转让股份
  * 允许创建和投票的投资提案
  * 执行成功的投资建议（即汇款）


#### 源码

```solidity
contract DAO {
  // 提议
  struct Proposal {
    uint id;
    string name;
    uint amount;
    address payable recipient;
    uint votes;
    uint end;
    bool executed;
  }

  // 投资者
  mapping(address => bool) public investors;

  // 股份
  mapping(address => uint) public shares;

  // 投票
  mapping(address => mapping(uint => bool)) public votes;

  // 提案
  mapping(uint => Proposal) public proposals;

  // 总共股份
  uint public totalShares;

  // 可用资金
  uint public availableFunds;

  // 出资结束时间
  uint public contributionEnd;

  // 下一次提案 ID
  uint public nextProposalId;

  // 投票时间
  uint public voteTime;

  // 法定人数
  uint public quorum;

  // 管理员
  address public admin;

  constructor(
    uint contributionTime, 
    uint _voteTime,
    uint _quorum) 
    public {
    require(_quorum > 0 && _quorum < 100, 'quorum must be between 0 and 100');
    contributionEnd = now + contributionTime;
    voteTime = _voteTime;
    quorum = _quorum;
    admin = msg.sender;
  }

  // 贡献
  function contribute() payable external {
    require(now < contributionEnd, 'cannot contribute after contributionEnd');
    investors[msg.sender] = true;
    shares[msg.sender] += msg.value;
    totalShares += msg.value;
    availableFunds += msg.value;
  }

  // 赎回股份
  function redeemShare(uint amount) external {
    require(shares[msg.sender] >= amount, 'not enough shares');
    require(availableFunds >= amount, 'not enough available funds');
    shares[msg.sender] -= amount;
    availableFunds -= amount;
    msg.sender.transfer(amount);
  }
    

  // 转移股份
  function transferShare(uint amount, address to) external {
    require(shares[msg.sender] >= amount, 'not enough shares');
    shares[msg.sender] -= amount;
    shares[to] += amount;
    investors[to] = true;
  }

  // 创建提议
  function createProposal(
    string memory name,
    uint amount,
    address payable recipient) 
    public 
    onlyInvestors() {
    require(availableFunds >= amount, 'amount too big');
    proposals[nextProposalId] = Proposal(
      nextProposalId,
      name,
      amount,
      recipient,
      0,
      now + voteTime,
      false
    );
    availableFunds -= amount;
    nextProposalId++;
  }

  // 投票
  function vote(uint proposalId) external onlyInvestors() {
    Proposal storage proposal = proposals[proposalId];
    require(votes[msg.sender][proposalId] == false, 'investor can only vote once for a proposal');
    require(now < proposal.end, 'can only vote until proposal end date');
    votes[msg.sender][proposalId] = true;
    proposal.votes += shares[msg.sender];
  }

  // 执行提议
  function executeProposal(uint proposalId) external onlyAdmin() {
    Proposal storage proposal = proposals[proposalId];
    require(now >= proposal.end, 'cannot execute proposal before end date');
    require(proposal.executed == false, 'cannot execute proposal already executed');
    require((proposal.votes / totalShares) * 100 >= quorum, 'cannot execute proposal with votes # below quorum');
    _transferEther(proposal.amount, proposal.recipient);
  }

  // 提现
  function withdrawEther(uint amount, address payable to) external onlyAdmin() {
    _transferEther(amount, to);
  }
  
  function _transferEther(uint amount, address payable to) internal {
    require(amount <= availableFunds, 'not enough availableFunds');
    availableFunds -= amount;
    to.transfer(amount);
  }

  //For ether returns of proposal investments
  function() payable external {
    availableFunds += msg.value;
  }

  modifier onlyInvestors() {
    require(investors[msg.sender] == true, 'only investors');
    _;
  }

  modifier onlyAdmin() {
    require(msg.sender == admin, 'only admin');
    _;
  }
}
```



#### 合约结构

整个合约实现的功能为

>   * 收集投资者资金（以太币）并分配股份
>   * 跟踪投资者对股票的贡献
>   * 允许投资者转让股份
>   * 允许创建和投票的投资提案
>   * 执行成功的投资建议（即汇款）

为了更加方便的理解这个合约，我们可以将合约拆分两个模块

![image-20220526113334113](https://raw.githubusercontent.com/xiaoxiunique/picgo/main/image-20220526113334113.png) 

第一个模块为 股权分配主要的核心功能为

- 收集投资者资金（以太币）并分配股份
- 跟踪投资者对股票的贡献
- 允许投资者转让, 赎回 股份



（收集投资者资金（以太币）并分配股份）核心代码

```solidity
  function contribute() payable external {
    // 判断是否已经到达了出资结束时间，如果已经过了投资时间，则不在允许往里面转入 资金
    require(now < contributionEnd, 'cannot contribute after contributionEnd');
    // 将当前用户标记为 投资者
    investors[msg.sender] = true;
    // 记录当前用户存入的总金额
    shares[msg.sender] += msg.value;
    // 记录收到的总数
    totalShares += msg.value;
    // 记录目前还可以使用的月
    availableFunds += msg.value;
  }
```



赎回股份核心代码

```solidity
  // 赎回股份
  function redeemShare(uint amount) external {
  	// 是否有足够的余额
    require(shares[msg.sender] >= amount, 'not enough shares');
    // 合约是否还有这么多可用余额【因为这个钱会因为投资决议而变少】
    require(availableFunds >= amount, 'not enough available funds');
    // 扣减账户余额
    shares[msg.sender] -= amount;
    // 扣减总账户余额
    availableFunds -= amount;
    // 进行转账
    msg.sender.transfer(amount);
  }
```

> ? 转账失败会怎么处理
>
> 投资后的余额怎么处理



转移股份

```solidity

  // 转移股份
  function transferShare(uint amount, address to) external {
  	// 检查金额，注意，这里只是转移的是股份，并不是钱
    require(shares[msg.sender] >= amount, 'not enough shares');
    // 扣减自己相应的股份
    shares[msg.sender] -= amount;
    // 转移后用户进行对应股份的添加
    shares[to] += amount;
    // 让对方成为投资者
    investors[to] = true;
  }
```



![image-20220526115527943](https://raw.githubusercontent.com/xiaoxiunique/picgo/main/image-20220526115527943.png)

接下来是投票模块。



```solidity
  // 创建提议
  function createProposal(
  	// 此次决议的名字
    string memory name,
    // 投资金额
    uint amount,
    // 接收地址
    address payable recipient) 
    public 
    // 只有被标记了投资身份的用户才可以执行此方法
    onlyInvestors() {
    // 余额是否充足
    require(availableFunds >= amount, 'amount too big');
    // 创建提议详情
    proposals[nextProposalId] = Proposal(
      nextProposalId,
      name,
      amount,
      recipient,
      0,
      now + voteTime,
      false
    );
    // 扣减相应的余额
    availableFunds -= amount;
    // 下次提议 Id
    nextProposalId++;
  }
```



投票

```solidity
  // 为 proposalId 提议投标，需限制有资格用户才可参加
  function vote(uint proposalId) external onlyInvestors() {
    // 使用 storage 的方式拿出 proposalId 提议。 这里没有判断空，可能会出现空指针错误。
    Proposal storage proposal = proposals[proposalId];
    // 判断是否已经投过票了
    require(votes[msg.sender][proposalId] == false, 'investor can only vote once for a proposal');
    // 投票时间是否结束
    require(now < proposal.end, 'can only vote until proposal end date');
    // 标记当前用户已经投票
    votes[msg.sender][proposalId] = true;
    // 记录此次投票的总股份
    proposal.votes += shares[msg.sender];
  }
```



```solidity

  // 执行提议
  function executeProposal(uint proposalId) external onlyAdmin() {
  // 使用 storage 的方式拿出 proposalId 提议。 这里没有判断空，可能会出现空指针错误。
    Proposal storage proposal = proposals[proposalId];
    // 是否已经过了结束时间
    require(now >= proposal.end, 'cannot execute proposal before end date');
    // 是否已经执行
    require(proposal.executed == false, 'cannot execute proposal already executed');
    // 判断是否操作规定的标准
    require((proposal.votes / totalShares) * 100 >= quorum, 'cannot execute proposal with votes # below quorum');
    // 转移金额
    _transferEther(proposal.amount, proposal.recipient);
  }

  function _transferEther(uint amount, address payable to) internal {
    require(amount <= availableFunds, 'not enough availableFunds');
    availableFunds -= amount;
    to.transfer(amount);
  }
```



#### 总结

利用合约实现这样的股权管理和投票还是比较新奇，而且比较符合去中心化的整体设定。但总的来说，这个协议目前还只能说是一个构想，因为这里还有很多边界问题没哟考虑到，只是实现了一个基本的模型。个人看来还在理论阶段。



### 5.2 石头剪刀布

![image-20220527100937093](https://raw.githubusercontent.com/xiaoxiunique/picgo/main/image-20220527100937093.png)

```solidity
pragma solidity ^0.5.4;

// 剪刀石头布
contract RockPaperScissors {
  
  // 状态
  enum State {
    CREATED,
    JOINED,
    COMMITED,
    REVEALED
  }  

  // 游戏场次
  struct Game {
    uint id;
    uint bet;
    address payable[] players;
    State state;
  } 

  // 手势
  struct Move {
    bytes32 hash;
    uint value;
  }

  // 游戏
  mapping(uint => Game) public games;

  // moves
  mapping(uint => mapping(address => Move)) public moves;

  mapping(uint => uint) public winningMoves;

  // game id
  uint public gameId;
  
  constructor() public {
    winningMoves[1] = 3;
    winningMoves[2] = 1;
    winningMoves[3] = 2;
  }
  
  // 创建游戏
  function createGame(address payable participant) external payable {
    require(msg.value > 0, 'have to send some ether');
    address payable[] memory players = new address payable[](2);
    players[0] = msg.sender;
    players[1] = participant;

    games[gameId] = Game(
      gameId, 
      msg.value,
      players,
      State.CREATED
    );
    gameId++;
  }
  
  // 加入游戏
  function joinGame(uint _gameId) external payable {
    Game storage game = games[_gameId];
    require(msg.sender == game.players[1], 'sender must be second player'); //also throw if game does not exist
    require(msg.value >= game.bet, 'not enough ether sent');
    require(game.state == State.CREATED, 'game must be in CREATED state');
    if(msg.value > game.bet) {
      msg.sender.transfer(msg.value - game.bet);
    }
    game.state = State.JOINED;
  }
  
  // 提交手势
  function commitMove(uint _gameId, uint moveId, uint salt) external {
    // 选择当前游戏【但是没有判断空】
    Game storage game = games[_gameId];
    // 当前状态是否 OK，必须为代加入状态
    require(game.state == State.JOINED, 'game must be in JOINED state');
    // 确实当前是否为游戏的参与者
    require(msg.sender == game.players[0] || msg.sender == game.players[1], 'can only be called by one of players');
    // 当前用户是否已经出国 手势 
    require(moves[_gameId][msg.sender].hash == 0, 'move already made'); // if no move yet, it will default to 0
    // 确认手势是否正确
    require(moveId == 1 || moveId == 2 || moveId == 3, 'move needs to be 1, 2 or 3');
    // unknown
    moves[_gameId][msg.sender] = Move(keccak256(abi.encodePacked(moveId, salt)), 0);

    // 如果两个人都完成了，就将状态修改为完成状态
    if(moves[_gameId][game.players[0]].hash != 0 
      && moves[_gameId][game.players[1]].hash != 0) {
      game.state = State.COMMITED;    
    }
  }
  
  // 获取结果
  function revealMove(uint _gameId, uint moveId, uint salt) external {
    //获取游戏
    Game storage game = games[_gameId];
    // 第一个用户 手势
    Move storage move1 = moves[_gameId][game.players[0]];
    // 第二个用户 手势
    Move storage move2 = moves[_gameId][game.players[1]];
    // 记录消息发送者
    Move storage moveSender = moves[_gameId][msg.sender];
    // 检查状态必须为完成状态
    require(game.state == State.COMMITED, 'game must be in COMMITED state');
    // 获取结果必须为参加的两人中的一个
    require(msg.sender == game.players[0] || msg.sender == game.players[1], 'can only be called by one of players');
    
    require(moveSender.hash == keccak256(abi.encodePacked(moveId, salt)), 'moveId does not match commitment');
    // 设置 moveId
    moveSender.value = moveId;
    if(move1.value != 0 
      && move2.value != 0) {
          // 如果值都一样，那么就是平局
        if(move1.value == move2.value) {
          game.players[0].transfer(game.bet);
          game.players[1].transfer(game.bet);
          game.state = State.REVEALED;
          return;
        }
        address payable winner;
        // 确认赢家
        winner = winningMoves[move1.value] == move2.value ? game.players[0] : game.players[1];
        // 转账
        winner.transfer(2* game.bet);
        // 修改状态
        game.state = State.REVEALED;
    }  
  }
}

```





## 06.其他

### 6.1 知名开源项目

#### [OpenZeppelin](https://github.com/OpenZeppelin)

![GitHub - OpenZeppelin/openzeppelin-contracts: OpenZeppelin Contracts is a library for secure smart contract development.](https://raw.githubusercontent.com/xiaoxiunique/picgo/main/40.png)

#### Solmate

![GitHub - Rari-Capital/solmate: Modern, opinionated, and gas optimized building blocks for smart contract development.](https://raw.githubusercontent.com/xiaoxiunique/picgo/main/40-20220526153938377.png)

[Solmate](https://github.com/Rari-Capital/solmate) 也提供了一系列对应的 EIP 实现，同时，他们更注重合约的运行效率，优化了执行中的 gas 费用，并且每个合约依赖更少，阅读起来更加简单。





#### Erc721A

![GitHub - chiru-labs/ERC721A: https://ERC721A.org](https://raw.githubusercontent.com/xiaoxiunique/picgo/main/40-20220526154024396.png)

[ERC721A](https://www.erc721a.org/) 是知名 NFT 项目 [Azuki](https://www.azuki.com/zh) 发布的 ERC721 改善版本，通过特定的位操作，他们实现了内存占用的优化，带来了批量 mint 低 Gas 费用的优势。如果你的项目涉及到大量 NFT 的铸造，可以参考它的合约代码来进行实现。



#### Uniswap

![GitHub - Uniswap/v3-core: 🦄 🦄 🦄 Core smart contracts of Uniswap v3](https://raw.githubusercontent.com/xiaoxiunique/picgo/main/40-20220526154158868.png)

[Uniswap](https://uniswap.org/) 是世界上最大的 DEX，他们的合约实现的非常优秀，无论你是否有 DeFi 方面的需求，我都建议你完整阅读他们的合约代码。