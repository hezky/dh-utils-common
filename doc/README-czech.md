# dh-utils-common

[Použití v anglickém jazyce (Readme in English)](https://github.com/hezky/dh-utils-common/blob/master/README.md)

Knihovna obsahuje základní funkce nad různými primitivními hodnotami, datovými typy a datovými struktury.

## Popis

> Základní primitivní hodnoty, datové typy a datové struktury, s kterými pracujeme budou v tomto dokumentu dále volně uváděny jako **typy hodnot**, i když to přesně neodpovídá přesné specifikaci JS.

> Jako **typy hodnot** jsou zde v této knihovně mýšleny JS konstrukce: [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), [Boolean](https://developer.mozilla.org/en-US/docs/Glossary/Boolean), [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date), [Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions), [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null), [Number](https://developer.mozilla.org/en-US/docs/Glossary/number), [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object), [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp), [String](https://developer.mozilla.org/en-US/docs/Glossary/string), [Symbol](https://developer.mozilla.org/en-US/docs/Glossary/symbol), [undefined](https://developer.mozilla.org/en-US/docs/Glossary/undefined).

Základní funkce v této knihovně jsou rozdělené na:
- [obecné funkce](#general_function) = fungují pro všechny typy hodnot
- [lokální funkce podle typu](#local_function_by_type) = fungují pro konkrétní typ hodnoty

--------------------

<a name="general_function"></a>
## Obecné funkce

> Pokud pracujete s proměnnými s různými nebo obecnými typy hodnoty použijte **obecné funkce**.

Použití **obecné funkce**:
``` javascript
import { compare, utilsCommon } from 'dh-utils-common';

compare(0,0); // 0
compare(false, 0); // -1
// or
utilsCommon.compare(0,0); // 0
utilsCommon.compare(false, 0); // -1
```

<a name="splitFceGeneral"></a>
Seznam **obecné funkce**: [compare](#api_common_compare), [compareReferences](#api_common_compareReferences), [copy](#api_common_copy), [equal](#api_common_equal), [isArray](#api_common_isArray), [isBoolean](#api_common_isBoolean), [isDate](#api_common_isDate), [isDefined](#api_common_isDefined), [isEmpty](#api_common_isEmpty), [isFunction](#api_common_isFunction), [isNotArray](#api_common_isNotArray), [isNotDefined](#api_common_isNotDefined), [isNotEmpty](#api_common_isNotEmpty), [isNotNull](#api_common_isNotNull), [isNumber](#api_common_isNumber), [isNull](#api_common_isNull), [isObject](#api_common_isObject), [isPrimitive](#api_common_isPrimitive), [isRegExp](#api_common_isRegExp), [isString](#api_common_isString), [isSymbol](#api_common_isSymbol), [isUndefined](#api_common_isUndefined), [notEqual](#api_common_notEqual)

--------------------

<a name="local_function_by_type"></a>
## Lokální funkce podle typu

> Pokud pracujete s proměnnými s konkrétním typem hodnoty použijte **lokální funkce podle typu**.

Použití **lokální funkce podle typu**:
``` javascript
import { utilsArray } from 'dh-utils-common';

utilsArray.compare([1,2,3],[1,2,3]) // 0
```

Základní lokální funkce jsou čtyři : [compare](#local_function_compare), [copy](#local_function_copy), [equal](#local_function_equal), [is](#local_function_is)

<a name="local_function_compare"></a>
### Lokální funkce compare(a,b)
Lokální funkce **compare(a,b)** = porovná typ hodnoty. Vrací hodnoty: -1 (a < b) | 0 (a = b) | 1 (a < b).

Použití lokální funkce **compare**:
``` javascript
import { utilsString } from 'dh-utils-common';

utilsString.compare("ABC","ABC"); // 0
utilsString.compare("ABC","ZXY"); // -1
```

<a name="local_function_copy"></a>
### Lokální funkce **copy(a)**

Lokální funkce **copy(a)** = vytvoří kopii. V případě složité datové struktury, to je hluboká kopie.

Použití lokální funkce **copy**:
``` javascript
import { utilsArray } from 'dh-utils-common';

utilsArray.copy([1,2,3]); // [1,2,3]
```

<a name="local_function_equal"></a>
### Lokální funkce **equal(a,b)**
Lokální funkce **equal(a,b)** = porovná typ hodnoty. Vrací hodnoty true nebo false.

Použití lokální funkce **equal**:
``` javascript
import { utilsArray } from 'dh-utils-common';

utilsString.equal("ABC","ZXY"); // false
```

<a name="local_function_is"></a>
### Lokální funkce **is(a)**
Lokální funkce **is(a)** = kontrola zda je daná proměnná daného typu hodnoty? Vrací hodnoty true nebo false.

Použití lokální funkce **is**:
``` javascript
import { utilsString } from 'dh-utils-common';

utilsString.is("ABC"); // true
utilsString.is(0); // false
```

<a name="splitFceType"></a>
Seznam **lokální funkce podle typu**:
- Array : [compare](#api_byTypeArray_compare), [copy](#api_byTypeArray_copy), [equal](#api_byTypeArray_equal), [is](#api_byTypeArray_is), [isEmpty](#api_byTypeArray_isEmpty), [isNotEmpty](#api_byTypeArray_isNotEmpty),
- Boolean : [compare](#api_byTypeBoolean_compare), [copy](#api_byTypeBoolean_copy), [equal](#api_byTypeBoolean_equal), [is](#api_byTypeBoolean_is)
- Date : [compare](#api_byTypeDate_compare), [copy](#api_byTypeDate_copy), [equal](#api_byTypeDate_equal), [is](#api_byTypeDate_is)
- Function : [compare](#api_byTypeFunction_compare), [copy](#api_byTypeFunction_copy), [equal](#api_byTypeFunction_equal), [is](#api_byTypeFunction_is)
- Number : [compare](#api_byTypeNumber_compare), [copy](#api_byTypeNumber_copy), [equal](#api_byTypeNumber_equal), [is](#api_byTypeNumber_is)
- Null : [compare](#api_byTypeNull_compare), [copy](#api_byTypeNull_copy), [equal](#api_byTypeNull_equal), [is](#api_byTypeNull_is)
- Object : [compare](#api_byTypeObject_compare), [copy](#api_byTypeObject_copy), [equal](#api_byTypeObject_equal), [is](#api_byTypeObject_is), [isEmpty](#api_byTypeObject_isEmpty), [isNotEmpty](#api_byTypeObject_isNotEmpty)
- RegExp : [compare](#api_byTypeRegExp_compare), [copy](#api_byTypeRegExp_copy), [equal](#api_byTypeRegExp_equal), [is](#api_byTypeRegExp_is)
- String : [compare](#api_byTypeString_compare), [copy](#api_byTypeString_copy), [equal](#api_byTypeString_equal), [is](#api_byTypeString_is), [isEmpty](#api_byTypeString_isEmpty), [isNotEmpty](#api_byTypeString_isNotEmpty), [isNumeric](#api_byTypeString_isNumeric)
- Symbol : [compare](#api_byTypeSymbol_compare), [copy](#api_byTypeSymbol_copy), [equal](#api_byTypeSymbol_equal), [is](#api_byTypeSymbol_is)
- Undefined : [compare](#api_byTypeUndefined_compare), [copy](#api_byTypeUndefined_copy), [equal](#api_byTypeUndefined_equal), [is](#api_byTypeUndefined_is)

--------------------

## Práce se specifickými typy hodnoty

Ve vyjimečném případě budete chtít použít základní funkce nad vámi speciálně vytvořenými typy. Ano, je to možné. Tyto **obecné funkce** compare, copy, equal, is mají i třetí parametr funkce, kterými můžete upravit nad kterými typy hodnot chcete základní funkcionalitu provádět.

Příklad: Budeme mít speciální datové struktury / speciální typy hodnot "Car" a "Airplane". Tyto typy hodnot se liší atributem "model". Speciání typ hodnoty "Car" může tedy mýt model = "Honda" nebo "Suzuki". Speciání typ hodnoty "Airplane" může tedy mýt model = "Mig" nebo "F16":

``` javascript
import { compare } from "dh-utils-common";

// funkce nad speciální datovou strukturou (typy hodnot)
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

// třídy speciální datové struktury
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

// definování objektů
const airplaneIljusin = new ClassAirplane("Iljusin");
const carSuzuki = new ClassCar("Suzuki");
const carHonda = new ClassCar("Honda");
const carHonda2 = new ClassCar("Honda");

// definování seznamu specifického datové struktury (typ hodnot)
const listTypeValues = [typeValueAirplane, typeValueCar];

// konkrétní práce s funkcemi
compare(airplaneIljusin, carSuzuki, listTypeValues); // -1
compare(carSuzuki, carHonda, listTypeValues); // -1
compare(carHonda, carHonda2, listTypeValues); // 0
```
--------------------

## API - Obecné funkce

<a name="api_common_compare"></a>
### [⌂](#splitFceGeneral) compare(any,any,array) : number
- **popis** : porovnání dvou hodnot (jakákoliv)
- **návratový typ** : {number} -1|0|1
- **parametr a** : {any}
- **parametr b** : {any}
- **parametr c** : {array} list typ hodnot; specifické využití

*použití* :
~~~javascript
import { compare, utilsCommon } from 'dh-utils-common';

compare(0,0); // 0
// or
utilsCommon.compare(0,0); // 0
~~~

<a name="api_common_compareReferences"></a>
### [⌂](#splitFceGeneral) compareReferences(any,any) : number
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


const  a = {}, b = a;
compareReferences(a,b); // 0

const  a = {}, b = {}
compareReferences(a,b); // 1
~~~

<a name="api_common_copy"></a>
### [⌂](#splitFceGeneral) copy(any) : any
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
### [⌂](#splitFceGeneral) equal(any,any) : boolean
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
### [⌂](#splitFceGeneral) isArray(any) : boolean
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
### [⌂](#splitFceGeneral) isBoolean(any) : boolean
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
### [⌂](#splitFceGeneral) isDate(any) : boolean
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
### [⌂](#splitFceGeneral) isDefined(any) : boolean
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
### [⌂](#splitFceGeneral) isEmpty(any) : boolean
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
### [⌂](#splitFceGeneral) isFunction(any) : boolean
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
### [⌂](#splitFceGeneral) isNotArray(any) : boolean
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
### [⌂](#splitFceGeneral) isNotDefined(any) : boolean
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
### [⌂](#splitFceGeneral) isNotEmpty(any) : boolean
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
### [⌂](#splitFceGeneral) isNotNull(any) : boolean
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
### [⌂](#splitFceGeneral) isNumber(any) : boolean
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
### [⌂](#splitFceGeneral) isNull(any) : boolean
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
### [⌂](#splitFceGeneral) isObject(any) : boolean
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
### [⌂](#splitFceGeneral) isPrimitive(any) : boolean
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
### [⌂](#splitFceGeneral) isRegExp(any) : boolean
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
### [⌂](#splitFceGeneral) isString(any) : boolean
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

<a name="api_common_isSymbol"></a>
### [⌂](#splitFceGeneral) isSymbol(any) : boolean
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
### [⌂](#splitFceGeneral) isUndefined(any) : boolean
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
### [⌂](#splitFceGeneral) notEqual(any,any) : boolean
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
## [⌂](#splitFceType) API - Funkce podle datového typu Array

<a name="api_byTypeArray_compare"></a>
### [⌂](#splitFceType) compare(array,array) : number
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
### [⌂](#splitFceType) copy(array) : array
- **popis** : hluboká kopie pole
- **návratový typ** : {array}
- **parametr target** : {array}

*použití* :
~~~javascript
import { utilsArray } from 'dh-utils-common';

utilsArray.copy([1,2,3,4]); // [1,2,3,4]
~~~

<a name="api_byTypeArray_equal"></a>
### [⌂](#splitFceType) equal(array,array) : boolean
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
### [⌂](#splitFceType) is(any) : boolean
- **popis** : je hodnota pole? stejná funkce jako utilsCommon.isArray
- **návratový typ** : {boolean}
- **parametr a** : {any}

*použití* :
~~~javascript
import { utilsArray } from 'dh-utils-common';

utilsArray.is(5); // false
utilsArray.is([]); // true
~~~

<a name="api_byTypeArray_isEmpty"></a>
### [⌂](#splitFceType) isEmpty(array) : boolean
- **popis** : je array prázdný?
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
- **popis** : není array prázdný?
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
## [⌂](#splitFceType) API Funkce podle datového typu Boolean

<a name="api_byTypeBoolean_compare"></a>
### [⌂](#splitFceType) compare(boolean,boolean) : number
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
### [⌂](#splitFceType) copy(boolean) : boolean
- **popis** : kopie boolean
- **návratový typ** : {boolean}
- **parametr target** : {boolean}

*použití* :
~~~javascript
import { utilsBoolean } from 'dh-utils-common';

utilsBoolean.copy(true); // true
~~~

<a name="api_byTypeBoolean_equal"></a>
### [⌂](#splitFceType) equal(boolean,boolean) : boolean
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
### [⌂](#splitFceType) is(any) : boolean
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
## [⌂](#splitFceType) API Funkce podle datového typu Date

<a name="api_byTypeDate_compare"></a>
### [⌂](#splitFceType) compare(date,date) : number
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
### [⌂](#splitFceType) copy(date) : boolean
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
### [⌂](#splitFceType) equal(date,date) : boolean
- **popis** : porovná dva date
- **návratový typ** : {boolean}
- **parametr 1** : {date}
- **parametr 2** : {date}

*použití* :
~~~javascript
import { utilsDate } from 'dh-utils-common';

utilsDate.equal(new Date(2015,5,5),new Date(2015,5,6)); // false
~~~

<a name="api_byTypeDate_is"></a>
### [⌂](#splitFceType) is(any) : boolean
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
## [⌂](#splitFceType) API Funkce podle datového typu Function

<a name="api_byTypeFunction_compare"></a>
### [⌂](#splitFceType) compare(function,function) : number
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
### [⌂](#splitFceType) copy(function) : boolean
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
### [⌂](#splitFceType) equal(function,function) : boolean
- **popis** : porovná dvě function
- **návratový typ** : {function}
- **parametr 1** : {function}
- **parametr 2** : {function}

*použití* :
~~~javascript
import { utilsFunction } from 'dh-utils-common';

const func1 = function(){return "func1"};
const func2 = function(){return "func2"};

utilsFunction.equal(func1,func2); // false
~~~

<a name="api_byTypeFunction_is"></a>
### [⌂](#splitFceType) is(any) : boolean
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
## [⌂](#splitFceType) API Funkce podle datového typu Number

<a name="api_byTypeNumber_compare"></a>
### [⌂](#splitFceType) compare(number,number) : number
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
### [⌂](#splitFceType) copy(number) : number
- **popis** : kopie number
- **návratový typ** : {number}
- **parametr target** : {number}

*použití* :
~~~javascript
import { utilsNumber } from 'dh-utils-common';

utilsNumber.copy(10); // 10
~~~

<a name="api_byTypeNumber_equal"></a>
### [⌂](#splitFceType) equal(number,number) : boolean
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
### [⌂](#splitFceType) is(any) : boolean
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
## [⌂](#splitFceType) API Funkce podle datového typu Null

<a name="api_byTypeNull_compare"></a>
### [⌂](#splitFceType) compare(null,null) : number
- **popis** : porovnání null
- **návratový typ** : {number} -1|0|1
- **parametr a** : {null}
- **parametr b** : {null}

*použití* :
~~~javascript
import { utilsNull } from 'dh-utils-common';

utilsNull.compare(null,null); // 0
~~~

<a name="api_byTypeNull_copy"></a>
### [⌂](#splitFceType) copy(null) : null
- **popis** : kopie null
- **návratový typ** : {null}
- **parametr target** : {null}

*použití* :
~~~javascript
import { utilsNull } from 'dh-utils-common';

utilsNull.copy(null); // null
~~~

<a name="api_byTypeNull_equal"></a>
### [⌂](#splitFceType) equal(null,null) : boolean
- **popis** : porovnání boolean
- **návratový typ** : {boolean} true
- **parametr a** : {null}
- **parametr b** : {null}

*použití* :
~~~javascript
import { utilsNull } from 'dh-utils-common';

utilsNull.equal(null,null); // true
~~~

<a name="api_byTypeNull_is"></a>
### [⌂](#splitFceType) is(any) : boolean
- **popis** : je hodnota null? stejná funkce jako utilsCommon.isNull
- **návratový typ** : {boolean} true|false
- **parametr a** : {any}

*použití* :
~~~javascript
import { utilsNull } from 'dh-utils-common';

utilsNull.is(null); // true
utilsNull.is(0); // false
~~~


--------------------

<a name="api_byTypeObject"></a>
## [⌂](#splitFceType) API Funkce podle datového typu Object

<a name="api_byTypeObject_compare"></a>
### [⌂](#splitFceType) compare(object,object) : number
- **popis** : porovnání objekty
- **návratový typ** : {number} -1|0|1
- **parametr a** : {object}
- **parametr b** : {object}

*použití* :
~~~javascript
import { utilsObject } from 'dh-utils-common';

utilsObject.compare({name: "John", age: 42},{name: "John", age: 42}); // 0
utilsObject.compare({nameX: "John", age: 42},{name: "John", age: 42}); // 1
utilsObject.compare({name: "JohnX", age: 42},{name: "John", age: 42}); // 1
~~~

<a name="api_byTypeObject_copy"></a>
### [⌂](#splitFceType) copy(object) : object
- **popis** : kopie object
- **návratový typ** : {object}
- **parametr target** : {object}

*použití* :
~~~javascript
import { utilsObject } from 'dh-utils-common';

utilsObject.copy({name: "John", age: 42}); // {name: "John", age: 42}
~~~

<a name="api_byTypeObject_equal"></a>
### [⌂](#splitFceType) equal(object,object) : boolean
- **popis** : porovnání object
- **návratový typ** : {boolean} true
- **parametr a** : {object}
- **parametr b** : {object}

*použití* :
~~~javascript
import { utilsObject } from 'dh-utils-common';

utilsObject.equal({name: "John", age: 42}, {name: "John", age: 42}); // true
utilsObject.equal({name: "John", age: 42}, {name: "John", age: 43}); // false
~~~

<a name="api_byTypeObject_is"></a>
### [⌂](#splitFceType) is(any) : boolean
- **popis** : je hodnota object? stejná funkce jako utilsCommon.isObject
- **návratový typ** : {boolean} true|false
- **parametr a** : {any}

*použití* :
~~~javascript
import { utilsObject } from 'dh-utils-common';

utilsObject.is({}); // true
utilsObject.is(0); // false
~~~

<a name="api_byTypeObject_isEmpty"></a>
### [⌂](#splitFceType) isEmpty(object) : boolean
- **popis** : je object prázdná ?
- **return type** : {boolean} true|false
- **parametr a** : {object}

*usage* :
~~~javascript
import { utilsObject } from 'dh-utils-common';

utilsObject.isEmpty({}); // true
utilsObject.isEmpty({a: "x"}}); // false
~~~

<a name="api_byTypeObject_isNotEmpty"></a>
### [⌂](#splitFceType) isNotEmpty(object) : boolean
- **popis** : není object prázdný ?
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
## [⌂](#splitFceType) API Funkce podle datového typu RegExp

<a name="api_byTypeRegExp_compare"></a>
### [⌂](#splitFceType) compare(regexp,regexp) : number
- **popis** : porovnání regexp
- **návratový typ** : {number} -1|0|1
- **parametr a** : {regexp}
- **parametr b** : {regexp}

*použití* :
~~~javascript
import { utilsRegExp } from 'dh-utils-common';

utilsRegExp.compare(/ab+c/,/ab+c/); // 0
utilsRegExp.compare(/ac+c/,/ab+c/); // -1
~~~

<a name="api_byTypeRegExp_copy"></a>
### [⌂](#splitFceType) copy(regexp) : regexp
- **popis** : kopie RegExp
- **návratový typ** : {regexp}
- **parametr target** : {regexp}

*použití* :
~~~javascript
import { utilsRegExp } from 'dh-utils-common';

utilsRegExp.copy(/ab+c/); // /ab+c/
~~~

<a name="api_byTypeRegExp_equal"></a>
### [⌂](#splitFceType) equal(regexp,regexp) : boolean
- **popis** : porovnání RegExp
- **návratový typ** : {boolean} false,true
- **parametr a** : {regexp}
- **parametr b** : {regexp}

*použití* :
~~~javascript
import { utilsRegExp } from 'dh-utils-common';

utilsRegExp.equal(/ab+c/,/ab+c/); // true
utilsRegExp.equal(/ac+c/,/ab+c/); // false
~~~

<a name="api_byTypeRegExp_is"></a>
### [⌂](#splitFceType) is(regexp) : boolean
- **popis** : je hodnota regexp? stejná funkce jako utilsCommon.isRegExp
- **návratový typ** : {boolean}
- **parametr a** : {any}

*použití* :
~~~javascript
import { utilsRegExp } from 'dh-utils-common';

utilsRegExp.is(/ab+c/); // true
utilsRegExp.is(0); // false
~~~

--------------------

<a name="api_byTypeString"></a>
## [⌂](#splitFceType) API Funkce podle datového typu String

<a name="api_byTypeString_compare"></a>
### [⌂](#splitFceType) compare(string,string) : number
- **popis** : porovnání string
- **návratový typ** : {number} -1|0|1
- **parametr a** : {string}
- **parametr b** : {string}

*použití* :
~~~javascript
import { utilsString } from 'dh-utils-common';

utilsString.compare("ABC","ZXY"); // -1
~~~

<a name="api_byTypeString_copy"></a>
### [⌂](#splitFceType) copy(string) : boolean
- **popis** : kopie string
- **návratový typ** : {boolean}
- **parametr target** : {boolean}

*použití* :
~~~javascript
import { utilsString } from 'dh-utils-common';

utilsString.copy("abc"); // abc
~~~

<a name="api_byTypeString_equal"></a>
### [⌂](#splitFceType) equal(string,string) : boolean
- **popis** : porovnání string
- **návratový typ** : {boolean} false,true
- **parametr a** : {string}
- **parametr b** : {string}

*použití* :
~~~javascript
import { utilsString } from 'dh-utils-common';

utilsString.equal("ABC","ZXY"); // false
~~~

<a name="api_byTypeString_is"></a>
### [⌂](#splitFceType) is(any) : boolean
- **popis** : je hodnota string? stejná funkce jako utilsCommon.isString
- **návratový typ** : {boolean}
- **parametr a** : {any}

*použití* :
~~~javascript
import { utilsString } from 'dh-utils-common';

utilsString.is("abc"); // true
utilsString.is(0); // false
~~~

<a name="api_byTypeString_isEmpty"></a>
### [⌂](#splitFceType) isEmpty(string) : boolean
- **popis** : je string prázdný?
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
- **popis** : není string prázdný?
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
## [⌂](#splitFceType) API Funkce podle datového typu Symbol

<a name="api_byTypeSymbol_compare"></a>
### [⌂](#splitFceType) compare(symbol,symbol) : number
- **popis** : porovnání symbol
- **návratový typ** : {number} -1|0|1
- **parametr a** : {symbol}
- **parametr b** : {boolean}

*použití* :
~~~javascript
import { utilsSymbol } from 'dh-utils-common';

// TODO
~~~

<a name="api_byTypeSymbol_copy"></a>
### [⌂](#splitFceType) copy(symbol) : symbol
- **popis** : kopie symbol
- **návratový typ** : {symbol}
- **parametr target** : {symbol}

*použití* :
~~~javascript
import { utilsSymbol } from 'dh-utils-common';

// TODO
~~~

<a name="api_byTypeSymbol_equal"></a>
### [⌂](#splitFceType) equal(symbol,symbol) : boolean
- **popis** : porovnání symbol
- **návratový typ** : {boolean} false,true
- **parametr a** : {symbol}
- **parametr b** : {symbol}

*použití* :
~~~javascript
import { utilsSymbol } from 'dh-utils-common';

// TODO
~~~

<a name="api_byTypeSymbol_is"></a>
### [⌂](#splitFceType) is(any) : boolean
- **popis** : je hodnota symbol? stejná funkce jako utilsCommon.isSymbol
- **návratový typ** : {boolean}
- **parametr a** : {any}

*použití* :
~~~javascript
import { utilsSymbol } from 'dh-utils-common';

// TODO
~~~

--------------------

<a name="api_byTypeUndefined"></a>
## [⌂](#splitFceType) API Funkce podle datového typu Undefined

<a name="api_byTypeUndefined_compare"></a>
### [⌂](#splitFceType) compare(undefined,undefined) : number
- **popis** : porovnání undefined
- **návratový typ** : {number} 0
- **parametr a** : {undefined}
- **parametr b** : {undefined}

*použití* :
~~~javascript
import { utilsUndefined } from 'dh-utils-common';

utilsUndefined.compare(undefined,undefined); // 0
~~~

<a name="api_byTypeUndefined_copy"></a>
### [⌂](#splitFceType) copyundefined) : undefined
- **popis** : kopie undefined
- **návratový typ** : {undefned}
- **parametr target** : {undefned}

*použití* :
~~~javascript
import { utilsUndefined } from 'dh-utils-common';

utilsUndefined.copy(undefined); // undefined
~~~

<a name="api_byTypeUndefined_equal"></a>
### [⌂](#splitFceType) equal(undefined,undefined) : boolean
- **popis** : porovnání undefined
- **návratový typ** : {boolean} false,true
- **parametr a** : {undefined}
- **parametr b** : {undefined}

*použití* :
~~~javascript
import { utilsUndefined } from 'dh-utils-common';

utilsUndefined.equal(undefined,undefined); // true
~~~

<a name="api_byTypeUndefined_is"></a>
### [⌂](#splitFceType) is(any) : boolean
- **popis** : je hodnota undefined? stejná funkce jako utilsCommon.isUndefined
- **návratový typ** : {boolean}
- **parametr a** : {any}

*použití* :
~~~javascript
import { utilsUndefined } from 'dh-utils-common';

utilsUndefined.is(undefined); // true
utilsUndefined.is(0); // false
~~~

--------------------
