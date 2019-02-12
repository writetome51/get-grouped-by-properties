import { getAndRemoveByIndex } from '@writetome51/array-get-and-remove-by-index';
import { getMergedArrays } from '@writetome51/array-get-merged-arrays';
import { getGroupedByProperty } from '@writetome51/get-grouped-by-property';

// Returns objects separated into groups.
// Each group contains objects with matching values of every property listed in parameter properties.
// Each property in properties can contain dot-notation.
// The order you list the properties matters.  The first property performs the initial sort, and all
// objects are separated into groups by that property.  All subsequent properties separate the groups
// into smaller, more specific groups.

export function getGroupedByProperties(properties: string[], objects): Array<Object[]> {
	let initialSortProperty = getAndRemoveByIndex(0, properties);
	let groups = getGroupedByProperty(initialSortProperty, objects);

	properties.forEach((property) => {
		groups.forEach((group, index) => {
			groups[index] = getGroupedByProperty(property, group);
		});
		// This is necessary so we don't get deeply nested arrays:
		groups = getMergedArrays(groups);
	});

	return groups;
}


// [  [[1,1], [1,1]],  [[2,2], [2,2]],  [[3,3], [3,3]],  [[4,4], [4,4]]  ]
// 
// After getting merged, they become:
// [ [1,1], [1,1], [2,2], [2,2], [3,3], [3,3], [4,4], [4,4] ]