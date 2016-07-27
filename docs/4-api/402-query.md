---
title: Query
layout: default
permalink: docs/api/query/
---

Query
====

### Select Data
```POST /v1/{platform}/query```   

Selects data according to the search request

**Body Parameter**

Search Request object. See [Querying](/docs/querying/) for structure

**Querystring Parameters**

|Parameter| Description|
|-------- | ---|
| organizationid | (optional) must be specified if columns selected which belong to an organization  |
| userid | (optional) must be specified if columns selected which belong to a user |  

### Generate SQL
```POST /v1/{platform}/sql```   

Generates the sql script but does not select any data

**Body Parameter**

Search Request object. See [Querying](/docs/querying/) for structure

**Querystring Parameters**

|Parameter| Description|
|-------- | ---|
| organizationid | (optional) must be specified if columns selected which belong to an organization  |
| userid | (optional) must be specified if columns selected which belong to a user |  

