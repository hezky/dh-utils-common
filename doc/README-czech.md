# dh-utils-common

[Použití v anglickém jazyce (Readme in English)](https://github.com/hezky/dh-utils-common/blob/master/README.md)

Základní funkce nad různými datovými typy.

## Rozdělení **⌂**

<a name="split"></a>
1. **Obecné funkce** :
  - [compare](#api_common_compare)
  - [compareReferences](#api_common_compareReferences)
  - [copy](#api_common_copy)
  - [equal](#api_common_equal)
  - [isArray](#api_common_isArray)
  - [isBoolean](#api_common_isBoolean)
  - [isDate](#api_common_isDate)
  - [isDefined](#api_common_isDefined)
  - [isEmpty](#api_common_isEmpty)
  - [isFunction](#api_common_isFunction)
  - [isNotArray](#api_common_isNotArray)
  - [isNotDefined](#api_common_isNotDefined)
  - [isNotEmpty](#api_common_isNotEmpty)
  - [isNotNull](#api_common_isNotNull)
  - [isNumber](#api_common_isNumber)
  - [isNull](#api_common_isNull)
  - [isObject](#api_common_isObject)
  - [isPrimitive](#api_common_isPrimitive)
  - [isRegExp](#api_common_isRegExp)
  - [isString](#api_common_isString)
  - [isStringEmpty](#api_common_isStringEmpty)
  - [isStringNotEmpty](#api_common_isStringNotEmpty)
  - [isSymbol](#api_common_isSymbol)
  - [isUndefined](#api_common_isUndefined)
  - [notEqual](#api_common_notEqual)

<a name="splitByType"></a>
2. **Funkce podle datového typu** :
  - [Array](#api_byTypeArray) : [compare](#api_byTypeArray_compare), [copy](#api_byTypeArray_copy), [equal](#api_byTypeArray_equal), [is](#api_byTypeArray_is)
  - [Boolean](#api_byTypeBoolean) : [compare](#api_byTypeBoolean_compare), [copy](#api_byTypeBoolean_copy), [equal](#api_byTypeBoolean_equal), [is](#api_byTypeBoolean_is)
  - [Date](#api_byTypeDate) : [compare](#api_byTypeDate_compare), [copy](#api_byTypeDate_copy), [equal](#api_byTypeDate_equal), [is](#api_byTypeDate_is)
  - [Function](#api_byTypeFunction) : [compare](#api_byTypeFunction_compare), [copy](#api_byTypeFunction_copy), [equal](#api_byTypeFunction_equal), [is](#api_byTypeFunction_is)
  - [Number](#api_byTypeNumber) : [compare](#api_byTypeNumber_compare), [copy](#api_byTypeNumber_copy), [equal](#api_byTypeNumber_equal), [is](#api_byTypeNumber_is)
  - [Null](#api_byTypeNull) : [compare](#api_byTypeNull_compare), [copy](#api_byTypeNull_copy), [equal](#api_byTypeNull_equal), [is](#api_byTypeNull_is)
  - [Object](#api_byTypeObject) : [compare](#api_byTypeObject_compare), [copy](#api_byTypeObject_copy), [equal](#api_byTypeObject_equal), [is](#api_byTypeObject_is)
  - [RegExp](#api_byTypeRegExp) : [compare](#api_byTypeRegExp_compare), [copy](#api_byTypeRegExp_copy), [equal](#api_byTypeRegExp_equal), [is](#api_byTypeRegExp_is)
  - [String](#api_byTypeString) : [compare](#api_byTypeString_compare), [copy](#api_byTypeString_copy), [equal](#api_byTypeString_equal), [is](#api_byTypeString_is), [isNumeric](#api_byTypeString_isNumeric)
  - [Symbol](#api_byTypeSymbol) : [compare](#api_byTypeSymbol_compare), [copy](#api_byTypeSymbol_copy), [equal](#api_byTypeSymbol_equal), [is](#api_byTypeSymbol_is)
  - [Undefined](#api_byTypeUndefined) : [compare](#api_byTypeUndefined_compare), [copy](#api_byTypeUndefined_copy), [equal](#api_byTypeUndefined_equal), [is](#api_byTypeUndefined_is)

--------------------

## API - Obecné funkce

<a name="api_common_compare"></a>
### [⌂](#split) compare(any,any) : number
- **popis** : porovnání dvou hodnot
- **návratový typ** : {number} -1|0|1
- **parametr a** : {any}
- **parametr b** : {any}

*použití* :
~~~javascript
import { compare, utilsCommon } from 'dh-utils-common';

compare(0,0); // 0
// or
utilsCommon.compare(0,0); // 0
~~~

<a name="api_common_compareReferences"></a>
### [⌂](#split) compareReferences(any,any) : number
- **popis** : porovnání dvou referencí
- **návratový typ** : {number} -1|0|1
- **parametr a** : {any}
- **parametr b** : {any}

*použití* :
~~~javascript
import { compareReferences, utilsCommon } from 'dh-utils-common';

compareReferences(0,0); // 0
// or
utilsCommon.compareReferences(0,0); // 0


const  a = {}, b = a
compareReferences(a,b)
// 0

const  a = {}, b = {}
compareReferences(a,b)
// 1
~~~

<a name="api_common_copy"></a>
### [⌂](#split) copy(any) : any
- **popis** : hluboká kopie
- **návratový typ** : {any}
- **parametr a** : {any}

*použití* :
~~~javascript
import { copy, utilsCommon } from 'dh-utils-common';

copy({a:"a",b:"b"}); // {a:"a",b:"b"}
// or
utilsCommon.copy({a:"a",b:"b"}); // {a:"a",b:"b"}

copy([1,2,3,4]); // [1,2,3,4]
~~~


<a name="api_common_equal"></a>
### [⌂](#split) equal(any,any) : boolean
- **popis** : porovnání
- **návratový typ** : {boolean} true|false
- **parametr a** : {any}
- **parametr b** : {any}

*použití* :
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
### [⌂](#split) isArray(any) : boolean
- **popis** : je hodnota typu pole?
- **návratový typ** : {boolean} true|false
- **parametr a** : {any}

*použití* :
~~~javascript
import { copy, utilsCommon } from 'dh-utils-common';

isArray(0); // false
// or
utilsCommon.isArray(0); // false

isArray([1,2,3,4]); // true
isArray(3); // false
~~~

<a name="api_common_isBoolean"></a>
### [⌂](#split) isBoolean(any) : boolean
- **popis** : je hodnota typu boolean?
- **návratový typ** : {boolean} true|false
- **parametr a** : {any}

*použití* :
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
### [⌂](#split) isDate(any) : boolean
- **popis** : je hodnota typu date?
- **návratový typ** : {boolean} true|false
- **parametr a** : {any}

*použití* :
~~~javascript
import { copy, utilsCommon } from 'dh-utils-common';

isDate(0); // false
// or
utilsCommon.isDate(0); // false

isDate(new Date()); // true
isDate(3); // false
~~~

<a name="api_common_isDefined"></a>
### [⌂](#split) isDefined(any) : boolean
- **popis** : je hodnota defined?
- **návratový typ** : {boolean} true|false
- **parametr a** : {any}

*použití* :
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
### [⌂](#split) isEmpty(any) : boolean
- **popis** : je hodnota prázdná?
- **návratový typ** : {boolean} true|false
- **parametr a** : {any}

*použití* :
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
### [⌂](#split) isFunction(any) : boolean
- **popis** : je hodnota typu funkce?
- **návratový typ** : {boolean} true|false
- **parametr a** : {any}

*použití* :
~~~javascript
import { isFunction, utilsCommon } from 'dh-utils-common';

isFunction(0); // false
// or
utilsCommon.isFunction(0); // false

isFunction(()=>{}); // true
isFunction(3); // false
~~~

<a name="api_common_isNotArray"></a>
### [⌂](#split) isNotArray(any) : boolean
- **popis** : hodnota není typu pole?
- **návratový typ** : {boolean} true|false
- **parametr a** : {any}

*použití* :
~~~javascript
import { isNotArray, utilsCommon } from 'dh-utils-common';

isNotArray(0); // false
// or
utilsCommon.isNotArray(0); // false

isNotArray([1,2,3,4]); // false
isNotArray({}); // true`
~~~

<a name="api_common_isNotDefined"></a>
### [⌂](#split) isNotDefined(any) : boolean
- **popis** : hodnota není definována?
- **návratový typ** : {boolean} true|false
- **parametr a** : {any}

*použití* :
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
### [⌂](#split) isNotEmpty(any) : boolean
- **popis** : hodnota není prázdná?
- **návratový typ** : {boolean} true|false
- **parametr a** : {any}

*použití* :
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
### [⌂](#split) isNotNull(any) : boolean
- **popis** : hodnota není typu null?
- **návratový typ** : {boolean} true|false
- **parametr a** : {any}

*použití* :
~~~javascript
import { isNotNull, utilsCommon } from 'dh-utils-common';

isNotNull(0); // false
// or
utilsCommon.isNotNull(0); // false

isNotNull(null); // false
isNotNull(5); // true
~~~

<a name="api_common_isNumber"></a>
### [⌂](#split) isNumber(any) : boolean
- **popis** : je hodnota typu number?
- **návratový typ** : {boolean} true|false
- **parametr a** : {any}

*použití* :
~~~javascript
import { isNumber, utilsCommon } from 'dh-utils-common';

isNumber(0); // true
// or
utilsCommon.isNumber(0); // true

isNumber("5"); // false
isNumber(5); // true
~~~

<a name="api_common_isNull"></a>
### [⌂](#split) isNull(any) : boolean
- **popis** : je hodnota typu null?
- **návratový typ** : {boolean} true|false
- **parametr a** : {any}

*použití* :
~~~javascript
import { isNull, utilsCommon } from 'dh-utils-common';

isNull(0); // false
// or
utilsCommon.isNull(0); // false

isNull(null); // true
isNull(5); // false
~~~

<a name="api_common_isObject"></a>
### [⌂](#split) isObject(any) : boolean
- **popis** : je hodnota typu object?
- **návratový typ** : {boolean} true|false
- **parametr a** : {any}

*použití* :
~~~javascript
import { isObject, utilsCommon } from 'dh-utils-common';

isObject(0); // false
// or
utilsCommon.isObject(0); // false

isObject({}); // true
isObject(3); // false
~~~

<a name="api_common_isPrimitive"></a>
### [⌂](#split) isPrimitive(any) : boolean
- **popis** : je hodnota primitivní typ?
- **návratový typ** : boolean true|false
- **parametr a** : {any}

*použití* :
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
### [⌂](#split) isRegExp(any) : boolean
- **popis** : je hodnota typu regulární výraz?
- **návratový typ** : {boolean} true|false
- **parametr a** : {any}

*použití* :
~~~javascript
import { isRegExp, utilsCommon } from 'dh-utils-common';

isRegExp(0); // false
// or
utilsCommon.isRegExp(0); // false

isRegExp(/ab+c/); // true
~~~

<a name="api_common_isString"></a>
### [⌂](#split) isString(any) : boolean
- **popis** : je hodnota typu string?
- **návratový typ** : {boolean} true|false
- **parametr a** : {any}

*použití* :
~~~javascript
import { isString, utilsCommon } from 'dh-utils-common';

isString("abc"); // true
// or
utilsCommon.isString("abc"); // true

isString("Hellloo"); // true
isString(3);  // false
~~~

<a name="api_common_isStringEmpty"></a>
### [⌂](#split) isStringEmpty(any) : boolean
- **popis** : je hodnota typu string a zároveň prázdný řetězec?
- **návratový typ** : {boolean} true|false
- **parametr a** : {any}

*použití* :
~~~javascript
import { isStringEmpty, utilsCommon } from 'dh-utils-common';

isStringEmpty("abc"); // false
// or
utilsCommon.isStringEmpty("abc"); // false

isStringEmpty(""); // true
~~~

<a name="api_common_isStringNotEmpty"></a>
### [⌂](#split) isStringNotEmpty(any) : boolean
- **popis** : je hodnota typu string a zároveň není prázdný řetězec?
- **návratový typ** : {boolean} true|false
- **parametr a** : {any}

*použití* :
~~~javascript
import { isStringNotEmpty, utilsCommon } from 'dh-utils-common';

isStringNotEmpty("abc"); // true
// or
utilsCommon.isStringNotEmpty("abc"); // true

isStringEmpty(""); // false
~~~

<a name="api_common_isSymbol"></a>
### [⌂](#split) isSymbol(any) : boolean
- **popis** : je hodnota typu symbol
- **návratový typ** : {boolean} true|false
- **parametr a** : {any}

*použití* :
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
### [⌂](#split) isUndefined(any) : boolean
- **popis** : je hodnota typu undefined?
- **návratový typ** : {boolean} true|false
- **parametr a** : {any}

*použití* :
~~~javascript
import { isUndefined, utilsCommon } from 'dh-utils-common';

isUndefined(0); // false
// or
utilsCommon.isUndefined(0); // false

const prom;
isUndefined(prom); // true
isUndefined(5); // false
~~~

<a name="api_common_notEqual"></a>
### [⌂](#split) notEqual(any,any) : boolean
- **popis** : negace equal
- **návratový typ** : {boolean} true|false
- **parametr a** : {any}
- **parametr b** : {any}

*použití* :
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
## [⌂](#splitByType) API Funkce podle datového typu Array

<a name="api_byTypeArray_compare"></a>
### [⌂](#splitByType) compare(array,array) : number
- **popis** : porovnání dvou polí
- **návratový typ** : {number} -1|0,1
- **parametr a** : {array}
- **parametr b** : {array}

*použití* :
~~~javascript
import { utilsArray } from 'dh-utils-common';

utilsArray.compare([1,2,3],[1,2,3]) // 0
~~~

<a name="api_byTypeArray_copy"></a>
### [⌂](#splitByType) copy(array) : array
- **popis** : hluboká kopie pole
- **návratový typ** : {array}
- **parametr target** : {array}

*použití* :
~~~javascript
import { utilsArray } from 'dh-utils-common';

utilsArray.copy([1,2,3,4]); // [1,2,3,4]
~~~

<a name="api_byTypeArray_equal"></a>
### [⌂](#splitByType) equal(array,array) : boolean
- **popis** : porovnání dvou polí
- **návratový typ** : {boolean} false,true
- **parametr a** : {array}
- **parametr b** : {array}

*použití* :
~~~javascript
import { utilsArray } from 'dh-utils-common';

utilsArray.equal([1,2,3,4],[1,2,3,4]); // true
utilsArray.equal([4,2,3,1],[1,2,3,4]); // false
~~~

<a name="api_byTypeArray_is"></a>
### [⌂](#splitByType) is(any) : boolean
- **popis** : je hodnota pole? stejná funkce jako utilsCommon.isArray
- **návratový typ** : {boolean}
- **parametr a** : {any}

*použití* :
~~~javascript
import { utilsArray } from 'dh-utils-common';

utilsArray.is(5); // false
utilsArray.is([]); // true
~~~

--------------------

<a name="api_byTypeBoolean"></a>
## [⌂](#splitByType) API Funkce podle datového typu Boolean

<a name="api_byTypeBoolean_compare"></a>
### [⌂](#splitByType) compare(boolean,boolean) : number
- **popis** : porovnání boolean
- **návratový typ** : {number} -1|0|1
- **parametr a** : {boolean}
- **parametr b** : {boolean}

*použití* :
~~~javascript
import { utilsBoolean } from 'dh-utils-common';

utilsBoolean.compare(true,true); // 0
utilsBoolean.compare(false,true); // -1
~~~

<a name="api_byTypeBoolean_copy"></a>
### [⌂](#splitByType) copy(boolean) : boolean
- **popis** : kopie boolean
- **návratový typ** : {boolean}
- **parametr target** : {boolean}

*použití* :
~~~javascript
import { utilsBoolean } from 'dh-utils-common';

utilsBoolean.copy(true); // true
~~~

<a name="api_byTypeBoolean_equal"></a>
### [⌂](#splitByType) equal(boolean,boolean) : boolean
- **popis** : porovnání boolean
- **návratový typ** : {boolean} false,true
- **parametr a** : {boolean}
- **parametr b** : {boolean}

*použití* :
~~~javascript
import { utilsBoolean } from 'dh-utils-common';

utilsBoolean.equal(true,true); // true
utilsBoolean.equal(false,true); // false
~~~

<a name="api_byTypeBoolean_is"></a>
### [⌂](#splitByType) is(any) : boolean
- **popis** : je hodnota boolean? stejná funkce jako utilsCommon.isBoolean
- **návratový typ** : {boolean}
- **parametr a** : {any}

*použití* :
~~~javascript
import { utilsBoolean } from 'dh-utils-common';

utilsBoolean.is(true); // true
utilsBoolean.is(false); // false
~~~

--------------------

<a name="api_byTypeDate"></a>
## [⌂](#splitByType) API Funkce podle datového typu Date

<a name="api_byTypeDate_compare"></a>
### [⌂](#splitByType) compare(date,date) : number
- **popis** : porovná dva date
- **návratový typ** : {number} -1|0|1
- **parametr 1** : {date}
- **parametr 2** : {date}

*použití* :
~~~javascript
import { utilsDate } from 'dh-utils-common';

let date1 = new Date(2015,5,5);
let date2 = new Date(2015,5,6);
let result = utilsDate.compare(date1,date2); // -1
~~~

<a name="api_byTypeDate_copy"></a>
### [⌂](#splitByType) copy(date) : boolean
- **popis** : hluboká kopie date
- **návratový typ** : {date}
- **parametr 1** : {date}

*použití* :
~~~javascript
import { utilsDate } from 'dh-utils-common';

const date = new Date(2016,1,1);
utilsDate.copy(date); // Date(2016,1,1)
~~~

<a name="api_byTypeDate_equal"></a>
### [⌂](#splitByType) equal(date,date) : boolean
- **popis** : porovná dva date
- **návratový typ** : {boolean}
- **parametr 1** : {date}
- **parametr 2** : {date}

*použití* :
~~~javascript
import { utilsDate } from 'dh-utils-common'

utilsDate.equal(new Date(2015,5,5),new Date(2015,5,6)); // false
~~~

<a name="api_byTypeDate_is"></a>
### [⌂](#splitByType) is(any) : boolean
- **popis** : je hodnota date? stejná funkce jako utilsCommon.isDate
- **návratový typ** : {boolean}
- **parametr a** : {any}

*použití* :
~~~javascript
import { utilsDate } from 'dh-utils-common';

utilsDate.is(new Date(2015,5,5)); // true
utilsDate.is(0); // false
~~~

--------------------

<a name="api_byTypeFunction"></a>
## [⌂](#splitByType) API Funkce podle datového typu Function

<a name="api_byTypeFunction_compare"></a>
### [⌂](#splitByType) compare(function,function) : number
- **popis** :  porovná dvě funkce
- **návratový typ** : {number} -1,0,1
- **parametr a** : {function}
- **parametr b** : {function}

*použití* :
~~~javascript
import { utilsFunction } from 'dh-utils-common';

utilsFunction.compare(()=>"a",()=>"b"); // -1
~~~

<a name="api_byTypeFunction_copy"></a>
### [⌂](#splitByType) copy(function) : boolean
- **popis** : kopie function
- **návratový typ** : {function}
- **parametr 1** : {function}

*použití* :
~~~javascript
import { utilsFunction } from 'dh-utils-common';

const func = function(a){return a};
utilsFunction.copy(func); // function(a){return a};
~~~

<a name="api_byTypeFunction_equal"></a>
### [⌂](#splitByType) equal(function,function) : boolean
- **popis** : porovná dvě function
- **návratový typ** : {function}
- **parametr 1** : {function}
- **parametr 2** : {function}

*použití* :
~~~javascript
import { utilsFunction } from 'dh-utils-common'

const func1 = function(){return "func1"};
const func2 = function(){return "func2"};

utilsFunction.equal(func1,func2); // false
~~~

<a name="api_byTypeFunction_is"></a>
### [⌂](#splitByType) is(any) : boolean
- **popis** : je hodnota function? stejná funkce jako utilsCommon.isFunction
- **návratový typ** : {boolean}
- **parametr a** : {any}

*použití* :
~~~javascript
import { utilsFunction } from 'dh-utils-common';

utilsFunction.is(function(){return "func"}); // true
utilsFunction.is(0); // false
~~~

--------------------

<a name="api_byTypeNumber"></a>
## [⌂](#splitByType) API Funkce podle datového typu Number

<a name="api_byTypeNumber_compare"></a>
### [⌂](#splitByType) compare(number,number) : number
- **popis** : porovnání number
- **návratový typ** : {number} -1|0|1
- **parametr a** : {number}
- **parametr b** : {number}

*použití* :
~~~javascript
import { utilsNumber } from 'dh-utils-common';

utilsNumber.compare(10,15); // -1
~~~

<a name="api_byTypeNumber_copy"></a>
### [⌂](#splitByType) copy(number) : number
- **popis** : kopie number
- **návratový typ** : {number}
- **parametr target** : {number}

*použití* :
~~~javascript
import { utilsNumber } from 'dh-utils-common';

utilsNumber.copy(10); // 10
~~~

<a name="api_byTypeNumber_equal"></a>
### [⌂](#splitByType) equal(number,number) : boolean
- **popis** : porovnání number
- **návratový typ** : {boolean} false,true
- **parametr a** : {number}
- **parametr b** : {number}

*použití* :
~~~javascript
import { utilsNumber } from 'dh-utils-common';

utilsNumber.equal(10,10); // true
utilsNumber.equal(5,10); // false
~~~

<a name="api_byTypeNumber_is"></a>
### [⌂](#splitByType) is(any) : boolean
- **popis** : je hodnota number? stejná funkce jako utilsCommon.isNumber
- **návratový typ** : {boolean}
- **parametr a** : {any}

*použití* :
~~~javascript
import { utilsNumber } from 'dh-utils-common';

utilsNumber.is(10); // true
utilsNumber.is("10"); // false
~~~

--------------------

<a name="api_byTypeNull"></a>
## [⌂](#splitByType) API Funkce podle datového typu Null

<a name="api_byTypeNull_compare"></a>
### [⌂](#splitByType) compare(null,null) : number
- **popis** : porovnání null
- **návratový typ** : {number} -1|0|1
- **parametr a** : {null}
- **parametr b** : {null}

*použití* :
~~~javascript
import { utilsNull } from 'dh-utils-common'

utilsNull.compare(null,null); // 0
~~~

<a name="api_byTypeNull_copy"></a>
### [⌂](#splitByType) copy(null) : null
- **popis** : kopie null
- **návratový typ** : {null}
- **parametr target** : {null}

*použití* :
~~~javascript
import { utilsNull } from 'dh-utils-common'

utilsNull.copy(null); // null
~~~

<a name="api_byTypeNull_equal"></a>
### [⌂](#splitByType) equal(null,null) : boolean
- **popis** : porovnání boolean
- **návratový typ** : {boolean} true
- **parametr a** : {null}
- **parametr b** : {null}

*použití* :
~~~javascript
import { utilsNull } from 'dh-utils-common'

utilsNull.equal(null,null); // true
~~~

<a name="api_byTypeNull_is"></a>
### [⌂](#splitByType) is(any) : boolean
- **popis** : je hodnota null? stejná funkce jako utilsCommon.isNull
- **návratový typ** : {boolean} true|false
- **parametr a** : {any}

*použití* :
~~~javascript
import { utilsNull } from 'dh-utils-common'

utilsNull.is(null); // true
utilsNull.is(0); // false
~~~


--------------------

<a name="api_byTypeObject"></a>
## [⌂](#splitByType) API Funkce podle datového typu Object

<a name="api_byTypeObject_compare"></a>
### [⌂](#splitByType) compare(object,object) : number
- **popis** : porovnání objekty
- **návratový typ** : {number} -1|0|1
- **parametr a** : {object}
- **parametr b** : {object}

*použití* :
~~~javascript
import { utilsObject } from 'dh-utils-common'

utilsObject.compare({name: "John", age: 42},{name: "John", age: 42}); // 0
utilsObject.compare({nameX: "John", age: 42},{name: "John", age: 42}); // 1
utilsObject.compare({name: "JohnX", age: 42},{name: "John", age: 42}); // 1
~~~

<a name="api_byTypeObject_copy"></a>
### [⌂](#splitByType) copy(object) : object
- **popis** : kopie object
- **návratový typ** : {object}
- **parametr target** : {object}

*použití* :
~~~javascript
import { utilsObject } from 'dh-utils-common'

utilsObject.copy({name: "John", age: 42}); // {name: "John", age: 42}
~~~

<a name="api_byTypeObject_equal"></a>
### [⌂](#splitByType) equal(object,object) : boolean
- **popis** : porovnání object
- **návratový typ** : {boolean} true
- **parametr a** : {object}
- **parametr b** : {object}

*použití* :
~~~javascript
import { utilsObject } from 'dh-utils-common'

utilsObject.equal({name: "John", age: 42}, {name: "John", age: 42}); // true
utilsObject.equal({name: "John", age: 42}, {name: "John", age: 43}); // false
~~~

<a name="api_byTypeObject_is"></a>
### [⌂](#splitByType) is(any) : boolean
- **popis** : je hodnota object? stejná funkce jako utilsCommon.isObject
- **návratový typ** : {boolean} true|false
- **parametr a** : {any}

*použití* :
~~~javascript
import { utilsObject } from 'dh-utils-common'

utilsObject.is({}); // true
utilsObject.is(0); // false
~~~

--------------------

<a name="api_byTypeRegExp"></a>
## [⌂](#splitByType) API Funkce podle datového typu RegExp

<a name="api_byTypeRegExp_compare"></a>
### [⌂](#splitByType) compare(regexp,regexp) : number
- **popis** : porovnání regexp
- **návratový typ** : {number} -1|0|1
- **parametr a** : {regexp}
- **parametr b** : {regexp}

*použití* :
~~~javascript
import { utilsRegExp } from 'dh-utils-common'

utilsRegExp.compare(/ab+c/,/ab+c/); // 0
utilsRegExp.compare(/ac+c/,/ab+c/); // -1
~~~

<a name="api_byTypeRegExp_copy"></a>
### [⌂](#splitByType) copy(regexp) : regexp
- **popis** : kopie RegExp
- **návratový typ** : {regexp}
- **parametr target** : {regexp}

*použití* :
~~~javascript
import { utilsRegExp } from 'dh-utils-common'

utilsRegExp.copy(/ab+c/); // /ab+c/
~~~

<a name="api_byTypeRegExp_equal"></a>
### [⌂](#splitByType) equal(regexp,regexp) : boolean
- **popis** : porovnání RegExp
- **návratový typ** : {boolean} false,true
- **parametr a** : {regexp}
- **parametr b** : {regexp}

*použití* :
~~~javascript
import { utilsRegExp } from 'dh-utils-common'

utilsRegExp.equal(/ab+c/,/ab+c/); // true
utilsRegExp.equal(/ac+c/,/ab+c/); // false
~~~

<a name="api_byTypeRegExp_is"></a>
### [⌂](#splitByType) is(regexp) : boolean
- **popis** : je hodnota regexp? stejná funkce jako utilsCommon.isRegExp
- **návratový typ** : {boolean}
- **parametr a** : {any}

*použití* :
~~~javascript
import { utilsRegExp } from 'dh-utils-common'

utilsRegExp.is(/ab+c/); // true
utilsRegExp.is(0); // false
~~~

--------------------

<a name="api_byTypeString"></a>
## [⌂](#splitByType) API Funkce podle datového typu String

<a name="api_byTypeString_compare"></a>
### [⌂](#splitByType) compare(string,string) : number
- **popis** : porovnání string
- **návratový typ** : {number} -1|0|1
- **parametr a** : {string}
- **parametr b** : {string}

*použití* :
~~~javascript
import { utilsString } from 'dh-utils-common'

utilsString.compare("ABC","ZXY"); // -1
~~~

<a name="api_byTypeString_copy"></a>
### [⌂](#splitByType) copy(string) : boolean
- **popis** : kopie boolean
- **návratový typ** : {boolean}
- **parametr target** : {boolean}

*použití* :
~~~javascript
import { utilsString } from 'dh-utils-common'

utilsString.copy("abc"); // abc
~~~

<a name="api_byTypeString_equal"></a>
### [⌂](#splitByType) equal(string,string) : boolean
- **popis** : porovnání string
- **návratový typ** : {boolean} false,true
- **parametr a** : {string}
- **parametr b** : {string}

*použití* :
~~~javascript
import { utilsString } from 'dh-utils-common'

utilsString.equal("ABC","ZXY"); // false
~~~

<a name="api_byTypeString_is"></a>
### [⌂](#splitByType) is(any) : boolean
- **popis** : je hodnota string? stejná funkce jako utilsCommon.isString
- **návratový typ** : {boolean}
- **parametr a** : {any}

*použití* :
~~~javascript
import { utilsString } from 'dh-utils-common'

utilsString.is("abc"); // true
utilsString.is(0); // false
~~~

--------------------

<a name="api_byTypeSymbol"></a>
## [⌂](#splitByType) API Funkce podle datového typu Symbol

<a name="api_byTypeSymbol_compare"></a>
### [⌂](#splitByType) compare(symbol,symbol) : number
- **popis** : porovnání symbol
- **návratový typ** : {number} -1|0|1
- **parametr a** : {symbol}
- **parametr b** : {boolean}

*použití* :
~~~javascript
import { utilsSymbol } from 'dh-utils-common'

// TODO
~~~

<a name="api_byTypeSymbol_copy"></a>
### [⌂](#splitByType) copy(symbol) : symbol
- **popis** : kopie symbol
- **návratový typ** : {symbol}
- **parametr target** : {symbol}

*použití* :
~~~javascript
import { utilsSymbol } from 'dh-utils-common'

// TODO
~~~

<a name="api_byTypeSymbol_equal"></a>
### [⌂](#splitByType) equal(symbol,symbol) : boolean
- **popis** : porovnání symbol
- **návratový typ** : {boolean} false,true
- **parametr a** : {symbol}
- **parametr b** : {symbol}

*použití* :
~~~javascript
import { utilsSymbol } from 'dh-utils-common'

// TODO
~~~

<a name="api_byTypeSymbol_is"></a>
### [⌂](#splitByType) is(any) : boolean
- **popis** : je hodnota symbol? stejná funkce jako utilsCommon.isSymbol
- **návratový typ** : {boolean}
- **parametr a** : {any}

*použití* :
~~~javascript
import { utilsSymbol } from 'dh-utils-common'

// TODO
~~~

--------------------

<a name="api_byTypeUndefined"></a>
## [⌂](#splitByType) API Funkce podle datového typu Undefined

<a name="api_byTypeUndefined_compare"></a>
### [⌂](#splitByType) compare(undefined,undefined) : number
- **popis** : porovnání undefined
- **návratový typ** : {number} 0
- **parametr a** : {undefined}
- **parametr b** : {undefined}

*použití* :
~~~javascript
import { utilsUndefined } from 'dh-utils-common'

utilsUndefined.compare(undefined,undefined); // 0
~~~

<a name="api_byTypeUndefined_copy"></a>
### [⌂](#splitByType) copyundefined) : undefined
- **popis** : kopie undefned
- **návratový typ** : {undefned}
- **parametr target** : {undefned}

*použití* :
~~~javascript
import { utilsUndefined } from 'dh-utils-common'

utilsUndefined.copy(undefined); // undefined
~~~

<a name="api_byTypeUndefined_equal"></a>
### [⌂](#splitByType) equal(undefined,undefined) : boolean
- **popis** : porovnání undefined
- **návratový typ** : {boolean} false,true
- **parametr a** : {undefined}
- **parametr b** : {undefined}

*použití* :
~~~javascript
import { utilsUndefined } from 'dh-utils-common'

utilsUndefined.equal(undefined,undefined); // true
~~~

<a name="api_byTypeUndefined_is"></a>
### [⌂](#splitByType) is(any) : boolean
- **popis** : je hodnota undefined? stejná funkce jako utilsCommon.isUndefined
- **návratový typ** : {boolean}
- **parametr a** : {any}

*použití* :
~~~javascript
import { utilsUndefined } from 'dh-utils-common'

utilsUndefined.is(undefined); // true
utilsUndefined.is(0); // false
~~~

--------------------
