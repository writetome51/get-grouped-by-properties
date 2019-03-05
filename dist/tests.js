"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var isArray_notArray_1 = require("basic-data-handling/isArray_notArray");
var persons = [
    { height: 70, hair: 'blonde', eyes: 'green' },
    { height: 64, hair: 'red', eyes: 'brown' },
    { height: 79, hair: 'blonde', eyes: 'blue' },
    { height: 72, hair: 'black', eyes: 'green' },
    { height: 83, hair: 'red', eyes: 'hazel' },
    { height: 72, hair: 'blonde', eyes: 'brown' },
    { height: 72, hair: 'blonde', eyes: 'green' },
    { height: 72, hair: 'red', eyes: 'blue' },
    { height: 83, hair: 'black', eyes: 'brown' }
];
var groups = index_1.getGroupedByProperties(['eyes'], persons);
if (isArray_notArray_1.isArray(groups) && groups.length === 4 &&
    groups[0].length === 2 && groups[0][0].eyes === 'blue' && groups[0][1].eyes === 'blue' &&
    groups[1].length === 3 && groups[1][0].eyes === 'brown' && groups[1][1].eyes === 'brown' &&
    groups[1][2].eyes === 'brown' &&
    groups[2].length === 3 && groups[2][0].eyes === 'green' && groups[2][1].eyes === 'green' &&
    groups[2][2].eyes === 'green' &&
    groups[3].length === 1 && groups[3][0].eyes === 'hazel')
    console.log('test 1 passed');
else
    console.log('test 1 FAILED');
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
groups = index_1.getGroupedByProperties(['eyes', 'hair'], persons);
if (isArray_notArray_1.isArray(groups) && groups.length === 8 &&
    groups[0].length === 1 && groups[0][0].eyes === 'blue' && groups[0][0].hair === 'blonde' &&
    groups[1].length === 1 && groups[1][0].eyes === 'blue' && groups[1][0].hair === 'red' &&
    groups[2].length === 1 && groups[2][0].eyes === 'brown' && groups[2][0].hair === 'black' &&
    groups[3].length === 1 && groups[3][0].eyes === 'brown' && groups[3][0].hair === 'blonde' &&
    groups[4].length === 1 && groups[4][0].eyes === 'brown' && groups[4][0].hair === 'red' &&
    groups[5].length === 1 && groups[5][0].eyes === 'green' && groups[5][0].hair === 'black' &&
    groups[6].length === 2 && groups[6][0].eyes === 'green' && groups[6][0].hair === 'blonde' &&
    groups[6][1].eyes === 'green' && groups[6][1].hair === 'blonde' &&
    groups[7].length === 1 && groups[7][0].eyes === 'hazel' && groups[7][0].hair === 'red')
    console.log('test 2 passed');
else
    console.log('test 2 FAILED');
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
persons = [
    { name: { first: 'Danny', last: 'Jones' }, email: 'd_jonesy500@yahoo.com', address: '800 N. First St.' },
    { name: { first: 'Megan', last: 'Ferguson' }, email: 'fergie100@yahoo.com', address: '200 W. Elm St.' },
    { name: { first: 'Michael', last: 'Watts' }, email: 'watts_my_name@gmail.com', address: '100 S. Palm Way' },
    { name: { first: 'William', last: 'Peltz' }, email: 'jonesy500@yahoo.com', address: '2000 Lawrence Ave.' },
    { name: { first: 'Bill', last: 'Butler' }, email: 'bbutler999@hotmail.com', address: '2000 Lawrence Ave.' },
    { name: { first: 'Robert', last: 'Walters' }, email: 'r_walters500@gmail.com', address: '200 W. Elm St.' },
    { name: { first: 'Sara', last: 'Watts' }, email: 'sarawatts100@gmail.com', address: '100 S. Palm Way' },
    { name: { first: 'Carol', last: 'Jones' }, email: 'c_jonesy500@yahoo.com', address: '800 N. First St.' },
    { name: { first: 'Bill', last: 'Butler' }, email: 'bbutler666@hotmail.com', address: '6000 Raw Way' },
];
groups = index_1.getGroupedByProperties(['address', 'name.last'], persons);
if (isArray_notArray_1.isArray(groups) && groups.length === 7 &&
    groups[0].length === 2 && groups[0][0].address === '100 S. Palm Way' && groups[0][0].name.last === 'Watts' &&
    groups[0][1].address === '100 S. Palm Way' && groups[0][1].name.last === 'Watts' &&
    groups[1].length === 1 && groups[1][0].address === '200 W. Elm St.' && groups[1][0].name.last === 'Ferguson' &&
    groups[2].length === 1 && groups[2][0].address === '200 W. Elm St.' && groups[2][0].name.last === 'Walters' &&
    groups[3].length === 1 && groups[3][0].address === '2000 Lawrence Ave.' && groups[3][0].name.last === 'Butler' &&
    groups[4].length === 1 && groups[4][0].address === '2000 Lawrence Ave.' && groups[4][0].name.last === 'Peltz' &&
    groups[5].length === 1 && groups[5][0].address === '6000 Raw Way' && groups[5][0].name.last === 'Butler' &&
    groups[6].length === 2 && groups[6][0].address === '800 N. First St.' && groups[6][0].name.last === 'Jones' &&
    groups[6][1].address === '800 N. First St.' && groups[6][1].name.last === 'Jones')
    console.log('test 3 passed');
