import {getAndRemoveByIndex} from '@writetome51/array-get-and-remove-by-index';
import {getGroupedByProperty} from '@writetome51/get-grouped-by-property';
import {getMergedArrays} from '@writetome51/array-get-merged-arrays';
import {toStr} from '@writetome51/to-str';


// Returns `objects` separated into groups (sub-arrays).  Each group will contain objects with
// matching values of every property in `properties`.  You can customize how a match is determined
// with the optional `matchFunctions`.
// The `properties` can each contain dot-notation ( i.e, 'property.subproperty.subsubproperty' ).
// The order you list the `properties` determines the order the groups are returned in.

export function getGroupedByProperties(
	properties,
	objects,

	// `matchFunctions`:  Optional.  Must be object with keys identical to each property in
	// `properties`.  The value of each key must be this type of function:  `(a, b) => boolean`
	// It's called to determine a match when grouping by the property matching that particular key.
	// If a matching key isn't provided for a particular property, the default matchFunction
	// `(a, b) => String(a) === String(b)` will be used for that property.
	// If `matchFunctions` isn't provided, that default is used for all properties.

	matchFunctions
) {
	let property = getAndRemoveByIndex(0, properties);
	let groups = getGroupedByProperty(property, objects, getMatchFunction(property));

	for (let pi = 0, propsLength = properties.length; pi < propsLength; ++pi) {
		property = properties[pi];

		for (let gi = 0, groupsLength = groups.length; gi < groupsLength; ++gi) {
			groups[gi] = getGroupedByProperty(property, groups[gi], getMatchFunction(property));
		}
		// So only the inner groups are preserved:
		groups = getMergedArrays(groups);
	}
	return groups;


	function getMatchFunction(property) {
		return (matchFunctions && matchFunctions[property] ? matchFunctions[property]
			: (a, b) => toStr(a) === toStr(b));
	}
}
