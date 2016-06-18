---
title: Querying
layout: default 
permalink: docs/querying/
---

QUERYING
====


### Query Model
```json
{
  "selectedColumns": [
    {
      "columnId": 1517
    },
    {
      "columnId": 1010
    }
  ],
  "groupByColumn": {
    "columnId": 101
  },
  "dateStart": null,
  "dateEnd": null,
  "dateRangeType": 0,
  "temporalAggregation": "Total",
  "query": "",
  "filters": [
    {
      "columnId": 1517,
      "values": [
        "1",
        "6"
      ],
      "exclude": false,
      "mode": "Equal"
    }
  ],
  "summarizeByColumn": {
    "columnId": 1003
  },
  "sortByColumn": {
    "columnId": 1003
  },
  "sortDescending": false,
  "pageSize": 100,
  "pageIndex": 0,
  "getCount": true,
  "excludeRecordsWithNoStats": false,
  "debugMode": true
}
```



### Query Language

*Note:* Quyery Language is not yet supported   

#### Proposed QL Syntax
>
**SELECT** `Column1`, `Column2`  
**GROUPBY** `Column3`  
**_DATEFROM_** `2016-01-01`  
**_DATETO_** `2016-02-03`  
**_TEMPORALAGGREGATION_** `Total`  
**_FILTER_** `Column4` *> 5*  
**_FILTER_** `Column5` *= (6,7,8)*  **_EXCLUDE_**  
**_SUMMARIZEBY_** `Column6`  
**ORDERBY** `Column7` **_DESC_**  
**PAGESIZE** *20* **PAGEINDEX** *0* **_GETCOUNT_** **_EXCLUDERECORDSWITHNOSTATS_** **_DEBUGMODE_**
