---
title: Column Definitions
layout: default
permalink: docs/api/columns/
---

Column Definitions
====

### Get Selectable Columns
```GET /v1/{platform}/columns```   

Returns a list of columns which are selectable along with category information and additional metadata  

**Querystring Parameters**

|Parameter| Description|
|-------- | ---|
| organizationid | (optional) includes columns belonging to the specified organization id |
| userid | (optional) includes columns belonging to the specified user id | 
| groupby | (optional) restricts the columns to ones which support grouping by the specified column id | 

### Get Column Mappings
```GET /v1/{platform}/columnmappings```

Returns a list of all columns and all of their properies and metadata  

**Querystring Parameters**  

|Parameter| Description|
|-------- | ---|
| organizationid | (required) includes columns belonging to the specified organization id |
| userid | (optional) includes columns belonging to the specified user id | 
| columnid | (optional) returns the data for only the specified column | 
| clearCache | (optional) when 'true', will clear the cached columns | 


### Create Column Mapping
```POST /v1/{platform}/columnmappings```

Creates a new column mapping  

**Body Parameter**  
The column object to create (see [Get Column Mappings](#get-column-mappings) for structure)  

### Update Column Mapping
```PUT /v1/{platform}/columnmappings/{columnid}```

Updates an existing column mapping  

**Body Parameter**  
The column object to update (see [Get Column Mappings](#get-column-mappings) for structure)

### Dependant Column Mappings

Returns all columns that are used to calculate the specified fieldname or column  

```GET /v1/{platform}/dependantcolumnmappings```   

**Querystring Parameters**  

|Parameter| Description|
|-------- | ---|
| columnid | (optional) the id of the pre defined column |
| fieldname | (optional) a calculated column formula which references other columns |  
