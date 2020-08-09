# getGroupedByProperties(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;properties: string[],<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;objects<br>): Array<object[]>

Returns `objects` separated into groups (sub-arrays).  Each group will contain  
objects with matching values of every property listed in `properties`.   

The `properties` can contain dot-notation, i.e, `'property.subproperty.subsubproperty'`.  
Even if a property is an array index, here you need to use dot-notation and not  
square braces, i.e. `'1.0' // instead of [1][0]`  
The order you list the `properties` matters.  It determines the order the groups  
are returned in. 

When using this function you have to take some care with the 'number'  
data type.  If you're grouping by a property whose type is 'number', make sure  
its type is 'number' in all `objects`.  If some are a type different from 'number' you'll  
get an error.

## Examples
```
let persons = [
	{name: {first: 'Danny', last: 'Jones'}, address:'800 N. First St.'},
	{name: {first: 'Megan', last: 'Ferguson'}, address:'200 W. Elm St.'},
	{name: {first: 'Michael', last: 'Watts'}, address:'100 S. Palm Way'},
	{name: {first: 'William', last: 'Peltz'}, address:'2000 Lawrence Ave.'},
	{name: {first: 'Robert', last: 'Walters'}, address:'200 W. Elm St.'},
	{name: {first: 'Sara', last: 'Watts'}, address:'100 S. Palm Way'},
	{name: {first: 'Carol', last: 'Jones'}, address:'800 N. First St.'}
];

groups = getGroupedByProperties(['address', 'name.last'], persons);

/******************
 groups is:
 [
    [
       {name: {first: 'Michael', last: 'Watts'}, address: '100 S. Palm Way'},
       {name: {first: 'Sara', last: 'Watts'}, address: '100 S. Palm Way'}
    ],
    [ {name: {first: 'Megan', last: 'Ferguson'}, address: '200 W. Elm St.'} ],
    [ {name: {first: 'Robert', last: 'Walters'}, address: '200 W. Elm St.'} ],
    [ {name: {first: 'William', last: 'Peltz'}, address: '2000 Lawrence Ave.'} ],
    [
       {name: {first: 'Danny', last: 'Jones'}, address: '800 N. First St.'},
       {name: {first: 'Carol', last: 'Jones'}, address: '800 N. First St.'}
    ]
 ]
 ******************/
 
 
persons = [
	{name:{first: 'Danny', last: 'Jones'}, email: 'd_jonesy500@yahoo.com', role: 'admin'},
	{name:{first: 'Megan', last: 'Ferguson'}, email: 'fergie100@yahoo.com', role: 'user'},
	{name:{first: 'Megan', last: 'Ferguson'}, email: 'fergie100@yahoo.com', role: 'super-admin'},
	{name:{first: 'Danny', last: 'Jones'}, email: 'd_jonesy500@yahoo.com', role: 'user'},
	{name:{first: 'Michael', last: 'Watts'}, email: 'watts_my_name@gmail.com', role: 'admin'},
	{name:{first: 'Bill', last: 'Butler'}, email: 'b_butler999@hotmail.com', role: 'admin'},
	{name:{first: 'Michael', last: 'Watts'}, email: 'watts_my_name@gmail.com', role: 'user'},
	{name:{first: 'Danny', last: 'Jones'}, email: 'd_jonesy500@yahoo.com', role: 'super-admin'},
	{name:{first: 'Bill', last: 'Butler'}, email: 'bbutler666@hotmail.com', role: 'user'},
];

groups = getGroupedByProperties(['name.last', 'email'], persons);

/***************
groups is:
 [
    [ { name: {first: 'Bill', last: 'Butler'}, email: 'b_butler999@hotmail.com', role: 'admin' } ],
    [ { name: {first: 'Bill', last: 'Butler'}, email: 'bbutler666@hotmail.com', role: 'user' } ],
    [
       { name: {first: 'Megan', last: 'Ferguson'}, email: 'fergie100@yahoo.com', role: 'user' },
       { name: {first: 'Megan', last: 'Ferguson'}, email: 'fergie100@yahoo.com', role: 'super-admin' }
    ],
    [
       { name: {first: 'Danny', last: 'Jones'}, email: 'd_jonesy500@yahoo.com', role: 'admin' },
       { name: {first: 'Danny', last: 'Jones'}, email: 'd_jonesy500@yahoo.com', role: 'user' },
       { name: {first: 'Danny', last: 'Jones'}, email: 'd_jonesy500@yahoo.com', role: 'super-admin' }
    ],
    [
       { name: {first: 'Michael', last: 'Watts'}, email: 'watts_my_name@gmail.com', role: 'admin' },
       { name: {first: 'Michael', last: 'Watts'}, email: 'watts_my_name@gmail.com', role: 'user' }
    ]
 ]
 ***********************/
 
 
persons = [
	{name:{first: 'Danny', last: 'Jones'}, email: 'd_jonesy500@yahoo.com', admin: true},
	{name:{first: 'Megan', last: 'Ferguson'}, email: 'fergie100@yahoo.com', admin: false},
	{name:{first: 'Danny', last: 'Jones'}, email: 'd_jonesy500@yahoo.com', admin: false},
	{name:{first: 'Michael', last: 'Watts'}, email: 'watts_my_name@gmail.com', admin: true},
	{name:{first: 'Bill', last: 'Butler'}, email: 'b_butler999@hotmail.com', admin: false},
	{name:{first: 'Bill', last: 'Butler'}, email: 'bbutler666@hotmail.com', admin: true},
	{name:{first: 'Megan', last: 'Ferguson'}, email: 'fergie100@yahoo.com', admin: true},
	{name:{first: 'Michael', last: 'Watts'}, email: 'watts_my_name@gmail.com', admin: false}
];

groups = getGroupedByProperties(['name.last', 'email', 'admin'], persons);

/***************
groups is:
 [
    [ { name: {first: 'Bill', last: 'Butler'}, email: 'b_butler999@hotmail.com', admin: false } ],
    [ { name: {first: 'Bill', last: 'Butler'}, email: 'bbutler666@hotmail.com', admin: true } ],
    [ { name: {first: 'Megan', last: 'Ferguson'}, email: 'fergie100@yahoo.com', admin: false } ],
    [ { name: {first: 'Megan', last: 'Ferguson'}, email: 'fergie100@yahoo.com', admin: true } ],
    [ { name: {first: 'Danny', last: 'Jones'}, email: 'd_jonesy500@yahoo.com', admin: false } ],
    [ { name: {first: 'Danny', last: 'Jones'}, email: 'd_jonesy500@yahoo.com', admin: true } ],
    [ { name: {first: 'Michael', last: 'Watts'}, email: 'watts_my_name@gmail.com', admin: false } ],
    [ { name: {first: 'Michael', last: 'Watts'}, email: 'watts_my_name@gmail.com', admin: true } ]
 ]
 ****************/
```

## Installation

```bash
npm i @writetome51/get-grouped-by-properties
```
## Loading
```
import {getGroupedByProperties} from '@writetome51/get-grouped-by-properties';
```
