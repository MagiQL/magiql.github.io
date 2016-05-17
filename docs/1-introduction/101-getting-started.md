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

Create an empty WebAPI project and install packages

```
PM> Install-Package MagiQL.Service.WebAPI.Routes
PM> Install-Package MagiQL.Service.WebAPI.StructureMap
```

Edit Global.asax.cs

```c#
public class WebApiApplication : System.Web.HttpApplication
{
    // enable if you want log4net
    // private static readonly ILog Log = LogManager.GetLogger(MethodBase.GetCurrentMethod().DeclaringType);
                
    protected void Application_Start()
    { 
        try
        {
            // enable if you want log4net
            //log4net.Config.XmlConfigurator.Configure();  
    
            // setup structuremap and configure datasources
            GlobalConfiguration.Configuration.ConfigureStructureMapForMagiQL<WebApiApplication,NullLoggingProvider>(
                x =>
                {
                    // your data source implementations
                    x.For<IReportsDataSource>().Use<MyDataSource1>();
                    x.For<IReportsDataSource>().Use<MyDataSource2>(); 
                });
                        
            // use the MagiQL API Controllers
            GlobalConfiguration.Configuration.UseMagiQLApi();
    
            //CustomisationsRegistration.RegisterAllCustomisations();
        }
        catch (Exception e)
        {
            try
            {
                // enable if you want log4net
                //Log.Error(e);
                System.Diagnostics.Debug.WriteLine(e);
            }
            catch
            {
                // We're stuffed. 
            }
    
            throw;
        }
    }
}
```
  
Edit Web.config and replace the text  in [ ]

```xml
 <connectionStrings>
    <add name="MagiQL" connectionString="Data Source=[db-server];Initial Catalog=[db-name];Persist Security Info=True;User ID=[username];Password=[password]" providerName="System.Data.SqlClient" />
 </connectionStrings>
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

