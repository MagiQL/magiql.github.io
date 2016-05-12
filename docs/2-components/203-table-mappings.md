---
title:  TableMappings
layout: default
permalink: docs/components/table-mappings/
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
| OneToOne | One row in the left table can only link to a single row in the right table |
| OneToMany | One row in the left table can link to multiple rows in the right table  |
| ManyToOne | One row in the right table can link to multiple rows in the left table |
