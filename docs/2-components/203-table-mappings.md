---
title:  TableMappings
layout: default
permalink: docs/concepts/table-mappings/
---

TableMappings
===

In order to understand how to use and join database tables, MagiQL requires tables and their relationships to be defined in TableMappings.

### Known Tables
Maps the `KnownTable` column from the `ColumnDefinition` to a database table. Defines whether the table is a data or stats table. Specifies the table alias to use in the SQL query.

|Property|Description|
| --- | --- |
|KnownTableName| Matches the Column Definition|
|TableType| Indicates whether a Data or Stats table|
|DbTable| The DB table name. <br>Can use `database.schema.table` format |
|Alias| A shortened table name alias to use when generating SQL|

### Table Relationships
Defines how each KnownTable is related to inform the system how to handle joins and include the required tables.

| Property | Description |
| --- | --- |
| LeftTable | The left KnownTable |
| RightTable | The right KnownTable |
| LeftTableColumn | The join db column for the left table |
| RightTableColumn | The join db column for the right table |
| RelationshipType | The type of relationship between the 2 tables |
| IsDirect| Whether the relationship is a primary link between the 2 tables which should be used for joins. |
 
#### RelationshipType

| Value | Description |
| --- | --- |
| OneToOne | The left table has one row relating to the right table |
| OneToMany | The right table has many rows relating to the left table |
| ManyToOne | The left table has many rows relating to the right table |