else
    console.log('test 3 FAILED');
/******************
 Result:
 [
    [
       {name: {first: 'Michael', last: 'Watts'}, email: 'watts_my_name@gmail.com', address: '100 S. Palm Way'},
       {name: {first: 'Sara', last: 'Watts'}, email: 'sarawatts100@gmail.com', address: '100 S. Palm Way'}
    ],
    [ {name: {first: 'Megan', last: 'Ferguson'}, email: 'fergie100@yahoo.com', address: '200 W. Elm St.'} ],
    [ {name: {first: 'Robert', last: 'Walters'}, email: 'r_walters500@gmail.com', address: '200 W. Elm St.'} ],
    [ {name: {first: 'Bill', last: 'Butler'}, email: 'bbutler999@hotmail.com', address: '2000 Lawrence Ave.'} ],
    [ {name: {first: 'William', last: 'Peltz'}, email: 'jonesy500@yahoo.com', address: '2000 Lawrence Ave.'} ],
    [ {name: {first: 'Bill', last: 'Butler'}, email: 'bbutler666@hotmail.com', address: '6000 Raw Way'} ],
    [
       {name: {first: 'Danny', last: 'Jones'}, email: 'd_jonesy500@yahoo.com', address: '800 N. First St.'},
       {name: {first: 'Carol', last: 'Jones'}, email: 'c_jonesy500@yahoo.com', address: '800 N. First St.'}
    ]
 ]
 ******************/
persons = [
    { name: { first: 'Danny', last: 'Jones' }, email: 'd_jonesy500@yahoo.com', admin: true },
    { name: { first: 'Megan', last: 'Ferguson' }, email: 'fergie100@yahoo.com', admin: false },
    { name: { first: 'Megan', last: 'Ferguson' }, email: 'fergie100@yahoo.com', admin: true },
    { name: { first: 'Danny', last: 'Jones' }, email: 'd_jonesy500@yahoo.com', admin: false },
    { name: { first: 'Michael', last: 'Watts' }, email: 'watts_my_name@gmail.com', admin: true },
    { name: { first: 'Bill', last: 'Butler' }, email: 'b_butler999@hotmail.com', admin: false },
    { name: { first: 'Michael', last: 'Watts' }, email: 'watts_my_name@gmail.com', admin: true },
    { name: { first: 'Danny', last: 'Jones' }, email: 'd_jonesy500@yahoo.com', admin: false },
    { name: { first: 'Bill', last: 'Butler' }, email: 'bbutler666@hotmail.com', admin: true },
    { name: { first: 'Danny', last: 'Jones' }, email: 'd_jonesy500@yahoo.com', admin: true },
    { name: { first: 'Megan', last: 'Ferguson' }, email: 'fergie100@yahoo.com', admin: false },
    { name: { first: 'Megan', last: 'Ferguson' }, email: 'fergie100@yahoo.com', admin: true },
    { name: { first: 'Danny', last: 'Jones' }, email: 'd_jonesy500@yahoo.com', admin: false },
    { name: { first: 'Michael', last: 'Watts' }, email: 'watts_my_name@gmail.com', admin: true },
    { name: { first: 'Bill', last: 'Butler' }, email: 'b_butler999@hotmail.com', admin: false },
    { name: { first: 'Michael', last: 'Watts' }, email: 'watts_my_name@gmail.com', admin: true },
    { name: { first: 'Danny', last: 'Jones' }, email: 'd_jonesy500@yahoo.com', admin: false },
    { name: { first: 'Bill', last: 'Butler' }, email: 'bbutler666@hotmail.com', admin: true }
];
console.log(''); // just to add a line break.
groups = index_1.getGroupedByProperties(['name.last', 'email', 'admin'], persons);
console.log(groups);
/***************
 Result:
 [
    [
       { name: [Object], email: 'b_butler999@hotmail.com', admin: false },
       { name: [Object], email: 'b_butler999@hotmail.com', admin: false }
    ],
    [
       { name: [Object], email: 'bbutler666@hotmail.com', admin: true },
       { name: [Object], email: 'bbutler666@hotmail.com', admin: true }
    ],
    [
       { name: [Object], email: 'fergie100@yahoo.com', admin: false },
       { name: [Object], email: 'fergie100@yahoo.com', admin: false }
    ],
    [
       { name: [Object], email: 'fergie100@yahoo.com', admin: true },
       { name: [Object], email: 'fergie100@yahoo.com', admin: true }
    ],
    [
       { name: [Object], email: 'd_jonesy500@yahoo.com', admin: false },
       { name: [Object], email: 'd_jonesy500@yahoo.com', admin: false },
       { name: [Object], email: 'd_jonesy500@yahoo.com', admin: false },
       { name: [Object], email: 'd_jonesy500@yahoo.com', admin: false }
    ],
    [
       { name: [Object], email: 'd_jonesy500@yahoo.com', admin: true },
       { name: [Object], email: 'd_jonesy500@yahoo.com', admin: true }
    ],
    [
       { name: [Object], email: 'watts_my_name@gmail.com', admin: true },
       { name: [Object], email: 'watts_my_name@gmail.com', admin: true },
       { name: [Object], email: 'watts_my_name@gmail.com', admin: true },
       { name: [Object], email: 'watts_my_name@gmail.com', admin: true }
    ]
 ]
 ****************/
