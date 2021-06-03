import {getGroupedByProperties} from './index.js';
import {isArray} from '@writetome51/is-array-not-array';



let groups = getGroupedByProperties(['prop'], [{prop:1}]);

if (isArray(groups) && groups.length === 1 &&
	isArray(groups[0]) && groups[0].length === 1 &&
	groups[0][0].prop === 1

) console.log('test 0 passed');
else console.log('test 0 FAILED');


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
groups = getGroupedByProperties(['eyes'], persons);

if (isArray(groups) && groups.length === 4 &&
	groups[0].length === 2 &&
	groups[0][0].eyes === 'blue' && groups[0][0].hair === 'blonde' &&
	groups[0][1].eyes === 'blue' && groups[0][1].hair === 'red' &&

	groups[1].length === 3 &&
	groups[1][0].eyes === 'brown' && groups[1][1].eyes === 'brown' && groups[1][2].eyes === 'brown' &&

	groups[2].length === 3 &&
	groups[2][0].eyes === 'green' && groups[2][1].eyes === 'green' &&
	groups[2][2].eyes === 'green' &&

	groups[3].length === 1 &&
	groups[3][0].eyes === 'hazel'
) console.log('test 1 passed');
else console.log('test 1 FAILED');


groups = getGroupedByProperties(['eyes', 'hair'], persons);
if (isArray(groups) && groups.length === 8 &&
	groups[0].length === 1 &&
	groups[0][0].eyes === 'blue' && groups[0][0].hair === 'blonde' &&

	groups[1].length === 1 &&
	groups[1][0].eyes === 'blue' && groups[1][0].hair === 'red' &&

	groups[2].length === 1 &&
	groups[2][0].eyes === 'brown' && groups[2][0].hair === 'black' &&

	groups[3].length === 1 &&
	groups[3][0].eyes === 'brown' && groups[3][0].hair === 'blonde' &&

	groups[4].length === 1 &&
	groups[4][0].eyes === 'brown' && groups[4][0].hair === 'red' &&

	groups[5].length === 1 &&
	groups[5][0].eyes === 'green' && groups[5][0].hair === 'black' &&

	groups[6].length === 2 &&
	groups[6][0].eyes === 'green' && groups[6][0].hair === 'blonde' &&
	groups[6][1].eyes === 'green' && groups[6][1].hair === 'blonde' &&

	groups[7].length === 1 &&
	groups[7][0].eyes === 'hazel' && groups[7][0].hair === 'red'
) console.log('test 2 passed');
else console.log('test 2 FAILED');


persons = [
	{
		name: {first: 'Danny', last: 'Jones'}, address: '800 N. First St.'
	},
	{
		name: {first: 'Megan', last: 'Ferguson'}, address: '200 W. Elm St.'
	},
	{
		name: {first: 'Michael', last: 'Watts'}, address: '100 S. Palm Way'
	},
	{
		name: {first: 'William', last: 'Peltz'}, address: '2000 Lawrence Ave.'
	},
	{
		name: {first: 'Bill', last: 'Butler'}, address: '2000 Lawrence Ave.'
	},
	{
		name: {first: 'Robert', last: 'Walters'}, address: '200 W. Elm St.'
	},
	{
		name: {first: 'Sara', last: 'Watts'}, address: '100 S. Palm Way'
	},
	{
		name: {first: 'Carol', last: 'Jones'}, address: '800 N. First St.'
	},
	{
		name: {first: 'Bill', last: 'Butler'}, address: '6000 Raw Way'
	},
];
groups = getGroupedByProperties(['address', 'name.last'], persons);

if (isArray(groups) && groups.length === 7 &&
	groups[0].length === 2 &&
	groups[0][0].address === '100 S. Palm Way' && groups[0][0].name.last === 'Watts' &&
	groups[0][1].address === '100 S. Palm Way' && groups[0][1].name.last === 'Watts' &&

	groups[1].length === 1 &&
	groups[1][0].address === '200 W. Elm St.' && groups[1][0].name.last === 'Ferguson' &&

	groups[2].length === 1 &&
	groups[2][0].address === '200 W. Elm St.' && groups[2][0].name.last === 'Walters' &&

	groups[3].length === 1 &&
	groups[3][0].address === '2000 Lawrence Ave.' && groups[3][0].name.last === 'Butler' &&

	groups[4].length === 1 &&
	groups[4][0].address === '2000 Lawrence Ave.' && groups[4][0].name.last === 'Peltz' &&

	groups[5].length === 1 &&
	groups[5][0].address === '6000 Raw Way' && groups[5][0].name.last === 'Butler' &&

	groups[6].length === 2 &&
	groups[6][0].address === '800 N. First St.' && groups[6][0].name.last === 'Jones' &&
	groups[6][1].address === '800 N. First St.' && groups[6][1].name.last === 'Jones'
) console.log('test 3 passed');
else console.log('test 3 FAILED');


persons = [
	{name: {first: 'Danny', last: 'Jones'}, email: 'd_jonesy500@yahoo.com', admin: true},
	{name: {first: 'Danny', last: 'Jones'}, email: 'd_jonesy500@yahoo.com', admin: false},
	{name: {first: 'michael', last: 'watts'}, email: 'watts_my_name@gmail.com', admin: true},
	{name: {first: 'Michael', last: 'Watts'}, email: 'watts_my_name@gmail.com', admin: true},
	{name: {first: 'danny', last: 'jones'}, email: 'd_jonesy500@yahoo.com', admin: false}
];

groups = getGroupedByProperties(
	['name.last', 'email'],
	persons,
	{'$default': (a, b) => a.toLowerCase() === b.toLowerCase()}
);

