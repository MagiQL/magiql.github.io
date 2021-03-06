---
title: Query Request Lifecycle
layout: default
permalink: docs/introduction/lifecycle/
---

Query Request Lifecycle
===

1. `SearchRequest` Model received
2. Data Provider Selected
3. Query Validation
3. Query Builder generates and executes SQL
4. SQL mapped to Response Model
5. Render filters modify Response Model values
6. `SearchResponse` Model Returned

### Query Builder Steps
1. **Identify list of dependent column mappings**
All selected columns, order by, group by, summarise by, and filter columns identified. For calculated columns, the columns are expanded to find nested column references and those columns are also added to the list. Calculated columns are compiled (and cached) in this process.

2. **SearchQueryBuilder orchestrates  query structure** 
a. Uses `OneToManyCteBuilder`, `DataCteBuilder` & `StatsCteBuilder` to include the common table expressions required to execute the query.
b. Joins and Selects from the data and stats CTEs. Groups by the summarize column if specified. Uses limit and offset to paginate through the data.

3. **OneToManyCteBuilder builds aggregate CTEs for each required table**
a. Selects all dependent columns for a single table.
b. Joins the table following the table relationships until it reaches the group by table or the root table so that it can be joined to the data table.
*One CTE is created per aggregated table. No filtering or sorting is done at this level.

4. **DataCteBuilder joins and selects from data tables**
a. Selects all dependent columns which are not stats columns.
b. Joins the group by table to parent & sibling tables and to the aggregate CTE tables generated by `OneToManyCteBuilder`. 
c. Groups by the specified column. 
d. Filters results based on specified filters and/or text query after aggregation (Having). 
e. Orders results if the order by column is a data column.

5. **StatsCteBuilder selects from relevant stats table**
a. Selects all dependent columns which are stats columns.
b. Determines the source table to select from based on the group by.  If the query uses temporal aggregation or date range, then will select from the DateStats CTE which is built using the `DateStatsCteBuilder`. 
c. For stats which are stored in key value pair format, will use the `TransposeStatsCteBuilder` to transform rows into columns.

### Sql Query Structure
The generated SQL will follow a structure similar to this :

*For each aggregate table:*
With`OneToManyCTE` as

```sql
SELECT [TableColumns]
FROM [Table] Join [Tables to GroupByTable or RootTable]
```
 
 With `StatsCTE` as
 
```sql
SELECT [StatsColumns]
FROM [StatsTable] JOIN [GroupByTable]
WHERE [DateRange]
HAVING [StatsFilters]
GROUP BY [GroupByColumn]
```

 With `DataCTE` as 
 
```sql
SELECT [DataColumns]
FROM [GroupByTable] JOIN [OneToManyCTEs]
HAVING [DataFilters]
```

...

```sql
SELECT [Selected Columns]
FROM [DataCTE] JOIN [StatsCTE]
WHERE [StatsFilters]
GROUP BY [SummariseColumn] --optional
ORDER BY [SortByColumn]
LIMIT [PageSize] OFFSET [PageIndex * PageSize]
```
  
 
