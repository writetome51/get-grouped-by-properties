"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
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
groups = index_1.getGroupedByProperties(['eyes', 'hair'], persons);
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
groups = index_1.getGroupedByProperties(['eyes', 'hair', 'height'], persons);
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
console.log(''); // just to add a line break.
groups = index_1.getGroupedByProperties(['address', 'name.last'], persons);
console.log(groups);
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
    { name: { first: 'Danny', last: 'Jones' }, email: 'd_jonesy500@yahoo.com', role: 'admin' },
    { name: { first: 'Megan', last: 'Ferguson' }, email: 'fergie100@yahoo.com', role: 'user' },
    { name: { first: 'Megan', last: 'Ferguson' }, email: 'fergie100@yahoo.com', role: 'super-admin' },
    { name: { first: 'Danny', last: 'Jones' }, email: 'd_jonesy500@yahoo.com', role: 'user' },
    { name: { first: 'Michael', last: 'Watts' }, email: 'watts_my_name@gmail.com', role: 'admin' },
    { name: { first: 'Bill', last: 'Butler' }, email: 'b_butler999@hotmail.com', role: 'admin' },
    { name: { first: 'Michael', last: 'Watts' }, email: 'watts_my_name@gmail.com', role: 'user' },
    { name: { first: 'Danny', last: 'Jones' }, email: 'd_jonesy500@yahoo.com', role: 'super-admin' },
    { name: { first: 'Bill', last: 'Butler' }, email: 'bbutler666@hotmail.com', role: 'user' },
];
console.log(''); // just to add a line break.
groups = index_1.getGroupedByProperties(['name.last', 'email'], persons);
console.log(groups);
/***************
 Result:
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
console.log('');
groups = index_1.getGroupedByProperties(['admin'], persons);
console.log(groups);
/***************
 [
    [
       { name: [Object], email: 'd_jonesy500@yahoo.com', admin: false },
       { name: [Object], email: 'b_butler999@hotmail.com', admin: false },
       { name: [Object], email: 'd_jonesy500@yahoo.com', admin: false },
       { name: [Object], email: 'fergie100@yahoo.com', admin: false },
       { name: [Object], email: 'fergie100@yahoo.com', admin: false },
       { name: [Object], email: 'd_jonesy500@yahoo.com', admin: false },
       { name: [Object], email: 'b_butler999@hotmail.com', admin: false },
       { name: [Object], email: 'd_jonesy500@yahoo.com', admin: false }
    ],
    [
       { name: [Object], email: 'd_jonesy500@yahoo.com', admin: true },
       { name: [Object], email: 'watts_my_name@gmail.com', admin: true },
       { name: [Object], email: 'fergie100@yahoo.com', admin: true },
       { name: [Object], email: 'fergie100@yahoo.com', admin: true },
       { name: [Object], email: 'watts_my_name@gmail.com', admin: true },
       { name: [Object], email: 'watts_my_name@gmail.com', admin: true },
       { name: [Object], email: 'd_jonesy500@yahoo.com', admin: true },
       { name: [Object], email: 'watts_my_name@gmail.com', admin: true },
       { name: [Object], email: 'bbutler666@hotmail.com', admin: true },
       { name: [Object], email: 'bbutler666@hotmail.com', admin: true }
    ]
 ]
****************/ 
