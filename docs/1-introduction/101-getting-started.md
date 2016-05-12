---
title: Getting Started
layout: default 
permalink: docs/introduction/getting-started/
---

Getting Started
===

1. [Installation](#installation)
    - [Installing as a WebAPI Service](#installing-as-a-webapi-service)
    - [Installing the DataExplorer UI](#installing-the-dataexplorer-ui)
    - [Installing Natively](#installing-natively)
2. [Data Adaptor Configuration](#data-adaptor-configuration)
    - [Implementing a DataAdapter](#implementing-a-dataadapter)
    - [JSON Based Configuration](#json-based-configuration)
3. [Column Setup](#column-setup)
    - [Column Manager UI](#column-manager-ui)
    - [Manual Column Insertion](#manual-column-insertion)
    - [SQL Import Scripts](#sql-import-scripts)

## Installation

### Installing as a WebAPI Service

```
PM> Install-Package MagiQL.Service.WebAPI.Routes
```

```c#
protected void Application_Start()
{ 
    try
    {
        GlobalConfiguration.Configuration.UseMagiQLApi(); // registers routes and configures serialization 
        
        // todo : add customisations
    }
    catch (Exception e)
    {
       // log here
       System.Diagnostics.Debug.WriteLine(e);
    }
}
```

### Installing the DataExplorer UI
* The WebApi service must be installed as a pre-requisite.

TODO

### Installing Natively

TODO 
 
## Data Adaptor Configuration

### Implementing a DataAdapter

### JSON Based Configuration

## Column Setup

### Column Manager UI

### Manual Column Insertion

### SQL Import Scripts

