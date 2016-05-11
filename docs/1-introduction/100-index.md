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

### Performance
TODO:   talk about how the performance depends on what is selected, optimised as much as possible. DB indexes obviously affect it. Link to Best practices on performance
