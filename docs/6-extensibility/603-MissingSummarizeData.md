---
title: Summarize Data
layout: default
permalink: docs/extensibility/summarize-data/
---

Missing Summarize Data Query Builder
====

The `DefaultMissingSummariseDataQueryBuilder` class is used to include data from the `SummarizeBy` table in the query result when `SummarizeBy` is specified and the resulting data may not contain all possible records.

By enabling this class, the query builder will union the selected data, with the full summarize by set of data. Columns which were not populated by the data query will be null.

For example, if grouping by the `Player_Id` column, and summarizing by the `Team_Id` column - if there are any teams without any players, those teams would not be included in the result by default. By using this class, teams without players will be visible in the results.


To enable this functionality, create a class that inherits `DefaultMissingSummariseDataQueryBuilder`
```csharp  
public class MissingSummarizeDataQueryBuilder : DefaultMissingSummariseDataQueryBuilder
{
    public MissingSummarizeDataQueryBuilder(IDataSourceComponents dataSourceComponents) : base(dataSourceComponents){ }

    public override bool IsRequired(MappedSearchRequest request)
    {
        return request.SummarizeByColumn != null
            && request.SummarizeByColumn.KnownTable == KnownTables.Team;
    }
}
```


And then register it in your data source components

```csharp  
public class ExampleDataSourceComponents : DataSourceComponentsBase
{
    public ExampleDataSourceComponents(IColumnProvider columnProvider) : base(columnProvider){ } 

    protected override void RegisterComponents()
    { 
        //....
        MissingSummarizeDataQueryBuilder = new MissingSummarizeDataQueryBuilder(this);
    }
}
```
