import { getAndRemoveByIndex } from '@writetome51/array-get-and-remove-by-index';
import { getMergedArrays } from '@writetome51/array-get-merged-arrays';
import { getGroupedByProperty } from '@writetome51/get-grouped-by-property';

// Returns `objects` separated into groups (sub-arrays).  Each group will contain
// objects with matching values of every property listed in `properties`.  The
// `properties` can each contain dot-notation ( i.e, 'property.subproperty.subsubproperty' ).
// The order you list the `properties` matters.  It influences the order the groups
// are returned in.

export function getGroupedByProperties(properties: string[], objects): Array<any[]> {
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