# dh-utils-common

[Readme in Czech (Readme v Češtině)](https://github.com/hezky/dh-utils-common/blob/master/doc/README-czech.md)

The library contains basic functions over various primitive values, data types and data structures.

## Description

> The basic primitive values, data types and data structures we work with will be loosely referred in this document as **types of values**, although this does not exactly correspond to the exact JS specification.

> These JS constructs are meant here as **types of values** in this library: [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), [Boolean](https://developer.mozilla.org/en-US/docs/Glossary/Boolean), [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date), [Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions), [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null), [Number](https://developer.mozilla.org/en-US/docs/Glossary/number), [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object), [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp), [String](https://developer.mozilla.org/en-US/docs/Glossary/string), [Symbol](https://developer.mozilla.org/en-US/docs/Glossary/symbol), [undefined](https://developer.mozilla.org/en-US/docs/Glossary/undefined).

> ** Basic functions ** in this library are divided into:
* General functions = work for all types of values
* Local functions = work for a specific value type

--------------------

## General functions

> If you work with variables with different or general value types, use **general functions**.

Example **general functions**:
``` javaScript
import { compare, utilsCommon } from 'dh-utils-common';

compare(0,0); // 0
compare(false, 0); // -1
// or
utilsCommon.compare(0,0); // 0
utilsCommon.compare(false, 0); // -1
```

<a name="splitFceGeneral"></a>
> List of **general functions**: [compare](#api_common_compare), [compareReferences](#api_common_compareReferences), [copy](#api_common_copy), [equal](#api_common_equal), [isArray](#api_common_isArray), [isBoolean](#api_common_isBoolean), [isDate](#api_common_isDate), [isDefined](#api_common_isDefined), [isEmpty](#api_common_isEmpty), [isFunction](#api_common_isFunction), [isNotArray](#api_common_isNotArray), [isNotDefined](#api_common_isNotDefined), [isNotEmpty](#api_common_isNotEmpty), [isNotNull](#api_common_isNotNull), [isNumber](#api_common_isNumber), [isNull](#api_common_isNull), [isObject](#api_common_isObject), [isPrimitive](#api_common_isPrimitive), [isRegExp](#api_common_isRegExp), [isString](#api_common_isString), [isStringEmpty](#api_common_isStringEmpty), [isStringNotEmpty](#api_common_isStringNotEmpty), [isSymbol](#api_common_isSymbol), [isUndefined](#api_common_isUndefined), [notEqual](#api_common_notEqual)

--------------------
