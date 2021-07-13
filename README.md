# dh-utils-common

[Readme in Czech (Readme v Češtině)](https://github.com/hezky/dh-utils-common/blob/master/doc/README-czech.md)

The library contains basic functions over various primitive values, data types and data structures.

## Description

> The basic primitive values, data types and data structures we work with will be loosely referred in this document as **types of values**, although this does not exactly correspond to the exact JS specification.

> These JS constructs are meant here as **types of values** in this library: [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), [Boolean](https://developer.mozilla.org/en-US/docs/Glossary/Boolean), [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date), [Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions), [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null), [Number](https://developer.mozilla.org/en-US/docs/Glossary/number), [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object), [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp), [String](https://developer.mozilla.org/en-US/docs/Glossary/string), [Symbol](https://developer.mozilla.org/en-US/docs/Glossary/symbol), [undefined](https://developer.mozilla.org/en-US/docs/Glossary/undefined).

**Basic functions** in this library are divided into:
- [general functions](#general_function) = work for all types of values
- [local functions](#local_function_by_type) = work for a specific value type

--------------------

<a name="general_function"></a>
## General functions

> If you work with variables with different or general value types, use **general functions**.

Usage **general functions**:
``` javaScript
import { compare, utilsCommon } from 'dh-utils-common';

compare(0,0); // 0
compare(false, 0); // -1
// or
utilsCommon.compare(0,0); // 0
utilsCommon.compare(false, 0); // -1
```

<a name="splitFceGeneral"></a>
List of **general functions**: [compare](#api_common_compare), [compareReferences](#api_common_compareReferences), [copy](#api_common_copy), [equal](#api_common_equal), [isArray](#api_common_isArray), [isBoolean](#api_common_isBoolean), [isDate](#api_common_isDate), [isDefined](#api_common_isDefined), [isEmpty](#api_common_isEmpty), [isFunction](#api_common_isFunction), [isNotArray](#api_common_isNotArray), [isNotDefined](#api_common_isNotDefined), [isNotEmpty](#api_common_isNotEmpty), [isNotNull](#api_common_isNotNull), [isNumber](#api_common_isNumber), [isNull](#api_common_isNull), [isObject](#api_common_isObject), [isPrimitive](#api_common_isPrimitive), [isRegExp](#api_common_isRegExp), [isString](#api_common_isString), [isSymbol](#api_common_isSymbol), [isUndefined](#api_common_isUndefined),
[findOutTheType](#api_common_findOutTheType), [notEqual](#api_common_notEqual)

--------------------

<a name="local_function_by_type"></a>
## Local functions by type

> If you are working with variables with a specific value type, use **local functions by type**.

Usage **local functions by type**:
``` javascript
import { utilsArray } from 'dh-utils-common';

utilsArray.compare([1,2,3],[1,2,3]) // 0
```

The basic local functions are 4: [compare](#local_function_compare), [copy](#local_function_copy), [equal](#local_function_equal), [is](#local_function_is)

<a name="local_function_compare"></a>
### Local function compare(a,b)
Local function **compare (a,b)** = compare value type. Returns the values: -1 (a <b) | 0 (a = b) | 1 (a < b).

Usage local function **compare(a,b)**:
``` javascript
import { utilsString } from 'dh-utils-common';

utilsString.compare("ABC","ABC"); // 0
utilsString.compare("ABC","ZXY"); // -1
```

<a name="local_function_copy"></a>
### Local function copy(a)
Local function **copy(a)** = creates a copy. In the case of a complex data structure, it is a deep copy.

Usage locale function **copy**:
``` javascript
import { utilsArray } from 'dh-utils-common';

utilsArray.copy([1,2,3]); // [1,2,3]
```

<a name="local_function_equal"></a>
### Local function **equal(a,b)**
Local function ** equal (a,b) ** = compares the value type. Returns values true or false.

Usage locale function **copy**:
``` javascript
import { utilsString } from 'dh-utils-common';

utilsString.equal("ABC","ZXY"); // false
```

<a name="local_function_is"></a>
### Local function **is(a)**
Local function ** is (a) ** = check if the given variable is of a given value type? Returns values true or false.

Usage locale function **is**:
``` javascript
import { utilsString } from 'dh-utils-common';

utilsString.is("ABC"); // true
utilsString.is(0); // false
```

<a name="splitFceType"></a>
List **local functions by type**:
- Array : [compare](#api_byTypeArray_compare), [copy](#api_byTypeArray_copy), [equal](#api_byTypeArray_equal), [is](#api_byTypeArray_is), [isEmpty](#api_byTypeArray_isEmpty), [isNotEmpty](#api_byTypeArray_isNotEmpty)
- Boolean : [compare](#api_byTypeBoolean_compare), [copy](#api_byTypeBoolean_copy), [equal](#api_byTypeBoolean_equal), [is](#api_byTypeBoolean_is)
- Date : [compare](#api_byTypeDate_compare), [copy](#api_byTypeDate_copy), [equal](#api_byTypeDate_equal), [is](#api_byTypeDate_is)
- Function : [compare](#api_byTypeFunction_compare), [copy](#api_byTypeFunction_copy), [equal](#api_byTypeFunction_equal), [is](#api_byTypeFunction_is)
- Null : [compare](#api_byTypeNull_compare), [copy](#api_byTypeNull_copy), [equal](#api_byTypeNull_equal), [is](#api_byTypeNull_is)
- Number : [compare](#api_byTypeNumber_compare), [copy](#api_byTypeNumber_copy), [equal](#api_byTypeNumber_equal), [is](#api_byTypeNumber_is)
- Object : [compare](#api_byTypeObject_compare), [copy](#api_byTypeObject_copy), [equal](#api_byTypeObject_equal), [is](#api_byTypeObject_is), [isEmpty](#api_byTypeObject_isEmpty), [isNotEmpty](#api_byTypeObject_isNotEmpty)
- RegExp : [compare](#api_byTypeRegExp_compare), [copy](#api_byTypeRegExp_copy), [equal](#api_byTypeRegExp_equal), [is](#api_byTypeRegExp_is)
- String : [compare](#api_byTypeString_compare), [copy](#api_byTypeString_copy), [equal](#api_byTypeString_equal), [is](#api_byTypeString_is), [isEmpty](#api_byTypeString_isEmpty), [isNotEmpty](#api_byTypeString_isNotEmpty), [isNumeric](#api_byTypeString_isNumeric)
- Symbol : [compare](#api_byTypeSymbol_compare), [copy](#api_byTypeSymbol_copy), [equal](#api_byTypeSymbol_equal), [is](#api_byTypeSymbol_is)
- Undefined : [compare](#api_byTypeUndefined_compare), [copy](#api_byTypeUndefined_copy), [equal](#api_byTypeUndefined_equal), [is](#api_byTypeUndefined_is)

--------------------

## Working with specific value types

In exceptional cases, you will want to use basic functions over your specially created types. Yes, it is possible. These **general functions** compare, copy, equal, is also have a third parameter of the function, with which you can adjust over which types of values you want to perform the basic functionality.

Example: We will have special data structures / special types of values "Car" and "Airplane". These types of values differ by the "model" attribute. The special value type "Car" can therefore have the model = "Honda" or "Suzuki". Therefore, the special value type "Airplane" can have model = "Mig" or "F16":


``` javascript
import { compare } from "dh-utils-common";

// functions over special data structure (value types)
const typeValueAirplane = {
  _fce: "Airplane",
  compare: function (a, b) {
    return a.model.localeCompare(b.model);
  },
  copy: function(a){/* zde bude fce copy */},
  equal: function(a, b){return a.model.toString() === b.model.toString();},
  is: function (a) {
    return a.type === "airplane";
  },
};
const typeValueCar = {
  _fce: "Car",
  compare: function (a, b) {
    return a.model.localeCompare(b.model);
  },
  copy: function(a){/* zde bude fce copy */},
  equal: function(a, b){return a.model.toString() === b.model.toString();},
  is: function (a) {
    return a.type === "car";
  },
};

// special data structure classes
const ClassAirplane = class Airplane {
  constructor(model) {
    this.type = "airplane";
    this.model = model || "empty";
  }
};
const ClassCar = class Car {
  constructor(model) {
    this.type = "car";
    this.model = model || "empty";
  }
};

// defining objects
const airplaneIljusin = new ClassAirplane("Iljusin");
const carSuzuki = new ClassCar("Suzuki");
const carHonda = new ClassCar("Honda");
const carHonda2 = new ClassCar("Honda");

// defining a list of a specific data structure (type of values)
const listTypeValues = [typeValueAirplane, typeValueCar];

// specific work with functions
compare(airplaneIljusin, carSuzuki, listTypeValues); // -1
compare(carSuzuki, carHonda, listTypeValues); // -1
compare(carHonda, carHonda2, listTypeValues); // 0
```
--------------------

## API - General functions

<a name="api_common_compare"></a>
### [⌂](#splitFceGeneral) compare(any,any,array) : number
- **description** : comparison of two values (any)
- **return type** : {number} -1|0|1
- **parametr a** : {any}
- **parametr b** : {any}
- **parametr c** : {array} sheet type values; specific use

*usage* :
~~~javascript
import { compare, utilsCommon } from 'dh-utils-common';

compare(0,0); // 0
// or
utilsCommon.compare(0,0); // 0
~~~

<a name="api_common_compareReferences"></a>
### [⌂](#splitFceGeneral) compareReferences(any,any) : number
- **description** : comparison of two references
- **return type** : {number} -1|0|1
- **parametr a** : {any}
- **parametr b** : {any}

*usage* :
~~~javascript
import { compareReferences, utilsCommon } from 'dh-utils-common';

compareReferences(0,0); // 0
// or
utilsCommon.compareReferences(0,0); // 0


const  a = {}, b = a;
compareReferences(a,b); // 0

const  a = {}, b = {}
compareReferences(a,b); // 1
~~~

<a name="api_common_copy"></a>
### [⌂](#splitFceGeneral) copy(any) : any
- **description** : deep copy
- **return type** : {any}
- **parametr a** : {any}

*usage* :
~~~javascript
import { copy, utilsCommon } from 'dh-utils-common';

copy({a:"a",b:"b"}); // {a:"a",b:"b"}
// or
utilsCommon.copy({a:"a",b:"b"}); // {a:"a",b:"b"}

copy([1,2,3,4]); // [1,2,3,4]
~~~


<a name="api_common_equal"></a>
### [⌂](#splitFceGeneral) equal(any,any) : boolean
- **description** : equal
- **return type** : {boolean} true|false
- **parametr a** : {any}
- **parametr b** : {any}

*usage* :
~~~javascript
import { copy, utilsCommon } from 'dh-utils-common';

equal(0,0); // true
// or
utilsCommon.equal(0,0); // true


equal(3,3); // true
equal([0,1,2,3,[0,1,2]],[0,1,2,3,[0,1,2]]); // true
equal([0,1,2,3,[0,1,2]],[0,1,2,3,[0,2,1]]); // false
~~~

<a name="api_common_isArray"></a>
### [⌂](#splitFceGeneral) isArray(any) : boolean
- **description** : is the value of the array type?
- **return type** : {boolean} true|false
- **parametr a** : {any}

*usage* :
~~~javascript
import { copy, utilsCommon } from 'dh-utils-common';

isArray(0); // false
// or
utilsCommon.isArray(0); // false

isArray([1,2,3,4]); // true
isArray(3); // false
~~~

<a name="api_common_isBoolean"></a>
### [⌂](#splitFceGeneral) isBoolean(any) : boolean
- **description** : is the value of the array boolean?
- **return type** : {boolean} true|false
- **parametr a** : {any}

*usage* :
~~~javascript
import { copy, utilsCommon } from 'dh-utils-common';

isBoolean(0); // false
// or
utilsCommon.isBoolean(0); // false

isBoolean(true); // true
isBoolean(false); // true
isBoolean([1,2,3,4]); // false
~~~

<a name="api_common_isDate"></a>
### [⌂](#splitFceGeneral) isDate(any) : boolean
- **description** : is the value of the date type?
- **return type** : {boolean} true|false
- **parametr a** : {any}

*usage* :
~~~javascript
import { copy, utilsCommon } from 'dh-utils-common';

isDate(0); // false
// or
utilsCommon.isDate(0); // false

isDate(new Date()); // true
isDate(3); // false
~~~

<a name="api_common_isDefined"></a>
### [⌂](#splitFceGeneral) isDefined(any) : boolean
- **description** : is the value defined?
- **return type** : {boolean} true|false
- **parametr a** : {any}

*usage* :
~~~javascript
import { copy, utilsCommon } from 'dh-utils-common';

isDefined(0); // true
// or
utilsCommon.isDefined(0); // true

isDefined([1,2,3,4]); // true
isDefined(null); // false
isDefined(undefined); // false
~~~

<a name="api_common_isEmpty"></a>
### [⌂](#splitFceGeneral) isEmpty(any) : boolean
- **description** : is the value empty?
- **return type** : {boolean} true|false
- **parametr a** : {any}

*usage* :
~~~javascript
import { isEmpty, utilsCommon } from 'dh-utils-common';

isEmpty(0); // true
// or
utilsCommon.isEmpty(0); // true

isEmpty(null); // true
isEmpty(undefined); // true
isEmpty([]); // true
isEmpty({}); // true
isEmpty(""); // true
isEmpty([1,2,3,4]); // false
isEmpty(42); // false
isEmpty("hellooo"); // false
~~~

<a name="api_common_isFunction"></a>
### [⌂](#splitFceGeneral) isFunction(any) : boolean
- **description** : is the value of the function type?
- **return type** : {boolean} true|false
- **parametr a** : {any}

*usage* :
~~~javascript
import { isFunction, utilsCommon } from 'dh-utils-common';

isFunction(0); // false
// or
utilsCommon.isFunction(0); // false

isFunction(()=>{}); // true
isFunction(3); // false
~~~

<a name="api_common_isNotArray"></a>
### [⌂](#splitFceGeneral) isNotArray(any) : boolean
- **description** : is not the value of the array type?
- **return type** : {boolean} true|false
- **parametr a** : {any}

*usage* :
~~~javascript
import { isNotArray, utilsCommon } from 'dh-utils-common';

isNotArray(0); // false
// or
utilsCommon.isNotArray(0); // false

isNotArray([1,2,3,4]); // false
isNotArray({}); // true`
~~~

<a name="api_common_isNotDefined"></a>
### [⌂](#splitFceGeneral) isNotDefined(any) : boolean
- **description** : is not value defined?
- **return type** : {boolean} true|false
- **parametr a** : {any}

*usage* :
~~~javascript
import { isNotDefined, utilsCommon } from 'dh-utils-common';

isNotDefined(0); // false
// or
utilsCommon.isNotDefined(0); // false

isNotDefined([1,2,3,4]); // true
isNotDefined(null); // false
isNotDefined(undefined); // false
~~~

<a name="api_common_isNotEmpty"></a>
### [⌂](#splitFceGeneral) isNotEmpty(any) : boolean
- **description** : is not value empty?
- **return type** : {boolean} true|false
- **parametr a** : {any}

*usage* :
~~~javascript
import { isNotEmpty, utilsCommon } from 'dh-utils-common';

isNotDefined(0); // false
// or
utilsCommon.isNotDefined(0); // false

isNotEmpty([1,2,3,4]); // true
isNotEmpty(42); // true
isNotEmpty("hellooo"); // true
isNotEmpty(null); // false
isNotEmpty(undefined); // false
isNotEmpty([]); // false
isNotEmpty({}); // false
isNotEmpty(""); // true
~~~

<a name="api_common_isNotNull"></a>
### [⌂](#splitFceGeneral) isNotNull(any) : boolean
- **description** : is not the value null?
- **return type** : {boolean} true|false
- **parametr a** : {any}

*usage* :
~~~javascript
import { isNotNull, utilsCommon } from 'dh-utils-common';

isNotNull(0); // false
// or
utilsCommon.isNotNull(0); // false

isNotNull(null); // false
isNotNull(5); // true
~~~

<a name="api_common_isNumber"></a>
### [⌂](#splitFceGeneral) isNumber(any) : boolean
- **description** : is a value of type number?
- **return type** : {boolean} true|false
- **parametr a** : {any}

*usage* :
~~~javascript
import { isNumber, utilsCommon } from 'dh-utils-common';

isNumber(0); // true
// or
utilsCommon.isNumber(0); // true

isNumber("5"); // false
isNumber(5); // true
~~~

<a name="api_common_isNull"></a>
### [⌂](#splitFceGeneral) isNull(any) : boolean
- **description** : is a value null?
- **return type** : {boolean} true|false
- **parametr a** : {any}

*usage* :
~~~javascript
import { isNull, utilsCommon } from 'dh-utils-common';

isNull(0); // false
// or
utilsCommon.isNull(0); // false

isNull(null); // true
isNull(5); // false
~~~

<a name="api_common_isObject"></a>
### [⌂](#splitFceGeneral) isObject(any) : boolean
- **description** : is a value of type object?
- **return type** : {boolean} true|false
- **parametr a** : {any}

*usage* :
~~~javascript
import { isObject, utilsCommon } from 'dh-utils-common';

isObject(0); // false
// or
utilsCommon.isObject(0); // false

isObject({}); // true
isObject(3); // false
~~~

<a name="api_common_isPrimitive"></a>
### [⌂](#splitFceGeneral) isPrimitive(any) : boolean
- **description** : is the value a primitive type?
- **return type** : boolean true|false
- **parametr a** : {any}

*usage* :
~~~javascript
import { isPrimitive, utilsCommon } from 'dh-utils-common';

isPrimitive(0); // true
// or
utilsCommon.isPrimitive(0); // true

isPrimitive("Hellloo"); // true
isPrimitive(3); // true
isPrimitive({}); // false
~~~

<a name="api_common_isRegExp"></a>
### [⌂](#splitFceGeneral) isRegExp(any) : boolean
- **description** : is a value of type a regular expression?
- **return type** : {boolean} true|false
- **parametr a** : {any}

*usage* :
~~~javascript
import { isRegExp, utilsCommon } from 'dh-utils-common';

isRegExp(0); // false
// or
utilsCommon.isRegExp(0); // false

isRegExp(/ab+c/); // true
~~~

<a name="api_common_isString"></a>
### [⌂](#splitFceGeneral) isString(any) : boolean
- **description** : is a value of type string?
- **return type** : {boolean} true|false
- **parametr a** : {any}

*usage* :
~~~javascript
import { isString, utilsCommon } from 'dh-utils-common';

isString("abc"); // true
// or
utilsCommon.isString("abc"); // true

isString("Hellloo"); // true
isString(3);  // false
~~~

<a name="api_common_isSymbol"></a>
### [⌂](#splitFceGeneral) isSymbol(any) : boolean
- **description** : is a value of type symbol?
- **return type** : {boolean} true|false
- **parametr a** : {any}

*usage* :
~~~javascript
import { isSymbol, utilsCommon } from 'dh-utils-common';

isSymbol(0); // false
// or
utilsCommon.isSymbol(0); // false

isSymbol(Symbol()); // true
isSymbol(Symbol(42)); // true
isSymbol(Symbol("foo")); // true
~~~

<a name="api_common_isUndefined"></a>
### [⌂](#splitFceGeneral) isUndefined(any) : boolean
- **description** : is a value of type undefined?
- **return type** : {boolean} true|false
- **parametr a** : {any}

*usage* :
~~~javascript
import { isUndefined, utilsCommon } from 'dh-utils-common';

isUndefined(0); // false
// or
utilsCommon.isUndefined(0); // false

const prom;
isUndefined(prom); // true
isUndefined(5); // false
~~~

<a name="api_common_findOutTheType"></a>
### [⌂](#splitFceGeneral) findOutTheType(any) : string
- **description** : found type and returning the name as a string
- **return type** : {string} type as a string
- **parametr a** : {any}

*použití* :
~~~javascript
import { findOutTheType, utilsCommon } from 'dh-utils-common';

findOutTheType(0); // "number"
findOutTheType("hellooo"); // "string"
// or
utilsCommon.findOutTheType(0); // "number"
utilsCommon.findOutTheType("hellooo"); // "string"
~~~

<a name="api_common_notEqual"></a>
### [⌂](#splitFceGeneral) notEqual(any,any) : boolean
- **description** : not equal
- **return type** : {boolean} true|false
- **parametr a** : {any}
- **parametr b** : {any}

*usage* :
~~~javascript
import { notEqual, utilsCommon } from 'dh-utils-common';

notEqual(0,0); // false
// or
utilsCommon.notEqual(0,0); // false

notEqual(3,3); // false
notEqual([0,1,2,3,[0,1,2]],[0,1,2,3,[0,1,2]]); // false
notEqual([0,1,2,3,[0,1,2]],[0,1,2,3,[0,2,1]]); // true
~~~

--------------------

<a name="api_byTypeArray"></a>
## [⌂](#splitFceType) API - Local functions by type Array

<a name="api_byTypeArray_NAME"></a>
## [⌂](#splitFceType) NAME
- **popis** : constant NAME="array"

*použití* :
~~~javascript
import { utilsArray } from 'dh-utils-common';

utilsArray.NAME // array
~~~

<a name="api_byTypeArray_compare"></a>
### [⌂](#splitFceType) compare(array,array) : number
- **popis** : compare two arrays
- **return type** : {number} -1|0,1
- **parametr a** : {array}
- **parametr b** : {array}

*usage* :
~~~javascript
import { utilsArray } from 'dh-utils-common';

utilsArray.compare([1,2,3],[1,2,3]) // 0
~~~

<a name="api_byTypeArray_copy"></a>
### [⌂](#splitFceType) copy(array) : array
- **popis** : deep copy array
- **return type** : {array}
- **parametr a** : {array}

*usage* :
~~~javascript
import { utilsArray } from 'dh-utils-common';

utilsArray.copy([1,2,3,4]); // [1,2,3,4]
~~~

<a name="api_byTypeArray_equal"></a>
### [⌂](#splitFceType) equal(array,array) : boolean
- **popis** : equal two arrays
- **return type** : {boolean} false,true
- **parametr a** : {array}
- **parametr b** : {array}

*usage* :
~~~javascript
import { utilsArray } from 'dh-utils-common';

utilsArray.equal([1,2,3,4],[1,2,3,4]); // true
utilsArray.equal([4,2,3,1],[1,2,3,4]); // false
~~~

<a name="api_byTypeArray_is"></a>
### [⌂](#splitFceType) is(any) : boolean
- **popis** : is a value of type array? same function as utilsCommon.isArray
- **return type** : {boolean}
- **parametr a** : {any}

*usage* :
~~~javascript
import { utilsArray } from 'dh-utils-common';

utilsArray.is(5); // false
utilsArray.is([]); // true
~~~

<a name="api_byTypeArray_isEmpty"></a>
### [⌂](#splitFceType) isEmpty(array) : boolean
- **popis** : is an array empty?
- **return type** : {boolean}
- **parametr a** : {array}

*usage* :
~~~javascript
import { utilsArray } from 'dh-utils-common';

utilsArray.isEmpty([1, 2, 3]); // false
utilsArray.isEmpty([]); // true
~~~

<a name="api_byTypeArray_isNotEmpty"></a>
### [⌂](#splitFceType) isNotEmpty(array) : boolean
- **popis** : is not an array empty?
- **return type** : {boolean}
- **parametr a** : {array}

*usage* :
~~~javascript
import { utilsArray } from 'dh-utils-common';

utilsArray.isNotEmpty([1, 2, 3]); // false
utilsArray.isNotEmpty([]); // true
~~~

--------------------

<a name="api_byTypeBoolean"></a>
## [⌂](#splitFceType) API - Local functions by type Boolean

<a name="api_byTypeBoolean_NAME"></a>
## [⌂](#splitFceType) NAME
- **popis** : constant NAME="boolean"

*použití* :
~~~javascript
import { utilsBoolean } from 'dh-utils-common';

utilsBoolean.NAME // boolean
~~~

<a name="api_byTypeBoolean_compare"></a>
### [⌂](#splitFceType) compare(boolean,boolean) : number
- **popis** : compare boolean
- **return type** : {number} -1|0|1
- **parametr a** : {boolean}
- **parametr b** : {boolean}

*usage* :
~~~javascript
import { utilsBoolean } from 'dh-utils-common';

utilsBoolean.compare(true,true); // 0
utilsBoolean.compare(false,true); // -1
~~~

<a name="api_byTypeBoolean_copy"></a>
### [⌂](#splitFceType) copy(boolean) : boolean
- **popis** : copy boolean
- **return type** : {boolean}
- **parametr target** : {boolean}

*usage* :
~~~javascript
import { utilsBoolean } from 'dh-utils-common';

utilsBoolean.copy(true); // true
~~~

<a name="api_byTypeBoolean_equal"></a>
### [⌂](#splitFceType) equal(boolean,boolean) : boolean
- **popis** : equal boolean
- **return type** : {boolean} false,true
- **parametr a** : {boolean}
- **parametr b** : {boolean}

*usage* :
~~~javascript
import { utilsBoolean } from 'dh-utils-common';

utilsBoolean.equal(true,true); // true
utilsBoolean.equal(false,true); // false
~~~

<a name="api_byTypeBoolean_is"></a>
### [⌂](#splitFceType) is(any) : boolean
- **popis** : is a value of type boolean? same function as utilsCommon.isBoolean
- **return type** : {boolean}
- **parametr a** : {any}

*usage* :
~~~javascript
import { utilsBoolean } from 'dh-utils-common';

utilsBoolean.is(true); // true
utilsBoolean.is(false); // false
~~~

--------------------

<a name="api_byTypeDate"></a>
## [⌂](#splitFceType) API - Local functions by type Date

<a name="api_byTypeDate_NAME"></a>
## [⌂](#splitFceType) NAME
- **popis** : constant NAME="date"

*použití* :
~~~javascript
import { utilsDate } from 'dh-utils-common';

utilsDate.NAME // date
~~~

<a name="api_byTypeDate_compare"></a>
### [⌂](#splitFceType) compare(date,date) : number
- **popis** : compare date
- **return type** : {number} -1|0|1
- **parametr 1** : {date}
- **parametr 2** : {date}

*usage* :
~~~javascript
import { utilsDate } from 'dh-utils-common';

let date1 = new Date(2015,5,5);
let date2 = new Date(2015,5,6);
let result = utilsDate.compare(date1,date2); // -1
~~~

<a name="api_byTypeDate_copy"></a>
### [⌂](#splitFceType) copy(date) : boolean
- **popis** : deep copy date
- **return type** : {date}
- **parametr 1** : {date}

*usage* :
~~~javascript
import { utilsDate } from 'dh-utils-common';

const date = new Date(2016,1,1);
utilsDate.copy(date); // Date(2016,1,1)
~~~

<a name="api_byTypeDate_equal"></a>
### [⌂](#splitFceType) equal(date,date) : boolean
- **popis** : equal two dates
- **return type** : {boolean}
- **parametr 1** : {date}
- **parametr 2** : {date}

*usage* :
~~~javascript
import { utilsDate } from 'dh-utils-common';

utilsDate.equal(new Date(2015,5,5),new Date(2015,5,6)); // false
~~~

<a name="api_byTypeDate_is"></a>
### [⌂](#splitFceType) is(any) : boolean
- **popis** : is a value of type date? same function as utilsCommon.isDate
- **return type** : {boolean}
- **parametr a** : {any}

*usage* :
~~~javascript
import { utilsDate } from 'dh-utils-common';

utilsDate.is(new Date(2015,5,5)); // true
utilsDate.is(0); // false
~~~

--------------------

<a name="api_byTypeFunction"></a>
## [⌂](#splitFceType) API - Local functions by type Function

<a name="api_byTypeFunction_NAME"></a>
## [⌂](#splitFceType) NAME
- **popis** : constant NAME="function"

*použití* :
~~~javascript
import { utilsFunction } from 'dh-utils-common';

utilsFunction.NAME // function
~~~

<a name="api_byTypeFunction_compare"></a>
### [⌂](#splitFceType) compare(function,function) : number
- **popis** :  compare two functions
- **return type** : {number} -1,0,1
- **parametr a** : {function}
- **parametr b** : {function}

*usage* :
~~~javascript
import { utilsFunction } from 'dh-utils-common';

utilsFunction.compare(()=>"a",()=>"b"); // -1
~~~

<a name="api_byTypeFunction_copy"></a>
### [⌂](#splitFceType) copy(function) : boolean
- **popis** : copy function
- **return type** : {function}
- **parametr 1** : {function}

*usage* :
~~~javascript
import { utilsFunction } from 'dh-utils-common';

const func = function(a){return a};
utilsFunction.copy(func); // function(a){return a};
~~~

<a name="api_byTypeFunction_equal"></a>
### [⌂](#splitFceType) equal(function,function) : boolean
- **popis** : equal two functions
- **return type** : {function}
- **parametr 1** : {function}
- **parametr 2** : {function}

*usage* :
~~~javascript
import { utilsFunction } from 'dh-utils-common';

const func1 = function(){return "func1"};
const func2 = function(){return "func2"};

utilsFunction.equal(func1,func2); // false
~~~

<a name="api_byTypeFunction_is"></a>
### [⌂](#splitFceType) is(any) : boolean
- **popis** : is a value of type function? same function as utilsCommon.isFunction
- **return type** : {boolean}
- **parametr a** : {any}

*usage* :
~~~javascript
import { utilsFunction } from 'dh-utils-common';

utilsFunction.is(function(){return "func"}); // true
utilsFunction.is(0); // false
~~~

--------------------

<a name="api_byTypeNull"></a>
## [⌂](#splitFceType) API - Local functions by type Null

<a name="api_byTypeNull_NAME"></a>
## [⌂](#splitFceType) NAME
- **popis** : constant NAME="null"

*použití* :
~~~javascript
import { utilsNull } from 'dh-utils-common';

utilsNull.NAME // null
~~~

<a name="api_byTypeNull_compare"></a>
### [⌂](#splitFceType) compare(null,null) : number
- **popis** : compare null
- **return type** : {number} -1|0|1
- **parametr a** : {null}
- **parametr b** : {null}

*usage* :
~~~javascript
import { utilsNull } from 'dh-utils-common';

utilsNull.compare(null,null); // 0
~~~

<a name="api_byTypeNull_copy"></a>
### [⌂](#splitFceType) copy(null) : null
- **popis** : copy null
- **return type** : {null}
- **parametr target** : {null}

*usage* :
~~~javascript
import { utilsNull } from 'dh-utils-common';

utilsNull.copy(null); // null
~~~

<a name="api_byTypeNull_equal"></a>
### [⌂](#splitFceType) equal(null,null) : boolean
- **popis** : equal boolean
- **return type** : {boolean} true
- **parametr a** : {null}
- **parametr b** : {null}

*usage* :
~~~javascript
import { utilsNull } from 'dh-utils-common';

utilsNull.equal(null,null); // true
~~~

<a name="api_byTypeNull_is"></a>
### [⌂](#splitFceType) is(any) : boolean
- **popis** : is a value null? same function as utilsCommon.isNull
- **return type** : {boolean} true|false
- **parametr a** : {any}

*usage* :
~~~javascript
import { utilsNull } from 'dh-utils-common';

utilsNull.is(null); // true
utilsNull.is(0); // false
~~~

--------------------

<a name="api_byTypeNumber"></a>
## [⌂](#splitFceType) API - Local functions by type Number

<a name="api_byTypeNumber_NAME"></a>
## [⌂](#splitFceType) NAME
- **popis** : constant NAME="number"

*použití* :
~~~javascript
import { utilsNumber } from 'dh-utils-common';

utilsNumber.NAME // number
~~~

<a name="api_byTypeNumber_compare"></a>
### [⌂](#splitFceType) compare(number,number) : number
- **popis** : compare number
- **return type** : {number} -1|0|1
- **parametr a** : {number}
- **parametr b** : {number}

*usage* :
~~~javascript
import { utilsNumber } from 'dh-utils-common';

utilsNumber.compare(10,15); // -1
~~~

<a name="api_byTypeNumber_copy"></a>
### [⌂](#splitFceType) copy(number) : number
- **popis** : copy number
- **return type** : {number}
- **parametr target** : {number}

*usage* :
~~~javascript
import { utilsNumber } from 'dh-utils-common';

utilsNumber.copy(10); // 10
~~~

<a name="api_byTypeNumber_equal"></a>
### [⌂](#splitFceType) equal(number,number) : boolean
- **popis** : equal two numbers
- **return type** : {boolean} false,true
- **parametr a** : {number}
- **parametr b** : {number}

*usage* :
~~~javascript
import { utilsNumber } from 'dh-utils-common';

utilsNumber.equal(10,10); // true
utilsNumber.equal(5,10); // false
~~~

<a name="api_byTypeNumber_is"></a>
### [⌂](#splitFceType) is(any) : boolean
- **popis** :  is a value of type number? same function as utilsCommon.isNumber
- **return type** : {boolean}
- **parametr a** : {any}

*usage* :
~~~javascript
import { utilsNumber } from 'dh-utils-common';

utilsNumber.is(10); // true
utilsNumber.is("10"); // false
~~~

--------------------

<a name="api_byTypeObject"></a>
## [⌂](#splitFceType) API - Local functions by type Object

<a name="api_byTypeObject_NAME"></a>
## [⌂](#splitFceType) NAME
- **popis** : constant NAME="object"

*použití* :
~~~javascript
import { utilsObject } from 'dh-utils-common';

utilsObject.NAME // object
~~~

<a name="api_byTypeObject_compare"></a>
### [⌂](#splitFceType) compare(object,object) : number
- **popis** : compare objects
- **return type** : {number} -1|0|1
- **parametr a** : {object}
- **parametr b** : {object}

*usage* :
~~~javascript
import { utilsObject } from 'dh-utils-common';

utilsObject.compare({name: "John", age: 42},{name: "John", age: 42}); // 0
utilsObject.compare({nameX: "John", age: 42},{name: "John", age: 42}); // 1
utilsObject.compare({name: "JohnX", age: 42},{name: "John", age: 42}); // 1
~~~

<a name="api_byTypeObject_copy"></a>
### [⌂](#splitFceType) copy(object) : object
- **popis** : copy deep bject
- **return type** : {object}
- **parametr target** : {object}

*usage* :
~~~javascript
import { utilsObject } from 'dh-utils-common';

utilsObject.copy({name: "John", age: 42}); // {name: "John", age: 42}
~~~

<a name="api_byTypeObject_equal"></a>
### [⌂](#splitFceType) equal(object,object) : boolean
- **popis** : equal objects
- **return type** : {boolean} true
- **parametr a** : {object}
- **parametr b** : {object}

*usage* :
~~~javascript
import { utilsObject } from 'dh-utils-common';

utilsObject.equal({name: "John", age: 42}, {name: "John", age: 42}); // true
utilsObject.equal({name: "John", age: 42}, {name: "John", age: 43}); // false
~~~

<a name="api_byTypeObject_is"></a>
### [⌂](#splitFceType) is(any) : boolean
- **popis** : is a value of type object? same function as utilsCommon.isObject
- **return type** : {boolean} true|false
- **parametr a** : {any}

*usage* :
~~~javascript
import { utilsObject } from 'dh-utils-common';

utilsObject.is({}); // true
utilsObject.is(0); // false
~~~

<a name="api_byTypeObject_isEmpty"></a>
### [⌂](#splitFceType) isEmpty(object) : boolean
- **popis** : is an object empty ?
- **return type** : {boolean} true|false
- **parametr a** : {object}

*usage* :
~~~javascript
import { utilsObject } from 'dh-utils-common';

utilsObject.isEmpty({}); // true
utilsObject.isEmpty({a: 0}}); // false
~~~

<a name="api_byTypeObject_isNotEmpty"></a>
### [⌂](#splitFceType) isNotEmpty(object) : boolean
- **popis** : is not an object empty ?
- **return type** : {boolean} true|false
- **parametr a** : {object}

*usage* :
~~~javascript
import { utilsObject } from 'dh-utils-common';

utilsObject.isNotEmpty({}); // false
utilsObject.isNotEmpty({a: 0}}); // true
~~~

--------------------

<a name="api_byTypeRegExp"></a>
## [⌂](#splitFceType) API - Local functions by type RegExp

<a name="api_byTypeRegExp_NAME"></a>
## [⌂](#splitFceType) NAME
- **popis** : constant NAME="regExp"

*použití* :
~~~javascript
import { utilsRegExp } from 'dh-utils-common';

utilsRegExp.NAME // regExp
~~~

<a name="api_byTypeRegExp_compare"></a>
### [⌂](#splitFceType) compare(regexp,regexp) : number
- **popis** : compare regexp
- **return type** : {number} -1|0|1
- **parametr a** : {regexp}
- **parametr b** : {regexp}

*usage* :
~~~javascript
import { utilsRegExp } from 'dh-utils-common';

utilsRegExp.compare(/ab+c/,/ab+c/); // 0
utilsRegExp.compare(/ac+c/,/ab+c/); // -1
~~~

<a name="api_byTypeRegExp_copy"></a>
### [⌂](#splitFceType) copy(regexp) : regexp
- **popis** : copy RegExp
- **return type** : {regexp}
- **parametr target** : {regexp}

*usage* :
~~~javascript
import { utilsRegExp } from 'dh-utils-common';

utilsRegExp.copy(/ab+c/); // /ab+c/
~~~

<a name="api_byTypeRegExp_equal"></a>
### [⌂](#splitFceType) equal(regexp,regexp) : boolean
- **popis** : equal RegExp
- **return type** : {boolean} false,true
- **parametr a** : {regexp}
- **parametr b** : {regexp}

*usage* :
~~~javascript
import { utilsRegExp } from 'dh-utils-common';

utilsRegExp.equal(/ab+c/,/ab+c/); // true
utilsRegExp.equal(/ac+c/,/ab+c/); // false
~~~

<a name="api_byTypeRegExp_is"></a>
### [⌂](#splitFceType) is(regexp) : boolean
- **popis** : is a value of type regexp? same function as utilsCommon.isRegExp
- **return type** : {boolean}
- **parametr a** : {any}

*usage* :
~~~javascript
import { utilsRegExp } from 'dh-utils-common';

utilsRegExp.is(/ab+c/); // true
utilsRegExp.is(0); // false
~~~

--------------------

<a name="api_byTypeString"></a>
## [⌂](#splitFceType) API - Local functions by type String

<a name="api_byTypeString_NAME"></a>
## [⌂](#splitFceType) NAME
- **popis** : constant NAME="string"

*použití* :
~~~javascript
import { utilsString } from 'dh-utils-common';

utilsString.NAME // string
~~~

<a name="api_byTypeString_compare"></a>
### [⌂](#splitFceType) compare(string,string) : number
- **popis** : compare string
- **return type** : {number} -1|0|1
- **parametr a** : {string}
- **parametr b** : {string}

*usage* :
~~~javascript
import { utilsString } from 'dh-utils-common';

utilsString.compare("ABC","ZXY"); // -1
~~~

<a name="api_byTypeString_copy"></a>
### [⌂](#splitFceType) copy(string) : boolean
- **popis** : copy string
- **return type** : {boolean}
- **parametr target** : {boolean}

*usage* :
~~~javascript
import { utilsString } from 'dh-utils-common';

utilsString.copy("abc"); // abc
~~~

<a name="api_byTypeString_equal"></a>
### [⌂](#splitFceType) equal(string,string) : boolean
- **popis** : equal string
- **return type** : {boolean} false,true
- **parametr a** : {string}
- **parametr b** : {string}

*usage* :
~~~javascript
import { utilsString } from 'dh-utils-common';

utilsString.equal("ABC","ZXY"); // false
~~~

<a name="api_byTypeString_is"></a>
### [⌂](#splitFceType) is(any) : boolean
- **popis** : is a value of type string? same function as utilsCommon.isString
- **return type** : {boolean}
- **parametr a** : {any}

*usage* :
~~~javascript
import { utilsString } from 'dh-utils-common';

utilsString.is("abc"); // true
utilsString.is(0); // false
~~~

<a name="api_byTypeString_isEmpty"></a>
### [⌂](#splitFceType) isEmpty(string) : boolean
- **popis** : is a string empty?
- **return type** : {boolean}
- **parametr a** : {string}

*usage* :
~~~javascript
import { utilsString } from 'dh-utils-common';

utilsString.isEmpty("abc"); // false
utilsString.isEmpty(""); // true
~~~

<a name="api_byTypeString_isNotEmpty"></a>
### [⌂](#splitFceType) isNotEmpty(string) : boolean
- **popis** : is not a string empty?
- **return type** : {boolean}
- **parametr a** : {string}

*usage* :
~~~javascript
import { utilsString } from 'dh-utils-common';

utilsString.isNotEmpty("abc"); // false
utilsString.isNotEmpty(""); // true
~~~

--------------------

<a name="api_byTypeSymbol"></a>
## [⌂](#splitFceType) API - Local functions by type Symbol

<a name="api_byTypeSymbol_NAME"></a>
## [⌂](#splitFceType) NAME
- **popis** : constant NAME="symbol"

*použití* :
~~~javascript
import { utilsSymbol } from 'dh-utils-common';

utilsSymbol.NAME // symbol
~~~

<a name="api_byTypeSymbol_compare"></a>
### [⌂](#splitFceType) compare(symbol,symbol) : number
- **popis** : compare symbol
- **return type** : {number} -1|0|1
- **parametr a** : {symbol}
- **parametr b** : {boolean}

*usage* :
~~~javascript
import { utilsSymbol } from 'dh-utils-common';

// TODO
~~~

<a name="api_byTypeSymbol_copy"></a>
### [⌂](#splitFceType) copy(symbol) : symbol
- **popis** : copy symbol
- **return type** : {symbol}
- **parametr target** : {symbol}

*usage* :
~~~javascript
import { utilsSymbol } from 'dh-utils-common';

// TODO
~~~

<a name="api_byTypeSymbol_equal"></a>
### [⌂](#splitFceType) equal(symbol,symbol) : boolean
- **popis** : equal symbol
- **return type** : {boolean} false,true
- **parametr a** : {symbol}
- **parametr b** : {symbol}

*usage* :
~~~javascript
import { utilsSymbol } from 'dh-utils-common';

// TODO
~~~

<a name="api_byTypeSymbol_is"></a>
### [⌂](#splitFceType) is(any) : boolean
- **popis** : is a value of type symbol? same function as utilsCommon.isSymbol
- **return type** : {boolean}
- **parametr a** : {any}

*usage* :
~~~javascript
import { utilsSymbol } from 'dh-utils-common';

// TODO
~~~

--------------------

<a name="api_byTypeUndefined"></a>
## [⌂](#splitFceType) API - Local functions by type Undefined

<a name="api_byTypeUndefined_NAME"></a>
## [⌂](#splitFceType) NAME
- **popis** : constant NAME="undefined"

*použití* :
~~~javascript
import { utilsUndefined } from 'dh-utils-common';

utilsUndefined.NAME // undefined
~~~

<a name="api_byTypeUndefined_compare"></a>
### [⌂](#splitFceType) compare(undefined,undefined) : number
- **popis** : compare undefined
- **return type** : {number} 0
- **parametr a** : {undefined}
- **parametr b** : {undefined}

*usage* :
~~~javascript
import { utilsUndefined } from 'dh-utils-common';

utilsUndefined.compare(undefined,undefined); // 0
~~~

<a name="api_byTypeUndefined_copy"></a>
### [⌂](#splitFceType) copyundefined) : undefined
- **popis** : copy undefned
- **return type** : {undefned}
- **parametr target** : {undefned}

*usage* :
~~~javascript
import { utilsUndefined } from 'dh-utils-common';

utilsUndefined.copy(undefined); // undefined
~~~

<a name="api_byTypeUndefined_equal"></a>
### [⌂](#splitFceType) equal(undefined,undefined) : boolean
- **popis** : equal undefined
- **return type** : {boolean} true
- **parametr a** : {undefined}
- **parametr b** : {undefined}

*usage* :
~~~javascript
import { utilsUndefined } from 'dh-utils-common';

utilsUndefined.equal(undefined,undefined); // true
~~~

<a name="api_byTypeUndefined_is"></a>
### [⌂](#splitFceType) is(any) : boolean
- **popis** : is a value of type undefined? same function as utilsCommon.isUndefined
- **return type** : {boolean}
- **parametr a** : {any}

*usage* :
~~~javascript
import { utilsUndefined } from 'dh-utils-common';

utilsUndefined.is(undefined); // true
utilsUndefined.is(0); // false
~~~

-------------------
