# getGroupedByProperties(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;properties: string[],<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;objects: object[],<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;matchFunctions?: {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[property: string]: (a, b) => boolean<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>): Array<object[]>

Returns `objects` separated into groups (sub-arrays).  Each group will contain objects with  
matching values of every property in `properties`.  You can customize how a match is determined  
with the optional `matchFunctions`.  

`matchFunctions`:  object with keys identical to each property in `properties`. The value of each  
key must be this type of function:  `(a, b) => boolean` . It's called to determine a match when   
grouping by the property matching that particular key. If a matching key isn't provided for a  
particular property, the default matchFunction `(a, b) => String(a) === String(b)` will be used for   
that property. 
If `matchFunctions` isn't provided, that default is used for all properties.

The `properties` can each contain dot-notation, i.e, `'property.subproperty.subsubproperty'`.  
Even if a property is an array index, here you need to use dot-notation and not  
square braces, i.e. `'1.0' // instead of [1][0]`  
The order you list the `properties` determines the order the groups are returned in. 


## Examples
```js
let persons = [
	{name: {first: 'Danny', last: 'Jones'}, address:'800 N. First St.'},
	{name: {first: 'Michael', last: 'Watts'}, address:'100 S. Palm Way'},
	{name: {first: 'Robert', last: 'Walters'}, address:'200 W. Elm St.'},
	{name: {first: 'Sara', last: 'Watts'}, address:'100 S. Palm Way'},
	{name: {first: 'Carol', last: 'Jones'}, address:'800 N. First St.'}
];
getGroupedByProperties(['address', 'name.last'], persons);
/******************
Returns:
 [
    [
       {name: {first: 'Michael', last: 'Watts'}, address: '100 S. Palm Way'},
       {name: {first: 'Sara', last: 'Watts'}, address: '100 S. Palm Way'}
    ],
    [ {name: {first: 'Robert', last: 'Walters'}, address: '200 W. Elm St.'} ],
    [
       {name: {first: 'Danny', last: 'Jones'}, address: '800 N. First St.'},
       {name: {first: 'Carol', last: 'Jones'}, address: '800 N. First St.'}
    ]
 ]
 ******************/

persons = [
	{name:{first: 'Danny', last: 'Jones'}, email: 'd_jonesy500@yahoo.com', role: 'admin'},
	{name:{first: 'Danny', last: 'Jones'}, email: 'd_jonesy500@yahoo.com', role: 'user'},
	{name:{first: 'Danny', last: 'Jones'}, email: 'djones100@yahoo.com', role: 'admin'},
	{name:{first: 'Danny', last: 'Jones'}, email: 'djones100@yahoo.com', role: 'user'}
];
getGroupedByProperties(['name.last', 'email'], persons);
/***************
Returns:
 [
    [
      { name: {first: 'Danny', last: 'Jones'}, email: 'd_jonesy500@yahoo.com', role: 'admin' },
      { name: {first: 'Danny', last: 'Jones'}, email: 'd_jonesy500@yahoo.com', role: 'user' },
    ],
    [
      {name:{first: 'Danny', last: 'Jones'}, email: 'djones100@yahoo.com', role: 'admin'},
      {name:{first: 'Danny', last: 'Jones'}, email: 'djones100@yahoo.com', role: 'user'}
    ],
 ]
 ***********************/
 

// This example makes matching case-insensitive:

persons = [
    { name: { first: 'Danny', last: 'Jones' }, email: 'd_jonesy500@yahoo.com', admin: true },
    { name: { first: 'Danny', last: 'Jones' }, email: 'd_jonesy500@yahoo.com', admin: false },
    { name: { first: 'michael', last: 'watts' }, email: 'watts_my_name@gmail.com', admin: true },
    { name: { first: 'Michael', last: 'Watts' }, email: 'watts_my_name@gmail.com', admin: true },
    { name: { first: 'danny', last: 'jones' }, email: 'd_jonesy500@yahoo.com', admin: false }
];
getGroupedByProperties(
    ['name.last', 'email'],
    persons,
    (a, b) => String(a).toLowerCase() === String(b).toLowerCase() // the special change
);
/***************
Returns:
[
  [
    { name: { first: 'Danny', last: 'Jones' }, email: 'd_jonesy500@yahoo.com', admin: true },
    { name: { first: 'Danny', last: 'Jones' }, email: 'd_jonesy500@yahoo.com', admin: false },
    { name: { first: 'danny', last: 'jones' }, email: 'd_jonesy500@yahoo.com', admin: false }
  ],
  [
    { name: { first: 'Michael', last: 'Watts' }, email: 'watts_my_name@gmail.com', admin: true },
    { name: { first: 'michael', last: 'watts' }, email: 'watts_my_name@gmail.com', admin: true }
  ]
]
 ****************/


// The next one customizes the matching further.  We'll add case-insensitivity for 
// names, and we'll group together anyone with same first and last name whose age is 
// in the range of 20 - 30.

persons = [
	{ name: { first: 'Danny', last: 'Jones' }, age: 31 },
	{ name: { first: 'danny', last: 'jones' }, age: 27 },
	{ name: { first: 'Danny', last: 'Jones' }, age: 22 },
	{ name: { first: 'Eric', last: 'Jones' }, age: 21 },
	{ name: { first: 'Eric', last: 'Jones' }, age: 32 },
	{ name: { first: 'Eric', last: 'Jones' }, age: 25 },
];
getGroupedByProperties(
    ['name.last', 'name.first', 'age'],
    persons,
    (a, b) => {
        if (typeof a === 'string') return (a.toLowerCase() === b.toLowerCase());
        if (typeof a === 'number') return (a >= 20 && a <= 30 && b >= 20 && b <= 30);
    }
);
/***********
Returns:
[
  [ 
    { name: { first: 'Danny', last: 'Jones' }, age: 22 }, 
    { name: { first: 'danny', last: 'jones' }, age: 27 } 
  ],
  [ { name: { first: 'Danny', last: 'Jones' }, age: 31 } ],
  [ 
    { name: { first: 'Eric', last: 'Jones' }, age: 21 }, 
    { name: { first: 'Eric', last: 'Jones' }, age: 25 } 
  ],
  [ { name: { first: 'Eric', last: 'Jones' }, age: 32 } ]
]
 **********/
```

## Installation
```bash
npm i @writetome51/get-grouped-by-properties
```
## Loading
```js
import {getGroupedByProperties} from '@writetome51/get-grouped-by-properties';
```
