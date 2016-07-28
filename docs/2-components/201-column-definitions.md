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
|KnownTable | An alias for the table/view which is referred to in the TableMappings class. Does not need to match the DB table/view name, but may help.|
|FieldName | For non calculated columns: the field to select from the DB table/view. For calculated columns: the formula.|
|TransposeKey | For transpose stats the column name to pivot on.|
|FieldAggregationMode | The aggregation method to use when aggregating the values. For more info see [FieldAggregationMode](#fieldaggregationmode)|
|DbType | The Data Type of the column. For more info see [DbType](#dbtype)|
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

**Numeric Types**

|Name| Description|
|-------- | ---|
|Byte	|An 8-bit unsigned integer ranging in value from 0 to 255. |
|Currency	| A currency value ranging from -2 63 (or -922,337,203,685,477.5808) to 2 63 -1 (or +922,337,203,685,477.5807) with an accuracy to a ten-thousandth of a currency unit.|
|Decimal	| A simple type representing values ranging from 1.0 x 10 -28 to approximately 7.9 x 10 28 with 28-29 significant digits.|
|Double	| A floating point type representing values ranging from approximately 5.0 x 10 -324 to 1.7 x 10 308 with a precision of 15-16 digits.|
|Int16	|An integral type representing signed 16-bit integers with values between -32768 and 32767.|
|Int32	|An integral type representing signed 32-bit integers with values between -2147483648 and 2147483647.|
|Int64	|An integral type representing signed 64-bit integers with values between -9223372036854775808 and 9223372036854775807.|
|SByte	|An integral type representing signed 8-bit integers with values between -128 and 127.|
|Single	|A floating point type representing values ranging from approximately 1.5 x 10 -45 to 3.4 x 10 38 with a precision of 7 digits.|
|UInt16	|An integral type representing unsigned 16-bit integers with values between 0 and 65535.|
|UInt32	|An integral type representing unsigned 32-bit integers with values between 0 and 4294967295.|
|UInt64	|An integral type representing unsigned 64-bit integers with values between 0 and 18446744073709551615.|
|VarNumeric	|A variable-length numeric value.|

**String Types**

|Name| Description|
|-------- | ---|
|AnsiString	| A variable-length stream of non-Unicode characters ranging between 1 and 8,000 characters.|
|AnsiStringFixedLength	| A fixed-length stream of non-Unicode characters.|
|String	| A type representing Unicode character strings.|
|StringFixedLength	|A fixed-length string of Unicode characters.|

**Date Types**

|Name| Description|
|-------- | ---|
|Date	 | A type representing a date value.|
|DateTime	|A type representing a date and time value.|
|DateTime2	|Date and time data. Date value range is from January 1,1 AD through December 31, 9999 AD. Time value range is 00:00:00 through 23:59:59.9999999 with an accuracy of 100 nanoseconds.|
|DateTimeOffset	| Date and time data with time zone awareness. Date value range is from January 1,1 AD through December 31, 9999 AD. Time value range is 00:00:00 through 23:59:59.9999999 with an accuracy of 100 nanoseconds. Time zone value range is -14:00 through +14:00.|
|Time	|A type representing a SQL Server DateTime value.|

 **Other Types** 
 
|Name| Description|
|-------- | ---|
|Binary	| A variable-length stream of binary data ranging between 1 and 8,000 bytes.|
|Boolean	| A simple type representing Boolean values of true or false. |
|Guid	|A globally unique identifier (or GUID).|
|Object	|A general type representing any reference or value type not explicitly represented by another DbType value. |
|Xml	|A parsed representation of an XML document or fragment.|
