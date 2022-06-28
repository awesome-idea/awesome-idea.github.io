# Candy Machine V2 总结

[Official Docs](https://docs.metaplex.com/candy-machine-v2/introduction)

Candy Machine V2 可以用来在 Solana 链上发售 NFT。在最新的版本中可以在 Candy Machine 中设置白名单，可以让白名单用户提前进行 Mint。

也可以设置 Captcha 人机验证功能，用于放置大量 Bot 进行 Mint。



> 最近公司的产品用到了 CandyMachineV2，所以记录一下。



## 环境准备

[Candy Machine v2 - [getting started]](https://docs.metaplex.com/candy-machine-v2/getting-started)

环境的安装直接看官方文档就可以了主要需要一下几个东西

- git 
- node
- yarn
- ts-node



```shell
brew install pkg-config cairo pango libpng jpeg giflib librsvg
```

Mac 上还需要安装上述依赖。直接安装即可。



## 安装依赖

安装项目依赖

```shell
git clone https://github.com/metaplex-foundation/metaplex.git ~/metaplex

yarn install --cwd ~/metaplex/js/

ts-node ~/metaplex/js/packages/cli/src/candy-machine-v2-cli.ts --version
```



安装 Solana 相关工具 

[Solana Tool Suite](https://docs.solana.com/cli/install-solana-cli-tools)

```shell
sh -c "$(curl -sSfL https://release.solana.com/v1.10.28/install)"
```



## 配置 Solana Cli

在我们安装 Solana 客户端工具之后就可以对相应的工具进行配置。

```shell
# 查看版本
solana --version

# 当前钱包地址
solana address

# 当前钱包余额
solana balance
```



配置测试链

```shell
# 生成一个用户测试链的钱包
solana-keygen new --outfile ~/.config/solana/devnet.json

# 配置当前 solana cli 工具使用的钱包
solana config set --keypair ~/.config/solana/devnet.json

# 配置测试 metaplex 地址
solana config set --url https://metaplex.devnet.rpcpool.com/

# 查看配置
solana config get

# 空投
solana airdrop 2
```



## 前置准备

创建 Candy Machine V2  总共需要一下几个文件

**config.json**

主要用户配置 candy machine 的功能

**assets**

 这里配置我们的图片和 metadata



```js
const base58 = require('bs58')
const fs = require('fs')
const path = require('path')
const child_process = require('child_process')
const { Keypair } = require('@solana/web3.js')

const privateKey =
  '3tgVa8MrriXiBPusVgQZsUJv1K5pzXZVuJAxKtxw2ENMkxhu7SafMVhTB4iSd3ugwpHGaAKYt81jRsfyp55Wuf7D'

const bytes = base58.decode(privateKey)
const keypair = Keypair.fromSecretKey(bytes)

fs.writeFileSync(
  path.join(__dirname, './PK.json'),
  JSON.stringify(Array.from(bytes)),
)

fs.writeFileSync(
  path.join(__dirname, `./PK_${keypair.publicKey}.json`),
  JSON.stringify(Array.from(bytes)),
)

// config sol keypair
child_process.execSync('solana config set -k ./PK.json')

// TODO: 设置网络

```



```shell
#!/bin/bash

# build assets
ts-node ./buildAssets.ts

rm -rf ./.cache

ts-node ./metaplex/js/packages/cli/src/candy-machine-v2-cli.ts upload \
  --env devnet \
  --keypair ./PK.json\
  --config-path ./config.json \
  ./assets
```



