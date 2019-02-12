# getGroupedByProperties()
## getGroupedByProperties(properties, objects): Array<Object[]>

Returns <b>objects</b> separated into groups.  Each group will contain objects with matching values  
of every property listed in <b>properties</b>.  
The order you list the <b>properties</b> matters.  The first property performs the initial sort, and all
objects are separated into groups by that property.  All subsequent properties separate the groups
into smaller, more specific groups.  
Each property in <b>properties</b> can contain dot-notation.

<b>property</b> is a string that can include dot notation ( i.e,  `'property.subproperty.subsubproperty'` ) .  
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
