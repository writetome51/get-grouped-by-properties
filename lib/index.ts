import { getGroupedByProperty } from '@writetome51/get-grouped-by-property';
import { getMergedArrays } from '@writetome51/array-get-merged-arrays';
import { toStr } from '@writetome51/to-str';
import { errorIfNotObject } from 'error-if-not-object';
import { not } from '@writetome51/not';


// Returns `objects` separated into groups (sub-arrays).  Each group will contain objects with
// matching values of every property in `properties`.  You can customize how a match is determined
// with the optional `matchFunctions`.
// The `properties` can each contain dot-notation ( i.e, 'property.subproperty.subsubproperty' ).
// The order you list the `properties` determines the order the groups are returned in.

export const getGroupedByProperties = <T>(
	properties: string[],
	objects: T[],

	// `matchFunctions`: object.  Optional.  Any of its keys must match a property in `properties`.
	// The value of each key must be this type of function:  `(a, b) => boolean`
	// It's called to determine a match when grouping by the property matching that key.
	// If a matching key isn't provided for a particular property, the default matchFunction
	// `(a, b) => String(a) === String(b)` will be used for that property.
	// You can change the default matchFunction with the key '$default'

	matchFunctions: { [property: string]: (a, b) => boolean } = undefined
): Array<T[]> => {

	matchFunctions = check(matchFunctions);

	let groups = getInitialGroupingByFirstProperty(properties, objects, matchFunctions);

	return forEachSubsequentProperty_splitEachGroupIntoGroups(properties, groups, matchFunctions);


	function check(matchFunctions) {
		matchFunctions ? errorIfNotObject(matchFunctions) : matchFunctions = {};
		const defaultFunc = getDefaultMatchFunction(matchFunctions['$default']);

		for (let i = 0, length = properties.length; i < length; ++i) {
			if (not(matchFunctions[properties[i]])) matchFunctions[properties[i]] = defaultFunc;
		}
		return matchFunctions;


		function getDefaultMatchFunction(usrProvidedFunc) {
			return (usrProvidedFunc ? usrProvidedFunc : (a, b) => toStr(a) === toStr(b));
		}
	}


	function getInitialGroupingByFirstProperty(properties, objects, matchFunctions): Array<T[]> {
		return getGroupedByProperty( properties[0], objects, matchFunctions[properties[0]] );
	}


	function forEachSubsequentProperty_splitEachGroupIntoGroups(
		properties, groups, matchFunctions
	) {
		// skipping first property:
		for (let pi = 1, numProps = properties.length; pi < numProps; ++pi) {
			let property = properties[pi];

			for (let gi = 0, numGroups = groups.length; gi < numGroups; ++gi) {
				groups[gi] = getGroupedByProperty(property, groups[gi], matchFunctions[property]);
			}
			// So only the inner groups are preserved:
			groups = getMergedArrays(groups); // Now each group won't contain sub-arrays.
		}
		return groups;
	}

}
