"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_get_and_remove_by_index_1 = require("@writetome51/array-get-and-remove-by-index");
var array_get_merged_arrays_1 = require("@writetome51/array-get-merged-arrays");
var get_grouped_by_property_1 = require("@writetome51/get-grouped-by-property");
// Returns objects separated into groups.
// Each group contains objects with matching values of every property listed in parameter properties.
// Each property in properties can contain dot-notation.
// The order you list the properties matters.  The first property performs the initial sort, and all
// objects are separated into groups by that property.  All subsequent properties separate the groups
// into smaller, more specific groups.
function getGroupedByProperties(properties, objects) {
    var initialSortProperty = array_get_and_remove_by_index_1.getAndRemoveByIndex(0, properties);
    var groups = get_grouped_by_property_1.getGroupedByProperty(initialSortProperty, objects);
    properties.forEach(function (property) {
        groups.forEach(function (group, index) {
            groups[index] = get_grouped_by_property_1.getGroupedByProperty(property, group);
        });
        // This is necessary so we don't get deeply nested arrays:
        groups = array_get_merged_arrays_1.getMergedArrays(groups);
    });
    return groups;
}
exports.getGroupedByProperties = getGroupedByProperties;
// [  [[1,1], [1,1]],  [[2,2], [2,2]],  [[3,3], [3,3]],  [[4,4], [4,4]]  ]
// 
// After getting merged, they become:
// [ [1,1], [1,1], [2,2], [2,2], [3,3], [3,3], [4,4], [4,4] ]
