---
title: Getting Started
layout: default 
permalink: docs/introduction/getting-started/
---

Getting Started
===

## Installation

There are 2 ways you can setup a MagiQL service. Either by cloning the [MagiQL repository](https://github.com/salesforce/MagiQL) and editing the code, or by installing the MagiQL nuget packages into an empty project. The instructions below will be for the latter.

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

To verify that the data adaptor has been setup browse to '/v1/platforms' in your newly created WebAPI application where you should see the new DataSource listed.


### Database Setup

MagiQL requires 2 tables to store column information and 1 table to store export statuses.

The scripts can be found [here](https://github.com/salesforce/MagiQL/tree/master/sql)

The tables created are

* ReportColumnMapping
* ReportColumnMappingMetaData
* ReportStatus

## Column Setup
Once your database has been set up, you can then start to insert columns into the ReportColumnMapping table. 

For details on values to insert please refer to [Columm Definitions](/docs/components/column-definitions/)

Alternatively, you can install the DataExplorer UI and define columns through the web interface.

### SQL Import Scripts

It is possible to write a script that will create columns directly from the database schema using [INFORMATION_SCHEMA].[COLUMNS] data.

This approach may be time saving if a lot of columns exist. An example of how this could work can be found [here](https://github.com/salesforce/MagiQL/tree/master/src/ScenarioTests/Scenarios/Scenario2-Analytics/Scenario2.Tests.Integration/SqlScripts/Columns)


### Installing the DataExplorer UI
> The WebApi service must be installed as a pre-requisite.

The DataExplorer UI will allow you to easily build and execute queries against your MagiQL service. It will also allow you to create and edit column definitions through a UI.

To install the DataExplorer, copy the code from [here](https://github.com/salesforce/MagiQL/tree/master/src/ScenarioTests/Service/MagiQL.DataExplorer.Web)

And then edit the Web.Config to point to your MagiQL service instance.

```
    <add key="Services.ReportsService.BaseUrl" value="http://localhost:8088/" />
```


### Installing Natively
It is possible to use the MagiQL service directly without exposing a WebAPI project, however the steps are not documented here.
