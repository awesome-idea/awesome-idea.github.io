# Nestjs 



## 01. 创建多模块项目

[Monorepo Docs](https://docs.nestjs.com/cli/monorepo)



```shell
├── README.md
├── nest-cli.json
├── node_modules
├── package.json
├── src
│   ├── app.controller.spec.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   └── main.ts
├── test
│   ├── app.e2e-spec.ts
│   └── jest-e2e.json
├── tsconfig.build.json
├── tsconfig.json
└── yarn.lock
```

这个是一个 Standard mode 项目 `nest new my-project`



通过 `nest generate app my-app` 可以生成一个统计的目录

```shell
.
├── README.md
├── apps
│   ├── my-app
│   │   ├── src
│   │   │   ├── main.ts
│   │   │   ├── my-app.controller.spec.ts
│   │   │   ├── my-app.controller.ts
│   │   │   ├── my-app.module.ts
│   │   │   └── my-app.service.ts
│   │   ├── test
│   │   │   ├── app.e2e-spec.ts
│   │   │   └── jest-e2e.json
│   │   └── tsconfig.app.json
│   └── my-project
│       ├── src
│       │   ├── app.controller.spec.ts
│       │   ├── app.controller.ts
│       │   ├── app.module.ts
│       │   ├── app.service.ts
│       │   └── main.ts
│       ├── test
│       │   ├── app.e2e-spec.ts
│       │   └── jest-e2e.json
│       └── tsconfig.app.json
├── nest-cli.json
├── node_modules
├── package.json
├── tsconfig.build.json
├── tsconfig.json
└── yarn.lock
```



这样有一个好处是，多个项目可以共享依赖。我们可以将共有逻辑进行提取。方便维护。



使用 `nest g library my-library` 创建共有依赖, 创建完成之后的项目结构

```shell
├── README.md
├── apps
│   ├── my-app
│   │   ├── src
│   │   │   ├── main.ts
│   │   │   ├── my-app.controller.spec.ts
│   │   │   ├── my-app.controller.ts
│   │   │   ├── my-app.module.ts
│   │   │   └── my-app.service.ts
│   │   ├── test
│   │   │   ├── app.e2e-spec.ts
│   │   │   └── jest-e2e.json
│   │   └── tsconfig.app.json
│   └── my-project
│       ├── src
│       │   ├── app.controller.spec.ts
│       │   ├── app.controller.ts
│       │   ├── app.module.ts
│       │   ├── app.service.ts
│       │   └── main.ts
│       ├── test
│       │   ├── app.e2e-spec.ts
│       │   └── jest-e2e.json
│       └── tsconfig.app.json
├── libs
│   └── my-library
│       ├── src
│       │   ├── index.ts
│       │   ├── my-library.module.ts
│       │   ├── my-library.service.spec.ts
│       │   └── my-library.service.ts
│       └── tsconfig.lib.json
├── nest-cli.json
├── node_modules
├── package.json
├── tsconfig.build.json
├── tsconfig.json
└── yarn.lock
```

`my-app` 和 `my-project` 都可以访问 `my-library` 项目中的内容。

 

## 02. nestjs typeorm 多数据源

### 添加多个数据库配置

```yaml
multiplePostgres:
    holder:
      username: postgres
      host: <ip_address>
      database: db
      password: 
      port: 
    analysis:
      username: 
      host: 
      database: 
      password: 
      port: 32260
```



### 在模块导入处导入多个模块

```ts
TypeOrmModule.forRoot({
  name: 'default',
  ...configService.getPassHolderDBTypeOrmConfig(),
  autoLoadEntities: true,
})

TypeOrmModule.forRoot({
  name: 'analysis',
  ...configService.getAnalysisDBTypeOrmConfig(),
  autoLoadEntities: true,
})
```

这里需要注意命名问题，默认的 `connection` 是直接使用 `default`，就是正常在使用 `etRepository` 的时候使用的是 `default` 默认名, 然后新添加的连接用一个新的名字就可以了。



### 导入 Entities

```ts
@Module({
  imports: [TypeOrmModule.forFeature(entities, 'analysis')],
  providers: [],
  controllers: [],
  exports: [TypeOrmModule.forFeature(entities, 'analysis')],
})
export class AnalysisDatabaseModule {}
```

在导入模块的时候，我们需要注意，如果不是默认的 default 的连接，那么需要在后面制定 connectionName，不然会找不到。



### 使用

```ts
    const blueChip = 
          await getRepository(BlueChipEntity, ANALYSIS_DB).findOne({ slug: symbol });

    if (blueChip) {
      throw new BadRequestException('exists!');
    }

```



