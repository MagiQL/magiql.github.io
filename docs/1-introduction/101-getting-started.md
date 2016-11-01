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

> To see an example WebAPI project, check out [this example repository](https://github.com/MagiQL/MagiQL-StarterProject/tree/master/src)

Create an empty Web project and tick the checkbox to include webapi packages. Then install the following nuget packages

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
                    //x.For<IReportsDataSource>().Use<MyDataSource1>();
                    //x.For<IReportsDataSource>().Use<MyDataSource2>(); 
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
 
## Data Adaptor Configuration

Now that you have setup an empty WebAPI project you will need to setup and register a DataAdaptor.

Create a new classs library project for the data adapter and add a project reference from the WebAPI project.

Install the following nuget packages   

```
PM> Install-Package MagiQL.DataAdapters.Base 
PM> Install-Package MagiQL.QuickStart.DataAdapter
```

The second package will add some files to your data adaper project which contain a simple scenario for a 2 table setup. You should modify and rename these files to suit your requirements.

The files installed will be   

 * Constants.cs - which identifies your datasource and specifies connection strings
 * KnownTables.cs - which specifies the available database table names 
 * MyDataSource1.cs - the datasource
 * MyDataSourc1Components.cs - allows you to override behaviours by specifying custom query builder classes
 * MyDataSource1QueryBuilderBase.cs - defines basic query builder behaviour
 * MyDataSource1TableMappings.cs - defines the available database tables and their relationships
 
Edit your WebApi projects Global.asax.cs by uncommenting the line   

```
 //x.For<IReportsDataSource>().Use<MyDataSource1>();
```

And replacing 'MyDataSource1' with the name of the datasource class you just created.

To verify that the data adaptor has been setup browse to '/v1/platforms' in your newly created WebAPI applicatin where you should see the new DataSource listed.


### Database Setup

### Installing the DataExplorer UI
> The WebApi service must be installed as a pre-requisite.
   

## Column Setup

### Column Manager UI

### Manual Column Insertion

### SQL Import Scripts


### Installing Natively
It is possible to use the MagiQL service directly without exposing a WebAPI project, however the steps are not documented here.
