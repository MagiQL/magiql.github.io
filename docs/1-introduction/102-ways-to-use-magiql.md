---
title: Ways To Use MagiQL
layout: default
permalink: docs/introduction/uses/
---

Ways To Use MagiQL
=======

MagiQL has been designed to be flexible and support as many use cases as possible. 

### As A Service (recommended)
The recommended way to use MagiQL is to install it as a WebApi service. The WebAPI service exposes a set of RESTful API endpoints which allow you to execute queries and retrieve data. All the functionality of MagiQL is exposed over the API, this includes querying, column management, generating SQL and reading configuration. 

Running as a service brings the benefits of seperation (and the ability to update in isolation), distribution and isolated monitoring.

### Directly inside your application
If you cannot use MagiQL over a web service, then it is possible to set it up to run directly inside your application. This may require some extra work to configure MagiQL to work alongside your existing code. The API and native service interface have been designed to match, so the interactions with MagiQL are the same as with the API.

### To Run Ad-Hoc Reports
The DataExplorer UI offers an off the shelf solution which allows you to build & execute ad hoc queries against your database. These reports can also be exported using the spreadsheet generator. For this scenario the only requirements are to configure the data providers with table and column information.

### As a SQL Generator
Rather than selecting data using MagiQL inside an application, you may wish to use the SQL generation functionality to compile SQL to be used at a later date or run through alternative SQL tools. This can be done either directly through the API or native service, or by using the DataExplorer UI to build & execute queries and then inspect the generated SQL. 
