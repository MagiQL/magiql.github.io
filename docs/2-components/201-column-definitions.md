---
title: Column Definitions 
layout: default
permalink: docs/components/column-definitions/
---

Column Definitions
===

In order for a column to be available for querying, it must be defined as a `ColumnDefinition`.

Column Definitions are stored in the `ReportColumnMapping` table and additional metadata is stored in the `ReportColumnMappingMetaData` table.

|Property| Description|
|-------- | ---|
|ID| The unique identifier for the column defintion|
|DataSourceTypeId | The ID of the data source this column for|
|UniqueName     | A unique string identifier for this column. <br>Unique per `DataSourceTypeId`|
|KnownTable | An alias for the table which is referred to in the TableMappings class. Does not need to match the DB table name, but may help.|
|FieldName | For non calculated columns: the field to select from the DB table. For calculated columns: the formula.|
|TransposeKey | For transpose stats the column name to pivot on.|
|FieldAggregationMode | The aggregation method to use when aggregating the values. For more info see [FieldAggregationMode](#FieldAggregationMode)|
|DbType | The Data Type of the column. For more info see [DbType](#DbType)|
|IsCalculated | False : the `FieldName` is a raw table column. <br>True : the `FieldName` is a formula.|
|IsSelectable | Whether the column can be selected. Setting this to false may still result in the column being used if it is referred to by a calculated column.|
|CreatedByUserId | For custom columns, the id of the user who created the column.|
|IsPrivate | When true, only selectable by the user matching CreatedByUserId.|
|CanGroupBy | Is an automatically generated value based on the field name and table type.|

### FieldAggregationMode

|Mode| Description|
|-------- | ---|
|First | Used for text, same as Min|
|Min | The minimum value in the set|
|Max | The maximum value in the set|
|Average | The average of all values in the set|
|Sum | The sum of all values in the set|
|Bool | For boolean values, all must be true|

### DbType
Todo
