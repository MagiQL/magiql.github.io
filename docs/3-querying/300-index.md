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
  "TextFilter": "find me",
  "TextFilterColumns":  {
    "columnId": 1010
  },
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
**SELECT** `Column1`, `Column2` , `Column3`  
**GROUPBY** `Column3`  
**_DATEFROM_** `2016-01-01`  
**_DATETO_** `2016-02-03`  
**_TEMPORALAGGREGATION_** `Total`  
**_TEXTFILTER_** 'Find me' **_IN(`Column5`,`Column6`)_**   
**_FILTER_** `Column7` *> 5*    
**_FILTER_** `Column8` *= ('A','D','Y')*  **_EXCLUDE_**  
**_SUMMARIZEBY_** `Column2`  
**ORDERBY** `Column1` **_DESC_**  
**PAGESIZE** *20* **PAGEINDEX** *0* **_GETCOUNT_** **_WITHSTATS_** **_DEBUGMODE_**
