---
title: Query Model 
layout: default
permalink: docs/querying/query-model/
---

Query Model
============

For more information on the order these properties are applied please see [Query Request Lifecycle]()

### Selected Columns
Defines the list of columns to be selected and returned. Uses the column mapping ID.

### Order By Column
Defines the column used for sorting. Uses the column mapping ID. Used in conjunction with `SortDescending` to control sort direction.

### Group By Column
Defines the column to group data by - ensuring only 1 row is returned per unique value. Uses column mapping ID. Depending on this group by, other related tables at a lower level with a 1 to many relationship will use an aggregate CTE to avoid Cartesian joins / cross-joins.

For Stats table, can also define which type of stat is selected, whereby the closest matching stat table will be used to select stats.

### Column Filters
Applied after grouping, will restrict data returned to records which match the filter conditions after aggregation by the group by column.

The properties of a filter are 

`Mode` which can be one of :  

- `LessThan` (<)
- `LessThanOrEqual` (<=)
- `Equal` (==)
- `NotEqual` (!=)
- `GreaterThanOrEqual` (>=)
- `GreaterThan` (>)

`Values` which is an array of values to match on (using OR)
 
 When applying multiple filters, they must all match (AND) to return a result.
 

### Summarise By Column 
A secondary grouping to group rows after filtering, useful for summarising data.

### Temporal Aggregation Mode
When using statistical data which is available with time based resolutions, allows rows to be returned either as the lifetime value or broken down by the specified time period. 

### Date Range Filters
When using statistical data which is available with time based resolutions, allows statistical data to be filtered based on a timestamp prior to filtering. 

### Text Filter
`TextFilter` is used to perform a free text search to filter records matching the text.  
`TextFilterColumns` is used to specify one or more columns to search on. If not specified, will search the default configured column.

### Pagination
`PageSize` is used to control the number of results returned  
`PageIndex` is a 0 based index to define which page of data to return.

### DebugMode
When set to `true` will return additional information including the generated SQL so that the query can be manually executed and debugged using your favorite SQL tool.

*This may have an impact on performance.
