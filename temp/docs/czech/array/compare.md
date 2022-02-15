<a  name="api_byTypeArray_compare"></a>

### [⌂](#splitFceType) 
compare: (arrA: array, arrB: array) => number
- **popis** : porovnání dvou polí
- **návratový typ** : {number} -1|0|1
- **parametr arrA** : {array}
- **parametr arrB** : {array}

_použití_:
```javascript
import { utilsArray } from "@dh-utils/common";
utilsArray.compare([1, 1], [1, 2]); // -1
utilsArray.compare([1, 1], [1, 1]); //  0
utilsArray.compare([1, 2], [1, 1]); //  1
```
