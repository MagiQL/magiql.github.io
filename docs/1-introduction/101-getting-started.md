---
title: Getting Started
layout: default 
permalink: docs/introduction/getting-started/
---

Getting Started
===

1. Installation
2. DataAdaptor
3. Column Creation / Import Scripts


### Creating a WebAPI Service

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