if (isArray(groups) && groups.length === 2 &&
	groups[0].length === 3 &&
	groups[0][0].name.last.toLowerCase() === 'jones' &&
	groups[0][0].email === 'd_jonesy500@yahoo.com' &&
	groups[0][1].name.last.toLowerCase() === 'jones' &&
	groups[0][1].email === 'd_jonesy500@yahoo.com' &&
	groups[0][2].name.last.toLowerCase() === 'jones' &&
	groups[0][2].email === 'd_jonesy500@yahoo.com' &&

	groups[1].length === 2 &&
	groups[1][0].name.last.toLowerCase() === 'watts' &&
	groups[1][0].email === 'watts_my_name@gmail.com' &&
	groups[1][1].name.last.toLowerCase() === 'watts' &&
	groups[1][1].email === 'watts_my_name@gmail.com'
) console.log('test 4 passed');
else console.log('test 4 FAILED');


persons = [
	{name: {first: 'Danny', last: 'Rex'}, email: 'dajonesy500@yahoo.com', age: 21},
	{name: {first: 'Danny', last: 'Jon'}, email: 'dajonesy500@yahoo.com', age: 32},
	{name: {first: 'Danny', last: 'Hoe'}, email: 'djones100@yahoo.com', age: 45},
	{name: {first: 'Danny', last: 'Bly'}, email: 'djones100@yahoo.com', age: 39},
	{name: {first: 'Danny', last: 'Jon'}, email: 'dajonesy500@yahoo.com', age: 23},
	{name: {first: 'Danny', last: 'Hoe'}, email: 'daj500@yahoo.com', age: 11},
	{name: {first: 'Danny', last: 'Jon'}, email: 'djones100@yahoo.com', age: 38},
	{name: {first: 'Danny', last: 'Hoe'}, email: 'dajonesy500@yahoo.com', age: 18},
];

groups = getGroupedByProperties(
	['name.last', 'age'],
	persons,
	{
		'age': (a, b) => {
			let aRange = String(a)[0];
			let bRange = String(b)[0];
			return (aRange === bRange);
		}
	}
);

if (isArray(groups) && groups.length === 6 &&
	groups[0].length === 1 &&
	groups[0][0].name.last === 'Bly' && groups[0][0].age === 39 &&

	groups[1].length === 2 &&
	groups[1][0].name.last === 'Hoe' && groups[1][0].age === 11 &&
	groups[1][1].name.last === 'Hoe' && groups[1][1].age === 18 &&

	groups[2].length === 1 &&
	groups[2][0].name.last === 'Hoe' && groups[2][0].age === 45 &&

	groups[3].length === 1 &&
	groups[3][0].name.last === 'Jon' && groups[3][0].age === 23 &&

	groups[4].length === 2 &&
	groups[4][0].name.last === 'Jon' && groups[4][0].age === 32 &&
	groups[4][1].name.last === 'Jon' && groups[4][1].age === 38 &&

	groups[5].length === 1 &&
	groups[5][0].name.last === 'Rex' && groups[5][0].age === 21
) console.log('test 5 passed');
else console.log('test 5 FAILED');


persons = [
	{name: {first: 'Eddie'}, age: 102},
	{name: {first: 'Eddie'}, age: 32},
	{name: {first: 'Danny'}, age: 102},
	{name: {first: 'Eric'}, age: 25},
	{name: {first: 'Danny'}, age: 31},
	{name: {first: 'David'}, age: 100},
];
groups = getGroupedByProperties(
	// group by first character of first name:
	['name.first.0', 'age'],
	persons,
	// Separate ages between those younger than 100, and everyone else:
	{'age': (a, b) => a < 100 ? b < 100 : b >= 100}
);

if (isArray(groups) && groups.length === 4 &&
	groups[0].length === 1 &&
	groups[0][0].name.first === 'Danny' && groups[0][0].age === 31 &&

	groups[1].length === 2 &&
	groups[1][0].name.first === 'David' && groups[1][0].age === 100 &&
	groups[1][1].name.first === 'Danny' && groups[1][1].age === 102 &&

	groups[2].length === 2 &&
	groups[2][0].name.first === 'Eric' && groups[2][0].age === 25 &&
	groups[2][1].name.first === 'Eddie' && groups[2][1].age === 32 &&

	groups[3].length === 1 &&
	groups[3][0].name.first === 'Eddie' && groups[3][0].age === 102
) console.log('test 6 passed');
else console.log('test 6 FAILED');



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

groups = getGroupedByProperties(
	// group by first letter of first name, and age:
	['name.first.0', 'age'],
	persons,
	{
		'$default': (a, b) => a.toLowerCase() === b.toLowerCase(),
		// Separate ages between those younger than 100, and everyone else:
		'age': (a, b) => a < 100 ? b < 100 : b >= 100
	}
);
if (isArray(groups) && groups.length === 4 &&
	groups[0].length === 1 &&
	groups[0][0].name.first === 'Danny' && groups[0][0].age === 31 &&

	groups[1].length === 2 &&
	groups[1][0].name.first === 'David' && groups[1][0].age === 100 &&
	groups[1][1].name.first === 'danny' && groups[1][1].age === 102 &&

	groups[2].length === 2 &&
	groups[2][0].name.first === 'eric' && groups[2][0].age === 25 &&
	groups[2][1].name.first === 'Eddie' && groups[2][1].age === 32 &&

	groups[3].length === 1 &&
	groups[3][0].name.first === 'Eddie' && groups[3][0].age === 102
) console.log('test 7 passed');
else console.log('test 7 FAILED');
