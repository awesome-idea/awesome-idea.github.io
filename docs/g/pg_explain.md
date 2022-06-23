# PgSQL 查询计划

[Docs](https://www.postgresql.org/docs/current/sql-explain.html)



## 01

语法

```
EXPLAIN [ ( option [, ...] ) ] statement
EXPLAIN [ ANALYZE ] [ VERBOSE ] statement

where option can be one of:

    ANALYZE [ boolean ]
    VERBOSE [ boolean ]
    COSTS [ boolean ]
    SETTINGS [ boolean ]
    BUFFERS [ boolean ]
    WAL [ boolean ]
    TIMING [ boolean ]
    SUMMARY [ boolean ]
    FORMAT { TEXT | XML | JSON | YAML }
```



此命令显示 PostgreSQL 规划程序为提供的语句生成的执行计划。执行计划显示了如何扫描语句引用的表ーー通过普通顺序扫描、索引扫描等ーー以及如果引用了多个表，将使用什么联接算法来将每个输入表中所需的行集合在一起。



## 02

`ANALYZE`

执行命令并显示实际运行时间和其他统计数据。此参数默认为 FALSE。

`VERBOSE`

显示有关计划的其他信息。具体来说，包括计划树中每个节点的输出列列表、模式限定表和函数名称，始终用范围表别名标记表达式中的变量，并始终打印显示统计信息的每个触发器的名称。如果已经计算了查询标识符，也将显示查询标识符，有关详细信息，请参阅 computer _ query _ id。此参数默认为 FALSE。

`COSTS`

包括关于每个计划节点的估计启动和总成本的信息，以及估计的行数和每行的估计宽度。此参数默认为 TRUE。

`SETTINGS`

包括有关配置参数的信息。具体来说，包含影响查询规划的选项，其值不同于内置默认值。此参数默认为 FALSE。

`TIMING`

在输出中包括每个节点的实际启动时间和花费的时间。重复读取系统时钟的开销会显著降低某些系统上的查询速度，因此，当只需要实际行数而不需要精确的时间时，将此参数设置为 FALSE 可能是有用的。总是测量整个语句的运行时间，即使使用此选项关闭节点级计时时也是如此。此参数只有在启用 AnalyzE 时才能使用。默认为 TRUE。

`FORMAT`

指定输出格式，可以是 TEXT、 XML、 JSON 或 YAML。非文本输出包含与文本输出格式相同的信息，但程序更容易解析。此参数默认为 TEXT.

```sql
EXPLAIN (FORMAT JSON) select * from foo;

# result
 [                             +
   {                           +
     "Plan": {                 +
       "Node Type": "Seq Scan",+
       "Relation Name": "foo", +
       "Alias": "foo",         +
       "Startup Cost": 0.00,   +
       "Total Cost": 155.00,   +
       "Plan Rows": 10000,     +
       "Plan Width": 4         +
     }                         +
   }                           +
 ]
(1 row)
```



## 03

```sql
EXPLAIN SELECT * FROM tenk1;

                         QUERY PLAN
-------------------------------------------------------------
 Seq Scan on tenk1  (cost=0.00..458.00 rows=10000 width=244)
```



如上图查询所示，因为这个查询没有 where 语句，所以它必须扫描表的所有行，所以 规划器 就选择了一个简单的顺序扫描计划。



**括号中的数字，从左到右分别是**

- `cost=0.00` 启动费用估计数。这是在输出阶段开始之前所花费的时间，例如，在排序节点中执行排序的时间。
- `458.00` 估计的话费
- `rows=1000` 此计划节点输出的估计行数。
- `width=244` 此计划节点输出的行的估计平均宽度(以字节为单位)。



```sql
EXPLAIN SELECT * FROM tenk1 WHERE unique1 < 7000;

                         QUERY PLAN
------------------------------------------------------------
 Seq Scan on tenk1  (cost=0.00..483.00 rows=7001 width=244)
   Filter: (unique1 < 7000)
```



注意，EXPLAIN 输出显示了作为附加到 Seq Scan 计划节点的“过滤器”条件应用的 WHERE 子句。这意味着计划节点为其扫描的每一行检查条件，并且仅输出传递条件的行。由于 WHERE 子句，输出行的估计已经减少。但是，扫描仍然需要访问所有10000行，因此成本并没有降低; 实际上，为了反映检查 WHERE 条件所花费的额外 CPU 时间，成本上升了一点(确切地说是10000 * CPU _ operation _ Cost)。



## 04

通过使用 EXPLAIN 的分析选项可以检查规划师估计的准确性。使用这个选项，EXPLAIN 实际执行查询，然后显示每个计划节点中累计的真行数和真实运行时间，以及与普通 EXPLAIN 相同的估计值。例如，我们可能会得到这样的结果:

```sql
EXPLAIN ANALYZE SELECT * FROM tenk1 WHERE ten < 7;

                                               QUERY PLAN
---------------------------------------------------------------------------------------------------------
 Seq Scan on tenk1  (cost=0.00..483.00 rows=7000 width=244) (actual time=0.016..5.107 rows=7000 loops=1)
   Filter: (ten < 7)
   Rows Removed by Filter: 3000
 Planning time: 0.083 ms
 Execution time: 5.905 ms
```

添加了 EXPLAIN 参数之后，我们就可以看到看到该语句正确的执行时间。



有的时候我们想要看的执行计划可能不是 SELECT 而是 INSERT UPDATE DELETE，我们想要查看执行计划的时间，但是又不想真正的执行，就可以使用 ROLLBACK



```sql
BEGIN;

EXPLAIN ANALYZE UPDATE tenk1 SET hundred = hundred + 1 WHERE unique1 < 100;

                                                           QUERY PLAN
--------------------------------------------------------------------------------------------------------------------------------
 Update on tenk1  (cost=5.08..230.08 rows=0 width=0) (actual time=3.791..3.792 rows=0 loops=1)
   ->  Bitmap Heap Scan on tenk1  (cost=5.08..230.08 rows=102 width=10) (actual time=0.069..0.513 rows=100 loops=1)
         Recheck Cond: (unique1 < 100)
         Heap Blocks: exact=90
         ->  Bitmap Index Scan on tenk1_unique1  (cost=0.00..5.05 rows=102 width=0) (actual time=0.036..0.037 rows=300 loops=1)
               Index Cond: (unique1 < 100)
 Planning Time: 0.113 ms
 Execution Time: 3.850 ms

ROLLBACK;
```



## 05

```sql
SELECT
    tablename,
    indexname,
    indexdef
FROM
    pg_indexes
WHERE
        schemaname = 'public' and tablename = 'collection_tokens'
ORDER BY
    tablename,
    indexname;
```

查询对应表的索引情况。