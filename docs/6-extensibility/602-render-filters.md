---
title: Render Filters
layout: default
permalink: docs/extensibility/render-filters/
---

Render Filters
====

Render filters offer a way to modify the data that was selected from the database before it is returned. This allows you to perform formatting, or additional transformations on the data such as replaceing ids with other lookup data. There are a few default render filters pre configured which are powered by [Column MetaData](/docs/components/column-metadata/), but the render filter system allows for custom RenderFilters to be defined in code.

### Default Render filters

| Type | Description | MetaData Name | MetaData Value |  
| ---- | ----------- | ------------- | -------------- |  
|`PrecisionRenderFilter`| Rounds decimals to the specified number of decimal places | Precision | [int] number of decimal places |
|`BooleanDataFormatRenderFilter`| Parses strings or bit fields into a true / false string | DataFormat | "Boolean" (applies automatically to Boolean db columns) | 
|`CurrencyDataFormatRenderFilter`| Rounds decimals to 2 decimal places | DataFormat | "Currency" | 
|`UtcDateTimeDataFormatRenderFilter`| Parses and formats date time strings into te following format : "dd/MM/yyyy HH:mm:ss"  | UtcDateTime | n/a |


### Custom Render Filters

Additional render filters can be defined by either inheriting `MetaDataRenderFilter` or `DateFormatMetaDataRenderFilter` in order to create a render filter based on MetaData values, or by implementing `IRenderFilter`.

```csharp
public class ToLowerDataFormatRenderFilter : DataFormatMetaDataRenderFilter
{
    protected override string DataFormatValue
    {
        get { return "ToLower"; }
    }

    protected override string TryFormatValue(string value, ReportColumnMapping columnMapping, SearchResultRow row)
    {
        return value.ToLower();
    }
}
```

Once a custom render filter has been defined, it must be registered with the `RenderFilterFactory` using the `Register()` method. Unwanted render filters can be removed using `UnRegister()`. This should be done once when the application loads - probably in the `Application_Start()` method of the Global.cs

```csharp
var renderFilterFactory = new MagiQL.Framework.Renderers.RenderFilterFactory();
renderFilterFactory.Register<ToLowerDataFormatRenderFilter>();
```



