# getGroupedByProperties(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;properties: string[],<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;objects: object[],<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;matchFunctions?: {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[property: string]: (a, b) => boolean<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>): Array<object[]>

Returns `objects` separated into groups (sub-arrays).  Each group will contain objects with  
matching values of every property in `properties`.  You can customize how a match is determined  
with the optional `matchFunctions`.  

`matchFunctions`: object. Any of its keys must be identical to a property in `properties`.  
The value of each key must be this type of function:  `(a, b) => boolean` . It's called to  
determine a match when grouping by the property matching that particular key. If a matching key  
isn't provided for a particular property, the default matchFunction  
`(a, b) => String(a) === String(b)` will be used for that property. If `matchFunctions` isn't  
provided, that default is used for all properties.

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
	{name: {first: 'Carol', last: 'Jones'}, address:'800 N. First St.'},
	{name: {first: 'Tara', last: 'Zucko'}, address:'100 S. Palm Way'},
];
getGroupedByProperties(['address', 'name.last'], persons);
/******************
Returns:
 [
    [
       {name: {first: 'Michael', last: 'Watts'}, address: '100 S. Palm Way'},
       {name: {first: 'Sara', last: 'Watts'}, address: '100 S. Palm Way'}
    ],
    [ {name: {first: 'Tara', last: 'Zucko'}, address:'100 S. Palm Way'} ],
    [ {name: {first: 'Robert', last: 'Walters'}, address: '200 W. Elm St.'} ],
    [
       {name: {first: 'Danny', last: 'Jones'}, address: '800 N. First St.'},
       {name: {first: 'Carol', last: 'Jones'}, address: '800 N. First St.'}
    ]
 ]
 ******************/


// Reverse the order of properties to see the result:

getGroupedByProperties(['name.last', 'address'], persons);
/******************
Returns:
 [
    [
       {name: {first: 'Danny', last: 'Jones'}, address: '800 N. First St.'},
       {name: {first: 'Carol', last: 'Jones'}, address: '800 N. First St.'}
    ],
    [ {name: {first: 'Robert', last: 'Walters'}, address: '200 W. Elm St.'} ],
    [
       {name: {first: 'Michael', last: 'Watts'}, address: '100 S. Palm Way'},
       {name: {first: 'Sara', last: 'Watts'}, address: '100 S. Palm Way'}
    ],
    [ {name: {first: 'Tara', last: 'Zucko'}, address:'100 S. Palm Way'} ]
 ]
 ******************/
 

// This example makes matching case-insensitive for the last name:

persons = [
    { name: { first: 'Danny', last: 'Jones' }, email: 'd_jonesy500@yahoo.com' },
    { name: { first: 'michael', last: 'watts' }, email: 'watts_my_name@gmail.com'},
    { name: { first: 'Michael', last: 'Watts' }, email: 'watts_my_name@gmail.com' },
    { name: { first: 'danny', last: 'jones' }, email: 'd_jonesy500@yahoo.com' }
];
getGroupedByProperties(
    ['name.last', 'email'],
    persons,
    {'name.last': (a, b) => a.toLowerCase() === b.toLowerCase()} 
);
/***************
Returns:
[
  [
    { name: { first: 'Danny', last: 'Jones' }, email: 'd_jonesy500@yahoo.com' },
    { name: { first: 'danny', last: 'jones' }, email: 'd_jonesy500@yahoo.com' }
  ],
  [
    { name: { first: 'Michael', last: 'Watts' }, email: 'watts_my_name@gmail.com' },
    { name: { first: 'michael', last: 'watts' }, email: 'watts_my_name@gmail.com' }
  ]
]
 ****************/


// This makes string matching case-insensitive and separates those younger than 100 
// from those 100 and older:

persons = [
	{name: {first: 'Eddie'}, age: 102},
	{name: {first: 'Eddie'}, age: 32},
	{name: {first: 'danny'}, age: 102},
	{name: {first: 'eric'}, age: 25},
	{name: {first: 'Danny'}, age: 31},
	{name: {first: 'David'}, age: 100},
];
getGroupedByProperties(
    // group by first letter of first name, and age:
    ['name.first.0', 'age'],
    persons,
    {
        'name.first.0': (a, b) => a.toLowerCase() === b.toLowerCase(),
        // Separate ages between those younger than 100, and everyone else:
        'age': (a, b) => a < 100 ? b < 100 : b >= 100
    }
);
/***********
Returns:
[
  [ {name: {first: 'Danny'}, age: 31} ],
  [ {name: {first: 'David'}, age: 100},  {name: {first: 'danny'}, age: 102} ],
  [ {name: {first: 'eric'}, age: 25},  {name: {first: 'Eddie'}, age: 32} ],
  [ {name: {first: 'Eddie'}, age: 102} ]
]
***********/
```

## Installation
```bash
npm i @writetome51/get-grouped-by-properties
```
## Loading
```js
import {getGroupedByProperties} from '@writetome51/get-grouped-by-properties';
```
