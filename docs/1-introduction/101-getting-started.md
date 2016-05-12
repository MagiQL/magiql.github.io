---
title: Getting Started
layout: default 
permalink: docs/introduction/getting-started/
---

Getting Started
===

[TOC]

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

###

## Column Setup
/ Import Scripts
