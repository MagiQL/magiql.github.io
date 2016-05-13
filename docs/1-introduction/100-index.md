---
title: Introduction
layout: default 
permalink: docs/introduction/
---

MagiQL Documentation
===========

How It Works
------ 
MagiQL uses  [SqlModeller](https://github.com/jmenziessmith/SqlModeller) and [Dapper](https://github.com/StackExchange/dapper-dot-net) to dynamically generate and execute SQL queries and return the results in a generic structure. 

MagiQL requires a pre-defined list of column definitions along with information on table relationships in order to automatically join and aggregate data. This is done by implementing a Data Provider. Multiple data providers can be defined to support different contexts and scenarios.

For tables with a one to many relationship; an aggregate common table expression will be used when necessary to avoid a Cartesian join / cross-join. 

Calculated columns are converted to SQL and calculated in the database query in order to support sorting and filtering. Calculated columns can reference both raw columns and other calculated columns. In the case that a calculated column references another calculated column, the formula will be fully expanded in the query. 

A Stats table can be defined to allow joining data to aggregated statistics which may be represented in multiple resolutions and at different levels. A Stats table can dynamically select the database table based on the query's temporal aggregation, date range and group by column.

Only requested columns will be selected in the SQL query and returned. The order of columns returned will match the order they were requested.

### Search Request Sequence
In order to execute a query, the list of selectable columns must first be retrieved from the service. This list of columns can be customised to a user by providing a user ID. Once a list of columns is available, the column ids can then be used to build and execute a search request.

NOTE : While the search requests requires column IDs to be used, it is strongly recommended that the UniqueName of the column is referenced in any hard coded, external code if necessary.


```sequence
Client->SelectableColumns: UserID
SelectableColumns-->Client: SelectableColumn[]
Client->Client: User Selection
Client->Search: SearchRequest
Search-->Client: SearchResponse
```
 


### Components
* Request & Response Model
* Data Provider DataSource 
* Column Mappings
* Column Mapping Provider
* Table Mappings
* Query Builders
* Query Helpers
* Query Validators
* Calculated Column Compiler
* Column Functions
* Render Filters 

### Extensibility
MagiQL has been built with extensibility in mind. 

At the core of MagiQL is are the QueryBuilder classes, each of which can be replaced or have individual methods overridden, giving developers full control over the SQL generated. This means that the generated SQL can be further optimised by adding in additional clauses where possible. It also enables adding additional support for specialsed table relationships or data structures.

Additional Render Filters can be configured to provide customised transformations of data returned by the service. Custom column validators can also be defined and alternative column providers implemented.

It is also possible to build custom data adaptors to query alternative databases / data sources.

### Performance
MagiQL has been designed to perform with minimal overhead in generating queries and parsing results. It takes a matter of a few milliseconds to generate SQL in most scenarios. However, it should be noted that the majority of the work is handled by the database and as a result, performance will be impacted by the amount of data being queried and the optimisation of schemas at the database level. 

MagiQL will provide timing information to help you understand how much time was spent generating queries, executing on the database and parsing the results.


