---
title: Extensibility
layout: default
permalink: docs/extensibility/
---

Extensibility
===================

 The MagiQL framework has been designed to be as extensible as possible. 
 
 At the heard of this extensibility is the `DataSourceComponentsBase` class, which you must inherit when implementing a data adapter. In the `RegisterComponents()` method, you can override the default components that define how queries are built. This includes several types of query builders which define how the overall sql query is structured, and how the many types of common table expressions are defined. All of these query builder classes expose public virtual methods so that it is easy to inherit and override behavour and gain full control over how sql is generated.
 
 In addition to extending the sql generation code, other features such as render fiters have been designed to be configurable and extensible.
