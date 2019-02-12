# getGroupedByProperties()
## getGroupedByProperties(properties, objects): Array<Object[]>

  
<b>property</b> is a string that can include dot notation ( i.e,  `'property.subproperty.subsubproperty'` ) .  
Value of object property must be type 'number' and must be a finite number,  
or else will error. 

Note:  <b>property</b> does not have to be an object key. It can also be an array index.  
If you are getting the value of a nested array index, here you need to use dot-notation and not  
square braces.  Example: `'1.0' instead of [1][0]`

## Examples
```

```

## Installation

You must have npm installed first.  Then, in the command line:

```bash
npm install @writetome51/get-grouped-by-properties
```
## Loading
```
// If using TypeScript:
import {getGroupedByProperties} from '@writetome51/get-grouped-by-properties';
// If using ES5 JavaScript:
var getGroupedByProperties = 
	require('@writetome51/get-grouped-by-properties').getGroupedByProperties;
```