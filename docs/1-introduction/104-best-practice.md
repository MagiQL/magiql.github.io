---
title: Best Practice
layout: default
permalink: docs/introduction/best-practice/
---

Best Practice
====

The following document outlines recommendations and conventions that are considered best practice. These are not required in order use MagiQL but may produce a more reliable or performant service.

## Column Definitions

#### Reference UniqeNames, not column IDs
In the case that you must reference columns in code, or store references to columns (eg a saved query) it is recommended to use the `UniqueName` rather than the column id. This ensures consistency across environments and mitigates the risk of a column being removed and re-inserted. 

#### UniqeName format
A suggested naming convention for a columns `UniqueName` is to use the underlying database column name, prefix with the `KnownTable` name, and optionally suffix with the aggregation method. eg `Table_Column_Sum`

For calculated columns, use a prefix such as `Calc` eg `Calc_Foo_Max`.

#### KnownTableName
KnownTable is effectively an alias to the underlying database table. While the table name does not need to match, it is recommended to use the same name as the database table to avoid confusion.

For Stats tables, the underlying database table could change based on the query. In this case use a more generic name such as `Stats`


## Querying

#### Request Minimal Number Of Columns
The number of columns requested will affect the performance of the query. It is recommended that each query only selects the minimum number of columns required - typically the values which will be displayed.

#### Debug Mode  
`DebugMode` should be set to false in the query by default. It will only have a minimal impact on performance, however will return the SQL generated which results in a larger response size and potential security issues.

#### Adaptor / Translation Layer
If the results returned from the API are exposed directly to the browser, it may be considered best practice to use a translation / adapter layer to convert from the MagiQL model to your own custom model. This will also allow you to remove information such as debug information from any public response as well as control access to private  data.


## Database

#### Optimise Database for Performance 
The performance of MagiQL relies heavily on database optimisation. You should ensure that indexes are optimised for common queries if performance is a priority. This may be aided by retrieving the SQL generated from the query using DebugMode or the DataExplorer for debugging.

#### Views for complex structures
For schemas with complex or large table structures, it may be beneficial to use database views to simplify the query generated and the reduce the configuration steps required when setting up the DataAdaptor.

## Additional

#### Security
MagiQL does not provide a security layer. It is not recommended that you expose the Web API publically if it contains any sensitive data or personal data. We recommend that you use a thin adapter layer to implement security and restrict sensitive data. 

#### Caching
In some cases, data can be cached for short periods to avoid re-selecting data from the database. You may achieve increased performance by utilising a cache based on all parts of the search query.

#### Logging
By default MagiQL implements a non logging logger. In order to log exceptions from MagiQL you should implement the logging interface.

#### Monitoring
MagiQL query results include timing metrics which can be forwarded to your favorite metrics platform so that you can measure performance of your queries.

 
