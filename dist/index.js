import {getAndRemoveByIndex} from '@writetome51/array-get-and-remove-by-index';
import {getGroupedByProperty} from '@writetome51/get-grouped-by-property';
import {getMergedArrays} from '@writetome51/array-get-merged-arrays';
import {toStr} from '@writetome51/to-str';
import {errorIfNotObject} from 'error-if-not-object';
import {not} from '@writetome51/not';


// Returns `objects` separated into groups (sub-arrays).  Each group will contain objects with
// matching values of every property in `properties`.  You can customize how a match is determined
// with the optional `matchFunctions`.
// The `properties` can each contain dot-notation ( i.e, 'property.subproperty.subsubproperty' ).
// The order you list the `properties` determines the order the groups are returned in.

export function getGroupedByProperties(
	properties,
	objects,

	// `matchFunctions`: object.  Optional.  Any of its keys must match a property in `properties`.
	// The value of each key must be this type of function:  `(a, b) => boolean`
	// It's called to determine a match when grouping by the property matching that key.
	// If a matching key isn't provided for a particular property, the default matchFunction
	// `(a, b) => String(a) === String(b)` will be used for that property.

	matchFunctions = undefined
) {

	matchFunctions = check(matchFunctions);

	let property = getAndRemoveByIndex(0, properties);

	let groups = getGroupedByProperty(property, objects, matchFunctions[property]);

	return forEachProperty_splitEachGroupIntoGroups(properties, groups, matchFunctions);


	function check(matchFunctions) {
		matchFunctions ? errorIfNotObject(matchFunctions) : matchFunctions = {};

		for (let i = 0, length = properties.length; i < length; ++i) {
			if (not(matchFunctions[properties[i]]))
				matchFunctions[properties[i]] = getDefaultMatchFunction();
		}
		return matchFunctions;
	}


	function getDefaultMatchFunction() {
		return (a, b) => toStr(a) === toStr(b);
	}


	function forEachProperty_splitEachGroupIntoGroups(properties, groups, matchFunctions) {
		for (let pi = 0, propsLength = properties.length; pi < propsLength; ++pi) {
			property = properties[pi];

			for (let gi = 0, groupsLength = groups.length; gi < groupsLength; ++gi) {
				groups[gi] = getGroupedByProperty(property, groups[gi], matchFunctions[property]);
			}
			// So only the inner groups are preserved:
			groups = getMergedArrays(groups);
		}
		return groups;
	}

}
