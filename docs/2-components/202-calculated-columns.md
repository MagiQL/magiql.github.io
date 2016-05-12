---
title: Calculated Columns
layout: default
permalink: docs/components/calculated-columns/
---

Calculated Columns
====
Calculated columns allow you to reference one or more table columns using a formula. Calculated columns can be used to perform mathematical calculations, or use functions to modify the result.

[Referencing Colums](#referencing-colums)  
[Mathematical Operators](#mathematical-operators)  
[Functions](#functions)  
[Logical Operators](#logical-operators)  

### Referencing Columns
Calculated columns are defined by specifying a formula in the `FieldName` property of the [ColumnDefinition]().

In order to reference other columns in a calculated column you must use the `UniqueName` of the referenced column. 

**Referenced Column**  
  
> *UniqueName :* Foo  
 *FieldName :* Foo

...

**Calculated Column Example**  
  
> *UniqueName* : FooTimesTwo  
 *FieldName* : Foo* 2

Custom columns can be also used to create an alias for a column, simply by referring to the column to be aliased.

**Alias Column Example**  
  
> *UniqueName :* FooAlias  
 *FieldName :* Foo  

A custom column cannot reference itself or any other column which references back to the custom column as this would cause infinite recursion.

### Mathematical Operators
Mathematical operators can be used with numerical values. Values to the left and right of the operators can be either `UniqueName` references to numerical columns, or scalar values.

When using mathemetical operators, the operator should be seperated by a space on either side.

#### Addition

```Foo + 2``` Or ```Foo + Bar```

#### Subtraction

```2 - Foo``` Or ```Bar - Foo```

#### Multiplication
To divide a column or number by another column or number

```Foo * 2.5``` Or ```Foo * Bar```

#### Division

To divide a column or number by another column or number. Decimal values will be handled automatically, there is no need to cast.

```Foo / 100``` Or ```Foo / Bar```

#### Percentage
Percentage operators allow you to add or subtract a value by a percentage of itself.

```Foo + 10%``` Or ```Foo - 25%```

#### Parentheses 
To determine the order of operations, parentheses can be used. It is not necessary to use a space to separate parentheses.

```(Foo + 2) / Bar```

### Functions
Functions provide additional means to modify results. Functions may be numerical, logical or for formatting. Functions can also be nested inside other functions.

|Function|Type|Description|
|---|---|---|
|COUNT()|Numeric| Returns a count of the number of records aggregated into the row for the specified table|
|MAXOF(`A`,`B`)|Numeric| Returns the maximum value of either `A` or `B`|
|MINOF(`A`,`B`)|Numeric| Returns the minimum value of either `A` or `B`|
|CEILING(`A`)|Numeric|Returns `A` rounded up to the nearest integer|
|FLOOR(`A`)|Numeric|Returns `A` rounded down to the nearest integer|
|ISNULL(`A`)|Boolean| Returns *true* if `A` is NULL|
|NULLIF(`A`,`B`)|*n/a*| Returns *NULL* if `A` equals `B` otherwise returns `A` |
|IFTHENELSE(`A`,`B`,`C`)|*n/a*| When the logical expression `A` evaluates to *true* returns `B` otherwise returns `C`


#### Logical Operators
The following logical and comparison operators are supported

 - `&&` (and)
 - `||` (or)
 - `==` (equal)
 - `!=` (not equal)
 - `>` (greater than) 
 - `<` (less than)
 - `>=` (greater than or equal) 
 - `<=` (less than or equal)

