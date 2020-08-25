import { getAndRemoveByIndex } from '@writetome51/array-get-and-remove-by-index';
import { getGroupedByProperty } from '@writetome51/get-grouped-by-property';
import { getMergedArrays } from '@writetome51/array-get-merged-arrays';


// Returns `objects` separated into groups (sub-arrays).  Each group will contain
// objects with matching values of every property listed in `properties`.  You can
// customize how a match is determined with the optional callback `matchFound(valueA, valueB)`.
// The `properties` can each contain dot-notation ( i.e, 'property.subproperty.subsubproperty' ).
// The order you list the `properties` determines the order the groups are returned in.

export function getGroupedByProperties(
	properties: string[],
	objects: object[],
	matchFound = (a, b) => String(a) === String(b)
): Array<object[]> {

	let initialSortProperty = getAndRemoveByIndex(0, properties);
	let groups: Array<object[]> = getGroupedByProperty(initialSortProperty, objects, matchFound);

	for (let pI = 0, propsLength = properties.length; pI < propsLength; ++pI) {
		let property = properties[pI];

		for (let gI = 0, groupsLength = groups.length; gI < groupsLength; ++gI) {
			groups[gI] = getGroupedByProperty(property, groups[gI], matchFound);
		}
		// So only the inner groups are preserved:
		groups = getMergedArrays(groups);
	}
	return groups;
}
