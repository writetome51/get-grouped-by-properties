import { getGroupedByProperties } from './index';


let persons = [
	{height: 70, hair: 'blonde', eyes: 'green'},
	{height: 64, hair: 'red', eyes: 'brown'},
	{height: 79, hair: 'blonde', eyes: 'blue'},
	{height: 72, hair: 'black', eyes: 'green'},
	{height: 83, hair: 'red', eyes: 'hazel'},
	{height: 72, hair: 'blonde', eyes: 'brown'},
	{height: 72, hair: 'blonde', eyes: 'green'},
	{height: 72, hair: 'red', eyes: 'blue'},
	{height: 83, hair: 'black', eyes: 'brown'}
];
let groups = getGroupedByProperties(['eyes'], persons);
console.log(groups);
/*******************
 Result:
 [
    [
       { height: 79, hair: 'blonde', eyes: 'blue' },
       { height: 72, hair: 'red', eyes: 'blue' }
    ],
    [
       { height: 64, hair: 'red', eyes: 'brown' },
       { height: 72, hair: 'blonde', eyes: 'brown' },
       { height: 83, hair: 'black', eyes: 'brown' }
    ],
    [
       { height: 70, hair: 'blonde', eyes: 'green' },
       { height: 72, hair: 'black', eyes: 'green' },
       { height: 72, hair: 'blonde', eyes: 'green' }
    ],
    [ { height: 83, hair: 'red', eyes: 'hazel' } ]
 ]
 *******************/


console.log(''); // just to add a line break.

groups = getGroupedByProperties(['eyes', 'hair'], persons);
console.log(groups);
/******************
Result:
 [
    [ { height: 79, hair: 'blonde', eyes: 'blue' } ],
    [ { height: 72, hair: 'red', eyes: 'blue' } ],
    [ { height: 83, hair: 'black', eyes: 'brown' } ],
    [ { height: 72, hair: 'blonde', eyes: 'brown' } ],
    [ { height: 64, hair: 'red', eyes: 'brown' } ],
    [ { height: 72, hair: 'black', eyes: 'green' } ],
    [
       { height: 70, hair: 'blonde', eyes: 'green' },
       { height: 72, hair: 'blonde', eyes: 'green' }
    ],
    [ { height: 83, hair: 'red', eyes: 'hazel' } ]
 ]
******************/


console.log(''); // just to add a line break.

groups = getGroupedByProperties(['eyes', 'hair', 'height'], persons);
console.log(groups);
/******************
 Result:
 [
    [ { height: 79, hair: 'blonde', eyes: 'blue' } ],
    [ { height: 72, hair: 'red', eyes: 'blue' } ],
    [ { height: 83, hair: 'black', eyes: 'brown' } ],
    [ { height: 72, hair: 'blonde', eyes: 'brown' } ],
    [ { height: 64, hair: 'red', eyes: 'brown' } ],
    [ { height: 72, hair: 'black', eyes: 'green' } ],
    [ { height: 70, hair: 'blonde', eyes: 'green' } ],
    [ { height: 72, hair: 'blonde', eyes: 'green' } ],
    [ { height: 83, hair: 'red', eyes: 'hazel' } ]
 ]
 ******************/