---
title: "Paimon catalog"
slug: /lakehouse-paimon-catalog
keywords:
  - lakehouse
  - Paimon
  - metadata
license: "This software is licensed under the Apache License version 2."
---

## Introduction

Apache Gravitino provides the ability to manage Apache Paimon metadata.

### Requirements

:::info
Builds with Apache Paimon `0.8.0`.
:::

## Catalog

### Catalog capabilities

- Works as a catalog proxy, supporting `FilesystemCatalog`.
- Supports DDL operations for Paimon schemas and tables.

- Doesn't support `JdbcCatalog` and `HiveCatalog` catalog backend now.
- Doesn't support alterSchema.

### Catalog properties

| Property name                                      | Description                                                                                                                                                                                                 | Default value | Required                                                        | Since Version    |
|----------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|-----------------------------------------------------------------|------------------|
| `catalog-backend`                                  | Catalog backend of Gravitino Paimon catalog. Only supports `filesystem` now.                                                                                                                                | (none)        | Yes                                                             | 0.6.0-incubating |
| `uri`                                              | The URI configuration of the Paimon catalog. `thrift://127.0.0.1:9083` or `jdbc:postgresql://127.0.0.1:5432/db_name` or `jdbc:mysql://127.0.0.1:3306/metastore_db`. It is optional for `FilesystemCatalog`. | (none)        | required if the value of `catalog-backend` is not `filesystem`. | 0.6.0-incubating |
| `warehouse`                                        | Warehouse directory of catalog. `file:///user/hive/warehouse-paimon/` for local fs, `hdfs://namespace/hdfs/path` for HDFS or `s3://{bucket-name}/path/` for S3                                              | (none)        | Yes                                                             | 0.6.0-incubating |
| `authentication.type`                              | The type of authentication for Paimon catalog backend, currently Gravitino only supports `Kerberos` and `simple`.                                                                                           | `simple`      | No                                                              | 0.6.0-incubating |
| `authentication.kerberos.principal`                | The principal of the Kerberos authentication.                                                                                                                                                               | (none)        | required if the value of `authentication.type` is Kerberos.     | 0.6.0-incubating |
| `authentication.kerberos.keytab-uri`               | The URI of The keytab for the Kerberos authentication.                                                                                                                                                      | (none)        | required if the value of `authentication.type` is Kerberos.     | 0.6.0-incubating |
| `authentication.kerberos.check-interval-sec`       | The check interval of Kerberos credential for Paimon catalog.                                                                                                                                               | 60            | No                                                              | 0.6.0-incubating |
| `authentication.kerberos.keytab-fetch-timeout-sec` | The fetch timeout of retrieving Kerberos keytab from `authentication.kerberos.keytab-uri`.                                                                                                                  | 60            | No                                                              | 0.6.0-incubating |

Any properties not defined by Gravitino with `gravitino.bypass.` prefix will pass to Paimon catalog properties and HDFS configuration. For example, if specify `gravitino.bypass.table.type`, `table.type` will pass to Paimon catalog properties.

### Catalog operations

Please refer to [Manage Relational Metadata Using Gravitino](./manage-relational-metadata-using-gravitino.md#catalog-operations) for more details.

## Schema 

### Schema capabilities

- Supporting createSchema, dropSchema, loadSchema and listSchema.
- Supporting cascade drop schema.

- Doesn't support alterSchema.

### Schema properties

- Doesn't support specify location and store any schema properties when createSchema for FilesystemCatalog.
- Doesn't return any schema properties when loadSchema for FilesystemCatalog.
- Doesn't support store schema comment for FilesystemCatalog.

### Schema operations

Please refer to [Manage Relational Metadata Using Gravitino](./manage-relational-metadata-using-gravitino.md#schema-operations) for more details.

## Table 

### Table capabilities

- Supporting createTable, purgeTable, alterTable, loadTable and listTable.
- Supporting Column default value through table properties, such as `fields.{columnName}.default-value`, not column expression.

- Doesn't support dropTable.
- Doesn't support table distribution and sort orders.

:::info
Gravitino Paimon Catalog does not support dropTable, because the dropTable in Paimon will both remove the table metadata and the table location from the file system and skip the trash, we should use purgeTable instead in Gravitino.
:::

:::info
Paimon does not support auto increment column.
:::

### Table changes

- RenameTable
- AddColumn
- DeleteColumn
- RenameColumn
- UpdateColumnComment
- UpdateColumnNullability
- UpdateColumnPosition
- UpdateColumnType
- UpdateComment
- SetProperty
- RemoveProperty

### Table partitions

- Only supports Identity partitions, such as `day`, `hour`, etc.

Please refer to [Paimon DDL Create Table](https://paimon.apache.org/docs/0.8/spark/sql-ddl/#create-table) for more details.

### Table sort orders

- Doesn't support table sort orders.

### Table distributions

- Doesn't support table distributions.

### Table indexes

- Only supports primary key Index.

:::info
We cannot specify more than one primary key Index, and a primary key Index can contain multiple fields as a joint primary key.
:::

:::info
Paimon Table primary key constraint should not be same with partition fields, this will result in only one record in a partition.
:::

### Table column types

| Gravitino Type              | Apache Paimon Type             |
|-----------------------------|--------------------------------|
| `Struct`                    | `Row`                          |
| `Map`                       | `Map`                          |
| `List`                      | `Array`                        |
| `Boolean`                   | `Boolean`                      |
| `Byte`                      | `TinyInt`                      |
| `Short`                     | `SmallInt`                     |
| `Integer`                   | `Int`                          |
| `Long`                      | `BigInt`                       |
| `Float`                     | `Float`                        |
| `Double`                    | `Double`                       |
| `Decimal`                   | `Decimal`                      |
| `String`                    | `VarChar(Integer.MAX_VALUE)`   |
| `VarChar`                   | `VarChar`                      |
| `FixedChar`                 | `Char`                         |
| `Date`                      | `Date`                         |
| `Time`                      | `Time`                         |
| `TimestampType withZone`    | `LocalZonedTimestamp`          |
| `TimestampType withoutZone` | `Timestamp`                    |
| `Binary`                    | `Binary`                       |
| `Fixed`                     | `VarBinary`                    |

:::info
Gravitino doesn't support Paimon `MultisetType` type.
:::

### Table properties

You can pass [Paimon table properties](https://paimon.apache.org/docs/0.8/maintenance/configurations/) to Gravitino when creating a Paimon table.

The Gravitino server doesn't allow passing the following reserved fields.

| Configuration item                 | Description                                                  |
|------------------------------------|--------------------------------------------------------------|
| `comment`                          | The table comment.                                           |
| `owner`                            | The table owner.                                             |
| `bucket-key`                       | The table bucket-key.                                        |
| `merge-engine`                     | The table merge-engine.                                      |
| `sequence.field`                   | The table sequence.field.                                    |
| `rowkind.field`                    | The table rowkind.field.                                     |
| `primary-key`                      | The table primary-key.                                       |
| `partition`                        | The table partition.                                         |

### Table operations

Please refer to [Manage Relational Metadata Using Gravitino](./manage-relational-metadata-using-gravitino.md#table-operations) for more details.

## HDFS configuration

You can place `core-site.xml` and `hdfs-site.xml` in the `catalogs/lakehouse-paimon/conf` directory to automatically load as the default HDFS configuration.

:::caution
When reading and writing to HDFS, the Gravitino server can only operate as the specified Kerberos user and doesn't support proxying to other Kerberos users now.
:::
